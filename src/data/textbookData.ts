export interface TextbookLessonSection {
  title: string;
  subsections?: { subtitle: string; content: string[] }[];
  content: string[];
  illustration?: {
    url: string;
    caption: string;
  };
  keyTakeaway: string;
}

export interface SgkQuestion {
  id: string;
  question: string;
  type: "in-lesson" | "end-lesson"; // Câu hỏi giữa bài hoặc Câu hỏi củng cố cuối bài
  pageRef?: string;
  guidedAnswer: string;
}

export interface TextbookLesson {
  id: string;
  chapterId: string;
  chapterTitle: string;
  lessonNumber: number;
  title: string;
  grade: string;
  readingTimeMinutes: number;
  coverImage: string;
  summary: string;
  sections: TextbookLessonSection[];
  sgkQuestions: SgkQuestion[];
  didYouKnow: string; // Mục "Em có biết?"
}

export interface TextbookChapter {
  id: string;
  title: string;
  order: number;
  description: string;
  icon: string;
  lessons: TextbookLesson[];
}

export const TEXTBOOK_EDITION_INFO = {
  edition: "Sách giáo khoa Địa lí 9 mới — Năm học 2026-2027",
  publicationDate: "05/04/2026",
  publisher: "Nhà xuất bản Giáo dục Việt Nam (Bộ GD&ĐT phê duyệt)",
  note: "Chuẩn hóa theo Chương trình GDPT mới, cập nhật số liệu thống kê dân số, chuyển đổi số, tăng trưởng xanh và quy hoạch các vùng kinh tế động lực đến năm 2026-2027."
};

