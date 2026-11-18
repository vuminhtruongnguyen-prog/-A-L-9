import halongImg from "../assets/images/halong_bay_unesco_1794983429847.jpg";
import tranganImg from "../assets/images/trangan_karst_river_1794983430451.jpg";
import sapaImg from "../assets/images/sapa_fansipan_terraces_1794983432622.jpg";
import phongnhaImg from "../assets/images/phongnha_cave_karst_1794983433696.jpg";
import hueImg from "../assets/images/hue_imperial_citadel_1794983453187.jpg";
import mekongImg from "../assets/images/mekong_floating_market_1794983453862.jpg";

// ==========================================
// GAME 1 DATA: AI LÀ TRIỆU PHÚ ĐỊA LÍ
// ==========================================
export interface MillionaireQuestion {
  level: number;
  rewardXp: number;
  question: string;
  options: string[];
  correctIndex: number;
  hint: string;
  audienceVotes: [number, number, number, number];
}

export const MILLIONAIRE_QUESTIONS: MillionaireQuestion[] = [
  {
    level: 1,
    rewardXp: 100,
    question: "Việt Nam có bao nhiêu dân tộc cùng chung sống hòa thuận trên dải đất hình chữ S?",
    options: ["52 dân tộc", "54 dân tộc", "56 dân tộc", "63 dân tộc"],
    correctIndex: 1,
    hint: "Con số này đã trở thành biểu tượng đại đoàn kết dân tộc toàn vẹn của nước ta.",
    audienceVotes: [5, 88, 4, 3],
  },
  {
    level: 2,
    rewardXp: 200,
    question: "Đường bờ biển của nước ta kéo dài từ Móng Cái đến Hà Tiên có độ dài chính xác là bao nhiêu?",
    options: ["2.360 km", "3.143 km", "3.260 km", "4.600 km"],
    correctIndex: 2,
    hint: "Mẹo nhớ: Ba ngàn hai trăm sáu mươi ki-lô-mét (3.260 km).",
    audienceVotes: [8, 12, 75, 5],
  },
  {
    level: 3,
    rewardXp: 400,
    question: "Đỉnh núi nào được mệnh danh là 'Nóc nhà Đông Dương' với độ cao 3.143 m?",
    options: ["Fansipan", "Tây Côn Lĩnh", "Pu Si Lung", "Bạch Mộc Lương Tử"],
    correctIndex: 0,
    hint: "Nằm trên dãy Hoàng Liên Sơn hùng vĩ thuộc tỉnh Lào Cai.",
    audienceVotes: [91, 3, 4, 2],
  },
  {
    level: 4,
    rewardXp: 800,
    question: "Vùng nào sau đây là vựa lúa và trung tâm xuất khẩu gạo lớn nhất cả nước?",
    options: ["Đồng bằng sông Hồng", "Duyên hải miền Trung", "Đồng bằng sông Cửu Long", "Đông Nam Bộ"],
    correctIndex: 2,
    hint: "Vùng đồng bằng châu thổ sông Tiền và sông Hậu với giống lúa ST25 ngon nhất thế giới.",
    audienceVotes: [10, 5, 82, 3],
  },
  {
    level: 5,
    rewardXp: 1500,
    question: "Gió mùa mùa đông (gió mùa Đông Bắc) ở miền Bắc nước ta hoạt động chủ yếu trong khoảng thời gian nào?",
    options: [
      "Từ tháng 5 đến tháng 10",
      "Từ tháng 11 đến tháng 4 năm sau",
      "Từ tháng 2 đến tháng 8",
      "Quanh năm liên tục không ngừng",
    ],
    correctIndex: 1,
    hint: "Bắt đầu thổi từ đầu đông (tháng 11) và kết thúc vào cuối mùa xuân (tháng 4).",
    audienceVotes: [8, 80, 7, 5],
  },
  {
    level: 6,
    rewardXp: 2200,
    question: "Tỉnh duy nhất nào ở nước ta vừa có đường biên giới trên đất liền, vừa có đường biên giới trên biển với Trung Quốc?",
    options: ["Lạng Sơn", "Thành phố Hải Phòng", "Quảng Ninh", "Tuyên Quang"],
    correctIndex: 2,
    hint: "Nơi có cửa khẩu quốc tế Móng Cái và kỳ quan vịnh Hạ Long.",
    audienceVotes: [12, 6, 78, 4],
  },
  {
    level: 7,
    rewardXp: 3000,
    question: "Hiện tượng gió phơn Tây Nam khô nóng (gió Lào) thổi mạnh nhất ở vùng nào của nước ta?",
    options: ["Tây Bắc và Đông Bắc", "Bắc Trung Bộ", "Tây Nguyên", "Tây Nam Bộ"],
    correctIndex: 1,
    hint: "Do khối khí ẩm vượt qua dãy Trường Sơn Bắc bị trút hết mưa ở sườn Tây rồi tràn xuống sườn Đông khô nóng.",
    audienceVotes: [5, 84, 8, 3],
  },
  {
    level: 8,
    rewardXp: 4000,
    question: "Quần đảo Hoàng Sa và quần đảo Trường Sa lần lượt thuộc quyền quản lý hành chính của thành phố/tỉnh nào?",
    options: [
      "Quảng Ngãi và Khánh Hòa",
      "Thành phố Đà Nẵng và Tỉnh Khánh Hòa",
      "Gia Lai và Lâm Đồng",
      "Thành phố Huế và Tỉnh An Giang",
    ],
    correctIndex: 1,
    hint: "Hoàng Sa trực thuộc thành phố đầu tàu miền Trung, Trường Sa trực thuộc tỉnh có vịnh Nha Trang.",
    audienceVotes: [9, 83, 5, 3],
  },
  {
    level: 9,
    rewardXp: 5500,
    question: "Châu lục nào có diện tích lớn nhất và dân số đông nhất trên Trái Đất?",
    options: ["Châu Phi", "Châu Mỹ", "Châu Á", "Châu Âu"],
    correctIndex: 2,
    hint: "Chiếm gần 30% diện tích đất liền và gần 60% dân số thế giới, có đỉnh Everest.",
    audienceVotes: [4, 7, 85, 4],
  },
  {
    level: 10,
    rewardXp: 7000,
    question: "Vì sao vụ đông chỉ phát triển thành vụ sản xuất chính ở vùng Đồng bằng sông Hồng mà không có ở Nam Bộ?",
    options: [
      "Đồng bằng sông Hồng có nguồn nước tưới dồi dào hơn.",
      "Miền Bắc có mùa đông lạnh từ 2 - 3 tháng nhiệt độ <18°C do gió mùa Đông Bắc.",
      "Đất phù sa sông Hồng thích hợp với rau củ hơn đất Nam Bộ.",
      "Nông dân miền Bắc có nhiều kinh nghiệm thâm canh hơn miền Nam.",
    ],
    correctIndex: 1,
    hint: "Yếu tố khí hậu nhiệt độ thấp quyết định việc trồng được cây ưa lạnh như khoai tây, bắp cải, su hào.",
    audienceVotes: [6, 85, 5, 4],
  },
  {
    level: 11,
    rewardXp: 8500,
    question: "Sông nào dài nhất thế giới và sông nào có lưu lượng nước lớn nhất thế giới?",
    options: [
      "Sông Nin (dài nhất) & Sông Amazon (nhiều nước nhất)",
      "Sông Amazon (dài nhất) & Sông Nin (nhiều nước nhất)",
      "Sông Trường Giang (dài nhất) & Sông Mississippi (nhiều nước nhất)",
      "Sông Volga (dài nhất) & Sông Mê Kông (nhiều nước nhất)",
    ],
    correctIndex: 0,
    hint: "Sông Nin ở châu Phi dài 6.650 km; sông Amazon ở Nam Mỹ thải ra 20% lượng nước ngọt đổ vào đại dương.",
    audienceVotes: [88, 5, 4, 3],
  },
  {
    level: 12,
    rewardXp: 10000,
    question: "Để thể hiện sự 'chuyển dịch cơ cấu GDP' của nước ta qua chuỗi 5 năm liên tục, dạng biểu đồ thích hợp nhất là gì?",
    options: ["Biểu đồ Cột đơn", "Biểu đồ Tròn", "Biểu đồ Miền", "Biểu đồ Đường"],
    correctIndex: 2,
    hint: "Từ khóa: 'Chuyển dịch cơ cấu' qua chuỗi thời gian ≥ 4 năm.",
    audienceVotes: [4, 12, 80, 4],
  },
];

