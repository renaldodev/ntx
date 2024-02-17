import { FC, Fragment } from "react";
import {
  Button,
  Card,
  Col,
  ListGroup,
  Nav,
  ProgressBar,
  Row,
  Tab,
} from "react-bootstrap";
import Pageheader from "../../components/pageheader/pageheader";
import face9 from "../../assets/images/faces/14.jpg";
import Info from "./info";
interface ProfileProps {}

export const Chart: FC<ProfileProps> = () => {
  return (
    <Fragment>
      <Pageheader title="Inicio" />
      <Card className="m-5 p-3">
        <div className="row justify-content-center">
          <Col xxl={12} xl={12} lg={12} md={12} xm={12}>
            <Card
              className="custom-card pb-0 overflow-hidden"
              style={{
                height: "15rem",
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1708058885492-09ef26cd4af8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
									backgroundSize: "cover",
									backgroundPosition: "center",
              }}
            >
              <Card.Body className="p-0">
                <div className="contact-page-banner">
                  <div className="text-center">
                    <h3 className="fw-semibold text-fixed-white">
                      Seja Bem-vindo
                    </h3>
                    <h6 className="text-fixed-white  px-sm-0 px-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Corporis quaerat.
                    </h6>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Row>
            <Col xxl={4} xl={12}>
              <Card className="custom-card overflow-hidden">
                <Card.Body className="card-body p-0">
                  <div className="d-sm-flex align-items-top p-4 border-bottom-0 main-profile-cover">
                    <div>
                      <span className="avatar avatar-xxl avatar-rounded online me-3">
                        <img src={face9} alt="" />
                      </span>
                    </div>
                    <div className="flex-fill main-profile-info">
                      <div className="d-flex align-items-center justify-content-between">
                        <h6 className="fw-semibold mb-1 text-fixed-white">
                          Json Taylor
                        </h6>
                      </div>
                      <p className="mb-1 text-muted text-fixed-white op-7">
                        Chief Executive Officer (C.E.O)
                      </p>
                      <p className="fs-12 text-fixed-white mb-4 op-5">
                        <span className="me-3">
                          <i className="ri-building-line me-1 align-middle"></i>
                          Georgia
                        </span>
                        <span>
                          <i className="ri-map-pin-line me-1 align-middle"></i>
                          Washington D.C
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="p-4 border-bottom border-block-end-dashed">
                    <p className="fs-15 mb-2 me-4 fw-semibold">
                      Contact Information :
                    </p>
                    <div className="text-muted">
                      <p className="mb-2">
                        <span className="avatar avatar-sm avatar-rounded me-2 bg-light text-muted">
                          <i className="ri-mail-line align-middle fs-14"></i>
                        </span>
                        sonyataylor2531@gmail.com
                      </p>
                      <p className="mb-2">
                        <span className="avatar avatar-sm avatar-rounded me-2 bg-light text-muted">
                          <i className="ri-phone-line align-middle fs-14"></i>
                        </span>
                        +(555) 555-1234
                      </p>
                      <p className="mb-0">
                        <span className="avatar avatar-sm avatar-rounded me-2 bg-light text-muted">
                          <i className="ri-map-pin-line align-middle fs-14"></i>
                        </span>
                        MIG-1-11, Monroe Street, Georgetown, Washington D.C,
                        USA,20071
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xxl={8} xl={12}>
              <Info />
            </Col>
          </Row>
        </div>
      </Card>
    </Fragment>
  );
};
