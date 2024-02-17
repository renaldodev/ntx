import { Fragment } from "react";
import { Form } from "../../section/register-plataforma";
import { service } from "../../service";
import { enqueueSnackbar } from "notistack";

export function PlataformaRegister() {
	const { mutate } = service.plataforma.create.useMutation({
		onSuccess() {
			enqueueSnackbar("Plataforma adicionada com sucesso");
		},
		onError() {
			enqueueSnackbar("Algo deu errado", { variant: "error" });
		},
	});
	return (
		<Fragment>
			<Form submit={(body) => mutate({ body })} isLoading={false} />
		</Fragment>
	);
}
