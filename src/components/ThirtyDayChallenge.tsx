import React, { useState } from "react";
import { THIRTY_DAYS_STUDY_DATA, DayStudyPlan } from "../data/thirtyDaysData";
import { 
  Flame, 
  Award, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  BookOpen, 
  Map, 
  BarChart3, 
  BrainCircuit, 
  FileCheck,
  ChevronRight,
  ChevronDown,
  Sparkles,
  HelpCircle,
  Eye,
  EyeOff,
  RotateCcw,
  AlertCircle
} from "lucide-react";

interface ThirtyDayChallengeProps {
  streakDays: number;
  xp: number;
  onEarnXp?: (points: number) => void;
  onDayComplete?: () => void;
}

export const ThirtyDayChallenge: React.FC<ThirtyDayChallengeProps> = ({
  streakDays,
  xp,
  onEarnXp,
  onDayComplete,
}) => {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [completedDays, setCompletedDays] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const [completedDailyTasks, setCompletedDailyTasks] = useState<Record<string, boolean>>({});

  // Thinking questions answer reveal toggles
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});

  // Interactive Mini Test state for the active day
  const [showMiniTestModal, setShowMiniTestModal] = useState<boolean>(false);
  const [miniTestAnswers, setMiniTestAnswers] = useState<Record<string, number>>({});
  const [miniTestSubmitted, setMiniTestSubmitted] = useState<boolean>(false);

  const dayPlan: DayStudyPlan =
    THIRTY_DAYS_STUDY_DATA.find((d) => d.dayNumber === selectedDay) || THIRTY_DAYS_STUDY_DATA[0];

  const isDayCompleted = completedDays.includes(selectedDay);

  const toggleAnswerReveal = (questionKey: string) => {
    setRevealedAnswers((prev) => ({ ...prev, [questionKey]: !prev[questionKey] }));
  };

  const toggleTask = (taskId: string) => {
    setCompletedDailyTasks((prev) => {
      const next = { ...prev, [taskId]: !prev[taskId] };
      if (next[taskId] && onEarnXp) {
        onEarnXp(10);
      }
      return next;
    });
  };

  const handleCompleteFullDay = () => {
    if (!completedDays.includes(selectedDay)) {
      setCompletedDays((prev) => [...prev, selectedDay]);
      if (onEarnXp) {
        onEarnXp(50);
      }
      if (onDayComplete) {
        onDayComplete();
      }
    }
  };

  const handleMiniTestOptionSelect = (qId: string, optIdx: number) => {
    if (miniTestSubmitted) return;
    setMiniTestAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  };

  const handleSubmitMiniTest = () => {
    setMiniTestSubmitted(true);
    let correctCount = 0;
    dayPlan.miniTest.questions.forEach((q) => {
      if (miniTestAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });

    if (onEarnXp) {
      onEarnXp(correctCount * 15);
    }
    setCompletedDailyTasks((prev) => ({ ...prev, [`d${selectedDay}_minitest`]: true }));
  };

  const handleResetMiniTest = () => {
    setMiniTestAnswers({});
    setMiniTestSubmitted(false);
  };

  return (
    <section className="py-10 bg-[#F8FAF9] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-900 text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-2 border border-amber-200">
              <Flame className="w-4 h-4 text-amber-600 fill-amber-500" />
              <span>Chương trình rèn luyện 30 ngày kỷ luật</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-[#16332F] tracking-tight">
              Thử Thách 30 Ngày Chinh Phục Điểm 10 Địa Lí 9
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 max-w-2xl leading-relaxed font-normal">
              Mỗi ngày đúng 5 nhiệm vụ: 1 bài học ngắn, 1 bài Atlat, 1 bài biểu đồ, 2 câu hỏi tư duy có lời giải chi tiết và 1 bài Mini Test câu hỏi ngắn về Địa lí Việt Nam.
            </p>
          </div>

          {/* Streak & XP Counters */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <Flame className="w-5 h-5 text-amber-500 fill-amber-500 animate-pulse" />
              <div>
                <div className="text-[11px] font-bold text-slate-400 uppercase">Chuỗi ngày học</div>
                <div className="text-sm font-black text-slate-800">{streakDays} ngày liên tục</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <Award className="w-5 h-5 text-[#146B5B]" />
              <div>
                <div className="text-[11px] font-bold text-slate-400 uppercase">Kinh nghiệm</div>
                <div className="text-sm font-black text-[#146B5B]">{xp} XP</div>
              </div>
            </div>
          </div>
        </div>

        {/* 30-Day Grid Timeline */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <Calendar className="w-4 h-4 text-[#146B5B]" />
              <span>Lộ trình 30 ngày (Đã hoàn thành: {completedDays.length}/30 ngày)</span>
            </div>
            <span className="text-xs font-black text-[#146B5B] bg-[#E8F5EF] px-2.5 py-1 rounded-md">
              {Math.round((completedDays.length / 30) * 100)}% Tiến độ
            </span>
          </div>

          <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-10 lg:grid-cols-15 gap-2">
            {THIRTY_DAYS_STUDY_DATA.map((plan) => {
              const dNum = plan.dayNumber;
              const isSelected = selectedDay === dNum;
              const isDone = completedDays.includes(dNum);

              let style = "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100";
              if (isSelected) {
                style = "bg-[#146B5B] text-white border-[#146B5B] ring-2 ring-[#146B5B]/30 font-black shadow-xs scale-105";
              } else if (isDone) {
                style = "bg-emerald-50 text-emerald-800 border-emerald-300 font-bold";
              }

              return (
                <button
                  key={dNum}
                  onClick={() => {
                    setSelectedDay(dNum);
                    setShowMiniTestModal(false);
                    setMiniTestAnswers({});
                    setMiniTestSubmitted(false);
                  }}
                  className={`h-11 rounded-xl border flex flex-col items-center justify-center text-xs transition-all cursor-pointer relative ${style}`}
                >
                  <span className="text-[10px] leading-none opacity-70">N</span>
                  <span className="font-black text-xs leading-none mt-0.5">{dNum}</span>
                  {isDone && !isSelected && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Day Main Hub */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          {/* Day Title & Stage Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase bg-[#E8F5EF] text-[#146B5B] border border-[#146B5B]/20">
                  Chặng {dayPlan.stage}: {dayPlan.stage === 1 ? "Tự Nhiên" : dayPlan.stage === 2 ? "Dân Cư" : dayPlan.stage === 3 ? "Các Ngành Kinh Tế" : dayPlan.stage === 4 ? "Các Vùng Kinh Tế" : "Luyện Đề Đỉnh Cao"}
                </span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  +80 XP thưởng ngày
                </span>
              </div>
              <h3 className="text-2xl font-black font-display text-[#16332F]">
                {dayPlan.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                Trọng tâm: {dayPlan.focus}
              </p>
            </div>

            <button
              onClick={handleCompleteFullDay}
              className={`px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
                isDayCompleted
                  ? "bg-emerald-100 text-emerald-800 cursor-default"
                  : "bg-[#146B5B] text-white hover:bg-[#0f5548] active:scale-95 shadow-xs"
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isDayCompleted ? "Đã hoàn thành ngày này ✓" : "Đánh dấu hoàn thành (+50 XP)"}</span>
            </button>
          </div>

          {/* 3 Core Practice Tasks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 1. 📖 Bài học ngắn */}
            <div 
              onClick={() => toggleTask(`d${selectedDay}_lesson`)}
              className={`p-4 rounded-xl border transition-all cursor-pointer space-y-2 ${
                completedDailyTasks[`d${selectedDay}_lesson`]
                  ? "bg-emerald-50/60 border-emerald-300"
                  : "bg-slate-50 border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-600 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#146B5B]" />
                  <span>1. Bài học ngắn</span>
                </span>
                <span className="text-xs">{completedDailyTasks[`d${selectedDay}_lesson`] ? "✅" : "⭕"}</span>
              </div>
              <p className="text-xs font-medium text-slate-800 leading-relaxed">
                {dayPlan.lessonTask}
              </p>
            </div>

            {/* 2. 🗺️ Bài Atlat */}
            <div 
              onClick={() => toggleTask(`d${selectedDay}_atlat`)}
              className={`p-4 rounded-xl border transition-all cursor-pointer space-y-2 ${
                completedDailyTasks[`d${selectedDay}_atlat`]
                  ? "bg-emerald-50/60 border-emerald-300"
                  : "bg-slate-50 border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-600 flex items-center gap-1.5">
                  <Map className="w-3.5 h-3.5 text-[#1677B8]" />
                  <span>2. Thực hành Atlat</span>
                </span>
                <span className="text-xs">{completedDailyTasks[`d${selectedDay}_atlat`] ? "✅" : "⭕"}</span>
              </div>
              <p className="text-xs font-medium text-slate-800 leading-relaxed">
                {dayPlan.atlatTask}
              </p>
            </div>

            {/* 3. 📊 Bài biểu đồ */}
            <div 
              onClick={() => toggleTask(`d${selectedDay}_chart`)}
              className={`p-4 rounded-xl border transition-all cursor-pointer space-y-2 ${
                completedDailyTasks[`d${selectedDay}_chart`]
                  ? "bg-emerald-50/60 border-emerald-300"
                  : "bg-slate-50 border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-600 flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5 text-amber-600" />
                  <span>3. Thực hành biểu đồ</span>
                </span>
                <span className="text-xs">{completedDailyTasks[`d${selectedDay}_chart`] ? "✅" : "⭕"}</span>
              </div>
              <p className="text-xs font-medium text-slate-800 leading-relaxed">
                {dayPlan.chartTask}
              </p>
            </div>
          </div>

          {/* 4. 🧠 2 CÂU HỎI TƯ DUY TRONG NGÀY (CÓ CÂU TRẢ LỜI CHI TIẾT) */}
          <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/60 border-2 border-amber-200/80 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-black text-amber-950 flex items-center gap-1.5 uppercase tracking-wide">
                <BrainCircuit className="w-4 h-4 text-amber-700" />
                <span>4. 2 Câu hỏi tư duy trong ngày (Chuẩn 60 câu tư duy 30 ngày):</span>
              </span>
              <span className="text-[11px] font-bold text-amber-800 bg-amber-100/80 px-2.5 py-0.5 rounded-full border border-amber-300">
                Logic Nhân - Quả & Bản chất địa lí
              </span>
            </div>

            <div className="space-y-3">
              {dayPlan.thinkingQuestions.map((item, qIdx) => {
                const qKey = `d${selectedDay}_think_${qIdx}`;
                const isRevealed = revealedAnswers[qKey];
                return (
                  <div
                    key={qIdx}
                    className="p-4 rounded-xl bg-white border border-amber-200/90 shadow-2xs space-y-2"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          {qIdx + 1}
                        </span>
                        <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 leading-snug">
                          {item.question}
                        </h4>
                      </div>
                      <button
                        onClick={() => toggleAnswerReveal(qKey)}
                        className="px-2.5 py-1 rounded-lg text-xs font-bold text-amber-900 bg-amber-100/70 hover:bg-amber-200/80 cursor-pointer flex items-center gap-1 shrink-0"
                      >
                        {isRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        <span>{isRevealed ? "Ẩn lời giải" : "Xem câu trả lời"}</span>
                      </button>
                    </div>

                    {isRevealed && (
                      <div className="mt-2 p-3.5 rounded-xl bg-amber-50/80 border border-amber-300/80 text-xs text-slate-800 leading-relaxed space-y-1 animate-fadeIn">
                        <div className="text-[11px] font-black uppercase text-amber-900 flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                          <span>Hướng dẫn tư duy & Câu trả lời chuẩn:</span>
                        </div>
                        <p className="font-normal text-slate-800 pt-0.5">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 5. 📝 MINI TEST 30 NGÀY KIỂM TRA NGẮN ĐỊA LÍ VIỆT NAM */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#E8F5EF]/60 border-2 border-[#146B5B]/30 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-[#146B5B]" />
                <div>
                  <h4 className="text-sm font-black text-[#146B5B] uppercase tracking-wide">
                    5. {dayPlan.miniTest.testTitle} ({dayPlan.miniTest.questions.length} câu hỏi ngắn)
                  </h4>
                  <p className="text-xs text-slate-600">
                    Bài kiểm tra ngắn tương ứng ngày {selectedDay} (Đầy đủ 30 bài test cho 30 ngày)
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowMiniTestModal(!showMiniTestModal)}
                className="px-4 py-2 rounded-xl bg-[#146B5B] hover:bg-[#0f5548] text-white text-xs font-black cursor-pointer shadow-xs flex items-center gap-1.5 self-start sm:self-auto"
              >
                <span>{showMiniTestModal ? "Thu gọn Mini Test" : completedDailyTasks[`d${selectedDay}_minitest`] ? "Làm lại Mini Test" : "Làm Mini Test ngay"}</span>
                {showMiniTestModal ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </button>
            </div>

            {/* Expanded Mini Test Questions Board */}
            {showMiniTestModal && (
              <div className="mt-4 pt-4 border-t border-[#146B5B]/20 space-y-4 animate-fadeIn">
                <div className="space-y-3">
                  {dayPlan.miniTest.questions.map((q, qIdx) => {
                    const isSelected = miniTestAnswers[q.id] !== undefined;
                    const selectedOpt = miniTestAnswers[q.id];
                    const isCorrect = selectedOpt === q.correctAnswer;

                    return (
                      <div
                        key={q.id}
                        className="p-4 rounded-xl bg-white border border-slate-200 space-y-2.5"
                      >
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-xs text-[#146B5B] bg-[#E8F5EF] px-2 py-0.5 rounded">
                            Câu {qIdx + 1}
                          </span>
                          <h5 className="font-extrabold text-xs sm:text-sm text-slate-900 leading-snug">
                            {q.question}
                          </h5>
                        </div>

                        {/* Options */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                          {q.options.map((opt, oIdx) => {
                            let optStyle = "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100";
                            if (miniTestSubmitted) {
                              if (oIdx === q.correctAnswer) {
                                optStyle = "bg-emerald-100 border-emerald-500 text-emerald-950 font-black";
                              } else if (selectedOpt === oIdx) {
                                optStyle = "bg-rose-100 border-rose-500 text-rose-950 font-bold";
                              } else {
                                optStyle = "bg-slate-50 border-slate-200 text-slate-400 opacity-60";
                              }
                            } else if (selectedOpt === oIdx) {
                              optStyle = "bg-[#146B5B] border-[#146B5B] text-white font-bold";
                            }

                            return (
                              <button
                                key={oIdx}
                                disabled={miniTestSubmitted}
                                onClick={() => handleMiniTestOptionSelect(q.id, oIdx)}
                                className={`p-2.5 rounded-lg border text-xs text-left cursor-pointer transition-all ${optStyle}`}
                              >
                                <span className="font-bold mr-1.5">{String.fromCharCode(65 + oIdx)}.</span>
                                <span>{opt}</span>
                              </button>
                            );
                          })}
                        </div>

                        {/* Explanation after submission */}
                        {miniTestSubmitted && (
                          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 leading-relaxed">
                            <strong>Lời giải chi tiết:</strong> {q.explanation}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Submit & Reset Bar */}
                <div className="flex items-center justify-between gap-3 pt-2">
                  <div className="text-xs text-slate-600">
                    {miniTestSubmitted ? (
                      <span className="font-bold text-emerald-700 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        Đã chấm điểm thành công!
                      </span>
                    ) : (
                      <span>Chọn đáp án cho các câu trên rồi nhấn Chấm điểm</span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {miniTestSubmitted ? (
                      <button
                        onClick={handleResetMiniTest}
                        className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer flex items-center gap-1.5"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Làm lại</span>
                      </button>
                    ) : (
                      <button
                        onClick={handleSubmitMiniTest}
                        disabled={Object.keys(miniTestAnswers).length < dayPlan.miniTest.questions.length}
                        className="px-5 py-2 rounded-lg bg-[#146B5B] hover:bg-[#0f5548] disabled:opacity-50 text-white font-black text-xs cursor-pointer shadow-xs"
                      >
                        Chấm điểm Mini Test (+XP)
                      </button>
                    )}
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
