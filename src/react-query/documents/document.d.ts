interface Document {
  _id: string;
  name: string;
  ordering?: number;
  createdAt: string;
  win_count: number;
  lost_count: number;
  quizz_count: number;
  win_rate?: number;
  lastTested?: data;
}

export default Document;
