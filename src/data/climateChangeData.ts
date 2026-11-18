export interface AffectedProvinceDetail {
  province: string;
  primaryHazard: string;
  impactDetail: string;
}

export interface ClimateAffectedRegion {
  id: string;
  name: string;
  shortName: string;
  severity: "Cực kỳ nghiêm trọng" | "Rất nghiêm trọng" | "Nghiêm trọng";
  severityColor: string;
  mapCoords: { x: number; y: number };
  inundationRisk100cm: string;
  keyPhenomena: string[];
  affectedProvinces: AffectedProvinceDetail[];
  causesInRegion: string[];
  consequencesForPeople: string[];
}

export interface ClimateCauseGroup {
  id: string;
  category: "global" | "domestic";
  title: string;
  subtitle: string;
  points: {
    heading: string;
    detail: string;
  }[];
}

export interface ClimateConsequencePillar {
  id: string;
  title: string;
  metric: string;
  metricNote: string;
  summary: string;
  realImpacts: string[];
}

export interface ClimateQuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const CLIMATE_NATIONAL_METRICS = [
  {
    label: "Tăng nhiệt độ TB toàn quốc",
    value: "+0,89°C",
    note: "Giai đoạn 1958–2018 (tăng nhanh hơn TB toàn cầu)",
  },
  {
    label: "Tốc độ nước biển dâng",
    value: "3,6 mm/năm",
    note: "Dâng ~20 cm trong 50 năm qua dọc ven biển VN",
  },
  {
    label: "Thiệt hại kinh tế hằng năm",
    value: "1,5–3,2% GDP",
    note: "Hàng chục nghìn tỉ đồng mỗi năm nếu thiếu thích ứng",
  },
  {
    label: "Xếp hạng rủi ro khí hậu",
    value: "Top 6 Thế Giới",
    note: "Theo Chỉ số Rủi ro Khí hậu Toàn cầu & World Bank",
  },
];

