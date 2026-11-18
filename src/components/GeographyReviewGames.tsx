import React, { useState, useEffect, useCallback } from "react";
import {
  Gamepad2,
  Trophy,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Compass,
  Search,
  Users,
  ArrowUpDown,
  ChevronRight,
  Check,
  X,
  Globe,
  MapPin,
} from "lucide-react";
import { ExamRoom } from "./ExamRoom";
import {
  MILLIONAIRE_QUESTIONS,
  DETECTIVE_MYSTERIES,
  MEMORY_DECKS,
  RANK_CHALLENGES,
  RankChallenge,
} from "../data/reviewGamesData";

interface GeographyReviewGamesProps {
  onEarnXp?: (points: number) => void;
  onNavigateToTopic?: (topicId: string) => void;
  initialMode?: GameMode;
}

type GameMode = "lionSurvival" | "millionaire" | "detective" | "memory" | "rank";

interface MemoryCardState {
  id: string;
  pairId: number;
  text: string;
  subText: string;
  isFlipped: boolean;
  isMatched: boolean;
}

// Helper: normalize Vietnamese string for forgiving detective answer checks
const normalizeVi = (str: string) =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .trim();

// Shuffle array ensuring order isn't accidentally already solved for rank games
const shuffleRankOrder = (challenge: RankChallenge): string[] => {
  const correct = [...challenge.items].sort((a, b) => b.value - a.value).map((i) => i.id);
  let shuffled = [...challenge.items].sort(() => Math.random() - 0.5).map((i) => i.id);
  if (JSON.stringify(shuffled) === JSON.stringify(correct) && shuffled.length > 1) {
    [shuffled[0], shuffled[1]] = [shuffled[1], shuffled[0]];
  }
  return shuffled;
};

