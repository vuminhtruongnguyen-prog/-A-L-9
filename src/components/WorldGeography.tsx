import React, { useState } from "react";
import { 
  CONTINENTS_DATA, 
  GRADE_SYNTHESIS_DATA, 
  ContinentInfo, 
  GradeSynthesisTopic 
} from "../data/worldGeographyData";
import { 
  Globe2, 
  BookOpen, 
  Compass, 
  Mountain, 
  Droplets, 
  ThermometerSun, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  HelpCircle, 
  Layers, 
  TrendingUp, 
  Scale, 
  Award,
  Filter
} from "lucide-react";

interface WorldGeographyProps {
  onEarnXp?: (points: number) => void;
}

export const WorldGeography: React.FC<WorldGeographyProps> = ({ onEarnXp }) => {
  // Main view switcher: "continents" (6 châu lục) | "curriculum" (Tổng hợp Lớp 6-7-8)
  const [activeSection, setActiveSection] = useState<"continents" | "curriculum">("continents");

  // Continents state
  const [selectedContinentId, setSelectedContinentId] = useState<string>("asia");
  const activeContinent = CONTINENTS_DATA.find((c) => c.id === selectedContinentId) || CONTINENTS_DATA[0];
  const [showComparison, setShowComparison] = useState<boolean>(false);

  // Grade synthesis state
  const [selectedGrade, setSelectedGrade] = useState<6 | 7 | 8>(6);
  const activeSynthesis = GRADE_SYNTHESIS_DATA.find((g) => g.grade === selectedGrade) || GRADE_SYNTHESIS_DATA[0];

  // Quiz state for grade synthesis
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [showQuizExplanation, setShowQuizExplanation] = useState<Record<string, boolean>>({});

  const handleSelectQuizOption = (qKey: string, optionIdx: number, correctIdx: number) => {
    setUserAnswers((prev) => ({ ...prev, [qKey]: optionIdx }));
    setShowQuizExplanation((prev) => ({ ...prev, [qKey]: true }));
    if (optionIdx === correctIdx && onEarnXp) {
      onEarnXp(20);
    }
  };

  return (
    <section className="py-10 bg-[#F8FAF9] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-[#1677B8] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-2">
            <Globe2 className="w-4 h-4" />
            <span>Địa lí thế giới & Kho tàng tri thức THCS</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-[#16332F] tracking-tight">
                Địa Lí Nước Ngoài & Ôn Tập Lớp 6 - 7 - 8
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mt-2 max-w-3xl leading-relaxed font-normal">
                Khám phá số liệu thực tế về khí hậu, các dạng địa hình, dân số, các con sông lớn của 6 châu lục và tổng hợp toàn bộ nền tảng cốt lõi Địa lí các năm lớp 6, 7, 8 chuẩn mực nhất.
              </p>
            </div>

            {/* Main Switcher Buttons */}
            <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-2xs">
              <button
                onClick={() => setActiveSection("continents")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  activeSection === "continents"
                    ? "bg-[#1677B8] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Globe2 className="w-4 h-4" />
                <span>6 Châu Lục Thế Giới</span>
              </button>
              <button
                onClick={() => setActiveSection("curriculum")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  activeSection === "curriculum"
                    ? "bg-[#146B5B] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Tổng hợp Lớp 6 - 7 - 8</span>
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* VIEW 1: 6 CHÂU LỤC THẾ GIỚI */}
        {/* ========================================================================= */}
        {activeSection === "continents" && (
          <div className="space-y-8">
            {/* Continents horizontal cards bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {CONTINENTS_DATA.map((cont) => {
                const isSelected = selectedContinentId === cont.id;
                return (
                  <button
                    key={cont.id}
                    onClick={() => {
                      setSelectedContinentId(cont.id);
                      setShowComparison(false);
                    }}
                    className={`p-3.5 rounded-2xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? "bg-white border-[#1677B8] shadow-md ring-2 ring-[#1677B8]/20"
                        : "bg-white border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div>
                      <span className="text-xl mb-1 block">
                        {cont.id === "asia" ? "🌏" : cont.id === "europe" ? "🏰" : cont.id === "africa" ? "🦁" : cont.id === "americas" ? "🗽" : cont.id === "oceania" ? "🦘" : "❄️"}
                      </span>
                      <h4 className="font-extrabold text-sm text-[#16332F]">{cont.name}</h4>
                      <span className="text-[10px] text-slate-400 font-semibold block">{cont.englishName}</span>
                    </div>
                    <span className="text-[11px] font-bold text-sky-700 mt-2">
                      {cont.areaKm2 >= 1000000 ? `${(cont.areaKm2 / 1000000).toFixed(1)} tr km²` : ""}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick compare toggle button */}
            <div className="flex justify-end">
              <button
                onClick={() => setShowComparison(!showComparison)}
                className="px-4 py-2 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50 flex items-center gap-2 cursor-pointer shadow-2xs"
              >
                <Scale className="w-4 h-4 text-[#1677B8]" />
                <span>{showComparison ? "Quay lại xem chi tiết châu lục" : "So sánh bảng số liệu 6 châu lục"}</span>
              </button>
            </div>

            {!showComparison ? (
              /* Single Continent Detailed Card */
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                {/* Hero Header */}
                <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                  <img
                    src={activeContinent.image}
                    alt={activeContinent.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex items-end p-6 sm:p-8">
                    <div className="text-white space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs uppercase font-extrabold tracking-wider px-3 py-1 rounded-full bg-[#1677B8] text-white">
                          Hồ sơ địa lí lục địa
                        </span>
                        {activeContinent.flagIcons && (
                          <span className="text-base tracking-widest">
                            {activeContinent.flagIcons.join(" ")}
                          </span>
                        )}
                      </div>
                      <h3 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
                        {activeContinent.name} ({activeContinent.englishName})
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-200 max-w-2xl font-medium">
                        Diện tích: {activeContinent.areaText} • Dân số: {activeContinent.populationText}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4 Core Vital Stats Bar */}
                <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-100 bg-slate-50/80 border-b border-slate-200 p-4 sm:p-6 text-xs sm:text-sm">
                  <div className="p-3">
                    <span className="text-slate-500 font-bold block mb-1">🏔️ Điểm cao nhất:</span>
                    <strong className="text-slate-900 block text-sm font-extrabold">{activeContinent.highestPoint.name}</strong>
                    <span className="text-[#1677B8] font-bold">{activeContinent.highestPoint.altitudeMeters.toLocaleString()} m</span>
                    <p className="text-[11px] text-slate-500 mt-0.5">{activeContinent.highestPoint.location}</p>
                  </div>

                  <div className="p-3">
                    <span className="text-slate-500 font-bold block mb-1">🌊 Điểm thấp nhất:</span>
                    <strong className="text-slate-900 block text-sm font-extrabold">{activeContinent.lowestPoint.name}</strong>
                    <span className="text-rose-600 font-bold">{activeContinent.lowestPoint.depthMeters} m</span>
                    <p className="text-[11px] text-slate-500 mt-0.5">{activeContinent.lowestPoint.location}</p>
                  </div>

                  <div className="p-3">
                    <span className="text-slate-500 font-bold block mb-1">💧 Sông dài nhất:</span>
                    <strong className="text-slate-900 block text-sm font-extrabold">{activeContinent.longestRiver.name}</strong>
                    <span className="text-emerald-700 font-bold">{activeContinent.longestRiver.lengthKm.toLocaleString()} km</span>
                    <p className="text-[11px] text-slate-500 mt-0.5">{activeContinent.longestRiver.location}</p>
                  </div>

                  <div className="p-3">
                    <span className="text-slate-500 font-bold block mb-1">🏞️ Hồ lớn nhất:</span>
                    <strong className="text-slate-900 block text-sm font-extrabold">{activeContinent.largestLake.name}</strong>
                    <span className="text-indigo-700 font-bold">{activeContinent.largestLake.areaKm2.toLocaleString()} km²</span>
                    <p className="text-[11px] text-slate-500 mt-0.5">{activeContinent.largestLake.location}</p>
                  </div>
                </div>

                {/* Deep Content Grids */}
                <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left: Khí hậu & Địa hình */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-black text-base text-[#16332F] flex items-center gap-2 mb-2 pb-2 border-b border-slate-100">
                        <ThermometerSun className="w-5 h-5 text-amber-500" />
                        <span>Đặc điểm Khí hậu & Các đới khí hậu</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal mb-3">
                        {activeContinent.climateSummary}
                      </p>
                      <div className="space-y-1.5">
                        {activeContinent.climateZones.map((zone, zIdx) => (
                          <div key={zIdx} className="text-xs text-slate-800 flex items-start gap-2 bg-amber-50/60 p-2 rounded-lg border border-amber-200/50">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                            <span>{zone}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-black text-base text-[#16332F] flex items-center gap-2 mb-2 pb-2 border-b border-slate-100">
                        <Mountain className="w-5 h-5 text-emerald-600" />
                        <span>Các dạng Địa hình & Đới cảnh quan</span>
                      </h4>
                      <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {activeContinent.terrainTypes.map((t, tIdx) => (
                          <p key={tIdx} className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                            <strong>Khu vực {tIdx + 1}:</strong> {t}
                          </p>
                        ))}
                      </div>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {activeContinent.majorBiomes.map((biome, bIdx) => (
                          <span key={bIdx} className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-semibold">
                            🌱 {biome}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Kinh tế & Sự thật kỳ thú */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-black text-base text-[#16332F] flex items-center gap-2 mb-2 pb-2 border-b border-slate-100">
                        <TrendingUp className="w-5 h-5 text-indigo-600" />
                        <span>Bức tranh Dân cư & Kinh tế trọng điểm</span>
                      </h4>
                      <div className="p-3 bg-sky-50 rounded-xl border border-sky-200 text-xs text-sky-900 font-semibold mb-3">
                        👥 Mật độ dân số: {activeContinent.density}
                      </div>
                      <div className="space-y-2">
                        {activeContinent.keyEconomicFacts.map((fact, fIdx) => (
                          <div key={fIdx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 font-medium leading-relaxed flex items-start gap-2.5">
                            <span className="w-5 h-5 rounded-full bg-[#1677B8] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                              {fIdx + 1}
                            </span>
                            <span>{fact}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 text-left space-y-2.5">
                      <span className="text-xs font-black text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        Em có biết? Kỷ lục địa lí kinh ngạc:
                      </span>
                      {activeContinent.interestingFacts.map((inf, iIdx) => (
                        <p key={iIdx} className="text-xs sm:text-sm text-amber-950 font-medium leading-relaxed">
                          • {inf}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Comparison Matrix */
              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm overflow-x-auto text-left">
                <h3 className="text-xl font-black text-[#16332F] mb-4">
                  Bảng So Sánh Số Liệu Cốt Lõi 6 Châu Lục
                </h3>
                <table className="w-full text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                      <th className="p-3 text-left">Châu Lục</th>
                      <th className="p-3 text-left">Diện tích (km²)</th>
                      <th className="p-3 text-left">Dân số</th>
                      <th className="p-3 text-left">Đỉnh cao nhất</th>
                      <th className="p-3 text-left">Sông dài nhất</th>
                      <th className="p-3 text-left">Khí hậu nổi bật</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {CONTINENTS_DATA.map((c) => (
                      <tr key={c.id} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 font-extrabold text-[#16332F]">
                          {c.name} ({c.englishName})
                        </td>
                        <td className="p-3 font-semibold text-sky-700">{c.areaText.split(" ")[0]} km²</td>
                        <td className="p-3 font-semibold text-slate-800">{c.populationText.split(" ")[0]}</td>
                        <td className="p-3 text-slate-700">{c.highestPoint.name} ({c.highestPoint.altitudeMeters}m)</td>
                        <td className="p-3 text-slate-700">{c.longestRiver.name} ({c.longestRiver.lengthKm}km)</td>
                        <td className="p-3 text-slate-600 max-w-xs truncate">{c.climateSummary}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: TỔNG HỢP KIẾN THỨC ĐỊA LÍ LỚP 6 - 7 - 8 */}
        {/* ========================================================================= */}
        {activeSection === "curriculum" && (
          <div className="space-y-6">
            {/* Grade Tabs: 6, 7, 8 */}
            <div className="flex items-center gap-3 pb-2 border-b border-slate-200">
              {[
                { grade: 6 as const, label: "Địa lí Lớp 6", subtitle: "Trái Đất, Bản đồ, Khí quyển & Thủy quyển" },
                { grade: 7 as const, label: "Địa lí Lớp 7", subtitle: "Thiên nhiên & Con người các Châu lục" },
                { grade: 8 as const, label: "Địa lí Lớp 8", subtitle: "Địa lí Tự nhiên & Biển đảo Việt Nam" }
              ].map((g) => {
                const isActive = selectedGrade === g.grade;
                return (
                  <button
                    key={g.grade}
                    onClick={() => setSelectedGrade(g.grade)}
                    className={`px-5 py-3 rounded-2xl text-left border-2 transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#146B5B] text-white border-[#146B5B] shadow-sm font-extrabold"
                        : "bg-white text-slate-700 hover:bg-slate-50 border-slate-200"
                    }`}
                  >
                    <span className="text-base block font-black">{g.label}</span>
                    <span className={`text-[11px] block mt-0.5 ${isActive ? "text-emerald-100" : "text-slate-400"}`}>
                      {g.subtitle}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Main Topic Breakdown Card */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6 text-left">
              <div>
                <span className="text-xs font-bold text-[#146B5B] uppercase tracking-wider">
                  {activeSynthesis.chapterTitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-display text-[#16332F] mt-1">
                  {activeSynthesis.topicTitle}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed font-normal">
                  {activeSynthesis.summary}
                </p>
              </div>

              {/* Core numbers strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {activeSynthesis.coreDataPoints.map((dp, dIdx) => (
                  <div key={dIdx} className="p-3.5 rounded-2xl bg-[#E8F5EF]/70 border border-[#146B5B]/25">
                    <span className="text-xs text-slate-500 font-bold block">{dp.label}</span>
                    <strong className="text-lg font-black text-[#146B5B] block">{dp.value}</strong>
                    <span className="text-[11px] text-slate-600 mt-0.5 block">{dp.note}</span>
                  </div>
                ))}
              </div>

              {/* Key points bullet list */}
              <div className="space-y-3">
                <h4 className="font-black text-sm uppercase tracking-wider text-slate-700">
                  Hệ thống kiến thức trọng tâm thi học sinh giỏi & chuyên:
                </h4>
                <div className="space-y-2">
                  {activeSynthesis.keyPoints.map((pt, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 font-medium leading-relaxed flex items-start gap-2.5"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#146B5B] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        {pIdx + 1}
                      </span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mnemonics box */}
              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200/80 text-xs sm:text-sm text-amber-950 font-medium leading-relaxed">
                💡 <strong>Mẹo ghi nhớ nhanh độc quyền:</strong> {activeSynthesis.mnemonics}
              </div>

              {/* Interactive Practice Quiz */}
              <div className="pt-4 border-t border-slate-100 space-y-4">
                <h4 className="font-black text-base text-[#16332F] flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#146B5B]" />
                  <span>Câu hỏi củng cố kiến thức {activeSynthesis.gradeTitle}:</span>
                </h4>

                <div className="space-y-4">
                  {activeSynthesis.practiceQuestions.map((qItem, qIdx) => {
                    const qKey = `grade-${selectedGrade}-q-${qIdx}`;
                    const selected = userAnswers[qKey];
                    const isAnswered = selected !== undefined;
                    return (
                      <div key={qIdx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                        <div className="font-bold text-sm sm:text-base text-[#16332F]">
                          Câu {qIdx + 1}: {qItem.question}
                        </div>

                        <div className="grid grid-cols-1 gap-2">
                          {qItem.options.map((opt, oIdx) => {
                            let style = "bg-white border-slate-200 text-slate-700 hover:border-[#146B5B]";
                            if (isAnswered) {
                              if (oIdx === qItem.correctIndex) {
                                style = "bg-emerald-50 border-emerald-500 text-emerald-900 font-bold";
                              } else if (oIdx === selected) {
                                style = "bg-rose-50 border-rose-400 text-rose-900";
                              } else {
                                style = "bg-white border-slate-200 opacity-50";
                              }
                            }
                            return (
                              <button
                                key={oIdx}
                                disabled={isAnswered}
                                onClick={() => handleSelectQuizOption(qKey, oIdx, qItem.correctIndex)}
                                className={`w-full p-3 rounded-xl border text-xs sm:text-sm text-left cursor-pointer transition-all ${style}`}
                              >
                                {String.fromCharCode(65 + oIdx)}. {opt}
                              </button>
                            );
                          })}
                        </div>

                        {isAnswered && (
                          <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                            <strong>Lời giải chi tiết:</strong> {qItem.explanation}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
