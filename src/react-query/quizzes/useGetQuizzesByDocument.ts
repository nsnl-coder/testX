import axios from 'axios';
import { useQuery } from 'react-query';
import Quiz from './Quiz';
import lodash from 'lodash';

const useGetQuizzesByDocument = (documentId: string | undefined) => {
  const queryFn = async () => {
    const res = await axios.get('/api/v1/quizzes', {
      params: {
        document: documentId,
      },
    });
    return lodash.shuffle(res.data.data);
  };

  const res = useQuery<Quiz[]>(['quizzes', documentId], queryFn, {
    enabled: !!documentId,
  });

  return {
    data: res.data,
    isLoading: res.isLoading,
    isError: res.isError,
  };
};

export default useGetQuizzesByDocument;
