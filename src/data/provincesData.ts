export interface CentralCityDetails {
  role: string;
  population: string;
  area: string;
  transportHub: string;
  strategicValue: string;
  economicShare: string;
}

export interface ProvincePin {
  id: string;
  name: string;
  fullName: string;
  region: string;
  zone: "north" | "central" | "south";
  isCentralCity: boolean;
  coords: { x: number; y: number };
  image: string;
  highlights: string[];
  economicStrengths: string;
  atlatPages: string[];
  specializedTip: string;
  centralCityDetails?: CentralCityDetails;
}

export const PROVINCE_PINS: ProvincePin[] = [
  // ==========================================
  // 9 THÀNH PHỐ TRỰC THUỘC TRUNG ƯƠNG
  // ==========================================
  {
    id: "hanoi",
    name: "Hà Nội",
    fullName: "Thành phố Hà Nội",
    region: "Đồng bằng sông Hồng",
    zone: "north",
    isCentralCity: true,
    coords: { x: 50, y: 17 },
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Thủ đô ngàn năm văn hiến, trái tim chính trị, hành chính, văn hóa, giáo dục và khoa học kỹ thuật của cả nước.",
      "Đầu mối giao thông đường sắt, đường bộ, đường hàng không (sân bay quốc tế Nội Bài) tỏa đi khắp cả nước và quốc tế.",
      "Mật độ dân số thuộc nhóm cao nhất cả nước (>2.500 người/km²), quy mô dân số trên 8,5 triệu người."
    ],
    economicStrengths: "Công nghiệp công nghệ cao (Khu CNC Hòa Lạc), dịch vụ tài chính - ngân hàng, thương mại hiện đại, du lịch văn hóa nghìn năm.",
    atlatPages: ["Trang 4-5 (Hành chính)", "Trang 17 (Kinh tế chung)", "Trang 26 (Đồng bằng sông Hồng)"],
    specializedTip: "Mẹo thi chuyên: Hà Nội cùng Hải Phòng và Quảng Ninh tạo thành tam giác tăng trưởng kinh tế then chốt của Vùng kinh tế trọng điểm phía Bắc.",
    centralCityDetails: {
      role: "Thủ đô của nước Cộng hòa XHCN Việt Nam, trung tâm đầu não chính trị - hành chính quốc gia, trung tâm lớn về văn hóa, khoa học, giáo dục, kinh tế và giao dịch quốc tế.",
      population: "8,5 triệu người (Đô thị đặc biệt)",
      area: "3.359 km²",
      transportHub: "Cảng hàng không quốc tế Nội Bài, 5 tuyến đường sắt hướng tâm, 7 tuyến cao tốc xuyên tâm tỏa đi các tỉnh.",
      strategicValue: "Hạt nhân liên kết vùng Thủ đô, cực tăng trưởng động lực chi phối kinh tế phía Bắc và cả nước.",
      economicShare: "Đóng góp ~13% GDP và trên 17% tổng thu ngân sách cả nước."
    }
  },
  {
    id: "tphcm",
    name: "TP. Hồ Chí Minh",
    fullName: "Thành phố Hồ Chí Minh",
    region: "Đông Nam Bộ",
    zone: "south",
    isCentralCity: true,
    coords: { x: 51, y: 79 },
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Đô thị đặc biệt, đầu tàu kinh tế, tài chính, thương mại, khoa học công nghệ và đổi mới sáng tạo lớn nhất Việt Nam.",
      "Đóng góp trên 20% GDP và gần 30% tổng thu ngân sách quốc gia.",
      "Hệ thống cảng Sài Gòn, Cát Lái và sân bay quốc tế Tân Sơn Nhất đón lượng hành khách và hàng hóa khổng lồ."
    ],
    economicStrengths: "Công nghiệp chế biến chế tạo, điện tử, phần mềm (Công viên phần mềm Quang Trung), tài chính quốc tế, thương mại và dịch vụ logistics.",
    atlatPages: ["Trang 17 (Kinh tế chung)", "Trang 21 (Công nghiệp)", "Trang 29 (Đông Nam Bộ)"],
    specializedTip: "Mẹo thi chuyên: Hạt nhân của Vùng kinh tế trọng điểm phía Nam - vùng kinh tế năng động và đóng góp GDP lớn nhất cả nước.",
    centralCityDetails: {
      role: "Trung tâm kinh tế, tài chính, thương mại, khoa học - công nghệ, đổi mới sáng tạo và chuyển đổi số lớn nhất Việt Nam, hướng tới trung tâm tài chính quốc tế.",
      population: "9,4 triệu người (Đô thị đặc biệt)",
      area: "2.095 km²",
      transportHub: "Sân bay Tân Sơn Nhất, kết nối siêu sân bay Long Thành, cụm cảng biển sông Sài Gòn - Cát Lái - Hiệp Phước.",
      strategicValue: "Hạt nhân Vùng kinh tế trọng điểm phía Nam và tiểu vùng sông Mê Kông mở rộng.",
      economicShare: "Đóng góp >20% GDP, >27% thu ngân sách quốc gia và dẫn đầu cả nước về thu hút FDI."
    }
  },
  {
    id: "haiphong",
    name: "Hải Phòng",
    fullName: "Thành phố Hải Phòng",
    region: "Đồng bằng sông Hồng",
    zone: "north",
    isCentralCity: true,
    coords: { x: 58, y: 19 },
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Thành phố Cảng hoa phượng đỏ, trung tâm công nghiệp lớn và cửa ngõ chính ra biển của toàn bộ miền Bắc.",
      "Cụm cảng biển quốc tế Lạch Huyện nước sâu đón tàu trọng tải trên 100.000 tấn đi thẳng sang bờ Tây nước Mỹ và châu Âu.",
      "Quần đảo Cát Bà là khu dự trữ sinh quyển thế giới và di sản thiên nhiên thế giới liên tỉnh cùng Vịnh Hạ Long."
    ],
    economicStrengths: "Công nghiệp đóng tàu, lắp ráp ô tô điện thông minh (VinFast Đình Vũ), cảng biển logistics, hóa chất và du lịch biển Cát Bà.",
    atlatPages: ["Trang 23 (Giao thông)", "Trang 26 (Vùng ĐBSH)"],
    specializedTip: "Mẹo thi chuyên: Nhấn mạnh vai trò cửa chính thông ra biển của hành lang kinh tế Côn Minh - Lào Cai - Hà Nội - Hải Phòng.",
    centralCityDetails: {
      role: "Trung tâm kinh tế biển tổng hợp, trung tâm cảng biển quốc tế, đầu mối giao thông kết nối liên vùng phía Bắc với thế giới.",
      population: "~2,1 triệu người (Đô thị loại I trực thuộc Trung ương)",
      area: "1.527 km²",
      transportHub: "Cảng cửa ngõ quốc tế Hải Phòng (Lạch Huyện), Cảng hàng không quốc tế Cát Bi, cao tốc Hà Nội - Hải Phòng - Quảng Ninh.",
      strategicValue: "Cực tăng trưởng then chốt trong tam giác động lực phía Bắc (Hà Nội - Hải Phòng - Quảng Ninh).",
      economicShare: "Đứng top 3 cả nước về quy mô thu ngân sách và tốc độ tăng trưởng GRDP luôn ở mức 2 con số."
    }
  },
  {
    id: "danang",
    name: "Đà Nẵng",
    fullName: "Thành phố Đà Nẵng",
    region: "Duyên hải Nam Trung Bộ",
    zone: "central",
    isCentralCity: true,
    coords: { x: 62, y: 46 },
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Thành phố cảng biển trực thuộc Trung ương, trung tâm kinh tế - dịch vụ - công nghệ lớn nhất miền Trung.",
      "Quản lý hành chính huyện đảo Hoàng Sa thiêng liêng của Tổ quốc.",
      "Cảng biển nước sâu Tiên Sa, Liên Chiểu và sân bay quốc tế Đà Nẵng là cửa ngõ Hành lang kinh tế Đông - Tây (EWEC)."
    ],
    economicStrengths: "Công nghệ thông tin, vi mạch bán dẫn, logistics cảng biển, dịch vụ tài chính và du lịch biển đẳng cấp thế giới (Mỹ Khê, Bà Nà Hills).",
    atlatPages: ["Trang 4-5 (Hành chính)", "Trang 23 (Giao thông)", "Trang 28 (Duyên hải Nam Trung Bộ)"],
    specializedTip: "Mẹo thi chuyên: Cửa ngõ thông ra Thái Bình Dương của 4 nước Myanmar - Thái Lan - Lào - Việt Nam theo tuyến EWEC.",
    centralCityDetails: {
      role: "Đô thị loại I trực thuộc Trung ương, trung tâm kinh tế - xã hội lớn của miền Trung - Tây Nguyên, đô thị thông minh và trung tâm khởi nghiệp đổi mới sáng tạo.",
      population: "~1,25 triệu người",
      area: "1.285 km²",
      transportHub: "Sân bay quốc tế Đà Nẵng, Cảng biển Tiên Sa & Cảng nước sâu Liên Chiểu, ga đường sắt trọng điểm.",
      strategicValue: "Đầu cầu Hành lang kinh tế Đông - Tây (EWEC), trung tâm kinh tế biển và vị trí chiến lược quân sự bảo vệ chủ quyền Biển Đông.",
      economicShare: "Đầu tàu kinh tế miền Trung, dẫn đầu cả nước về chuyển đổi số và chỉ số PCI."
    }
  },
  {
    id: "cantho",
    name: "Cần Thơ",
    fullName: "Thành phố Cần Thơ",
    region: "Đồng bằng sông Cửu Long",
    zone: "south",
    isCentralCity: true,
    coords: { x: 42, y: 86 },
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Thành phố trực thuộc Trung ương, được mệnh danh là 'Tây Đô' - thủ phủ và trái tim của Đồng bằng sông Cửu Long.",
      "Nằm ở hạ lưu hữu ngạn sông Hậu, cầu Cần Thơ dây văng nhịp chính dài nhất Đông Nam Á tại thời điểm khánh thành.",
      "Chợ nổi Cái Răng - di sản văn hóa phi vật thể quốc gia về văn minh sông nước miệt vườn trù phú."
    ],
    economicStrengths: "Chế biến gạo xuất khẩu chất lượng cao, thủy sản đông lạnh, logistics nông sản, viện nghiên cứu lúa gạo và du lịch sinh thái miệt vườn.",
    atlatPages: ["Trang 17 (Kinh tế chung)", "Trang 30 (ĐBSCL)"],
    specializedTip: "Mẹo thi chuyên: Trung tâm đào tạo đại học, trung tâm y tế chuyên sâu và trung tâm nghiên cứu nông nghiệp lớn nhất vùng ĐBSCL.",
    centralCityDetails: {
      role: "Đô thị loại I trực thuộc Trung ương, trung tâm thương mại, dịch vụ, y tế chuyên sâu, giáo dục - đào tạo và khoa học công nghệ của toàn vùng ĐBSCL.",
      population: "~1,3 triệu người",
      area: "1.440 km²",
      transportHub: "Cảng hàng không quốc tế Cần Thơ, Cảng biển Cần Thơ (Cái Cui), các tuyến cao tốc Mỹ Thuận - Cần Thơ - Cà Mau.",
      strategicValue: "Hạt nhân liên kết phát triển toàn diện 13 tỉnh thành Đồng bằng sông Cửu Long.",
      economicShare: "Đóng góp lớn nhất vào giá trị dịch vụ và thương mại của Đồng bằng sông Cửu Long."
    }
  },
  {
    id: "hue",
    name: "Huế",
    fullName: "Thành phố Huế (Thành phố Trực thuộc Trung ương)",
    region: "Bắc Trung Bộ",
    zone: "central",
    isCentralCity: true,
    coords: { x: 57, y: 44 },
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Thành phố di sản văn hóa trực thuộc Trung ương của Việt Nam, nơi lưu giữ Quần thể di tích Cố đô Huế và Nhã nhạc cung đình Huế (UNESCO).",
      "Sở hữu hệ đầm phá Tam Giang - Cầu Hai rộng lớn nhất Đông Nam Á với hệ sinh thái phong phú.",
      "Dãy núi Bạch Mã đâm ngang ra biển tạo nên đèo Hải Vân hùng vĩ - ranh giới tự nhiên phân chia khí hậu hai miền Bắc - Nam."
    ],
    economicStrengths: "Du lịch văn hóa - di sản tầm vóc quốc tế, y tế chuyên sâu (Bệnh viện Trung ương Huế), công nghiệp cảng biển nước sâu Chân Mây và giáo dục đại học.",
    atlatPages: ["Trang 4-5 (Hành chính)", "Trang 25 (Du lịch)", "Trang 27 (Bắc Trung Bộ)"],
    specializedTip: "Mẹo thi chuyên: Huế có lượng mưa trung bình năm rất lớn (>3.000 mm) do nằm ở sườn đón gió mùa Đông Bắc và dải hội tụ nhiệt đới.",
    centralCityDetails: {
      role: "Thành phố trực thuộc Trung ương đặc thù trên nền tảng bảo tồn và phát huy giá trị di sản Cố đô và bản sắc văn hóa Huế; trung tâm văn hóa, du lịch và y tế chuyên sâu của Đông Nam Á.",
      population: "~1,18 triệu người",
      area: "4.947 km²",
      transportHub: "Sân bay quốc tế Phú Bài (nhà ga T2 hiện đại), Cảng nước sâu Chân Mây, tuyến cao tốc Cam Lộ - La Sơn - Túy Loan.",
      strategicValue: "Cực tăng trưởng văn hóa - du lịch di sản độc nhất vô nhị, liên kết hành lang kinh tế Bắc - Nam và biển miền Trung.",
      economicShare: "Dẫn đầu cả nước về tỷ trọng đóng góp của ngành kinh tế di sản và du lịch quốc tế."
    }
  },
  {
    id: "dongnai",
    name: "Đồng Nai",
    fullName: "Thành phố Đồng Nai (Thành phố Trực thuộc Trung ương)",
    region: "Đông Nam Bộ",
    zone: "south",
    isCentralCity: true,
    coords: { x: 52, y: 79 },
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Thành phố trực thuộc Trung ương - thủ phủ công nghiệp số 1 miền Nam với hơn 32 khu công nghiệp quy mô lớn.",
      "Vị trí cửa ngõ Đông Bắc của vùng kinh tế trọng điểm phía Nam, sở hữu siêu dự án Cảng hàng không quốc tế Long Thành (công suất 100 triệu khách/năm).",
      "Hồ Trị An trên dòng sông Đồng Nai là nguồn cung cấp nước và thủy điện trọng yếu."
    ],
    economicStrengths: "Công nghiệp chế biến chế tạo, công nghiệp phụ trợ, logistics hàng không quốc tế Long Thành, hóa chất, cơ khí và cây công nghiệp cao su.",
    atlatPages: ["Trang 17 (Kinh tế chung)", "Trang 21 (Công nghiệp)", "Trang 29 (Đông Nam Bộ)"],
    specializedTip: "Mẹo thi chuyên: Đồng Nai sở hữu hệ sinh thái công nghiệp lâu đời nhất phía Nam (KCN Biên Hòa 1) và là trung tâm giao thông đa phương thức kết nối sân bay, cảng biển Cái Mép.",
    centralCityDetails: {
      role: "Thành phố trực thuộc Trung ương, trung tâm công nghiệp công nghệ cao, trung tâm logistics hàng không quốc tế và trung tâm dịch vụ thương mại hiện đại phía Nam.",
      population: "~3,25 triệu người",
      area: "5.863 km²",
      transportHub: "Siêu cảng hàng không quốc tế Long Thành, mạng lưới cao tốc Dầu Giây - Phan Thiết, TP.HCM - Long Thành, Bến Lức - Long Thành.",
      strategicValue: "Hạt nhân công nghiệp và đầu mối logistics quốc tế lớn nhất miền Nam.",
      economicShare: "Thuộc top 4 tỉnh/thành có quy mô GRDP và kim ngạch xuất khẩu lớn nhất cả nước (>25 tỉ USD)."
    }
  },
  {
    id: "quangninh",
    name: "Quảng Ninh",
    fullName: "Thành phố Quảng Ninh (Thành phố Trực thuộc Trung ương)",
    region: "Đông Bắc Bộ",
    zone: "north",
    isCentralCity: true,
    coords: { x: 64, y: 15 },
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Thành phố trực thuộc Trung ương - trung tâm kinh tế biển, công nghiệp khai khoáng và cực tăng trưởng toàn diện của miền Bắc.",
      "Sở hữu 'bể than đá' lớn nhất nước (>90% trữ lượng than cả nước tại Cẩm Phả, Uông Bí, Mạo Khê).",
      "Kỳ quan thiên nhiên thế giới Vịnh Hạ Long, Vịnh Bái Tử Long và thương cảng quốc tế Vân Đồn."
    ],
    economicStrengths: "Khai thác than, nhiệt điện, kinh tế biển tổng hợp, du lịch quốc tế, logistics cửa khẩu biên giới Móng Cái.",
    atlatPages: ["Trang 8 (Khoáng sản)", "Trang 22 (Năng lượng)", "Trang 25 (Du lịch)", "Trang 26 (TDMN Bắc Bộ)"],
    specializedTip: "Mẹo thi chuyên: Đơn vị hành chính duy nhất của Việt Nam có cả đường biên giới trên bộ và trên biển với Trung Quốc.",
    centralCityDetails: {
      role: "Thành phố trực thuộc Trung ương, trung tâm du lịch quốc tế, trung tâm kinh tế biển, cửa ngõ giao thương quốc tế qua biên giới và cực tăng trưởng kinh tế năng động phía Bắc.",
      population: "~1,4 triệu người",
      area: "6.178 km²",
      transportHub: "Cảng hàng không quốc tế tư nhân Vân Đồn, hệ thống cao tốc liên hoàn Hải Phòng - Hạ Long - Vân Đồn - Móng Cái, cảng nước sâu Cái Lân.",
      strategicValue: "Một đỉnh của tam giác tăng trưởng phía Bắc, địa bàn chiến lược đặc biệt quan trọng về quốc phòng - an ninh trên bộ và biển.",
      economicShare: "Liên tục nhiều năm dẫn đầu cả nước về chỉ số năng lực cạnh tranh cấp tỉnh (PCI) và cải cách hành chính (PAR Index)."
    }
  },
  {
    id: "bacninh",
    name: "Bắc Ninh",
    fullName: "Thành phố Bắc Ninh (Thành phố Trực thuộc Trung ương)",
    region: "Đồng bằng sông Hồng",
    zone: "north",
    isCentralCity: true,
    coords: { x: 53, y: 16 },
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Thành phố trực thuộc Trung ương - thủ phủ công nghiệp công nghệ cao, linh kiện điện tử và công nghiệp bán dẫn hàng đầu Việt Nam.",
      "Cái nôi văn hóa Kinh Bắc với Dân ca Quan họ Bắc Ninh - Di sản văn hóa phi vật thể đại diện của nhân loại.",
      "Địa phương có diện tích đất tự nhiên nhỏ nhưng mật độ kinh tế và quy mô công nghiệp đứng trong top đầu toàn quốc."
    ],
    economicStrengths: "Sản xuất thiết bị điện tử viễn thông (tổ hợp Samsung Bắc Ninh), công nghiệp bán dẫn (Amkor Technology), linh kiện chính xác và làng nghề truyền thống (Đồng Kỵ, gốm Phù Lãng).",
    atlatPages: ["Trang 17 (Kinh tế chung)", "Trang 21 (Công nghiệp)", "Trang 26 (Đồng bằng sông Hồng)"],
    specializedTip: "Mẹo thi chuyên: Bắc Ninh là minh chứng điển hình cho chuyển dịch cơ cấu kinh tế thần tốc từ nông nghiệp sang công nghiệp công nghệ cao.",
    centralCityDetails: {
      role: "Thành phố trực thuộc Trung ương, trung tâm công nghiệp điện tử, bán dẫn và công nghệ cao của cả nước, đô thị thông minh hiện đại gắn liền với bảo tồn di sản Quan họ Kinh Bắc.",
      population: "~1,5 triệu người",
      area: "822,7 km²",
      transportHub: "Nằm trên hành lang kinh tế Côn Minh - Hà Nội - Hải Phòng, cao tốc Hà Nội - Bắc Giang, kết nối sân bay Nội Bài chỉ 30 phút.",
      strategicValue: "Cứ điểm sản xuất điện tử - công nghệ cao toàn cầu của các tập đoàn đa quốc gia (Samsung, Foxconn, Amkor, Canon).",
      economicShare: "Đứng thứ 2 cả nước về kim ngạch xuất khẩu (>40 tỉ USD/năm), đóng góp ngân sách lớn cho Trung ương."
    }
  },

  // ==========================================
  // 25 TỈNH CÒN LẠI SAU SẮP XẾP SÁP NHẬP
  // ==========================================
  {
    id: "laocai",
    name: "Lào Cai",
    fullName: "Tỉnh Lào Cai",
    region: "Trung du & Miền núi Bắc Bộ",
    zone: "north",
    isCentralCity: false,
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
    fullName: "Tỉnh Điện Biên",
    region: "Tây Bắc",
    zone: "north",
    isCentralCity: false,
    coords: { x: 26, y: 16 },
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Điểm cực Tây của Tổ quốc tại xã Sín Thầu, huyện Mường Nhé (102°09'Đ).",
      "Thung lũng Mường Thanh trù phú - cánh đồng lúa lớn nhất vùng Tây Bắc ('Nhất Thanh, nhì Lò, tam Than, tứ Tấc').",
      "Quần thể di tích lịch sử chiến thắng Điện Biên Phủ lẫy lừng năm châu."
    ],
    economicStrengths: "Trồng lúa nếp thung lũng, lâm nghiệp, thủy điện nhỏ và du lịch về nguồn lịch sử.",
    atlatPages: ["Trang 4-5 (Hành chính)", "Trang 6-7 (Hình thể)", "Trang 26 (TDMN Bắc Bộ)"],
    specializedTip: "Mẹo thi chuyên: Nơi duy nhất ở cực Tây giáp cả 2 nước Trung Quốc và Lào tại ngã ba biên giới A Pa Chải."
  },
  {
    id: "sonla",
    name: "Sơn La",
    fullName: "Tỉnh Sơn La",
    region: "Tây Bắc",
    zone: "north",
    isCentralCity: false,
    coords: { x: 34, y: 18 },
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Công trình Nhà máy Thủy điện Sơn La công suất 2.400 MW lớn nhất Đông Nam Á trên dòng sông Đà.",
      "Cao nguyên Mộc Châu ở độ cao trên 1.000m với thảo nguyên cỏ xanh, bò sữa và đồi chè shan tuyết bạt ngàn.",
      "Vựa cây ăn quả nhiệt đới và cận nhiệt lớn bậc nhất miền Bắc (xoài, nhãn, mận hậu)."
    ],
    economicStrengths: "Năng lượng thủy điện sông Đà, chăn nuôi bò sữa, chế biến sữa Mộc Châu, nông sản xuất khẩu chất lượng cao.",
    atlatPages: ["Trang 22 (Năng lượng)", "Trang 26 (Tây Bắc)"],
    specializedTip: "Mẹo thi chuyên: Sông Đà là con sông có trữ năng thủy điện lớn nhất nước ta (chiếm gần 50% trữ năng thủy điện hệ thống sông Hồng)."
  },
  {
    id: "tuyenquang",
    name: "Tuyên Quang",
    fullName: "Tỉnh Tuyên Quang",
    region: "Đông Bắc Bộ",
    zone: "north",
    isCentralCity: false,
    coords: { x: 46, y: 12 },
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Khu di tích lịch sử Tân Trào - 'Thủ đô khu giải phóng', 'Thủ đô kháng chiến' của dân tộc.",
      "Hồ thủy điện Na Hang - Lâm Bình được ví như 'Hạ Long giữa đại ngàn' với cảnh quan non nước hữu tình.",
      "Độ che phủ rừng thuộc nhóm cao nhất cả nước (>65%)."
    ],
    economicStrengths: "Kinh tế lâm nghiệp trồng rừng nguyên liệu gỗ lớn, sản xuất bột giấy (nhà máy giấy An Hòa), thủy điện và du lịch sinh thái.",
    atlatPages: ["Trang 20 (Lâm nghiệp)", "Trang 26 (Đông Bắc)"],
    specializedTip: "Mẹo thi chuyên: Tuyên Quang dẫn đầu miền Bắc về cấp chứng chỉ quản lý rừng bền vững (FSC) cho gỗ xuất khẩu."
  },
  {
    id: "langson",
    name: "Lạng Sơn",
    fullName: "Tỉnh Lạng Sơn",
    region: "Đông Bắc Bộ",
    zone: "north",
    isCentralCity: false,
    coords: { x: 57, y: 13 },
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Địa đầu biên giới phía Bắc, sở hữu các cửa khẩu quốc tế Hữu Nghị, ga đường sắt quốc tế Đồng Đăng, Tân Thanh.",
      "Địa hình cánh cung Ngân Sơn và Bắc Sơn đón gió mùa Đông Bắc đến sớm và kết thúc muộn.",
      "Đặc sản hồi Lạng Sơn (chiếm phần lớn sản lượng hoa hồi xuất khẩu thế giới của Việt Nam)."
    ],
    economicStrengths: "Kinh tế cửa khẩu, kho bãi logistics liên vận quốc tế, trồng và chế biến hoa hồi, du lịch động Nhị Thanh, Tam Thanh.",
    atlatPages: ["Trang 23 (Giao thông)", "Trang 26 (Đông Bắc)"],
    specializedTip: "Mẹo thi chuyên: Cửa khẩu Hữu Nghị là điểm kết thúc của tuyến Quốc lộ 1A (Km 0) kéo dài từ Lạng Sơn đến Cà Mau."
  },
  {
    id: "thainguyen",
    name: "Thái Nguyên",
    fullName: "Tỉnh Thái Nguyên",
    region: "Trung du & Miền núi Bắc Bộ",
    zone: "north",
    isCentralCity: false,
    coords: { x: 50, y: 13 },
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Thủ phủ chè của miền Bắc: Vùng chè đặc sản Tân Cương 'Đệ nhất danh trà'.",
      "Trung tâm luyện kim lâu đời (Gang thép Thái Nguyên) và tổ hợp sản xuất điện thoại thông minh Samsung Electronics Yên Bình.",
      "Trung tâm giáo dục đại học lớn thứ 3 cả nước (Đại học Thái Nguyên)."
    ],
    economicStrengths: "Công nghiệp điện tử, luyện kim, chế biến chè xuất khẩu và dịch vụ đào tạo giáo dục chất lượng cao.",
    atlatPages: ["Trang 18 (Nông nghiệp)", "Trang 21 (Công nghiệp)", "Trang 26 (TDMN Bắc Bộ)"],
    specializedTip: "Mẹo thi chuyên: Nằm ở vị trí chuyển tiếp giữa vùng núi Đông Bắc và đồng bằng sông Hồng, tạo thế mạnh giao thương đa dạng."
  },
  {
    id: "phutho",
    name: "Phú Thọ",
    fullName: "Tỉnh Phú Thọ",
    region: "Trung du & Miền núi Bắc Bộ",
    zone: "north",
    isCentralCity: false,
    coords: { x: 44, y: 16 },
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Đất Tổ cội nguồn của dân tộc Việt Nam: Khu di tích lịch sử Đền Hùng trên núi Nghĩa Lĩnh.",
      "Tín ngưỡng thờ cúng Hùng Vương và Hát Xoan Phú Thọ - hai di sản văn hóa phi vật thể của nhân loại (UNESCO).",
      "Ngã ba sông Việt Trì nơi hợp lưu của 3 con sông lớn: sông Hồng (sông Thao), sông Đà và sông Lô."
    ],
    economicStrengths: "Công nghiệp hóa chất, sản xuất phân bón Lâm Thao, giấy Bãi Bằng, chè búp và du lịch tâm linh nguồn cội.",
    atlatPages: ["Trang 17 (Kinh tế chung)", "Trang 26 (TDMN Bắc Bộ)"],
    specializedTip: "Mẹo thi chuyên: Trung tâm chuyển tiếp kinh tế giữa vùng núi phía Bắc và vùng châu thổ sông Hồng giàu tiềm năng."
  },
  {
    id: "haiduong",
    name: "Hải Dương",
    fullName: "Tỉnh Hải Dương",
    region: "Đồng bằng sông Hồng",
    zone: "north",
    isCentralCity: false,
    coords: { x: 54, y: 18 },
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Vùng đất địa linh nhân kiệt: Quần thể di tích Côn Sơn - Kiếp Bạc gắn liền với danh nhân Nguyễn Trãi và Hưng Đạo Đại vương Trần Quốc Tuấn.",
      "Đất phù sa châu thổ màu mỡ, vựa lương thực và rau màu vụ đông số 1 đồng bằng Bắc Bộ (hành tỏi, cà rốt).",
      "Thủ phủ vải thiều Thanh Hà nổi tiếng thơm ngọt nức lòng du khách."
    ],
    economicStrengths: "Công nghiệp sản xuất linh kiện ô tô, điện tử, vật liệu xây dựng (xi măng Hoàng Thạch), gốm sứ Chu Đậu và nông sản xuất khẩu.",
    atlatPages: ["Trang 18 (Nông nghiệp)", "Trang 26 (Đồng bằng sông Hồng)"],
    specializedTip: "Mẹo thi chuyên: Hải Dương dẫn đầu miền Bắc về phát triển cây vụ đông đem lại hiệu quả kinh tế cao trên đất lúa."
  },
  {
    id: "hungyen",
    name: "Hưng Yên",
    fullName: "Tỉnh Hưng Yên",
    region: "Đồng bằng sông Hồng",
    zone: "north",
    isCentralCity: false,
    coords: { x: 51, y: 20 },
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Thương cảng Phố Hiến xưa nức tiếng: 'Thứ nhất Kinh Kỳ, thứ nhì Phố Hiến'.",
      "Đặc sản trứ danh nhãn lồng Hưng Yên tiến vua quả ngọt cùi dày giòn thơm.",
      "Liền kề Thủ đô Hà Nội với hệ thống khu đô thị sinh thái hiện đại bậc nhất (Ecopark, Vinhomes Ocean Park 2-3)."
    ],
    economicStrengths: "Công nghiệp chế biến chế tạo, logistics ven sông Hồng, nông nghiệp hàng hóa công nghệ cao và bất động sản đô thị thông minh.",
    atlatPages: ["Trang 17 (Kinh tế chung)", "Trang 26 (ĐBSH)"],
    specializedTip: "Mẹo thi chuyên: Hưng Yên có địa hình hoàn toàn bằng phẳng, không có đồi núi và biển, mật độ dân số rất cao."
  },
  {
    id: "namdinh",
    name: "Nam Định",
    fullName: "Tỉnh Nam Định",
    region: "Đồng bằng sông Hồng",
    zone: "north",
    isCentralCity: false,
    coords: { x: 53, y: 23 },
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Vùng đất phát tích vương triều Trần rực rỡ võ công văn trị (Đền Trần).",
      "Vườn quốc gia Xuân Thủy - vùng đất ngập nước đầu tiên của Đông Nam Á tham gia Công ước Ramsar quốc tế.",
      "Thủ phủ dệt may truyền thống lâu đời của miền Bắc."
    ],
    economicStrengths: "Dệt may, cơ khí đóng tàu vỏ thép, kinh tế biển ven bờ (nuôi ngao, cá nước lợ) và trồng lúa chất lượng cao.",
    atlatPages: ["Trang 20 (Thủy sản)", "Trang 26 (ĐBSH)"],
    specializedTip: "Mẹo thi chuyên: Cửa Ba Lạt (nơi sông Hồng đổ ra biển) thuộc địa phận Nam Định và Thái Bình có tốc độ bồi tụ bãi bồi rất nhanh."
  },
  {
    id: "thanhhoa",
    name: "Thanh Hóa",
    fullName: "Tỉnh Thanh Hóa",
    region: "Bắc Trung Bộ",
    zone: "central",
    isCentralCity: false,
    coords: { x: 48, y: 27 },
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Tỉnh có quy mô dân số lớn thứ ba cả nước (~3,7 triệu dân), cửa ngõ nối liền miền Bắc với miền Trung.",
      "Khu kinh tế ven biển Nghi Sơn với Nhà máy Lọc hóa dầu Nghi Sơn công suất 10 triệu tấn dầu thô/năm.",
      "Di sản văn hóa thế giới Thành nhà Hồ bằng đá độc đáo và bãi biển du lịch Sầm Sơn nổi tiếng."
    ],
    economicStrengths: "Lọc hóa dầu, luyện kim, xi măng, nhiệt điện than, mía đường Lam Sơn và kinh tế biển tổng hợp.",
    atlatPages: ["Trang 17 (Kinh tế chung)", "Trang 21 (Công nghiệp)", "Trang 27 (Bắc Trung Bộ)"],
    specializedTip: "Mẹo thi chuyên: Đồng bằng Thanh Hóa (Đồng bằng sông Mã, sông Chu) là đồng bằng rộng lớn nhất vùng duyên hải miền Trung."
  },
  {
    id: "nghean",
    name: "Nghệ An",
    fullName: "Tỉnh Nghệ An",
    region: "Bắc Trung Bộ",
    zone: "central",
    isCentralCity: false,
    coords: { x: 47, y: 32 },
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Tỉnh có diện tích lớn nhất Việt Nam (16.493 km²), quê hương Chủ tịch Hồ Chí Minh (Khu di tích Kim Liên, Nam Đàn).",
      "Khu dự trữ sinh quyển thế giới Tây Nghệ An có diện tích lớn nhất Đông Nam Á.",
      "Khu kinh tế Đông Nam Nghệ An đang thu hút làn sóng đầu tư FDI công nghệ cao (Foxconn, Luxshare)."
    ],
    economicStrengths: "Công nghiệp chế biến điện tử, sữa tươi sạch TH True Milk (trang trại bò sữa công nghệ cao Nghĩa Đàn), kinh tế biển Cửa Lò và du lịch lịch sử.",
    atlatPages: ["Trang 4-5 (Hành chính)", "Trang 27 (Bắc Trung Bộ)"],
    specializedTip: "Mẹo thi chuyên: Phía Tây Nghệ An có địa hình núi cao che chắn tạo nên hiện tượng gió phơn Tây Nam (gió Lào) cực kỳ khô nóng vào mùa hạ."
  },
  {
    id: "hatinh",
    name: "Hà Tĩnh",
    fullName: "Tỉnh Hà Tĩnh",
    region: "Bắc Trung Bộ",
    zone: "central",
    isCentralCity: false,
    coords: { x: 50, y: 36 },
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Khu kinh tế Vũng Áng sở hữu Cảng nước sâu Sơn Dương đón tàu 300.000 tấn và tổ hợp luyện cán thép quy mô hàng đầu khu vực.",
      "Quê hương Đại thi hào Nguyễn Du (tác giả Truyện Kiều) và di tích lịch sử Ngã ba Đồng Lộc linh thiêng.",
      "Hồ Kẻ Gỗ - công trình đại thủy nông trữ nước phục vụ nông nghiệp và điều tiết lũ."
    ],
    economicStrengths: "Công nghiệp luyện thép, cảng biển logistics nước sâu, điện gió, nuôi tôm trên cát và cam bù Hương Sơn.",
    atlatPages: ["Trang 23 (Giao thông)", "Trang 27 (Bắc Trung Bộ)"],
    specializedTip: "Mẹo thi chuyên: Cụm cảng nước sâu Vũng Áng - Sơn Dương là cửa ngõ ra biển gần nhất của nước bạn Lào và vùng Đông Bắc Thái Lan."
  },
  {
    id: "quangbinh",
    name: "Quảng Bình",
    fullName: "Tỉnh Quảng Bình",
    region: "Bắc Trung Bộ",
    zone: "central",
    isCentralCity: false,
    coords: { x: 53, y: 40 },
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "'Vương quốc hang động thế giới': Vườn quốc gia Phong Nha - Kẻ Bàng (2 lần UNESCO vinh danh) với Sơn Đoòng - hang động tự nhiên lớn nhất hành tinh.",
      "Nơi bề ngang lãnh thổ đất liền hẹp nhất Việt Nam (chỉ khoảng 50 km từ biên giới Việt - Lào đến bờ Biển Đông).",
      "Đèo Ngang trên dãy Hoành Sơn phân ranh giữa Hà Tĩnh và Quảng Bình."
    ],
    economicStrengths: "Du lịch thám hiểm hang động đẳng cấp quốc tế, năng lượng tái tạo (trang trại điện gió lớn ven biển), công nghiệp xi măng và kinh tế biển.",
    atlatPages: ["Trang 4-5 (Hành chính)", "Trang 25 (Du lịch)", "Trang 27 (Bắc Trung Bộ)"],
    specializedTip: "Mẹo thi chuyên: Quảng Bình là nơi hẹp nhất theo chiều Đông - Tây của nước ta, chịu ảnh hưởng dữ dội của gió Lào và nạn cát bay, cát chảy."
  },
  {
    id: "quangtri",
    name: "Quảng Trị",
    fullName: "Tỉnh Quảng Trị",
    region: "Bắc Trung Bộ",
    zone: "central",
    isCentralCity: false,
    coords: { x: 55, y: 42 },
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Đầu cầu Hành lang kinh tế Đông - Tây (EWEC) của Việt Nam nối qua cửa khẩu quốc tế Lao Bảo đến Lào, Thái Lan, Myanmar.",
      "Vùng đất lịch sử với vĩ tuyến 17, dòng sông Bến Hải, cầu Hiền Lương, Thành Cổ Quảng Trị và địa đạo Vịnh Mốc.",
      "Đang vươn mình trở thành trung tâm năng lượng sạch mới của miền Trung."
    ],
    economicStrengths: "Kinh tế cửa khẩu Lao Bảo, điện gió vùng núi Hướng Hóa, chế biến gỗ rừng trồng và du lịch hoài niệm lịch sử.",
    atlatPages: ["Trang 23 (Giao thông)", "Trang 27 (Bắc Trung Bộ)"],
    specializedTip: "Mẹo thi chuyên: Cửa khẩu quốc tế Lao Bảo trên Quốc lộ 9 là cửa ngõ giao thương đường bộ thuận tiện nhất của EWEC ra biển Đông."
  },
  {
    id: "quangnam",
    name: "Quảng Nam",
    fullName: "Tỉnh Quảng Nam",
    region: "Duyên hải Nam Trung Bộ",
    zone: "central",
    isCentralCity: false,
    coords: { x: 61, y: 49 },
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Địa phương duy nhất có 2 Di sản văn hóa thế giới UNESCO: Đô thị cổ Hội An và Thánh địa Mỹ Sơn; cùng Khu dự trữ sinh quyển Cù Lao Chàm.",
      "Khu kinh tế mở Chu Lai - trung tâm sản xuất và lắp ráp ô tô lớn nhất Việt Nam (Thaco Chu Lai).",
      "Vùng sâm Ngọc Linh quý hiếm trên đỉnh núi Ngọc Linh 2.598m - 'Quốc bảo của Việt Nam'."
    ],
    economicStrengths: "Công nghiệp lắp ráp ô tô, cơ khí phụ trợ, du lịch văn hóa quốc tế, dược liệu sâm Ngọc Linh và kinh tế biển cảng Chu Lai.",
    atlatPages: ["Trang 21 (Công nghiệp)", "Trang 25 (Du lịch)", "Trang 28 (Duyên hải NTB)"],
    specializedTip: "Mẹo thi chuyên: Chu Lai là khu kinh tế mở đầu tiên được thành lập tại Việt Nam (năm 2003), tiên phong về thể chế thu hút đầu tư."
  },
  {
    id: "quangngai",
    name: "Quảng Ngãi",
    fullName: "Tỉnh Quảng Ngãi",
    region: "Duyên hải Nam Trung Bộ",
    zone: "central",
    isCentralCity: false,
    coords: { x: 63, y: 53 },
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Nhà máy Lọc dầu Dung Quất - nhà máy lọc dầu đầu tiên của Việt Nam đặt nền móng cho ngành công nghiệp hóa dầu non trẻ.",
      "Huyện đảo Lý Sơn - 'Vương quốc tỏi' hình thành từ vết tích 5 miệng núi lửa cổ đại giữa đại dương xanh.",
      "Văn hóa Sa Huỳnh cổ xưa với những mộ chum độc đáo niên đại hàng ngàn năm."
    ],
    economicStrengths: "Công nghiệp lọc dầu Dung Quất, luyện thép Hòa Phát Dung Quất, cảng nước sâu, tỏi Lý Sơn và đánh bắt hải sản xa bờ.",
    atlatPages: ["Trang 21 (Công nghiệp)", "Trang 28 (Duyên hải NTB)"],
    specializedTip: "Mẹo thi chuyên: Cụm công nghiệp lọc hóa dầu Dung Quất gắn với cảng biển nước sâu Dung Quất là hạt nhân thúc đẩy kinh tế miền Trung."
  },
  {
    id: "binhdinh",
    name: "Bình Định",
    fullName: "Tỉnh Bình Định",
    region: "Duyên hải Nam Trung Bộ",
    zone: "central",
    isCentralCity: false,
    coords: { x: 65, y: 58 },
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Thủ phủ đất võ trời văn Tây Sơn, nơi sinh ra người anh hùng áo vải cờ đào Quang Trung - Nguyễn Huệ.",
      "Thành phố Quy Nhơn đang vươn lên thành Trung tâm Trí tuệ nhân tạo (AI) và Khoa học công nghệ quốc tế (ICISE).",
      "Cảng biển Quy Nhơn là đầu mối trung chuyển hàng hóa quốc tế và kết nối Tây Nguyên với biển Đông."
    ],
    economicStrengths: "Chế biến đồ gỗ xuất khẩu, đánh bắt và chế biến cá ngừ đại dương, logistics cảng biển, dịch vụ AI và du lịch biển Kỳ Co - Eo Gió.",
    atlatPages: ["Trang 20 (Thủy sản)", "Trang 28 (Duyên hải NTB)"],
    specializedTip: "Mẹo thi chuyên: Bình Định và Phú Yên là 2 tỉnh dẫn đầu cả nước về nghề câu cá ngừ đại dương xuất khẩu sang Nhật Bản và EU."
  },
  {
    id: "khanhhoa",
    name: "Khánh Hòa",
    fullName: "Tỉnh Khánh Hòa",
    region: "Duyên hải Nam Trung Bộ",
    zone: "central",
    isCentralCity: false,
    coords: { x: 66, y: 68 },
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Đường bờ biển dài nhất nước ta (khoảng 385 km) với nhiều vịnh nước sâu nổi tiếng thế giới (Cam Ranh, Vân Phong, Nha Trang).",
      "Mũi Đôi (xã Vạn Thạnh, Vạn Ninh) là điểm cực Đông trên đất liền (109°28'Đ) đón ánh bình minh đầu tiên.",
      "Quản lý hành chính huyện đảo Trường Sa anh hùng của Tổ quốc."
    ],
    economicStrengths: "Du lịch biển đảo Nha Trang, yến sào tự nhiên, dịch vụ hậu cần cảng biển nước sâu Cam Ranh và nuôi trồng thủy hải sản.",
    atlatPages: ["Trang 4-5 (Hành chính)", "Trang 20 (Thủy sản)", "Trang 28 (Duyên hải NTB)"],
    specializedTip: "Mẹo thi chuyên: Vịnh Cam Ranh là vịnh nước sâu kín gió có giá trị chiến lược quân sự và hàng hải hàng đầu thế giới."
  },
  {
    id: "gialai",
    name: "Gia Lai",
    fullName: "Tỉnh Gia Lai",
    region: "Tây Nguyên",
    zone: "central",
    isCentralCity: false,
    coords: { x: 59, y: 59 },
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Cao nguyên Pleiku lộng gió với hồ T’Nưng (Biển Hồ) - 'Đôi mắt Pleiku' là miệng núi lửa đã tắt hàng triệu năm.",
      "Hệ thống Thủy điện Ialy công suất 720 MW trên dòng sông Sê San.",
      "Vương quốc hồ tiêu Chư Sê và cao nguyên chè Biển Hồ bạt ngàn."
    ],
    economicStrengths: "Cà phê, hồ tiêu, cao su, sắn, năng lượng tái tạo (điện gió, điện mặt trời, thủy điện) và chế biến lâm sản.",
    atlatPages: ["Trang 18 (Nông nghiệp)", "Trang 22 (Năng lượng)", "Trang 28 (Tây Nguyên)"],
    specializedTip: "Mẹo thi chuyên: Đất badan tầng dày trên cao nguyên Pleiku rất thích hợp phát triển cây công nghiệp lâu năm quy mô lớn."
  },
  {
    id: "daklak",
    name: "Đắk Lắk",
    fullName: "Tỉnh Đắk Lắk",
    region: "Tây Nguyên",
    zone: "central",
    isCentralCity: false,
    coords: { x: 58, y: 65 },
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Thủ phủ cà phê Buôn Ma Thuột danh tiếng toàn cầu trên cao nguyên đất đỏ badan màu mỡ bậc nhất.",
      "Cái nôi Không gian văn hóa Cồng chiêng Tây Nguyên (Di sản truyền khẩu và phi vật thể nhân loại của UNESCO).",
      "Hồ Lắk - hồ nước ngọt tự nhiên lớn thứ hai Việt Nam và đàn voi Buôn Đôn thân thiện."
    ],
    economicStrengths: "Trồng và chế biến xuất khẩu cà phê Robusta số 1 thế giới, hồ tiêu, cao su, sầu riêng xuất khẩu và năng lượng tái tạo.",
    atlatPages: ["Trang 18-19 (Nông nghiệp)", "Trang 28 (Tây Nguyên)"],
    specializedTip: "Mẹo thi chuyên: Đất badan Đắk Lắk hình thành do dung nham núi lửa phun trào thời Đệ Tứ, tầng phong hóa dày rất phì nhiêu."
  },
  {
    id: "lamdong",
    name: "Lâm Đồng",
    fullName: "Tỉnh Lâm Đồng",
    region: "Tây Nguyên",
    zone: "central",
    isCentralCity: false,
    coords: { x: 57, y: 72 },
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Thành phố ngàn hoa Đà Lạt trên cao nguyên Lâm Viên độ cao 1.500m mát mẻ quanh năm.",
      "Vựa rau xanh, hoa tươi và dâu tây ứng dụng nông nghiệp công nghệ cao số 1 cả nước.",
      "Vùng trồng cây chè búp lớn nhất miền Nam (B'Lao) và cà phê Arabica thượng hạng."
    ],
    economicStrengths: "Nông nghiệp công nghệ cao, trồng chè, cà phê Arabica, khai thác bauxite Tân Rai, du lịch nghỉ dưỡng Đà Lạt và thủy điện Đa Nhim.",
    atlatPages: ["Trang 18 (Nông nghiệp)", "Trang 25 (Du lịch)", "Trang 28 (Tây Nguyên)"],
    specializedTip: "Mẹo thi chuyên: Độ cao trên 1.500m tạo nên khí hậu cận nhiệt đới vùng núi độc đáo hiếm có giữa lòng Tây Nguyên nắng gió."
  },
  {
    id: "bariavungtau",
    name: "Bà Rịa - Vũng Tàu",
    fullName: "Tỉnh Bà Rịa - Vũng Tàu",
    region: "Đông Nam Bộ",
    zone: "south",
    isCentralCity: false,
    coords: { x: 54, y: 83 },
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Cụm cảng nước sâu Cái Mép - Thị Vải - cụm cảng duy nhất ở Việt Nam đón được tàu mẹ sức chở 200.000 tấn đi thẳng sang Mỹ và châu Âu.",
      "Thủ phủ dầu mỏ và khí đốt thềm lục địa phía Nam (mỏ Bạch Hổ, Rạng Đông, Đại Hùng, Lan Tây).",
      "Khu du lịch quốc gia Côn Đảo - hòn đảo lịch sử anh hùng và khu bảo tồn rùa biển quý hiếm."
    ],
    economicStrengths: "Khai thác dầu thô và khí đốt, công nghiệp hóa dầu Long Sơn, logistics cảng biển quốc tế Cái Mép và du lịch biển Vũng Tàu.",
    atlatPages: ["Trang 8 (Khoáng sản)", "Trang 22 (Năng lượng)", "Trang 29 (Đông Nam Bộ)"],
    specializedTip: "Mẹo thi chuyên: Cái Mép - Thị Vải nằm trong nhóm 19 cảng biển có hiệu suất khai thác cao nhất thế giới theo WB."
  },
  {
    id: "angiang",
    name: "An Giang",
    fullName: "Tỉnh An Giang",
    region: "Đồng bằng sông Cửu Long",
    zone: "south",
    isCentralCity: false,
    coords: { x: 37, y: 84 },
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Nơi đầu nguồn dòng sông Tiền và sông Hậu chảy vào lãnh thổ Việt Nam đón nguồn phù sa và mùa nước nổi dồi dào.",
      "Vựa lúa gạo và thủ phủ cá tra, cá basa lớn bậc nhất cả nước.",
      "Vùng Bảy Núi (Thất Sơn) kỳ bí với Lễ hội Vía Bà Chúa Xứ núi Sam thu hút hàng triệu lượt khách chiêm bái."
    ],
    economicStrengths: "Sản xuất lúa gạo chất lượng cao, nuôi và chế biến cá tra xuất khẩu, kinh tế cửa khẩu Tịnh Biên, Vĩnh Xương và du lịch tâm linh.",
    atlatPages: ["Trang 19 (Nông nghiệp)", "Trang 20 (Thủy sản)", "Trang 30 (ĐBSCL)"],
    specializedTip: "Mẹo thi chuyên: An Giang là tỉnh đón lũ đầu tiên của ĐBSCL, mô hình 'sống chung với lũ' biến mùa lũ thành mùa sinh kế màu mỡ."
  },
  {
    id: "kiengiang",
    name: "Kiên Giang",
    fullName: "Tỉnh Kiên Giang",
    region: "Đồng bằng sông Cửu Long",
    zone: "south",
    isCentralCity: false,
    coords: { x: 34, y: 88 },
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Tỉnh có diện tích và sản lượng lúa dẫn đầu Đồng bằng sông Cửu Long (>4,5 triệu tấn lúa/năm).",
      "Đảo ngọc Phú Quốc - thành phố đảo đầu tiên của Việt Nam với các khu nghỉ dưỡng sinh thái biển sang trọng đẳng cấp quốc tế.",
      "Ngư trường vịnh Thái Lan trù phú, điểm cuối cùng của dải bờ biển chữ S tại Mũi Nai (Hà Tiên)."
    ],
    economicStrengths: "Sản xuất lúa gạo, đánh bắt hải sản xa bờ, nước mắm truyền thống Phú Quốc (bảo hộ EU) và du lịch nghỉ dưỡng biển đảo quốc tế.",
    atlatPages: ["Trang 19 (Nông nghiệp)", "Trang 20 (Thủy sản)", "Trang 30 (ĐBSCL)"],
    specializedTip: "Mẹo thi chuyên: Phú Quốc có khí hậu nhiệt đới gió mùa biển, ít bão, bãi biển lặng sóng quanh năm nên du lịch phát triển 4 mùa."
  },

  // ==========================================
  // HAI HUYỆN ĐẢO CHỦ QUYỀN THIÊNG LIÊNG
  // ==========================================
  {
    id: "hoangsa",
    name: "Quần đảo Hoàng Sa",
    fullName: "Huyện đảo Hoàng Sa (Thuộc TP. Đà Nẵng)",
    region: "Biển Đông (Trực thuộc TP. Đà Nẵng)",
    zone: "central",
    isCentralCity: false,
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
    fullName: "Huyện đảo Trường Sa (Thuộc tỉnh Khánh Hòa)",
    region: "Biển Đông (Trực thuộc tỉnh Khánh Hòa)",
    zone: "central",
    isCentralCity: false,
    coords: { x: 84, y: 75 },
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Quần đảo tiền đồn phía Nam của Tổ quốc với hơn 100 hòn đảo, bãi đá san hô trải rộng trên diện tích biển hàng trăm nghìn km².",
      "Thị trấn Trường Sa, các xã đảo Sinh Tồn, Song Tử Tây và hệ thống nhà giàn DK1 sừng sững bảo vệ chủ quyền.",
      "Vùng đặc quyền kinh tế 200 hải lý xung quanh quần đảo chứa đựng tiềm năng tài nguyên sinh vật và khoáng sản vô tận."
    ],
    economicStrengths: "Đánh bắt hải sản đại dương xa bờ, dịch vụ hậu cần nghề cá, trạm cứu hộ cứu nạn quốc tế và nghiên cứu khí tượng hải văn.",
    atlatPages: ["Trang 4-5 (Hành chính)", "Trang 6-7 (Hình thể biển)"],
    specializedTip: "Mẹo thi chuyên: 'Trường Sa, Hoàng Sa là máu của máu Việt Nam, là thịt của thịt Việt Nam' - gắn liền với việc tuân thủ Công ước Quốc tế về Luật Biển UNCLOS 1982."
  }
];
