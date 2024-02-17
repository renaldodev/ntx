import { Fragment } from "react";
import { FormTeste } from "../../section/register-ficha-teste";
import { service } from "../../service";
import { enqueueSnackbar } from "notistack";

export function FichaDeTesteRegister() {
	const { mutate } = service.fichaTeste.create.useMutation({
		onSuccess() {
			enqueueSnackbar("Ficha de Teste adicionada com sucesso");
		},
		onError() {
			enqueueSnackbar("Algo deu errado", { variant: "error" });
		},
	});
	return (
		<Fragment>
			<FormTeste submit={(body) => mutate({ body })} isLoading={false} />
		</Fragment>
	);
}
