import { ReactNode, createContext, useState } from "react";

const ModalContext = createContext({
  isModalShowing: false,
  toggleModal: () => {},
});
export const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [isCartModalShowing, setIsCartModalShowing] = useState(false);
  const toggleCartModal = () => {
    setIsCartModalShowing(!isCartModalShowing);
  };
  return (
    <ModalContext.Provider
      value={{
        isModalShowing: isCartModalShowing,
        toggleModal: toggleCartModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
export default ModalContext;
