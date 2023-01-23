import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const useDeleteCollection = () => {
  const queryClient = useQueryClient();

  const request = async (id: string) => {
    const res = await axios.delete(`/api/v1/collections/${id}`);
    queryClient.invalidateQueries('collections');
    return res.data.data;
  };

  const { mutate, isLoading } = useMutation(request);

  const deleteCollection = (id: string) => {
    mutate(id);
  };

  return {
    deleteCollection,
    isLoading,
  };
};

export default useDeleteCollection;
