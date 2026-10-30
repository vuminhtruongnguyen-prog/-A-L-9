import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json({ limit: "5mb" }));

// Lazy GoogleGenAI initialization
let aiClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// In-memory study group discussions state with rich initial discussions
interface DiscussionPost {
  id: string;
  author: string;
  authorName: string;
  avatar: string;
  school: string;
  authorBadge: string;
  topic: string;
  tag: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  likes: number;
  comments: {
    id: string;
    author: string;
    authorName?: string;
    avatar: string;
    school: string;
    authorBadge?: string;
    content: string;
    createdAt: string;
    isTeacherOrTopStudent?: boolean;
  }[];
}

let forumPosts: DiscussionPost[] = [
  {
    id: "post-1",
    author: "Nguyễn Minh Châu",
    authorName: "Nguyễn Minh Châu",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Chau9A",
    school: "THCS Trọng Điểm - Chuyên Am",
    authorBadge: "Thành viên tích cực",
    topic: "Địa lí tự nhiên & Atlat",
    tag: "Atlat",
    title: "Mẹo đọc Atlat trang 9 (Khí hậu) để không bị trừ điểm gió mùa?",
    content: "Mọi người cho mình hỏi khi đề bài hỏi 'Phân tích hoạt động của gió mùa mùa hạ ở miền Bắc', nếu chỉ căn cứ vào hướng mũi tên Tây Nam thì có đủ không? Có cần phân tích nguồn gốc khối khí nhiệt đới ẩm Bắc Ấn Độ Dương và dải hội tụ nhiệt đới không ạ?",
    tags: ["Atlat Trang 9", "Khí hậu", "Gió mùa"],
    createdAt: "10 phút trước",
    likes: 18,
    comments: [
      {
        id: "c-1",
        author: "Thầy Hoàng (GV Chuyên)",
        authorName: "Thầy Hoàng (GV Chuyên)",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=TeacherHoang",
        school: "Cố vấn Địa lí THCS",
        authorBadge: "Giáo viên Cố vấn",
        content: "Chào Châu, đây là câu hỏi rất hay trong đề chuyên! Em cần tách rõ: Đầu mùa hạ (khối khí vịnh Ben-gan TBg gây mưa lớn Nam Bộ, Tây Nguyên và hiệu ứng phơn khô nóng ở Trung Bộ và phần Nam Tây Bắc). Giữa và cuối mùa hạ: gió mùa Tây Nam xuất phát từ áp cao cận chí tuyến bán cầu Nam vượt xích đạo kết hợp dải hội tụ nhiệt đới (FIT) gây mưa lớn kéo dài. Ở Bắc Bộ chuyển hướng Đông Nam do hút gió từ áp thấp Bắc Bộ!",
        createdAt: "5 phút trước",
        isTeacherOrTopStudent: true,
      }
    ]
  },
  {
    id: "post-2",
    author: "Trần Bảo Nam",
    authorName: "Trần Bảo Nam",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=NamGeo",
    school: "Chuyên Lê Hồng Phong TP.HCM",
    authorBadge: "Học sinh Chuyên Địa",
    topic: "Bậc thầy biểu đồ",
    tag: "Biểu đồ",
    title: "Cách phân biệt nhanh biểu đồ Miền và biểu đồ Tròn khi bảng số liệu có 3 mốc năm?",
    content: "Mình hay bị phân vân khi bảng số liệu có 3 năm và yêu cầu thể hiện cơ cấu. Khi nào vẽ tròn 3 bán kính khác nhau, khi nào chuyển sang miền?",
    tags: ["Biểu đồ", "Cơ cấu", "Kỹ năng chuyên"],
    createdAt: "45 phút trước",
    likes: 24,
    comments: [
      {
        id: "c-2",
        author: "Lê Phương Linh (Giải Nhất HSG Tỉnh)",
        authorName: "Lê Phương Linh (Giải Nhất HSG Tỉnh)",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=LinhFirst",
        school: "THCS Chuyên Ngoại Ngữ",
        authorBadge: "Giải Nhất Tỉnh",
        content: "Kinh nghiệm của mình: Nếu từ khóa là 'chuyển dịch cơ cấu' hoặc 'sự thay đổi cơ cấu' mà chỉ có 1 đến 3 năm thì vẽ Biểu đồ Tròn (nếu có quy mô tổng thì vẽ bán kính R khác nhau). Biểu đồ Miền thường dùng khi có từ 4 năm trở lên thể hiện quá trình thay đổi cơ cấu hoặc động thái chuyển dịch liên tục!",
        createdAt: "30 phút trước",
        isTeacherOrTopStudent: true,
      }
    ]
  },
  {
    id: "post-3",
    author: "Vũ Tuấn Kiệt",
    authorName: "Vũ Tuấn Kiệt",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=KietVu",
    school: "Chuyên Lam Sơn Thanh Hóa",
    authorBadge: "Học sinh Giỏi Địa",
    topic: "Địa lí các vùng",
    tag: "Vùng kinh tế",
    title: "So sánh thế mạnh thủy điện giữa TDMN Bắc Bộ và Tây Nguyên",
    content: "Các bạn cho mình xin dàn ý so sánh tiềm năng thủy điện của 2 vùng: Trữ năng trên hệ thống sông Đà, Thao, Lô gâm so với sông Xê Xan, Srêpôk, Đồng Nai. Điểm khác biệt mấu chốt là gì?",
    tags: ["So sánh chuyên", "Thủy điện", "TDMN Bắc Bộ", "Tây Nguyên"],
    createdAt: "2 giờ trước",
    likes: 31,
    comments: []
  }
];

