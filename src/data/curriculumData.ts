import { TopicGroup, SpecializedSkillCard, SpecializedSkill, AtlatChallenge, ChartMasterChallenge, DayChallenge, LeaderboardUser, MockExam, ExamQuestion } from "../types";
import { DETAILED_CHART_CHALLENGES } from "./chartChallengesData";
import { MOCK_EXAMS as COMPREHENSIVE_MOCK_EXAMS } from "./mockExamsData";

export const TOPIC_GROUPS: TopicGroup[] = [
  {
    id: "natural",
    title: "Địa lí tự nhiên",
    icon: "CloudSunRain",
    description: "Vị trí địa lí, địa hình 3/4 đồi núi, khí hậu nhiệt đới ẩm gió mùa, mạng lưới sông ngòi dày đặc, đất feralit & sinh vật nhiệt đới.",
    color: "#146B5B",
    topics: [
      {
        id: "natural-1",
        groupId: "natural",
        title: "Vị trí địa lí và phạm vi lãnh thổ",
        summary: "Ý nghĩa chiến lược về tự nhiên, kinh tế, quốc phòng của vị trí rìa đông bán đảo Đông Dương, tiếp giáp Biển Đông.",
        atlatPage: "Trang 4, 5 (Hành chính) & Trang 6, 7 (Hình thể)",
        difficulty: "Chuyên sâu",
        content: {
          knowledge: {
            coreConcepts: [
              { term: "Tọa độ địa lí", explanation: "Điểm cực Bắc (23°23'B - Lũng Cú, Hà Giang), cực Nam (8°34'B - Đất Mũi, Cà Mau), cực Tây (102°09'Đ - Sín Thầu, Điện Biên), cực Đông (109°28'Đ - Vạn Thạnh, Khánh Hòa)." },
              { term: "Tính chất nhiệt đới ẩm gió mùa", explanation: "Nằm hoàn toàn trong vùng nội chí tuyến bán cầu Bắc, tiếp giáp biển Đông trù phú và nằm trong khu vực hoạt động của gió mùa châu Á." },
              { term: "Vùng nội thủy & Lãnh hải", explanation: "Lãnh hải rộng 12 hải lý tính từ đường cơ sở. Vùng đặc quyền kinh tế rộng 200 hải lý có chủ quyền hoàn toàn về kinh tế." }
            ],
            mainPoints: [
              {
                title: "Ý nghĩa tự nhiên của vị trí",
                bullets: [
                  "Quy định thiên nhiên mang tính chất nhiệt đới ẩm gió mùa, xanh tốt quanh năm khác với hoang mạc cùng vĩ độ ở Tây Á hay Bắc Phi.",
                  "Nằm ở nơi giao thoa của các luồng sinh vật (Ấn Độ - Miến Điện, Mã Lai - In-đô-nê-xi-a, Hoa Nam) tạo nên tính đa dạng sinh học cao.",
                  "Nằm trên vành đai sinh khoáng Thái Bình Dương và Địa Trung Hải nên có tài nguyên khoáng sản phong phú.",
                  "Hạn chế: Thường xuyên chịu ảnh hưởng của bão, lũ lụt, hạn hán, biến đổi khí hậu."
                ]
              },
              {
                title: "Ý nghĩa kinh tế - xã hội & an ninh quốc phòng",
                bullets: [
                  "Cửa ngõ thông ra biển của Lào, Đông Bắc Thái Lan, Tây Nam Trung Quốc.",
                  "Nằm trên ngã tư đường hàng hải và hàng không quốc tế huyết mạch.",
                  "Thuận lợi hội nhập kinh tế khu vực Đông Nam Á và toàn cầu.",
                  "Biển Đông có ý nghĩa chiến lược sống còn trong bảo vệ chủ quyền lãnh thổ."
                ]
              }
            ],
            commonTraps: [
              "Nhầm lẫn giữa diện tích vùng biển (>1 triệu km²) với diện tích phần đất liền (khoảng 331.212 km²).",
              "Bỏ quên yếu tố tiếp giáp Biển Đông khi giải thích tại sao Việt Nam không bị khô hạn như các nước cùng vĩ độ ở Bắc Phi.",
              "Không gắn kết vị trí địa lí với sự phân hóa thiên nhiên Bắc - Nam và Đông - Tây."
            ]
          },
          atlatGuide: {
            page: "Trang 4 - 5 & 6 - 7",
            pageName: "Hành chính & Địa lí chung",
            symbolsToNote: ["Đường cơ sở", "Cột mốc tọa độ 4 điểm cực", "Vị trí quần đảo Hoàng Sa & Trường Sa", "Tuyến đường biển quốc tế"],
            stepsToRead: [
              "Bước 1: Xác định kinh độ, vĩ độ các điểm cực trên khung lưới bản đồ.",
              "Bước 2: Đối chiếu đường biên giới trên đất liền giáp 3 nước (Trung Quốc, Lào, Campuchia).",
              "Bước 3: Chỉ rõ tên các tỉnh/thành phố giáp biển từ Quảng Ninh đến Kiên Giang (28 tỉnh/thành).",
              "Bước 4: Nêu bật các đảo lớn (Phú Quốc, Cát Bà) và hai quần đảo xa bờ chiến lược Hoàng Sa, Trường Sa."
            ],
            sampleExercise: {
              question: "Dựa vào Atlat Địa lí Việt Nam trang 4-5, hãy nêu tên 3 tỉnh của nước ta có đường biên giới giáp cả 2 quốc gia láng giềng.",
              atlatClues: ["Quan sát ngã ba biên giới Việt - Trung - Lào", "Quan sát ngã ba Đông Dương Việt - Lào - Campuchia"],
              standardAnswer: "Đó là Điện Biên (giáp Trung Quốc và Lào), Kon Tum (giáp Lào và Campuchia). Ngoài ra Quảng Ninh giáp TQ trên đất liền và trên biển."
            }
          },
          statistics: {
            tableTitle: "Chiều dài đường biên giới và bờ biển Việt Nam",
            unit: "km",
            headers: ["Đối tượng", "Chiều dài (km)", "Tỉ lệ / Ý nghĩa"],
            rows: [
              { label: "Biên giới giáp Trung Quốc", values: [1400] },
              { label: "Biên giới giáp Lào", values: [2100] },
              { label: "Biên giới giáp Campuchia", values: [1100] },
              { label: "Đường bờ biển (từ Móng Cái đến Hà Tiên)", values: [3260] }
            ],
            observations: [
              "Đường biên giới trên đất liền dài hơn 4.600 km, chủ yếu đi qua địa hình miền núi hiểm trở.",
              "Đường bờ biển cong hình chữ S dài 3.260 km tạo lợi thế to lớn để phát triển kinh tế biển tổng hợp."
            ],
            calculations: ["Tổng chiều dài biên giới trên đất liền = 1400 + 2100 + 1100 = 4600 km.", "Tỉ số giữa bờ biển / diện tích đất liền thuộc nhóm cao trên thế giới (khoảng 1km bờ biển / 100km² đất liền)."]
          },
          thinking: {
            type: "Chứng minh",
            framework: [
              "1. Nhận định: Khẳng định vị trí nước ta mang tính chất cầu nối và nhiệt đới ẩm.",
              "2. Dẫn chứng tọa độ, tiếp giáp biển và gió mùa.",
              "3. Phân tích ảnh hưởng đến cảnh quan, khí hậu, sinh vật.",
              "4. Kết luận đánh giá thuận lợi và thách thức."
            ],
            samplePrompt: "Chứng minh rằng vị trí địa lí quy định tính chất nhiệt đới ẩm gió mùa của tự nhiên Việt Nam.",
            expertOutline: [
              "Tính chất nhiệt đới: Nằm hoàn toàn trong đới nội chí tuyến (8°34'B đến 23°23'B), góc nhập xạ lớn, 2 lần Mặt Trời lên thiên đỉnh trong năm, tổng lượng bức xạ và cán cân bức xạ luôn dương quanh năm.",
              "Tính chất ẩm: Tiếp giáp Biển Đông rộng lớn với lượng bốc hơi cao, các khối khí di chuyển qua biển được tăng cường ẩm, mang lại lượng mưa trung bình năm 1500 - 2000 mm, độ ẩm >80%.",
              "Tính chất gió mùa: Nằm trong khu vực hoạt động của gió mùa châu Á, là nơi tranh chấp giữa các khối khí xích đạo, nhiệt đới và cực lục địa."
            ]
          },
          exercises: [
            {
              id: "q-nat-1",
              level: "Nhận biết",
              question: "Nước ta nằm hoàn toàn trong vùng nội chí tuyến bán cầu Bắc nên có:",
              options: [
                "Nhiệt độ trung bình năm cao, cán cân bức xạ luôn dương",
                "Khí hậu khô hạn như các nước Tây Á",
                "Chịu ảnh hưởng trực tiếp của gió Tây ôn đới",
                "Băng tuyết xuất hiện thường xuyên quanh năm"
              ],
              correctAnswer: 0,
              explanation: "Vị trí nội chí tuyến bán cầu Bắc mang lại nguồn nhiệt bức xạ dồi dào, góc nhập xạ lớn và 2 lần Mặt Trời lên thiên đỉnh mỗi năm.",
              atlatReference: "Atlat trang 4, 9"
            },
            {
              id: "q-nat-2",
              level: "Vận dụng cao",
              question: "Tại sao thiên nhiên nước ta khác hẳn với thiên nhiên các nước cùng vĩ độ ở Tây Á và Bắc Phi?",
              options: [
                "Do địa hình nước ta có nhiều dãy núi cao đồ sộ chắn gió",
                "Do tiếp giáp Biển Đông rộng lớn và nằm trong khu vực hoạt động của gió mùa châu Á",
                "Do mạng lưới sông ngòi của nước ta nhận được phù sa từ bên ngoài lãnh thổ",
                "Do nước ta nằm gần xích đạo hơn các khu vực đó"
              ],
              correctAnswer: 1,
              explanation: "Biển Đông đóng vai trò nguồn dự trữ nhiệt ẩm khổng lồ kết hợp các khối khí gió mùa di chuyển qua biển làm biến tính không khí, mang lại mưa lớn, giúp nước ta thoát khỏi cảnh khô cằn của hoang mạc nhiệt đới.",
              trapWarning: "Học sinh hay chọn nhầm nguyên nhân địa hình hoặc khoảng cách tới xích đạo thay vì tổ hợp Biển Đông + Gió mùa."
            },
            {
              id: "q-nat-3",
              level: "Thi chuyên",
              question: "Phân tích ý nghĩa chiến lược của vị trí địa lí đối với việc xây dựng đường lối phát triển kinh tế mở và bảo vệ toàn vẹn chủ quyền lãnh thổ Việt Nam.",
              options: [
                "Chỉ tập trung phát triển các ngành khai thác tài nguyên nội địa",
                "Phát huy vị thế cửa ngõ biển quốc tế của Đông Dương, gắn kết an ninh biển đảo với hội nhập kinh tế toàn cầu",
                "Hạn chế thông thương đường biển vì nguy cơ thiên tai bão nhiệt đới",
                "Thay thế hoàn toàn giao lưu đường bộ bằng hành lang kinh tế hàng không"
              ],
              correctAnswer: 1,
              explanation: "Ý nghĩa chiến lược cốt lõi trong đề thi chuyên là tư duy kết hợp 'kinh tế biển mở' với 'chủ quyền an ninh quốc phòng' trên Biển Đông và các vành đai biên giới.",
              atlatReference: "Atlat trang 4-5"
            }
          ],
          miniTest: [
            {
              id: "mt-nat-1",
              level: "Thông hiểu",
              question: "Điểm cực Tây trên đất liền của nước ta thuộc tỉnh nào sau đây?",
              options: ["Hà Giang", "Điện Biên", "Khánh Hòa", "Cà Mau"],
              correctAnswer: 1,
              explanation: "Điểm cực Tây là xã Sín Thầu, huyện Mường Nhé, tỉnh Điện Biên (102°09'Đ)."
            },
            {
              id: "mt-nat-2",
              level: "Vận dụng",
              question: "Vùng biển có chiều rộng 12 hải lý tính từ đường cơ sở ra phía ngoài được gọi là:",
              options: ["Vùng tiếp giáp lãnh hải", "Vùng nội thủy", "Lãnh hải", "Vùng thềm lục địa"],
              correctAnswer: 2,
              explanation: "Lãnh hải là vùng biển thuộc chủ quyền quốc gia trên biển, có chiều rộng 12 hải lý tính từ đường cơ sở."
            }
          ]
        }
      },
      {
        id: "natural-2",
        groupId: "natural",
        title: "Địa hình và Khí hậu Việt Nam",
        summary: "Đặc điểm đồi núi chiếm 3/4 diện tích, hướng tây bắc - đông nam và vòng cung, chế độ nhiệt - mưa phân hóa sâu sắc.",
        atlatPage: "Trang 6, 7 (Địa hình) & Trang 9 (Khí hậu)",
        difficulty: "Chuyên sâu",
        content: {
          knowledge: {
            coreConcepts: [
              { term: "Cấu trúc địa hình cổ được trẻ lại", explanation: "Vận động Tân kiến tạo (kỉ Neogen - Đệ tứ) làm đứt gãy, nâng cao và trẻ lại địa hình cổ hình thành từ Paleozoi - Mezozoi." },
              { term: "Hai hướng địa hình chính", explanation: "Hướng Tây Bắc - Đông Nam (Hoàng Liên Sơn, Trường Sơn Bắc) và hướng vòng cung (4 cánh cung Sông Gâm, Ngân Sơn, Bắc Sơn, Đông Triều; Trường Sơn Nam)." },
              { term: "Gió mùa mùa đông (Gió mùa Đông Bắc)", explanation: "Nguồn gốc từ cao áp Xibia thổi qua lục địa Trung Quốc, gây ra nửa đầu đông lạnh khô, nửa sau đông lạnh ẩm mưa phùn ở miền Bắc." }
            ],
            mainPoints: [
              {
                title: "Đặc điểm địa hình 4 khu vực đồi núi",
                bullets: [
                  "Đông Bắc: Đồi núi thấp chiếm ưu thế, hướng cánh cung chụm lại ở Tam Đảo, đón gió mùa Đông Bắc trực diện.",
                  "Tây Bắc: Địa hình cao nhất nước, hướng Tây Bắc - Đông Nam kẹp giữa sông Hồng và sông Cả, có dãy Hoàng Liên Sơn hùng vĩ.",
                  "Trường Sơn Bắc: Núi thấp và trung bình, hẹp ngang, sườn Đông dốc sườn Tây thoải, phân cách bởi các đèo hiểm trở (Ngang, Hải Vân).",
                  "Trường Sơn Nam: Các khối núi cao Kontum, Nam Cực Bộ kết hợp cao nguyên badan xếp tầng thoải dần về phía nam."
                ]
              }
            ],
            commonTraps: [
              "Nhầm lẫn tính chất nửa đầu đông (lạnh khô) và nửa sau đông (lạnh ẩm có mưa phùn) ở miền Bắc.",
              "Quên vai trò chắn gió của dãy Bạch Mã làm ranh giới tự nhiên phía nam của gió mùa Đông Bắc."
            ]
          },
          atlatGuide: {
            page: "Trang 9",
            pageName: "Khí hậu",
            symbolsToNote: ["Mũi tên gió mùa Đông Bắc (xanh)", "Mũi tên gió mùa Tây Nam (đỏ)", "Đường đẳng nhiệt", "Biểu đồ khí hậu các trạm"],
            stepsToRead: [
              "Bước 1: So sánh biểu đồ nhiệt - mưa giữa trạm Hà Nội, Huế, Đà Nẵng, TP. Hồ Chí Minh.",
              "Bước 2: Tìm tháng có nhiệt độ cao nhất, thấp nhất, biên độ nhiệt năm.",
              "Bước 3: Nhận xét mùa mưa: miền Bắc mưa hè thu; Trung Bộ mưa thu đông (tháng 9-12); Nam Bộ mưa hè thu (tháng 5-11)."
            ],
            sampleExercise: {
              question: "Dựa vào Atlat trang 9, giải thích tại sao Duyên hải miền Trung có mùa mưa lệch về thu - đông?",
              atlatClues: ["Quan sát hướng gió mùa đông qua biển", "Quan sát dải hội tụ nhiệt đới và bão tháng 9-11", "Tác động chắn địa hình của dãy Trường Sơn Bắc và Trường Sơn Nam"],
              standardAnswer: "Do gió mùa Đông Bắc đi qua vịnh Bắc Bộ mang hơi ẩm gặp bức chắn địa hình Trường Sơn gây mưa địa hình, kết hợp tác động của bão nhiệt đới và dải hội tụ dồn về phía nam vào các tháng 9, 10, 11."
            }
          },
          statistics: {
            tableTitle: "Nhiệt độ trung bình năm và biên độ nhiệt tại một số trạm khí tượng",
            unit: "°C",
            headers: ["Trạm", "Nhiệt độ TB năm (°C)", "Tháng lạnh nhất (°C)", "Tháng nóng nhất (°C)", "Biên độ nhiệt (°C)"],
            rows: [
              { label: "Lạng Sơn", values: [21.2, 12.6, 27.0, 14.4] },
              { label: "Hà Nội", values: [23.9, 16.4, 28.9, 12.5] },
              { label: "Huế", values: [25.1, 19.7, 29.4, 9.7] },
              { label: "TP. Hồ Chí Minh", values: [27.1, 25.8, 28.9, 3.1] }
            ],
            observations: [
              "Nhiệt độ trung bình năm tăng dần từ Bắc vào Nam.",
              "Biên độ nhiệt độ năm giảm dần từ Bắc vào Nam (Lạng Sơn 14.4°C xuống TP.HCM chỉ 3.1°C)."
            ],
            calculations: ["Biên độ nhiệt = Nhiệt độ tháng cao nhất - Nhiệt độ tháng thấp nhất."]
          },
          thinking: {
            type: "Giải thích",
            framework: [
              "1. Yếu tố bức xạ Mặt Trời (Vĩ độ).",
              "2. Yếu tố hoàn lưu gió mùa (Đông Bắc vs Tây Nam).",
              "3. Yếu tố địa hình chắn gió và đón gió."
            ],
            samplePrompt: "Tại sao biên độ nhiệt độ trung bình năm lại giảm dần từ Bắc vào Nam?",
            expertOutline: [
              "Từ Bắc vào Nam, vĩ độ giảm dần, góc nhập xạ tăng, lượng nhiệt nhận được quanh năm ổn định hơn.",
              "Miền Bắc chịu ảnh hưởng sâu sắc của gió mùa Đông Bắc làm hạ nhiệt độ mùa đông xuống thấp (dưới 18°C), tạo nên mùa đông lạnh thực sự.",
              "Miền Nam không chịu tác động của gió mùa Đông Bắc (bị dãy Bạch Mã ngăn lại), quanh năm nóng ấm, nhiệt độ các tháng ít chênh lệch."
            ]
          },
          exercises: [
            {
              id: "q-nat-4",
              level: "Thông hiểu",
              question: "Dãy núi nào được coi là ranh giới tự nhiên ngăn cản ảnh hưởng của gió mùa Đông Bắc xuống phía Nam nước ta?",
              options: ["Hoàng Liên Sơn", "Hoành Sơn", "Bạch Mã", "Đông Triều"],
              correctAnswer: 2,
              explanation: "Dãy Bạch Mã (vĩ tuyến 16°B) đâm ngang ra biển là bức tường ngăn gió mùa Đông Bắc, làm biến mất mùa đông lạnh ở phía Nam.",
              atlatReference: "Atlat trang 6, 9"
            }
          ],
          miniTest: [
            {
              id: "mt-nat-3",
              level: "Nhận biết",
              question: "Bốn cánh cung núi nổi tiếng của vùng Đông Bắc gồm:",
              options: [
                "Sông Gâm, Ngân Sơn, Bắc Sơn, Đông Triều",
                "Hoàng Liên Sơn, Con Voi, Pu Đen Đinh, Pu Sam Sao",
                "Trường Sơn Bắc, Trường Sơn Nam, Bạch Mã, Hoành Sơn",
                "Tam Đảo, Ba Vì, Yên Tử, Mẫu Sơn"
              ],
              correctAnswer: 0,
              explanation: "Vùng núi Đông Bắc có 4 cánh cung chụm lại ở Tam Đảo: Sông Gâm, Ngân Sơn, Bắc Sơn, Đông Triều."
            }
          ]
        }
      }
    ]
  },
  {
    id: "population",
    title: "Địa lí dân cư",
    icon: "Users",
    description: "Quy mô dân số đông, gia tăng dân số có xu hướng giảm, cơ cấu dân số vàng và già hóa, chuyển dịch việc làm & đô thị hóa.",
    color: "#1677B8",
    topics: [
      {
        id: "pop-1",
        groupId: "population",
        title: "Dân số, cơ cấu dân số và phân bố dân cư",
        summary: "Nước ta có hơn 100 triệu dân, 54 dân tộc anh em, phân bố không đều giữa đồng bằng và miền núi, nông thôn và thành thị.",
        atlatPage: "Trang 15 (Dân số), Trang 16 (Dân tộc)",
        difficulty: "Chuyên sâu",
        content: {
          knowledge: {
            coreConcepts: [
              { term: "Cơ cấu dân số vàng", explanation: "Tỉ lệ người trong độ tuổi lao động (15 - 64 tuổi) chiếm trên 65% tổng dân số, mở ra cơ hội vàng phát triển kinh tế." },
              { term: "Mật độ dân số chênh lệch", explanation: "Đồng bằng sông Hồng >1000 người/km², trong khi Tây Bắc và Tây Nguyên chỉ dưới 100 - 150 người/km²." }
            ],
            mainPoints: [
              {
                title: "Thực trạng phân bố dân cư",
                bullets: [
                  "Không đều giữa đồng bằng (75% dân số / 1/4 diện tích) và miền núi (25% dân số / 3/4 diện tích).",
                  "Không đều giữa thành thị (khoảng 38-40%) và nông thôn (60-62%), dù tốc độ đô thị hóa đang tăng nhanh.",
                  "Hậu quả: Đồng bằng chịu sức ép việc làm, tài nguyên, môi trường; Miền núi thiếu lao động khai thác thế mạnh."
                ]
              }
            ],
            commonTraps: [
              "Nhầm mật độ dân số tuyệt đối với quy mô dân số.",
              "Quên rằng tỉ lệ gia tăng tự nhiên đã giảm (<1%/năm) nhưng quy mô dân số hàng năm vẫn tăng khoảng 1 triệu người do quy mô nền dân số lớn."
            ]
          },
          atlatGuide: {
            page: "Trang 15",
            pageName: "Dân số",
            symbolsToNote: ["Màu nền mật độ dân số", "Tháp tuổi dân số năm 1999 và 2007/hiện hành", "Quy mô đô thị qua vòng tròn đỏ"],
            stepsToRead: [
              "Bước 1: Đọc bảng chú giải thang màu mật độ người/km².",
              "Bước 2: Xác định 2 đô thị đặc biệt (Hà Nội, TP.HCM) và các đô thị loại 1.",
              "Bước 3: Nhận xét sự phân tầng mật độ từ đồng bằng lên trung du, miền núi cao."
            ],
            sampleExercise: {
              question: "Dựa vào Atlat trang 15, giải thích vì sao Đồng bằng sông Hồng có mật độ dân số cao nhất nước?",
              atlatClues: ["Lịch sử khai thác lãnh thổ lâu đời nhất", "Nền nông nghiệp lúa nước thâm canh truyền thống cần nhiều lao động", "Mạng lưới đô thị, công nghiệp, dịch vụ dày đặc"],
              standardAnswer: "Do lịch sử định cư hàng nghìn năm của người Việt cổ, nền văn minh lúa nước cần tập trung nhân lực đắp đê thâm canh, đồng thời là trung tâm kinh tế, chính trị, giáo dục hàng đầu cả nước."
            }
          },
          statistics: {
            tableTitle: "Dân số thành thị và nông thôn nước ta giai đoạn 2010 - 2022",
            unit: "Nghìn người",
            headers: ["Năm", "Tổng dân số", "Thành thị", "Nông thôn", "Tỉ lệ thành thị (%)"],
            rows: [
              { label: "2010", values: [86947, 26462, 60485, 30.4] },
              { label: "2015", values: [91714, 30883, 60831, 33.7] },
              { label: "2020", values: [97583, 35932, 61651, 36.8] },
              { label: "2022", values: [99462, 37340, 62122, 37.5] }
            ],
            observations: [
              "Dân số thành thị tăng liên tục cả về số lượng tuyệt đối lẫn tỉ trọng trong cơ cấu.",
              "Tỉ lệ dân thành thị tăng từ 30.4% lên 37.5%, phản ánh quá trình công nghiệp hóa và đô thị hóa mở rộng."
            ],
            calculations: ["Tỉ lệ thành thị (%) = (Dân số thành thị / Tổng dân số) * 100."]
          },
          thinking: {
            type: "Mối quan hệ nhân quả",
            framework: [
              "1. Phân bố dân cư chịu tác động của nhân tố tự nhiên (địa hình, nguồn nước) và nhân tố kinh tế - xã hội (lịch sử khai thác, phương thức sản xuất).",
              "2. Đánh giá hậu quả kinh tế và môi trường.",
              "3. Giải pháp chiến lược: Điều động lao động, phát triển công nghiệp nông thôn, đô thị hóa bền vững."
            ],
            samplePrompt: "Phân tích tác động của phân bố dân cư không đều đến phát triển kinh tế - xã hội.",
            expertOutline: [
              "Đối với đồng bằng: Nguồn lao động dồi dào, thị trường lớn nhưng gây sức ép thất nghiệp, thiếu việc làm, quá tải hạ tầng y tế, giáo dục, ô nhiễm môi trường.",
              "Đối với miền núi: Giàu tài nguyên rừng, khoáng sản, thủy điện nhưng thiếu lao động, đặc biệt là lao động kĩ thuật, làm chậm nhịp độ phát triển kinh tế biên giới."
            ]
          },
          exercises: [
            {
              id: "q-pop-1",
              level: "Thông hiểu",
              question: "Biểu hiện rõ nét nhất của cơ cấu 'dân số vàng' ở nước ta hiện nay là:",
              options: [
                "Số lượng nam giới nhiều hơn nữ giới ở mọi lứa tuổi",
                "Tỉ lệ người dưới 15 tuổi cao gấp đôi người già",
                "Tỉ lệ dân số trong độ tuổi lao động cao gấp đôi nhóm dân số phụ thuộc",
                "Toàn bộ lực lượng lao động đều có tay nghề kĩ thuật cao"
              ],
              correctAnswer: 2,
              explanation: "Cơ cấu dân số vàng đạt được khi tỉ số phụ thuộc nhỏ hơn 50%, tức cứ 2 người lao động chỉ gánh vác tối đa 1 người phụ thuộc.",
              atlatReference: "Atlat trang 15"
            }
          ],
          miniTest: [
            {
              id: "mt-pop-1",
              level: "Nhận biết",
              question: "Vùng có mật độ dân số thấp nhất nước ta là:",
              options: ["Tây Bắc", "Tây Nguyên", "Bắc Trung Bộ", "Đông Bắc"],
              correctAnswer: 0,
              explanation: "Tây Bắc có địa hình núi non hiểm trở nhất, chia cắt mạnh nên có mật độ dân số thấp nhất cả nước."
            }
          ]
        }
      }
    ]
  },
  {
    id: "economy",
    title: "Địa lí kinh tế",
    icon: "Factory",
    description: "Chuyển dịch cơ cấu ngành kinh tế: Nông - lâm - thủy sản, công nghiệp hiện đại hóa, mạng lưới dịch vụ giao thông & du lịch bùng nổ.",
    color: "#E29578",
    topics: [
      {
        id: "econ-1",
        groupId: "economy",
        title: "Nông nghiệp, Lâm nghiệp và Thủy sản",
        summary: "Sản xuất lúa gạo, cây công nghiệp lâu năm, chăn nuôi gia súc lớn và phát triển kinh tế biển thủy hải sản.",
        atlatPage: "Trang 18, 19, 20 (Nông, Lâm, Thủy sản)",
        difficulty: "Chuyên sâu",
        content: {
          knowledge: {
            coreConcepts: [
              { term: "Vùng chuyên canh", explanation: "Hình thức tổ chức lãnh thổ nông nghiệp tập trung sản xuất một số sản phẩm thế mạnh dựa trên lợi thế so sánh sinh thái và hạ tầng chế biến." },
              { term: "Cơ cấu ngành nông nghiệp", explanation: "Giảm tỉ trọng trồng trọt, tăng tỉ trọng chăn nuôi; trong trồng trọt giảm cây lương thực, tăng cây công nghiệp, ăn quả, rau hoa chất lượng cao." }
            ],
            mainPoints: [
              {
                title: "Thế mạnh nông nghiệp các vùng",
                bullets: [
                  "Đồng bằng sông Cửu Long: Vựa lúa, thủy sản, cây ăn quả lớn nhất nước.",
                  "Đông Nam Bộ: Vùng chuyên canh cao su, điều, hồ tiêu lớn nhất nước gắn liền công nghiệp chế biến.",
                  "Tây Nguyên: Vùng chuyên canh cà phê số 1, hồ tiêu, cao su trên đất badan xếp tầng.",
                  "Trung du và miền núi Bắc Bộ: Thế mạnh cây chè, cây dược liệu cận nhiệt và ôn đới, trâu bò thịt."
                ]
              }
            ],
            commonTraps: [
              "Nhầm lẫn diện tích cây công nghiệp lâu năm và cây công nghiệp hàng năm.",
              "Cho rằng ĐBSH có diện tích trồng lúa lớn nhất nước (thực tế ĐBSCL lớn hơn gấp nhiều lần cả diện tích và sản lượng)."
            ]
          },
          atlatGuide: {
            page: "Trang 18, 19, 20",
            pageName: "Nông - Lâm - Thủy sản",
            symbolsToNote: ["Cây lúa (bông lúa vàng)", "Cây cà phê, cao su, chè", "Đồ thị sản lượng thủy sản nuôi trồng vs khai thác"],
            stepsToRead: [
              "Bước 1: Đọc diện tích và sản lượng lúa của các tỉnh qua cột màu xanh và vàng trang 19.",
              "Bước 2: Tìm các vùng chuyên canh cây công nghiệp chính (Tây Nguyên, Đông Nam Bộ).",
              "Bước 3: Nhận xét cơ cấu sản lượng thủy sản trang 20 (nuôi trồng tăng nhanh hơn khai thác)."
            ],
            sampleExercise: {
              question: "Dựa vào Atlat trang 20, hãy so sánh sản lượng thủy sản nuôi trồng và khai thác của Đồng bằng sông Cửu Long với Duyên hải Nam Trung Bộ.",
              atlatClues: ["Cột màu xanh thể hiện nuôi trồng", "Cột màu hồng thể hiện khai thác"],
              standardAnswer: "ĐBSCL đứng đầu cả nước cả về nuôi trồng và khai thác, nhưng sản lượng nuôi trồng áp đảo (tôm, cá nước ngọt, lợ). DHNTB có thế mạnh nổi trội về khai thác hải sản biển xa bờ (ngư trường Hoàng Sa, Trường Sa, Ninh Thuận - Bình Thuận)."
            }
          },
          statistics: {
            tableTitle: "Sản lượng thủy sản nước ta phân theo khai thác và nuôi trồng",
            unit: "Nghìn tấn",
            headers: ["Năm", "Tổng sản lượng", "Khai thác", "Nuôi trồng", "Tỉ trọng nuôi trồng (%)"],
            rows: [
              { label: "2010", values: [5142, 2414, 2728, 53.0] },
              { label: "2015", values: [6582, 3049, 3533, 53.7] },
              { label: "2020", values: [8420, 3850, 4570, 54.3] },
              { label: "2022", values: [9057, 3865, 5192, 57.3] }
            ],
            observations: [
              "Tổng sản lượng thủy sản tăng liên tục qua các năm (từ 5,1 lên hơn 9 triệu tấn).",
              "Tỉ trọng thủy sản nuôi trồng ngày càng tăng và vượt trội so với khai thác, phù hợp định hướng bảo vệ nguồn lợi biển."
            ],
            calculations: ["Tốc độ tăng trưởng = (Giá trị năm sau / Giá trị năm gốc) * 100."]
          },
          thinking: {
            type: "So sánh",
            framework: [
              "1. Giới thiệu hai đối tượng nông nghiệp/thủy sản cần so sánh.",
              "2. Lập bảng so sánh theo các tiêu chí: Vị trí, Điều kiện tự nhiên (đất, nước, khí hậu), Kinh tế - xã hội (lao động, chế biến, thị trường), Hiện trạng và sản phẩm đặc thù.",
              "3. Đánh giá nguyên nhân của sự giống và khác nhau.",
              "4. Định hướng phát triển bền vững."
            ],
            samplePrompt: "So sánh điều kiện phát triển cây công nghiệp lâu năm giữa Tây Nguyên và Đông Nam Bộ.",
            expertOutline: [
              "Giống nhau: Đều có diện tích đất badan rộng lớn, khí hậu nhiệt đới/cận xích đạo có mùa khô, nguồn lao động dồi dào, chính sách ưu tiên.",
              "Khác nhau Tây Nguyên: Khí hậu cao nguyên mát mẻ có sự phân hóa đai cao -> thích hợp cà phê chè, chè ở Lâm Đồng; thiếu nước nghiêm trọng trong mùa khô; hạ tầng giao thông còn khó khăn.",
              "Khác nhau Đông Nam Bộ: Địa hình bán bình nguyên thoải, khí hậu cận xích đạo nóng quanh năm -> đứng đầu về cao su, điều; công nghiệp chế biến và cảng biển xuất khẩu phát triển vượt trội."
            ]
          },
          exercises: [
            {
              id: "q-econ-1",
              level: "Vận dụng",
              question: "Nhân tố tự nhiên quan trọng nhất giúp Đồng bằng sông Cửu Long trở thành vựa lúa lớn nhất nước ta là:",
              options: [
                "Diện tích đất phù sa ngọt rộng lớn, mạng lưới sông ngòi kênh rạch chằng chịt, khí hậu cận xích đạo",
                "Hệ thống đê sông hoàn chỉnh ngăn lũ lụt",
                "Có nhiều vùng đất xám bạc màu thích hợp cơ giới hóa",
                "Có mùa đông lạnh giúp đa dạng hóa cơ cấu mùa vụ"
              ],
              correctAnswer: 0,
              explanation: "Đồng bằng sông Cửu Long có diện tích đất phù sa màu mỡ bậc nhất dọc sông Tiền và sông Hậu, nguồn nước dồi dào, khí hậu nắng ấm quanh năm cho phép canh tác liên tục.",
              atlatReference: "Atlat trang 18, 19"
            }
          ],
          miniTest: [
            {
              id: "mt-econ-1",
              level: "Thông hiểu",
              question: "Hai tỉnh dẫn đầu cả nước về diện tích và sản lượng cà phê là:",
              options: ["Đắk Lắk và Lâm Đồng", "Gia Lai và Kon Tum", "Bình Phước và Đồng Nai", "Sơn La và Điện Biên"],
              correctAnswer: 0,
              explanation: "Đắk Lắk là thủ phủ cà phê Robusta, Lâm Đồng nổi bật với cà phê Arabica vùng cao."
            }
          ]
        }
      }
    ]
  },
  {
    id: "regions",
    title: "Địa lí các vùng kinh tế",
    icon: "MapPinned",
    description: "Nắm trọn thế mạnh, hạn chế, cơ cấu kinh tế của 7 vùng kinh tế chiến lược và các vùng kinh tế trọng điểm từ Bắc vào Nam.",
    color: "#D4A373",
    topics: [
      {
        id: "reg-1",
        groupId: "regions",
        title: "Trung du và miền núi Bắc Bộ",
        summary: "Vùng lãnh thổ rộng lớn nhất, giàu khoáng sản và thủy điện, thế mạnh cây cận nhiệt và ôn đới, kinh tế biển Quảng Ninh.",
        atlatPage: "Trang 26 (Vùng Trung du và miền núi Bắc Bộ)",
        difficulty: "Chuyên sâu",
        content: {
          knowledge: {
            coreConcepts: [
              { term: "Tiềm năng thủy điện lớn nhất nước", explanation: "Chiếm hơn 1/3 trữ năng thủy điện cả nước, tập trung trên hệ thống sông Đà (Sơn La, Hòa Bình, Lai Châu)." },
              { term: "Cây cận nhiệt và ôn đới", explanation: "Nhờ có mùa đông lạnh kéo dài và địa hình núi cao (Sa Pa, Tam Đảo, Mẫu Sơn), vùng trồng được chè, rau vụ đông, lê, mận, đào, cây dược liệu quý." }
            ],
            mainPoints: [
              {
                title: "Các thế mạnh nổi bật",
                bullets: [
                  "Khai thác và chế biến khoáng sản: Than đá (Quảng Ninh), sắt (Thái Nguyên, Yên Bái), apatit (Lào Cai), đồng (Sinh Quyền), thiếc (Tĩnh Túc).",
                  "Thủy điện: Nhà máy thủy điện Sơn La (2400 MW) lớn nhất Đông Nam Á, Hòa Bình (1920 MW), Lai Châu (1200 MW).",
                  "Cây công nghiệp, dược liệu, rau quả ôn đới & chăn nuôi gia súc lớn (trâu chiếm >50% cả nước).",
                  "Kinh tế biển: Cảng nước sâu Cái Lân, du lịch vịnh Hạ Long di sản thiên nhiên thế giới, nuôi trồng đánh bắt thủy hải sản đảo Cô Tô, Vân Đồn."
                ]
              }
            ],
            commonTraps: [
              "Nhầm lẫn thế mạnh giữa Tây Bắc (thủy điện, cây đặc sản, bảo vệ rừng đầu nguồn) và Đông Bắc (khoáng sản, kinh tế biển, du lịch).",
              "Quên rằng địa hình bị chia cắt mạnh, lũ quét, rét đậm rét hại là trở ngại tự nhiên lớn nhất."
            ]
          },
          atlatGuide: {
            page: "Trang 26",
            pageName: "Vùng Trung du và miền núi Bắc Bộ",
            symbolsToNote: ["Mỏ than, apatit, sắt", "Kí hiệu nhà máy thủy điện (ngôi sao xanh)", "Tuyến quốc lộ huyết mạch 1A, 2, 3, 5, 18, cao tốc Hà Nội - Lào Cai"],
            stepsToRead: [
              "Bước 1: Xác định ranh giới 15 tỉnh thành của vùng (chia thành Đông Bắc và Tây Bắc).",
              "Bước 2: Tìm tên các nhà máy thủy điện trên dòng sông Đà, sông Chảy (Thác Bà), sông Gâm (Tuyên Quang).",
              "Bước 3: Chỉ rõ các cửa khẩu quốc tế giao thương với Trung Quốc: Móng Cái (Quảng Ninh), Hữu Nghị (Lạng Sơn), Lào Cai (Lào Cai)."
            ],
            sampleExercise: {
              question: "Dựa vào Atlat trang 26, hãy kể tên 3 nhà máy thủy điện công suất lớn trên hệ thống sông Đà và nêu ý nghĩa đối với kinh tế miền Bắc.",
              atlatClues: ["Tìm các ngôi sao màu xanh dọc dòng sông Đà"],
              standardAnswer: "Đó là Hòa Bình, Sơn La, Lai Châu. Ý nghĩa: Cung cấp nguồn điện năng to lớn phục vụ công nghiệp hóa, điều tiết lũ cho đồng bằng sông Hồng trong mùa mưa bão, cấp nước tưới tiêu trong mùa kiệt."
            }
          },
          statistics: {
            tableTitle: "Công suất một số nhà máy thủy điện lớn ở Trung du và miền núi Bắc Bộ",
            unit: "MW",
            headers: ["Tên nhà máy", "Công suất (MW)", "Sông", "Tỉnh"],
            rows: [
              { label: "Sơn La", values: [2400] },
              { label: "Hòa Bình", values: [1920] },
              { label: "Lai Châu", values: [1200] },
              { label: "Tuyên Quang", values: [342] }
            ],
            observations: [
              "Sông Đà là bậc thang thủy điện khổng lồ với tổng công suất vượt 5.500 MW.",
              "Đóng góp huyết mạch vào lưới điện quốc gia 500kV Bắc - Nam."
            ],
            calculations: ["Tỉ lệ công suất Sơn La so với tổng công suất bậc thang sông Đà = 2400 / (2400 + 1920 + 1200) ≈ 43.5%."]
          },
          thinking: {
            type: "Chứng minh",
            framework: [
              "1. Nêu luận điểm: TDMN Bắc Bộ có điều kiện tự nhiên độc đáo để phát triển cây cận nhiệt và ôn đới.",
              "2. Chứng minh khí hậu: Có mùa đông lạnh nhất nước, nhiệt độ hạ thấp kèm sương muối, vùng núi cao có tính chất ôn đới.",
              "3. Chứng minh đất đai: Đất feralit trên đá phiến, đá vôi, đất mùn trên núi cao.",
              "4. Dẫn chứng thực tế: Chè búp (Thái Nguyên, Mộc Châu, Yên Bái), hồi (Lạng Sơn), thảo quả (Lào Cai), rau hoa vụ đông chất lượng cao."
            ],
            samplePrompt: "Chứng minh Trung du và miền núi Bắc Bộ có thế mạnh hàng đầu về phát triển cây công nghiệp có nguồn gốc cận nhiệt và ôn đới.",
            expertOutline: [
              "Cơ sở khí hậu: Mùa đông kéo dài 3-4 tháng với nhiệt độ dưới 18°C do ảnh hưởng trực tiếp của gió mùa Đông Bắc qua các cánh cung núi mở rộng về phía bắc.",
              "Địa hình phân hóa đai cao: Đai cận nhiệt đới gió mùa trên núi (từ 600-700m đến 2600m) và đai ôn đới gió mùa trên núi (>2600m) tạo môi trường sống lý tưởng cho giống cây hàn đới.",
              "Sản phẩm tiêu biểu: Đứng đầu cả nước về diện tích và sản lượng chè (chiếm >60%), dược liệu (tam thất, đương quy, sâm Ngọc Linh di thực), cây ăn quả ôn đới (đào Sa Pa, mận Tam Hoa Bắc Hà)."
            ]
          },
          exercises: [
            {
              id: "q-reg-1",
              level: "Vận dụng",
              question: "Nhân tố nào sau đây là thế mạnh tự nhiên hàng đầu để phát triển công nghiệp luyện kim ở vùng Trung du và miền núi Bắc Bộ?",
              options: [
                "Nguồn tài nguyên khoáng sản kim loại đen và kim loại màu dồi dào cùng nguồn than mỡ, than đá",
                "Thị trường tiêu thụ máy móc rộng lớn nhất Đông Nam Á",
                "Lao động có trình độ công nghệ tự động hóa cao nhất nước",
                "Mạng lưới đường cao tốc phủ kín toàn bộ các huyện vùng cao"
              ],
              correctAnswer: 0,
              explanation: "Vùng có mỏ sắt Thái Nguyên, Yên Bái, mangan Cao Bằng, thiếc Tĩnh Túc, đồng Sinh Quyền kết hợp nguồn nhiên liệu than mỡ Phấn Mễ, than đá Quảng Ninh tạo tiền đề luyện kim đen và màu.",
              atlatReference: "Atlat trang 26"
            }
          ],
          miniTest: [
            {
              id: "mt-reg-1",
              level: "Thông hiểu",
              question: "Tỉnh duy nhất thuộc vùng Trung du và miền núi Bắc Bộ có bờ biển là:",
              options: ["Quảng Ninh", "Lạng Sơn", "Bắc Giang", "Hải Phòng"],
              correctAnswer: 0,
              explanation: "Quảng Ninh là tỉnh duy nhất giáp biển của vùng, có vịnh Hạ Long, Bái Tử Long và hệ thống cảng Cái Lân."
            }
          ]
        }
      },
      {
        id: "reg-2",
        groupId: "regions",
        title: "Đông Nam Bộ và Đồng bằng sông Cửu Long",
        summary: "Vùng kinh tế năng động đầu tàu (Đông Nam Bộ) và vựa nông thủy sản xuất khẩu lớn nhất cả nước (ĐBSCL).",
        atlatPage: "Trang 28, 29 (Đông Nam Bộ & ĐBSCL)",
        difficulty: "Chuyên sâu",
        content: {
          knowledge: {
            coreConcepts: [
              { term: "Đầu tàu kinh tế", explanation: "Đông Nam Bộ đóng góp hơn 30% GDP, dẫn đầu cả nước về giá trị sản xuất công nghiệp, thu hút vốn FDI và xuất khẩu." },
              { term: "Thích ứng với biến đổi khí hậu", explanation: "Đồng bằng sông Cửu Long chịu tác động nặng nề của xâm nhập mặn, sạt lở bờ sông, khô hạn mùa kiệt; chuyển đổi từ 'chống lũ' sang 'sống chung và thuận thiên'." }
            ],
            mainPoints: [
              {
                title: "Thế mạnh so sánh của 2 vùng",
                bullets: [
                  "Đông Nam Bộ: Dầu khí thềm lục địa, công nghiệp chế biến - chế tạo, dịch vụ logistics, tài chính, cây công nghiệp lâu năm (cao su, tiêu, điều).",
                  "Đồng bằng sông Cửu Long: Trồng lúa hàng hóa, nuôi trồng thủy sản nước ngọt - lợ - mặn, trồng cây ăn trái nhiệt đới lớn nhất cả nước."
                ]
              }
            ],
            commonTraps: [
              "Nhầm lẫn nguyên nhân phát triển cây công nghiệp ở Đông Nam Bộ: Không chỉ do đất và khí hậu mà yếu tố công nghiệp chế biến và cảng xuất khẩu đóng vai trò quyết định thị trường."
            ]
          },
          atlatGuide: {
            page: "Trang 29",
            pageName: "Đồng bằng sông Cửu Long",
            symbolsToNote: ["Đất phù sa ngọt dọc sông Tiền, sông Hậu", "Vùng đất phèn Đồng Tháp Mười, Tứ giác Long Xuyên", "Vùng đất mặn ven biển"],
            stepsToRead: [
              "Bước 1: Phân biệt 3 nhóm đất chính trên bản đồ.",
              "Bước 2: Tìm các ngư trường lớn (Cà Mau - Kiên Giang).",
              "Bước 3: Xác định trung tâm kinh tế lớn nhất vùng là Cần Thơ."
            ],
            sampleExercise: {
              question: "Dựa vào Atlat trang 29, giải thích tại sao mạng lưới giao thông đường thủy ở ĐBSCL có vai trò quan trọng bậc nhất cả nước?",
              atlatClues: ["Kênh rạch chằng chịt, sông Tiền và sông Hậu lưu lượng nước lớn", "Địa hình đồng bằng bằng phẳng thấp ngập nước"],
              standardAnswer: "Mạng lưới sông Cửu Long cùng hàng vạn kênh đào chằng chịt tạo nên mạch máu giao thông thủy tự nhiên rẻ tiền, kết nối các vùng sản xuất nông thủy sản ra các cảng xuất khẩu."
            }
          },
          statistics: {
            tableTitle: "Tỉ trọng đóng góp của Đông Nam Bộ và ĐBSCL trong cơ cấu kinh tế cả nước",
            unit: "%",
            headers: ["Chỉ tiêu", "Đông Nam Bộ (%)", "Đồng bằng sông Cửu Long (%)", "Cả nước (%)"],
            rows: [
              { label: "Giá trị sản xuất công nghiệp", values: [48.5, 9.8, 100] },
              { label: "Sản lượng lúa", values: [3.8, 54.5, 100] },
              { label: "Sản lượng thủy sản nuôi trồng", values: [4.2, 70.1, 100] },
              { label: "Thu hút vốn FDI lũy kế", values: [42.6, 6.2, 100] }
            ],
            observations: [
              "Đông Nam Bộ áp đảo về sản xuất công nghiệp và vốn FDI.",
              "ĐBSCL là trung tâm an ninh lương thực và thủy sản xuất khẩu của toàn quốc."
            ],
            calculations: ["ĐBSCL đóng góp hơn 70% sản lượng thủy sản nuôi trồng cả nước."]
          },
          thinking: {
            type: "Mối quan hệ nhân quả",
            framework: [
              "1. Phân tích điều kiện tiên quyết.",
              "2. Đánh giá chuỗi giá trị từ sản xuất nguyên liệu đến chế biến và xuất khẩu.",
              "3. Liên hệ giải pháp quy hoạch vùng kinh tế trọng điểm."
            ],
            samplePrompt: "Tại sao Đông Nam Bộ có cơ cấu kinh tế tiến bộ nhất so với các vùng khác?",
            expertOutline: [
              "Tỉ trọng công nghiệp và dịch vụ chiếm trên 90% cơ cấu kinh tế vùng.",
              "Hội tụ đầy đủ các thế mạnh: Vị trí kinh tế đối ngoại thuận lợi, cơ sở hạ tầng giao thông đồng bộ nhất (sân bay Long Thành, cảng Cái Mép, cao tốc), lực lượng lao động tay nghề cao thu hút từ khắp cả nước, nguồn vốn đầu tư trong và ngoài nước dồi dào."
            ]
          },
          exercises: [
            {
              id: "q-reg-2",
              level: "Thi chuyên",
              question: "Vấn đề có ý nghĩa sống còn đối với sản xuất nông nghiệp trong mùa khô ở Đông Nam Bộ là:",
              options: [
                "Xây dựng các công trình thủy lợi để giải quyết nước tưới cho cây trồng",
                "Chuyển đổi toàn bộ đất trồng cây công nghiệp sang nuôi gia cầm",
                "Ngừng canh tác hoàn toàn trong 4 tháng mùa khô",
                "Xây đê bao ngăn lũ ngập triệt để như ở miền Bắc"
              ],
              correctAnswer: 0,
              explanation: "Mùa khô kéo dài 4-5 tháng khiến mực nước ngầm hạ thấp, do đó các công trình thủy lợi như hồ Dầu Tiếng, hồ Trị An, hồ Phước Hòa là chìa khóa cứu sống các vùng chuyên canh cây công nghiệp.",
              atlatReference: "Atlat trang 28"
            }
          ],
          miniTest: [
            {
              id: "mt-reg-2",
              level: "Nhận biết",
              question: "Thành phố đóng vai trò hạt nhân trung tâm kinh tế của vùng Đồng bằng sông Cửu Long là:",
              options: ["Cần Thơ", "Mỹ Tho", "Cà Mau", "Long Xuyên"],
              correctAnswer: 0,
              explanation: "Cần Thơ là thành phố trực thuộc Trung ương, trung tâm giáo dục, y tế, khoa học kỹ thuật và kinh tế của toàn vùng ĐBSCL."
            }
          ]
        }
      }
    ]
  }
];

