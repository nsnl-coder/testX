import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const useDeleteDocument = () => {
  const queryClient = useQueryClient();

  const deleteDocument = async (id: string) => {
    const res = await axios.delete(`/api/v1/documents/${id}`);
    queryClient.invalidateQueries('documents');
    return res.data.data;
  };

  const { mutate, isLoading, isError } = useMutation(deleteDocument);

  return {
    mutate,
    isLoading,
  };
};

export default useDeleteDocument;
