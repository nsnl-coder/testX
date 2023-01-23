import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import Quizz from './Quiz';

const useUpdateQuiz = (id: string) => {
  const queryClient = useQueryClient();

  const request = async (quiz: Quizz) => {
    const res = await axios({
      method: 'put',
      url: `/api/v1/quizzes/${id}`,
      data: quiz,
    });

    queryClient.invalidateQueries('quizzes');
    return res.data.data;
  };

  const { mutate, isLoading } = useMutation(request);

  const updateQuiz = (quiz: Quizz) => {
    mutate(quiz);
  };

  return {
    updateQuiz,
    isLoading,
  };
};

export default useUpdateQuiz;
