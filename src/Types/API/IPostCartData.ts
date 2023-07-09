import { ICartItem } from "../UI/ICartContext";
import { ICheckoutInputs } from "../UI/ICheckoutInputs";

export interface IPostCartData {
  user: ICheckoutInputs;
  orderedItems: ICartItem[];
}