export const ATLAT_CHALLENGES: AtlatChallenge[] = [
  {
    id: "atlat-08",
    title: "Thử thách Atlat #08: Sản lượng Thủy sản & Ngư trường",
    targetRegion: "Đồng bằng sông Cửu Long & Duyên hải Nam Trung Bộ",
    atlatPage: "Trang 20 (Thủy sản) & Trang 8 (Hình thể vùng biển)",
    prompt: "Dựa vào Atlat Địa lí Việt Nam, xác định vùng có sản lượng thủy sản lớn nhất và giải thích nguyên nhân.",
    initialQuestion: "Hãy chỉ ra vùng có sản lượng thủy sản dẫn đầu cả nước và phân tích 2 nhóm nguyên nhân: Tự nhiên & Kinh tế - xã hội.",
    hints: [
      "Gợi ý 1: Mở Atlat trang 20, quan sát biểu đồ cột đôi (màu xanh là nuôi trồng, màu hồng là khai thác) của các tỉnh. Tỉnh nào có cột cao vượt trội? (Kiên Giang, An Giang, Cà Mau, Đồng Tháp).",
      "Gợi ý 2: Xét yếu tố tự nhiên: Bờ biển dài, 2 ngư trường trọng điểm (Cà Mau - Kiên Giang, Ninh Thuận - Bình Thuận), vùng biển ấm, mạng lưới sông rạch và rừng ngập mặn tạo bãi đẻ tự nhiên.",
      "Gợi ý 3: Xét yếu tố kinh tế - xã hội: Tập quán đánh bắt lâu đời, hạm đội tàu công suất lớn, các nhà máy chế biến đông lạnh xuất khẩu tập trung dày đặc."
    ],
    deepAnalysis: "Đồng bằng sông Cửu Long dẫn đầu tuyệt đối cả nước (chiếm hơn 50% tổng sản lượng thủy sản toàn quốc). Bí quyết điểm tối đa trong đề chuyên là học sinh phải bóc tách rạch ròi 2 mảng: Nuôi trồng (lợi thế mặt nước nội địa + lợ mặn) và Đánh bắt (ngư trường Tây Nam rộng lớn, biển nông giàu sinh vật phù du).",
    modelAnswer: "1. Xác định vùng: Đồng bằng sông Cửu Long dẫn đầu cả nước cả về sản lượng khai thác và nuôi trồng.\n2. Nguyên nhân Tự nhiên:\n- Đường bờ biển dài, ngư trường trọng điểm Cà Mau - Kiên Giang với trữ lượng hải sản lớn.\n- Vùng biển ấm quanh năm, nhiều bãi tôm, bãi cá, ít bão lớn.\n- Mạng lưới sông Tiền, sông Hậu cùng hệ thống kênh rạch, bãi triều, rừng ngập mặn tạo diện tích mặt nước nuôi trồng trù phú bậc nhất.\n3. Nguyên nhân Kinh tế - Xã hội:\n- Nhân dân có kinh nghiệm và truyền thống sông nước lâu đời.\n- Đội tàu đánh bắt xa bờ được hiện đại hóa nhanh chóng.\n- Công nghiệp chế biến phát triển mạnh, gắn với các thị trường xuất khẩu khó tính (Mỹ, EU, Nhật Bản).",
    coordinates: { x: 38, y: 88 },
    relevantLayers: ["Sản lượng thủy sản", "Ngư trường trọng điểm", "Nhà máy chế biến"]
  },
  {
    id: "atlat-12",
    title: "Thử thách Atlat #12: Bậc thang Thủy điện Sông Đà",
    targetRegion: "Tây Bắc & Trung du miền núi Bắc Bộ",
    atlatPage: "Trang 22 (Công nghiệp năng lượng) & Trang 26 (TDMN Bắc Bộ)",
    prompt: "Dựa vào Atlat Địa lí Việt Nam, xác định các nhà máy thủy điện trên sông Đà và giải thích vì sao sông Đà có trữ năng thủy điện lớn nhất nước?",
    initialQuestion: "Kể tên các nhà máy thủy điện theo thứ tự bậc thang từ thượng lưu xuống hạ lưu và giải thích điều kiện địa hình, thủy văn tạo nên tiềm năng này.",
    hints: [
      "Gợi ý 1: Lần lượt từ trên xuống: Thủy điện Lai Châu (Mường Tè) -> Sơn La (Mường La) -> Hòa Bình (Hòa Bình).",
      "Gợi ý 2: Trữ năng thủy điện phụ thuộc vào 2 yếu tố vật lý: Lưu lượng nước (Q) và Độ dốc/độ chênh cao địa hình (H). Công thức: P = 9.81 * Q * H.",
      "Gợi ý 3: Sông Đà bắt nguồn từ vùng núi cao Vân Nam, chảy qua địa hình Tây Bắc dốc hiểm trở, lòng sông kẹp giữa các dãy núi cao tạo hẻm vực lý tưởng để đắp đập ngăn nước."
    ],
    deepAnalysis: "Sông Đà chiếm gần một nửa trữ năng thủy điện của toàn bộ lưu vực sông Hồng. Điểm mấu chốt trong câu hỏi chuyên là không chỉ nêu tên nhà máy mà phải phân tích sự kết hợp hoàn hảo giữa nguồn nước dồi dào do mưa lớn ở sườn đón gió Hoàng Liên Sơn với địa hình thung lũng sâu hẹp.",
    modelAnswer: "1. Các nhà máy thủy điện: Lai Châu (1200 MW) -> Sơn La (2400 MW, lớn nhất ĐNA) -> Hòa Bình (1920 MW).\n2. Nguyên nhân tiềm năng thủy điện khổng lồ:\n- Thủy văn: Sông Đà là phụ lưu lớn nhất của sông Hồng, nhận lượng nước khổng lồ từ thượng nguồn và các sông nhánh, lượng mưa lưu vực lớn (2000 - 3000 mm/năm).\n- Địa hình: Chảy kẹp giữa hai dãy núi cao Hoàng Liên Sơn và Pu Đen Đinh, độ dốc dòng chảy lớn, lòng sông nhiều ghềnh thác, nhiều hẻm vực thắt hẹp thuận lợi làm hồ chứa nước dung tích hàng tỉ mét khối.",
    coordinates: { x: 32, y: 15 },
    relevantLayers: ["Nhà máy thủy điện", "Lưu vực sông ngòi", "Độ dốc địa hình"]
  },
  {
    id: "atlat-09",
    title: "Thử thách Atlat #09: Gió mùa & Sự phân hóa Khí hậu",
    targetRegion: "Toàn quốc - Trọng tâm Duyên hải Trung Bộ & Miền Bắc",
    atlatPage: "Trang 9 (Khí hậu) & Trang 13-14 (Các miền tự nhiên)",
    prompt: "Dựa vào Atlat trang 9, phân tích hoạt động của gió mùa Tây Nam và giải thích hiện tượng phơn khô nóng ở Bắc Trung Bộ.",
    initialQuestion: "Hiện tượng 'Gió Lào' (gió phơn Tây Nam) hình thành như thế nào và gây ra tác động gì đối với sản xuất nông nghiệp?",
    hints: [
      "Gợi ý 1: Nguồn gốc khối khí: Đầu mùa hạ, khối khí nhiệt đới ẩm vịnh Ben-gan (TBg) di chuyển theo hướng Tây Nam vào nước ta.",
      "Gợi ý 2: Hiệu ứng phơn: Khối khí bốc lên sườn tây dãy Trường Sơn (phía Lào) gặp lạnh ngưng kết gây mưa lớn. Khi vượt qua đỉnh núi sang sườn đông (Bắc Trung Bộ), khối khí đã mất ẩm, hạ xuống theo đoạn nhiệt khô (+1°C/100m) trở nên cực kì khô và nóng.",
      "Gợi ý 3: Tác động: Nhiệt độ có thể vượt 40°C, độ ẩm giảm dưới 40%, gây cháy rừng, khô hạn cây trồng, thiếu nước sinh hoạt."
    ],
    deepAnalysis: "Đây là câu hỏi kinh điển của đề thi chuyên. Học sinh cần nhớ quy luật đoạn nhiệt ẩm (lên dốc giảm nhiệt 0.6°C/100m) và đoạn nhiệt khô (xuống dốc tăng nhiệt 1°C/100m) để lý giải vì sao cùng một khối khí nhưng sườn Tây mưa rào sườn Đông khô bỏng.",
    modelAnswer: "1. Cơ chế hình thành:\n- Đầu mùa hạ, khối khí nhiệt đới ẩm từ vịnh Ben-gan di chuyển theo hướng tây nam tiến vào bán đảo Đông Dương.\n- Gặp bức chắn địa hình dãy núi Trường Sơn Bắc và Trường Sơn Nam, khối khí buộc phải bốc lên cao ở sườn tây (Lào), nhiệt độ giảm 0.6°C/100m hơi nước ngưng kết trút mưa xối xả.\n- Sau khi vượt qua đỉnh núi trườn xuống sườn đông (Bắc Trung Bộ và phần nam Tây Bắc), khối khí trở nên khô ráo, nhiệt độ tăng nhanh theo suất đoạn nhiệt khô 1°C/100m tạo nên gió phơn khô nóng gay gắt.\n2. Tác động tiêu cực: Gây hạn hán khốc liệt, tăng nguy cơ cháy rừng, bốc hơi nước nhanh gây cháy lá cây hoa màu và cạn kiệt nguồn nước sông hồ.",
    coordinates: { x: 52, y: 38 },
    relevantLayers: ["Hướng gió mùa", "Nhiệt độ cực trị", "Lượng mưa"]
  }
];

