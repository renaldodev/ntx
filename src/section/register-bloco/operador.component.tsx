import { Control } from "react-hook-form";
import { SelectField } from "../../components/hook-form/select";
import { service } from "../../service";

type Props = {
	label: string;
	name: string;
	error: string;
	control: Control<any, any, any>;
};
export function OperadorSelect({ label, name, error, control }: Props) {
	const { data, isLoading } = service.operador.list.useQuery([
		"operador",
		"list",
	]);
	const operadores = data?.body || [];

	return (
		<SelectField control={control} error={error} label={label} name={name}  >
			<option>{label}</option>
			{operadores.map((o) => (
				<option key={o.usuarioRegistroId} value={o.usuarioRegistroId}>
					{o.atualizadoPor}
				</option>
			))}
		</SelectField>
	);
}
