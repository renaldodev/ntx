import { Fragment, useState } from "react";
import { enqueueSnackbar } from "notistack";
import { RegisterForm } from "../../section/register-operator";
import { service } from "../../service";
import { MessageModal } from "./message-modal";

export function OperadorRegister() {
  const [modalActive, setModalActive] = useState({
    show: false,
    title: "",
    message: "",
  });

  const [limpar, setLimpar] = useState(0);

  const { mutate } = service.operador.create.useMutation({
    onSuccess() {
      // enqueueSnackbar("Operador adicionado com sucesso");
      setModalActive({
        show: true,
        message: "Operador adicionado com sucesso!",
        title: "Sucesso",
      });
    },
    onError() {
      // enqueueSnackbar("Algo deu errado", { variant: "error" });
      setModalActive({
        show: true,
        message: "Algo deu errado!",
        title: "Erro",
      });
    },
  });
  return (
    <Fragment key={limpar}>
      <MessageModal
        close={() => {
          setModalActive((value) => ({ ...value, show: false }));
          setLimpar((value) => value + 1);
        }}
        {...modalActive}
      />
      <RegisterForm submit={(body) => mutate({ body })} />
    </Fragment>
  );
}
