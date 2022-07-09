import { FormLabel as FormLabelTemplate } from "@chakra-ui/react";

type FormLabelProps = {
  children: React.ReactNode;
  [props: string]: any;
};

/**
 *
 * Custom Styled Form Label
 * used in InputField & SelectField
 */

export const FormLabel = ({ children, ...props }: FormLabelProps) => {
  return (
    <FormLabelTemplate className="font-jakarta-sans text-denim-dark" {...props}>
      {children}
    </FormLabelTemplate>
  );
};