export const TEXTBOOK_CHAPTERS: TextbookChapter[] = [
  {
    id: "chap-1",
    title: "Chương 1: Địa lí Dân cư Việt Nam",
    order: 1,
    description: "Cộng đồng 54 dân tộc, quy mô dân số vượt 100 triệu dân, cơ cấu dân số vàng và chuyển dịch phân bố dân cư, đô thị hóa.",
    icon: "👥",
    lessons: [
      {
        id: "sgk-bai-1",
        chapterId: "chap-1",
        chapterTitle: "Chương 1: Địa lí Dân cư Việt Nam",
        lessonNumber: 1,
        title: "Bài 1: Dân tộc và Dân số Việt Nam",
        grade: "Địa lí 9 (Bản mới 2026-2027, NXB 05/04/2026)",
        readingTimeMinutes: 9,
        coverImage: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=80",
        summary: "Việt Nam là quốc gia đa dân tộc với 54 dân tộc anh em đoàn kết. Quy mô dân số vượt mốc 100,3 triệu người (đứng thứ 3 Đông Nam Á và thứ 15 thế giới), đang tận dụng giai đoạn cơ cấu dân số vàng và thích ứng với tốc độ già hóa dân số.",
        sections: [
          {
            title: "1. Cộng đồng các dân tộc Việt Nam",
            content: [
              "Nước ta có 54 dân tộc cùng chung sống đoàn kết, bình đẳng. Người Kinh (Việt) chiếm khoảng 85,3% dân số, cư trú rộng khắp, tập trung ở đồng bằng, duyên hải và các đô thị lớn.",
              "53 dân tộc thiểu số chiếm 14,7% dân số, cư trú chủ yếu ở miền núi và trung du (Trung du và miền núi Bắc Bộ, Trường Sơn - Tây Nguyên, Duyên hải Nam Trung Bộ và Tây Nam Bộ).",
              "Mỗi dân tộc có nét văn hóa, phong tục, trang phục và ngôn ngữ đặc sắc riêng, tạo nên bản sắc văn hóa Việt Nam thống nhất trong đa dạng."
            ],
            illustration: {
              url: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80",
              caption: "Khối đại đoàn kết 54 dân tộc anh em trên dải đất hình chữ S Việt Nam"
            },
            keyTakeaway: "Các dân tộc bình đẳng, tôn trọng, đoàn kết và giúp đỡ nhau cùng tiến bộ là nguyên tắc cốt lõi trong chính sách dân tộc của Đảng và Nhà nước."
          },
          {
            title: "2. Quy mô và gia tăng dân số",
            content: [
              "Quy mô dân số: Đạt trên 100,3 triệu người (số liệu thống kê cập nhật SGK năm học 2026-2027), là thị trường tiêu dùng nội địa lớn và nguồn lao động dồi dào.",
              "Gia tăng dân số: Tỉ lệ tăng dân số tự nhiên giảm xuống mức ổn định dưới 0,95%/năm nhờ chính sách kế hoạch hóa gia đình hiệu quả.",
              "Mức sinh có xu hướng giảm ở các vùng đô thị lớn (TP.HCM, Đông Nam Bộ) và mức sinh thay thế chênh lệch giữa các vùng miền."
            ],
            illustration: {
              url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
              caption: "Dân số trẻ năng động tạo động lực bứt phá kinh tế số và hội nhập quốc tế"
            },
            keyTakeaway: "Kiểm soát mức sinh hợp lý, duy trì mức sinh thay thế vững chắc và nâng cao chất lượng dân số toàn diện."
          },
          {
            title: "3. Cơ cấu dân số theo tuổi và giới tính",
            content: [
              "Cơ cấu dân số vàng: Tỉ lệ người trong độ tuổi lao động (15 - 64 tuổi) chiếm gần 67% tổng dân số, tạo cơ hội bứt phá kinh tế.",
              "Già hóa dân số: Tỉ lệ người từ 65 tuổi trở lên tăng nhanh (chiếm trên 9%), Việt Nam thuộc nhóm quốc gia có tốc độ già hóa dân số nhanh trên thế giới.",
              "Cơ cấu giới tính: Tỉ số giới tính khi sinh còn mất cân bằng (khoảng 111 - 112 bé trai / 100 bé gái), cần tiếp tục tuyên truyền bình đẳng giới."
            ],
            keyTakeaway: "Tận dụng triệt để thời cơ 'dân số vàng' để nâng cao năng suất lao động trước khi bước vào giai đoạn dân số già."
          }
        ],
        sgkQuestions: [
          {
            id: "sgk-1-q1",
            type: "in-lesson",
            pageRef: "SGK Địa lí 9 mới - Câu hỏi mục 1",
            question: "Dựa vào bảng số liệu và bản đồ dân cư, hãy nhận xét sự phân bố của người Kinh và các dân tộc thiểu số ở nước ta?",
            guidedAnswer: "Người Kinh phân bố rộng khắp cả nước, tập trung đông đúc ở các vùng đồng bằng (Đồng bằng sông Hồng, Đồng bằng sông Cửu Long) và duyên hải, các trung tâm kinh tế lớn. Các dân tộc thiểu số cư trú chủ yếu ở khu vực đồi núi và trung du: miền núi phía Bắc có Tày, Nùng, Thái, Mường, H'Mông, Dao; Tây Nguyên có Gia Rai, Ê Đê, Ba Na; Nam Bộ có người Khmer, Chăm, Hoa sống đan xen."
          },
          {
            id: "sgk-1-q2",
            type: "end-lesson",
            pageRef: "SGK Địa lí 9 mới - Bài tập 1 cuối bài",
            question: "Phân tích những thuận lợi và thách thức của cơ cấu dân số vàng đối với sự phát triển kinh tế - xã hội nước ta hiện nay?",
            guidedAnswer: "Thuận lợi: Cung cấp nguồn lao động dồi dào, trẻ khỏe, năng động, khả năng tiếp thu công nghệ cao nhanh; thu hút đầu tư nước ngoài (FDI); tỉ lệ người phụ thuộc thấp giúp tăng tích lũy đầu tư xã hội. Thách thức: Áp lực tạo việc làm chất lượng cao cho hàng triệu lao động; đòi hỏi chi phí lớn để đào tạo nghề kỹ thuật; nguy cơ rơi vào 'bẫy thu nhập trung bình' nếu không kịp thời nâng cao năng suất lao động."
          }
        ],
        didYouKnow: "Cột mốc 100 triệu dân vào năm 2023 và duy trì trên 100,3 triệu dân năm 2026 đưa Việt Nam vào vị thế quốc gia đông dân thứ 15 toàn cầu, mở ra thị trường tiêu thụ khổng lồ!"
      },
      {
        id: "sgk-bai-2",
        chapterId: "chap-1",
        chapterTitle: "Chương 1: Địa lí Dân cư Việt Nam",
        lessonNumber: 2,
        title: "Bài 2: Phân bố dân cư và các loại hình quần cư",
        grade: "Địa lí 9 (Bản mới 2026-2027, NXB 05/04/2026)",
        readingTimeMinutes: 8,
        coverImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=80",
        summary: "Mật độ dân số nước ta cao (khoảng 303 người/km²), phân bố không đồng đều giữa đồng bằng và miền núi, giữa nông thôn và thành thị. Đô thị hóa diễn ra nhanh chóng gắn liền với quá trình công nghiệp hóa và hiện đại hóa.",
        sections: [
          {
            title: "1. Mật độ dân số và sự phân bố dân cư",
            content: [
              "Mật độ dân số trung bình cả nước đạt khoảng 303 người/km², gấp hơn 5 lần mức trung bình thế giới.",
              "Phân bố chênh lệch lớn giữa các vùng: Đồng bằng sông Hồng có mật độ cao nhất (>1.080 người/km²), tiếp đến là Đông Nam Bộ (>580 người/km²); trong khi Tây Nguyên (~112 người/km²) và Trung du miền núi Bắc Bộ (~138 người/km²) có mật độ thấp nhất.",
              "Phân bố giữa thành thị và nông thôn: Dân cư nông thôn chiếm khoảng 61,5%, dân cư thành thị chiếm khoảng 38,5% và đang có xu hướng tăng nhanh."
            ],
            illustration: {
              url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
              caption: "Đô thị hóa hiện đại tại TP. Hồ Chí Minh và mạng lưới đô thị vệ tinh thông minh"
            },
            keyTakeaway: "Phân bố dân cư chưa hợp lý giữa nơi thừa lao động và nơi giàu tài nguyên thiên nhiên."
          },
          {
            title: "2. Các loại hình quần cư và quá trình đô thị hóa",
            content: [
              "Quần cư nông thôn: Nhà cửa gắn liền với đất sản xuất nông - lâm - ngư nghiệp, làng xã cổ truyền có xu hướng hiện đại hóa theo chương trình 'Nông thôn mới nâng cao'.",
              "Quần cư thành thị: Mật độ dân số cao, nhà ở dạng nhà phố, chung cư cao tầng; hoạt động phi nông nghiệp (công nghiệp, thương mại, dịch vụ tài chính, logistics).",
              "Đô thị hóa: Tỉ lệ dân thành thị tăng từ 30% (2010) lên gần 40% (2026); hai đô thị loại đặc biệt là Hà Nội và TP. Hồ Chí Minh đóng vai trò hạt nhân kinh tế của hai miền."
            ],
            keyTakeaway: "Đô thị hóa thúc đẩy chuyển dịch cơ cấu kinh tế, lan tỏa lối sống văn minh và tạo thị trường tiêu thụ hiện đại."
          }
        ],
        sgkQuestions: [
          {
            id: "sgk-2-q1",
            type: "end-lesson",
            pageRef: "SGK Địa lí 9 mới - Câu hỏi 2 cuối bài",
            question: "Tại sao dân cư nước ta lại tập trung đông đúc ở vùng đồng bằng và thưa thớt ở vùng miền núi?",
            guidedAnswer: "Vùng đồng bằng có địa hình bằng phẳng, đất phù sa màu mỡ, nguồn nước dồi dào, khí hậu thuận lợi cho trồng trọt lúa nước lâu đời; giao thông vận tải phát triển dễ dàng, tập trung nhiều trung tâm công nghiệp, trường học, bệnh viện. Ngược lại vùng đồi núi địa hình chia cắt hiểm trở, giao thông đi lại khó khăn, thiên tai lũ quét sạt lở, cơ sở hạ tầng và việc làm phi nông nghiệp còn hạn chế."
          }
        ],
        didYouKnow: "Hà Nội và TP. Hồ Chí Minh là hai siêu đô thị tập trung tới gần 20% dân số cả nước và đóng góp gần 40% tổng thu ngân sách quốc gia!"
      },
      {
        id: "sgk-bai-3",
        chapterId: "chap-1",
        chapterTitle: "Chương 1: Địa lí Dân cư Việt Nam",
        lessonNumber: 3,
        title: "Bài 3: Thực hành — Tìm hiểu vấn đề việc làm và thu nhập ở địa phương",
        grade: "Địa lí 9 (Bản mới 2026-2027, NXB 05/04/2026)",
        readingTimeMinutes: 7,
        coverImage: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=80",
        summary: "Rèn luyện kỹ năng thu thập số liệu, phân tích biểu đồ cơ cấu lao động theo ngành và viết báo cáo ngắn về tình hình giải quyết việc làm, chuyển đổi nghề nghiệp và nâng cao thu nhập cho người lao động tại địa phương.",
        sections: [
          {
            title: "1. Phương pháp thu thập và xử lý số liệu",
            content: [
              "Thu thập số liệu từ Niên giám thống kê tỉnh/thành phố hoặc trang thông tin điện tử của Sở Lao động - Thương binh & Xã hội.",
              "Xác định các chỉ tiêu chính: Tỉ lệ lao động đã qua đào tạo, tỉ lệ thất nghiệp ở khu vực thành thị, tỉ lệ thiếu việc làm ở khu vực nông thôn, thu nhập bình quân đầu người/tháng."
            ],
            keyTakeaway: "Thu thập số liệu có kiểm chứng, so sánh số liệu địa phương với mức bình quân cả nước."
          },
          {
            title: "2. Hướng dẫn viết báo cáo địa phương",
            content: [
              "Mở bài: Giới thiệu khái quát về địa phương (vị trí, dân số, nguồn lao động).",
              "Thân bài: Nêu thực trạng việc làm (chuyển dịch từ nông nghiệp sang dịch vụ, công nghiệp); phân tích các giải pháp (học nghề kỹ thuật, phát triển du lịch làng nghề, xuất khẩu lao động).",
              "Kết luận: Đề xuất giải pháp kiến nghị đối với chính quyền địa phương."
            ],
            keyTakeaway: "Kỹ năng tổng hợp số liệu thực tế giúp hiểu sâu sắc mối liên hệ giữa địa lí dân cư và kinh tế xã hội."
          }
        ],
        sgkQuestions: [
          {
            id: "sgk-3-q1",
            type: "end-lesson",
            pageRef: "SGK Địa lí 9 mới - Yêu cầu thực hành",
            question: "Nêu các giải pháp căn cơ để giải quyết vấn đề việc làm cho thanh niên tại các địa phương hiện nay?",
            guidedAnswer: "Đẩy mạnh đào tạo nghề gắn với nhu cầu của doanh nghiệp công nghệ cao và các khu công nghiệp; hỗ trợ thanh niên khởi nghiệp đổi mới sáng tạo, làm kinh tế số và thương mại điện tử nông sản; phát triển các ngành dịch vụ, du lịch cộng đồng tại chỗ; chuyển dịch cơ cấu cây trồng vật nuôi sang nông nghiệp hữu cơ giá trị cao."
          }
        ],
        didYouKnow: "Tỉ lệ lao động qua đào tạo có bằng cấp, chứng chỉ tại Việt Nam đang tăng vững chắc, hướng tới mục tiêu trên 35% lao động có chứng chỉ chuyên môn kỹ thuật cao!"
      }
    ]
  },
  {
    id: "chap-2",
    title: "Chương 2: Địa lí các ngành Kinh tế Việt Nam",
    order: 2,
    description: "Sự bứt phá của Nông - Lâm - Thủy sản hiện đại, nền Công nghiệp chuyển đổi xanh và các ngành Dịch vụ logistics, thương mại số.",
    icon: "🏭",
    lessons: [
      {
        id: "sgk-bai-4",
        chapterId: "chap-2",
        chapterTitle: "Chương 2: Địa lí các ngành Kinh tế Việt Nam",
        lessonNumber: 4,
        title: "Bài 4: Nông nghiệp, Lâm nghiệp và Thủy sản",
        grade: "Địa lí 9 (Bản mới 2026-2027, NXB 05/04/2026)",
        readingTimeMinutes: 10,
        coverImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
        summary: "Nông nghiệp Việt Nam chuyển mạnh sang sản xuất hàng hóa giá trị cao, ứng dụng công nghệ thông minh và sinh thái tuần hoàn. Xuất khẩu nông - lâm - thủy sản vượt mốc 54 tỉ USD với các mặt hàng gạo ST25, cà phê, sầu riêng, hạt điều và tôm cá.",
        sections: [
          {
            title: "1. Ngành Trồng trọt",
            content: [
              "Cây lương thực: Sản lượng lúa ổn định trên 43 triệu tấn/năm, đứng đầu về chất lượng xuất khẩu gạo ngon thế giới; hai vùng trọng điểm là Đồng bằng sông Cửu Long (vùng lúa số 1) và Đồng bằng sông Hồng.",
              "Cây công nghiệp lâu năm: Cà phê (Tây Nguyên), cao su (Đông Nam Bộ, Tây Nguyên), chè (Trung du và miền núi Bắc Bộ, Lâm Đồng), hạt điều và hồ tiêu (Đông Nam Bộ, Tây Nguyên).",
              "Cây ăn quả: Phát triển bùng nổ theo chuỗi giá trị xuất khẩu: sầu riêng, thanh long, xoài, nhãn, chuối, bưởi tại ĐBSCL và Đông Nam Bộ."
            ],
            illustration: {
              url: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80",
              caption: "Mô hình cánh đồng mẫu lớn và ứng dụng máy bay không người lái trong nông nghiệp thông minh"
            },
            keyTakeaway: "Chuyển từ tư duy 'sản xuất nông nghiệp số lượng' sang tư duy 'kinh tế nông nghiệp chất lượng cao'."
          },
          {
            title: "2. Chăn nuôi, Lâm nghiệp và Thủy sản",
            content: [
              "Chăn nuôi: Đang chuyển mạnh sang quy mô trang trại công nghiệp khép kín, an toàn sinh học (lợn, gia cầm ở đồng bằng; bò thịt, bò sữa ở Mộc Châu, Nghệ An, Lâm Đồng).",
              "Lâm nghiệp: Tỉ lệ che phủ rừng đạt trên 42%; kết hợp trồng rừng gỗ lớn, bảo vệ rừng phòng hộ và phát triển thị trường tín chỉ các-bon rừng.",
              "Thủy sản: Khai thác hải sản xa bờ gắn với bảo vệ chủ quyền biển đảo; nuôi trồng thủy sản (tôm nước lợ, cá tra, cá biển) phát triển mạnh ở ĐBSCL và duyên hải Nam Trung Bộ, kim ngạch đạt trên 10-11 tỉ USD."
            ],
            illustration: {
              url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
              caption: "Nuôi tôm công nghệ cao trong nhà màng đạt chuẩn VietGAP xuất khẩu EU và Hoa Kỳ"
            },
            keyTakeaway: "Thủy sản là ngành kinh tế mũi nhọn, phát triển bền vững chống khai thác IUU bất hợp pháp."
          }
        ],
        sgkQuestions: [
          {
            id: "sgk-4-q1",
            type: "end-lesson",
            pageRef: "SGK Địa lí 9 mới - Câu 1 cuối bài",
            question: "Tại sao vùng Đồng bằng sông Cửu Long lại trở thành vùng xuất khẩu lúa gạo và thủy sản lớn nhất nước ta?",
            guidedAnswer: "Về tự nhiên: Diện tích đất phù sa ngọt rộng lớn màu mỡ do sông Tiền và sông Hậu bồi đắp, khí hậu cận xích đạo nóng ẩm quanh năm không có mùa đông lạnh, mạng lưới kênh rạch chằng chịt, diện tích mặt nước nuôi trồng trù phú, tiếp giáp vùng biển ấm giàu hải sản. Về kinh tế - xã hội: Người dân có kinh nghiệm canh tác hàng hóa năng động, hệ thống cơ sở chế biến đông lạnh và kho bãi hiện đại, thị trường tiêu thụ và thương hiệu xuất khẩu gạo ST25, tôm, cá tra được khẳng định toàn cầu."
          }
        ],
        didYouKnow: "Việt Nam là một trong những quốc gia tiên phong tại Đông Nam Á bán thành công tín chỉ các-bon rừng (REDD+) thu về hàng chục triệu USD tái đầu tư cho đồng bào giữ rừng!"
      },
      {
        id: "sgk-bai-5",
        chapterId: "chap-2",
        chapterTitle: "Chương 2: Địa lí các ngành Kinh tế Việt Nam",
        lessonNumber: 5,
        title: "Bài 5: Công nghiệp Việt Nam",
        grade: "Địa lí 9 (Bản mới 2026-2027, NXB 05/04/2026)",
        readingTimeMinutes: 9,
        coverImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=80",
        summary: "Công nghiệp Việt Nam cơ cấu lại mạnh mẽ: giảm khai khoáng thô, tăng tỉ trọng công nghiệp chế biến - chế tạo, linh kiện điện tử, bán dẫn và chuyển dịch sang năng lượng tái tạo (điện gió, điện mặt trời).",
        sections: [
          {
            title: "1. Cơ cấu và các ngành công nghiệp trọng điểm",
            content: [
              "Công nghiệp điện tử, máy tính và quang học: Tăng trưởng bứt phá, trở thành ngành có kim ngạch xuất khẩu lớn nhất cả nước (Bắc Ninh, Thái Nguyên, Bắc Giang, TP. Hồ Chí Minh).",
              "Công nghiệp năng lượng: Chuyển dịch năng lượng công bằng (JETP): Phát triển điện gió ngoài khơi (Bình Thuận, Ninh Thuận, Bạc Liêu, Cà Mau), điện mặt trời mái nhà; duy trì thủy điện bậc thang sông Đà và nhiệt điện khí LNG.",
              "Công nghiệp chế biến thực phẩm: Gắn kết với các vùng chuyên canh nông sản, tạo chuỗi liên kết giá trị gia tăng cao."
            ],
            keyTakeaway: "Chiến lược công nghiệp hóa gắn với Net Zero 2050 và chuỗi cung ứng vi mạch bán dẫn toàn cầu."
          },
          {
            title: "2. Các trung tâm công nghiệp lớn",
            content: [
              "Hai trung tâm công nghiệp lớn nhất cả nước là TP. Hồ Chí Minh (quy mô rất lớn) và Hà Nội (quy mô rất lớn).",
              "Dải công nghiệp ven biển và các tỉnh công nghiệp động lực: Hải Phòng, Quảng Ninh, Bắc Ninh, Bình Dương, Đồng Nai, Bà Rịa - Vũng Tàu."
            ],
            keyTakeaway: "Hình thành các cụm liên kết ngành công nghiệp chuyên môn hóa sâu."
          }
        ],
        sgkQuestions: [
          {
            id: "sgk-5-q1",
            type: "end-lesson",
            pageRef: "SGK Địa lí 9 mới - Câu hỏi mục 2",
            question: "Vì sao nước ta lại ưu tiên phát triển mạnh năng lượng tái tạo (điện gió, điện mặt trời) trong những năm gần đây?",
            guidedAnswer: "Vì nước ta có tiềm năng tự nhiên khổng lồ (bờ biển dài 3.260 km nhiều gió, số giờ nắng cao quanh năm ở Nam Trung Bộ và Nam Bộ); giảm phụ thuộc vào nhiên liệu hóa thạch gây ô nhiễm (than đá, dầu mỏ); thực hiện cam kết quốc tế giảm phát thải ròng bằng 0 (Net Zero) vào năm 2050; đảm bảo an ninh năng lượng quốc gia phục vụ phát triển kinh tế bền vững."
          }
        ],
        didYouKnow: "Tổ hợp các nhà máy sản xuất chip và linh kiện vi mạch bán dẫn đang được đầu tư mở rộng tại Hà Nội, Đà Nẵng và TP.HCM, định vị Việt Nam thành cứ điểm công nghệ cao mới của thế giới!"
      },
      {
        id: "sgk-bai-6",
        chapterId: "chap-2",
        chapterTitle: "Chương 2: Địa lí các ngành Kinh tế Việt Nam",
        lessonNumber: 6,
        title: "Bài 6: Dịch vụ — Giao thông, Bưu chính, Thương mại & Du lịch",
        grade: "Địa lí 9 (Bản mới 2026-2027, NXB 05/04/2026)",
        readingTimeMinutes: 9,
        coverImage: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=80",
        summary: "Ngành dịch vụ đóng góp hơn 42% vào GDP. Hạ tầng giao thông cao tốc Bắc - Nam, cảng biển nước sâu Cái Mép - Lạch Huyện, hàng không quốc tế Long Thành, bưu chính số và du lịch xanh phát triển vượt trội.",
        sections: [
          {
            title: "1. Giao thông vận tải và Bưu chính viễn thông",
            content: [
              "Đường bộ: Tuyến cao tốc Bắc - Nam phía Đông thông suốt từ Lạng Sơn đến Cà Mau, tạo đột phá liên kết vùng; Quốc lộ 1A và đường Hồ Chí Minh.",
              "Đường biển: Cụm cảng nước sâu quốc tế Cái Mép - Thị Vải (Bà Rịa - Vũng Tàu) và Lạch Huyện (Hải Phòng) đón trực tiếp các siêu tàu container đi thẳng châu Âu, châu Mỹ.",
              "Hàng không: Nâng cấp Nội Bài, Tân Sơn Nhất và đẩy nhanh đại dự án Cảng hàng không quốc tế Long Thành.",
              "Bưu chính - Viễn thông: Mạng 5G phủ sóng toàn quốc, thương mại điện tử và kinh tế số bùng nổ."
            ],
            keyTakeaway: "Hạ tầng giao thông đồng bộ là chìa khóa mở đường cho phát triển kinh tế nhanh và bền vững."
          },
          {
            title: "2. Thương mại và Du lịch",
            content: [
              "Nội thương: Thị trường tiêu dùng sôi động với sự phát triển của hệ thống siêu thị, trung tâm thương mại và sàn giao dịch số.",
              "Ngoại thương: Tổng kim ngạch xuất nhập khẩu vượt 750 tỉ USD, Việt Nam liên tục xuất siêu; các đối tác thương mại lớn gồm Trung Quốc, Hoa Kỳ, Hàn Quốc, ASEAN và EU.",
              "Du lịch: Ngành kinh tế mũi nhọn, đón trên 18 triệu lượt khách quốc tế/năm với các điểm đến nổi tiếng: Hà Nội, Hạ Long, Ninh Bình, Huế, Hội An, Đà Nẵng, Nha Trang, Phú Quốc."
            ],
            keyTakeaway: "Du lịch xanh, du lịch di sản và thương mại điện tử tạo động lực tăng trưởng mới."
          }
        ],
        sgkQuestions: [
          {
            id: "sgk-6-q1",
            type: "end-lesson",
            pageRef: "SGK Địa lí 9 mới - Câu hỏi cuối bài",
            question: "Nêu vai trò đặc biệt của cụm cảng nước sâu Cái Mép - Thị Vải đối với hoạt động xuất nhập khẩu của nước ta?",
            guidedAnswer: "Cụm cảng Cái Mép - Thị Vải có luồng tàu sâu, trang thiết bị hiện đại, cho phép các tàu container siêu lớn trên 200.000 DWT cập cảng; hàng hóa xuất khẩu của Việt Nam được đi thẳng sang thị trường Bắc Mỹ và châu Âu mà không cần phải trung chuyển qua Singapore hay Hong Kong, giúp tiết kiệm chi phí logistics và rút ngắn thời gian vận chuyển cho doanh nghiệp."
          }
        ],
        didYouKnow: "Cảng quốc tế Lạch Huyện (Hải Phòng) và Cái Mép - Thị Vải (Bà Rịa - Vũng Tàu) nằm trong nhóm các cảng container có hiệu suất hoạt động tốt nhất thế giới theo đánh giá của World Bank!"
      }
    ]
  },
  {
    id: "chap-3",
    title: "Chương 3: Sự phân hóa lãnh thổ (Các vùng kinh tế)",
    order: 3,
    description: "Nghiên cứu toàn diện 6 vùng kinh tế - xã hội theo quy hoạch quốc gia mới: Thế mạnh tự nhiên, kinh tế đặc trưng và giải pháp liên kết vùng.",
    icon: "🗺️",
    lessons: [
      {
        id: "sgk-bai-7",
        chapterId: "chap-3",
        chapterTitle: "Chương 3: Sự phân hóa lãnh thổ (Các vùng kinh tế)",
        lessonNumber: 7,
        title: "Bài 7: Vùng Trung du và miền núi Bắc Bộ",
        grade: "Địa lí 9 (Bản mới 2026-2027, NXB 05/04/2026)",
        readingTimeMinutes: 10,
        coverImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
        summary: "Vùng có diện tích lớn nhất nước (>95.000 km²), giàu khoáng sản, trữ năng thủy điện sông Đà khổng lồ, vựa chè số 1 và tiềm năng du lịch sinh thái vùng cao đặc sắc.",
        sections: [
          {
            title: "1. Vị trí địa lí và điều kiện tự nhiên",
            content: [
              "Vị trí: Giáp Trung Quốc và Lào; tiếp giáp vùng Đồng bằng sông Hồng và vịnh Bắc Bộ; có ý nghĩa an ninh quốc phòng chiến lược và kinh tế cửa khẩu biên mậu.",
              "Địa hình: Phân hóa thành Tây Bắc hiểm trở (núi cao Hoàng Liên Sơn, Fansipan 3.143m) và Đông Bắc đồi núi cánh cung (Sông Gâm, Ngân Sơn, Bắc Sơn, Đông Triều).",
              "Khí hậu: Nhiệt đới ẩm gió mùa có mùa đông lạnh kéo dài nhất nước, tạo điều kiện phát triển cây dược liệu, cây ăn quả cận nhiệt và ôn đới."
            ],
            keyTakeaway: "Sự phân hóa giữa Đông Bắc và Tây Bắc tạo nên thế mạnh kinh tế đa dạng và bổ trợ nhau."
          },
          {
            title: "2. Tình hình phát triển kinh tế",
            content: [
              "Công nghiệp năng lượng & khai khoáng: Bậc thang thủy điện sông Đà (Sơn La, Hòa Bình, Lai Châu); than đá Quảng Ninh; mỏ Apatit Lào Cai, sắt Thái Nguyên.",
              "Nông - lâm nghiệp: Cây công nghiệp cận nhiệt (vựa chè Thái Nguyên, Mộc Châu, Yên Bái); cây ăn quả (mận, đào, lê, vải thiều Lục Ngạn); chăn nuôi trâu lớn nhất nước.",
              "Du lịch và kinh tế cửa khẩu: Sa Pa, Mẫu Sơn, Cao nguyên đá Đồng Văn, thác Bản Giốc; các cửa khẩu quốc tế Hữu Nghị, Móng Cái, Lào Cai."
            ],
            keyTakeaway: "Đẩy mạnh liên kết giao thông cao tốc (Hà Nội - Lào Cai, Đồng Đăng - Trà Lĩnh) để phá thế cô lập miền núi."
          }
        ],
        sgkQuestions: [
          {
            id: "sgk-7-q1",
            type: "end-lesson",
            pageRef: "SGK Địa lí 9 mới - Câu hỏi 1 cuối bài",
            question: "Vì sao Trung du và miền núi Bắc Bộ có thế mạnh vượt trội về phát triển công nghiệp năng lượng?",
            guidedAnswer: "Vùng có trữ năng thủy điện lớn nhất nước trên hệ thống sông Đà, sông Gâm, sông Chảy nhờ địa hình dốc và lưu lượng nước lớn; đồng thời sở hữu bể than đá lớn nhất nước ở Quảng Ninh (>90% trữ lượng than cả nước) tạo nguồn nhiên liệu dồi dào cho các nhà máy nhiệt điện lớn (Uông Bí, Cẩm Phả, Mông Dương)."
          }
        ],
        didYouKnow: "Hệ thống bậc thang thủy điện trên dòng sông Đà (Hòa Bình, Sơn La, Lai Châu) sản xuất ra gần 1/3 tổng sản lượng thủy điện của toàn quốc, là công trình thế kỷ của Việt Nam!"
      },
      {
        id: "sgk-bai-8",
        chapterId: "chap-3",
        chapterTitle: "Chương 3: Sự phân hóa lãnh thổ (Các vùng kinh tế)",
        lessonNumber: 8,
        title: "Bài 8: Vùng Đồng bằng sông Hồng",
        grade: "Địa lí 9 (Bản mới 2026-2027, NXB 05/04/2026)",
        readingTimeMinutes: 10,
        coverImage: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=80",
        summary: "Vùng kinh tế động lực phía Bắc, trung tâm chính trị, văn hóa, giáo dục và khoa học kỹ thuật; mật độ dân số cao nhất nước (>1.080 người/km²); tam giác kinh tế Hà Nội - Hải Phòng - Quảng Ninh.",
        sections: [
          {
            title: "1. Đặc điểm tự nhiên và tài nguyên",
            content: [
              "Đồng bằng châu thổ màu mỡ được bồi đắp bởi hệ thống sông Hồng và sông Thái Bình.",
              "Có mùa đông lạnh đặc trưng tạo lợi thế độc quyền phát triển vụ đông (ngô, khoai tây, bắp cải, cà rốt, su hào) trở thành vụ sản xuất chính.",
              "Hệ thống đê sông Hồng dài trên 3.000 km ngăn lũ nhưng làm đất trong đê không được bồi đắp phù sa tự nhiên hàng năm."
            ],
            keyTakeaway: "Tài nguyên đất và khí hậu vụ đông tạo nền tảng nông nghiệp thâm canh công nghệ cao."
          },
          {
            title: "2. Dân cư và phát triển kinh tế",
            content: [
              "Nguồn lao động dồi dào, chất lượng cao nhất cả nước; mạng lưới trường đại học, viện nghiên cứu dày đặc.",
              "Công nghiệp công nghệ cao phát triển bứt phá (Bắc Ninh, Hải Phòng, Vĩnh Phúc, Hà Nội) với các tập đoàn công nghệ lớn.",
              "Hà Nội là hạt nhân trung tâm kinh tế - tài chính, kết nối với chuỗi đô thị vệ tinh hiện đại."
            ],
            keyTakeaway: "ĐBSH đi đầu trong đổi mới sáng tạo, chuyển đổi số và phát triển kinh tế tri thức."
          }
        ],
        sgkQuestions: [
          {
            id: "sgk-8-q1",
            type: "end-lesson",
            pageRef: "SGK Địa lí 9 mới - Câu hỏi 2 cuối bài",
            question: "Nêu ý nghĩa kinh tế của vụ đông ở vùng Đồng bằng sông Hồng?",
            guidedAnswer: "Vụ đông tận dụng được điều kiện thời tiết mùa đông lạnh hiếm có ở miền Bắc nhiệt đới; bổ sung thêm một vụ thu hoạch rau củ quả giá trị cao trên cùng một diện tích canh tác; nâng cao thu nhập cho nông dân và cung cấp nguồn thực phẩm dồi dào cho các đô thị và xuất khẩu."
          }
        ],
        didYouKnow: "Cầu Nhật Tân và đường vành đai 4 vùng Thủ đô là các công trình giao thông biểu tượng, kết nối Hà Nội với các tỉnh phụ cận thành vùng đô thị khổng lồ!"
      },
      {
        id: "sgk-bai-9",
        chapterId: "chap-3",
        chapterTitle: "Chương 3: Sự phân hóa lãnh thổ (Các vùng kinh tế)",
        lessonNumber: 9,
        title: "Bài 9: Vùng Bắc Trung Bộ và Duyên hải miền Trung",
        grade: "Địa lí 9 (Bản mới 2026-2027, NXB 05/04/2026)",
        readingTimeMinutes: 9,
        coverImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=80",
        summary: "Dải đất duyên hải kéo dài qua 14 tỉnh thành, cầu nối Bắc - Nam, thế mạnh vượt trội về kinh tế biển tổng hợp, chuỗi cảng biển và di sản văn hóa thế giới.",
        sections: [
          {
            title: "1. Vị trí địa lí và điều kiện tự nhiên",
            content: [
              "Trải dài từ Thanh Hóa đến Bình Thuận, lưng tựa dãy Trường Sơn, mặt hướng ra Biển Đông.",
              "Hiện tượng gió phơn Tây Nam (gió Lào) khô nóng vào đầu hạ ở Bắc Trung Bộ; mùa mưa lệch hẳn sang thu - đông (tháng 9 - 12) thường kèm bão lũ.",
              "Bờ biển nhiều vũng vịnh sâu kín gió (Chân Mây, Dung Quất, Quy Nhơn, Vân Phong, Cam Ranh)."
            ],
            keyTakeaway: "Khắc phục thiên tai, hạn hán bằng các hồ chứa nước và phát triển dải kinh tế ven biển."
          },
          {
            title: "2. Phát triển kinh tế biển và du lịch di sản",
            content: [
              "Công nghiệp lọc hóa dầu (Dung Quất, Nghi Sơn), luyện kim và cơ khí ô tô (Chu Lai).",
              "Khai thác và nuôi trồng thủy sản ven biển; sản xuất muối lớn nhất nước (Cà Ná, Sa Huỳnh).",
              "Con đường di sản miền Trung: Thành nhà Hồ, Cố đô Huế, Phố cổ Hội An, Thánh địa Mỹ Sơn, Vườn quốc gia Phong Nha - Kẻ Bàng."
            ],
            keyTakeaway: "Kinh tế biển tổng hợp và du lịch di sản là hai mũi nhọn chiến lược của miền Trung."
          }
        ],
        sgkQuestions: [
          {
            id: "sgk-9-q1",
            type: "end-lesson",
            pageRef: "SGK Địa lí 9 mới - Câu hỏi mục 2",
            question: "Tại sao mùa mưa ở Duyên hải miền Trung lại lệch hẳn sang thu đông (tháng 9 đến tháng 12)?",
            guidedAnswer: "Do chịu ảnh hưởng kết hợp của: Gió mùa Đông Bắc đi qua vùng biển ấm ẩm của Biển Đông thổi vuông góc vào sườn đón gió của dãy Trường Sơn và Bạch Mã; tác động của dải hội tụ nhiệt đới vắt ngang qua miền Trung; và tần suất bão, áp thấp nhiệt đới tập trung dồn dập vào các tháng cuối năm."
          }
        ],
        didYouKnow: "Vịnh Vân Phong (Khánh Hòa) với độ sâu tự nhiên trên 20m, kín gió là một trong những vịnh biển có tiềm năng xây dựng cảng trung chuyển quốc tế hàng đầu thế giới!"
      },
      {
        id: "sgk-bai-10",
        chapterId: "chap-3",
        chapterTitle: "Chương 3: Sự phân hóa lãnh thổ (Các vùng kinh tế)",
        lessonNumber: 10,
        title: "Bài 10: Vùng Tây Nguyên",
        grade: "Địa lí 9 (Bản mới 2026-2027, NXB 05/04/2026)",
        readingTimeMinutes: 9,
        coverImage: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80",
        summary: "Vùng đất đỏ badan xếp tầng hùng vĩ, thủ phủ cà phê số 1 thế giới, tài nguyên bô-xít khổng lồ, thủy điện sông Xê Xan, Srêpôk và không gian văn hóa cồng chiêng độc đáo.",
        sections: [
          {
            title: "1. Vị trí địa lí và tài nguyên đất badan",
            content: [
              "Vùng duy nhất không giáp biển, nằm ở ngã ba Đông Dương tiếp giáp Lào và Campuchia.",
              "Các cao nguyên badan xếp tầng màu mỡ (Kon Tum, Pleiku, Đắk Lắk, Mơ Nông, Di Linh, Lâm Viên).",
              "Khí hậu cận xích đạo gió mùa có mùa khô sâu sắc thiếu nước trầm trọng và mùa mưa kéo dài."
            ],
            keyTakeaway: "Đất badan tầng dày màu mỡ trên diện tích rộng là kho báu phát triển cây công nghiệp lâu năm."
          },
          {
            title: "2. Tình hình phát triển kinh tế",
            content: [
              "Cây công nghiệp: Cà phê (chiếm trên 85% sản lượng cả nước, Buôn Ma Thuột là thủ phủ), hồ tiêu, cao su, chè (Lâm Đồng), sầu riêng xuất khẩu bùng nổ.",
              "Lâm nghiệp và khai khoáng: Độ che phủ rừng cao nhất nước; mỏ bô-xít trữ lượng hàng tỉ tấn tại Đắk Nông, Lâm Đồng.",
              "Thủy điện & Năng lượng tái tạo: Thủy điện Yaly, Sê San, Buôn Kuốp; điện gió và điện mặt trời trên các cao nguyên lộng gió."
            ],
            keyTakeaway: "Giải quyết vấn đề thủy lợi trong mùa khô và bảo vệ vốn rừng đầu nguồn là nhiệm vụ sống còn."
          }
        ],
        sgkQuestions: [
          {
            id: "sgk-10-q1",
            type: "end-lesson",
            pageRef: "SGK Địa lí 9 mới - Câu 1 cuối bài",
            question: "Tại sao mùa khô kéo dài lại là khó khăn lớn nhất đối với sản xuất nông nghiệp ở Tây Nguyên?",
            guidedAnswer: "Vì mùa khô kéo dài từ 4-5 tháng hầu như không có mưa, bốc hơi nước mạnh làm mực nước ngầm hạ thấp nghiêm trọng, các dòng sông suối cạn kiệt, gây thiếu nước tưới trầm trọng cho hàng trăm nghìn hecta cà phê, hồ tiêu, đồng thời làm tăng nguy cơ cháy rừng và khô hạn trên diện rộng."
          }
        ],
        didYouKnow: "Cà phê Buôn Ma Thuột đã được bảo hộ chỉ dẫn địa lý tại hơn 30 quốc gia và vùng lãnh thổ, đưa Việt Nam thành quốc gia xuất khẩu cà phê Robusta số 1 hành tinh!"
      },
      {
        id: "sgk-bai-11",
        chapterId: "chap-3",
        chapterTitle: "Chương 3: Sự phân hóa lãnh thổ (Các vùng kinh tế)",
        lessonNumber: 11,
        title: "Bài 11: Vùng Đông Nam Bộ",
        grade: "Địa lí 9 (Bản mới 2026-2027, NXB 05/04/2026)",
        readingTimeMinutes: 10,
        coverImage: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=80",
        summary: "Vùng kinh tế động lực số 1 của cả nước, đóng góp hơn 30% GDP và gần 40% thu ngân sách; trung tâm công nghiệp, cảng biển nước sâu và dịch vụ tài chính hiện đại bậc nhất.",
        sections: [
          {
            title: "1. Vị trí địa lí và điều kiện thuận lợi",
            content: [
              "Vị trí đầu mối giao thông quốc tế, nằm kề vựa lúa ĐBSCL và giàu tài nguyên dầu khí thềm lục địa.",
              "Địa hình bán bình nguyên lượn sóng thoai thoải, đất xám và đất badan rất thuận lợi xây dựng mặt bằng công nghiệp, đô thị và trồng cây cao su.",
              "Khí hậu cận xích đạo nóng ẩm quanh năm, ít chịu ảnh hưởng của bão."
            ],
            keyTakeaway: "Vị trí địa kinh tế chiến lược thu hút vốn đầu tư nước ngoài (FDI) lớn nhất cả nước."
          },
          {
            title: "2. Kinh tế phát triển năng động",
            content: [
              "Công nghiệp: Chiếm tỉ trọng cao nhất cả nước với các khu công nghệ cao TP.HCM, Bình Dương, Đồng Nai; khai thác dầu mỏ khí đốt (Bạch Hổ, Rồng, Lan Tây).",
              "Cảng biển và Logistics: Cụm cảng Cái Mép - Thị Vải đón các siêu tàu mẹ lớn nhất thế giới.",
              "Nông nghiệp công nghệ cao: Vựa cao su lớn nhất nước; chăn nuôi bò sữa, nuôi tôm công nghệ cao."
            ],
            keyTakeaway: "Đầu tàu kinh tế dẫn dắt quá trình công nghiệp hóa và chuyển đổi số toàn diện."
          }
        ],
        sgkQuestions: [
          {
            id: "sgk-11-q1",
            type: "end-lesson",
            pageRef: "SGK Địa lí 9 mới - Câu hỏi 2 cuối bài",
            question: "Những nhân tố nào giúp Đông Nam Bộ trở thành vùng kinh tế phát triển năng động nhất cả nước?",
            guidedAnswer: "Vị trí địa lí thuận lợi giáp biển và nằm gần các tuyến hàng hải quốc tế; tài nguyên dầu khí và đất đai màu mỡ; nguồn lao động năng động có tay nghề cao thu hút nhân tài cả nước; cơ sở hạ tầng giao thông, cảng biển nước sâu, viễn thông đồng bộ hàng đầu; chính sách mở cửa thu hút dòng vốn đầu tư trực tiếp nước ngoài (FDI) vượt trội."
          }
        ],
        didYouKnow: "TP. Hồ Chí Minh đang hình thành Trung tâm Tài chính Quốc tế tại Khu đô thị mới Thủ Thiêm, kỳ vọng đưa thành phố trở thành cực tăng trưởng tài chính tầm cỡ khu vực Đông Nam Á!"
      },
      {
        id: "sgk-bai-12",
        chapterId: "chap-3",
        chapterTitle: "Chương 3: Sự phân hóa lãnh thổ (Các vùng kinh tế)",
        lessonNumber: 12,
        title: "Bài 12: Vùng Đồng bằng sông Cửu Long",
        grade: "Địa lí 9 (Bản mới 2026-2027, NXB 05/04/2026)",
        readingTimeMinutes: 10,
        coverImage: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1000&q=80",
        summary: "Vựa lúa, vựa trái cây và thủy sản lớn nhất nước ta; mạng lưới kênh rạch trù phú; tiên phong chuyển đổi sản xuất nông nghiệp 'thuận thiên' thích ứng với biến đổi khí hậu.",
        sections: [
          {
            title: "1. Vị trí và điều kiện tự nhiên",
            content: [
              "Nằm ở cực Nam của Tổ quốc, có 3 mặt giáp biển; được bồi đắp bởi hệ thống sông Tiền và sông Hậu (hạ lưu sông Mê Kông).",
              "Địa hình thấp và bằng phẳng, mạng lưới kênh rạch chằng chịt vừa dẫn nước vừa là mạng lưới giao thông đường thủy độc đáo.",
              "Khó khăn: Đất phèn, đất mặn chiếm diện tích lớn; mùa khô thiếu nước ngọt dẫn đến xâm nhập mặn lấn sâu vào nội đồng."
            ],
            keyTakeaway: "Tư duy 'thuận thiên' - xem nước mặn, nước lợ và lũ lụt là tài nguyên để chuyển dịch kinh tế."
          },
          {
            title: "2. Vùng kinh tế nông nghiệp hàng hóa số 1",
            content: [
              "Sản xuất lương thực: Cung cấp trên 50% sản lượng lúa và trên 90% sản lượng gạo xuất khẩu cả nước.",
              "Vương quốc trái cây: Chiếm hơn 60% diện tích cây ăn quả cả nước (xoài cát Hòa Lộc, sầu riêng Chợ Lách, bưởi Năm Roi).",
              "Thủy sản: Chiếm trên 70% sản lượng nuôi trồng và hơn 50% sản lượng đánh bắt cả nước (tôm, cá tra, cua Cà Mau)."
            ],
            keyTakeaway: "ĐBSCL là bảo chứng an ninh lương thực quốc gia và trung tâm xuất khẩu nông sản toàn cầu."
          }
        ],
        sgkQuestions: [
          {
            id: "sgk-12-q1",
            type: "end-lesson",
            pageRef: "SGK Địa lí 9 mới - Câu hỏi cuối bài",
            question: "Nêu mô hình phát triển kinh tế 'thuận thiên' thích ứng với biến đổi khí hậu ở Đồng bằng sông Cửu Long?",
            guidedAnswer: "Mô hình 'thuận thiên' chuyển từ tư duy ngăn mặn triệt để sang chủ động sống chung và khai thác lợi thế: Ở vùng nước ngọt thâm canh lúa chất lượng cao và cây ăn quả; ở vùng nước lợ chuyển đổi sang mô hình lúa - tôm, lúa - cá sinh thái; ở vùng nước mặn ven biển phát triển nuôi tôm công nghiệp, trồng rừng ngập mặn kết hợp nuôi cua, điện gió ngoài khơi."
          }
        ],
        didYouKnow: "Mô hình tôm - rừng ngập mặn sinh thái tại Cà Mau vừa bảo vệ vành đai xanh chống sạt lở bờ biển, vừa tạo ra sản phẩm tôm sinh thái đạt chứng nhận hữu cơ quốc tế xuất khẩu đi khắp 5 châu!"
      }
    ]
  },
  {
    id: "chap-4",
    title: "Chương 4: Phát triển Tổng hợp Kinh tế & Bảo vệ Biển - Đảo",
    order: 4,
    description: "Chủ quyền biển đảo thiêng liêng, 4 ngành kinh tế biển tổng hợp và chiến lược quản lý tài nguyên, bảo vệ môi trường đại dương xanh.",
    icon: "🌊",
    lessons: [
      {
        id: "sgk-bai-13",
        chapterId: "chap-4",
        chapterTitle: "Chương 4: Phát triển Tổng hợp Kinh tế & Bảo vệ Biển - Đảo",
        lessonNumber: 13,
        title: "Bài 13: Vùng biển Việt Nam và các đảo, quần đảo",
        grade: "Địa lí 9 (Bản mới 2026-2027, NXB 05/04/2026)",
        readingTimeMinutes: 9,
        coverImage: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80",
        summary: "Vùng biển Việt Nam thuộc Biển Đông có diện tích trên 1 triệu km² với hơn 4.000 hòn đảo lớn nhỏ. Khẳng định chủ quyền không thể chối cãi đối với hai quần đảo Hoàng Sa và Trường Sa theo Công ước LHQ về Luật Biển 1982.",
        sections: [
          {
            title: "1. Phạm vi các vùng biển Việt Nam",
            content: [
              "Theo Luật Biển Việt Nam 2012 và UNCLOS 1982, vùng biển nước ta bao gồm 5 bộ phận: Nội thủy, Lãnh hải (12 hải lý), Vùng tiếp giáp lãnh hải (12 hải lý tiếp theo), Vùng đặc quyền kinh tế (200 hải lý tính từ đường cơ sở) và Thềm lục địa.",
              "Việt Nam có đường bờ biển dài 3.260 km uốn lượn hình chữ S, 28/63 tỉnh thành phố trực thuộc Trung ương giáp biển."
            ],
            illustration: {
              url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
              caption: "Chiến sĩ hải quân kiên cường ngày đêm canh giữ chủ quyền biển đảo thiêng liêng"
            },
            keyTakeaway: "Vùng biển đảo là không gian sinh tồn, phát triển kinh tế và phên dậu bảo vệ Tổ quốc."
          },
          {
            title: "2. Hệ thống đảo và quần đảo",
            content: [
              "Nước ta có hơn 4.000 hòn đảo lớn nhỏ; đảo lớn nhất là đảo Phú Quốc (Kiên Giang, diện tích gần 600 km²).",
              "Các đảo có dân cư và vị trí tiền tiêu: Cát Bà, Bạch Long Vĩ, Cồn Cỏ, Lý Sơn, Phú Quý, Côn Đảo, Thổ Chu.",
              "Hai quần đảo xa bờ có ý nghĩa chiến lược đặc biệt: Quần đảo Hoàng Sa (thuộc thành phố Đà Nẵng) và Quần đảo Trường Sa (thuộc tỉnh Khánh Hòa)."
            ],
            keyTakeaway: "Việt Nam có đầy đủ bằng chứng lịch sử và cơ sở pháp lý khẳng định chủ quyền đối với Hoàng Sa và Trường Sa."
          }
        ],
        sgkQuestions: [
          {
            id: "sgk-13-q1",
            type: "end-lesson",
            pageRef: "SGK Địa lí 9 mới - Câu hỏi 1 cuối bài",
            question: "Kể tên 5 bộ phận cấu thành vùng biển nước ta theo quy định của Luật Biển Việt Nam?",
            guidedAnswer: "5 bộ phận gồm: 1. Nội thủy (vùng nước phía trong đường cơ sở); 2. Lãnh hải (vùng biển rộng 12 hải lý tính từ đường cơ sở, là lãnh thổ trên biển); 3. Vùng tiếp giáp lãnh hải (rộng 12 hải lý tiếp theo lãnh hải); 4. Vùng đặc quyền kinh tế (vùng biển mở rộng tới 200 hải lý tính từ đường cơ sở); 5. Thềm lục địa (đáy biển và lòng đất dưới đáy biển mở rộng đến mép ngoài của rìa lục địa)."
          }
        ],
        didYouKnow: "Bạch Long Vĩ (Hải Phòng) là hòn đảo xa bờ nhất trong Vịnh Bắc Bộ, có vai trò như cột mốc tiền tiêu quan trọng kiểm soát các tuyến hàng hải tiến vào cửa ngõ phía Bắc!"
      },
      {
        id: "sgk-bai-14",
        chapterId: "chap-4",
        chapterTitle: "Chương 4: Phát triển Tổng hợp Kinh tế & Bảo vệ Biển - Đảo",
        lessonNumber: 14,
        title: "Bài 14: Phát triển tổng hợp kinh tế biển và bảo vệ môi trường",
        grade: "Địa lí 9 (Bản mới 2026-2027, NXB 05/04/2026)",
        readingTimeMinutes: 10,
        coverImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=80",
        summary: "Phát triển 4 trụ cột kinh tế biển tổng hợp: Thủy hải sản, du lịch biển đảo, khai khoáng & năng lượng biển, giao thông vận tải biển gắn liền với bảo vệ hệ sinh thái san hô và rừng ngập mặn.",
        sections: [
          {
            title: "1. Phát triển 4 ngành kinh tế biển tổng hợp",
            content: [
              "Khai thác và nuôi trồng hải sản: Chuyển mạnh sang đánh bắt xa bờ hiện đại, ứng dụng công nghệ định vị vệ tinh, chấm dứt hoàn toàn khai thác tận diệt ven bờ.",
              "Du lịch biển - đảo: Hình thành các trung tâm du lịch nghỉ dưỡng đẳng cấp quốc tế: Hạ Long - Cát Bà, Đà Nẵng, Nha Trang, Phú Quốc.",
              "Khai thác khoáng sản và năng lượng biển: Khai thác dầu khí thềm lục địa; sản xuất muối; phát triển mạnh các trang trại điện gió ngoài khơi.",
              "Giao thông vận tải biển: Phát triển hệ thống cảng biển nước sâu và đội tàu viễn dương mở rộng giao thương toàn cầu."
            ],
            keyTakeaway: "Phát triển 'tổng hợp' là các ngành cùng khai thác một không gian biển, tương trợ và không hủy hoại lẫn nhau."
          },
          {
            title: "2. Quản lý tài nguyên và bảo vệ môi trường biển đảo",
            content: [
              "Nguyên nhân suy thoái: Tràn dầu, rác thải nhựa đại dương, nước thải công nghiệp và khai thác quá mức làm suy giảm diện tích rạn san hô, thảm cỏ biển và rừng ngập mặn.",
              "Biện pháp cấp bách: Thành lập các khu bảo tồn biển (Nha Trang, Cù Lao Chàm, Côn Đảo, Phú Quốc); trồng rừng phòng hộ ven biển; kiểm soát chặt nguồn thải từ đất liền đổ ra biển; nâng cao ý thức bảo vệ môi trường đại dương xanh."
            ],
            keyTakeaway: "Giữ gìn biển bạc cho muôn đời sau là trách nhiệm thiêng liêng của thế hệ trẻ."
          }
        ],
        sgkQuestions: [
          {
            id: "sgk-14-q1",
            type: "end-lesson",
            pageRef: "SGK Địa lí 9 mới - Câu hỏi cuối bài",
            question: "Tại sao việc phát triển kinh tế biển ở nước ta bắt buộc phải tiến hành theo hướng 'phát triển tổng hợp'?",
            guidedAnswer: "Vì môi trường biển là một thể thống nhất không thể chia cắt, hoạt động của ngành này (ví dụ khai thác dầu khí, đánh bắt thủy sản) nếu gây ô nhiễm sẽ lập tức hủy hoại hoạt động của ngành khác (du lịch biển, nuôi trồng hải sản); phát triển tổng hợp nhằm khai thác tối đa nguồn lợi tài nguyên, nâng cao hiệu quả kinh tế chung, bảo vệ chủ quyền và gìn giữ môi trường sinh thái biển bền vững cho tương lai."
          }
        ],
        didYouKnow: "Rạn san hô tại quần đảo Trường Sa và vịnh Nha Trang sở hữu mức độ đa dạng sinh học ngang ngửa các khu rừng mưa nhiệt đới Amazon trên cạn, là 'vườn ươm' sự sống của hàng nghìn loài sinh vật biển quý hiếm!"
      }
    ]
  }
];