// ==========================================
// GAME 2 DATA: THÁM TỬ ĐỊA DANH (GEODETECTIVE)
// ==========================================
export interface DetectiveMystery {
  id: string;
  title: string;
  targetName: string;
  acceptedKeywords: string[];
  category: "Đỉnh núi / Đèo" | "Sông / Vịnh biển" | "Vùng kinh tế / Tỉnh" | "Di sản";
  difficulty: "Dễ" | "Trung bình" | "Khó";
  image: string;
  clues: string[];
  explanation: string;
}

export const DETECTIVE_MYSTERIES: DetectiveMystery[] = [
  {
    id: "m-1",
    title: "Vùng đất huyền thoại ở cực Nam",
    targetName: "Mũi Cà Mau (Đất Mũi)",
    acceptedKeywords: ["ca mau", "mui ca mau", "dat mui"],
    category: "Vùng kinh tế / Tỉnh",
    difficulty: "Dễ",
    image: mekongImg,
    clues: [
      "Tôi là điểm cực Nam thiêng liêng của Tổ quốc trên đất liền có tọa độ 8°34'B.",
      "Nơi đây nổi tiếng với hệ sinh thái rừng ngập mặn rộng lớn bậc nhất Việt Nam.",
      "Ở đây, bạn có thể ngắm Mặt Trời mọc ở biển Đông và lặn ở biển Tây trên cùng một dải đất.",
    ],
    explanation:
      "Mũi Cà Mau thuộc tỉnh Cà Mau, nổi tiếng với Vườn quốc gia Mũi Cà Mau và rừng đước bạt ngàn lấn biển.",
  },
  {
    id: "m-2",
    title: "Con đèo hiểm trở 'Đệ nhất hùng quan'",
    targetName: "Đèo Hải Vân",
    acceptedKeywords: ["hai van", "deo hai van"],
    category: "Đỉnh núi / Đèo",
    difficulty: "Trung bình",
    image: hueImg,
    clues: [
      "Tôi là ranh giới tự nhiên giữa Thành phố Huế và Thành phố Đà Nẵng.",
      "Vua Lê Thánh Tông từng ca ngợi tôi là 'Thiên hạ đệ nhất hùng quan'.",
      "Tôi là nhánh núi của dãy Bạch Mã đâm ngang ra biển, ngăn bớt gió mùa Đông Bắc lạnh buốt tràn xuống phía Nam.",
    ],
    explanation:
      "Đèo Hải Vân dài khoảng 21 km vượt qua dãy Bạch Mã, là ranh giới khí hậu quan trọng giữa miền Bắc và miền Nam Việt Nam.",
  },
  {
    id: "m-3",
    title: "Vùng than đá và kỳ quan vịnh biển số 1",
    targetName: "Tỉnh Quảng Ninh (Vịnh Hạ Long)",
    acceptedKeywords: ["quang ninh", "ha long", "vinh ha long"],
    category: "Vùng kinh tế / Tỉnh",
    difficulty: "Dễ",
    image: halongImg,
    clues: [
      "Tôi sở hữu hơn 90% trữ lượng than đá của toàn bộ lãnh thổ Việt Nam.",
      "Tôi sở hữu kỳ quan thiên nhiên thế giới UNESCO với gần 2.000 đảo đá vôi kỳ vĩ.",
      "Tôi là tỉnh duy nhất có đường biên giới cả trên đất liền và trên biển với Trung Quốc.",
    ],
    explanation:
      "Tỉnh Quảng Ninh là trung tâm khai thác than lớn nhất cả nước và cùng Thành phố Hải Phòng sở hữu Di sản Thiên nhiên Thế giới Vịnh Hạ Long – Quần đảo Cát Bà.",
  },
  {
    id: "m-4",
    title: "Vương quốc hang động giữa dãy Trường Sơn",
    targetName: "Phong Nha – Kẻ Bàng (Tỉnh Quảng Trị)",
    acceptedKeywords: ["phong nha", "ke bang", "son doong", "quang tri"],
    category: "Di sản",
    difficulty: "Trung bình",
    image: phongnhaImg,
    clues: [
      "Tôi nằm trên khối núi đá vôi cổ hơn 400 triệu năm thuộc Tỉnh Quảng Trị (sau sáp nhập).",
      "Tôi hai lần được UNESCO vinh danh là Di sản Thiên nhiên Thế giới (2003 và 2015).",
      "Trong lòng tôi ẩn chứa Hang Sơn Đoòng – hang động tự nhiên lớn nhất hành tinh.",
    ],
    explanation:
      "Vườn quốc gia Phong Nha – Kẻ Bàng thuộc Tỉnh Quảng Trị, được mệnh danh là 'Vương quốc hang động' với hệ thống karst đồ sộ.",
  },
  {
    id: "m-5",
    title: "Di sản Hỗn hợp đầu tiên của Đông Nam Á",
    targetName: "Quần thể Danh thắng Tràng An (Tỉnh Ninh Bình)",
    acceptedKeywords: ["trang an", "ninh binh", "hoa lu"],
    category: "Di sản",
    difficulty: "Trung bình",
    image: tranganImg,
    clues: [
      "Tôi được mệnh danh là 'Vịnh Hạ Long trên cạn' thuộc Tỉnh Ninh Bình.",
      "Tôi gắn liền với dấu tích lịch sử của Cố đô Hoa Lư thế kỷ X.",
      "Năm 2014, UNESCO ghi danh tôi là Di sản Văn hóa và Thiên nhiên Thế giới (Hỗn hợp) đầu tiên của Đông Nam Á.",
    ],
    explanation:
      "Quần thể Danh thắng Tràng An (Tỉnh Ninh Bình) nổi bật với địa hình karst tháp tuyệt mỹ, sông ngòi uốn lượn xuyên hang động và bề dày lịch sử.",
  },
  {
    id: "m-6",
    title: "Nóc nhà Đông Dương giữa biển mây Tây Bắc",
    targetName: "Đỉnh Fansipan (Tỉnh Lào Cai)",
    acceptedKeywords: ["fansipan", "phan xi pang", "sapa", "sa pa", "lao cai"],
    category: "Đỉnh núi / Đèo",
    difficulty: "Dễ",
    image: sapaImg,
    clues: [
      "Tôi nằm trên dãy Hoàng Liên Sơn hùng vĩ thuộc Tỉnh Lào Cai.",
      "Độ cao 3.143 m giúp tôi giữ danh hiệu ngọn núi cao nhất Việt Nam và ba nước Đông Dương.",
      "Trên sườn núi của tôi xuất hiện đầy đủ 3 đai cao khí hậu từ nhiệt đới đến ôn đới gió mùa trên núi.",
    ],
    explanation:
      "Đỉnh Fansipan (3.143 m) trên dãy Hoàng Liên Sơn ở Lào Cai là biểu tượng thiên nhiên hùng vĩ vùng Tây Bắc.",
  },
];

