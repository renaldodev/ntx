import { Fragment, useState } from "react";
import { Form } from "../../section/register-plataforma";
import { service } from "../../service";
import { enqueueSnackbar } from "notistack";
import { MessageModal } from "../../components/common/message-modal";

export function PlataformaRegister() {
  const [modalActive, setModalActive] = useState({
    show: false,
    title: "",
    message: "",
  });

  const [limpar, setLimpar] = useState(0);

  const { mutate } = service.plataforma.create.useMutation({
    onSuccess() {
      // enqueueSnackbar("Plataforma adicionado com sucesso");
      setModalActive({
        show: true,
        message: "Plataforma adicionado com sucesso!",
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
      <Form submit={(body) => mutate({ body })} isLoading={false} />
    </Fragment>
  );
}