export const CLIMATE_AFFECTED_REGIONS: ClimateAffectedRegion[] = [
  {
    id: "dbscl",
    name: "Đồng bằng sông Cửu Long",
    shortName: "ĐB Sông Cửu Long",
    severity: "Cực kỳ nghiêm trọng",
    severityColor: "bg-rose-600 text-white",
    mapCoords: { x: 43, y: 86 },
    inundationRisk100cm:
      "Nếu nước biển dâng +100 cm, có thể ngập tới ~38,9% diện tích vùng ĐBSCL (tập trung nặng tại Cà Mau, An Giang, Vĩnh Long, Thành phố Cần Thơ).",
    keyPhenomena: [
      "Xâm nhập mặn ăn sâu vào đất liền 50–110 km (đặc biệt các đợt kỷ lục năm 2016, 2020, 2024).",
      "Sụt lún nền đất 1–3 cm/năm kết hợp nước biển dâng khiến đồng bằng 'chìm' nhanh hơn.",
      "Sạt lở bờ sông Tiền, bờ sông Hậu và xói lở bờ biển Đông – biển Tây ngày càng khốc liệt.",
      "Hạn hán gay gắt vào mùa khô, thiếu hụt phù sa và dòng chảy từ thượng nguồn Mê Kông.",
    ],
    affectedProvinces: [
      {
        province: "Tỉnh Cà Mau",
        primaryHazard: "Nước biển dâng, sạt lở bờ biển hai phía & khô hạn rừng U Minh Hạ",
        impactDetail:
          "Vùng bán đảo cực Nam chịu xói lở mạnh cả dải bờ biển Đông và biển Tây, mất hàng trăm ha rừng ngập mặn cùng đất ở mỗi năm; mùa khô thiếu nước ngọt nghiêm trọng và nguy cơ cháy rừng tràm tăng cao.",
      },
      {
        province: "Tỉnh Vĩnh Long",
        primaryHazard: "Xâm nhập mặn sâu qua các cửa sông Cổ Chiên, Hàm Luông & thiếu nước ngọt",
        impactDetail:
          "Nước mặn lấn sâu vào vùng cù lao và vườn cây ăn trái chuyên canh (sầu riêng, chôm chôm, dừa, bưởi), gây thiệt hại hàng chục nghìn ha nông sản và đảo lộn nguồn nước sinh hoạt người dân.",
      },
      {
        province: "Tỉnh An Giang",
        primaryHazard: "Mặn xâm nhập ven biển Tây, sạt lở bờ sông & biến đổi mùa nước nổi",
        impactDetail:
          "Vừa chịu sạt lở bờ sông Tiền, sông Hậu ở vùng đầu nguồn, vừa chịu sụt lún, hạn mặn ở khu vực U Minh Thượng và ngập triều ven biển Tây, ảnh hưởng trực tiếp đến vựa lúa và vùng nuôi thủy sản.",
      },
      {
        province: "Thành phố Cần Thơ",
        primaryHazard: "Triều cường lịch sử trên sông Hậu & xâm nhập mặn dải ven biển Đông",
        impactDetail:
          "Đô thị trung tâm vùng thường xuyên ngập sâu khi triều cường kết hợp mưa lớn, trong khi dải ven biển Đông chịu áp lực sóng lớn đe dọa đê biển và đất trồng lúa – hoa màu.",
      },
      {
        province: "Tỉnh Đồng Tháp",
        primaryHazard: "Sạt lở bờ sông Tiền & thiếu nước ngọt vùng ven cửa sông mùa khô",
        impactDetail:
          "Nhiều đoạn bờ sông Tiền bị khoét sâu đe dọa nhà cửa, tuyến giao thông và vùng cây ăn trái đặc sản, buộc nhiều hộ dân ven sông phải di dời khẩn cấp.",
      },
    ],
    causesInRegion: [
      "Địa hình rất thấp (độ cao trung bình chỉ 0,7–1,2 m so với mực nước biển) nên cực kỳ nhạy cảm với nước biển dâng.",
      "Khai thác nước ngầm quá mức phục vụ sinh hoạt và nuôi thủy sản làm sụt lún tầng đất yếu.",
      "Các đập thủy điện ở thượng nguồn sông Mê Kông giữ lại lượng lớn phù sa (giảm >50%) và làm giảm lưu lượng nước mùa cạn.",
      "Khai thác cát lòng sông quá mức và suy giảm dải rừng ngập mặn chắn sóng ven biển.",
    ],
    consequencesForPeople: [
      "Hàng trăm nghìn hộ dân thiếu nước ngọt sinh hoạt, phải mua nước ngọt với giá cao hoặc chờ xe tiếp nước cứu trợ vào đỉnh điểm mùa khô.",
      "Thiệt hại hàng trăm nghìn ha lúa, cây ăn trái đặc sản và vùng nuôi tôm cá; đẩy nhiều nông dân vào cảnh nợ nần, mất kế sinh nhai.",
      "Mất nhà cửa, đất sản xuất do sạt lở bờ sông, bờ biển; làm gia tăng làn sóng 'di cư khí hậu' lên Đông Nam Bộ và TP. Hồ Chí Minh.",
    ],
  },
  {
    id: "central",
    name: "Bắc Trung Bộ & Duyên hải Nam Trung Bộ",
    shortName: "Miền Trung",
    severity: "Cực kỳ nghiêm trọng",
    severityColor: "bg-orange-600 text-white",
    mapCoords: { x: 58, y: 45 },
    inundationRisk100cm:
      "Các đồng bằng nhỏ hẹp ven biển từ Thanh Hóa đến Khánh Hòa, Lâm Đồng dễ ngập sâu khi bão mạnh kết hợp triều cường.",
    keyPhenomena: [
      "Bão mạnh dị thường, mưa cực đoan gây 'lũ chồng lũ' lịch sử (điển hình tại Quảng Trị, Thành phố Huế).",
      "Sạt lở đất kinh hoàng ở sườn Đông Trường Sơn cắt đứt giao thông và vùi lấp khu dân cư.",
      "Gió phơn Tây Nam khô nóng kéo dài kết hợp El Niño gây hạn hán khốc liệt và hoang mạc hóa ở ven biển cực Nam Trung Bộ.",
    ],
    affectedProvinces: [
      {
        province: "Tỉnh Quảng Trị & Thành phố Huế",
        primaryHazard: "Mưa lớn kỷ lục, lũ chồng lũ, ngập lụt đô thị di sản và sạt lở miền núi",
        impactDetail:
          "Lũ vượt mốc lịch sử nhấn chìm hàng trăm nghìn ngôi nhà ven sông Hương, sông Kiến Giang, sông Thạch Hãn; phá hủy hạ tầng giao thông và gây thiệt hại nặng nề tại các xã miền núi phía Tây.",
      },
      {
        province: "Tỉnh Nghệ An & Tỉnh Hà Tĩnh",
        primaryHazard: "Bão đổ bộ trực tiếp, lũ quét miền Tây & nắng nóng gay gắt trên 41–42°C",
        impactDetail:
          "Vùng đồng bằng ven biển ngập úng nặng trong mùa bão, trong khi mùa hè gió phơn Tây Nam khô nóng làm cháy rừng và cạn kiệt hồ chứa thủy lợi.",
      },
      {
        province: "Thành phố Đà Nẵng & Tỉnh Gia Lai",
        primaryHazard: "Sạt lở vùng núi phía Tây, ngập lụt hạ lưu & xói lở bờ biển miền Trung",
        impactDetail:
          "Khu vực bờ biển Hội An – Cửa Đại (Thành phố Đà Nẵng) chịu xói lở mạnh; vùng núi cao phía Tây Đà Nẵng và dải ven biển phía Đông Gia Lai đối mặt lũ quét và bão biển khốc liệt.",
      },
      {
        province: "Tỉnh Khánh Hòa & Tỉnh Lâm Đồng",
        primaryHazard: "Hạn hán kéo dài, cạn kiệt hồ chứa & nguy cơ hoang mạc hóa ven biển cực Nam Trung Bộ",
        impactDetail:
          "Dải ven biển phía Nam tỉnh Khánh Hòa và phía Đông Nam tỉnh Lâm Đồng là khu vực khô hạn nhất cả nước (lượng mưa chỉ 700–800 mm/năm); nhiều hồ chứa trơ đáy, thiếu nước tưới cho nho, táo, thanh long và chăn nuôi cừu, dê.",
      },
    ],
    causesInRegion: [
      "Địa hình dốc, hẹp ngang, sông ngắn dốc khiến nước mưa dồn về đồng bằng cực nhanh gây lũ lên đột ngột.",
      "Rừng tự nhiên đầu nguồn bị suy giảm làm mất khả năng giữ nước, điều tiết lũ và giữ đất chống sạt lở.",
      "Tác động trực tiếp của dải hội tụ nhiệt đới, không khí lạnh tràn xuống gặp địa hình chắn gió dãy Trường Sơn.",
    ],
    consequencesForPeople: [
      "Thiệt hại lớn về tính mạng người dân và lực lượng cứu hộ do lũ quét và sạt lở đất vùi lấp.",
      "Nhà cửa, tài sản, gia súc, tàu thuyền đánh bắt của ngư dân và nông dân bị cuốn trôi, hư hỏng nặng sau mỗi trận bão lũ.",
      "Tại dải ven biển khô hạn Khánh Hòa, Lâm Đồng: người dân mất mùa liên tiếp do hạn hán kéo dài, đàn gia súc thiếu nước uống và đồng cỏ.",
    ],
  },
  {
    id: "northern-mountains",
    name: "Trung du và miền núi Bắc Bộ",
    shortName: "Miền núi Bắc Bộ",
    severity: "Rất nghiêm trọng",
    severityColor: "bg-amber-600 text-white",
    mapCoords: { x: 43, y: 15 },
    inundationRisk100cm:
      "Ít chịu ngập do nước biển dâng nhưng là tâm điểm của lũ ống, lũ quét, sạt lở đất và thời tiết cực đoan.",
    keyPhenomena: [
      "Mưa lớn cực đoan gây lũ ống, lũ quét và sạt lở đất trên diện rộng (như hoàn lưu bão số 3 Yagi năm 2024).",
      "Biến động nhiệt độ bất thường: rét đậm, rét hại, băng giá, sương muối xen kẽ các đợt nắng nóng kỷ lục.",
      "Lũ lớn trên hệ thống sông Thao (sông Hồng), sông Lô, sông Cầu, sông Thương.",
    ],
    affectedProvinces: [
      {
        province: "Tỉnh Lào Cai",
        primaryHazard: "Lũ quét, sạt lở đất thảm khốc & lũ lịch sử trên lưu vực sông Thao",
        impactDetail:
          "Chịu thiệt hại nặng nề về tính mạng và tài sản do sạt lở núi diện rộng (như vụ sạt lở thôn Làng Nủ) cùng tình trạng ngập lụt sâu dọc hai bờ sông Thao khi hoàn lưu bão lớn tràn qua.",
      },
      {
        province: "Tỉnh Cao Bằng & Tỉnh Tuyên Quang",
        primaryHazard: "Sạt lở đường đèo, lũ ống sông suối dốc & rét hại băng giá mùa đông",
        impactDetail:
          "Giao thông vùng núi đá cao bị chia cắt nhiều ngày khi mưa lớn; vào mùa đông, nhiệt độ nhiều đỉnh núi xuống dưới 0°C gây băng giá làm chết trâu bò và hoa màu của đồng bào vùng cao.",
      },
      {
        province: "Tỉnh Sơn La & Tỉnh Lai Châu",
        primaryHazard: "Mưa đá, giông lốc, sạt lở taluy và hạn hán đầu mùa khô",
        impactDetail:
          "Gây hư hại nặng nề diện tích cây ăn quả đặc sản (mận, xoài, nhãn), cà phê chè và nhà ở của người dân sống gần sườn dốc.",
      },
    ],
    causesInRegion: [
      "Địa hình đồi núi dốc, chia cắt mạnh, nhiều tầng đất đá phong hóa bở rời dễ mất liên kết khi mưa kéo dài.",
      "Sự nóng lên toàn cầu làm tăng lượng hơi ẩm trong khí quyển, khiến cường độ các trận mưa bão khi vào đất liền lớn hơn gấp nhiều lần.",
      "San gạt sườn dốc làm đường, nhà ở chân đồi và suy giảm độ che phủ rừng đầu nguồn.",
    ],
    consequencesForPeople: [
      "Thương vong trực tiếp về tính mạng do lũ ống, lũ quét xảy ra bất ngờ vào ban đêm.",
      "Hàng nghìn ngôi nhà, điểm trường, cầu treo, đường giao thông và ruộng bậc thang bị đất đá vùi lấp hoàn toàn.",
      "Sinh kế chăn nuôi đại gia súc (trâu, bò) và trồng cây đặc sản của đồng bào vùng cao chịu rủi ro nặng nề vì rét hại và mưa đá.",
    ],
  },
  {
    id: "red-river-delta",
    name: "Đồng bằng sông Hồng & Duyên hải Bắc Bộ",
    shortName: "ĐB Sông Hồng",
    severity: "Rất nghiêm trọng",
    severityColor: "bg-sky-700 text-white",
    mapCoords: { x: 55, y: 22 },
    inundationRisk100cm:
      "Nếu nước biển dâng +100 cm, có thể ngập tới ~16,8% diện tích vùng ĐBSH (nặng nhất ở Hưng Yên, Ninh Bình và ven biển Hải Phòng).",
    keyPhenomena: [
      "Siêu bão đổ bộ trực tiếp vào vịnh Bắc Bộ với sức gió giật cấp 14–17 (điển hình siêu bão Yagi 2024).",
      "Nắng nóng đô thị gay gắt kéo dài kết hợp mưa lớn gây ngập úng cục bộ tại các thành phố lớn.",
      "Xâm nhập mặn vùng cửa sông Hồng – sông Thái Bình ảnh hưởng sản xuất vụ đông xuân.",
    ],
    affectedProvinces: [
      {
        province: "Tỉnh Quảng Ninh & Thành phố Hải Phòng",
        primaryHazard: "Siêu bão trực tiếp, sóng lớn, triều cường & xói lở bờ biển",
        impactDetail:
          "Hệ thống cảng biển, lồng bè nuôi thủy sản trên vịnh Hạ Long – Bái Tử Long – Cát Bà, nhà xưởng khu công nghiệp và hàng vạn ha rừng sản xuất bị tàn phá nặng nề khi siêu bão quét qua.",
      },
      {
        province: "Tỉnh Hưng Yên & Tỉnh Ninh Bình",
        primaryHazard: "Nước biển dâng đe dọa đê biển & xâm nhập mặn vùng cửa sông Hồng",
        impactDetail:
          "Khu vực cửa biển phẳng thấp của Hưng Yên và Ninh Bình có diện tích đất trồng lúa, vùng nuôi ngao và khu bảo tồn đất ngập nước chịu rủi ro ngập mặn cao nhất miền Bắc.",
      },
      {
        province: "Thành phố Hà Nội",
        primaryHazard: "Hiệu ứng đảo nhiệt đô thị, nắng nóng >40°C & ngập lụt khi mưa cực đoan",
        impactDetail:
          "Mực nước sông Hồng, sông Đuống dâng cao trong lũ lớn, ngập úng kéo dài tại nhiều khu dân cư nội thành và vùng ven sông Bùi, sông Tích.",
      },
    ],
    causesInRegion: [
      "Mật độ dân số cao nhất cả nước (>1.000 người/km²) và tốc độ đô thị hóa, bê tông hóa cực nhanh làm giảm hồ điều hòa, đất thấm nước.",
      "Khu vực cửa biển phẳng, thấp, tiếp giáp vịnh Bắc Bộ nằm trên đường đi của nhiều cơn bão mạnh.",
      "Phát thải giao thông, công nghiệp và điều hòa không khí làm gia tăng hiệu ứng đảo nhiệt tại các đô thị.",
    ],
    consequencesForPeople: [
      "Mất điện, mất thông tin liên lạc diện rộng, gián đoạn sản xuất công nghiệp, logistics và sinh hoạt của hàng triệu hộ dân khi siêu bão quét qua.",
      "Ngư dân và hộ nuôi trồng thủy sản ven biển mất trắng lồng bè cá, bãi ngao sau bão.",
      "Nông dân mất trắng hoa màu vụ đông, cây cảnh (đào, quất) và lúa đang trổ bông do ngập úng và gió lốc.",
    ],
  },
  {
    id: "highlands-southeast",
    name: "Tây Nguyên & Đông Nam Bộ",
    shortName: "Tây Nguyên & ĐNB",
    severity: "Nghiêm trọng",
    severityColor: "bg-indigo-700 text-white",
    mapCoords: { x: 54, y: 72 },
    inundationRisk100cm:
      "Thành phố Hồ Chí Minh có nguy cơ ngập ~17,8% diện tích nếu nước biển dâng +100 cm; khu vực cao nguyên đối mặt khô hạn gay gắt.",
    keyPhenomena: [
      "Mùa khô kéo dài hơn, nhiệt độ tăng cao làm bốc hơi mạnh và tụt giảm mực nước ngầm tại Tây Nguyên.",
      "Triều cường đạt đỉnh kỷ lục kết hợp mưa lớn, sụt lún nền đất và nước biển dâng gây ngập sâu tại Thành phố Hồ Chí Minh.",
      "Biến động nguồn nước các hồ thủy lợi, thủy điện trọng điểm (Hồ Dầu Tiếng, Trị An, Yaly).",
    ],
    affectedProvinces: [
      {
        province: "Thành phố Hồ Chí Minh",
        primaryHazard: "Ngập úng đô thị do triều cường + sụt lún nền đất & xói lở dải ven biển Đông Nam",
        impactDetail:
          "Các khu vực vùng trũng ven sông Sài Gòn – Đồng Nai (Nhà Bè, Cần Giờ, Bình Chánh, Thủ Đức) thường xuyên ngập sâu khi triều cường kết hợp mưa cực đoan; vùng ven biển phía Đông Nam chịu áp lực xói lở bờ biển và xâm nhập mặn.",
      },
      {
        province: "Tỉnh Đắk Lắk, Tỉnh Gia Lai & Tỉnh Lâm Đồng",
        primaryHazard: "Hạn hán mùa khô khốc liệt, tụt giảm nước ngầm & thiếu nước tưới cây công nghiệp",
        impactDetail:
          "Hàng chục nghìn ha cà phê, hồ tiêu, sầu riêng bị héo rũ do sông suối nhỏ và giếng khoan cạn kiệt vào cuối mùa khô (tháng 3–5); khu vực phía Đông tỉnh Đắk Lắk còn chịu bão biển phá hủy lồng bè tôm hùm.",
      },
      {
        province: "Tỉnh Đồng Nai & Tỉnh Tây Ninh",
        primaryHazard: "Xâm nhập mặn sông Đồng Nai – sông Vàm Cỏ & nắng nóng gay gắt kéo dài",
        impactDetail:
          "Ảnh hưởng nguồn nước thô cấp cho sinh hoạt, các khu công nghiệp lớn và sản xuất nông nghiệp vùng hạ lưu.",
      },
    ],
    causesInRegion: [
      "Khu vực cao nguyên có mùa khô sâu sắc kéo dài 4–5 tháng; mất rừng tự nhiên làm giảm khả năng giữ ẩm và bổ cập nước ngầm.",
      "Thành phố Hồ Chí Minh có nền đất yếu đang sụt lún (1–2 cm/năm) trong khi tốc độ bê tông hóa cao và hệ thống thoát nước quá tải.",
      "Ảnh hưởng mạnh của chu kỳ El Niño gây nắng nóng kéo dài và ít mưa trái mùa.",
    ],
    consequencesForPeople: [
      "Nông dân vùng cao nguyên tốn kém chi phí khoan giếng sâu, bơm nước chống hạn, năng suất cà phê, hồ tiêu sụt giảm nghiêm trọng.",
      "Người dân Thành phố Hồ Chí Minh chịu cảnh ngập úng, kẹt xe, hư hỏng phương tiện, ô nhiễm nguồn nước sinh hoạt và đảo lộn đời sống hàng ngày.",
      "Nguy cơ thiếu nước ngọt sản xuất công nghiệp và sinh hoạt cho vùng đô thị đông dân nhất cả nước.",
    ],
  },
];

