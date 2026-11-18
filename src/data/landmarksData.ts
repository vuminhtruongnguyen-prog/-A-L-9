import halongImg from "../assets/images/halong_bay_unesco_1794983429847.jpg";
import tranganImg from "../assets/images/trangan_karst_river_1794983430451.jpg";
import hoianImg from "../assets/images/hue_hoian_heritage_1794983431370.jpg";
import sapaImg from "../assets/images/sapa_fansipan_terraces_1794983432622.jpg";
import phongnhaImg from "../assets/images/phongnha_cave_karst_1794983433696.jpg";
import phuquocImg from "../assets/images/phuquoc_island_coast_1794983433819.jpg";
import hueImg from "../assets/images/hue_imperial_citadel_1794983453187.jpg";
import mysonImg from "../assets/images/myson_champa_towers_1794983454103.jpg";
import mekongImg from "../assets/images/mekong_floating_market_1794983453862.jpg";

export type LandmarkRegion = "north" | "central" | "south";

export type UnescoCategory =
  | "Di sản Thiên nhiên Thế giới"
  | "Di sản Văn hóa Thế giới"
  | "Di sản Hỗn hợp Thế giới"
  | "Công viên Địa chất Toàn cầu"
  | "Danh thắng Tiêu biểu Quốc gia";

export interface VietnamLandmark {
  id: string;
  name: string;
  tagline: string;
  province: string; // Strictly updated to 34 post-merger provinces/cities
  region: LandmarkRegion;
  regionLabel: string;
  isUnescoWorldHeritage: boolean;
  unescoCategory: UnescoCategory;
  unescoYear?: string;
  image: string;
  fallbackGradient: string;
  summary: string;
  highlights: string[];
  mustExperience: string[];
  bestSeason: string;
  geographyNote: string;
}

export interface LandmarkQuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const LANDMARK_STATS = [
  {
    label: "Di sản Thế giới UNESCO",
    value: "8 Di sản",
    note: "Gồm 5 Di sản Văn hóa, 2 Di sản Thiên nhiên & 1 Di sản Hỗn hợp",
  },
  {
    label: "Trải dài ba miền đất nước",
    value: "Bắc · Trung · Nam",
    note: "Từ cực Bắc Đồng Văn – Fansipan đến đảo ngọc Phú Quốc & miền Tây",
  },
  {
    label: "Địa danh tiêu biểu tuyển chọn",
    value: "12 Điểm đến",
    note: "Những kỳ quan du khách trong nước & quốc tế không thể bỏ qua",
  },
  {
    label: "Cập nhật địa giới hành chính",
    value: "34 Tỉnh / Thành",
    note: "Ghi chuẩn tên tỉnh, thành phố trực thuộc Trung ương sau sáp nhập",
  },
];

