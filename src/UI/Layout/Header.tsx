import { Fragment, useContext } from "react";
import styles from "./Header.module.css";
import mealPicture from "@/assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import ModalContext from "@/UI/Context/CartModal.ctx";
const Header = () => {
  const { toggleModal } = useContext(ModalContext);
  return (
    <Fragment>
      <header className={styles.header}>
        <div>
          <h1>Meals</h1>
          <HeaderCartButton onClick={toggleModal} />
        </div>
      </header>
      <div className={styles["main-image"]}>
        <img
          src={mealPicture}
          alt="Are you serious? سیروس خودتی؟"
        />
      </div>
    </Fragment>
  );
};

export default Header;
