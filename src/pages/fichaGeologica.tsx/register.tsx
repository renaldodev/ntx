import { Fragment } from "react";
import { FormFichaGeologica } from "../../section/register-ficha-geologica";
import { service } from "../../service";
import { enqueueSnackbar } from "notistack";

export function FichaGeologicaRegister() {
	const { mutate } = service.fichaGeologica.create.useMutation({
		onSuccess() {
			enqueueSnackbar("Ficha Geologica adicionada com sucesso");
		},
		onError() {
			enqueueSnackbar("Algo deu errado", { variant: "error" });
		},
	});
	return (
		<Fragment>
			<FormFichaGeologica
				submit={(body) => mutate({ body })}
				isLoading={false}
			/>
		</Fragment>
	);
}
