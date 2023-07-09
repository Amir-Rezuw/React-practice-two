export interface IServerMeals {
  [key: string]: IServerValue;
}
interface IServerValue {
  name: string;
  description: string;
  price: number;
}