// Health Check API
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "DiaLi9-Backend" });
});

// AI Assistant endpoint
app.post("/api/gemini/chat", async (req, res) => {
  try {
    const { message, mode, context } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Tin nhắn không được để trống" });
    }

    const ai = getGenAI();
    if (!ai) {
      // High quality pedagogical fallback response if API key is not yet configured
      return res.json({
        reply: generateOfflinePedagogicalAnswer(message, mode, context),
        source: "offline_knowledge_base",
      });
    }

    let modeInstruction = "";
    if (mode === "hint") {
      modeInstruction = `CHẾ ĐỘ GỢI Ý (Hint Socratic): Không đưa ra bài văn giải trọn gói ngay. Hãy hướng dẫn học sinh tìm câu trả lời theo từng bước:
- Gợi ý 1: Nhắc học sinh quan sát yếu tố tự nhiên then chốt (địa hình, khí hậu, đất đai, nguồn nước hoặc trang Atlat cụ thể).
- Gợi ý 2: Hướng dẫn kết nối với nhân tố kinh tế - xã hội (lao động, cơ sở chế biến, thị trường tiêu thụ, chính sách).
- Gợi ý 3: Đưa câu hỏi kích thích suy luận để học sinh tự đúc kết trước khi chốt lại dàn ý chính.`;
    } else if (mode === "counter") {
      modeInstruction = `CHẾ ĐỘ HỎI NGƯỢC (Socratic Challenge): Đặt lại cho học sinh 2-3 câu hỏi phản biện sâu sắc để kiểm tra tư duy bản chất, bóc tách nguyên nhân sâu xa (ví dụ: 'Nếu nói do khí hậu, vậy tại sao vùng lân cận có khí hậu tương tự nhưng lại phát triển cây khác?'). Khuyến khích học sinh dùng dẫn chứng số liệu/Atlat.`;
    } else if (mode === "error_analysis") {
      modeInstruction = `CHẾ ĐỘ PHÂN TÍCH LỖI (Error Diagnosis): Bóc tách các lỗi sai phổ biến mà học sinh thi chuyên hay mắc phải về câu hỏi này:
- Lỗi nhìn nhận một chiều (chỉ nêu tự nhiên mà quên kinh tế - xã hội).
- Lỗi nhầm lẫn khái niệm hoặc kỹ năng Atlat/biểu đồ.
- Lỗi dùng từ cảm tính thiếu thuật ngữ địa lí chuẩn.
- Hướng sửa chữa khắc phục để lấy trọn điểm bài thi chuyên.`;
    } else {
      // mode === 'explain'
      modeInstruction = `CHẾ ĐỘ GIẢI THÍCH CHUYÊN SÂU (Deep Academic): Trả lời chuẩn mực, bài bản theo cấu trúc thi học sinh giỏi cấp tỉnh/thành phố và thi vào lớp 10 Chuyên Địa lí:
1. Đặt vấn đề & Khái quát chung.
2. Phân tích luận điểm 1: Điều kiện Tự nhiên (kèm trang Atlat và dẫn chứng cụ thể).
3. Phân tích luận điểm 2: Điều kiện Kinh tế - Xã hội & Nhân văn.
4. Đánh giá thế mạnh, hạn chế & Ý nghĩa chiến lược.
5. Bài học rút ra & Mẹo đạt điểm tối đa.`;
    }

    const systemInstruction = `Bạn là "Trợ lý Địa lí 9 AI" - chuyên gia cố vấn học tập và luyện thi học sinh giỏi môn Địa lí cấp 2 (trọng tâm lớp 9) chuyên sâu tại Việt Nam.
Khẩu hiệu: “Nắm chắc kiến thức – Hiểu sâu bản đồ – Tư duy địa lí – Chinh phục trường chuyên!”.
Phong cách: Sư phạm mẫu mực, truyền cảm hứng, khuyến khích tư duy địa lí logic (Tự nhiên -> Dân cư -> Kinh tế -> Không gian vùng), hướng dẫn tra cứu Atlat Địa lí Việt Nam chính xác (trang 4-5 hành chính, 6-8 tự nhiên, 9 khí hậu, 10 sông ngòi, 11 đất, 12 sinh vật, 13-14 các miền tự nhiên, 15-16 dân cư, 17-25 kinh tế, 26-30 các vùng kinh tế).
${modeInstruction}
Hãy trả lời mạch lạc, sử dụng định dạng Markdown đẹp, gạch đầu dòng rõ ràng, tô đậm thuật ngữ quan trọng.`;

    const contents = [
      {
        role: "user",
        parts: [
          {
            text: `Câu hỏi/Thắc mắc của học sinh: "${message}"\nNgữ cảnh đang học: ${context || "Ôn thi chuyên Địa lí 9"}`
          }
        ]
      }
    ];

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    res.json({
      reply: response.text || "Rất tiếc, trợ lý AI chưa thể tạo câu trả lời. Bạn hãy thử đặt lại câu hỏi cụ thể hơn nhé!",
      source: "gemini-3.8-flash",
    });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({
      error: "Không thể kết nối với dịch vụ AI. Đang kích hoạt chế độ hỗ trợ ngoại tuyến.",
      details: error?.message,
    });
  }
});