export const CLIMATE_CAUSES: ClimateCauseGroup[] = [
  {
    id: "global-causes",
    category: "global",
    title: "Nguyên nhân Toàn cầu (Bối cảnh Trái Đất nóng lên)",
    subtitle:
      "Việt Nam là quốc gia đang phát triển nhưng chịu tác động cộng hưởng từ biến đổi khí hậu toàn cầu",
    points: [
      {
        heading: "Gia tăng hiệu ứng nhà kính nhân tạo",
        detail:
          "Hoạt động đốt nhiên liệu hóa thạch (than đá, dầu mỏ, khí đốt) trong công nghiệp, nhiệt điện và giao thông vận tải làm nồng độ khí CO₂, CH₄, N₂O tăng vọt, giữ nhiệt khiến khí quyển Trái Đất nóng lên.",
      },
      {
        heading: "Băng tan ở hai cực & Giãn nở nhiệt đại dương",
        detail:
          "Nhiệt độ toàn cầu tăng làm băng ở Nam Cực, Greenland và các sông băng núi cao tan chảy, đồng thời nước biển giãn nở vì nhiệt dẫn đến mực nước biển dâng liên tục.",
      },
      {
        heading: "Biến động cực đoan của El Niño – La Niña",
        detail:
          "Sự nóng lên của đại dương làm chu kỳ El Niño (gây nắng nóng, hạn hán) và La Niña (gây mưa bão dồn dập) diễn ra thất thường và khốc liệt hơn.",
      },
    ],
  },
  {
    id: "domestic-causes",
    category: "domestic",
    title: "Nguyên nhân Nội tại & Đặc thù Lãnh thổ Việt Nam",
    subtitle:
      "Sự kết hợp giữa vị trí địa lí nhạy cảm và tác động khai thác tài nguyên của con người",
    points: [
      {
        heading: "Địa hình thấp ven biển & 3.260 km bờ biển",
        detail:
          "Việt Nam nằm ở khu vực nhiệt đới gió mùa chịu nhiều bão từ Biển Đông; hai vựa lúa ĐBSH và ĐBSCL có địa hình rất thấp nên dễ ngập và nhiễm mặn khi biển dâng.",
      },
      {
        heading: "Suy giảm rừng đầu nguồn & rừng ngập mặn ven biển",
        detail:
          "Chặt phá rừng làm nương rẫy, chuyển đổi rừng ngập mặn sang ao nuôi thủy sản làm mất 'lá chắn xanh' giữ đất chống sạt lở, chắn sóng bão và điều tiết lũ.",
      },
      {
        heading: "Khai thác nước ngầm & cát lòng sông quá mức",
        detail:
          "Bơm hút nước ngầm dày đặc gây sụt lún mặt đất ở ĐBSCL và Thành phố Hồ Chí Minh; khai thác cát quá mức làm thay đổi dòng chảy, gây sạt lở bờ sông nghiêm trọng.",
      },
      {
        heading: "Tác động đập thủy điện thượng nguồn & Đô thị hóa",
        detail:
          "Hệ thống thủy điện trên thượng nguồn sông Mê Kông giữ phù sa và điều tiết nước bất lợi vào mùa khô; bê tông hóa đô thị nhanh làm mất khả năng tiêu thoát nước tự nhiên.",
      },
    ],
  },
];

