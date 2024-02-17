import { Fragment } from "react";
import { FormFichaHidrocarboneto } from "../../section/register-ficha-hidrocarboneto";
import { service } from "../../service";
import { enqueueSnackbar } from "notistack";

export function FichaDeHidroCarbonoRegister() {
	const { mutate } = service.hridroCarbonato.create.useMutation({
		onSuccess() {
			enqueueSnackbar("Ficha de Hidrocarboneto adicionada com sucesso");
		},
		onError() {
			enqueueSnackbar("Algo deu errado", { variant: "error" });
		},
	});
	return (
		<Fragment>
			<FormFichaHidrocarboneto
				submit={(body) => mutate({ body })}
				isLoading={false}
			/>
		</Fragment>
	);
}
