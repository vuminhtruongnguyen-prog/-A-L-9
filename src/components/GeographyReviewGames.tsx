import React, { useState, useEffect } from "react";
import { 
  Gamepad2, 
  Trophy, 
  HelpCircle, 
  RotateCcw, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Compass, 
  Search, 
  Flame, 
  Award, 
  Clock, 
  Users, 
  Layers, 
  ArrowUpDown, 
  ChevronRight, 
  Volume2, 
  Check, 
  X,
  Play
} from "lucide-react";

interface GeographyReviewGamesProps {
  onEarnXp?: (points: number) => void;
}

type GameMode = "millionaire" | "detective" | "memory" | "rank" | "islandLink";
type DifficultyLevel = "easy" | "medium" | "hard" | "master";

// ==========================================
// GAME 1 DATA: AI LÀ TRIỆU PHÚ ĐỊA LÍ
// ==========================================
interface MillionaireQuestion {
  level: number;
  rewardXp: number;
  question: string;
  options: string[];
  correctIndex: number;
  hint: string;
  audienceVotes: [number, number, number, number];
}

const MILLIONAIRE_QUESTIONS: MillionaireQuestion[] = [
  {
    level: 1,
    rewardXp: 100,
    question: "Việt Nam có bao nhiêu dân tộc cùng chung sống hòa thuận trên dải đất hình chữ S?",
    options: ["52 dân tộc", "54 dân tộc", "56 dân tộc", "63 dân tộc"],
    correctIndex: 1,
    hint: "Con số này đã trở thành biểu tượng đại đoàn kết dân tộc toàn vẹn của nước ta.",
    audienceVotes: [5, 88, 4, 3]
  },
  {
    level: 2,
    rewardXp: 200,
    question: "Đường bờ biển của nước ta kéo dài từ Móng Cái đến Hà Tiên có độ dài chính xác là bao nhiêu?",
    options: ["2.360 km", "3.143 km", "3.260 km", "4.600 km"],
    correctIndex: 2,
    hint: "Mẹo nhớ: Ba ngàn hai trăm sáu mươi ki-lô-mét (3.260 km).",
    audienceVotes: [8, 12, 75, 5]
  },
  {
    level: 3,
    rewardXp: 400,
    question: "Đỉnh núi nào được mệnh danh là 'Nóc nhà Đông Dương' với độ cao 3.143 m?",
    options: ["Fansipan", "Tây Côn Lĩnh", "Pu Si Lung", "Bạch Mộc Lương Tử"],
    correctIndex: 0,
    hint: "Nằm trên dãy Hoàng Liên Sơn hùng vĩ thuộc tỉnh Lào Cai.",
    audienceVotes: [91, 3, 4, 2]
  },
  {
    level: 4,
    rewardXp: 800,
    question: "Vùng nào sau đây là vựa lúa và trung tâm xuất khẩu gạo lớn nhất cả nước?",
    options: ["Đồng bằng sông Hồng", "Duyên hải miền Trung", "Đồng bằng sông Cửu Long", "Đông Nam Bộ"],
    correctIndex: 2,
    hint: "Vùng đồng bằng châu thổ sông Tiền và sông Hậu với giống lúa ST25 ngon nhất thế giới.",
    audienceVotes: [10, 5, 82, 3]
  },
  {
    level: 5,
    rewardXp: 1500, // MỐC AN TOÀN 1
    question: "Gió mùa mùa đông (gió mùa Đông Bắc) ở miền Bắc nước ta hoạt động chủ yếu trong khoảng thời gian nào?",
    options: [
      "Từ tháng 5 đến tháng 10",
      "Từ tháng 11 đến tháng 4 năm sau",
      "Từ tháng 2 đến tháng 8",
      "Quanh năm liên tục không ngừng"
    ],
    correctIndex: 1,
    hint: "Bắt đầu thổi từ đầu đông (tháng 11) và kết thúc vào cuối mùa xuân (tháng 4).",
    audienceVotes: [8, 80, 7, 5]
  },
  {
    level: 6,
    rewardXp: 2200,
    question: "Tỉnh duy nhất nào ở nước ta vừa có đường biên giới trên đất liền, vừa có đường biên giới trên biển với Trung Quốc?",
    options: ["Lạng Sơn", "Hải Phòng", "Quảng Ninh", "Hà Giang"],
    correctIndex: 2,
    hint: "Nơi có thành phố cửa khẩu Móng Cái và kỳ quan vịnh Hạ Long.",
    audienceVotes: [12, 6, 78, 4]
  },
  {
    level: 7,
    rewardXp: 3000,
    question: "Hiện tượng gió phơn Tây Nam khô nóng (gió Lào) thổi mạnh nhất ở vùng nào của nước ta?",
    options: ["Tây Bắc và Đông Bắc", "Bắc Trung Bộ", "Tây Nguyên", "Tây Nam Bộ"],
    correctIndex: 1,
    hint: "Do khối khí ẩm vượt qua dãy Trường Sơn Bắc bị trút hết mưa ở sườn Tây rồi tràn xuống sườn Đông khô bỏng.",
    audienceVotes: [5, 84, 8, 3]
  },
  {
    level: 8,
    rewardXp: 4000,
    question: "Quần đảo Hoàng Sa và quần đảo Trường Sa lần lượt thuộc quyền quản lý hành chính của thành phố/tỉnh nào?",
    options: [
      "Quảng Ngãi và Khánh Hòa",
      "Đà Nẵng và Khánh Hòa",
      "Bình Định và Ninh Thuận",
      "Thừa Thiên Huế và Kiên Giang"
    ],
    correctIndex: 1,
    hint: "Hoàng Sa trực thuộc thành phố đầu tàu miền Trung, Trường Sa trực thuộc tỉnh vịnh Nha Trang.",
    audienceVotes: [9, 83, 5, 3]
  },
  {
    level: 9,
    rewardXp: 5500,
    question: "Châu lục nào có diện tích lớn nhất và dân số đông nhất trên Trái Đất?",
    options: ["Châu Phi", "Châu Mỹ", "Châu Á", "Châu Âu"],
    correctIndex: 2,
    hint: "Chiếm gần 30% diện tích đất liền và gần 60% dân số thế giới, có đỉnh Everest.",
    audienceVotes: [4, 7, 85, 4]
  },
  {
    level: 10,
    rewardXp: 7000, // MỐC AN TOÀN 2
    question: "Vì sao vụ đông chỉ phát triển thành vụ sản xuất chính ở vùng Đồng bằng sông Hồng mà không có ở Nam Bộ?",
    options: [
      "Đồng bằng sông Hồng có nguồn nước tưới dồi dào hơn.",
      "Miền Bắc có mùa đông lạnh từ 2 - 3 tháng nhiệt độ <18°C do gió mùa Đông Bắc.",
      "Đất phù sa sông Hồng thích hợp với rau củ hơn đất Nam Bộ.",
      "Nông dân miền Bắc có nhiều kinh nghiệm thâm canh hơn miền Nam."
    ],
    correctIndex: 1,
    hint: "Yếu tố khí hậu nhiệt độ thấp quyết định việc trồng được cây ưa lạnh như khoai tây, bắp cải, su hào.",
    audienceVotes: [6, 85, 5, 4]
  },
  {
    level: 11,
    rewardXp: 8500,
    question: "Sông nào dài nhất thế giới và sông nào có lưu lượng nước lớn nhất thế giới?",
    options: [
      "Sông Nin (dài nhất) & Sông Amazon (nhiều nước nhất)",
      "Sông Amazon (dài nhất) & Sông Nin (nhiều nước nhất)",
      "Sông Trường Giang (dài nhất) & Sông Mississippi (nhiều nước nhất)",
      "Sông Volga (dài nhất) & Sông Mê Kông (nhiều nước nhất)"
    ],
    correctIndex: 0,
    hint: "Sông Nin ở châu Phi dài 6.650 km; sông Amazon ở Nam Mỹ thải ra 20% lượng nước ngọt đổ vào đại dương.",
    audienceVotes: [88, 5, 4, 3]
  },
  {
    level: 12,
    rewardXp: 10000, // ĐỈNH CAO TRIỆU PHÚ
    question: "Để thể hiện sự 'chuyển dịch cơ cấu GDP' của nước ta qua chuỗi 5 năm liên tục, dạng biểu đồ thích hợp nhất là gì?",
    options: ["Biểu đồ Cột đơn", "Biểu đồ Tròn", "Biểu đồ Miền", "Biểu đồ Đường"],
    correctIndex: 2,
    hint: "Từ khóa: 'Chuyển dịch cơ cấu' qua chuỗi thời gian ≥ 4 năm.",
    audienceVotes: [4, 12, 80, 4]
  }
];

