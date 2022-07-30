import { InputField, SelectField } from "./index";
import type { InputFieldProps } from "./InputField";
import { useField } from "formik";

interface Identifiable {
  name: string;
}

export const InputFieldFormik = (props: InputFieldProps & Identifiable) => {
  const [field, meta, helpers] = useField(props.name);
  return (
    <InputField
      value={field.value}
      onChange={field.onChange}
      onBlur={field.onBlur}
      isError={!!meta.error}
      errorMessage={meta.error}
      {...props}
    />
  );
};
