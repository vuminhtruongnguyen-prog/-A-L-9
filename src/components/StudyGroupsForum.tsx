import React, { useState, useEffect } from "react";
import { ForumPost } from "../types";
import { 
  Users, 
  MessageSquare, 
  ThumbsUp, 
  Send, 
  PlusCircle, 
  Search, 
  Award, 
  Sparkles,
  Tag,
  Clock
} from "lucide-react";

interface StudyGroupsForumProps {
  onEarnXp?: (points: number) => void;
}

export const StudyGroupsForum: React.FC<StudyGroupsForumProps> = ({ onEarnXp }) => {
  const [posts, setPosts] = useState<ForumPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTag, setActiveTag] = useState<string>("Tất cả");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Create post modal state
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>("");
  const [newContent, setNewContent] = useState<string>("");
  const [newTag, setNewTag] = useState<string>("Tự nhiên");
  const [authorName, setAuthorName] = useState<string>("Học sinh 9A");

  // Comment input per post
  const [activeCommentPostId, setActiveCommentPostId] = useState<string | null>(null);
  const [commentText, setCommentText] = useState<string>("");

  // Fetch posts from backend
  const fetchPosts = async () => {
    try {
      const res = await fetch("/api/forum/posts");
      const data = await res.json();
      if (Array.isArray(data)) {
        setPosts(data);
      }
    } catch (e) {
      console.error("Failed to fetch forum posts", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    try {
      const res = await fetch("/api/forum/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: newTitle,
          content: newContent,
          authorName: authorName || "Học sinh Chuyên Địa",
          authorBadge: "Thành viên tích cực",
          tag: newTag,
        }),
      });
      const created = await res.json();
      setPosts((prev) => [created, ...prev]);
      setShowCreateModal(false);
      setNewTitle("");
      setNewContent("");
      if (onEarnXp) {
        onEarnXp(20);
      }
    } catch (err) {
      console.error("Failed to create post", err);
    }
  };

  const handleLike = async (postId: string) => {
    try {
      const res = await fetch(`/api/forum/posts/${postId}/like`, { method: "POST" });
      const updated = await res.json();
      setPosts((prev) => prev.map((p) => (p.id === postId ? updated : p)));
    } catch (err) {
      console.error("Failed to like post", err);
    }
  };

  const handleAddComment = async (postId: string) => {
    if (!commentText.trim()) return;
    try {
      const res = await fetch(`/api/forum/posts/${postId}/comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          author: "Bạn (Tôi)",
          authorBadge: "HSG Chuyên",
          content: commentText,
        }),
      });
      const updated = await res.json();
      setPosts((prev) => prev.map((p) => (p.id === postId ? updated : p)));
      setCommentText("");
      if (onEarnXp) {
        onEarnXp(10);
      }
    } catch (err) {
      console.error("Failed to add comment", err);
    }
  };

  const tags = ["Tất cả", "Tự nhiên", "Atlat", "Biểu đồ", "Kinh tế", "Dân cư", "Vùng kinh tế"];

  const filteredPosts = posts.filter((p) => {
    const matchesTag = activeTag === "Tất cả" || p.tag.toLowerCase().includes(activeTag.toLowerCase());
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <section className="py-10 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5EF] text-[#146B5B] text-xs font-extrabold uppercase tracking-wider mb-2">
              <Users className="w-3.5 h-3.5" />
              <span>Cộng đồng học sinh giỏi địa lí</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#16332F] tracking-tight">
              Nhóm Học Tập & Diễn Đàn Thảo Luận Bài Tập
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Nơi kết nối các bạn học sinh ôn thi chuyên lớp 9 và thi HSG cấp Tỉnh/Quốc gia. Cùng nhau trao đổi lời giải hay và thảo luận phương pháp tư duy địa lí.
            </p>
          </div>

          <button
            onClick={() => setShowCreateModal(true)}
            className="px-5 py-2.5 rounded-xl bg-[#146B5B] text-white font-bold text-xs hover:bg-[#0f5548] active:scale-95 transition-all flex items-center gap-2 cursor-pointer shadow-xs self-start"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Đặt câu hỏi mới (+20 XP)</span>
          </button>
        </div>

        {/* Filter and Search bar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs mb-6 flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Tag buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 no-scrollbar">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTag(t)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeTag === t
                    ? "bg-[#146B5B] text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm kiếm câu hỏi, từ khóa..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-200 text-xs text-slate-700 bg-slate-50 focus:outline-none focus:border-[#146B5B]"
            />
          </div>
        </div>

        {/* Posts List */}
        {loading ? (
          <div className="p-12 text-center text-xs text-slate-400">
            Đang tải dữ liệu diễn đàn thảo luận...
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="p-12 bg-white rounded-2xl border border-slate-200 text-center text-xs text-slate-500">
            Không tìm thấy bài thảo luận nào phù hợp. Hãy là người đầu tiên đặt câu hỏi!
          </div>
        ) : (
          <div className="space-y-4 text-left">
            {filteredPosts.map((post) => {
              const isCommentOpen = activeCommentPostId === post.id;
              return (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-slate-300 transition-all space-y-3"
                >
                  {/* Top post meta */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#146B5B] to-[#1677B8] text-white flex items-center justify-center font-bold text-xs">
                        {post.authorName.slice(0, 1)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-xs text-[#16332F]">
                            {post.authorName}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E8F5EF] text-[#146B5B] font-bold">
                            {post.authorBadge}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400 flex items-center gap-1">
                          <Clock className="w-2.5 h-2.5" />
                          {post.createdAt}
                        </span>
                      </div>
                    </div>

                    <span className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 font-bold">
                      #{post.tag}
                    </span>
                  </div>

                  {/* Post Title & Content */}
                  <div>
                    <h3 className="font-black text-base text-[#16332F] mb-1">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-700 leading-relaxed font-normal">
                      {post.content}
                    </p>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-4 text-xs font-bold text-slate-600">
                    <button
                      onClick={() => handleLike(post.id)}
                      className="flex items-center gap-1.5 hover:text-[#146B5B] cursor-pointer transition-colors"
                    >
                      <ThumbsUp className="w-3.5 h-3.5 text-amber-500" />
                      <span>{post.likes} Hữu ích</span>
                    </button>

                    <button
                      onClick={() => setActiveCommentPostId(isCommentOpen ? null : post.id)}
                      className="flex items-center gap-1.5 hover:text-[#1677B8] cursor-pointer transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#1677B8]" />
                      <span>{post.comments.length} Câu trả lời</span>
                    </button>
                  </div>

                  {/* Expanded Comments section */}
                  {isCommentOpen && (
                    <div className="pt-4 border-t border-slate-100 space-y-3 bg-slate-50/60 p-4 rounded-xl">
                      <div className="text-xs font-extrabold text-slate-700">
                        Thảo luận câu hỏi này:
                      </div>

                      {post.comments.length === 0 ? (
                        <div className="text-xs text-slate-400 italic">
                          Chưa có câu trả lời nào. Hãy chia sẻ quan điểm của bạn!
                        </div>
                      ) : (
                        <div className="space-y-2">
                          {post.comments.map((cm) => (
                            <div key={cm.id} className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-800 space-y-1">
                              <div className="flex items-center justify-between">
                                <span className="font-bold text-[#146B5B]">{cm.author}</span>
                                <span className="text-[10px] text-slate-400">{cm.createdAt}</span>
                              </div>
                              <p className="leading-relaxed">{cm.content}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Add Comment Input */}
                      <div className="flex items-center gap-2 pt-2">
                        <input
                          type="text"
                          value={commentText}
                          onChange={(e) => setCommentText(e.target.value)}
                          placeholder="Nhập câu trả lời hoặc kinh nghiệm của bạn..."
                          className="flex-1 p-2.5 rounded-xl border border-slate-200 text-xs bg-white text-slate-800 focus:outline-none focus:border-[#146B5B]"
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              handleAddComment(post.id);
                            }
                          }}
                        />
                        <button
                          onClick={() => handleAddComment(post.id)}
                          className="px-4 py-2.5 rounded-xl bg-[#146B5B] text-white text-xs font-bold hover:bg-[#0f5548] cursor-pointer"
                        >
                          <Send className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Create Question Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4 text-left">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <h3 className="font-black text-base text-[#16332F]">
                  Đặt câu hỏi thảo luận mới
                </h3>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="text-slate-400 hover:text-slate-600 font-bold"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleCreatePost} className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Tiêu đề câu hỏi / Vấn đề cần hỏi:
                  </label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Ví dụ: Phân biệt điều kiện tự nhiên giữa Đông Nam Bộ và Tây Nguyên?"
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-xs"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Chủ đề / Nhãn:
                    </label>
                    <select
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-xs bg-slate-50 font-bold"
                    >
                      <option value="Tự nhiên">Tự nhiên</option>
                      <option value="Atlat">Atlat</option>
                      <option value="Biểu đồ">Biểu đồ</option>
                      <option value="Kinh tế">Kinh tế</option>
                      <option value="Vùng kinh tế">Vùng kinh tế</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Tên của bạn:
                    </label>
                    <input
                      type="text"
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Nội dung chi tiết & băn khoăn của bạn:
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    placeholder="Mô tả cụ thể câu hỏi hoặc đoạn văn bạn chưa hiểu rõ..."
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-xs"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowCreateModal(false)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                  >
                    Hủy bỏ
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-[#146B5B] text-white text-xs font-bold hover:bg-[#0f5548] cursor-pointer"
                  >
                    Đăng câu hỏi (+20 XP)
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
