import React, { useState } from "react";
import { SPECIALIZED_SKILLS, COMPARISON_MATRIX_SAMPLE } from "../data/curriculumData";
import { SpecializedSkill } from "../types";
import { 
  Sparkles, 
  Search, 
  HelpCircle, 
  FileCheck, 
  CheckCircle2, 
  AlertOctagon, 
  Layers, 
  Scale,
  BrainCircuit,
  ArrowRight
} from "lucide-react";

export const SpecializedSkillCards: React.FC = () => {
  const [selectedSkillId, setSelectedSkillId] = useState<string>(SPECIALIZED_SKILLS[0].id);
  const activeSkill = SPECIALIZED_SKILLS.find((s) => s.id === selectedSkillId) || SPECIALIZED_SKILLS[0];

  const skillIcons: Record<string, string> = {
    skill_nhan_xet: "🔎",
    skill_giai_thich: "🧠",
    skill_chung_minh: "✍️",
    skill_so_sanh: "⚖️",
  };

  return (
    <section className="py-10 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-extrabold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kỹ năng phân loại học sinh giỏi chuyên</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#16332F] tracking-tight">
            Thẻ Kỹ Năng Chuyên — 4 Công Thức Đạt Điểm Tuyệt Đối
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-3xl">
            Bộ 4 kỹ năng cốt lõi chiếm 70% số điểm bài thi HSG: Nhận xét khoa học, Giải thích nguyên nhân tự nhiên - nhân văn, Chứng minh bằng số liệu và So sánh ma trận tiêu chí.
          </p>
        </div>

        {/* 4 Skill Cards Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {SPECIALIZED_SKILLS.map((skill) => {
            const isSelected = skill.id === activeSkill.id;
            return (
              <div
                key={skill.id}
                onClick={() => setSelectedSkillId(skill.id)}
                className={`p-5 rounded-2xl border-2 transition-all cursor-pointer text-left flex flex-col justify-between ${
                  isSelected
                    ? "bg-white border-[#146B5B] shadow-lg scale-102"
                    : "bg-white border-slate-200/80 hover:border-slate-300 hover:shadow-xs"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{skillIcons[skill.id]}</span>
                    <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                      isSelected ? "bg-[#E8F5EF] text-[#146B5B]" : "bg-slate-100 text-slate-600"
                    }`}>
                      Công thức 10đ
                    </span>
                  </div>

                  <h3 className="font-extrabold text-base text-[#16332F] mb-1">
                    {skill.title}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-2 mb-3">
                    {skill.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#146B5B]">
                  <span>Xem chi tiết bước</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Skill Detail Workbench */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 text-left space-y-6">
          {/* Header of the Active Skill */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{skillIcons[activeSkill.id]}</span>
                <span className="text-xs font-extrabold text-[#146B5B] uppercase tracking-wider">
                  Kỹ năng chuyên sâu
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#16332F]">
                {activeSkill.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                {activeSkill.summary}
              </p>
            </div>

            <div className="p-3 bg-[#E8F5EF] rounded-xl border border-[#146B5B]/20 text-xs text-[#146B5B] font-bold max-w-md">
              <span className="block text-[10px] uppercase text-emerald-800 tracking-wider">
                Công thức làm bài chuẩn:
              </span>
              <span className="font-mono text-xs">{activeSkill.formula}</span>
            </div>
          </div>

          {/* Step-by-Step Flow */}
          <div>
            <h4 className="font-extrabold text-sm text-[#16332F] uppercase tracking-wider mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#1677B8]" />
              <span>Quy trình các bước triển khai bài làm:</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {activeSkill.steps.map((step, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-1">
                  <div className="w-6 h-6 rounded-full bg-[#146B5B] text-white flex items-center justify-center font-bold text-xs mb-2">
                    {idx + 1}
                  </div>
                  <div className="font-extrabold text-xs text-slate-800">
                    {step.stepName}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Concrete Example */}
          <div className="p-5 rounded-xl bg-[#E8F5EF]/40 border border-[#146B5B]/20 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#146B5B] uppercase">
                Ví dụ thực tế trong đề thi:
              </span>
              <span className="text-xs font-semibold text-slate-500">
                Chuyên đề nâng cao
              </span>
            </div>

            <div className="font-extrabold text-sm sm:text-base text-[#16332F]">
              "{activeSkill.example.prompt}"
            </div>

            <div className="p-4 bg-white rounded-lg border border-[#146B5B]/20 text-xs text-slate-800 space-y-2">
              <div className="font-bold text-[#146B5B] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Cách giải mẫu đạt điểm tuyệt đối:</span>
              </div>
              <div className="whitespace-pre-line leading-relaxed font-sans text-slate-700">
                {activeSkill.example.solution}
              </div>
            </div>
          </div>

          {/* Special Comparative Matrix Table if Skill is Comparison (So sánh) */}
          {activeSkill.id === "skill_so_sanh" && (
            <div className="space-y-3 pt-2">
              <h4 className="font-extrabold text-sm text-[#16332F] flex items-center gap-2">
                <Scale className="w-4 h-4 text-amber-600" />
                <span>{COMPARISON_MATRIX_SAMPLE.title}</span>
              </h4>

              <div className="overflow-x-auto border border-slate-200 rounded-xl">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100 text-slate-700 font-extrabold uppercase">
                    <tr>
                      <th className="py-2.5 px-4 border-b border-slate-200 w-1/4">Tiêu chí so sánh</th>
                      <th className="py-2.5 px-4 border-b border-slate-200 w-3/8 text-[#146B5B]">Đông Nam Bộ</th>
                      <th className="py-2.5 px-4 border-b border-slate-200 w-3/8 text-[#1677B8]">Tây Nguyên</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {COMPARISON_MATRIX_SAMPLE.rows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="py-2.5 px-4 font-bold text-slate-800 bg-slate-50/50">
                          {row.criteria}
                        </td>
                        <td className="py-2.5 px-4 text-slate-700 leading-relaxed">
                          {row.dongNamBo}
                        </td>
                        <td className="py-2.5 px-4 text-slate-700 leading-relaxed">
                          {row.tayNguyen}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Common Mistakes to Avoid */}
          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200">
            <div className="font-bold text-xs text-rose-800 flex items-center gap-2 mb-2">
              <AlertOctagon className="w-4 h-4 text-rose-600" />
              <span>Những lỗi thường gặp khiến học sinh bị trừ điểm nặng:</span>
            </div>
            <ul className="space-y-1.5 text-xs text-rose-900/90 pl-5 list-disc">
              {activeSkill.commonMistakes.map((mistake, mIdx) => (
                <li key={mIdx} className="leading-relaxed font-medium">
                  {mistake}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
