import React, { useState } from "react";
import { STICKY_NOTES } from "../data/curriculumData";
import { StickyNote } from "../types";
import { 
  Lightbulb, 
  Key, 
  AlertCircle, 
  Star, 
  Flame, 
  Copy, 
  Check, 
  Bookmark,
  Filter
} from "lucide-react";

export const StickyNotesTips: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>("ALL");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: "ALL", label: "Tất cả ghi nhớ", icon: "📌" },
    { id: "SỐ LIỆU THCS", label: "🔢 SỐ LIỆU THCS", icon: "🔢" },
    { id: "MẸO NHỚ", label: "💡 MẸO NHỚ", icon: "💡" },
    { id: "TỪ KHÓA", label: "🧠 TỪ KHÓA", icon: "🧠" },
    { id: "DỄ NHẦM", label: "📌 DỄ NHẦM", icon: "📌" },
    { id: "THƯỜNG GẶP", label: "⭐ THƯỜNG GẶP", icon: "⭐" },
    { id: "NÂNG CAO", label: "🔥 NÂNG CAO", icon: "🔥" },
  ];

  const filteredNotes = selectedType === "ALL" 
    ? STICKY_NOTES 
    : STICKY_NOTES.filter((n) => n.category === selectedType);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getStyleForCategory = (cat: string) => {
    switch (cat) {
      case "SỐ LIỆU THCS":
        return {
          bg: "bg-teal-50/90 hover:bg-teal-50",
          border: "border-teal-400",
          badge: "bg-teal-700 text-white",
          pin: "bg-teal-500",
          accent: "#0F766E"
        };
      case "MẸO NHỚ":
        return {
          bg: "bg-amber-50/90 hover:bg-amber-50",
          border: "border-amber-300",
          badge: "bg-amber-200 text-amber-900",
          pin: "bg-amber-400",
          accent: "#D97706"
        };
      case "TỪ KHÓA":
        return {
          bg: "bg-sky-50/90 hover:bg-sky-50",
          border: "border-sky-300",
          badge: "bg-sky-200 text-sky-900",
          pin: "bg-sky-400",
          accent: "#0284C7"
        };
      case "DỄ NHẦM":
        return {
          bg: "bg-rose-50/90 hover:bg-rose-50",
          border: "border-rose-300",
          badge: "bg-rose-200 text-rose-900",
          pin: "bg-rose-400",
          accent: "#E11D48"
        };
      case "THƯỜNG GẶP":
        return {
          bg: "bg-emerald-50/90 hover:bg-emerald-50",
          border: "border-emerald-300",
          badge: "bg-emerald-200 text-emerald-900",
          pin: "bg-emerald-400",
          accent: "#059669"
        };
      case "NÂNG CAO":
        return {
          bg: "bg-purple-50/90 hover:bg-purple-50",
          border: "border-purple-300",
          badge: "bg-purple-200 text-purple-900",
          pin: "bg-purple-400",
          accent: "#7C3AED"
        };
      default:
        return {
          bg: "bg-slate-50",
          border: "border-slate-300",
          badge: "bg-slate-200 text-slate-800",
          pin: "bg-slate-400",
          accent: "#475569"
        };
    }
  };

  return (
    <section className="py-10 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-extrabold uppercase tracking-wider mb-2">
            <Bookmark className="w-3.5 h-3.5" />
            <span>Bức tường ghi nhớ nhanh</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#16332F] tracking-tight">
            Ghi Nhớ Nhanh (Sticky Notes) — Mẹo Điểm 10
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Các lưu ý vàng, mẹo phân biệt bẫy trắc nghiệm, các cặp khái niệm dễ nhầm lẫn và từ khóa quyết định dạng biểu đồ được đúc kết từ các thủ khoa.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedType === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedType(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer border ${
                  isActive
                    ? "bg-[#146B5B] text-white border-[#146B5B] shadow-2xs"
                    : "bg-white text-slate-700 hover:bg-slate-50 border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Sticky Notes Wall (Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredNotes.map((note) => {
            const styling = getStyleForCategory(note.category);
            const isCopied = copiedId === note.id;

            return (
              <div
                key={note.id}
                className={`p-5 rounded-2xl border-2 ${styling.bg} ${styling.border} shadow-sm transition-all hover:-translate-y-1 hover:shadow-md text-left flex flex-col justify-between relative group`}
              >
                {/* Top pin */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold ${styling.badge}`}>
                    {note.category}
                  </span>

                  <button
                    onClick={() => handleCopy(note.id, `${note.title}\n${note.content}`)}
                    className="p-1.5 rounded-lg bg-white/70 hover:bg-white text-slate-600 cursor-pointer shadow-2xs transition-colors"
                    title="Sao chép mẹo này"
                  >
                    {isCopied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <div className="space-y-2 mb-3">
                  <h4 className="font-black text-sm text-[#16332F] leading-snug">
                    {note.title}
                  </h4>
                  <p className="text-xs text-slate-700 leading-relaxed font-normal whitespace-pre-line">
                    {note.content}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-medium">Chuyên đề: Địa lí 9 Nâng cao</span>
                  {isCopied && (
                    <span className="text-emerald-700 font-bold">Đã chép!</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