// ==========================================
// GAME 3 DATA: LẬT THẺ TRÍ NHỚ (6 BỘ ĐỀ ĐA DẠNG)
// ==========================================
export interface MemoryPair {
  pairId: number;
  cardA: { text: string; subText: string };
  cardB: { text: string; subText: string };
}

export interface MemoryDeck {
  id: string;
  shortTitle: string;
  title: string;
  category: string;
  description: string;
  pairs: MemoryPair[];
}

export const MEMORY_DECKS: MemoryDeck[] = [
  {
    id: "deck-provinces-landmarks",
    shortTitle: "Địa danh & Tỉnh thành",
    title: "Địa danh nổi tiếng & Đặc trưng Tỉnh, Thành phố (sau sáp nhập)",
    category: "34 Tỉnh / Thành",
    description: "Ghép địa danh biểu tượng với đúng Tỉnh / Thành phố trực thuộc Trung ương theo bản đồ hành chính mới.",
    pairs: [
      {
        pairId: 1,
        cardA: { text: "Vịnh Hạ Long", subText: "Gần 2.000 đảo đá vôi" },
        cardB: { text: "Tỉnh Quảng Ninh", subText: "Đông Bắc Bộ · Vùng than" },
      },
      {
        pairId: 2,
        cardA: { text: "Phố cổ Hội An & Mỹ Sơn", subText: "Hai di sản UNESCO (1999)" },
        cardB: { text: "Thành phố Đà Nẵng", subText: "Trung tâm miền Trung" },
      },
      {
        pairId: 3,
        cardA: { text: "Đảo Ngọc Phú Quốc", subText: "Đảo lớn nhất Việt Nam" },
        cardB: { text: "Tỉnh An Giang", subText: "Vịnh Thái Lan · ĐBSCL" },
      },
      {
        pairId: 4,
        cardA: { text: "Hang Sơn Đoòng – Phong Nha", subText: "Vương quốc hang động" },
        cardB: { text: "Tỉnh Quảng Trị", subText: "Bắc Trung Bộ" },
      },
      {
        pairId: 5,
        cardA: { text: "Quần thể Danh thắng Tràng An", subText: "Vịnh Hạ Long trên cạn" },
        cardB: { text: "Tỉnh Ninh Bình", subText: "Đồng bằng sông Hồng" },
      },
      {
        pairId: 6,
        cardA: { text: "Cố đô Huế & Sông Hương", subText: "Kinh đô triều Nguyễn" },
        cardB: { text: "Thành phố Huế", subText: "TP trực thuộc Trung ương" },
      },
    ],
  },
  {
    id: "deck-regions",
    shortTitle: "Vùng miền Việt Nam",
    title: "Đặc điểm nổi bật các Vùng kinh tế & Miền tự nhiên Việt Nam",
    category: "Các Vùng miền",
    description: "Ghép tên từng vùng địa lí Việt Nam với đặc trưng tự nhiên – kinh tế nổi bật nhất.",
    pairs: [
      {
        pairId: 1,
        cardA: { text: "Trung du & MN Bắc Bộ", subText: "Địa hình núi cao, chia cắt" },
        cardB: { text: "Giàu thủy điện & khoáng sản", subText: "Thủy điện Sơn La, Hòa Bình" },
      },
      {
        pairId: 2,
        cardA: { text: "Đồng bằng sông Hồng", subText: "Châu thổ sông Hồng – Thái Bình" },
        cardB: { text: "Mật độ dân số cao nhất nước", subText: "Trồng lúa thâm canh & vụ đông" },
      },
      {
        pairId: 3,
        cardA: { text: "Bắc Trung Bộ", subText: "Từ Thanh Hóa đến TP. Huế" },
        cardB: { text: "Hẹp ngang & gió phơn Tây Nam", subText: "Gió Lào khô nóng mùa hạ" },
      },
      {
        pairId: 4,
        cardA: { text: "Duyên hải Nam Trung Bộ", subText: "Nhiều vịnh biển kín gió" },
        cardB: { text: "Kinh tế biển & cảng nước sâu", subText: "Nghề làm muối, đánh bắt xa bờ" },
      },
      {
        pairId: 5,
        cardA: { text: "Tây Nguyên", subText: "Các cao nguyên xếp tầng" },
        cardB: { text: "Đất đỏ badan & thủ phủ cà phê", subText: "Trữ lượng Bô-xít lớn nhất" },
      },
      {
        pairId: 6,
        cardA: { text: "Đồng bằng sông Cửu Long", subText: "Châu thổ sông Tiền – sông Hậu" },
        cardB: { text: "Vựa lúa & thủy sản số 1 VN", subText: "Gạo ST25 & trái cây nhiệt đới" },
      },
    ],
  },
  {
    id: "deck-climate",
    shortTitle: "Khí hậu & Gió mùa",
    title: "Khí hậu, Gió mùa & Hiện tượng Thời tiết Việt Nam",
    category: "Khí hậu học",
    description: "Ghép tên nhân tố khí hậu – gió mùa với hệ quả thời tiết đặc trưng tại nước ta.",
    pairs: [
      {
        pairId: 1,
        cardA: { text: "Gió mùa Đông Bắc", subText: "Tháng 11 đến tháng 4" },
        cardB: { text: "Mùa đông lạnh ở miền Bắc", subText: "Đầu đông lạnh khô, cuối ẩm" },
      },
      {
        pairId: 2,
        cardA: { text: "Gió mùa Tây Nam", subText: "Tháng 5 đến tháng 10" },
        cardB: { text: "Mùa mưa nóng ẩm cả nước", subText: "Mang hơi ẩm từ Ấn Độ Dương" },
      },
      {
        pairId: 3,
        cardA: { text: "Dãy Bạch Mã (Đèo Hải Vân)", subText: "Vĩ tuyến 16°B đâm ra biển" },
        cardB: { text: "Ranh giới khí hậu Bắc – Nam", subText: "Chắn gió lạnh xuống miền Nam" },
      },
      {
        pairId: 4,
        cardA: { text: "Dãy Hoàng Liên Sơn", subText: "Độ cao trên 2.600 m" },
        cardB: { text: "Khí hậu ôn đới trên núi", subText: "3 đai cao rõ rệt, có băng tuyết" },
      },
      {
        pairId: 5,
        cardA: { text: "Biển Đông rộng lớn", subText: "Nguồn dự trữ nhiệt ẩm dồi dào" },
        cardB: { text: "Độ ẩm không khí cao >80%", subText: "Điều hòa khí hậu, giảm khô hạn" },
      },
      {
        pairId: 6,
        cardA: { text: "Hiện tượng El Niño", subText: "Nước biển Thái Bình Dương nóng lên" },
        cardB: { text: "Nắng nóng, hạn hán & xâm nhập mặn", subText: "Ảnh hưởng nặng ĐBSCL & Miền Trung" },
      },
    ],
  },
  {
    id: "deck-unesco",
    shortTitle: "Di sản UNESCO",
    title: "Các Di sản Thế giới UNESCO nổi tiếng tại Việt Nam",
    category: "Di sản UNESCO",
    description: "Ghép đúng tên Di sản UNESCO với danh hiệu và nét độc đáo làm nên thương hiệu toàn cầu.",
    pairs: [
      {
        pairId: 1,
        cardA: { text: "Vịnh Hạ Long – Cát Bà", subText: "Quảng Ninh & TP. Hải Phòng" },
        cardB: { text: "Di sản Thiên nhiên liên tỉnh", subText: "UNESCO 1994 · Mở rộng 2023" },
      },
      {
        pairId: 2,
        cardA: { text: "Quần thể Tràng An", subText: "Tỉnh Ninh Bình" },
        cardB: { text: "Di sản Hỗn hợp đầu tiên ĐNÁ", subText: "Kết hợp Văn hóa & Thiên nhiên" },
      },
      {
        pairId: 3,
        cardA: { text: "Quần thể Cố đô Huế", subText: "Thành phố Huế" },
        cardB: { text: "Di sản đầu tiên của VN (1993)", subText: "Kiến trúc cung đình nhà Nguyễn" },
      },
      {
        pairId: 4,
        cardA: { text: "Thành Nhà Hồ", subText: "Tỉnh Thanh Hóa (1397)" },
        cardB: { text: "Thành đá khối lớn không vữa", subText: "Kỳ tích kiến trúc đá cuốn" },
      },
      {
        pairId: 5,
        cardA: { text: "Hoàng thành Thăng Long", subText: "Thành phố Hà Nội" },
        cardB: { text: "Trung tâm quyền lực >1.300 năm", subText: "Tầng văn hóa Lý – Trần – Lê" },
      },
      {
        pairId: 6,
        cardA: { text: "Cao nguyên đá Đồng Văn", subText: "Tỉnh Tuyên Quang" },
        cardB: { text: "Công viên Địa chất Toàn cầu", subText: "Hẻm vực Tu Sản & sông Nho Quế" },
      },
    ],
  },
  {
    id: "deck-world",
    shortTitle: "Địa lí Thế giới",
    title: "Kỷ lục Địa lí Thế giới & Đặc trưng 6 Châu lục",
    category: "Thế giới",
    description: "Ghép đối tượng địa lí thế giới với kỷ lục hoặc đặc điểm tự nhiên chuẩn xác.",
    pairs: [
      {
        pairId: 1,
        cardA: { text: "Sông Nin (Nile)", subText: "Đông Bắc Châu Phi (6.650 km)" },
        cardB: { text: "Con sông dài nhất thế giới", subText: "Đổ ra biển Địa Trung Hải" },
      },
      {
        pairId: 2,
        cardA: { text: "Sông Amazon", subText: "Nam Mỹ · Rừng mưa lớn nhất" },
        cardB: { text: "Lưu lượng nước lớn nhất thế giới", subText: "Cung cấp ~20% nước ngọt ra biển" },
      },
      {
        pairId: 3,
        cardA: { text: "Đỉnh Everest", subText: "Dãy Himalaya (Châu Á)" },
        cardB: { text: "Nóc nhà của thế giới (8.848 m)", subText: "Đỉnh núi cao nhất Trái Đất" },
      },
      {
        pairId: 4,
        cardA: { text: "Hoang mạc Sahara", subText: "Bắc Phi (~9,2 triệu km²)" },
        cardB: { text: "Hoang mạc nóng lớn nhất thế giới", subText: "Khí hậu cực kỳ khô hạn" },
      },
      {
        pairId: 5,
        cardA: { text: "Châu Nam Cực", subText: "Bao quanh điểm Cực Nam" },
        cardB: { text: "Lục địa băng không dân cư thường trú", subText: "Nơi lạnh nhất hành tinh" },
      },
      {
        pairId: 6,
        cardA: { text: "Châu Đại Dương", subText: "Lục địa Ô-xtrây-li-a & đảo" },
        cardB: { text: "Châu lục có diện tích nhỏ nhất", subText: "Nổi tiếng với chuột túi Kangaroo" },
      },
    ],
  },
  {
    id: "deck-resources",
    shortTitle: "Khoáng sản & Nông sản",
    title: "Tài nguyên Khoáng sản & Nông sản trọng điểm Việt Nam",
    category: "Kinh tế VN",
    description: "Ghép tên loại khoáng sản hoặc nông sản chủ lực với vùng phân bố trọng điểm ở Việt Nam.",
    pairs: [
      {
        pairId: 1,
        cardA: { text: "Than đá Antraxit", subText: "Chiếm >90% trữ lượng cả nước" },
        cardB: { text: "Bể than Quảng Ninh", subText: "Nhiên liệu cho nhiệt điện & xuất khẩu" },
      },
      {
        pairId: 2,
        cardA: { text: "Dầu mỏ & Khí tự nhiên", subText: "Mỏ Bạch Hổ, Rạng Đông, Lan Tây" },
        cardB: { text: "Thềm lục địa phía Nam", subText: "Bể trầm tích Cửu Long – Nam Côn Sơn" },
      },
      {
        pairId: 3,
        cardA: { text: "Quặng Bô-xít", subText: "Nguyên liệu sản xuất Alumin – Nhôm" },
        cardB: { text: "Cao nguyên Tây Nguyên", subText: "Tập trung lớn tại Lâm Đồng, Đắk Lắk" },
      },
      {
        pairId: 4,
        cardA: { text: "Quặng Apatit", subText: "Nguyên liệu sản xuất phân lân" },
        cardB: { text: "Tỉnh Lào Cai", subText: "Vùng mỏ Cam Đường nổi tiếng" },
      },
      {
        pairId: 5,
        cardA: { text: "Cây Chè đặc sản", subText: "Thích hợp khí hậu cận nhiệt, đất feralit" },
        cardB: { text: "Thái Nguyên & Lâm Đồng", subText: "Hai vùng chè lớn hàng đầu VN" },
      },
      {
        pairId: 6,
        cardA: { text: "Cây Cao su công nghiệp", subText: "Cây công nghiệp lâu năm xuất khẩu" },
        cardB: { text: "Đông Nam Bộ & Tây Nguyên", subText: "Đất xám phù sa cổ & đất badan" },
      },
    ],
  },
];

