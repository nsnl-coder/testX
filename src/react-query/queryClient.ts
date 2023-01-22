import { QueryClient, QueryClientProvider } from 'react-query';

// Call this function when you want to prefetch the data
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export { QueryClientProvider, queryClient };
