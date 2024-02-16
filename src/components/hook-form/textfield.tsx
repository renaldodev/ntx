import { Controller, Control } from "react-hook-form";
import { Form, FormControlProps } from "react-bootstrap";

type Props = FormControlProps & {
  label: string;
  name: string;
  error: string;
  control: Control<any, any, any>;
};

export function TextField({ name, label, control, error, ...rest }: Props) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <>
          <Form.Label className="">{label}</Form.Label>
          <Form.Control {...field} placeholder={label} {...rest} />
          {error && (
            <span style={{ color: "red", marginLeft: 5 }}>{error}</span>
          )}
        </>
      )}
    />
  );
}
