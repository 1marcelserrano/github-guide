export interface Module {
  slug: string;
  title: string;
  description: string;
  order: number;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
}

export interface ModuleContent {
  meta: Module;
  sections: { heading: string; body: string }[];
  quiz: QuizQuestion[];
  checklist: ChecklistItem[];
}
