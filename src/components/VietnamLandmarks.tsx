import React, { useState, useMemo } from "react";
import {
  VIETNAM_LANDMARKS,
  LANDMARK_STATS,
  LANDMARK_QUIZ_QUESTIONS,
  VietnamLandmark,
  LandmarkRegion,
} from "../data/landmarksData";
import {
  Landmark,
  MapPin,
  Award,
  Compass,
  Calendar,
  Sparkles,
  CheckCircle2,
  Search,
  BookOpen,
  X,
  ChevronRight,
  Globe,
  Mountain,
} from "lucide-react";

interface VietnamLandmarksProps {
  onEarnXp?: (points: number) => void;
}

type FilterMode = "all" | "unesco" | LandmarkRegion;

export const VietnamLandmarks: React.FC<VietnamLandmarksProps> = ({
  onEarnXp,
}) => {
  const [activeSubView, setActiveSubView] = useState<"explore" | "unesco" | "quiz">("explore");
  const [regionFilter, setRegionFilter] = useState<FilterMode>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedLandmark, setSelectedLandmark] = useState<VietnamLandmark | null>(
    VIETNAM_LANDMARKS[0]
  );
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});

  const filteredLandmarks = useMemo(() => {
    return VIETNAM_LANDMARKS.filter((lm) => {
      if (activeSubView === "unesco" && !lm.isUnescoWorldHeritage) return false;
      if (regionFilter === "unesco" && !lm.isUnescoWorldHeritage) return false;
      if (
        (regionFilter === "north" ||
          regionFilter === "central" ||
          regionFilter === "south") &&
        lm.region !== regionFilter
      ) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.trim().toLowerCase();
        return (
          lm.name.toLowerCase().includes(q) ||
          lm.province.toLowerCase().includes(q) ||
          lm.tagline.toLowerCase().includes(q) ||
          lm.unescoCategory.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [activeSubView, regionFilter, searchQuery]);

  const unescoLandmarks = useMemo(
    () => VIETNAM_LANDMARKS.filter((lm) => lm.isUnescoWorldHeritage),
    []
  );

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  const handleSelectQuiz = (qId: string, optIdx: number, correctIdx: number) => {
    if (quizAnswers[qId] !== undefined) return;
    setQuizAnswers((prev) => ({ ...prev, [qId]: optIdx }));
    if (optIdx === correctIdx && onEarnXp) {
      onEarnXp(20);
    }
  };

  const correctQuizCount = LANDMARK_QUIZ_QUESTIONS.filter(
    (q) => quizAnswers[q.id] === q.correctIndex
  ).length;

  return (
    <section className="py-10 bg-[#F8FAF9] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-bold text-[#146B5B] uppercase tracking-wider mb-2 flex items-center gap-2">
              <Landmark className="w-4 h-4" />
              <span>Hành trình Di sản & Kỳ quan Việt Nam</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-[#16332F] tracking-tight">
              Danh Lam Thắng Cảnh Ở Việt Nam
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 leading-relaxed">
              Khám phá những địa danh nổi tiếng từ Bắc chí Nam, các Di sản Văn hóa & Thiên nhiên Thế giới được UNESCO công nhận cùng những điểm đến không thể bỏ qua khi du khách đặt chân tới Việt Nam.
            </p>
          </div>

          {/* Sub-view Switcher */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white p-1.5 rounded-2xl border border-slate-200 shrink-0">
            <button
              type="button"
              onClick={() => {
                setActiveSubView("explore");
                setRegionFilter("all");
              }}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activeSubView === "explore"
                  ? "bg-[#146B5B] text-white"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              Khám phá 12 Danh thắng
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveSubView("unesco");
                setRegionFilter("all");
              }}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                activeSubView === "unesco"
                  ? "bg-amber-700 text-white"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>8 Di sản UNESCO</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveSubView("quiz")}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activeSubView === "quiz"
                  ? "bg-[#1677B8] text-white"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              Đố vui Di sản (+XP)
            </button>
          </div>
        </div>

        {/* 4 Summary Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {LANDMARK_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col justify-between"
            >
              <span className="text-xs font-bold text-slate-500">{stat.label}</span>
              <strong className="text-2xl font-black text-[#16332F] my-1.5 font-display">
                {stat.value}
              </strong>
              <span className="text-xs text-slate-600 leading-relaxed">{stat.note}</span>
            </div>
          ))}
        </div>

        {/* ===================================================================== */}
        {/* EXPLORE & UNESCO VIEWS */}
        {/* ===================================================================== */}
        {activeSubView !== "quiz" && (
          <div className="space-y-8">
            {/* Editorial Spotlight Card for Currently Selected Landmark */}
            {selectedLandmark && (
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Left: Full-bleed Photograph */}
                  <div className="lg:col-span-6 relative min-h-[280px] sm:min-h-[380px] bg-slate-900 overflow-hidden">
                    {!failedImages[selectedLandmark.id] ? (
                      <img
                        src={selectedLandmark.image}
                        alt={selectedLandmark.name}
                        referrerPolicy="no-referrer"
                        onError={() => handleImageError(selectedLandmark.id)}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div
                        className={`w-full h-full bg-gradient-to-br ${selectedLandmark.fallbackGradient} flex flex-col items-center justify-center p-8 text-white/90 text-center`}
                      >
                        <Mountain className="w-12 h-12 mb-3 opacity-80" />
                        <span className="font-display font-black text-xl">
                          {selectedLandmark.name}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
                        <span
                          className={`px-2.5 py-1 rounded-lg ${
                            selectedLandmark.isUnescoWorldHeritage
                              ? "bg-amber-600 text-white"
                              : "bg-[#146B5B] text-white"
                          }`}
                        >
                          {selectedLandmark.unescoCategory}
                          {selectedLandmark.unescoYear ? ` · ${selectedLandmark.unescoYear}` : ""}
                        </span>
                        <span className="px-2.5 py-1 rounded-lg bg-slate-900/75 backdrop-blur-xs text-slate-100 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-emerald-300" />
                          <span>{selectedLandmark.province}</span>
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black font-display leading-tight">
                        {selectedLandmark.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-200">
                        {selectedLandmark.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Right: Curated Details */}
                  <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-5">
                    <div className="space-y-4">
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        {selectedLandmark.summary}
                      </p>

                      {/* Key Characteristics */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#146B5B] flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Đặc điểm địa lí & giá trị nổi bật</span>
                        </h4>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                          {selectedLandmark.highlights.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 leading-relaxed">
                              <span className="font-bold text-[#146B5B] mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Must-Experience Box */}
                      <div className="p-4 rounded-2xl bg-[#E8F5EF]/70 border border-[#146B5B]/20 space-y-2">
                        <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#16332F] flex items-center gap-1.5">
                          <Compass className="w-3.5 h-3.5 text-[#146B5B]" />
                          <span>Trải nghiệm du khách không thể bỏ qua</span>
                        </h4>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-slate-800">
                          {selectedLandmark.mustExperience.map((exp, idx) => (
                            <li key={idx} className="flex items-start gap-2 leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-[#146B5B] shrink-0 mt-0.5" />
                              <span>{exp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Season & Curriculum Link Footer */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100 text-xs">
                      <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 space-y-0.5">
                        <div className="font-extrabold text-amber-900 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Thời điểm lý tưởng</span>
                        </div>
                        <p className="text-amber-950/90 leading-relaxed">
                          {selectedLandmark.bestSeason}
                        </p>
                      </div>
                      <div className="p-3 rounded-xl bg-sky-50/70 border border-sky-200/80 space-y-0.5">
                        <div className="font-extrabold text-sky-900 flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Góc liên hệ Địa lí 9</span>
                        </div>
                        <p className="text-sky-950/90 leading-relaxed">
                          {selectedLandmark.geographyNote}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* UNESCO Summary Banner when viewing UNESCO tab */}
            {activeSubView === "unesco" && (
              <div className="bg-white rounded-2xl border border-amber-200 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-[#16332F]">
                      Hệ thống 8 Di sản Văn hóa & Thiên nhiên Thế giới tại Việt Nam ({unescoLandmarks.length} di sản)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      Nhấn vào bất kỳ di sản nào bên dưới để xem chi tiết năm công nhận UNESCO, kiến trúc – địa chất nổi bật và vị trí trên bản đồ 34 tỉnh, thành phố.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Filter & Search Bar */}
            {activeSubView === "explore" && (
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  {[
                    { id: "all", label: "Tất cả (12)" },
                    { id: "unesco", label: "Di sản Thế giới UNESCO (8)" },
                    { id: "north", label: "Miền Bắc" },
                    { id: "central", label: "Miền Trung" },
                    { id: "south", label: "Miền Nam & Biển đảo" },
                  ].map((tab) => {
                    const isSel = regionFilter === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setRegionFilter(tab.id as FilterMode)}
                        className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                          isSel
                            ? "bg-[#146B5B] text-white border-[#146B5B]"
                            : "bg-white text-slate-700 border-slate-200 hover:border-[#146B5B]/50"
                        }`}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>

                <div className="relative w-full md:w-72">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm Hạ Long, Huế, Phú Quốc..."
                    className="w-full pl-9 pr-8 py-2 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-[#16332F] focus:outline-none focus:border-[#146B5B]"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 cursor-pointer"
                      aria-label="Xóa tìm kiếm"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Landmarks Gallery Grid */}
            {filteredLandmarks.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center space-y-2">
                <p className="text-sm font-bold text-slate-700">
                  Không tìm thấy danh lam thắng cảnh phù hợp với từ khóa "{searchQuery}".
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setRegionFilter("all");
                  }}
                  className="text-xs font-bold text-[#146B5B] hover:underline cursor-pointer"
                >
                  Hiển thị lại tất cả 12 địa danh
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLandmarks.map((lm) => {
                  const isActive = selectedLandmark?.id === lm.id;
                  return (
                    <article
                      key={lm.id}
                      onClick={() => {
                        setSelectedLandmark(lm);
                        window.scrollTo({ top: 180, behavior: "smooth" });
                      }}
                      className={`bg-white rounded-2xl border overflow-hidden cursor-pointer transition-all flex flex-col justify-between group ${
                        isActive
                          ? "border-[#146B5B] ring-2 ring-[#146B5B]/20 shadow-md"
                          : "border-slate-200 hover:border-[#146B5B]/60 hover:shadow-sm"
                      }`}
                    >
                      <div>
                        {/* Card Photo */}
                        <div className="relative aspect-16/10 bg-slate-900 overflow-hidden">
                          {!failedImages[lm.id] ? (
                            <img
                              src={lm.image}
                              alt={lm.name}
                              referrerPolicy="no-referrer"
                              onError={() => handleImageError(lm.id)}
                              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                            />
                          ) : (
                            <div
                              className={`w-full h-full bg-gradient-to-br ${lm.fallbackGradient} flex items-center justify-center text-white/80`}
                            >
                              <Mountain className="w-8 h-8" />
                            </div>
                          )}
                          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                            <span
                              className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold shadow-xs ${
                                lm.isUnescoWorldHeritage
                                  ? "bg-amber-600 text-white"
                                  : "bg-slate-900/80 text-white backdrop-blur-xs"
                              }`}
                            >
                              {lm.isUnescoWorldHeritage
                                ? `UNESCO ${lm.unescoYear?.split(" · ")[0] || ""}`
                                : lm.regionLabel}
                            </span>
                          </div>
                        </div>

                        {/* Card Copy */}
                        <div className="p-5 space-y-2.5">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-[#146B5B]">
                            <MapPin className="w-3.5 h-3.5 shrink-0" />
                            <span>{lm.province}</span>
                          </div>
                          <h3 className="text-lg font-black font-display text-[#16332F] leading-snug">
                            {lm.name}
                          </h3>
                          <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                            {lm.summary}
                          </p>
                        </div>
                      </div>

                      <div className="px-5 py-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-500">
                          {lm.unescoCategory}
                        </span>
                        <span className="font-extrabold text-[#146B5B] flex items-center gap-1">
                          <span>{isActive ? "Đang xem" : "Xem chi tiết"}</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* ===================================================================== */}
        {/* QUIZ VIEW: ĐỐ VUI DI SẢN & DANH THẮNG */}
        {/* ===================================================================== */}
        {activeSubView === "quiz" && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-xl sm:text-2xl font-black font-display text-[#16332F]">
                  Thử tài Nhận diện Di sản UNESCO & Danh thắng Việt Nam
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Trả lời đúng mỗi câu hỏi để nhận +20 XP và ghi nhớ vị trí các kỳ quan trên bản đồ Việt Nam mới.
                </p>
              </div>
              <div className="text-xs font-extrabold text-[#146B5B] tabular-nums">
                Đúng: {correctQuizCount}/{LANDMARK_QUIZ_QUESTIONS.length} câu
              </div>
            </div>

            <div className="space-y-5">
              {LANDMARK_QUIZ_QUESTIONS.map((q, qIdx) => {
                const selected = quizAnswers[q.id];
                const isAnswered = selected !== undefined;
                const isRight = selected === q.correctIndex;
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
                            type="button"
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
                          isRight
                            ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                            : "bg-white border-slate-200 text-slate-700"
                        }`}
                      >
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isRight ? "text-emerald-600" : "text-slate-500"
                          }`}
                        />
                        <div className="space-y-0.5">
                          {isRight && (
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
      </div>
    </section>
  );
};
