import { IServerMeals } from "@/Types/API/IServerMeals";
import RequsetBuilder from "./RequestBuilder";
import { AxiosResponse } from "axios";

export const mealsRequest = async (): Promise<AxiosResponse<IServerMeals>> => {
  const builder = new RequsetBuilder();
  return await builder.setMethod("GET").setUrl("meals.json").ExecuteRequest();
};
