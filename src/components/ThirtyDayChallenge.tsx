import React, { useState } from "react";
import { THIRTY_DAY_CHALLENGES } from "../data/curriculumData";
import { DayChallenge } from "../types";
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
  Sparkles
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

  const dayData: DayChallenge =
    THIRTY_DAY_CHALLENGES.find((d) => (d.day || d.dayNumber) === selectedDay) || {
      dayNumber: selectedDay,
      day: selectedDay,
      title: `Chuyên đề tự học ngày ${selectedDay}`,
      coreTopic: "Rèn luyện kiến thức và kỹ năng",
      focus: "Rèn luyện kiến thức và kỹ năng",
      stage: selectedDay <= 6 ? 1 : selectedDay <= 12 ? 2 : selectedDay <= 18 ? 3 : selectedDay <= 24 ? 4 : 5,
      lessonSnippet: `Hoàn thành bài đọc chuyên đề số ${selectedDay} trong SGK và tài liệu chuyên`,
      atlatExercise: `Thực hành tra cứu Atlat tương ứng ngày ${selectedDay}`,
      chartExercise: `Phân tích bảng số liệu phát triển kinh tế ngày ${selectedDay}`,
      thinkingQuestion: "Xác định quy luật địa lí cơ bản và phân tích mối quan hệ nhân quả",
      isCompleted: completedDays.includes(selectedDay),
      xpReward: 80,
      tasks: {
        lesson: `Hoàn thành bài đọc chuyên đề số ${selectedDay} trong SGK và tài liệu chuyên`,
        atlat: `Thực hành tra cứu Atlat tương ứng ngày ${selectedDay}`,
        chart: `Phân tích bảng số liệu phát triển kinh tế ngày ${selectedDay}`,
        thinkingQuestions: [
          "Xác định quy luật địa lí cơ bản",
          "Phân tích mối quan hệ nhân quả",
          "So sánh đặc điểm tự nhiên hai miền",
          "Đánh giá tác động đến phát triển kinh tế",
          "Đề xuất giải pháp thích ứng biến đổi khí hậu"
        ],
        miniTest: `Mini Test kiểm tra 5 phút ngày ${selectedDay}`
      }
    };

  const isDayCompleted = completedDays.includes(selectedDay);

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

  return (
    <section className="py-10 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Streak Banner */}
        <div className="bg-gradient-to-r from-[#146B5B] to-[#1677B8] rounded-3xl p-6 sm:p-8 text-white text-left shadow-lg mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
                <Calendar className="w-3.5 h-3.5" />
                <span>Kế hoạch bứt phá 1 tháng</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
                Thử Thách 30 Ngày Chinh Phục Chuyên Địa
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl leading-relaxed">
                Chiến lược tự học kỷ luật mỗi ngày: 1 bài học ngắn + 1 bài Atlat + 1 bài biểu đồ + 5 câu hỏi tư duy + 1 mini test.
              </p>
            </div>

            {/* Streak & XP Badges */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="p-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 text-center">
                <div className="flex items-center justify-center gap-1 text-2xl font-black text-amber-300">
                  <Flame className="w-6 h-6 text-amber-400" />
                  <span>{streakDays}</span>
                </div>
                <div className="text-[11px] font-bold text-white/90">Ngày liên tiếp 🔥</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 text-center">
                <div className="flex items-center justify-center gap-1 text-2xl font-black text-[#FFF3B0]">
                  <span>⭐</span>
                  <span>{xp.toLocaleString()}</span>
                </div>
                <div className="text-[11px] font-bold text-white/90">Điểm XP tích lũy</div>
              </div>
            </div>
          </div>
        </div>

        {/* 30-Day Timeline Calendar Grid */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm mb-8 text-left">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-extrabold text-base text-[#16332F]">
                Lịch trình 30 Ngày Bứt Phá
              </h3>
              <p className="text-xs text-slate-500">
                Nhấp vào một ngày để xem nhiệm vụ chi tiết và đánh dấu hoàn thành.
              </p>
            </div>

            <div className="text-xs font-bold text-[#146B5B]">
              Đã hoàn thành {completedDays.length}/30 ngày ({Math.round((completedDays.length / 30) * 100)}%)
            </div>
          </div>

          <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-10 gap-2 sm:gap-2.5">
            {Array.from({ length: 30 }, (_, i) => i + 1).map((dayNum) => {
              const isSelected = selectedDay === dayNum;
              const isCompleted = completedDays.includes(dayNum);
              const isStreakToday = dayNum === streakDays;

              let style = "bg-slate-50 text-slate-700 border-slate-200 hover:border-[#146B5B]";
              if (isSelected) {
                style = "bg-[#146B5B] text-white border-[#146B5B] font-black shadow-md scale-105";
              } else if (isCompleted) {
                style = "bg-emerald-50 text-emerald-800 border-emerald-300 font-bold";
              } else if (isStreakToday) {
                style = "bg-amber-50 text-amber-800 border-amber-400 font-bold ring-2 ring-amber-300";
              }

              return (
                <button
                  key={dayNum}
                  onClick={() => setSelectedDay(dayNum)}
                  className={`h-12 rounded-xl border flex flex-col items-center justify-center transition-all cursor-pointer relative ${style}`}
                >
                  <span className="text-xs font-bold">Ngày {dayNum}</span>
                  {isCompleted && !isSelected && (
                    <span className="text-[10px] text-emerald-600">✓</span>
                  )}
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Day Task Dashboard */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm text-left space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#146B5B] mb-1">
                <span>Chặng {dayData.stage}</span>
                <span>•</span>
                <span>Trọng tâm: {dayData.focus}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#16332F]">
                Ngày {selectedDay}: {dayData.title}
              </h3>
            </div>

            <button
              onClick={handleCompleteFullDay}
              disabled={isDayCompleted}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer ${
                isDayCompleted
                  ? "bg-emerald-100 text-emerald-800 cursor-default"
                  : "bg-[#146B5B] text-white hover:bg-[#0f5548] active:scale-95 shadow-xs"
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isDayCompleted ? "Đã hoàn thành ngày này" : "Đánh dấu hoàn thành (+50 XP)"}</span>
            </button>
          </div>

          {/* 5 Daily Components Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#146B5B]" />
                  <span>1. Bài học ngắn</span>
                </span>
                <span className="text-xs">{completedDailyTasks[`d${selectedDay}_lesson`] ? "✅" : "⭕"}</span>
              </div>
              <p className="text-xs font-medium text-slate-800 leading-relaxed">
                {dayData.tasks.lesson}
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
                <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5">
                  <Map className="w-3.5 h-3.5 text-[#1677B8]" />
                  <span>2. Bài thực hành Atlat</span>
                </span>
                <span className="text-xs">{completedDailyTasks[`d${selectedDay}_atlat`] ? "✅" : "⭕"}</span>
              </div>
              <p className="text-xs font-medium text-slate-800 leading-relaxed">
                {dayData.tasks.atlat}
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
                <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5 text-amber-600" />
                  <span>3. Bài thực hành biểu đồ</span>
                </span>
                <span className="text-xs">{completedDailyTasks[`d${selectedDay}_chart`] ? "✅" : "⭕"}</span>
              </div>
              <p className="text-xs font-medium text-slate-800 leading-relaxed">
                {dayData.tasks.chart}
              </p>
            </div>
          </div>

          {/* 4. 🧠 5 câu hỏi tư duy */}
          <div className="p-5 rounded-xl bg-amber-50/60 border border-amber-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-amber-900 flex items-center gap-1.5 uppercase">
                <BrainCircuit className="w-4 h-4 text-amber-600" />
                <span>4. 5 Câu hỏi tư duy trong ngày:</span>
              </span>
              <span className="text-[11px] text-amber-800 font-semibold">
                Tập trung logic nhân - quả
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {dayData.tasks.thinkingQuestions.map((q, idx) => (
                <div key={idx} className="p-3 bg-white rounded-lg border border-amber-200/80 text-xs text-slate-800 flex items-start gap-2">
                  <span className="font-bold text-amber-700">{idx + 1}.</span>
                  <span>{q}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 5. 📝 Mini Test */}
          <div className="p-4 rounded-xl bg-[#E8F5EF]/60 border border-[#146B5B]/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-[#146B5B]" />
              <span className="text-xs font-bold text-[#146B5B]">
                5. {dayData.tasks.miniTest} (5 phút)
              </span>
            </div>
            <button
              onClick={() => toggleTask(`d${selectedDay}_minitest`)}
              className="px-3 py-1.5 rounded-lg bg-[#146B5B] text-white text-xs font-bold hover:bg-[#0f5548] cursor-pointer"
            >
              {completedDailyTasks[`d${selectedDay}_minitest`] ? "Đã kiểm tra ✓" : "Làm Mini Test"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
