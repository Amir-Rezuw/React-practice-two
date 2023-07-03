import { Fragment, useContext } from "react";
import Modal from "../Shared/Modal";
import styles from "./Cart.module.css";
import ModalContext from "@/UI/Context/CartModal.ctx";
import CartContext from "@/UI/Context/Cart.ctx";
import CartItem from "./CartItem";
const Cart = () => {
  const { items, totalAmount, addItem, removeItem } = useContext(CartContext);
  const { toggleModal } = useContext(ModalContext);

  return (
    <Modal>
      <ul className={styles["cart-items"]}>
        {items.map((cartItem) => (
          <Fragment key={cartItem.id}>
            <CartItem
              amount={cartItem.amount}
              name={cartItem.name}
              price={cartItem.price}
              onAdd={() => {
                addItem({ ...cartItem, amount: 1 });
              }}
              onRemove={() => {
                removeItem({ ...cartItem, amount: 1 });
              }}
            />
          </Fragment>
        ))}
      </ul>
      <div className={styles.total}>
        <span>Total amount</span>
        <span>{totalAmount.toFixed(2)}</span>
      </div>
      <div className={styles.actions}>
        <button
          onClick={toggleModal}
          className={styles["button--alt"]}
        >
          Close
        </button>
        {items.length > 0 && (
          <button className={styles["button"]}>Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