// Community forum endpoints (supports both /api/forum/posts and /api/discussions)
app.get(["/api/forum/posts", "/api/discussions"], (req, res) => {
  res.json(forumPosts);
});

app.post(["/api/forum/posts", "/api/discussions"], (req, res) => {
  const { author, authorName, school, authorBadge, topic, tag, title, content, tags } = req.body;
  const effectiveAuthor = authorName || author || "Học sinh Chuyên Địa";
  if (!title || !content) {
    return res.status(400).json({ error: "Vui lòng nhập đủ thông tin tiêu đề và nội dung" });
  }

  const effectiveTag = tag || topic || (Array.isArray(tags) && tags[0]) || "Thảo luận chuyên";
  const effectiveTags = Array.isArray(tags) && tags.length > 0 ? tags : [effectiveTag];

  const newPost: DiscussionPost = {
    id: `post-${Date.now()}`,
    author: effectiveAuthor.trim(),
    authorName: effectiveAuthor.trim(),
    avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(effectiveAuthor)}`,
    school: school?.trim() || "Học sinh THCS Chuyên",
    authorBadge: authorBadge?.trim() || "Thành viên tích cực",
    topic: effectiveTag,
    tag: effectiveTag,
    title: title.trim(),
    content: content.trim(),
    tags: effectiveTags,
    createdAt: "Vừa xong",
    likes: 0,
    comments: [],
  };
  forumPosts.unshift(newPost);
  res.json(newPost);
});

app.post(["/api/forum/posts/:id/comments", "/api/forum/posts/:id/comment", "/api/discussions/:id/comments"], (req, res) => {
  const { id } = req.params;
  const { author, authorName, school, authorBadge, content } = req.body;
  const post = forumPosts.find((p) => p.id === id);
  if (!post) {
    return res.status(404).json({ error: "Không tìm thấy bài viết" });
  }
  if (!content) {
    return res.status(400).json({ error: "Vui lòng nhập nội dung bình luận" });
  }
  const effectiveAuthor = authorName || author || "Bạn (Tôi)";
  const newComment = {
    id: `c-${Date.now()}`,
    author: effectiveAuthor.trim(),
    authorName: effectiveAuthor.trim(),
    avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(effectiveAuthor)}`,
    school: school?.trim() || "Thành viên nhóm",
    authorBadge: authorBadge?.trim() || "HSG Chuyên",
    content: content.trim(),
    createdAt: "Vừa xong",
  };
  post.comments.push(newComment);
  // Return the updated post
  res.json(post);
});

