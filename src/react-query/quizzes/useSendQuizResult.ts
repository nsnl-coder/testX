import axios from 'axios';
import { useMutation } from 'react-query';

const useSendQuizResult = (
  quizId: string,
  document: string,
  collectionId: string
) => {
  const request = async (result: boolean) => {
    await axios({
      method: 'post',
      url: '/api/v1/quizzes/result',
      data: {
        id: quizId,
        result,
        document,
        collectionId,
      },
    });
  };

  const { mutate } = useMutation(request);

  return { mutate };
};

export default useSendQuizResult;
