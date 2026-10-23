import { ChartMasterChallenge } from "../types";

export const DETAILED_CHART_CHALLENGES: ChartMasterChallenge[] = [
  {
    id: "chart-01",
    title: "Dạng 1: Biểu đồ Miền — Chuyển dịch cơ cấu GDP (2010 - 2022)",
    context: "Cho bảng số liệu về cơ cấu GDP phân theo khu vực kinh tế của nước ta giai đoạn 2010 - 2022 (Đơn vị: %). Yêu cầu thể hiện sự chuyển dịch cơ cấu qua chuỗi 5 mốc thời gian.",
    dataTitle: "Cơ cấu GDP phân theo khu vực kinh tế của nước ta giai đoạn 2010 - 2022",
    unit: "%",
    years: ["2010", "2015", "2018", "2020", "2022"],
    series: [
      { name: "Nông - lâm - thủy sản", values: [18.9, 17.0, 14.7, 12.7, 11.9], color: "#146B5B" },
      { name: "Công nghiệp - xây dựng", values: [38.2, 36.7, 34.3, 36.7, 38.3], color: "#1677B8" },
      { name: "Dịch vụ", values: [42.9, 46.3, 51.0, 50.6, 49.8], color: "#E29578" }
    ],
    options: [
      { type: "bar", label: "Biểu đồ Cột", icon: "BarChart3" },
      { type: "line", label: "Biểu đồ Đường", icon: "LineChart" },
      { type: "pie", label: "Biểu đồ Tròn", icon: "PieChart" },
      { type: "area", label: "Biểu đồ Miền", icon: "AreaChart" },
      { type: "combined", label: "Biểu đồ Kết hợp", icon: "TrendingUp" }
    ],
    correctType: "area",
    keywordAnalysis: {
      isCorrect: true,
      mainKeyword: "Chuyển dịch cơ cấu qua chuỗi ≥ 4 năm",
      explanation: "Bảng số liệu có đơn vị là % và tổng các khu vực bằng 100%. Đề bài có từ khóa 'Chuyển dịch cơ cấu' và có 5 mốc năm (≥ 4 năm). Lựa chọn chuẩn mực và duy nhất là BIỂU ĐỒ MIỀN.",
      ruleToRemember: "Cơ cấu (%) + Chuỗi thời gian từ 4 năm trở lên => BIỂU ĐỒ MIỀN (Khung hình chữ nhật trục tung 0 - 100%)."
    },
    expertCommentary: {
      overview: "Cơ cấu kinh tế nước ta có sự chuyển dịch tích cực theo hướng công nghiệp hóa, hiện đại hóa và hội nhập quốc tế sâu rộng.",
      detailedTrends: [
        "Khu vực I (Nông - lâm - thủy sản) giảm liên tục từ 18.9% xuống 11.9% (giảm 7.0%).",
        "Khu vực III (Dịch vụ) tăng từ 42.9% lên mức cao nhất năm 2018 (51.0%) và giữ vững tỉ trọng chi phối xấp xỉ 50%.",
        "Khu vực II (Công nghiệp - xây dựng) duy trì tỉ trọng lớn từ 34.3% đến 38.3%, giữ vai trò động lực thúc đẩy nền kinh tế."
      ],
      causes: [
        "Đường lối đổi mới, công nghiệp hóa - hiện đại hóa đất nước phát huy hiệu quả mạnh mẽ.",
        "Năng suất lao động ngành công nghiệp chế biến chế tạo và các ngành dịch vụ (du lịch, ngân hàng số, logistics) gia tăng vượt trội."
      ]
    },
    drawingTips: [
      "Vẽ khung hình chữ nhật, trục tung bên trái và bên phải đều đánh số từ 0% đến 100%.",
      "Trục hoành biểu diễn các năm, bắt buộc chia đúng khoảng cách năm (khoảng cách 2010 - 2015 phải gấp 2,5 lần khoảng cách 2018 - 2020).",
      "Vẽ lần lượt từng miền bằng cách cộng dồn các chỉ tiêu, ghi số liệu rõ ràng vào giữa từng miền kèm kí hiệu phân biệt."
    ]
  },
  {
    id: "chart-02",
    title: "Dạng 2: Biểu đồ Đường — Tốc độ tăng trưởng sản phẩm công nghiệp (2010 = 100%)",
    context: "Cho bảng số liệu về chỉ số tốc độ tăng trưởng sản lượng Điện, Xi măng, Than sạch của nước ta giai đoạn 2010 - 2021 lấy năm gốc 2010 = 100.0%.",
    dataTitle: "Tốc độ tăng trưởng một số sản phẩm công nghiệp nước ta (Năm 2010 = 100%)",
    unit: "%",
    years: ["2010", "2015", "2018", "2021"],
    series: [
      { name: "Điện sản xuất", values: [100.0, 168.4, 234.1, 275.6], color: "#1677B8" },
      { name: "Xi măng", values: [100.0, 122.5, 155.8, 178.2], color: "#146B5B" },
      { name: "Than sạch", values: [100.0, 94.2, 91.5, 96.0], color: "#6C757D" }
    ],
    options: [
      { type: "bar", label: "Biểu đồ Cột", icon: "BarChart3" },
      { type: "line", label: "Biểu đồ Đường", icon: "LineChart" },
      { type: "pie", label: "Biểu đồ Tròn", icon: "PieChart" },
      { type: "area", label: "Biểu đồ Miền", icon: "AreaChart" },
      { type: "combined", label: "Biểu đồ Kết hợp", icon: "TrendingUp" }
    ],
    correctType: "line",
    keywordAnalysis: {
      isCorrect: true,
      mainKeyword: "Tốc độ tăng trưởng / Tốc độ phát triển",
      explanation: "Bảng số liệu có đơn vị %, tất cả các đường đều xuất phát từ điểm gốc 100.0% tại năm 2010. Từ khóa nhận diện đề bài là 'Tốc độ tăng trưởng'. Dạng thích hợp nhất là BIỂU ĐỒ ĐƯỜNG (Biểu đồ đồ thị).",
      ruleToRemember: "Từ khóa: 'Tốc độ tăng trưởng', 'Tốc độ phát triển', 'Chỉ số phát triển' (năm gốc = 100%) => BIỂU ĐỒ ĐƯỜNG."
    },
    expertCommentary: {
      overview: "Tốc độ tăng trưởng các sản phẩm công nghiệp nước ta diễn ra với nhịp độ khác nhau giữa các nhóm ngành.",
      detailedTrends: [
        "Điện sản xuất có tốc độ bứt phá mạnh nhất, năm 2021 đạt 275.6%, gấp 2.75 lần năm 2010.",
        "Xi măng tăng trưởng đều đặn đạt 178.2% năm 2021, phản ánh sự phát triển của ngành xây dựng và giao thông.",
        "Than sạch có xu hướng chững lại và giảm nhẹ (dưới 100%), do các mỏ lộ thiên cạn kiệt và chuyển dịch năng lượng xanh."
      ],
      causes: [
        "Điện là năng lượng cốt lõi phục vụ sản xuất công nghiệp, thu hút vốn FDI và tiêu dùng sinh hoạt của người dân.",
        "Than đá chuyển dần từ xuất khẩu sang ưu tiên cấp phát cho các nhà máy nhiệt điện nội địa."
      ]
    },
    drawingTips: [
      "Gốc trục tung bắt đầu từ 0 hoặc từ dưới 100% một khoảng nhỏ để các đường không bị dính sát đáy.",
      "Tất cả các đường đều xuất phát chung từ mốc 100% ở năm đầu tiên 2010 trên trục tung.",
      "Ghi rõ số liệu tại từng điểm nút tọa độ và chú giải rõ ràng bằng màu sắc hoặc nét vẽ khác nhau."
    ]
  },
  {
    id: "chart-03",
    title: "Dạng 3: Biểu đồ Tròn có bán kính R — Quy mô & Cơ cấu xuất nhập khẩu (2015 & 2022)",
    context: "Bảng số liệu tổng giá trị xuất khẩu và nhập khẩu hàng hóa nước ta trong 2 năm 2015 và 2022 (Đơn vị: Tỉ USD). Đề bài yêu cầu thể hiện cả quy mô và cơ cấu.",
    dataTitle: "Quy mô và cơ cấu giá trị xuất khẩu, nhập khẩu hàng hóa nước ta năm 2015 và 2022",
    unit: "Tỉ USD",
    years: ["2015", "2022"],
    series: [
      { name: "Xuất khẩu", values: [162.0, 371.3], color: "#146B5B" },
      { name: "Nhập khẩu", values: [165.7, 358.9], color: "#1677B8" }
    ],
    options: [
      { type: "bar", label: "Biểu đồ Cột", icon: "BarChart3" },
      { type: "line", label: "Biểu đồ Đường", icon: "LineChart" },
      { type: "pie", label: "Biểu đồ Tròn", icon: "PieChart" },
      { type: "area", label: "Biểu đồ Miền", icon: "AreaChart" },
      { type: "combined", label: "Biểu đồ Kết hợp", icon: "TrendingUp" }
    ],
    correctType: "pie",
    keywordAnalysis: {
      isCorrect: true,
      mainKeyword: "Quy mô và Cơ cấu trong 1 đến 3 năm",
      explanation: "Đề bài yêu cầu đồng thời 2 yếu tố: 'Quy mô' (tổng giá trị kim ngạch) và 'Cơ cấu' (tỉ lệ xuất/nhập) trong 2 năm (≤ 3 năm). Lựa chọn tối ưu là BIỂU ĐỒ TRÒN có bán kính R khác nhau (tính bán kính R tương ứng căn bậc hai của tổng kim ngạch).",
      ruleToRemember: "Từ khóa: 'Quy mô và cơ cấu' trong 1 - 3 năm => BIỂU ĐỒ TRÒN CÓ BÁN KÍNH KHÁC NHAU (R₁ < R₂)."
    },
    expertCommentary: {
      overview: "Quy mô ngoại thương tăng trưởng vượt bậc, cơ cấu cán cân thương mại chuyển từ nhập siêu sang xuất siêu ấn tượng.",
      detailedTrends: [
        "Tổng quy mô năm 2015 là 327.7 tỉ USD, đến năm 2022 tăng lên 730.2 tỉ USD (tăng gấp 2.23 lần).",
        "Cơ cấu: Năm 2015 xuất khẩu chiếm 49.4%, nhập khẩu 50.6% (nhập siêu). Đến năm 2022, xuất khẩu tăng lên 50.8%, nhập khẩu giảm còn 49.2% (xuất siêu 12.4 tỉ USD)."
      ],
      causes: [
        "Việt Nam hội nhập sâu rộng với hàng loạt hiệp định thương mại tự do (EVFTA, CPTPP).",
        "Sản lượng và giá trị xuất khẩu ngành điện tử, dệt may, da giày, nông thủy sản tăng trưởng bứt phá."
      ]
    },
    drawingTips: [
      "Bước 1: Xử lý số liệu tính ra tỉ trọng (%) của từng thành phần trong tổng số.",
      "Bước 2: Tính bán kính đường tròn R: Giả sử R₂₀₁₅ = 2 cm thì R₂₀₂₂ = 2 * √(730.2 / 327.7) ≈ 3.0 cm.",
      "Bước 3: Vẽ hình tròn bắt đầu từ tia 12 giờ theo chiều kim đồng hồ, ghi số liệu % vào giữa từng hình quạt."
    ]
  },
  {
    id: "chart-04",
    title: "Dạng 4: Biểu đồ Cột đơn — So sánh Sản lượng lúa giữa các vùng kinh tế",
    context: "Cho bảng số liệu về sản lượng lúa của 6 vùng kinh tế nước ta trong năm 2022 (Đơn vị: Triệu tấn). Yêu cầu so sánh sản lượng giữa các vùng.",
    dataTitle: "Sản lượng lúa phân theo vùng kinh tế nước ta năm 2022",
    unit: "Triệu tấn",
    years: ["ĐBSCL", "ĐBSH", "Bắc Trung Bộ", "TDMN Bắc Bộ", "Duyên hải NTB", "Tây Nguyên"],
    series: [
      { name: "Sản lượng lúa", values: [23.8, 6.1, 3.6, 2.7, 2.3, 1.4], color: "#146B5B" }
    ],
    options: [
      { type: "bar", label: "Biểu đồ Cột", icon: "BarChart3" },
      { type: "line", label: "Biểu đồ Đường", icon: "LineChart" },
      { type: "pie", label: "Biểu đồ Tròn", icon: "PieChart" },
      { type: "area", label: "Biểu đồ Miền", icon: "AreaChart" },
      { type: "combined", label: "Biểu đồ Kết hợp", icon: "TrendingUp" }
    ],
    correctType: "bar",
    keywordAnalysis: {
      isCorrect: true,
      mainKeyword: "So sánh Quy mô giữa các vùng / các đối tượng trong 1 năm",
      explanation: "Đề bài yêu cầu 'So sánh quy mô sản lượng' giữa các đối tượng độc lập (các vùng kinh tế) trong cùng một năm. Dạng biểu đồ trực quan, chính xác nhất là BIỂU ĐỒ CỘT ĐƠN.",
      ruleToRemember: "Từ khóa: 'So sánh quy mô', 'Khối lượng', 'Hiện trạng' giữa các địa phương hoặc qua thời gian => BIỂU ĐỒ CỘT."
    },
    expertCommentary: {
      overview: "Sản lượng lúa có sự chênh lệch rất lớn giữa các vùng kinh tế, tập trung áp đảo ở hai đồng bằng châu thổ lớn.",
      detailedTrends: [
        "Đồng bằng sông Cửu Long đứng đầu tuyệt đối với 23.8 triệu tấn, chiếm hơn 59% sản lượng lúa cả nước.",
        "Đồng bằng sông Hồng đứng thứ hai với 6.1 triệu tấn (chiếm khoảng 15%).",
        "Các vùng đồi núi như Tây Nguyên (1.4 triệu tấn) và Trung du miền núi Bắc Bộ (2.7 triệu tấn) có sản lượng thấp do địa hình dốc."
      ],
      causes: [
        "ĐBSCL có diện tích đất phù sa ngọt rộng lớn, nguồn nước dồi dào, khí hậu cận xích đạo cho phép trồng 2-3 vụ lúa/năm.",
        "Vùng đồi núi chủ yếu thích hợp cho cây công nghiệp lâu năm và lúa rẫy."
      ]
    },
    drawingTips: [
      "Trục tung biểu diễn sản lượng (Triệu tấn) bắt đầu từ gốc tọa độ 0.",
      "Trục hoành biểu diễn các vùng kinh tế, chiều rộng các cột phải bằng nhau tuyệt đối.",
      "Ghi số liệu cụ thể trên đầu mỗi cột để người xem dễ so sánh số liệu."
    ]
  },
  {
    id: "chart-05",
    title: "Dạng 5: Biểu đồ Cột nhóm (Cột ghép) — Diện tích & Sản lượng Cà phê qua các năm",
    context: "Cho bảng số liệu về diện tích (nghìn ha) và sản lượng (nghìn tấn) cà phê của nước ta qua các năm 2015, 2018, 2020, 2022.",
    dataTitle: "Diện tích và sản lượng cà phê của nước ta giai đoạn 2015 - 2022",
    unit: "Nghìn ha & Nghìn tấn",
    years: ["2015", "2018", "2020", "2022"],
    series: [
      { name: "Diện tích (nghìn ha)", values: [645.0, 688.0, 695.8, 710.5], color: "#146B5B" },
      { name: "Sản lượng (nghìn tấn)", values: [1450.0, 1620.0, 1740.0, 1890.0], color: "#1677B8" }
    ],
    options: [
      { type: "bar", label: "Biểu đồ Cột (Cột nhóm)", icon: "BarChart3" },
      { type: "line", label: "Biểu đồ Đường", icon: "LineChart" },
      { type: "pie", label: "Biểu đồ Tròn", icon: "PieChart" },
      { type: "area", label: "Biểu đồ Miền", icon: "AreaChart" },
      { type: "combined", label: "Biểu đồ Kết hợp", icon: "TrendingUp" }
    ],
    correctType: "bar",
    keywordAnalysis: {
      isCorrect: true,
      mainKeyword: "So sánh 2-3 đối tượng qua nhiều năm",
      explanation: "Đề bài yêu cầu so sánh sự phát triển của các đối tượng qua các mốc thời gian. Khi các đại lượng cùng thể hiện độ lớn quy mô, BIỂU ĐỒ CỘT GHÉP (CỘT NHÓM) giúp đặt các đối tượng cạnh nhau để thấy rõ tương quan so sánh.",
      ruleToRemember: "Từ khóa: 'So sánh' 2-3 đối tượng qua nhiều mốc thời gian => BIỂU ĐỒ CỘT GHÉP."
    },
    expertCommentary: {
      overview: "Cả diện tích và sản lượng cà phê nước ta đều có xu hướng tăng liên tục, trong đó sản lượng tăng nhanh hơn diện tích phản ánh năng suất thâm canh cao.",
      detailedTrends: [
        "Diện tích tăng từ 645 nghìn ha lên 710.5 nghìn ha (tăng 65.5 nghìn ha).",
        "Sản lượng tăng mạnh từ 1.450 nghìn tấn lên 1.890 nghìn tấn (tăng 440 nghìn tấn, gấp 1.3 lần)."
      ],
      causes: [
        "Thị trường xuất khẩu cà phê thế giới mở rộng, giá cà phê nhân duy trì ở mức cao.",
        "Ứng dụng kỹ thuật tái canh giống cà phê cao sản mới và công nghệ tưới tiết kiệm nước tại Tây Nguyên."
      ]
    },
    drawingTips: [
      "Tại mỗi mốc năm, vẽ 2 cột dính sát nhau (1 cột diện tích, 1 cột sản lượng).",
      "Khoảng cách giữa các cụm năm phải phản ánh đúng tỉ lệ năm thực tế.",
      "Phải có bảng chú giải rõ ràng kí hiệu của từng cột."
    ]
  },
  {
    id: "chart-06",
    title: "Dạng 6: Biểu đồ Kết hợp (Cột + Đường) — Hai đơn vị đo khác nhau",
    context: "Cho bảng số liệu về diện tích trồng lúa (nghìn ha) và sản lượng lúa (triệu tấn) của nước ta giai đoạn 2010 - 2022.",
    dataTitle: "Diện tích và sản lượng lúa của cả nước giai đoạn 2010 - 2022",
    unit: "Nghìn ha & Triệu tấn",
    years: ["2010", "2015", "2018", "2020", "2022"],
    series: [
      { name: "Diện tích (nghìn ha) - Trục cột", values: [7489, 7828, 7570, 7279, 7109], color: "#146B5B" },
      { name: "Sản lượng (triệu tấn) - Trục đường", values: [40.0, 45.1, 44.0, 42.8, 42.7], color: "#E29578" }
    ],
    options: [
      { type: "bar", label: "Biểu đồ Cột", icon: "BarChart3" },
      { type: "line", label: "Biểu đồ Đường", icon: "LineChart" },
      { type: "pie", label: "Biểu đồ Tròn", icon: "PieChart" },
      { type: "area", label: "Biểu đồ Miền", icon: "AreaChart" },
      { type: "combined", label: "Biểu đồ Kết hợp (Cột + Đường)", icon: "TrendingUp" }
    ],
    correctType: "combined",
    keywordAnalysis: {
      isCorrect: true,
      mainKeyword: "Hai đối tượng có hai đơn vị đo khác nhau hoàn toàn",
      explanation: "Bảng số liệu có 2 đơn vị tính hoàn toàn khác nhau: Diện tích (nghìn ha) và Sản lượng (triệu tấn) qua chuỗi năm. Biểu đồ bắt buộc phải có 2 trục tung: Trục tung bên trái dành cho Cột và trục tung bên phải dành cho Đường. Đó là BIỂU ĐỒ KẾT HỢP (CỘT + ĐƯỜNG).",
      ruleToRemember: "Từ khóa: 'Thể hiện diện tích và sản lượng', 'Khối lượng và tốc độ' có 2 ĐƠN VỊ ĐO KHÁC NHAU => BIỂU ĐỒ KẾT HỢP."
    },
    expertCommentary: {
      overview: "Diện tích trồng lúa có xu hướng giảm nhẹ do chuyển dịch cơ cấu đất nông nghiệp, nhưng sản lượng vẫn giữ vững ở mức cao nhờ năng suất tăng mạnh.",
      detailedTrends: [
        "Diện tích giảm từ 7.489 nghìn ha xuống 7.109 nghìn ha (giảm 380 nghìn ha) do chuyển đổi sang nuôi tôm và trồng cây ăn trái.",
        "Sản lượng lúa vẫn duy trì ổn định trên 42 triệu tấn/năm, đảm bảo vững chắc an ninh lương thực quốc gia và vị thế top đầu xuất khẩu gạo thế giới."
      ],
      causes: [
        "Ứng dụng tiến bộ khoa học kỹ thuật: Các giống lúa thuần chất lượng cao (ST24, ST25, Đài thơm 8) thay thế giống cũ.",
        "Cơ giới hóa đồng bộ khâu gieo sạ, thu hoạch và hệ thống thủy lợi nội đồng hoàn chỉnh."
      ]
    },
    drawingTips: [
      "Vẽ hai trục tung: Trục trái cho Cột (nghìn ha), trục phải cho Đường (triệu tấn).",
      "Các cột dựng tương ứng mốc năm; điểm đường đồ thị nằm chính giữa đỉnh mỗi cột tương ứng năm đó.",
      "Ghi rõ đơn vị ở đỉnh hai trục tung và chú giải phân biệt rõ ràng."
    ]
  }
];
