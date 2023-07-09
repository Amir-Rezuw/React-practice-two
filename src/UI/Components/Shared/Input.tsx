import {
  ComponentPropsWithoutRef,
  HTMLInputTypeAttribute,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import styles from "./Input.module.css";
interface IProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
  type: HTMLInputTypeAttribute;
  id: string;
  applyDefaultParentStyles?: boolean;
  additionalParentStyles?: string;
}
const Input = forwardRef(
  (
    {
      additionalParentStyles,
      label,
      id,
      type,
      applyDefaultParentStyles = true,
      ...rest
    }: IProps,
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => {
      return inputRef.current;
    });
    return (
      <div
        className={
          applyDefaultParentStyles ? styles.input : additionalParentStyles
        }
      >
        <label htmlFor={id}>{label}</label>
        <input
          ref={inputRef}
          id={id}
          type={type}
          {...rest}
        />
      </div>
    );
  }
);

export default Input;
