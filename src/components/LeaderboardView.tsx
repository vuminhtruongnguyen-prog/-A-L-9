import React, { useState } from "react";
import { Award, Flame, Star, ShieldCheck, Trophy, Medal } from "lucide-react";

interface LeaderboardUser {
  rank: number;
  name: string;
  school: string;
  province: string;
  xp: number;
  streakDays: number;
  badgesCount: number;
  accuracyRate: number;
  avatarLetter: string;
}

export const LeaderboardView: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<"national" | "provincial" | "weekly">("national");

  const topStudents: LeaderboardUser[] = [
    {
      rank: 1,
      name: "Nguyễn Minh Khang",
      school: "THPT Chuyên Hà Nội - Amsterdam",
      province: "Hà Nội",
      xp: 8450,
      streakDays: 45,
      badgesCount: 18,
      accuracyRate: 98,
      avatarLetter: "K",
    },
    {
      rank: 2,
      name: "Trần Bảo Ngọc",
      school: "THPT Chuyên Lê Hồng Phong",
      province: "TP. Hồ Chí Minh",
      xp: 7920,
      streakDays: 38,
      badgesCount: 16,
      accuracyRate: 96,
      avatarLetter: "N",
    },
    {
      rank: 3,
      name: "Lê Hoàng Long",
      school: "THPT Chuyên Sư Phạm Hà Nội",
      province: "Hà Nội",
      xp: 7480,
      streakDays: 35,
      badgesCount: 15,
      accuracyRate: 95,
      avatarLetter: "L",
    },
    {
      rank: 4,
      name: "Phạm Thảo Vy",
      school: "THPT Chuyên Lam Sơn",
      province: "Thanh Hóa",
      xp: 6850,
      streakDays: 29,
      badgesCount: 14,
      accuracyRate: 94,
      avatarLetter: "V",
    },
    {
      rank: 5,
      name: "Đỗ Gia Huy",
      school: "THPT Chuyên Quốc Học Huế",
      province: "Thừa Thiên Huế",
      xp: 6420,
      streakDays: 27,
      badgesCount: 13,
      accuracyRate: 92,
      avatarLetter: "H",
    },
    {
      rank: 6,
      name: "Vũ Phương Anh",
      school: "THPT Chuyên Trần Phú",
      province: "Hải Phòng",
      xp: 6150,
      streakDays: 24,
      badgesCount: 12,
      accuracyRate: 91,
      avatarLetter: "A",
    },
    {
      rank: 7,
      name: "Hoàng Đức Mạnh",
      school: "THPT Chuyên Bắc Ninh",
      province: "Bắc Ninh",
      xp: 5900,
      streakDays: 22,
      badgesCount: 11,
      accuracyRate: 90,
      avatarLetter: "M",
    },
  ];

  return (
    <section className="py-10 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-extrabold uppercase tracking-wider mb-2">
            <Trophy className="w-3.5 h-3.5" />
            <span>Vinh danh học sinh xuất sắc toàn quốc</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#16332F] tracking-tight">
            Bảng Xếp Hạng Đấu Trường Chuyên Địa Lí
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Cạnh tranh lành mạnh dựa trên điểm tích lũy kinh nghiệm (XP), chuỗi ngày tự học kiên trì và tỉ lệ làm đúng đề thi học sinh giỏi các cấp.
          </p>
        </div>

        {/* Current User Card */}
        <div className="bg-gradient-to-r from-[#146B5B] to-[#1677B8] p-5 rounded-2xl text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 shadow-md text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center text-xl font-black text-white">
              14
            </div>
            <div>
              <div className="text-xs text-emerald-100 font-bold uppercase tracking-wider">
                Vị trí của bạn hiện tại
              </div>
              <h3 className="font-extrabold text-base sm:text-lg">
                Học sinh 9A • Top 5% toàn quốc
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs sm:text-sm font-bold">
            <div className="flex items-center gap-1.5">
              <span>⭐</span>
              <span>2.450 XP</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span>🔥</span>
              <span>12 ngày</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span>🎯</span>
              <span>88% đúng</span>
            </div>
          </div>
        </div>

        {/* Top 3 Podium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Rank 2 (Silver) */}
          <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 shadow-sm flex flex-col items-center text-center relative order-2 md:order-1">
            <span className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 font-black text-sm flex items-center justify-center mb-3">
              🥈 2
            </span>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-400 to-slate-600 text-white flex items-center justify-center font-black text-2xl shadow-md mb-2">
              {topStudents[1].avatarLetter}
            </div>
            <h4 className="font-black text-base text-[#16332F]">{topStudents[1].name}</h4>
            <p className="text-xs text-slate-500 mb-3">{topStudents[1].school}</p>
            <div className="w-full pt-3 border-t border-slate-100 flex justify-around text-xs font-bold text-slate-700">
              <span>⭐ {topStudents[1].xp.toLocaleString()} XP</span>
              <span>🔥 {topStudents[1].streakDays} ngày</span>
            </div>
          </div>

          {/* Rank 1 (Gold) */}
          <div className="bg-gradient-to-b from-amber-50 to-white rounded-2xl border-2 border-amber-300 p-6 shadow-md flex flex-col items-center text-center relative order-1 md:order-2 md:-translate-y-2">
            <span className="w-8 h-8 rounded-full bg-amber-400 text-amber-900 font-black text-sm flex items-center justify-center mb-3 shadow-xs">
              👑 1
            </span>
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center font-black text-3xl shadow-lg ring-4 ring-amber-200 mb-2">
              {topStudents[0].avatarLetter}
            </div>
            <h4 className="font-black text-lg text-[#16332F]">{topStudents[0].name}</h4>
            <p className="text-xs text-amber-800 font-bold mb-3">{topStudents[0].school}</p>
            <div className="w-full pt-3 border-t border-amber-100 flex justify-around text-xs font-black text-amber-900">
              <span>⭐ {topStudents[0].xp.toLocaleString()} XP</span>
              <span>🔥 {topStudents[0].streakDays} ngày</span>
              <span>🎯 {topStudents[0].accuracyRate}%</span>
            </div>
          </div>

          {/* Rank 3 (Bronze) */}
          <div className="bg-white rounded-2xl border-2 border-amber-200/80 p-6 shadow-sm flex flex-col items-center text-center relative order-3">
            <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-black text-sm flex items-center justify-center mb-3">
              🥉 3
            </span>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-700 to-amber-900 text-white flex items-center justify-center font-black text-2xl shadow-md mb-2">
              {topStudents[2].avatarLetter}
            </div>
            <h4 className="font-black text-base text-[#16332F]">{topStudents[2].name}</h4>
            <p className="text-xs text-slate-500 mb-3">{topStudents[2].school}</p>
            <div className="w-full pt-3 border-t border-slate-100 flex justify-around text-xs font-bold text-slate-700">
              <span>⭐ {topStudents[2].xp.toLocaleString()} XP</span>
              <span>🔥 {topStudents[2].streakDays} ngày</span>
            </div>
          </div>
        </div>

        {/* Full Rankings Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-100 text-slate-700 font-extrabold uppercase">
                <tr>
                  <th className="py-3 px-4 w-16">Hạng</th>
                  <th className="py-3 px-4">Học sinh & Trường THCS / Chuyên</th>
                  <th className="py-3 px-4">Tỉnh / Thành</th>
                  <th className="py-3 px-4 text-center">Chuỗi ngày</th>
                  <th className="py-3 px-4 text-center">Độ chính xác</th>
                  <th className="py-3 px-4 text-right">Tổng XP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {topStudents.map((st) => (
                  <tr key={st.rank} className="hover:bg-slate-50">
                    <td className="py-3 px-4 font-black text-slate-700 text-sm">
                      #{st.rank}
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-extrabold text-[#16332F]">{st.name}</div>
                      <div className="text-[11px] text-slate-500">{st.school}</div>
                    </td>
                    <td className="py-3 px-4 text-slate-600 font-medium">
                      {st.province}
                    </td>
                    <td className="py-3 px-4 text-center font-bold text-amber-600">
                      🔥 {st.streakDays} ngày
                    </td>
                    <td className="py-3 px-4 text-center font-bold text-emerald-600">
                      {st.accuracyRate}%
                    </td>
                    <td className="py-3 px-4 text-right font-black font-mono text-[#146B5B] text-sm">
                      {st.xp.toLocaleString()} XP
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