export const CHART_MASTER_CHALLENGES: ChartMasterChallenge[] = [
  {
    id: "chart-01",
    title: "Bài tập 01: Cơ cấu kinh tế phân theo ngành qua nhiều năm",
    context: "Cho bảng số liệu về tỉ trọng đóng góp của Nông-lâm-thủy sản, Công nghiệp-xây dựng và Dịch vụ trong GDP Việt Nam từ 2010 đến 2022.",
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
      mainKeyword: "Chuyển dịch cơ cấu / Sự thay đổi cơ cấu qua từ 4 năm trở lên",
      explanation: "Bảng số liệu thể hiện 'Cơ cấu' (tổng các thành phần = 100%) và có từ 4 mốc năm trở lên (2010, 2015, 2018, 2020, 2022). Theo quy tắc vàng thi chuyên: Thể hiện cơ cấu từ 4 năm trở lên bắt buộc chọn BIỂU ĐỒ MIỀN.",
      ruleToRemember: "Từ khóa: 'Cơ cấu', 'Chuyển dịch cơ cấu' + Mốc thời gian ≥ 4 năm => BIỂU ĐỒ MIỀN. Nếu chỉ có ≤ 3 năm => BIỂU ĐỒ TRÒN."
    },
    expertCommentary: {
      overview: "Cơ cấu GDP nước ta giai đoạn 2010 - 2022 có sự chuyển dịch tích cực theo hướng công nghiệp hóa, hiện đại hóa.",
      detailedTrends: [
        "Tỉ trọng khu vực Nông - lâm - thủy sản giảm liên tục và đáng kể từ 18.9% xuống còn 11.9% (giảm 7.0%).",
        "Tỉ trọng khu vực Dịch vụ tăng từ 42.9% lên mức cao nhất năm 2018 (51.0%) và duy trì quanh mức 49.8%.",
        "Khu vực Công nghiệp - xây dựng giữ vai trò trụ cột vững chắc, dao động từ 34.3% đến 38.3%."
      ],
      causes: [
        "Đường lối đổi mới, công nghiệp hóa - hiện đại hóa đất nước phát huy hiệu quả mạnh mẽ.",
        "Ứng dụng công nghệ tự động hóa, chuyển đổi số và phát triển các ngành kinh tế tri thức, du lịch và dịch vụ tài chính."
      ]
    }
  },
  {
    id: "chart-02",
    title: "Bài tập 02: Tốc độ tăng trưởng các sản phẩm công nghiệp",
    context: "Cho bảng số liệu về chỉ số phát triển sản lượng Điện, Than sạch, Xi măng và Thép cán của nước ta lấy năm 2010 làm mốc gốc 100%.",
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
      mainKeyword: "Tốc độ tăng trưởng / Tốc độ phát triển qua các năm",
      explanation: "Bảng số liệu có đơn vị là % và các đối tượng cùng xuất phát từ mốc 100%. Từ khóa đề bài là 'Tốc độ tăng trưởng'. Dạng biểu đồ tối ưu nhất chính là BIỂU ĐỒ ĐƯỜNG (Biểu đồ đồ thị).",
      ruleToRemember: "Từ khóa: 'Tốc độ tăng trưởng', 'Tốc độ phát triển', 'Chỉ số tăng trưởng' (các mốc xuất phát từ 100%) => BIỂU ĐỒ ĐƯỜNG."
    },
    expertCommentary: {
      overview: "Tốc độ tăng trưởng các sản phẩm công nghiệp có sự phân hóa mạnh mẽ giữa nhóm năng lượng điện với khai khoáng.",
      detailedTrends: [
        "Điện sản xuất có tốc độ tăng trưởng nhanh nhất, tăng 175.6% sau 11 năm (đạt 275.6%).",
        "Xi măng tăng trưởng khá đều đặn, đạt 178.2% vào năm 2021.",
        "Than sạch có xu hướng giảm nhẹ và chững lại do các mỏ than lộ thiên ngày càng cạn kiệt, phải chuyển dần sang khai thác hầm lò."
      ],
      causes: [
        "Nhu cầu điện năng cho sản xuất công nghiệp và đời sống nhân dân tăng vọt.",
        "Xây dựng cơ sở hạ tầng giao thông và đô thị hóa kích cầu tiêu thụ xi măng."
      ]
    }
  },
  {
    id: "chart-03",
    title: "Bài tập 03: Quy mô và Cơ cấu giá trị xuất nhập khẩu",
    context: "Bảng số liệu tổng giá trị xuất khẩu và nhập khẩu hàng hóa nước ta trong 3 năm 2015, 2018, 2022 (Đơn vị: Tỉ USD). Đề bài yêu cầu thể hiện quy mô và cơ cấu.",
    dataTitle: "Giá trị xuất khẩu và nhập khẩu hàng hóa của nước ta trong 3 năm",
    unit: "Tỉ USD",
    years: ["2015", "2018", "2022"],
    series: [
      { name: "Xuất khẩu", values: [162.0, 243.7, 371.3], color: "#146B5B" },
      { name: "Nhập khẩu", values: [165.7, 236.9, 358.9], color: "#1677B8" }
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
      explanation: "Đề bài yêu cầu thể hiện đồng thời cả 'Quy mô' (tổng kim ngạch) và 'Cơ cấu' (tỉ trọng xuất/nhập) với mốc thời gian là 3 năm (2015, 2018, 2022). Lựa chọn chuẩn nhất là BIỂU ĐỒ TRÒN có bán kính R khác nhau (bán kính tương ứng căn bậc hai của tổng quy mô từng năm).",
      ruleToRemember: "Từ khóa: 'Quy mô và cơ cấu' + Thời gian từ 1 đến 3 năm => BIỂU ĐỒ TRÒN CÓ BÁN KÍNH KHÁC NHAU."
    },
    expertCommentary: {
      overview: "Quy mô kim ngạch xuất nhập khẩu tăng trưởng thần tốc, đồng thời vị thế cán cân thương mại chuyển từ nhập siêu sang xuất siêu vững chắc.",
      detailedTrends: [
        "Tổng kim ngạch tăng hơn gấp đôi từ 327.7 tỉ USD (2015) lên hơn 730 tỉ USD (2022).",
        "Cán cân thương mại năm 2015 nhập siêu 3.7 tỉ USD, đến năm 2022 đã xuất siêu kỉ lục 12.4 tỉ USD."
      ],
      causes: [
        "Việt Nam ký kết và thực thi hiệu quả các hiệp định thương mại tự do thế hệ mới (CPTPP, EVFTA, RCEP).",
        "Khu vực có vốn đầu tư nước ngoài FDI và các ngành điện tử, dệt may, da giày bứt phá mạnh mẽ."
      ]
    }
  }
];

