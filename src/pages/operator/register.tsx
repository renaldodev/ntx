import { Fragment } from "react";
import { enqueueSnackbar } from "notistack";
import { RegisterForm } from "../../section/register-operator";
import { service } from "../../service";

export function OperadorRegister() {
	const { mutate } = service.operador.create.useMutation({
		onSuccess() {
			enqueueSnackbar("Operador adicionado com sucesso");
		},
		onError() {
			enqueueSnackbar("Algo deu errado", { variant: "error" });
		},
	});
	return (
		<Fragment>
			<RegisterForm submit={(body) => mutate({ body })} />
		</Fragment>
	);
}
