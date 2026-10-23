import React, { useState, useEffect } from "react";
import { MOCK_EXAMS } from "../data/curriculumData";
import { MockExam, ExamQuestion } from "../types";
import { 
  FileText, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  RotateCcw, 
  Award, 
  ChevronRight, 
  ChevronLeft,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  BookOpen
} from "lucide-react";

interface ExamRoomProps {
  onEarnXp?: (points: number) => void;
  onNavigateToTopic?: (topicId: string) => void;
}

export const ExamRoom: React.FC<ExamRoomProps> = ({ onEarnXp, onNavigateToTopic }) => {
  const [selectedExamId, setSelectedExamId] = useState<string>(MOCK_EXAMS[0].id);
  const currentExam: MockExam = MOCK_EXAMS.find((e) => e.id === selectedExamId) || MOCK_EXAMS[0];

  // Exam taking state
  const [isExamActive, setIsExamActive] = useState<boolean>(false);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [timeLeft, setTimeLeft] = useState<number>(currentExam.timeLimitMinutes * 60);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Timer effect
  useEffect(() => {
    let timer: any = null;
    if (isExamActive && !isSubmitted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleSubmitExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isExamActive, isSubmitted, timeLeft]);

  const handleStartExam = () => {
    setIsExamActive(true);
    setIsSubmitted(false);
    setUserAnswers({});
    setCurrentQuestionIdx(0);
    setTimeLeft(currentExam.timeLimitMinutes * 60);
  };

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmitExam = () => {
    setIsSubmitted(true);
    setIsExamActive(false);

    // Calculate score
    const totalQuestions = currentExam.questions.length;
    let correctCount = 0;
    currentExam.questions.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });

    const xpEarned = correctCount * 25;
    if (onEarnXp) {
      onEarnXp(xpEarned);
    }
  };

  // Format time (HH:MM:SS)
  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs > 0 ? `${hrs.toString().padStart(2, "0")}:` : ""}${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Performance calculation
  const totalQuestions = currentExam.questions.length;
  const answeredCount = Object.keys(userAnswers).length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  const correctCount = currentExam.questions.filter(
    (q) => userAnswers[q.id] === q.correctAnswer
  ).length;
  const finalScore = totalQuestions > 0 ? ((correctCount / totalQuestions) * 10).toFixed(1) : "0";

  const wrongQuestions = currentExam.questions.filter(
    (q) => userAnswers[q.id] !== undefined && userAnswers[q.id] !== q.correctAnswer
  );

  return (
    <section className="py-10 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 text-rose-800 text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-2">
            <FileText className="w-4 h-4" />
            <span>Hệ thống đề tham khảo trực tuyến</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-[#16332F] tracking-tight">
            Đề Tham Khảo & Phòng Kiểm Tra Địa Lí 9
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2 max-w-3xl leading-relaxed font-normal">
            Các bộ đề tham khảo chuẩn hóa bám sát cấu trúc thi chuyên và HSG: Số lượng câu hỏi tương ứng với số phút làm bài (45 câu/45 phút, 30 câu/30 phút, 15 câu/15 phút), có đồng hồ đếm ngược, thanh tiến độ và báo cáo phân tích lỗi sai chi tiết.
          </p>
        </div>

        {/* Exam Selection Tabs (when not in exam) */}
        {!isExamActive && !isSubmitted && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MOCK_EXAMS.map((exam) => (
                <div
                  key={exam.id}
                  onClick={() => setSelectedExamId(exam.id)}
                  className={`p-6 rounded-2xl border-2 transition-all cursor-pointer text-left flex flex-col justify-between ${
                    selectedExamId === exam.id
                      ? "bg-white border-[#146B5B] shadow-md"
                      : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-[#E8F5EF] text-[#146B5B]">
                        {exam.type}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {exam.timeLimitMinutes} phút
                      </span>
                    </div>

                    <h3 className="font-extrabold text-lg text-[#16332F]">
                      {exam.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {exam.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-700">
                      Số câu hỏi: {exam.questions.length} câu
                    </span>
                    <span className="font-extrabold text-[#146B5B]">
                      Độ khó: {exam.difficulty}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Launch Exam CTA */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#146B5B] to-[#1677B8] text-white text-center space-y-4 shadow-lg">
              <h3 className="text-2xl font-black">
                Sẵn sàng bước vào phòng thi: {currentExam.title}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100 max-w-xl mx-auto">
                Thời gian làm bài: {currentExam.timeLimitMinutes} phút. Hệ thống sẽ tự động tính điểm, phân tích bẫy trắc nghiệm và gợi ý chuyên đề cần khắc phục ngay sau khi nộp bài.
              </p>
              <button
                id="btn-start-exam"
                onClick={handleStartExam}
                className="px-8 py-3.5 rounded-xl bg-white text-[#146B5B] font-black text-base shadow-md hover:bg-[#E8F5EF] active:scale-95 transition-all cursor-pointer"
              >
                🚀 Bắt đầu làm bài thi ngay
              </button>
            </div>
          </div>
        )}

        {/* ACTIVE EXAM INTERFACE */}
        {isExamActive && !isSubmitted && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden text-left">
            {/* Real Exam Header */}
            <div className="p-4 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">
                  ĐỀ THI CHUYÊN ĐỊA LÍ 9
                </span>
                <h4 className="font-black text-sm sm:text-base text-white">
                  {currentExam.title}
                </h4>
              </div>

              {/* Countdown Timer */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 font-mono text-base font-bold text-amber-400">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>⏱️ {formatTime(timeLeft)}</span>
                </div>

                <button
                  onClick={handleSubmitExam}
                  className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs active:scale-95 transition-all cursor-pointer"
                >
                  Nộp bài thi
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-100 h-2">
              <div
                className="bg-[#146B5B] h-2 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Sub-header with question index & progress */}
            <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs font-bold text-slate-700">
              <span>
                Câu hỏi {currentQuestionIdx + 1}/{totalQuestions}
              </span>
              <span>
                Tiến độ: {answeredCount}/{totalQuestions} ({progressPercent}%)
              </span>
            </div>

            {/* Main Exam Body */}
            <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Question Content (8 cols) */}
              <div className="lg:col-span-8 space-y-6">
                {currentExam.questions[currentQuestionIdx] && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400 uppercase">
                        Chuyên đề: {currentExam.questions[currentQuestionIdx].topicRef}
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                        Độ khó: {currentExam.questions[currentQuestionIdx].level}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-base sm:text-lg text-[#16332F] leading-snug">
                      Câu {currentQuestionIdx + 1}: {currentExam.questions[currentQuestionIdx].question}
                    </h3>

                    {/* Options */}
                    <div className="space-y-2.5 pt-2">
                      {currentExam.questions[currentQuestionIdx].options.map((opt, optIdx) => {
                        const currentQId = currentExam.questions[currentQuestionIdx].id;
                        const isChosen = userAnswers[currentQId] === optIdx;

                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleSelectOption(currentQId, optIdx)}
                            className={`w-full p-3.5 rounded-xl border-2 text-left text-xs sm:text-sm font-medium transition-all flex items-start gap-3 cursor-pointer ${
                              isChosen
                                ? "bg-[#E8F5EF] border-[#146B5B] text-[#146B5B] shadow-xs"
                                : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                            }`}
                          >
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                              isChosen ? "bg-[#146B5B] text-white" : "bg-slate-100 text-slate-600"
                            }`}>
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span className="pt-0.5 leading-relaxed">{opt}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Navigation Next/Prev */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <button
                    disabled={currentQuestionIdx === 0}
                    onClick={() => setCurrentQuestionIdx((prev) => prev - 1)}
                    className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 cursor-pointer flex items-center gap-1.5"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Câu trước</span>
                  </button>

                  <button
                    disabled={currentQuestionIdx === totalQuestions - 1}
                    onClick={() => setCurrentQuestionIdx((prev) => prev + 1)}
                    className="px-4 py-2 rounded-xl bg-[#146B5B] text-white text-xs font-bold hover:bg-[#0f5548] disabled:opacity-40 cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Câu tiếp theo</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Fast Question Navigation Grid (4 cols) */}
              <div className="lg:col-span-4 bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-3">
                <div className="font-bold text-xs text-slate-700">
                  Danh sách câu hỏi ({answeredCount}/{totalQuestions})
                </div>

                <div className="grid grid-cols-5 gap-2">
                  {currentExam.questions.map((q, qIndex) => {
                    const isAnswered = userAnswers[q.id] !== undefined;
                    const isCurrent = currentQuestionIdx === qIndex;

                    let bg = "bg-white text-slate-700 border-slate-200";
                    if (isCurrent) {
                      bg = "bg-[#146B5B] text-white border-[#146B5B] font-black";
                    } else if (isAnswered) {
                      bg = "bg-emerald-100 text-emerald-900 border-emerald-300 font-bold";
                    }

                    return (
                      <button
                        key={q.id}
                        onClick={() => setCurrentQuestionIdx(qIndex)}
                        className={`h-9 rounded-lg border text-xs flex items-center justify-center transition-all cursor-pointer ${bg}`}
                      >
                        {qIndex + 1}
                      </button>
                    );
                  })}
                </div>

                <div className="pt-3 border-t border-slate-200/80 space-y-1 text-[11px] text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded bg-emerald-100 border border-emerald-300" />
                    <span>Đã trả lời</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded bg-white border border-slate-200" />
                    <span>Chưa trả lời</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded bg-[#146B5B]" />
                    <span>Đang xem</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* COMPREHENSIVE POST-SUBMISSION REPORT */}
        {isSubmitted && (
          <div className="space-y-6 text-left">
            {/* Scorecard Hero Banner */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <span className="text-xs uppercase font-extrabold text-[#146B5B] tracking-wider block mb-1">
                    Báo cáo kết quả chi tiết
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#16332F]">
                    {currentExam.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Thời gian hoàn thành: {Math.round((currentExam.timeLimitMinutes * 60 - timeLeft) / 60)} phút
                  </p>
                </div>

                {/* Score badge */}
                <div className="flex items-center gap-4 bg-[#E8F5EF] p-4 rounded-2xl border border-[#146B5B]/20">
                  <div>
                    <div className="text-xs font-bold text-[#146B5B]">Điểm số của bạn:</div>
                    <div className="text-3xl sm:text-4xl font-black text-[#146B5B]">
                      {finalScore} <span className="text-base font-normal text-slate-500">/ 10</span>
                    </div>
                  </div>
                  <Award className="w-10 h-10 text-[#146B5B]" />
                </div>
              </div>

              {/* Fast Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 text-center">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-xs text-slate-500 font-semibold">Số câu đúng</div>
                  <div className="text-xl font-black text-emerald-600">{correctCount} / {totalQuestions}</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-xs text-slate-500 font-semibold">Số câu sai / bỏ qua</div>
                  <div className="text-xl font-black text-rose-600">{totalQuestions - correctCount} câu</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-xs text-slate-500 font-semibold">Tỷ lệ chính xác</div>
                  <div className="text-xl font-black text-[#1677B8]">
                    {Math.round((correctCount / totalQuestions) * 100)}%
                  </div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-xs text-slate-500 font-semibold">Kinh nghiệm đạt được</div>
                  <div className="text-xl font-black text-amber-600">+{correctCount * 25} XP</div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-3 pt-6">
                <button
                  onClick={handleStartExam}
                  className="px-5 py-2.5 rounded-xl bg-[#146B5B] text-white font-bold text-xs hover:bg-[#0f5548] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Làm lại bài thi này</span>
                </button>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-all cursor-pointer"
                >
                  Chọn đề thi khác
                </button>
              </div>
            </div>

            {/* Smart Recommendations: Topics to review */}
            {wrongQuestions.length > 0 && (
              <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-3">
                <div className="font-extrabold text-sm text-amber-900 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-amber-600" />
                  <span>🎯 Đề xuất lộ trình cá nhân hóa dựa trên kết quả làm bài:</span>
                </div>
                <p className="text-xs text-amber-950 leading-relaxed">
                  Bạn đang bị hổng kiến thức ở các chủ đề sau:
                </p>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(wrongQuestions.map((q) => q.topicRef))).map((topicName, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white border border-amber-300 rounded-lg text-xs font-bold text-amber-900 flex items-center gap-1.5 shadow-2xs"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                      <span>{topicName}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Detailed Question Review: Traps, Cause Analysis, Full Explanation */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
              <h4 className="font-black text-base text-[#16332F] pb-3 border-b border-slate-100">
                Phân tích chi tiết từng câu & Bóc tách bẫy trắc nghiệm:
              </h4>

              <div className="space-y-6">
                {currentExam.questions.map((q, idx) => {
                  const userAns = userAnswers[q.id];
                  const isRight = userAns === q.correctAnswer;

                  return (
                    <div
                      key={q.id}
                      className={`p-5 rounded-xl border space-y-3 ${
                        isRight ? "bg-emerald-50/30 border-emerald-200" : "bg-rose-50/30 border-rose-200"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-500">
                          Câu {idx + 1} • {q.topicRef}
                        </span>
                        <span className={`text-xs font-black px-2.5 py-0.5 rounded-full ${
                          isRight ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
                        }`}>
                          {isRight ? "✓ Đúng (+25 XP)" : "✗ Sai"}
                        </span>
                      </div>

                      <div className="font-extrabold text-sm text-[#16332F]">
                        {q.question}
                      </div>

                      {/* Options breakdown */}
                      <div className="grid grid-cols-1 gap-1.5 text-xs">
                        {q.options.map((opt, oIdx) => {
                          const isOptRight = oIdx === q.correctAnswer;
                          const isOptChosen = oIdx === userAns;

                          let style = "bg-white border-slate-200 text-slate-600";
                          if (isOptRight) {
                            style = "bg-emerald-100 border-emerald-400 font-bold text-emerald-950";
                          } else if (isOptChosen && !isOptRight) {
                            style = "bg-rose-100 border-rose-400 text-rose-950 font-bold line-through";
                          }

                          return (
                            <div key={oIdx} className={`p-2.5 rounded-lg border flex items-center gap-2 ${style}`}>
                              <span className="font-bold">{String.fromCharCode(65 + oIdx)}.</span>
                              <span>{opt}</span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Pedagogical Diagnosis & Trap alert */}
                      <div className="pt-2 text-xs space-y-1.5 text-slate-700">
                        <p>
                          <strong>Giải thích chuẩn:</strong> {q.explanation}
                        </p>
                        {q.trapWarning && (
                          <p className="text-amber-800 font-medium bg-amber-50 p-2 rounded-md border border-amber-200 text-[11px]">
                            ⚠️ <strong>Bẫy đề thi cần tránh:</strong> {q.trapWarning}
                          </p>
                        )}
                        {!isRight && (
                          <p className="text-rose-700 font-medium text-[11px]">
                            💡 <strong>Nguyên nhân sai lầm:</strong> Học sinh thường nhầm lẫn giữa điều kiện cần (khí hậu, đất) và điều kiện quyết định quy mô sản xuất (công nghiệp chế biến, thị trường tiêu thụ).
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
