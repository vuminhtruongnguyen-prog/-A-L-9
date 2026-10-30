export interface ContinentInfo {
  id: string;
  name: string;
  englishName: string;
  areaKm2: number;
  areaText: string;
  population: number;
  populationText: string;
  density: string;
  highestPoint: { name: string; altitudeMeters: number; location: string };
  lowestPoint: { name: string; depthMeters: number; location: string };
  longestRiver: { name: string; lengthKm: number; location: string };
  largestLake: { name: string; areaKm2: number; location: string };
  climateSummary: string;
  climateZones: string[];
  terrainTypes: string[];
  majorBiomes: string[];
  keyEconomicFacts: string[];
  interestingFacts: string[];
  image: string;
  flagIcons?: string[];
}

export interface GradeSynthesisTopic {
  id: string;
  grade: 6 | 7 | 8;
  gradeTitle: string;
  chapterTitle: string;
  topicTitle: string;
  summary: string;
  keyPoints: string[];
  coreDataPoints: { label: string; value: string; note: string }[];
  mnemonics: string;
  practiceQuestions: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
}

export const CONTINENTS_DATA: ContinentInfo[] = [
  {
    id: "asia",
    name: "Châu Á",
    englishName: "Asia",
    areaKm2: 44579000,
    areaText: "44,4 triệu km² (Chiếm ~30% diện tích đất nổi toàn cầu - Châu lục lớn nhất)",
    population: 4750000000,
    populationText: "~4,75 tỉ người (Chiếm gần 60% dân số thế giới)",
    density: "150 người/km² (Phân bố không đều, tập trung đông đúc ở Đông Á, Nam Á, Đông Nam Á)",
    highestPoint: {
      name: "Đỉnh Everest (Chomolungma)",
      altitudeMeters: 8848.86,
      location: "Dãy Himalaya (Biên giới Nepal - Tây Tạng/Trung Quốc)"
    },
    lowestPoint: {
      name: "Biển Chết (Dead Sea)",
      depthMeters: -430.5,
      location: "Thung lũng kiến tạo Jordan (Biên giới Jordan - Israel)"
    },
    longestRiver: {
      name: "Sông Trường Giang (Dương Tử)",
      lengthKm: 6300,
      location: "Trung Quốc (Dài thứ 3 thế giới)"
    },
    largestLake: {
      name: "Hồ Baikal (Sâu nhất thế giới: 1.642m) & Hồ Caspi (Hồ nước mặn lớn nhất: 371.000 km²)",
      areaKm2: 371000,
      location: "Nga / Trung Á"
    },
    climateSummary: "Phân hóa phức tạp và đa dạng nhất thế giới do lãnh thổ trải dài từ vùng cực Bắc đến xích đạo. Chiếm ưu thế là kiểu khí hậu gió mùa (Đông Á, Nam Á, Đông Nam Á) và khí hậu lục địa khô hạn (Tây Á, Trung Á, Nội địa).",
    climateZones: [
      "Đới cực và cận cực (Bắc Siberia băng giá quanh năm)",
      "Đới ôn đới (Ôn đới lục địa, ôn đới gió mùa mát mẻ)",
      "Đới cận nhiệt (Cận nhiệt gió mùa, cận nhiệt Địa Trung Hải)",
      "Đới nhiệt đới (Nhiệt đới gió mùa mưa nhiều, nhiệt đới khô sa mạc Ả Rập)",
      "Đới xích đạo và cận xích đạo (Nóng ẩm quanh năm tại Đông Nam Á)"
    ],
    terrainTypes: [
      "Núi và cao nguyên đồ sộ tập trung ở trung tâm: Dãy Himalaya, Côn Lân, Thiên Sơn, Altai; Cao nguyên Tây Tạng (mái nhà thế giới), cao nguyên Trung Siberia, Ả Rập.",
      "Đồng bằng châu thổ rộng lớn ven biển: Đồng bằng Hoa Bắc, Hoa Trung, Ấn - Hằng, Lưỡng Hà, Mê Kông."
    ],
    majorBiomes: [
      "Rừng lá kim (Taiga) bạt ngàn ở Siberia",
      "Thảo nguyên ôn đới Trung Á",
      "Rừng nhiệt đới ẩm thường xanh ở Đông Nam Á và Nam Á",
      "Hoang mạc và bán hoang mạc khô cằn ở Tây Á (Gobi, Rub' al Khali)"
    ],
    keyEconomicFacts: [
      "Nơi ra đời của các nền văn minh cổ đại rực rỡ nhất: Lưỡng Hà, Ấn Độ, Trung Hoa.",
      "Tập trung các nền kinh tế hàng đầu thế giới: Trung Quốc (GDP số 2), Nhật Bản, Ấn Độ, Hàn Quốc.",
      "Khu vực Đông Nam Á (ASEAN) và Việt Nam là một trong những trung tâm sản xuất năng động nhất hành tinh."
    ],
    interestingFacts: [
      "Châu Á sở hữu cả điểm cao nhất (Everest: 8.848m) và điểm thấp nhất (Biển Chết: -430m) trên bề mặt lục địa Trái Đất!",
      "Hồ Baikal chứa tới 20% tổng lượng nước ngọt không đóng băng trên bề mặt Trái Đất, nước trong đến mức nhìn sâu 40m."
    ],
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=80",
    flagIcons: ["🇻🇳", "🇯🇵", "🇰🇷", "🇨🇳", "🇮🇳", "🇸🇬", "🇹🇭", "🇮🇩"]
  },
  {
    id: "europe",
    name: "Châu Âu",
    englishName: "Europe",
    areaKm2: 10180000,
    areaText: "10,2 triệu km² (Châu lục nhỏ thứ 2, chỉ lớn hơn châu Đại Dương)",
    population: 745000000,
    populationText: "~745 triệu người (Tỉ lệ đô thị hóa rất cao >75%)",
    density: "73 người/km² (Phân bố đồng đều ở Tây Âu, Trung Âu và Nam Âu)",
    highestPoint: {
      name: "Đỉnh Elbrus",
      altitudeMeters: 5642,
      location: "Dãy Kavkaz (Nga)"
    },
    lowestPoint: {
      name: "Vùng trũng Caspi",
      depthMeters: -28,
      location: "Biên giới Nga - Kazakhstan"
    },
    longestRiver: {
      name: "Sông Volga",
      lengthKm: 3530,
      location: "Nga (Chảy vào biển Caspi)"
    },
    largestLake: {
      name: "Hồ Ladoga",
      areaKm2: 17700,
      location: "Phía tây bắc nước Nga"
    },
    climateSummary: "Phần lớn lãnh thổ nằm trong đới khí hậu ôn hòa (Ôn đới hải dương ở phía Tây mưa quanh năm, ôn đới lục địa ở phía Đông mùa đông lạnh tuyết phủ, khí hậu Địa Trung Hải ở phía Nam mùa hè khô nóng, mùa đông ấm áp).",
    climateZones: [
      "Đới cực và cận cực (Bắc Âu, bán đảo Scandinavia lạnh giá)",
      "Đới ôn đới hải dương (Tây Âu ấm áp, mưa đều nhờ dòng biển nóng Bắc Đại Tây Dương)",
      "Đới ôn đới lục địa (Đông Âu biên độ nhiệt năm lớn)",
      "Đới cận nhiệt Địa Trung Hải (Nam Âu khô nắng mùa hạ)"
    ],
    terrainTypes: [
      "Đồng bằng chiếm 2/3 diện tích: Đồng bằng Đông Âu, Bắc Âu, Tây Âu màu mỡ.",
      "Miền núi uốn nếp trẻ phía Nam: Dãy Alps (An-pơ), Pyrenees, Apennines, Karpat.",
      "Địa hình bờ biển bị chia cắt mạnh tạo ra các vịnh hẹp ăn sâu vào đất liền (Fjord ở Na Uy)."
    ],
    majorBiomes: [
      "Rừng lá rộng hỗn hợp Tây Âu (sồi, dẻ)",
      "Rừng lá kim (Taiga) Bắc Âu",
      "Thảm thực vật cây bụi lá cứng Địa Trung Hải (ô-liu, nguyệt quế)"
    ],
    keyEconomicFacts: [
      "Cái nôi của cuộc Cách mạng Công nghiệp thế giới bắt đầu từ nước Anh vào thế kỷ XVIII.",
      "Liên minh Châu Âu (EU) là khối kinh tế và chính trị liên kết chặt chẽ nhất hành tinh với đồng tiền chung Euro (€).",
      "Các quốc gia có nền kinh tế phát triển hàng đầu: Đức, Pháp, Anh, Ý, Hà Lan, Thụy Sĩ."
    ],
    interestingFacts: [
      "Na Uy sở hữu hàng nghìn Fjord (vịnh hẹp khoét sâu vào vách đá dựng đứng) được tạo ra do băng hà bào mòn từ Kỷ Băng Hà!",
      "Nhờ dòng hải lưu nóng Bắc Đại Tây Dương (Gulf Stream), châu Âu có khí hậu ấm hơn nhiều so với các vùng cùng vĩ độ ở Bắc Mỹ."
    ],
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1000&q=80",
    flagIcons: ["🇩🇪", "🇫🇷", "🇬🇧", "🇮🇹", "🇪🇸", "🇳🇱", "🇨🇭", "🇸🇪"]
  },
  {
    id: "africa",
    name: "Châu Phi",
    englishName: "Africa",
    areaKm2: 30370000,
    areaText: "30,3 triệu km² (Châu lục lớn thứ 3 thế giới)",
    population: 1460000000,
    populationText: "~1,46 tỉ người (Tốc độ gia tăng dân số cao nhất thế giới)",
    density: "48 người/km² (Dân cư thưa thớt ở sa mạc Sahara, tập trung đông ở thung lũng sông Nin)",
    highestPoint: {
      name: "Đỉnh Kilimanjaro (Núi lửa phủ tuyết)",
      altitudeMeters: 5895,
      location: "Tanzania (Đông Phi)"
    },
    lowestPoint: {
      name: "Hồ Assal",
      depthMeters: -155,
      location: "Djibouti"
    },
    longestRiver: {
      name: "Sông Nin (Nile)",
      lengthKm: 6650,
      location: "Chảy qua 11 quốc gia Đông & Bắc Phi (Dài nhất thế giới)"
    },
    largestLake: {
      name: "Hồ Victoria",
      areaKm2: 68870,
      location: "Đông Phi (Hồ nước ngọt lớn thứ 2 thế giới)"
    },
    climateSummary: "Châu lục nóng nhất thế giới ('Lục địa đen'), nằm cân xứng hai bên xích đạo. Bức xạ mặt trời khổng lồ, phần lớn lãnh thổ chịu ảnh hưởng của các khối khí khô nóng, hình thành hoang mạc nhiệt đới rộng lớn nhất hành tinh.",
    climateZones: [
      "Đới khí hậu xích đạo (Bồn địa Congo mưa quanh năm)",
      "Đới khí hậu cận xích đạo (Hai mùa mưa - khô rõ rệt)",
      "Đới khí hậu nhiệt đới khô (Sa mạc Sahara ở Bắc Phi, Kalahari ở Nam Phi)",
      "Đới khí hậu cận nhiệt Địa Trung Hải (Cực Bắc và cực Nam lục địa)"
    ],
    terrainTypes: [
      "Toàn bộ lục địa là một khối cao nguyên khổng lồ có độ cao trung bình 750m.",
      "Các bồn địa thấp xen kẽ: Bồn địa Congo, bồn địa Tchad, bồn địa Kalahari.",
      "Vết nứt kiến tạo vĩ đại Đông Phi (Great Rift Valley) dài hàng nghìn km với chuỗi hồ kiến tạo sâu thẳm."
    ],
    majorBiomes: [
      "Rừng rậm xích đạo bồn địa Congo xanh tốt nhiều tầng",
      "Xavan (Savan) đồng cỏ nhiệt đới rộng lớn nhất thế giới với hệ động vật móng guốc và ăn thịt hoang dã hùng hậu",
      "Hoang mạc cát và đá Sahara khổng lồ (diện tích ~9 triệu km²)"
    ],
    keyEconomicFacts: [
      "Kho tàng khoáng sản quý hiếm của nhân loại: Vàng, kim cương (Nam Phi), dầu mỏ (Nigeria, Algeria), đồng, coban (Congo).",
      "Nông nghiệp nhiệt đới trồng cây xuất khẩu: Ca cao (Bờ Biển Ngà số 1 thế giới), cà phê, cọ dầu, bông vải.",
      "Đang đối mặt với thách thức biến đổi khí hậu, sa mạc hóa và an ninh lương thực."
    ],
    interestingFacts: [
      "Sa mạc Sahara rộng tới hơn 9 triệu km², diện tích gần bằng toàn bộ lục địa Hoa Kỳ hoặc Trung Quốc!",
      "Dù nằm ngay gần đường xích đạo nóng bỏng, đỉnh núi lửa Kilimanjaro vẫn có băng tuyết phủ trắng xóa quanh năm nhờ độ cao gần 6.000m."
    ],
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80",
    flagIcons: ["🇿🇦", "🇪🇬", "🇳🇬", "🇰🇪", "🇲🇦", "🇩🇿", "🇨🇮"]
  },
  {
    id: "americas",
    name: "Châu Mỹ",
    englishName: "The Americas",
    areaKm2: 42549000,
    areaText: "42,5 triệu km² (Châu lục lớn thứ 2 thế giới, trải dài từ cực Bắc đến gần Nam Cực)",
    population: 1040000000,
    populationText: "~1,04 tỉ người (Bắc Mỹ ~600 triệu, Nam Mỹ ~440 triệu)",
    density: "24 người/km² (Mật độ cao ở vùng Đông Bắc Hoa Kỳ và duyên hải Đông Nam Brazil)",
    highestPoint: {
      name: "Đỉnh Aconcagua",
      altitudeMeters: 6961,
      location: "Dãy Andes (Argentina - Nam Mỹ)"
    },
    lowestPoint: {
      name: "Thung lũng Chết (Death Valley)",
      depthMeters: -86,
      location: "California (Hoa Kỳ - Bắc Mỹ)"
    },
    longestRiver: {
      name: "Sông Amazon",
      lengthKm: 6400,
      location: "Nam Mỹ (Lưu lượng nước và diện tích lưu vực số 1 thế giới)"
    },
    largestLake: {
      name: "Hồ Thượng (Lake Superior - Bắc Mỹ: 82.100 km²) & Hồ Titicaca (Hồ cao nhất thế giới ở độ cao 3.812m)",
      areaKm2: 82100,
      location: "Bắc Mỹ / Biên giới Peru - Bolivia"
    },
    climateSummary: "Khí hậu trải dài qua tất cả các đới khí hậu trên Trái Đất từ hàn đới Bắc Băng Dương đến nhiệt đới và cận cực Nam. Bắc Mỹ có sự tranh chấp mạnh giữa khối khí lạnh Bắc Cực và khối khí nóng vịnh Mexico sinh ra các trận lốc xoáy (Tornado) dữ dội.",
    climateZones: [
      "Hàn đới và cận hàn đới ở Bắc Canada và Alaska",
      "Ôn đới lục địa và ôn đới hải dương ở Hoa Kỳ",
      "Cận nhiệt đới ẩm ở Đông Nam Hoa Kỳ",
      "Xích đạo và nhiệt đới gió mùa tại Trung Mỹ và lưu vực sông Amazon",
      "Khí hậu khô hạn hoang mạc Atacama (Nơi khô hạn nhất hành tinh tại Chile)"
    ],
    terrainTypes: [
      "Phía Tây: Hệ thống núi trẻ Cordillera và Andes đồ sộ, hiểm trở, dài hơn 18.000 km.",
      "Ở giữa: Các đồng bằng mênh mông (Đồng bằng Trung tâm Bắc Mỹ, Đồng bằng Amazon, Đồng bằng Pampa).",
      "Phía Đông: Các sơn nguyên và núi già cổ xưa (Sơn nguyên Guyana, Sơn nguyên Brazil, Dãy Appalachian)."
    ],
    majorBiomes: [
      "Rừng rậm nhiệt đới Amazon (Lá phổi xanh của Trái Đất - chiếm hơn 50% rừng nhiệt đới còn lại)",
      "Đồng cỏ thảo nguyên Prairi Bắc Mỹ và Pampa Nam Mỹ",
      "Rừng lá kim Taiga Canada",
      "Hoang mạc Atacama cực kỳ khô hạn"
    ],
    keyEconomicFacts: [
      "Hoa Kỳ là nền kinh tế số 1 thế giới, dẫn đầu về công nghệ cao, tài chính, quân sự và hàng không vũ trụ (NASA).",
      "Canada và Hoa Kỳ sở hữu nền nông nghiệp hàng hóa quy mô khổng lồ, xuất khẩu lúa mì, đậu tương số 1.",
      "Nam Mỹ là khu vực phát triển mạnh nông nghiệp xuất khẩu (đậu tương, thịt bò, cà phê Brazil) và tài nguyên khoáng sản (đồng Chile, dầu mỏ Venezuela)."
    ],
    interestingFacts: [
      "Sông Amazon thải ra Đại Tây Dương lượng nước ngọt chiếm tới 20% tổng lượng nước sông ngòi toàn cầu đổ ra đại dương!",
      "Hoang mạc Atacama (Chile) khô cằn đến mức có những trạm quan trắc chưa từng ghi nhận một giọt mưa nào trong suốt hơn 400 năm."
    ],
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80",
    flagIcons: ["🇺🇸", "🇨🇦", "🇧🇷", "🇦🇷", "🇲🇽", "🇨🇱", "🇨🇴", "🇵🇪"]
  },
  {
    id: "oceania",
    name: "Châu Đại Dương",
    englishName: "Oceania",
    areaKm2: 8526000,
    areaText: "8,5 triệu km² (Châu lục có diện tích nhỏ nhất, gồm lục địa Australia và hàng vạn đảo)",
    population: 44500000,
    populationText: "~44,5 triệu người (Dân cư thưa thớt nhất trong các châu lục có người ở)",
    density: "5 người/km² (Tập trung đông ở dải duyên hải phía đông và đông nam Australia, New Zealand)",
    highestPoint: {
      name: "Đỉnh Puncak Jaya (Carstensz Pyramid)",
      altitudeMeters: 4884,
      location: "Đảo New Guinea (Indonesia/Châu Đại Dương)"
    },
    lowestPoint: {
      name: "Hồ Eyre",
      depthMeters: -15,
      location: "Australia"
    },
    longestRiver: {
      name: "Hệ thống sông Murray - Darling",
      lengthKm: 3370,
      location: "Australia"
    },
    largestLake: {
      name: "Hồ Eyre (Hồ nước mặn biến động theo mùa)",
      areaKm2: 9500,
      location: "Australia"
    },
    climateSummary: "Phần lớn lục địa Australia có khí hậu khô hạn hoang mạc và bán hoang mạc (do chí tuyến Nam đi qua giữa lục địa và có dòng biển lạnh Tây Australia chắn gió ẩm). Các đảo và quần đảo Thái Bình Dương có khí hậu nhiệt đới hải dương điều hòa, mưa nhiều.",
    climateZones: [
      "Nhiệt đới khô và cận nhiệt khô chiếm hơn 60% diện tích Australia",
      "Cận nhiệt đới gió mùa và ôn đới hải dương mát mẻ tại New Zealand và Đông Nam Úc",
      "Nhiệt đới xích đạo và hải dương ẩm ở các đảo Melanesia, Micronesia, Polynesia"
    ],
    terrainTypes: [
      "Lục địa Australia chia làm 3 khu vực: Phía Tây là cao nguyên cổ; Ở giữa là bồn địa trũng lớn (Lòng chảo tự lưu); Phía Đông là dãy Núi Đông Australia (Great Dividing Range).",
      "Vùng đảo gồm các đảo san hô thấp và các đảo núi lửa còn hoạt động."
    ],
    majorBiomes: [
      "Hệ sinh thái động vật độc nhất vô nhị: Thú có túi (chuột túi Kangaroo, gấu Koala), thú mỏ vịt, nhím mỏ vịt.",
      "Cây bạch đàn (Eucalyptus) và cây keo (Acacia) chịu hạn chiếm ưu thế.",
      "Rạn san hô Great Barrier Reef (Dài hơn 2.300 km - Kỳ quan san hô lớn nhất Trái Đất)."
    ],
    keyEconomicFacts: [
      "Australia và New Zealand là hai quốc gia có nền kinh tế phát triển cao, GDP bình quân đầu người hàng đầu thế giới.",
      "Xuất khẩu hàng đầu thế giới về len cừu, thịt bò, sữa, quặng sắt, than đá, bô-xít và khí tự nhiên hóa lỏng (LNG).",
      "Các quốc đảo Thái Bình Dương phát triển kinh tế biển, đánh bắt cá ngừ và du lịch nghỉ dưỡng cao cấp."
    ],
    interestingFacts: [
      "Australia là lục địa duy nhất trên Trái Đất nằm trọn vẹn trong một quốc gia duy nhất!",
      "Rạn san hô Great Barrier Reef lớn đến mức có thể quan sát thấy rõ ràng từ ngoài không gian vũ trụ bằng mắt thường."
    ],
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=80",
    flagIcons: ["🇦🇺", "🇳🇿", "🇫🇯", "🇵🇬", "🇼🇸"]
  },
  {
    id: "antarctica",
    name: "Châu Nam Cực",
    englishName: "Antarctica",
    areaKm2: 14107000,
    areaText: "14,1 triệu km² (Lớn hơn châu Âu và châu Đại Dương)",
    population: 1200,
    populationText: "Không có cư dân bản địa sinh sống thường xuyên (Khoảng 1.000 - 4.500 nhà khoa học theo mùa)",
    density: "0.0001 người/km²",
    highestPoint: {
      name: "Đỉnh Vinson Massif",
      altitudeMeters: 4892,
      location: "Dãy Ellsworth"
    },
    lowestPoint: {
      name: "Rãnh ngầm Bentley Subglacial Trench",
      depthMeters: -2555,
      location: "Bị chôn vùi dưới lớp băng dày"
    },
    longestRiver: {
      name: "Sông Onyx (Sông băng tan chảy ngắn ngủi trong mùa hè)",
      lengthKm: 32,
      location: "Thung lũng khô Wright"
    },
    largestLake: {
      name: "Hồ Vostok (Hồ nước ngọt ngầm dưới lớp băng dày 4.000m)",
      areaKm2: 12500,
      location: "Gần trạm Vostok (Nga)"
    },
    climateSummary: "Nơi lạnh nhất, khô nhất và nhiều gió bão nhất Trái Đất ('Cực lạnh của địa cầu'). Nhiệt độ thấp nhất từng được ghi nhận là -89,2°C (Trạm Vostok). Lượng mưa trung bình dưới 50 mm/năm nên được coi là 'hoang mạc lạnh' lớn nhất thế giới.",
    climateZones: [
      "Đới khí hậu cực băng giá vĩnh cửu",
      "Gió bão cực mạnh (vận tốc gió thường xuyên vượt 100 - 200 km/h)"
    ],
    terrainTypes: [
      "Một cao nguyên băng khổng lồ: Lớp băng dày trung bình 1.720m, nơi dày nhất trên 4.700m.",
      "Chứa tới 90% lượng băng và gần 70% tổng lượng nước ngọt của toàn thế giới.",
      "Dãy núi Xuyên Nam Cực (Transantarctic Mountains) chia lục địa thành Đông Nam Cực và Tây Nam Cực."
    ],
    majorBiomes: [
      "Gần như không có thực vật bậc cao (chỉ có rêu, địa y trên các mỏm đá lộ thiên mùa hè).",
      "Động vật ven biển thích nghi kỳ diệu: Chim cánh cụt (Penguin hoàng đế), hải cẩu Weddell, cá voi xanh, nhuyễn thể (krill)."
    ],
    keyEconomicFacts: [
      "Không thuộc chủ quyền của bất kỳ quốc gia nào theo Hiệp ước Nam Cực (Antarctic Treaty 1959).",
      "Chỉ được sử dụng vào mục đích hòa bình, hợp tác nghiên cứu khoa học và bảo tồn thiên nhiên tuyệt đối.",
      "Kho dự trữ khoáng sản khổng lồ: Than đá, sắt, dầu khí thềm lục địa nhưng bị cấm khai thác thương mại."
    ],
    interestingFacts: [
      "Nếu toàn bộ băng ở châu Nam Cực tan chảy, mực nước biển trên toàn thế giới sẽ dâng cao thêm khoảng 58 mét, nhấn chìm hầu hết các thành phố ven biển!",
      "Nhiệt độ thấp kỷ lục -89,2°C tại trạm Vostok có thể làm đông cứng lập tức một cốc nước sôi ném vào không khí."
    ],
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",
    flagIcons: ["🇦🇶", "🌐", "❄️"]
  }
];

