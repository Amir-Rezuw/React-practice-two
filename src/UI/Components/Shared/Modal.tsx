import { Fragment, ReactNode, useContext } from "react";
import styles from "./Modal.module.css";
import { createPortal } from "react-dom";
import ModalContext from "@/UI/Context/CartModal.ctx";
const ModalOverlay = ({ children }: { children: ReactNode }) => {
  const { isModalShowing } = useContext(ModalContext);
  return (
    <div className={!isModalShowing ? styles["modal-close"] : styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
const Backdrop = () => {
  const { toggleModal } = useContext(ModalContext);
  return (
    <div
      onClick={toggleModal}
      className={styles.backdrop}
    ></div>
  );
};
const Modal = ({ children }: { children: ReactNode }) => {
  const portalElement = document.querySelector("#overlays") as HTMLElement;
  return (
    <Fragment>
      {createPortal(<Backdrop />, portalElement)}

      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
};

export default Modal;
