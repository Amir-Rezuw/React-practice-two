import { Fragment, useContext } from "react";

import Header from "@/UI/Layout/Header";
import Meals from "./UI/Components/Meals/Meals";
import Cart from "./UI/Components/Cart/Cart";
import ModalContext from "./UI/Context/CartModal.ctx";

function App() {
  const { isModalShowing } = useContext(ModalContext);
  return (
    <Fragment>
      {isModalShowing && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
