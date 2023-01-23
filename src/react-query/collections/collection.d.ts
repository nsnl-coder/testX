interface Collection {
  _id: string;
  name: string;
  quizz_count: number;
  win_count: number;
  lost_count: number;
  win_rate: number;
  ordering: number;
  lastTested: string;
  document: string;
}
export default Collection;
