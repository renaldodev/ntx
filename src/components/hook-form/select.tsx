import { Controller, Control } from "react-hook-form";
import { Form } from "react-bootstrap";
import { RHError } from "./error";

type Props = {
  label: string;
  name: string;
  error: string;
  control: Control<any, any, any>;
  children: any;
};
export function SelectField({ name, label, control, error, children }: Props) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <>
          <Form.Label className="">{label}</Form.Label>
          <Form.Select {...field} children={children} />

          {error && <RHError error={error} />}
        </>
      )}
    />
  );
}
