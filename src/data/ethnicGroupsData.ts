export interface EthnicGroup {
  id: string;
  name: string;
  otherNames?: string[];
  languageFamily: string; // Ngữ hệ (Nam Á, Hán - Tạng, Nam Đảo, Thái - Kadai, H'Mông - Dao)
  languageGroup: string;  // Nhóm ngôn ngữ (Việt - Mường, Tày - Thái, Môn - Khmer, v.v.)
  populationApprox: string; // Số dân ước tính
  percentageTotal: string; // Tỉ lệ % dân số cả nước
  primaryRegions: string[]; // Địa bàn cư trú chủ yếu
  culturalFeatures: {
    architecture: string;   // Nhà ở (nhà sàn, nhà đất, nhà rông, nhà dài...)
    costume: string;        // Trang phục truyền thống đặc trưng
    festivals: string[];    // Lễ hội truyền thống tiêu biểu
    economicLife: string;   // Hoạt động kinh tế chủ yếu (lúa nước, nương rẫy, thủ công...)
    socialCustoms: string;  // Tổ chức xã hội & phong tục (chế độ mẫu hệ/phụ hệ, hôn nhân, âm nhạc...)
  };
  highlightQuote: string;
  image: string;
}

export const ETHNIC_GROUPS: EthnicGroup[] = [
  {
    id: "kinh",
    name: "Kinh (Việt)",
    otherNames: ["Người Việt"],
    languageFamily: "Nam Á (Austroasiatic)",
    languageGroup: "Việt - Mường",
    populationApprox: "Khoảng 82 triệu người",
    percentageTotal: "Khoảng 85,3% dân số cả nước",
    primaryRegions: ["Đồng bằng sông Hồng", "Đồng bằng sông Cửu Long", "Duyên hải miền Trung", "Đô thị toàn quốc"],
    culturalFeatures: {
      architecture: "Nhà ba gian hai chái truyền thống bằng gỗ lim, mái ngói đỏ; ngày nay phổ biến nhà kiên cố, nhà phố hiện đại.",
      costume: "Áo dài truyền thống duyên dáng, áo bà ba (Nam Bộ), nón lá, khăn rằn.",
      festivals: ["Tết Nguyên Đán", "Giỗ Tổ Hùng Vương (10/3 âm lịch)", "Hội Lim", "Hội Chùa Hương", "Tết Trung Thu"],
      economicLife: "Thâm canh lúa nước trình độ cao, đánh bắt và nuôi trồng thủy sản, phát triển mạnh mẽ công nghiệp, tiểu thủ công nghiệp và dịch vụ hiện đại.",
      socialCustoms: "Chế độ phụ hệ, truyền thống tôn sư trọng đạo, uống nước nhớ nguồn, gắn kết làng xã qua đình làng, giếng nước, cây đa."
    },
    highlightQuote: "Là lực lượng nòng cốt trong sự nghiệp thống nhất và phát triển đất nước, đóng vai trò kết nối cộng đồng 54 dân tộc.",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "tay",
    name: "Tày",
    otherNames: ["Thổ"],
    languageFamily: "Thái - Kadai",
    languageGroup: "Tày - Thái",
    populationApprox: "Hơn 1,85 triệu người",
    percentageTotal: "Khoảng 1,9% (Dân tộc thiểu số đông nhất Việt Nam)",
    primaryRegions: ["Lạng Sơn", "Cao Bằng", "Tuyên Quang", "Hà Giang", "Bắc Kạn", "Yên Bái"],
    culturalFeatures: {
      architecture: "Nhà sàn bằng gỗ quý, lợp ngói máng hoặc lá cọ, sàn cao thoáng chống thú dữ và ẩm mốc.",
      costume: "Trang phục màu chàm đen giản dị, đồng nhất, phụ nữ đeo vòng cổ bạc và thắt lưng lụa xanh.",
      festivals: ["Lễ hội Lồng Tồng (Xuống đồng đầu xuân)", "Hội nàng Hai", "Hội đền Kỳ Cùng"],
      economicLife: "Canh tác lúa nước ở thung lũng, làm ruộng bậc thang, trồng hồi, quế, thuốc lá; nghề dệt thổ cẩm hoa văn tinh xảo.",
      socialCustoms: "Nghệ thuật Hát Then cùng cây Đàn Tính đã được UNESCO ghi danh là Di sản văn hóa phi vật thể của nhân loại."
    },
    highlightQuote: "Đàn Tính, điệu Then là linh hồn trong đời sống tâm linh, gắn kết sâu sắc con người với trời đất và bản làng.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "thai",
    name: "Thái",
    otherNames: ["Tày Đăm (Thái Đen)", "Tày Đón (Thái Trắng)"],
    languageFamily: "Thái - Kadai",
    languageGroup: "Tày - Thái",
    populationApprox: "Khoảng 1,82 triệu người",
    percentageTotal: "Khoảng 1,8%",
    primaryRegions: ["Sơn La", "Điện Biên", "Lai Châu", "Nghệ An", "Thanh Hóa", "Yên Bái"],
    culturalFeatures: {
      architecture: "Nhà sàn hình mai rùa đặc trưng với khau cút trang trí trên nóc nhà (Thái Đen), kết cấu cột gỗ vững chãi.",
      costume: "Phụ nữ mặc áo cóm bó sát khoe đường cong, váy đen dài chấm gót, thắt lưng xanh, đầu đội khăn Piêu thêu hoa văn sặc sỡ.",
      festivals: ["Lễ hội Xên Mường, Xên Bản", "Lễ Kin Pang Then", "Lễ hội hoa Ban Điện Biên"],
      economicLife: "Kỹ thuật dẫn nước làm ruộng bậc thang tài tình ('Mương - Phai - Lái - Lịn'), trồng lúa nếp cẩm, chăn nuôi gia súc, dệt vải thổ cẩm.",
      socialCustoms: "Điệu múa Xòe Thái rộn ràng đã được UNESCO công nhận là Di sản văn hóa thế giới; tục tằng cẩu (búi tóc) của phụ nữ khi lấy chồng."
    },
    highlightQuote: "‘Không xòe không vui, không xòe lúa không trổ bông, cây không nở hoa’. Xòe Thái là biểu tượng của tinh thần hiếu khách.",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "muong",
    name: "Mường",
    otherNames: ["Mol", "Mual"],
    languageFamily: "Nam Á (Austroasiatic)",
    languageGroup: "Việt - Mường (Cùng nguồn gốc cổ xưa với người Kinh)",
    populationApprox: "Khoảng 1,45 triệu người",
    percentageTotal: "Khoảng 1,5%",
    primaryRegions: ["Hòa Bình", "Thanh Hóa", "Phú Thọ", "Sơn La", "Hà Nội (Ba Vì)"],
    culturalFeatures: {
      architecture: "Nhà sàn bốn mái bằng gỗ, tre, vách nứa, gầm sàn trước kia nuôi gia súc nay để trống sạch sẽ.",
      costume: "Trang phục phụ nữ nổi bật với cạp váy dệt hoa văn hình học cầu kỳ, yếm trắng, áo ngắn (pắn) và khăn đội đầu màu trắng.",
      festivals: ["Lễ hội Khai hạ (Mở cửa rừng)", "Lễ hội Cầu Mưa", "Lễ hội Chùa Tiên"],
      economicLife: "Trồng lúa nước ở các thung lũng đá vôi, làm nương rẫy, hái lượm lâm sản, làm cơm lam, ủ rượu cần.",
      socialCustoms: "Sử thi ‘Đẻ đất đẻ nước’ đồ sộ; dàn Cồng Chiêng Mường linh thiêng gắn liền với từng nghi thức vòng đời con người."
    },
    highlightQuote: "Người Mường và người Kinh có chung nguồn gốc Việt - Mường cổ, lưu giữ đậm đà bản sắc văn hóa Đông Sơn rực rỡ.",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "hmong",
    name: "H'Mông (Mông)",
    otherNames: ["Mèo", "Mông Trắng", "Mông Hoa", "Mông Đỏ", "Mông Đen", "Mông Xanh"],
    languageFamily: "H'Mông - Dao",
    languageGroup: "H'Mông",
    populationApprox: "Khoảng 1,39 triệu người",
    percentageTotal: "Khoảng 1,45%",
    primaryRegions: ["Hà Giang", "Lào Cai", "Sơn La", "Điện Biên", "Lai Châu", "Yên Bái", "Tây Nguyên (di cư)"],
    culturalFeatures: {
      architecture: "Nhà trình tường bằng đất dày dặn, mái lợp ngói âm dương hoặc ván gỗ pơ mu, kín gió để giữ ấm mùa đông khắc nghiệt.",
      costume: "Váy xòe xếp nếp rực rỡ bằng vải lanh, thêu hoa văn cầu kỳ kết hợp kỹ thuật vẽ sáp ong độc đáo, trang sức bạc tinh xảo.",
      festivals: ["Lễ hội Gầu Tào (Cầu phúc, cầu mệnh)", "Chợ tình Khau Vai", "Tết người Mông vào tháng 11-12 âm lịch"],
      economicLife: "Canh tác lúa và ngô trên các hốc đá tai mèo và ruộng bậc thang cheo leo, nuôi ngựa thồ, rèn đúc dao cuốc sắc bén.",
      socialCustoms: "Tiếng khèn Mông tha thiết gọi bạn tình, nghệ thuật múa khèn điêu luyện, tính cộng đồng dòng họ vô cùng bền chặt."
    },
    highlightQuote: "Sức sống mãnh liệt nở hoa trên cao nguyên đá; chiếc khèn Mông là tiếng lòng của người vùng cao gửi vào đại ngàn.",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "dao",
    name: "Dao",
    otherNames: ["Kìm Miền", "Dao Đỏ", "Dao Quần Chẹt", "Dao Tiền", "Dao Thanh Y", "Dao Áo Dài"],
    languageFamily: "H'Mông - Dao",
    languageGroup: "Dao",
    populationApprox: "Khoảng 890.000 người",
    percentageTotal: "Khoảng 0,9%",
    primaryRegions: ["Hà Giang", "Tuyên Quang", "Lào Cai", "Yên Bái", "Quảng Ninh", "Bắc Kạn"],
    culturalFeatures: {
      architecture: "Nhà nửa sàn nửa đất hoặc nhà đất vững chãi nép mình bên sườn đồi, rừng cây.",
      costume: "Khăn đội đầu màu đỏ rực rỡ (Dao Đỏ) đính nhiều quả bông len; đính đồng tiền bạc (Dao Tiền) tạo âm thanh vui tai.",
      festivals: ["Lễ Cấp Sắc (Nghi lễ trưởng thành cho nam giới)", "Lễ hội Nhảy Lửa", "Tết Nhảy"],
      economicLife: "Canh tác nương rẫy, trồng thảo quả, quế, hồi; y học cổ truyền nổi tiếng với bài thuốc tắm lá thảo dược quý.",
      socialCustoms: "Sử dụng chữ Nôm Dao để ghi chép gia phả, sách cúng; tín ngưỡng thờ Bàn Vương thủy tổ thiêng liêng."
    },
    highlightQuote: "Lễ Cấp Sắc là dấu mốc khẳng định sự trưởng thành về đạo đức và trách nhiệm với gia đình, dòng họ và buôn làng.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "khmer",
    name: "Khmer",
    otherNames: ["Khmer Nam Bộ", "Khmer Krôm"],
    languageFamily: "Nam Á (Austroasiatic)",
    languageGroup: "Môn - Khmer",
    populationApprox: "Khoảng 1,32 triệu người",
    percentageTotal: "Khoảng 1,37%",
    primaryRegions: ["Sóc Trăng", "Trà Vinh", "Kiên Giang", "An Giang", "Bạc Liêu", "Cà Mau"],
    culturalFeatures: {
      architecture: "Chùa Phật giáo Nam Tông Khmer với mái uốn cong nhiều tầng, hình tượng thần chim Garuda, rắn thần Naga tráng lệ.",
      costume: "Trang phục bằng lụa tơ tằm mềm mại; sà rông, áo tầm vông thanh lịch; trang phục múa đính kim sa lấp lánh.",
      festivals: ["Lễ hội Ok Om Bok (Cúng Trăng và đua ghe Ngo)", "Tết Chôl Chnăm Thmây (Đón năm mới)", "Lễ Sene Dolta (Báo hiếu ông bà)"],
      economicLife: "Thâm canh lúa nước trên đồng bằng phù sa, đánh bắt cá tôm nước ngọt và lợ, nghề đan đát và làm đường thốt nốt.",
      socialCustoms: "Đạo Phật Nam Tông chi phối sâu sắc nếp sống; nam thanh niên có tục tu báo hiếu tại chùa trước khi lập gia đình; điệu múa Răm vông say đắm."
    },
    highlightQuote: "Tiếng trống Sadăm rộn rã và đường đua ghe Ngo xé nước trên dòng sông Maspero là biểu tượng rực rỡ của văn hóa Khmer.",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "muong-tay-nguyen-ede",
    name: "Ê Đê",
    otherNames: ["Ra-đê", "Đê"],
    languageFamily: "Nam Đảo (Austronesian)",
    languageGroup: "Mã Lai - Đa Đảo",
    populationApprox: "Khoảng 400.000 người",
    percentageTotal: "Khoảng 0,42%",
    primaryRegions: ["Đắk Lắk", "Gia Lai", "Phú Yên", "Khánh Hòa"],
    culturalFeatures: {
      architecture: "Nhà dài truyền thống bằng gỗ, tre, nứa; cầu thang đực chạm trăng khuyết, cầu thang cái chạm đôi bầu sữa mẹ thiêng liêng.",
      costume: "Trang phục màu đen hoặc chàm thêu hoa văn đỏ, vàng rực rỡ; phụ nữ mặc váy tấm, áo chui đầu xẻ ngang vai.",
      festivals: ["Lễ cúng bến nước", "Lễ mừng lúa mới", "Hội đua voi Buôn Đôn"],
      economicLife: "Trồng cà phê, cao su, hồ tiêu, lúa rẫy; dệt thổ cẩm bằng khung dệt cổ truyền; đan gùi mây tinh xảo.",
      socialCustoms: "Chế độ mẫu hệ bền vững: Con cái theo họ mẹ, của cải thừa kế cho con gái út, người phụ nữ quyết định hôn nhân."
    },
    highlightQuote: "Nhà dài như tiếng chiêng ngân xa; trường ca Đăm Săn bất hủ khẳng định khí phách người anh hùng Tây Nguyên vĩ đại.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gia-rai",
    name: "Gia Rai",
    otherNames: ["Jrai", "Chơ Rai"],
    languageFamily: "Nam Đảo (Austronesian)",
    languageGroup: "Mã Lai - Đa Đảo",
    populationApprox: "Khoảng 515.000 người",
    percentageTotal: "Khoảng 0,53%",
    primaryRegions: ["Gia Lai", "Kon Tum", "Đắk Lắk"],
    culturalFeatures: {
      architecture: "Nhà Rông cao vút giữa buôn làng là trung tâm sinh hoạt tín ngưỡng; nhà mồ với tượng gỗ dân gian độc đáo.",
      costume: "Trang phục nam đóng khố, mặc áo khoác cộc tay; nữ mặc váy quấn và áo thêu hoa văn hình học viền đỏ.",
      festivals: ["Lễ Pơthi (Bỏ mả)", "Lễ mừng nhà Rông mới", "Lễ cúng Yàng mưa"],
      economicLife: "Làm nương rẫy và ruộng nước, trồng cây công nghiệp dài ngày (cà phê, cao su), chăn nuôi bò, ngựa.",
      socialCustoms: "Gia đình mẫu hệ; nghệ thuật tạc tượng nhà mồ biểu cảm; chủ thể quan trọng của Không gian văn hóa Cồng chiêng Tây Nguyên."
    },
    highlightQuote: "Bên ánh lửa bập bùng và ché rượu cần vít cong cần trúc, tiếng cồng chiêng ngân vang nối đất trời với tiền nhân.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cham",
    name: "Chăm",
    otherNames: ["Chàm", "Chiêm Thành"],
    languageFamily: "Nam Đảo (Austronesian)",
    languageGroup: "Mã Lai - Đa Đảo",
    populationApprox: "Khoảng 180.000 người",
    percentageTotal: "Khoảng 0,19%",
    primaryRegions: ["Ninh Thuận", "Bình Thuận", "An Giang", "Tây Ninh", "TP. Hồ Chí Minh"],
    culturalFeatures: {
      architecture: "Tháp Chăm bằng gạch nung nung kết kỳ diệu không lộ mạch vữa (Tháp Po Klong Garai, Mỹ Sơn...).",
      costume: "Áo dài Chăm truyền thống kín đáo, phụ nữ đội khăn choàng Mat’ra nhẹ nhàng, quấn thắt lưng dệt hoa văn tỉ mỉ.",
      festivals: ["Lễ hội Katê (Tháng 7 lịch Chăm - tôn vinh các vị vua anh minh)", "Lễ hội Ramưwan (Chăm Hồi giáo Bani)"],
      economicLife: "Nông nghiệp lúa nước, làm gốm Bàu Trúc thủ công bằng tay (không dùng bàn xoay), dệt thổ cẩm Mỹ Nghiệp rực rỡ.",
      socialCustoms: "Chế độ mẫu hệ (Chăm Bà-la-môn giáo); nhạc cụ kèn Saranai và trống Paranưng đặc trưng tạo nên giai điệu huyền bí."
    },
    highlightQuote: "Gốm Bàu Trúc mộc mạc và vũ điệu Apsara uyển chuyển phản chiếu nền văn minh rực rỡ bên bờ Biển Đông.",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ba-na",
    name: "Ba Na",
    otherNames: ["Bơ Nâm", "Rơ Ngao"],
    languageFamily: "Nam Á (Austroasiatic)",
    languageGroup: "Môn - Khmer",
    populationApprox: "Khoảng 290.000 người",
    percentageTotal: "Khoảng 0,3%",
    primaryRegions: ["Gia Lai", "Kon Tum", "Bình Định", "Phú Yên"],
    culturalFeatures: {
      architecture: "Nhà Rông cao lớn uy nghi như cánh buồm vươn lên giữa đại ngàn, lợp bằng cỏ tranh dày dặn.",
      costume: "Tông màu chủ đạo là đen, trắng và đỏ; nam đóng khố, nữ mặc váy và áo chui đầu đính hạt cườm trang trí.",
      festivals: ["Lễ đâm trâu truyền thống", "Lễ mừng lúa mới", "Hội thổi kèn Đinh Năm"],
      economicLife: "Canh tác lúa rẫy bằng chọc lỗ tra hạt, săn bắt hái lượm truyền thống, chăn nuôi gia súc thả rông.",
      socialCustoms: "Tổ chức xã hội theo làng (Pleik); kho tàng sử sử thi H’mon đồ sộ kể về công cuộc mở mang buôn làng."
    },
    highlightQuote: "Mái nhà Rông Ba Na là biểu tượng của tinh thần thượng võ, sự kiêu hãnh và sức mạnh cố kết toàn cộng đồng.",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "hoa",
    name: "Hoa",
    otherNames: ["Người Khách", "Triều Châu", "Quảng Đông", "Phúc Kiến"],
    languageFamily: "Hán - Tạng",
    languageGroup: "Hán",
    populationApprox: "Khoảng 750.000 người",
    percentageTotal: "Khoảng 0,78%",
    primaryRegions: ["TP. Hồ Chí Minh (Chợ Lớn)", "Đồng Nai", "Sóc Trăng", "Kiên Giang", "Hà Nội"],
    culturalFeatures: {
      architecture: "Nhà phố liên kế kết hợp buôn bán, hội quán người Hoa uy nghiêm với rồng phụng uốn lượn, lồng đèn đỏ.",
      costume: "Sườn xám (xường xám) cho nữ, áo bà ba cổ tàu cho nam; trang phục ngày Tết nổi bật sắc đỏ may mắn.",
      festivals: ["Tết Nguyên Tiêu (Rằm tháng Giêng)", "Lễ Vu Lan", "Tết Trung Thu", "Lễ hội Chùa Bà Thiên Hậu"],
      economicLife: "Kinh doanh buôn bán, thương mại, dịch vụ tài chính, tiểu thủ công nghiệp và ẩm thực truyền thống danh tiếng.",
      socialCustoms: "Tính tương trợ đồng hương rất cao qua các bang hội; tinh thần trọng chữ tín trong kinh doanh."
    },
    highlightQuote: "Đóng góp năng động vào bức tranh thương mại đô thị, giao lưu hòa hợp cùng các dân tộc anh em trên dải đất Việt.",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80"
  }
];

export const LANGUAGE_FAMILIES = [
  { id: "all", name: "Tất cả các ngữ hệ (54 Dân tộc)" },
  { id: "Nam Á", name: "Ngữ hệ Nam Á (Việt - Mường, Môn - Khmer)" },
  { id: "Thái - Kadai", name: "Ngữ hệ Thái - Kadai (Tày, Thái, Nùng...)" },
  { id: "H'Mông - Dao", name: "Ngữ hệ H'Mông - Dao" },
  { id: "Nam Đảo", name: "Ngữ hệ Nam Đảo (Gia Rai, Ê Đê, Chăm...)" },
  { id: "Hán - Tạng", name: "Ngữ hệ Hán - Tạng (Hoa, Ngái, Hà Nhì...)" }
];