// ==========================================
// GAME 4 DATA: ĐẤU TRƯỜNG XẾP HẠNG (8 BỘ ĐỀ)
// ==========================================
export interface RankChallengeItem {
  id: string;
  name: string;
  value: number;
  unit: string;
  displayHint: string;
}

export interface RankChallenge {
  id: string;
  shortLabel: string;
  category: "Thế giới" | "Việt Nam";
  title: string;
  instruction: string;
  items: RankChallengeItem[];
}

export const RANK_CHALLENGES: RankChallenge[] = [
  {
    id: "rank-countries-area",
    shortLabel: "Diện tích các nước",
    category: "Thế giới",
    title: "Xếp hạng Diện tích 6 Quốc gia Lớn nhất Thế giới",
    instruction: "Sắp xếp các quốc gia theo thứ tự DIỆN TÍCH giảm dần (từ lớn nhất đến nhỏ hơn):",
    items: [
      { id: "ca-ru", name: "Liên bang Nga", value: 17.1, unit: "triệu km²", displayHint: "Trải dài cả Châu Âu và Châu Á" },
      { id: "ca-ca", name: "Canada", value: 9.98, unit: "triệu km²", displayHint: "Bắc Mỹ · Đường bờ biển dài nhất" },
      { id: "ca-cn", name: "Trung Quốc", value: 9.6, unit: "triệu km²", displayHint: "Quốc gia lớn nhất Đông Á" },
      { id: "ca-us", name: "Hoa Kỳ", value: 9.53, unit: "triệu km²", displayHint: "Gồm 50 bang trải từ Đại Tây Dương sang Thái Bình Dương" },
      { id: "ca-br", name: "Brazil", value: 8.52, unit: "triệu km²", displayHint: "Quốc gia lớn nhất khu vực Nam Mỹ" },
      { id: "ca-au", name: "Ô-xtrây-li-a (Úc)", value: 7.69, unit: "triệu km²", displayHint: "Chiếm trọn lục địa Ô-xtrây-li-a" },
    ],
  },
  {
    id: "rank-countries-pop",
    shortLabel: "Dân số các nước",
    category: "Thế giới",
    title: "Xếp hạng Dân số 6 Quốc gia Đông dân nhất Thế giới",
    instruction: "Sắp xếp các quốc gia theo thứ tự DÂN SỐ giảm dần (từ đông dân nhất đến ít hơn):",
    items: [
      { id: "cp-in", name: "Ấn Độ", value: 1442, unit: "triệu người", displayHint: "Nam Á · Vượt mốc 1,44 tỉ dân" },
      { id: "cp-cn", name: "Trung Quốc", value: 1409, unit: "triệu người", displayHint: "Đông Á · Hơn 1,4 tỉ dân" },
      { id: "cp-us", name: "Hoa Kỳ", value: 341, unit: "triệu người", displayHint: "Đông dân nhất khu vực Châu Mỹ" },
      { id: "cp-id", name: "Indonesia", value: 281, unit: "triệu người", displayHint: "Quốc gia quần đảo đông dân nhất Đông Nam Á" },
      { id: "cp-pk", name: "Pakistan", value: 245, unit: "triệu người", displayHint: "Quốc gia đông dân thứ hai Nam Á" },
      { id: "cp-br", name: "Brazil", value: 217, unit: "triệu người", displayHint: "Quốc gia đông dân nhất Nam Mỹ" },
    ],
  },
  {
    id: "rank-continents-area",
    shortLabel: "Diện tích 6 Châu lục",
    category: "Thế giới",
    title: "Xếp hạng Diện tích 6 Châu lục trên Trái Đất",
    instruction: "Sắp xếp 6 châu lục theo thứ tự DIỆN TÍCH giảm dần:",
    items: [
      { id: "c-asia", name: "Châu Á", value: 44.4, unit: "triệu km²", displayHint: "Chiếm gần 30% diện tích đất liền" },
      { id: "c-america", name: "Châu Mỹ", value: 42.5, unit: "triệu km²", displayHint: "Trải dài từ vùng cực Bắc xuống gần cực Nam" },
      { id: "c-africa", name: "Châu Phi", value: 30.3, unit: "triệu km²", displayHint: "Lục địa có đường Xích đạo đi qua giữa" },
      { id: "c-antarctica", name: "Châu Nam Cực", value: 14.1, unit: "triệu km²", displayHint: "Lục địa băng bao quanh điểm Cực Nam" },
      { id: "c-europe", name: "Châu Âu", value: 10.2, unit: "triệu km²", displayHint: "Phía Tây lục địa Á – Âu" },
      { id: "c-oceania", name: "Châu Đại Dương", value: 8.5, unit: "triệu km²", displayHint: "Lục địa Ô-xtrây-li-a và hàng nghìn đảo" },
    ],
  },
  {
    id: "rank-world-rivers",
    shortLabel: "Sông dài nhất thế giới",
    category: "Thế giới",
    title: "Xếp hạng Chiều dài 5 Con sông Dài nổi tiếng Thế giới",
    instruction: "Sắp xếp các con sông theo thứ tự CHIỀU DÀI giảm dần (km):",
    items: [
      { id: "r-nile", name: "Sông Nin (Nile)", value: 6650, unit: "km", displayHint: "Chảy qua Đông Bắc Châu Phi" },
      { id: "r-amazon", name: "Sông Amazon", value: 6400, unit: "km", displayHint: "Nam Mỹ · Lưu lượng nước lớn nhất" },
      { id: "r-yangtze", name: "Sông Trường Giang", value: 6300, unit: "km", displayHint: "Con sông dài nhất Châu Á (Trung Quốc)" },
      { id: "r-mississippi", name: "Hệ thống sông Mississippi – Missouri", value: 6275, unit: "km", displayHint: "Hệ thống sông lớn nhất Bắc Mỹ" },
      { id: "r-mekong", name: "Sông Mê Kông", value: 4350, unit: "km", displayHint: "Chảy qua 6 quốc gia, đổ vào ĐBSCL Việt Nam" },
    ],
  },
  {
    id: "rank-oceans",
    shortLabel: "Diện tích 5 Đại dương",
    category: "Thế giới",
    title: "Xếp hạng Diện tích 5 Đại dương trên Trái Đất",
    instruction: "Sắp xếp 5 đại dương theo thứ tự DIỆN TÍCH giảm dần:",
    items: [
      { id: "o-pacific", name: "Thái Bình Dương", value: 165.2, unit: "triệu km²", displayHint: "Chiếm gần một nửa diện tích mặt biển toàn cầu" },
      { id: "o-atlantic", name: "Đại Tây Dương", value: 106.5, unit: "triệu km²", displayHint: "Nằm giữa Châu Mỹ với Châu Âu và Châu Phi" },
      { id: "o-indian", name: "Ấn Độ Dương", value: 70.6, unit: "triệu km²", displayHint: "Phía Nam Châu Á, phía Đông Châu Phi" },
      { id: "o-southern", name: "Nam Băng Dương", value: 20.3, unit: "triệu km²", displayHint: "Bao quanh lục địa Nam Cực" },
      { id: "o-arctic", name: "Bắc Băng Dương", value: 14.1, unit: "triệu km²", displayHint: "Đại dương nhỏ và nông nhất quanh Bắc Cực" },
    ],
  },
  {
    id: "rank-mountain-peaks",
    shortLabel: "Đỉnh núi Việt Nam",
    category: "Việt Nam",
    title: "Xếp hạng Độ cao 5 Đỉnh núi Nổi tiếng Việt Nam",
    instruction: "Sắp xếp các đỉnh núi Việt Nam theo thứ tự ĐỘ CAO giảm dần (mét):",
    items: [
      { id: "m-fansipan", name: "Đỉnh Fansipan", value: 3143, unit: "m", displayHint: "Tỉnh Lào Cai (Dãy Hoàng Liên Sơn)" },
      { id: "m-pusilung", name: "Đỉnh Pu Si Lung", value: 3083, unit: "m", displayHint: "Tỉnh Lai Châu (Vùng biên giới Tây Bắc)" },
      { id: "m-ngoclinh", name: "Đỉnh Ngọc Linh", value: 2598, unit: "m", displayHint: "Tỉnh Quảng Ngãi (Cao nhất Trường Sơn Nam)" },
      { id: "m-tayconlinh", name: "Đỉnh Tây Côn Lĩnh", value: 2428, unit: "m", displayHint: "Tỉnh Tuyên Quang (Nóc nhà Đông Bắc)" },
      { id: "m-bachma", name: "Đỉnh Bạch Mã", value: 1444, unit: "m", displayHint: "Thành phố Huế (Ranh giới khí hậu Bắc – Nam)" },
    ],
  },
  {
    id: "rank-vn-provinces-area",
    shortLabel: "Diện tích Tỉnh VN mới",
    category: "Việt Nam",
    title: "Xếp hạng Diện tích 5 Tỉnh Rộng nhất Việt Nam (sau sáp nhập)",
    instruction: "Sắp xếp 5 tỉnh theo thứ tự DIỆN TÍCH tự nhiên giảm dần (km²):",
    items: [
      { id: "vp-lamdong", name: "Tỉnh Lâm Đồng", value: 24233, unit: "km²", displayHint: "Trải dài từ cao nguyên Đà Lạt xuống ven biển" },
      { id: "vp-gialai", name: "Tỉnh Gia Lai", value: 21576, unit: "km²", displayHint: "Kết nối cao nguyên Pleiku với cửa biển miền Trung" },
      { id: "vp-daklak", name: "Tỉnh Đắk Lắk", value: 18096, unit: "km²", displayHint: "Thủ phủ cà phê nối dài tới duyên hải phía Đông" },
      { id: "vp-nghean", name: "Tỉnh Nghệ An", value: 16486, unit: "km²", displayHint: "Tỉnh có diện tích lớn nhất khu vực Bắc Trung Bộ" },
      { id: "vp-quangngai", name: "Tỉnh Quảng Ngãi", value: 14832, unit: "km²", displayHint: "Trải từ đỉnh Ngọc Linh ra đảo Lý Sơn" },
    ],
  },
  {
    id: "rank-vn-cities-pop",
    shortLabel: "Dân số 6 TP Trung ương",
    category: "Việt Nam",
    title: "Xếp hạng Dân số 6 Thành phố trực thuộc Trung ương (sau sáp nhập)",
    instruction: "Sắp xếp 6 thành phố trực thuộc Trung ương theo quy mô DÂN SỐ giảm dần (ước tính 2025):",
    items: [
      { id: "vc-hcm", name: "Thành phố Hồ Chí Minh", value: 13.6, unit: "triệu người", displayHint: "Siêu đô thị kinh tế lớn nhất cả nước" },
      { id: "vc-hn", name: "Thành phố Hà Nội", value: 8.6, unit: "triệu người", displayHint: "Thủ đô ngàn năm văn hiến · Trung tâm miền Bắc" },
      { id: "vc-hp", name: "Thành phố Hải Phòng", value: 4.1, unit: "triệu người", displayHint: "Thành phố cảng biển & công nghiệp lớn nhất Bắc Bộ" },
      { id: "vc-ct", name: "Thành phố Cần Thơ", value: 3.2, unit: "triệu người", displayHint: "Đô thị trung tâm vùng Đồng bằng sông Cửu Long" },
      { id: "vc-dn", name: "Thành phố Đà Nẵng", value: 2.8, unit: "triệu người", displayHint: "Trung tâm kinh tế – di sản – du lịch miền Trung" },
      { id: "vc-hue", name: "Thành phố Huế", value: 1.2, unit: "triệu người", displayHint: "Thành phố di sản trực thuộc Trung ương bên sông Hương" },
    ],
  },
];
