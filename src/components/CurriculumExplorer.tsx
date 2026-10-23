import React, { useState } from "react";
import { TOPIC_GROUPS } from "../data/curriculumData";
import { ETHNIC_GROUPS, LANGUAGE_FAMILIES, EthnicGroup } from "../data/ethnicGroupsData";
import { ESSAY_QUESTIONS, EssayQuestionItem } from "../data/essayQuestionsData";
import { TopicItem, ExerciseQuestion, TopicGroupId } from "../types";
import { 
  BookOpen, 
  Map, 
  BarChart3, 
  BrainCircuit, 
  PenTool, 
  FileCheck2, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle,
  Lightbulb, 
  Search, 
  Sparkles, 
  ChevronDown, 
  ChevronRight,
  Layers,
  Users,
  Award,
  FileText,
  Filter,
  Check
} from "lucide-react";

interface CurriculumExplorerProps {
  onEarnXp?: (points: number) => void;
}

export const CurriculumExplorer: React.FC<CurriculumExplorerProps> = ({ onEarnXp }) => {
  // Main sub-module view: "topics" | "ethnic" | "essays"
  const [explorerMode, setExplorerMode] = useState<"topics" | "ethnic" | "essays">("topics");

  // Topics state
  const [selectedGroupId, setSelectedGroupId] = useState<TopicGroupId>("natural");
  const currentGroup = TOPIC_GROUPS.find((g) => g.id === selectedGroupId) || TOPIC_GROUPS[0];
  const [selectedTopicId, setSelectedTopicId] = useState<string>(currentGroup.topics[0]?.id || "");
  const activeTopic = currentGroup.topics.find((t) => t.id === selectedTopicId) || currentGroup.topics[0];

  type TabKey = "knowledge" | "atlat" | "statistics" | "thinking" | "exercises" | "miniTest";
  const [activeTab, setActiveTab] = useState<TabKey>("knowledge");

  // State for user answers in Exercises and Mini Test
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [showExplanation, setShowExplanation] = useState<Record<string, boolean>>({});

  // Ethnic groups state
  const [selectedLanguageFamily, setSelectedLanguageFamily] = useState<string>("all");
  const [selectedEthnicGroup, setSelectedEthnicGroup] = useState<EthnicGroup | null>(ETHNIC_GROUPS[0]);

  // Essays bank state
  const [selectedEssayLevel, setSelectedEssayLevel] = useState<string>("all");
  const [expandedEssayId, setExpandedEssayId] = useState<string | null>(null);

  const handleSelectOption = (questionId: string, optionIndex: number, correctIndex: number) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
    setShowExplanation((prev) => ({ ...prev, [questionId]: true }));
    if (optionIndex === correctIndex && onEarnXp) {
      onEarnXp(15);
    }
  };

  const groupTabs: { id: TopicGroupId; label: string; icon: string; count: number }[] = [
    { id: "natural", label: "🌦️ Địa lí tự nhiên", icon: "CloudSun", count: 7 },
    { id: "population", label: "👨👩👧 Địa lí dân cư", icon: "Users", count: 6 },
    { id: "economy", label: "🏭 Địa lí kinh tế", icon: "Factory", count: 7 },
    { id: "regions", label: "🗺️ Địa lí các vùng", icon: "MapPin", count: 8 },
  ];

  const sixTabs = [
    { key: "knowledge" as TabKey, label: "📖 Kiến thức", desc: "Cốt lõi & Thuật ngữ" },
    { key: "atlat" as TabKey, label: "🗺️ Atlat", desc: "Trang tra cứu & Kí hiệu" },
    { key: "statistics" as TabKey, label: "📊 Số liệu", desc: "Bảng phân tích chuyên" },
    { key: "thinking" as TabKey, label: "🧠 Tư duy", desc: "So sánh & Chứng minh" },
    { key: "exercises" as TabKey, label: "✏️ Bài tập", desc: "Phân cấp 5 cấp độ" },
    { key: "miniTest" as TabKey, label: "📝 Mini Test", desc: "Kiểm tra tức thì" },
  ];

  const filteredEthnicGroups = selectedLanguageFamily === "all"
    ? ETHNIC_GROUPS
    : ETHNIC_GROUPS.filter(g => g.languageFamily.includes(selectedLanguageFamily));

  const filteredEssayQuestions = selectedEssayLevel === "all"
    ? ESSAY_QUESTIONS
    : ESSAY_QUESTIONS.filter(q => q.level === selectedEssayLevel);

  return (
    <section className="py-10 bg-[#F8FAF9] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#146B5B] uppercase tracking-wider mb-2">
            <BookOpen className="w-4 h-4" />
            <span>Kho chuyên đề bám sát SGK Địa lí 9 & Chuyên cấp 2</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-[#16332F] tracking-tight">
            Kho Chuyên Đề & Ngân Hàng Học Liệu
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2 max-w-3xl font-normal leading-relaxed">
            Hệ thống chuyên đề 4 nhóm cốt lõi, chuyên mục đặc điểm 54 dân tộc Việt Nam và ngân hàng câu hỏi tự luận có barem điểm chi tiết từ cơ bản đến nâng cao.
          </p>
        </div>

        {/* 3 Main View Switchers */}
        <div className="flex flex-wrap items-center gap-3 pb-4 mb-6 border-b border-slate-200">
          <button
            onClick={() => setExplorerMode("topics")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer border ${
              explorerMode === "topics"
                ? "bg-[#146B5B] text-white border-[#146B5B] shadow-xs font-black"
                : "bg-white text-slate-700 hover:bg-slate-50 border-slate-200"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Chuyên đề 4 nhóm (28 bài học)</span>
          </button>

          <button
            onClick={() => setExplorerMode("ethnic")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer border ${
              explorerMode === "ethnic"
                ? "bg-[#146B5B] text-white border-[#146B5B] shadow-xs font-black"
                : "bg-white text-slate-700 hover:bg-slate-50 border-slate-200"
            }`}
          >
            <Users className="w-4 h-4 text-amber-500" />
            <span>Đặc điểm các Dân tộc Việt Nam (54 Dân tộc)</span>
          </button>

          <button
            onClick={() => setExplorerMode("essays")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer border ${
              explorerMode === "essays"
                ? "bg-[#146B5B] text-white border-[#146B5B] shadow-xs font-black"
                : "bg-white text-slate-700 hover:bg-slate-50 border-slate-200"
            }`}
          >
            <FileText className="w-4 h-4 text-sky-500" />
            <span>Ngân hàng Câu hỏi Tự luận (Cơ bản đến Chuyên)</span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* VIEW 1: TOPICS EXPLORER (CHUYÊN ĐỀ 4 NHÓM) */}
        {/* ========================================================================= */}
        {explorerMode === "topics" && (
          <div>
            {/* 4 Group Selector Tabs */}
            <div className="flex flex-wrap gap-2.5 pb-4 mb-6">
              {groupTabs.map((group) => {
                const isActive = selectedGroupId === group.id;
                return (
                  <button
                    key={group.id}
                    onClick={() => {
                      setSelectedGroupId(group.id);
                      const grp = TOPIC_GROUPS.find((g) => g.id === group.id);
                      if (grp && grp.topics.length > 0) {
                        setSelectedTopicId(grp.topics[0].id);
                      }
                    }}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer shadow-2xs border ${
                      isActive
                        ? "bg-[#146B5B] text-white border-[#146B5B] shadow-sm font-black"
                        : "bg-white text-slate-700 hover:bg-slate-50 border-slate-200"
                    }`}
                  >
                    <span>{group.label}</span>
                    <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"}`}>
                      {group.count} bài
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Topic Selector within active group */}
            <div className="mb-6 flex items-center gap-2.5 overflow-x-auto pb-2.5 no-scrollbar">
              {currentGroup.topics.map((topic) => {
                const isCurrent = topic.id === activeTopic?.id;
                return (
                  <button
                    key={topic.id}
                    onClick={() => setSelectedTopicId(topic.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer border ${
                      isCurrent
                        ? "bg-[#1677B8] text-white border-[#1677B8] shadow-xs font-black"
                        : "bg-white text-slate-700 hover:bg-sky-50 border-slate-200"
                    }`}
                  >
                    <span>{topic.title}</span>
                    <span className="text-xs opacity-85">({topic.difficulty})</span>
                  </button>
                );
              })}
            </div>

            {/* Active Topic Main Card */}
            {activeTopic && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden text-left">
                {/* Topic Banner */}
                <div className="p-6 sm:p-7 bg-gradient-to-r from-[#146B5B]/10 via-[#1677B8]/5 to-transparent border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#146B5B] mb-1.5">
                      <span>{currentGroup.title}</span>
                      <span>•</span>
                      <span className="text-[#1677B8]">{activeTopic.atlatPage}</span>
                      <span>•</span>
                      <span className="px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-900 text-xs font-black">
                        {activeTopic.difficulty}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black font-display text-[#16332F]">
                      {activeTopic.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-700 mt-2 max-w-3xl leading-relaxed">
                      {activeTopic.summary}
                    </p>
                  </div>

                  <div className="shrink-0 flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-bold text-slate-500">Trang Atlat gợi ý:</span>
                    <span className="px-3.5 py-1.5 bg-white border border-[#1677B8]/30 rounded-xl text-xs sm:text-sm font-extrabold text-[#1677B8] shadow-2xs">
                      {activeTopic.atlatPage}
                    </span>
                  </div>
                </div>

                {/* 6 Tabs Navigation Header */}
                <div className="grid grid-cols-3 sm:grid-cols-6 border-b border-slate-200 bg-slate-50/70 text-xs sm:text-sm font-bold">
                  {sixTabs.map((tab) => {
                    const isActive = activeTab === tab.key;
                    return (
                      <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`py-3.5 px-2 text-center transition-all border-b-2 flex flex-col items-center justify-center cursor-pointer ${
                          isActive
                            ? "border-[#146B5B] bg-white text-[#146B5B] font-black shadow-2xs"
                            : "border-transparent text-slate-600 hover:text-[#146B5B] hover:bg-slate-100/60"
                        }`}
                      >
                        <span className="text-base sm:text-lg mb-0.5">{tab.label.split(" ")[0]}</span>
                        <span className="truncate text-xs sm:text-sm font-bold">{tab.label.split(" ").slice(1).join(" ")}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Tab 1: 📖 Kiến thức */}
                {activeTab === "knowledge" && (
                  <div className="p-6 space-y-6">
                    <div>
                      <h4 className="text-sm font-extrabold text-[#146B5B] uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4 text-amber-500" />
                        <span>Thuật ngữ & Khái niệm cốt lõi</span>
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {activeTopic.content.knowledge.coreConcepts.map((item, idx) => (
                          <div key={idx} className="p-3.5 rounded-xl bg-[#E8F5EF]/60 border border-[#146B5B]/15">
                            <div className="font-bold text-xs text-[#146B5B] mb-1">
                              {item.term}
                            </div>
                            <p className="text-xs text-slate-700 leading-relaxed">
                              {item.explanation}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-sm font-extrabold text-[#16332F] uppercase tracking-wider flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-[#1677B8]" />
                        <span>Nội dung trọng tâm bài học</span>
                      </h4>
                      {activeTopic.content.knowledge.mainPoints.map((point, pIdx) => (
                        <div key={pIdx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                          <div className="font-extrabold text-sm text-[#16332F] mb-2">
                            {pIdx + 1}. {point.title}
                          </div>
                          <ul className="space-y-2 text-xs text-slate-700 pl-4 list-disc">
                            {point.bullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="leading-relaxed">
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200">
                      <div className="flex items-center gap-2 font-bold text-xs text-rose-800 mb-2">
                        <AlertCircle className="w-4 h-4 text-rose-600" />
                        <span>Cảnh báo lỗi sai thường gặp khi thi chuyên (Bẫy đề thi):</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-rose-900/90 pl-5 list-disc">
                        {activeTopic.content.knowledge.commonTraps.map((trap, tIdx) => (
                          <li key={tIdx} className="leading-relaxed font-medium">
                            {trap}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Tab 2: 🗺️ Atlat */}
                {activeTab === "atlat" && (
                  <div className="p-6 space-y-6">
                    <div className="p-4 rounded-xl bg-sky-50 border border-sky-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <div>
                        <span className="text-[11px] uppercase font-bold text-sky-700">Trang Atlat đối chiếu</span>
                        <h4 className="font-black text-base text-[#1677B8]">
                          {activeTopic.content.atlatGuide.page} — {activeTopic.content.atlatGuide.pageName}
                        </h4>
                      </div>
                      <span className="text-xs px-3 py-1 bg-white font-bold text-sky-800 rounded-lg border border-sky-300">
                        Phần thi thực hành bản đồ
                      </span>
                    </div>

                    <div>
                      <h5 className="font-extrabold text-xs text-slate-700 mb-2 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-[#146B5B]" />
                        <span>Các kí hiệu Atlat cần khoanh vùng nhận diện:</span>
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {activeTopic.content.atlatGuide.symbolsToNote.map((symbol, sIdx) => (
                          <span key={sIdx} className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg text-xs font-medium text-slate-800">
                            📌 {symbol}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h5 className="font-extrabold text-xs text-slate-700 flex items-center gap-1.5">
                        <Search className="w-3.5 h-3.5 text-[#1677B8]" />
                        <span>Quy trình 4 bước đọc Atlat chuẩn học sinh giỏi:</span>
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {activeTopic.content.atlatGuide.stepsToRead.map((step, idx) => (
                          <div key={idx} className="p-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-700">
                            <span className="font-bold text-[#146B5B] block mb-0.5">{step.split(":")[0]}:</span>
                            <span>{step.split(":").slice(1).join(":")}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="font-extrabold text-xs text-[#1677B8] mb-1">
                        🔍 Bài tập mẫu Atlat có hướng dẫn:
                      </div>
                      <div className="font-bold text-sm text-[#16332F] mb-3">
                        {activeTopic.content.atlatGuide.sampleExercise.question}
                      </div>
                      <div className="mb-3 space-y-1">
                        <div className="text-[11px] font-semibold text-slate-500">Manh mối từ Atlat:</div>
                        {activeTopic.content.atlatGuide.sampleExercise.atlatClues.map((clue, cIdx) => (
                          <div key={cIdx} className="text-xs text-slate-600 flex items-center gap-1.5">
                            <span className="text-[#146B5B]">✓</span> {clue}
                          </div>
                        ))}
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-[#146B5B]/30 text-xs text-slate-800">
                        <span className="font-bold text-[#146B5B] block mb-1">Đáp án mẫu chuẩn thi chuyên:</span>
                        <p className="leading-relaxed">{activeTopic.content.atlatGuide.sampleExercise.standardAnswer}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 3: 📊 Số liệu */}
                {activeTab === "statistics" && (
                  <div className="p-6 space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-extrabold text-sm text-[#16332F]">
                          {activeTopic.content.statistics.tableTitle}
                        </h4>
                        <span className="text-xs font-semibold text-slate-500">
                          Đơn vị tính: {activeTopic.content.statistics.unit}
                        </span>
                      </div>

                      <div className="overflow-x-auto border border-slate-200 rounded-xl">
                        <table className="w-full text-xs text-left">
                          <thead className="bg-slate-100 text-slate-700 font-extrabold uppercase">
                            <tr>
                              {activeTopic.content.statistics.headers.map((h, hIdx) => (
                                <th key={hIdx} className="py-2.5 px-4 border-b border-slate-200">
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {activeTopic.content.statistics.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-slate-50">
                                <td className="py-2.5 px-4 font-bold text-slate-800">
                                  {row.label}
                                </td>
                                {row.values.map((v, vIdx) => (
                                  <td key={vIdx} className="py-2.5 px-4 text-slate-700 font-mono font-medium">
                                    {v.toLocaleString()}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-[#E8F5EF]/60 border border-[#146B5B]/20">
                        <div className="font-bold text-xs text-[#146B5B] mb-2 flex items-center gap-1.5">
                          <BarChart3 className="w-4 h-4" />
                          <span>Nhận xét quy luật & xu hướng:</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-700 pl-4 list-disc">
                          {activeTopic.content.statistics.observations.map((obs, idx) => (
                            <li key={idx} className="leading-relaxed">{obs}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200">
                        <div className="font-bold text-xs text-amber-900 mb-2 flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4 text-amber-600" />
                          <span>Công thức tính toán & Dẫn chứng số liệu:</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-amber-950 pl-4 list-disc font-mono">
                          {activeTopic.content.statistics.calculations.map((calc, idx) => (
                            <li key={idx} className="leading-relaxed">{calc}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 4: 🧠 Tư duy */}
                {activeTab === "thinking" && (
                  <div className="p-6 space-y-5">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-extrabold text-amber-800 tracking-wider">
                          Dạng tư duy phân loại HSG
                        </span>
                        <h4 className="font-black text-base text-amber-900">
                          Kỹ năng: {activeTopic.content.thinking.type}
                        </h4>
                      </div>
                      <span className="w-8 h-8 rounded-full bg-amber-200 text-amber-800 flex items-center justify-center font-bold text-base">
                        🧠
                      </span>
                    </div>

                    <div>
                      <h5 className="font-extrabold text-xs text-slate-700 mb-2">
                        Khung tư duy logic (Framework):
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                        {activeTopic.content.thinking.framework.map((step, idx) => (
                          <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700">
                            {step}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-5 rounded-xl bg-white border-2 border-amber-200/80 shadow-xs space-y-3">
                      <div className="text-xs font-bold text-amber-700 uppercase">
                        Đề bài luyện tập tư duy:
                      </div>
                      <div className="font-extrabold text-sm sm:text-base text-[#16332F]">
                        "{activeTopic.content.thinking.samplePrompt}"
                      </div>

                      <div className="pt-3 border-t border-slate-100">
                        <div className="font-bold text-xs text-[#146B5B] mb-2">
                          Dàn ý chuyên sâu & Luận điểm đạt điểm tối đa:
                        </div>
                        <div className="space-y-2">
                          {activeTopic.content.thinking.expertOutline.map((point, idx) => (
                            <div key={idx} className="p-3 bg-[#E8F5EF]/40 rounded-lg border border-[#146B5B]/10 text-xs text-slate-800 leading-relaxed">
                              • {point}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 5: ✏️ Bài tập */}
                {activeTab === "exercises" && (
                  <div className="p-6 space-y-6">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <span className="text-xs font-bold text-slate-600">
                        Hệ thống câu hỏi trắc nghiệm & tự luận phân hóa (5 cấp độ)
                      </span>
                      <span className="text-xs text-[#146B5B] font-bold">
                        +15 XP mỗi câu đúng
                      </span>
                    </div>

                    <div className="space-y-6">
                      {activeTopic.content.exercises.map((ex, qIdx) => {
                        const selectedOpt = userAnswers[ex.id];
                        const isAnswered = selectedOpt !== undefined;
                        const isCorrect = selectedOpt === ex.correctAnswer;

                        return (
                          <div key={ex.id} className="p-5 rounded-xl bg-slate-50/70 border border-slate-200 space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-slate-500">
                                Câu {qIdx + 1}
                              </span>
                              <span className={`text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full ${
                                ex.level === "Nhận biết" ? "bg-emerald-100 text-emerald-800" :
                                ex.level === "Thông hiểu" ? "bg-sky-100 text-sky-800" :
                                ex.level === "Vận dụng" ? "bg-amber-100 text-amber-800" :
                                "bg-rose-100 text-rose-800"
                              }`}>
                                {ex.level}
                              </span>
                            </div>

                            <div className="font-extrabold text-sm text-[#16332F]">
                              {ex.question}
                            </div>

                            <div className="grid grid-cols-1 gap-2 pt-1">
                              {ex.options.map((opt, optIdx) => {
                                let btnStyle = "bg-white border-slate-200 text-slate-700 hover:border-[#146B5B]";
                                if (isAnswered) {
                                  if (optIdx === ex.correctAnswer) {
                                    btnStyle = "bg-emerald-50 border-emerald-500 text-emerald-900 font-bold";
                                  } else if (optIdx === selectedOpt) {
                                    btnStyle = "bg-rose-50 border-rose-400 text-rose-900 line-through";
                                  } else {
                                    btnStyle = "bg-white border-slate-200 text-slate-400 opacity-60";
                                  }
                                }

                                return (
                                  <button
                                    key={optIdx}
                                    disabled={isAnswered}
                                    onClick={() => handleSelectOption(ex.id, optIdx, ex.correctAnswer)}
                                    className={`w-full p-3 rounded-xl border text-xs text-left transition-all flex items-start gap-2.5 cursor-pointer ${btnStyle}`}
                                  >
                                    <span className="font-mono font-bold shrink-0">
                                      {String.fromCharCode(65 + optIdx)}.
                                    </span>
                                    <span className="leading-normal">{opt}</span>
                                  </button>
                                );
                              })}
                            </div>

                            {isAnswered && (
                              <div className={`p-3.5 rounded-xl border text-xs space-y-1.5 ${
                                isCorrect ? "bg-[#E8F5EF] border-[#146B5B]/30 text-[#146B5B]" : "bg-rose-50 border-rose-200 text-rose-900"
                              }`}>
                                <div className="font-extrabold flex items-center gap-1.5">
                                  {isCorrect ? (
                                    <>
                                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                      <span>Chính xác! (+15 XP)</span>
                                    </>
                                  ) : (
                                    <>
                                      <AlertCircle className="w-4 h-4 text-rose-600" />
                                      <span>Chưa chính xác. Đáp án đúng là {String.fromCharCode(65 + ex.correctAnswer)}</span>
                                    </>
                                  )}
                                </div>
                                <p className="text-slate-700 leading-relaxed">
                                  <strong>Giải thích:</strong> {ex.explanation}
                                </p>
                                {ex.trapWarning && (
                                  <p className="text-amber-800 text-[11px] font-medium pt-1">
                                    ⚠️ <strong>Bẫy đề thi:</strong> {ex.trapWarning}
                                  </p>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Tab 6: 📝 Mini Test */}
                {activeTab === "miniTest" && (
                  <div className="p-6 space-y-6">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-[#146B5B]/10 to-[#1677B8]/10 border border-[#146B5B]/20 flex items-center justify-between">
                      <div>
                        <h4 className="font-black text-sm sm:text-base text-[#16332F]">
                          Mini Test nhanh: Kiểm tra mức độ ghi nhớ
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Hoàn thành các câu hỏi để củng cố kiến thức trước khi chuyển bài tiếp theo
                        </p>
                      </div>
                      <span className="text-xs font-bold text-[#146B5B] bg-white px-3 py-1 rounded-lg border border-[#146B5B]/20">
                        {activeTopic.content.miniTest.length} câu
                      </span>
                    </div>

                    <div className="space-y-4">
                      {activeTopic.content.miniTest.map((mt, idx) => {
                        const selected = userAnswers[mt.id];
                        const isAnswered = selected !== undefined;
                        return (
                          <div key={mt.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-slate-500">Câu hỏi {idx + 1}</span>
                              <span className="text-[10px] uppercase font-bold text-[#146B5B] bg-[#E8F5EF] px-2 py-0.5 rounded">
                                {mt.level}
                              </span>
                            </div>
                            <div className="font-extrabold text-sm text-[#16332F]">
                              {mt.question}
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                              {mt.options.map((opt, oIdx) => {
                                let style = "bg-white border-slate-200 text-slate-700 hover:border-[#146B5B]";
                                if (isAnswered) {
                                  if (oIdx === mt.correctAnswer) {
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
                                    onClick={() => handleSelectOption(mt.id, oIdx, mt.correctAnswer)}
                                    className={`w-full p-2.5 rounded-lg border text-xs text-left cursor-pointer transition-all ${style}`}
                                  >
                                    {String.fromCharCode(65 + oIdx)}. {opt}
                                  </button>
                                );
                              })}
                            </div>
                            {isAnswered && (
                              <div className="p-3 rounded-lg bg-white border border-slate-200 text-xs text-slate-700">
                                <strong>Lời giải:</strong> {mt.explanation}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: ĐẶC ĐIỂM CÁC DÂN TỘC VIỆT NAM (54 DÂN TỘC) */}
        {/* ========================================================================= */}
        {explorerMode === "ethnic" && (
          <div className="space-y-6">
            {/* Filter by Language Family */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
              <span className="text-xs font-bold text-slate-500 shrink-0 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" />
                <span>Ngữ hệ:</span>
              </span>
              {LANGUAGE_FAMILIES.map((fam) => (
                <button
                  key={fam.id}
                  onClick={() => setSelectedLanguageFamily(fam.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border cursor-pointer ${
                    selectedLanguageFamily === fam.id
                      ? "bg-[#146B5B] text-white border-[#146B5B] shadow-2xs font-extrabold"
                      : "bg-white text-slate-700 hover:bg-slate-50 border-slate-200"
                  }`}
                >
                  {fam.name}
                </button>
              ))}
            </div>

            {/* Grid of Ethnic Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEthnicGroups.map((group) => (
                <div
                  key={group.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    {/* Image Header with Badge */}
                    <div className="relative h-44 w-full overflow-hidden">
                      <img
                        src={group.image}
                        alt={group.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                        <div>
                          <span className="text-[10px] uppercase font-bold text-amber-300 bg-slate-900/70 px-2 py-0.5 rounded">
                            {group.languageGroup}
                          </span>
                          <h3 className="text-xl font-black font-display text-white mt-1">
                            Dân tộc {group.name}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Stats bar */}
                    <div className="p-4 bg-slate-50/80 border-b border-slate-100 flex items-center justify-between text-xs font-medium text-slate-600">
                      <div>
                        <strong>Số dân:</strong> {group.populationApprox}
                      </div>
                      <span className="px-2 py-0.5 bg-[#E8F5EF] text-[#146B5B] font-bold rounded">
                        {group.percentageTotal}
                      </span>
                    </div>

                    {/* Cultural features list */}
                    <div className="p-4 space-y-3 text-xs text-slate-700">
                      <div>
                        <strong className="text-slate-900 block mb-0.5">📍 Địa bàn cư trú:</strong>
                        <span>{group.primaryRegions.join(", ")}</span>
                      </div>

                      <div>
                        <strong className="text-slate-900 block mb-0.5">🏡 Kiểu kiến trúc nhà ở:</strong>
                        <span>{group.culturalFeatures.architecture}</span>
                      </div>

                      <div>
                        <strong className="text-slate-900 block mb-0.5">👗 Trang phục truyền thống:</strong>
                        <span>{group.culturalFeatures.costume}</span>
                      </div>

                      <div>
                        <strong className="text-slate-900 block mb-0.5">🎉 Lễ hội tiêu biểu:</strong>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {group.culturalFeatures.festivals.map((fest, fIdx) => (
                            <span key={fIdx} className="px-2 py-0.5 bg-amber-50 text-amber-900 border border-amber-200 rounded font-semibold text-[11px]">
                              {fest}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <strong className="text-slate-900 block mb-0.5">🌾 Hoạt động kinh tế & phong tục:</strong>
                        <p className="leading-relaxed">{group.culturalFeatures.economicLife}</p>
                        <p className="mt-1 leading-relaxed text-slate-600 italic">{group.culturalFeatures.socialCustoms}</p>
                      </div>
                    </div>
                  </div>

                  {/* Cultural Quote footer */}
                  <div className="p-3.5 bg-[#E8F5EF]/50 border-t border-slate-100 text-xs text-[#146B5B] font-medium italic">
                    "{group.highlightQuote}"
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 3: NGÂN HÀNG CÂU HỎI TỰ LUẬN (CƠ BẢN ĐẾN CHUYÊN SÂU) */}
        {/* ========================================================================= */}
        {explorerMode === "essays" && (
          <div className="space-y-6">
            {/* Filter by Level */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
              <span className="text-xs font-bold text-slate-500 shrink-0 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" />
                <span>Cấp độ tự luận:</span>
              </span>
              {[
                { id: "all", label: "Tất cả các cấp độ" },
                { id: "Cơ bản", label: "🟢 Cơ bản" },
                { id: "Thông hiểu", label: "🔵 Thông hiểu" },
                { id: "Vận dụng", label: "🟡 Vận dụng" },
                { id: "Vận dụng cao", label: "🟠 Vận dụng cao" },
                { id: "Chuyên sâu", label: "🔴 Chuyên sâu / Thi HSG" }
              ].map((lvl) => (
                <button
                  key={lvl.id}
                  onClick={() => setSelectedEssayLevel(lvl.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border cursor-pointer ${
                    selectedEssayLevel === lvl.id
                      ? "bg-[#146B5B] text-white border-[#146B5B] shadow-2xs font-extrabold"
                      : "bg-white text-slate-700 hover:bg-slate-50 border-slate-200"
                  }`}
                >
                  {lvl.label}
                </button>
              ))}
            </div>

            {/* List of Essay Cards */}
            <div className="space-y-4">
              {filteredEssayQuestions.map((essay, idx) => {
                const isExpanded = expandedEssayId === essay.id;
                return (
                  <div
                    key={essay.id}
                    className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-[#146B5B] transition-all space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] uppercase font-black px-2.5 py-0.5 rounded-full ${
                          essay.level === "Cơ bản" ? "bg-emerald-100 text-emerald-800" :
                          essay.level === "Thông hiểu" ? "bg-sky-100 text-sky-800" :
                          essay.level === "Vận dụng" ? "bg-amber-100 text-amber-800" :
                          "bg-rose-100 text-rose-800"
                        }`}>
                          {essay.level}
                        </span>
                        <span className="text-xs font-bold text-[#146B5B]">
                          {essay.topicName}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                        {essay.atlatReference && (
                          <span className="px-2 py-0.5 bg-slate-100 rounded text-slate-700 font-bold">
                            📖 {essay.atlatReference}
                          </span>
                        )}
                        <span className="font-extrabold text-[#1677B8]">
                          Thang điểm: {essay.maxScore} điểm
                        </span>
                      </div>
                    </div>

                    {/* Question Prompt */}
                    <div className="font-black text-base sm:text-lg text-[#16332F] leading-snug">
                      Câu hỏi {idx + 1}: "{essay.prompt}"
                    </div>

                    {/* Key Concepts Pills */}
                    <div>
                      <span className="text-xs font-bold text-slate-500 mr-2">Từ khóa chấm điểm bắt buộc:</span>
                      <div className="inline-flex flex-wrap gap-1.5 mt-1">
                        {essay.keyConcepts.map((kw, kIdx) => (
                          <span key={kIdx} className="px-2.5 py-0.5 rounded-md bg-[#E8F5EF] text-[#146B5B] text-xs font-bold border border-[#146B5B]/20">
                            🔑 {kw}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Toggle Button for Rubric & Model Answer */}
                    <button
                      onClick={() => setExpandedEssayId(isExpanded ? null : essay.id)}
                      className="text-xs font-bold text-[#146B5B] hover:text-[#0f5548] flex items-center gap-1.5 cursor-pointer pt-1"
                    >
                      <span>{isExpanded ? "Thu gọn đáp án & barem điểm" : "Xem barem chấm điểm & Đáp án mẫu chuẩn thi chuyên"}</span>
                      {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    </button>

                    {/* Collapsible Rubric & Model Answer */}
                    {isExpanded && (
                      <div className="pt-4 border-t border-slate-100 space-y-4">
                        {/* Scoring Rubric Table */}
                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                          <h5 className="font-extrabold text-xs text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <Award className="w-4 h-4 text-amber-500" />
                            <span>Barem chấm điểm chi tiết (Thang điểm {essay.maxScore}):</span>
                          </h5>
                          <div className="space-y-2 text-xs">
                            {essay.scoringRubric.map((rubric, rIdx) => (
                              <div key={rIdx} className="flex items-start justify-between gap-3 p-2 bg-white rounded-lg border border-slate-200/80">
                                <div>
                                  <span className="font-bold text-[#146B5B]">{rubric.criterion}: </span>
                                  <span className="text-slate-700">{rubric.detail}</span>
                                </div>
                                <span className="font-mono font-bold text-emerald-700 shrink-0 bg-emerald-50 px-2 py-0.5 rounded">
                                  +{rubric.point}đ
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Model Answer */}
                        <div className="bg-[#E8F5EF]/30 rounded-xl p-4 border border-[#146B5B]/20 space-y-2">
                          <h5 className="font-black text-xs text-[#146B5B] uppercase tracking-wider flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span>Bài làm mẫu chuẩn đạt điểm tối đa:</span>
                          </h5>
                          <div className="p-3 bg-white rounded-lg border border-[#146B5B]/15 text-xs text-slate-800 whitespace-pre-line leading-relaxed font-normal">
                            {essay.modelAnswer}
                          </div>
                        </div>

                        {/* Expert Tip */}
                        <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 font-medium">
                          <strong className="text-amber-900 block mb-0.5">💡 Bí quyết thi chuyên:</strong>
                          {essay.expertTips}
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