// Reusable, clean, non-flashy congratulatory banner for correct answers
const CorrectFeedbackBanner: React.FC<{
  title: string;
  detail?: string;
  xpReward?: string;
  darkSurface?: boolean;
}> = ({ title, detail, xpReward, darkSurface = false }) => (
  <div
    role="status"
    className={`animate-gentle-pop rounded-2xl border px-4 py-3.5 flex items-start sm:items-center justify-between gap-3 ${
      darkSurface
        ? "bg-emerald-950/80 border-emerald-500/60 text-emerald-50"
        : "bg-emerald-50 border-emerald-300 text-emerald-950"
    }`}
  >
    <div className="flex items-start sm:items-center gap-3">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
          darkSurface ? "bg-emerald-500 text-slate-950" : "bg-emerald-600 text-white"
        }`}
      >
        <Check className="w-4 h-4 stroke-[3]" />
      </div>
      <div>
        <div
          className={`font-extrabold text-sm ${
            darkSurface ? "text-emerald-200" : "text-emerald-900"
          }`}
        >
          {title}
        </div>
        {detail && (
          <p
            className={`text-xs mt-0.5 leading-relaxed ${
              darkSurface ? "text-emerald-100/90" : "text-emerald-800"
            }`}
          >
            {detail}
          </p>
        )}
      </div>
    </div>
    {xpReward && (
      <span
        className={`px-2.5 py-1 rounded-lg text-xs font-extrabold whitespace-nowrap shrink-0 tabular-nums ${
          darkSurface
            ? "bg-emerald-500/20 text-emerald-200 border border-emerald-400/40"
            : "bg-white text-emerald-800 border border-emerald-200"
        }`}
      >
        {xpReward}
      </span>
    )}
  </div>
);

export const GeographyReviewGames: React.FC<GeographyReviewGamesProps> = ({
  onEarnXp,
  onNavigateToTopic,
  initialMode = "lionSurvival",
}) => {
  const [activeGame, setActiveGame] = useState<GameMode>(initialMode);

  // State: Millionaire Game
  const [millIndex, setMillIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [millAnswered, setMillAnswered] = useState<boolean>(false);
  const [millWasCorrect, setMillWasCorrect] = useState<boolean>(false);
  const [eliminatedOptions, setEliminatedOptions] = useState<number[]>([]);
  const [used5050, setUsed5050] = useState<boolean>(false);
  const [usedHint, setUsedHint] = useState<boolean>(false);
  const [showHintModal, setShowHintModal] = useState<boolean>(false);
  const [usedAudience, setUsedAudience] = useState<boolean>(false);
  const [showAudienceModal, setShowAudienceModal] = useState<boolean>(false);
  const [millGameOver, setMillGameOver] = useState<boolean>(false);
  const [millScoreXp, setMillScoreXp] = useState<number>(0);

  // State: Detective Game
  const [detectiveIdx, setDetectiveIdx] = useState<number>(0);
  const [revealedClueCount, setRevealedClueCount] = useState<number>(1);
  const [userGuess, setUserGuess] = useState<string>("");
  const [detectiveSolved, setDetectiveSolved] = useState<boolean>(false);
  const [detectiveEarnedXp, setDetectiveEarnedXp] = useState<number>(0);
  const [detectiveError, setDetectiveError] = useState<string | null>(null);

  // State: Memory Match Game (multi-deck)
  const [selectedDeckIdx, setSelectedDeckIdx] = useState<number>(0);
  const currentMemoryDeck = MEMORY_DECKS[selectedDeckIdx];
  const [memoryCards, setMemoryCards] = useState<MemoryCardState[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [flipCount, setFlipCount] = useState<number>(0);
  const [matchedPairsCount, setMatchedPairsCount] = useState<number>(0);
  const [lastMatchedNotice, setLastMatchedNotice] = useState<string | null>(null);

  // State: Rank Game (8 challenge sets)
  const [rankCategoryFilter, setRankCategoryFilter] = useState<"Tất cả" | "Thế giới" | "Việt Nam">("Tất cả");
  const [rankChallengeIdx, setRankChallengeIdx] = useState<number>(0);
  const currentRankChallenge = RANK_CHALLENGES[rankChallengeIdx];
  const [currentOrder, setCurrentOrder] = useState<string[]>(() =>
    shuffleRankOrder(RANK_CHALLENGES[0])
  );
  const [rankChecked, setRankChecked] = useState<boolean>(false);
  const [rankIsCorrect, setRankIsCorrect] = useState<boolean>(false);

  const buildMemoryDeck = useCallback((deckIdx: number) => {
    const deck = MEMORY_DECKS[deckIdx];
    const flatCards = deck.pairs.flatMap((pair) => [
      { pairId: pair.pairId, text: pair.cardA.text, subText: pair.cardA.subText },
      { pairId: pair.pairId, text: pair.cardB.text, subText: pair.cardB.subText },
    ]);
    const shuffled: MemoryCardState[] = flatCards
      .sort(() => Math.random() - 0.5)
      .map((card, idx) => ({
        ...card,
        id: `${deck.id}-card-${idx}-${card.pairId}`,
        isFlipped: false,
        isMatched: false,
      }));
    setMemoryCards(shuffled);
    setFlippedCards([]);
    setFlipCount(0);
    setMatchedPairsCount(0);
    setLastMatchedNotice(null);
  }, []);

  useEffect(() => {
    if (activeGame === "memory") {
      buildMemoryDeck(selectedDeckIdx);
    }
  }, [activeGame, selectedDeckIdx, buildMemoryDeck]);

  // Millionaire actions
  const currentQ = MILLIONAIRE_QUESTIONS[millIndex];

  const handleSelectMillOption = (idx: number) => {
    if (millAnswered || millGameOver) return;
    setSelectedOption(idx);
    setMillAnswered(true);

    if (idx === currentQ.correctIndex) {
      setMillWasCorrect(true);
      const earned = currentQ.rewardXp;
      setMillScoreXp(earned);
      if (onEarnXp) onEarnXp(earned);

      setTimeout(() => {
        if (millIndex + 1 < MILLIONAIRE_QUESTIONS.length) {
          setMillIndex((prev) => prev + 1);
          setSelectedOption(null);
          setMillAnswered(false);
          setMillWasCorrect(false);
          setEliminatedOptions([]);
        } else {
          setMillGameOver(true);
        }
      }, 1600);
    } else {
      setMillWasCorrect(false);
      setTimeout(() => {
        setMillGameOver(true);
      }, 1300);
    }
  };

  const handleUse5050 = () => {
    if (used5050 || millAnswered) return;
    setUsed5050(true);
    const wrongIndices = [0, 1, 2, 3].filter((i) => i !== currentQ.correctIndex);
    setEliminatedOptions(wrongIndices.slice(0, 2));
  };

  const handleRestartMillionaire = () => {
    setMillIndex(0);
    setSelectedOption(null);
    setMillAnswered(false);
    setMillWasCorrect(false);
    setEliminatedOptions([]);
    setUsed5050(false);
    setUsedHint(false);
    setUsedAudience(false);
    setMillGameOver(false);
    setMillScoreXp(0);
  };

  // Detective actions
  const currentMystery = DETECTIVE_MYSTERIES[detectiveIdx];
  const handleRevealNextClue = () => {
    if (revealedClueCount < currentMystery.clues.length) {
      setRevealedClueCount((prev) => prev + 1);
      setDetectiveError(null);
    }
  };

  const handleGuessDetective = () => {
    if (!userGuess.trim()) return;
    const normalizedGuess = normalizeVi(userGuess);
    const isCorrect = currentMystery.acceptedKeywords.some((kw) =>
      normalizedGuess.includes(normalizeVi(kw))
    );
    if (isCorrect) {
      setDetectiveError(null);
      setDetectiveSolved(true);
      const points = 50 * (4 - revealedClueCount);
      setDetectiveEarnedXp(points);
      if (onEarnXp) onEarnXp(points);
    } else {
      setDetectiveError(
        "Chưa chính xác rồi! Bạn hãy mở thêm manh mối hoặc thử nhập tên địa danh/tỉnh ngắn gọn hơn nhé."
      );
    }
  };

  const handleNextMystery = () => {
    setDetectiveIdx((prev) => (prev + 1) % DETECTIVE_MYSTERIES.length);
    setRevealedClueCount(1);
    setUserGuess("");
    setDetectiveSolved(false);
    setDetectiveError(null);
    setDetectiveEarnedXp(0);
  };

  // Memory card click
  const handleCardClick = (index: number) => {
    if (
      flippedCards.length === 2 ||
      memoryCards[index].isFlipped ||
      memoryCards[index].isMatched
    ) {
      return;
    }

    const newCards = memoryCards.map((c, idx) =>
      idx === index ? { ...c, isFlipped: true } : c
    );
    setMemoryCards(newCards);

    const nextFlipped = [...flippedCards, index];
    setFlippedCards(nextFlipped);

    if (nextFlipped.length === 2) {
      setFlipCount((prev) => prev + 1);
      const [idx1, idx2] = nextFlipped;
      if (newCards[idx1].pairId === newCards[idx2].pairId) {
        const pairSummary = `${newCards[idx1].text} ↔ ${newCards[idx2].text}`;
        setTimeout(() => {
          setMemoryCards((prev) =>
            prev.map((c, i) =>
              i === idx1 || i === idx2 ? { ...c, isMatched: true } : c
            )
          );
          setFlippedCards([]);
          setLastMatchedNotice(pairSummary);
          setMatchedPairsCount((prev) => {
            const next = prev + 1;
            if (next === currentMemoryDeck.pairs.length && onEarnXp) {
              onEarnXp(120);
            }
            return next;
          });
        }, 380);
      } else {
        setTimeout(() => {
          setMemoryCards((prev) =>
            prev.map((c, i) =>
              i === idx1 || i === idx2 ? { ...c, isFlipped: false } : c
            )
          );
          setFlippedCards([]);
        }, 950);
      }
    }
  };

  // Rank Game actions
  const selectRankChallenge = (idx: number) => {
    setRankChallengeIdx(idx);
    setCurrentOrder(shuffleRankOrder(RANK_CHALLENGES[idx]));
    setRankChecked(false);
    setRankIsCorrect(false);
  };

  const moveRankItem = (index: number, direction: "up" | "down") => {
    if (rankChecked) return;
    const newOrder = [...currentOrder];
    const targetIdx = direction === "up" ? index - 1 : index + 1;
    if (targetIdx < 0 || targetIdx >= newOrder.length) return;
    const temp = newOrder[index];
    newOrder[index] = newOrder[targetIdx];
    newOrder[targetIdx] = temp;
    setCurrentOrder(newOrder);
  };

  const correctRankOrder = [...currentRankChallenge.items]
    .sort((a, b) => b.value - a.value)
    .map((it) => it.id);

  const handleCheckRank = () => {
    const isCorrect = JSON.stringify(currentOrder) === JSON.stringify(correctRankOrder);
    setRankChecked(true);
    setRankIsCorrect(isCorrect);
    if (isCorrect && onEarnXp) {
      onEarnXp(80);
    }
  };

  const handleResetRank = () => {
    setCurrentOrder(shuffleRankOrder(currentRankChallenge));
    setRankChecked(false);
    setRankIsCorrect(false);
  };

  const visibleRankChallenges = RANK_CHALLENGES.map((ch, idx) => ({ ch, idx })).filter(
    ({ ch }) => rankCategoryFilter === "Tất cả" || ch.category === rankCategoryFilter
  );

  return (
    <section className="py-10 bg-[#F8FAF9] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F5EF] text-[#146B5B] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-2">
            <Gamepad2 className="w-4 h-4 text-[#146B5B]" />
            <span>Đấu trường Trò chơi Ôn tập & Đề tham khảo Sinh tồn</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-[#16332F] tracking-tight">
            Trò Chơi Ôn Tập & Đề Tham Khảo Sinh Tồn
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2 max-w-3xl leading-relaxed font-normal">
            Ôn luyện toàn diện qua 5 chế độ trò chơi trí tuệ: Vượt Rừng Sư Tử, Ai Là Triệu Phú, Thám Tử Địa Danh, Lật Thẻ Trí Nhớ (6 bộ đề chuyên sâu) và Đấu Trường Xếp Hạng (8 bộ đề số liệu Việt Nam & Thế giới).
          </p>
        </div>

        {/* Game Mode Selector Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {[
            {
              id: "lionSurvival",
              label: "Vượt Rừng Sư Tử",
              icon: Gamepad2,
              badge: "Đề tham khảo",
              desc: "Đề thi sinh tồn: sai bị sư tử vồ, đúng tiến trạm an toàn",
            },
            {
              id: "millionaire",
              label: "Ai Là Triệu Phú",
              icon: Trophy,
              badge: "12 câu leo thang",
              desc: "12 câu hỏi nâng dần độ khó & 3 quyền trợ giúp",
            },
            {
              id: "detective",
              label: "Thám Tử Địa Danh",
              icon: Search,
              badge: `${DETECTIVE_MYSTERIES.length} vụ án`,
              desc: "Giải mã manh mối truy tìm địa danh nổi tiếng",
            },
            {
              id: "memory",
              label: "Lật Thẻ Trí Nhớ",
              icon: Sparkles,
              badge: `${MEMORY_DECKS.length} bộ đề`,
              desc: "Ghép cặp tỉnh thành, vùng miền, khí hậu, di sản & thế giới",
            },
            {
              id: "rank",
              label: "Đấu Trường Xếp Hạng",
              icon: ArrowUpDown,
              badge: `${RANK_CHALLENGES.length} bộ đề`,
              desc: "Xếp hạng diện tích, dân số các nước, sông, núi & tỉnh VN",
            },
          ].map((mode) => {
            const Icon = mode.icon;
            const isActive = activeGame === mode.id;
            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => setActiveGame(mode.id as GameMode)}
                className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? "bg-white border-[#146B5B] shadow-md ring-2 ring-[#146B5B]/20"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between mb-2 gap-1">
                  <span
                    className={`p-2 rounded-xl ${
                      isActive
                        ? "bg-[#146B5B] text-white"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </span>
                  <span
                    className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-lg whitespace-nowrap ${
                      isActive
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {isActive ? "Đang chơi" : mode.badge}
                  </span>
                </div>
                <div>
                  <h4 className="font-extrabold text-sm sm:text-base text-[#16332F]">
                    {mode.label}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium line-clamp-2">
                    {mode.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* GAME 0: VƯỢT RỪNG SƯ TỬ (ĐỀ THAM KHẢO SINH TỒN) */}
        {/* ========================================================================= */}
        {activeGame === "lionSurvival" && (
          <div className="rounded-3xl bg-white border border-slate-200 p-5 sm:p-7 shadow-sm mb-8">
            <div className="mb-6 pb-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider">
                  🦁 Chế độ chơi kiểm tra &amp; Đề thi tham khảo
                </span>
                <h3 className="text-2xl font-black font-display text-slate-900 mt-1">
                  Đấu Trường Vượt Rừng Sư Tử Sinh Tồn
                </h3>
                <p className="text-sm text-slate-600 mt-0.5">
                  Chọn đề kiểm tra (15 phút, 1 tiết, học kì, chuyên) và bắt đầu thử thách vượt rừng. Trả lời đúng sẽ được chúc mừng và tiến trạm an toàn!
                </p>
              </div>
            </div>
            <ExamRoom
              onEarnXp={onEarnXp}
              onNavigateToTopic={onNavigateToTopic}
              isEmbedded={true}
            />
          </div>
        )}

        {/* ========================================================================= */}
        {/* GAME 1: AI LÀ TRIỆU PHÚ ĐỊA LÍ */}
        {/* ========================================================================= */}
        {activeGame === "millionaire" && (
          <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-900 flex items-center justify-center font-black text-xl">
                  💰
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                    CÂU HỎI SỐ {millIndex + 1} / {MILLIONAIRE_QUESTIONS.length}
                  </span>
                  <h3 className="font-black text-lg sm:text-xl text-white tabular-nums">
                    Mức thưởng:{" "}
                    <span className="text-amber-400">
                      {currentQ.rewardXp.toLocaleString()} XP
                    </span>
                  </h3>
                </div>
              </div>

              {/* 3 Lifelines */}
              <div className="flex items-center gap-2 flex-wrap">
                <button
                  type="button"
                  disabled={used5050 || millGameOver}
                  onClick={handleUse5050}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 border ${
                    used5050
                      ? "bg-slate-800 text-slate-600 border-slate-700 cursor-not-allowed line-through"
                      : "bg-slate-800 text-amber-300 border-amber-400/40 hover:bg-slate-700 cursor-pointer"
                  }`}
                  title="Loại 2 phương án sai"
                >
                  <span>✂️ 50:50</span>
                </button>

                <button
                  type="button"
                  disabled={usedHint || millGameOver}
                  onClick={() => {
                    setUsedHint(true);
                    setShowHintModal(true);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 border ${
                    usedHint
                      ? "bg-slate-800 text-slate-600 border-slate-700 cursor-not-allowed line-through"
                      : "bg-slate-800 text-sky-300 border-sky-400/40 hover:bg-slate-700 cursor-pointer"
                  }`}
                  title="Tư vấn Chuyên gia Atlat"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Chuyên gia Atlat</span>
                </button>

                <button
                  type="button"
                  disabled={usedAudience || millGameOver}
                  onClick={() => {
                    setUsedAudience(true);
                    setShowAudienceModal(true);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 border ${
                    usedAudience
                      ? "bg-slate-800 text-slate-600 border-slate-700 cursor-not-allowed line-through"
                      : "bg-slate-800 text-rose-300 border-rose-400/40 hover:bg-slate-700 cursor-pointer"
                  }`}
                  title="Khán giả bình chọn"
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>Khán giả</span>
                </button>
              </div>
            </div>

            {/* Main Stage */}
            {!millGameOver ? (
              <div className="py-6 space-y-5 relative z-10">
                {/* Safe milestones indicator */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-slate-400 px-1 tabular-nums">
                  <span>Mốc 1 (Câu 5): 1.500 XP</span>
                  <span>Mốc 2 (Câu 10): 7.000 XP</span>
                  <span className="text-amber-400">Về đích (Câu 12): 10.000 XP</span>
                </div>

                {/* Question Box */}
                <div className="p-6 sm:p-7 rounded-2xl bg-slate-800/90 border border-slate-700 text-center">
                  <h4 className="text-lg sm:text-2xl font-black text-white leading-relaxed">
                    {currentQ.question}
                  </h4>
                </div>

                {/* 4 Options Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {currentQ.options.map((opt, oIdx) => {
                    const isEliminated = eliminatedOptions.includes(oIdx);
                    const isSelected = selectedOption === oIdx;
                    const isCorrect = oIdx === currentQ.correctIndex;

                    let btnStyle =
                      "bg-slate-800/90 border-slate-700 text-white hover:border-amber-400 hover:bg-slate-800";
                    if (isEliminated) {
                      btnStyle =
                        "bg-slate-900 border-slate-800 text-slate-700 cursor-not-allowed opacity-30";
                    } else if (millAnswered) {
                      if (isCorrect) {
                        btnStyle =
                          "bg-emerald-700 border-emerald-400 text-white font-black";
                      } else if (isSelected) {
                        btnStyle = "bg-rose-700 border-rose-400 text-white";
                      } else {
                        btnStyle = "bg-slate-800/50 border-slate-700 text-slate-500";
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        type="button"
                        disabled={isEliminated || millAnswered}
                        onClick={() => handleSelectMillOption(oIdx)}
                        className={`p-4 sm:p-5 rounded-2xl border-2 text-left font-bold transition-all cursor-pointer flex items-center justify-between gap-3 ${btnStyle}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center font-black text-amber-400 shrink-0">
                            {String.fromCharCode(65 + oIdx)}
                          </span>
                          <span className="text-sm sm:text-base">{opt}</span>
                        </div>
                        {millAnswered && isCorrect && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-200 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Tasteful Correct/Wrong Inline Feedback */}
                {millAnswered && millWasCorrect && (
                  <CorrectFeedbackBanner
                    darkSurface={true}
                    title={`Chính xác! Chúc mừng bạn đã vượt qua câu số ${millIndex + 1}!`}
                    detail="Đang chuyển sang câu hỏi tiếp theo..."
                    xpReward={`+${currentQ.rewardXp.toLocaleString()} XP`}
                  />
                )}
                {millAnswered && !millWasCorrect && (
                  <div className="animate-gentle-pop rounded-2xl border border-rose-500/60 bg-rose-950/70 px-4 py-3 text-xs sm:text-sm text-rose-100 flex items-center gap-2.5">
                    <AlertCircle className="w-4 h-4 text-rose-300 shrink-0" />
                    <span>
                      Rất tiếc, đáp án đúng là{" "}
                      <strong>{currentQ.options[currentQ.correctIndex]}</strong>.
                    </span>
                  </div>
                )}
              </div>
            ) : (
              /* Game Over / Victory Screen */
              <div className="py-10 text-center space-y-5 relative z-10 max-w-lg mx-auto animate-gentle-pop">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/15 border border-emerald-400/40 flex items-center justify-center text-3xl">
                  {millScoreXp >= 7000 ? "🏆" : millScoreXp >= 1500 ? "⭐" : "💡"}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {millScoreXp >= 10000
                    ? "Chúc Mừng! Bạn Là Triệu Phú Địa Lí!"
                    : millScoreXp >= 7000
                    ? "Chúc Mừng! Bạn Đạt Danh Hiệu Chuyên Gia!"
                    : "Bạn Đã Hoàn Thành Lượt Chơi!"}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed tabular-nums">
                  Tổng điểm kinh nghiệm tích lũy:{" "}
                  <strong className="text-amber-400 font-black text-xl">
                    {millScoreXp.toLocaleString()} XP
                  </strong>
                </p>
                <div className="pt-2 flex justify-center">
                  <button
                    type="button"
                    onClick={handleRestartMillionaire}
                    className="px-6 py-3 rounded-xl bg-amber-400 text-slate-950 font-black text-sm hover:bg-amber-300 transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Chơi lại lượt mới</span>
                  </button>
                </div>
              </div>
            )}

            {/* Hint Modal: Chuyên gia Atlat */}
            {showHintModal && (
              <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-slate-900 border border-sky-500/50 rounded-2xl max-w-md w-full p-6 space-y-4 text-left shadow-2xl">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Compass className="w-4 h-4" />
                      Tư vấn từ Chuyên gia Atlat
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowHintModal(false)}
                      className="text-slate-400 hover:text-white font-bold cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    <strong>Gợi ý chuyên sâu:</strong> &ldquo;{currentQ.hint}&rdquo;
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowHintModal(false)}
                    className="w-full py-2.5 rounded-xl bg-sky-600 text-white font-bold text-xs hover:bg-sky-500 cursor-pointer"
                  >
                    Đã hiểu, quay lại trả lời
                  </button>
                </div>
              </div>
            )}

            {/* Audience Poll Modal */}
            {showAudienceModal && (
              <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-slate-900 border border-rose-500/50 rounded-2xl max-w-md w-full p-6 space-y-4 text-left shadow-2xl">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Users className="w-4 h-4" />
                      Kết quả Khảo sát Khán giả
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowAudienceModal(false)}
                      className="text-slate-400 hover:text-white font-bold cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="space-y-3">
                    {currentQ.options.map((opt, oIdx) => (
                      <div key={oIdx} className="space-y-1">
                        <div className="flex justify-between text-xs font-bold text-slate-300">
                          <span>
                            {String.fromCharCode(65 + oIdx)}. {opt}
                          </span>
                          <span className="text-amber-400 tabular-nums">
                            {currentQ.audienceVotes[oIdx]}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div
                            className="bg-amber-400 h-2 rounded-full"
                            style={{ width: `${currentQ.audienceVotes[oIdx]}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowAudienceModal(false)}
                    className="w-full py-2.5 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-500 cursor-pointer"
                  >
                    Đóng bảng khảo sát
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* GAME 2: THÁM TỬ ĐỊA DANH (GEODETECTIVE) */}
        {/* ========================================================================= */}
        {activeGame === "detective" && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-black text-[#146B5B] uppercase tracking-wider">
                  VỤ ÁN SỐ {detectiveIdx + 1} / {DETECTIVE_MYSTERIES.length}
                </span>
                <h3 className="text-2xl font-black text-[#16332F] font-display mt-0.5">
                  {currentMystery.title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-lg text-xs font-extrabold bg-[#E8F5EF] text-[#146B5B]">
                  {currentMystery.category}
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-extrabold bg-amber-50 text-amber-900 border border-amber-200">
                  Độ khó: {currentMystery.difficulty}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
              {/* Image & Mystery photo (5 cols) */}
              <div className="lg:col-span-5 relative h-72 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
                <img
                  src={currentMystery.image}
                  alt={currentMystery.title}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    detectiveSolved ? "filter-none scale-102" : "blur-xs brightness-90"
                  }`}
                />
                {!detectiveSolved && (
                  <div className="absolute inset-0 bg-slate-950/35 flex items-center justify-center p-4 text-center">
                    <span className="px-4 py-2 rounded-xl bg-white/95 text-xs font-black text-slate-800 shadow-sm">
                      🔍 Hình ảnh đang được làm mờ bí ẩn
                    </span>
                  </div>
                )}
              </div>

              {/* Clues & Answer Box (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h4 className="font-black text-sm uppercase tracking-wider text-slate-500 mb-3">
                    Manh mối điều tra đã mở ({revealedClueCount} / {currentMystery.clues.length}):
                  </h4>
                  <div className="space-y-2.5">
                    {currentMystery.clues.slice(0, revealedClueCount).map((clue, cIdx) => (
                      <div
                        key={cIdx}
                        className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 font-medium leading-relaxed flex items-start gap-2.5"
                      >
                        <span className="w-5 h-5 rounded-full bg-[#146B5B] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                          {cIdx + 1}
                        </span>
                        <span>{clue}</span>
                      </div>
                    ))}
                  </div>

                  {revealedClueCount < currentMystery.clues.length && !detectiveSolved && (
                    <button
                      type="button"
                      onClick={handleRevealNextClue}
                      className="mt-3 text-xs font-bold text-[#146B5B] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>+ Mở khóa thêm 1 manh mối nữa (Điểm thưởng giảm nhẹ)</span>
                    </button>
                  )}
                </div>

                {/* Guess input */}
                {!detectiveSolved ? (
                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <label className="block text-xs font-extrabold text-slate-700 uppercase">
                      Nhập tên địa danh hoặc tỉnh bạn suy đoán:
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={userGuess}
                        onChange={(e) => {
                          setUserGuess(e.target.value);
                          if (detectiveError) setDetectiveError(null);
                        }}
                        onKeyDown={(e) => e.key === "Enter" && handleGuessDetective()}
                        placeholder="Ví dụ: Đèo Hải Vân, Cà Mau, Quảng Ninh, Phong Nha..."
                        className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#146B5B] focus:ring-1 focus:ring-[#146B5B]"
                      />
                      <button
                        type="button"
                        onClick={handleGuessDetective}
                        className="px-6 py-2.5 rounded-xl bg-[#146B5B] text-white font-black text-xs sm:text-sm hover:bg-[#0f5548] transition-colors cursor-pointer whitespace-nowrap"
                      >
                        Phá Án
                      </button>
                    </div>
                    {detectiveError && (
                      <div className="animate-gentle-pop p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-800 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                        <span>{detectiveError}</span>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-3.5 pt-2">
                    <CorrectFeedbackBanner
                      title={`Chính xác! Chúc mừng bạn đã phá án: ${currentMystery.targetName}`}
                      detail={currentMystery.explanation}
                      xpReward={`+${detectiveEarnedXp} XP`}
                    />
                    <button
                      type="button"
                      onClick={handleNextMystery}
                      className="px-5 py-2.5 rounded-xl bg-[#146B5B] text-white font-bold text-xs flex items-center gap-2 hover:bg-[#0f5548] cursor-pointer"
                    >
                      <span>Vụ án tiếp theo</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* GAME 3: LẬT THẺ TRÍ NHỚ (6 BỘ ĐỀ ĐA DẠNG) */}
        {/* ========================================================================= */}
        {activeGame === "memory" && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm text-left space-y-6">
            {/* Top Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#146B5B]">
                  {currentMemoryDeck.category} · Bộ đề {selectedDeckIdx + 1} / {MEMORY_DECKS.length}
                </span>
                <h3 className="text-2xl font-black text-[#16332F] font-display mt-0.5">
                  {currentMemoryDeck.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  {currentMemoryDeck.description}
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs sm:text-sm font-bold text-slate-700 tabular-nums">
                <span>
                  Lượt lật: <strong>{flipCount}</strong>
                </span>
                <span>
                  Đã ghép:{" "}
                  <strong className="text-[#146B5B]">
                    {matchedPairsCount} / {currentMemoryDeck.pairs.length}
                  </strong>
                </span>
                <button
                  type="button"
                  onClick={() => buildMemoryDeck(selectedDeckIdx)}
                  className="px-3 py-1.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 flex items-center gap-1.5 cursor-pointer text-xs font-bold whitespace-nowrap"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Xáo lại bài</span>
                </button>
              </div>
            </div>

            {/* 6 Deck Selector Buttons */}
            <div className="space-y-2">
              <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                Chọn chủ đề bộ thẻ muốn ôn tập ({MEMORY_DECKS.length} bộ đề):
              </div>
              <div className="flex flex-wrap gap-2">
                {MEMORY_DECKS.map((deck, idx) => {
                  const isSel = selectedDeckIdx === idx;
                  return (
                    <button
                      key={deck.id}
                      type="button"
                      onClick={() => setSelectedDeckIdx(idx)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                        isSel
                          ? "bg-[#146B5B] text-white border-[#146B5B] shadow-2xs"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-white hover:border-[#146B5B]/50"
                      }`}
                    >
                      {idx + 1}. {deck.shortTitle}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tasteful Pair-Match Celebration Strip */}
            {lastMatchedNotice && matchedPairsCount < currentMemoryDeck.pairs.length && (
              <CorrectFeedbackBanner
                key={`match-${matchedPairsCount}`}
                title="Chính xác! Chúc mừng bạn đã ghép đúng 1 cặp thẻ!"
                detail={lastMatchedNotice}
                xpReward={`${matchedPairsCount}/${currentMemoryDeck.pairs.length} cặp`}
              />
            )}

            {/* Grid of Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
              {memoryCards.map((card, idx) => {
                const isRevealed = card.isFlipped || card.isMatched;
                return (
                  <button
                    type="button"
                    key={card.id}
                    onClick={() => handleCardClick(idx)}
                    className={`h-36 rounded-2xl border-2 p-4 transition-all duration-200 cursor-pointer flex flex-col justify-between text-left select-none ${
                      card.isMatched
                        ? "bg-emerald-50 border-emerald-500 shadow-2xs"
                        : isRevealed
                        ? "bg-white border-[#146B5B] shadow-md"
                        : "bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-slate-500"
                    }`}
                  >
                    {isRevealed ? (
                      <>
                        <span
                          className={`text-[10px] font-black uppercase px-2 py-0.5 rounded w-max ${
                            card.isMatched
                              ? "bg-emerald-600 text-white"
                              : "text-[#146B5B] bg-[#E8F5EF]"
                          }`}
                        >
                          {card.isMatched ? "✓ Đã ghép đúng" : currentMemoryDeck.category}
                        </span>
                        <div>
                          <h4 className="font-extrabold text-sm text-[#16332F] leading-snug">
                            {card.text}
                          </h4>
                          <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                            {card.subText}
                          </p>
                        </div>
                      </>
                    ) : (
                      <div className="h-full w-full flex flex-col items-center justify-center text-slate-400 space-y-1.5">
                        <Compass className="w-6 h-6 text-emerald-400" />
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-300">
                          GLOW
                        </span>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Full Deck Completion Celebration */}
            {matchedPairsCount === currentMemoryDeck.pairs.length && (
              <div className="space-y-3">
                <CorrectFeedbackBanner
                  title={`Chúc mừng! Bạn đã hoàn thành trọn vẹn bộ thẻ "${currentMemoryDeck.shortTitle}"!`}
                  detail={`Bạn đã ghép đúng tất cả ${currentMemoryDeck.pairs.length} cặp thẻ trong ${flipCount} lượt lật.`}
                  xpReward="+120 XP"
                />
                <div className="flex flex-wrap items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedDeckIdx((prev) => (prev + 1) % MEMORY_DECKS.length)
                    }
                    className="px-5 py-2.5 rounded-xl bg-[#146B5B] text-white text-xs font-bold hover:bg-[#0f5548] cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Chơi bộ thẻ tiếp theo</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => buildMemoryDeck(selectedDeckIdx)}
                    className="px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-700 text-xs font-bold hover:bg-slate-50 cursor-pointer flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Chơi lại bộ này</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* GAME 4: ĐẤU TRƯỜNG XẾP HẠNG (GEORANK - 8 BỘ ĐỀ) */}
        {/* ========================================================================= */}
        {activeGame === "rank" && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm text-left space-y-6">
            {/* Header & Filter */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black text-[#1677B8] uppercase tracking-wider">
                    ĐẤU TRƯỜNG SỐ LIỆU · BỘ ĐỀ {rankChallengeIdx + 1}/{RANK_CHALLENGES.length}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-bold">
                    {currentRankChallenge.category}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-[#16332F] font-display mt-0.5">
                  {currentRankChallenge.title}
                </h3>
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl self-start lg:self-auto">
                {(["Tất cả", "Thế giới", "Việt Nam"] as const).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setRankCategoryFilter(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1 ${
                      rankCategoryFilter === cat
                        ? "bg-white text-[#16332F] shadow-2xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {cat === "Thế giới" && <Globe className="w-3.5 h-3.5" />}
                    {cat === "Việt Nam" && <MapPin className="w-3.5 h-3.5" />}
                    <span>{cat}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 8 Challenge Selector Chips */}
            <div className="flex flex-wrap gap-2">
              {visibleRankChallenges.map(({ ch, idx }) => {
                const isSel = rankChallengeIdx === idx;
                return (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() => selectRankChallenge(idx)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                      isSel
                        ? "bg-[#146B5B] text-white border-[#146B5B] shadow-2xs"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-white hover:border-[#146B5B]/50"
                    }`}
                  >
                    {idx + 1}. {ch.shortLabel}
                  </button>
                );
              })}
            </div>

            <p className="text-xs sm:text-sm text-slate-600">
              {currentRankChallenge.instruction} Dùng nút{" "}
              <strong>▲</strong> hoặc <strong>▼</strong> để điều chỉnh thứ tự từ cao xuống thấp (Hạng 1 cao nhất).
            </p>

            {/* List to Re-order */}
            <div className="space-y-2.5 max-w-3xl">
              {currentOrder.map((itemId, idx) => {
                const item = currentRankChallenge.items.find((it) => it.id === itemId)!;
                const isRowCorrect = rankChecked && correctRankOrder[idx] === itemId;
                const rowStyle = !rankChecked
                  ? "border-slate-200 bg-slate-50 hover:border-[#146B5B]"
                  : isRowCorrect
                  ? "border-emerald-400 bg-emerald-50/70"
                  : "border-rose-300 bg-rose-50/60";

                return (
                  <div
                    key={item.id}
                    className={`p-4 rounded-2xl border-2 flex items-center justify-between gap-4 transition-colors ${rowStyle}`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className={`w-8 h-8 rounded-xl border flex items-center justify-center font-black text-sm shrink-0 tabular-nums ${
                          rankChecked
                            ? isRowCorrect
                              ? "bg-emerald-600 text-white border-emerald-600"
                              : "bg-rose-600 text-white border-rose-600"
                            : "bg-white border-slate-300 text-slate-800"
                        }`}
                      >
                        {idx + 1}
                      </span>
                      <div className="min-w-0">
                        <h4 className="font-extrabold text-sm sm:text-base text-[#16332F]">
                          {item.name}
                        </h4>
                        <span className="text-xs text-slate-500 font-medium block">
                          {item.displayHint}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {rankChecked && (
                        <div className="text-right mr-1">
                          <span className="text-xs sm:text-sm font-black text-[#146B5B] tabular-nums block">
                            {item.value.toLocaleString("vi-VN")} {item.unit}
                          </span>
                          <span
                            className={`text-[11px] font-bold ${
                              isRowCorrect ? "text-emerald-700" : "text-rose-700"
                            }`}
                          >
                            {isRowCorrect
                              ? "✓ Đúng vị trí"
                              : `Hạng chuẩn: #${correctRankOrder.indexOf(itemId) + 1}`}
                          </span>
                        </div>
                      )}
                      {!rankChecked && (
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            disabled={idx === 0}
                            onClick={() => moveRankItem(idx, "up")}
                            className="w-8 h-8 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 disabled:opacity-30 cursor-pointer text-xs font-bold flex items-center justify-center"
                            title="Di chuyển lên"
                          >
                            ▲
                          </button>
                          <button
                            type="button"
                            disabled={idx === currentOrder.length - 1}
                            onClick={() => moveRankItem(idx, "down")}
                            className="w-8 h-8 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 disabled:opacity-30 cursor-pointer text-xs font-bold flex items-center justify-center"
                            title="Di chuyển xuống"
                          >
                            ▼
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Submit & Tasteful Feedback Bar */}
            <div className="pt-2 space-y-3 max-w-3xl">
              {!rankChecked ? (
                <button
                  type="button"
                  onClick={handleCheckRank}
                  className="px-6 py-2.5 rounded-xl bg-[#146B5B] text-white font-bold text-xs sm:text-sm shadow-xs hover:bg-[#0f5548] cursor-pointer"
                >
                  Kiểm tra thứ tự
                </button>
              ) : (
                <div className="space-y-3">
                  {rankIsCorrect ? (
                    <CorrectFeedbackBanner
                      title="Chính xác! Chúc mừng bạn đã sắp xếp hoàn toàn chuẩn xác!"
                      detail={`Bạn đã nắm vững toàn bộ số liệu của bộ đề "${currentRankChallenge.shortLabel}".`}
                      xpReward="+80 XP"
                    />
                  ) : (
                    <div className="animate-gentle-pop rounded-2xl border border-rose-300 bg-rose-50 px-4 py-3 text-xs sm:text-sm text-rose-900 flex items-center gap-2.5">
                      <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                      <span>
                        Chưa đúng hoàn toàn ở một số vị trí. Hãy xem số liệu và hạng chuẩn bên cạnh rồi thử lại nhé!
                      </span>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-2.5">
                    <button
                      type="button"
                      onClick={handleResetRank}
                      className="px-4 py-2 rounded-xl border border-slate-300 hover:bg-slate-50 text-xs font-bold text-slate-700 cursor-pointer flex items-center gap-1.5"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Xáo & thử lại</span>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        selectRankChallenge((rankChallengeIdx + 1) % RANK_CHALLENGES.length)
                      }
                      className="px-5 py-2 rounded-xl bg-[#146B5B] text-white hover:bg-[#0f5548] text-xs font-bold cursor-pointer flex items-center gap-1.5"
                    >
                      <span>Bộ đề tiếp theo</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