export const CHART_CHALLENGES = DETAILED_CHART_CHALLENGES;

export const SPECIALIZED_SKILL_CARDS: SpecializedSkillCard[] = [
  {
    id: "skill-observe",
    name: "Kỹ năng Nhận xét số liệu & biểu đồ",
    icon: "Search",
    slogan: "Khái quát → Chi tiết → So sánh → Xu hướng → Dẫn chứng",
    color: "#146B5B",
    formula: [
      "Bước 1: Khái quát xu hướng tổng thể (tăng, giảm hay biến động không đều).",
      "Bước 2: Phân tích chi tiết từng đối tượng / từng vùng / từng năm cụ thể.",
      "Bước 3: So sánh đối chiếu (ai cao nhất, ai thấp nhất, gấp bao nhiêu lần hoặc hơn bao nhiêu đơn vị).",
      "Bước 4: Nhận xét xu hướng chuyển dịch cơ cấu (tăng tỉ trọng hay giảm tỉ trọng).",
      "Bước 5: Bắt buộc đính kèm dẫn chứng số liệu (tuyệt đối + tương đối)."
    ],
    steps: [
      {
        step: "Khái quát chung",
        description: "Mở đầu bằng 1 câu tóm lược toàn bộ bức tranh của bảng số liệu.",
        example: "Giai đoạn 2010 - 2022, sản lượng lúa của cả nước có xu hướng tăng liên tục từ 40 triệu tấn lên 42.7 triệu tấn."
      },
      {
        step: "Chi tiết & So sánh",
        description: "Đi vào từng giai đoạn tăng nhanh, tăng chậm hoặc giảm sút.",
        example: "Giai đoạn 2010-2015 tăng nhanh (bình quân tăng 0.8 triệu tấn/năm), giai đoạn 2015-2022 tăng chậm dần do diện tích chuyển đổi sang cây ăn quả."
      },
      {
        step: "Dẫn chứng toán học",
        description: "Tính toán số lần (A / B) hoặc hiệu số (A - B) và tỉ lệ phần trăm.",
        example: "Sản lượng lúa ĐBSCL năm 2022 gấp 5.2 lần ĐBSH (chiếm 54.5% so với 12.8%)."
      }
    ]
  },
  {
    id: "skill-explain",
    name: "Kỹ năng Giải thích nguyên nhân địa lí",
    icon: "Brain",
    slogan: "Tự nhiên → Kinh tế – xã hội → Con người/Chính sách → Kết luận",
    color: "#1677B8",
    formula: [
      "Nguyên tắc 1: Không bao giờ chỉ tìm 1 nguyên nhân đơn lẻ.",
      "Nguyên tắc 2: Luôn xét 4 góc độ Tự nhiên (Vị trí, Địa hình, Khí hậu, Đất/Nước).",
      "Nguyên tắc 3: Luôn xét 4 góc độ Kinh tế - Xã hội (Lao động, Cơ sở chế biến, Thị trường, Khoa học công nghệ).",
      "Nguyên tắc 4: Luôn gắn với chủ trương, đường lối và cơ chế chính sách của Nhà nước."
    ],
    steps: [
      {
        step: "Yếu tố Tự nhiên",
        description: "Tạo tiền đề vật chất và giới hạn sinh thái cho sản xuất.",
        example: "Đông Nam Bộ trồng nhiều cao su vì có đất badan và đất xám phù sa cổ bằng phẳng, khí hậu cận xích đạo không có gió rét."
      },
      {
        step: "Yếu tố Kinh tế - Xã hội",
        description: "Đóng vai trò quyết định chiều sâu quy mô và năng suất.",
        example: "Người dân có truyền thống thâm canh cây cao su lâu đời, gần các nhà máy chế biến săm lốp và cảng Sài Gòn xuất khẩu."
      },
      {
        step: "Chính sách & Thị trường",
        description: "Động lực thúc đẩy sản xuất thương phẩm hóa.",
        example: "Nhà nước khuyến khích tái cơ cấu nông nghiệp, thị trường xuất khẩu cao su sang Trung Quốc, Ấn Độ mở rộng."
      }
    ]
  },
  {
    id: "skill-prove",
    name: "Kỹ năng Chứng minh nhận định địa lí",
    icon: "FileCheck",
    slogan: "Nhận định → Dẫn chứng số liệu → Phân tích cơ chế → Kết luận",
    color: "#E29578",
    formula: [
      "Bước 1: Trích dẫn lại chính xác nhận định của đề bài.",
      "Bước 2: Nêu các luận điểm lớn chứng minh cho nhận định đó.",
      "Bước 3: Dẫn chứng số liệu từ đề bài hoặc trang Atlat chỉ định.",
      "Bước 4: Phân tích cơ chế tác động vì sao các dẫn chứng đó khẳng định nhận định.",
      "Bước 5: Kết luận khẳng định giá trị thực tiễn."
    ],
    steps: [
      {
        step: "Xác lập luận điểm",
        description: "Tách nhận định lớn thành 2-3 ý nhỏ có tính logic bổ trợ nhau.",
        example: "Chứng minh tài nguyên khoáng sản nước ta phong phú nhưng phân bố không đều."
      },
      {
        step: "Đối chiếu Atlat",
        description: "Lấy tên mỏ, tên tỉnh và trữ lượng cụ thể trên bản đồ.",
        example: "Than đá tập trung hơn 90% ở Quảng Ninh; Dầu khí tập trung ở thềm lục địa phía nam thềm lục địa Cửu Long, Nam Côn Sơn."
      }
    ]
  },
  {
    id: "skill-compare",
    name: "Kỹ năng So sánh hai đối tượng địa lí",
    icon: "Scale",
    slogan: "Tiêu chí Đối tượng A vs Đối tượng B → Giống nhau → Khác nhau → Nguyên nhân",
    color: "#D4A373",
    formula: [
      "Bước 1: Lập bảng tiêu chí đồng nhất (không được bên này nói vị trí bên kia nói đất đai).",
      "Bước 2: Tìm điểm giống nhau (bản chất quy luật chung).",
      "Bước 3: Tìm điểm khác nhau rõ nét (nét đặc thù riêng biệt).",
      "Bước 4: Giải thích nguyên nhân sâu xa của sự khác biệt đó."
    ],
    steps: [
      {
        step: "Lập bảng tiêu chí",
        description: "Thiết kế ma trận so sánh chuẩn hóa.",
        example: "So sánh vùng chuyên canh cây công nghiệp Đông Nam Bộ vs Tây Nguyên."
      }
    ],
    comparisonTable: {
      criteria: ["Vị trí & tiếp giáp", "Địa hình & Đất đai", "Khí hậu", "Thế mạnh cây công nghiệp chủ lực", "Hạn chế lớn nhất"],
      subjectA: {
        name: "Đông Nam Bộ",
        values: [
          "Giáp biển Đông, giáp Tây Nguyên, ĐBSCL; đầu mối giao thương quốc tế",
          "Bán bình nguyên thoải lượn sóng; đất đỏ badan và đất xám trên phù sa cổ",
          "Cận xích đạo gió mùa nóng quanh năm, mùa khô 4-5 tháng, ít bão",
          "Cao su (đứng đầu cả nước), điều, tiêu, cây ăn quả đặc sản",
          "Mùa khô sâu sắc thiếu nước tưới; ô nhiễm môi trường đô thị công nghiệp"
        ]
      },
      subjectB: {
        name: "Tây Nguyên",
        values: [
          "Không giáp biển, nằm ở ngã ba biên giới Việt - Lào - Campuchia",
          "Các cao nguyên badan xếp tầng thoải dần từ bắc xuống nam; đất badan màu mỡ",
          "Khí hậu cận xích đạo phân hóa theo đai cao (mát mẻ ở Đà Lạt, Pleiku)",
          "Cà phê (đứng đầu cả nước, nổi tiếng Robusta), hồ tiêu, chè, cao su",
          "Mùa khô kéo dài hạ thấp mực nước ngầm; cơ sở hạ tầng giao thông kết nối còn hạn chế"
        ]
      }
    }
  }
];

