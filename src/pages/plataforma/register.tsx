import { Fragment } from "react";
import Pageheader from "../../components/pageheader/pageheader";
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
			<Pageheader title="Cadastro" heading="Plataforma" active="cadastro" />
			<Form submit={(body) => mutate({ body })} isLoading={false} />
		</Fragment>
	);
}
