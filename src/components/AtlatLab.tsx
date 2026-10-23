import React, { useState } from "react";
import { ATLAT_CHALLENGES } from "../data/curriculumData";
import { AtlatChallenge } from "../types";
import { 
  Search, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Layers, 
  Lightbulb, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  HelpCircle,
  MapPin,
  Compass,
  FileCheck,
  Eye,
  Info,
  X
} from "lucide-react";

interface ProvincePin {
  id: string;
  name: string;
  region: string;
  coords: { x: number; y: number };
  image: string;
  highlights: string[];
  economicStrengths: string;
  atlatPages: string[];
  specializedTip: string;
}

const PROVINCE_PINS: ProvincePin[] = [
  {
    id: "hanoi",
    name: "Hà Nội",
    region: "Đồng bằng sông Hồng",
    coords: { x: 50, y: 17 },
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Thủ đô ngàn năm văn hiến, trung tâm đầu não chính trị, văn hóa, giáo dục và khoa học kỹ thuật cả nước.",
      "Đầu mối giao thông đường sắt, đường bộ, đường hàng không (sân bay Nội Bài) tỏa đi khắp cả nước và quốc tế.",
      "Mật độ dân số thuộc nhóm cao nhất cả nước (>2.500 người/km²)."
    ],
    economicStrengths: "Công nghiệp chế biến, công nghệ cao, dịch vụ tài chính, thương mại và du lịch văn hóa.",
    atlatPages: ["Trang 4-5 (Hành chính)", "Trang 17 (Kinh tế chung)", "Trang 26 (Đồng bằng sông Hồng)"],
    specializedTip: "Mẹo thi chuyên: Hà Nội cùng Hải Phòng và Quảng Ninh tạo thành tam giác tăng trưởng kinh tế trọng điểm phía Bắc."
  },
  {
    id: "haiphong",
    name: "Hải Phòng",
    region: "Đồng bằng sông Hồng",
    coords: { x: 58, y: 19 },
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Thành phố Cảng hoa phượng đỏ, cửa ngõ chính ra biển của toàn miền Bắc.",
      "Cụm cảng biển quốc tế Lạch Huyện đón tàu trọng tải trên 100.000 tấn.",
      "Quần đảo Cát Bà là khu dự trữ sinh quyển thế giới và di sản thiên nhiên thế giới liên tỉnh cùng Vịnh Hạ Long."
    ],
    economicStrengths: "Công nghiệp đóng tàu, lắp ráp ô tô (VinFast), cảng biển logistics và du lịch biển Cát Bà.",
    atlatPages: ["Trang 23 (Giao thông)", "Trang 26 (Vùng ĐBSH)"],
    specializedTip: "Mẹo thi chuyên: Nhấn mạnh vai trò cửa chính thông ra biển của hành lang kinh tế Côn Minh - Lào Cai - Hà Nội - Hải Phòng."
  },
  {
    id: "quangninh",
    name: "Quảng Ninh",
    region: "Trung du & Miền núi Bắc Bộ",
    coords: { x: 64, y: 15 },
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Sở hữu bể than đá lớn nhất nước (>90% trữ lượng than cả nước tại Cẩm Phả, Uông Bí, Mạo Khê).",
      "Kỳ quan thiên nhiên thế giới Vịnh Hạ Long với hàng nghìn đảo đá vôi kỳ thú.",
      "Cảng nước sâu Cái Lân và cửa khẩu quốc tế Móng Cái giao thương với Trung Quốc."
    ],
    economicStrengths: "Khai thác than, nhiệt điện, kinh tế biển tổng hợp, thương mại biên giới và du lịch quốc tế.",
    atlatPages: ["Trang 8 (Khoáng sản)", "Trang 22 (Năng lượng)", "Trang 25 (Du lịch)", "Trang 26 (TDMN Bắc Bộ)"],
    specializedTip: "Mẹo thi chuyên: Tỉnh duy nhất có cả đường biên giới trên đất liền và trên biển với Trung Quốc."
  },
  {
    id: "laocai",
    name: "Lào Cai",
    region: "Trung du & Miền núi Bắc Bộ",
    coords: { x: 38, y: 11 },
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Đỉnh Fansipan 3.143m - Nóc nhà Đông Dương trên dãy Hoàng Liên Sơn hùng vĩ.",
      "Mỏ Apatit lớn nhất cả nước phục vụ sản xuất phân bón supe lân.",
      "Khu du lịch Sa Pa mát lạnh quanh năm với bản sắc văn hóa người Mông, Dao, ruộng bậc thang kỳ vĩ."
    ],
    economicStrengths: "Khai khoáng apatit, đồng Sin Quyền, kinh tế cửa khẩu quốc tế và du lịch nghỉ dưỡng vùng cao.",
    atlatPages: ["Trang 8 (Khoáng sản)", "Trang 26 (TDMN Bắc Bộ)"],
    specializedTip: "Mẹo thi chuyên: Khí hậu Sa Pa mang tính chất cận nhiệt và ôn đới gió mùa trên núi cao (trên 1.500m)."
  },
  {
    id: "dienbien",
    name: "Điện Biên",
    region: "Tây Bắc",
    coords: { x: 26, y: 16 },
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Điểm cực Tây của Tổ quốc tại xã Sín Thầu, huyện Mường Nhé (102°09'Đ).",
      "Thung lũng Mường Thanh trù phú - cánh đồng lúa lớn nhất vùng Tây Bắc ('Nhất Thanh, nhì Lò, tam Than, tứ Tấc').",
      "Quần thể di tích lịch sử chiến thắng Điện Biên Phủ lẫy lừng năm châu."
    ],
    economicStrengths: "Trồng lúa nếp thung lũng, lâm nghiệp, thủy điện nhỏ và du lịch về nguồn lịch sử.",
    atlatPages: ["Trang 4-5 (Hành chính)", "Trang 6-7 (Hình thể)", "Trang 26 (TDMN Bắc Bộ)"],
    specializedTip: "Mẹo thi chuyên: Nơi duy nhất ở cực Tây giáp cả 2 nước Trung Quốc và Lào tại ngã ba A Pa Chải."
  },
  {
    id: "hagiang",
    name: "Hà Giang",
    region: "Đông Bắc",
    coords: { x: 44, y: 8 },
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Điểm cực Bắc trên đất liền tại xã Lũng Cú, huyện Đồng Văn (23°23'B).",
      "Công viên địa chất toàn cầu Cao nguyên đá Đồng Văn với địa hình cacxtơ đá vôi tai mèo cheo leo.",
      "Đèo Mã Pí Lèng hiểm trở bên dòng sông Nho Quế xanh ngọc bích."
    ],
    economicStrengths: "Cây dược liệu, chè Shan tuyết cổ thụ, chăn nuôi bò vùng cao và du lịch địa chất.",
    atlatPages: ["Trang 4-5 (Hành chính)", "Trang 9 (Khí hậu)", "Trang 26 (TDMN Bắc Bộ)"],
    specializedTip: "Mẹo thi chuyên: Cực Bắc 23°23'B nằm sát đường chí tuyến Bắc (23°27'B), có góc nhập xạ nhỏ nhất nước ta vào mùa đông."
  },
  {
    id: "hue",
    name: "Thừa Thiên Huế",
    region: "Bắc Trung Bộ",
    coords: { x: 57, y: 44 },
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Quần thể di tích Cố đô Huế và Nhã nhạc cung đình Huế - di sản văn hóa thế giới UNESCO.",
      "Hệ đầm phá Tam Giang - Cầu Hai rộng lớn nhất Đông Nam Á.",
      "Dãy Bạch Mã đâm ngang ra biển tạo nên đèo Hải Vân - ranh giới tự nhiên phân định khí hậu Bắc - Nam."
    ],
    economicStrengths: "Du lịch di sản, nuôi trồng thủy hải sản đầm phá, dệt may và công nghiệp cảng biển Chân Mây.",
    atlatPages: ["Trang 6-7 (Hình thể)", "Trang 9 (Khí hậu)", "Trang 25 (Du lịch)", "Trang 27 (Bắc Trung Bộ)"],
    specializedTip: "Mẹo thi chuyên: Huế có lượng mưa trung bình năm rất lớn (>3.000 mm) do nằm ở sườn đón gió mùa Đông Bắc và dải hội tụ."
  },
  {
    id: "danang",
    name: "Đà Nẵng",
    region: "Duyên hải Nam Trung Bộ",
    coords: { x: 62, y: 46 },
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Thành phố cảng biển trực thuộc Trung ương, trung tâm kinh tế lớn nhất miền Trung.",
      "Quản lý hành chính huyện đảo Hoàng Sa thiêng liêng.",
      "Cảng biển nước sâu Tiên Sa và sân bay quốc tế Đà Nẵng là cửa ngõ Hành lang kinh tế Đông - Tây (EWEC)."
    ],
    economicStrengths: "Công nghệ thông tin, logistics cảng biển, dịch vụ tài chính và du lịch biển đẳng cấp thế giới (Bãi biển Mỹ Khê, Bà Nà Hills).",
    atlatPages: ["Trang 4-5 (Hành chính)", "Trang 23 (Giao thông)", "Trang 28 (Duyên hải Nam Trung Bộ)"],
    specializedTip: "Mẹo thi chuyên: Cửa ngõ thông ra Thái Bình Dương của 4 nước Myanmar - Thái Lan - Lào - Việt Nam theo tuyến EWEC."
  },
  {
    id: "khanhhoa",
    name: "Khánh Hòa",
    region: "Duyên hải Nam Trung Bộ",
    coords: { x: 70, y: 68 },
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Đường bờ biển dài nhất nước ta (khoảng 385 km) với nhiều bán đảo và vịnh nước sâu bậc nhất (Cam Ranh, Vân Phong, Nha Trang).",
      "Mũi Đôi (xã Vạn Thạnh, Vạn Ninh) là điểm cực Đông trên đất liền (109°28'Đ) đón ánh bình minh đầu tiên.",
      "Quản lý huyện đảo Trường Sa anh hùng."
    ],
    economicStrengths: "Khai thác và nuôi tổ yến sào tự nhiên, du lịch biển đảo cao cấp, cảng biển nước sâu và căn cứ quân sự Cam Ranh.",
    atlatPages: ["Trang 4-5 (Hành chính)", "Trang 20 (Thủy sản)", "Trang 28 (Duyên hải NTB)"],
    specializedTip: "Mẹo thi chuyên: Vịnh Cam Ranh là vịnh nước sâu kín gió có giá trị chiến lược quân sự và hàng hải hàng đầu thế giới."
  },
  {
    id: "daklak",
    name: "Đắk Lắk",
    region: "Tây Nguyên",
    coords: { x: 57, y: 64 },
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Thủ phủ cà phê Buôn Ma Thuột danh tiếng toàn cầu trên cao nguyên đất đỏ badan màu mỡ.",
      "Địa bàn cư trú lâu đời của người Ê Đê, M'Nông với văn hóa cồng chiêng và lễ hội đua voi Buôn Đôn.",
      "Hồ Lắk - hồ nước ngọt tự nhiên lớn thứ hai Việt Nam."
    ],
    economicStrengths: "Trồng và chế biến xuất khẩu cà phê Robusta, hồ tiêu, cao su, năng lượng tái tạo (điện gió, điện mặt trời).",
    atlatPages: ["Trang 18-19 (Nông nghiệp)", "Trang 28 (Tây Nguyên)"],
    specializedTip: "Mẹo thi chuyên: Đất badan Đắk Lắk hình thành do dung nham núi lửa phun trào thời Đệ Tứ, tầng phong hóa dày rất màu mỡ."
  },
  {
    id: "lamdong",
    name: "Lâm Đồng",
    region: "Tây Nguyên",
    coords: { x: 58, y: 72 },
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Thành phố ngàn hoa Đà Lạt trên cao nguyên Lâm Viên độ cao 1.500m mát lạnh quanh năm.",
      "Vựa rau, hoa và dâu tây ứng dụng nông nghiệp công nghệ cao số 1 cả nước.",
      "Vùng trồng cây chè búp lớn nhất miền Nam và cà phê chè Arabica cao cấp."
    ],
    economicStrengths: "Nông nghiệp công nghệ cao, trồng chè, cà phê chè, du lịch nghỉ dưỡng và thủy điện (Đa Nhim, Đại Ninh).",
    atlatPages: ["Trang 18 (Nông nghiệp)", "Trang 25 (Du lịch)", "Trang 28 (Tây Nguyên)"],
    specializedTip: "Mẹo thi chuyên: Địa hình cao trên 1.500m tạo nên khí hậu cận nhiệt đới vùng núi độc đáo giữa lòng Tây Nguyên."
  },
  {
    id: "tphcm",
    name: "TP. Hồ Chí Minh",
    region: "Đông Nam Bộ",
    coords: { x: 51, y: 79 },
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Đô thị đặc biệt, trung tâm kinh tế, tài chính, thương mại, khoa học công nghệ và đổi mới sáng tạo lớn nhất Việt Nam.",
      "Đóng góp trên 20% GDP và gần 30% thu ngân sách quốc gia.",
      "Hệ thống cảng Sài Gòn, Cát Lái và sân bay quốc tế Tân Sơn Nhất đón lượng hàng hóa khổng lồ."
    ],
    economicStrengths: "Công nghiệp chế biến chế tạo, điện tử, phần mềm, dịch vụ tài chính ngân hàng, thương mại và logistics.",
    atlatPages: ["Trang 17 (Kinh tế chung)", "Trang 21 (Công nghiệp)", "Trang 29 (Đông Nam Bộ)"],
    specializedTip: "Mẹo thi chuyên: Hạt nhân của Vùng kinh tế trọng điểm phía Nam - vùng kinh tế năng động và đóng góp GDP lớn nhất cả nước."
  },
  {
    id: "cantho",
    name: "Cần Thơ",
    region: "Đồng bằng sông Cửu Long",
    coords: { x: 42, y: 85 },
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Thành phố trực thuộc Trung ương, đô thị loại I, được mệnh danh là 'Tây Đô' - trái tim của Đồng bằng sông Cửu Long.",
      "Nằm ở hạ lưu hữu ngạn sông Hậu, cầu Cần Thơ dây văng nhịp chính dài nhất Đông Nam Á tại thời điểm khánh thành.",
      "Chợ nổi Cái Răng - di sản văn hóa phi vật thể quốc gia về văn minh sông nước miệt vườn."
    ],
    economicStrengths: "Chế biến gạo xuất khẩu, thủy sản đông lạnh, logistics nông sản, y tế chuyên sâu và du lịch sông nước.",
    atlatPages: ["Trang 17 (Kinh tế chung)", "Trang 30 (ĐBSCL)"],
    specializedTip: "Mẹo thi chuyên: Trung tâm đào tạo đại học, viện nghiên cứu lúa gạo lớn nhất cả nước (Viện Lúa ĐBSCL)."
  },
  {
    id: "kiengiang",
    name: "Kiên Giang",
    region: "Đồng bằng sông Cửu Long",
    coords: { x: 33, y: 87 },
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Đứng số 1 cả nước về cả diện tích và sản lượng lúa; đứng số 1 cả nước về sản lượng khai thác hải sản.",
      "Đảo Phú Quốc (thành phố đảo đầu tiên của Việt Nam) - 'Đảo Ngọc' với bãi biển cát trắng mịn và rừng nguyên sinh.",
      "Ngư trường vịnh Thái Lan trù phú, điểm cuối cùng của đường bờ biển nước ta tại Mũi Nai (Hà Tiên)."
    ],
    economicStrengths: "Trồng lúa gạo chất lượng cao, đánh bắt và chế biến hải sản, nước mắm Phú Quốc truyền thống và du lịch nghỉ dưỡng.",
    atlatPages: ["Trang 19 (Nông nghiệp)", "Trang 20 (Thủy sản)", "Trang 30 (ĐBSCL)"],
    specializedTip: "Mẹo thi chuyên: Vựa lúa lớn nhất nước (sản lượng >4,5 triệu tấn/năm) và ngư trường đánh bắt ven biển lớn nhất."
  },
  {
    id: "camau",
    name: "Cà Mau",
    region: "Đồng bằng sông Cửu Long",
    coords: { x: 36, y: 94 },
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Điểm cực Nam của Tổ quốc trên đất liền tại Mũi Cà Mau (8°34'B, 104°40'Đ).",
      "Tỉnh duy nhất có 3 mặt tiếp giáp biển (vịnh Thái Lan và Biển Đông).",
      "Khu dự trữ sinh quyển thế giới Mũi Cà Mau với rừng ngập mặn đước, vẹt bạt ngàn lớn thứ hai thế giới (sau rừng Amazon)."
    ],
    economicStrengths: "Nuôi trồng và chế biến tôm xuất khẩu số 1 cả nước (tôm sinh thái dưới tán rừng ngập mặn), cụm công nghiệp Khí - Điện - Đạm Cà Mau.",
    atlatPages: ["Trang 4-5 (Hành chính)", "Trang 20 (Thủy sản)", "Trang 22 (Năng lượng)", "Trang 30 (ĐBSCL)"],
    specializedTip: "Mẹo thi chuyên: Đất Mũi Cà Mau hằng năm vẫn tiếp tục bồi lắng lấn ra biển từ 60 - 80m do phù sa sông Cửu Long theo dòng hải lưu ven bờ bồi đắp."
  },
  {
    id: "hoangsa",
    name: "Quần đảo Hoàng Sa",
    region: "Biển Đông (Trực thuộc TP. Đà Nẵng)",
    coords: { x: 82, y: 39 },
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Chủ quyền thiêng liêng và bất khả xâm phạm của nước Cộng hòa XHCN Việt Nam.",
      "Bao gồm trên 30 hòn đảo, bãi đá ngầm, cồn cát san hô nằm trên tuyến hàng hải quốc tế nhộn nhịp bậc nhất thế giới.",
      "Ngư trường truyền thống ngàn đời của ngư dân miền Trung đánh bắt cá ngừ đại dương, tôm hùm, hải sâm."
    ],
    economicStrengths: "Khai thác hải sản xa bờ, tiềm năng khoáng sản đáy biển (băng cháy) và vị trí chiến lược kiểm soát hàng hải.",
    atlatPages: ["Trang 4-5 (Hành chính)", "Trang 6-7 (Hình thể biển)"],
    specializedTip: "Mẹo thi chuyên: Đội dân binh Hoàng Sa kiêm quản Bắc Hải được triều đình phong kiến Việt Nam thành lập từ thế kỷ XVII để xác lập và thực thi chủ quyền."
  },
  {
    id: "truongsa",
    name: "Quần đảo Trường Sa",
    region: "Biển Đông (Trực thuộc tỉnh Khánh Hòa)",
    coords: { x: 84, y: 75 },
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Quần đảo tiền đồn phía Nam của Tổ quốc với hơn 100 hòn đảo, bãi đá san hô trải rộng trên diện tích biển hàng trăm nghìn km².",
      "Thị trấn Trường Sa, các xã đảo Sinh Tồn, Song Tử Tây và hệ thống nhà giàn DK1 sừng sững.",
      "Vùng đặc quyền kinh tế 200 hải lý xung quanh quần đảo chứa đựng tiềm năng tài nguyên biển vô tận."
    ],
    economicStrengths: "Đánh bắt hải sản đại dương xa bờ, dịch vụ hậu cần nghề cá, trạm cứu hộ cứu nạn quốc tế và nghiên cứu khí tượng hải văn.",
    atlatPages: ["Trang 4-5 (Hành chính)", "Trang 6-7 (Hình thể biển)"],
    specializedTip: "Mẹo thi chuyên: 'Trường Sa, Hoàng Sa là máu của máu Việt Nam, là thịt của thịt Việt Nam' - gắn liền với việc tuân thủ Công ước Quốc tế về Luật Biển UNCLOS 1982."
  }
];

