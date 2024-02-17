import { Control } from "react-hook-form";
import { SelectField } from "../../components/hook-form/select";
import { service } from "../../service";

type Props = {
	label: string;
	name: string;
	error: string;
	control: Control<any, any, any>;
};
export function TipoPocoSelect({ label, name, error, control }: Props) {
	const { data, isLoading } = service.pocoTipo.list.useQuery([
		"tipoPoco",
		"list",
	]);
	const tipoPoco = data?.body || [];

	return (
		<SelectField control={control} error={error} label={label} name={name}>
			<option>{label}</option>
			{tipoPoco.map((o) => (
				<option key={o.descricao} value={o.tipoPocoId}>
					{o.descricao}
				</option>
			))}
		</SelectField>
	);
}
