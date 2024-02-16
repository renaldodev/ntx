import { Fragment } from "react";
import { enqueueSnackbar } from "notistack";
import Pageheader from "../../components/pageheader/pageheader";
import { RegisterForm } from "../../section/register-operator";
import { service } from "../../service";

export function OperadorUpdate() {
  const { mutate } = service.operador.create.useMutation({
    onSuccess() {
      enqueueSnackbar("Operador adicionado com sucesso");
    },
    onError() {
      enqueueSnackbar("Algo deu errado", { variant: "error" });
    },
  });
  const {  data} = service.operador.getById.useQuery(['operador', 'list'], {params:{operadorId:'5'}})
  return (
    <Fragment>
      <Pageheader title="Atualizar" heading="Operador" active="atualizar" />
      <RegisterForm submit={(body) => mutate({ body })} operador={data?.body} edit />
    </Fragment>
  );
}
