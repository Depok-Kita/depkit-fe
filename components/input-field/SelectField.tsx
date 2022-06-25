import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
} from "@chakra-ui/react";

// type SelectOption = {
//   value?: string; // value element option
//   label?: string; // string yg ditampilkan di element option
// };

type SelectFieldProps = {
  //options: [SelectOption];
  label?: string; // label field
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  children: React.ReactNode; // option elements

  isDisabled?: boolean;
  isError?: boolean;

  errorMessage?: string;

  rightIcon?: React.ReactElement;
};

export const SelectField = (props: SelectFieldProps) => {
  return (
    <FormControl isInvalid={props.isError}>
      <FormLabel>{props.label}</FormLabel>
      <Select
        placeholder={props.placeholder}
        onChange={props.onChange}
        isDisabled={props.isDisabled}
        className="cursor-pointer"
        icon={props.rightIcon}
        iconSize="17"
      >
        {props.children}
      </Select>
      {props.isError && (
        <FormErrorMessage>{props.errorMessage}</FormErrorMessage>
      )}
    </FormControl>
  );
};
