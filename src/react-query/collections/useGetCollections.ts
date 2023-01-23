import axios from 'axios';
import { useQuery } from 'react-query';
import Collection from './collection';

const useGetCollections = (documentId: string | undefined) => {
  const queryFn = async () => {
    const res = await axios.get('/api/v1/collections', {
      params: {
        document: documentId,
      },
    });
    return res.data.data;
  };

  const res = useQuery<Collection[]>(['collections'], queryFn, {
    enabled: !!documentId,
  });

  return {
    data: res.data,
    isLoading: res.isLoading,
    isError: res.isError,
  };
};

export default useGetCollections;
