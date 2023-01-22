import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const useCreateDocument = () => {
  const queryClient = useQueryClient();

  const createDocument = async (name: string) => {
    const res = await axios({
      method: 'post',
      url: '/api/v1/documents',
      data: { name },
    });

    queryClient.invalidateQueries('documents');
    return res.data.data;
  };

  const { mutate, isLoading, isError } = useMutation(createDocument);

  return {
    mutate,
    isLoading,
  };
};

export default useCreateDocument;