// ==========================================
// GAME 2 DATA: THÁM TỬ ĐỊA DANH (GEODETECTIVE)
// ==========================================
interface DetectiveMystery {
  id: string;
  title: string;
  targetName: string;
  category: "Đỉnh núi / Đèo" | "Sông / Vịnh biển" | "Vùng kinh tế / Tỉnh" | "Di sản";
  difficulty: "Dễ" | "Trung bình" | "Khó";
  image: string;
  clues: string[];
  explanation: string;
}

const DETECTIVE_MYSTERIES: DetectiveMystery[] = [
  {
    id: "m-1",
    title: "Vùng đất huyền thoại ở cực Nam",
    targetName: "Mũi Cà Mau (Đất Mũi)",
    category: "Vùng kinh tế / Tỉnh",
    difficulty: "Dễ",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    clues: [
      "Tôi là điểm cực Nam thiêng liêng của Tổ quốc trên đất liền có tọa độ 8°34'B.",
      "Nơi đây được mệnh danh là 'rừng ngập mặn lớn thứ 2 thế giới' sau rừng Amazon.",
      "Ở đây, bạn có thể ngắm Mặt Trời mọc ở biển Đông và lặn ở biển Tây trên cùng một dải đất."
    ],
    explanation: "Mũi Cà Mau thuộc xã Đất Mũi, huyện Ngọc Hiển, tỉnh Cà Mau. Nổi tiếng với Vườn quốc gia Mũi Cà Mau và rừng đước bạt ngàn lấn biển."
  },
  {
    id: "m-2",
    title: "Con đèo hiểm trở đệ nhất hùng quan",
    targetName: "Đèo Hải Vân",
    category: "Đỉnh núi / Đèo",
    difficulty: "Trung bình",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    clues: [
      "Tôi là ranh giới tự nhiên giữa tỉnh Thừa Thiên Huế và thành phố Đà Nẵng.",
      "Vua Lê Thánh Tông từng ca ngợi tôi là 'Đệ nhất hùng quan' của trời Nam.",
      "Tôi là nhánh núi của dãy Bạch Mã đâm ngang ra biển, góp phần ngăn bớt gió mùa Đông Bắc lạnh buốt tiến sâu vào phía Nam."
    ],
    explanation: "Đèo Hải Vân dài khoảng 21 km, nằm trên quốc lộ 1A vượt qua dãy Bạch Mã, là ranh giới khí hậu quan trọng giữa miền Bắc và miền Nam."
  },
  {
    id: "m-3",
    title: "Vùng than đá số 1 đất nước",
    targetName: "Tỉnh Quảng Ninh",
    category: "Vùng kinh tế / Tỉnh",
    difficulty: "Dễ",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    clues: [
      "Tôi sở hữu hơn 90% trữ lượng than đá của toàn bộ lãnh thổ Việt Nam.",
      "Tôi có kỳ quan thiên nhiên thế giới được UNESCO công nhận với hàng nghìn đảo đá vôi kỳ vĩ.",
      "Tôi là tỉnh duy nhất có đường biên giới cả trên đất liền và trên biển với Trung Quốc."
    ],
    explanation: "Quảng Ninh là trung tâm công nghiệp khai khoáng và nhiệt điện than lớn nhất nước, cùng vịnh Hạ Long nổi tiếng toàn cầu."
  },
  {
    id: "m-4",
    title: "Thủ phủ cà phê trên đất đỏ",
    targetName: "Thành phố Buôn Ma Thuột (Đắk Lắk)",
    category: "Vùng kinh tế / Tỉnh",
    difficulty: "Trung bình",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80",
    clues: [
      "Tôi nằm trên cao nguyên đất đỏ badan xếp tầng rộng lớn ở độ cao 500m.",
      "Tôi được mệnh danh là 'Thủ phủ Cà phê của Việt Nam' và thế giới.",
      "Tôi là cái nôi của Không gian văn hóa Cồng chiêng Tây Nguyên được UNESCO vinh danh."
    ],
    explanation: "Buôn Ma Thuột là đô thị trung tâm vùng Tây Nguyên, dẫn đầu cả nước về diện tích và sản lượng cà phê Robusta chất lượng cao."
  }
];