export const SPECIALIZED_SKILLS: SpecializedSkill[] = [
  {
    id: "skill_nhan_xet",
    title: "1. Kỹ năng Nhận xét số liệu & biểu đồ",
    summary: "Công thức: Khái quát → Chi tiết → So sánh (gấp bao nhiêu lần / hơn bao nhiêu) → Xu hướng → Dẫn chứng số liệu bắt buộc.",
    formula: "Khái quát → Chi tiết → So sánh (lần/hiệu số) → Xu hướng → Dẫn chứng",
    steps: [
      {
        stepName: "Khái quát tổng quan",
        description: "Mở đầu bằng nhận định tổng thể toàn bộ giai đoạn (tăng/giảm liên tục hay biến động không đều)."
      },
      {
        stepName: "Phân tích chi tiết",
        description: "Đi sâu vào từng đối tượng, từng mốc thời gian tăng nhanh nhất, tăng chậm nhất hoặc chững lại."
      },
      {
        stepName: "So sánh đối chiếu",
        description: "Tính toán số lần (A / B) hoặc hiệu số (A - B) và tỉ trọng phần trăm, chỉ rõ đối tượng áp đảo."
      },
      {
        stepName: "Kết luận & Xu hướng",
        description: "Tóm lược ý nghĩa sự thay đổi và dẫn chứng số liệu tương đối (%) và tuyệt đối kèm đơn vị."
      }
    ],
    example: {
      prompt: "Dựa vào bảng số liệu sản lượng lúa cả nước giai đoạn 2010 - 2022, hãy nhận xét sự thay đổi quy mô và cơ cấu.",
      solution: "1. Khái quát: Sản lượng lúa nước ta có xu hướng tăng liên tục từ 40.0 triệu tấn (2010) lên 42.7 triệu tấn (2022), tăng thêm 2.7 triệu tấn (tăng 6.75%).\n2. Chi tiết: Giai đoạn 2010 - 2015 tăng nhanh nhất (+5.1 triệu tấn), giai đoạn 2015 - 2022 giảm nhẹ và ổn định quanh mức 42.7 - 43.5 triệu tấn do chuyển đổi mục đích sử dụng đất sang cây ăn quả giá trị cao.\n3. So sánh: Đồng bằng sông Cửu Long luôn dẫn đầu tuyệt đối, chiếm trên 54% sản lượng cả nước (năm 2022 đạt 24.1 triệu tấn), gấp 4.2 lần Đồng bằng sông Hồng (5.7 triệu tấn)."
    },
    commonMistakes: [
      "Liệt kê số liệu một cách thô sơ từ đầu đến cuối bảng mà không có câu nhận định khái quát.",
      "Quên tính toán số lần hoặc hiệu số so sánh giữa các đối tượng.",
      "Viết nhận xét nhưng không kèm đơn vị đo (tấn, %, triệu USD) trong bài thi."
    ]
  },
  {
    id: "skill_giai_thich",
    title: "2. Kỹ năng Giải thích nguyên nhân",
    summary: "Công thức: Tự nhiên (Vị trí, địa hình, khí hậu, đất, nước) → Kinh tế – Xã hội (Lao động, cơ sở chế biến, thị trường) → Chính sách.",
    formula: "Tự nhiên → KT-XH → Khoa học công nghệ → Chính sách & Thị trường",
    steps: [
      {
        stepName: "Nguyên nhân Tự nhiên",
        description: "Xét điều kiện tiên quyết: Vị trí địa lí, địa hình, đất đai, nguồn nước, sinh vật và khoáng sản."
      },
      {
        stepName: "Nguyên nhân KT - XH",
        description: "Xét nguồn lao động, kinh nghiệm sản xuất, truyền thống canh tác và mạng lưới đô thị."
      },
      {
        stepName: "Công nghiệp chế biến",
        description: "Hệ thống nhà máy bảo quản sau thu hoạch, công nghệ chế biến làm tăng giá trị thương phẩm."
      },
      {
        stepName: "Chính sách & Thị trường",
        description: "Chính sách quy hoạch của Nhà nước, hội nhập quốc tế và nhu cầu tiêu thụ trong/ngoài nước."
      }
    ],
    example: {
      prompt: "Tại sao Tây Nguyên là vùng chuyên canh cà phê lớn nhất nước ta?",
      solution: "1. Nguyên nhân tự nhiên:\n- Đất badan màu mỡ, tầng phong hóa sâu, phân bố tập trung trên các cao nguyên lượn sóng rộng lớn (Pleiku, Đắk Lắk, Mơ Nông) rất thuận lợi hình thành các nông trường quy mô lớn.\n- Khí hậu cận xích đạo có một mùa mưa cung cấp nước tưới và mùa khô kéo dài thuận lợi cho việc thu hoạch, phơi sấy và chế biến cà phê nhân.\n2. Nguyên nhân kinh tế - xã hội:\n- Đồng bào các dân tộc có bề dày kinh nghiệm trồng, chăm sóc và thu hoạch cà phê lâu đời; đồng thời thu hút đông đảo lực lượng lao động từ các vùng khác đến định cư.\n- Hệ thống cơ sở công nghiệp chế biến bột và hạt cà phê xuất khẩu được đầu tư hiện đại (Buôn Ma Thuột).\n- Nhu cầu thị trường thế giới lớn, chính sách phát triển cây công nghiệp chủ lực của Nhà nước."
    },
    commonMistakes: [
      "Chỉ nêu nguyên nhân tự nhiên mà quên hoàn toàn các nguyên nhân kinh tế - xã hội (thị trường, chế biến).",
      "Không nêu được đặc tính sinh thái đặc thù của cây trồng (cà phê vối Robusta ưa đất badan tầng sâu và khí hậu nóng ẩm)."
    ]
  },
  {
    id: "skill_chung_minh",
    title: "3. Kỹ năng Chứng minh nhận định",
    summary: "Công thức: Trích dẫn nhận định → Nêu các luận điểm phân nhánh → Đưa dẫn chứng số liệu Atlat cụ thể → Phân tích cơ chế tác động.",
    formula: "Khẳng định luận điểm → Luận cứ logic → Dẫn chứng Atlat/Số liệu → Đánh giá",
    steps: [
      {
        stepName: "Xác lập luận điểm",
        description: "Chia nhận định đề bài thành 2-3 luận điểm rõ ràng, không trùng lặp ý."
      },
      {
        stepName: "Thu thập dẫn chứng",
        description: "Trích xuất tên địa danh, trang Atlat, tên mỏ khoáng sản, sản lượng từ bản đồ và bảng số liệu."
      },
      {
        stepName: "Phân tích cơ chế",
        description: "Giải thích tại sao các dẫn chứng đó chứng minh được luận điểm đề bài đưa ra."
      },
      {
        stepName: "Khái quát kết luận",
        description: "Khẳng định lại tính chính xác và ý nghĩa thực tiễn của nhận định đối với phát triển kinh tế."
      }
    ],
    example: {
      prompt: "Dựa vào Atlat Địa lí Việt Nam, chứng minh nước ta có nguồn tài nguyên khoáng sản phong phú và phân bố không đều.",
      solution: "1. Luận điểm 1: Tài nguyên phong phú và đa dạng về chủng loại:\n- Nước ta có hơn 5.000 điểm quặng thuộc trên 60 loại khoáng sản khác nhau từ năng lượng (than, dầu khí), kim loại (sắt, bauxite, thiếc) đến phi kim (apatit, đá vôi).\n2. Luận điểm 2: Phân bố không đều theo không gian lãnh thổ:\n- Khoáng sản nhiên liệu: Than đá tập trung chủ yếu ở bể than Đông Triều - Quảng Ninh (Atlat trang 8); Dầu khí tập trung ở thềm lục địa phía nam thềm Cửu Long, Nam Côn Sơn.\n- Kim loại màu: Bauxite tập trung tại các cao nguyên Tây Nguyên (Đắk Nông, Lâm Đồng); Sắt, thiếc, apatit tập trung ở vùng núi Đông Bắc và Tây Bắc.\n=> Kết luận: Cần khai thác hợp lý, tiết kiệm và bảo vệ môi trường sinh thái."
    },
    commonMistakes: [
      "Chứng minh chung chung mà không nêu được tên cụ thể của các mỏ khoáng sản hoặc địa danh trên Atlat.",
      "Không bám sát 2 vế của đề bài ('phong phú' VÀ 'phân bố không đều')."
    ]
  },
  {
    id: "skill_so_sanh",
    title: "4. Kỹ năng So sánh hai đối tượng",
    summary: "Công thức: Lập bảng tiêu chí đồng nhất → Điểm tương đồng → Điểm khác biệt → Giải thích nguyên nhân dẫn đến khác biệt.",
    formula: "Xây dựng ma trận tiêu chí → Tìm nét chung → Bóc tách dị biệt → Giải thích",
    steps: [
      {
        stepName: "Xây dựng ma trận",
        description: "Lập các tiêu chí tương ứng: Vị trí, Địa hình, Khí hậu, Chuyên môn hóa, Hạn chế."
      },
      {
        stepName: "Chỉ ra điểm giống",
        description: "Nêu các quy luật chung của thiên nhiên nhiệt đới gió mùa hoặc chính sách phát triển chung."
      },
      {
        stepName: "Làm rõ điểm khác",
        description: "So sánh thế mạnh đặc thù của từng vùng hoặc từng ngành sản xuất."
      },
      {
        stepName: "Giải thích căn nguyên",
        description: "Giải thích nguồn gốc sâu xa của sự khác nhau (do vĩ độ, do độ cao, do cơ sở hạ tầng)."
      }
    ],
    example: {
      prompt: "So sánh thế mạnh và cơ cấu cây công nghiệp giữa Đông Nam Bộ và Tây Nguyên.",
      solution: "1. Giống nhau: Đều là 2 vùng chuyên canh cây công nghiệp quy mô lớn nhất nước ta, thế mạnh dựa trên đất badan màu mỡ và khí hậu cận xích đạo nhiều nắng ấm, nguồn lao động dồi dào.\n2. Khác nhau:\n- Đông Nam Bộ: Địa hình bán bình nguyên thoải; Trồng chủ lực Cao su (đứng đầu cả nước), Điều, Hồ tiêu; có cơ sở công nghiệp chế biến và cảng biển lớn nhất.\n- Tây Nguyên: Địa hình cao nguyên badan xếp tầng phân hóa theo độ cao; Trồng chủ lực Cà phê (đứng đầu cả nước, cà phê chè ở Đà Lạt, cà phê vối ở Buôn Ma Thuột), Chè búp, Cao su; gặp khó khăn hơn về giao thông vận tải và nước tưới mùa khô."
    },
    commonMistakes: [
      "So sánh theo kiểu viết rời rạc: Trình bày hết vùng A rồi mới viết vùng B, không đặt cạnh nhau theo tiêu chí tương quan.",
      "Quên bước giải thích nguyên nhân của sự khác biệt giữa hai đối tượng."
    ]
  }
];

