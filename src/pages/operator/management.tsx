import { Fragment } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import Pageheader from "../../components/pageheader/pageheader";
import { Link } from "react-router-dom";
import { queryClient, service } from "../../service";
import { useTranslation } from "../../hooks";
import { enqueueSnackbar } from "notistack";

const img =
  "https://hips.hearstapps.com/hmg-prod/images/robert-pattinson-as-bruce-wayne-batman-in-the-batman-1645187114.jpg";

export function OperadorManagement() {
  const { data } = service.operador.list.useQuery(["operator", "list"]);
  const { mutate } = service.operador.delete.useMutation({
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["operator", "list"] });
      enqueueSnackbar("Operador adicionado com sucesso");
    },
    onError() {
      enqueueSnackbar("Algo deu errado", { variant: "error" });
    },
  });
  const operators = data?.body || [];
  const { translate } = useTranslation();

  const onDelete = (operadorId: string) => mutate({ params: { operadorId } });
  return (
    <Fragment>
      <Pageheader title="Gerenciamento" heading="Operador" active="lista" />
      <Row>
        <h1>{translate("hello_world")}</h1>
        <Col xl={12}>
          <Card className="custom-card">
            <Table className="table text-nowrap table-bordered">
              <thead>
                <tr>
                  <th scope="col">Email</th>
                  <th scope="col">NIF</th>
                  <th scope="col">Descricao</th>
                  <th scope="col">Telefone</th>
                  <th scope="col">Atualizado Por</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {operators.map((operator) => (
                  <tr key={operator.usuarioRegistroId}>
                    <th scope="row">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-xs me-2 online avatar-rounded">
                          <img src={img} alt="img" />
                        </span>
                        {operator.email}
                      </div>
                    </th>

                    <td> {operator.nif}</td>
                    <td> {operator.descricao}</td>
                    <td> {operator.telefone1}</td>
                    <td> {operator.atualizadoPor}</td>
                    <td>
                      <div className="hstack gap-2 flex-wrap">
                        <Link to="#" className="text-info fs-14 lh-1">
                          <i className="ri-edit-line"></i>
                        </Link>
                        <Link
                          to="#"
                          className="text-danger fs-14 lh-1"
                          onClick={() =>
                            onDelete(String(operator.usuarioRegistroId))
                          }
                        >
                          <i className="ri-delete-bin-5-line"></i>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}