app.post(["/api/forum/posts/:id/like", "/api/discussions/:id/like"], (req, res) => {
  const { id } = req.params;
  const post = forumPosts.find((p) => p.id === id);
  if (!post) {
    return res.status(404).json({ error: "Không tìm thấy bài viết" });
  }
  post.likes += 1;
  res.json(post);
});

// In-memory user progress state (persisted across sessions for current user)
let userProgressState = {
  xp: 1450,
  streakDays: 12,
  completedTopics: ["topic-1-vi-tri", "topic-2-khi-hau", "topic-4-dan-cu"],
  completedChallenges: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  radarSkills: {
    atlat: 85,
    chart: 80,
    physicalGeo: 90,
    socioEconomic: 75,
    regional: 70,
    reasoning: 88,
  },
  lastUpdated: new Date().toISOString(),
};

app.get("/api/user/progress", (req, res) => {
  res.json(userProgressState);
});

app.post("/api/user/progress", (req, res) => {
  const updates = req.body;
  if (typeof updates === "object" && updates !== null) {
    userProgressState = {
      ...userProgressState,
      ...updates,
      lastUpdated: new Date().toISOString(),
    };
  }
  res.json(userProgressState);
});

// Personalized Learning Path & Roadmap recommendation endpoint
app.post("/api/user/personalized-roadmap", (req, res) => {
  const { radarSkills, recentExamScore } = req.body;
  const skills = radarSkills || userProgressState.radarSkills;
  const entries = Object.entries(skills);
  const sorted = [...entries].sort(([, a], [, b]) => (Number(a) || 0) - (Number(b) || 0));

  const weakest = sorted[0] || ["reasoning", 55];
  const secondWeakest = sorted[1] || ["atlat", 65];
  const strongest = sorted[sorted.length - 1] || ["physicalGeo", 90];

  const skillNames: Record<string, string> = {
    atlat: "Khai thác Atlat Địa lí",
    chart: "Kỹ năng Biểu đồ & Nhận xét",
    physicalGeo: "Địa lí Tự nhiên đại cương",
    socioEconomic: "Địa lí Dân cư & Kinh tế",
    regional: "Địa lí các Vùng kinh tế",
    reasoning: "Tư duy bản chất & Giải thích chuyên",
    knowledge: "Kiến thức nền tảng",
    statistics: "Xử lý số liệu toán học",
    thinking: "Tư duy giải thích nguyên nhân",
    exam: "Luyện đề thi chuyên",
  };

  const weakestName = skillNames[weakest[0]] || weakest[0];
  const secondWeakestName = skillNames[secondWeakest[0]] || secondWeakest[0];
  const strongestName = skillNames[strongest[0]] || strongest[0];

  const roadmap = {
    weakestSkill: { key: weakest[0], name: weakestName, score: weakest[1] },
    secondWeakestSkill: { key: secondWeakest[0], name: secondWeakestName, score: secondWeakest[1] },
    strongestSkill: { key: strongest[0], name: strongestName, score: strongest[1] },
    headline: `Lộ trình tăng tốc 7 ngày: Đột phá ${weakestName}`,
    diagnosticSummary: `Dựa trên phân tích năng lực cá nhân, thế mạnh nổi trội của bạn là "${strongestName}" (${strongest[1]}%), nhưng điểm rơi nhiều nhất ở "${weakestName}" (${weakest[1]}%) và "${secondWeakestName}" (${secondWeakest[1]}%).`,
    recentScore: recentExamScore || null,
    sevenDayPlan: [
      {
        day: 1,
        title: "Ngày 1: Rà soát lỗ hổng & Củng cố lý thuyết nền tảng",
        action: `Đọc lại chuyên đề ${weakestName}, ghi nhớ sơ đồ tư duy và các thuật ngữ địa lí cốt lõi`,
        targetXp: 50,
      },
      {
        day: 2,
        title: "Ngày 2: Thực hành có giàn giáo trợ giúp",
        action: `Luyện 5 câu hỏi thông hiểu chuyên sâu về ${weakestName} với gợi ý của Trợ lý AI`,
        targetXp: 60,
      },
      {
        day: 3,
        title: "Ngày 3: Khai thác Atlat & Lập bản đồ tư duy liên đới",
        action: "Tra cứu trang Atlat chỉ định, xác định tọa độ, hướng gió và nguyên nhân phân hóa",
        targetXp: 70,
      },
      {
        day: 4,
        title: "Ngày 4: Rèn luyện công thức giải thích 4 bước",
        action: "Áp dụng công thức: Tự nhiên -> Kinh tế xã hội -> Chính sách -> Kết luận cho 3 bài tự luận",
        targetXp: 80,
      },
      {
        day: 5,
        title: "Ngày 5: Xử lý số liệu & Viết đoạn nhận xét chuẩn điểm 10",
        action: "Nhận dạng bảng số liệu mới, tính tốc độ tăng trưởng / cơ cấu và viết nhận xét hoàn chỉnh",
        targetXp: 80,
      },
      {
        day: 6,
        title: "Ngày 6: Thi đấu thử thách đề thi chuyên 45 phút",
        action: "Làm đề thi thử tổng hợp, kiểm soát thời gian và trình bày bài theo ba-rem điểm",
        targetXp: 100,
      },
      {
        day: 7,
        title: "Ngày 7: Chẩn đoán radar kiểm chứng tiến bộ",
        action: "Kiểm tra chẩn đoán lại để cập nhật biểu đồ radar năng lực cá nhân (+15% dự kiến)",
        targetXp: 120,
      },
    ],
    recommendedTopics: [
      { id: "topic-1-vi-tri", title: "Vị trí địa lí & Phạm vi lãnh thổ", reason: "Quyết định bản chất thiên nhiên nhiệt đới gió mùa" },
      { id: "topic-2-khi-hau", title: "Khí hậu nhiệt đới ẩm gió mùa", reason: "Giải thích nhịp điệu mùa và sự phân hóa đai cao" },
      { id: "topic-7-vung-kinh-te", title: "Địa lí 7 Vùng kinh tế", reason: "Trọng tâm lớn nhất trong các đề thi học sinh giỏi" },
    ],
    generatedAt: new Date().toISOString(),
  };

  res.json(roadmap);
});

