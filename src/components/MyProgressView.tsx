import React, { useState, useEffect } from "react";
import { 
  TrendingUp, 
  AlertTriangle, 
  Sparkles, 
  Bell, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  Award,
  BookOpen,
  Map,
  BarChart3,
  BrainCircuit,
  FileText,
  RotateCcw,
  Target,
  Check,
  ChevronRight,
  Zap
} from "lucide-react";

interface CompetencyData {
  key: string;
  label: string;
  score: number; // 0 - 100
  icon: any;
  color: string;
  status: string;
}

interface PersonalizedRoadmap {
  weakestSkill: { key: string; name: string; score: number };
  secondWeakestSkill: { key: string; name: string; score: number };
  strongestSkill: { key: string; name: string; score: number };
  headline: string;
  diagnosticSummary: string;
  recentScore?: number | null;
  sevenDayPlan: {
    day: number;
    title: string;
    action: string;
    targetXp: number;
  }[];
  recommendedTopics: {
    id: string;
    title: string;
    reason: string;
  }[];
  generatedAt: string;
}

interface MyProgressViewProps {
  onStartPersonalizedPath?: () => void;
  xp: number;
  streakDays: number;
}

export const MyProgressView: React.FC<MyProgressViewProps> = ({
  onStartPersonalizedPath,
  xp,
  streakDays,
}) => {
  const [reminderEnabled, setReminderEnabled] = useState<boolean>(true);
  const [reminderTime, setReminderTime] = useState<string>("20:00");
  const [completedPlanDays, setCompletedPlanDays] = useState<number[]>([1]);
  const [activeSubTab, setActiveSubTab] = useState<"overview" | "roadmap" | "diagnostic">("overview");

  // State for competencies
  const [skillScores, setSkillScores] = useState<Record<string, number>>({
    knowledge: 78,
    atlat: 65,
    chart: 82,
    statistics: 70,
    thinking: 55,
    exam: 60,
  });

  const [roadmap, setRoadmap] = useState<PersonalizedRoadmap | null>(null);
  const [loadingRoadmap, setLoadingRoadmap] = useState<boolean>(false);

  // Diagnostic mini-test state
  const [diagnosticAnswers, setDiagnosticAnswers] = useState<Record<number, number>>({});
  const [diagnosticSubmitted, setDiagnosticSubmitted] = useState<boolean>(false);

  const diagnosticQuestions = [
    {
      id: 1,
      skillKey: "atlat",
      skillName: "Kỹ năng Atlat (Trang 9)",
      question: "Để giải thích vì sao mùa bão ở miền Trung thường muộn hơn miền Bắc (chậm dần từ Bắc vào Nam), căn cứ chính xác nhất là:",
      options: [
        "Sự dịch chuyển của dải hội tụ nhiệt đới và hoạt động của áp thấp nhiệt đới lùi dần về phía Nam.",
        "Hướng bờ biển miền Trung đón gió mùa Đông Bắc vuông góc.",
        "Nhiệt độ nước biển miền Nam luôn cao hơn miền Bắc quanh năm.",
        "Miền Trung có địa hình đón gió hẹp ngang."
      ],
      correct: 0,
      weight: 15,
    },
    {
      id: 2,
      skillKey: "chart",
      skillName: "Kỹ năng Biểu đồ & Số liệu",
      question: "Bảng số liệu có 5 mốc năm (2010 - 2023) thể hiện tốc độ tăng trưởng GDP của 3 ngành kinh tế (năm gốc 2010 = 100%). Biểu đồ chuẩn nhất là:",
      options: [
        "Biểu đồ Tròn có 3 bán kính khác nhau",
        "Biểu đồ Miền thể hiện cơ cấu",
        "Biểu đồ Đường (đồ thị) xuất phát từ mốc 100%",
        "Biểu đồ Cột chồng thể hiện tổng thể"
      ],
      correct: 2,
      weight: 15,
    },
    {
      id: 3,
      skillKey: "thinking",
      skillName: "Tư duy Bản chất & Giải thích chuyên",
      question: "Vì sao trong cơ cấu giá trị sản xuất nông nghiệp nước ta, tỉ trọng ngành trồng trọt giảm nhưng giá trị tuyệt đối vẫn tăng liên tục?",
      options: [
        "Do năng suất cây trồng tăng và chăn nuôi có tốc độ tăng trưởng nhanh hơn trồng trọt.",
        "Do diện tích đất canh tác nông nghiệp ngày càng mở rộng.",
        "Do nước ta dừng nhập khẩu nông sản từ nước ngoài.",
        "Do chỉ tập trung trồng cây lương thực xuất khẩu."
      ],
      correct: 0,
      weight: 20,
    },
    {
      id: 4,
      skillKey: "knowledge",
      skillName: "Địa lí Tự nhiên & Vùng kinh tế",
      question: "Thế mạnh nổi bật nhất để phát triển cây công nghiệp lâu năm của vùng Tây Nguyên so với Đông Nam Bộ là:",
      options: [
        "Khí hậu cận xích đạo nóng quanh năm không có mùa đông lạnh.",
        "Các cao nguyên xếp tầng với mặt bằng bazan rộng lớn phân hóa theo độ cao.",
        "Hệ thống sông ngòi có trữ năng thủy điện dồi dào.",
        "Mạng lưới giao thông và công nghiệp chế biến hiện đại nhất."
      ],
      correct: 1,
      weight: 15,
    }
  ];

  // Fetch initial progress & roadmap
  useEffect(() => {
    fetch("/api/user/progress")
      .then((res) => res.json())
      .then((data) => {
        if (data.radarSkills) {
          setSkillScores((prev) => ({
            ...prev,
            atlat: data.radarSkills.atlat || prev.atlat,
            chart: data.radarSkills.chart || prev.chart,
            thinking: data.radarSkills.reasoning || prev.thinking,
            knowledge: data.radarSkills.physicalGeo || prev.knowledge,
            statistics: data.radarSkills.socioEconomic || prev.statistics,
            exam: data.radarSkills.regional || prev.exam,
          }));
        }
      })
      .catch((e) => console.log("Progress fetch fallback", e));

    fetchRoadmap();
  }, []);

  const fetchRoadmap = async () => {
    setLoadingRoadmap(true);
    try {
      const res = await fetch("/api/user/personalized-roadmap", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ radarSkills: skillScores }),
      });
      const data = await res.json();
      setRoadmap(data);
    } catch (err) {
      console.log("Failed to load roadmap", err);
    } finally {
      setLoadingRoadmap(false);
    }
  };

  const competencies: CompetencyData[] = [
    { key: "knowledge", label: "Kiến thức", score: skillScores.knowledge, icon: BookOpen, color: "#146B5B", status: skillScores.knowledge >= 80 ? "Xuất sắc" : skillScores.knowledge >= 70 ? "Tốt" : "Khá" },
    { key: "atlat", label: "Kỹ năng Atlat", score: skillScores.atlat, icon: Map, color: "#1677B8", status: skillScores.atlat >= 80 ? "Xuất sắc" : skillScores.atlat >= 65 ? "Khá" : "Cần rèn thêm" },
    { key: "chart", label: "Bậc thầy Biểu đồ", score: skillScores.chart, icon: BarChart3, color: "#10B981", status: skillScores.chart >= 80 ? "Xuất sắc" : "Khá" },
    { key: "statistics", label: "Xử lý Số liệu", score: skillScores.statistics, icon: FileText, color: "#F59E0B", status: skillScores.statistics >= 75 ? "Tốt" : "Khá" },
    { key: "thinking", label: "Tư duy chuyên", score: skillScores.thinking, icon: BrainCircuit, color: "#EF4444", status: skillScores.thinking >= 70 ? "Khá" : "Cần cải thiện" },
    { key: "exam", label: "Luyện đề", score: skillScores.exam, icon: Award, color: "#8B5CF6", status: skillScores.exam >= 75 ? "Tốt" : "Trung bình khá" },
  ];

  // Calculate radar polygon points (6 vertices)
  const size = 300;
  const center = size / 2;
  const radius = 100;
  const total = competencies.length;

  const getCoordinates = (index: number, valueRatio: number) => {
    const angle = (Math.PI * 2 / total) * index - Math.PI / 2;
    const r = radius * Math.min(Math.max(valueRatio, 0.1), 1.0);
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  };

  const polygonPoints = competencies
    .map((c, i) => {
      const { x, y } = getCoordinates(i, c.score / 100);
      return `${x},${y}`;
    })
    .join(" ");

  const gridLevels = [0.2, 0.4, 0.6, 0.8, 1.0];

  const handleToggleDayPlan = (day: number) => {
    setCompletedPlanDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleDiagnosticSubmit = () => {
    let newScores = { ...skillScores };
    let correctCount = 0;

    diagnosticQuestions.forEach((q) => {
      const isCorrect = diagnosticAnswers[q.id] === q.correct;
      if (isCorrect) {
        correctCount += 1;
        newScores[q.skillKey] = Math.min(100, (newScores[q.skillKey] || 60) + 10);
      } else {
        newScores[q.skillKey] = Math.max(35, (newScores[q.skillKey] || 60) - 5);
      }
    });

    setSkillScores(newScores);
    setDiagnosticSubmitted(true);

    // Sync to backend and recalculate roadmap
    fetch("/api/user/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        radarSkills: {
          atlat: newScores.atlat,
          chart: newScores.chart,
          reasoning: newScores.thinking,
          physicalGeo: newScores.knowledge,
          socioEconomic: newScores.statistics,
          regional: newScores.exam,
        }
      })
    }).then(() => {
      fetch("/api/user/personalized-roadmap", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ radarSkills: newScores, recentExamScore: (correctCount / 4) * 10 }),
      })
        .then((res) => res.json())
        .then((data) => setRoadmap(data));
    });
  };

  return (
    <section className="py-10 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5EF] text-[#146B5B] text-xs font-extrabold uppercase tracking-wider mb-2">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Phân tích năng lực chuyên sâu</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#16332F] tracking-tight">
              Lộ Trình Cá Nhân Hóa & Báo Cáo Tiến Độ
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Hệ thống radar đánh giá 6 trụ cột thi chuyên, tự động chẩn đoán điểm khuyết và xây dựng lộ trình tăng tốc 7 ngày chuẩn thi HSG.
            </p>
          </div>

          {/* Navigation Sub-tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-slate-200 shadow-2xs self-start md:self-auto">
            <button
              onClick={() => setActiveSubTab("overview")}
              className={`px-3.5 py-2 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                activeSubTab === "overview"
                  ? "bg-[#146B5B] text-white shadow-2xs"
                  : "text-slate-600 hover:text-[#16332F]"
              }`}
            >
              Tổng quan Radar
            </button>
            <button
              onClick={() => setActiveSubTab("roadmap")}
              className={`px-3.5 py-2 rounded-lg text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === "roadmap"
                  ? "bg-[#146B5B] text-white shadow-2xs"
                  : "text-slate-600 hover:text-[#16332F]"
              }`}
            >
              <Target className="w-3.5 h-3.5" />
              <span>Lộ trình 7 ngày</span>
            </button>
            <button
              onClick={() => setActiveSubTab("diagnostic")}
              className={`px-3.5 py-2 rounded-lg text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === "diagnostic"
                  ? "bg-[#1677B8] text-white shadow-2xs"
                  : "text-slate-600 hover:text-[#16332F]"
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Chẩn đoán nhanh</span>
            </button>
          </div>
        </div>

        {/* SUBTAB 1: OVERVIEW */}
        {activeSubTab === "overview" && (
          <>
            {/* Top Alert: Weak Skill Warning & Personalized Recommendation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {/* Weakness Alert Card */}
              <div className="p-5 rounded-2xl bg-rose-50 border-2 border-rose-200 text-left space-y-2">
                <div className="flex items-center gap-2 text-rose-800 font-extrabold text-sm">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  <span>Kỹ năng cần cải thiện ưu tiên số 1:</span>
                </div>
                <p className="text-xs sm:text-sm text-rose-950 font-bold leading-relaxed">
                  ⚠️ “{roadmap ? roadmap.weakestSkill.name : 'Tư duy giải thích nguyên nhân chuyên sâu'}” (Điểm hiện tại: {roadmap ? roadmap.weakestSkill.score : skillScores.thinking}%)
                </p>
                <p className="text-xs text-rose-900/80 leading-relaxed">
                  {roadmap ? roadmap.diagnosticSummary : 'Học sinh thường mất điểm khi trả lời thiếu một trong hai vế: Nhân tố tự nhiên và Nhân tố kinh tế - xã hội.'}
                </p>
              </div>

              {/* Personalized Path Recommendation */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#146B5B] to-[#1677B8] text-white text-left space-y-3 shadow-sm">
                <div className="flex items-center gap-2 text-[#FFF3B0] font-extrabold text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>🎯 Lộ trình cá nhân hóa đề xuất riêng cho bạn:</span>
                </div>
                <div className="p-3 bg-white/15 backdrop-blur-xs rounded-xl border border-white/20 text-xs sm:text-sm font-bold">
                  “{roadmap?.headline || 'Lộ trình tăng tốc 7 ngày: Đột phá Tư duy giải thích nguyên nhân'}”
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-emerald-100 font-medium">
                    Mục tiêu: Đạt điểm tối đa câu hỏi tự luận
                  </span>
                  <button
                    onClick={() => setActiveSubTab("roadmap")}
                    className="px-3.5 py-1.5 rounded-lg bg-white text-[#146B5B] font-bold text-xs hover:bg-[#E8F5EF] active:scale-95 transition-all cursor-pointer flex items-center gap-1"
                  >
                    <span>Xem kế hoạch 7 ngày</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Radar Chart & Competency Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
              {/* Radar Chart Graphic (5 cols) */}
              <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col items-center justify-center">
                <div className="text-center mb-2">
                  <h4 className="font-black text-base text-[#16332F]">
                    Biểu đồ Radar Năng Lực 6 Chiều
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Thang đo chuẩn hóa kỳ thi HSG cấp Tỉnh & Chuyên cấp 2
                  </p>
                </div>

                {/* Radar SVG Visual */}
                <div className="relative w-[300px] h-[300px]">
                  <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full">
                    {/* Background Concentric Polygons */}
                    {gridLevels.map((lvl, idx) => {
                      const pts = competencies
                        .map((_, i) => {
                          const { x, y } = getCoordinates(i, lvl);
                          return `${x},${y}`;
                        })
                        .join(" ");
                      return (
                        <polygon
                          key={idx}
                          points={pts}
                          fill="none"
                          stroke="#E2E8F0"
                          strokeWidth="1"
                          strokeDasharray={idx === gridLevels.length - 1 ? "none" : "2 2"}
                        />
                      );
                    })}

                    {/* Radial Axis Spokes */}
                    {competencies.map((_, i) => {
                      const { x, y } = getCoordinates(i, 1.0);
                      return (
                        <line
                          key={i}
                          x1={center}
                          y1={center}
                          x2={x}
                          y2={y}
                          stroke="#CBD5E1"
                          strokeWidth="0.8"
                        />
                      );
                    })}

                    {/* Actual Student Polygon */}
                    <polygon
                      points={polygonPoints}
                      fill="#146B5B"
                      fillOpacity="0.25"
                      stroke="#146B5B"
                      strokeWidth="2.5"
                    />

                    {/* Vertices Points */}
                    {competencies.map((c, i) => {
                      const { x, y } = getCoordinates(i, c.score / 100);
                      return (
                        <circle
                          key={i}
                          cx={x}
                          cy={y}
                          r="4"
                          fill="#1677B8"
                          stroke="#FFFFFF"
                          strokeWidth="1.5"
                        />
                      );
                    })}

                    {/* Axis Labels */}
                    {competencies.map((c, i) => {
                      const { x, y } = getCoordinates(i, 1.25);
                      return (
                        <text
                          key={i}
                          x={x}
                          y={y}
                          fontSize="9.5"
                          fontWeight="bold"
                          fill="#16332F"
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          {c.label} ({c.score}%)
                        </text>
                      );
                    })}
                  </svg>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-500 mt-2">
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#146B5B]" /> Năng lực hiện tại
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-0.5 bg-slate-300" /> Chuẩn chuyên (100%)
                  </span>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 w-full text-center">
                  <button
                    onClick={() => setActiveSubTab("diagnostic")}
                    className="text-xs font-bold text-[#1677B8] hover:underline flex items-center justify-center gap-1 w-full cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Làm bài chẩn đoán để cập nhật lại Radar</span>
                  </button>
                </div>
              </div>

              {/* Competency Breakdown Cards (7 cols) */}
              <div className="lg:col-span-7 space-y-3 text-left">
                <h4 className="font-extrabold text-sm text-[#16332F] uppercase tracking-wider mb-2">
                  Chi tiết từng trụ cột năng lực:
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {competencies.map((comp) => {
                    const Icon = comp.icon;
                    return (
                      <div
                        key={comp.key}
                        className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div
                              className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs"
                              style={{ backgroundColor: comp.color }}
                            >
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <span className="font-extrabold text-xs text-[#16332F]">
                              {comp.label}
                            </span>
                          </div>
                          <span className="text-xs font-mono font-black text-slate-700">
                            {comp.score}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{ width: `${comp.score}%`, backgroundColor: comp.color }}
                          />
                        </div>

                        <div className="flex items-center justify-between text-[11px] text-slate-500">
                          <span>Đánh giá: <strong>{comp.status}</strong></span>
                          <button
                            onClick={onStartPersonalizedPath}
                            className="text-[#1677B8] font-semibold hover:underline cursor-pointer"
                          >
                            Luyện thêm &rarr;
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        )}

        {/* SUBTAB 2: PERSONALIZED 7-DAY ROADMAP */}
        {activeSubTab === "roadmap" && (
          <div className="space-y-6 text-left">
            {/* Header banner */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-[#146B5B] font-extrabold text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Kế hoạch hành động cá nhân hóa</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#16332F]">
                {roadmap?.headline || "Lộ trình tăng tốc 7 ngày bồi dưỡng học sinh giỏi"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                {roadmap?.diagnosticSummary || "Dựa trên điểm số radar, lộ trình này tập trung bù đắp các lỗi sai thường gặp nhất trong các kỳ thi học sinh giỏi cấp tỉnh và tuyển sinh lớp 10 chuyên."}
              </p>

              {/* Progress counter */}
              <div className="pt-2 flex items-center gap-4 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span>Đã hoàn thành: {completedPlanDays.length}/7 ngày</span>
                </div>
                <div className="flex items-center gap-1.5 text-amber-600">
                  <Award className="w-4 h-4" />
                  <span>Tổng điểm tích lũy: +{completedPlanDays.length * 60} XP</span>
                </div>
              </div>
            </div>

            {/* 7 Days Timeline */}
            <div className="space-y-3">
              {(roadmap?.sevenDayPlan || []).map((step) => {
                const isCompleted = completedPlanDays.includes(step.day);
                return (
                  <div
                    key={step.day}
                    className={`p-4 rounded-xl border transition-all flex items-start sm:items-center justify-between gap-4 ${
                      isCompleted
                        ? "bg-emerald-50/50 border-emerald-300"
                        : "bg-white border-slate-200 hover:border-[#1677B8]"
                    }`}
                  >
                    <div className="flex items-start sm:items-center gap-3.5">
                      <button
                        onClick={() => handleToggleDayPlan(step.day)}
                        className={`w-7 h-7 rounded-lg shrink-0 flex items-center justify-center font-bold text-xs transition-all cursor-pointer ${
                          isCompleted
                            ? "bg-emerald-600 text-white"
                            : "border-2 border-slate-300 text-slate-400 hover:border-[#146B5B]"
                        }`}
                      >
                        {isCompleted ? <Check className="w-4 h-4" /> : step.day}
                      </button>
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className={`font-black text-xs sm:text-sm ${isCompleted ? "text-emerald-950 line-through opacity-70" : "text-[#16332F]"}`}>
                            {step.title}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-amber-50 text-amber-700 font-bold">
                            +{step.targetXp} XP
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-snug">
                          {step.action}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={onStartPersonalizedPath}
                      className="shrink-0 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#E8F5EF] text-[#146B5B] text-xs font-bold transition-all cursor-pointer flex items-center gap-1"
                    >
                      <span>Học bài</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Recommended topics for this student */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h4 className="font-extrabold text-sm text-[#16332F] uppercase tracking-wider">
                Chuyên đề trọng tâm đề xuất bồi dưỡng ngay:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(roadmap?.recommendedTopics || []).map((t, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="text-[10px] font-bold text-[#146B5B] uppercase tracking-wider block">
                      Ưu tiên {idx + 1}
                    </span>
                    <h5 className="font-extrabold text-xs sm:text-sm text-[#16332F]">
                      {t.title}
                    </h5>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      {t.reason}
                    </p>
                    <button
                      onClick={onStartPersonalizedPath}
                      className="text-xs font-bold text-[#1677B8] pt-1 inline-flex items-center gap-1 hover:underline cursor-pointer"
                    >
                      <span>Mở chuyên đề</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 3: QUICK DIAGNOSTIC TEST */}
        {activeSubTab === "diagnostic" && (
          <div className="max-w-3xl mx-auto space-y-6 text-left">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-sky-50 text-[#1677B8] text-xs font-bold">
                <Zap className="w-3.5 h-3.5" />
                <span>Chẩn đoán nhanh năng lực địa lí (4 câu hỏi)</span>
              </div>
              <h3 className="text-xl font-black text-[#16332F]">
                Đánh giá chẩn đoán & Tự động hiệu chỉnh Radar
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hệ thống sẽ dựa trên các câu trả lời này để định vị chính xác kỹ năng bạn đang mạnh nhất và yếu nhất, sau đó thiết lập lộ trình luyện tập phù hợp.
              </p>
            </div>

            {/* Questions list */}
            <div className="space-y-4">
              {diagnosticQuestions.map((q, idx) => (
                <div key={q.id} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-[#146B5B] bg-[#E8F5EF] px-2.5 py-1 rounded-md">
                      Câu {idx + 1}: {q.skillName}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      Trọng số: {q.weight}%
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed">
                    {q.question}
                  </p>

                  <div className="space-y-2 pt-1">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = diagnosticAnswers[q.id] === optIdx;
                      let btnStyle = "bg-white border-slate-200 text-slate-700 hover:border-[#1677B8] hover:bg-sky-50/30";

                      if (diagnosticSubmitted) {
                        if (optIdx === q.correct) {
                          btnStyle = "bg-emerald-50 border-emerald-500 text-emerald-900 font-bold";
                        } else if (isSelected) {
                          btnStyle = "bg-rose-50 border-rose-400 text-rose-900";
                        } else {
                          btnStyle = "bg-white border-slate-200 text-slate-400 opacity-60";
                        }
                      } else if (isSelected) {
                        btnStyle = "bg-[#E8F5EF] border-[#146B5B] text-[#146B5B] font-bold";
                      }

                      return (
                        <button
                          key={optIdx}
                          disabled={diagnosticSubmitted}
                          onClick={() => setDiagnosticAnswers((prev) => ({ ...prev, [q.id]: optIdx }))}
                          className={`w-full p-3 rounded-xl border text-xs text-left transition-all cursor-pointer flex items-start gap-2.5 ${btnStyle}`}
                        >
                          <span className="font-mono font-bold shrink-0">
                            {String.fromCharCode(65 + optIdx)}.
                          </span>
                          <span className="leading-relaxed">{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Submit or Reset actions */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => {
                  setDiagnosticAnswers({});
                  setDiagnosticSubmitted(false);
                }}
                className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-800 cursor-pointer"
              >
                Làm lại từ đầu
              </button>

              {!diagnosticSubmitted ? (
                <button
                  onClick={handleDiagnosticSubmit}
                  disabled={Object.keys(diagnosticAnswers).length < diagnosticQuestions.length}
                  className="px-6 py-2.5 rounded-xl bg-[#146B5B] text-white font-extrabold text-xs shadow-md hover:bg-[#115548] active:scale-95 transition-all disabled:opacity-50 cursor-pointer"
                >
                  Nộp bài & Hiệu chỉnh Radar &rarr;
                </button>
              ) : (
                <button
                  onClick={() => setActiveSubTab("overview")}
                  className="px-6 py-2.5 rounded-xl bg-[#1677B8] text-white font-extrabold text-xs shadow-md hover:bg-[#125d91] active:scale-95 transition-all cursor-pointer"
                >
                  Xem kết quả Radar mới &rarr;
                </button>
              )}
            </div>
          </div>
        )}

        {/* Daily Study Reminder & Notification Settings */}
        <div className="mt-8 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-[#16332F]">
                Nhắc nhở học tập mỗi ngày
              </h4>
              <p className="text-xs text-slate-500">
                Duy trì chuỗi streak {streakDays} ngày để não bộ ghi nhớ kiến thức địa lí bền vững.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="time"
              value={reminderTime}
              onChange={(e) => setReminderTime(e.target.value)}
              className="p-2 border border-slate-200 rounded-lg text-xs font-bold text-slate-700 bg-slate-50"
            />
            <button
              onClick={() => setReminderEnabled(!reminderEnabled)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                reminderEnabled
                  ? "bg-[#146B5B] text-white"
                  : "bg-slate-200 text-slate-600"
              }`}
            >
              {reminderEnabled ? "Đã bật nhắc nhở ✓" : "Bật nhắc nhở"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
