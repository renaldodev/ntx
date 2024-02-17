import { Fragment } from "react";
import { FormFichaPerfuracao } from "../../section/register-ficha-perfuracao";
import { service } from "../../service";
import { enqueueSnackbar } from "notistack";

export function FichaPerfuracaoRegister() {
	const { mutate } = service.fichaPerfuracao.create.useMutation({
		onSuccess() {
			enqueueSnackbar("Ficha Geologica adicionada com sucesso");
		},
		onError() {
			enqueueSnackbar("Algo deu errado", { variant: "error" });
		},
	});
	return (
		<Fragment>
			<FormFichaPerfuracao
				submit={(body) => mutate({ body })}
				isLoading={false}
			/>
		</Fragment>
	);
}
