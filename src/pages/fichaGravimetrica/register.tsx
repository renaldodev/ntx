import { Fragment } from "react";
import { FormFichaGravimetrica } from "../../section/register-ficha-gravimetrica";
import { service } from "../../service";
import { enqueueSnackbar } from "notistack";

export function FichaGravimetricaRegister() {
	const { mutate } = service.fichaGravimetrica.create.useMutation({
		onSuccess() {
			enqueueSnackbar("Ficha Gravimetrica adicionada com sucesso");
		},
		onError(erro) {
			enqueueSnackbar(`Algo deu errado ${JSON.stringify(erro)}`, {
				variant: "error",
			});
		},
	});
	return (
		<Fragment>
			<FormFichaGravimetrica
				submit={(body) => mutate({ body })}
				isLoading={false}
			/>
		</Fragment>
	);
}
