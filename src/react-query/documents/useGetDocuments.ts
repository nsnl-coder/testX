import axios from 'axios';
import { useQuery } from 'react-query';
import Document from './document';

const useGetDocuments = () => {
  const queryFn = async () => {
    const res = await axios.get('/api/v1/documents');
    return res.data.data;
  };

  const res = useQuery<Document[]>(['documents'], queryFn);

  return {
    data: res.data,
    isLoading: res.isLoading,
    isError: res.isError,
  };
};

export default useGetDocuments;