// ==========================================
// GAME 3 DATA: LẬT THẺ TRÍ NHỚ (MEMORY MATCH)
// ==========================================
interface MemoryCard {
  id: string;
  pairId: number;
  text: string;
  subText: string;
  category: string;
}

const MEMORY_CARDS_RAW = [
  { pairId: 1, text: "Đỉnh Fansipan", subText: "3.143m (Hoàng Liên Sơn)" },
  { pairId: 1, text: "Nóc nhà Đông Dương", subText: "Đỉnh cao nhất Việt Nam" },
  { pairId: 2, text: "ĐBSCL", subText: "Vựa lúa số 1 cả nước" },
  { pairId: 2, text: "Gạo ST25 ngon nhất thế giới", subText: "Mô hình thuận thiên" },
  { pairId: 3, text: "Tây Nguyên", subText: "Đất đỏ badan xếp tầng" },
  { pairId: 3, text: "Thủ phủ cà phê & Bô-xít", subText: "Không gian Cồng chiêng" },
  { pairId: 4, text: "Cảng Cái Mép - Thị Vải", subText: "Bà Rịa - Vũng Tàu" },
  { pairId: 4, text: "Cảng biển nước sâu quốc tế", subText: "Đón siêu tàu đi Mỹ & Âu" },
  { pairId: 5, text: "Đảo Phú Quốc", subText: "Thành phố đảo Kiên Giang" },
  { pairId: 5, text: "Đảo lớn nhất Việt Nam", subText: "Diện tích gần 600 km²" },
  { pairId: 6, text: "Sông Nin (Nile)", subText: "Châu Phi (6.650 km)" },
  { pairId: 6, text: "Sông dài nhất thế giới", subText: "Chảy vào Địa Trung Hải" }
];

// ==========================================
// GAME 4 DATA: ĐẤU TRƯỜNG XẾP HẠNG (GEORANK)
// ==========================================
interface RankChallenge {
  id: string;
  title: string;
  instruction: string;
  items: { id: string; name: string; value: number; unit: string; displayHint: string }[];
}

