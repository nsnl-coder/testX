import Quiz from '@src/react-query/quizzes/Quiz';
import useSendQuizResult from '@src/react-query/quizzes/useSendQuizResult';
import { useEffect, useState } from 'react';

interface Props {
  quiz: Quiz;
}

function TestITem(props: Props): JSX.Element | null {
  const { quiz } = props;
  const [isShowAnswer, setIsShowAnswer] = useState(false);
  const [isWin, setIsWin] = useState<boolean | null>(null);
  const { mutate } = useSendQuizResult(
    quiz._id,
    quiz.document,
    quiz.collectionId
  );

  useEffect(() => {
    if (isWin !== null) {
      mutate(isWin);
    }
  }, [isWin, mutate]);

  if (isWin !== null) return null;

  return (
    <div
      className={`bg-white px-4 py-2 flex flex-col border-2 ${
        quiz.last_try ? 'border-green-400' : 'border-red-400'
      }`}
    >
      <div className="flex justify-between mb-4">
        <p>Win count: {quiz.win_count}</p>
        <p>Lost count: {quiz.lost_count}</p>
      </div>
      <h3 className="text-xl font-bold">{quiz.question}</h3>
      <textarea
        defaultValue={quiz.answer}
        className={`w-full flex-grow resize-none h-60 my-3 p-4 pointer-events-none ${
          isShowAnswer ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div className="flex mb-1">
        <button
          type="button"
          className={`w-1/2 py-2 ${
            isShowAnswer ? 'bg-green-400 ' : 'bg-green-400/50'
          }`}
          onClick={() => isShowAnswer && setIsWin(true)}
          disabled={!isShowAnswer}
        >
          Win
        </button>
        <button
          type="button"
          onClick={() => isShowAnswer && setIsWin(false)}
          className={`w-1/2 py-2 ${
            isShowAnswer ? 'bg-red-400 ' : 'bg-red-400/50'
          }`}
          disabled={!isShowAnswer}
        >
          Lose
        </button>
      </div>
      <div>
        <button
          type="button"
          className="py-2 w-full text-center bg-black text-white"
          onClick={() => setIsShowAnswer(true)}
        >
          show answer
        </button>
      </div>
    </div>
  );
}

export default TestITem;
