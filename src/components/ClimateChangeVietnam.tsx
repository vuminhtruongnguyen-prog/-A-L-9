import React, { useState } from "react";
import {
  CLIMATE_NATIONAL_METRICS,
  CLIMATE_AFFECTED_REGIONS,
  CLIMATE_CAUSES,
  CLIMATE_HUMAN_CONSEQUENCES,
  CLIMATE_SOLUTIONS,
  CLIMATE_QUIZ_QUESTIONS,
} from "../data/climateChangeData";
import {
  CloudRain,
  AlertTriangle,
  MapPin,
  Droplets,
  Flame,
  ShieldAlert,
  Home,
  Sprout,
  CheckCircle2,
  Waves,
  ThermometerSun,
  ArrowRight,
} from "lucide-react";

interface ClimateChangeVietnamProps {
  onEarnXp?: (points: number) => void;
}

export const ClimateChangeVietnam: React.FC<ClimateChangeVietnamProps> = ({
  onEarnXp,
}) => {
  const [selectedRegionId, setSelectedRegionId] = useState<string>("dbscl");
  const [selectedProvinceIdx, setSelectedProvinceIdx] = useState<number>(0);
  const [scenario, setScenario] = useState<"current" | "sea100cm">("current");
  const [activeSubView, setActiveSubView] = useState<
    "regions" | "causes" | "consequences" | "quiz"
  >("regions");
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});

  const activeRegion =
    CLIMATE_AFFECTED_REGIONS.find((r) => r.id === selectedRegionId) ||
    CLIMATE_AFFECTED_REGIONS[0];
  const activeProvince =
    activeRegion.affectedProvinces[selectedProvinceIdx] ||
    activeRegion.affectedProvinces[0];

  const handleSelectRegion = (regionId: string) => {
    setSelectedRegionId(regionId);
    setSelectedProvinceIdx(0);
  };

  const handleSelectQuiz = (qId: string, optIdx: number, correctIdx: number) => {
    if (quizAnswers[qId] !== undefined) return;
    setQuizAnswers((prev) => ({ ...prev, [qId]: optIdx }));
    if (optIdx === correctIdx && onEarnXp) {
      onEarnXp(20);
    }
  };

  return (
    <section className="py-10 bg-[#F8FAF9] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-bold text-[#146B5B] uppercase tracking-wider mb-2 flex items-center gap-2">
              <CloudRain className="w-4 h-4" />
              <span>Chuyên đề cấp thiết · Địa lí 9 & Phát triển bền vững</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-[#16332F] tracking-tight">
              Biến Đổi Khí Hậu Ở Việt Nam
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 leading-relaxed">
              Tìm hiểu các vùng, tỉnh thành chịu tác động nặng nề nhất (đã cập nhật tên gọi 34 tỉnh, thành phố sau sáp nhập), phân tích nguyên nhân tự nhiên - con người và những hậu quả, tổn thất nghiêm trọng đối với đời sống nhân dân.
            </p>
          </div>

          {/* Section Switcher */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white p-1.5 rounded-2xl border border-slate-200 shrink-0">
            <button
              onClick={() => setActiveSubView("regions")}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activeSubView === "regions"
                  ? "bg-[#146B5B] text-white"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              Vùng & Tỉnh bị ảnh hưởng
            </button>
            <button
              onClick={() => setActiveSubView("causes")}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activeSubView === "causes"
                  ? "bg-[#1677B8] text-white"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              Nguyên nhân dẫn đến
            </button>
            <button
              onClick={() => setActiveSubView("consequences")}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activeSubView === "consequences"
                  ? "bg-rose-700 text-white"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              Hậu quả & Tổn thất
            </button>
            <button
              onClick={() => setActiveSubView("quiz")}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activeSubView === "quiz"
                  ? "bg-amber-600 text-white"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              Luyện tập (+XP)
            </button>
          </div>
        </div>

        {/* 4 National Metrics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CLIMATE_NATIONAL_METRICS.map((m, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col justify-between"
            >
              <span className="text-xs font-bold text-slate-500">{m.label}</span>
              <strong className="text-2xl sm:text-3xl font-black text-[#16332F] tabular-nums my-1.5 font-display">
                {m.value}
              </strong>
              <span className="text-xs text-slate-600 leading-relaxed">{m.note}</span>
            </div>
          ))}
        </div>

        {/* ===================================================================== */}
        {/* SUB-VIEW 1: VÙNG & TỈNH THÀNH CHỊU ẢNH HƯỞNG NẶNG NỀ */}
        {/* ===================================================================== */}
        {activeSubView === "regions" && (
          <div className="space-y-6">
            {/* Region Tabs */}
            <div className="flex flex-wrap gap-2">
              {CLIMATE_AFFECTED_REGIONS.map((reg) => {
                const isActive = reg.id === selectedRegionId;
                return (
                  <button
                    key={reg.id}
                    onClick={() => handleSelectRegion(reg.id)}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0 ${
                      isActive
                        ? "bg-[#146B5B] text-white border-[#146B5B] shadow-xs"
                        : "bg-white text-slate-700 border-slate-200 hover:border-[#146B5B]/50"
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{reg.shortName}</span>
                  </button>
                );
              })}
            </div>

            {/* Two-Zone Interactive Sandbox */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Left Zone: Interactive Climate Hazard Map of Vietnam */}
              <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h3 className="font-black text-base text-[#16332F]">
                      Bản đồ Điểm nóng Biến đổi Khí hậu VN
                    </h3>
                    <span className="text-xs font-semibold text-slate-500">
                      Chọn vùng để xem chi tiết
                    </span>
                  </div>

                  {/* Scenario Toggle */}
                  <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl mb-4">
                    <button
                      onClick={() => setScenario("current")}
                      className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                        scenario === "current"
                          ? "bg-white text-[#16332F] shadow-2xs"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      Thực trạng hiện nay
                    </button>
                    <button
                      onClick={() => setScenario("sea100cm")}
                      className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                        scenario === "sea100cm"
                          ? "bg-sky-700 text-white shadow-2xs"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      Kịch bản biển dâng +100cm
                    </button>
                  </div>
                </div>

                {/* Vietnam SVG Outline & Interactive Hotspots */}
                <div className="relative bg-gradient-to-b from-sky-50 to-cyan-50/70 rounded-2xl border border-sky-200/80 p-4 flex items-center justify-center min-h-[380px]">
                  <svg
                    viewBox="0 0 240 420"
                    className="w-full max-w-[260px] h-auto drop-shadow-xs"
                    aria-label="Bản đồ điểm nóng biến đổi khí hậu Việt Nam"
                  >
                    {/* Stylized Vietnam mainland silhouette */}
                    <path
                      d="M78,24 L118,22 L145,42 L152,65 L125,85 L128,118 L142,162 L166,202 L176,252 L172,298 L146,338 L112,356 L92,388 L76,374 L86,342 L72,324 L98,295 L124,258 L128,214 L106,162 L92,126 L80,82 L58,54 Z"
                      fill="#E8F5EF"
                      stroke="#146B5B"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    {/* Hoang Sa & Truong Sa markers */}
                    <g fill="#0284C7" opacity="0.85">
                      <circle cx="204" cy="176" r="3" />
                      <circle cx="212" cy="182" r="2.5" />
                      <text x="184" y="168" fontSize="8" fontWeight="700" fill="#0369A1">
                        QĐ. Hoàng Sa
                      </text>
                      <circle cx="206" cy="316" r="3" />
                      <circle cx="214" cy="326" r="2.5" />
                      <text x="180" y="308" fontSize="8" fontWeight="700" fill="#0369A1">
                        QĐ. Trường Sa
                      </text>
                    </g>

                    {/* Sea level rise +100cm inundation simulation overlay */}
                    {scenario === "sea100cm" && (
                      <g>
                        {/* Red River Delta inundation zone */}
                        <ellipse
                          cx="132"
                          cy="78"
                          rx="18"
                          ry="13"
                          fill="#0284C7"
                          opacity="0.45"
                        />
                        {/* Mekong Delta heavy inundation zone */}
                        <ellipse
                          cx="98"
                          cy="354"
                          rx="28"
                          ry="26"
                          fill="#DC2626"
                          opacity="0.45"
                        />
                        {/* Central coast strips */}
                        <path
                          d="M158,200 Q176,245 168,295"
                          stroke="#0284C7"
                          strokeWidth="7"
                          strokeLinecap="round"
                          fill="none"
                          opacity="0.45"
                        />
                      </g>
                    )}

                    {/* Interactive Region Markers */}
                    {CLIMATE_AFFECTED_REGIONS.map((reg) => {
                      const cx = (reg.mapCoords.x / 100) * 240;
                      const cy = (reg.mapCoords.y / 100) * 420;
                      const isSel = reg.id === selectedRegionId;
                      return (
                        <g
                          key={reg.id}
                          className="cursor-pointer"
                          onClick={() => handleSelectRegion(reg.id)}
                        >
                          <circle
                            cx={cx}
                            cy={cy}
                            r={isSel ? 15 : 10}
                            fill={isSel ? "#DC2626" : "#D97706"}
                            opacity={isSel ? 0.25 : 0.18}
                          />
                          <circle
                            cx={cx}
                            cy={cy}
                            r={isSel ? 7.5 : 5.5}
                            fill={isSel ? "#DC2626" : "#0F766E"}
                            stroke="#FFFFFF"
                            strokeWidth="2"
                          />
                          <text
                            x={cx + 10}
                            y={cy + 3}
                            fontSize="9"
                            fontWeight="800"
                            fill="#16332F"
                          >
                            {reg.shortName}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>

                {/* Scenario Info Box */}
                <div className="mt-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
                  {scenario === "sea100cm" ? (
                    <div className="flex items-start gap-2">
                      <Waves className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-sky-900 block">
                          Dự báo kịch bản nước biển dâng +100 cm ({activeRegion.shortName}):
                        </strong>
                        <span>{activeRegion.inundationRisk100cm}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block">
                          Mức độ tổn thương hiện tại: {activeRegion.severity}
                        </strong>
                        <span>
                          Nhấn vào các vùng trên bản đồ hoặc chuyển sang kịch bản +100 cm để quan sát vùng ngập.
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Zone: Selected Region & Province Deep Dive */}
              <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-6">
                  {/* Region Title */}
                  <div className="flex flex-wrap items-start justify-between gap-3 pb-4 border-b border-slate-100">
                    <div>
                      <span className="text-xs font-bold text-slate-500">
                        Hồ sơ vùng chịu tác động biến đổi khí hậu
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black font-display text-[#16332F] mt-0.5">
                        {activeRegion.name}
                      </h3>
                    </div>
                    <span
                      className={`px-3 py-1.5 rounded-lg text-xs font-extrabold flex items-center gap-1.5 ${activeRegion.severityColor}`}
                    >
                      <ShieldAlert className="w-3.5 h-3.5" />
                      <span>{activeRegion.severity}</span>
                    </span>
                  </div>

                  {/* Interactive Affected Provinces */}
                  <div className="space-y-3">
                    <div className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                      Các tỉnh / thành phố chịu tác động nặng nề (Nhấn chọn tỉnh để xem chi tiết):
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeRegion.affectedProvinces.map((p, idx) => {
                        const isSel = idx === selectedProvinceIdx;
                        return (
                          <button
                            key={p.province}
                            onClick={() => setSelectedProvinceIdx(idx)}
                            className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                              isSel
                                ? "bg-rose-700 text-white border-rose-700 shadow-2xs"
                                : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                            }`}
                          >
                            {p.province}
                          </button>
                        );
                      })}
                    </div>

                    {/* Selected Province Detail */}
                    <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-1.5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <strong className="text-sm font-black text-rose-950">
                          {activeProvince.province}
                        </strong>
                        <span className="text-xs font-bold text-rose-800">
                          Thiên tai chính: {activeProvince.primaryHazard}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-rose-950/90 leading-relaxed">
                        {activeProvince.impactDetail}
                      </p>
                    </div>
                  </div>

                  {/* Regional Phenomena & Causes */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2.5">
                      <h4 className="text-sm font-black text-[#16332F] flex items-center gap-1.5">
                        <ThermometerSun className="w-4 h-4 text-amber-600" />
                        <span>Biểu hiện khí hậu cực đoan</span>
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                        {activeRegion.keyPhenomena.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 leading-relaxed">
                            <span className="font-bold text-amber-600 mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2.5">
                      <h4 className="text-sm font-black text-[#16332F] flex items-center gap-1.5">
                        <Droplets className="w-4 h-4 text-[#1677B8]" />
                        <span>Nguyên nhân trực tiếp tại vùng</span>
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                        {activeRegion.causesInRegion.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 leading-relaxed">
                            <span className="font-bold text-[#1677B8] mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Human Consequences in Region */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                    <h4 className="text-sm font-black text-rose-900 flex items-center gap-1.5">
                      <Home className="w-4 h-4 text-rose-700" />
                      <span>Tổn thất trực tiếp đối với người dân trong vùng</span>
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
                      {activeRegion.consequencesForPeople.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 leading-relaxed">
                          <span className="font-black text-rose-700">{i + 1}.</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===================================================================== */}
        {/* SUB-VIEW 2: NGUYÊN NHÂN DẪN ĐẾN BIẾN ĐỔI KHÍ HẬU */}
        {/* ===================================================================== */}
        {activeSubView === "causes" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {CLIMATE_CAUSES.map((group) => {
              const isGlobal = group.category === "global";
              return (
                <div
                  key={group.id}
                  className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-5"
                >
                  <div className="pb-4 border-b border-slate-100">
                    <span
                      className={`text-xs font-extrabold uppercase tracking-wider ${
                        isGlobal ? "text-[#1677B8]" : "text-[#146B5B]"
                      }`}
                    >
                      {isGlobal ? "Nhóm nguyên nhân khách quan toàn cầu" : "Nhóm nguyên nhân nội tại Việt Nam"}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black font-display text-[#16332F] mt-1">
                      {group.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      {group.subtitle}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {group.points.map((pt, pIdx) => (
                      <div
                        key={pIdx}
                        className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5"
                      >
                        <div className="font-extrabold text-sm text-[#16332F]">
                          0{pIdx + 1}. {pt.heading}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {pt.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ===================================================================== */}
        {/* SUB-VIEW 3: HẬU QUẢ NẶNG NỀ & TỔN THẤT ĐỐI VỚI NGƯỜI DÂN */}
        {/* ===================================================================== */}
        {activeSubView === "consequences" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CLIMATE_HUMAN_CONSEQUENCES.map((pillar) => (
                <div
                  key={pillar.id}
                  className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl font-black font-display text-[#16332F]">
                        {pillar.title}
                      </h3>
                      <Flame className="w-5 h-5 text-rose-600 shrink-0" />
                    </div>

                    <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200">
                      <div className="text-base sm:text-lg font-black text-rose-900 tabular-nums">
                        {pillar.metric}
                      </div>
                      <div className="text-xs text-rose-800 mt-0.5">
                        {pillar.metricNote}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.summary}
                    </p>

                    <div className="pt-3 border-t border-slate-100 space-y-2">
                      <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                        Thực tế tổn thất người dân phải gánh chịu:
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
                        {pillar.realImpacts.map((imp, idx) => (
                          <li key={idx} className="flex items-start gap-2 leading-relaxed">
                            <span className="font-bold text-rose-600 mt-0.5">•</span>
                            <span>{imp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Adaptation & Solutions Strip */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-2.5">
                <Sprout className="w-5 h-5 text-[#146B5B]" />
                <h3 className="text-xl sm:text-2xl font-black font-display text-[#16332F]">
                  Giải pháp Ứng phó & Thích ứng Bền vững của Việt Nam
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {CLIMATE_SOLUTIONS.map((sol, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#E8F5EF]/60 border border-[#146B5B]/20 space-y-1.5"
                  >
                    <h4 className="font-extrabold text-sm text-[#146B5B]">
                      {idx + 1}. {sol.title}
                    </h4>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {sol.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===================================================================== */}
        {/* SUB-VIEW 4: LUYỆN TẬP CỦNG CỐ KIẾN THỨC */}
        {/* ===================================================================== */}
        {activeSubView === "quiz" && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-xl sm:text-2xl font-black font-display text-[#16332F]">
                  Kiểm tra Nhanh: Biến đổi Khí hậu ở Việt Nam
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Trả lời đúng mỗi câu hỏi để nhận ngay +20 XP và củng cố trọng tâm Địa lí 9.
                </p>
              </div>
              <div className="text-xs font-extrabold text-[#146B5B] tabular-nums">
                Đã hoàn thành: {Object.keys(quizAnswers).length}/{CLIMATE_QUIZ_QUESTIONS.length} câu
              </div>
            </div>

            <div className="space-y-5">
              {CLIMATE_QUIZ_QUESTIONS.map((q, qIdx) => {
                const selected = quizAnswers[q.id];
                const isAnswered = selected !== undefined;
                return (
                  <div
                    key={q.id}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3"
                  >
                    <div className="font-bold text-sm sm:text-base text-[#16332F]">
                      Câu {qIdx + 1}: {q.question}
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {q.options.map((opt, oIdx) => {
                        let cls =
                          "bg-white border-slate-200 text-slate-700 hover:border-[#146B5B]";
                        if (isAnswered) {
                          if (oIdx === q.correctIndex) {
                            cls =
                              "bg-emerald-50 border-emerald-500 text-emerald-900 font-bold";
                          } else if (oIdx === selected) {
                            cls = "bg-rose-50 border-rose-400 text-rose-900";
                          } else {
                            cls = "bg-white border-slate-200 opacity-60";
                          }
                        }
                        return (
                          <button
                            key={oIdx}
                            disabled={isAnswered}
                            onClick={() =>
                              handleSelectQuiz(q.id, oIdx, q.correctIndex)
                            }
                            className={`w-full p-3 rounded-xl border text-xs sm:text-sm text-left transition-all cursor-pointer ${cls}`}
                          >
                            {String.fromCharCode(65 + oIdx)}. {opt}
                          </button>
                        );
                      })}
                    </div>
                    {isAnswered && (
                      <div
                        className={`p-3.5 rounded-xl border text-xs sm:text-sm leading-relaxed flex items-start gap-2.5 animate-gentle-pop ${
                          selected === q.correctIndex
                            ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                            : "bg-white border-slate-200 text-slate-700"
                        }`}
                      >
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            selected === q.correctIndex
                              ? "text-emerald-600"
                              : "text-[#146B5B]"
                          }`}
                        />
                        <div className="space-y-0.5">
                          {selected === q.correctIndex && (
                            <div className="font-extrabold text-emerald-800">
                              Chính xác! Chúc mừng bạn (+20 XP)
                            </div>
                          )}
                          <div>
                            <strong>Giải thích:</strong> {q.explanation}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Quick cross-navigation banner at bottom when on regions view */}
        {activeSubView === "regions" && (
          <div className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <strong className="text-sm sm:text-base text-[#16332F] block">
                Muốn hiểu rõ nguyên nhân và tổng hợp thiệt hại với người dân?
              </strong>
              <span className="text-xs sm:text-sm text-slate-600">
                Chuyển sang mục Nguyên nhân hoặc Hậu quả & Tổn thất để ôn tập trọn vẹn bài tự luận Địa lí 9.
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setActiveSubView("causes")}
                className="px-4 py-2 rounded-xl bg-[#1677B8] text-white text-xs font-bold hover:opacity-95 cursor-pointer flex items-center gap-1.5"
              >
                <span>Xem Nguyên nhân</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setActiveSubView("consequences")}
                className="px-4 py-2 rounded-xl bg-rose-700 text-white text-xs font-bold hover:opacity-95 cursor-pointer flex items-center gap-1.5"
              >
                <span>Xem Hậu quả</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
