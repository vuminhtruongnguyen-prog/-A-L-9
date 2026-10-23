export interface EssayQuestionItem {
  id: string;
  topicGroup: "natural" | "population" | "economy" | "regions";
  topicName: string;
  level: "Cơ bản" | "Thông hiểu" | "Vận dụng" | "Vận dụng cao" | "Chuyên sâu";
  prompt: string;
  maxScore: number; // e.g. 2.0 hoặc 3.0 điểm
  atlatReference?: string;
  keyConcepts: string[]; // Các từ khóa bắt buộc phải có
  scoringRubric: { criterion: string; point: number; detail: string }[];
  modelAnswer: string;
  expertTips: string;
}

export const ESSAY_QUESTIONS: EssayQuestionItem[] = [
  {
    id: "essay-01",
    topicGroup: "natural",
    topicName: "Vị trí địa lí & Khí hậu Việt Nam",
    level: "Cơ bản",
    prompt: "Trình bày các đặc điểm cơ bản của vị trí địa lí nước ta. Vị trí đó có ảnh hưởng như thế nào đến tính chất nhiệt đới ẩm gió mùa của khí hậu Việt Nam?",
    maxScore: 2.0,
    atlatReference: "Atlat trang 4-5 và trang 9",
    keyConcepts: ["Nội chí tuyến bán cầu Bắc", "Tiếp giáp Biển Đông", "Gió mùa châu Á", "Góc nhập xạ", "Lượng mưa 1500 - 2000 mm"],
    scoringRubric: [
      { criterion: "Nêu tọa độ địa lí và vị trí", point: 0.5, detail: "Nằm từ 8°34'B đến 23°23'B; rìa đông bán đảo Đông Dương, tiếp giáp Biển Đông rộng lớn." },
      { criterion: "Giải thích tính chất nhiệt đới", point: 0.5, detail: "Nằm trong vùng nội chí tuyến, góc nhập xạ lớn, 2 lần Mặt Trời lên thiên đỉnh, tổng bức xạ cao." },
      { criterion: "Giải thích tính chất ẩm", point: 0.5, detail: "Tiếp giáp Biển Đông, các khối khí qua biển nhận lượng hơi ẩm dồi dào, gây mưa lớn 1500 - 2000 mm/năm." },
      { criterion: "Giải thích tính chất gió mùa", point: 0.5, detail: "Nằm trong khu vực gió mùa châu Á, luân phiên hai mùa gió: gió mùa mùa đông và gió mùa mùa hạ." }
    ],
    modelAnswer: `1. Đặc điểm vị trí địa lí nước ta:
- Tọa độ địa lí: Trải dài từ 8°34'B đến 23°23'B và từ 102°09'Đ đến 109°28'Đ.
- Vị trí tiếp giáp: Nằm ở rìa phía đông của bán đảo Đông Dương, tiếp giáp Biển Đông với đường bờ biển dài 3.260 km; nằm gần trung tâm khu vực Đông Nam Á.

2. Ảnh hưởng đến tính chất nhiệt đới ẩm gió mùa của khí hậu:
- Tính chất nhiệt đới: Do nằm hoàn toàn trong vùng nội chí tuyến bán cầu Bắc nên hằng năm nhận được lượng bức xạ mặt trời lớn, góc nhập xạ lớn và mọi nơi đều có 2 lần Mặt Trời lên thiên đỉnh. Nhiệt độ trung bình năm >20°C (trừ vùng núi cao), tổng số giờ nắng đạt 1.400 - 3.000 giờ/năm.
- Tính chất ẩm: Nhờ tiếp giáp với Biển Đông rộng lớn (hơn 1 triệu km²), các khối khí di chuyển qua biển được cung cấp lượng ẩm và hơi nước dồi dào, mang lại lượng mưa lớn (1.500 - 2.000 mm/năm), độ ẩm không khí trung bình trên 80%, làm cho thiên nhiên nước ta xanh tốt khác hẳn với hoang mạc cùng vĩ độ ở Tây Á hay Bắc Phi.
- Tính chất gió mùa: Nằm trong khu vực hoạt động của hoàn lưu gió mùa châu Á, khí hậu nước ta chịu sự chi phối của hai mùa gió đối lập: gió mùa Đông Bắc (lạnh khô đầu đông, lạnh ẩm cuối đông) và gió mùa Tây Nam (nóng ẩm, mưa nhiều).`,
    expertTips: "Mẹo thi HSG: Không được bỏ sót từ khóa 'nội chí tuyến' và 'tiếp giáp Biển Đông'. Luôn so sánh ngắn gọn với hoang mạc Xa-ha-ra cùng vĩ độ để ghi điểm sáng tạo."
  },
  {
    id: "essay-02",
    topicGroup: "natural",
    topicName: "Địa hình & Sông ngòi Việt Nam",
    level: "Thông hiểu",
    prompt: "Dựa vào Atlat Địa lí Việt Nam và kiến thức đã học, hãy chứng minh rằng địa hình nước ta có tính chất phân bậc rõ rệt và chịu sự tác động sâu sắc của khí hậu nhiệt đới ẩm gió mùa?",
    maxScore: 2.5,
    atlatReference: "Atlat trang 6-7 (Hình thể) và trang 10 (Sông ngòi)",
    keyConcepts: ["Vận động Tân kiến tạo", "Bậc địa hình", "Xâm thực mạnh ở đồi núi", "Bồi tụ nhanh ở đồng bằng", "Địa hình cacxtơ"],
    scoringRubric: [
      { criterion: "Chứng minh tính phân bậc", point: 1.0, detail: "Do vận động Tân kiến tạo làm trẻ lại, chia thành các bậc: núi cao, núi trung bình, đồi núi thấp, bán bình nguyên, đồng bằng châu thổ và thềm lục địa." },
      { criterion: "Tác động xâm thực vùng đồi núi", point: 0.75, detail: "Mưa lớn gây xói mòn, rửa trôi, trượt lở đất; tạo nên các thung lũng sông sâu, hẻm vực và dạng địa hình cacxtơ đá vôi nhiệt đới độc đáo." },
      { criterion: "Tác động bồi tụ vùng đồng bằng", point: 0.75, detail: "Phù sa bồi đắp mở rộng đồng bằng châu thổ sông Hồng và sông Cửu Long với tốc độ hàng chục mét mỗi năm." }
    ],
    modelAnswer: `1. Tính chất phân bậc rõ rệt của địa hình:
- Sau giai đoạn Cổ kiến tạo, địa hình nước ta bị bào mòn hạ thấp thành bề mặt san bằng cổ. Đến giai đoạn Tân kiến tạo, vận động uốn nếp và nâng lên diễn ra không đều đã làm địa hình trẻ lại và phân thành nhiều bậc kế tiếp nhau:
  + Bậc núi cao (>2.000m): Dãy Hoàng Liên Sơn đỉnh Fansipan 3.143m, khối núi Pu Si Lung, Pu Lai Leng.
  + Bậc núi trung bình và đồi núi thấp (chiếm ưu thế lớn nhất trong diện tích đồi núi).
  + Bậc bán bình nguyên và đồi trung du: Đông Nam Bộ, Trung du Bắc Bộ.
  + Bậc đồng bằng: Đồng bằng châu thổ sông Hồng, sông Cửu Long và dải đồng bằng duyên hải miền Trung.
  + Bậc thềm lục địa nông và mở rộng ở phía Bắc và phía Nam.

2. Tác động sâu sắc của khí hậu nhiệt đới ẩm gió mùa:
- Quá trình xâm thực mạnh mẽ ở vùng đồi núi:
  + Nhiệt độ cao kết hợp lượng mưa lớn làm quá trình phong hóa hóa học diễn ra nhanh chóng, lớp vỏ phong hóa dày, tơi xốp.
  + Mưa rào tập trung làm đất dốc bị xói mòn, rửa trôi trơ sỏi đá; hiện tượng trượt lở đất ở sườn dốc diễn ra phổ biến vào mùa mưa.
  + Nước mưa hòa tan đá vôi tạo nên địa hình cacxtơ nhiệt đới độc đáo với hàng vạn hang động kỳ vĩ (Phong Nha - Kẻ Bàng, Vịnh Hạ Long, Tam Cốc - Bích Động).
- Quá trình bồi tụ nhanh chóng ở vùng đồng bằng hạ lưu:
  + Đất đá bị bào mòn từ thượng nguồn được dòng nước sông ngòi chuyên chở về hạ lưu bồi đắp thành những châu thổ rộng lớn.
  + Đồng bằng sông Hồng và sông Cửu Long hằng năm vẫn tiếp tục lấn ra biển ở các vùng bãi bồi ven biển (Kim Sơn - Ninh Bình, Đất Mũi - Cà Mau lấn ra biển từ 60 - 80m/năm).`,
    expertTips: "Nhớ nêu công thức: 'Xâm thực mạnh ở miền núi đi đôi với bồi tụ nhanh ở đồng bằng châu thổ'."
  },
  {
    id: "essay-03",
    topicGroup: "population",
    topicName: "Dân cư & Cộng đồng Dân tộc",
    level: "Vận dụng",
    prompt: "Phân tích đặc điểm phân bố dân cư nước ta. Vì sao việc phân bố lại dân cư và nguồn lao động giữa các vùng lãnh thổ có ý nghĩa chiến lược đối với sự phát triển kinh tế - xã hội?",
    maxScore: 2.5,
    atlatReference: "Atlat trang 15 (Dân số)",
    keyConcepts: ["Phân bố không đều", "Đồng bằng dày đặc, miền núi thưa thớt", "Bắc - Nam, Nông thôn - Đô thị", "Khai thác tài nguyên", "Bảo vệ an ninh quốc phòng"],
    scoringRubric: [
      { criterion: "Nêu hiện trạng phân bố không đều", point: 1.0, detail: "Chênh lệch giữa đồng bằng (>1000 người/km²) và miền núi (<100 người/km²); chênh lệch nông thôn (~63%) và thành thị (~37%)." },
      { criterion: "Ý nghĩa khai thác tiềm năng tài nguyên", point: 0.75, detail: "Miền núi giàu khoáng sản, thủy điện, rừng nhưng thiếu lao động; đồng bằng thừa lao động nhưng cạn kiệt tài nguyên đất đai." },
      { criterion: "Ý nghĩa bảo vệ an ninh quốc phòng và xã hội", point: 0.75, detail: "Giảm sức ép việc làm đồng bằng; tăng cường tiềm lực quốc phòng biên giới, thu hẹp khoảng cách giàu nghèo." }
    ],
    modelAnswer: `1. Đặc điểm phân bố dân cư nước ta:
- Dân cư phân bố không đều giữa các vùng lãnh thổ:
  + Giữa đồng bằng và miền núi: Đồng bằng chỉ chiếm 1/4 diện tích nhưng tập trung khoảng 75% dân số; mật độ dân số rất cao (ĐBSH >1.000 người/km², ĐBSCL khoảng 430 người/km²). Miền núi chiếm 3/4 diện tích nhưng chỉ có 25% dân số; mật độ thấp (Tây Bắc, Tây Nguyên nhiều nơi <100 người/km²).
  + Giữa nông thôn và thành thị: Dân cư sinh sống chủ yếu ở nông thôn (chiếm khoảng 62-63%), dân thành thị chiếm khoảng 37-38% (tỉ lệ dân thành thị đang tăng nhanh nhờ công nghiệp hóa).

2. Ý nghĩa chiến lược của việc phân bố lại dân cư và nguồn lao động:
- Khai thác hợp lý nguồn tài nguyên thiên nhiên của đất nước:
  + Vùng trung du và miền núi là nơi tập trung phần lớn tài nguyên khoáng sản, trữ năng thủy điện, tiềm năng đất badan, đất feralit trồng cây công nghiệp và lâm nghiệp nhưng lại thiếu lao động có tay nghề.
  + Ngược lại, các vùng đồng bằng đất chật người đông, tài nguyên đất đai bình quân đầu người rất thấp, thiếu việc làm. Do đó, điều chuyển lao động lên vùng núi giúp đánh thức tiềm năng to lớn của vùng cao.
- Giải quyết việc làm và nâng cao đời sống nhân dân:
  + Giảm bớt sức ép việc làm, quá tải hạ tầng đô thị, nhà ở, y tế, giáo dục và ô nhiễm môi trường tại các đô thị và đồng bằng châu thổ.
- Củng cố quốc phòng - an ninh vững chắc:
  + Vùng trung du miền núi, biên giới và hải đảo có vị trí trọng yếu về an ninh quốc phòng. Phân bố dân cư hợp lý giúp xây dựng thế trận quốc phòng toàn dân và an ninh nhân dân vững chắc, bảo vệ toàn vẹn chủ quyền lãnh thổ biên cương Tổ quốc.`,
    expertTips: "Bài làm điểm cao cần liên hệ thực tế các chính sách: Dự án phát triển kinh tế vùng Tây Nguyên, chính sách định canh định cư, và xây dựng nông thôn mới."
  },
  {
    id: "essay-04",
    topicGroup: "economy",
    topicName: "Nông nghiệp & An ninh lương thực",
    level: "Vận dụng cao",
    prompt: "So sánh thế mạnh và hạn chế trong phát triển sản xuất cây công nghiệp lâu năm giữa vùng Tây Nguyên và vùng Đông Nam Bộ?",
    maxScore: 3.0,
    atlatReference: "Atlat trang 19, 28, 29",
    keyConcepts: ["Đất đỏ badan", "Khí hậu cận xích đạo", "Cà phê, Cao su, Điều, Tiêu", "Mùa khô thiếu nước", "Công nghiệp chế biến"],
    scoringRubric: [
      { criterion: "So sánh thế mạnh tự nhiên", point: 1.0, detail: "Tây Nguyên: Đất badan diện tích lớn tập trung trên các cao nguyên xếp tầng, khí hậu phân hóa theo độ cao (chuyên canh cà phê vối, chè, tiêu). Đông Nam Bộ: Đất badan màu mỡ kết hợp đất xám phù sa cổ địa hình lượn sóng, nhiệt độ cao ổn định ít gió bão (vựa cao su số 1 cả nước)." },
      { criterion: "So sánh thế mạnh kinh tế - xã hội", point: 1.0, detail: "Đông Nam Bộ vượt trội về công nghiệp chế biến, hạ tầng giao thông cảng biển và thị trường. Tây Nguyên có kinh nghiệm trồng cây lâu năm của đồng bào nhưng chế biến còn đơn giản." },
      { criterion: "So sánh hạn chế và giải pháp", point: 1.0, detail: "Tây Nguyên: Mùa khô gay gắt thiếu nước nghiêm trọng, hạ tầng giao thông khó khăn. Đông Nam Bộ: Đất xám dễ bạc màu, thiếu nước mùa khô, cạnh tranh quỹ đất với khu công nghiệp và đô thị." }
    ],
    modelAnswer: `1. Điểm tương đồng:
- Cả hai vùng đều là những vùng chuyên canh cây công nghiệp lâu năm lớn nhất cả nước.
- Đều có khí hậu cận xích đạo gió mùa với nền nhiệt ẩm cao, phân hóa rõ rệt thành hai mùa mưa - khô.
- Đều có diện tích đất đỏ badan màu mỡ, tầng phong hóa sâu, giàu dinh dưỡng thích hợp cho nhiều loại cây công nghiệp lâu năm có giá trị xuất khẩu cao.

2. Điểm khác biệt:
a. Về điều kiện tự nhiên và cơ cấu cây trồng:
- Vùng Tây Nguyên:
  + Địa hình là các cao nguyên badan xếp tầng rộng lớn (Đắk Lắk, Pleiku, Di Linh...), khí hậu có sự phân hóa theo độ cao từ nhiệt đới lên cận nhiệt đới mát mẻ.
  + Cây trồng chủ lực: Đứng số 1 cả nước về diện tích và sản lượng Cà phê (đặc biệt cà phê Robusta), hồ tiêu và là vùng duy nhất trồng được cây chè quy mô lớn ở miền Nam (Lâm Đồng).
- Vùng Đông Nam Bộ:
  + Địa hình bán bình nguyên lượn sóng thoai thoải, cơ cấu đất gồm đất đỏ badan và đất xám phù sa cổ thoát nước tốt. Khí hậu cận xích đạo nóng đều quanh năm, ít chịu ảnh hưởng của bão và gió lốc.
  + Cây trồng chủ lực: Đứng số 1 cả nước về diện tích và sản lượng Cao su, cây Điều, và cây Hồ tiêu.

b. Về điều kiện kinh tế - xã hội:
- Đông Nam Bộ vượt trội hơn hẳn Tây Nguyên về: Mạng lưới giao thông hoàn chỉnh; hệ thống cảng biển nước sâu (Cái Mép - Thị Vải, Cát Lái); cơ sở hạ tầng công nghiệp chế biến hiện đại; thu hút vốn FDI và thị trường tiêu thụ rộng lớn.
- Tây Nguyên có ưu thế về nguồn lao động giàu kinh nghiệm chuyên canh cây lâu năm, tuy nhiên cơ sở công nghiệp chế biến tại chỗ còn hạn chế, chủ yếu xuất khẩu nông sản thô.

c. Khó khăn lớn nhất của mỗi vùng:
- Tây Nguyên: Mùa khô kéo dài 4-5 tháng gây thiếu nước trầm trọng cho cây cà phê, sụt giảm mực nước ngầm; nguy cơ suy thoái rừng đầu nguồn.
- Đông Nam Bộ: Đất xám dễ bị rửa trôi bạc màu; mùa khô thiếu nước tưới; sự cạnh tranh gay gắt về quỹ đất giữa cây công nghiệp với các khu công nghiệp và đô thị hóa.`,
    expertTips: "Lập bảng so sánh 2 cột (Tây Nguyên vs Đông Nam Bộ) theo các tiêu chí: Địa hình đất đai - Khí hậu - Cơ cấu cây trồng - Cơ sở chế biến - Khó khăn then chốt để giám khảo dễ chấm và cho điểm tuyệt đối."
  },
  {
    id: "essay-05",
    topicGroup: "regions",
    topicName: "Phát triển kinh tế biển & Chủ quyền Tổ quốc",
    level: "Chuyên sâu",
    prompt: "Trình bày 4 ngành kinh tế biển then chốt của Việt Nam. Giải thích tại sao việc phát triển kinh tế biển phải gắn liền mật thiết với nhiệm vụ bảo vệ chủ quyền biên giới hải đảo thiêng liêng?",
    maxScore: 3.0,
    atlatReference: "Atlat trang 4-5, 20, 24, 25",
    keyConcepts: ["Khai thác thủy hải sản", "Khai thác khoáng sản dầu khí", "Giao thông vận tải biển", "Du lịch biển đảo", "Chủ quyền 12 hải lý", "Vùng đặc quyền kinh tế 200 hải lý"],
    scoringRubric: [
      { criterion: "Nêu 4 ngành kinh tế biển then chốt", point: 1.5, detail: "Trình bày đầy đủ: Đánh bắt - nuôi trồng thủy hải sản; Khai thác và chế biến khoáng sản dầu khí biển; Giao thông vận tải biển và cảng biển; Du lịch biển - đảo." },
      { criterion: "Giải thích mối quan hệ kinh tế và chủ quyền", point: 1.0, detail: "Tàu cá ngư dân bám biển là những cột mốc chủ quyền sống; kinh tế biển tạo nguồn lực tài chính củng cố hải quân, cảnh sát biển; cảng biển đảo tạo tiền đồn phòng thủ." },
      { criterion: "Liên hệ chiến lược biển Việt Nam", point: 0.5, detail: "Mục tiêu trở thành quốc gia biển mạnh, phát triển bền vững kinh tế biển gắn liền với công ước UNCLOS 1982." }
    ],
    modelAnswer: `1. Bốn ngành kinh tế biển then chốt của Việt Nam:
a. Khai thác và nuôi trồng hải sản:
- Nước ta có hơn 2.000 loài cá, hàng trăm loài tôm mực có giá trị kinh tế cao; 4 ngư trường trọng điểm. Hoạt động đánh bắt xa bờ (Hoàng Sa, Trường Sa, DK1) đang được đẩy mạnh gắn với hiện đại hóa đội tàu composite, tàu vỏ thép. Nuôi trồng thủy sản lồng bè trên biển phát triển mạnh ở Quảng Ninh, Khánh Hòa, Kiên Giang.
b. Khai thác và chế biến khoáng sản biển:
- Thềm lục địa thềm lục địa miền Nam giàu dầu khí với các bể trầm tích Cửu Long, Nam Côn Sơn, Sông Hồng, Thổ Chu - Mã Lai; công nghiệp lọc hóa dầu (Dung Quất, Nghi Sơn).
- Khai thác titan ven biển miền Trung; nghề làm muối chất lượng cao ở Cà Ná (Ninh Thuận), Sa Huỳnh (Quảng Ngãi).
c. Giao thông vận tải biển:
- Nằm trên tuyến đường hàng hải quốc tế huyết mạch; phát triển hệ thống cảng biển nước sâu cửa ngõ quốc tế (Cảng Cái Lân, Lạch Huyện - Hải Phòng, Cái Mép - Thị Vải, Cần Giờ...).
d. Du lịch biển - đảo:
- Bờ biển dài với hàng trăm bãi tắm cát trắng nắng vàng (Trà Cổ, Sầm Sơn, Lăng Cô, Mỹ Khê, Nha Trang, Mũi Né, Phú Quốc); Vịnh Hạ Long, Vịnh Nha Trang được vinh danh trong danh sách vịnh đẹp nhất thế giới.

2. Ý nghĩa sống còn của việc phát triển kinh tế biển gắn với bảo vệ chủ quyền biển đảo:
- Ngư dân và tàu cá là "những cột mốc chủ quyền sống": Sự hiện diện thường xuyên của hàng vạn tàu cá ngư dân đánh bắt ở ngư trường truyền thống Hoàng Sa, Trường Sa và nhà giàn DK1 là bằng chứng lịch sử và pháp lý khẳng định chủ quyền vững chắc của Việt Nam theo luật pháp quốc tế (UNCLOS 1982).
- Tạo tiềm lực vật chất để hiện đại hóa lực lượng bảo vệ biển: Kinh tế biển đóng góp lớn cho ngân sách nhà nước, tạo nguồn lực tài chính hùng hậu để trang bị tàu tuần tra hiện đại cho lực lượng Hải quân, Cảnh sát biển, Kiểm ngư bảo vệ toàn vẹn lãnh thổ.
- Các hòn đảo tiền đồn tạo thành hệ thống phòng thủ chiến lược: Xây dựng cơ sở hạ tầng dân sinh, âu tàu, trạm hải đăng, sân bay trên các đảo (Phú Quốc, Côn Đảo, Bạch Long Vĩ, quần đảo Trường Sa) vừa phát triển kinh tế vừa hình thành pháo đài thép bảo vệ Tổ quốc từ hướng biển.`,
    expertTips: "Câu hỏi này rất hay xuất hiện trong đề thi chuyên và HSG cấp Tỉnh. Phải sử dụng chính xác các thuật ngữ pháp lý: Lãnh hải 12 hải lý, Vùng đặc quyền kinh tế 200 hải lý và Thềm lục địa."
  }
];
