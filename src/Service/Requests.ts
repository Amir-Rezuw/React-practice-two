import { IServerMeals } from "@/Types/API/IServerMeals";
import RequsetBuilder from "./RequestBuilder";
import { AxiosResponse } from "axios";

import { IPostCartData } from "@/Types/API/IPostCartData";

export const mealsRequest = async (): Promise<AxiosResponse<IServerMeals>> => {
  const builder = new RequsetBuilder();
  return await builder.setMethod("GET").setUrl("meals.json").ExecuteRequest();
};
export const postCart = async (body: IPostCartData) => {
  const builder = new RequsetBuilder();
  return await builder
    .setUrl("orders.json")
    .setMethod("POST")
    .setBody(body)
    .ExecuteRequest();
};