export const GRADE_SYNTHESIS_DATA: GradeSynthesisTopic[] = [
  // LỚP 6
  {
    id: "g6-earth-system",
    grade: 6,
    gradeTitle: "Địa lí Lớp 6",
    chapterTitle: "Chương: Trái Đất — Hành Tinh Của Hệ Mặt Trời",
    topicTitle: "Hệ tọa độ Địa lí, Chuyển động của Trái Đất và Các Đới Khí Hậu",
    summary: "Nền tảng khởi đầu của khoa học địa lí: Vị trí Trái Đất trong hệ Mặt Trời, hệ thống kinh vĩ tuyến, chuyển động tự quay sinh ra hiện tượng ngày đêm và lực Cô-ri-ô-lit, chuyển động quanh Mặt Trời sinh ra các mùa, cấu tạo 3 lớp của Trái Đất và 5 đới khí hậu cơ bản.",
    keyPoints: [
      "Trái Đất là hành tinh thứ 3 tính từ Mặt Trời, có hình cầu (Geoid), bán kính xích đạo khoảng 6.378 km.",
      "Chuyển động tự quay quanh trục từ Tây sang Đông trong 24 giờ sinh ra hiện tượng ngày đêm luân phiên và lực Cô-ri-ô-lit làm lệch hướng chuyển động của các vật thể (bán cầu Bắc lệch phải, bán cầu Nam lệch trái).",
      "Chuyển động quanh Mặt Trời theo quỹ đạo elip gần tròn trong 365 ngày 6 giờ với trục nghiêng không đổi 66°33' so với mặt phẳng quỹ đạo sinh ra hiện tượng các mùa trong năm và ngày đêm dài ngắn theo mùa.",
      "Cấu tạo vỏ Trái Đất gồm 3 lớp: Vỏ Trái Đất (dày 5 - 70km), Lớp Manti (tầng mềm quánh dẻo sinh ra mac-ma), Nhân Trái Đất (nhiệt độ và áp suất cực cao).",
      "5 đới khí hậu trên Trái Đất: 1 đới nóng (Nhiệt đới giữa 2 chí tuyến), 2 đới ôn hòa (Ôn đới từ chí tuyến đến vòng cực), 2 đới lạnh (Hàn đới từ vòng cực đến cực)."
    ],
    coreDataPoints: [
      { label: "Bán kính xích đạo", value: "6.378 km", note: "Đường xích đạo dài xấp xỉ 40.075 km" },
      { label: "Góc nghiêng trục Trái Đất", value: "66°33'", note: "Nghiêng không đổi trên quỹ đạo elip" },
      { label: "5 đới khí hậu", value: "1 Nóng, 2 Ôn hòa, 2 Lạnh", note: "Phân bố đối xứng qua xích đạo" },
      { label: "Vận tốc tự quay xích đạo", value: "~1.670 km/h", note: "Tạo lực lệch hướng Cô-ri-ô-lit" }
    ],
    mnemonics: "Mẹo nhớ góc nghiêng trục: 'Sáu mươi sáu độ ba ba' (66°33'). Mẹo nhớ lệch hướng lực Cô-ri-ô-lit: 'Bắc rẽ Phải, Nam rẽ Trái'. Mẹo nhớ thứ tự các hành tinh từ Mặt Trời: Thủy - Kim - Trái Đất - Hỏa - Mộc - Thổ - Thiên Vương - Hải Vương.",
    practiceQuestions: [
      {
        question: "Hiện tượng các mùa trong năm sinh ra do nguyên nhân chủ yếu nào sau đây?",
        options: [
          "Trái Đất tự quay quanh trục từ Tây sang Đông trong 24 giờ.",
          "Trái Đất chuyển động quanh Mặt Trời và trục Trái Đất nghiêng không đổi phương.",
          "Khoảng cách từ Trái Đất đến Mặt Trời thay đổi liên tục theo quỹ đạo tròn.",
          "Sự hoạt động của các đới áp cao và áp thấp trên bề mặt Trái Đất."
        ],
        correctIndex: 1,
        explanation: "Hiện tượng các mùa sinh ra do Trái Đất chuyển động tịnh tiến quanh Mặt Trời đồng thời trục Trái Đất luôn nghiêng 66°33' so với mặt phẳng quỹ đạo và không đổi phương, khiến góc chiếu của tia sáng Mặt Trời thay đổi luân phiên giữa 2 bán cầu."
      },
      {
        question: "Lực Cô-ri-ô-lit làm lệch hướng chuyển động của các vật thể ở Bán cầu Bắc theo hướng nào?",
        options: [
          "Lệch về bên trái theo hướng chuyển động.",
          "Lệch về bên phải theo hướng chuyển động.",
          "Không bị lệch hướng khi di chuyển theo kinh tuyến.",
          "Lệch thẳng đứng hướng về tâm Trái Đất."
        ],
        correctIndex: 1,
        explanation: "Do Trái Đất tự quay quanh trục từ Tây sang Đông, lực Cô-ri-ô-lit làm mọi vật thể chuyển động ở Bán cầu Bắc bị lệch về bên phải, còn ở Bán cầu Nam bị lệch về bên trái."
      }
    ]
  },
  // LỚP 7
  {
    id: "g7-world-continents",
    grade: 7,
    gradeTitle: "Địa lí Lớp 7",
    chapterTitle: "Chương: Địa lí Các Châu Lục Trên Thế Giới",
    topicTitle: "Đặc điểm Tự nhiên, Dân cư và Kinh tế Châu Âu, Châu Á, Châu Phi, Châu Mỹ, Châu Đại Dương",
    summary: "Bức tranh toàn cảnh về tự nhiên, xã hội và kinh tế của các châu lục trên thế giới: Châu Âu phát triển với EU và dân số già; Châu Á rộng lớn với khí hậu gió mùa và kinh tế bùng nổ; Châu Phi nóng hạn với hoang mạc Sahara; Châu Mỹ trù phú với rừng Amazon và cường quốc Hoa Kỳ; Châu Đại Dương độc đáo thú có túi; Châu Nam Cực lạnh khô băng giá.",
    keyPoints: [
      "Châu Á có diện tích và dân số lớn nhất; địa hình núi và cao nguyên chiếm 3/4 diện tích tập trung ở trung tâm tạo nên các hệ thống sông lớn chảy tỏa ra các hướng.",
      "Châu Âu nằm hoàn toàn ở bán cầu Bắc, địa hình bằng phẳng, khí hậu ôn hòa nhờ dòng biển nóng Bắc Đại Tây Dương; có Liên minh châu Âu (EU) hùng mạnh.",
      "Châu Phi có khí hậu khô nóng nhất thế giới, xavan và hoang mạc chiếm ưu thế; sở hữu sông Nin dài nhất thế giới và sa mạc Sahara rộng nhất.",
      "Châu Mỹ trải dài qua nhiều vĩ độ, cấu trúc địa hình 3 dải: Núi trẻ Cordillera - Andes phía Tây, đồng bằng ở giữa, núi già và sơn nguyên phía Đông; rừng Amazon là lá phổi xanh.",
      "Châu Đại Dương bao gồm lục địa Australia khô hạn và hàng vạn đảo; có hệ động vật thú có túi đặc hữu và rạn san hô Great Barrier Reef.",
      "Châu Nam Cực là lục địa lạnh nhất, khô nhất, gió mạnh nhất; không có dân bản địa; được bảo vệ bởi Hiệp ước Nam Cực 1959."
    ],
    coreDataPoints: [
      { label: "Châu Á dân số", value: "~4,75 tỉ người", note: "Chiếm gần 60% dân số thế giới" },
      { label: "Sông Nin (Châu Phi)", value: "6.650 km", note: "Sông dài nhất thế giới" },
      { label: "Sông Amazon (Châu Mỹ)", value: "6.400 km", note: "Lưu lượng nước lớn nhất thế giới" },
      { label: "Đỉnh Everest (Châu Á)", value: "8.848,86 m", note: "Nóc nhà thế giới trên dãy Himalaya" }
    ],
    mnemonics: "Mẹo nhớ thứ tự diện tích các châu lục: Á → Mỹ → Phi → Nam Cực → Âu → Đại Dương ('Anh Mỹ Phi Cực Âu Dương'). Sông Nin dài nhất (Nin - 6.650km), Amazon nhiều nước nhất (rừng Amazon xanh tươi).",
    practiceQuestions: [
      {
        question: "Châu lục nào sau đây có diện tích lớn nhất và dân số đông nhất trên thế giới?",
        options: [
          "Châu Mỹ",
          "Châu Phi",
          "Châu Á",
          "Châu Âu"
        ],
        correctIndex: 2,
        explanation: "Châu Á là châu lục lớn nhất với diện tích khoảng 44,4 triệu km² (chiếm ~30% đất nổi) và dân số khoảng 4,75 tỉ người (chiếm gần 60% dân số thế giới)."
      },
      {
        question: "Nguyên nhân chủ yếu làm cho khí hậu châu Âu ấm áp và mưa nhiều hơn so với các vùng cùng vĩ độ ở Bắc Mỹ là gì?",
        options: [
          "Châu Âu nằm gần xích đạo hơn Bắc Mỹ.",
          "Ảnh hưởng của dòng biển nóng Bắc Đại Tây Dương và gió Tây ôn đới.",
          "Châu Âu có nhiều dãy núi cao chắn gió lạnh từ phương Bắc.",
          "Hệ thống rừng rậm nhiệt đới ở Tây Âu phát triển mạnh."
        ],
        correctIndex: 1,
        explanation: "Dòng biển nóng Bắc Đại Tây Dương (Gulf Stream) mang theo khối nước ấm bốc hơi mạnh kết hợp với gió Tây ôn đới thổi quanh năm đã sưởi ấm và mang lại lượng mưa dồi dào cho lục địa châu Âu."
      }
    ]
  },
  // LỚP 8
  {
    id: "g8-vietnam-natural",
    grade: 8,
    gradeTitle: "Địa lí Lớp 8",
    chapterTitle: "Chương: Địa lí Tự nhiên Việt Nam",
    topicTitle: "Vị trí, Địa hình, Khoáng sản, Khí hậu, Thủy văn, Thổ nhưỡng và Biển Đảo Việt Nam",
    summary: "Toàn bộ hệ thống kiến thức Địa lí Tự nhiên Việt Nam bám sát SGK Lớp 8: Vị trí nội chí tuyến, địa hình 3/4 đồi núi chia thành 4 khu vực, khoáng sản phong phú, khí hậu nhiệt đới ẩm gió mùa có mùa đông lạnh ở phía Bắc, mạng lưới sông ngòi dày đặc và chủ quyền biển đảo thiêng liêng trên Biển Đông.",
    keyPoints: [
      "Vị trí nội chí tuyến bán cầu Bắc: 8°34'B - 23°23'B và 102°09'Đ - 109°28'Đ; nằm trong múi giờ số 7; tiếp giáp Biển Đông rộng trên 1 triệu km².",
      "Địa hình: Đồi núi chiếm 3/4 diện tích nhưng chủ yếu là đồi núi thấp (dưới 1.000m chiếm 85%); phân hóa thành 4 khu vực: Đông Bắc (núi cánh cung), Tây Bắc (núi cao Hoàng Liên Sơn), Trường Sơn Bắc (núi hẹp ngang hướng TB-ĐN), Trường Sơn Nam (cao nguyên badan xếp tầng).",
      "Khoáng sản phong phú: Than đá (Quảng Ninh), dầu khí (Thềm lục địa phía Nam), bô-xít (Tây Nguyên), apatit (Lào Cai), sắt (Thái Nguyên, Hà Tĩnh).",
      "Khí hậu nhiệt đới ẩm gió mùa: Nhiệt độ trung bình >21°C, lượng mưa 1.500 - 2.000 mm/năm, số giờ nắng 1.400 - 3.000 giờ/năm; chịu tác động của gió mùa Đông Bắc (lạnh khô đầu đông, lạnh ẩm cuối đông) và gió mùa Tây Nam (nóng ẩm).",
      "Sông ngòi: 2.360 con sông dài trên 10km, dày đặc nhưng phần lớn ngắn dốc; 9 hệ thống sông lớn; hai hệ thống sông lớn nhất là sông Hồng và sông Mê Kông; chế độ nước theo mùa lũ - cạn.",
      "Thổ nhưỡng: Nhóm đất feralit chiếm 65% diện tích (đất đỏ badan màu mỡ nhất); nhóm đất phù sa chiếm 24% diện tích (ĐBSH và ĐBSCL).",
      "Biển Đông: Vùng biển kín, rộng lớn, tài nguyên sinh vật và khoáng sản dồi dào; Việt Nam khẳng định chủ quyền đối với quần đảo Hoàng Sa và Trường Sa."
    ],
    coreDataPoints: [
      { label: "Tỉ lệ đồi núi", value: "3/4 diện tích", note: "Đồi núi thấp dưới 1.000m chiếm 85%" },
      { label: "Lượng mưa TB năm", value: "1.500 - 2.000 mm", note: "Độ ẩm không khí cao trên 80%" },
      { label: "Mạng lưới sông ngòi", value: "2.360 con sông >10km", note: "Tổng lượng nước trên 839 tỉ m³/năm" },
      { label: "Đường bờ biển VN", value: "3.260 km", note: "Từ Móng Cái (Quảng Ninh) đến Hà Tiên (Kiên Giang)" }
    ],
    mnemonics: "Mẹo nhớ 4 cánh cung Đông Bắc: 'Sông Ngân Bắc Đông' (Sông Gâm, Ngân Sơn, Bắc Sơn, Đông Triều - chụm đầu ở Tam Đảo). Mẹo nhớ đất: 'Feralit đồi núi - Phù sa đồng bằng'. Mẹo nhớ gió mùa: 'Đông Bắc mùa đông lạnh rét - Tây Nam mùa hạ mưa ngâu'.",
    practiceQuestions: [
      {
        question: "Đặc điểm nào sau đây KHÔNG đúng với địa hình nước ta?",
        options: [
          "Đồi núi chiếm phần lớn diện tích nhưng chủ yếu là đồi núi thấp.",
          "Cấu trúc địa hình gồm hai hướng chính là Tây Bắc - Đông Nam và vòng cung.",
          "Địa hình đồng bằng chiếm tới 3/4 diện tích lãnh thổ đất liền.",
          "Địa hình chịu tác động mạnh mẽ của khí hậu nhiệt đới ẩm gió mùa và con người."
        ],
        correctIndex: 2,
        explanation: "Phương án 'Địa hình đồng bằng chiếm 3/4 diện tích' là SAI. Thực tế, đồi núi chiếm 3/4 diện tích đất liền, còn đồng bằng chỉ chiếm 1/4 diện tích lãnh thổ nước ta."
      },
      {
        question: "Gió mùa Đông Bắc khi di chuyển qua vùng biển vào cuối mùa đông (tháng 2 - 3) gây ra hiện tượng thời tiết đặc trưng nào ở miền Bắc nước ta?",
        options: [
          "Thời tiết khô hanh, trời quang mây, nắng rực rỡ.",
          "Thời tiết lạnh ẩm, bầu trời âm u, có mưa phùn kéo dài.",
          "Thời tiết khô nóng gay gắt do hiệu ứng phơn Tây Nam.",
          "Những đợt bão lớn kèm lốc xoáy sấm sét dữ dội."
        ],
        correctIndex: 1,
        explanation: "Vào nửa cuối mùa đông (tháng 2 - 3), khối áp cao Siberi dịch chuyển lệch đông, gió mùa Đông Bắc đi qua vùng biển vịnh Bắc Bộ được tiếp nhận thêm hơi ẩm, khi thổi vào đất liền miền Bắc gây ra thời tiết lạnh ẩm và mưa phùn dai dẳng."
      }
    ]
  }
];

