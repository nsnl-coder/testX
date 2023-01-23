import useGetQuizzesByDocument from '@src/react-query/quizzes/useGetQuizzesByDocument';
import { useParams } from 'react-router-dom';
import TestITem from './TestITem';

function Test(): JSX.Element {
  const { id } = useParams();
  const { data } = useGetQuizzesByDocument(id);

  return (
    <div className="grid grid-cols-4 w-full gap-8 self-start p-8">
      {data?.map((quiz) => (
        <TestITem key={quiz._id} quiz={quiz} />
      ))}
    </div>
  );
}

export default Test;
