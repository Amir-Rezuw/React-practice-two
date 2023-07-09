import { env } from "@/Environment/Environment";
import { postCart } from "@/Service/Requests";
import { IPostCartData } from "@/Types/API/IPostCartData";

import { useMutation } from "@tanstack/react-query";
import { useMemo } from "react";

const usePostCart = () => {
  const key = useMemo(() => `${env.baseUrl}orders.json`, []);
  return useMutation({
    mutationKey: [key],
    mutationFn: (body: IPostCartData) => {
      return postCart(body);
    },
  });
};
export default usePostCart;
