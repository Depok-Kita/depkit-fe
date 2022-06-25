import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

type InputFieldProps = {
  className?: string;

  type: "text" | "number" | "password" | "email"; // input type
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
};

export const InputField = (props: InputFieldProps) => {
  return (
    <FormControl isInvalid={props.isError} className={props.className}>
      <FormLabel htmlFor={props.name}>{props.label}</FormLabel>
      <InputGroup>
        {props.leftIcon && (
          <InputLeftElement pointerEvents="none" children={props.leftIcon} />
        )}
        <Input
          type={props.type}
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.onChange}
          isDisabled={props.isDisabled}
          className="hover:border-cerulean"
        />
        {props.rightIcon && (
          <InputRightElement pointerEvents="none" children={props.rightIcon} />
        )}
      </InputGroup>

      {props.isError && (
        <FormErrorMessage>{props.errorMessage}</FormErrorMessage>
      )}
    </FormControl>
  );
};