export const CLIMATE_HUMAN_CONSEQUENCES: ClimateConsequencePillar[] = [
  {
    id: "lives-health",
    title: "Tổn thất Tính mạng, Nhà cửa & Sức khỏe",
    metric: "Hàng trăm người thiệt mạng/mất tích mỗi năm",
    metricNote: "Trong các đợt thiên tai cực đoan (lũ quét, sạt lở, siêu bão)",
    summary:
      "Người dân tại các vùng núi dốc và ven biển đối mặt trực tiếp với nguy cơ mất mát nhân mạng, sập đổ nhà cửa và gia tăng dịch bệnh.",
    realImpacts: [
      "Lũ ống, lũ quét và sạt lở đất xảy ra bất ngờ vào ban đêm vùi lấp cả bản làng miền núi (Lào Cai, Tuyên Quang, Thành phố Đà Nẵng, Nghệ An).",
      "Hàng chục nghìn ngôi nhà bị tốc mái, ngập sâu nhiều mét hoặc sụp xuống sông/biển do sạt lở.",
      "Sóng nhiệt kéo dài gây sốc nhiệt cho người lao động ngoài trời; môi trường ô nhiễm sau ngập lụt làm bùng phát sốt xuất huyết, bệnh ngoài da và tiêu hóa.",
    ],
  },
  {
    id: "livelihoods-food",
    title: "Thiệt hại Sinh kế Nông – Lâm – Ngư nghiệp",
    metric: ">400.000 ha lúa & cây trồng bị ảnh hưởng",
    metricNote: "Trong các đợt hạn hán, xâm nhập mặn nặng ở ĐBSCL & Miền Trung",
    summary:
      "Nông dân, diêm dân và ngư dân là nhóm chịu tổn thất nặng nề nhất vì sinh kế phụ thuộc trực tiếp vào thời tiết và nguồn nước.",
    realImpacts: [
      "Nước mặn làm chết khô lúa, vườn cây ăn trái (sầu riêng, cam, dừa) vốn mất nhiều năm chăm sóc; năng suất nông sản sụt giảm mạnh.",
      "Bão lớn đánh chìm tàu thuyền, phá tan hàng nghìn lồng bè nuôi cá biển, tôm hùm ở Quảng Ninh, Thành phố Hải Phòng, Đắk Lắk, Khánh Hòa.",
      "Rét đậm, rét hại và băng giá làm chết hàng nghìn gia súc (trâu, bò) ở miền núi phía Bắc (Cao Bằng, Tuyên Quang, Lào Cai), đẩy nhiều gia đình vào cảnh mất sạch vốn liếng tích lũy.",
    ],
  },
  {
    id: "water-infrastructure",
    title: "Khủng hoảng Nước ngọt & Hạ tầng Giao thông",
    metric: "Hàng trăm nghìn hộ dân thiếu nước sạch",
    metricNote: "Tại các tỉnh ven biển ĐBSCL và cực Nam Trung Bộ mùa khô",
    summary:
      "Nguồn nước sinh hoạt bị nhiễm mặn hoặc cạn kiệt trong khi đường sá, cầu cống, đê điều liên tục bị tàn phá.",
    realImpacts: [
      "Người dân Vĩnh Long, Cà Mau, An Giang, Đồng Tháp phải thức đêm hứng từng can nước ngọt hoặc bỏ tiền mua nước sạch giá cao trong đỉnh điểm hạn mặn.",
      "Sạt lở làm đứt gãy quốc lộ, tỉnh lộ, cầu treo miền núi và làm vỡ đê bao, cô lập nhiều xã vùng sâu vùng xa.",
      "Tài sản gia đình, máy móc, phương tiện đi lại hư hỏng nặng do ngập úng triều cường tại Thành phố Hồ Chí Minh, Thành phố Cần Thơ, Thành phố Hà Nội.",
    ],
  },
  {
    id: "migration-inequality",
    title: "Di cư Khí hậu & Tổn thương Nhóm Yếu thế",
    metric: ">1 triệu người rời ĐBSCL trong thập kỷ qua",
    metricNote: "Phần lớn chuyển lên Đông Nam Bộ tìm việc làm do bấp bênh sinh kế",
    summary:
      "Biến đổi khí hậu làm khoét sâu bất bình đẳng xã hội, buộc hàng trăm nghìn người phải rời bỏ quê hương đất tổ.",
    realImpacts: [
      "Làn sóng 'di cư khí hậu' khiến các vùng nông thôn ĐBSCL thiếu hụt lao động trẻ, trong khi các đô thị lớn Đông Nam Bộ chịu áp lực quá tải nhà ở, trường học, bệnh viện.",
      "Trẻ em vùng bão lũ bị gián đoạn việc học do trường lớp ngập bùn đất, sách vở hư hỏng.",
      "Hộ nghèo, người cao tuổi và đồng bào dân tộc thiểu số ít có nguồn lực tài chính để xây nhà kiên cố chống bão hay chuyển đổi nghề nghiệp.",
    ],
  },
];

