import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../Shared/Input";
import styles from "./Checkout.module.css";
import { ICheckoutInputs } from "@/Types/UI/ICheckoutInputs";
import { useEffect } from "react";

const Checkout = ({
  onCancel,
  onSubmitOrder,
  isLoading,
  isSuccess,
}: {
  onCancel: () => void;
  onSubmitOrder: (data: ICheckoutInputs) => void;
  isLoading: boolean;
  isSuccess: boolean;
}) => {
  const { register, handleSubmit, reset } = useForm<ICheckoutInputs>();
  const onSubmit: SubmitHandler<ICheckoutInputs> = (data) => {
    onSubmitOrder(data);
  };
  useEffect(() => {
    if (isSuccess) {
      reset();
    }
  }, [isSuccess]);
  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Input
          additionalParentStyles={styles.control}
          applyDefaultParentStyles={false}
          id="name"
          label="Your name"
          type="text"
          {...register("name", {
            required: true,
          })}
        />
        <Input
          additionalParentStyles={styles.control}
          applyDefaultParentStyles={false}
          id="street"
          label="Street"
          type="text"
          {...register("street", {
            required: true,
          })}
        />

        <Input
          additionalParentStyles={styles.control}
          applyDefaultParentStyles={false}
          id="postal"
          label="Postal"
          type="number"
          {...register("postal", {
            required: true,
          })}
        />

        <Input
          additionalParentStyles={styles.control}
          applyDefaultParentStyles={false}
          id="city"
          label="city"
          type="text"
          {...register("city", {
            required: true,
          })}
        />
      </div>
      <div className={styles.actions}>
        <button
          type="button"
          onClick={onCancel}
        >
          Edit Cart
        </button>
        <button
          disabled={isLoading}
          className={styles.submit}
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Checkout;
