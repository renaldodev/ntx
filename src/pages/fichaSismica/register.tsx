import { Fragment } from "react";
import { FormFichaSismica } from "../../section/register-ficha-sismica";
import { service } from "../../service";
import { enqueueSnackbar } from "notistack";

export function FichaSismicaRegister() {
	const { mutate } = service.fichaSismica.create.useMutation({
		onSuccess() {
			enqueueSnackbar("Ficha Sismica adicionada com sucesso");
		},
		onError(erro) {
			enqueueSnackbar(`Algo deu errado ${JSON.stringify(erro)}`, {
				variant: "error",
			});
		},
	});
	return (
		<Fragment>
			<FormFichaSismica submit={(body) => mutate({ body })} isLoading={false} />
		</Fragment>
	);
}
