import React, { useState } from "react";
import { ATLAT_CHALLENGES } from "../data/curriculumData";
import { AtlatChallenge } from "../types";
import { 
  Search, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Layers, 
  Lightbulb, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  HelpCircle,
  MapPin,
  Compass,
  FileCheck,
  Eye,
  Info,
  X,
  Building2,
  Anchor,
  Plane,
  Star
} from "lucide-react";
import { PROVINCE_PINS, ProvincePin, CentralCityDetails } from "../data/provincesData";


interface AtlatLabProps {
  onEarnXp?: (points: number) => void;
}

export const AtlatLab: React.FC<AtlatLabProps> = ({ onEarnXp }) => {
  const [activeTabMode, setActiveTabMode] = useState<"challenges" | "provinces">("provinces");
  const [activeChallengeIndex, setActiveChallengeIndex] = useState<number>(0);
  const challenge: AtlatChallenge = ATLAT_CHALLENGES[activeChallengeIndex] || ATLAT_CHALLENGES[0];

  // Selected Province Inspector state
  const [selectedProvince, setSelectedProvince] = useState<ProvincePin | null>(PROVINCE_PINS[0]);
  const [provinceFilter, setProvinceFilter] = useState<"all" | "central-cities" | "north" | "central" | "south">("all");

  const filteredPins = PROVINCE_PINS.filter((pin) => {
    if (provinceFilter === "central-cities") return pin.isCentralCity;
    if (provinceFilter === "north") return pin.zone === "north";
    if (provinceFilter === "central") return pin.zone === "central";
    if (provinceFilter === "south") return pin.zone === "south";
    return true;
  });

  const centralCities = PROVINCE_PINS.filter((p) => p.isCentralCity);

  // Interactive map states
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [activeLayers, setActiveLayers] = useState<string[]>([
    "Thủy sản & Ngư trường",
    "Thủy điện & Năng lượng",
    "Gió mùa & Khí hậu"
  ]);
  const [showLegend, setShowLegend] = useState<boolean>(true);

  // Progressive Hint Unlock System
  const [studentAnswer, setStudentAnswer] = useState<string>("");
  const [unlockedHintStep, setUnlockedHintStep] = useState<number>(0);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  const toggleLayer = (layerName: string) => {
    setActiveLayers((prev) =>
      prev.includes(layerName)
        ? prev.filter((l) => l !== layerName)
        : [...prev, layerName]
    );
  };

  const handleStudentSubmit = () => {
    if (!studentAnswer.trim()) return;
    setHasSubmitted(true);
    if (unlockedHintStep === 0) {
      setUnlockedHintStep(1);
    }
    if (onEarnXp) {
      onEarnXp(20);
    }
  };

  const unlockNextHint = () => {
    setUnlockedHintStep((prev) => Math.min(prev + 1, 5));
    if (onEarnXp) {
      onEarnXp(5);
    }
  };

  const allLayers = [
    { id: "hydro", label: "Sông ngòi & Thủy điện", color: "#1677B8" },
    { id: "climate", label: "Gió mùa & Khí hậu", color: "#E29578" },
    { id: "fishery", label: "Thủy sản & Ngư trường", color: "#146B5B" },
    { id: "regions", label: "Ranh giới các vùng", color: "#6C757D" },
  ];

  return (
    <section className="py-10 bg-[#F4F7F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title with crisp high contrast text */}
        <div className="text-left mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#146B5B] text-white text-xs sm:text-sm font-black uppercase tracking-wider mb-2 shadow-2xs">
            <Search className="w-4 h-4 text-[#FFF3B0]" />
            <span>Phòng Thực Hành Số Hóa Bản Đồ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900 tracking-tight">
            Phòng Thí Nghiệm Atlat Địa Lí Việt Nam
          </h2>
          <p className="text-base sm:text-lg text-slate-800 mt-2 max-w-3xl leading-relaxed font-normal">
            Bản đồ địa lí tương tác chi tiết: Khám phá các tỉnh thành trọng điểm trên khắp dải đất hình chữ S, xem hình ảnh thực tế và thực hành bóc tách số liệu bản đồ đạt điểm 10.
          </p>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-4 pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTabMode("provinces")}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer border ${
                activeTabMode === "provinces"
                  ? "bg-[#146B5B] text-white border-[#146B5B] shadow-sm"
                  : "bg-white text-slate-800 hover:bg-slate-50 border-slate-300"
              }`}
            >
              🗺️ Khám phá 34 Tỉnh thành sau sáp nhập
            </button>
            <button
              onClick={() => setActiveTabMode("challenges")}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer border ${
                activeTabMode === "challenges"
                  ? "bg-[#1677B8] text-white border-[#1677B8] shadow-sm"
                  : "bg-white text-slate-800 hover:bg-slate-50 border-slate-300"
              }`}
            >
              🔍 Bài tập & Thử thách giải Atlat
            </button>
          </div>

          <div className="text-xs font-bold text-slate-700 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
            💡 Biểu thị chuẩn 34 đơn vị hành chính cấp tỉnh & 9 TP trực thuộc Trung ương
          </div>
        </div>

        {/* 9 Central Cities Spotlight Bar & Region Filter when in provinces mode */}
        {activeTabMode === "provinces" && (
          <div className="mb-6 space-y-3">
            {/* 9 Central Cities Spotlight */}
            <div className="bg-gradient-to-r from-amber-500/15 via-amber-400/20 to-orange-500/15 border-2 border-amber-300/80 rounded-2xl p-4 shadow-sm text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-amber-500 text-white">
                    <Star className="w-4 h-4 fill-white" />
                  </span>
                  <div>
                    <h3 className="text-xs sm:text-sm font-black text-amber-950 uppercase tracking-wide">
                      9 Thành Phố Trực Thuộc Trung Ương Của Việt Nam
                    </h3>
                    <p className="text-[11px] text-amber-900/80">
                      Hà Nội, TP.HCM, Hải Phòng, Đà Nẵng, Cần Thơ, Huế, Đồng Nai, Quảng Ninh, Bắc Ninh
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setProvinceFilter("central-cities");
                    setSelectedProvince(centralCities[0]);
                  }}
                  className="px-3 py-1 rounded-lg bg-amber-600 text-white text-xs font-extrabold hover:bg-amber-700 cursor-pointer self-start sm:self-auto shrink-0 shadow-2xs"
                >
                  Xem nhanh 9 Thành phố
                </button>
              </div>

              {/* 9 City clickable chips */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {centralCities.map((city) => {
                  const isSelected = selectedProvince?.id === city.id;
                  return (
                    <button
                      key={city.id}
                      onClick={() => setSelectedProvince(city)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                        isSelected
                          ? "bg-amber-600 text-white shadow-xs scale-105"
                          : "bg-white/90 text-slate-800 hover:bg-white border border-amber-200"
                      }`}
                    >
                      <Building2 className="w-3.5 h-3.5 text-amber-600" />
                      <span>{city.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Region Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-black text-slate-600 mr-1">Bộ lọc vùng miền:</span>
              <button
                onClick={() => setProvinceFilter("all")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  provinceFilter === "all"
                    ? "bg-slate-900 text-white"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                Tất cả 34 tỉnh/thành ({PROVINCE_PINS.filter(p => !['hoangsa','truongsa'].includes(p.id)).length})
              </button>
              <button
                onClick={() => setProvinceFilter("central-cities")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  provinceFilter === "central-cities"
                    ? "bg-amber-600 text-white"
                    : "bg-white text-amber-900 hover:bg-amber-50 border border-amber-300"
                }`}
              >
                ⭐ 9 TP Trực thuộc TW ({centralCities.length})
              </button>
              <button
                onClick={() => setProvinceFilter("north")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  provinceFilter === "north"
                    ? "bg-[#146B5B] text-white"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                Miền Bắc (14)
              </button>
              <button
                onClick={() => setProvinceFilter("central")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  provinceFilter === "central"
                    ? "bg-[#1677B8] text-white"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                Miền Trung & Tây Nguyên (13)
              </button>
              <button
                onClick={() => setProvinceFilter("south")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  provinceFilter === "south"
                    ? "bg-emerald-700 text-white"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                Miền Nam (7)
              </button>
            </div>
          </div>
        )}

        {/* Challenge Tabs when in challenges mode */}
        {activeTabMode === "challenges" && (
          <div className="flex items-center gap-2.5 overflow-x-auto pb-3 mb-6 no-scrollbar">
            {ATLAT_CHALLENGES.map((ch, idx) => (
              <button
                key={ch.id}
                onClick={() => {
                  setActiveChallengeIndex(idx);
                  setUnlockedHintStep(0);
                  setHasSubmitted(false);
                  setStudentAnswer("");
                }}
                className={`px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer border ${
                  activeChallengeIndex === idx
                    ? "bg-[#146B5B] text-white border-[#146B5B] shadow-xs font-extrabold"
                    : "bg-white text-slate-800 hover:bg-slate-50 border-slate-300"
                }`}
              >
                {ch.title}
              </button>
            ))}
          </div>
        )}

        {/* Workbench Layout: 12-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Central Digital Map View (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border-2 border-slate-300 shadow-sm overflow-hidden flex flex-col relative">
            {/* Map Action Toolbar */}
            <div className="p-3 bg-slate-100 border-b border-slate-200 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-[#146B5B]" />
                  <span>Trang tra cứu: <strong>{activeTabMode === "challenges" ? challenge.atlatPage : (selectedProvince?.atlatPages[0] || "Trang 4-5")}</strong></span>
                </span>
                <span className="hidden sm:inline-block text-xs px-2.5 py-0.5 bg-[#146B5B] text-white rounded-md font-bold">
                  {activeTabMode === "challenges" ? challenge.targetRegion : (selectedProvince?.region || "Việt Nam")}
                </span>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleZoomIn}
                  className="p-1.5 rounded-lg bg-white border border-slate-300 text-slate-800 hover:bg-slate-100 cursor-pointer shadow-2xs font-bold"
                  title="Phóng to"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={handleZoomOut}
                  className="p-1.5 rounded-lg bg-white border border-slate-300 text-slate-800 hover:bg-slate-100 cursor-pointer shadow-2xs font-bold"
                  title="Thu nhỏ"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={handleResetZoom}
                  className="p-1.5 rounded-lg bg-white border border-slate-300 text-slate-800 hover:bg-slate-100 cursor-pointer shadow-2xs font-bold"
                  title="Đặt lại tỉ lệ"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setShowLegend(!showLegend)}
                  className={`px-2.5 py-1 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                    showLegend ? "bg-[#146B5B] text-white border-[#146B5B]" : "bg-white text-slate-800 border-slate-300"
                  }`}
                >
                  Chú giải
                </button>
              </div>
            </div>

            {/* Interactive Map Canvas Container */}
            <div className="relative h-[500px] bg-gradient-to-br from-sky-100/50 via-emerald-50/40 to-slate-100 overflow-hidden flex items-center justify-center p-3 select-none">
              <div 
                className="w-full h-full transition-transform duration-300 ease-out flex items-center justify-center"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full max-h-[460px] drop-shadow-md select-none"
                >
                  {/* Grid Lines */}
                  <line x1="10" y1="20" x2="90" y2="20" stroke="#94A3B8" strokeWidth="0.3" strokeDasharray="2 2" />
                  <line x1="10" y1="50" x2="90" y2="50" stroke="#94A3B8" strokeWidth="0.3" strokeDasharray="2 2" />
                  <line x1="10" y1="80" x2="90" y2="80" stroke="#94A3B8" strokeWidth="0.3" strokeDasharray="2 2" />
                  <line x1="30" y1="5" x2="30" y2="95" stroke="#94A3B8" strokeWidth="0.3" strokeDasharray="2 2" />
                  <line x1="60" y1="5" x2="60" y2="95" stroke="#94A3B8" strokeWidth="0.3" strokeDasharray="2 2" />

                  {/* Vietnam Map S-Shape Landmass */}
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
                    fillOpacity="0.22"
                    stroke="#146B5B"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />

                  {/* Major Rivers */}
                  <path d="M 35 10 Q 42 15 50 19" fill="none" stroke="#1677B8" strokeWidth="1.2" />
                  <path d="M 48 35 Q 52 38 56 42" fill="none" stroke="#1677B8" strokeWidth="1.0" />
                  <path d="M 42 75 Q 46 84 36 90" fill="none" stroke="#1677B8" strokeWidth="1.4" />

                  {/* Islands: Hoàng Sa & Trường Sa with crisp dark labels */}
                  <g className="cursor-pointer" onClick={() => setSelectedProvince(PROVINCE_PINS.find(p => p.id === "hoangsa") || null)}>
                    <circle cx="82" cy="39" r="2.2" fill="#1677B8" stroke="#FFFFFF" strokeWidth="0.8" />
                    <circle cx="79" cy="37" r="1.4" fill="#1677B8" />
                    <circle cx="84" cy="41" r="1.4" fill="#1677B8" />
                    <rect x="74" y="42" width="18" height="4" rx="1" fill="#FFFFFF" opacity="0.9" />
                    <text x="83" y="45" fontSize="2.8" fill="#0F172A" fontWeight="900" textAnchor="middle">QĐ. Hoàng Sa</text>
                  </g>

                  <g className="cursor-pointer" onClick={() => setSelectedProvince(PROVINCE_PINS.find(p => p.id === "truongsa") || null)}>
                    <circle cx="84" cy="75" r="2.2" fill="#1677B8" stroke="#FFFFFF" strokeWidth="0.8" />
                    <circle cx="81" cy="73" r="1.4" fill="#1677B8" />
                    <circle cx="86" cy="77" r="1.4" fill="#1677B8" />
                    <rect x="75" y="79" width="18" height="4" rx="1" fill="#FFFFFF" opacity="0.9" />
                    <text x="84" y="82" fontSize="2.8" fill="#0F172A" fontWeight="900" textAnchor="middle">QĐ. Trường Sa</text>
                  </g>

                  {/* Đảo Phú Quốc */}
                  <g className="cursor-pointer" onClick={() => setSelectedProvince(PROVINCE_PINS.find(p => p.id === "kiengiang") || null)}>
                    <circle cx="30" cy="89" r="2.0" fill="#146B5B" stroke="#FFFFFF" strokeWidth="0.8" />
                    <text x="28" y="93" fontSize="2.5" fill="#0F172A" fontWeight="900" textAnchor="middle">Đ. Phú Quốc</text>
                  </g>

                  {/* Province Interactive Pins */}
                  {filteredPins.map((pin) => {
                    const isSelected = selectedProvince?.id === pin.id;
                    const isCentral = pin.isCentralCity;
                    return (
                      <g
                        key={pin.id}
                        className="cursor-pointer group"
                        onClick={() => setSelectedProvince(pin)}
                      >
                        {isSelected && (
                          <circle
                            cx={pin.coords.x}
                            cy={pin.coords.y}
                            r="5.5"
                            fill={isCentral ? "#D97706" : "#E11D48"}
                            opacity="0.4"
                            className="animate-ping"
                          />
                        )}
                        {/* Central City Golden Halo */}
                        {isCentral && (
                          <circle
                            cx={pin.coords.x}
                            cy={pin.coords.y}
                            r="3.4"
                            fill="none"
                            stroke="#D97706"
                            strokeWidth="0.8"
                            strokeDasharray="1,1"
                          />
                        )}
                        <circle
                          cx={pin.coords.x}
                          cy={pin.coords.y}
                          r={isSelected ? "3.2" : isCentral ? "2.5" : "2.0"}
                          fill={isSelected ? (isCentral ? "#D97706" : "#E11D48") : isCentral ? "#B45309" : "#146B5B"}
                          stroke="#FFFFFF"
                          strokeWidth="0.8"
                          className="transition-transform group-hover:scale-125"
                        />
                        {/* Text label with white halo for maximum contrast */}
                        <text
                          x={pin.coords.x}
                          y={pin.coords.y - 3}
                          fontSize={isCentral ? "2.6" : "2.3"}
                          fill={isCentral ? "#78350F" : "#0F172A"}
                          fontWeight="900"
                          textAnchor="middle"
                          stroke="#FFFFFF"
                          strokeWidth="0.6"
                          paintOrder="stroke fill"
                          className="select-none pointer-events-none"
                        >
                          {isCentral ? `★ ${pin.name}` : pin.name}
                        </text>
                      </g>
                    );
                  })}

                  {/* Challenge Pin Highlight when in challenges mode */}
                  {activeTabMode === "challenges" && (
                    <g className="animate-bounce">
                      <circle
                        cx={challenge.coordinates.x}
                        cy={challenge.coordinates.y}
                        r="6"
                        fill="#DC2626"
                        opacity="0.3"
                        className="animate-ping"
                      />
                      <circle
                        cx={challenge.coordinates.x}
                        cy={challenge.coordinates.y}
                        r="3.5"
                        fill="#DC2626"
                        stroke="#FFFFFF"
                        strokeWidth="1.2"
                      />
                      <text
                        x={challenge.coordinates.x}
                        y={challenge.coordinates.y + 7}
                        fontSize="3.0"
                        fill="#991B1B"
                        fontWeight="900"
                        stroke="#FFFFFF"
                        strokeWidth="0.5"
                        textAnchor="middle"
                      >
                        🎯 Mục tiêu thử thách
                      </text>
                    </g>
                  )}
                </svg>
              </div>

              {/* Floating Legend Card with dark high contrast text */}
              {showLegend && (
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-300 shadow-md text-left text-xs max-w-xs">
                  <div className="font-black text-slate-900 mb-1.5 flex items-center justify-between">
                    <span>Chú giải bản đồ số:</span>
                    <button 
                      onClick={() => setShowLegend(false)}
                      className="text-slate-500 hover:text-slate-900 font-bold ml-2"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="space-y-1.5 text-slate-800 font-medium">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-rose-600 shrink-0" />
                      <span>Điểm tỉnh/thành đang chọn</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-[#146B5B] shrink-0" />
                      <span>Các tỉnh/thành phố trọng điểm</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-1 bg-[#1677B8] shrink-0" />
                      <span>Hệ thống sông ngòi & trữ năng thủy điện</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Province Inspector or Socratic Challenge Feedback (5 cols) */}
          <div className="lg:col-span-5 space-y-4 text-left">
            {activeTabMode === "provinces" && selectedProvince ? (
              /* PROVINCE DETAILED INSPECTOR CARD */
              <div className="bg-white rounded-2xl border-2 border-slate-300 p-5 shadow-sm space-y-4">
                <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-200">
                  <div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[11px] font-black uppercase tracking-wider text-[#146B5B] bg-[#E8F5EF] px-2.5 py-1 rounded-md">
                        {selectedProvince.region}
                      </span>
                      {selectedProvince.isCentralCity && (
                        <span className="text-[11px] font-black uppercase tracking-wider text-amber-900 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded-md flex items-center gap-1">
                          <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                          <span>TP. Trực thuộc Trung ương</span>
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-black font-display text-slate-900 mt-1">
                      {selectedProvince.fullName || selectedProvince.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-slate-700 bg-slate-100 px-2 py-1 rounded shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-rose-600" />
                    <span>Toạ độ: {selectedProvince.coords.x}%, {selectedProvince.coords.y}%</span>
                  </div>
                </div>

                {/* Central City Details Box when selected */}
                {selectedProvince.isCentralCity && selectedProvince.centralCityDetails && (
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 via-amber-400/15 to-orange-500/10 border-2 border-amber-300 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-950">
                      <Building2 className="w-4 h-4 text-amber-700" />
                      <span>Thông tin chi tiết 9 Đô thị Trực thuộc Trung ương</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-white/90 p-2.5 rounded-xl border border-amber-200">
                        <span className="text-[10px] uppercase font-bold text-slate-500 block">Dân số đô thị</span>
                        <span className="font-black text-slate-900">{selectedProvince.centralCityDetails.population}</span>
                      </div>
                      <div className="bg-white/90 p-2.5 rounded-xl border border-amber-200">
                        <span className="text-[10px] uppercase font-bold text-slate-500 block">Diện tích tự nhiên</span>
                        <span className="font-black text-slate-900">{selectedProvince.centralCityDetails.area}</span>
                      </div>
                    </div>

                    <div className="text-xs text-slate-800 leading-relaxed">
                      <strong className="text-amber-950">Chức năng & Vai trò động lực:</strong>{" "}
                      {selectedProvince.centralCityDetails.role}
                    </div>

                    <div className="text-xs text-slate-800 leading-relaxed flex items-start gap-1.5">
                      <Plane className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-amber-950">Đầu mối hạ tầng:</strong>{" "}
                        {selectedProvince.centralCityDetails.transportHub}
                      </div>
                    </div>

                    <div className="text-xs text-slate-800 leading-relaxed flex items-start gap-1.5">
                      <Anchor className="w-3.5 h-3.5 text-teal-700 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-amber-950">Đóng góp kinh tế & GRDP:</strong>{" "}
                        {selectedProvince.centralCityDetails.economicShare}
                      </div>
                    </div>
                  </div>
                )}

                {/* Real Landmark / Landscape Image */}
                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-2xs relative">
                  <img
                    src={selectedProvince.image}
                    alt={selectedProvince.name}
                    className="w-full h-48 sm:h-52 object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 to-transparent p-2.5 text-white text-xs font-bold">
                    📍 Cảnh quan & địa danh tiêu biểu của {selectedProvince.name}
                  </div>
                </div>

                {/* Key Geographic Highlights */}
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-[#146B5B]" />
                    <span>Đặc điểm địa lí nổi bật:</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-800 leading-relaxed pl-3 list-disc font-medium">
                    {selectedProvince.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>

                {/* Economic Strengths */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <span className="font-black text-slate-900 block mb-1">
                    🏭 Thế mạnh kinh tế chủ lực:
                  </span>
                  <p className="text-slate-800 leading-relaxed font-normal">
                    {selectedProvince.economicStrengths}
                  </p>
                </div>

                {/* Atlat lookup pages */}
                <div className="flex flex-wrap items-center gap-1.5 text-xs">
                  <span className="font-black text-slate-900 shrink-0">Trang Atlat đối chiếu:</span>
                  {selectedProvince.atlatPages.map((page, pIdx) => (
                    <span
                      key={pIdx}
                      className="px-2.5 py-0.5 rounded-md bg-[#1677B8] text-white font-bold text-[11px]"
                    >
                      {page}
                    </span>
                  ))}
                </div>

                {/* Specialized Exam Tip */}
                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-300 text-xs text-amber-950 font-medium">
                  <span className="font-black text-amber-900 block mb-0.5">
                    ⭐ Mẹo thi học sinh giỏi & chuyên:
                  </span>
                  {selectedProvince.specializedTip}
                </div>
              </div>
            ) : (
              /* CHALLENGE SOCRATIC FEEDBACK PANEL */
              <div className="space-y-4">
                <div className="bg-white rounded-2xl border-2 border-slate-300 p-5 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-white bg-[#146B5B] px-2.5 py-1 rounded-md">
                      🔍 {challenge.title}
                    </span>
                    <span className="text-xs text-slate-800 font-bold">
                      {challenge.atlatPage}
                    </span>
                  </div>

                  <div className="font-black text-sm sm:text-base text-slate-900 leading-snug">
                    {challenge.prompt}
                  </div>

                  <p className="text-xs text-slate-800 leading-relaxed font-medium">
                    {challenge.initialQuestion}
                  </p>

                  {/* Student Answer Input Box */}
                  <div className="space-y-2 pt-2">
                    <label className="text-xs font-black text-slate-900 block">
                      Khu vực nhập câu trả lời của bạn:
                    </label>
                    <textarea
                      value={studentAnswer}
                      onChange={(e) => setStudentAnswer(e.target.value)}
                      placeholder="Ví dụ: Dựa vào Atlat trang 20, vùng có sản lượng thủy sản lớn nhất là... Nguyên nhân tự nhiên gồm... Nguyên nhân kinh tế gồm..."
                      rows={3}
                      className="w-full p-3 rounded-xl border-2 border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#146B5B] focus:ring-1 focus:ring-[#146B5B]"
                    />

                    <div className="flex items-center justify-between pt-1">
                      <button
                        onClick={handleStudentSubmit}
                        disabled={!studentAnswer.trim()}
                        className="px-4 py-2 rounded-xl bg-[#146B5B] text-white text-xs font-black hover:bg-[#0f5548] active:scale-95 transition-all disabled:opacity-50 cursor-pointer shadow-xs"
                      >
                        Gửi câu trả lời & Mở khóa gợi ý
                      </button>

                      {hasSubmitted && unlockedHintStep < 5 && (
                        <button
                          onClick={unlockNextHint}
                          className="text-xs font-black text-[#1677B8] hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <span>Mở khóa bước tiếp theo</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Hints 1 to 5 with crisp contrast */}
                {hasSubmitted && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-black text-slate-800 px-1">
                      <span>Hệ thống phân tích sư phạm đa tầng:</span>
                      <span className="text-[#146B5B]">Bước {unlockedHintStep}/5</span>
                    </div>

                    {unlockedHintStep >= 1 && (
                      <div className="p-4 rounded-xl bg-amber-50 border-2 border-amber-300 text-xs text-amber-950 space-y-1">
                        <div className="font-black text-amber-900 flex items-center gap-1.5">
                          <Lightbulb className="w-4 h-4 text-amber-700" />
                          <span>Gợi ý 1: Quan sát số liệu & màu sắc bản đồ</span>
                        </div>
                        <p className="leading-relaxed font-medium">{challenge.hints[0]}</p>
                      </div>
                    )}

                    {unlockedHintStep >= 2 && (
                      <div className="p-4 rounded-xl bg-sky-50 border-2 border-sky-300 text-xs text-sky-950 space-y-1">
                        <div className="font-black text-sky-900 flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4 text-sky-700" />
                          <span>Gợi ý 2: Bóc tách yếu tố tự nhiên then chốt</span>
                        </div>
                        <p className="leading-relaxed font-medium">{challenge.hints[1]}</p>
                      </div>
                    )}

                    {unlockedHintStep >= 3 && (
                      <div className="p-4 rounded-xl bg-emerald-50 border-2 border-emerald-300 text-xs text-emerald-950 space-y-1">
                        <div className="font-black text-emerald-900 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                          <span>Gợi ý 3: Kết nối yếu tố kinh tế - xã hội & nhân lực</span>
                        </div>
                        <p className="leading-relaxed font-medium">{challenge.hints[2]}</p>
                      </div>
                    )}

                    {unlockedHintStep >= 4 && (
                      <div className="p-4 rounded-xl bg-purple-50 border-2 border-purple-300 text-xs text-purple-950 space-y-1">
                        <div className="font-black text-purple-900 flex items-center gap-1.5">
                          <span>🧠</span>
                          <span>Phân tích tư duy chuyên sâu:</span>
                        </div>
                        <p className="leading-relaxed font-medium">{challenge.deepAnalysis}</p>
                      </div>
                    )}

                    {unlockedHintStep >= 5 && (
                      <div className="p-4 rounded-xl bg-white border-2 border-[#146B5B] text-xs text-slate-900 space-y-2 shadow-sm">
                        <div className="font-black text-sm text-[#146B5B] flex items-center gap-1.5">
                          <FileCheck className="w-4 h-4 text-[#146B5B]" />
                          <span>Đáp án mẫu chuẩn thi Học sinh giỏi & Chuyên:</span>
                        </div>
                        <div className="p-3 bg-slate-50 rounded-lg whitespace-pre-line leading-relaxed font-medium text-slate-900">
                          {challenge.modelAnswer}
                        </div>
                      </div>
                    )}

                    {unlockedHintStep < 5 && (
                      <button
                        onClick={unlockNextHint}
                        className="w-full py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-xs font-black text-slate-800 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>Xem tiếp {unlockedHintStep === 1 ? "Gợi ý 2" : unlockedHintStep === 2 ? "Gợi ý 3" : unlockedHintStep === 3 ? "Phân tích chuyên sâu" : "Đáp án mẫu đầy đủ"}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
