import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { RoadmapSection } from "./components/RoadmapSection";
import { CurriculumExplorer } from "./components/CurriculumExplorer";
import { TextbookLessons } from "./components/TextbookLessons";
import { AtlatLab } from "./components/AtlatLab";
import { ChartMasterLab } from "./components/ChartMasterLab";
import { SpecializedSkillCards } from "./components/SpecializedSkillCards";
import { GeographyReviewGames } from "./components/GeographyReviewGames";
import { WorldGeography } from "./components/WorldGeography";
import { ClimateChangeVietnam } from "./components/ClimateChangeVietnam";
import { ThirtyDayChallenge } from "./components/ThirtyDayChallenge";
import { MyProgressView } from "./components/MyProgressView";
import { StickyNotesTips } from "./components/StickyNotesTips";
import { StudyGroupsForum } from "./components/StudyGroupsForum";
import { LeaderboardView } from "./components/LeaderboardView";
import {
  DEFAULT_IDENTITY,
  PROFILE_STORAGE_KEY,
  StudentIdentity,
  getMascotById,
} from "./data/userProfileData";
import { Sparkles, ArrowUp } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("hero");
  const [xp, setXp] = useState<number>(2450);
  const [streakDays, setStreakDays] = useState<number>(12);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [identity, setIdentity] = useState<StudentIdentity>(() => {
    try {
      const saved = localStorage.getItem(PROFILE_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...DEFAULT_IDENTITY, ...parsed };
      }
    } catch {
      // Ignore storage errors
    }
    return DEFAULT_IDENTITY;
  });

  useEffect(() => {
    try {
      localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(identity));
    } catch {
      // Ignore storage errors
    }
  }, [identity]);

  const showToast = (msg: string, duration = 2800) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, duration);
  };

  const handleSaveProfile = (
    name: string,
    className: string,
    school: string,
    mascotId: string
  ) => {
    const mascot = getMascotById(mascotId);
    setIdentity({
      mode: "profile",
      name,
      className,
      school,
      mascotId,
    });
    showToast(`${mascot.emoji} Đã lưu hồ sơ: ${name}${className ? ` · Lớp ${className}` : ""}`);
  };

  const handleUseGuestMode = (mascotId: string) => {
    const mascot = getMascotById(mascotId);
    setIdentity((prev) => ({
      ...prev,
      mode: "guest",
      name: "",
      className: "",
      school: "",
      mascotId,
    }));
    showToast(`${mascot.emoji} Đang sử dụng Chế độ Khách`);
  };

  const handleSelectMascot = (mascotId: string) => {
    setIdentity((prev) => ({ ...prev, mascotId }));
  };

  const handleLogoutProfile = () => {
    setIdentity((prev) => ({
      ...DEFAULT_IDENTITY,
      mascotId: prev.mascotId,
    }));
    try {
      localStorage.removeItem(PROFILE_STORAGE_KEY);
    } catch {
      // Ignore storage errors
    }
    showToast("Đã đăng xuất và xóa thông tin tên, lớp đã lưu");
  };

  useEffect(() => {
    fetch("/api/user/progress")
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.xp === "number") setXp(data.xp);
        if (data && typeof data.streakDays === "number") setStreakDays(data.streakDays);
      })
      .catch((err) => console.log("Progress sync initial load notice:", err));
  }, []);

  const handleEarnXp = (points: number) => {
    setXp((prev) => {
      const nextXp = prev + points;
      fetch("/api/user/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ xp: nextXp }),
      }).catch(() => {});
      return nextXp;
    });
    setToastMessage(`+${points} XP Điểm kinh nghiệm!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleDayComplete = () => {
    setStreakDays((prev) => {
      const nextStreak = prev + 1;
      fetch("/api/user/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ streakDays: nextStreak }),
      }).catch(() => {});
      return nextStreak;
    });
    setToastMessage("🔥 Chúc mừng bạn đã tăng chuỗi streak!");
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-[#16332F] flex flex-col font-sans selection:bg-[#146B5B] selection:text-white antialiased">
      {/* Toast notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 px-4 py-2.5 rounded-xl bg-[#146B5B] text-white text-xs font-bold shadow-lg flex items-center gap-2 animate-slide-in">
          <Sparkles className="w-4 h-4 text-[#FFF3B0]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        xp={xp}
        streakDays={streakDays}
        identity={identity}
        onSaveProfile={handleSaveProfile}
        onUseGuestMode={handleUseGuestMode}
        onSelectMascot={handleSelectMascot}
        onLogoutProfile={handleLogoutProfile}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {activeTab === "hero" && (
          <>
            <HeroSection
              onStartLearning={() => setActiveTab("curriculum")}
              onTakeExam={() => setActiveTab("games")}
              onOpenAtlat={() => setActiveTab("atlat")}
              onOpenChart={() => setActiveTab("chart")}
              onOpenThinking={() => setActiveTab("skills")}
              streakDays={streakDays}
              xp={xp}
            />
            <RoadmapSection
              onSelectStage={(stageIdx) => {
                if (stageIdx === 2) setActiveTab("atlat");
                else if (stageIdx === 3) setActiveTab("chart");
                else if (stageIdx === 4) setActiveTab("skills");
                else if (stageIdx === 5) setActiveTab("games");
                else setActiveTab("curriculum");
              }}
            />
            <StickyNotesTips />
          </>
        )}

        {activeTab === "curriculum" && (
          <>
            <CurriculumExplorer onEarnXp={handleEarnXp} />
            <StickyNotesTips />
          </>
        )}

        {activeTab === "textbook" && (
          <TextbookLessons onEarnXp={handleEarnXp} />
        )}

        {activeTab === "atlat" && (
          <AtlatLab onEarnXp={handleEarnXp} />
        )}

        {activeTab === "chart" && (
          <ChartMasterLab onEarnXp={handleEarnXp} />
        )}

        {activeTab === "skills" && (
          <SpecializedSkillCards />
        )}

        {(activeTab === "games" || activeTab === "exam") && (
          <GeographyReviewGames 
            onEarnXp={handleEarnXp} 
            onNavigateToTopic={() => setActiveTab("curriculum")}
          />
        )}

        {activeTab === "world" && (
          <WorldGeography onEarnXp={handleEarnXp} />
        )}

        {activeTab === "climate" && (
          <ClimateChangeVietnam onEarnXp={handleEarnXp} />
        )}

        {activeTab === "challenge" && (
          <ThirtyDayChallenge
            streakDays={streakDays}
            xp={xp}
            onEarnXp={handleEarnXp}
            onDayComplete={handleDayComplete}
          />
        )}

        {activeTab === "progress" && (
          <MyProgressView
            onStartPersonalizedPath={() => setActiveTab("curriculum")}
            xp={xp}
            streakDays={streakDays}
          />
        )}

        {activeTab === "community" && (
          <StudyGroupsForum onEarnXp={handleEarnXp} identity={identity} />
        )}

        {activeTab === "leaderboard" && (
          <LeaderboardView identity={identity} xp={xp} streakDays={streakDays} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand & Slogan */}
            <div className="md:col-span-2 space-y-3">
              <div className="flex items-center gap-2 flex-wrap">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#146B5B] to-[#1677B8] flex items-center justify-center text-white font-black text-xs tracking-wider">
                  GLOW
                </div>
                <span className="font-extrabold text-lg text-white tracking-wide">GLOW</span>
                <span className="text-xs text-[#E8F5EF]/80 font-medium tracking-wide">
                  (Geography – Learning – Opportunity – Wisdom)
                </span>
              </div>
              <p className="text-xs text-amber-200 font-bold">
                “Trong tay tấm bản đồ Việt Nam - Trong tim hoài bão khám phá toàn cầu”
              </p>
              <p className="text-xs text-slate-400 max-w-md leading-relaxed">
                Nền tảng trực tuyến chuyên biệt dành cho học sinh THCS (từ lớp 6 đến lớp 9) bồi dưỡng học sinh giỏi môn Địa lí và luyện thi vào các trường THPT Chuyên toàn quốc.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-white mb-3">
                Chuyên mục trọng tâm
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <button onClick={() => setActiveTab("curriculum")} className="hover:text-white cursor-pointer">
                    Kho chuyên đề 4 nhóm
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab("textbook")} className="hover:text-white cursor-pointer">
                    Bài học sách giáo khoa
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab("atlat")} className="hover:text-white cursor-pointer">
                    Phòng thí nghiệm Atlat
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab("chart")} className="hover:text-white cursor-pointer">
                    Bậc thầy biểu đồ & số liệu
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab("skills")} className="hover:text-white cursor-pointer">
                    4 Thẻ kỹ năng chuyên sâu
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab("exam")} className="hover:text-white cursor-pointer">
                    Đề tham khảo trực tuyến
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab("games")} className="hover:text-white cursor-pointer">
                    Trò chơi ôn tập vui nhộn
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab("world")} className="hover:text-white cursor-pointer">
                    Địa lí nước ngoài (Lớp 6-7-8)
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab("climate")} className="hover:text-white cursor-pointer">
                    Biến đổi khí hậu ở Việt Nam
                  </button>
                </li>
              </ul>
            </div>

            {/* Tools & Features */}
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-white mb-3">
                Công cụ hỗ trợ
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <button onClick={() => setActiveTab("challenge")} className="hover:text-white cursor-pointer">
                    Thử thách 30 ngày tự học
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab("progress")} className="hover:text-white cursor-pointer">
                    Radar năng lực & Lộ trình 7 ngày
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab("community")} className="hover:text-white cursor-pointer">
                    Nhóm thảo luận bài tập
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab("leaderboard")} className="hover:text-white cursor-pointer">
                    Bảng xếp hạng toàn quốc
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab("skills")} className="hover:text-white cursor-pointer">
                    Sổ tay bí quyết làm bài thi HSG
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              © 2026 GLOW. Nền tảng Ôn Chuyên & Bồi dưỡng HSG Địa Lí Cấp 2.
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white cursor-pointer transition-colors"
            >
              <span>Về đầu trang</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
