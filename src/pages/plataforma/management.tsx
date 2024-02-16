import { Fragment } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import Pageheader from "../../components/pageheader/pageheader";
import { Link } from "react-router-dom";
import { service } from "../../service";
import { useTranslation } from "../../hooks";

export function PlataformManagement() {
  const img =
    "https://hips.hearstapps.com/hmg-prod/images/robert-pattinson-as-bruce-wayne-batman-in-the-batman-1645187114.jpg";
  const { data } = service.plataforma.list.useQuery(["operator", "list"]);
  const plataformas = data?.body || [];
  const { translate } = useTranslation();
  return (
    <Fragment>
      <Pageheader title="Gerenciamento" heading="Operador" active="lista" />
      <Row>
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
                {plataformas.map((plataforma) => (
                  <tr key={plataforma.usuarioRegistroId}>
                    <th scope="row">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-xs me-2 online avatar-rounded">
                          <img src={img} alt="img" />
                        </span>
                        {plataforma.email}
                      </div>
                    </th>

                    <td> {plataforma.nif}</td>
                    <td> {plataforma.descricao}</td>
                    <td> {plataforma.telefone1}</td>
                    <td> {plataforma.atualizadoPor}</td>
                    <td>
                      <div className="hstack gap-2 flex-wrap">
                        <Link to="#" className="text-info fs-14 lh-1">
                          <i className="ri-edit-line"></i>
                        </Link>
                        <Link to="#" className="text-danger fs-14 lh-1">
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
