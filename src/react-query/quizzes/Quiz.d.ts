interface Quizz {
  _id: string;
  question: string;
  answer: string;
  win_count: number;
  lost_count: number;
  last_try: boolean;
  collectionId: string;
  document: string;
}

export default Quizz;