export const CLIMATE_SOLUTIONS = [
  {
    title: "Chuyển đổi mô hình nông nghiệp 'Thuận thiên'",
    detail:
      "Áp dụng mô hình Tôm – Lúa luân canh ở vùng ven biển Cà Mau, An Giang, Vĩnh Long; phát triển giống lúa chịu mặn, chịu hạn và tưới tiết kiệm nước nhỏ giọt ở Khánh Hòa, Lâm Đồng, Đắk Lắk.",
  },
  {
    title: "Phục hồi rừng ngập mặn & Rừng đầu nguồn",
    detail:
      "Trồng mới và bảo vệ dải rừng ngập mặn chắn sóng ven biển từ Quảng Ninh, Hải Phòng đến Cà Mau; nghiêm cấm phá rừng tự nhiên đầu nguồn để giữ nước và chống sạt lở.",
  },
  {
    title: "Nâng cấp hạ tầng đê điều & Cảnh báo sớm",
    detail:
      "Xây dựng cống ngăn mặn thông minh (như Cái Lớn – Cái Bé tại An Giang), củng cố đê biển Hưng Yên – Ninh Bình, di dời dân cư khỏi vùng nguy cơ sạt lở cao và ứng dụng radar dự báo lũ quét, bão sớm.",
  },
  {
    title: "Cam kết Net Zero 2050 & Năng lượng xanh",
    detail:
      "Phát triển mạnh điện gió, điện mặt trời tại Khánh Hòa, Lâm Đồng, Cà Mau, Gia Lai; giảm dần nhiệt điện than, khuyến khích giao thông xanh và trồng 1 tỉ cây xanh.",
  },
];