export const VIETNAM_LANDMARKS: VietnamLandmark[] = [
  {
    id: "halong-catba",
    name: "Vịnh Hạ Long – Quần đảo Cát Bà",
    tagline: "Kỳ quan địa chất biển đảo đá vôi bậc nhất hành tinh",
    province: "Tỉnh Quảng Ninh & Thành phố Hải Phòng",
    region: "north",
    regionLabel: "Miền Bắc",
    isUnescoWorldHeritage: true,
    unescoCategory: "Di sản Thiên nhiên Thế giới",
    unescoYear: "1994 · 2000 · Mở rộng 2023",
    image: halongImg,
    fallbackGradient: "from-teal-900 via-emerald-800 to-sky-900",
    summary:
      "Di sản Thiên nhiên Thế giới liên tỉnh đầu tiên của Việt Nam, hội tụ gần 2.000 hòn đảo đá vôi nhấp nhô giữa làn nước ngọc bích vịnh Bắc Bộ cùng hệ sinh thái rừng mưa nhiệt đới trên đảo đá vôi đặc sắc ở Cát Bà.",
    highlights: [
      "Sở hữu địa hình Karst ngập chìm trong biển phát triển hoàn thiện nhất thế giới với hàng trăm hang động kỳ ảo (Động Thiên Cung, Hang Sửng Sốt, Hang Đầu Gỗ).",
      "Năm 2023, UNESCO chính thức phê duyệt mở rộng ranh giới Di sản Vịnh Hạ Long bao gồm cả Quần đảo Cát Bà – nơi bảo tồn loài Voọc Cát Bà cực kỳ quý hiếm.",
      "Vẻ đẹp biến ảo theo bốn mùa và thời khắc bình minh – hoàng hôn trên vịnh Bái Tử Long, vịnh Lan Hạ.",
    ],
    mustExperience: [
      "Ngủ đêm trên du thuyền vịnh Hạ Long hoặc chèo kayak luồn qua hang Luồn, vịnh Lan Hạ.",
      "Chinh phục đỉnh Ti Tốp ngắm toàn cảnh vịnh biển và khám phá Vườn quốc gia Cát Bà.",
    ],
    bestSeason: "Tháng 3 – 5 và tháng 9 – 11 (trời trong xanh, biển êm, nắng dịu).",
    geographyNote:
      "Ví dụ điển hình nhất trong Địa lí 9 về dạng địa hình Karst ven biển và tiềm năng du lịch biển đảo trọng điểm của vùng Đồng bằng sông Hồng – Đông Bắc.",
  },
  {
    id: "trang-an",
    name: "Quần thể Danh thắng Tràng An",
    tagline: "Di sản Hỗn hợp Văn hóa & Thiên nhiên đầu tiên của Đông Nam Á",
    province: "Tỉnh Ninh Bình",
    region: "north",
    regionLabel: "Miền Bắc",
    isUnescoWorldHeritage: true,
    unescoCategory: "Di sản Hỗn hợp Thế giới",
    unescoYear: "2014",
    image: tranganImg,
    fallbackGradient: "from-emerald-900 via-teal-800 to-slate-900",
    summary:
      "Được mệnh danh là 'Vịnh Hạ Long trên cạn', Tràng An kết hợp hoàn hảo giữa những dãy núi đá vôi dựng đứng soi bóng xuống dòng sông Sào Khê xanh biếc và dấu tích lịch sử hào hùng của Cố đô Hoa Lư thế kỷ X.",
    highlights: [
      "Di sản Thế giới Hỗn hợp đầu tiên và duy nhất tại Đông Nam Á đáp ứng đồng thời cả tiêu chí Thiên nhiên (địa chất, thẩm mỹ) và Văn hóa (khảo cổ người tiền sử 30.000 năm).",
      "Bao gồm ba khu vực liền kề: Cố đô Hoa Lư, Khu danh thắng Tràng An – Tam Cốc – Bích Động và Rừng đặc dụng Hoa Lư.",
      "Hệ thống hàng chục hang động xuyên thủy nối liền các thung lũng ngập nước thanh bình.",
    ],
    mustExperience: [
      "Ngồi đò tay len lỏi qua các hang Sáng, hang Tối, hang Nấu Rượu và chiêm bái đền Trình, hành cung Vũ Lâm.",
      "Leo 500 bậc đá Hang Múa ngắm trọn dòng sông Ngô Đồng uốn lượn giữa cánh đồng lúa vàng Tam Cốc.",
    ],
    bestSeason: "Tháng 1 – 4 (lễ hội mùa xuân mát mẻ) hoặc tháng 5 – 6 (mùa lúa chín vàng Tam Cốc).",
    geographyNote:
      "Minh chứng tiêu biểu cho quá trình biển tiến – biển thoái trong kỷ Đệ Tứ tạo nên địa hình Karst tháp lục địa kết hợp hệ sinh thái đất ngập nước.",
  },
  {
    id: "phong-nha-ke-bang",
    name: "Vườn quốc gia Phong Nha – Kẻ Bàng & Hang Sơn Đoòng",
    tagline: "Vương quốc hang động kỳ vĩ bậc nhất thế giới",
    province: "Tỉnh Quảng Trị",
    region: "central",
    regionLabel: "Miền Trung",
    isUnescoWorldHeritage: true,
    unescoCategory: "Di sản Thiên nhiên Thế giới",
    unescoYear: "2003 · 2015",
    image: phongnhaImg,
    fallbackGradient: "from-emerald-950 via-teal-900 to-cyan-950",
    summary:
      "Nằm trên khối núi đá vôi cổ có niên đại hơn 400 triệu năm ở dãy Trường Sơn Bắc, Phong Nha – Kẻ Bàng nắm giữ hơn 400 hang động lớn nhỏ, trong đó Hang Sơn Đoòng là hang động tự nhiên lớn nhất hành tinh.",
    highlights: [
      "Hai lần được UNESCO vinh danh Di sản Thiên nhiên Thế giới nhờ giá trị địa chất – địa mạo nổi bật (2003) và hệ sinh thái rừng nguyên sinh đa dạng sinh học cao (2015).",
      "Hang Sơn Đoòng rộng lớn đến mức có rừng nguyên sinh, sông ngầm và khí hậu riêng bên trong lòng hang.",
      "Động Thiên Đường dài hơn 31 km với hệ thống thạch nhũ tráng lệ và Động Phong Nha nổi tiếng với dòng sông ngầm dài bậc nhất.",
    ],
    mustExperience: [
      "Đi thuyền ngược dòng sông Son vào khám phá lòng Động Phong Nha và bước bộ trên cầu gỗ xuyên Động Thiên Đường.",
      "Trải nghiệm du lịch sinh thái sông Chày – Hang Tối, Suối Nước Moọc xanh ngọc bích.",
    ],
    bestSeason: "Tháng 3 – 8 (mùa khô miền Trung, nước sông trong xanh, thuận tiện tham quan hang động).",
    geographyNote:
      "Nằm ở trung tâm dải đá vôi Bắc Trường Sơn; minh họa rõ nét quá trình phong hóa hóa học đá vôi mạnh mẽ trong môi trường nhiệt đới ẩm gió mùa.",
  },
  {
    id: "co-do-hue",
    name: "Quần thể Di tích Cố đô Huế",
    tagline: "Di sản Văn hóa Thế giới đầu tiên của Việt Nam bên dòng sông Hương",
    province: "Thành phố Huế",
    region: "central",
    regionLabel: "Miền Trung",
    isUnescoWorldHeritage: true,
    unescoCategory: "Di sản Văn hóa Thế giới",
    unescoYear: "1993",
    image: hueImg,
    fallbackGradient: "from-amber-900 via-rose-900 to-stone-900",
    summary:
      "Kinh đô của triều đại nhà Nguyễn (1802–1945) là quần thể kiến trúc cung đình phong kiến được quy hoạch hài hòa nhất theo triết lý phong thủy Á Đông, lấy núi Ngự Bình làm tiền án và dòng sông Hương thơ mộng uốn quanh.",
    highlights: [
      "Di sản đầu tiên của Việt Nam được UNESCO công nhận là Di sản Văn hóa Thế giới (năm 1993).",
      "Quy tụ hệ thống công trình uy nghi: Kinh thành Huế, Hoàng thành (Ngọ Môn, Điện Thái Hòa), Tử Cấm Thành cùng các lăng tẩm tinh xảo (Minh Mạng, Tự Đức, Khải Định) và Chùa Thiên Mụ.",
      "Gắn liền với Nhã nhạc Cung đình Huế (Di sản Văn hóa Phi vật thể Đại diện của Nhân loại).",
    ],
    mustExperience: [
      "Tham quan Đại Nội Huế vào buổi sớm, ngắm cầu Trường Tiền và nghe Ca Huế trên thuyền rồng sông Hương.",
      "Khám phá nghệ thuật kiến trúc giao thoa Đông – Tây tại Lăng Khải Định và không gian thiền tịnh ở Lăng Tự Đức.",
    ],
    bestSeason: "Tháng 1 – 4 (mùa xuân nắng ấm, ít mưa) và tháng 5 – 8 (mùa sen nở rực quanh hồ Tịnh Tâm).",
    geographyNote:
      "Thành phố Huế là thành phố trực thuộc Trung ương mang bản sắc di sản đặc thù của Bắc Trung Bộ, nằm ở cửa ngõ phía Bắc đèo Hải Vân.",
  },
  {
    id: "pho-co-hoi-an",
    name: "Đô thị cổ Hội An",
    tagline: "Thương cảng quốc tế rực rỡ ánh đèn lồng bên sông Thu Bồn",
    province: "Thành phố Đà Nẵng",
    region: "central",
    regionLabel: "Miền Trung",
    isUnescoWorldHeritage: true,
    unescoCategory: "Di sản Văn hóa Thế giới",
    unescoYear: "1999",
    image: hoianImg,
    fallbackGradient: "from-amber-900 via-orange-900 to-slate-900",
    summary:
      "Hội An là minh chứng sống động được bảo tồn gần như nguyên vẹn của một thương cảng giao thương Đông – Tây sầm uất bậc nhất Đông Nam Á thế kỷ XVI – XVIII, nổi bật với những mái ngói âm dương rêu phong và tường vàng cổ kính.",
    highlights: [
      "Kiến trúc nhà cổ gỗ, hội quán Phúc Kiến – Quảng Đông và biểu tượng Chùa Cầu thể hiện sự giao thoa độc đáo giữa văn hóa Việt, Hoa, Nhật và phương Tây.",
      "Không gian phố đi bộ yên bình không tiếng còi xe, rực rỡ sắc đèn lồng thủ công mỗi khi đêm xuống.",
      "Kết nối hài hòa với Khu dự trữ sinh quyển thế giới Cù Lao Chàm và các làng nghề truyền thống (gốm Thanh Hà, mộc Kim Bồng, rau Trà Quế).",
    ],
    mustExperience: [
      "Tản bộ qua Chùa Cầu, thả hoa đăng trên sông Hoài vào đêm rằm và thưởng thức Cao lầu, Mì Quảng.",
      "Đạp xe ra làng rau Trà Quế hoặc đi thuyền thúng khám phá rừng dừa nước Cẩm Thanh.",
    ],
    bestSeason: "Tháng 2 – 7 (khô ráo, nắng đẹp, nước biển Cửa Đại – An Bàng trong xanh).",
    geographyNote:
      "Hình thành tại vùng hạ lưu cửa sông Thu Bồn thuận tiện cho thuyền buồm quốc tế cập bến theo hai mùa gió tín phong Đông Bắc và Tây Nam.",
  },
  {
    id: "thanh-dia-my-son",
    name: "Khu Đền tháp Mỹ Sơn",
    tagline: "Thánh địa kiến trúc gạch nung huyền bí của Vương quốc Champa cổ",
    province: "Thành phố Đà Nẵng",
    region: "central",
    regionLabel: "Miền Trung",
    isUnescoWorldHeritage: true,
    unescoCategory: "Di sản Văn hóa Thế giới",
    unescoYear: "1999",
    image: mysonImg,
    fallbackGradient: "from-stone-900 via-amber-900 to-emerald-950",
    summary:
      "Ẩn mình trong thung lũng kín có đường kính khoảng 2 km bao quanh bởi núi rừng trùng điệp và đỉnh Hòn Đền (Răng Mèo) thiêng liêng, Mỹ Sơn từng là trung tâm tôn giáo lớn nhất của vương quốc Champa suốt gần một thiên niên kỷ (thế kỷ IV – XIII).",
    highlights: [
      "Hơn 70 công trình đền tháp Hindu giáo thờ thần Shiva với kỹ thuật xây gạch nung chồng khít gần như không thấy mạch vữa vẫn còn là bí ẩn kiến trúc cổ.",
      "Những bức phù điêu chạm khắc đá sa thạch tinh xảo mô tả vũ nữ Apsara, thần linh và hoa văn sinh động.",
      "Khung cảnh sương sớm bảng lảng giữa thung lũng rừng xanh tạo nên vẻ đẹp trầm mặc, linh thiêng hiếm có.",
    ],
    mustExperience: [
      "Tham quan các cụm tháp B, C, D lúc bình minh và thưởng thức điệu múa Chăm truyền thống ngay trong thung lũng di sản.",
      "Kết hợp tham quan Mỹ Sơn và Phố cổ Hội An trong cùng tuyến hành trình di sản miền Trung.",
    ],
    bestSeason: "Tháng 2 – 8 (mùa khô, lối đi khô thoáng và ánh sáng buổi sớm rất đẹp).",
    geographyNote:
      "Nằm trong thung lũng kiến tạo thuộc lưu vực sông Thu Bồn, phản ánh truyền thống chọn vị trí thung lũng núi kín làm thánh địa của cư dân Champa cổ.",
  },
  {
    id: "hoang-thanh-thang-long",
    name: "Khu Trung tâm Hoàng thành Thăng Long",
    tagline: "Hơn 1.300 năm lịch sử định đô của Thủ đô ngàn năm văn hiến",
    province: "Thành phố Hà Nội",
    region: "north",
    regionLabel: "Miền Bắc",
    isUnescoWorldHeritage: true,
    unescoCategory: "Di sản Văn hóa Thế giới",
    unescoYear: "2010",
    image: hueImg,
    fallbackGradient: "from-amber-950 via-red-900 to-slate-900",
    summary:
      "Được xây dựng từ thế kỷ XI dưới triều Lý sau Chiếu dời đô (1010) trên nền thành Đại La xưa, Hoàng thành Thăng Long là công trình gắn liền với tiến trình lịch sử dựng nước và giữ nước của dân tộc Việt Nam suốt hơn 13 thế kỷ.",
    highlights: [
      "Sở hữu các tầng văn hóa khảo cổ học chồng xếp liên tục hiếm có trên thế giới tại khu di tích 18 Hoàng Diệu.",
      "Các công trình biểu tượng còn lưu giữ: Đoan Môn, thềm rồng đá Điện Kính Thiên, Bắc Môn, Hậu Lâu, Cột cờ Hà Nội và Hầm chỉ huy D67.",
      "Nằm ngay trung tâm Thủ đô Hà Nội, gần Quảng trường Ba Đình, Văn Miếu – Quốc Tử Giám và Hồ Hoàn Kiếm.",
    ],
    mustExperience: [
      "Trải nghiệm tour đêm 'Giải mã Hoàng thành Thăng Long' và tham quan bảo tàng khảo cổ học lộ thiên.",
      "Kết nối hành trình khám phá Phố cổ Hà Nội 36 phố phường và Hồ Gươm trong ngày.",
    ],
    bestSeason: "Tháng 9 – 11 (mùa thu Hà Nội mát mẻ, nắng vàng dịu) và tháng 2 – 4.",
    geographyNote:
      "Vị trí trung tâm Đồng bằng sông Hồng, 'ở giữa khu vực trời đất, được thế rồng cuộn hổ ngồi', đầu mối giao thông thủy – bộ lớn nhất miền Bắc.",
  },
  {
    id: "thanh-nha-ho",
    name: "Thành Nhà Hồ",
    tagline: "Kỳ tích kiến trúc thành lũy bằng đá khối lớn duy nhất tại Đông Nam Á",
    province: "Tỉnh Thanh Hóa",
    region: "central",
    regionLabel: "Miền Trung",
    isUnescoWorldHeritage: true,
    unescoCategory: "Di sản Văn hóa Thế giới",
    unescoYear: "2011",
    image: tranganImg,
    fallbackGradient: "from-slate-800 via-stone-700 to-emerald-900",
    summary:
      "Được Hồ Quý Ly xây dựng chỉ trong 3 tháng năm 1397 làm kinh đô nước Đại Ngu (Tây Đô), Thành Nhà Hồ nổi tiếng toàn cầu với kỹ thuật xếp chồng các khối đá vôi khổng lồ nặng 10–26 tấn tạo nên cổng vòm vững chãi suốt hơn 600 năm không cần chất kết dính.",
    highlights: [
      "Tòa thành đá cổ có quy mô lớn và kỹ thuật lắp ghép vòm đá cuốn độc đáo bậc nhất khu vực Đông Á và Đông Nam Á.",
      "Bốn cổng thành Đông – Tây – Nam – Bắc cùng Đàn tế Nam Giao nằm hài hòa giữa cảnh quan đồng ruộng và sông Mã, sông Bưởi.",
      "Minh chứng cho trình độ kỹ thuật xây dựng và tổ chức nhân lực phi thường của người Việt cuối thế kỷ XIV.",
    ],
    mustExperience: [
      "Chiêm ngưỡng cổng Nam đồ sộ với ba cửa vòm đá nguyên khối và tham quan phòng trưng bày hiện vật khảo cổ triều Hồ.",
      "Đi xe điện ngắm toàn cảnh tường thành, hào nước cổ và Đàn tế Nam Giao trên núi Đốn Sơn.",
    ],
    bestSeason: "Tháng 2 – 5 và tháng 9 – 11 (khí hậu dễ chịu, ánh nắng đẹp).",
    geographyNote:
      "Nằm ở vùng chuyển tiếp giữa đồng bằng châu thổ sông Mã và miền núi phía Tây Thanh Hóa – cửa ngõ Bắc Trung Bộ.",
  },
  {
    id: "sapa-fansipan",
    name: "Sa Pa & Đỉnh Fansipan (3.143 m)",
    tagline: "Nóc nhà Đông Dương & Tuyệt tác ruộng bậc thang giữa biển mây Tây Bắc",
    province: "Tỉnh Lào Cai",
    region: "north",
    regionLabel: "Miền Bắc",
    isUnescoWorldHeritage: false,
    unescoCategory: "Danh thắng Tiêu biểu Quốc gia",
    image: sapaImg,
    fallbackGradient: "from-emerald-900 via-amber-800 to-slate-900",
    summary:
      "Tọa lạc trên sườn dãy Hoàng Liên Sơn hùng vĩ ở độ cao trên 1.500 m, Sa Pa chinh phục du khách toàn cầu bằng khí hậu mát lạnh bốn mùa trong một ngày, những thửa ruộng bậc thang uốn lượn tầng tầng lớp lớp và đỉnh Fansipan cao nhất Đông Dương.",
    highlights: [
      "Đỉnh Fansipan (3.143 m) là ngọn núi cao nhất Việt Nam và ba nước Đông Dương, nơi có thể ngắm biển mây bồng bềnh và tuyết rơi hiếm thấy vào mùa đông.",
      "Ruộng bậc thang thung lũng Mường Hoa nhiều lần được tạp chí quốc tế bình chọn vào nhóm ruộng bậc thang kỳ vĩ nhất thế giới.",
      "Bản sắc văn hóa phong phú của đồng bào H'Mông, Dao Đỏ, Tày, Giáy qua chợ phiên vùng cao và ẩm thực núi rừng.",
    ],
    mustExperience: [
      "Chinh phục cột mốc Fansipan 3.143 m, săn mây đèo Ô Quy Hồ và đi bộ qua bản Cát Cát, Tả Van, Lao Chải.",
      "Chiêm ngưỡng mùa nước đổ (tháng 5–6) hoặc mùa lúa chín vàng óng trên ruộng bậc thang (tháng 9–10).",
    ],
    bestSeason: "Tháng 3 – 5 (mùa hoa đỗ quyên, nước đổ) và tháng 9 – 11 (mùa lúa chín & săn mây).",
    geographyNote:
      "Minh họa trực quan nhất cho quy luật đai cao địa lí ở Việt Nam: lên tới đỉnh Fansipan xuất hiện đầy đủ 3 đai khí hậu từ nhiệt đới, cận nhiệt đới đến ôn đới gió mùa trên núi.",
  },
  {
    id: "cao-nguyen-da-dong-van",
    name: "Cao nguyên đá Đồng Văn & Đèo Mã Pí Lèng",
    tagline: "Công viên Địa chất Toàn cầu UNESCO nơi địa đầu cực Bắc Tổ quốc",
    province: "Tỉnh Tuyên Quang",
    region: "north",
    regionLabel: "Miền Bắc",
    isUnescoWorldHeritage: false,
    unescoCategory: "Công viên Địa chất Toàn cầu",
    unescoYear: "2010",
    image: sapaImg,
    fallbackGradient: "from-slate-900 via-teal-900 to-emerald-900",
    summary:
      "Công viên Địa chất Toàn cầu đầu tiên của Việt Nam được UNESCO công nhận, nơi những đỉnh núi đá tai mèo xám bạc dựng đứng ôm trọn hẻm vực Tu Sản sâu nhất Đông Nam Á và dòng sông Nho Quế xanh ngọc huyền ảo.",
    highlights: [
      "Lưu giữ dấu tích lịch sử phát triển vỏ Trái Đất suốt hơn 500 triệu năm với hàng nghìn hóa thạch cổ sinh.",
      "Đèo Mã Pí Lèng – một trong 'tứ đại đỉnh đèo' Việt Nam chạy men theo vách đá vôi nhìn thẳng xuống hẻm Tu Sản và sông Nho Quế.",
      "Cột cờ Quốc gia Lũng Cú thiêng liêng nơi cực Bắc, Phố cổ Đồng Văn và mùa hoa tam giác mạch rực rỡ cuối thu.",
    ],
    mustExperience: [
      "Đi thuyền trên dòng sông Nho Quế xuyên qua hẻm vực Tu Sản và dừng chân ngắm cảnh trên đèo Mã Pí Lèng.",
      "Viếng Cột cờ Lũng Cú, khám phá Dinh thự họ Vương và thưởng thức thắng cố, bánh tam giác mạch tại chợ phiên Đồng Văn.",
    ],
    bestSeason: "Tháng 10 – 12 (mùa hoa tam giác mạch, hoa cải vàng) và tháng 1 – 3 (mùa hoa đào, hoa mận nở trắng núi đá).",
    geographyNote:
      "Nổi bật trong chương trình Địa lí về địa hình đá vôi vùng Đông Bắc và tọa độ điểm cực Bắc lãnh thổ đất liền Việt Nam (23°23'B).",
  },
  {
    id: "dao-ngoc-phu-quoc",
    name: "Đảo Ngọc Phú Quốc",
    tagline: "Hòn đảo lớn nhất Việt Nam với biển xanh cát trắng nắng ấm quanh năm",
    province: "Tỉnh An Giang",
    region: "south",
    regionLabel: "Miền Nam & Biển đảo",
    isUnescoWorldHeritage: false,
    unescoCategory: "Danh thắng Tiêu biểu Quốc gia",
    image: phuquocImg,
    fallbackGradient: "from-cyan-800 via-sky-700 to-teal-900",
    summary:
      "Nằm trong vịnh Thái Lan ở phía Tây Nam Tổ quốc, Phú Quốc là hòn đảo lớn nhất Việt Nam (~589 km²) thuộc Khu dự trữ sinh quyển thế giới, nổi danh với những bãi biển trong vắt, rạn san hô rực rỡ và rừng nguyên sinh bạt ngàn.",
    highlights: [
      "Hội tụ những bãi biển tuyệt đẹp như Bãi Sao, Bãi Khem, Bãi Trường cùng quần đảo An Thới với hơn 15 đảo nhỏ lý tưởng để lặn ngắm san hô.",
      "Khí hậu nhiệt đới gió mùa cận xích đạo ôn hòa, ít chịu ảnh hưởng trực tiếp của bão nên du lịch phát triển sôi động suốt cả năm.",
      "Đặc sản nức tiếng quốc tế: nước mắm truyền thống Phú Quốc (được Liên minh châu Âu bảo hộ chỉ dẫn địa lí), hồ tiêu thơm cay và ngọc trai biển.",
    ],
    mustExperience: [
      "Đi cáp treo vượt biển ra Hòn Thơm, lặn ngắm san hô tại Hòn Móng Tay – Hòn Mây Rút và ngắm hoàng hôn Bãi Trường.",
      "Tham quan nhà thùng nước mắm cổ truyền, vườn tiêu xanh mướt và thưởng thức hải sản chợ đêm Dương Đông.",
    ],
    bestSeason: "Tháng 11 – 4 năm sau (mùa khô, biển cực êm, nắng vàng rực rỡ và nước biển trong vắt).",
    geographyNote:
      "Đảo có diện tích lớn nhất Việt Nam trong vùng biển Tây Nam (vịnh Thái Lan), giữ vai trò trọng điểm về kinh tế du lịch biển đảo và an ninh quốc phòng.",
  },
  {
    id: "cho-noi-cai-rang",
    name: "Chợ nổi Cái Răng & Sông nước Miền Tây",
    tagline: "Nét văn hóa thương hồ độc đáo bậc nhất Đồng bằng sông Cửu Long",
    province: "Thành phố Cần Thơ",
    region: "south",
    regionLabel: "Miền Nam & Biển đảo",
    isUnescoWorldHeritage: false,
    unescoCategory: "Danh thắng Tiêu biểu Quốc gia",
    image: mekongImg,
    fallbackGradient: "from-amber-800 via-teal-800 to-emerald-900",
    summary:
      "Nằm trên nhánh sông Cần Thơ thuộc hệ thống sông Hậu hiền hòa, Chợ nổi Cái Răng là Di sản Văn hóa Phi vật thể Quốc gia tái hiện sống động nếp sống thương hồ hào sảng, trù phú của cư dân miệt vườn Nam Bộ suốt hơn một thế kỷ.",
    highlights: [
      "Hàng trăm ghe bầu tụ họp từ lúc bình minh, buôn bán đủ loại nông sản nhiệt đới (dứa, xoài, dưa hấu, sầu riêng, chôm chôm) treo trên 'cây bẹo' thay cho biển hiệu.",
      "Gắn liền với không gian miệt vườn cây trái cù lao sông Hậu và Nghệ thuật Đờn ca tài tử Nam Bộ (Di sản Văn hóa Phi vật thể Đại diện của Nhân loại do UNESCO ghi danh năm 2013).",
      "Cửa ngõ kết nối hành trình khám phá rừng tràm ngập nước, vườn cò và Đất Mũi Cà Mau cực Nam Tổ quốc.",
    ],
    mustExperience: [
      "Dậy sớm từ 5h30 sáng đi thuyền len giữa chợ nổi, thưởng thức hủ tiếu và cà phê sữa đá nóng hổi ngay trên ghe bồng bềnh.",
      "Tham quan lò hủ tiếu truyền thống, dạo vườn cây ăn trái Phong Điền và nghe Đờn ca tài tử bên bến Ninh Kiều.",
    ],
    bestSeason: "Quanh năm; đẹp nhất là mùa trái cây chín rộ (tháng 5 – 8) hoặc giáp Tết Nguyên Đán đầy ghe hoa rực rỡ.",
    geographyNote:
      "Minh họa sinh động mối quan hệ giữa mạng lưới sông ngòi, kênh rạch chằng chịt của ĐBSCL với phương thức giao thông đường thủy và văn hóa sinh hoạt đặc thù của cư dân.",
  },
];

