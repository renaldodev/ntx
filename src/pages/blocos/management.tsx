import { Fragment } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import Pageheader from "../../components/pageheader/pageheader";
import { Link } from "react-router-dom";
import { service } from "../../service";
import { useTranslation } from "../../hooks";

export function BlocoManagement() {
  const img =
    "https://hips.hearstapps.com/hmg-prod/images/robert-pattinson-as-bruce-wayne-batman-in-the-batman-1645187114.jpg";
  const { data } = service.bloco.list.useQuery(["bloco", "list"]);
  const blocos = data?.body || [];
  const { translate } = useTranslation();
  return (
    <Fragment>
      <Pageheader title="Gerenciamento" heading="Bloco" active="lista" />
      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Table className="table text-nowrap table-bordered">
              <thead>
                <tr>
                  <th scope="col">Descricao</th>
                  <th scope="col">Latitude</th>
                  <th scope="col">Longetude</th>
                  <th scope="col">numero</th>
                  <th scope="col">Atualizado por</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {blocos.map((bloco) => (
                  <tr key={bloco.usuarioRegistroId}>
                    <th scope="row">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-xs me-2 online avatar-rounded">
                          <img src={img} alt="img" />
                        </span>
                        {bloco.descricao}
                      </div>
                    </th>

                    <td> {bloco.latitude}</td>
                    <td> {bloco.longetude}</td>
                    <td> {bloco.numero}</td>
                    <td> {bloco.atualizadoPor}</td>
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
