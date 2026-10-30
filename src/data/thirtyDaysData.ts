export interface ThinkingQuestionItem {
  question: string;
  answer: string;
}

export interface MiniTestQuestionItem {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface DayStudyPlan {
  dayNumber: number;
  stage: number;
  title: string;
  focus: string;
  lessonTask: string;
  atlatTask: string;
  chartTask: string;
  thinkingQuestions: [ThinkingQuestionItem, ThinkingQuestionItem]; // Chính xác 2 câu hỏi tư duy có câu trả lời mỗi ngày
  miniTest: {
    testTitle: string;
    questions: MiniTestQuestionItem[];
  };
}

export const THIRTY_DAYS_STUDY_DATA: DayStudyPlan[] = [
  // =========================================================================
  // GIAI ĐOẠN 1: ĐỊA LÍ TỰ NHIÊN & VỊ TRÍ ĐỊA LÍ (NGÀY 1 - NGÀY 6)
  // =========================================================================
  {
    dayNumber: 1,
    stage: 1,
    title: "Ngày 01: Vị trí địa lí & Phạm vi lãnh thổ Việt Nam",
    focus: "Tọa độ 4 điểm cực, ý nghĩa vị trí tiếp giáp Biển Đông & nội chí tuyến",
    lessonTask: "Nắm vững tọa độ 4 điểm cực (Lũng Cú, Đất Mũi, Sín Thầu, Mũi Đôi), diện tích đất liền 331.344 km² và vùng biển >1 triệu km².",
    atlatTask: "Mở Atlat trang 4-5: Xác định ranh giới tiếp giáp trên bộ (Trung Quốc, Lào, Campuchia) và các nước láng giềng trên Biển Đông.",
    chartTask: "Vẽ sơ đồ tư duy phân tích tác động của vị trí địa lí đối với tính chất nhiệt đới ẩm gió mùa của thiên nhiên nước ta.",
    thinkingQuestions: [
      {
        question: "Vì sao cùng nằm trong vành đai nội chí tuyến Bắc bán cầu nhưng thiên nhiên Việt Nam không bị khô hạn như vùng hoang mạc Sahara ở Bắc Phi?",
        answer: "Do Việt Nam tiếp giáp với Biển Đông rộng lớn (trên 1 triệu km²) ở phía Đông và Nam, kết hợp với hoàn lưu gió mùa châu Á mang theo khối khí ẩm dồi dào từ biển vào đất liền, gây mưa lớn (1.500 - 2.000 mm/năm), trong khi Bắc Phi chịu ảnh hưởng của khối khí chí tuyến khô nóng và không có biển ẩm thổi vào."
      },
      {
        question: "Phân tích ý nghĩa chiến lược của vị trí nước ta đối với sự phát triển kinh tế biển và an ninh quốc phòng?",
        answer: "Nước ta có hơn 3.260 km bờ biển, nằm trên ngã tư tuyến đường hàng hải quốc tế nhộn nhịp bậc nhất thế giới nối Ấn Độ Dương với Thái Bình Dương; sở hữu nhiều vũng vịnh nước sâu (Cam Ranh, Cái Mép, Lạch Huyện) phát triển cảng biển logistics; hai quần đảo Hoàng Sa và Trường Sa là tiền đồn bảo vệ chủ quyền và khai thác kinh tế biển."
      }
    ],
    miniTest: {
      testTitle: "Mini Test Ngày 1: Vị trí & Phạm vi lãnh thổ",
      questions: [
        {
          id: "d1-q1",
          question: "Điểm cực Bắc trên đất liền của nước ta thuộc xã Lũng Cú (tỉnh Hà Giang) có vĩ độ là bao nhiêu?",
          options: ["23°23'B", "22°40'B", "23°27'B", "21°50'B"],
          correctAnswer: 0,
          explanation: "Điểm cực Bắc nước ta tại xã Lũng Cú, huyện Đồng Văn, tỉnh Hà Giang ở vĩ độ 23°23'B."
        },
        {
          id: "d1-q2",
          question: "Đường bờ biển nước ta dài 3.260 km kéo dài từ tỉnh/thành nào đến tỉnh/thành nào?",
          options: [
            "Từ Quảng Ninh đến Kiên Giang",
            "Từ Hải Phòng đến Cà Mau",
            "Từ Lạng Sơn đến Cà Mau",
            "Từ Quảng Ninh đến Cà Mau"
          ],
          correctAnswer: 0,
          explanation: "Bờ biển Việt Nam uốn cong hình chữ S dài 3.260 km từ Móng Cái (Quảng Ninh) đến Hà Tiên (Kiên Giang)."
        },
        {
          id: "d1-q3",
          question: "Vùng đặc quyền kinh tế của nước ta tiếp liền với lãnh hải hợp với lãnh hải thành một vùng biển rộng bao nhiêu hải lý?",
          options: ["12 hải lý", "24 hải lý", "200 hải lý", "350 hải lý"],
          correctAnswer: 2,
          explanation: "Theo Luật Biển Việt Nam và UNCLOS 1982, vùng đặc quyền kinh tế có chiều rộng 200 hải lý tính từ đường cơ sở."
        }
      ]
    }
  },
  {
    dayNumber: 2,
    stage: 1,
    title: "Ngày 02: Địa hình đồi núi & Các cánh cung Đông Bắc",
    focus: "Đặc điểm địa hình 3/4 đồi núi, hướng Tây Bắc - Đông Nam & hướng vòng cung",
    lessonTask: "Phân biệt 4 vùng đồi núi chính: Đông Bắc, Tây Bắc, Trường Sơn Bắc, Trường Sơn Nam.",
    atlatTask: "Mở Atlat trang 6-7 (Hình thể): Chỉ rõ 4 cánh cung Đông Bắc chụm đầu tại Tam Đảo (Sông Gâm, Ngân Sơn, Bắc Sơn, Đông Triều).",
    chartTask: "Nhận xét lát cắt địa hình A - B (từ biên giới Việt - Trung qua Fansipan đến đồng bằng).",
    thinkingQuestions: [
      {
        question: "Tại sao vùng núi Đông Bắc lại có địa hình vòng cung và tạo điều kiện cho gió mùa Đông Bắc xâm nhập sâu vào nước ta?",
        answer: "Vùng núi Đông Bắc uốn quanh khối vòm cổ sông Chảy tạo nên 4 cánh cung mở rộng về phía Bắc và phía Đông Bắc, chụm đầu ở Tam Đảo. Hướng nan quạt mở rộng này đóng vai trò như những chiếc 'phễu' hút gió mùa Đông Bắc tràn sâu xuống miền Bắc làm cho mùa đông đến sớm và lạnh nhất cả nước."
      },
      {
        question: "So sánh đặc điểm địa hình cơ bản giữa vùng núi Tây Bắc và vùng núi Đông Bắc?",
        answer: "Tây Bắc có địa hình cao nhất nước ta với các dãy núi cao trên 2.000m chạy theo hướng Tây Bắc - Đông Nam (Hoàng Liên Sơn), xen giữa là các sơn nguyên, cao nguyên đá vôi; trong khi Đông Bắc chủ yếu là đồi núi thấp dưới 1.000m với 4 cánh cung núi mở rộng về phía bắc và địa hình cacxtơ đá vôi độc đáo."
      }
    ],
    miniTest: {
      testTitle: "Mini Test Ngày 2: Địa hình đồi núi",
      questions: [
        {
          id: "d2-q1",
          question: "Đỉnh núi Fansipan cao 3.143m - Nóc nhà Đông Dương nằm trên dãy núi nào?",
          options: ["Dãy Hoàng Liên Sơn", "Dãy Trường Sơn", "Dãy Hoành Sơn", "Dãy Bạch Mã"],
          correctAnswer: 0,
          explanation: "Fansipan cao 3.143m nằm trên dãy Hoàng Liên Sơn hùng vĩ thuộc vùng núi Tây Bắc."
        },
        {
          id: "d2-q2",
          question: "Đặc điểm nổi bật nhất của địa hình đồi núi nước ta là:",
          options: [
            "Đồi núi thấp dưới 1.000m chiếm tới 85% diện tích",
            "Núi cao trên 2.000m chiếm hơn một nửa diện tích",
            "Chỉ có duy nhất hướng Tây Bắc - Đông Nam",
            "Được hình thành hoàn toàn vào giai đoạn Tân kiến tạo"
          ],
          correctAnswer: 0,
          explanation: "Đồi núi chiếm 3/4 diện tích nhưng chủ yếu là đồi núi thấp (dưới 1.000m chiếm 85%, núi cao trên 2.000m chỉ chiếm 1%)."
        },
        {
          id: "d2-q3",
          question: "Bốn cánh cung núi vùng Đông Bắc chụm đầu lại ở đâu?",
          options: ["Tam Đảo", "Mẫu Sơn", "Fansipan", "Bạch Mã"],
          correctAnswer: 0,
          explanation: "4 cánh cung núi Sông Gâm, Ngân Sơn, Bắc Sơn, Đông Triều đều chụm đầu về phía nam tại khối núi Tam Đảo."
        }
      ]
    }
  },
  {
    dayNumber: 3,
    stage: 1,
    title: "Ngày 03: Địa hình đồng bằng châu thổ sông Hồng & sông Cửu Long",
    focus: "So sánh nguồn gốc, diện tích, hệ thống đê và mức độ phì nhiêu của đất phù sa",
    lessonTask: "Nắm vững diện tích ĐBSH (~15.000 km²) và ĐBSCL (~40.000 km²), đặc điểm địa hình và chế độ bồi tụ.",
    atlatTask: "Mở Atlat trang 6-7 và trang 11 (Đất): So sánh diện tích đất phù sa ngọt với đất mặn, đất phèn.",
    chartTask: "Xử lý bảng số liệu cơ cấu diện tích đất phù sa sông Hồng và đất phèn, mặn sông Cửu Long.",
    thinkingQuestions: [
      {
        question: "Tại sao đồng bằng sông Hồng có hệ thống đê bao kiên cố hàng nghìn km trong khi đồng bằng sông Cửu Long lại không đắp đê ngăn lũ?",
        answer: "Sông Hồng có độ dốc lòng sông lớn, lưu lượng lũ mùa hè lên rất nhanh và dữ dội, nguy cơ ngập lụt thảm khốc nên ông cha ta phải đắp đê ngăn lũ từ ngàn xưa. Ngược lại, sông Cửu Long có mạng lưới kênh rạch chằng chịt, được Biển Hồ (Campuchia) điều tiết lũ tự nhiên, lũ dâng chậm, mang lại nguồn lợi thủy sản và phù sa màu mỡ nên nhân dân chọn phương châm 'sống chung với lũ'."
      },
      {
        question: "Hệ thống đê sông Hồng đã làm thay đổi địa hình bề mặt đồng bằng châu thổ như thế nào?",
        answer: "Đê ngăn lũ làm cho vùng đất trong đê không còn được phù sa bồi đắp hằng năm, hình thành các ô trũng ngập úng cục bộ và bề mặt bị chia cắt thành nhiều ô; trong khi vùng đất ngoài đê vẫn tiếp tục được bồi tụ phù sa nâng cao dần đáy sông và bãi bồi ven biển."
      }
    ],
    miniTest: {
      testTitle: "Mini Test Ngày 3: Đồng bằng châu thổ",
      questions: [
        {
          id: "d3-q1",
          question: "Đồng bằng sông Cửu Long có diện tích khoảng bao nhiêu km²?",
          options: ["Khoảng 40.000 km²", "Khoảng 15.000 km²", "Khoảng 25.000 km²", "Khoảng 55.000 km²"],
          correctAnswer: 0,
          explanation: "ĐBSCL là đồng bằng châu thổ lớn nhất nước ta với diện tích khoảng 40.000 km² (gấp gần 3 lần ĐBSH)."
        },
        {
          id: "d3-q2",
          question: "Đặc điểm nào sau đây KHÔNG đúng với đồng bằng sông Cửu Long?",
          options: [
            "Có hệ thống đê kiên cố dài hàng nghìn km ngăn lũ",
            "Mạng lưới kênh rạch chằng chịt",
            "Có diện tích đất phèn và đất mặn chiếm tỉ lệ lớn",
            "Có mùa lũ dâng chậm và được Biển Hồ điều tiết"
          ],
          correctAnswer: 0,
          explanation: "ĐBSCL không có hệ thống đê ngăn lũ như ĐBSH, nhân dân đắp bờ bao cục bộ và chủ động 'sống chung với lũ'."
        },
        {
          id: "d3-q3",
          question: "Nhóm đất chiếm diện tích lớn nhất ở đồng bằng sông Cửu Long là:",
          options: ["Đất phèn (khoảng 41%)", "Đất phù sa ngọt", "Đất mặn", "Đất cát pha"],
          correctAnswer: 0,
          explanation: "Ở ĐBSCL, đất phèn chiếm diện tích lớn nhất (khoảng 41% diện tích đồng bằng, tập trung ở Đồng Tháp Mười, Tứ giác Long Xuyên)."
        }
      ]
    }
  },
  {
    dayNumber: 4,
    stage: 1,
    title: "Ngày 04: Khí hậu nhiệt đới ẩm gió mùa & Chế độ gió mùa",
    focus: "Cơ chế gió mùa mùa đông (Đông Bắc) & gió mùa mùa hạ (Tây Nam)",
    lessonTask: "Phân tích 3 đặc tính cơ bản của khí hậu: Nhiệt độ trung bình >20°C, lượng mưa 1.500-2.000mm, độ ẩm >80%.",
    atlatTask: "Mở Atlat trang 9 (Khí hậu): Đọc biểu đồ nhiệt độ - lượng mưa trạm Hà Nội, Đà Nẵng, TP.HCM.",
    chartTask: "Tính biên độ nhiệt năm của trạm Hà Nội và TP.HCM, rút ra quy luật biên độ nhiệt giảm dần từ Bắc vào Nam.",
    thinkingQuestions: [
      {
        question: "Tại sao vào nửa đầu mùa đông miền Bắc có thời tiết lạnh khô, trong khi nửa cuối mùa đông lại có thời tiết lạnh ẩm mưa phùn?",
        answer: "Nửa đầu mùa đông (tháng 11 - 1), khối áp cao Siberi thổi trực tiếp qua lục địa Trung Hoa khô lạnh vào miền Bắc gây thời tiết lạnh hanh khô. Nửa cuối mùa đông (tháng 2 - 3), áp cao dịch chuyển lệch đông, gió mùa Đông Bắc đi qua vùng biển vịnh Bắc Bộ được bổ sung lượng hơi ẩm lớn, khi vào đất liền gây nên thời tiết lạnh ẩm và mưa phùn dai dẳng."
      },
      {
        question: "Hiện tượng gió phơn Tây Nam (gió Lào) ở duyên hải miền Trung hình thành do những nguyên nhân nào?",
        answer: "Vào đầu mùa hạ, khối khí nhiệt đới ẩm từ Bắc Ấn Độ Dương (vịnh Bengan) di chuyển theo hướng Tây Nam vào nước ta. Khi gặp bức chắn địa hình là dãy Trường Sơn, khối khí bị đẩy lên cao, ngưng tụ hơi ẩm trút mưa lớn ở sườn Tây (Lào). Khi vượt qua đỉnh núi sang sườn Đông (miền Trung), không khí chỉ còn hơi khô, theo quy luật đoạn nhiệt cứ xuống 100m nhiệt độ tăng 1°C, tạo thành luồng gió phơn cực kỳ khô nóng."
      }
    ],
    miniTest: {
      testTitle: "Mini Test Ngày 4: Khí hậu & Gió mùa",
      questions: [
        {
          id: "d4-q1",
          question: "Gió mùa Đông Bắc hoạt động ở miền Bắc nước ta chủ yếu trong khoảng thời gian nào?",
          options: [
            "Từ tháng 11 đến tháng 4 năm sau",
            "Từ tháng 5 đến tháng 10",
            "Từ tháng 1 đến tháng 7",
            "Quanh năm suốt tháng"
          ],
          correctAnswer: 0,
          explanation: "Gió mùa Đông Bắc hoạt động từ tháng 11 đến tháng 4 năm sau, xuất phát từ trung tâm áp cao Siberi."
        },
        {
          id: "d4-q2",
          question: "Dãy núi nào đóng vai trò là ranh giới tự nhiên ngăn gió mùa Đông Bắc tràn sâu xuống phía Nam?",
          options: ["Dãy Bạch Mã", "Dãy Hoành Sơn", "Dãy Tam Điệp", "Dãy Hoàng Liên Sơn"],
          correctAnswer: 0,
          explanation: "Dãy Bạch Mã (vĩ độ 16°B) đâm ngang ra biển tạo thành ranh giới tự nhiên ngăn cản gió mùa Đông Bắc, phân chia khí hậu Bắc - Nam."
        },
        {
          id: "d4-q3",
          question: "Nhiệt độ trung bình năm của hầu hết các vùng trên cả nước (trừ vùng núi cao) đều đạt mức nào?",
          options: ["Trên 20°C", "Dưới 15°C", "Trên 28°C", "Khoảng 18°C"],
          correctAnswer: 0,
          explanation: "Nằm hoàn toàn trong vùng nội chí tuyến, nhiệt độ trung bình năm của nước ta đều vượt trên 20°C (tổng số giờ nắng 1.400 - 3.000 giờ/năm)."
        }
      ]
    }
  },
  {
    dayNumber: 5,
    stage: 1,
    title: "Ngày 05: Mạng lưới sông ngòi & Chế độ nước theo mùa",
    focus: "Mạng lưới 2.360 con sông >10km, chế độ nước theo mùa lũ - cạn tương ứng mùa mưa - khô",
    lessonTask: "Nắm vững đặc điểm sông ngòi: Dày đặc nhưng phần lớn ngắn dốc; hai hệ thống sông lớn nhất là sông Hồng và sông Mê Kông; nhiều phù sa.",
    atlatTask: "Mở Atlat trang 10 (Sông ngòi): Xác định lưu vực 9 hệ thống sông lớn và hướng chảy chính (Tây Bắc - Đông Nam và vòng cung).",
    chartTask: "Vẽ biểu đồ đường thể hiện lưu lượng dòng chảy theo tháng của sông Hồng tại trạm Hà Nội.",
    thinkingQuestions: [
      {
        question: "Vì sao phần lớn các con sông ở miền Trung nước ta lại có đặc điểm ngắn, dốc và lũ lên rất nhanh?",
        answer: "Do địa hình miền Trung hẹp ngang theo chiều Đông - Tây, các nhánh núi Trường Sơn đâm ngang ra biển sát bờ, đồng bằng nhỏ hẹp. Khi có bão hoặc dải hội tụ nhiệt đới gây mưa lớn trên đầu nguồn, nước tập trung dồn về rất nhanh đổ thẳng ra biển, thời gian truyền lũ ngắn gây ngập lụt đột ngột dữ dội."
      },
      {
        question: "Sông ngòi nước ta có giá trị kinh tế tổng hợp to lớn trên những phương diện nào?",
        answer: "Cung cấp nguồn nước ngọt khổng lồ cho sản xuất nông nghiệp và sinh hoạt; trữ năng thủy điện lớn (sông Đà, sông Đồng Nai, sông Sê San); bồi đắp phù sa màu mỡ cho hai đồng bằng lớn; giao thông đường thủy nội địa; nuôi trồng và đánh bắt thủy sản nước ngọt; phát triển du lịch sinh thái sông nước."
      }
    ],
    miniTest: {
      testTitle: "Mini Test Ngày 5: Sông ngòi Việt Nam",
      questions: [
        {
          id: "d5-q1",
          question: "Nước ta có bao nhiêu con sông có chiều dài từ 10 km trở lên?",
          options: ["2.360 con sông", "1.080 con sông", "3.260 con sông", "5.000 con sông"],
          correctAnswer: 0,
          explanation: "Mạng lưới sông ngòi nước ta dày đặc với 2.360 con sông có chiều dài từ 10 km trở lên (cứ 20 km bờ biển lại có một cửa sông)."
        },
        {
          id: "d5-q2",
          question: "Hai hệ thống sông có diện tích lưu vực và lượng nước lớn nhất nước ta là:",
          options: [
            "Hệ thống sông Hồng và sông Mê Kông (sông Cửu Long)",
            "Hệ thống sông Đồng Nai và sông Mã",
            "Hệ thống sông Thu Bồn và sông Ba",
            "Hệ thống sông Thái Bình và sông Cả"
          ],
          correctAnswer: 0,
          explanation: "Hệ thống sông Hồng ở miền Bắc và hệ thống sông Mê Kông ở miền Nam là 2 hệ thống sông lớn nhất chi phối nông nghiệp nước ta."
        },
        {
          id: "d5-q3",
          question: "Chế độ nước của sông ngòi nước ta diễn biến thất thường và phân hóa theo hai mùa rõ rệt là do:",
          options: [
            "Chế độ mưa của khí hậu nhiệt đới ẩm gió mùa",
            "Sự phân bố của các hồ chứa nhân tạo",
            "Độ che phủ rừng ở thượng nguồn",
            "Hoạt động tưới tiêu của con người"
          ],
          correctAnswer: 0,
          explanation: "Chế độ nước sông ngòi phản ánh sát sao chế độ mưa: Mùa lũ tương ứng mùa mưa (chiếm 70-80% lượng nước cả năm), mùa cạn tương ứng mùa khô."
        }
      ]
    }
  },
  {
    dayNumber: 6,
    stage: 1,
    title: "Ngày 06: Thổ nhưỡng & Sinh vật nhiệt đới ẩm gió mùa",
    focus: "Nhóm đất feralit đồi núi (đất đỏ badan) & hệ sinh thái rừng nhiệt đới gió mùa",
    lessonTask: "Nắm vững quá trình feralit là quá trình hình thành đất đặc trưng của vùng nhiệt đới ẩm; sự đa dạng của hệ sinh thái rừng nguyên sinh và rừng ngập mặn.",
    atlatTask: "Mở Atlat trang 11 (Đất) & trang 12 (Sinh vật): Xác định vùng phân bố đất đỏ badan Tây Nguyên và các vườn quốc gia.",
    chartTask: "Phân tích cơ cấu các nhóm đất chính: Feralit 65%, Phù sa 24%, các loại đất khác 11%.",
    thinkingQuestions: [
      {
        question: "Quá trình hình thành đất feralit diễn ra mạnh mẽ ở nước ta dựa trên những điều kiện tự nhiên nào và vì sao đất feralit có màu đỏ vàng?",
        answer: "Trong điều kiện nhiệt độ cao và độ ẩm lớn, quá trình phong hóa diễn ra mãnh liệt. Mưa nhiều rửa trôi các chất kiềm và silic dễ tan, làm tích tụ oxit sắt (Fe₂O₃) và oxit nhôm (Al₂O₃) không tan tạo nên màu đỏ vàng đặc trưng cho đất. Quá trình này diễn ra chủ yếu ở vùng đồi núi thấp trên đá mẹ badan hoặc đá vôi."
      },
      {
        question: "Tại sao việc bảo vệ rừng ngập mặn ven biển nước ta có ý nghĩa cấp bách trong bối cảnh biến đổi khí hậu hiện nay?",
        answer: "Rừng ngập mặn (như ở Cà Mau, Cần Giờ) là bức tường thành xanh chắn sóng biển, hạn chế xói lở bờ biển do bão; là nơi sinh sản và cư ngụ của các loài thủy hải sản; hấp thụ lượng cacbon khổng lồ (cacbon xanh) và ngăn chặn xâm nhập mặn vào sâu nội đồng."
      }
    ],
    miniTest: {
      testTitle: "Mini Test Ngày 6: Đất & Sinh vật",
      questions: [
        {
          id: "d6-q1",
          question: "Nhóm đất chiếm diện tích lớn nhất trong cơ cấu đất tự nhiên nước ta là:",
          options: ["Nhóm đất feralit (khoảng 65%)", "Nhóm đất phù sa", "Nhóm đất cát pha", "Nhóm đất mùn alit trên núi cao"],
          correctAnswer: 0,
          explanation: "Đất feralit chiếm hơn 65% diện tích đất tự nhiên, phân bố rộng khắp ở vùng đồi núi thấp cả nước."
        },
        {
          id: "d6-q2",
          question: "Đất đỏ badan có độ phì nhiêu cao nhất nước ta phân bố tập trung nhiều nhất ở vùng nào?",
          options: ["Tây Nguyên và Đông Nam Bộ", "Đồng bằng sông Hồng", "Bắc Trung Bộ", "Tây Bắc"],
          correctAnswer: 0,
          explanation: "Đất đỏ badan màu mỡ tầng sâu tập trung nhiều nhất trên các cao nguyên Tây Nguyên (Đắk Lắk, Pleiku) và Đông Nam Bộ (Bình Phước, Đồng Nai)."
        },
        {
          id: "d6-q3",
          question: "Rừng ngập mặn của nước ta phát triển mạnh nhất ở vùng nào?",
          options: ["Nam Bộ (nhất là bán đảo Cà Mau)", "Ven biển Bắc Bộ", "Bắc Trung Bộ", "Duyên hải Nam Trung Bộ"],
          correctAnswer: 0,
          explanation: "Bán đảo Cà Mau và rừng Sác Cần Giờ (Nam Bộ) là nơi rừng ngập mặn phát triển bạt ngàn nhất cả nước với diện tích hàng chục nghìn ha."
        }
      ]
    }
  },

  // =========================================================================
  // GIAI ĐOẠN 2: ĐỊA LÍ DÂN CƯ & XÃ HỘI VIỆT NAM (NGÀY 7 - NGÀY 12)
  // =========================================================================
  {
    dayNumber: 7,
    stage: 2,
    title: "Ngày 07: Cộng đồng 54 dân tộc & Sự phân bố dân tộc",
    focus: "Khối đại đoàn kết 54 dân tộc, bản sắc văn hóa và địa bàn cư trú",
    lessonTask: "Người Kinh chiếm 85,3% dân số (đồng bằng, duyên hải, đô thị); 53 dân tộc thiểu số chiếm 14,7% (miền núi, trung du).",
    atlatTask: "Mở Atlat trang 16 (Dân tộc): Tra cứu các ngữ hệ chính (Nam Á, Hmông - Dao, Thái - Kadai, Nam Đảo, Hán - Tạng).",
    chartTask: "Nhận xét biểu đồ cơ cấu các dân tộc ở nước ta và sự chuyển dịch nâng cao đời sống vùng đồng bào thiểu số.",
    thinkingQuestions: [
      {
        question: "Phân tích ý nghĩa của khối đại đoàn kết toàn dân tộc đối với sự nghiệp xây dựng và bảo vệ Tổ quốc?",
        answer: "Các dân tộc cùng kề vai sát cánh chống giặc ngoại xâm suốt mấy ngàn năm lịch sử; mỗi dân tộc đóng góp kinh nghiệm sản xuất phong phú (người Kinh làm lúa nước, đồng bào thiểu số có thế mạnh trồng cây công nghiệp, dược liệu, bảo vệ rừng phòng hộ đầu nguồn); bảo đảm an ninh biên giới và giữ gìn đa dạng bản sắc văn hóa dân tộc."
      },
      {
        question: "Tại sao Đảng và Nhà nước ta luôn đặc biệt ưu tiên đầu tư phát triển cơ sở hạ tầng ở vùng đồng bào dân tộc thiểu số?",
        answer: "Địa bàn cư trú của đồng bào thiểu số chủ yếu là miền núi, biên giới hẻo lánh có địa hình hiểm trở, giao thông đi lại khó khăn. Đầu tư điện, đường, trường, trạm giúp xóa đói giảm nghèo, thu hẹp khoảng cách phát triển giữa miền núi và đồng bằng, nâng cao dân trí và củng cố thế trận an ninh quốc phòng vùng phên dậu Tổ quốc."
      }
    ],
    miniTest: {
      testTitle: "Mini Test Ngày 7: Dân tộc Việt Nam",
      questions: [
        {
          id: "d7-q1",
          question: "Nước ta có bao nhiêu dân tộc cùng sinh sống đoàn kết?",
          options: ["54 dân tộc", "52 dân tộc", "56 dân tộc", "60 dân tộc"],
          correctAnswer: 0,
          explanation: "Việt Nam là quốc gia thống nhất gồm 54 dân tộc anh em cùng chung sống hòa thuận."
        },
        {
          id: "d7-q2",
          question: "Dân tộc Kinh (Việt) chiếm khoảng bao nhiêu phần trăm tổng dân số cả nước?",
          options: ["Khoảng 85,3%", "Khoảng 70%", "Khoảng 95%", "Khoảng 60%"],
          correctAnswer: 0,
          explanation: "Dân tộc Kinh chiếm khoảng 85,3% dân số, 53 dân tộc thiểu số chiếm khoảng 14,7% dân số cả nước."
        },
        {
          id: "d7-q3",
          question: "Đồng bào các dân tộc Tày, Nùng, Mường, Dao, Hmông cư trú chủ yếu ở vùng nào?",
          options: ["Trung du và miền núi Bắc Bộ", "Tây Nguyên", "Đồng bằng sông Cửu Long", "Duyên hải Nam Trung Bộ"],
          correctAnswer: 0,
          explanation: "Các dân tộc Tày, Nùng, Dao, Hmông, Thái cư trú chủ yếu ở vùng Trung du và miền núi phía Bắc."
        }
      ]
    }
  },
  {
    dayNumber: 8,
    stage: 2,
    title: "Ngày 08: Quy mô dân số vượt 100 triệu dân & Tỉ lệ gia tăng tự nhiên",
    focus: "Quy mô dân số top 15 thế giới, kiểm soát mức sinh thay thế và già hóa dân số",
    lessonTask: "Quy mô đạt trên 100,3 triệu dân (năm học 2026-2027); tỉ lệ gia tăng tự nhiên giảm xuống dưới 0,95%/năm.",
    atlatTask: "Mở Atlat trang 15 (Dân số): Nhận xét quy mô dân số qua các thời kỳ từ năm 1960 đến nay.",
    chartTask: "Vẽ biểu đồ cột kết hợp đường thể hiện số dân và tỉ lệ tăng dân số tự nhiên của nước ta.",
    thinkingQuestions: [
      {
        question: "Quy mô dân số vượt mốc 100 triệu người đem lại những cơ hội và thách thức to lớn nào cho sự phát triển của nước ta?",
        answer: "Cơ hội: Tạo ra nguồn lao động dồi dào, thị trường tiêu dùng nội địa rộng lớn hấp dẫn vốn đầu tư trong và ngoài nước. Thách thức: Tạo áp lực cực lớn lên vấn đề giải quyết việc làm, áp lực lên hệ thống y tế, giáo dục, tài nguyên thiên nhiên và bảo vệ môi trường, nguy cơ bẫy thu nhập trung bình."
      },
      {
        question: "Vì sao hiện nay mức sinh ở vùng Đông Nam Bộ và TP.HCM lại giảm xuống rất thấp dưới mức sinh thay thế?",
        answer: "Do chi phí sinh hoạt, nuôi dạy con cái và giá nhà ở tại các đô thị lớn rất cao; áp lực công việc và sự nghiệp của phụ nữ trẻ hiện đại; xu hướng kết hôn muộn và lối sống coi trọng chất lượng cuộc sống hơn số lượng con cái."
      }
    ],
    miniTest: {
      testTitle: "Mini Test Ngày 8: Quy mô & Gia tăng dân số",
      questions: [
        {
          id: "d8-q1",
          question: "Dân số nước ta hiện nay đã chính thức vượt qua mốc nào?",
          options: ["100 triệu người", "80 triệu người", "90 triệu người", "120 triệu người"],
          correctAnswer: 0,
          explanation: "Dân số nước ta đã chính thức cán mốc và vượt trên 100,3 triệu người, đứng thứ 15 thế giới và thứ 3 Đông Nam Á."
        },
        {
          id: "d8-q2",
          question: "Tỉ lệ gia tăng dân số tự nhiên của nước ta hiện nay có xu hướng như thế nào nhờ chính sách dân số?",
          options: [
            "Giảm ổn định xuống mức dưới 1%/năm",
            "Tăng nhanh đột biến trên 2,5%/năm",
            "Âm liên tục trong nhiều năm",
            "Không thay đổi so với thời kỳ 1970"
          ],
          correctAnswer: 0,
          explanation: "Tỉ lệ tăng dân số tự nhiên của nước ta đã giảm mạnh từ mức bùng nổ dân số xuống còn dưới 0,95%/năm."
        },
        {
          id: "d8-q3",
          question: "Hiện tượng dân số nào đang bắt đầu diễn ra nhanh chóng ở nước ta đòi hỏi chính sách an sinh xã hội phù hợp?",
          options: [
            "Già hóa dân số với tỉ lệ người cao tuổi tăng nhanh",
            "Tăng tỉ lệ trẻ em dưới 5 tuổi đột biến",
            "Tỉ lệ phụ nữ giảm sút nghiêm trọng",
            "Dân số suy giảm dân số học tuyệt đối"
          ],
          correctAnswer: 0,
          explanation: "Việt Nam thuộc nhóm nước có tốc độ già hóa dân số nhanh nhất thế giới do tuổi thọ tăng và mức sinh giảm."
        }
      ]
    }
  },
  {
    dayNumber: 9,
    stage: 2,
    title: "Ngày 09: Cơ cấu dân số vàng & Thách thức việc làm",
    focus: "Tỉ lệ lao động 15-64 tuổi chiếm gần 67%, năng suất lao động và chuyển dịch việc làm",
    lessonTask: "Tận dụng 'thời kỳ cơ cấu dân số vàng' (2 người đi làm nuôi 1 người phụ thuộc) để bứt phá thu nhập.",
    atlatTask: "Mở Atlat trang 15: Phân tích tháp dân số nước ta năm 1999 và 2007 (đáy tháp thu hẹp, thân tháp phình to).",
    chartTask: "Phân tích biểu đồ cơ cấu lao động đang làm việc phân theo khu vực kinh tế (Nông nghiệp giảm, Công nghiệp & Dịch vụ tăng).",
    thinkingQuestions: [
      {
        question: "Thế nào là 'Cơ cấu dân số vàng' và tại sao đây lại là cơ hội ngàn năm có một đối với kinh tế Việt Nam?",
        answer: "'Cơ cấu dân số vàng' là giai đoạn dân số mà tỉ lệ người trong độ tuổi lao động (15 - 64 tuổi) cao gấp đôi tỉ lệ người phụ thuộc (dưới 15 tuổi và từ 65 tuổi trở lên). Đây là cơ hội vàng vì cung cấp lực lượng lao động dồi dào, nếu được đào tạo kỹ năng số và tay nghề cao sẽ tạo ra của cải thặng dư khổng lồ giúp đất nước hóa rồng trước khi bước vào giai đoạn già hóa dân số."
      },
      {
        question: "Cơ cấu lao động theo ngành ở nước ta đang chuyển dịch theo hướng tích cực như thế nào?",
        answer: "Tỉ trọng lao động trong khu vực Nông - lâm - thủy sản giảm nhanh (từ trên 60% xuống còn dưới 27%); tỉ trọng lao động trong khu vực Công nghiệp - xây dựng và Dịch vụ tăng nhanh phù hợp với quá trình công nghiệp hóa, hiện đại hóa và chuyển đổi số quốc gia."
      }
    ],
    miniTest: {
      testTitle: "Mini Test Ngày 9: Cơ cấu dân số vàng",
      questions: [
        {
          id: "d9-q1",
          question: "Nước ta bước vào thời kỳ 'Cơ cấu dân số vàng' khi tỉ lệ người trong độ tuổi lao động (15 - 64 tuổi) đạt mức nào?",
          options: ["Gần 67% tổng dân số", "Khoảng 40%", "Khoảng 50%", "Hơn 90%"],
          correctAnswer: 0,
          explanation: "Tỉ lệ người trong độ tuổi lao động nước ta hiện chiếm gần 67% (tương đương 2/3 tổng dân số)."
        },
        {
          id: "d9-q2",
          question: "Xu hướng chuyển dịch cơ cấu lao động theo ngành kinh tế ở nước ta hiện nay là:",
          options: [
            "Giảm tỉ trọng khu vực Nông - lâm - thủy sản, tăng tỉ trọng Công nghiệp và Dịch vụ",
            "Tăng mạnh tỉ trọng khu vực Nông nghiệp truyền thống",
            "Giảm toàn bộ lao động trong khu vực Dịch vụ",
            "Không có sự thay đổi giữa các khu vực"
          ],
          correctAnswer: 0,
          explanation: "Quá trình công nghiệp hóa thúc đẩy lao động chuyển dịch từ nông nghiệp năng suất thấp sang công nghiệp và dịch vụ."
        },
        {
          id: "d9-q3",
          question: "Thách thức lớn nhất đối với lực lượng lao động nước ta hiện nay là:",
          options: [
            "Tỉ lệ lao động qua đào tạo có bằng cấp, chứng chỉ còn chưa cao",
            "Thiếu hụt trầm trọng số lượng lao động phổ thông",
            "Người lao động không chịu làm việc trong nhà máy",
            "Dân số trong độ tuổi lao động giảm sút"
          ],
          correctAnswer: 0,
          explanation: "Mặc dù lực lượng lao động đông đảo (>52,4 triệu người), nhưng tỉ lệ lao động qua đào tạo có văn bằng chứng chỉ mới đạt khoảng 27-28%."
        }
      ]
    }
  },
  {
    dayNumber: 10,
    stage: 2,
    title: "Ngày 10: Phân bố dân cư không đều & Đô thị hóa hiện đại",
    focus: "Mật độ dân số ~303 người/km², chênh lệch đồng bằng - miền núi, mạng lưới đô thị thông minh",
    lessonTask: "Nắm mật độ ĐBSH (>1.080 người/km²) cao gấp gần 10 lần Tây Nguyên (~112 người/km²); tỉ lệ dân thành thị đạt trên 38,5%.",
    atlatTask: "Mở Atlat trang 15: Nhận xét bản đồ mật độ dân số và quy mô các đô thị (Hà Nội, TP.HCM, Hải Phòng, Đà Nẵng, Cần Thơ).",
    chartTask: "Phân tích biểu đồ tỉ lệ dân thành thị và nông thôn qua các năm ở nước ta.",
    thinkingQuestions: [
      {
        question: "Sự phân bố dân cư chênh lệch lớn giữa đồng bằng và miền núi gây ra những khó khăn gì cho phát triển kinh tế - xã hội?",
        answer: "Ở đồng bằng: Mật độ dân số quá cao gây quá tải hạ tầng giao thông, bệnh viện, trường học, ô nhiễm môi trường và áp lực giải quyết việc làm. Ở miền núi: Mật độ dân số quá thưa thớt dẫn đến tình trạng thiếu hụt lao động khai thác nguồn tài nguyên khoáng sản, thủy điện, lâm sản dồi dào, khó khăn trong việc xây dựng cơ sở hạ tầng phân tán."
      },
      {
        question: "Quá trình đô thị hóa ở nước ta hiện nay có những đặc điểm nổi bật nào?",
        answer: "Tỉ lệ dân số thành thị tăng nhanh (đạt trên 38,5% và hướng tới 45%); mạng lưới đô thị mở rộng theo hướng chùm đô thị và đô thị vệ tinh; các đô thị lớn (Hà Nội, TP.HCM) là đầu tàu thúc đẩy chuyển đổi số, kinh tế số và dịch vụ chất lượng cao."
      }
    ],
    miniTest: {
      testTitle: "Mini Test Ngày 10: Phân bố dân cư & Đô thị hóa",
      questions: [
        {
          id: "d10-q1",
          question: "Vùng có mật độ dân số cao nhất nước ta là vùng nào?",
          options: ["Đồng bằng sông Hồng (>1.080 người/km²)", "Đông Nam Bộ", "Đồng bằng sông Cửu Long", "Tây Nguyên"],
          correctAnswer: 0,
          explanation: "Đồng bằng sông Hồng có mật độ dân số cao nhất cả nước, gấp hơn 3,5 lần mật độ trung bình toàn quốc."
        },
        {
          id: "d10-q2",
          question: "Hai đô thị đặc biệt của nước ta là:",
          options: ["Hà Nội và TP. Hồ Chí Minh", "Hà Nội và Hải Phòng", "TP. Hồ Chí Minh và Đà Nẵng", "Đà Nẵng và Cần Thơ"],
          correctAnswer: 0,
          explanation: "Hà Nội (Thủ đô) và TP. Hồ Chí Minh là hai đô thị loại đặc biệt có quy mô dân số và kinh tế lớn nhất nước ta."
        },
        {
          id: "d10-q3",
          question: "Tỉ lệ dân thành thị của nước ta hiện nay đạt khoảng bao nhiêu %?",
          options: ["Khoảng 38,5% - 40%", "Khoảng 15%", "Khoảng 65%", "Khoảng 80%"],
          correctAnswer: 0,
          explanation: "Tỉ lệ dân số thành thị nước ta hiện đạt khoảng 38,5% - 40% và đang tăng nhanh gắn với công nghiệp hóa."
        }
      ]
    }
  },
  {
    dayNumber: 11,
    stage: 2,
    title: "Ngày 11: Chuyển dịch cơ cấu kinh tế Việt Nam thời kỳ đổi mới",
    focus: "Chuyển dịch cơ cấu ngành (Khu vực I giảm, Khu vực II và III tăng), cơ cấu thành phần & lãnh thổ",
    lessonTask: "Nắm 3 xu hướng chuyển dịch: Cơ cấu ngành, cơ cấu thành phần kinh tế (kinh tế tư nhân và FDI lớn mạnh) và cơ cấu lãnh thổ (vùng động lực).",
    atlatTask: "Mở Atlat trang 17 (Kinh tế chung): Nhận xét biểu đồ tròn chuyển dịch cơ cấu GDP giai đoạn 1990 - 2007.",
    chartTask: "Vẽ biểu đồ miền thể hiện sự thay đổi cơ cấu GDP phân theo ngành kinh tế nước ta qua các năm.",
    thinkingQuestions: [
      {
        question: "Tại sao việc giảm tỉ trọng khu vực Nông - lâm - thủy sản trong GDP không có nghĩa là sản lượng nông nghiệp giảm sút?",
        answer: "Giảm tỉ trọng trong GDP là giảm tương đối về mặt % trong tổng thể nền kinh tế vì khu vực Công nghiệp và Dịch vụ tăng trưởng với tốc độ phi mã hơn nhiều. Trên thực tế, giá trị tuyệt đối và sản lượng nông nghiệp của nước ta liên tục tăng kỷ lục (xuất khẩu gạo trên 8 triệu tấn, xuất khẩu thủy sản trên 10 tỉ USD)."
      },
      {
        question: "Khu vực kinh tế có vốn đầu tư nước ngoài (FDI) đóng vai trò gì trong nền kinh tế Việt Nam hiện nay?",
        answer: "Đóng góp trên 70% tổng kim ngạch xuất khẩu của cả nước (đặc biệt các mặt hàng công nghệ cao như điện thoại, máy tính, vi mạch bán dẫn); mang lại nguồn vốn lớn, công nghệ hiện đại, thúc đẩy đào tạo kỹ năng lao động và liên kết doanh nghiệp phụ trợ trong nước."
      }
    ],
    miniTest: {
      testTitle: "Mini Test Ngày 11: Chuyển dịch cơ cấu kinh tế",
      questions: [
        {
          id: "d11-q1",
          question: "Xu hướng chuyển dịch cơ cấu ngành kinh tế của nước ta diễn ra theo hướng:",
          options: [
            "Giảm tỉ trọng Nông - lâm - thủy sản, tăng tỉ trọng Công nghiệp - xây dựng và Dịch vụ",
            "Tăng mạnh tỉ trọng Nông nghiệp, giảm tỉ trọng Dịch vụ",
            "Chỉ phát triển kinh tế nông nghiệp tự túc",
            "Cố định không thay đổi"
          ],
          correctAnswer: 0,
          explanation: "Chuyển dịch cơ cấu ngành theo hướng hiện đại hóa: Giảm tỉ trọng khu vực I, nâng cao tỉ trọng khu vực II và III."
        },
        {
          id: "d11-q2",
          question: "Thành phần kinh tế nào hiện nay đóng góp lớn nhất vào tổng kim ngạch xuất khẩu hàng hóa của nước ta?",
          options: [
            "Khu vực có vốn đầu tư nước ngoài (FDI)",
            "Kinh tế tập thể (hợp tác xã)",
            "Kinh tế nhà nước",
            "Kinh tế cá thể tiểu chủ"
          ],
          correctAnswer: 0,
          explanation: "Khu vực kinh tế FDI chiếm trên 70% kim ngạch xuất khẩu cả nước nhờ các tập đoàn công nghệ như Samsung, Intel, Foxconn."
        },
        {
          id: "d11-q3",
          question: "Ba vùng kinh tế trọng điểm của nước ta gồm những vùng nào?",
          options: [
            "Vùng KTTĐ phía Bắc, miền Trung và phía Nam",
            "Chỉ có vùng KTTĐ phía Bắc",
            "Chỉ có vùng Tây Nguyên và Tây Bắc",
            "Vùng Đông Bắc, Tây Bắc và Bắc Trung Bộ"
          ],
          correctAnswer: 0,
          explanation: "Nước ta đã thành lập Vùng kinh tế trọng điểm phía Bắc, Vùng KTTĐ miền Trung và Vùng KTTĐ phía Nam làm động lực tăng trưởng."
        }
      ]
    }
  },
  {
    dayNumber: 12,
    stage: 2,
    title: "Ngày 12: Tổng kết nửa chặng đường & Đánh giá năng lực giai đoạn 1-2",
    focus: "Hệ thống hóa toàn bộ kiến thức Địa lí Tự nhiên và Dân cư - Xã hội chuẩn thi Chuyên",
    lessonTask: "Ôn tập sơ đồ mạng nhện liên kết các nhân tố: Vị trí -> Khí hậu -> Sông ngòi -> Thổ nhưỡng -> Phân bố dân cư -> Kinh tế.",
    atlatTask: "Thực hành liên hoàn tra cứu Atlat trang 4-5, 6-7, 9, 10, 15, 17 trong 15 phút.",
    chartTask: "Xử lý bảng số liệu tổng hợp về mật độ dân số và GRDP bình quân đầu người các vùng kinh tế.",
    thinkingQuestions: [
      {
        question: "Chứng minh mối quan hệ nhân quả chặt chẽ giữa đặc điểm địa hình, khí hậu với sự phân bố dân cư ở nước ta?",
        answer: "Địa hình đồng bằng bằng phẳng, đất phù sa màu mỡ và nguồn nước dồi dào tạo điều kiện canh tác lúa nước thuận lợi, dân cư tập trung đông đúc (ĐBSH >1.000 người/km²). Ngược lại, vùng núi dốc đứng, hiểm trở, giao thông khó khăn, thời tiết khắc nghiệt khiến dân cư phân bố thưa thớt (Tây Bắc ~138 người/km²)."
      },
      {
        question: "Đề xuất 3 giải pháp đột phá để phát triển bền vững kinh tế miền núi trong giai đoạn tới?",
        answer: "1. Đẩy mạnh đầu tư mạng lưới giao thông cao tốc kết nối vùng núi với cảng biển và các trung tâm kinh tế lớn; 2. Phát triển nông nghiệp hữu cơ đặc sản giá trị cao (chè shan tuyết, dược liệu quý, sâm Ngọc Linh, cây ăn quả ôn đới) gắn với công nghiệp chế biến sâu; 3. Phát triển du lịch sinh thái, du lịch văn hóa bản địa gắn với bảo vệ rừng phòng hộ đầu nguồn."
      }
    ],
    miniTest: {
      testTitle: "Mini Test Ngày 12: Đánh giá tổng hợp Giai đoạn 1 & 2",
      questions: [
        {
          id: "d12-q1",
          question: "Tính chất cơ bản nhất của thiên nhiên Việt Nam là:",
          options: [
            "Tính chất nhiệt đới ẩm gió mùa",
            "Tính chất cận nhiệt đới lục địa",
            "Tính chất ôn đới hải dương",
            "Tính chất xích đạo khô hạn"
          ],
          correctAnswer: 0,
          explanation: "Tính chất nhiệt đới ẩm gió mùa là tính chất bao trùm chi phối toàn bộ các thành phần tự nhiên nước ta."
        },
        {
          id: "d12-q2",
          question: "Nước ta có bao nhiêu tỉnh/thành phố trực thuộc Trung ương sau phương án sắp xếp mới?",
          options: ["34 tỉnh thành (gồm 9 thành phố trực thuộc Trung ương)", "63 tỉnh thành", "58 tỉnh thành", "40 tỉnh thành"],
          correctAnswer: 0,
          explanation: "Theo định hướng sắp xếp quy hoạch mới, cả nước có 34 tỉnh thành gồm 9 thành phố trực thuộc Trung ương."
        },
        {
          id: "d12-q3",
          question: "Hai đồng bằng châu thổ lớn nhất nước ta được tạo thành bởi phù sa của những con sông nào?",
          options: [
            "Hệ thống sông Hồng và sông Cửu Long (Mê Kông)",
            "Sông Đồng Nai và sông Mã",
            "Sông Cả và sông Thu Bồn",
            "Sông Đà và sông Lô"
          ],
          correctAnswer: 0,
          explanation: "Đồng bằng sông Hồng do phù sa sông Hồng và sông Thái Bình bồi đắp; Đồng bằng sông Cửu Long do phù sa sông Tiền và sông Hậu bồi đắp."
        }
      ]
    }
  },

  // =========================================================================
  // GIAI ĐOẠN 3: ĐỊA LÍ CÁC NGÀNH KINH TẾ (NGÀY 13 - NGÀY 18)
  // =========================================================================
  {
    dayNumber: 13,
    stage: 3,
    title: "Ngày 13: Địa lí Nông nghiệp - Sản xuất Lúa gạo & Cây lương thực",
    focus: "Việt Nam top 2-3 xuất khẩu gạo thế giới, ĐBSCL vựa lúa số 1, ĐBSH thâm canh cao nhất",
    lessonTask: "Sản lượng lúa đạt trên 43 triệu tấn/năm; xuất khẩu đạt gần 8 triệu tấn; giống lúa thơm ST25 ngon nhất thế giới.",
    atlatTask: "Mở Atlat trang 19 (Nông nghiệp chung): So sánh diện tích và sản lượng lúa của ĐBSCL so với ĐBSH.",
    chartTask: "Vẽ biểu đồ cột thể hiện sản lượng lúa của nước ta phân theo mùa vụ (lúa đông xuân, lúa hè thu, lúa mùa).",
    thinkingQuestions: [
      {
        question: "Tại sao năng suất lúa của Đồng bằng sông Hồng lại cao hơn Đồng bằng sông Cửu Long dù diện tích và sản lượng nhỏ hơn?",
        answer: "Đồng bằng sông Hồng có truyền thống thâm canh lúa nước lâu đời nhất cả nước, trình độ thâm canh cao, cơ sở hạ tầng thủy lợi đê điều hoàn chỉnh, áp dụng kỹ thuật gieo cấy phân bón giống mới bài bản và nguồn lao động nông nghiệp dồi dào, tỉ mỉ."
      },
      {
        question: "Đề án '1 triệu héc-ta chuyên canh lúa chất lượng cao và phát thải thấp' ở ĐBSCL có ý nghĩa gì đối với vị thế xuất khẩu gạo của Việt Nam?",
        answer: "Giúp giảm phát thải khí nhà kính (khí metan từ ruộng ngập nước), đáp ứng tiêu chuẩn gạo xanh khắt khe của EU, Mỹ và Nhật Bản; nâng cao giá trị hạt gạo xuất khẩu, tăng thu nhập cho người nông dân và khẳng định uy tín thương hiệu lúa gạo bền vững của Việt Nam trên toàn cầu."
      }
    ],
    miniTest: {
      testTitle: "Mini Test Ngày 13: Lúa gạo & Cây lương thực",
      questions: [
        {
          id: "d13-q1",
          question: "Vựa lúa lớn nhất của cả nước đóng góp trên 90% sản lượng gạo xuất khẩu là vùng nào?",
          options: ["Đồng bằng sông Cửu Long", "Đồng bằng sông Hồng", "Duyên hải miền Trung", "Đông Nam Bộ"],
          correctAnswer: 0,
          explanation: "ĐBSCL là vựa lúa số 1 cả nước chiếm hơn 50% diện tích và hơn 90% lượng gạo xuất khẩu."
        },
        {
          id: "d13-q2",
          question: "Giống gạo đặc sản nào của Việt Nam đã hai lần đạt giải 'Gạo ngon nhất thế giới' (World's Best Rice)?",
          options: ["Gạo ST25", "Gạo Nàng Thơm Chợ Đào", "Gạo Tám Xoan Hải Hậu", "Gạo Séng Cù"],
          correctAnswer: 0,
          explanation: "Gạo ST25 do kỹ sư Hồ Quang Cua và nhóm cộng sự Sóc Trăng lai tạo đã 2 lần vô địch thế giới vào năm 2019 và 2023."
        },
        {
          id: "d13-q3",
          question: "Vùng có năng suất lúa bình quân cao nhất nước ta là:",
          options: ["Đồng bằng sông Hồng", "Đồng bằng sông Cửu Long", "Tây Nguyên", "Bắc Trung Bộ"],
          correctAnswer: 0,
          explanation: "Đồng bằng sông Hồng có năng suất lúa bình quân cao nhất cả nước nhờ trình độ thâm canh điêu luyện."
        }
      ]
    }
  },
  {
    dayNumber: 14,
    stage: 3,
    title: "Ngày 14: Cây công nghiệp lâu năm - Cà phê, Cao su, Hồ tiêu, Hạt điều",
    focus: "Số 1 thế giới về Hạt điều & Hồ tiêu; Số 2 thế giới về Cà phê (Số 1 Cà phê Robusta)",
    lessonTask: "Tây Nguyên (thủ phủ Cà phê Robusta), Đông Nam Bộ (thủ phủ Cao su & Hạt điều Bình Phước).",
    atlatTask: "Mở Atlat trang 19: Xác định các vùng chuyên canh cây công nghiệp lớn nhất cả nước (Tây Nguyên, Đông Nam Bộ).",
    chartTask: "Nhận xét bảng số liệu diện tích và sản lượng cà phê, cao su của nước ta qua các năm.",
    thinkingQuestions: [
      {
        question: "Phân tích những thế mạnh tự nhiên giúp Tây Nguyên trở thành vùng chuyên canh cây cà phê lớn nhất nước ta?",
        answer: "Tây Nguyên có diện tích đất đỏ badan màu mỡ tầng sâu tập trung trên các cao nguyên lượn sóng rộng lớn (cao nguyên Pleiku, Đắk Lắk, Di Linh) thích hợp quy hoạch vùng chuyên canh lớn; khí hậu cận xích đạo nóng ẩm có 2 mùa mưa - khô rõ rệt (mùa khô thuận lợi cho phơi sấy, thu hoạch và ra hoa); nguồn nước ngầm và hệ thống sông Sê San, Srêpôk dồi dào."
      },
      {
        question: "Tại sao Đông Nam Bộ lại là vùng trồng cao su số 1 cả nước?",
        answer: "Đông Nam Bộ có địa hình bán bình nguyên thoải, tầng đất badan và đất xám phù sa cổ tầng dày, thoát nước tốt; khí hậu cận xích đạo hầu như không có bão (cây cao su rất kỵ gió bão dễ bị gãy đổ); có cơ sở hạ tầng giao thông, nhà máy chế biến mủ cao su và cảng biển xuất khẩu hiện đại bậc nhất."
      }
    ],
    miniTest: {
      testTitle: "Mini Test Ngày 14: Cây công nghiệp lâu năm",
      questions: [
        {
          id: "d14-q1",
          question: "Việt Nam hiện giữ vị trí số mấy trên thế giới về sản xuất và xuất khẩu Cà phê Robusta (cà phê vối)?",
          options: ["Số 1 thế giới", "Số 2 thế giới", "Số 5 thế giới", "Số 10 thế giới"],
          correctAnswer: 0,
          explanation: "Việt Nam đứng thứ 2 thế giới về tổng sản lượng cà phê xuất khẩu (sau Brazil) và độc tôn đứng SỐ 1 THẾ GIỚI về cà phê Robusta."
        },
        {
          id: "d14-q2",
          question: "Tỉnh nào được mệnh danh là 'Thủ phủ điều của Việt Nam' chiếm trên 50% diện tích và sản lượng hạt điều cả nước?",
          options: ["Bình Phước", "Đồng Nai", "Đắk Lắk", "Gia Lai"],
          correctAnswer: 0,
          explanation: "Bình Phước là thủ phủ hạt điều số 1 Việt Nam và góp phần đưa Việt Nam giữ vị trí số 1 xuất khẩu nhân điều thế giới suốt 17 năm liền."
        },
        {
          id: "d14-q3",
          question: "Vùng chuyên canh cây cao su lớn nhất nước ta là:",
          options: ["Đông Nam Bộ", "Tây Nguyên", "Bắc Trung Bộ", "Trung du miền núi Bắc Bộ"],
          correctAnswer: 0,
          explanation: "Đông Nam Bộ là vùng chuyên canh cây cao su lớn nhất cả nước nhờ đất đai màu mỡ và khí hậu kín gió ít bão."
        }
      ]
    }
  },
  {
    dayNumber: 15,
    stage: 3,
    title: "Ngày 15: Kinh tế Thủy hải sản - Đánh bắt & Nuôi trồng",
    focus: "Top 3 thế giới xuất khẩu thủy sản; Số 1 về Cá tra/basa; 4 ngư trường trọng điểm",
    lessonTask: "Kim ngạch xuất khẩu thủy sản đạt trên 10-11 tỉ USD/năm; nuôi tôm nước lợ Cà Mau, nuôi cá tra An Giang, Đồng Tháp.",
    atlatTask: "Mở Atlat trang 20 (Thủy sản): Xác định 4 ngư trường trọng điểm và các tỉnh có sản lượng thủy sản nuôi trồng lớn nhất.",
    chartTask: "Phân tích biểu đồ cơ cấu sản lượng thủy sản: Sản lượng nuôi trồng tăng nhanh và đã vượt sản lượng đánh bắt.",
    thinkingQuestions: [
      {
        question: "Tại sao trong cơ cấu ngành thủy sản nước ta, sản lượng nuôi trồng lại tăng nhanh và vượt xa sản lượng đánh bắt?",
        answer: "Nuôi trồng thủy sản chủ động được con giống, thức ăn, mùa vụ và kiểm soát chất lượng đáp ứng các tiêu chuẩn quốc tế khắt khe; trong khi đánh bắt ven bờ ngày càng cạn kiệt, chi phí nhiên liệu đánh bắt xa bờ cao và chịu rủi ro bão gió thiên tai."
      },
      {
        question: "Xác định 4 ngư trường trọng điểm của nước ta và ý nghĩa của việc đánh bắt xa bờ?",
        answer: "4 ngư trường trọng điểm: 1. Hải Phòng - Quảng Ninh (ngư trường vịnh Bắc Bộ); 2. Ninh Thuận - Bình Thuận - Bà Rịa Vũng Tàu; 3. Cà Mau - Kiên Giang (ngư trường vịnh Thái Lan); 4. Quần đảo Hoàng Sa và Trường Sa. Đánh bắt xa bờ giúp khai thác nguồn hải sản đại dương có giá trị cao, đồng thời mỗi con tàu ngư dân là một cột mốc sống khẳng định và bảo vệ chủ quyền biển đảo."
      }
    ],
    miniTest: {
      testTitle: "Mini Test Ngày 15: Kinh tế thủy hải sản",
      questions: [
        {
          id: "d15-q1",
          question: "Việt Nam giữ vị trí số mấy trên thế giới về xuất khẩu cá tra, cá basa?",
          options: ["Số 1 thế giới", "Số 3 thế giới", "Số 5 thế giới", "Số 8 thế giới"],
          correctAnswer: 0,
          explanation: "Việt Nam độc tôn giữ vị trí SỐ 1 THẾ GIỚI về nuôi và xuất khẩu cá tra, cá basa nuôi trên sông Tiền và sông Hậu."
        },
        {
          id: "d15-q2",
          question: "Tỉnh nào sau đây dẫn đầu cả nước về cả diện tích và sản lượng nuôi tôm xuất khẩu?",
          options: ["Cà Mau", "Kiên Giang", "Quảng Ninh", "Bình Định"],
          correctAnswer: 0,
          explanation: "Cà Mau là 'thủ phủ tôm' lớn nhất Việt Nam với các mô hình nuôi tôm sinh thái dưới tán rừng ngập mặn và tôm thâm canh công nghệ cao."
        },
        {
          id: "d15-q3",
          question: "Ngư trường nào sau đây thuộc 4 ngư trường trọng điểm lớn nhất nước ta?",
          options: [
            "Ngư trường quần đảo Hoàng Sa và Trường Sa",
            "Ngư trường sông Hồng",
            "Ngư trường hồ Trị An",
            "Ngư trường hồ Ba Bể"
          ],
          correctAnswer: 0,
          explanation: "Hoàng Sa - Trường Sa là một trong 4 ngư trường biển trọng điểm chiến lược của nước ta."
        }
      ]
    }
  },
  {
    dayNumber: 16,
    stage: 3,
    title: "Ngày 16: Địa lí Công nghiệp Năng lượng - Than đá, Dầu khí, Điện lực",
    focus: "Bể than Quảng Ninh, dầu khí thềm lục địa, thủy điện sông Đà & năng lượng tái tạo",
    lessonTask: "Sản lượng than sạch >45 triệu tấn; khai thác dầu thô thềm lục địa; Thủy điện Sơn La (2.400 MW), Hòa Bình (1.920 MW).",
    atlatTask: "Mở Atlat trang 22 (Năng lượng): Xác định vị trí nhà máy thủy điện Hòa Bình, Sơn La, Lai Châu, Yaly và đường dây 500 kV.",
    chartTask: "Nhận xét biểu đồ cơ cấu nguồn điện phát của nước ta (Thủy điện, Nhiệt điện khí, Nhiệt điện than, Năng lượng tái tạo).",
    thinkingQuestions: [
      {
        question: "Đường dây tải điện siêu cao áp 500 kV Bắc - Nam có ý nghĩa chiến lược như thế nào đối với sự phát triển kinh tế nước ta?",
        answer: "Giúp giải quyết sự mất cân đối về điện năng giữa các miền: Đưa lượng điện dư thừa từ các nhà máy thủy điện lớn ở miền Bắc (Hòa Bình, Sơn La) truyền tải vào miền Nam và miền Trung đang khát điện cho công nghiệp; hình thành hệ thống lưới điện quốc gia thống nhất, vận hành an toàn và tối ưu hóa nguồn điện."
      },
      {
        question: "Tại sao vùng Duyên hải Nam Trung Bộ và Tây Nguyên lại có tiềm năng vượt trội để phát triển điện mặt trời và điện gió?",
        answer: "Vùng này có số giờ nắng cao kỷ lục (>2.500 - 3.000 giờ/năm), cường độ bức xạ nhiệt mặt trời rất lớn; dải ven biển và các đồi cao lộng gió quanh năm với tốc độ gió ổn định (>6-8 m/s), diện tích đất đồi cằn cỗi rộng lớn thuận tiện cho việc xây dựng các trang trại phong điện và quang điện."
      }
    ],
    miniTest: {
      testTitle: "Mini Test Ngày 16: Công nghiệp năng lượng",
      questions: [
        {
          id: "d16-q1",
          question: "Bể than đá lớn nhất nước ta chiếm trên 90% trữ lượng than cả nước nằm ở tỉnh/thành nào?",
          options: ["Quảng Ninh", "Thái Nguyên", "Lạng Sơn", "Nghệ An"],
          correctAnswer: 0,
          explanation: "Quảng Ninh sở hữu bể than đá lớn và chất lượng tốt nhất Đông Nam Á (Cẩm Phả, Uông Bí, Hòn Gai, Mạo Khê)."
        },
        {
          id: "d16-q2",
          question: "Nhà máy thủy điện có công suất lớn nhất Việt Nam và khu vực Đông Nam Á hiện nay là:",
          options: ["Thủy điện Sơn La (2.400 MW)", "Thủy điện Hòa Bình (1.920 MW)", "Thủy điện Lai Châu", "Thủy điện Yaly"],
          correctAnswer: 0,
          explanation: "Nhà máy Thủy điện Sơn La trên sông Đà có công suất 2.400 MW, lớn nhất Đông Nam Á."
        },
        {
          id: "d16-q3",
          question: "Các mỏ dầu khí lớn đang được khai thác của nước ta phân bố chủ yếu ở đâu?",
          options: [
            "Thềm lục địa phía Nam (bồn trũng Cửu Long, Nam Côn Sơn)",
            "Đồng bằng sông Hồng",
            "Vịnh Bắc Bộ",
            "Đồng bằng sông Cửu Long đất liền"
          ],
          correctAnswer: 0,
          explanation: "Dầu khí nước ta khai thác chủ yếu ở thềm lục địa phía Nam với các mỏ lớn: Bạch Hổ, Rạng Đông, Đại Hùng, Lan Tây, Lan Đỏ."
        }
      ]
    }
  },
  {
    dayNumber: 17,
    stage: 3,
    title: "Ngày 17: Công nghiệp Chế biến - Chế tạo & Công nghệ cao",
    focus: "Điện tử viễn thông, bán dẫn (Bắc Ninh, Thái Nguyên, TP.HCM), dệt may & lắp ráp ô tô",
    lessonTask: "Sự bứt phá của ngành điện tử trở thành mặt hàng xuất khẩu số 1 (>110 tỉ USD); thu hút các tập đoàn bán dẫn toàn cầu.",
    atlatTask: "Mở Atlat trang 21 (Công nghiệp chung): Tra cứu 2 trung tâm công nghiệp quy mô rất lớn (Hà Nội, TP.HCM) và các trung tâm lớn.",
    chartTask: "Phân tích cơ cấu giá trị sản xuất công nghiệp theo nhóm ngành: Chế biến chế tạo chiếm tỉ trọng áp đảo (>80%).",
    thinkingQuestions: [
      {
        question: "Vì sao ngành công nghiệp điện tử và sản xuất linh kiện vi mạch lại tăng trưởng thần tốc ở Việt Nam trong thập kỷ qua?",
        answer: "Nhờ môi trường chính trị ổn định, chính sách ưu đãi thuế và thu hút FDI thông thoáng; lực lượng lao động trẻ, đông đảo, khéo tay và có khả năng tiếp thu công nghệ nhanh; vị trí địa lý thuận lợi nằm trong chuỗi cung ứng châu Á và gần thị trường nguyên phụ liệu Trung Quốc."
      },
      {
        question: "Phân biệt vai trò của ngành công nghiệp trọng điểm đối với nền kinh tế quốc dân?",
        answer: "Ngành công nghiệp trọng điểm là ngành có thế mạnh lâu dài về tài nguyên hoặc lao động; mang lại hiệu quả kinh tế cao về doanh thu và ngoại tệ; có tác động lan tỏa mạnh mẽ thúc đẩy các ngành kinh tế khác cùng phát triển (ví dụ: Chế biến thực phẩm, Điện tử, Năng lượng, Dệt may)."
      }
    ],
    miniTest: {
      testTitle: "Mini Test Ngày 17: Chế biến chế tạo & Công nghệ cao",
      questions: [
        {
          id: "d17-q1",
          question: "Hai trung tâm công nghiệp có quy mô rất lớn (trên 120 nghìn tỉ đồng) ở nước ta là:",
          options: ["Hà Nội và TP. Hồ Chí Minh", "Hải Phòng và Đà Nẵng", "Cần Thơ và Biên Hòa", "Bắc Ninh và Vũng Tàu"],
          correctAnswer: 0,
          explanation: "TP. Hồ Chí Minh và Hà Nội là hai trung tâm công nghiệp có quy mô rất lớn dẫn đầu hai đầu đất nước."
        },
        {
          id: "d17-q2",
          question: "Mặt hàng nào hiện nay đứng đầu về kim ngạch xuất khẩu của nước ta?",
          options: [
            "Điện thoại, máy tính và linh kiện điện tử",
            "Gạo và cà phê",
            "Dầu thô",
            "Cao su thiên nhiên"
          ],
          correctAnswer: 0,
          explanation: "Nhóm hàng điện tử, máy tính và linh kiện điện thoại là mặt hàng xuất khẩu số 1 với kim ngạch vượt 110 tỉ USD/năm."
        },
        {
          id: "d17-q3",
          question: "Đặc điểm nào sau đây KHÔNG PHẢI là đặc trưng của một ngành công nghiệp trọng điểm?",
          options: [
            "Phải sử dụng 100% nguyên liệu nhập khẩu từ nước ngoài",
            "Có thế mạnh lâu dài về tài nguyên hoặc lao động",
            "Mang lại hiệu quả kinh tế cao",
            "Tác động thúc đẩy các ngành khác cùng phát triển"
          ],
          correctAnswer: 0,
          explanation: "Ngành công nghiệp trọng điểm thường dựa trên thế mạnh tài nguyên tự nhiên sẵn có hoặc nguồn lao động dồi dào trong nước."
        }
      ]
    }
  },
  {
    dayNumber: 18,
    stage: 3,
    title: "Ngày 18: Địa lí Dịch vụ - Giao thông Vận tải & Thương mại Logistics",
    focus: "Mạng lưới đường cao tốc Bắc - Nam, đường sắt, cảng biển nước sâu và hàng không quốc tế",
    lessonTask: "Trục đường bộ xương sống QL 1A và cao tốc Bắc - Nam; Cảng Cái Mép - Thị Vải & Lạch Huyện; Sân bay Nội Bài, Long Thành, Tân Sơn Nhất.",
    atlatTask: "Mở Atlat trang 23 (Giao thông): Nhận xét các tuyến quốc lộ hướng tâm (Hà Nội) và các tuyến hành lang Đông - Tây.",
    chartTask: "Phân tích biểu đồ cơ cấu khối lượng vận chuyển hàng hóa và hành khách phân theo loại hình vận tải.",
    thinkingQuestions: [
      {
        question: "Tuyến đường bộ cao tốc Bắc - Nam phía Đông khi hoàn thành toàn tuyến sẽ tạo ra bước đột phá kinh tế như thế nào?",
        answer: "Rút ngắn thời gian vận chuyển hàng hóa và hành khách xuống còn một nửa; giảm chi phí logistics giúp hàng hóa Việt Nam cạnh tranh hơn trên thị trường quốc tế; kết nối thông suốt các khu kinh tế, cảng biển, sân bay lớn dọc dải đất miền Trung; thúc đẩy giao lưu văn hóa và thu hút dòng vốn đầu tư liên vùng."
      },
      {
        question: "Cụm cảng nước sâu Cái Mép - Thị Vải (Bà Rịa - Vũng Tàu) có lợi thế vượt trội gì so với các cảng biển truyền thống trước đây?",
        answer: "Có luồng lạch sâu tự nhiên (>14m) và vị trí sát tuyến hàng hải quốc tế, đón được các 'tàu mẹ' container sức chở siêu trường siêu trọng trên 200.000 tấn đi thẳng sang bờ Tây nước Mỹ và châu Âu mà không phải trung chuyển qua Singapore hay Hong Kong, tiết kiệm hàng triệu USD chi phí và thời gian giao hàng."
      }
    ],
    miniTest: {
      testTitle: "Mini Test Ngày 18: Giao thông & Dịch vụ logistics",
      questions: [
        {
          id: "d18-q1",
          question: "Tuyến đường sắt dài nhất nước ta nối liền hai thành phố Hà Nội và TP. Hồ Chí Minh là:",
          options: ["Đường sắt Thống Nhất (Bắc - Nam)", "Đường sắt Hà Nội - Hải Phòng", "Đường sắt Hà Nội - Lào Cai", "Đường sắt Hà Nội - Đồng Đăng"],
          correctAnswer: 0,
          explanation: "Tuyến đường sắt Thống Nhất dài 1.726 km chạy dọc chiều dài đất nước là tuyến đường sắt xương sống."
        },
        {
          id: "d18-q2",
          question: "Cụm cảng biển nước sâu nào ở miền Bắc đón được tàu container siêu trọng tải đi thẳng sang châu Âu và châu Mỹ?",
          options: ["Cảng quốc tế Lạch Huyện (Hải Phòng)", "Cảng Cái Lân", "Cảng Cửa Lò", "Cảng Nghi Sơn"],
          correctAnswer: 0,
          explanation: "Cảng cửa ngõ quốc tế Lạch Huyện (Hải Phòng) là cảng nước sâu hiện đại nhất miền Bắc đón tàu mẹ trọng tải lớn."
        },
        {
          id: "d18-q3",
          question: "Loại hình giao thông vận tải nào chiếm tỉ trọng lớn nhất về khối lượng vận chuyển hàng hóa nội địa ở nước ta?",
          options: ["Đường bộ (đường ô tô)", "Đường hàng không", "Đường sắt", "Đường ống"],
          correctAnswer: 0,
          explanation: "Đường bộ chiếm trên 75% khối lượng hàng hóa vận chuyển nội địa nhờ tính cơ động và khả năng giao nhận tận nơi."
        }
      ]
    }
  },

  // =========================================================================
  // GIAI ĐOẠN 4: ĐỊA LÍ CÁC VÙNG KINH TẾ (NGÀY 19 - NGÀY 26)
  // =========================================================================
  {
    dayNumber: 19,
    stage: 4,
    title: "Ngày 19: Vùng Trung du và Miền núi Bắc Bộ - Thế mạnh khai khoáng & Thủy điện",
    focus: "Diện tích lớn nhất, giàu tài nguyên khoáng sản, thủy điện sông Đà & cây công nghiệp cận nhiệt",
    lessonTask: "Tiểu vùng Đông Bắc (khoáng sản than đá, du lịch vịnh Hạ Long); Tiểu vùng Tây Bắc (thủy điện Sơn La, Hòa Bình, chăn nuôi gia súc lớn).",
    atlatTask: "Mở Atlat trang 26 (TDMN Bắc Bộ): Xác định các mỏ than, sắt, bauxite, thiếc, apatit và nhà máy thủy điện.",
    chartTask: "Nhận xét bảng số liệu diện tích và sản lượng chè búp của vùng so với cả nước (chiếm >60% diện tích chè cả nước).",
    thinkingQuestions: [
      {
        question: "Tại sao vùng Trung du và Miền núi Bắc Bộ có thế mạnh vượt trội về phát triển cây công nghiệp có nguồn gốc cận nhiệt và ôn đới (như chè, mận, đào, lê, dược liệu)?",
        answer: "Vùng có mùa đông lạnh nhất cả nước do chịu ảnh hưởng trực tiếp của gió mùa Đông Bắc; địa hình núi cao hiểm trở phân hóa theo độ cao (Hoàng Liên Sơn, Sa Pa, Mẫu Sơn) tạo nên các đai khí hậu cận nhiệt đới và ôn đới trên núi cao mát mẻ quanh năm, rất phù hợp cho sinh trưởng của cây trồng ôn đới."
      },
      {
        question: "Phân tích những khó khăn lớn nhất về mặt tự nhiên đối với đời sống và sản xuất của nhân dân vùng TDMN Bắc Bộ?",
        answer: "Địa hình hiểm trở chia cắt mạnh gây khó khăn cho giao thông đi lại; mùa mưa thường xuyên xảy ra lũ quét, sạt lở đất nghiêm trọng; mùa đông rét hại, sương muối, băng giá làm chết gia súc và cây trồng; mùa khô gây thiếu nước ngọt cục bộ ở các cao nguyên đá vôi."
      }
    ],
    miniTest: {
      testTitle: "Mini Test Ngày 19: Trung du và Miền núi Bắc Bộ",
      questions: [
        {
          id: "d19-q1",
          question: "Cây công nghiệp lâu năm được trồng nhiều nhất ở vùng Trung du và Miền núi Bắc Bộ là:",
          options: ["Cây chè", "Cây cà phê", "Cây cao su", "Cây hồ tiêu"],
          correctAnswer: 0,
          explanation: "Cây chè búp là cây công nghiệp chủ lực số 1 của TDMN Bắc Bộ với các vùng chè danh tiếng: Tân Cương (Thái Nguyên), Mộc Châu (Sơn La), Yên Bái."
        },
        {
          id: "d19-q2",
          question: "Vùng Trung du và Miền núi Bắc Bộ đứng đầu cả nước về tiềm năng của ngành công nghiệp nào?",
          options: ["Thủy điện và khai thác khoáng sản", "Nuôi tôm nước lợ", "Lọc hóa dầu", "Sản xuất lúa gạo"],
          correctAnswer: 0,
          explanation: "TDMN Bắc Bộ giàu khoáng sản nhất cả nước và chiếm hơn 1/3 trữ năng thủy điện toàn quốc (sông Đà, sông Lô, sông Gâm)."
        },
        {
          id: "d19-q3",
          question: "Mỏ Apatit lớn nhất cả nước phục vụ sản xuất phân bón nằm ở tỉnh nào?",
          options: ["Lào Cai", "Quảng Ninh", "Hà Giang", "Thái Nguyên"],
          correctAnswer: 0,
          explanation: "Mỏ Apatit Cam Đường (Lào Cai) là mỏ apatit lớn nhất cả nước phục vụ sản xuất phân lân."
        }
      ]
    }
  },
  {
    dayNumber: 20,
    stage: 4,
    title: "Ngày 20: Đồng bằng sông Hồng - Nông nghiệp thâm canh & Vùng kinh tế trọng điểm",
    focus: "Mật độ dân số cao nhất, lao động dồi dào, thâm canh vụ đông & cực tăng trưởng Hà Nội - Hải Phòng - Quảng Ninh",
    lessonTask: "Diện tích ~15.000 km²; cơ sở hạ tầng phát triển; tam giác kinh tế động lực phía Bắc bứt phá công nghiệp công nghệ cao.",
    atlatTask: "Mở Atlat trang 26: Xác định các tuyến giao thông huyết mạch tỏa ra từ Thủ đô Hà Nội.",
    chartTask: "Xử lý bảng số liệu năng suất lúa và giá trị sản xuất cây vụ đông của Đồng bằng sông Hồng.",
    thinkingQuestions: [
      {
        question: "Tại sao vụ đông đã trở thành vụ sản xuất chính đem lại hiệu quả kinh tế cao ở Đồng bằng sông Hồng?",
        answer: "Đồng bằng sông Hồng có mùa đông lạnh từ tháng 11 đến tháng 4 năm sau nhờ gió mùa Đông Bắc, cho phép trồng các loại rau quả cận nhiệt và ôn đới (bắp cải, su hào, cà chua, khoai tây, cà rốt, hành tỏi) có giá trị kinh tế và nhu cầu tiêu thụ lớn, giúp nông dân tăng vụ quay vòng đất và thu nhập."
      },
      {
        question: "Phân tích vai trò hạt nhân của Thủ đô Hà Nội trong Vùng kinh tế trọng điểm phía Bắc?",
        answer: "Hà Nội là đầu não chính trị, trung tâm văn hóa, khoa học kỹ thuật, tài chính và dịch vụ chất lượng cao lớn nhất miền Bắc; là đầu mối giao thông kết nối các tỉnh trong vùng; trung tâm đổi mới sáng tạo, thu hút nhân tài và chuyển giao công nghệ cho toàn vùng."
      }
    ],
    miniTest: {
      testTitle: "Mini Test Ngày 20: Đồng bằng sông Hồng",
      questions: [
        {
          id: "d20-q1",
          question: "Vụ sản xuất rau màu cận nhiệt và ôn đới đặc trưng của Đồng bằng sông Hồng là vụ nào?",
          options: ["Vụ đông", "Vụ hè thu", "Vụ mùa", "Vụ chiêm"],
          correctAnswer: 0,
          explanation: "Vụ đông diễn ra trong mùa đông lạnh từ tháng 10 đến tháng 2 năm sau là nét độc đáo riêng có của nông nghiệp ĐBSH."
        },
        {
          id: "d20-q2",
          question: "Tam giác tăng trưởng kinh tế trọng điểm phía Bắc gồm 3 địa phương hạt nhân nào?",
          options: [
            "Hà Nội - Hải Phòng - Quảng Ninh",
            "Hà Nội - Bắc Ninh - Thái Nguyên",
            "Hải Phòng - Nam Định - Ninh Bình",
            "Hà Nội - Vĩnh Phúc - Phú Thọ"
          ],
          correctAnswer: 0,
          explanation: "Hà Nội - Hải Phòng - Quảng Ninh tạo thành tam giác tăng trưởng kinh tế then chốt chi phối phía Bắc."
        },
        {
          id: "d20-q3",
          question: "Khó khăn lớn nhất về mặt dân cư - xã hội ở Đồng bằng sông Hồng hiện nay là:",
          options: [
            "Mật độ dân số quá cao gây sức ép lên việc làm và môi trường",
            "Thiếu nguồn lao động phổ thông",
            "Dân cư phân bố quá thưa thớt",
            "Tỉ lệ biết chữ của dân cư còn thấp"
          ],
          correctAnswer: 0,
          explanation: "Mật độ dân số trên 1.080 người/km² (gấp 3,5 lần mức bình quân cả nước) tạo áp lực cực lớn lên đất đai, nhà ở, việc làm và môi trường."
        }
      ]
    }
  },
  {
    dayNumber: 21,
    stage: 4,
    title: "Ngày 21: Bắc Trung Bộ - Khắc phục thiên tai & Phát triển kinh tế biển",
    focus: "Dải đất hẹp ngang, chịu gió phơn Tây Nam & bão lũ; KKT Nghi Sơn, Vũng Áng, di sản văn hóa miền Trung",
    lessonTask: "Sự phân hóa Đông - Tây rõ rệt: Vùng núi (lâm nghiệp) -> Gò đồi (cây ăn quả, chăn nuôi) -> Đồng bằng (lúa) -> Ven biển (kinh tế biển).",
    atlatTask: "Mở Atlat trang 27 (Bắc Trung Bộ): Xác định các cảng nước sâu (Nghi Sơn, Vũng Áng, Cửa Lò, Chân Mây) và các vườn quốc gia.",
    chartTask: "Phân tích biểu đồ tần suất bão đổ bộ vào duyên hải miền Trung qua các tháng.",
    thinkingQuestions: [
      {
        question: "Tại sao công tác trồng rừng phòng hộ ven biển (rừng phi lao, rừng ngập mặn) ở Bắc Trung Bộ lại có ý nghĩa sống còn?",
        answer: "Vùng ven biển Bắc Trung Bộ có dải cồn cát trắng trải dài, vào mùa gió mùa Đông Bắc và mùa hè gió phơn Tây Nam thổi mạnh gây ra hiện tượng cát bay, cát chảy lấn chiếm đồng ruộng và làng mạc ven bờ; trồng rừng chắn gió chắn cát giúp bảo vệ đất nông nghiệp, hạn chế tác hại triều cường và bão biển."
      },
      {
        question: "Phân tích ý nghĩa của các cảng nước sâu Nghi Sơn (Thanh Hóa) và Vũng Áng (Hà Tĩnh) đối với phát triển công nghiệp Bắc Trung Bộ?",
        answer: "Hai cảng nước sâu này đón được các tàu trọng tải lớn hàng trăm nghìn tấn, là điều kiện tiên quyết hình thành các tổ hợp công nghiệp nặng quy mô khổng lồ: Nhà máy Lọc hóa dầu Nghi Sơn và Khu liên hợp gang thép Vũng Áng; đồng thời là cửa ngõ ra biển ngắn nhất kết nối nước bạn Lào và vùng Đông Bắc Thái Lan."
      }
    ],
    miniTest: {
      testTitle: "Mini Test Ngày 21: Bắc Trung Bộ",
      questions: [
        {
          id: "d21-q1",
          question: "Nơi bề ngang lãnh thổ đất liền hẹp nhất nước ta (chỉ khoảng 50 km) thuộc tỉnh nào?",
          options: ["Quảng Bình", "Quảng Trị", "Hà Tĩnh", "Thừa Thiên Huế"],
          correctAnswer: 0,
          explanation: "Quảng Bình là nơi có bề ngang đất liền hẹp nhất cả nước (tính từ biên giới Lào đến bờ Biển Đông chưa đầy 50 km)."
        },
        {
          id: "d21-q2",
          question: "Nhà máy Lọc hóa dầu Nghi Sơn với công suất 10 triệu tấn dầu thô/năm nằm ở tỉnh nào?",
          options: ["Thanh Hóa", "Hà Tĩnh", "Nghệ An", "Quảng Trị"],
          correctAnswer: 0,
          explanation: "Khu kinh tế Nghi Sơn và Nhà máy Lọc hóa dầu Nghi Sơn nằm tại thị xã Nghi Sơn, tỉnh Thanh Hóa."
        },
        {
          id: "d21-q3",
          question: "Loại thiên tai nào thường xuyên gây thiệt hại nặng nề cho sản xuất nông nghiệp Bắc Trung Bộ vào đầu mùa hạ?",
          options: ["Gió phơn Tây Nam khô nóng (gió Lào)", "Sương muối và băng giá", "Động đất mạnh", "Tuyết rơi dày"],
          correctAnswer: 0,
          explanation: "Gió phơn Tây Nam khô nóng vào đầu mùa hạ gây hạn hán nghiêm trọng và nguy cơ cháy rừng cao ở Bắc Trung Bộ."
        }
      ]
    }
  },
  {
    dayNumber: 22,
    stage: 4,
    title: "Ngày 22: Duyên hải Nam Trung Bộ - Thế mạnh kinh tế biển tổng hợp",
    focus: "Đường bờ biển dài, ngư trường lớn, muối Cà Ná, du lịch Nha Trang, KKT mở Chu Lai & Dung Quất",
    lessonTask: "Sản xuất muối (nắng nhiều, nhiệt độ cao, ít mưa); nuôi trồng và đánh bắt thủy hải sản xa bờ; du lịch biển đảo cao cấp.",
    atlatTask: "Mở Atlat trang 28 (Duyên hải NTB): Xác định vị trí nhà máy lọc dầu Dung Quất, cảng Cam Ranh, Quy Nhơn và huyện đảo Lý Sơn.",
    chartTask: "Nhận xét biểu đồ sản lượng thủy sản khai thác và nuôi trồng của Duyên hải Nam Trung Bộ so với các vùng khác.",
    thinkingQuestions: [
      {
        question: "Vì sao Duyên hải Nam Trung Bộ lại là vùng sản xuất muối biển lớn và thuận lợi nhất nước ta (như muối Cà Ná, Sa Huỳnh)?",
        answer: "Vùng này có số ngày nắng trong năm rất cao, nhiệt độ trung bình cao, độ ẩm không khí thấp; lượng mưa trung bình năm thấp nhất cả nước (đặc biệt Ninh Thuận - Bình Thuận); có ít con sông lớn đổ ra biển nên nước biển có độ mặn cao, bờ biển có nhiều bãi cát phẳng thuận tiện làm ruộng muối."
      },
      {
        question: "Phân tích ý nghĩa của việc phát triển kinh tế biển tổng hợp ở Duyên hải Nam Trung Bộ?",
        answer: "Giúp khai thác tối đa 4 ngành kinh tế biển: 1. Đánh bắt và chế biến thủy sản xa bờ (cá ngừ đại dương); 2. Du lịch biển đảo (Nha Trang, Quy Nhơn, Mỹ Khê); 3. Cảng biển và logistics nước sâu (Cam Ranh, Chu Lai, Dung Quất); 4. Khai thác khoáng sản biển (muối, cát thủy tinh, titan). Thúc đẩy chuyển dịch cơ cấu kinh tế và bảo vệ chủ quyền biển đảo."
      }
    ],
    miniTest: {
      testTitle: "Mini Test Ngày 22: Duyên hải Nam Trung Bộ",
      questions: [
        {
          id: "d22-q1",
          question: "Nhà máy lọc dầu đầu tiên của Việt Nam đặt tại địa điểm nào thuộc Duyên hải Nam Trung Bộ?",
          options: ["Dung Quất (Quảng Ngãi)", "Nghi Sơn (Thanh Hóa)", "Cát Lái (TP.HCM)", "Long Sơn (Bà Rịa Vũng Tàu)"],
          correctAnswer: 0,
          explanation: "Nhà máy Lọc dầu Dung Quất (Quảng Ngãi) là nhà máy lọc dầu đầu tiên của nước ta khánh thành năm 2009."
        },
        {
          id: "d22-q2",
          question: "Cánh đồng muối Cà Ná nổi tiếng nhất nước ta nằm ở tỉnh nào?",
          options: ["Ninh Thuận", "Bình Định", "Quảng Nam", "Phú Yên"],
          correctAnswer: 0,
          explanation: "Muối Cà Ná thuộc tỉnh Ninh Thuận - nơi có khí hậu khô nóng nhất cả nước với sản lượng muối sạch chất lượng cao."
        },
        {
          id: "d22-q3",
          question: "Đặc sản kinh tế biển độc đáo chỉ có ở các vách đá đảo yến Duyên hải Nam Trung Bộ là:",
          options: ["Tổ yến sào tự nhiên", "Ngọc trai đen", "Tảo xoắn Spirulina", "San hô đỏ"],
          correctAnswer: 0,
          explanation: "Yến sào Khánh Hòa, Bình Định khai thác từ các hang đảo yến tự nhiên là đặc sản có giá trị kinh tế xuất khẩu rất cao."
        }
      ]
    }
  },
  {
    dayNumber: 23,
    stage: 4,
    title: "Ngày 23: Tây Nguyên - Vùng chuyên canh cây công nghiệp & Thủy năng dồi dào",
    focus: "Cao nguyên đất đỏ badan, cà phê Robusta, hồ tiêu, bauxite, bậc thang thủy điện Sê San & Srêpôk",
    lessonTask: "Vùng duy nhất không giáp biển; thủ phủ cà phê Buôn Ma Thuột; văn hóa cồng chiêng di sản thế giới.",
    atlatTask: "Mở Atlat trang 28: Xác định các cao nguyên badan xếp tầng (Kon Tum, Pleiku, Đắk Lắk, Mơ Nông, Di Linh, Lâm Viên).",
    chartTask: "Phân tích biểu đồ tròn tỉ trọng sản lượng cà phê của Tây Nguyên chiếm hơn 90% sản lượng cà phê cả nước.",
    thinkingQuestions: [
      {
        question: "Mùa khô kéo dài 4 - 5 tháng ở Tây Nguyên gây ra những hậu quả nghiêm trọng gì cho sản xuất và sinh hoạt?",
        answer: "Mực nước ngầm bị tụt sâu nghiêm trọng, hàng trăm nghìn héc-ta cà phê và hồ tiêu bị khô héo, thiếu nước tưới; nguy cơ cháy rừng ở mức báo động đỏ; thiếu nước sinh hoạt cho đồng bào các buôn làng, đòi hỏi phải đầu tư các công trình hồ đập thủy lợi điều tiết nước."
      },
      {
        question: "Phát triển công nghiệp khai thác và chế biến quặng bauxite ở Tây Nguyên (Đắk Nông, Lâm Đồng) cần chú ý vấn đề gì?",
        answer: "Phải giải quyết triệt để nguy cơ ô nhiễm môi trường do bùn đỏ độc hại gây ra; bảo vệ nguồn nước đầu nguồn của các hệ thống sông Đồng Nai và Srêpôk; bảo tồn diện tích rừng tự nhiên và giữ gìn không gian sinh tồn văn hóa của đồng bào các dân tộc Tây Nguyên."
      }
    ],
    miniTest: {
      testTitle: "Mini Test Ngày 23: Tây Nguyên",
      questions: [
        {
          id: "d23-q1",
          question: "Vùng duy nhất của nước ta hoàn toàn không có đường bờ biển tiếp giáp với biển Đông là:",
          options: ["Tây Nguyên", "Trung du miền núi Bắc Bộ", "Tây Bắc", "Đông Bắc Bộ"],
          correctAnswer: 0,
          explanation: "Tây Nguyên là vùng kinh tế duy nhất của nước ta hoàn toàn nằm ở nội địa, không có đường bờ biển."
        },
        {
          id: "d23-q2",
          question: "Khoáng sản kim loại có trữ lượng lớn nhất của Tây Nguyên chiếm phần lớn trữ lượng cả nước là:",
          options: ["Quặng Bauxite (nhôm)", "Quặng Than đá", "Quặng Dầu mỏ", "Quặng Apatit"],
          correctAnswer: 0,
          explanation: "Tây Nguyên sở hữu trữ lượng quặng bauxite khổng lồ (hàng tỉ tấn) tập trung tại Đắk Nông và Lâm Đồng."
        },
        {
          id: "d23-q3",
          question: "Thành phố nào ở Tây Nguyên được mệnh danh là 'Thành phố cà phê của thế giới'?",
          options: ["Buôn Ma Thuột (Đắk Lắk)", "Pleiku (Gia Lai)", "Đà Lạt (Lâm Đồng)", "Kon Tum"],
          correctAnswer: 0,
          explanation: "Buôn Ma Thuột là thủ phủ cà phê Robusta nức tiếng toàn cầu, định kỳ tổ chức Lễ hội Cà phê Quốc tế."
        }
      ]
    }
  },
  {
    dayNumber: 24,
    stage: 4,
    title: "Ngày 24: Đông Nam Bộ - Đầu tàu kinh tế & Công nghiệp năng động nhất cả nước",
    focus: "Dẫn đầu GDP (>30%), thủ phủ công nghiệp, dầu khí, siêu sân bay Long Thành & cụm cảng Cái Mép",
    lessonTask: "TP. Hồ Chí Minh đô thị đặc biệt; Đồng Nai và Bình Dương thủ phủ công nghiệp; Bà Rịa Vũng Tàu dầu khí & cảng biển.",
    atlatTask: "Mở Atlat trang 29 (Đông Nam Bộ): Xác định các khu công nghiệp, mỏ dầu khí thềm lục địa và tuyến đường ống dẫn khí.",
    chartTask: "Nhận xét biểu đồ cơ cấu kinh tế Đông Nam Bộ: Công nghiệp - xây dựng và Dịch vụ chiếm hơn 95% GRDP.",
    thinkingQuestions: [
      {
        question: "Những nhân tố kinh tế - xã hội nào đã đưa Đông Nam Bộ trở thành vùng kinh tế phát triển năng động nhất cả nước?",
        answer: "Vùng có lực lượng lao động dồi dào, tỉ lệ lao động qua đào tạo và tay nghề cao nhất nước; cơ sở hạ tầng giao thông đa phương thức hiện đại nhất (sân bay Long Thành, cảng Cái Mép, mạng lưới cao tốc); thu hút vốn FDI và vốn đầu tư trong nước dẫn đầu cả nước; có đầu tàu TP.HCM là trung tâm tài chính, thương mại và đổi mới sáng tạo lớn nhất."
      },
      {
        question: "Vấn đề bảo vệ môi trường và giải quyết quá tải hạ tầng ở Đông Nam Bộ đang đặt ra những yêu cầu cấp bách nào?",
        answer: "Cần di dời các cơ sở công nghiệp gây ô nhiễm ra khỏi lõi đô thị; xây dựng các tuyến đường vành đai (Vành đai 3, Vành đai 4) và đường sắt đô thị (Metro) để giảm ùn tắc giao thông; kiểm soát nước thải công nghiệp đổ ra sông Đồng Nai và sông Sài Gòn; phát triển các khu công nghiệp sinh thái và công trình xanh."
      }
    ],
    miniTest: {
      testTitle: "Mini Test Ngày 24: Đông Nam Bộ",
      questions: [
        {
          id: "d24-q1",
          question: "Vùng kinh tế dẫn đầu cả nước về quy mô GDP, kim ngạch xuất khẩu và thu hút vốn FDI là:",
          options: ["Đông Nam Bộ", "Đồng bằng sông Hồng", "Đồng bằng sông Cửu Long", "Duyên hải Nam Trung Bộ"],
          correctAnswer: 0,
          explanation: "Đông Nam Bộ là đầu tàu kinh tế số 1 cả nước, đóng góp hơn 30% GDP và gần 40% ngân sách quốc gia."
        },
        {
          id: "d24-q2",
          question: "Siêu cảng hàng không quốc tế Long Thành với công suất thiết kế 100 triệu hành khách/năm nằm ở tỉnh nào?",
          options: ["Đồng Nai", "Bình Dương", "Bà Rịa Vũng Tàu", "Tây Ninh"],
          correctAnswer: 0,
          explanation: "Sân bay quốc tế Long Thành được xây dựng tại huyện Long Thành, tỉnh Đồng Nai."
        },
        {
          id: "d24-q3",
          question: "Cây công nghiệp lâu năm có diện tích lớn nhất ở Đông Nam Bộ là:",
          options: ["Cây cao su", "Cây chè", "Cây bông vải", "Cây dừa"],
          correctAnswer: 0,
          explanation: "Đông Nam Bộ là cái nôi của ngành cao su Việt Nam với diện tích và sản lượng cao su đứng đầu cả nước."
        }
      ]
    }
  },
  {
    dayNumber: 25,
    stage: 4,
    title: "Ngày 25: Đồng bằng sông Cửu Long - Vựa lương thực, Thủy sản & Trái cây số 1",
    focus: "Mạng lưới sông ngòi kênh rạch, vựa lúa xuất khẩu, nuôi tôm cá tra & thích ứng xâm nhập mặn",
    lessonTask: "Sản xuất >50% lúa, >90% gạo xuất khẩu, >65% thủy sản cả nước; TP. Cần Thơ trung tâm vùng.",
    atlatTask: "Mở Atlat trang 30 (ĐBSCL): Xác định các vùng đất phù sa ngọt ven sông Tiền, sông Hậu và vùng đất ngập phèn.",
    chartTask: "Phân tích biểu đồ sản lượng lúa và thủy sản nuôi trồng của ĐBSCL qua các năm.",
    thinkingQuestions: [
      {
        question: "Biến đổi khí hậu và hiện tượng xâm nhập mặn trong mùa khô tác động tiêu cực như thế nào đến sản xuất nông nghiệp ở ĐBSCL?",
        answer: "Mực nước biển dâng kết hợp với lưu lượng nước ngọt từ thượng nguồn Mê Kông sụt giảm (do các đập thủy điện thượng nguồn tích nước) khiến nước mặn lấn sâu 50 - 70 km vào nội đồng; làm hư hỏng hàng chục nghìn héc-ta lúa, sầu riêng và cây ăn quả; gây thiếu nước sinh hoạt nghiêm trọng cho người dân các tỉnh ven biển (Bến Tre, Tiền Giang, Sóc Trăng, Cà Mau)."
      },
      {
        question: "Phương châm 'Thuận thiên' trong Nghị quyết 120/NQ-CP của Chính phủ định hướng chuyển đổi nông nghiệp ĐBSCL ra sao?",
        answer: "Thay vì can thiệp thô bạo ngăn mặn giữ ngọt khắp nơi, vùng chuyển hướng thích ứng thông minh: Phân chia 3 vùng sinh thái (vùng ngọt, vùng lợ, vùng mặn); chuyển đổi các diện tích lúa kém hiệu quả ở vùng ven biển sang mô hình 'Lúa - Tôm' sinh thái hoặc nuôi thủy hải sản nước lợ mặn cho giá trị kinh tế cao hơn."
      }
    ],
    miniTest: {
      testTitle: "Mini Test Ngày 25: Đồng bằng sông Cửu Long",
      questions: [
        {
          id: "d25-q1",
          question: "Đồng bằng sông Cửu Long đóng góp khoảng bao nhiêu phần trăm tổng sản lượng lúa gạo xuất khẩu của cả nước?",
          options: ["Trên 90%", "Khoảng 50%", "Khoảng 30%", "Khoảng 70%"],
          correctAnswer: 0,
          explanation: "ĐBSCL đóng góp trên 90% sản lượng gạo xuất khẩu của cả nước ra thị trường quốc tế."
        },
        {
          id: "d25-q2",
          question: "Thành phố trực thuộc Trung ương được mệnh danh là 'Tây Đô' - trái tim kinh tế của ĐBSCL là:",
          options: ["Thành phố Cần Thơ", "Thành phố Mỹ Tho", "Thành phố Long Xuyên", "Thành phố Rạch Giá"],
          correctAnswer: 0,
          explanation: "Cần Thơ là đô thị loại I trực thuộc Trung ương, trung tâm kinh tế, giáo dục, y tế của toàn vùng ĐBSCL."
        },
        {
          id: "d25-q3",
          question: "Vấn đề tự nhiên nan giải nhất vào mùa khô ở các tỉnh ven biển Đồng bằng sông Cửu Long là:",
          options: ["Xâm nhập mặn và thiếu nước ngọt", "Lũ quét và sạt lở núi", "Bão tuyết và rét đậm", "Núi lửa phun trào"],
          correctAnswer: 0,
          explanation: "Xâm nhập mặn sâu vào nội đồng và hạn hán thiếu nước ngọt là thách thức lớn nhất vào mùa khô ở ĐBSCL."
        }
      ]
    }
  },
  {
    dayNumber: 26,
    stage: 4,
    title: "Ngày 26: Phát triển Kinh tế Biển & Khẳng định Chủ quyền Biển Đảo",
    focus: "Chiến lược kinh tế biển xanh, 2 quần đảo Hoàng Sa - Trường Sa & Luật Biển Việt Nam",
    lessonTask: "Mục tiêu đưa Việt Nam trở thành quốc gia biển mạnh; 4 trụ cột kinh tế biển; bảo vệ chủ quyền thiêng liêng.",
    atlatTask: "Mở Atlat trang 4-5 (Hành chính) & trang 6-7 (Biển đảo): Xác định toạ độ quần đảo Hoàng Sa và Trường Sa.",
    chartTask: "Nhận xét biểu đồ cơ cấu kinh tế biển đóng góp vào GDP quốc gia (hướng tới chiếm 65-70% GDP các tỉnh ven biển).",
    thinkingQuestions: [
      {
        question: "Chứng minh nước ta có đầy đủ căn cứ lịch sử và pháp lý quốc tế để khẳng định chủ quyền đối với 2 quần đảo Hoàng Sa và Trường Sa?",
        answer: "Các bản đồ cổ, châu bản triều Nguyễn và tài liệu lịch sử chứng minh Nhà nước phong kiến Việt Nam đã xác lập và thực thi chủ quyền hòa bình, liên tục từ thế kỷ XVII thông qua Hải đội Hoàng Sa và Bắc Hải; phù hợp với luật pháp quốc tế và Công ước của Liên Hợp Quốc về Luật Biển UNCLOS năm 1982."
      },
      {
        question: "Vì sao phát triển kinh tế biển phải luôn luôn gắn liền với bảo đảm quốc phòng - an ninh trên biển?",
        answer: "Biển Đông có vị trí địa chiến lược quân sự sống còn; bảo vệ chủ quyền biển đảo giữ vững môi trường hòa bình để ngư dân yên tâm bám biển, các giàn khoan dầu khí và tàu hàng hải hoạt động an toàn; ngược lại, kinh tế biển phát triển mạnh tạo nguồn lực đầu tư hiện đại hóa lực lượng Hải quân, Cảnh sát biển bảo vệ vững chắc phên dậu Tổ quốc."
      }
    ],
    miniTest: {
      testTitle: "Mini Test Ngày 26: Kinh tế biển & Chủ quyền biển đảo",
      questions: [
        {
          id: "d26-q1",
          question: "Quần đảo Hoàng Sa hiện nay trực thuộc quyền quản lý hành chính của tỉnh/thành phố nào?",
          options: ["Thành phố Đà Nẵng", "Tỉnh Khánh Hòa", "Tỉnh Quảng Nam", "Thành phố Hải Phòng"],
          correctAnswer: 0,
          explanation: "Huyện đảo Hoàng Sa trực thuộc quyền quản lý hành chính của UBND Thành phố Đà Nẵng."
        },
        {
          id: "d26-q2",
          question: "Quần đảo Trường Sa hiện nay trực thuộc quyền quản lý hành chính của tỉnh nào?",
          options: ["Tỉnh Khánh Hòa", "Tỉnh Bà Rịa Vũng Tàu", "Tỉnh Bình Thuận", "Tỉnh Kiên Giang"],
          correctAnswer: 0,
          explanation: "Huyện đảo Trường Sa trực thuộc quyền quản lý hành chính của tỉnh Khánh Hòa."
        },
        {
          id: "d26-q3",
          question: "Việt Nam có bao nhiêu tỉnh/thành phố có đường bờ biển tiếp giáp với Biển Đông?",
          options: ["28 tỉnh/thành phố", "20 tỉnh/thành phố", "34 tỉnh/thành phố", "15 tỉnh/thành phố"],
          correctAnswer: 0,
          explanation: "Nước ta có 28 tỉnh, thành phố ven biển trải dài từ Quảng Ninh đến Kiên Giang."
        }
      ]
    }
  },

  // =========================================================================
  // GIAI ĐOẠN 5: BẬC THẦY KỸ NĂNG & LUYỆN ĐỀ ĐỈNH CAO (NGÀY 27 - NGÀY 30)
  // =========================================================================
  {
    dayNumber: 27,
    stage: 5,
    title: "Ngày 27: Bí quyết giải dạng bài Nhận diện & Phân tích Biểu đồ đạt điểm 10",
    focus: "Quy tắc vàng chọn biểu đồ (Cột, Tròn, Đường, Miền, Kết hợp) và các lỗi trừ điểm",
    lessonTask: "Nằm lòng các từ khóa nhận dạng: 'Cơ cấu trong 1-3 năm' -> Tròn; 'Chuyển dịch cơ cấu >3 năm' -> Miền; 'Tốc độ tăng trưởng %' -> Đường; 'Quy mô số lượng' -> Cột.",
    atlatTask: "Đối chiếu các dạng biểu đồ trong Atlat trang 17, 19, 21, 22 để rèn luyện kỹ năng đọc số liệu.",
    chartTask: "Viết đoạn văn phân tích biểu đồ miền chuyển dịch cơ cấu GDP nước ta đủ 3 bước: Khái quát -> Chi tiết -> Giải thích.",
    thinkingQuestions: [
      {
        question: "Khi nào thì chọn biểu đồ Tròn có bán kính khác nhau và khi nào thì chọn biểu đồ Miền?",
        answer: "Chọn biểu đồ Tròn khi đề bài yêu cầu thể hiện 'Quy mô và cơ cấu' với mốc thời gian từ 1 đến 3 năm (tính bán kính R tỉ lệ với căn bậc 2 của tổng quy mô). Chọn biểu đồ Miền khi đề bài yêu cầu thể hiện 'Sự thay đổi cơ cấu / Chuyển dịch cơ cấu' của đối tượng qua chuỗi thời gian từ 4 năm trở lên."
      },
      {
        question: "Những lỗi sai ngớ ngẩn nào học sinh hay mắc phải nhất khi vẽ biểu đồ địa lí trong kỳ thi Chuyên?",
        answer: "1. Quên ghi đơn vị trên trục tung hoặc quên tên biểu đồ; 2. Không chia đúng khoảng cách năm trên trục hoành (ví dụ khoảng cách giữa 2015 - 2018 phải gấp 3 lần giữa 2018 - 2019); 3. Quên ghi số liệu trực tiếp trên các cột hoặc đường; 4. Bảng chú giải sơ sài không khớp ký hiệu."
      }
    ],
    miniTest: {
      testTitle: "Mini Test Ngày 27: Kỹ năng biểu đồ đỉnh cao",
      questions: [
        {
          id: "d27-q1",
          question: "Đề bài yêu cầu: 'Thể hiện tốc độ tăng trưởng diện tích và sản lượng lúa nước ta giai đoạn 2010 - 2022 (Năm 2010 = 100%)'. Dạng biểu đồ thích hợp nhất là:",
          options: ["Biểu đồ Đường", "Biểu đồ Tròn", "Biểu đồ Miền", "Biểu đồ Cột đơn"],
          correctAnswer: 0,
          explanation: "Từ khóa 'Tốc độ tăng trưởng' với các đối tượng cùng xuất phát từ mốc 100% thì dạng chuẩn nhất là BIỂU ĐỒ ĐƯỜNG."
        },
        {
          id: "d27-q2",
          question: "Đề bài yêu cầu: 'Thể hiện quy mô và cơ cấu sản lượng thủy sản khai thác và nuôi trồng nước ta trong 3 năm 2015, 2018, 2021'. Dạng biểu đồ thích hợp nhất là:",
          options: [
            "Biểu đồ Tròn có bán kính khác nhau",
            "Biểu đồ Miền",
            "Biểu đồ Đường",
            "Biểu đồ Khí hậu"
          ],
          correctAnswer: 0,
          explanation: "Từ khóa 'Quy mô và cơ cấu' trong 3 năm chọn Biểu đồ Tròn có bán kính R khác nhau theo quy mô từng năm."
        },
        {
          id: "d27-q3",
          question: "Khi nhận xét biểu đồ hoặc bảng số liệu, nguyên tắc quan trọng nhất để đạt điểm tối đa là:",
          options: [
            "Phải luôn trích dẫn số liệu chứng minh cụ thể và so sánh tăng giảm bao nhiêu (lần hoặc %)",
            "Chỉ cần nhận xét chung chung không cần số liệu",
            "Chỉ cần chép lại toàn bộ bảng số liệu vào bài làm",
            "Chỉ nhận xét năm đầu tiên và năm cuối cùng"
          ],
          correctAnswer: 0,
          explanation: "Nhận xét phải có luận điểm rõ ràng đi kèm số liệu dẫn chứng cụ thể và tính toán chênh lệch (tăng bao nhiêu tấn, gấp bao nhiêu lần)."
        }
      ]
    }
  },
  {
    dayNumber: 28,
    stage: 5,
    title: "Ngày 28: Kỹ thuật khai thác Atlat Địa lí đỉnh cao không cần học vẹt",
    focus: "Phương pháp bóc tách 3 tầng thông tin Atlat: Đọc vị trí -> Phân tích phân bố -> Giải thích căn nguyên",
    lessonTask: "Sử dụng Atlat như một cuốn bách khoa toàn thư địa lí có sẵn trong phòng thi để lấy trọn vẹn điểm số.",
    atlatTask: "Thực hành tra cứu phối hợp: Atlat trang 8 (Khoáng sản) + trang 21 (Công nghiệp) + trang 23 (Giao thông) để giải thích sự phân bố trung tâm công nghiệp luyện kim.",
    chartTask: "Tổng hợp các mẹo nhớ ký hiệu Atlat trang 3 (Ký hiệu chung: mỏ kim loại hình vuông, than hình thang, dầu khí hình thang ngược).",
    thinkingQuestions: [
      {
        question: "Làm thế nào để đạt điểm tuyệt đối câu hỏi 'Dựa vào Atlat Địa lí Việt Nam hãy trình bày và giải thích...'?",
        answer: "Phải thực hiện đầy đủ 2 vế: Vế 1 (Trình bày): Dẫn chính xác số liệu, tên mỏ, tên nhà máy, tên tỉnh thành trên trang Atlat tương ứng (ví dụ: Atlat trang 22). Vế 2 (Giải thích): Vận dụng kiến thức lí thuyết địa lí để chỉ ra nguyên nhân tự nhiên (tài nguyên, địa hình, nguồn nước) và nguyên nhân kinh tế - xã hội (thị trường, lao động, hạ tầng) dẫn đến sự phân bố đó."
      },
      {
        question: "Tại sao trong Atlat Địa lí Việt Nam, các nhà máy nhiệt điện than lớn đều phân bố ở miền Bắc, còn các nhà máy nhiệt điện khí lại phân bố ở miền Nam?",
        answer: "Do quy luật gắn liền với nguồn nhiên liệu tại chỗ: Miền Bắc giàu tài nguyên than đá (bể than Quảng Ninh) nên xây dựng các nhà máy nhiệt điện than (Uông Bí, Phả Lại, Cẩm Phả). Miền Nam tiếp giáp thềm lục địa giàu dầu mỏ và khí đốt tự nhiên (mỏ Bạch Hổ, Lan Tây) nên xây dựng các cụm nhiệt điện tuabin khí (Phú Mỹ, Cà Mau, Nhơn Trạch)."
      }
    ],
    miniTest: {
      testTitle: "Mini Test Ngày 28: Kỹ thuật khai thác Atlat",
      questions: [
        {
          id: "d28-q1",
          question: "Trang Atlat nào sau đây cung cấp thông tin về 'Các nhóm và các loại đất chính' ở Việt Nam?",
          options: ["Atlat trang 11", "Atlat trang 9", "Atlat trang 15", "Atlat trang 20"],
          correctAnswer: 0,
          explanation: "Atlat trang 11 chuyên đề về Thổ nhưỡng (Đất feralit, đất phù sa, đất phèn mặn...)."
        },
        {
          id: "d28-q2",
          question: "Để xác định các trung tâm công nghiệp và quy mô giá trị sản xuất của các trung tâm, thí sinh tra cứu trang Atlat nào?",
          options: ["Atlat trang 21", "Atlat trang 6", "Atlat trang 16", "Atlat trang 25"],
          correctAnswer: 0,
          explanation: "Atlat trang 21 là trang Công nghiệp chung với bản đồ các trung tâm công nghiệp lớn nhỏ trên toàn quốc."
        },
        {
          id: "d28-q3",
          question: "Ký hiệu hình ngọn lửa màu đỏ trên bản đồ Atlat trang 22 thể hiện đối tượng nào?",
          options: ["Nhà máy nhiệt điện", "Nhà máy thủy điện", "Mỏ than đá", "Trạm biến áp 500 kV"],
          correctAnswer: 0,
          explanation: "Ký hiệu ngôi sao màu xanh là nhà máy thủy điện, ký hiệu ngọn lửa màu đỏ là nhà máy nhiệt điện."
        }
      ]
    }
  },
  {
    dayNumber: 29,
    stage: 5,
    title: "Ngày 29: Kỹ năng làm bài tự luận chuyên sâu - Logic Nhân Quả & Ma trận so sánh",
    focus: "Kỹ năng trả lời các câu hỏi Tại sao, So sánh hai vùng, Chứng minh và Đánh giá tiềm năng",
    lessonTask: "Áp dụng công thức 4 bước viết bài tự luận địa lí chuẩn thang điểm thi Học sinh giỏi và Chuyên Địa lí.",
    atlatTask: "Tra cứu lập ma trận so sánh thế mạnh kinh tế giữa Đồng bằng sông Hồng và Đồng bằng sông Cửu Long.",
    chartTask: "Hoàn thiện bài tập so sánh điều kiện phát triển cây công nghiệp giữa Đông Nam Bộ và Tây Nguyên.",
    thinkingQuestions: [
      {
        question: "Phân tích công thức 'Logic Nhân Quả' trong bài thi tự luận Địa lí chuyên để không bị mất điểm?",
        answer: "Mỗi hiện tượng địa lí (Hiện tượng / Kết quả) đều phải chỉ rõ Căn nguyên tự nhiên (Vị trí, địa hình, đất, khí hậu, nước) + Căn nguyên kinh tế xã hội (Chính sách, thị trường, công nghệ, vốn, lao động) + Tác động ngược lại đến sự phát triển bền vững. Tránh viết chung chung, luôn đưa dẫn chứng số liệu định lượng."
      },
      {
        question: "So sánh thế mạnh tự nhiên để phát triển cây công nghiệp giữa Tây Nguyên và Đông Nam Bộ?",
        answer: "Tây Nguyên có thế mạnh đất đỏ badan trên các cao nguyên cao xếp tầng, khí hậu cận xích đạo phân hóa theo đai cao thích hợp cà phê (cả Robusta và Arabica), hồ tiêu, chè. Đông Nam Bộ có đất badan và đất xám trên phù sa cổ bán bình nguyên thoải, khí hậu cận xích đạo ít bão thuận lợi số 1 trồng cao su, điều, hồ tiêu."
      }
    ],
    miniTest: {
      testTitle: "Mini Test Ngày 29: Tự luận chuyên sâu",
      questions: [
        {
          id: "d29-q1",
          question: "Khi làm bài thi tự luận so sánh hai vùng kinh tế, cách trình bày chuẩn khoa học nhất là:",
          options: [
            "Xây dựng các tiêu chí so sánh đối chiếu song song (Vị trí, tự nhiên, kinh tế, hạn chế)",
            "Viết hết toàn bộ vùng thứ nhất rồi mới viết vùng thứ hai",
            "Chỉ nêu điểm khác nhau mà không nêu điểm giống nhau",
            "Chỉ chép lại phần tóm tắt bài học"
          ],
          correctAnswer: 0,
          explanation: "So sánh khoa học nhất là đặt các tiêu chí song song để thấy rõ nét tương đồng và dị biệt giữa 2 đối tượng."
        },
        {
          id: "d29-q2",
          question: "Để giải thích vì sao Tây Nguyên là vùng có sản lượng cà phê lớn nhất nước ta, nhân tố kinh tế - xã hội quan trọng hàng đầu là:",
          options: [
            "Thị trường tiêu thụ rộng lớn và kinh nghiệm trồng cà phê lâu đời của người dân",
            "Có nhiều mỏ than đá lớn",
            "Có hệ thống đường sắt cao tốc",
            "Có nhiều cảng biển nước sâu"
          ],
          correctAnswer: 0,
          explanation: "Nhu cầu thị trường thế giới tăng vọt cùng kinh nghiệm thâm canh cà phê của nông dân là nhân tố thúc đẩy mở rộng vùng chuyên canh."
        },
        {
          id: "d29-q3",
          question: "Khi đề bài yêu cầu 'Chứng minh tài nguyên khoáng sản nước ta phong phú nhưng phân bố không đều', thí sinh phải làm gì?",
          options: [
            "Chứng minh 2 luận điểm: 1. Đa dạng nhiều loại khoáng sản; 2. Phân bố tập trung theo từng khu vực cụ thể",
            "Chỉ cần liệt kê tên các mỏ khoáng sản",
            "Chỉ cần nói than ở Quảng Ninh",
            "Chỉ cần vẽ biểu đồ tròn"
          ],
          correctAnswer: 0,
          explanation: "Đề bài có 2 vế thì phải chứng minh đủ cả 2 luận điểm: Phong phú về chủng loại VÀ Phân bố không đều về không gian."
        }
      ]
    }
  },
  {
    dayNumber: 30,
    stage: 5,
    title: "Ngày 30: Về đích - Đề thi tổng hợp Tuyển sinh Lớp 10 Chuyên Địa lí Toàn diện",
    focus: "Tổng kết 30 ngày thử thách, tự tin chinh phục điểm 9-10 mọi kỳ thi vào trường THPT Chuyên",
    lessonTask: "Kiểm tra toàn diện 30 ngày học: Hoàn thành bài thi thử thách cuối cùng, nhận chứng chỉ vinh danh 'Bậc Thầy Địa Lí 9'.",
    atlatTask: "Làm chủ trọn vẹn 30 trang Atlat Địa lí Việt Nam, tốc độ tra cứu <10 giây/câu hỏi.",
    chartTask: "Nhận diện tức thì mọi dạng biểu đồ trong đề thi tuyển sinh vào trường Chuyên.",
    thinkingQuestions: [
      {
        question: "Tổng kết: 3 quy luật tự nhiên cơ bản nhất chi phối toàn bộ cảnh quan và sinh kế của con người Việt Nam là gì?",
        answer: "1. Quy luật Địa đới (Vị trí nội chí tuyến quy định nền nhiệt ẩm gió mùa cao quanh năm); 2. Quy luật Phi địa đới (Địa hình 3/4 đồi núi và các đai cao tạo nên sự phân hóa cận nhiệt, ôn đới); 3. Quy luật Tác động qua lại giữa sinh thái và con người (Sự thích ứng sáng tạo của người Việt với lũ lụt, bão gió và xâm nhập mặn để phát triển nông nghiệp hàng đầu thế giới)."
      },
      {
        question: "Lời khuyên chiến thuật then chốt khi bước vào phòng thi Tuyển sinh Lớp 10 Chuyên Địa lí?",
        answer: "1. Phân bổ thời gian hợp lý (làm câu trắc nghiệm/Atlat dễ trước, dành 60% thời gian cho tự luận và vẽ biểu đồ); 2. Đọc kỹ từng từ khóa trong đề bài để không lạc đề; 3. Sử dụng Atlat tối đa để lấy số liệu và dẫn chứng tên địa danh cụ thể; 4. Trình bày bài thi sạch đẹp, gạch đầu dòng rõ ràng theo từng ý luận điểm."
      }
    ],
    miniTest: {
      testTitle: "Mini Test Ngày 30: Về đích vinh quang - Thử thách Chuyên Địa",
      questions: [
        {
          id: "d30-q1",
          question: "Nước ta có vị trí nằm ở rìa phía đông của bán đảo nào?",
          options: ["Bán đảo Đông Dương", "Bán đảo Triều Tiên", "Bán đảo Mã Lai", "Bán đảo Ấn Độ"],
          correctAnswer: 0,
          explanation: "Việt Nam nằm ở rìa phía đông của bán đảo Đông Dương thuộc khu vực Đông Nam Á."
        },
        {
          id: "d30-q2",
          question: "Thành phố trực thuộc Trung ương mới của Việt Nam được định hướng là thành phố di sản văn hóa thế giới là:",
          options: ["Thành phố Huế", "Thành phố Hội An", "Thành phố Hạ Long", "Thành phố Ninh Bình"],
          correctAnswer: 0,
          explanation: "Thành phố Huế là đô thị di sản văn hóa trực thuộc Trung ương của Việt Nam."
        },
        {
          id: "d30-q3",
          question: "Chúc mừng bạn đã hoàn thành 30 ngày thử thách! Danh hiệu vinh danh cao nhất bạn đạt được là:",
          options: [
            "🏆 Bậc Thầy Địa Lí 9 - Thủ Khoa Chuyên Địa",
            "Người học việc",
            "Tập đoàn địa lí",
            "Thám tử tập sự"
          ],
          correctAnswer: 0,
          explanation: "Chúc mừng bạn đã hoàn thành xuất sắc toàn bộ 30 ngày học thử thách, đạt danh hiệu Bậc Thầy Địa Lí 9!"
        }
      ]
    }
  }
];
