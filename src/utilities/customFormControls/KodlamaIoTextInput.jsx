import { useField } from "formik";
import React from "react";
import { FormField, Label } from "semantic-ui-react";

export default function KodlamaIoTextInput({ ...props }) {
  const [field, meta] = useField(props);
  //console.log(field);
  return (
    <div>
      <FormField error={meta.touched && !!meta.error}>
        <label>{props.label}</label>
        <input {...field} {...props} />
        {meta.touched && !!meta.error ? (
          <Label pointing basic color="red" content={meta.error}></Label>
        ) : null}
      </FormField>
    </div>
  );
}
