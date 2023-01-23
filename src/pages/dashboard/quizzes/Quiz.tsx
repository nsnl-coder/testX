import Quizz from '@src/react-query/quizzes/Quiz';
import useDeleteQuiz from '@src/react-query/quizzes/useDeleteQuiz';
import useUpdateQuiz from '@src/react-query/quizzes/useUpdateQuiz';
import { useRef } from 'react';

interface Props {
  quiz: Quizz;
}

function Quiz(props: Props): JSX.Element {
  const questionRef = useRef<HTMLInputElement | null>(null);
  const answerRef = useRef<HTMLTextAreaElement | null>(null);

  const { quiz } = props;
  const { deleteQuiz, isLoading } = useDeleteQuiz(quiz._id, quiz.collectionId);
  const { updateQuiz } = useUpdateQuiz(quiz._id);

  const updateHandler = () => {
    if (questionRef.current && answerRef.current) {
      updateQuiz({
        ...quiz,
        question: questionRef.current?.value,
        answer: answerRef.current?.value,
      });
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between mb-4">
        <p>Win count: {quiz.win_count}</p>
        <p>Lost count: {quiz.lost_count}</p>
      </div>
      <input
        type="text"
        className="border outline-none p-2 mb-4"
        defaultValue={quiz.question}
        ref={questionRef}
      />
      <textarea
        name="answer"
        className={`h-60 outline-none p-2 flex-grow border-2 ${
          quiz.last_try ? 'border-green-400' : 'border-red-400'
        }`}
        ref={answerRef}
        defaultValue={quiz.answer}
      />
      <div className="flex justify-between py-3">
        <button
          type="button"
          className="px-5 py-1 bg-red-400"
          onClick={() => deleteQuiz()}
          disabled={isLoading}
        >
          Delete
        </button>
        <button
          type="button"
          className="px-5 py-1 bg-gray-400"
          onClick={updateHandler}
        >
          Saves
        </button>
      </div>
    </div>
  );
}

export default Quiz;
