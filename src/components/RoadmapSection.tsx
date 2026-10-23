import React from "react";
import { 
  CheckCircle, 
  Compass, 
  Map, 
  BarChart3, 
  Sparkles, 
  GraduationCap, 
  ArrowRight,
  ChevronRight
} from "lucide-react";

interface RoadmapSectionProps {
  onSelectStage: (stageIndex: number) => void;
  activeStage?: number;
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({
  onSelectStage,
  activeStage = 1,
}) => {
  const stages = [
    {
      number: "01",
      code: "🟢 01",
      title: "Củng cố nền tảng",
      tagline: "Tự nhiên → Dân cư → Kinh tế → Các vùng",
      color: "#146B5B",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-300",
      textColor: "text-emerald-800",
      badgeColor: "bg-emerald-600 text-white",
      description: "Nắm vững bản chất quy luật địa lí Việt Nam, hệ thống khái niệm chuẩn mực SGK hiện hành từ lớp 6-9, trọng tâm toàn bộ kiến thức lớp 9.",
      skills: ["Vị trí & lãnh thổ", "Địa hình & khoáng sản", "Khí hậu & thủy văn", "Chuyển dịch 7 vùng kinh tế"],
      status: "completed",
    },
    {
      number: "02",
      code: "🔵 02",
      title: "Thành thạo Atlat",
      tagline: "Đọc ký hiệu → Xác định vị trí → Phân tích → Kết hợp trang",
      color: "#1677B8",
      bgColor: "bg-sky-50",
      borderColor: "border-sky-300",
      textColor: "text-sky-800",
      badgeColor: "bg-sky-600 text-white",
      description: "Biến cuốn Atlat Địa lí Việt Nam thành 'vũ khí đạt điểm 10'. Kỹ thuật khai thác đối chiếu trang tự nhiên với kinh tế xã hội.",
      skills: ["Đọc chú giải trang 3", "Đoạn nhiệt & hướng gió", "Bản đồ phân bố dân cư", "Khai thác trang vùng kinh tế"],
      status: "in-progress",
    },
    {
      number: "03",
      code: "🟡 03",
      title: "Làm chủ biểu đồ & số liệu",
      tagline: "Nhận dạng → Chọn dạng → Vẽ → Nhận xét → Giải thích",
      color: "#D97706",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-300",
      textColor: "text-amber-800",
      badgeColor: "bg-amber-600 text-white",
      description: "Không bao giờ vẽ sai dạng biểu đồ. Nhận diện chuẩn từ khóa: Quy mô, Cơ cấu, Tốc độ tăng trưởng. Viết đoạn nhận xét chuẩn toán học.",
      skills: ["Biểu đồ Cột & Đường", "Biểu đồ Tròn (bán kính R)", "Biểu đồ Miền chuyển dịch", "Công thức tăng trưởng %"],
      status: "upcoming",
    },
    {
      number: "04",
      code: "🟠 04",
      title: "Rèn tư duy chuyên",
      tagline: "So sánh → Chứng minh → Phân tích → Giải thích → Liên hệ",
      color: "#EA580C",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-300",
      textColor: "text-orange-800",
      badgeColor: "bg-orange-600 text-white",
      description: "Phương pháp tư duy logic bóc tách nhân quả của học sinh giỏi: Tự nhiên trước, nhân văn sau; kết hợp số liệu thực chứng.",
      skills: ["Ma trận tiêu chí so sánh", "Cơ chế phơn & nghịch nhiệt", "Tư duy không gian vùng", "Biện luận chính sách mở cửa"],
      status: "upcoming",
    },
    {
      number: "05",
      code: "🔴 05",
      title: "Chinh phục đề chuyên",
      tagline: "Chuyên đề → Tổng hợp → Nâng cao → Thi thử → Phân tích lỗi",
      color: "#DC2626",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-300",
      textColor: "text-rose-800",
      badgeColor: "bg-rose-600 text-white",
      description: "Cọ xát với ngân hàng đề thi học sinh giỏi cấp tỉnh/thành phố và đề tuyển sinh vào lớp 10 chuyên (Ams, Chuyên Sư Phạm, Lê Hồng Phong...).",
      skills: ["Quản lý áp lực thời gian", "Tránh bẫy trắc nghiệm tinh vi", "Kỹ năng trình bày tự luận", "Phân tích nguyên nhân sai"],
      status: "upcoming",
    }
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F5EF] text-[#146B5B] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-3">
            <Compass className="w-4 h-4" />
            <span>Chiến lược học tập đỉnh cao</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-[#16332F] tracking-tight">
            Lộ trình 5 chặng Chinh phục Chuyên Địa
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            Con đường luyện thi bài bản từ nắm chắc kiến thức căn bản đến giải quyết những câu hỏi phân loại hóc búa nhất.
          </p>
        </div>

        {/* Visual Roadmap Journey Trail */}
        <div className="relative mb-8">
          {/* Connecting gradient trail on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-2 -translate-y-1/2 bg-gradient-to-r from-emerald-500 via-sky-500 via-amber-500 via-orange-500 to-rose-600 rounded-full z-0 opacity-40" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 relative z-10">
            {stages.map((stage, index) => {
              const isSelected = activeStage === index + 1;
              return (
                <div
                  key={stage.number}
                  onClick={() => onSelectStage(index + 1)}
                  className={`relative p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between text-left group ${
                    isSelected
                      ? `${stage.bgColor} ${stage.borderColor} shadow-lg scale-102`
                      : "bg-white border-slate-200/80 hover:border-slate-300 hover:shadow-md"
                  }`}
                >
                  {/* Top indicator badge */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-black shadow-2xs ${stage.badgeColor}`}>
                        Chặng {stage.number}
                      </span>
                      {stage.status === "completed" ? (
                        <span className="flex items-center gap-1 text-xs sm:text-sm font-bold text-emerald-600">
                          <CheckCircle className="w-4 h-4" /> Đạt
                        </span>
                      ) : stage.status === "in-progress" ? (
                        <span className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-600">
                          <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse" /> Đang học
                        </span>
                      ) : (
                        <span className="text-xs sm:text-sm font-semibold text-slate-400">
                          Mục tiêu
                        </span>
                      )}
                    </div>

                    <h3 className="font-display font-black text-lg sm:text-xl text-[#16332F] mb-1.5 group-hover:text-[#146B5B] transition-colors">
                      {stage.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm font-bold text-slate-700 mb-2.5 leading-snug">
                      {stage.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {stage.description}
                    </p>
                  </div>

                  {/* Skills bullets */}
                  <div>
                    <div className="pt-3 border-t border-slate-200/70 space-y-1.5">
                      {stage.skills.slice(0, 3).map((skill, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#146B5B]" />
                          <span className="truncate">{skill}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 pt-2.5 flex items-center justify-between text-xs sm:text-sm font-extrabold text-[#146B5B] group-hover:translate-x-1 transition-transform">
                      <span>Vào chặng này</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Milestone summary strip */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#E8F5EF]/90 border border-[#146B5B]/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm sm:text-base text-[#146B5B]">
          <div className="flex items-center gap-3 font-semibold">
            <span className="text-2xl">🎯</span>
            <span className="leading-relaxed">Mỗi chặng được tích hợp đầy đủ: Bài giảng SGK chuẩn, Phòng Atlat, Bài thực hành biểu đồ, Đề thi có chấm điểm tự động.</span>
          </div>
          <button
            onClick={() => onSelectStage(1)}
            className="whitespace-nowrap font-extrabold underline hover:text-[#0f5548] cursor-pointer text-sm sm:text-base"
          >
            Khám phá chi tiết chuyên đề &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};
