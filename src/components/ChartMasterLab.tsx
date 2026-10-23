import React, { useState } from "react";
import { CHART_CHALLENGES } from "../data/curriculumData";
import { ChartChallenge, ChartTypeOption } from "../types";
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  FileSpreadsheet, 
  Sparkles, 
  ArrowRight,
  HelpCircle,
  Award
} from "lucide-react";

interface ChartMasterLabProps {
  onEarnXp?: (points: number) => void;
}

export const ChartMasterLab: React.FC<ChartMasterLabProps> = ({ onEarnXp }) => {
  const [selectedChallengeIdx, setSelectedChallengeIdx] = useState<number>(0);
  const rawChallenge = CHART_CHALLENGES[selectedChallengeIdx] || CHART_CHALLENGES[0];

  const tableTitle = rawChallenge.dataTitle || rawChallenge.title;
  const unit = rawChallenge.unit || "%";
  const years = rawChallenge.years || ["2015", "2018", "2020", "2022"];
  const headers = rawChallenge.headers || ["Chỉ tiêu", ...years];
  const rows = rawChallenge.rows || (rawChallenge.series ? rawChallenge.series.map(s => ({ label: s.name, values: s.values })) : []);
  
  const correctChartType = (rawChallenge.correctType || rawChallenge.correctChartType || "area") as ChartTypeOption;
  const whyExplanation = rawChallenge.keywordAnalysis?.explanation || rawChallenge.whyExplanation || "Phân tích lựa chọn dựa trên từ khóa đề bài.";
  const keywordAnalysisText = typeof rawChallenge.keywordAnalysis === "object" 
    ? `${rawChallenge.keywordAnalysis.mainKeyword}: ${rawChallenge.keywordAnalysis.ruleToRemember || ""}`
    : (rawChallenge.keywordAnalysis || "");

  const drawingTips: string[] = rawChallenge.drawingTips || [
    "Chia đúng khoảng cách năm trên trục hoành (năm cách xa thì vẽ khoảng cách tương ứng)",
    "Gốc tọa độ trục tung bắt đầu từ 0 (trừ biểu đồ tốc độ tăng trưởng lấy mốc 100%)",
    "Ghi đầy đủ số liệu tại đỉnh cột hoặc điểm mút đường đồ thị",
    "Ghi rõ tên biểu đồ, đơn vị ở hai trục và bảng chú giải chuẩn mực"
  ];

  const commentarySteps: string[] = rawChallenge.commentarySteps || [
    `Bước 1: Khái quát xu hướng tổng thể: ${rawChallenge.expertCommentary?.overview || ""}`,
    `Bước 2: Phân tích chi tiết và dẫn chứng số liệu: ${rawChallenge.expertCommentary?.detailedTrends?.[0] || ""}`,
    `Bước 3: Giải thích nguyên nhân địa lí cốt lõi: ${rawChallenge.expertCommentary?.causes?.[0] || ""}`
  ];

  const standardCommentary: string = rawChallenge.standardCommentary || (
    rawChallenge.expertCommentary 
      ? `${rawChallenge.expertCommentary.overview} Cụ thể: ${rawChallenge.expertCommentary.detailedTrends.join(' ')} Nguyên nhân chủ yếu: ${rawChallenge.expertCommentary.causes.join(' ')}`
      : "Nhận xét khái quát xu hướng, phân tích tốc độ tăng giảm và dẫn chứng số liệu cụ thể theo từng giai đoạn."
  );

  const [selectedChartType, setSelectedChartType] = useState<ChartTypeOption | null>(null);
  const [hasEvaluated, setHasEvaluated] = useState<boolean>(false);

  const chartOptions: { id: ChartTypeOption; label: string; icon: string; desc: string }[] = [
    { id: "bar", label: "Biểu đồ Cột", icon: "📊", desc: "So sánh quy mô, khối lượng giữa các đối tượng hoặc qua các năm" },
    { id: "pie", label: "Biểu đồ Tròn", icon: "🥧", desc: "Thể hiện cơ cấu, tỷ trọng trong 1 đến 3 năm (có thể có bán kính R)" },
    { id: "line", label: "Biểu đồ Đường", icon: "📈", desc: "Thể hiện tốc độ tăng trưởng hoặc diễn biến nhiều năm liên tục" },
    { id: "area", label: "Biểu đồ Miền", icon: "📉", desc: "Thể hiện sự chuyển dịch cơ cấu qua chuỗi thời gian (thường từ 4 năm trở lên)" },
    { id: "combined", label: "Biểu đồ Kết hợp (Cột + Đường)", icon: "📊📈", desc: "Thể hiện hai đại lượng khác nhau về đơn vị tính (ví dụ: sản lượng và diện tích)" },
  ];

  const isTypeMatch = (selected: ChartTypeOption | null, target: ChartTypeOption) => {
    if (!selected) return false;
    const normalize = (t: string) => {
      if (t === "cot") return "bar";
      if (t === "tron") return "pie";
      if (t === "duong") return "line";
      if (t === "mien") return "area";
      if (t === "ket_hop") return "combined";
      return t;
    };
    return normalize(selected) === normalize(target);
  };

  const handleSelectType = (typeId: ChartTypeOption) => {
    setSelectedChartType(typeId);
    setHasEvaluated(true);
    if (isTypeMatch(typeId, correctChartType) && onEarnXp) {
      onEarnXp(25);
    }
  };

  const isCorrect = isTypeMatch(selectedChartType, correctChartType);

  return (
    <section className="py-10 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-[#1677B8] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-2">
            <BarChart3 className="w-4 h-4" />
            <span>Kỹ năng thực hành số liệu đỉnh cao</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-[#16332F] tracking-tight">
            Bậc Thầy Biểu Đồ & Phân Tích Số Liệu
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2 max-w-3xl leading-relaxed">
            Không còn nỗi lo vẽ sai dạng biểu đồ: Hệ thống nhận diện từ khóa (quy mô – cơ cấu – tốc độ tăng trưởng – chuyển dịch), vẽ mẫu trực quan và hướng dẫn viết nhận xét đạt điểm 10 tuyệt đối.
          </p>
        </div>

        {/* Challenge Switcher */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {CHART_CHALLENGES.map((ch, idx) => (
            <button
              key={ch.id}
              onClick={() => {
                setSelectedChallengeIdx(idx);
                setSelectedChartType(null);
                setHasEvaluated(false);
              }}
              className={`px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer border ${
                selectedChallengeIdx === idx
                  ? "bg-[#1677B8] text-white border-[#1677B8] shadow-xs font-extrabold"
                  : "bg-white text-slate-700 hover:bg-slate-50 border-slate-200"
              }`}
            >
              {ch.title}
            </button>
          ))}
        </div>

        {/* 3-Step Interactive Workflow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Bước 1: Nhận dạng bảng số liệu (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 text-left">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold text-[#1677B8] bg-sky-50 px-2.5 py-1 rounded-md">
                Bước 1: Nhận dạng bảng số liệu
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Đơn vị: {unit}
              </span>
            </div>

            <div>
              <h3 className="font-extrabold text-base text-[#16332F] leading-snug">
                {tableTitle}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Yêu cầu đề bài: Hãy chọn dạng biểu đồ thích hợp nhất để thể hiện bảng số liệu trên.
              </p>
            </div>

            {/* Table visualization */}
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-100 text-slate-700 font-extrabold uppercase">
                  <tr>
                    {headers.map((h, i) => (
                      <th key={i} className="py-2.5 px-3 border-b border-slate-200">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-50">
                      <td className="py-2.5 px-3 font-bold text-slate-800">
                        {row.label}
                      </td>
                      {row.values.map((val, vIdx) => (
                        <td key={vIdx} className="py-2.5 px-3 font-mono font-medium text-slate-700">
                          {val.toLocaleString()}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Dynamic Visual Simulation of the Chart */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#1677B8]" />
                  <span>Mô phỏng đồ họa trực quan (Live Chart Simulation):</span>
                </span>
                <span className="text-[10px] text-slate-400">Tự động dựng</span>
              </div>

              {/* Dynamic SVG chart based on current rows */}
              <div className="h-44 w-full bg-white rounded-lg p-2 border border-slate-200/80 flex items-end justify-around gap-2 relative">
                {isTypeMatch(correctChartType, "bar") ? (
                  // Bar chart rendering (Single or Grouped)
                  <div className="w-full h-full flex items-end justify-around gap-2 px-2 pb-1">
                    {headers.slice(1).map((colLabel, colIdx) => {
                      const hasMultipleSeries = rows.length > 1;
                      const maxVal = Math.max(...rows.flatMap(r => r.values.map(Number))) || 100;
                      return (
                        <div key={colIdx} className="flex flex-col items-center gap-1 h-full justify-end flex-1 max-w-[80px]">
                          <div className="flex items-end gap-1 h-28 justify-center w-full">
                            {rows.map((row, rIdx) => {
                              const val = Number(row.values[colIdx]) || 10;
                              const h = Math.max(Math.min((val / maxVal) * 95, 95), 8);
                              const barColor = rIdx === 0 ? "#146B5B" : rIdx === 1 ? "#1677B8" : "#E29578";
                              return (
                                <div
                                  key={rIdx}
                                  style={{ height: `${h}px`, backgroundColor: barColor }}
                                  className="w-full rounded-t transition-all hover:opacity-80"
                                  title={`${row.label}: ${val}`}
                                />
                              );
                            })}
                          </div>
                          <span className="text-[10px] font-bold text-slate-700 truncate w-full text-center">{colLabel}</span>
                        </div>
                      );
                    })}
                  </div>
                ) : isTypeMatch(correctChartType, "pie") ? (
                  // Pie Chart Simulation (Single or Dual Radius)
                  <div className="w-full h-full flex items-center justify-around p-2 gap-4">
                    <div className="flex flex-col items-center gap-1">
                      <svg viewBox="0 0 100 100" className="w-24 h-24">
                        <circle cx="50" cy="50" r="40" fill="#1677B8" />
                        <path d="M 50 50 L 50 10 A 40 40 0 0 1 90 50 Z" fill="#146B5B" />
                        <path d="M 50 50 L 90 50 A 40 40 0 0 1 50 90 Z" fill="#E29578" />
                        <circle cx="50" cy="50" r="12" fill="#FFFFFF" />
                        <text x="50" y="53" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#0F172A">R₁</text>
                      </svg>
                      <span className="text-[10px] font-bold text-slate-600">{headers[1] || "Năm 1"}</span>
                    </div>
                    {headers.length > 2 && (
                      <div className="flex flex-col items-center gap-1">
                        <svg viewBox="0 0 120 120" className="w-28 h-28">
                          <circle cx="60" cy="60" r="50" fill="#1677B8" />
                          <path d="M 60 60 L 60 10 A 50 50 0 0 1 110 60 Z" fill="#146B5B" />
                          <path d="M 60 60 L 110 60 A 50 50 0 0 1 60 110 Z" fill="#E29578" />
                          <circle cx="60" cy="60" r="15" fill="#FFFFFF" />
                          <text x="60" y="63" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#0F172A">R₂ &gt; R₁</text>
                        </svg>
                        <span className="text-[10px] font-bold text-slate-600">{headers[2] || "Năm 2"}</span>
                      </div>
                    )}
                  </div>
                ) : isTypeMatch(correctChartType, "combined") ? (
                  // Combo Column + Line Simulation with 2 axes
                  <div className="w-full h-full flex flex-col justify-between p-1">
                    <div className="flex justify-between text-[9px] font-bold text-slate-500 border-b border-slate-100 pb-0.5">
                      <span className="text-[#146B5B]">Trục trái: Cột (Nghìn ha)</span>
                      <span className="text-amber-700">Trục phải: Đường (Triệu tấn)</span>
                    </div>
                    <div className="relative h-28 w-full flex items-end justify-around px-2">
                      {/* Bar columns */}
                      {headers.slice(1).map((col, i) => (
                        <div key={i} className="flex flex-col items-center gap-1 flex-1 max-w-[40px]">
                          <div style={{ height: `${55 - i * 4}px` }} className="w-6 bg-[#146B5B] rounded-t" />
                        </div>
                      ))}
                      {/* Overlay line */}
                      <svg viewBox="0 0 200 80" className="absolute inset-0 w-full h-full pointer-events-none">
                        <polyline fill="none" stroke="#D97706" strokeWidth="3" points="20,40 65,25 110,30 155,38 185,40" />
                        <circle cx="20" cy="40" r="3.5" fill="#D97706" stroke="#FFF" strokeWidth="1" />
                        <circle cx="65" cy="25" r="3.5" fill="#D97706" stroke="#FFF" strokeWidth="1" />
                        <circle cx="110" cy="30" r="3.5" fill="#D97706" stroke="#FFF" strokeWidth="1" />
                        <circle cx="155" cy="38" r="3.5" fill="#D97706" stroke="#FFF" strokeWidth="1" />
                        <circle cx="185" cy="40" r="3.5" fill="#D97706" stroke="#FFF" strokeWidth="1" />
                      </svg>
                    </div>
                    <div className="flex justify-around text-[10px] font-bold text-slate-600 pt-1">
                      {headers.slice(1).map((y, idx) => (
                        <span key={idx}>{y}</span>
                      ))}
                    </div>
                  </div>
                ) : isTypeMatch(correctChartType, "area") ? (
                  // Area stack simulation
                  <div className="w-full h-full flex flex-col justify-between text-center p-2">
                    <div className="h-28 w-full bg-gradient-to-t from-[#146B5B]/30 via-[#1677B8]/30 to-amber-100/40 rounded border border-slate-200 relative flex items-center justify-center">
                      <span className="text-xs font-bold text-[#146B5B]">
                        Chuyển dịch cơ cấu (Tổng 100%) qua chuỗi năm
                      </span>
                    </div>
                    <div className="flex justify-between text-[10px] font-bold text-slate-500 pt-1">
                      {headers.slice(1).map((y, idx) => (
                        <span key={idx}>{y}</span>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Line growth simulation
                  <div className="w-full h-full flex flex-col justify-between p-2">
                    <svg viewBox="0 0 200 80" className="w-full h-28">
                      <polyline
                        fill="none"
                        stroke="#146B5B"
                        strokeWidth="3"
                        points="10,65 70,45 130,25 190,10"
                      />
                      <polyline
                        fill="none"
                        stroke="#1677B8"
                        strokeWidth="3"
                        strokeDasharray="4 2"
                        points="10,70 70,60 130,48 190,32"
                      />
                      <circle cx="10" cy="65" r="3" fill="#146B5B" />
                      <circle cx="70" cy="45" r="3" fill="#146B5B" />
                      <circle cx="130" cy="25" r="3" fill="#146B5B" />
                      <circle cx="190" cy="10" r="3" fill="#146B5B" />
                    </svg>
                    <div className="flex justify-between text-[10px] font-bold text-slate-500">
                      {headers.slice(1).map((y, idx) => (
                        <span key={idx}>{y}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-2 text-[10px] text-slate-500 flex items-center justify-center gap-4">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 bg-[#146B5B] rounded-xs inline-block" /> {rows[0]?.label || "Chỉ tiêu 1"}
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 bg-[#1677B8] rounded-xs inline-block" /> {rows[1]?.label || "Chỉ tiêu 2"}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Bước 2 & Bước 3: Lựa chọn & Phản hồi sư phạm (6 cols) */}
          <div className="lg:col-span-6 space-y-4 text-left">
            {/* Bước 2: Bạn chọn dạng biểu đồ nào? */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#1677B8] bg-sky-50 px-2.5 py-1 rounded-md">
                  Bước 2: Hệ thống phản hồi ngay
                </span>
                <span className="text-xs font-bold text-amber-600">
                  +25 XP khi chọn đúng
                </span>
              </div>

              <h4 className="font-extrabold text-sm sm:text-base text-[#16332F]">
                Bạn chọn dạng biểu đồ nào thích hợp nhất?
              </h4>

              <div className="grid grid-cols-1 gap-2 pt-1">
                {chartOptions.map((opt) => {
                  const isSelected = selectedChartType === opt.id;
                  const isThisCorrect = isTypeMatch(opt.id, correctChartType);
                  let cardStyle = "bg-white border-slate-200 text-slate-700 hover:border-[#1677B8] hover:bg-sky-50/40";
                  
                  if (hasEvaluated) {
                    if (isThisCorrect) {
                      cardStyle = "bg-emerald-50 border-emerald-500 text-emerald-900 shadow-xs";
                    } else if (isSelected) {
                      cardStyle = "bg-rose-50 border-rose-400 text-rose-900";
                    } else {
                      cardStyle = "bg-white border-slate-200 text-slate-400 opacity-60";
                    }
                  }

                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectType(opt.id)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-3 ${cardStyle}`}
                    >
                      <span className="text-xl shrink-0">{opt.icon}</span>
                      <div className="space-y-0.5">
                        <div className="font-bold text-xs sm:text-sm flex items-center gap-2">
                          <span>{opt.label}</span>
                          {hasEvaluated && isThisCorrect && (
                            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-600 text-white font-extrabold">
                              Chuẩn nhất
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] opacity-80 leading-relaxed">
                          {opt.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Immediate Feedback Box */}
              {hasEvaluated && (
                <div className={`p-4 rounded-xl border text-xs space-y-2 mt-3 ${
                  isCorrect
                    ? "bg-emerald-50 border-emerald-300 text-emerald-900"
                    : "bg-amber-50 border-amber-300 text-amber-950"
                }`}>
                  <div className="font-black text-sm flex items-center gap-2">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        <span>✅ Chính xác tuyệt đối! (+25 XP)</span>
                      </>
                    ) : (
                      <>
                        <AlertTriangle className="w-5 h-5 text-amber-600" />
                        <span>❌ Chưa chính xác! Cần lưu ý từ khóa đề bài.</span>
                      </>
                    )}
                  </div>

                  <p className="leading-relaxed font-medium">
                    {whyExplanation}
                  </p>

                  {/* Keyword analysis badge */}
                  <div className="p-2.5 bg-white/80 rounded-lg border border-slate-200/80 text-[11px] space-y-1">
                    <span className="font-extrabold text-[#146B5B] block">
                      🔑 Phân tích từ khóa chìa khóa:
                    </span>
                    <div className="text-slate-700 leading-snug">
                      {keywordAnalysisText}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bước 3: Hướng dẫn vẽ và nhận xét chuẩn thi chuyên */}
            {hasEvaluated && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#146B5B] bg-[#E8F5EF] px-2.5 py-1 rounded-md">
                    Bước 3: Hướng dẫn vẽ & Viết nhận xét
                  </span>
                  <span className="text-[11px] text-slate-500 font-bold">
                    Tiêu chuẩn chấm điểm HSG
                  </span>
                </div>

                {/* Drawing checklist */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs text-slate-700">
                  <span className="font-bold text-[#16332F] block">
                    Quy tắc vẽ biểu đồ không bị trừ điểm:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {drawingTips.map((tip, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#146B5B] font-bold">✓</span>
                        <span className="text-[11px]">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Writing steps */}
                <div className="space-y-2 pt-1">
                  <span className="font-bold text-xs text-[#146B5B] block">
                    Khung viết bài nhận xét: Tổng quát → Chi tiết → So sánh → Giải thích
                  </span>
                  <div className="space-y-1.5">
                    {commentarySteps.map((step, sIdx) => (
                      <div key={sIdx} className="p-2.5 bg-[#E8F5EF]/40 rounded-lg border border-[#146B5B]/15 text-xs text-slate-800">
                        {step}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Standard essay commentary sample */}
                <div className="p-3.5 bg-amber-50/60 rounded-xl border border-amber-200 text-xs text-slate-800 space-y-1">
                  <span className="font-bold text-amber-900 block">
                    Mẫu đoạn văn nhận xét ăn điểm trọn vẹn:
                  </span>
                  <p className="leading-relaxed italic text-slate-700">
                    "{standardCommentary}"
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
