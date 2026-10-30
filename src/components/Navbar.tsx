import React from "react";
import { 
  BookOpen, 
  BookMarked,
  Compass, 
  BarChart3, 
  Award, 
  Calendar, 
  Users, 
  TrendingUp,
  Sparkles,
  Search,
  Gamepad2,
  Globe
} from "lucide-react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  xp: number;
  streakDays: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  xp,
  streakDays,
}) => {
  const navItems = [
    { id: "hero", label: "Tổng quan", icon: Compass },
    { id: "curriculum", label: "Kho chuyên đề", icon: BookOpen },
    { id: "textbook", label: "Bài học SGK", icon: BookMarked },
    { id: "atlat", label: "Phòng Atlat", icon: Search },
    { id: "chart", label: "Bậc thầy biểu đồ", icon: BarChart3 },
    { id: "skills", label: "Kỹ năng chuyên", icon: Sparkles },
    { id: "games", label: "Trò chơi ôn tập", icon: Gamepad2 },
    { id: "world", label: "Địa lí nước ngoài", icon: Globe },
    { id: "challenge", label: "Thử thách 30 ngày", icon: Calendar },
    { id: "progress", label: "Tiến độ của tôi", icon: TrendingUp },
    { id: "community", label: "Nhóm thảo luận", icon: Users },
    { id: "leaderboard", label: "Bảng xếp hạng", icon: Award },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E8F5EF] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setActiveTab("hero")}
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#146B5B] to-[#1677B8] flex items-center justify-center text-white font-black text-2xl shadow-sm tracking-tighter font-display">
              9Đ
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <span className="font-display font-black text-2xl text-[#146B5B] tracking-tight">ĐỊA LÍ 9</span>
                <span className="text-[11px] uppercase font-extrabold tracking-widest px-2.5 py-0.5 rounded-full bg-[#E8F5EF] text-[#146B5B] border border-[#146B5B]/30">
                  Chuyên Địa Cấp 2
                </span>
              </div>
              <p className="text-xs text-[#16332F]/75 font-semibold truncate hidden sm:block max-w-xs">
                Chinh phục trường Chuyên & HSG Quốc gia
              </p>
            </div>
          </div>

          {/* Center navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.slice(0, 9).map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs xl:text-sm font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#146B5B] text-white shadow-sm"
                      : "text-[#16332F]/85 hover:text-[#146B5B] hover:bg-[#E8F5EF]/70"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Stats & Action */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Streak & XP Badges */}
            <div 
              onClick={() => setActiveTab("challenge")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs sm:text-sm font-bold cursor-pointer hover:bg-amber-100 transition-colors shadow-2xs"
              title="Chuỗi học tập liên tiếp"
            >
              <span className="text-base">🔥</span>
              <span>{streakDays} ngày</span>
            </div>

            <div 
              onClick={() => setActiveTab("progress")}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E8F5EF] border border-[#146B5B]/25 text-[#146B5B] text-xs sm:text-sm font-bold cursor-pointer hover:bg-[#146B5B]/15 transition-colors shadow-2xs"
              title="Điểm kinh nghiệm XP"
            >
              <span className="text-sm">⭐</span>
              <span>{xp.toLocaleString()} XP</span>
            </div>

            {/* Games Hub Quick Trigger */}
            <button
              id="header-games-btn"
              onClick={() => setActiveTab("games")}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#146B5B] to-[#1677B8] text-white text-xs sm:text-sm font-bold shadow-sm hover:opacity-95 active:scale-95 transition-all cursor-pointer"
            >
              <Gamepad2 className="w-4 h-4 text-[#FFF3B0]" />
              <span className="hidden sm:inline">Trò chơi ôn tập</span>
            </button>
          </div>
        </div>

        {/* Mobile secondary tab bar */}
        <div className="flex xl:hidden items-center gap-2 overflow-x-auto py-2.5 no-scrollbar border-t border-slate-100 text-xs sm:text-sm">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 shrink-0 ${
                  isActive
                    ? "bg-[#146B5B] text-white"
                    : "text-[#16332F]/75 hover:bg-slate-100"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
