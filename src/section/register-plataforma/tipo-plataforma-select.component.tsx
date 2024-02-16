import { Control } from "react-hook-form";
import { SelectField } from "../../components/hook-form/select";
import { service } from "../../service";

type Props = {
	label: string;
	name: string;
	error: string;
	control: Control<any, any, any>;
};
export function TipoPlataformaSelect({ label, name, error, control }: Props) {
	const { data, isLoading } = service.tipoPlataforma.list.useQuery([
		"tipoPlataforma",
		"list",
	]);
	const plataformas = data?.body || [];

	return (
		<SelectField control={control} error={error} label={label} name={name}>
			<option>{label}</option>
			{plataformas.map((o) => (
				<option key={o.tipoPlataformaId} value={o.tipoPlataformaId}>
					{o.descricao}
				</option>
			))}
		</SelectField>
	);
}