export const CLIMATE_QUIZ_QUESTIONS: ClimateQuizQuestion[] = [
  {
    id: "cc-q1",
    question:
      "Vùng kinh tế nào ở Việt Nam chịu ảnh hưởng nặng nề nhất bởi hiện tượng nước biển dâng và xâm nhập mặn?",
    options: [
      "Trung du và miền núi Bắc Bộ",
      "Tây Nguyên",
      "Đồng bằng sông Cửu Long",
      "Đông Nam Bộ",
    ],
    correctIndex: 2,
    explanation:
      "Đồng bằng sông Cửu Long có địa hình rất thấp (trung bình 0,7–1,2 m), ba mặt giáp biển và mạng lưới sông kênh chằng chịt nên chịu tác động nặng nề nhất của nước biển dâng và xâm nhập mặn.",
  },
  {
    id: "cc-q2",
    question:
      "Nguyên nhân nội tại làm trầm trọng thêm tình trạng sụt lún và xâm nhập mặn ở Đồng bằng sông Cửu Long là gì?",
    options: [
      "Khai thác nước ngầm quá mức, giảm phù sa từ thượng nguồn Mê Kông và mất rừng ngập mặn",
      "Hoạt động của gió mùa Đông Bắc thổi mạnh quanh năm",
      "Hiện tượng băng giá và sương muối kéo dài vào mùa đông",
      "Số lượng núi lửa hoạt động mạnh dưới thềm lục địa",
    ],
    correctIndex: 0,
    explanation:
      "Bên cạnh nước biển dâng toàn cầu, việc bơm hút nước ngầm quá mức gây sụt lún nền đất, các đập thủy điện thượng nguồn giữ lại phù sa và suy giảm rừng ngập mặn đã khiến ĐBSCL chịu hạn mặn khốc liệt hơn.",
  },
  {
    id: "cc-q3",
    question:
      "Hai tỉnh nào (theo bản đồ 34 tỉnh, thành sau sáp nhập) sở hữu dải ven biển cực Nam Trung Bộ khô hạn nhất cả nước và đối mặt nguy cơ hoang mạc hóa cao nhất?",
    options: [
      "Quảng Ninh và Thành phố Hải Phòng",
      "Khánh Hòa và Lâm Đồng",
      "Lào Cai và Tuyên Quang",
      "An Giang và Đồng Tháp",
    ],
    correctIndex: 1,
    explanation:
      "Dải ven biển cực Nam Trung Bộ thuộc tỉnh Khánh Hòa và tỉnh Lâm Đồng nằm trong vùng khuất gió ẩm, lượng mưa trung bình năm thấp nhất cả nước (~700–800 mm), chịu tác động mạnh của hạn hán và hoang mạc hóa.",
  },
  {
    id: "cc-q4",
    question:
      "Loại hình thiên tai liên quan đến biến đổi khí hậu nào thường gây thiệt hại thảm khốc về tính mạng và nhà cửa ở các tỉnh miền núi phía Bắc (Lào Cai, Tuyên Quang, Cao Bằng)?",
    options: [
      "Sóng thần và triều cường",
      "Xâm nhập mặn sâu vào đất liền",
      "Mưa cực đoan gây lũ ống, lũ quét và sạt lở đất",
      "Hoang mạc hóa cát bay",
    ],
    correctIndex: 2,
    explanation:
      "Tại vùng địa hình dốc, chia cắt mạnh như Trung du và miền núi Bắc Bộ (Lào Cai, Tuyên Quang, Cao Bằng), các trận mưa cực đoan do biến đổi khí hậu thường gây lũ ống, lũ quét và sạt lở đất bất ngờ.",
  },
  {
    id: "cc-q5",
    question:
      "Hậu quả xã hội dài hạn rõ rệt nhất đối với người dân ĐBSCL khi đất đai nhiễm mặn, sạt lở và sinh kế nông nghiệp bấp bênh là gì?",
    options: [
      "Gia tăng làn sóng di cư khí hậu từ nông thôn lên các đô thị Đông Nam Bộ",
      "Tăng nhanh diện tích rừng lá kim ôn đới",
      "Dân số vùng đồng bằng tăng đột biến do nhập cư",
      "Năng suất cây ăn trái ôn đới tăng gấp đôi",
    ],
    correctIndex: 0,
    explanation:
      "Mất đất sản xuất, thiếu nước ngọt và thu nhập bấp bênh buộc hơn 1 triệu người dân ĐBSCL phải di cư lên Thành phố Hồ Chí Minh và các tỉnh Đông Nam Bộ để tìm việc làm mới.",
  },
];
