export interface UserProfile {
  name: string;
  grade: string;
  targetSchool: string;
  xp: number;
  streakDays: number;
  completedLessons: number;
  testsCompleted: number;
  averageScore: number;
  badges: Badge[];
  radarSkills: {
    knowledge: number;     // Kiến thức (e.g. 78%)
    atlat: number;         // Atlat (e.g. 65%)
    chart: number;         // Biểu đồ (e.g. 82%)
    statistics: number;    // Số liệu (e.g. 70%)
    specializedThinking: number; // Tư duy chuyên (e.g. 55%)
    examPractice: number;  // Luyện đề (e.g. 60%)
  };
  remediationSuggestions: RemediationSuggestion[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: string;
  rarity: "common" | "rare" | "epic" | "legendary";
}

export interface RemediationSuggestion {
  id: string;
  topicId: string;
  topicTitle: string;
  category: string;
  weaknessMessage: string;
  recommendedAction: string;
  urgency: "high" | "medium" | "low";
}

export type TopicGroupId = "natural" | "population" | "economy" | "regions";

export interface TopicGroup {
  id: TopicGroupId;
  title: string;
  icon: string;
  description: string;
  color: string;
  topics: TopicItem[];
}

export interface TopicItem {
  id: string;
  title: string;
  groupId: TopicGroupId;
  summary: string;
  atlatPage: string;
  difficulty: "Cơ bản" | "Nâng cao" | "Chuyên sâu";
  content: {
    knowledge: {
      coreConcepts: { term: string; explanation: string }[];
      mainPoints: { title: string; bullets: string[] }[];
      commonTraps: string[];
    };
    atlatGuide: {
      page: string;
      pageName: string;
      symbolsToNote: string[];
      stepsToRead: string[];
      sampleExercise: {
        question: string;
        atlatClues: string[];
        standardAnswer: string;
      };
    };
    statistics: {
      tableTitle: string;
      unit: string;
      headers: string[];
      rows: { label: string; values: number[] }[];
      observations: string[];
      calculations: string[];
    };
    thinking: {
      type: "So sánh" | "Chứng minh" | "Giải thích" | "Mối quan hệ nhân quả";
      framework: string[];
      samplePrompt: string;
      expertOutline: string[];
    };
    exercises: ExerciseQuestion[];
    miniTest: ExerciseQuestion[];
  };
}

export interface ExerciseQuestion {
  id: string;
  level: "Nhận biết" | "Thông hiểu" | "Vận dụng" | "Vận dụng cao" | "Thi chuyên";
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  atlatReference?: string;
  trapWarning?: string;
}

export interface AtlatChallenge {
  id: string;
  title: string;
  targetRegion: string;
  atlatPage: string;
  prompt: string;
  initialQuestion: string;
  hints: string[];
  deepAnalysis: string;
  modelAnswer: string;
  coordinates: { x: number; y: number }; // percentage on Vietnam interactive SVG map
  relevantLayers: string[];
}

export interface ChartMasterChallenge {
  id: string;
  title: string;
  context: string;
  dataTitle: string;
  unit: string;
  years: string[];
  series: { name: string; values: number[]; color: string }[];
  options: {
    type: "bar" | "line" | "pie" | "area" | "combined";
    label: string;
    icon: string;
  }[];
  correctType: "bar" | "line" | "pie" | "area" | "combined";
  keywordAnalysis: {
    isCorrect: boolean;
    mainKeyword: string;
    explanation: string;
    ruleToRemember: string;
  };
  expertCommentary: {
    overview: string;
    detailedTrends: string[];
    causes: string[];
  };
  headers?: string[];
  rows?: { label: string; values: number[] }[];
  correctChartType?: string;
  whyExplanation?: string;
  drawingTips?: string[];
  commentarySteps?: string[];
  standardCommentary?: string;
}

export interface SpecializedSkillCard {
  id: string;
  name: string;
  icon: string;
  slogan: string;
  color: string;
  formula: string[];
  steps: { step: string; description: string; example: string }[];
  comparisonTable?: {
    criteria: string[];
    subjectA: { name: string; values: string[] };
    subjectB: { name: string; values: string[] };
  };
}

export interface SpecializedSkill {
  id: string;
  title: string;
  summary: string;
  formula: string;
  steps: { stepName: string; description: string }[];
  example: { prompt: string; solution: string };
  commonMistakes: string[];
}

export interface ExamPaper {
  id: string;
  title: string;
  schoolSource: string;
  durationMinutes: number;
  questionCount: number;
  difficulty: "Đề thi HSG Tỉnh" | "Đề thi Chuyên Sư Phạm" | "Đề thi Chuyên Hà Nội - Ams" | "Đề thi Chuyên Lê Hồng Phong";
  questions: ExerciseQuestion[];
}

export type ExamQuestion = ExerciseQuestion & {
  topicId?: string;
  topicName?: string;
  topicRef?: string;
};

export interface MockExam {
  id: string;
  title: string;
  type: string;
  timeLimitMinutes: number;
  difficulty: string;
  description: string;
  questions: ExamQuestion[];
}

export interface DayChallenge {
  dayNumber: number;
  day?: number;
  title: string;
  coreTopic: string;
  stage?: number;
  focus?: string;
  lessonSnippet: string;
  atlatExercise: string;
  chartExercise: string;
  thinkingQuestion: string;
  tasks?: {
    lesson: string;
    atlat: string;
    chart: string;
    thinkingQuestions: string[];
    miniTest: string;
  };
  miniTestQuestions?: ExerciseQuestion[];
  isCompleted: boolean;
  xpReward: number;
}

export interface StudyPost {
  id: string;
  author: string;
  avatar: string;
  school: string;
  topic: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  likes: number;
  comments: {
    id: string;
    author: string;
    avatar: string;
    school: string;
    content: string;
    createdAt: string;
    isTeacherOrTopStudent?: boolean;
  }[];
}

export type ForumPost = {
  id: string;
  title: string;
  content: string;
  authorName?: string;
  author?: string;
  authorBadge?: string;
  avatar?: string;
  tag: string;
  tags?: string[];
  school?: string;
  topic?: string;
  createdAt: string;
  likes: number;
  comments: {
    id: string;
    author: string;
    authorName?: string;
    avatar?: string;
    school?: string;
    authorBadge?: string;
    content: string;
    createdAt: string;
    isTeacherOrTopStudent?: boolean;
  }[];
};

export interface LeaderboardUser {
  rank: number;
  name: string;
  school: string;
  avatar: string;
  xp: number;
  streak: number;
  badgesCount: number;
  specialty: string;
}

export type ChartChallenge = ChartMasterChallenge;
export type ChartTypeOption = "bar" | "line" | "pie" | "area" | "combined" | "cot" | "tron" | "duong" | "mien" | "ket_hop";

export interface StickyNote {
  id: string;
  category: string;
  badgeColor?: string;
  cardBg?: string;
  title: string;
  content: string;
  topic?: string;
  type?: string;
}
