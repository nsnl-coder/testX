import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const useCreateQuiz = (
  id: string | undefined,
  collectionId: string | undefined
) => {
  const queryClient = useQueryClient();

  const createQuiz = async () => {
    const res = await axios({
      method: 'post',
      url: '/api/v1/quizzes',
      data: {
        document: id,
        collectionId,
        question: '1.',
      },
    });

    queryClient.invalidateQueries('quizzes');
    queryClient.invalidateQueries(['collections', collectionId]);
    return res.data.data;
  };

  const { mutate, isLoading } = useMutation(createQuiz);

  return {
    mutate,
    isLoading,
  };
};

export default useCreateQuiz;
