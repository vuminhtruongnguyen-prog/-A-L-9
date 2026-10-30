import React, { useState } from "react";
import { 
  Compass, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Search, 
  BarChart3, 
  FileText, 
  BrainCircuit, 
  ArrowRight,
  ShieldCheck,
  Flame,
  Award
} from "lucide-react";

interface HeroSectionProps {
  onStartLearning: () => void;
  onTakeExam: () => void;
  onOpenAtlat: () => void;
  onOpenChart: () => void;
  onOpenThinking: () => void;
  streakDays: number;
  xp: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartLearning,
  onTakeExam,
  onOpenAtlat,
  onOpenChart,
  onOpenThinking,
  streakDays,
  xp,
}) => {
  const [selectedPin, setSelectedPin] = useState<{
    name: string;
    region: string;
    feature: string;
    tip: string;
  } | null>({
    name: "Đồng bằng sông Hồng (Hà Nội)",
    region: "Trung tâm kinh tế - văn hóa",
    feature: "Mật độ dân số cao nhất nước (>1.000 người/km²)",
    tip: "Mẹo thi chuyên: Chú ý vai trò hệ thống đê sông Hồng và cơ cấu chuyển dịch ngành công nghiệp - dịch vụ."
  });

  const mapPins = [
    {
      id: "hn",
      name: "Đồng bằng sông Hồng (Hà Nội)",
      region: "Khu vực kinh tế trọng điểm Bắc Bộ",
      x: 52,
      y: 18,
      feature: "Mật độ dân số cao nhất nước (>1000 người/km²), thâm canh lúa nước lâu đời",
      tip: "Mẹo chuyên: Nhớ phân tích thế mạnh vị trí đầu mối và nguồn lao động có tay nghề cao dồi dào."
    },
    {
      id: "tb",
      name: "Tây Bắc - Dãy Hoàng Liên Sơn",
      region: "Vùng núi cao hùng vĩ nhất nước",
      x: 32,
      y: 12,
      feature: "Đỉnh Fansipan 3.143m, bậc thang thủy điện khổng lồ Sông Đà (Sơn La, Hòa Bình, Lai Châu)",
      tip: "Mẹo chuyên: Trữ năng thủy điện phụ thuộc vào lưu lượng nước Q và độ dốc lòng sông H."
    },
    {
      id: "qn",
      name: "Vùng than Quảng Ninh",
      region: "Vùng than đá số 1 Việt Nam",
      x: 65,
      y: 15,
      feature: "Chiếm hơn 90% trữ lượng than đá cả nước; cảng biển nước sâu Cái Lân; du lịch vịnh Hạ Long",
      tip: "Mẹo chuyên: Phân tích gắn kết khai thác than với nhiệt điện Uông Bí, Cẩm Phả và xuất khẩu."
    },
    {
      id: "hue",
      name: "Bắc Trung Bộ (Huế & Đà Nẵng)",
      region: "Duyên hải miền Trung",
      x: 58,
      y: 43,
      feature: "Dãy Bạch Mã chắn gió mùa Đông Bắc; hiện tượng gió phơn Tây Nam khô nóng vào đầu hạ",
      tip: "Mẹo chuyên: Mùa mưa miền Trung lệch hẳn về thu - đông (tháng 9 - 12) do bão và gió qua biển."
    },
    {
      id: "tn",
      name: "Tây Nguyên (Đắk Lắk & Lâm Đồng)",
      region: "Vùng đất đỏ badan xếp tầng",
      x: 60,
      y: 62,
      feature: "Vựa cà phê số 1 thế giới; bô-xit trữ lượng lớn; thủy điện sông Xê Xan, Srêpôk",
      tip: "Mẹo chuyên: Mùa khô sâu sắc thiếu nước là thách thức số 1 của cây cà phê và hồ tiêu."
    },
    {
      id: "dnb",
      name: "Đông Nam Bộ (TP. Hồ Chí Minh)",
      region: "Đầu tàu kinh tế của cả nước",
      x: 53,
      y: 78,
      feature: "Đóng góp >30% GDP cả nước; vựa cao su lớn nhất; cụm cảng nước sâu Cái Mép - Thị Vải",
      tip: "Mẹo chuyên: Yếu tố công nghiệp chế biến và cảng biển xuất khẩu quyết định hiệu quả kinh tế."
    },
    {
      id: "dbscl",
      name: "Đồng bằng sông Cửu Long (Cần Thơ)",
      region: "Vựa lúa & thủy sản xuất khẩu số 1",
      x: 44,
      y: 88,
      feature: "Sản xuất >50% lúa và >70% thủy sản nuôi trồng cả nước; mạng lưới sông kênh rạch trù phú",
      tip: "Mẹo chuyên: Tư duy 'thuận thiên' thích ứng với xâm nhập mặn và lũ sông Mê Kông."
    },
    {
      id: "hs",
      name: "Quần đảo Hoàng Sa (Đà Nẵng)",
      region: "Chủ quyền biển đảo thiêng liêng",
      x: 82,
      y: 40,
      feature: "Vị trí địa chính trị chiến lược trên tuyến hàng hải quốc tế; ngư trường đánh bắt xa bờ",
      tip: "Mẹo chuyên: Gắn kết phát triển kinh tế biển tổng hợp với giữ vững chủ quyền an ninh quốc gia."
    },
    {
      id: "ts",
      name: "Quần đảo Trường Sa (Khánh Hòa)",
      region: "Tiền đồn bảo vệ Tổ quốc",
      x: 85,
      y: 75,
      feature: "Vùng đặc quyền kinh tế 200 hải lý, giàu tiềm năng hải sản và khoáng sản dầu khí thềm lục địa",
      tip: "Mẹo chuyên: Khái niệm nội thủy, lãnh hải 12 hải lý và thềm lục địa theo luật biển quốc tế."
    }
  ];

  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pb-16 bg-gradient-to-b from-[#E8F5EF]/70 via-white to-white">
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#146B5B]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-20 w-80 h-80 rounded-full bg-[#1677B8]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Slogan pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#146B5B]/30 shadow-xs mb-6 text-sm sm:text-base font-bold text-[#146B5B]">
          <span className="flex h-2.5 w-2.5 rounded-full bg-[#146B5B] animate-pulse" />
          <span className="tracking-wide font-display italic">
            “Nắm chắc kiến thức – Hiểu sâu bản đồ – Tư duy địa lí – Chinh phục trường chuyên!”
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-[#16332F] tracking-tight leading-[1.12]">
              🗺️ Cùng bạn chinh phục{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#146B5B] to-[#1677B8]">
                Địa lí lớp 9
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#16332F]/85 leading-relaxed max-w-xl font-normal">
              Học đúng trọng tâm – Luyện đúng kỹ năng – Tư duy như một học sinh giỏi Địa.
              Tự tin bước vào phòng thi học sinh giỏi các cấp và kì thi tuyển sinh vào trường THPT Chuyên.
            </p>

            {/* Two Main CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-cta-start"
                onClick={onStartLearning}
                className="px-7 py-4 rounded-2xl bg-[#146B5B] text-white font-extrabold text-base sm:text-lg shadow-md shadow-[#146B5B]/20 hover:bg-[#0f5548] active:scale-95 transition-all flex items-center gap-2.5 group cursor-pointer"
              >
                <span>🚀 Bắt đầu học</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                id="hero-cta-exam"
                onClick={onTakeExam}
                className="px-7 py-4 rounded-2xl bg-white border-2 border-[#1677B8] text-[#1677B8] font-extrabold text-base sm:text-lg hover:bg-[#1677B8]/5 active:scale-95 transition-all flex items-center gap-2.5 cursor-pointer shadow-xs"
              >
                <span>🎮 Trò chơi ôn tập</span>
              </button>
            </div>

            {/* Feature quick links */}
            <div className="pt-4 grid grid-cols-3 gap-3 max-w-lg">
              <button 
                onClick={onOpenAtlat}
                className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/90 hover:border-[#146B5B] hover:shadow-sm transition-all text-left group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl bg-[#E8F5EF] text-[#146B5B] flex items-center justify-center font-bold text-base mb-2 group-hover:scale-105 transition-transform">
                  🔍
                </div>
                <div className="font-display font-bold text-sm sm:text-base text-[#16332F]">Phòng Atlat</div>
                <div className="text-xs text-slate-500 font-medium">Tra cứu & giải bài</div>
              </button>

              <button 
                onClick={onOpenChart}
                className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/90 hover:border-[#1677B8] hover:shadow-sm transition-all text-left group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl bg-sky-100 text-[#1677B8] flex items-center justify-center font-bold text-base mb-2 group-hover:scale-105 transition-transform">
                  📊
                </div>
                <div className="font-display font-bold text-sm sm:text-base text-[#16332F]">Bậc thầy biểu đồ</div>
                <div className="text-xs text-slate-500 font-medium">Chọn dạng chuẩn</div>
              </button>

              <button 
                onClick={onOpenThinking}
                className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/90 hover:border-amber-500 hover:shadow-sm transition-all text-left group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl bg-[#FFF3B0]/80 text-amber-900 flex items-center justify-center font-bold text-base mb-2 group-hover:scale-105 transition-transform">
                  🧠
                </div>
                <div className="font-display font-bold text-sm sm:text-base text-[#16332F]">Tư duy chuyên</div>
                <div className="text-xs text-slate-500 font-medium">So sánh & giải thích</div>
              </button>
            </div>

            {/* Social proof & student stats */}
            <div className="pt-3 flex items-center gap-6 text-sm text-[#16332F]/80 border-t border-slate-200/70">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-500" />
                <span><strong>{streakDays} ngày</strong> streak liên tiếp</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#146B5B]" />
                <span><strong>{xp.toLocaleString()} XP</strong> kinh nghiệm</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1677B8]" />
                <span>Bám sát đề chuyên THPT toàn quốc</span>
              </div>
            </div>
          </div>

          {/* Right Column: Stylized Interactive Vietnam Map & Digital Dashboard */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden p-5 relative">
              {/* Dashboard header bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs font-bold text-slate-700 ml-2">
                    Bản đồ Địa lí Tương tác & Trạm Phân tích Không gian
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-[#146B5B] bg-[#E8F5EF] px-2 py-0.5 rounded-md">
                  Atlat Kỹ thuật số
                </span>
              </div>

              {/* Map & Inspector container */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                {/* Stylized Vietnam SVG Map */}
                <div className="sm:col-span-7 relative h-[380px] bg-gradient-to-br from-sky-50/60 via-[#E8F5EF]/40 to-slate-50 rounded-xl border border-slate-100 flex items-center justify-center p-2">
                  {/* Decorative map elements */}
                  <div className="absolute top-2 left-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Việt Nam • 8°34'B - 23°23'B
                  </div>
                  <div className="absolute bottom-2 right-2 text-[10px] font-medium text-sky-600/80">
                    Biển Đông (3.260 km bờ biển)
                  </div>

                  {/* Stylized S-curve Vietnam Outline SVG */}
                  <svg 
                    viewBox="0 0 100 100" 
                    className="w-full h-full max-h-[350px] drop-shadow-md select-none"
                  >
                    {/* Ocean water subtle contour */}
                    <path
                      d="M 10 10 Q 50 5 90 20 T 85 90 Q 50 95 10 90 Z"
                      fill="none"
                      stroke="#1677B8"
                      strokeWidth="0.5"
                      strokeDasharray="2 2"
                      opacity="0.2"
                    />

                    {/* S-shaped Vietnam landmass path */}
                    <path
                      d="M 40 8 
                         Q 55 10 65 14 
                         Q 68 18 60 22 
                         Q 45 25 48 35 
                         Q 55 42 62 48 
                         Q 65 58 60 68 
                         Q 52 75 48 82 
                         Q 40 90 35 93 
                         Q 30 90 35 84 
                         Q 42 78 45 70 
                         Q 48 58 40 45 
                         Q 32 35 30 20 
                         Q 30 12 40 8 Z"
                      fill="#146B5B"
                      fillOpacity="0.15"
                      stroke="#146B5B"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />

                    {/* Mountain ridge indications (Hoàng Liên Sơn & Trường Sơn) */}
                    <path
                      d="M 32 14 L 38 20 L 45 32 L 54 44 L 58 60 L 52 72"
                      fill="none"
                      stroke="#146B5B"
                      strokeWidth="1.2"
                      strokeDasharray="1.5 1.5"
                      opacity="0.6"
                    />

                    {/* Red River & Mekong Delta Rivers */}
                    <path
                      d="M 36 12 Q 44 16 52 20"
                      fill="none"
                      stroke="#1677B8"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M 40 78 Q 44 85 36 90 M 43 82 Q 48 88 40 92"
                      fill="none"
                      stroke="#1677B8"
                      strokeWidth="1.2"
                    />

                    {/* Paracel & Spratly Islands (Hoàng Sa & Trường Sa) */}
                    <g opacity="0.8">
                      {/* Hoàng Sa */}
                      <circle cx="82" cy="40" r="1.6" fill="#1677B8" />
                      <circle cx="80" cy="38" r="1.1" fill="#1677B8" />
                      <circle cx="84" cy="42" r="1.1" fill="#1677B8" />
                      <text x="86" y="41" fontSize="2.8" fill="#1677B8" fontWeight="bold">Hoàng Sa</text>

                      {/* Trường Sa */}
                      <circle cx="84" cy="74" r="1.6" fill="#1677B8" />
                      <circle cx="82" cy="76" r="1.1" fill="#1677B8" />
                      <circle cx="86" cy="78" r="1.1" fill="#1677B8" />
                      <text x="70" y="82" fontSize="2.8" fill="#1677B8" fontWeight="bold">Trường Sa</text>
                    </g>

                    {/* Interactive clickable pins */}
                    {mapPins.map((pin) => {
                      const isSelected = selectedPin?.name === pin.name;
                      return (
                        <g 
                          key={pin.id} 
                          className="cursor-pointer group"
                          onClick={() => setSelectedPin(pin)}
                        >
                          {isSelected && (
                            <circle
                              cx={pin.x}
                              cy={pin.y}
                              r="5"
                              fill="#146B5B"
                              opacity="0.25"
                              className="animate-ping"
                            />
                          )}
                          <circle
                            cx={pin.x}
                            cy={pin.y}
                            r={isSelected ? "3.2" : "2.2"}
                            fill={isSelected ? "#E29578" : "#146B5B"}
                            stroke="#FFFFFF"
                            strokeWidth="1"
                            className="transition-all hover:scale-125"
                          />
                        </g>
                      );
                    })}
                  </svg>
                </div>

                {/* Pin Inspector Card on the right */}
                <div className="sm:col-span-5 flex flex-col justify-between h-full space-y-3">
                  {selectedPin ? (
                    <div className="bg-[#E8F5EF]/70 rounded-2xl p-4 sm:p-5 border border-[#146B5B]/25 text-left space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase font-extrabold text-[#146B5B] tracking-wider">
                          {selectedPin.region}
                        </span>
                        <MapPin className="w-4 h-4 text-[#146B5B]" />
                      </div>
                      <h4 className="font-display font-black text-base sm:text-lg text-[#16332F]">
                        {selectedPin.name}
                      </h4>
                      <p className="text-sm text-slate-700 leading-relaxed font-normal">
                        {selectedPin.feature}
                      </p>
                      <div className="p-3 rounded-xl bg-white border border-[#146B5B]/20 text-xs sm:text-sm text-[#146B5B] font-semibold mt-2">
                        {selectedPin.tip}
                      </div>
                    </div>
                  ) : (
                    <div className="p-5 text-center text-sm text-slate-500">
                      Nhấp vào một điểm trên bản đồ để xem phân tích địa lí chuyên sâu.
                    </div>
                  )}

                  {/* Atlat quick navigation */}
                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 text-left">
                    <div className="text-xs sm:text-sm font-bold text-slate-700 mb-1.5 flex items-center gap-2">
                      <Search className="w-3.5 h-3.5 text-[#1677B8]" />
                      <span>Tra cứu Atlat tương thích:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 text-xs font-semibold">
                      <span className="px-2 py-1 bg-white rounded-lg border border-slate-200 text-slate-700">Trang 4-5</span>
                      <span className="px-2 py-1 bg-white rounded-lg border border-slate-200 text-slate-700">Trang 9 (Khí hậu)</span>
                      <span className="px-2 py-1 bg-white rounded-lg border border-slate-200 text-slate-700">Trang 15 (Dân số)</span>
                      <span className="px-2 py-1 bg-white rounded-lg border border-slate-200 text-slate-700">Trang 26-30 (Vùng)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
