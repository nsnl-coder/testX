import axios from 'axios';
import { useQuery } from 'react-query';
import Quiz from './Quiz';

const useGetQuizzes = (collectionId: string | undefined) => {
  const queryFn = async () => {
    const res = await axios.get('/api/v1/quizzes', {
      params: {
        collectionId,
      },
    });
    return res.data.data;
  };

  const res = useQuery<Quiz[]>(['quizzes', collectionId], queryFn, {
    enabled: !!collectionId,
  });

  return {
    data: res.data,
    isLoading: res.isLoading,
    isError: res.isError,
  };
};

export default useGetQuizzes;
