import axios from 'axios';
import { useQuery } from 'react-query';
import Collection from './collection';

const useGetCollection = (id: string | undefined) => {
  const queryFn = async () => {
    const res = await axios.get(`/api/v1/collections/${id}`);
    return res.data.data;
  };

  const res = useQuery<Collection>(['collections', id], queryFn, {
    enabled: !!id,
  });

  return {
    collection: res.data,
    isLoading: res.isLoading,
    isError: res.isError,
  };
};

export default useGetCollection;