const RANK_CHALLENGES: RankChallenge[] = [
  {
    id: "rank-continents-area",
    title: "Thử thách 1: Sắp xếp diện tích 5 Châu Lục (Từ Lớn nhất đến Nhỏ nhất)",
    instruction: "Hãy sắp xếp các châu lục theo thứ tự diện tích giảm dần:",
    items: [
      { id: "c-asia", name: "Châu Á", value: 44.4, unit: "triệu km²", displayHint: "Châu lục lớn nhất" },
      { id: "c-america", name: "Châu Mỹ", value: 42.5, unit: "triệu km²", displayHint: "Trải dài 2 bán cầu" },
      { id: "c-africa", name: "Châu Phi", value: 30.3, unit: "triệu km²", displayHint: "Lục địa đen nhiệt đới" },
      { id: "c-europe", name: "Châu Âu", value: 10.2, unit: "triệu km²", displayHint: "Cái nôi cách mạng CN" },
      { id: "c-oceania", name: "Châu Đại Dương", value: 8.5, unit: "triệu km²", displayHint: "Châu lục nhỏ nhất" }
    ]
  },
  {
    id: "rank-mountain-peaks",
    title: "Thử thách 2: Sắp xếp độ cao các Đỉnh Núi Việt Nam (Từ Cao nhất đến Thấp hơn)",
    instruction: "Hãy sắp xếp các đỉnh núi theo thứ tự độ cao giảm dần:",
    items: [
      { id: "m-fansipan", name: "Đỉnh Fansipan", value: 3143, unit: "mét", displayHint: "Lào Cai (Nóc nhà ĐD)" },
      { id: "m-pusilung", name: "Đỉnh Pu Si Lung", value: 3083, unit: "mét", displayHint: "Lai Châu (Biên giới)" },
      { id: "m-tayconlinh", name: "Đỉnh Tây Côn Lĩnh", value: 2419, unit: "mét", displayHint: "Hà Giang (Đông Bắc)" },
      { id: "m-bachma", name: "Đỉnh Bạch Mã", value: 1444, unit: "mét", displayHint: "Thừa Thiên Huế" }
    ]
  }
];