export const LANDMARK_QUIZ_QUESTIONS: LandmarkQuizQuestion[] = [
  {
    id: "lm-q1",
    question:
      "Địa danh nào của Việt Nam là Di sản Hỗn hợp (vừa là Di sản Văn hóa, vừa là Di sản Thiên nhiên) đầu tiên tại Đông Nam Á được UNESCO công nhận?",
    options: [
      "Vịnh Hạ Long – Quần đảo Cát Bà",
      "Quần thể Danh thắng Tràng An (Tỉnh Ninh Bình)",
      "Quần thể Di tích Cố đô Huế",
      "Đô thị cổ Hội An",
    ],
    correctIndex: 1,
    explanation:
      "Năm 2014, Quần thể Danh thắng Tràng An (Tỉnh Ninh Bình) được UNESCO ghi danh là Di sản Văn hóa và Thiên nhiên Thế giới (Di sản Hỗn hợp) đầu tiên của Việt Nam và Đông Nam Á.",
  },
  {
    id: "lm-q2",
    question:
      "Di sản nào sau đây được UNESCO công nhận mở rộng liên tỉnh vào năm 2023 (thuộc Tỉnh Quảng Ninh và Thành phố Hải Phòng)?",
    options: [
      "Vịnh Hạ Long – Quần đảo Cát Bà",
      "Vườn quốc gia Phong Nha – Kẻ Bàng",
      "Hoàng thành Thăng Long",
      "Khu Đền tháp Mỹ Sơn",
    ],
    correctIndex: 0,
    explanation:
      "Tháng 9/2023, UNESCO chính thức phê duyệt mở rộng ranh giới Di sản Thiên nhiên Thế giới Vịnh Hạ Long bao gồm Quần đảo Cát Bà, trở thành Di sản Thế giới liên tỉnh đầu tiên của nước ta.",
  },
  {
    id: "lm-q3",
    question:
      "Di sản nào của Việt Nam được UNESCO vinh danh đầu tiên (năm 1993) nằm bên dòng sông Hương thơ mộng?",
    options: [
      "Đô thị cổ Hội An",
      "Thành Nhà Hồ",
      "Quần thể Di tích Cố đô Huế",
      "Hoàng thành Thăng Long",
    ],
    correctIndex: 2,
    explanation:
      "Quần thể Di tích Cố đô Huế (Thành phố Huế) là di sản đầu tiên của Việt Nam được UNESCO ghi danh là Di sản Văn hóa Thế giới vào năm 1993.",
  },
  {
    id: "lm-q4",
    question:
      "Vườn quốc gia Phong Nha – Kẻ Bàng nổi tiếng với Hang Sơn Đoòng lớn nhất thế giới nằm trên địa bàn tỉnh nào sau sáp nhập?",
    options: [
      "Tỉnh Thanh Hóa",
      "Tỉnh Quảng Trị",
      "Tỉnh Nghệ An",
      "Thành phố Đà Nẵng",
    ],
    correctIndex: 1,
    explanation:
      "Theo bản đồ 34 tỉnh, thành phố sau sáp nhập, khu vực Vườn quốc gia Phong Nha – Kẻ Bàng thuộc địa bàn Tỉnh Quảng Trị.",
  },
  {
    id: "lm-q5",
    question:
      "Đô thị cổ Hội An và Khu Đền tháp Mỹ Sơn (hai Di sản Văn hóa Thế giới UNESCO năm 1999) hiện thuộc địa phương nào sau sáp nhập?",
    options: [
      "Thành phố Huế",
      "Tỉnh Quảng Ngãi",
      "Thành phố Đà Nẵng",
      "Tỉnh Khánh Hòa",
    ],
    correctIndex: 2,
    explanation:
      "Sau sáp nhập hành chính, cả Đô thị cổ Hội An và Thánh địa Mỹ Sơn cùng nằm trong không gian di sản – du lịch biển đảo của Thành phố Đà Nẵng.",
  },
];
