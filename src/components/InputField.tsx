import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Field, useField } from "formik";
import React from "react";

type inputeFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

export const InputField: React.FC<inputeFieldProps> = ({label, size: _, ...props}) => {
  const [field, {error}]  = useField(props);
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={Field.name}>{label}</FormLabel>
      <Input {...field} {...props} id={field.name} />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};
