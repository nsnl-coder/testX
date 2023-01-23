import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import Collection from './collection';

const useCreateCollection = () => {
  const queryClient = useQueryClient();

  const request = async (documentId: string) => {
    const res = await axios({
      method: 'post',
      url: '/api/v1/collections',
      data: {
        document: documentId,
        ordering: queryClient.getQueryData<Collection[]>('collections')?.length,
      },
    });

    queryClient.invalidateQueries('collections');
    return res.data.data;
  };

  const { mutate, isLoading } = useMutation(request);

  const createCollection = (documentId: string | undefined) => {
    if (documentId) mutate(documentId);
  };

  return {
    createCollection,
    isLoading,
  };
};

export default useCreateCollection;
