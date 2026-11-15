import React, { useState, useEffect, useRef } from "react";
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
  Globe,
  CloudRain,
  UserCheck,
  UserX,
  LogOut,
  ChevronDown,
  X,
  Check,
} from "lucide-react";
import {
  MASCOT_CHARACTERS,
  StudentIdentity,
  getMascotById,
} from "../data/userProfileData";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  xp: number;
  streakDays: number;
  identity: StudentIdentity;
  onSaveProfile: (name: string, className: string, school: string, mascotId: string) => void;
  onUseGuestMode: (mascotId: string) => void;
  onSelectMascot: (mascotId: string) => void;
  onLogoutProfile: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  xp,
  streakDays,
  identity,
  onSaveProfile,
  onUseGuestMode,
  onSelectMascot,
  onLogoutProfile,
}) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [draftName, setDraftName] = useState(identity.name);
  const [draftClass, setDraftClass] = useState(identity.className);
  const [draftSchool, setDraftSchool] = useState(identity.school);
  const [draftMascotId, setDraftMascotId] = useState(identity.mascotId);
  const [formError, setFormError] = useState<string | null>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDraftName(identity.name);
    setDraftClass(identity.className);
    setDraftSchool(identity.school);
    setDraftMascotId(identity.mascotId);
  }, [identity]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsProfileOpen(false);
    };
    if (isProfileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEsc);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isProfileOpen]);

  const activeMascot = getMascotById(identity.mascotId);
  const draftMascot = getMascotById(draftMascotId);

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!draftName.trim()) {
      setFormError("Vui lòng nhập tên của bạn (hoặc chọn Chế độ Khách bên dưới).");
      return;
    }
    setFormError(null);
    onSaveProfile(
      draftName.trim(),
      draftClass.trim(),
      draftSchool.trim(),
      draftMascotId
    );
    setIsProfileOpen(false);
  };

  const handleGuestClick = () => {
    setFormError(null);
    onUseGuestMode(draftMascotId);
    setIsProfileOpen(false);
  };

  const handleLogoutClick = () => {
    setFormError(null);
    setDraftName("");
    setDraftClass("");
    setDraftSchool("");
    onLogoutProfile();
  };

  const navItems = [
    { id: "hero", label: "Tổng quan", icon: Compass },
    { id: "curriculum", label: "Kho chuyên đề", icon: BookOpen },
    { id: "textbook", label: "Bài học SGK", icon: BookMarked },
    { id: "atlat", label: "Phòng Atlat", icon: Search },
    { id: "chart", label: "Bậc thầy biểu đồ", icon: BarChart3 },
    { id: "skills", label: "Kỹ năng chuyên", icon: Sparkles },
    { id: "games", label: "Trò chơi ôn tập", icon: Gamepad2 },
    { id: "world", label: "Địa lí nước ngoài", icon: Globe },
    { id: "climate", label: "Biến đổi khí hậu ở Việt Nam", icon: CloudRain },
    { id: "challenge", label: "Thử thách 30 ngày", icon: Calendar },
    { id: "progress", label: "Tiến độ của tôi", icon: TrendingUp },
    { id: "community", label: "Nhóm thảo luận", icon: Users },
    { id: "leaderboard", label: "Bảng xếp hạng", icon: Award },
  ];

  const profileChipLabel =
    identity.mode === "profile" && identity.name
      ? identity.className
        ? `${identity.name} · ${identity.className}`
        : identity.name
      : identity.mode === "guest"
      ? "Chế độ Khách"
      : "Nhập Tên · Lớp";

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E8F5EF] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: Brand + Right Stats & User Identity Box */}
        <div className="flex items-center justify-between gap-4 h-16">
          {/* Logo & Brand */}
          <div
            className="flex items-center gap-3 cursor-pointer min-w-0"
            onClick={() => setActiveTab("hero")}
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#146B5B] via-[#0E7A66] to-[#1677B8] flex items-center justify-center text-white font-black text-xs sm:text-sm tracking-widest shadow-xs font-display shrink-0">
              GLOW
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="font-display font-black text-xl sm:text-2xl text-[#146B5B] tracking-tight whitespace-nowrap">
                  GLOW
                </span>
                <span className="text-[11px] font-bold tracking-wide text-[#146B5B]/90 hidden lg:inline whitespace-nowrap">
                  Geography – Learning – Opportunity – Wisdom
                </span>
              </div>
              <p className="text-xs text-[#16332F]/80 font-semibold hidden sm:block whitespace-nowrap">
                Trong tay tấm bản đồ Việt Nam - Trong tim hoài bão khám phá toàn cầu
              </p>
            </div>
          </div>

          {/* Right Stats, Profile Box next to "12 ngày" & Action */}
          <div className="flex items-center gap-2 shrink-0 relative" ref={popoverRef}>
            {/* Streak Box ("12 ngày") */}
            <button
              type="button"
              onClick={() => setActiveTab("challenge")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs sm:text-sm font-bold cursor-pointer hover:bg-amber-100 transition-colors whitespace-nowrap shrink-0 tabular-nums"
              title="Chuỗi học tập liên tiếp"
            >
              <span>🔥</span>
              <span>{streakDays} ngày</span>
            </button>

            {/* Small Profile / Name / Class / School / Mascot / Guest / Logout Box right next to "12 ngày" */}
            <button
              id="header-profile-btn"
              type="button"
              onClick={() => setIsProfileOpen((prev) => !prev)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs sm:text-sm font-bold cursor-pointer transition-all whitespace-nowrap shrink-0 ${
                identity.mode === "profile"
                  ? "bg-[#E8F5EF] border-[#146B5B]/40 text-[#146B5B] hover:bg-[#146B5B]/15"
                  : identity.mode === "guest"
                  ? "bg-sky-50 border-sky-200 text-sky-900 hover:bg-sky-100"
                  : "bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200/70"
              }`}
              title={
                identity.mode === "profile"
                  ? `${identity.name}${identity.className ? ` - Lớp ${identity.className}` : ""}${identity.school ? ` - ${identity.school}` : ""} (${activeMascot.name})`
                  : identity.mode === "guest"
                  ? `Chế độ Khách (${activeMascot.name})`
                  : "Nhấn để nhập Tên, Lớp, Trường & chọn Linh thú"
              }
            >
              <span className="text-base leading-none" aria-hidden="true">
                {activeMascot.emoji}
              </span>
              <span className="max-w-[130px] sm:max-w-[170px] truncate">
                {profileChipLabel}
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform ${
                  isProfileOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* XP Badge */}
            <button
              type="button"
              onClick={() => setActiveTab("progress")}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#E8F5EF] border border-[#146B5B]/25 text-[#146B5B] text-xs sm:text-sm font-bold cursor-pointer hover:bg-[#146B5B]/15 transition-colors whitespace-nowrap shrink-0 tabular-nums"
              title="Điểm kinh nghiệm XP"
            >
              <span>⭐</span>
              <span>{xp.toLocaleString()} XP</span>
            </button>

            {/* Games Hub Quick Trigger */}
            <button
              id="header-games-btn"
              type="button"
              onClick={() => setActiveTab("games")}
              className="hidden lg:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#146B5B] to-[#1677B8] text-white text-xs sm:text-sm font-bold shadow-xs hover:opacity-95 active:scale-95 transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              <Gamepad2 className="w-4 h-4 text-[#FFF3B0]" />
              <span>Trò chơi ôn tập</span>
            </button>

            {/* Profile & Mascot Dropdown Popover */}
            {isProfileOpen && (
              <div className="absolute right-0 top-full mt-2.5 w-[340px] sm:w-[410px] max-h-[85vh] overflow-y-auto bg-white rounded-2xl border border-slate-200 shadow-2xl p-4 sm:p-5 z-50 text-left space-y-4">
                {/* Popover Header */}
                <div className="flex items-start justify-between gap-2 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-11 h-11 rounded-xl border ${activeMascot.accentBg} ${activeMascot.accentBorder} flex items-center justify-center text-2xl shrink-0`}
                    >
                      {activeMascot.emoji}
                    </div>
                    <div>
                      <div className="text-sm font-black text-[#16332F]">
                        {identity.mode === "profile"
                          ? identity.name
                          : identity.mode === "guest"
                          ? "Đang dùng Chế độ Khách"
                          : "Định danh học sinh GLOW"}
                      </div>
                      <div className="text-xs text-slate-600">
                        {identity.mode === "profile" ? (
                          <span>
                            {identity.className ? `Lớp ${identity.className}` : "Chưa ghi lớp"}
                            {identity.school ? ` · ${identity.school}` : ""}
                          </span>
                        ) : identity.mode === "guest" ? (
                          <span>Linh thú: {activeMascot.name} · Ẩn danh</span>
                        ) : (
                          <span>Nhập tên, lớp, trường để phân biệt tài khoản</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsProfileOpen(false)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                    aria-label="Đóng khung hồ sơ"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Form: Name, Class, School */}
                <form onSubmit={handleProfileSubmit} className="space-y-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Họ và tên của bạn:
                    </label>
                    <input
                      type="text"
                      value={draftName}
                      onChange={(e) => setDraftName(e.target.value)}
                      placeholder="Ví dụ: Nguyễn Minh Châu"
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#16332F] bg-slate-50 focus:bg-white focus:outline-none focus:border-[#146B5B]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Lớp:
                      </label>
                      <input
                        type="text"
                        value={draftClass}
                        onChange={(e) => setDraftClass(e.target.value)}
                        placeholder="Ví dụ: 9A1"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#16332F] bg-slate-50 focus:bg-white focus:outline-none focus:border-[#146B5B]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Tên trường:
                      </label>
                      <input
                        type="text"
                        value={draftSchool}
                        onChange={(e) => setDraftSchool(e.target.value)}
                        placeholder="Ví dụ: THCS Chu Văn An"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#16332F] bg-slate-50 focus:bg-white focus:outline-none focus:border-[#146B5B]"
                      />
                    </div>
                  </div>

                  {formError && (
                    <div className="text-xs font-semibold text-rose-700 bg-rose-50 border border-rose-200 rounded-xl px-3 py-2">
                      {formError}
                    </div>
                  )}

                  {/* Mascot Character Picker */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-[#16332F]">
                        Chọn Linh thú tượng trưng của bạn:
                      </span>
                      <span className="text-[11px] font-bold text-[#146B5B]">
                        {draftMascot.shortName}
                      </span>
                    </div>

                    <div className="grid grid-cols-4 gap-1.5">
                      {MASCOT_CHARACTERS.map((m) => {
                        const isPicked = m.id === draftMascotId;
                        return (
                          <button
                            key={m.id}
                            type="button"
                            onClick={() => {
                              setDraftMascotId(m.id);
                              onSelectMascot(m.id);
                            }}
                            className={`p-2 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center gap-0.5 ${
                              isPicked
                                ? "bg-[#E8F5EF] border-[#146B5B] ring-2 ring-[#146B5B]/25"
                                : "bg-slate-50 border-slate-200 hover:bg-white"
                            }`}
                            title={`${m.name}: ${m.meaning}`}
                          >
                            <span className="text-xl leading-none">{m.emoji}</span>
                            <span className="text-[10px] font-bold text-[#16332F] leading-tight">
                              {m.shortName}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Selected Mascot Story */}
                    <div
                      className={`p-2.5 rounded-xl border text-xs ${draftMascot.accentBg} ${draftMascot.accentBorder} ${draftMascot.accentText}`}
                    >
                      <div className="font-extrabold">
                        {draftMascot.emoji} {draftMascot.name} · {draftMascot.regionOrigin}
                      </div>
                      <p className="text-[11px] opacity-90 mt-0.5 leading-relaxed">
                        {draftMascot.meaning}
                      </p>
                    </div>
                  </div>

                  {/* Save Profile CTA */}
                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-xl bg-[#146B5B] text-white text-xs sm:text-sm font-bold hover:bg-[#0f5548] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <UserCheck className="w-4 h-4" />
                    <span>Lưu tên, lớp, trường & Linh thú</span>
                  </button>
                </form>

                {/* Guest Mode & Logout Box */}
                <div className="pt-3 border-t border-slate-100 space-y-2">
                  {/* Guest Mode Option */}
                  <button
                    type="button"
                    onClick={handleGuestClick}
                    className={`w-full py-2 px-3 rounded-xl border text-xs font-bold transition-colors cursor-pointer flex items-center justify-between ${
                      identity.mode === "guest"
                        ? "bg-sky-100 border-sky-400 text-sky-950"
                        : "bg-sky-50 border-sky-200 text-sky-900 hover:bg-sky-100"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <UserX className="w-4 h-4 text-sky-700" />
                      <span>Chế độ Khách (Không cần nhập tên, lớp)</span>
                    </span>
                    {identity.mode === "guest" && (
                      <Check className="w-4 h-4 text-sky-700" />
                    )}
                  </button>

                  {/* Logout Button */}
                  <button
                    type="button"
                    onClick={handleLogoutClick}
                    className="w-full py-2 px-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 hover:bg-rose-100 text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Đăng xuất (Xóa tên & lớp đã lưu)</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Strip: All modules including Biến đổi khí hậu ở Việt Nam right next to Địa lí nước ngoài */}
        <nav
          aria-label="Điều hướng chính"
          className="flex items-center gap-1.5 overflow-x-auto py-2 no-scrollbar border-t border-slate-100 text-xs sm:text-sm"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className={`whitespace-nowrap shrink-0 px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#146B5B] text-white shadow-2xs"
                    : "text-[#16332F]/80 hover:text-[#146B5B] hover:bg-[#E8F5EF]/70"
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