export const COMPARISON_MATRIX_SAMPLE = {
  title: "Bảng ma trận so sánh Đông Nam Bộ vs Tây Nguyên",
  rows: [
    {
      criteria: "1. Vị trí địa lí & Tiếp giáp",
      dongNamBo: "Giáp biển Đông, giáp ĐBSCL và Tây Nguyên; là cửa ngõ giao thương quốc tế qua cảng Cái Mép và sân bay Long Thành.",
      tayNguyen: "Vùng duy nhất nước ta không giáp biển, nằm ở vị trí chiến lược ngã ba Đông Dương (Việt - Lào - Campuchia)."
    },
    {
      criteria: "2. Địa hình & Đất đai",
      dongNamBo: "Bán bình nguyên lượn sóng bằng phẳng; Đất đỏ badan và đất xám trên phù sa cổ diện tích lớn.",
      tayNguyen: "Các cao nguyên badan xếp tầng đồ sộ (Kon Tum, Pleiku, Đắk Lắk, Mơ Nông, Di Linh); Đất badan phì nhiêu tầng sâu."
    },
    {
      criteria: "3. Khí hậu",
      dongNamBo: "Cận xích đạo gió mùa nóng ẩm quanh năm; biên độ nhiệt nhỏ; hầu như không chịu ảnh hưởng của bão và gió rét.",
      tayNguyen: "Cận xích đạo gió mùa nhưng phân hóa theo đai cao mát mẻ trên các cao nguyên trên 1000m (Đà Lạt, Pleiku)."
    },
    {
      criteria: "4. Cơ cấu cây công nghiệp chủ lực",
      dongNamBo: "Cao su (chiếm diện tích lớn nhất cả nước), Điều, Tiêu, Cây ăn quả nhiệt đới đặc sản (sầu riêng, chôm chôm).",
      tayNguyen: "Cà phê (chiếm sản lượng lớn nhất cả nước, nổi tiếng Robusta Buôn Ma Thuột), Hồ tiêu, Chè búp (Lâm Đồng), Cao su."
    },
    {
      criteria: "5. Khó khăn lớn nhất",
      dongNamBo: "Mùa khô kéo dài 4-5 tháng thiếu nước tưới; nguy cơ ô nhiễm môi trường do mật độ công nghiệp và đô thị hóa cao.",
      tayNguyen: "Mùa khô gay gắt làm hạ thấp mực nước ngầm; cơ sở hạ tầng giao thông kết nối liên vùng còn nhiều hạn chế."
    }
  ]
};