export const GeographyReviewGames: React.FC<GeographyReviewGamesProps> = ({ onEarnXp }) => {
  const [activeGame, setActiveGame] = useState<GameMode>("millionaire");
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel>("medium");

  // State: Millionaire Game
  const [millIndex, setMillIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [millAnswered, setMillAnswered] = useState<boolean>(false);
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

  // State: Memory Match Game
  const [memoryCards, setMemoryCards] = useState<(MemoryCard & { isFlipped: boolean; isMatched: boolean })[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [flipCount, setFlipCount] = useState<number>(0);
  const [matchedPairsCount, setMatchedPairsCount] = useState<number>(0);

  // State: Rank Game
  const [rankChallengeIdx, setRankChallengeIdx] = useState<number>(0);
  const currentRankChallenge = RANK_CHALLENGES[rankChallengeIdx];
  const [currentOrder, setCurrentOrder] = useState<string[]>(
    () => [...currentRankChallenge.items].sort(() => Math.random() - 0.5).map((it) => it.id)
  );
  const [rankChecked, setRankChecked] = useState<boolean>(false);
  const [rankIsCorrect, setRankIsCorrect] = useState<boolean>(false);

  // Initialize Memory Game on switch
  useEffect(() => {
    if (activeGame === "memory") {
      restartMemoryGame();
    }
  }, [activeGame]);

  const restartMemoryGame = () => {
    const shuffled = [...MEMORY_CARDS_RAW]
      .sort(() => Math.random() - 0.5)
      .map((card, idx) => ({
        ...card,
        id: `card-${idx}-${card.pairId}`,
        isFlipped: false,
        isMatched: false
      }));
    setMemoryCards(shuffled);
    setFlippedCards([]);
    setFlipCount(0);
    setMatchedPairsCount(0);
  };

  // Millionaire actions
  const currentQ = MILLIONAIRE_QUESTIONS[millIndex];

  const handleSelectMillOption = (idx: number) => {
    if (millAnswered || millGameOver) return;
    setSelectedOption(idx);
    setMillAnswered(true);

    if (idx === currentQ.correctIndex) {
      const earned = currentQ.rewardXp;
      setMillScoreXp(earned);
      if (onEarnXp) onEarnXp(earned);
      
      // Next question after a delay
      setTimeout(() => {
        if (millIndex + 1 < MILLIONAIRE_QUESTIONS.length) {
          setMillIndex((prev) => prev + 1);
          setSelectedOption(null);
          setMillAnswered(false);
          setEliminatedOptions([]);
        } else {
          setMillGameOver(true);
        }
      }, 1500);
    } else {
      setTimeout(() => {
        setMillGameOver(true);
      }, 1200);
    }
  };

  const handleUse5050 = () => {
    if (used5050 || millAnswered) return;
    setUsed5050(true);
    const wrongIndices = [0, 1, 2, 3].filter((i) => i !== currentQ.correctIndex);
    const toEliminate = wrongIndices.slice(0, 2);
    setEliminatedOptions(toEliminate);
  };

  const handleRestartMillionaire = () => {
    setMillIndex(0);
    setSelectedOption(null);
    setMillAnswered(false);
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
    }
  };

  const handleGuessDetective = () => {
    if (!userGuess.trim()) return;
    const isCorrect = userGuess.trim().toLowerCase().includes(
      currentMystery.targetName.split(" ")[0].toLowerCase()
    );
    if (isCorrect) {
      setDetectiveSolved(true);
      const points = 50 * (4 - revealedClueCount);
      if (onEarnXp) onEarnXp(points);
    } else {
      alert("Chưa chính xác rồi! Hãy xem thêm manh mối hoặc kiểm tra lại kiến thức nhé.");
    }
  };

  const handleNextMystery = () => {
    setDetectiveIdx((prev) => (prev + 1) % DETECTIVE_MYSTERIES.length);
    setRevealedClueCount(1);
    setUserGuess("");
    setDetectiveSolved(false);
  };

  // Memory card click
  const handleCardClick = (index: number) => {
    if (flippedCards.length === 2 || memoryCards[index].isFlipped || memoryCards[index].isMatched) {
      return;
    }

    const newCards = [...memoryCards];
    newCards[index].isFlipped = true;
    setMemoryCards(newCards);

    const nextFlipped = [...flippedCards, index];
    setFlippedCards(nextFlipped);

    if (nextFlipped.length === 2) {
      setFlipCount((prev) => prev + 1);
      const [idx1, idx2] = nextFlipped;
      if (newCards[idx1].pairId === newCards[idx2].pairId) {
        // Matched!
        setTimeout(() => {
          newCards[idx1].isMatched = true;
          newCards[idx2].isMatched = true;
          setMemoryCards([...newCards]);
          setFlippedCards([]);
          setMatchedPairsCount((prev) => {
            const next = prev + 1;
            if (next === MEMORY_CARDS_RAW.length / 2 && onEarnXp) {
              onEarnXp(120);
            }
            return next;
          });
        }, 500);
      } else {
        // Not matched, flip back
        setTimeout(() => {
          newCards[idx1].isFlipped = false;
          newCards[idx2].isFlipped = false;
          setMemoryCards([...newCards]);
          setFlippedCards([]);
        }, 1100);
      }
    }
  };

  // Rank Game actions
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

  const handleCheckRank = () => {
    const correctOrder = [...currentRankChallenge.items]
      .sort((a, b) => b.value - a.value)
      .map((it) => it.id);
    const isCorrect = JSON.stringify(currentOrder) === JSON.stringify(correctOrder);
    setRankChecked(true);
    setRankIsCorrect(isCorrect);
    if (isCorrect && onEarnXp) {
      onEarnXp(80);
    }
  };

  const handleResetRank = () => {
    setCurrentOrder([...currentRankChallenge.items].sort(() => Math.random() - 0.5).map((it) => it.id));
    setRankChecked(false);
    setRankIsCorrect(false);
  };

  return (
    <section className="py-10 bg-[#F8FAF9] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F5EF] text-[#146B5B] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-2">
            <Gamepad2 className="w-4 h-4 text-[#146B5B]" />
            <span>Đấu trường ôn tập kiến thức Địa lí vui nhộn</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-[#16332F] tracking-tight">
            Trò Chơi Ôn Tập & Thử Thách Địa Lí
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2 max-w-3xl leading-relaxed font-normal">
            Học mà chơi, chơi mà học! Vừa thư giãn vừa khắc sâu kiến thức địa lí Việt Nam và thế giới qua 4 thể loại trò chơi trí tuệ, phân cấp độ từ cơ bản đến cao thủ và nhận ngay điểm thưởng kinh nghiệm XP.
          </p>
        </div>

        {/* Game Mode Selector Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { id: "millionaire", label: "Ai Là Triệu Phú", icon: Trophy, desc: "12 câu leo thang & 3 trợ giúp" },
            { id: "detective", label: "Thám Tử Địa Danh", icon: Search, desc: "Giải mã manh mối địa lý" },
            { id: "memory", label: "Lật Thẻ Trí Nhớ", icon: Sparkles, desc: "Ghép đôi cặp khái niệm" },
            { id: "rank", label: "Đấu Trường Xếp Hạng", icon: ArrowUpDown, desc: "Xếp thứ tự số liệu chuẩn" }
          ].map((mode) => {
            const Icon = mode.icon;
            const isActive = activeGame === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => setActiveGame(mode.id as GameMode)}
                className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? "bg-white border-[#146B5B] shadow-md ring-2 ring-[#146B5B]/20"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`p-2 rounded-xl ${isActive ? "bg-[#146B5B] text-white" : "bg-slate-100 text-slate-700"}`}>
                    <Icon className="w-5 h-5" />
                  </span>
                  {isActive && (
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      Đang chơi
                    </span>
                  )}
                </div>
                <div>
                  <h4 className="font-extrabold text-sm sm:text-base text-[#16332F]">{mode.label}</h4>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">{mode.desc}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* GAME 1: AI LÀ TRIỆU PHÚ ĐỊA LÍ */}
        {/* ========================================================================= */}
        {activeGame === "millionaire" && (
          <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

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
                  <h3 className="font-black text-lg sm:text-xl text-white">
                    Mức thưởng: <span className="text-amber-400">{currentQ.rewardXp.toLocaleString()} XP</span>
                  </h3>
                </div>
              </div>

              {/* 3 Lifelines */}
              <div className="flex items-center gap-2">
                <button
                  disabled={used5050 || millGameOver}
                  onClick={handleUse5050}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 border ${
                    used5050
                      ? "bg-slate-800 text-slate-600 border-slate-700 cursor-not-allowed line-through"
                      : "bg-slate-800 text-amber-300 border-amber-400/40 hover:bg-slate-700 cursor-pointer shadow-xs"
                  }`}
                  title="Loại 2 phương án sai"
                >
                  <span>✂️ 50:50</span>
                </button>

                <button
                  disabled={usedHint || millGameOver}
                  onClick={() => {
                    setUsedHint(true);
                    setShowHintModal(true);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 border ${
                    usedHint
                      ? "bg-slate-800 text-slate-600 border-slate-700 cursor-not-allowed line-through"
                      : "bg-slate-800 text-sky-300 border-sky-400/40 hover:bg-slate-700 cursor-pointer shadow-xs"
                  }`}
                  title="Tư vấn Chuyên gia Atlat"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Chuyên gia Atlat</span>
                </button>

                <button
                  disabled={usedAudience || millGameOver}
                  onClick={() => {
                    setUsedAudience(true);
                    setShowAudienceModal(true);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 border ${
                    usedAudience
                      ? "bg-slate-800 text-slate-600 border-slate-700 cursor-not-allowed line-through"
                      : "bg-slate-800 text-rose-300 border-rose-400/40 hover:bg-slate-700 cursor-pointer shadow-xs"
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
              <div className="py-8 space-y-6 relative z-10">
                {/* Safe milestones indicator */}
                <div className="flex items-center justify-between text-xs font-bold text-slate-400 px-2">
                  <span>Mốc 1 (Câu 5): 1.500 XP ⭐</span>
                  <span>Mốc 2 (Câu 10): 7.000 XP ⭐⭐</span>
                  <span className="text-amber-400">Về đích (Câu 12): 10.000 XP 🏆</span>
                </div>

                {/* Question Box */}
                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-800 via-indigo-950/60 to-slate-800 border-2 border-indigo-500/40 text-center shadow-lg">
                  <h4 className="text-lg sm:text-2xl font-black text-white leading-relaxed">
                    {currentQ.question}
                  </h4>
                </div>

                {/* 4 Options Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentQ.options.map((opt, oIdx) => {
                    const isEliminated = eliminatedOptions.includes(oIdx);
                    const isSelected = selectedOption === oIdx;
                    const isCorrect = oIdx === currentQ.correctIndex;
                    
                    let btnStyle = "bg-slate-800/90 border-slate-700 text-white hover:border-amber-400 hover:bg-slate-750";
                    if (isEliminated) {
                      btnStyle = "bg-slate-900 border-slate-800 text-slate-700 cursor-not-allowed opacity-30";
                    } else if (millAnswered) {
                      if (isCorrect) {
                        btnStyle = "bg-emerald-600 border-emerald-400 text-white font-black animate-pulse";
                      } else if (isSelected) {
                        btnStyle = "bg-rose-600 border-rose-400 text-white";
                      } else {
                        btnStyle = "bg-slate-800/50 border-slate-700 text-slate-500";
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        disabled={isEliminated || millAnswered}
                        onClick={() => handleSelectMillOption(oIdx)}
                        className={`p-4 sm:p-5 rounded-2xl border-2 text-left font-bold transition-all cursor-pointer flex items-center gap-3 ${btnStyle}`}
                      >
                        <span className="w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center font-black text-amber-400 shrink-0">
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                        <span className="text-sm sm:text-base">{opt}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* Game Over / Victory Screen */
              <div className="py-12 text-center space-y-6 relative z-10 max-w-lg mx-auto">
                <div className="text-6xl animate-bounce">
                  {millScoreXp >= 7000 ? "🏆" : millScoreXp >= 1500 ? "⭐" : "💡"}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {millScoreXp >= 10000 
                    ? "Xuất Sắc! Bạn Là Triệu Phú Địa Lí!" 
                    : millScoreXp >= 7000 
                    ? "Tuyệt Vời! Bạn Đạt Danh Hiệu Chuyên Gia!" 
                    : "Bạn Đã Hoàn Thành Lượt Chơi!"}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Tổng điểm kinh nghiệm tích lũy: <strong className="text-amber-400 font-black text-xl">{millScoreXp.toLocaleString()} XP</strong>
                </p>
                <div className="pt-4 flex justify-center gap-4">
                  <button
                    onClick={handleRestartMillionaire}
                    className="px-6 py-3 rounded-xl bg-amber-400 text-slate-950 font-black text-sm shadow-md hover:bg-amber-300 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
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
                      onClick={() => setShowHintModal(false)}
                      className="text-slate-400 hover:text-white font-bold"
                    >
                      ✕
                    </button>
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    💡 <strong>Gợi ý chuyên sâu:</strong> "{currentQ.hint}"
                  </p>
                  <button
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
                      Kết quả Khảo sát Khán giả Toàn quốc
                    </span>
                    <button
                      onClick={() => setShowAudienceModal(false)}
                      className="text-slate-400 hover:text-white font-bold"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="space-y-3">
                    {currentQ.options.map((opt, oIdx) => (
                      <div key={oIdx} className="space-y-1">
                        <div className="flex justify-between text-xs font-bold text-slate-300">
                          <span>{String.fromCharCode(65 + oIdx)}. {opt}</span>
                          <span className="text-amber-400">{currentQ.audienceVotes[oIdx]}%</span>
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
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#E8F5EF] text-[#146B5B]">
                  {currentMystery.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-50 text-amber-900 border border-amber-200">
                  Độ khó: {currentMystery.difficulty}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
              {/* Image & Mystery photo (5 cols) */}
              <div className="lg:col-span-5 relative h-72 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <img
                  src={currentMystery.image}
                  alt={currentMystery.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    detectiveSolved ? "filter-none scale-105" : "blur-xs brightness-90"
                  }`}
                />
                {!detectiveSolved && (
                  <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center p-4 text-center">
                    <span className="px-4 py-2 rounded-xl bg-white/90 backdrop-blur-sm text-xs font-black text-slate-800 shadow-sm">
                      🔍 Hình ảnh đang bị làm mờ bí ẩn
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
                      onClick={handleRevealNextClue}
                      className="mt-3 text-xs font-bold text-[#146B5B] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>+ Mở khóa thêm 1 manh mối nữa (Điểm thưởng sẽ giảm nhẹ)</span>
                    </button>
                  )}
                </div>

                {/* Guess input */}
                {!detectiveSolved ? (
                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <label className="block text-xs font-extrabold text-slate-700 uppercase">
                      Nhập tên địa danh bạn suy đoán:
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={userGuess}
                        onChange={(e) => setUserGuess(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleGuessDetective()}
                        placeholder="Ví dụ: Đèo Hải Vân, Mũi Cà Mau, Quảng Ninh..."
                        className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#146B5B] focus:ring-1 focus:ring-[#146B5B]"
                      />
                      <button
                        onClick={handleGuessDetective}
                        className="px-6 py-2.5 rounded-xl bg-[#146B5B] text-white font-black text-xs sm:text-sm hover:bg-[#0f5548] active:scale-95 transition-all cursor-pointer"
                      >
                        Phá Án
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Success Reveal */
                  <div className="p-5 rounded-2xl bg-[#E8F5EF] border border-[#146B5B]/30 space-y-3">
                    <div className="flex items-center gap-2 text-[#146B5B] font-black text-base">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      <span>Chính Xác! Đáp án là: {currentMystery.targetName}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      {currentMystery.explanation}
                    </p>
                    <button
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
        {/* GAME 3: LẬT THẺ TRÍ NHỚ (MEMORY MATCH) */}
        {/* ========================================================================= */}
        {activeGame === "memory" && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm text-left space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-2xl font-black text-[#16332F] font-display">
                  Lật Thẻ Ghép Cặp Khái Niệm
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Lật mở các cặp thẻ trùng khớp giữa "Tên địa danh/vùng" và "Đặc điểm địa lí tương ứng".
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs sm:text-sm font-bold text-slate-700">
                <span>Số bước: <strong>{flipCount}</strong></span>
                <span>Cặp đã ghép: <strong className="text-[#146B5B]">{matchedPairsCount} / {MEMORY_CARDS_RAW.length / 2}</strong></span>
                <button
                  onClick={restartMemoryGame}
                  className="px-3 py-1.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 flex items-center gap-1.5 cursor-pointer text-xs font-bold"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Xáo lại bài</span>
                </button>
              </div>
            </div>

            {/* Grid of Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {memoryCards.map((card, idx) => {
                const isRevealed = card.isFlipped || card.isMatched;
                return (
                  <div
                    key={card.id}
                    onClick={() => handleCardClick(idx)}
                    className={`h-36 rounded-2xl border-2 p-4 transition-all duration-300 cursor-pointer flex flex-col justify-between select-none ${
                      card.isMatched
                        ? "bg-emerald-50 border-emerald-500 opacity-90 shadow-2xs"
                        : isRevealed
                        ? "bg-white border-[#146B5B] shadow-md scale-102"
                        : "bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-slate-500"
                    }`}
                  >
                    {isRevealed ? (
                      <>
                        <span className="text-[10px] font-black uppercase text-[#146B5B] bg-[#E8F5EF] px-2 py-0.5 rounded w-max">
                          {card.isMatched ? "✓ Đã Ghép" : "Khái niệm"}
                        </span>
                        <div>
                          <h4 className="font-extrabold text-sm text-[#16332F]">{card.text}</h4>
                          <p className="text-[11px] text-slate-500 mt-0.5">{card.subText}</p>
                        </div>
                      </>
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-1">
                        <Sparkles className="w-6 h-6 text-amber-400" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                          Địa Lí 9
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {matchedPairsCount === MEMORY_CARDS_RAW.length / 2 && (
              <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-300 text-center space-y-2">
                <span className="text-3xl">🎉</span>
                <h4 className="text-xl font-black text-emerald-900">
                  Chúc Mừng! Bạn Đã Ghép Trọn Vẹn Tất Cả Các Cặp Thẻ!
                </h4>
                <p className="text-xs sm:text-sm text-emerald-700">
                  Bạn hoàn thành trong {flipCount} lượt lật thẻ và nhận được +120 XP kinh nghiệm!
                </p>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* GAME 4: ĐẤU TRƯỜNG XẾP HẠNG (GEORANK) */}
        {/* ========================================================================= */}
        {activeGame === "rank" && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm text-left space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-black text-sky-600 uppercase tracking-wider">
                  THỬ THÁCH SỐ LIỆU ĐỊA LÍ
                </span>
                <h3 className="text-2xl font-black text-[#16332F] font-display mt-0.5">
                  {currentRankChallenge.title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                {RANK_CHALLENGES.map((ch, idx) => (
                  <button
                    key={ch.id}
                    onClick={() => {
                      setRankChallengeIdx(idx);
                      setCurrentOrder([...RANK_CHALLENGES[idx].items].sort(() => Math.random() - 0.5).map((it) => it.id));
                      setRankChecked(false);
                      setRankIsCorrect(false);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold border cursor-pointer ${
                      rankChallengeIdx === idx
                        ? "bg-[#146B5B] text-white border-[#146B5B]"
                        : "bg-white text-slate-700 border-slate-200"
                    }`}
                  >
                    Bộ đề {idx + 1}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600">
              {currentRankChallenge.instruction} Dùng các nút mũi tên <strong>▲ Lên</strong> hoặc <strong>▼ Xuống</strong> để đổi vị trí cho đúng trật tự.
            </p>

            {/* List to Re-order */}
            <div className="space-y-3 max-w-2xl">
              {currentOrder.map((itemId, idx) => {
                const item = currentRankChallenge.items.find((it) => it.id === itemId)!;
                return (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl border-2 border-slate-200 bg-slate-50 flex items-center justify-between gap-4 shadow-2xs hover:border-[#146B5B] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-white border border-slate-300 text-slate-800 flex items-center justify-center font-black text-sm">
                        {idx + 1}
                      </span>
                      <div>
                        <h4 className="font-extrabold text-sm sm:text-base text-[#16332F]">{item.name}</h4>
                        <span className="text-xs text-slate-500 font-medium">{item.displayHint}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {rankChecked && (
                        <span className="text-xs font-black text-[#146B5B] mr-3">
                          {item.value} {item.unit}
                        </span>
                      )}
                      <button
                        disabled={idx === 0 || rankChecked}
                        onClick={() => moveRankItem(idx, "up")}
                        className="p-2 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 disabled:opacity-30 cursor-pointer text-xs font-bold"
                        title="Di chuyển lên"
                      >
                        ▲
                      </button>
                      <button
                        disabled={idx === currentOrder.length - 1 || rankChecked}
                        onClick={() => moveRankItem(idx, "down")}
                        className="p-2 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 disabled:opacity-30 cursor-pointer text-xs font-bold"
                        title="Di chuyển xuống"
                      >
                        ▼
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Submit & Status Bar */}
            <div className="pt-4 flex items-center gap-4">
              {!rankChecked ? (
                <button
                  onClick={handleCheckRank}
                  className="px-6 py-2.5 rounded-xl bg-[#146B5B] text-white font-bold text-xs sm:text-sm shadow-sm hover:bg-[#0f5548] cursor-pointer"
                >
                  Kiểm tra thứ tự
                </button>
              ) : (
                <div className="flex items-center gap-4">
                  {rankIsCorrect ? (
                    <span className="text-emerald-700 font-bold text-sm flex items-center gap-1.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      Xuất sắc! Bạn đã sắp xếp hoàn toàn chính xác (+80 XP)!
                    </span>
                  ) : (
                    <span className="text-rose-600 font-bold text-sm flex items-center gap-1.5">
                      <AlertCircle className="w-5 h-5 text-rose-500" />
                      Chưa đúng thứ tự số liệu chuẩn. Hãy quan sát số liệu và thử lại!
                    </span>
                  )}
                  <button
                    onClick={handleResetRank}
                    className="px-4 py-2 rounded-xl border border-slate-300 hover:bg-slate-50 text-xs font-bold text-slate-700 cursor-pointer"
                  >
                    Thử lại
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
