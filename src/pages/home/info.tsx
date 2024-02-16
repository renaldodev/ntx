import { FC, Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Icon } from "@iconify/react";

interface WidgetsProps {}

const Info: FC<WidgetsProps> = () => {
	return (
		<Fragment>
			<Row className="flex">
				<Col xxl={6} xl={6} lg={6} md={6}>
					<Card className="custom-card">
						<Card.Body>
							<div className="d-flex align-items-top">
								<div className="me-3"></div>
								<div className="flex-fill">
									<div className="d-flex flex-wrap align-items-center justify-content-between fs-14 mb-2">
										<span className="flex-fill">
											<Icon
												icon="emojione:construction-worker-medium-skin-tone"
												fontSize={26}
												color="black"
												className="side-menu__icon"
											/>
										</span>
										<span className="ms-1 text-muted">Operador</span>
									</div>
									<div className="d-flex flex-wrap align-items-center justify-content-between">
										<h5 className="fw-semibold mb-0">12,800</h5>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={6} xl={6} lg={6} md={6}>
					<Card className="custom-card">
						<Card.Body>
							<div className="d-flex align-items-top">
								<div className="me-3"></div>
								<div className="flex-fill">
									<div className="d-flex flex-wrap align-items-center justify-content-between fs-14 mb-2">
										<span className="flex-fill">
											<Icon
												icon="teenyicons:box-solid"
												fontSize={26}
												className="side-menu__icon"
											/>
										</span>
										<span className="ms-1 text-muted">Bloco</span>
									</div>
									<div className="d-flex flex-wrap align-items-center justify-content-between">
										<h5 className="fw-semibold mb-0">18,600</h5>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={6} xl={6} lg={6} md={6}>
					<Card className="custom-card">
						<Card.Body>
							<div className="d-flex align-items-top">
								<div className="me-3"></div>
								<div className="flex-fill">
									<div className="d-flex flex-wrap align-items-center justify-content-between fs-14 mb-2">
										<span className="flex-fill">
											<Icon
												icon="game-icons:oil-rig"
												fontSize={26}
												className="side-menu__icon"
											/>
										</span>
										<span className="ms-1 text-muted">Plataforma</span>
									</div>
									<div className="d-flex flex-wrap align-items-center justify-content-between">
										<h5 className="fw-semibold mb-0">16,580</h5>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={6} xl={6} lg={6} md={6}>
					<Card className="custom-card">
						<Card.Body>
							<div className="d-flex align-items-top">
								<div className="me-3"></div>
								<div className="flex-fill">
									<div className="d-flex flex-wrap align-items-center justify-content-between fs-14 mb-2">
										<span className="flex-fill">
											<Icon
												icon="openmoji:oil-spill"
												fontSize={26}
												className="side-menu__icon"
											/>
										</span>
										<span className="ms-1 text-muted">Poço</span>
									</div>
									<div className="d-flex flex-wrap align-items-center justify-content-between">
										<h5 className="fw-semibold mb-0">12,545</h5>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Fragment>
	);
};

export default Info;