export const MOCK_EXAMS: MockExam[] = COMPREHENSIVE_MOCK_EXAMS;

export const MOCK_EXAM = MOCK_EXAMS[0];

export const THIRTY_DAY_CHALLENGE: DayChallenge[] = Array.from({ length: 30 }, (_, index) => {
  const day = index + 1;
  let topic = "Vị trí địa lí và phạm vi lãnh thổ";
  let xp = 80;
  let stage = 1;
  if (day <= 5) {
    stage = 1;
    topic = "Chặng 1: Nền tảng Tự nhiên & Vị trí chiến lược";
  } else if (day <= 10) {
    stage = 2;
    topic = "Chặng 2: Địa hình, Khí hậu & Sông ngòi Việt Nam";
  } else if (day <= 15) {
    stage = 3;
    topic = "Chặng 3: Đọc hiểu & Khai thác Atlat Địa lí chuyên sâu";
  } else if (day <= 20) {
    stage = 4;
    topic = "Chặng 4: Bậc thầy phân tích biểu đồ & xử lý số liệu";
  } else if (day <= 25) {
    stage = 5;
    topic = "Chặng 5: Địa lí các vùng kinh tế trọng điểm";
  } else {
    stage = 5;
    topic = "Về đích: Luyện đề tổng hợp & Chinh phục trường chuyên";
    xp = 120;
  }

  const lessonSnippet = `Ôn trọng tâm kiến thức cốt lõi ngày ${day}, đối chiếu sơ đồ tư duy và thuật ngữ địa lí chuyên biệt.`;
  const atlatExercise = `Khai thác bài tập Atlat trang ${day % 15 + 4}: Xác định toạ độ, phân bố và giải thích nguyên nhân.`;
  const chartExercise = `Nhận dạng bảng số liệu ngày ${day} và viết đoạn văn nhận xét số liệu chuẩn học sinh giỏi.`;
  const thinkingQuestion = `Trả lời 1 câu hỏi tư duy bản chất (Tại sao? So sánh? Chứng minh?).`;

  return {
    dayNumber: day,
    day: day,
    stage: stage,
    focus: topic,
    title: `Ngày ${day < 10 ? "0" + day : day}: ${topic}`,
    coreTopic: topic,
    lessonSnippet: lessonSnippet,
    atlatExercise: atlatExercise,
    chartExercise: chartExercise,
    thinkingQuestion: thinkingQuestion,
    tasks: {
      lesson: lessonSnippet,
      atlat: atlatExercise,
      chart: chartExercise,
      thinkingQuestions: [
        "Xác định mối quan hệ nhân quả giữa điều kiện tự nhiên và sự phân bố",
        "Vì sao đối tượng địa lí lại tập trung chủ yếu ở khu vực này?",
        "So sánh điểm tương đồng và dị biệt so với vùng đối chứng",
        "Đánh giá các giải pháp phát triển bền vững và bảo vệ môi trường"
      ],
      miniTest: `Mini Test kiểm tra nhanh ngày ${day}`
    },
    isCompleted: day <= 12, // User starts on day 12 streak as requested
    xpReward: xp,
    miniTestQuestions: [
      {
        id: `day-${day}-q1`,
        level: "Thông hiểu",
        question: `Câu hỏi thử thách ngày ${day}: Nhân tố quyết định sự phân hóa thiên nhiên theo chiều Bắc - Nam nước ta là gì?`,
        options: [
          "Sự suy giảm ảnh hưởng của gió mùa Đông Bắc và sự thay đổi góc nhập xạ từ Bắc vào Nam",
          "Mạng lưới sông ngòi dày đặc hơn ở miền Nam",
          "Độ cao của các dãy núi ở Tây Nguyên cao hơn Hoàng Liên Sơn",
          "Chiều dài đường bờ biển của miền Bắc dài hơn miền Nam"
        ],
        correctAnswer: 0,
        explanation: "Sự suy yếu của gió mùa Đông Bắc khi qua đèo Hải Vân/Bạch Mã cùng với góc nhập xạ tăng dần về phía nam tạo ra ranh giới khí hậu nhiệt đới ẩm gió mùa có mùa đông lạnh (miền Bắc) và khí hậu cận xích đạo gió mùa nóng quanh năm (miền Nam)."
      }
    ]
  };
});

