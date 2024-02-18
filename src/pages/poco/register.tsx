import { Fragment } from "react";
import Pageheader from "../../components/pageheader/pageheader";
import { Form } from "../../section/register-poco";
import { service } from "../../service";
import { enqueueSnackbar } from "notistack";

export function PocoRegister() {
	const { mutate } = service.poco.create.useMutation({
		onSuccess() {
			enqueueSnackbar("Poço adicionado com sucesso");
		},
		onError(error) {
			enqueueSnackbar(`Algo deu errado ${JSON.stringify(error)}`, {
				variant: "error",
			});
		},
	});
	return (
		<Fragment>
			<Pageheader title="Cadastro" heading="Poço" active="cadastro" />
			<Form submit={(body) => mutate({ body })} isLoading={false} />
		</Fragment>
	);
}
