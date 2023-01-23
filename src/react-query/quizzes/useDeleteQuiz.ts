import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const useDeleteQuiz = (id: string, collectionId: string) => {
  const queryClient = useQueryClient();

  const request = async () => {
    const res = await axios.delete(`/api/v1/quizzes/${id}`);
    queryClient.invalidateQueries('quizzes');
    queryClient.invalidateQueries(['collections', collectionId]);

    return res.data.data;
  };

  const { mutate, isLoading } = useMutation(request);

  const deleteQuiz = () => {
    mutate();
  };

  return {
    deleteQuiz,
    isLoading,
  };
};

export default useDeleteQuiz;