// ==========================================
// DỮ LIỆU KỶ LỤC DÂN SỐ THẾ GIỚI & VỊ THẾ NÔNG SẢN VIỆT NAM
// ==========================================

export interface PopulationRecord {
  id: string;
  category: "most_populous" | "least_populous" | "vietnam_rank";
  countryName: string;
  capital: string;
  continent: string;
  populationText: string;
  areaText: string;
  densityText: string;
  flagEmoji: string;
  description: string;
  keyFacts: string[];
  rankNumber: string;
}

export const GLOBAL_POPULATION_RECORDS: PopulationRecord[] = [
  {
    id: "most-populous",
    category: "most_populous",
    countryName: "Cộng hòa Ấn Độ (India)",
    capital: "New Delhi",
    continent: "Châu Á (Nam Á)",
    populationText: "~1,43 tỉ người (Chính thức vượt qua Trung Quốc từ năm 2023)",
    areaText: "3,287 triệu km² (Đứng thứ 7 thế giới)",
    densityText: "~435 người/km² (Mật độ rất cao, tập trung đông đúc ở đồng bằng sông Hằng)",
    flagEmoji: "🇮🇳",
    rankNumber: "Số 1 Thế Giới",
    description: "Ấn Độ hiện là quốc gia đông dân nhất hành tinh với hơn 1,43 tỉ người, sở hữu cơ cấu dân số vàng dồi dào với độ tuổi trung vị chỉ khoảng 28 tuổi, là nguồn động lực khổng lồ cho tăng trưởng kinh tế và công nghệ toàn cầu.",
    keyFacts: [
      "Vượt Trung Quốc từ tháng 4/2023 theo báo cáo chính thức của Liên Hợp Quốc (UNFPA).",
      "Đồng bằng sông Hằng và sông Ấn là cái nôi nền văn minh cổ đại, đất đai phù sa trù phú nuôi sống hàng trăm triệu người.",
      "Quy mô lực lượng lao động khổng lồ, là trung tâm gia công phần mềm, dược phẩm và công nghệ thông tin hàng đầu thế giới.",
      "Thách thức: Áp lực cực lớn lên tài nguyên nước ngọt, hạ tầng giao thông đô thị và an sinh xã hội."
    ]
  },
  {
    id: "least-populous",
    category: "least_populous",
    countryName: "Thành Vatican (Vatican City State)",
    capital: "Thành Vatican",
    continent: "Châu Âu (Nam Âu - nằm trọn trong lòng thủ đô Rome, Italy)",
    populationText: "~800 người (Quốc gia độc lập có dân số ít nhất hành tinh)",
    areaText: "0,44 km² (Quốc gia có diện tích nhỏ nhất thế giới)",
    densityText: "~1.800 người/km² (Toàn bộ dân cư sống trong khuôn viên thành phố)",
    flagEmoji: "🇻🇦",
    rankNumber: "Ít Dân Nhất Thế Giới",
    description: "Thành Vatican là quốc gia có chủ quyền độc lập nhỏ nhất thế giới cả về diện tích và dân số. Công dân Vatican chủ yếu là các giáo sĩ, hồng y, giám mục, nữ tu và lực lượng Vệ binh Thụy Sĩ bảo vệ Tòa Thánh.",
    keyFacts: [
      "Quốc gia độc lập hoàn toàn được công nhận quốc tế theo Hiệp ước Latêranô ký kết năm 1929 với Italy.",
      "Không có công dân sinh ra tự nhiên mang quốc tịch Vatican; quyền công dân được cấp dựa trên chức vụ công tác tại Tòa thánh.",
      "Sở hữu quần thể kiến trúc vĩ đại bậc nhất nhân loại: Vương cung thánh đường Thánh Phêrô, Nhà nguyện Sistine với bích họa của Michelangelo.",
      "Kinh tế độc đáo: Nguồn thu từ bán tem bưu chính, vé tham quan bảo tàng, ấn phẩm tôn giáo và tiền công đức toàn cầu."
    ]
  },
  {
    id: "vietnam-pop-rank",
    category: "vietnam_rank",
    countryName: "Cộng hòa Xã hội Chủ nghĩa Việt Nam",
    capital: "Hà Nội",
    continent: "Châu Á (Đông Nam Á)",
    populationText: "100,3 triệu người (Chính thức vượt mốc 100 triệu dân)",
    areaText: "331.344 km² (Đứng thứ 65 thế giới)",
    densityText: "~303 người/km² (Gấp hơn 5 lần mật độ trung bình toàn cầu)",
    flagEmoji: "🇻🇳",
    rankNumber: "Top 15 Toàn Cầu / Top 3 Đông Nam Á",
    description: "Việt Nam chính thức cán mốc quy mô 100 triệu dân, là một thị trường tiêu dùng nội địa rộng lớn và đang ở thời kỳ 'Cơ cấu dân số vàng' với gần 67% dân số trong độ tuổi lao động.",
    keyFacts: [
      "Đứng thứ 15 trên thế giới về quy mô dân số và đứng thứ 3 khu vực Đông Nam Á (sau Indonesia và Philippines).",
      "Lực lượng lao động đạt trên 52,4 triệu người, tỷ lệ biết chữ trên 96%, thích ứng nhanh với công nghệ.",
      "Phân bố dân cư chênh lệch: Đồng bằng sông Hồng và Đông Nam Bộ có mật độ rất cao, trong khi Tây Bắc và Tây Nguyên còn thưa thớt."
    ]
  }
];

