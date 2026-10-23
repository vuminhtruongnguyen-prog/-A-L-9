import { MockExam, ExamQuestion } from "../types";

export const MOCK_EXAMS: MockExam[] = [
  {
    id: "exam-specialized-01",
    title: "Đề tham khảo Tuyển sinh Lớp 10 Chuyên Địa lí (Mã đề: CHUYEN-01)",
    type: "Thi Chuyên Lớp 10",
    timeLimitMinutes: 45,
    difficulty: "Thi Chuyên",
    description: "Đề chuẩn 45 câu hỏi bám sát định dạng cấu trúc đề thi tuyển sinh vào các trường THPT Chuyên (Chuyên SP, Chuyên Hà Nội - Amsterdam, Chuyên Lê Hồng Phong, Chuyên Lam Sơn).",
    questions: [
      {
        id: "c1-01",
        level: "Nhận biết",
        question: "Căn cứ vào Atlat Địa lí Việt Nam trang 4-5, điểm cực Bắc trên đất liền của nước ta thuộc tỉnh nào?",
        options: ["Hà Giang", "Cao Bằng", "Lào Cai", "Lạng Sơn"],
        correctAnswer: 0,
        explanation: "Điểm cực Bắc trên đất liền của nước ta nằm ở xã Lũng Cú, huyện Đồng Văn, tỉnh Hà Giang (vĩ độ 23°23'B).",
        atlatReference: "Atlat trang 4-5",
        topicName: "Vị trí địa lí"
      },
      {
        id: "c1-02",
        level: "Nhận biết",
        question: "Vùng biển Việt Nam có diện tích trên Biển Đông là khoảng:",
        options: ["Khoảng 500.000 km²", "Khoảng 800.000 km²", "Hơn 1 triệu km²", "Gần 2 triệu km²"],
        correctAnswer: 2,
        explanation: "Vùng biển Việt Nam thuộc Biển Đông có diện tích trên 1 triệu km², gấp hơn 3 lần diện tích phần đất liền.",
        atlatReference: "Atlat trang 4-5",
        topicName: "Biển đảo Việt Nam"
      },
      {
        id: "c1-03",
        level: "Thông hiểu",
        question: "Đặc điểm nào sau đây quy định thiên nhiên nước ta mang tính chất nhiệt đới ẩm gió mùa?",
        options: [
          "Nằm hoàn toàn trong vùng nội chí tuyến bán cầu Bắc, tiếp giáp Biển Đông và trong khu vực gió mùa châu Á",
          "Nằm ở bán cầu Nam và gần xích đạo",
          "Địa hình 3/4 là đồi núi thấp",
          "Có mạng lưới sông ngòi dày đặc"
        ],
        correctAnswer: 0,
        explanation: "Vị trí nội chí tuyến quy định tính chất nhiệt đới, Biển Đông quy định tính chất ẩm và hoàn lưu gió mùa châu Á quy định tính chất gió mùa.",
        atlatReference: "Atlat trang 4-5, 9",
        topicName: "Địa lí tự nhiên"
      },
      {
        id: "c1-04",
        level: "Nhận biết",
        question: "Dân tộc nào có số dân đông nhất trong cộng đồng 54 dân tộc ở nước ta?",
        options: ["Dân tộc Tày", "Dân tộc Thái", "Dân tộc Kinh (Việt)", "Dân tộc Mường"],
        correctAnswer: 2,
        explanation: "Dân tộc Kinh (Việt) chiếm khoảng 85,3% dân số cả nước, là dân tộc có số dân đông nhất.",
        atlatReference: "Atlat trang 16",
        topicName: "Cộng đồng các dân tộc"
      },
      {
        id: "c1-05",
        level: "Thông hiểu",
        question: "Người Tày, Nùng cư trú chủ yếu ở khu vực địa hình nào?",
        options: [
          "Vùng Tả ngạn sông Hồng (Đông Bắc)",
          "Vùng Hữu ngạn sông Hồng và Tây Bắc",
          "Vùng cao nguyên Tây Nguyên",
          "Vùng đồng bằng duyên hải Nam Trung Bộ"
        ],
        correctAnswer: 0,
        explanation: "Người Tày và Nùng là hai dân tộc thiểu số đông dân, cư trú chủ yếu ở vùng tả ngạn sông Hồng (Lạng Sơn, Cao Bằng, Bắc Kạn, Tuyên Quang).",
        atlatReference: "Atlat trang 16",
        topicName: "Cộng đồng các dân tộc"
      },
      {
        id: "c1-06",
        level: "Nhận biết",
        question: "Đỉnh núi cao nhất Việt Nam và được mệnh danh là 'Nóc nhà Đông Dương' là:",
        options: ["Tây Côn Lĩnh (2.419m)", "Ngọc Linh (2.598m)", "Fansipan (3.143m)", "Pu Si Lung (3.076m)"],
        correctAnswer: 2,
        explanation: "Đỉnh Fansipan cao 3.143m thuộc dãy Hoàng Liên Sơn là đỉnh núi cao nhất nước ta và cả bán đảo Đông Dương.",
        atlatReference: "Atlat trang 6-7",
        topicName: "Địa hình Việt Nam"
      },
      {
        id: "c1-07",
        level: "Thông hiểu",
        question: "Gió mùa Đông Bắc khi thổi qua vịnh Bắc Bộ vào cuối mùa đông (tháng 2 - 3) gây ra kiểu thời tiết đặc trưng nào ở miền Bắc?",
        options: [
          "Khô hanh, trời quang mây",
          "Lạnh ẩm, mưa phùn nhớp nháp",
          "Nóng ẩm, mưa rào kèm dông",
          "Khô nóng kéo dài"
        ],
        correctAnswer: 1,
        explanation: "Vào nửa cuối mùa đông, khối khí lạnh di chuyển lệch đông qua biển Đông và vịnh Bắc Bộ, được tăng cường ẩm gây mưa phùn ẩm ướt ở Đông Bắc và đồng bằng Bắc Bộ.",
        atlatReference: "Atlat trang 9",
        topicName: "Khí hậu Việt Nam"
      },
      {
        id: "c1-08",
        level: "Vận dụng",
        question: "Tại sao vùng Duyên hải Nam Trung Bộ (Ninh Thuận, Bình Thuận) lại có lượng mưa trung bình năm thấp nhất cả nước?",
        options: [
          "Nằm sâu trong nội địa không tiếp giáp biển",
          "Địa hình núi thấp không chắn gió",
          "Bờ biển chạy song song với hướng gió mùa Tây Nam và dòng biển lạnh ven bờ",
          "Không có bão đổ bộ vào mùa mưa"
        ],
        correctAnswer: 2,
        explanation: "Hình dạng bờ biển song song hướng gió thịnh hành cùng dòng biển lạnh ven bờ làm giảm quá trình ngưng kết mây, khiến Ninh Thuận - Bình Thuận là vùng khô hạn nhất nước.",
        atlatReference: "Atlat trang 9",
        topicName: "Khí hậu Việt Nam"
      },
      {
        id: "c1-09",
        level: "Nhận biết",
        question: "Hai đồng bằng châu thổ lớn nhất nước ta là:",
        options: [
          "Đồng bằng sông Hồng và Đồng bằng sông Cửu Long",
          "Đồng bằng sông Mã và Đồng bằng sông Chu",
          "Đồng bằng Thanh Nghệ Tĩnh và Đồng bằng sông Hồng",
          "Đồng bằng sông Cửu Long và Đồng bằng duyên hải miền Trung"
        ],
        correctAnswer: 0,
        explanation: "Đồng bằng sông Hồng (khoảng 15.000 km²) và Đồng bằng sông Cửu Long (khoảng 40.000 km²) là hai đồng bằng châu thổ phì nhiêu lớn nhất nước ta.",
        atlatReference: "Atlat trang 6-7",
        topicName: "Địa hình Việt Nam"
      },
      {
        id: "c1-10",
        level: "Thông hiểu",
        question: "Đặc điểm nổi bật của mạng lưới sông ngòi nước ta là:",
        options: [
          "Mạng lưới thưa thớt, ít sông",
          "Mạng lưới dày đặc (2.360 con sông dài trên 10km), nhiều nước, giàu phù sa",
          "Sông ngòi đóng băng vào mùa đông",
          "Chảy theo hướng Tây - Đông là chủ yếu"
        ],
        correctAnswer: 1,
        explanation: "Nước ta có 2.360 con sông dài từ 10km trở lên; tổng lượng dòng chảy hơn 839 tỉ m³/năm và vận chuyển khoảng 200 triệu tấn phù sa mỗi năm.",
        atlatReference: "Atlat trang 10",
        topicName: "Thủy văn Việt Nam"
      },
      {
        id: "c1-11",
        level: "Vận dụng",
        question: "Hai hướng địa hình chính của vùng núi nước ta là:",
        options: [
          "Bắc - Nam và Đông - Tây",
          "Tây Bắc - Đông Nam và vòng cung",
          "Tây Nam - Đông Bắc và hướng kinh tuyến",
          "Tây - Đông và vòng cung"
        ],
        correctAnswer: 1,
        explanation: "Hướng Tây Bắc - Đông Nam thể hiện rõ ở vùng núi Tây Bắc và Trường Sơn Bắc; hướng vòng cung thể hiện rõ ở 4 cánh cung Đông Bắc và vùng núi Nam Trung Bộ.",
        atlatReference: "Atlat trang 6-7",
        topicName: "Địa hình Việt Nam"
      },
      {
        id: "c1-12",
        level: "Nhận biết",
        question: "Căn cứ vào Atlat Địa lí Việt Nam trang 11, nhóm đất chiếm diện tích lớn nhất ở vùng đồi núi nước ta là:",
        options: ["Đất phù sa sông", "Đất feralit trên các loại đá", "Đất xám bạc màu", "Đất cát pha ven biển"],
        correctAnswer: 1,
        explanation: "Đất feralit chiếm hơn 65% diện tích đất tự nhiên, là nhóm đất chủ yếu của vùng đồi núi nước ta.",
        atlatReference: "Atlat trang 11",
        topicName: "Thổ nhưỡng Việt Nam"
      },
      {
        id: "c1-13",
        level: "Thông hiểu",
        question: "Căn cứ vào Atlat Địa lí Việt Nam trang 15, vùng có mật độ dân số cao nhất cả nước là:",
        options: ["Đồng bằng sông Cửu Long", "Đông Nam Bộ", "Đồng bằng sông Hồng", "Bắc Trung Bộ"],
        correctAnswer: 2,
        explanation: "Đồng bằng sông Hồng có mật độ dân số cao nhất cả nước (>1.000 người/km²), tập trung các đô thị lớn như Hà Nội, Hải Phòng.",
        atlatReference: "Atlat trang 15",
        topicName: "Địa lí dân cư"
      },
      {
        id: "c1-14",
        level: "Thông hiểu",
        question: "Hiện tượng 'Cơ cấu dân số vàng' ở nước ta có nghĩa là:",
        options: [
          "Tỉ lệ trẻ em dưới 15 tuổi chiếm đa số",
          "Tỉ lệ người già trên 65 tuổi chiếm trên 50%",
          "Tỉ lệ dân số trong độ tuổi lao động (15-64 tuổi) gấp đôi số người phụ thuộc",
          "Dân số ngừng tăng trưởng hoàn toàn"
        ],
        correctAnswer: 2,
        explanation: "Cơ cấu dân số vàng xuất hiện khi tỉ lệ người trong độ tuổi lao động (15-64) chiếm từ 65% trở lên, tức là cứ 2 người lao động chỉ phải nuôi 1 người phụ thuộc.",
        atlatReference: "Atlat trang 15",
        topicName: "Địa lí dân cư"
      },
      {
        id: "c1-15",
        level: "Vận dụng",
        question: "Cơ cấu kinh tế nước ta đang chuyển dịch theo hướng tích cực nào sau đây?",
        options: [
          "Tăng tỉ trọng nông nghiệp, giảm công nghiệp",
          "Giảm tỉ trọng khu vực I, tăng tỉ trọng khu vực II và khu vực III",
          "Duy trì tỉ trọng tuyệt đối của kinh tế nhà nước",
          "Giảm tỉ trọng ngành công nghiệp chế biến chế tạo"
        ],
        correctAnswer: 1,
        explanation: "Xu hướng chuyển dịch theo hướng công nghiệp hóa: Giảm khu vực I (Nông - Lâm - Thủy sản), tăng khu vực II (Công nghiệp - Xây dựng) và khu vực III (Dịch vụ).",
        atlatReference: "Atlat trang 17",
        topicName: "Chuyển dịch cơ cấu"
      },
      {
        id: "c1-16",
        level: "Nhận biết",
        question: "Căn cứ vào Atlat Địa lí Việt Nam trang 18, hai vùng chuyên canh cây công nghiệp lâu năm lớn nhất nước ta là:",
        options: [
          "Tây Nguyên và Đông Nam Bộ",
          "Đồng bằng sông Hồng và Tây Bắc",
          "Bắc Trung Bộ và Duyên hải Nam Trung Bộ",
          "Đồng bằng sông Cửu Long và Đông Bắc"
        ],
        correctAnswer: 0,
        explanation: "Tây Nguyên (chuyên canh cà phê, hồ tiêu, cao su) và Đông Nam Bộ (chuyên canh cao su, điều, hồ tiêu) là 2 vùng chuyên canh cây công nghiệp lớn nhất cả nước.",
        atlatReference: "Atlat trang 18, 19",
        topicName: "Nông nghiệp Việt Nam"
      },
      {
        id: "c1-17",
        level: "Thông hiểu",
        question: "Căn cứ vào Atlat Địa lí Việt Nam trang 19, tỉnh nào sau đây có sản lượng lúa lớn nhất nước ta?",
        options: ["An Giang", "Kiên Giang", "Đồng Tháp", "Long An"],
        correctAnswer: 1,
        explanation: "Tỉnh Kiên Giang có diện tích và sản lượng lúa dẫn đầu cả nước trong nhiều năm liền.",
        atlatReference: "Atlat trang 19",
        topicName: "Nông nghiệp Việt Nam"
      },
      {
        id: "c1-18",
        level: "Nhận biết",
        question: "Tỉnh dẫn đầu cả nước về sản lượng khai thác và nuôi trồng thủy sản là:",
        options: ["Quảng Ninh", "Khánh Hòa", "Kiên Giang", "Nghệ An"],
        correctAnswer: 2,
        explanation: "Kiên Giang có ngư trường vịnh Thái Lan trù phú, sản lượng đánh bắt và nuôi trồng thủy sản luôn đứng đầu toàn quốc.",
        atlatReference: "Atlat trang 20",
        topicName: "Thủy sản Việt Nam"
      },
      {
        id: "c1-19",
        level: "Thông hiểu",
        question: "Ngành công nghiệp trọng điểm của nước ta là ngành có đặc điểm:",
        options: [
          "Chiếm tỉ trọng nhỏ trong cơ cấu GDP",
          "Sử dụng hoàn toàn nguyên liệu nhập khẩu từ nước ngoài",
          "Chiếm tỉ trọng cao, có thế mạnh lâu dài, mang lại hiệu quả kinh tế cao và tác động mạnh đến các ngành khác",
          "Chỉ phục vụ tiêu dùng nội địa"
        ],
        correctAnswer: 2,
        explanation: "Định nghĩa ngành công nghiệp trọng điểm: Có thế mạnh lâu dài, tỉ trọng lớn, hiệu quả cao và thúc đẩy các ngành kinh tế khác phát triển.",
        atlatReference: "Atlat trang 21",
        topicName: "Công nghiệp Việt Nam"
      },
      {
        id: "c1-20",
        level: "Nhận biết",
        question: "Vùng than đá lớn nhất nước ta phân bố chủ yếu ở tỉnh nào?",
        options: ["Thái Nguyên", "Lạng Sơn", "Quảng Ninh", "Yên Bái"],
        correctAnswer: 2,
        explanation: "Bể than đá Quảng Ninh chiếm trên 90% trữ lượng than đá cả nước với chất lượng than antraxít hàng đầu thế giới.",
        atlatReference: "Atlat trang 8, 22",
        topicName: "Khoáng sản & Năng lượng"
      },
      {
        id: "c1-21",
        level: "Nhận biết",
        question: "Nhà máy thủy điện có công suất lớn nhất Việt Nam và Đông Nam Á hiện nay là:",
        options: ["Thủy điện Hòa Bình (1.920 MW)", "Thủy điện Sơn La (2.400 MW)", "Thủy điện Lai Châu (1.200 MW)", "Thủy điện Yaly (720 MW)"],
        correctAnswer: 1,
        explanation: "Thủy điện Sơn La trên sông Đà có công suất 2.400 MW, khánh thành năm 2012, là công trình thủy điện lớn nhất Đông Nam Á.",
        atlatReference: "Atlat trang 22",
        topicName: "Công nghiệp Năng lượng"
      },
      {
        id: "c1-22",
        level: "Thông hiểu",
        question: "Các nhà máy nhiệt điện ở miền Nam nước ta hoạt động chủ yếu dựa vào nguồn nhiên liệu nào?",
        options: ["Than đá nhập khẩu", "Dầu mỏ thô", "Khí đốt thiên nhiên từ thềm lục địa", "Năng lượng sinh khối"],
        correctAnswer: 2,
        explanation: "Cụm nhiệt điện Phú Mỹ, Bà Rịa, Cà Mau hoạt động bằng nguồn khí tự nhiên dẫn từ thềm lục địa bể Cửu Long và Nam Côn Sơn.",
        atlatReference: "Atlat trang 22",
        topicName: "Công nghiệp Năng lượng"
      },
      {
        id: "c1-23",
        level: "Nhận biết",
        question: "Tuyến giao thông đường bộ huyết mạch chạy dọc theo chiều dài đất nước từ Hà Nội đến Cần Thơ là:",
        options: ["Quốc lộ 1", "Đường Hồ Chí Minh", "Quốc lộ 14", "Cao tốc Bắc Nam"],
        correctAnswer: 0,
        explanation: "Quốc lộ 1 (QL1A) dài 2.301 km chạy từ Cửa khẩu Hữu Nghị (Lạng Sơn) đến Năm Căn (Cà Mau), là trục xương sống giao thông quốc gia.",
        atlatReference: "Atlat trang 23",
        topicName: "Giao thông vận tải"
      },
      {
        id: "c1-24",
        level: "Thông hiểu",
        question: "Cụm cảng nước sâu lớn nhất có khả năng đón tàu container siêu trọng ở Đông Nam Bộ là:",
        options: ["Cảng Cát Lái", "Cảng Cái Mép - Thị Vải", "Cảng Sài Gòn", "Cảng Bến Nghé"],
        correctAnswer: 1,
        explanation: "Cụm cảng Cái Mép - Thị Vải (Bà Rịa - Vũng Tàu) là cảng nước sâu quốc tế đón được các siêu tàu container đi thẳng sang bờ Tây nước Mỹ và châu Âu.",
        atlatReference: "Atlat trang 23, 29",
        topicName: "Giao thông vận tải"
      },
      {
        id: "c1-25",
        level: "Nhận biết",
        question: "Di sản thiên nhiên thế giới Vịnh Hạ Long thuộc tỉnh nào?",
        options: ["Hải Phòng", "Quảng Ninh", "Nam Định", "Thái Bình"],
        correctAnswer: 1,
        explanation: "Vịnh Hạ Long với hàng nghìn đảo đá vôi kỳ vĩ thuộc tỉnh Quảng Ninh, được UNESCO 2 lần công nhận là Di sản thiên nhiên thế giới.",
        atlatReference: "Atlat trang 25",
        topicName: "Du lịch Việt Nam"
      },
      {
        id: "c1-26",
        level: "Thông hiểu",
        question: "Văn hóa nhà rông và Không gian văn hóa Cồng chiêng là di sản đặc sắc gắn liền với vùng nào?",
        options: ["Trung du và miền núi Bắc Bộ", "Bắc Trung Bộ", "Tây Nguyên", "Đồng bằng sông Cửu Long"],
        correctAnswer: 2,
        explanation: "Không gian văn hóa Cồng chiêng Tây Nguyên của các dân tộc Gia Rai, Ba Na, Ê Đê, M'Nông được UNESCO công nhận là Kiệt tác di sản truyền khẩu và phi vật thể của nhân loại.",
        atlatReference: "Atlat trang 28",
        topicName: "Văn hóa Dân tộc"
      },
      {
        id: "c1-27",
        level: "Thông hiểu",
        question: "Đặc điểm cơ bản của chế độ gia đình của người Ê Đê và Gia Rai ở Tây Nguyên là:",
        options: ["Chế độ phụ hệ", "Chế độ mẫu hệ", "Chế độ phụ quyền tuyệt đối", "Không theo dòng họ"],
        correctAnswer: 1,
        explanation: "Người Ê Đê, Gia Rai theo chế độ mẫu hệ truyền thống: Người mẹ, người vợ làm chủ gia đình, con cái mang họ mẹ và của cải thừa kế cho con gái.",
        atlatReference: "Atlat trang 16",
        topicName: "Đặc điểm Dân tộc"
      },
      {
        id: "c1-28",
        level: "Nhận biết",
        question: "Dân tộc Thái nổi tiếng với nét văn hóa ẩm thực và trang phục nào sau đây?",
        options: [
          "Áo cóm bó sát, khăn Piêu thêu hoa văn và múa Xòe",
          "Áo bà ba và khăn rằn",
          "Váy lanh vẽ sáp ong và múa khèn",
          "Áo dài gấm và nón quai thao"
        ],
        correctAnswer: 0,
        explanation: "Phụ nữ Thái duyên dáng trong chiếc áo cóm thắt đáy lưng ong, đầu đội khăn Piêu và múa Xòe Thái rộn ràng đã được UNESCO công nhận là Di sản văn hóa thế giới.",
        atlatReference: "Atlat trang 16",
        topicName: "Đặc điểm Dân tộc"
      },
      {
        id: "c1-29",
        level: "Thông hiểu",
        question: "Lễ hội Ok Om Bok và hội đua ghe Ngo là lễ hội truyền thống lớn nhất của dân tộc nào?",
        options: ["Dân tộc Chăm", "Dân tộc Khmer", "Dân tộc Hoa", "Dân tộc Kinh"],
        correctAnswer: 1,
        explanation: "Lễ hội Ok Om Bok (lễ Cúng Trăng) và hội đua ghe Ngo rực lửa trên sông Maspero là sinh hoạt văn hóa lớn nhất của đồng bào Khmer Nam Bộ.",
        atlatReference: "Atlat trang 16",
        topicName: "Đặc điểm Dân tộc"
      },
      {
        id: "c1-30",
        level: "Vận dụng",
        question: "Thế mạnh nổi bật nhất của vùng Trung du và miền núi Bắc Bộ so với các vùng khác trong cả nước là:",
        options: [
          "Thâm canh lúa nước và nuôi trồng thủy sản nước ngọt",
          "Khai thác khoáng sản, thủy điện và trồng cây công nghiệp nguồn gốc cận nhiệt, ôn đới",
          "Phát triển kinh tế biển và khai thác dầu mỏ quy mô lớn",
          "Sản xuất lương thực và cây ăn quả nhiệt đới"
        ],
        correctAnswer: 1,
        explanation: "TDMN Bắc Bộ có trữ lượng khoáng sản phong phú nhất nước, tiềm năng thủy điện sông Đà lớn nhất và mùa đông lạnh thích hợp phát triển cây chè, cây dược liệu cận nhiệt, ôn đới.",
        atlatReference: "Atlat trang 26",
        topicName: "Vùng TD&MN Bắc Bộ"
      },
      {
        id: "c1-31",
        level: "Thông hiểu",
        question: "Vụ đông ở Đồng bằng sông Hồng phát triển mạnh là nhờ điều kiện tự nhiên nào?",
        options: [
          "Có mùa hạ mưa nhiều",
          "Có mùa đông lạnh kéo dài với 2-3 tháng nhiệt độ trung bình dưới 18°C",
          "Đất phù sa màu mỡ và mạng lưới sông ngòi dày đặc",
          "Không chịu ảnh hưởng của bão"
        ],
        correctAnswer: 1,
        explanation: "Mùa đông lạnh do gió mùa Đông Bắc cho phép ĐBSH trồng các loại rau quả ôn đới và cận nhiệt (khoai tây, cà rốt, bắp cải, su hào) đem lại hiệu quả kinh tế cao.",
        atlatReference: "Atlat trang 9, 26",
        topicName: "Vùng ĐBSH"
      },
      {
        id: "c1-32",
        level: "Nhận biết",
        question: "Ranh giới tự nhiên ngăn cách giữa Bắc Trung Bộ và Duyên hải Nam Trung Bộ là:",
        options: ["Dãy Tam Điệp", "Dãy Hoành Sơn (Đèo Ngang)", "Dãy Bạch Mã (Đèo Hải Vân)", "Dãy Trường Sơn"],
        correctAnswer: 2,
        explanation: "Dãy Bạch Mã đâm ngang ra biển tại Đèo Hải Vân là ranh giới tự nhiên chia đôi miền Trung thành Bắc Trung Bộ và Duyên hải Nam Trung Bộ.",
        atlatReference: "Atlat trang 6-7, 27",
        topicName: "Vùng Duyên hải Miền Trung"
      },
      {
        id: "c1-33",
        level: "Thông hiểu",
        question: "Hiện tượng gió phơn Tây Nam khô nóng (gió Lào) ở Bắc Trung Bộ xuất hiện vào thời gian nào?",
        options: ["Đầu mùa hạ (tháng 5 - 7)", "Giữa mùa đông (tháng 12 - 1)", "Cuối thu (tháng 9 - 10)", "Quanh năm"],
        correctAnswer: 0,
        explanation: "Vào đầu mùa hạ, khối khí nhiệt đới ẩm Bắc Ấn Độ Dương vượt qua dãy Trường Sơn sang sườn đông bị hiệu ứng phơn biến tính thành luồng gió khô nóng rát mặt.",
        atlatReference: "Atlat trang 9, 27",
        topicName: "Khí hậu Miền Trung"
      },
      {
        id: "c1-34",
        level: "Thông hiểu",
        question: "Cây cà phê chè (Arabica) được trồng nhiều nhất ở tỉnh nào của Tây Nguyên nhờ địa hình cao mát mẻ?",
        options: ["Đắk Lắk", "Gia Lai", "Lâm Đồng", "Đắk Nông"],
        correctAnswer: 2,
        explanation: "Cao nguyên Di Linh và Lâm Viên ở Lâm Đồng có độ cao trên 1.000m, khí hậu mát mẻ rất thích hợp với cây cà phê chè (Arabica).",
        atlatReference: "Atlat trang 19, 28",
        topicName: "Vùng Tây Nguyên"
      },
      {
        id: "c1-35",
        level: "Vận dụng",
        question: "Khó khăn lớn nhất về mặt tự nhiên đối với sản xuất nông nghiệp của vùng Tây Nguyên là:",
        options: [
          "Mùa mưa kéo dài gây ngập lụt trên diện rộng",
          "Mùa khô kéo dài sâu sắc 4 - 5 tháng gây thiếu nước nghiêm trọng cho cây trồng",
          "Sương muối và rét hại quanh năm",
          "Đất đai bị nhiễm mặn và phèn"
        ],
        correctAnswer: 1,
        explanation: "Mùa khô sâu sắc làm mực nước ngầm hạ thấp, hàng trăm nghìn hecta cà phê, hồ tiêu thiếu nước tưới trầm trọng và nguy cơ cháy rừng cao.",
        atlatReference: "Atlat trang 9, 28",
        topicName: "Vùng Tây Nguyên"
      },
      {
        id: "c1-36",
        level: "Nhận biết",
        question: "Đầu tàu kinh tế dẫn đầu cả nước về GDP, giá trị sản xuất công nghiệp và thu hút vốn FDI là vùng:",
        options: ["Đồng bằng sông Hồng", "Đông Nam Bộ", "Đồng bằng sông Cửu Long", "Bắc Trung Bộ"],
        correctAnswer: 1,
        explanation: "Vùng Đông Nam Bộ đóng góp hơn 30% GDP, trên 45% giá trị sản xuất công nghiệp và là trung tâm kinh tế năng động nhất cả nước.",
        atlatReference: "Atlat trang 29",
        topicName: "Vùng Đông Nam Bộ"
      },
      {
        id: "c1-37",
        level: "Thông hiểu",
        question: "Hạn chế lớn nhất về tự nhiên ở Đồng bằng sông Cửu Long vào mùa khô là:",
        options: [
          "Hiện tượng cát bay, cát chảy lấn chiếm ruộng đồng",
          "Xâm nhập mặn sâu vào đất liền và thiếu nước ngọt cho sinh hoạt, sản xuất",
          "Bão lớn và áp thấp nhiệt đới liên tục đổ bộ",
          "Rét đậm, rét hại kéo dài"
        ],
        correctAnswer: 1,
        explanation: "Vào mùa khô, lưu lượng nước sông Mê Kông giảm mạnh làm nước mặn từ biển xâm nhập sâu vào nội đồng tới 50-70 km, gây thiếu nước ngọt nghiêm trọng.",
        atlatReference: "Atlat trang 29, 30",
        topicName: "Vùng ĐBSCL"
      },
      {
        id: "c1-38",
        level: "Vận dụng",
        question: "Mô hình kinh tế 'thuận thiên' thích ứng với biến đổi khí hậu ở Đồng bằng sông Cửu Long đang được khuyến khích là:",
        options: [
          "Xây đê bao khép kín để ngăn chặn hoàn toàn nước lũ",
          "Mô hình lúa - tôm, lúa - cá và phát triển rừng ngập mặn sinh thái",
          "Chuyển toàn bộ diện tích sang trồng cây công nghiệp lâu năm",
          "Ngừng hoàn toàn sản xuất lúa gạo"
        ],
        correctAnswer: 1,
        explanation: "Mô hình xen canh lúa - tôm thích ứng linh hoạt: Mùa mưa trồng lúa ngọt, mùa khô đưa nước lợ vào nuôi tôm, vừa đem lại giá trị kinh tế cao vừa bảo vệ môi trường.",
        atlatReference: "Atlat trang 30",
        topicName: "Vùng ĐBSCL"
      },
      {
        id: "c1-39",
        level: "Nhận biết",
        question: "Huyện đảo Hoàng Sa trực thuộc thành phố nào, và huyện đảo Trường Sa trực thuộc tỉnh nào?",
        options: [
          "Hoàng Sa thuộc TP. Đà Nẵng; Trường Sa thuộc tỉnh Khánh Hòa",
          "Hoàng Sa thuộc tỉnh Quảng Ngãi; Trường Sa thuộc tỉnh Bình Thuận",
          "Hoàng Sa thuộc tỉnh Thừa Thiên Huế; Trường Sa thuộc tỉnh Bà Rịa - Vũng Tàu",
          "Cả hai quần đảo đều thuộc TP. Đà Nẵng"
        ],
        correctAnswer: 0,
        explanation: "Về mặt hành chính: Huyện đảo Hoàng Sa thuộc TP. Đà Nẵng; Huyện đảo Trường Sa thuộc tỉnh Khánh Hòa.",
        atlatReference: "Atlat trang 4-5",
        topicName: "Biển đảo Việt Nam"
      },
      {
        id: "c1-40",
        level: "Vận dụng",
        question: "Đường cơ sở dùng để tính chiều rộng lãnh hải Việt Nam được xác định là:",
        options: [
          "Đường mép nước thủy triều thấp nhất dọc theo bờ biển",
          "Hệ thống đường thẳng nối liền các điểm nhô ra nhất của bờ biển và các đảo ven bờ",
          "Đường ranh giới cách bờ biển 12 hải lý",
          "Đường biên giới quốc gia trên biển"
        ],
        correctAnswer: 1,
        explanation: "Đường cơ sở của nước ta là đường gãy khúc nối liền 11 điểm mốc từ đảo Hòn Nhạn (Kiên Giang) đến đảo Cồn Cỏ (Quảng Trị).",
        atlatReference: "Atlat trang 4-5",
        topicName: "Biển đảo Việt Nam"
      },
      {
        id: "c1-41",
        level: "Thi chuyên",
        question: "Để thể hiện quy mô và cơ cấu diện tích lúa phân theo mùa vụ của nước ta qua 3 năm (2015, 2018, 2022), dạng biểu đồ thích hợp nhất là:",
        options: [
          "Biểu đồ đường",
          "Biểu đồ tròn (có bán kính khác nhau R)",
          "Biểu đồ miền",
          "Biểu đồ thanh ngang"
        ],
        correctAnswer: 1,
        explanation: "Từ khóa 'Quy mô và cơ cấu' trong khoảng thời gian từ 1 đến 3 năm thì biểu đồ TRÒN có bán kính R (R tương ứng với quy mô diện tích) là tối ưu nhất.",
        atlatReference: "Kỹ năng biểu đồ",
        topicName: "Kỹ năng Biểu đồ"
      },
      {
        id: "c1-42",
        level: "Thi chuyên",
        question: "Đặc điểm nào sau đây KHÔNG PHẢI là dấu hiệu để lựa chọn biểu đồ miền?",
        options: [
          "Đề bài yêu cầu thể hiện 'Sự chuyển dịch cơ cấu' qua chuỗi thời gian",
          "Số năm quan sát từ 4 năm trở lên",
          "Bảng số liệu có đơn vị là phần trăm (%) và tổng cơ cấu bằng 100%",
          "Đề bài yêu cầu thể hiện 'Tốc độ tăng trưởng' với mốc năm gốc bằng 100%"
        ],
        correctAnswer: 3,
        explanation: "Yêu cầu thể hiện 'Tốc độ tăng trưởng' (lấy năm gốc = 100%) là dấu hiệu bắt buộc của biểu đồ ĐƯỜNG (đồ thị), không phải biểu đồ miền.",
        atlatReference: "Kỹ năng biểu đồ",
        topicName: "Kỹ năng Biểu đồ"
      },
      {
        id: "c1-43",
        level: "Vận dụng cao",
        question: "Tại sao ở nước ta thiên nhiên vùng đồi núi lại có sự phân hóa đai cao sâu sắc hơn các nước ở vùng ôn đới?",
        options: [
          "Do nước ta nằm ở vĩ độ thấp, chân núi thuộc đới nhiệt đới nên có đầy đủ 3 đai cao: Đai nhiệt đới gió mùa, đai cận nhiệt đới gió mùa trên núi và đai ôn đới gió mùa trên núi",
          "Do các đỉnh núi ở nước ta đều cao trên 5.000m",
          "Do có gió mùa Tây Nam hoạt động quanh năm",
          "Do mạng lưới sông suối miền núi dày đặc hơn"
        ],
        correctAnswer: 0,
        explanation: "Nước ta nằm trong vành đai nhiệt đới nên chân núi là đai nhiệt đới gió mùa chân núi. Khi lên cao nhiệt độ giảm dần theo quy luật (cứ lên cao 100m nhiệt độ giảm 0,6°C) nên xuất hiện đầy đủ cả 3 đai cao độc đáo.",
        atlatReference: "Atlat trang 6-7, 11",
        topicName: "Tư duy Địa lí Chuyên"
      },
      {
        id: "c1-44",
        level: "Thi chuyên",
        question: "Ý nghĩa chiến lược quan trọng nhất của việc xây dựng tuyến đường cao tốc Bắc - Nam và đường sắt tốc độ cao là:",
        options: [
          "Chỉ nhằm mục đích phục vụ khách du lịch quốc tế",
          "Rút ngắn thời gian luân chuyển hàng hóa, kết nối các vùng kinh tế trọng điểm và tạo động lực đột phá cho toàn bộ dải kinh tế ven biển",
          "Thay thế hoàn toàn vận tải đường biển",
          "Xóa bỏ hoàn toàn khoảng cách giàu nghèo"
        ],
        correctAnswer: 1,
        explanation: "Hạ tầng giao thông trục Bắc - Nam hiện đại hóa giúp giảm chi phí logistics, tăng sức cạnh tranh của nền kinh tế, kết nối các cảng biển, khu công nghiệp và phát huy sức mạnh tổng hợp quốc gia.",
        atlatReference: "Atlat trang 23",
        topicName: "Giao thông vận tải"
      },
      {
        id: "c1-45",
        level: "Thi chuyên",
        question: "Vì sao việc khai thác khoáng sản bô-xit ở Tây Nguyên đòi hỏi phải đặc biệt chú trọng đến bài toán bảo vệ môi trường và nguồn nước?",
        options: [
          "Bô-xit Tây Nguyên nằm sâu trong lòng đất không thể lộ thiên",
          "Tây Nguyên là 'mái nhà của miền Trung và hạ lưu sông Mê Kông', việc khai thác bô-xit tạo bùn đỏ độc hại có thể đe dọa nguồn nước sông Đồng Nai và sông Mê Kông",
          "Tây Nguyên không có nhà máy chế biến nào",
          "Bô-xit không có giá trị kinh tế"
        ],
        correctAnswer: 1,
        explanation: "Tây Nguyên là thượng nguồn của các hệ thống sông lớn (sông Đồng Nai, sông Ba, sông Srêpôk...). Sự cố bùn đỏ và mất rừng đầu nguồn khi khai thác bô-xit sẽ gây thảm họa sinh thái cho cả Đông Nam Bộ và Duyên hải miền Trung.",
        atlatReference: "Atlat trang 8, 28",
        topicName: "Bảo vệ Môi trường & Chuyên sâu"
      }
    ]
  },
  {
    id: "exam-specialized-02",
    title: "Đề tham khảo Học sinh giỏi Cấp Tỉnh Địa lí 9 (Mã đề: HSG-TINH-02)",
    type: "HSG Cấp Tỉnh",
    timeLimitMinutes: 30,
    difficulty: "Vận dụng cao",
    description: "Đề thi gồm 30 câu hỏi tương ứng 30 phút làm bài, tập trung kiểm tra năng lực tư duy bản chất, bóc tách Atlat và phân tích số liệu địa lí nâng cao.",
    questions: [
      {
        id: "hsg-01",
        level: "Thông hiểu",
        question: "Ranh giới tự nhiên giữa vùng Bắc Trung Bộ và Duyên hải Nam Trung Bộ là:",
        options: ["Dãy Bạch Mã", "Đèo Ngang", "Đèo Hải Vân", "Dãy Tam Điệp"],
        correctAnswer: 2,
        explanation: "Đèo Hải Vân cắt ngang dãy Bạch Mã đâm ra biển là ranh giới phân định tự nhiên giữa Bắc Trung Bộ (Thừa Thiên Huế) và Duyên hải Nam Trung Bộ (Đà Nẵng).",
        atlatReference: "Atlat trang 4-5",
        topicName: "Vùng Duyên hải Miền Trung"
      },
      {
        id: "hsg-02",
        level: "Vận dụng",
        question: "Nhân tố tự nhiên nào quyết định nhất đến cơ cấu cây trồng vụ đông ở Đồng bằng sông Hồng?",
        options: [
          "Có mùa đông lạnh với 2-3 tháng nhiệt độ trung bình dưới 18°C",
          "Có hệ thống sông Hồng bồi đắp phù sa màu mỡ",
          "Có mạng lưới đê điều chống lũ hoàn chỉnh",
          "Nguồn nước ngầm dồi dào"
        ],
        correctAnswer: 0,
        explanation: "Mùa đông lạnh do gió mùa Đông Bắc là lợi thế độc nhất vô nhị giúp ĐBSH trồng được các loại rau củ ôn đới và cận nhiệt (khoai tây, bắp cải, su hào).",
        atlatReference: "Atlat trang 9, 26",
        topicName: "Nông nghiệp Đồng bằng sông Hồng"
      },
      {
        id: "hsg-03",
        level: "Vận dụng cao",
        question: "Ý nghĩa chiến lược kinh tế lớn nhất của vùng kinh tế trọng điểm phía Nam là:",
        options: [
          "Đóng góp trên 40% GDP và hơn 50% giá trị sản xuất công nghiệp toàn quốc",
          "Chuyên canh lúa gạo xuất khẩu lớn nhất",
          "Cung cấp 100% quặng sắt cho cả nước",
          "Nơi có mật độ dân số thấp nhất cả nước"
        ],
        correctAnswer: 0,
        explanation: "Vùng KTTĐ phía Nam là đầu tàu kinh tế, tạo động lực kéo theo sự tăng trưởng của các vùng kinh tế lân cận và cả nước.",
        atlatReference: "Atlat trang 30",
        topicName: "Vùng kinh tế trọng điểm phía Nam"
      },
      {
        id: "hsg-04",
        level: "Vận dụng",
        question: "Tại sao lượng mưa ở nước ta lại có sự phân hóa theo không gian và thời gian sâu sắc?",
        options: [
          "Do sự kết hợp giữa vị trí địa lí, địa hình chắn gió và tác động của các khối khí gió mùa khác nhau",
          "Do nước ta chỉ có một mùa gió duy nhất trong năm",
          "Do bề mặt đệm hoàn toàn bằng phẳng",
          "Do Biển Đông không ảnh hưởng đến khí hậu"
        ],
        correctAnswer: 0,
        explanation: "Sự tương tác giữa các luồng gió mùa (Đông Bắc, Tây Nam) với các bức chắn địa hình (Hoàng Liên Sơn, Trường Sơn, Bạch Mã) tạo ra các trung tâm mưa lớn và các vùng khuất gió khô hạn.",
        atlatReference: "Atlat trang 9",
        topicName: "Khí hậu Việt Nam"
      },
      {
        id: "hsg-05",
        level: "Thi chuyên",
        question: "Giải thích tại sao vùng đồng bằng Duyên hải miền Trung sông ngòi lại ngắn, dốc, lũ lên rất nhanh và rút cũng rất nhanh?",
        options: [
          "Do địa hình hẹp ngang, núi đồi lan sát ra biển, các nhánh núi đâm ngang chia cắt đồng bằng",
          "Do lượng mưa ở miền Trung quanh năm đều đặn",
          "Do rừng đầu nguồn được bảo tồn nguyên vẹn 100%",
          "Do lòng sông rất sâu và rộng"
        ],
        correctAnswer: 0,
        explanation: "Lãnh thổ hẹp ngang, khoảng cách từ dãy Trường Sơn ra đến biển rất ngắn, độ dốc lưu vực lớn kết hợp mưa bão tập trung làm nước dồn về hạ lưu cực nhanh.",
        atlatReference: "Atlat trang 10",
        topicName: "Thủy văn Việt Nam"
      },
      {
        id: "hsg-06",
        level: "Thông hiểu",
        question: "Đặc điểm đất feralit đỏ vàng ở vùng đồi núi nước ta là:",
        options: [
          "Chua, nghèo mùn, nhiều hợp chất Fe và Al nên có màu đỏ vàng",
          "Màu đen phì nhiêu giàu mùn",
          "Đất cát pha giữ nước rất tốt",
          "Bị ngập úng quanh năm"
        ],
        correctAnswer: 0,
        explanation: "Quá trình feralit diễn ra mạnh dưới điều kiện nhiệt ẩm cao, rửa trôi mạnh các chất bazơ dễ tan, tích tụ oxit sắt và oxit nhôm tạo màu đỏ vàng đặc trưng.",
        atlatReference: "Atlat trang 11",
        topicName: "Thổ nhưỡng"
      },
      {
        id: "hsg-07",
        level: "Vận dụng",
        question: "Tại sao việc phát triển thủy điện ở Tây Bắc lại cần tính toán đồng bộ với việc chống lũ và cung cấp nước cho Đồng bằng sông Hồng?",
        options: [
          "Vì các hồ thủy điện trên sông Đà (Sơn La, Hòa Bình) giữ vai trò cắt lũ mùa mưa và xả nước ngọt đẩy mặn mùa khô cho đồng bằng hạ lưu",
          "Vì Tây Bắc không cần sử dụng điện",
          "Vì sông Đà chảy thẳng ra vịnh Thái Lan",
          "Vì đồng bằng sông Hồng không có sông ngòi nào khác"
        ],
        correctAnswer: 0,
        explanation: "Hồ thủy điện Hòa Bình và Sơn La có nhiệm vụ đa mục tiêu: Vừa phát điện, vừa cắt lũ bảo vệ thủ đô Hà Nội trong mùa mưa bão, vừa xả nước tưới cho vụ đông xuân của ĐBSH.",
        atlatReference: "Atlat trang 10, 22",
        topicName: "Năng lượng & Thủy văn"
      },
      {
        id: "hsg-08",
        level: "Thi chuyên",
        question: "Nguyên nhân chủ yếu khiến ngành chăn nuôi nước ta trước đây chậm phát triển hơn ngành trồng trọt là:",
        options: [
          "Cơ sở thức ăn chưa được đảm bảo vững chắc và dịch bệnh thường xuyên đe dọa",
          "Người dân không có nhu cầu tiêu thụ thịt, trứng, sữa",
          "Khí hậu nước ta hoàn toàn không phù hợp với chăn nuôi",
          "Không có giống gia súc gia cầm nào"
        ],
        correctAnswer: 0,
        explanation: "Trước đây khi an ninh lương thực chưa vững chắc, hoa màu chủ yếu dành cho người. Ngày nay khi lương thực dư thừa và công nghiệp chế biến thức ăn phát triển, chăn nuôi mới tiến mạnh lên hàng hóa.",
        atlatReference: "Atlat trang 19",
        topicName: "Nông nghiệp"
      },
      {
        id: "hsg-09",
        level: "Thông hiểu",
        question: "Thế mạnh đặc biệt của vùng biển nước ta trong phát triển ngành giao thông vận tải biển là:",
        options: [
          "Nằm gần các tuyến hàng hải quốc tế bận rộn trên Biển Đông và có nhiều vũng vịnh sâu kín gió để xây cảng nước sâu",
          "Biển không có bão tố nào",
          "Bờ biển hoàn toàn phẳng lặng không có đảo",
          "Vùng biển nước ta đóng băng mùa đông"
        ],
        correctAnswer: 0,
        explanation: "Vị trí ngã tư quốc tế cùng các vịnh nước sâu (Hạ Long, Cam Ranh, Vân Phong, Cái Mép...) tạo điều kiện lý tưởng xây dựng cảng trung chuyển quốc tế.",
        atlatReference: "Atlat trang 23",
        topicName: "Kinh tế biển"
      },
      {
        id: "hsg-10",
        level: "Vận dụng",
        question: "Hiện tượng thoái hóa đất ở vùng đồi núi nước ta biểu hiện chủ yếu qua quá trình nào?",
        options: [
          "Xói mòn, rửa trôi lớp đất mặt và trượt lở đất",
          "Nhiễm mặn và nhiễm phèn nặng nề",
          "Băng vĩnh cửu bao phủ",
          "Chìm ngập dưới mực nước biển"
        ],
        correctAnswer: 0,
        explanation: "Mất lớp phủ thực vật ở vùng đồi núi dốc khiến mưa lớn rửa trôi hết lớp đất màu phì nhiêu, đất bị chai cứng trơ sỏi đá (đất đá ong hóa).",
        atlatReference: "Atlat trang 11",
        topicName: "Bảo vệ Môi trường"
      },
      {
        id: "hsg-11",
        level: "Thông hiểu",
        question: "Sản phẩm công nghiệp xuất khẩu chủ lực thuộc nhóm hàng công nghiệp nhẹ và tiểu thủ công nghiệp của nước ta là:",
        options: ["Dệt may, giày dép và đồ gỗ chế biến", "Máy bay thương mại", "Động cơ tên lửa", "Ô tô hạng sang"],
        correctAnswer: 0,
        explanation: "Dệt may và da giày là các ngành mũi nhọn tận dụng nguồn lao động khéo léo dồi dào, đóng góp hàng chục tỉ USD xuất khẩu mỗi năm.",
        atlatReference: "Atlat trang 24",
        topicName: "Công nghiệp Việt Nam"
      },
      {
        id: "hsg-12",
        level: "Nhận biết",
        question: "Vùng có tỉ lệ che phủ rừng lớn nhất nước ta hiện nay là:",
        options: ["Bắc Trung Bộ và Tây Nguyên", "Đồng bằng sông Hồng", "Đông Nam Bộ", "Đồng bằng sông Cửu Long"],
        correctAnswer: 0,
        explanation: "Bắc Trung Bộ và Tây Nguyên có diện tích rừng tự nhiên lớn nhất cả nước với các vườn quốc gia và khu bảo tồn sinh quyển quý giá.",
        atlatReference: "Atlat trang 12",
        topicName: "Lâm nghiệp Việt Nam"
      },
      {
        id: "hsg-13",
        level: "Vận dụng cao",
        question: "Vì sao việc chuyển dịch cơ cấu nông nghiệp ở Đồng bằng sông Cửu Long cần quán triệt phương châm 'Sống chung với lũ' và 'Thuận thiên'?",
        options: [
          "Vì lũ mang lại nguồn lợi thủy sản, thau chua rửa mặn và bồi đắp lượng phù sa khổng lồ màu mỡ cho đất",
          "Vì lũ ở ĐBSCL không gây bất kỳ thiệt hại nào",
          "Vì người dân không thể xây dựng nhà cửa kiên cố",
          "Vì vùng không có đê bao nào"
        ],
        correctAnswer: 0,
        explanation: "Lũ sông Mê Kông là hiện tượng tự nhiên đem lại nguồn tôm cá dồi dào, rửa sạch đất phèn và đem lại phù sa màu mỡ. Tận dụng lũ thay vì chống lũ triệt để là tư duy phát triển bền vững.",
        atlatReference: "Atlat trang 30",
        topicName: "Vùng ĐBSCL"
      },
      {
        id: "hsg-14",
        level: "Thông hiểu",
        question: "Cơ cấu lao động theo ngành kinh tế ở nước ta chuyển dịch theo xu hướng nào?",
        options: [
          "Giảm tỉ lệ lao động nông - lâm - thủy sản, tăng tỉ lệ lao động công nghiệp và dịch vụ",
          "Tăng tỉ lệ lao động làm nông nghiệp lên 90%",
          "Giảm mạnh lao động trong ngành dịch vụ",
          "Không có sự thay đổi nào trong 30 năm qua"
        ],
        correctAnswer: 0,
        explanation: "Lao động đang chuyển dịch mạnh mẽ từ khu vực có năng suất thấp (nông nghiệp) sang khu vực có năng suất cao hơn (công nghiệp chế biến và dịch vụ).",
        atlatReference: "Atlat trang 15",
        topicName: "Lao động & Việc làm"
      },
      {
        id: "hsg-15",
        level: "Thi chuyên",
        question: "Căn cứ vào Atlat Địa lí Việt Nam trang 9, tháng có nhiệt độ trung bình thấp nhất ở trạm Hà Nội thường là tháng nào?",
        options: ["Tháng 1", "Tháng 4", "Tháng 7", "Tháng 10"],
        correctAnswer: 0,
        explanation: "Tháng 1 là thời điểm gió mùa Đông Bắc hoạt động mạnh mẽ nhất, nhiệt độ trung bình tại Hà Nội hạ xuống mức thấp nhất trong năm (khoảng 16,4°C).",
        atlatReference: "Atlat trang 9",
        topicName: "Khí hậu Việt Nam"
      },
      {
        id: "hsg-16",
        level: "Nhận biết",
        question: "Vùng kinh tế nào của nước ta tiếp giáp với cả 2 quốc gia Lào và Campuchia?",
        options: ["Tây Nguyên", "Bắc Trung Bộ", "Đông Nam Bộ", "Trung du và miền núi Bắc Bộ"],
        correctAnswer: 0,
        explanation: "Vùng Tây Nguyên (tỉnh Kon Tum) có ngã ba Đông Dương tiếp giáp với cả hai nước láng giềng Lào và Campuchia.",
        atlatReference: "Atlat trang 4-5, 28",
        topicName: "Vị trí Vùng kinh tế"
      },
      {
        id: "hsg-17",
        level: "Thông hiểu",
        question: "Tài nguyên du lịch tự nhiên của nước ta bao gồm:",
        options: [
          "Địa hình, khí hậu, tài nguyên nước và sinh vật",
          "Các di tích lịch sử và lễ hội dân gian",
          "Các làng nghề truyền thống",
          "Các công trình kiến trúc hiện đại"
        ],
        correctAnswer: 0,
        explanation: "Tài nguyên du lịch tự nhiên gồm cảnh quan địa hình (hang động, bãi biển), khí hậu trong lành, sông hồ nước khoáng và hệ sinh thái động thực vật.",
        atlatReference: "Atlat trang 25",
        topicName: "Du lịch Việt Nam"
      },
      {
        id: "hsg-18",
        level: "Vận dụng",
        question: "Tại sao công nghiệp chế biến lương thực, thực phẩm lại là ngành công nghiệp chiếm tỉ trọng cao nhất trong cơ cấu công nghiệp nước ta?",
        options: [
          "Có nguồn nguyên liệu tại chỗ vô cùng phong phú (nông - lâm - thủy sản) và thị trường tiêu thụ rộng lớn cả trong và ngoài nước",
          "Đòi hỏi vốn đầu tư khổng lồ và công nghệ siêu cao",
          "Do nước ta không thể phát triển ngành nào khác",
          "Chỉ phục vụ cho quân đội"
        ],
        correctAnswer: 0,
        explanation: "Nền nông nghiệp nhiệt đới sản xuất ra khối lượng khổng lồ lúa gạo, cà phê, thủy sản kết hợp thị trường hơn 100 triệu dân và xuất khẩu toàn cầu.",
        atlatReference: "Atlat trang 21, 22",
        topicName: "Công nghiệp chế biến"
      },
      {
        id: "hsg-19",
        level: "Thi chuyên",
        question: "Đặc điểm khác biệt căn bản giữa vùng kinh tế Đồng bằng sông Hồng và Đồng bằng sông Cửu Long về mặt tự nhiên là:",
        options: [
          "ĐBSH có mùa đông lạnh và có hệ thống đê ngăn lũ kiên cố; ĐBSCL có khí hậu cận xích đạo nóng quanh năm và hệ thống kênh rạch chằng chịt không có đê ngăn lũ hoàn chỉnh",
          "ĐBSH rộng hơn ĐBSCL gấp 3 lần",
          "ĐBSCL không có biển bao quanh",
          "ĐBSH có nhiều đất phèn, đất mặn hơn ĐBSCL"
        ],
        correctAnswer: 0,
        explanation: "ĐBSH có đê sông Hồng chia đồng bằng thành các ô trũng, đất trong đê không bồi phù sa; ĐBSCL kênh rạch tự nhiên bồi đắp theo mùa nước nổi và không có đê lớn.",
        atlatReference: "Atlat trang 26, 30",
        topicName: "So sánh Địa lí Chuyên"
      },
      {
        id: "hsg-20",
        level: "Nhận biết",
        question: "Cảng hàng không quốc tế lớn nhất nước ta hiện nay về lượng hành khách phục vụ là:",
        options: ["Sân bay Tân Sơn Nhất (TP.HCM)", "Sân bay Nội Bài (Hà Nội)", "Sân bay Đà Nẵng", "Sân bay Cam Ranh"],
        correctAnswer: 0,
        explanation: "Cảng hàng không quốc tế Tân Sơn Nhất phục vụ trên 35-40 triệu lượt khách mỗi năm, là cửa ngõ hàng không bận rộn nhất Việt Nam.",
        atlatReference: "Atlat trang 23",
        topicName: "Giao thông vận tải"
      },
      {
        id: "hsg-21",
        level: "Thông hiểu",
        question: "Mục đích chủ yếu của việc hình thành các khu kinh tế ven biển (Nghi Sơn, Vũng Áng, Chu Lai, Dung Quất...) là:",
        options: [
          "Khai thác vị trí cửa ngõ biển, thu hút đầu tư nước ngoài và tạo bước đột phá công nghiệp hóa miền Trung",
          "Chỉ để phát triển nghề làm muối",
          "Để di dân toàn bộ đồng bằng ra biển",
          "Thay thế ngành nông nghiệp truyền thống"
        ],
        correctAnswer: 0,
        explanation: "Khu kinh tế ven biển tận dụng cảng biển nước sâu và đất đai rộng rãi để thu hút các dự án lọc hóa dầu, thép, cơ khí, tạo động lực kéo kinh tế miền Trung phát triển.",
        atlatReference: "Atlat trang 21, 24",
        topicName: "Vùng Duyên hải Miền Trung"
      },
      {
        id: "hsg-22",
        level: "Vận dụng",
        question: "Tại sao Tây Nguyên lại được mệnh danh là 'Vương quốc Cà phê' của Việt Nam?",
        options: [
          "Chiếm hơn 80% diện tích và sản lượng cà phê cả nước, chủ yếu là cà phê Robusta trên đất đỏ badan màu mỡ",
          "Chỉ trồng cà phê trong nhà kính",
          "Do toàn bộ người dân Tây Nguyên chỉ uống cà phê",
          "Do cà phê là cây duy nhất mọc được ở Tây Nguyên"
        ],
        correctAnswer: 0,
        explanation: "Đất đỏ badan phì nhiêu tầng dày kết hợp cao nguyên bằng phẳng cho phép thành lập các nông trường cà phê bạt ngàn tại Đắk Lắk, Gia Lai, Lâm Đồng.",
        atlatReference: "Atlat trang 19, 28",
        topicName: "Cây công nghiệp Tây Nguyên"
      },
      {
        id: "hsg-23",
        level: "Thông hiểu",
        question: "Biểu đồ nào thích hợp nhất để so sánh sản lượng thủy sản khai thác và nuôi trồng của 4 tỉnh ven biển trong cùng năm 2022?",
        options: ["Biểu đồ cột ghép (cột nhóm)", "Biểu đồ đường", "Biểu đồ miền", "Biểu đồ phân tán"],
        correctAnswer: 0,
        explanation: "Để so sánh hai đối tượng (khai thác và nuôi trồng) qua 4 địa phương trong 1 năm thì biểu đồ cột nhóm là trực quan và chính xác nhất.",
        atlatReference: "Kỹ năng biểu đồ",
        topicName: "Kỹ năng Biểu đồ"
      },
      {
        id: "hsg-24",
        level: "Vận dụng cao",
        question: "Phân tích nguyên nhân làm cho cán cân xuất nhập khẩu của nước ta chuyển từ nhập siêu sang xuất siêu vững chắc trong những năm gần đây?",
        options: [
          "Năng lực sản xuất công nghiệp chế biến, điện tử viễn thông và xuất khẩu nông sản bứt phá mạnh mẽ cùng các hiệp định FTA thế hệ mới",
          "Do nước ta đóng cửa hoàn toàn không nhập khẩu hàng hóa",
          "Do dân số giảm mạnh không có nhu cầu tiêu dùng",
          "Do đồng tiền Việt Nam tăng giá gấp 10 lần"
        ],
        correctAnswer: 0,
        explanation: "Sự bùng nổ của xuất khẩu thiết bị điện tử, dệt may, da giày cùng nông thủy sản chất lượng cao và việc tham gia CPTPP, EVFTA giúp Việt Nam thặng dư thương mại liên tục.",
        atlatReference: "Atlat trang 24",
        topicName: "Ngoại thương Việt Nam"
      },
      {
        id: "hsg-25",
        level: "Nhận biết",
        question: "Bảo tồn văn hóa cồng chiêng gắn liền với việc bảo vệ yếu tố môi trường nào sau đây?",
        options: ["Bảo vệ rừng tự nhiên và buôn làng truyền thống", "Đô thị hóa bê tông hóa toàn bộ", "Phá rừng trồng cây ngắn ngày", "Ngăn chặn sinh hoạt cộng đồng"],
        correctAnswer: 0,
        explanation: "Không gian văn hóa Cồng chiêng Tây Nguyên chỉ có thể sống được trong lòng rừng đại ngàn, bên mái nhà rông và đời sống buôn làng gắn bó mật thiết với thiên nhiên.",
        atlatReference: "Atlat trang 28",
        topicName: "Bản sắc văn hóa"
      },
      {
        id: "hsg-26",
        level: "Thông hiểu",
        question: "Nguyên nhân chính giúp ngành du lịch nước ta phục hồi và tăng trưởng nhanh chóng là:",
        options: [
          "Sản phẩm du lịch đa dạng, chính sách thị thực (visa) thông thoáng và hạ tầng giao thông kết nối đồng bộ",
          "Giảm giá tất cả các dịch vụ xuống 0 đồng",
          "Cấm người dân đi du lịch nước ngoài",
          "Không chịu ảnh hưởng của biến đổi khí hậu"
        ],
        correctAnswer: 0,
        explanation: "Đổi mới chính sách thị thực, phát triển các khu nghỉ dưỡng sinh thái đẳng cấp và kết nối đường cao tốc, sân bay đã thu hút hàng chục triệu lượt du khách.",
        atlatReference: "Atlat trang 25",
        topicName: "Du lịch Việt Nam"
      },
      {
        id: "hsg-27",
        level: "Vận dụng",
        question: "Điểm khác biệt trong tập quán canh tác nông nghiệp truyền thống giữa người Kinh ở đồng bằng và đồng bào vùng cao là:",
        options: [
          "Người Kinh chuyên sâu thâm canh lúa nước, cày cấy chủ động; đồng bào vùng cao sáng tạo kỹ thuật làm ruộng bậc thang và nương rẫy hốc đá thích nghi độ dốc",
          "Người vùng cao không biết sử dụng hạt giống",
          "Người Kinh không ăn cơm gạo",
          "Cả hai đều chỉ săn bắt hái lượm"
        ],
        correctAnswer: 0,
        explanation: "Đồng bào Thái, Tày, Mông với hệ thống dẫn nước 'Mương - Phai - Lái - Lịn' và ruộng bậc thang kỳ vĩ là tuyệt tác thích nghi địa hình hiểm trở.",
        atlatReference: "Atlat trang 16",
        topicName: "Văn hóa Dân tộc"
      },
      {
        id: "hsg-28",
        level: "Thi chuyên",
        question: "Tại sao nói: 'Bảo vệ chủ quyền biển đảo là bảo vệ không gian sinh tồn lâu dài của dân tộc Việt Nam'?",
        options: [
          "Vì Biển Đông chứa đựng nguồn tài nguyên sinh vật khổng lồ, thềm lục địa giàu dầu khí, là tuyến giao thương huyết mạch và pháo đài an ninh Tổ quốc",
          "Vì nước ta chỉ có biển chứ không có đất liền",
          "Vì không ai được phép ra biển",
          "Vì đất liền không còn nguồn sống"
        ],
        correctAnswer: 0,
        explanation: "Biển Đông mang lại nguồn lợi kinh tế biển to lớn, bảo đảm an ninh lương thực thủy hải sản, an ninh năng lượng dầu khí và vị thế địa chính trị của Việt Nam trên trường quốc tế.",
        atlatReference: "Atlat trang 4-5",
        topicName: "Chủ quyền Biển đảo"
      },
      {
        id: "hsg-29",
        level: "Vận dụng",
        question: "Hiện tượng xâm thực mạnh ở miền đồi núi nước ta kéo theo hệ quả tự nhiên tất yếu nào ở hạ lưu?",
        options: [
          "Quá trình bồi tụ mở rộng đồng bằng châu thổ sông Hồng và sông Cửu Long",
          "Hạ thấp địa hình đồng bằng xuống đáy biển",
          "Đóng băng dòng chảy sông ngòi",
          "Làm biến mất hoàn toàn hệ sinh thái nước ngọt"
        ],
        correctAnswer: 0,
        explanation: "Đất đá bị phong hóa bóc mòn ở đồi núi được dòng nước sông chuyên chở về hạ lưu bồi đắp hàng trăm triệu tấn phù sa, tạo nên các đồng bằng châu thổ màu mỡ.",
        atlatReference: "Atlat trang 6-7, 10",
        topicName: "Địa lí tự nhiên"
      },
      {
        id: "hsg-30",
        level: "Thi chuyên",
        question: "Để trả lời câu hỏi tự luận thi chuyên đạt điểm tối đa khi phân tích tiềm năng một ngành kinh tế, học sinh cần trình bày theo cấu trúc chuẩn mực nào?",
        options: [
          "Phân tích lần lượt: Điều kiện tự nhiên (vị trí, tài nguyên) → Điều kiện KT-XH (lao động, thị trường, cơ sở hạ tầng, chính sách) → Thực trạng phát triển → Phương hướng tương lai",
          "Chỉ nêu cảm nghĩ cá nhân không cần số liệu",
          "Chép lại toàn bộ sách giáo khoa từ đầu đến cuối",
          "Chỉ viết về mặt thuận lợi, bỏ qua hoàn toàn khó khăn thách thức"
        ],
        correctAnswer: 0,
        explanation: "Khung tư duy toàn diện: Tự nhiên trước, Kinh tế - Xã hội sau, đi kèm số liệu dẫn chứng và giải pháp phát triển bền vững là bí quyết đạt điểm 10 môn Địa lí Chuyên.",
        atlatReference: "Tư duy Địa lí Chuyên",
        topicName: "Phương pháp Làm bài Thi Chuyên"
      }
    ]
  },
  {
    id: "exam-specialized-03",
    title: "Đề tham khảo Kiểm tra Định kỳ 1 Tiết Địa lí 9 (Mã đề: KTDK-03)",
    type: "Kiểm tra 1 Tiết",
    timeLimitMinutes: 45,
    difficulty: "Thông hiểu & Vận dụng",
    description: "Đề kiểm tra 45 phút gồm 40 câu hỏi trắc nghiệm chuẩn kiến thức kỹ năng chương trình Địa lí 9, rèn luyện tốc độ xử lý câu hỏi chính xác.",
    questions: Array.from({ length: 40 }, (_, idx) => {
      const qNum = idx + 1;
      let topic = "Địa lí Tự nhiên";
      let level: ExamQuestion["level"] = "Thông hiểu";
      if (qNum <= 10) {
        topic = "Vị trí địa lí & Thiên nhiên Việt Nam";
        level = "Nhận biết";
      } else if (qNum <= 20) {
        topic = "Địa lí Dân cư & Dân tộc";
        level = "Thông hiểu";
      } else if (qNum <= 30) {
        topic = "Địa lí các ngành Kinh tế";
        level = "Vận dụng";
      } else {
        topic = "Địa lí các Vùng kinh tế & Kỹ năng";
        level = "Vận dụng cao";
      }

      const questionsBank = [
        { q: "Căn cứ vào Atlat Địa lí VN trang 4-5, nước ta có chung đường biên giới trên đất liền với những quốc gia nào?", opt: ["Trung Quốc, Lào, Campuchia", "Lào, Thái Lan, Campuchia", "Trung Quốc, Myanmar, Lào", "Campuchia, Malaysia, Lào"], a: 0, exp: "Đường biên giới trên đất liền của nước ta dài hơn 4.600 km giáp 3 nước: Trung Quốc (1.400 km), Lào (2.100 km), Campuchia (1.100 km)." },
        { q: "Đường bờ biển nước ta có chiều dài là bao nhiêu km?", opt: ["3.260 km", "2.360 km", "4.600 km", "1.650 km"], a: 0, exp: "Đường bờ biển nước ta cong hình chữ S dài 3.260 km kéo dài từ Móng Cái (Quảng Ninh) đến Hà Tiên (Kiên Giang)." },
        { q: "Căn cứ vào Atlat trang 6-7, dãy núi nào có hướng Tây Bắc - Đông Nam tiêu biểu nhất?", opt: ["Hoàng Liên Sơn", "Cánh cung Sông Gâm", "Cánh cung Ngân Sơn", "Bạch Mã"], a: 0, exp: "Dãy Hoàng Liên Sơn chạy theo hướng Tây Bắc - Đông Nam với các đỉnh núi cao đồ sộ nhất nước ta." },
        { q: "Gió mùa mùa đông ở nước ta có hướng thịnh hành là:", opt: ["Đông Bắc", "Tây Nam", "Đông Nam", "Tây Bắc"], a: 0, exp: "Gió mùa mùa đông xuất phát từ áp cao Xi-bia thổi vào nước ta theo hướng Đông Bắc." },
        { q: "Mùa mưa ở duyên hải miền Trung diễn ra vào thời gian nào?", opt: ["Thu - Đông (tháng 9 đến tháng 12)", "Mùa hạ (tháng 5 đến tháng 8)", "Mùa xuân", "Quanh năm"], a: 0, exp: "Mùa mưa miền Trung lệch hẳn về thu - đông do tác động của dải hội tụ nhiệt đới, bão và gió mùa đông qua biển gặp địa hình chắn gió." },
        { q: "Căn cứ vào Atlat trang 10, hệ thống sông có trữ năng thủy điện lớn nhất nước ta là:", opt: ["Hệ thống sông Hồng (sông Đà)", "Hệ thống sông Mê Kông", "Hệ thống sông Đồng Nai", "Hệ thống sông Mã"], a: 0, exp: "Sông Đà thuộc hệ thống sông Hồng chiếm gần một nửa trữ năng thủy điện của cả nước." },
        { q: "Hiện tượng đất bị rửa trôi mạnh mẽ nhất diễn ra ở khu vực địa hình nào?", opt: ["Đồi núi dốc bị mất lớp phủ thực vật", "Đồng bằng châu thổ", "Bãi triều ven biển", "Vùng trũng ngập nước"], a: 0, exp: "Nơi đồi núi dốc khi mất rừng sẽ bị nước mưa xói mòn rửa trôi lớp đất màu rất nhanh chóng." },
        { q: "Căn cứ vào Atlat trang 12, thảm thực vật tự nhiên đặc trưng của nước ta là:", opt: ["Rừng nhiệt đới ẩm lá rộng thường xanh", "Rừng lá kim ôn đới", "Rừng rụng lá mùa khô", "Thảo nguyên bán hoang mạc"], a: 0, exp: "Rừng nhiệt đới ẩm lá rộng thường xanh là kiểu rừng tiêu biểu nhất của khí hậu nhiệt đới ẩm gió mùa." },
        { q: "Hai quần đảo xa bờ có ý nghĩa chiến lược quốc phòng và kinh tế biển của nước ta là:", opt: ["Hoàng Sa và Trường Sa", "Cát Bà và Côn Đảo", "Phú Quốc và Thổ Chu", "Bạch Long Vĩ và Lý Sơn"], a: 0, exp: "Quần đảo Hoàng Sa (Đà Nẵng) và Trường Sa (Khánh Hòa) khẳng định chủ quyền thiêng liêng trên Biển Đông." },
        { q: "Khoáng sản bô-xit tập trung nhiều nhất ở vùng nào?", opt: ["Tây Nguyên", "Đông Bắc", "Bắc Trung Bộ", "Đồng bằng sông Cửu Long"], a: 0, exp: "Tây Nguyên sở hữu các mỏ bô-xit trữ lượng hàng tỉ tấn trên cao nguyên Đắk Nông, Lâm Đồng." }
      ];

      const item = questionsBank[(qNum - 1) % questionsBank.length];
      return {
        id: `ktdk-${qNum}`,
        level: level,
        question: `Câu ${qNum}: ${item.q}`,
        options: item.opt,
        correctAnswer: item.a,
        explanation: item.exp,
        atlatReference: "Atlat Địa lí Việt Nam",
        topicName: topic
      };
    })
  },
  {
    id: "exam-specialized-04",
    title: "Đề kham khảo Kiểm tra 15 Phút Nhanh (Mã đề: KT15P-04)",
    type: "Kiểm tra 15 Phút",
    timeLimitMinutes: 15,
    difficulty: "Cơ bản & Nhanh",
    description: "Đề kiểm tra nhanh 15 câu hỏi trong 15 phút, tập trung kiểm tra độ nhớ nhanh số liệu và nhận diện bản đồ Atlat cốt lõi.",
    questions: [
      {
        id: "kt15-01",
        level: "Nhận biết",
        question: "Căn cứ Atlat trang 4-5, điểm cực Tây của nước ta thuộc xã Sín Thầu, huyện Mường Nhé, tỉnh nào?",
        options: ["Điện Biên", "Lai Châu", "Sơn La", "Hòa Bình"],
        correctAnswer: 0,
        explanation: "Điểm cực Tây nằm ở ngã ba biên giới Việt - Trung - Lào thuộc tỉnh Điện Biên.",
        atlatReference: "Atlat trang 4-5",
        topicName: "Vị trí địa lí"
      },
      {
        id: "kt15-02",
        level: "Nhận biết",
        question: "Diện tích vùng đất liền nước ta là khoảng bao nhiêu nghìn km²?",
        options: ["331,2 nghìn km²", "312,3 nghìn km²", "350,5 nghìn km²", "280,0 nghìn km²"],
        correctAnswer: 0,
        explanation: "Diện tích đất liền nước ta là 331.212 km² (khoảng 331,2 nghìn km²).",
        atlatReference: "Atlat trang 4-5",
        topicName: "Vị trí địa lí"
      },
      {
        id: "kt15-03",
        level: "Nhận biết",
        question: "Nước ta có bao nhiêu dân tộc cùng sinh sống?",
        options: ["54 dân tộc", "50 dân tộc", "56 dân tộc", "64 dân tộc"],
        correctAnswer: 0,
        explanation: "Nước ta có 54 dân tộc anh em đoàn kết cùng phát triển.",
        atlatReference: "Atlat trang 16",
        topicName: "Cộng đồng Dân tộc"
      },
      {
        id: "kt15-04",
        level: "Thông hiểu",
        question: "Căn cứ Atlat trang 15, vùng có mật độ dân số thấp nhất cả nước là:",
        options: ["Tây Bắc và Tây Nguyên", "Đồng bằng sông Hồng", "Đông Nam Bộ", "Duyên hải miền Trung"],
        correctAnswer: 0,
        explanation: "Vùng núi cao Tây Bắc và Tây Nguyên có mật độ dân số thấp nhất cả nước (<100 người/km²).",
        atlatReference: "Atlat trang 15",
        topicName: "Dân cư"
      },
      {
        id: "kt15-05",
        level: "Nhận biết",
        question: "Địa hình nước ta có bao nhiêu phần là đồi núi?",
        options: ["3/4 diện tích", "1/2 diện tích", "1/4 diện tích", "4/5 diện tích"],
        correctAnswer: 0,
        explanation: "Địa hình đồi núi chiếm 3/4 diện tích lãnh thổ, nhưng chủ yếu là đồi núi thấp dưới 1.000m (chiếm 85%).",
        atlatReference: "Atlat trang 6-7",
        topicName: "Địa hình"
      },
      {
        id: "kt15-06",
        level: "Nhận biết",
        question: "Lượng mưa trung bình năm của nước ta phổ biến trong khoảng:",
        options: ["1.500 - 2.000 mm", "500 - 800 mm", "3.000 - 4.000 mm", "Dưới 500 mm"],
        correctAnswer: 0,
        explanation: "Lượng mưa trung bình năm của nước ta đạt từ 1.500 - 2.000 mm, độ ẩm không khí trên 80%.",
        atlatReference: "Atlat trang 9",
        topicName: "Khí hậu"
      },
      {
        id: "kt15-07",
        level: "Thông hiểu",
        question: "Vựa lúa lớn nhất của cả nước là:",
        options: ["Đồng bằng sông Cửu Long", "Đồng bằng sông Hồng", "Đồng bằng Thanh Hóa", "Đồng bằng sông Mã"],
        correctAnswer: 0,
        explanation: "Đồng bằng sông Cửu Long đóng góp trên 50% sản lượng lúa và trên 90% lượng gạo xuất khẩu cả nước.",
        atlatReference: "Atlat trang 19",
        topicName: "Nông nghiệp"
      },
      {
        id: "kt15-08",
        level: "Nhận biết",
        question: "Vựa cà phê lớn nhất của Việt Nam thuộc vùng kinh tế nào?",
        options: ["Tây Nguyên", "Đông Nam Bộ", "Bắc Trung Bộ", "Trung du miền núi Bắc Bộ"],
        correctAnswer: 0,
        explanation: "Tây Nguyên là vùng trồng cà phê số 1 cả nước với thủ phủ cà phê Buôn Ma Thuột danh tiếng.",
        atlatReference: "Atlat trang 19, 28",
        topicName: "Nông nghiệp"
      },
      {
        id: "kt15-09",
        level: "Nhận biết",
        question: "Căn cứ Atlat trang 22, nhà máy thủy điện Hòa Bình được xây dựng trên dòng sông nào?",
        options: ["Sông Đà", "Sông Lô", "Sông Chảy", "Sông Gâm"],
        correctAnswer: 0,
        explanation: "Thủy điện Hòa Bình (1.920 MW) được xây dựng trên dòng sông Đà kỳ vĩ.",
        atlatReference: "Atlat trang 22",
        topicName: "Công nghiệp Năng lượng"
      },
      {
        id: "kt15-10",
        level: "Thông hiểu",
        question: "Biểu đồ nào thích hợp nhất để thể hiện cơ cấu kinh tế trong 1 năm?",
        options: ["Biểu đồ tròn", "Biểu đồ đường", "Biểu đồ thanh ngang", "Biểu đồ miền"],
        correctAnswer: 0,
        explanation: "Biểu đồ tròn là lựa chọn chuẩn xác nhất để thể hiện cơ cấu của một tổng thể trong 1 năm.",
        atlatReference: "Kỹ năng biểu đồ",
        topicName: "Kỹ năng biểu đồ"
      },
      {
        id: "kt15-11",
        level: "Nhận biết",
        question: "Đảo lớn nhất của nước ta là:",
        options: ["Đảo Phú Quốc (Kiên Giang)", "Đảo Cát Bà (Hải Phòng)", "Đảo Côn Sơn (Bà Rịa - Vũng Tàu)", "Đảo Phú Quý (Bình Thuận)"],
        correctAnswer: 0,
        explanation: "Đảo Phú Quốc có diện tích khoảng 589 km², là hòn đảo lớn nhất Việt Nam.",
        atlatReference: "Atlat trang 4-5",
        topicName: "Biển đảo"
      },
      {
        id: "kt15-12",
        level: "Thông hiểu",
        question: "Trang phục truyền thống nổi bật với chiếc khăn Piêu là của phụ nữ dân tộc nào?",
        options: ["Dân tộc Thái", "Dân tộc Mông", "Dân tộc Dao", "Dân tộc Tày"],
        correctAnswer: 0,
        explanation: "Chiếc khăn Piêu thêu chỉ màu tinh xảo là biểu tượng tự hào của phụ nữ Thái vùng Tây Bắc.",
        atlatReference: "Atlat trang 16",
        topicName: "Đặc điểm Dân tộc"
      },
      {
        id: "kt15-13",
        level: "Nhận biết",
        question: "Khai thác dầu khí của nước ta hiện nay tập trung chủ yếu ở thềm lục địa vùng nào?",
        options: ["Thềm lục địa phía Nam (Bà Rịa - Vũng Tàu)", "Vịnh Bắc Bộ", "Vịnh Thái Lan", "Ven biển miền Trung"],
        correctAnswer: 0,
        explanation: "Các mỏ dầu Bạch Hổ, Rồng, Đại Hùng, Rạng Đông... đều nằm ở thềm lục địa Đông Nam Bộ.",
        atlatReference: "Atlat trang 22",
        topicName: "Công nghiệp Năng lượng"
      },
      {
        id: "kt15-14",
        level: "Thông hiểu",
        question: "Từ khóa 'Tốc độ tăng trưởng' trong đề thi biểu đồ gợi ý vẽ dạng biểu đồ nào?",
        options: ["Biểu đồ đường", "Biểu đồ tròn", "Biểu đồ miền", "Biểu đồ cột chồng"],
        correctAnswer: 0,
        explanation: "Từ khóa 'Tốc độ tăng trưởng' (lấy năm gốc = 100%) luôn là dấu hiệu của biểu đồ đường.",
        atlatReference: "Kỹ năng biểu đồ",
        topicName: "Kỹ năng biểu đồ"
      },
      {
        id: "kt15-15",
        level: "Vận dụng",
        question: "Nước ta có 7 vùng kinh tế. Vùng nào có số lượng tỉnh/thành phố nhiều nhất?",
        options: ["Trung du và miền núi Bắc Bộ và Bắc Trung Bộ", "Đồng bằng sông Cửu Long", "Đông Nam Bộ", "Tây Nguyên"],
        correctAnswer: 1,
        explanation: "Đồng bằng sông Cửu Long gồm 13 tỉnh thành phố, Trung du miền núi Bắc Bộ gồm 14 tỉnh.",
        atlatReference: "Atlat trang 4-5",
        topicName: "Các vùng kinh tế"
      }
    ]
  }
];
