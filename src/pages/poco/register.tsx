import { Fragment } from "react";
import Pageheader from "../../components/pageheader/pageheader";
import { Form } from "../../section/register-poco";
import { service } from "../../service";

export function PocoRegister() {
  const { mutate } = service.poco.create.useMutation({});
  return (
    <Fragment>
      <Pageheader title="Cadastro" heading="Poço" active="cadastro" />
      <Form submit={(body) => mutate({ body })} isLoading={false} />
    </Fragment>
  );
}