export interface VietnamAgriculturalRanking {
  commodity: string;
  englishCommodity: string;
  globalRank: string;
  badgeColor: string;
  icon: string;
  annualExportStats: string;
  keyProducingRegions: string;
  competitiveAdvantages: string[];
  milestonesAndHighlights: string;
}

export const VIETNAM_GLOBAL_RANKINGS: VietnamAgriculturalRanking[] = [
  {
    commodity: "Lúa gạo",
    englishCommodity: "Rice Export",
    globalRank: "Top 2 - Top 3 Thế Giới",
    badgeColor: "bg-amber-500 text-white",
    icon: "🌾",
    annualExportStats: "Đạt 7,8 - 8,2 triệu tấn/năm, kim ngạch xuất khẩu kỷ lục đạt gần 4,7 tỉ USD",
    keyProducingRegions: "Đồng bằng sông Cửu Long (vựa lúa chiếm hơn 90% sản lượng gạo xuất khẩu cả nước), Đồng bằng sông Hồng",
    competitiveAdvantages: [
      "Khí hậu nhiệt đới gió mùa nóng ẩm, mạng lưới sông ngòi kênh rạch dồi dào, thâm canh 3 vụ/năm.",
      "Chuyển dịch mạnh mẽ từ lượng sang chất lượng cao: Các giống lúa thơm chất lượng cao chiếm trên 85% cơ cấu xuất khẩu.",
      "Hệ thống đê bao, thủy lợi nội đồng hoàn chỉnh và kỹ thuật canh tác giảm phát thải khí nhà kính (Đề án 1 triệu ha lúa chất lượng cao ĐBSCL)."
    ],
    milestonesAndHighlights: "Giống gạo ST25 của kỹ sư Hồ Quang Cua (Sóc Trăng) 2 lần đoạt giải quán quân 'Gạo ngon nhất thế giới' (World's Best Rice vào năm 2019 và 2023), khẳng định thương hiệu lúa gạo Việt Nam trên trường quốc tế."
  },
  {
    commodity: "Cà phê",
    englishCommodity: "Coffee",
    globalRank: "Số 2 Toàn Cầu (Số 1 Thế Giới về Cà phê Robusta)",
    badgeColor: "bg-amber-900 text-white",
    icon: "☕",
    annualExportStats: "Xuất khẩu đạt 1,6 - 1,8 triệu tấn/năm, kim ngạch đạt trên 4,2 - 5,0 tỉ USD",
    keyProducingRegions: "Tây Nguyên (Đắk Lắk - thủ phủ cà phê Buôn Ma Thuột, Lâm Đồng, Gia Lai, Đắk Nông), một số tỉnh Trung du Bắc Bộ (Sơn La)",
    competitiveAdvantages: [
      "Đất đỏ badan màu mỡ tầng dày, phân bố tập trung trên các cao nguyên lượn sóng rộng lớn thích hợp quy hoạch vùng chuyên canh quy mô lớn.",
      "Khí hậu cận xích đạo có 2 mùa mưa - khô rõ rệt: Mùa khô thuận lợi cho phơi sấy, thu hoạch và phân hóa mầm hoa.",
      "Việt Nam là nước sản xuất và xuất khẩu cà phê Robusta (cà phê vối) lớn nhất hành tinh, chi phối giá cà phê nguyên liệu toàn cầu."
    ],
    milestonesAndHighlights: "Buôn Ma Thuột được định hướng xây dựng thành 'Thành phố cà phê của thế giới', lễ hội cà phê quốc tế định kỳ thu hút chuyên gia từ hơn 60 quốc gia."
  },
  {
    commodity: "Hạt điều",
    englishCommodity: "Cashew Nuts",
    globalRank: "Số 1 Thế Giới (Hơn 17 năm liên tiếp)",
    badgeColor: "bg-emerald-700 text-white",
    icon: "🥜",
    annualExportStats: "Xuất khẩu đạt trên 640.000 tấn nhân điều, kim ngạch đạt 3,6 - 4,0 tỉ USD/năm",
    keyProducingRegions: "Đông Nam Bộ (Bình Phước được mệnh danh là 'Thủ phủ điều của Việt Nam' chiếm trên 50% diện tích và sản lượng cả nước), Tây Nguyên (Đắk Lắk, Gia Lai)",
    competitiveAdvantages: [
      "Việt Nam nắm giữ công nghệ bóc tách vỏ lụa và chế biến sâu hạt điều tự động tiên tiến hàng đầu thế giới do chính kỹ sư Việt Nam chế tạo.",
      "Chiếm tới 75% - 80% thị phần xuất khẩu nhân điều toàn cầu, là mắt xích không thể thay thế trong chuỗi cung ứng điều thế giới.",
      "Nhập khẩu điều thô từ châu Phi và Campuchia về chế biến sâu, sau đó xuất khẩu sang Mỹ, EU, Trung Quốc, Nhật Bản."
    ],
    milestonesAndHighlights: "Hạt điều Bình Phước đã được bảo hộ chỉ dẫn địa lý quốc gia và quốc tế, được đánh giá có độ giòn ngọt, ngậy béo và hàm lượng dinh dưỡng hàng đầu thế giới."
  },
  {
    commodity: "Hồ tiêu",
    englishCommodity: "Black & White Pepper",
    globalRank: "Số 1 Thế Giới",
    badgeColor: "bg-slate-800 text-white",
    icon: "🧂",
    annualExportStats: "Xuất khẩu đạt 260.000 - 280.000 tấn/năm, kim ngạch đạt gần 1 tỉ USD",
    keyProducingRegions: "Tây Nguyên (Gia Lai, Đắk Lắk, Đắk Nông) và Đông Nam Bộ (Bình Phước, Bà Rịa - Vũng Tàu, Đồng Nai), đảo ngọc Phú Quốc (Kiên Giang)",
    competitiveAdvantages: [
      "Chiếm khoảng 40% sản lượng hồ tiêu thế giới và trên 55% tổng thị phần xuất khẩu hồ tiêu toàn cầu.",
      "Chất lượng hạt tiêu đen, tiêu sọ, tiêu chín đỏ có mùi thơm nồng nàn cay dịu đặc trưng nhờ thổ nhưỡng đất đỏ bazan và vi khí hậu đặc hữu.",
      "Quy trình sản xuất sạch hữu cơ đạt chứng nhận quốc tế Rainforest Alliance, GlobalGAP đáp ứng các thị trường khó tính nhất."
    ],
    milestonesAndHighlights: "Chư Sê (Gia Lai) và Phú Quốc (Kiên Giang) là 2 vùng thương hiệu hồ tiêu nức tiếng trong và ngoài nước."
  },
  {
    commodity: "Thủy hải sản (Tôm & Cá tra)",
    englishCommodity: "Seafood (Pangasius & Shrimp)",
    globalRank: "Top 3 Thế Giới (Số 1 Thế Giới về Cá tra/basa)",
    badgeColor: "bg-cyan-700 text-white",
    icon: "🐟",
    annualExportStats: "Kim ngạch xuất khẩu toàn ngành đạt 9,2 - 11 tỉ USD/năm",
    keyProducingRegions: "Đồng bằng sông Cửu Long (An Giang, Đồng Tháp, Cà Mau, Bạc Liêu, Sóc Trăng, Bến Tre), Duyên hải Nam Trung Bộ (nuôi tôm hùm)",
    competitiveAdvantages: [
      "Độc tôn số 1 thế giới về cá tra, cá basa nuôi ngọt trên dòng sông Tiền và sông Hậu, đáp ứng tiêu chuẩn khắt khe tại hơn 140 quốc gia.",
      "Cà Mau, Bạc Liêu, Sóc Trăng là trung tâm nuôi tôm nước lợ (tôm sú, tôm thẻ chân trắng) công nghệ cao hàng đầu thế giới.",
      "Vùng đặc quyền kinh tế biển rộng hơn 1 triệu km² với 4 ngư trường trọng điểm tạo nguồn hải sản dồi dào."
    ],
    milestonesAndHighlights: "Việt Nam là một trong 3 quốc gia xuất khẩu thủy sản lớn nhất thế giới cùng với Trung Quốc và Na Uy."
  },
  {
    commodity: "Sầu riêng & Trái cây nhiệt đới",
    englishCommodity: "Durian & Tropical Fruits",
    globalRank: "Top 2 Thế Giới về Xuất khẩu Sầu riêng tươi",
    badgeColor: "bg-yellow-600 text-white",
    icon: "🍈",
    annualExportStats: "Kim ngạch xuất khẩu sầu riêng bứt phá đạt trên 3,2 tỉ USD, tổng rau quả xuất khẩu đạt 6,8 tỉ USD/năm",
    keyProducingRegions: "Tây Nguyên (Đắk Lắk, Lâm Đồng - có lợi thế mùa vụ sầu riêng muộn không đụng hàng), Đồng bằng sông Cửu Long (Tiền Giang, Bến Tre), Đông Nam Bộ (Đồng Nai)",
    competitiveAdvantages: [
      "Địa hình trải dài qua nhiều vĩ độ và độ cao giúp Việt Nam có sầu riêng rải vụ quanh năm, đặc biệt vụ nghịch và vụ Tây Nguyên tháng 8 - 10.",
      "Khoảng cách địa lý gần gũi với thị trường tiêu thụ tỉ dân Trung Quốc (vận chuyển đường bộ chỉ 1,5 - 2 ngày giúp quả tươi ngon giữ trọn hương vị).",
      "Các giống sầu riêng trứ danh: Ri6 (cơm vàng hạt lép, vị ngọt đậm thơm phức), Monthong, sầu riêng Musang King."
    ],
    milestonesAndHighlights: "Sầu riêng Việt Nam tạo nên cú hích lịch sử, trở thành 'trái cây tỉ đô' có tốc độ tăng trưởng kim ngạch nhanh nhất trong ngành nông nghiệp."
  },
  {
    commodity: "Đồ gỗ & Sản phẩm gỗ",
    englishCommodity: "Wood & Forest Products",
    globalRank: "Top 5 Thế Giới & Số 1 Đông Nam Á",
    badgeColor: "bg-emerald-900 text-white",
    icon: "🪵",
    annualExportStats: "Kim ngạch xuất khẩu đạt trên 14,5 - 16 tỉ USD/năm",
    keyProducingRegions: "Đông Nam Bộ (Bình Dương, Đồng Nai, TP.HCM), Duyên hải Nam Trung Bộ (Bình Định) và các vùng rừng trồng nguyên liệu có chứng chỉ FSC",
    competitiveAdvantages: [
      "Tay nghề thợ mộc và kỹ thuật chế tác nội thất tinh xảo của Việt Nam được thị trường Mỹ, Nhật Bản, EU đánh giá hàng đầu.",
      "Chuỗi cung ứng hoàn chỉnh từ nguồn gỗ keo, tràm rừng trồng trong nước và nhập khẩu gỗ hợp pháp.",
      "Ứng dụng chuyển đổi số, thiết kế mẫu mã hiện đại theo tiêu chuẩn công trình xanh."
    ],
    milestonesAndHighlights: "Việt Nam vượt qua nhiều cường quốc để giữ vị trí số 1 ASEAN và số 2 châu Á về xuất khẩu đồ gỗ nội ngoại thất."
  }
];
