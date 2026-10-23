import React, { useState } from "react";
import { TEXTBOOK_CHAPTERS, TextbookLesson, TextbookChapter } from "../data/textbookData";
import { 
  BookMarked, 
  BookOpen, 
  Clock, 
  HelpCircle, 
  CheckCircle2, 
  ChevronRight, 
  ChevronDown, 
  Search, 
  Sparkles, 
  Lightbulb, 
  Share2, 
  Bookmark,
  Layers,
  Award
} from "lucide-react";

interface TextbookLessonsProps {
  onEarnXp?: (points: number) => void;
}

export const TextbookLessons: React.FC<TextbookLessonsProps> = ({ onEarnXp }) => {
  const [selectedChapterId, setSelectedChapterId] = useState<string>(TEXTBOOK_CHAPTERS[0].id);
  const activeChapter = TEXTBOOK_CHAPTERS.find((c) => c.id === selectedChapterId) || TEXTBOOK_CHAPTERS[0];

  const [selectedLessonId, setSelectedLessonId] = useState<string>(activeChapter.lessons[0]?.id || "");
  const activeLesson: TextbookLesson = activeChapter.lessons.find((l) => l.id === selectedLessonId) 
    || activeChapter.lessons[0] 
    || TEXTBOOK_CHAPTERS[0].lessons[0];

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [revealedQuestions, setRevealedQuestions] = useState<Record<string, boolean>>({});
  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>({});

  const toggleAnswer = (questionId: string) => {
    setRevealedQuestions((prev) => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const handleCompleteLesson = (lessonId: string) => {
    if (!completedLessons[lessonId]) {
      setCompletedLessons((prev) => ({ ...prev, [lessonId]: true }));
      if (onEarnXp) {
        onEarnXp(30);
      }
    }
  };

  // Search filtering
  const allLessons = TEXTBOOK_CHAPTERS.flatMap((c) => c.lessons);
  const filteredLessons = searchQuery.trim()
    ? allLessons.filter(
        (l) =>
          l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          l.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
          l.chapterTitle.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  return (
    <section className="py-10 bg-[#F8FAF9] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F5EF] text-[#146B5B] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-2">
            <BookMarked className="w-4 h-4" />
            <span>Học liệu chuẩn hóa bộ Giáo dục & Đào tạo</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-black mb-2 shadow-2xs">
                <span>✨ Phiên bản chuẩn năm học 2026 - 2027</span>
                <span className="text-amber-500">•</span>
                <span>Xuất bản ngày 05/04/2026 (Bộ GD&ĐT)</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-[#16332F] tracking-tight">
                Bài Học Sách Giáo Khoa Địa Lí 9
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mt-2 max-w-3xl leading-relaxed">
                Hệ thống 4 chương và các bài học bám sát chương trình sách giáo khoa Địa lí 9 mới nhất năm học 2026-2027 (xuất bản 05/04/2026). Tích hợp hình ảnh thực tế, câu hỏi giữa bài, bài tập thực hành và câu hỏi củng cố có đáp án hướng dẫn chi tiết.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80 shrink-0">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm bài học, khái niệm..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#146B5B] focus:ring-1 focus:ring-[#146B5B] shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* If searching, display search results */}
        {filteredLessons ? (
          <div className="mb-8 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="font-extrabold text-sm text-slate-800 mb-4 flex items-center justify-between">
              <span>Kết quả tìm kiếm cho "{searchQuery}" ({filteredLessons.length} bài học):</span>
              <button
                onClick={() => setSearchQuery("")}
                className="text-xs text-[#146B5B] font-bold hover:underline"
              >
                Xóa tìm kiếm
              </button>
            </div>
            {filteredLessons.length === 0 ? (
              <div className="py-8 text-center text-sm text-slate-500">
                Không tìm thấy bài học nào phù hợp với từ khóa này.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredLessons.map((l) => (
                  <div
                    key={l.id}
                    onClick={() => {
                      setSelectedChapterId(l.chapterId);
                      setSelectedLessonId(l.id);
                      setSearchQuery("");
                    }}
                    className="p-4 rounded-xl border border-slate-200 hover:border-[#146B5B] hover:shadow-sm cursor-pointer transition-all bg-slate-50/50 flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-[11px] font-bold text-[#146B5B] mb-1">{l.chapterTitle}</div>
                      <h4 className="font-bold text-sm text-[#16332F] mb-1.5">{l.title}</h4>
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{l.summary}</p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-medium">
                      <span>⏱️ {l.readingTimeMinutes} phút đọc</span>
                      <span className="text-[#146B5B] font-bold flex items-center gap-1">
                        Xem bài học <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : null}

        {/* Chapter Tabs */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {TEXTBOOK_CHAPTERS.map((chap) => {
            const isSelected = selectedChapterId === chap.id;
            return (
              <button
                key={chap.id}
                onClick={() => {
                  setSelectedChapterId(chap.id);
                  if (chap.lessons.length > 0) {
                    setSelectedLessonId(chap.lessons[0].id);
                  }
                }}
                className={`px-4.5 py-3 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2.5 cursor-pointer border ${
                  isSelected
                    ? "bg-[#146B5B] text-white border-[#146B5B] shadow-sm font-black"
                    : "bg-white text-slate-700 hover:bg-slate-50 border-slate-200"
                }`}
              >
                <span className="text-base">{chap.icon}</span>
                <span>{chap.title}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                    isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {chap.lessons.length} bài
                </span>
              </button>
            );
          })}
        </div>

        {/* 12-Column Layout: Lesson Switcher & Active Lesson Viewer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Lesson Selector in Active Chapter (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs">
              <div className="font-extrabold text-xs uppercase tracking-wider text-slate-500 mb-3 px-1">
                Danh sách bài học trong chương ({activeChapter.lessons.length} bài)
              </div>
              <div className="space-y-2">
                {activeChapter.lessons.map((lesson) => {
                  const isCurrent = lesson.id === activeLesson?.id;
                  const isDone = completedLessons[lesson.id];
                  return (
                    <div
                      key={lesson.id}
                      onClick={() => setSelectedLessonId(lesson.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                        isCurrent
                          ? "bg-[#E8F5EF] border-[#146B5B] shadow-2xs"
                          : "bg-white border-slate-200/90 hover:border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      <img
                        src={lesson.coverImage}
                        alt={lesson.title}
                        className="w-14 h-14 rounded-lg object-cover shrink-0 border border-slate-200"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1 mb-0.5">
                          <span className="text-[10px] uppercase font-extrabold text-[#146B5B]">
                            Bài {lesson.lessonNumber}
                          </span>
                          {isDone && (
                            <span className="flex items-center gap-0.5 text-[10px] text-emerald-700 font-bold bg-emerald-100 px-1.5 py-0.5 rounded">
                              ✓ Đã học
                            </span>
                          )}
                        </div>
                        <h4
                          className={`text-xs sm:text-sm font-bold line-clamp-2 leading-snug ${
                            isCurrent ? "text-[#146B5B] font-black" : "text-[#16332F]"
                          }`}
                        >
                          {lesson.title}
                        </h4>
                        <div className="mt-1 flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                          <span>⏱️ {lesson.readingTimeMinutes} phút</span>
                          <span>•</span>
                          <span>{lesson.sgkQuestions.length} câu hỏi SGK</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick SGK tips helper box */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50/60 rounded-2xl border border-amber-200 p-4">
              <div className="flex items-center gap-2 text-xs font-black text-amber-900 mb-1.5">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                <span>Bí quyết học SGK đạt điểm 9-10</span>
              </div>
              <p className="text-xs text-amber-950/80 leading-relaxed font-normal">
                Đọc kỹ từng đề mục, gạch chân các từ khóa địa lí, liên hệ với bản đồ Atlat tương ứng và tự trả lời các câu hỏi in nghiêng giữa bài trước khi đối chiếu đáp án mẫu.
              </p>
            </div>
          </div>

          {/* Right Column: Full Lesson Reader View (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {activeLesson && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                {/* Lesson Hero Banner */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <img
                    src={activeLesson.coverImage}
                    alt={activeLesson.title}
                    className="w-full h-full object-cover brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent flex flex-col justify-end p-6 sm:p-8">
                    <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-amber-300 mb-2">
                      <span>{activeLesson.grade}</span>
                      <span>•</span>
                      <span>{activeLesson.chapterTitle}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black font-display text-white leading-tight">
                      {activeLesson.title}
                    </h3>
                    <div className="flex items-center gap-4 text-xs font-bold text-slate-300 mt-3">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Thời lượng đọc: {activeLesson.readingTimeMinutes} phút</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5" />
                        <span>{activeLesson.sections.length} phần nội dung chính</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Lesson Brief / Summary Box */}
                <div className="p-6 sm:p-7 border-b border-slate-100 bg-[#E8F5EF]/40">
                  <div className="text-xs uppercase font-extrabold text-[#146B5B] tracking-wider mb-1.5">
                    Tóm tắt bài học chuẩn kiến thức
                  </div>
                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                    {activeLesson.summary}
                  </p>
                </div>

                {/* Lesson Sections (Nội dung chi tiết từng mục) */}
                <div className="p-6 sm:p-7 space-y-8">
                  {activeLesson.sections.map((sec, sIdx) => (
                    <div key={sIdx} className="space-y-4">
                      <h4 className="text-lg sm:text-xl font-black font-display text-[#16332F] pb-2 border-b border-slate-100 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-[#146B5B] text-white flex items-center justify-center text-xs font-mono font-bold shrink-0">
                          {sIdx + 1}
                        </span>
                        <span>{sec.title}</span>
                      </h4>

                      {/* Content Bullets */}
                      <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed pl-2">
                        {sec.content.map((p, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#146B5B] mt-2 shrink-0" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Illustrative Image if available */}
                      {sec.illustration && (
                        <div className="my-4 rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
                          <img
                            src={sec.illustration.url}
                            alt={sec.illustration.caption}
                            className="w-full h-56 sm:h-64 object-cover"
                          />
                          <div className="p-2.5 text-center text-xs text-slate-600 font-medium italic bg-slate-50 border-t border-slate-100">
                            📷 {sec.illustration.caption}
                          </div>
                        </div>
                      )}

                      {/* Key takeaway box */}
                      <div className="p-3.5 rounded-xl bg-[#E8F5EF] border border-[#146B5B]/25 text-xs sm:text-sm text-[#146B5B] font-bold flex items-start gap-2">
                        <Sparkles className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                        <div>
                          <span className="font-extrabold uppercase mr-1">Ghi nhớ trọng tâm:</span>
                          <span className="font-medium text-slate-800">{sec.keyTakeaway}</span>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* "Em có biết?" Box */}
                  {activeLesson.didYouKnow && (
                    <div className="p-5 rounded-2xl bg-gradient-to-r from-sky-50 to-indigo-50 border border-sky-200 space-y-2">
                      <div className="flex items-center gap-2 font-black text-xs uppercase tracking-wider text-[#1677B8]">
                        <span>💡</span>
                        <span>Em có biết? (Mở rộng kiến thức địa lí)</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                        {activeLesson.didYouKnow}
                      </p>
                    </div>
                  )}

                  {/* Section: Hướng dẫn trả lời câu hỏi SGK */}
                  <div className="pt-6 border-t border-slate-200 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-base sm:text-lg font-black text-[#16332F] flex items-center gap-2">
                          <HelpCircle className="w-5 h-5 text-[#146B5B]" />
                          <span>Hướng Dẫn Giải Câu Hỏi Sách Giáo Khoa</span>
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Bao gồm câu hỏi thảo luận giữa bài và câu hỏi củng cố cuối bài học
                        </p>
                      </div>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-50 text-amber-900 border border-amber-200">
                        {activeLesson.sgkQuestions.length} câu hỏi
                      </span>
                    </div>

                    <div className="space-y-3">
                      {activeLesson.sgkQuestions.map((q, qIdx) => {
                        const isRevealed = revealedQuestions[q.id];
                        return (
                          <div
                            key={q.id}
                            className="rounded-xl border border-slate-200 bg-slate-50/70 overflow-hidden"
                          >
                            <div
                              onClick={() => toggleAnswer(q.id)}
                              className="p-4 flex items-start justify-between gap-3 cursor-pointer hover:bg-slate-100/70 transition-colors"
                            >
                              <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                  <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200">
                                    {q.type === "in-lesson" ? "Câu hỏi giữa bài" : "Câu hỏi cuối bài"}
                                  </span>
                                  {q.pageRef && (
                                    <span className="text-[11px] text-slate-500 font-medium">
                                      {q.pageRef}
                                    </span>
                                  )}
                                </div>
                                <h5 className="font-extrabold text-xs sm:text-sm text-[#16332F] pt-0.5">
                                  {q.question}
                                </h5>
                              </div>
                              <button className="shrink-0 p-1 text-slate-400 hover:text-slate-600">
                                {isRevealed ? (
                                  <ChevronDown className="w-5 h-5 text-[#146B5B]" />
                                ) : (
                                  <ChevronRight className="w-5 h-5" />
                                )}
                              </button>
                            </div>

                            {/* Collapsible Answer */}
                            {isRevealed && (
                              <div className="p-4 pt-1 border-t border-slate-200/80 bg-white space-y-2">
                                <div className="text-[11px] font-bold text-[#146B5B] uppercase tracking-wider flex items-center gap-1.5">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                  <span>Hướng dẫn trả lời chuẩn SGK:</span>
                                </div>
                                <div className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal bg-[#E8F5EF]/30 p-3 rounded-lg border border-[#146B5B]/15">
                                  {q.guidedAnswer}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Lesson Complete Button & Reward */}
                  <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-5 rounded-2xl">
                    <div className="space-y-1 text-center sm:text-left">
                      <div className="font-black text-sm text-[#16332F] flex items-center justify-center sm:justify-start gap-1.5">
                        <Award className="w-4 h-4 text-amber-500" />
                        <span>Hoàn thành bài học sách giáo khoa</span>
                      </div>
                      <p className="text-xs text-slate-500">
                        Nhấp để ghi nhận hoàn thành bài và nhận +30 XP kinh nghiệm!
                      </p>
                    </div>

                    <button
                      onClick={() => handleCompleteLesson(activeLesson.id)}
                      disabled={completedLessons[activeLesson.id]}
                      className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-xs ${
                        completedLessons[activeLesson.id]
                          ? "bg-emerald-600 text-white cursor-default"
                          : "bg-[#146B5B] hover:bg-[#0f5548] text-white active:scale-95"
                      }`}
                    >
                      {completedLessons[activeLesson.id] ? (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Đã hoàn thành (+30 XP)</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 text-[#FFF3B0]" />
                          <span>Đánh dấu đã học xong</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
