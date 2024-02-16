import { Fragment } from "react";
import Pageheader from "../../components/pageheader/pageheader";
import { Form } from "../../section/register-bloco";
import { service } from "../../service";

export function BlocoRegister() {
  const { mutate } = service.bloco.create.useMutation({});
  return (
    <Fragment>
      <Pageheader title="Cadastro" heading="Bloco" active="cadastro" />
      <Form submit={(body) => mutate({ body })} isLoading={false} />
    </Fragment>
  );
}
