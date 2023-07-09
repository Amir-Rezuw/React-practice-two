import { Fragment, useContext, useState } from "react";
import Modal from "../Shared/Modal";
import styles from "./Cart.module.css";
import ModalContext from "@/UI/Context/CartModal.ctx";
import CartContext from "@/UI/Context/Cart.ctx";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import { ICheckoutInputs } from "@/Types/UI/ICheckoutInputs";
import usePostCart from "@/UI/Hooks/usePostCart";
const Cart = () => {
  const {
    items: cartItems,
    totalAmount,
    addItem,
    removeItem,
  } = useContext(CartContext);
  const { toggleModal } = useContext(ModalContext);
  const [hasClickedOrderBtn, setHasClickedOrderBtn] = useState(false);
  const toggleOrderClickState = () => {
    setHasClickedOrderBtn((perviousState) => !perviousState);
  };
  const { mutate, isLoading, isSuccess } = usePostCart();
  const onSubmitOrder = (data: ICheckoutInputs) => {
    mutate({ user: data, orderedItems: cartItems });
  };

  return (
    <Modal>
      {!hasClickedOrderBtn && (
        <ul className={styles["cart-items"]}>
          {cartItems.map((cartItem) => (
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
      )}
      <div className={styles.total}>
        <span>Total amount</span>
        <span>{totalAmount.toFixed(2)}</span>
      </div>
      {hasClickedOrderBtn && (
        <Checkout
          isLoading={isLoading}
          onSubmitOrder={onSubmitOrder}
          onCancel={toggleOrderClickState}
          isSuccess={isSuccess}
        />
      )}
      <div className={styles.actions}>
        <button
          hidden={hasClickedOrderBtn}
          onClick={toggleModal}
          className={styles["button--alt"]}
        >
          Close
        </button>
        {cartItems.length > 0 && (
          <button
            hidden={hasClickedOrderBtn}
            className={styles["button"]}
            onClick={toggleOrderClickState}
          >
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