interface AtlatLabProps {
  onEarnXp?: (points: number) => void;
}

export const AtlatLab: React.FC<AtlatLabProps> = ({ onEarnXp }) => {
  const [activeTabMode, setActiveTabMode] = useState<"challenges" | "provinces">("provinces");
  const [activeChallengeIndex, setActiveChallengeIndex] = useState<number>(0);
  const challenge: AtlatChallenge = ATLAT_CHALLENGES[activeChallengeIndex] || ATLAT_CHALLENGES[0];

  // Selected Province Inspector state
  const [selectedProvince, setSelectedProvince] = useState<ProvincePin | null>(PROVINCE_PINS[0]);

  // Interactive map states
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [activeLayers, setActiveLayers] = useState<string[]>([
    "Thủy sản & Ngư trường",
    "Thủy điện & Năng lượng",
    "Gió mùa & Khí hậu"
  ]);
  const [showLegend, setShowLegend] = useState<boolean>(true);

  // Progressive Hint Unlock System
  const [studentAnswer, setStudentAnswer] = useState<string>("");
  const [unlockedHintStep, setUnlockedHintStep] = useState<number>(0);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  const toggleLayer = (layerName: string) => {
    setActiveLayers((prev) =>
      prev.includes(layerName)
        ? prev.filter((l) => l !== layerName)
        : [...prev, layerName]
    );
  };

  const handleStudentSubmit = () => {
    if (!studentAnswer.trim()) return;
    setHasSubmitted(true);
    if (unlockedHintStep === 0) {
      setUnlockedHintStep(1);
    }
    if (onEarnXp) {
      onEarnXp(20);
    }
  };

  const unlockNextHint = () => {
    setUnlockedHintStep((prev) => Math.min(prev + 1, 5));
    if (onEarnXp) {
      onEarnXp(5);
    }
  };

  const allLayers = [
    { id: "hydro", label: "Sông ngòi & Thủy điện", color: "#1677B8" },
    { id: "climate", label: "Gió mùa & Khí hậu", color: "#E29578" },
    { id: "fishery", label: "Thủy sản & Ngư trường", color: "#146B5B" },
    { id: "regions", label: "Ranh giới các vùng", color: "#6C757D" },
  ];

  return (
    <section className="py-10 bg-[#F4F7F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title with crisp high contrast text */}
        <div className="text-left mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#146B5B] text-white text-xs sm:text-sm font-black uppercase tracking-wider mb-2 shadow-2xs">
            <Search className="w-4 h-4 text-[#FFF3B0]" />
            <span>Phòng Thực Hành Số Hóa Bản Đồ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900 tracking-tight">
            Phòng Thí Nghiệm Atlat Địa Lí Việt Nam
          </h2>
          <p className="text-base sm:text-lg text-slate-800 mt-2 max-w-3xl leading-relaxed font-normal">
            Bản đồ địa lí tương tác chi tiết: Khám phá các tỉnh thành trọng điểm trên khắp dải đất hình chữ S, xem hình ảnh thực tế và thực hành bóc tách số liệu bản đồ đạt điểm 10.
          </p>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-6 pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTabMode("provinces")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer border ${
                activeTabMode === "provinces"
                  ? "bg-[#146B5B] text-white border-[#146B5B] shadow-sm"
                  : "bg-white text-slate-800 hover:bg-slate-50 border-slate-300"
              }`}
            >
              🗺️ Khám phá Tỉnh thành & Hình ảnh thực tế ({PROVINCE_PINS.length} địa phương)
            </button>
            <button
              onClick={() => setActiveTabMode("challenges")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer border ${
                activeTabMode === "challenges"
                  ? "bg-[#1677B8] text-white border-[#1677B8] shadow-sm"
                  : "bg-white text-slate-800 hover:bg-slate-50 border-slate-300"
              }`}
            >
              🔍 Bài tập & Thử thách giải Atlat chuyên sâu
            </button>
          </div>

          <div className="text-xs font-bold text-slate-700 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
            💡 Nhấp vào bất kỳ điểm mốc trên bản đồ để tra cứu ảnh và số liệu
          </div>
        </div>

        {/* Challenge Tabs when in challenges mode */}
        {activeTabMode === "challenges" && (
          <div className="flex items-center gap-2.5 overflow-x-auto pb-3 mb-6 no-scrollbar">
            {ATLAT_CHALLENGES.map((ch, idx) => (
              <button
                key={ch.id}
                onClick={() => {
                  setActiveChallengeIndex(idx);
                  setUnlockedHintStep(0);
                  setHasSubmitted(false);
                  setStudentAnswer("");
                }}
                className={`px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer border ${
                  activeChallengeIndex === idx
                    ? "bg-[#146B5B] text-white border-[#146B5B] shadow-xs font-extrabold"
                    : "bg-white text-slate-800 hover:bg-slate-50 border-slate-300"
                }`}
              >
                {ch.title}
              </button>
            ))}
          </div>
        )}

        {/* Workbench Layout: 12-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Central Digital Map View (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border-2 border-slate-300 shadow-sm overflow-hidden flex flex-col relative">
            {/* Map Action Toolbar */}
            <div className="p-3 bg-slate-100 border-b border-slate-200 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-[#146B5B]" />
                  <span>Trang tra cứu: <strong>{activeTabMode === "challenges" ? challenge.atlatPage : (selectedProvince?.atlatPages[0] || "Trang 4-5")}</strong></span>
                </span>
                <span className="hidden sm:inline-block text-xs px-2.5 py-0.5 bg-[#146B5B] text-white rounded-md font-bold">
                  {activeTabMode === "challenges" ? challenge.targetRegion : (selectedProvince?.region || "Việt Nam")}
                </span>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleZoomIn}
                  className="p-1.5 rounded-lg bg-white border border-slate-300 text-slate-800 hover:bg-slate-100 cursor-pointer shadow-2xs font-bold"
                  title="Phóng to"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={handleZoomOut}
                  className="p-1.5 rounded-lg bg-white border border-slate-300 text-slate-800 hover:bg-slate-100 cursor-pointer shadow-2xs font-bold"
                  title="Thu nhỏ"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={handleResetZoom}
                  className="p-1.5 rounded-lg bg-white border border-slate-300 text-slate-800 hover:bg-slate-100 cursor-pointer shadow-2xs font-bold"
                  title="Đặt lại tỉ lệ"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setShowLegend(!showLegend)}
                  className={`px-2.5 py-1 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                    showLegend ? "bg-[#146B5B] text-white border-[#146B5B]" : "bg-white text-slate-800 border-slate-300"
                  }`}
                >
                  Chú giải
                </button>
              </div>
            </div>

            {/* Interactive Map Canvas Container */}
            <div className="relative h-[500px] bg-gradient-to-br from-sky-100/50 via-emerald-50/40 to-slate-100 overflow-hidden flex items-center justify-center p-3 select-none">
              <div 
                className="w-full h-full transition-transform duration-300 ease-out flex items-center justify-center"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full max-h-[460px] drop-shadow-md select-none"
                >
                  {/* Grid Lines */}
                  <line x1="10" y1="20" x2="90" y2="20" stroke="#94A3B8" strokeWidth="0.3" strokeDasharray="2 2" />
                  <line x1="10" y1="50" x2="90" y2="50" stroke="#94A3B8" strokeWidth="0.3" strokeDasharray="2 2" />
                  <line x1="10" y1="80" x2="90" y2="80" stroke="#94A3B8" strokeWidth="0.3" strokeDasharray="2 2" />
                  <line x1="30" y1="5" x2="30" y2="95" stroke="#94A3B8" strokeWidth="0.3" strokeDasharray="2 2" />
                  <line x1="60" y1="5" x2="60" y2="95" stroke="#94A3B8" strokeWidth="0.3" strokeDasharray="2 2" />

                  {/* Vietnam Map S-Shape Landmass */}
                  <path
                    d="M 40 8 
                       Q 55 10 65 14 
                       Q 68 18 60 22 
                       Q 45 25 48 35 
                       Q 55 42 62 48 
                       Q 65 58 60 68 
                       Q 52 75 48 82 
                       Q 40 90 35 93 
                       Q 30 90 35 84 
                       Q 42 78 45 70 
                       Q 48 58 40 45 
                       Q 32 35 30 20 
                       Q 30 12 40 8 Z"
                    fill="#146B5B"
                    fillOpacity="0.22"
                    stroke="#146B5B"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />

                  {/* Major Rivers */}
                  <path d="M 35 10 Q 42 15 50 19" fill="none" stroke="#1677B8" strokeWidth="1.2" />
                  <path d="M 48 35 Q 52 38 56 42" fill="none" stroke="#1677B8" strokeWidth="1.0" />
                  <path d="M 42 75 Q 46 84 36 90" fill="none" stroke="#1677B8" strokeWidth="1.4" />

                  {/* Islands: Hoàng Sa & Trường Sa with crisp dark labels */}
                  <g className="cursor-pointer" onClick={() => setSelectedProvince(PROVINCE_PINS.find(p => p.id === "hoangsa") || null)}>
                    <circle cx="82" cy="39" r="2.2" fill="#1677B8" stroke="#FFFFFF" strokeWidth="0.8" />
                    <circle cx="79" cy="37" r="1.4" fill="#1677B8" />
                    <circle cx="84" cy="41" r="1.4" fill="#1677B8" />
                    <rect x="74" y="42" width="18" height="4" rx="1" fill="#FFFFFF" opacity="0.9" />
                    <text x="83" y="45" fontSize="2.8" fill="#0F172A" fontWeight="900" textAnchor="middle">QĐ. Hoàng Sa</text>
                  </g>

                  <g className="cursor-pointer" onClick={() => setSelectedProvince(PROVINCE_PINS.find(p => p.id === "truongsa") || null)}>
                    <circle cx="84" cy="75" r="2.2" fill="#1677B8" stroke="#FFFFFF" strokeWidth="0.8" />
                    <circle cx="81" cy="73" r="1.4" fill="#1677B8" />
                    <circle cx="86" cy="77" r="1.4" fill="#1677B8" />
                    <rect x="75" y="79" width="18" height="4" rx="1" fill="#FFFFFF" opacity="0.9" />
                    <text x="84" y="82" fontSize="2.8" fill="#0F172A" fontWeight="900" textAnchor="middle">QĐ. Trường Sa</text>
                  </g>

                  {/* Đảo Phú Quốc */}
                  <g className="cursor-pointer" onClick={() => setSelectedProvince(PROVINCE_PINS.find(p => p.id === "kiengiang") || null)}>
                    <circle cx="30" cy="89" r="2.0" fill="#146B5B" stroke="#FFFFFF" strokeWidth="0.8" />
                    <text x="28" y="93" fontSize="2.5" fill="#0F172A" fontWeight="900" textAnchor="middle">Đ. Phú Quốc</text>
                  </g>

                  {/* Province Interactive Pins */}
                  {PROVINCE_PINS.map((pin) => {
                    const isSelected = selectedProvince?.id === pin.id;
                    return (
                      <g
                        key={pin.id}
                        className="cursor-pointer group"
                        onClick={() => setSelectedProvince(pin)}
                      >
                        {isSelected && (
                          <circle
                            cx={pin.coords.x}
                            cy={pin.coords.y}
                            r="5"
                            fill="#E11D48"
                            opacity="0.35"
                            className="animate-ping"
                          />
                        )}
                        <circle
                          cx={pin.coords.x}
                          cy={pin.coords.y}
                          r={isSelected ? "3.2" : "2.0"}
                          fill={isSelected ? "#E11D48" : "#146B5B"}
                          stroke="#FFFFFF"
                          strokeWidth="0.8"
                          className="transition-transform group-hover:scale-125"
                        />
                        {/* Text label with white halo for maximum contrast */}
                        <text
                          x={pin.coords.x}
                          y={pin.coords.y - 3}
                          fontSize="2.4"
                          fill="#0F172A"
                          fontWeight="900"
                          textAnchor="middle"
                          stroke="#FFFFFF"
                          strokeWidth="0.6"
                          paintOrder="stroke fill"
                          className="select-none pointer-events-none"
                        >
                          {pin.name}
                        </text>
                      </g>
                    );
                  })}

                  {/* Challenge Pin Highlight when in challenges mode */}
                  {activeTabMode === "challenges" && (
                    <g className="animate-bounce">
                      <circle
                        cx={challenge.coordinates.x}
                        cy={challenge.coordinates.y}
                        r="6"
                        fill="#DC2626"
                        opacity="0.3"
                        className="animate-ping"
                      />
                      <circle
                        cx={challenge.coordinates.x}
                        cy={challenge.coordinates.y}
                        r="3.5"
                        fill="#DC2626"
                        stroke="#FFFFFF"
                        strokeWidth="1.2"
                      />
                      <text
                        x={challenge.coordinates.x}
                        y={challenge.coordinates.y + 7}
                        fontSize="3.0"
                        fill="#991B1B"
                        fontWeight="900"
                        stroke="#FFFFFF"
                        strokeWidth="0.5"
                        textAnchor="middle"
                      >
                        🎯 Mục tiêu thử thách
                      </text>
                    </g>
                  )}
                </svg>
              </div>

              {/* Floating Legend Card with dark high contrast text */}
              {showLegend && (
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-300 shadow-md text-left text-xs max-w-xs">
                  <div className="font-black text-slate-900 mb-1.5 flex items-center justify-between">
                    <span>Chú giải bản đồ số:</span>
                    <button 
                      onClick={() => setShowLegend(false)}
                      className="text-slate-500 hover:text-slate-900 font-bold ml-2"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="space-y-1.5 text-slate-800 font-medium">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-rose-600 shrink-0" />
                      <span>Điểm tỉnh/thành đang chọn</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-[#146B5B] shrink-0" />
                      <span>Các tỉnh/thành phố trọng điểm</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-1 bg-[#1677B8] shrink-0" />
                      <span>Hệ thống sông ngòi & trữ năng thủy điện</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Province Inspector or Socratic Challenge Feedback (5 cols) */}
          <div className="lg:col-span-5 space-y-4 text-left">
            {activeTabMode === "provinces" && selectedProvince ? (
              /* PROVINCE DETAILED INSPECTOR CARD */
              <div className="bg-white rounded-2xl border-2 border-slate-300 p-5 shadow-sm space-y-4">
                <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-200">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#146B5B] bg-[#E8F5EF] px-2.5 py-1 rounded-md">
                      {selectedProvince.region}
                    </span>
                    <h3 className="text-2xl font-black font-display text-slate-900 mt-1">
                      {selectedProvince.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-slate-700 bg-slate-100 px-2 py-1 rounded">
                    <MapPin className="w-3.5 h-3.5 text-rose-600" />
                    <span>Toạ độ: {selectedProvince.coords.x}%, {selectedProvince.coords.y}%</span>
                  </div>
                </div>

                {/* Real Landmark / Landscape Image */}
                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-2xs relative">
                  <img
                    src={selectedProvince.image}
                    alt={selectedProvince.name}
                    className="w-full h-48 sm:h-52 object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 to-transparent p-2.5 text-white text-xs font-bold">
                    📍 Cảnh quan & địa danh tiêu biểu của {selectedProvince.name}
                  </div>
                </div>

                {/* Key Geographic Highlights */}
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-[#146B5B]" />
                    <span>Đặc điểm địa lí nổi bật:</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-800 leading-relaxed pl-3 list-disc font-medium">
                    {selectedProvince.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>

                {/* Economic Strengths */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <span className="font-black text-slate-900 block mb-1">
                    🏭 Thế mạnh kinh tế chủ lực:
                  </span>
                  <p className="text-slate-800 leading-relaxed font-normal">
                    {selectedProvince.economicStrengths}
                  </p>
                </div>

                {/* Atlat lookup pages */}
                <div className="flex flex-wrap items-center gap-1.5 text-xs">
                  <span className="font-black text-slate-900 shrink-0">Trang Atlat đối chiếu:</span>
                  {selectedProvince.atlatPages.map((page, pIdx) => (
                    <span
                      key={pIdx}
                      className="px-2.5 py-0.5 rounded-md bg-[#1677B8] text-white font-bold text-[11px]"
                    >
                      {page}
                    </span>
                  ))}
                </div>

                {/* Specialized Exam Tip */}
                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-300 text-xs text-amber-950 font-medium">
                  <span className="font-black text-amber-900 block mb-0.5">
                    ⭐ Mẹo thi học sinh giỏi & chuyên:
                  </span>
                  {selectedProvince.specializedTip}
                </div>
              </div>
            ) : (
              /* CHALLENGE SOCRATIC FEEDBACK PANEL */
              <div className="space-y-4">
                <div className="bg-white rounded-2xl border-2 border-slate-300 p-5 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-white bg-[#146B5B] px-2.5 py-1 rounded-md">
                      🔍 {challenge.title}
                    </span>
                    <span className="text-xs text-slate-800 font-bold">
                      {challenge.atlatPage}
                    </span>
                  </div>

                  <div className="font-black text-sm sm:text-base text-slate-900 leading-snug">
                    {challenge.prompt}
                  </div>

                  <p className="text-xs text-slate-800 leading-relaxed font-medium">
                    {challenge.initialQuestion}
                  </p>

                  {/* Student Answer Input Box */}
                  <div className="space-y-2 pt-2">
                    <label className="text-xs font-black text-slate-900 block">
                      Khu vực nhập câu trả lời của bạn:
                    </label>
                    <textarea
                      value={studentAnswer}
                      onChange={(e) => setStudentAnswer(e.target.value)}
                      placeholder="Ví dụ: Dựa vào Atlat trang 20, vùng có sản lượng thủy sản lớn nhất là... Nguyên nhân tự nhiên gồm... Nguyên nhân kinh tế gồm..."
                      rows={3}
                      className="w-full p-3 rounded-xl border-2 border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#146B5B] focus:ring-1 focus:ring-[#146B5B]"
                    />

                    <div className="flex items-center justify-between pt-1">
                      <button
                        onClick={handleStudentSubmit}
                        disabled={!studentAnswer.trim()}
                        className="px-4 py-2 rounded-xl bg-[#146B5B] text-white text-xs font-black hover:bg-[#0f5548] active:scale-95 transition-all disabled:opacity-50 cursor-pointer shadow-xs"
                      >
                        Gửi câu trả lời & Mở khóa gợi ý
                      </button>

                      {hasSubmitted && unlockedHintStep < 5 && (
                        <button
                          onClick={unlockNextHint}
                          className="text-xs font-black text-[#1677B8] hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <span>Mở khóa bước tiếp theo</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Hints 1 to 5 with crisp contrast */}
                {hasSubmitted && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-black text-slate-800 px-1">
                      <span>Hệ thống phân tích sư phạm đa tầng:</span>
                      <span className="text-[#146B5B]">Bước {unlockedHintStep}/5</span>
                    </div>

                    {unlockedHintStep >= 1 && (
                      <div className="p-4 rounded-xl bg-amber-50 border-2 border-amber-300 text-xs text-amber-950 space-y-1">
                        <div className="font-black text-amber-900 flex items-center gap-1.5">
                          <Lightbulb className="w-4 h-4 text-amber-700" />
                          <span>Gợi ý 1: Quan sát số liệu & màu sắc bản đồ</span>
                        </div>
                        <p className="leading-relaxed font-medium">{challenge.hints[0]}</p>
                      </div>
                    )}

                    {unlockedHintStep >= 2 && (
                      <div className="p-4 rounded-xl bg-sky-50 border-2 border-sky-300 text-xs text-sky-950 space-y-1">
                        <div className="font-black text-sky-900 flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4 text-sky-700" />
                          <span>Gợi ý 2: Bóc tách yếu tố tự nhiên then chốt</span>
                        </div>
                        <p className="leading-relaxed font-medium">{challenge.hints[1]}</p>
                      </div>
                    )}

                    {unlockedHintStep >= 3 && (
                      <div className="p-4 rounded-xl bg-emerald-50 border-2 border-emerald-300 text-xs text-emerald-950 space-y-1">
                        <div className="font-black text-emerald-900 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                          <span>Gợi ý 3: Kết nối yếu tố kinh tế - xã hội & nhân lực</span>
                        </div>
                        <p className="leading-relaxed font-medium">{challenge.hints[2]}</p>
                      </div>
                    )}

                    {unlockedHintStep >= 4 && (
                      <div className="p-4 rounded-xl bg-purple-50 border-2 border-purple-300 text-xs text-purple-950 space-y-1">
                        <div className="font-black text-purple-900 flex items-center gap-1.5">
                          <span>🧠</span>
                          <span>Phân tích tư duy chuyên sâu:</span>
                        </div>
                        <p className="leading-relaxed font-medium">{challenge.deepAnalysis}</p>
                      </div>
                    )}

                    {unlockedHintStep >= 5 && (
                      <div className="p-4 rounded-xl bg-white border-2 border-[#146B5B] text-xs text-slate-900 space-y-2 shadow-sm">
                        <div className="font-black text-sm text-[#146B5B] flex items-center gap-1.5">
                          <FileCheck className="w-4 h-4 text-[#146B5B]" />
                          <span>Đáp án mẫu chuẩn thi Học sinh giỏi & Chuyên:</span>
                        </div>
                        <div className="p-3 bg-slate-50 rounded-lg whitespace-pre-line leading-relaxed font-medium text-slate-900">
                          {challenge.modelAnswer}
                        </div>
                      </div>
                    )}

                    {unlockedHintStep < 5 && (
                      <button
                        onClick={unlockNextHint}
                        className="w-full py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-xs font-black text-slate-800 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>Xem tiếp {unlockedHintStep === 1 ? "Gợi ý 2" : unlockedHintStep === 2 ? "Gợi ý 3" : unlockedHintStep === 3 ? "Phân tích chuyên sâu" : "Đáp án mẫu đầy đủ"}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
