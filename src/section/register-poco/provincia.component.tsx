import { Control } from "react-hook-form";
import { SelectField } from "../../components/hook-form/select";
import { service } from "../../service";

type Props = {
  label: string;
  name: string;
  error: string;
  control: Control<any, any, any>;
};
export function ProvinciaSelect({ label, name, error, control }: Props) {
  const { data, isLoading } = service.provincia.list.useQuery([
    "provincia",
    "list",
  ]);
  const provincias = data?.body || [];

  return (
    <SelectField control={control} error={error} label={label} name={name}>
      <option>{label}</option>
      {provincias.map((o) => (
        <option key={o.descricao} value={o.provinciaId}>
          {o.descricao}
        </option>
      ))}
    </SelectField>
  );
}
