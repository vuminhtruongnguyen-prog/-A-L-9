import React, { useState, useEffect } from "react";
import { MOCK_EXAMS } from "../data/curriculumData";
import { MockExam, ExamQuestion } from "../types";
import { 
  Gamepad2, 
  Trophy, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  RotateCcw, 
  Award, 
  ChevronRight, 
  ArrowRight, 
  Heart, 
  Flame, 
  Sparkles, 
  ShieldAlert, 
  Compass, 
  Mountain, 
  TreePine, 
  Skull, 
  Zap,
  Play,
  Check,
  X,
  BookOpen
} from "lucide-react";

interface ExamRoomProps {
  onEarnXp?: (points: number) => void;
  onNavigateToTopic?: (topicId: string) => void;
  isEmbedded?: boolean;
}

type GameTheme = "lionForest" | "fansipan" | "ocean";

export const ExamRoom: React.FC<ExamRoomProps> = ({ 
  onEarnXp, 
  onNavigateToTopic,
  isEmbedded = false
}) => {
  // Selected Exam and Game Theme
  const [selectedExamId, setSelectedExamId] = useState<string>(MOCK_EXAMS[0].id);
  const currentExam: MockExam = MOCK_EXAMS.find((e) => e.id === selectedExamId) || MOCK_EXAMS[0];
  const [selectedTheme, setSelectedTheme] = useState<GameTheme>("lionForest");

  // Game Play States
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [lives, setLives] = useState<number>(3);
  const [maxLives] = useState<number>(3);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [isVictory, setIsVictory] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [lastAnswerStatus, setLastAnswerStatus] = useState<"none" | "correct" | "wrong">("none");
  const [streak, setStreak] = useState<number>(0);
  const [showExplanationModal, setShowExplanationModal] = useState<boolean>(false);
  const [timeSpentSeconds, setTimeSpentSeconds] = useState<number>(0);

  // Timer
  useEffect(() => {
    let timer: any = null;
    if (isPlaying && !isGameOver && !isVictory) {
      timer = setInterval(() => {
        setTimeSpentSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, isGameOver, isVictory]);

  const questions: ExamQuestion[] = currentExam.questions;
  const currentQ: ExamQuestion = questions[currentIdx] || questions[0];
  const totalQuestions = questions.length;

  const handleStartGame = () => {
    setIsPlaying(true);
    setCurrentIdx(0);
    setLives(3);
    setIsGameOver(false);
    setIsVictory(false);
    setUserAnswers({});
    setLastAnswerStatus("none");
    setStreak(0);
    setTimeSpentSeconds(0);
    setShowExplanationModal(false);
  };

  const handleSelectOption = (optionIndex: number) => {
    if (lastAnswerStatus !== "none" || isGameOver || isVictory) return;

    const isCorrect = optionIndex === currentQ.correctAnswer;
    setUserAnswers((prev) => ({ ...prev, [currentQ.id]: optionIndex }));

    if (isCorrect) {
      setLastAnswerStatus("correct");
      setStreak((prev) => prev + 1);
      if (onEarnXp) {
        onEarnXp(25 + (streak >= 3 ? 10 : 0));
      }
    } else {
      setLastAnswerStatus("wrong");
      setStreak(0);
      const nextLives = lives - 1;
      setLives(nextLives);
      if (nextLives <= 0) {
        setIsGameOver(true);
      }
    }
  };

  const handleNextStation = () => {
    setLastAnswerStatus("none");
    setShowExplanationModal(false);
    if (currentIdx + 1 >= totalQuestions) {
      setIsVictory(true);
      if (onEarnXp) {
        onEarnXp(150); // Huge bonus for clearing the full exam game!
      }
    } else {
      setCurrentIdx((prev) => prev + 1);
    }
  };

  const handleRevive = () => {
    setLives(3);
    setIsGameOver(false);
    setLastAnswerStatus("none");
    setShowExplanationModal(false);
  };

  // Score calculation
  const correctCount = Object.entries(userAnswers).filter(
    ([qId, ansIdx]) => questions.find((q) => q.id === qId)?.correctAnswer === ansIdx
  ).length;
  const scoreOutOf10 = totalQuestions > 0 ? ((correctCount / totalQuestions) * 10).toFixed(1) : "0.0";

  // Format time MM:SS
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, "0")}:${remainder.toString().padStart(2, "0")}`;
  };

  const content = (
    <div className="space-y-6 text-left">
      {!isEmbedded && (
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 text-rose-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-2 border border-rose-200">
            <Gamepad2 className="w-4 h-4" />
            <span>Đấu Trường Kiểm Tra Sinh Tồn • Chuyển Hóa 100% Đề Thi Thành Trò Chơi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900 tracking-tight">
            Đề Tham Khảo & Trò Chơi Ôn Tập Sinh Tồn
          </h2>
          <p className="text-base sm:text-lg text-slate-700 mt-2 max-w-3xl leading-relaxed font-normal">
            Toàn bộ các đề kiểm tra 15 phút, 1 tiết, đề thi học kì và đề thi Chuyên Địa lí lớp 10 được chuyển hóa thành hình thức trò chơi sinh tồn gay cấn: Trả lời đúng để vượt qua các trạm rừng bí hiểm, trả lời sai sẽ bị thú dữ tấn công!
          </p>
        </div>
      )}

      {!isPlaying ? (
          /* ========================================================================= */
          /* LOBBY: CHỌN ĐỀ THI & HÌNH THỨC TRÒ CHƠI */
          /* ========================================================================= */
          <div className="space-y-6">
            {/* Banner Flagship: Vượt Rừng Sư Tử */}
            <div className="bg-gradient-to-r from-amber-900 via-rose-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border-2 border-amber-500/40">
              <div className="relative z-10 max-w-2xl">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider mb-3">
                  🦁 Trò chơi kiểm tra sinh tồn tiêu điểm
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight">
                  Vượt Rừng Sư Tử Sinh Tồn (Lion Forest Survival)
                </h3>
                <p className="text-sm sm:text-base text-amber-100 mt-2 leading-relaxed">
                  Bạn là nhà thám hiểm địa lí lạc vào khu rừng rậm châu Phi bí ẩn. Phía sau bạn là con sư tử săn mồi hung dữ đang rình rập! Mỗi câu hỏi địa lí là một trạm rừng sinh tử:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-xs font-bold">
                  <div className="p-3 bg-emerald-950/60 rounded-xl border border-emerald-500/50 flex items-center gap-2 text-emerald-200">
                    <span className="text-lg">🏃</span>
                    <span>Trả lời ĐÚNG: Lao nhanh về phía trước, tiến thêm 1 trạm an toàn!</span>
                  </div>
                  <div className="p-3 bg-rose-950/60 rounded-xl border border-rose-500/50 flex items-center gap-2 text-rose-200">
                    <span className="text-lg">🦁</span>
                    <span>Trả lời SAI: Sư tử lao tới vồ ăn thịt, mất 1 mạng sinh lực!</span>
                  </div>
                </div>
              </div>

              <div className="absolute right-4 bottom-2 text-8xl sm:text-9xl opacity-20 pointer-events-none select-none">
                🦁
              </div>
            </div>

            {/* Choose Game Mode Theme */}
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-5 shadow-sm">
              <h4 className="text-sm font-black uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#146B5B]" />
                <span>1. Chọn hình thức trò chơi kiểm tra:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => setSelectedTheme("lionForest")}
                  className={`p-4 rounded-xl border-2 text-left cursor-pointer transition-all flex flex-col justify-between ${
                    selectedTheme === "lionForest"
                      ? "border-amber-500 bg-amber-50/70 shadow-xs"
                      : "border-slate-200 hover:border-slate-300 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">🦁</span>
                    {selectedTheme === "lionForest" && <span className="text-xs font-black text-amber-600">Đang chọn ✓</span>}
                  </div>
                  <div className="font-black text-sm text-slate-900">Vượt Rừng Sư Tử</div>
                  <p className="text-xs text-slate-600 mt-1">Sai bị sư tử ăn thịt, đúng thoát hiểm qua các trạm rừng.</p>
                </button>

                <button
                  onClick={() => setSelectedTheme("fansipan")}
                  className={`p-4 rounded-xl border-2 text-left cursor-pointer transition-all flex flex-col justify-between ${
                    selectedTheme === "fansipan"
                      ? "border-sky-500 bg-sky-50/70 shadow-xs"
                      : "border-slate-200 hover:border-slate-300 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">🏔️</span>
                    {selectedTheme === "fansipan" && <span className="text-xs font-black text-sky-600">Đang chọn ✓</span>}
                  </div>
                  <div className="font-black text-sm text-slate-900">Chinh Phục Fansipan</div>
                  <p className="text-xs text-slate-600 mt-1">Vượt 3.143m đỉnh nóc nhà Đông Dương, sai bị đá lở sương mù.</p>
                </button>

                <button
                  onClick={() => setSelectedTheme("ocean")}
                  className={`p-4 rounded-xl border-2 text-left cursor-pointer transition-all flex flex-col justify-between ${
                    selectedTheme === "ocean"
                      ? "border-teal-500 bg-teal-50/70 shadow-xs"
                      : "border-slate-200 hover:border-slate-300 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">🌊</span>
                    {selectedTheme === "ocean" && <span className="text-xs font-black text-teal-600">Đang chọn ✓</span>}
                  </div>
                  <div className="font-black text-sm text-slate-900">Hải Trình Vượt Biển</div>
                  <p className="text-xs text-slate-600 mt-1">Chèo thuyền vượt bão tố Biển Đông cập bến Đảo Ngọc Phú Quốc.</p>
                </button>
              </div>
            </div>

            {/* Choose Exam Package to Play */}
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-5 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-sm font-black uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#146B5B]" />
                    <span>2. Chọn bộ đề tham khảo muốn chơi ({MOCK_EXAMS.length} gói đề kiểm tra):</span>
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Mỗi gói đề tương ứng với số trạm rừng sinh tồn cần vượt qua
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {MOCK_EXAMS.map((exam) => {
                  const isSelected = selectedExamId === exam.id;
                  return (
                    <div
                      key={exam.id}
                      onClick={() => setSelectedExamId(exam.id)}
                      className={`p-4 rounded-xl border-2 text-left cursor-pointer transition-all flex flex-col justify-between ${
                        isSelected
                          ? "border-[#146B5B] bg-[#E8F5EF]/60 shadow-xs scale-[1.01]"
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                            {exam.type}
                          </span>
                          <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                            {exam.questions.length} trạm câu hỏi
                          </span>
                        </div>
                        <h5 className="font-black text-sm text-slate-900 leading-snug">
                          {exam.title}
                        </h5>
                        <p className="text-xs text-slate-600 mt-1.5 line-clamp-2">
                          {exam.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span className="text-slate-500 font-medium flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>Thời lượng: {exam.timeLimitMinutes} phút</span>
                        </span>
                        <span className="font-bold text-[#146B5B] flex items-center gap-1">
                          <span>{isSelected ? "Đã chọn" : "Chọn đề"}</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Start Button */}
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-200">
                <div className="text-xs text-slate-600">
                  Đã chọn: <strong className="text-slate-900">{currentExam.title}</strong> ({currentExam.questions.length} câu)
                </div>
                <button
                  onClick={handleStartGame}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 via-rose-600 to-rose-700 text-white font-black text-sm hover:brightness-110 active:scale-95 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>BẮT ĐẦU VƯỢT RỪNG SINH TỒN ({currentExam.questions.length} TRẠM)</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* ========================================================================= */
          /* IN-GAME EXPERIENCE: VƯỢT RỪNG SƯ TỬ SINH TỒN */
          /* ========================================================================= */
          <div className="space-y-6">
            {/* Game Status Bar */}
            <div className="bg-slate-900 text-white p-4 sm:p-5 rounded-2xl shadow-lg border border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="text-3xl">
                  {selectedTheme === "lionForest" ? "🦁" : selectedTheme === "fansipan" ? "🏔️" : "🌊"}
                </div>
                <div>
                  <div className="text-xs text-amber-400 font-black uppercase tracking-wider">
                    {selectedTheme === "lionForest" ? "Rừng rậm nguy hiểm" : selectedTheme === "fansipan" ? "Đỉnh Fansipan 3.143m" : "Hải trình Biển Đông"}
                  </div>
                  <h3 className="text-sm sm:text-base font-black text-white">
                    Trạm {currentIdx + 1} / {totalQuestions}
                  </h3>
                </div>
              </div>

              {/* Lives / Hearts */}
              <div className="flex items-center gap-1.5 bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700">
                <span className="text-xs font-bold text-slate-300 mr-1.5 uppercase">Sinh lực:</span>
                {Array.from({ length: maxLives }).map((_, i) => (
                  <Heart
                    key={i}
                    className={`w-5 h-5 transition-transform ${
                      i < lives
                        ? "fill-rose-500 text-rose-500 scale-110"
                        : "text-slate-600 fill-slate-700"
                    }`}
                  />
                ))}
              </div>

              {/* Progress & Timer */}
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1.5 text-slate-300 font-bold">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>{formatTime(timeSpentSeconds)}</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-400 font-black bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-800">
                  <Flame className="w-4 h-4" />
                  <span>Combo: {streak}</span>
                </div>
                <button
                  onClick={() => setIsPlaying(false)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-bold cursor-pointer transition-colors"
                >
                  Thoát
                </button>
              </div>
            </div>

            {/* Visual Stage Banner: Jungle Trail & Lion Animation */}
            <div className="relative h-44 sm:h-52 bg-gradient-to-b from-[#1b3b22] to-[#0f2415] rounded-3xl overflow-hidden border-2 border-emerald-800 shadow-inner p-4 sm:p-6 flex flex-col justify-between">
              {/* Background forest silhouettes */}
              <div className="absolute inset-0 opacity-20 pointer-events-none flex justify-around items-end text-6xl">
                <span>🌲</span><span>🌳</span><span>🌴</span><span>🌲</span><span>🌳</span>
              </div>

              {/* Trail Progress indicator */}
              <div className="relative z-10 w-full">
                <div className="flex justify-between text-[11px] font-black uppercase text-amber-300 mb-1">
                  <span>Trạm xuất phát</span>
                  <span>Bìa rừng an toàn (Thoát hiểm)</span>
                </div>
                <div className="h-3 w-full bg-slate-950/80 rounded-full overflow-hidden p-0.5 border border-emerald-900/60">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 rounded-full transition-all duration-500"
                    style={{ width: `${((currentIdx + 1) / totalQuestions) * 100}%` }}
                  />
                </div>
              </div>

              {/* Character vs Lion Dynamic Stage */}
              <div className="relative z-10 flex items-center justify-between px-4 sm:px-10">
                {/* Lion */}
                <div className={`flex flex-col items-center transition-all duration-500 ${
                  lastAnswerStatus === "wrong" ? "scale-125 text-rose-400 translate-x-8" : "scale-100"
                }`}>
                  <span className="text-5xl sm:text-6xl animate-pulse">🦁</span>
                  <span className="text-[10px] font-black text-rose-300 bg-rose-950/80 px-2 py-0.5 rounded mt-1 border border-rose-800">
                    {lastAnswerStatus === "wrong" ? "GẦM! ĐANG VỒ TỚI!" : "Đang rình rập"}
                  </span>
                </div>

                {/* Distance trail dots */}
                <div className="flex-1 max-w-xs mx-4 flex items-center justify-around text-xs text-emerald-400/40">
                  <span>🐾</span><span>•</span><span>•</span><span>🐾</span><span>•</span><span>🐾</span>
                </div>

                {/* Player Explorer */}
                <div className={`flex flex-col items-center transition-all duration-500 ${
                  lastAnswerStatus === "correct" ? "scale-125 text-emerald-300 -translate-y-2" : "scale-100"
                }`}>
                  <span className="text-5xl sm:text-6xl animate-bounce">🏃</span>
                  <span className="text-[10px] font-black text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded mt-1 border border-emerald-800">
                    {lastAnswerStatus === "correct" ? "BỨT TỐC AN TOÀN!" : "Bạn (Nhà thám hiểm)"}
                  </span>
                </div>
              </div>
            </div>

            {/* GAME OVER SCREEN */}
            {isGameOver && (
              <div className="bg-rose-950 border-2 border-rose-600 rounded-3xl p-6 sm:p-8 text-white text-center space-y-4 shadow-2xl animate-shake">
                <div className="text-6xl animate-bounce">☠️</div>
                <h3 className="text-2xl sm:text-3xl font-black text-rose-300 font-display">
                  BẠN ĐÃ BỊ SƯ TỬ ĂN THỊT TẠI TRẠM {currentIdx + 1}!
                </h3>
                <p className="text-sm sm:text-base text-rose-100 max-w-xl mx-auto leading-relaxed">
                  Rất tiếc! Do trả lời sai 3 lần, bạn đã bị sư tử đuổi kịp và bắt sống giữa khu rừng rậm. Nhưng đừng nản lòng, kiến thức địa lí sẽ giúp bạn thoát khỏi mọi cạm bẫy!
                </p>
                <div className="p-4 bg-black/40 rounded-2xl max-w-md mx-auto text-xs text-rose-200 text-left space-y-1">
                  <div><strong>Câu hỏi vừa sai:</strong> {currentQ.question}</div>
                  <div><strong>Đáp án đúng là:</strong> {currentQ.options[currentQ.correctAnswer]}</div>
                  <div className="text-amber-300"><strong>Giải thích:</strong> {currentQ.explanation}</div>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleRevive}
                    className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm cursor-pointer shadow-md flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Hồi Sinh Thần Kỳ (Thử Lại Trạm Này)</span>
                  </button>
                  <button
                    onClick={handleStartGame}
                    className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm cursor-pointer"
                  >
                    Bắt Đầu Lại Từ Đầu
                  </button>
                </div>
              </div>
            )}

            {/* VICTORY SCREEN */}
            {isVictory && (
              <div className="bg-emerald-950 border-2 border-emerald-500 rounded-3xl p-6 sm:p-8 text-white text-center space-y-5 shadow-2xl animate-fadeIn">
                <div className="text-6xl animate-bounce">🏆</div>
                <h3 className="text-2xl sm:text-3xl font-black text-emerald-300 font-display">
                  CHÚC MỪNG BẠN ĐÃ THOÁT KHỎI KHU RÙNG SƯ TỬ THÀNH CÔNG!
                </h3>
                <p className="text-sm sm:text-base text-emerald-100 max-w-xl mx-auto leading-relaxed">
                  Xuất sắc vượt qua toàn bộ {totalQuestions} trạm rừng đầy hiểm trở của đề kiểm tra! Bạn đã chứng minh kiến thức địa lí tuyệt đỉnh và phản xạ sinh tồn kiên cường.
                </p>

                {/* Score Summary Badge */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto">
                  <div className="p-3 bg-white/10 rounded-xl border border-emerald-500/40">
                    <div className="text-[10px] uppercase font-bold text-emerald-300">Điểm số (Thang 10)</div>
                    <div className="text-2xl font-black text-white">{scoreOutOf10} / 10</div>
                  </div>
                  <div className="p-3 bg-white/10 rounded-xl border border-emerald-500/40">
                    <div className="text-[10px] uppercase font-bold text-emerald-300">Số câu đúng</div>
                    <div className="text-2xl font-black text-white">{correctCount} / {totalQuestions}</div>
                  </div>
                  <div className="p-3 bg-white/10 rounded-xl border border-emerald-500/40">
                    <div className="text-[10px] uppercase font-bold text-emerald-300">Sinh lực còn lại</div>
                    <div className="text-2xl font-black text-rose-400">{"❤️".repeat(lives)}</div>
                  </div>
                  <div className="p-3 bg-white/10 rounded-xl border border-emerald-500/40">
                    <div className="text-[10px] uppercase font-bold text-emerald-300">Thời gian</div>
                    <div className="text-2xl font-black text-amber-300">{formatTime(timeSpentSeconds)}</div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                  <button
                    onClick={handleStartGame}
                    className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs sm:text-sm cursor-pointer shadow-md flex items-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Chơi Lại Đề Này</span>
                  </button>
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm cursor-pointer"
                  >
                    Chọn Đề Khác Trong Đấu Trường
                  </button>
                </div>
              </div>
            )}

            {/* ACTIVE QUESTION CARD (when game is neither over nor victory) */}
            {!isGameOver && !isVictory && (
              <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 sm:p-7 shadow-sm space-y-5">
                {/* Header of Question */}
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-[#146B5B] text-white text-xs font-black">
                      Trạm rừng số {currentIdx + 1}
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      Mức độ: {currentQ.level} • {currentQ.topicName}
                    </span>
                  </div>
                  {currentQ.atlatReference && (
                    <span className="text-xs font-bold text-[#1677B8] bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200">
                      📖 {currentQ.atlatReference}
                    </span>
                  )}
                </div>

                {/* Question Prompt */}
                <h4 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                  {currentQ.question}
                </h4>

                {/* 4 Options Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {currentQ.options.map((option, oIdx) => {
                    const isSelected = userAnswers[currentQ.id] === oIdx;
                    const isCorrect = oIdx === currentQ.correctAnswer;

                    let btnStyle = "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300";
                    if (lastAnswerStatus !== "none") {
                      if (isCorrect) {
                        btnStyle = "bg-emerald-100 border-emerald-500 text-emerald-950 font-black shadow-xs";
                      } else if (isSelected) {
                        btnStyle = "bg-rose-100 border-rose-500 text-rose-950 font-bold";
                      } else {
                        btnStyle = "bg-slate-50 border-slate-200 text-slate-400 opacity-60";
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        disabled={lastAnswerStatus !== "none"}
                        onClick={() => handleSelectOption(oIdx)}
                        className={`p-4 rounded-xl border-2 text-left cursor-pointer transition-all flex items-start gap-3 text-xs sm:text-sm font-medium ${btnStyle}`}
                      >
                        <span className="w-6 h-6 rounded-lg bg-white border border-slate-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                        <span className="leading-relaxed">{option}</span>
                      </button>
                    );
                  })}
                </div>

                {/* FEEDBACK & NEXT BUTTON */}
                {lastAnswerStatus !== "none" && (
                  <div className={`p-4 sm:p-5 rounded-xl border-2 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    lastAnswerStatus === "correct"
                      ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                      : "bg-rose-50 border-rose-300 text-rose-950"
                  }`}>
                    <div className="space-y-1">
                      <div className="font-black text-sm flex items-center gap-2">
                        {lastAnswerStatus === "correct" ? (
                          <>
                            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                            <span>CHÍNH XÁC! Bạn thoát hiểm an toàn qua trạm này! (+25 XP)</span>
                          </>
                        ) : (
                          <>
                            <AlertCircle className="w-5 h-5 text-rose-600" />
                            <span>BỊ SƯ TỬ VỒ LẤY! Bạn mất 1 mạng sinh lực!</span>
                          </>
                        )}
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed font-normal">
                        <strong>Giải thích:</strong> {currentQ.explanation}
                      </p>
                    </div>

                    <button
                      onClick={handleNextStation}
                      className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-black text-xs hover:bg-slate-800 active:scale-95 transition-all cursor-pointer shrink-0 shadow-xs flex items-center justify-center gap-1.5"
                    >
                      <span>{currentIdx + 1 >= totalQuestions ? "Hoàn thành vượt rừng" : "Trạm tiếp theo"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
    </div>
  );

  if (isEmbedded) {
    return content;
  }

  return (
    <section className="py-10 bg-[#F4F7F6] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {content}
      </div>
    </section>
  );
};
