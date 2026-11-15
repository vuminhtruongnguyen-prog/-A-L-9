export interface MascotCharacter {
  id: string;
  name: string;
  shortName: string;
  emoji: string;
  title: string;
  regionOrigin: string;
  meaning: string;
  accentBg: string;
  accentText: string;
  accentBorder: string;
}

export interface StudentIdentity {
  mode: "profile" | "guest" | "unset";
  name: string;
  className: string;
  school: string;
  mascotId: string;
}

export const MASCOT_CHARACTERS: MascotCharacter[] = [
  {
    id: "kim-quy",
    name: "Rùa Vàng Hồ Gươm",
    shortName: "Rùa Vàng",
    emoji: "🐢",
    title: "Linh thú Trí Tuệ & Bản Lĩnh",
    regionOrigin: "Đồng bằng sông Hồng",
    meaning: "Biểu tượng tri thức uyên bác, điềm tĩnh đọc Atlat và giải mã mọi số liệu địa lí.",
    accentBg: "bg-emerald-50",
    accentText: "text-emerald-800",
    accentBorder: "border-emerald-300",
  },
  {
    id: "lac-hong",
    name: "Chim Lạc Hồng",
    shortName: "Chim Lạc",
    emoji: "🦅",
    title: "Linh thú Khát Vọng Toàn Cầu",
    regionOrigin: "Đất Tổ Phú Thọ",
    meaning: "Trong tim hoài bão khám phá thế giới, sải cánh vươn xa qua 6 châu lục.",
    accentBg: "bg-amber-50",
    accentText: "text-amber-800",
    accentBorder: "border-amber-300",
  },
  {
    id: "seu-dau-do",
    name: "Sếu Đầu Đỏ",
    shortName: "Sếu Đầu Đỏ",
    emoji: "🦩",
    title: "Sứ giả Đồng bằng sông Cửu Long",
    regionOrigin: "Tràm Chim - Đồng Tháp",
    meaning: "Đại diện cho thiên nhiên trù phú và ý thức bảo vệ môi trường, ứng phó biến đổi khí hậu.",
    accentBg: "bg-rose-50",
    accentText: "text-rose-800",
    accentBorder: "border-rose-300",
  },
  {
    id: "sao-la",
    name: "Sao La Trường Sơn",
    shortName: "Sao La",
    emoji: "🦌",
    title: "Kỳ lân châu Á - Bảo vệ Đại ngàn",
    regionOrigin: "Dãy Trường Sơn",
    meaning: "Biểu tượng quý hiếm của đa dạng sinh học Việt Nam và ý chí chinh phục đỉnh cao.",
    accentBg: "bg-teal-50",
    accentText: "text-teal-800",
    accentBorder: "border-teal-300",
  },
  {
    id: "ca-ong",
    name: "Cá Ông Biển Đông",
    shortName: "Cá Ông",
    emoji: "🐋",
    title: "Người bạn Biển Đảo Quê Hương",
    regionOrigin: "Hoàng Sa - Trường Sa",
    meaning: "Người bảo hộ ngư dân vượt sóng dữ và khẳng định chủ quyền biển đảo thiêng liêng.",
    accentBg: "bg-sky-50",
    accentText: "text-sky-800",
    accentBorder: "border-sky-300",
  },
  {
    id: "voi-tay-nguyen",
    name: "Voi Đại Ngàn",
    shortName: "Voi Rừng",
    emoji: "🐘",
    title: "Chiến binh Cao nguyên Badan",
    regionOrigin: "Đắk Lắk - Tây Nguyên",
    meaning: "Sức mạnh bền bỉ, kiên trì hoàn thành thử thách 30 ngày tự học không bỏ cuộc.",
    accentBg: "bg-orange-50",
    accentText: "text-orange-800",
    accentBorder: "border-orange-300",
  },
  {
    id: "gau-bac-cuc",
    name: "Gấu Trắng Băng Giá",
    shortName: "Gấu Bắc Cực",
    emoji: "🐻‍❄️",
    title: "Người gác đền Khí Hậu Trái Đất",
    regionOrigin: "Vòng Cực & Thế Giới",
    meaning: "Nhắc nhở thế hệ trẻ chung tay giảm phát thải, ngăn băng tan và nước biển dâng.",
    accentBg: "bg-indigo-50",
    accentText: "text-indigo-800",
    accentBorder: "border-indigo-300",
  },
  {
    id: "su-tu-thao-nguyen",
    name: "Sư Tử Thảo Nguyên",
    shortName: "Sư Tử",
    emoji: "🦁",
    title: "Thủ lĩnh Đấu Trường Ôn Tập",
    regionOrigin: "Thế giới & Trò chơi",
    meaning: "Bản lĩnh vượt qua khu rừng thử thách, dẫn đầu bảng xếp hạng học sinh giỏi.",
    accentBg: "bg-yellow-50",
    accentText: "text-yellow-800",
    accentBorder: "border-yellow-300",
  },
];

export const DEFAULT_IDENTITY: StudentIdentity = {
  mode: "unset",
  name: "",
  className: "",
  school: "",
  mascotId: "kim-quy",
};

export const PROFILE_STORAGE_KEY = "glow_student_identity_v1";

export function getMascotById(id: string): MascotCharacter {
  return MASCOT_CHARACTERS.find((m) => m.id === id) || MASCOT_CHARACTERS[0];
}
