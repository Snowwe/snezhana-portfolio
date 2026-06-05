export interface InterviewQuestion {
  id: string;
  interviewLevel: number;
  questionEn: string;
  questionRu: string;
  answersEn: string[];
  answersRu: string[];
  correctAnswerIndex: number;
}