// Fallback academic answer generator for instant offline resilience
function generateOfflinePedagogicalAnswer(query: string, mode: string, context?: string): string {
  const q = query.toLowerCase();
  
  if (q.includes("đông nam bộ") && (q.includes("cây công nghiệp") || q.includes("thế mạnh"))) {
    if (mode === "hint") {
      return `💡 **Gợi ý từng bước cho câu hỏi Đông Nam Bộ:**\n\n- **Gợi ý 1:** Hãy xem xét trước điều kiện **khí hậu** (cận xích đạo nóng ẩm) và **đất đai** (đất đỏ badan và đất xám trên phù sa cổ diện tích lớn, địa hình bán bình nguyên lượn sóng).\n- **Gợi ý 2:** Xem xét nhân tố **kinh tế - xã hội**: Cơ sở công nghiệp chế biến hiện đại nhất nước, thị trường xuất khẩu rộng lớn qua cảng Sài Gòn, tập quán canh tác lâu đời của người lao động.\n- **Gợi ý 3:** Thử so sánh với Tây Nguyên: Cả hai đều trồng cao su, hồ tiêu, cà phê, nhưng vì sao Đông Nam Bộ lại đứng đầu về cao su?`;
    }
    if (mode === "counter") {
      return `🧠 **Thử thách hỏi ngược:**\n\n1. Tại sao Tây Nguyên cũng có đất badan màu mỡ nhưng lại đứng đầu về **cà phê**, còn Đông Nam Bộ lại đứng đầu về **cao su**?\n2. Điều kiện khí hậu cận xích đạo với mùa khô kéo dài 4-5 tháng ở Đông Nam Bộ mang lại thuận lợi gì và đặt ra thách thức lớn nhất nào cho cây công nghiệp?`;
    }
    return `📚 **Phân tích chuyên sâu: Thế mạnh cây công nghiệp Đông Nam Bộ**\n\n**1. Điều kiện tự nhiên:**\n- **Địa hình & đất:** Địa hình bán bình nguyên thoải, dễ quy hoạch vùng chuyên canh quy mô lớn. Diện tích đất badan (Bình Phước, Đồng Nai) và đất xám phù sa cổ (Tây Ninh, Bình Dương) rất rộng.\n- **Khí hậu:** Cận xích đạo gió mùa, nhiệt độ cao quanh năm (trung bình >27°C), ít bão, mùa khô thuận lợi thu hoạch, sơ chế và phơi sấy mủ cao su, cà phê, điều, tiêu.\n- **Thủy lợi:** Hồ Dầu Tiếng (hồ nhân tạo lớn nhất VN trên sông Sài Gòn) và hồ Trị An (sông Đồng Nai) cung cấp nước tưới quý giá trong mùa khô.\n\n**2. Điều kiện kinh tế - xã hội:**\n- Nguồn lao động dồi dào, nhiều kinh nghiệm trồng và chăm sóc cây công nghiệp.\n- Hệ thống cơ sở chế biến phát triển đồng bộ nhất cả nước.\n- Hạ tầng giao thông kết nối liên hoàn (QL13, QL51, QL22, hệ thống cảng biển nước sâu Cái Mép - Thị Vải).\n- Thị trường xuất khẩu lớn, thu hút vốn FDI hàng đầu.`;
  }

  if (q.includes("thủy sản") || (q.includes("đồng bằng sông cửu long") && q.includes("cá"))) {
    return `🗺️ **Phân tích sản lượng thủy sản theo Atlat Địa lí Việt Nam (Trang 20):**\n\n**1. Vùng dẫn đầu:** Đồng bằng sông Cửu Long (chiếm hơn 50% cả nước về cả đánh bắt và nuôi trồng), tiếp theo là Duyên hải Nam Trung Bộ (mạnh về đánh bắt hải sản xa bờ).\n\n**2. Nguyên nhân then chốt:**\n- **Tự nhiên:** Bờ biển dài, có 2 ngư trường trọng điểm lớn (Cà Mau - Kiên Giang, Ninh Thuận - Bình Thuận - Bà Rịa - Vũng Tàu). Vùng biển ấm quanh năm, nhiều bãi tôm, bãi cá. Diện tích mặt nước nuôi trồng trù phú: rừng ngập mặn, bãi triều, cửa sông, kênh rạch chằng chịt.\n- **Kinh tế - xã hội:** Người dân có truyền thống sông nước, tàu thuyền công suất lớn tăng nhanh, mạng lưới nhà máy chế biến đông lạnh xuất khẩu hiện đại (xuất khẩu tôm, cá tra, cá ba sa đứng đầu cả nước).`;
  }

  return `📚 **Trợ lý Địa lí 9 phản hồi:**\n\nĐể trả lời câu hỏi **"${query}"** một cách hoàn hảo theo chuẩn thi học sinh giỏi:\n\n1. **Nguyên tắc "Tự nhiên trước, Nhân văn sau":** Luôn xét đầy đủ 4 yếu tố tự nhiên (Vị trí, Địa hình, Khí hậu, Nguồn nước/Đất) và 4 yếu tố nhân văn (Dân cư - lao động, Cơ sở hạ tầng/chế biến, Thị trường, Đường lối chính sách).\n2. **Khai thác Atlat đối chứng:** Hãy mở trang Atlat chuyên ngành hoặc các vùng kinh tế tương ứng để trích dẫn số liệu và địa danh cụ thể (tên cảng biển, hồ thủy điện, mỏ khoáng sản, khu kinh tế).\n3. **Cấu trúc bài làm:** Mở đoạn nêu khái quát vị thế -> Thân đoạn chia luận điểm rõ ràng -> Kết đoạn rút ra phương hướng phát triển bền vững.`;
}

// Vite middleware setup
async function startServer() {
  try {
    if (process.env.NODE_ENV !== "production") {
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "spa",
      });
      app.use(vite.middlewares);
    } else {
      const distPath = path.join(process.cwd(), "dist");
      app.use(express.static(distPath));
      app.get("*", (req, res) => {
        res.sendFile(path.join(distPath, "index.html"));
      });
    }

    const server = app.listen(PORT, "0.0.0.0", () => {
      console.log(`ĐỊA LÍ 9 Server running on http://localhost:${PORT}`);
    });

    server.on("error", (err: any) => {
      console.error("Server listen error:", err);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
}

startServer();
