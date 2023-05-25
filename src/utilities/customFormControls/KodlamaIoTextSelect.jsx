import { useField } from "formik";
import React from "react";
import { FormField, Label, Select } from "semantic-ui-react";

export default function KodlamaIoTextSelect({ ...props }) {
  const [field, meta, changedValue] = useField(props.name);
  //console.log(field);
  return (
    <div>
      <FormField error={meta.touched && !!meta.error}>
        <label>{props.label}</label>
        <Select
          onChange={(event, data) => changedValue.setValue(data.value)}
          {...props}
        />
        {meta.touched && !!meta.error ? (
          <Label pointing basic color="red" content={meta.error}></Label>
        ) : null}
      </FormField>
    </div>
  );
}
