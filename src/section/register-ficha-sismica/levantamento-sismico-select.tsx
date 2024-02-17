import { Control } from "react-hook-form";
import { SelectField } from "../../components/hook-form/select";
import { service } from "../../service";

type Props = {
	label?: string;
	name: string;
	error: string;
	control: Control<any, any, any>;
};
export function LevantamentoSismicoSelect({
	label,
	name,
	error,
	control,
}: Props) {
	const { data, isLoading } = service.tipoLevantamentoSismico.list.useQuery([
		"bloco",
		"list",
	]);
	const blocos = data?.body || [];

	return (
		<SelectField control={control} error={error} label={label} name={name}>
			<option>{label}</option>
			{blocos.map((o) => (
				<option
					key={o.tiposLevantamentosSismicoId}
					value={o.tiposLevantamentosSismicoId}
				>
					{o.descricao}
				</option>
			))}
		</SelectField>
	);
}
