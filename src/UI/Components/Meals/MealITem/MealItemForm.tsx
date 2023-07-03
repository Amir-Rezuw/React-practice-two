import { useRef } from "react";
import Input from "@/UI/Components/Shared/Input";
import styles from "./MealItemForm.module.css";
import { FormEvent } from "react";
const MealItemForm = ({
  onAddTocart,
}: {
  onAddTocart: (enteredAmount: string) => void;
}) => {
  const amountInputRef = useRef<HTMLInputElement>();
  const onAddItemToCartFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const amountInput = amountInputRef.current as HTMLInputElement;
    if (amountInput.value.trim().length === 0) return;

    onAddTocart(amountInput.value);
  };
  return (
    <form
      className={styles.form}
      onSubmit={onAddItemToCartFormSubmit}
    >
      <Input
        ref={amountInputRef}
        label="Amount"
        id="Amount"
        type="number"
        min={1}
        max={5}
        step={1}
        defaultValue={1}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
