import CartIcon from "../Components/Cart/CartIcon";
import CartContext from "../Context/Cart.ctx";
import styles from "./HeaderCartButton.module.css";
import {
  ComponentPropsWithoutRef,
  useContext,
  useEffect,
  useState,
} from "react";
interface IProps extends ComponentPropsWithoutRef<"button"> {}
const HeaderCartButton = ({ ...rest }: IProps) => {
  const [btnisHighlighted, setBtnisHighlighted] = useState(false);
  const { items } = useContext(CartContext);

  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) return;
    setBtnisHighlighted(true);
    const timerIdentifier = setTimeout(() => {
      setBtnisHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timerIdentifier);
    };
  }, [items]);

  const btnClasses = `${styles.button} ${btnisHighlighted && styles.bump}`;
  return (
    <button
      className={btnClasses}
      {...rest}
    >
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
