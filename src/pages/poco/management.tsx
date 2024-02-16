import { Fragment } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import Pageheader from "../../components/pageheader/pageheader";
import { Link } from "react-router-dom";
import { service } from "../../service";
import { useTranslation } from "../../hooks";

export function ReportManagement() {
  const img =
    "https://hips.hearstapps.com/hmg-prod/images/robert-pattinson-as-bruce-wayne-batman-in-the-batman-1645187114.jpg";
  const { data } = service.operator.list.useQuery(["operator", "list"]);
  const operators = data?.body || [];
  const { translate } = useTranslation();
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
                  <th scope="col">User</th>
                  <th scope="col">Status</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {operators.map((o) => (
                  <tr key={o.id}>
                    <th scope="row">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-xs me-2 online avatar-rounded">
                          <img src={img} alt="img" />
                        </span>
                        {o.price}
                      </div>
                    </th>
                    <td>
                      <span className="badge bg-success-transparent">
                        Active
                      </span>
                    </td>
                    <td>kimosukuro@gmail.com</td>
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
