import { Fragment } from "react";
import { FormFichaMagnetica } from "../../section/register-ficha-magnetica";
import { service } from "../../service";
import { enqueueSnackbar } from "notistack";

export function FichaMagneticaRegister() {
	const { mutate } = service.fichaMagnetica.create.useMutation({
		onSuccess() {
			enqueueSnackbar("Ficha Magnetica adicionada com sucesso");
		},
		onError(erro) {
			enqueueSnackbar(`Algo deu errado ${JSON.stringify(erro)}`, {
				variant: "error",
			});
		},
	});
	return (
		<Fragment>
			<FormFichaMagnetica
				submit={(body) => mutate({ body })}
				isLoading={false}
			/>
		</Fragment>
	);
}
