import { env } from "@/Environment/Environment";
import { useMemo } from "react";
import { mealsRequest } from "@/Service/Requests";
import { useQuery } from "@tanstack/react-query";
const useGetMeals = () => {
  const queryKey = useMemo(() => `${env.baseUrl}meals.json`, []);

  const result = async () => {
    return await mealsRequest();
  };

  return useQuery({ queryKey: [queryKey], queryFn: result });
};

export default useGetMeals;
