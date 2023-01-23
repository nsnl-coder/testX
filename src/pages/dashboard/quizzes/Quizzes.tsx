import useGetCollection from '@src/react-query/collections/useGetCollection';
import useCreateQuiz from '@src/react-query/quizzes/useCreateQuiz';
import useGetQuizzes from '@src/react-query/quizzes/useGetQuizzes';
import { Link, useParams } from 'react-router-dom';
import Quiz from './Quiz';

function Quizzes(): JSX.Element {
  const { id, collectionId } = useParams();
  const { mutate } = useCreateQuiz(id, collectionId);
  const { data } = useGetQuizzes(collectionId);
  const { collection } = useGetCollection(collectionId);

  const createQuiz = () => {
    if (!id || !collectionId) return;
    mutate();
  };

  return (
    <div className="flex-grow">
      <div className="flex mb-4">
        <Link
          to={`/dashboard/${id}/test`}
          className="w-60 text-center font-bold text-2xl py-4 block bg-gray-300 border-b hover:bg-gray-500"
        >
          Start Test
        </Link>
        <div className="flex items-center w-full px-8 space-x-8">
          <p>Quizz count: {collection?.quizz_count}</p>
          <p>Win count: {collection?.win_count}</p>
          <p>Lost count: {collection?.lost_count}</p>
          <p>Win rate: {collection?.win_rate} %</p>
        </div>
        <button
          type="button"
          className="bg-blue-400 w-80 px-8 py-2 sticky top-0 ml-auto block"
          onClick={() => createQuiz()}
        >
          new quiz
        </button>
      </div>
      <div className="self-start p-4 grid grid-cols-4 gap-12">
        {data?.map((quiz) => (
          <Quiz key={quiz._id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
}

export default Quizzes;
