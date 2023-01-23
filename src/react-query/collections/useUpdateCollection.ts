import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const useUpdateCollection = () => {
  const queryClient = useQueryClient();

  const request = async ({ name, id }: { name: string; id: string }) => {
    const res = await axios({
      method: 'put',
      url: `/api/v1/collections/${id}`,
      data: {
        name,
      },
    });

    queryClient.invalidateQueries('collections');
    return res.data.data;
  };

  const { mutate, isLoading } = useMutation(request);

  const updateCollection = (name: string | undefined, id: string) => {
    if (name) mutate({ name, id });
  };

  return {
    updateCollection,
    isLoading,
  };
};

export default useUpdateCollection;
