import { useContext } from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "@/UI/Context/Cart.ctx";
const MealItem = ({
  name,
  description,
  price,
  id,
}: {
  name: string;
  description: string;
  price: number;
  id: string;
}) => {
  const { addItem } = useContext(CartContext);
  const addToCart = (amount: string) => {
    addItem({
      amount: +amount,
      id,
      name,
      price,
    });
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{`$${price.toFixed(2)}`}</div>
      </div>
      <div>
        <MealItemForm onAddTocart={addToCart} />
      </div>
    </li>
  );
};

export default MealItem;
