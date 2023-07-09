import { QueryClient, dehydrate } from "@tanstack/react-query";

export const reactQueryConfig = {
  defaultOptions: {
    queries: {
      retryOnMount: false,
      refetchOnReconnect: true,
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
};

export const dehydrateData = (queryClient: QueryClient) => {
  return {
    dehydratedState: dehydrate(queryClient),
  };
};

export const getNextPage = (
  lastPage: any[],
  allPages: any[],
  pageSize: number
): number | boolean => {
  if (lastPage.length === 0 || lastPage.length % pageSize > 0) return false;
  return allPages.length + 1;
};