export const THIRTY_DAY_CHALLENGES = THIRTY_DAY_CHALLENGE;

export const STICKY_NOTES = [
  {
    id: "tip-1",
    category: "MẸO NHỚ",
    badgeColor: "bg-[#146B5B] text-white",
    cardBg: "bg-[#E8F5EF] border-[#146B5B]/30",
    title: "Công thức 'Tự nhiên trước, Kinh tế sau'",
    content: "Gặp câu hỏi 'Tại sao?', đừng bao giờ chỉ tìm 1 nguyên nhân. Hãy kiểm tra lần lượt: Vị trí → Địa hình → Khí hậu → Nguồn nước/Đất đai → Dân cư/Lao động → Cơ sở chế biến → Thị trường → Chính sách."
  },
  {
    id: "tip-2",
    category: "TỪ KHÓA",
    badgeColor: "bg-[#1677B8] text-white",
    cardBg: "bg-sky-50 border-[#1677B8]/30",
    title: "Nhận dạng biểu đồ trong 3 giây",
    content: "• 'Quy mô' hoặc 'So sánh các đối tượng' → Biểu đồ CỘT\n• 'Tốc độ tăng trưởng' (bắt đầu từ 100%) → Biểu đồ ĐƯỜNG\n• 'Cơ cấu' (≤ 3 năm) → Biểu đồ TRÒN\n• 'Chuyển dịch cơ cấu' (≥ 4 năm) → Biểu đồ MIỀN\n• 'Hai đơn vị đo khác nhau' (nghìn tấn và %) → Biểu đồ KẾT HỢP."
  },
  {
    id: "tip-3",
    category: "DỄ NHẦM",
    badgeColor: "bg-amber-600 text-white",
    cardBg: "bg-amber-50 border-amber-300",
    title: "Nhầm lẫn khái niệm Quy mô vs Tốc độ",
    content: "Quy mô là giá trị tuyệt đối (tấn, triệu USD, người/km²). Tốc độ tăng trưởng là giá trị tương đối (%). Tốc độ tăng trưởng cao chưa chắc quy mô đã lớn nhất!"
  },
  {
    id: "tip-4",
    category: "THƯỜNG GẶP",
    badgeColor: "bg-purple-600 text-white",
    cardBg: "bg-purple-50 border-purple-200",
    title: "Atlat là 'phao thi hợp pháp'",
    content: "Khi trả lời câu hỏi tự luận thi chuyên, luôn mở ngoặc ghi trang Atlat chứng minh: Ví dụ: (Căn cứ Atlat trang 20: Tỉnh Kiên Giang có sản lượng đánh bắt >400.000 tấn). Điều này giúp bài thi tăng tính thuyết phục tuyệt đối."
  },
  {
    id: "tip-5",
    category: "NÂNG CAO",
    badgeColor: "bg-rose-600 text-white",
    cardBg: "bg-rose-50 border-rose-200",
    title: "Quy tắc viết đoạn văn nhận xét số liệu",
    content: "Không bao giờ được liệt kê lại toàn bộ bảng số liệu một cách khô khan. Phải chỉ ra xu hướng chung → đối tượng đột biến → so sánh tỉ lệ lần hoặc hiệu số → giải thích nguyên nhân ngắn gọn."
  },
  {
    id: "tip-so-lieu-1",
    category: "SỐ LIỆU THCS",
    badgeColor: "bg-emerald-600 text-white",
    cardBg: "bg-emerald-50 border-emerald-300",
    title: "Mẹo nhớ diện tích đất liền: 331.212 km²",
    content: "🔢 Câu thần chú: 'Ba ba một, hai một hai' (331.212 km²). Nhớ quy tắc đối xứng: 331 rồi lùi lại 212! Còn vùng biển nước ta rộng trên 1 triệu km² (gấp hơn 3 lần diện tích phần đất liền)."
  },
  {
    id: "tip-so-lieu-2",
    category: "SỐ LIỆU THCS",
    badgeColor: "bg-blue-600 text-white",
    cardBg: "bg-blue-50 border-blue-300",
    title: "Mẹo nhớ đường bờ biển: 3.260 km",
    content: "🌊 Câu thần chú: 'Ba ngàn hai trăm sáu mươi' (3.260 km bờ biển hình chữ S uốn lượn). Bắt đầu từ mũi Trà Cổ (Móng Cái, Quảng Ninh) đến Hà Tiên (Kiên Giang), đi qua 28 tỉnh/thành phố ven biển!"
  },
  {
    id: "tip-so-lieu-3",
    category: "SỐ LIỆU THCS",
    badgeColor: "bg-indigo-600 text-white",
    cardBg: "bg-indigo-50 border-indigo-300",
    title: "Mẹo nhớ biên giới đất liền: 4.600 km",
    content: "🏔️ Công thức cộng biên giới 3 nước: Lào (2.100 km - dài nhất) + Trung Quốc (1.400 km) + Campuchia (1.100 km) = Đúng tròn 4.600 km! Thần chú: 'Lào hai mốt, Trung mười bốn, Cam mười một'."
  },
  {
    id: "tip-so-lieu-4",
    category: "SỐ LIỆU THCS",
    badgeColor: "bg-violet-600 text-white",
    cardBg: "bg-violet-50 border-violet-300",
    title: "Mẹo nhớ tọa độ 4 điểm cực trên đất liền",
    content: "📍 Cực Bắc: 23°23'B (Lũng Cú - Hà Giang: cặp số song sinh 23-23!)\n📍 Cực Nam: 8°34'B (Đất Mũi - Cà Mau: 8 = 2³)\n📍 Cực Tây: 102°09'Đ (Sín Thầu - Điện Biên: 102)\n📍 Cực Đông: 109°28'Đ (Vạn Thạnh - Khánh Hòa: 109)."
  },
  {
    id: "tip-so-lieu-5",
    category: "SỐ LIỆU THCS",
    badgeColor: "bg-amber-700 text-white",
    cardBg: "bg-amber-50 border-amber-300",
    title: "Mẹo nhớ đỉnh Fansipan: 3.143m",
    content: "⛰️ Thần chú 'Nóc nhà Đông Dương': 3.143m ('Ba - Một - Bốn - Ba: số Pi 3.14 thêm số 3 ở cuối!'). Nằm trên dãy Hoàng Liên Sơn hùng vĩ, quanh năm mây mù che phủ."
  },
  {
    id: "tip-so-lieu-6",
    category: "SỐ LIỆU THCS",
    badgeColor: "bg-teal-700 text-white",
    cardBg: "bg-teal-50 border-teal-300",
    title: "Mẹo nhớ các 'con số vàng' khí hậu nhiệt đới",
    content: "☀️ Nhiệt độ trung bình năm: >20°C (trừ vùng núi cao)\n🌧️ Lượng mưa trung bình năm: 1.500 - 2.000 mm\n💧 Độ ẩm không khí: >80%\n✨ Số giờ nắng: 1.400 - 3.000 giờ/năm (Nam Bộ nắng nhiều nhất)."
  },
  {
    id: "tip-so-lieu-7",
    category: "SỐ LIỆU THCS",
    badgeColor: "bg-cyan-700 text-white",
    cardBg: "bg-cyan-50 border-cyan-300",
    title: "Mẹo nhớ cấu trúc địa hình: 3/4 & 1/4",
    content: "📐 Đồi núi chiếm 3/4 diện tích, Đồng bằng chiếm 1/4 diện tích.\nĐặc biệt: Trong 3/4 đồi núi thì ĐỒI NÚI THẤP (<1.000m) chiếm đến 85%, núi cao (>2.000m) chỉ chiếm 1% duy nhất!"
  },
  {
    id: "tip-so-lieu-8",
    category: "SỐ LIỆU THCS",
    badgeColor: "bg-orange-700 text-white",
    cardBg: "bg-orange-50 border-orange-300",
    title: "Mẹo nhớ công thức tính số liệu địa lí hay thi",
    content: "📊 1. Mật độ dân số = Dân số (người) / Diện tích (km²) [Đơn vị: người/km²]\n🌾 2. Năng suất lúa = Sản lượng (tạ) / Diện tích gieo trồng (ha) [Đơn vị: tạ/ha]\n🍚 3. Bình quân lương thực = Sản lượng lương thực (kg) / Dân số (người) [Đơn vị: kg/người]\n📈 4. Tỉ trọng (%) = (Giá trị thành phần / Tổng giá trị) × 100%."
  }
];

export const INITIAL_LEADERBOARD: LeaderboardUser[] = [
  { rank: 1, name: "Hoàng Minh Trí", school: "Chuyên Hà Nội - Amsterdam", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=TriHN", xp: 4850, streak: 28, badgesCount: 14, specialty: "Vua Atlat & Tư duy chuyên" },
  { rank: 2, name: "Nguyễn Lê Bảo Anh", school: "Chuyên Lê Hồng Phong TP.HCM", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=BaoAnh", xp: 4620, streak: 26, badgesCount: 13, specialty: "Bậc thầy biểu đồ số liệu" },
  { rank: 3, name: "Phạm Thảo Linh", school: "Chuyên Trần Phú Hải Phòng", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=ThaoLinh", xp: 4310, streak: 22, badgesCount: 11, specialty: "Luyện đề điểm 10 tuyệt đối" },
  { rank: 4, name: "Bạn (Bạn đang học)", school: "Đội tuyển Địa lí 9", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=MyAvatar", xp: 2450, streak: 12, badgesCount: 8, specialty: "Đang bứt phá top đầu" },
  { rank: 5, name: "Đặng Quang Huy", school: "Chuyên Lam Sơn Thanh Hóa", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=HuyLamSon", xp: 2380, streak: 15, badgesCount: 7, specialty: "Địa lí tự nhiên & khoáng sản" },
  { rank: 6, name: "Lê Thùy Dương", school: "Chuyên Quốc Học Huế", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=DuongHue", xp: 2190, streak: 11, badgesCount: 6, specialty: "Địa lí các vùng kinh tế" }
];
