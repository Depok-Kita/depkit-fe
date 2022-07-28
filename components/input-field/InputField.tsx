import {
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { HTMLInputTypeAttribute } from "react";
import { FormLabel } from "./FormLabel";
// field contains label & input element
type InputFieldProps = {
  className?: string; // className of field element
  innerClassName?: string; // className of input element

  type?: HTMLInputTypeAttribute;
  name?: string; // field name, ex. firstname, password
  label?: string;

  value?: string | number; // input value
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  placeholder?: string;
  errorMessage?: string;

  isDisabled?: boolean;
  isError?: boolean;

  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;

  dark?: boolean; // use white font
  required?: boolean;
};

export const InputField = (props: InputFieldProps) => {
  return (
    <FormControl
      isInvalid={props.isError}
      className={`${props.dark ? "text-powder-light" : "text-denim-light"} ${
        props.className
      }`}
    >
      <FormLabel>
        {props.label}
        {props.label && props.required && (
          <span className="text-danger-light">*</span>
        )}
      </FormLabel>
      <InputGroup>
        {props.leftIcon && (
          <InputLeftElement pointerEvents="none">
            <Icon isDisabled={props.isDisabled}>{props.leftIcon}</Icon>
          </InputLeftElement>
        )}
        <Input
          type={props.type}
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.onChange}
          isDisabled={props.isDisabled}
          className={`font-jakarta-sans hover:border-cerulean ${props.innerClassName}`}
          style={{ colorScheme: props.dark ? "dark" : "normal" }}
          required={props.required}
        />
        {props.rightIcon && (
          <InputRightElement pointerEvents="none">
            <Icon isDisabled={props.isDisabled}>{props.rightIcon}</Icon>
          </InputRightElement>
        )}
      </InputGroup>

      {props.isError && (
        <FormErrorMessage>{props.errorMessage}</FormErrorMessage>
      )}
    </FormControl>
  );
};

type IconPropsType = {
  isDisabled?: boolean;
  children: React.ReactNode;
};

function Icon(props: IconPropsType) {
  return (
    <div className={props.isDisabled ? "opacity-40" : ""}>{props.children}</div>
  );
}
