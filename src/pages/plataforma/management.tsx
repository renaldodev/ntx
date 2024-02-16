import { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Pageheader from "../../components/pageheader/pageheader";
import { queryClient, service } from "../../service";
import { useTranslation } from "../../hooks";
import { Link } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { ResponsiveDataTable } from "../../components/common/responsive-table";
const img =
	"https://hips.hearstapps.com/hmg-prod/images/robert-pattinson-as-bruce-wayne-batman-in-the-batman-1645187114.jpg";

export function PlataformaManagement() {
	const { data } = service.plataforma.list.useQuery(["plataforma", "list"]);
	const { mutate } = service.plataforma.delete.useMutation({
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ["plataforma", "list"] });
			enqueueSnackbar("Plataforma  Apagada com sucesso");
		},
		onError() {
			enqueueSnackbar("Algo deu errado", { variant: "error" });
		},
	});
	const plataforma = data?.body || [];

	const columns = [
		{
			Header: "Descrição",
			accessor: "descricao",
		},
		{
			Header: "Bloco",
			accessor: "blcocoId",
		},
		{
			Header: "Plataforma",
			accessor: "plataformaId",
		},
		{
			Header: "Tipo Plataforma",
			accessor: "tipoPlataformaId",
		},
		{
			Header: "Capacidade de Produção",
			accessor: "capacidadeDeProducao",
		},
		{
			Header: "Profundidade Instalada",
			accessor: "profundidadeInstalada",
		},
		{
			Header: "Latitude",
			accessor: "latitude",
		},
		{
			Header: "Longitude",
			accessor: "longitude",
		},
		{
			Header: "Data Registro",
			accessor: "dataRegistro",
		},
		{
			Header: "Data Atualização",
			accessor: "dataAtualizacao",
		},
		{
			Header: "Usuário Registro",
			accessor: "usuarioRegistroId",
		},
		{
			Header: "Atualizado Por",
			accessor: "atualizadoPor",
		},
	];
	const { translate } = useTranslation();
	const onDelete = (plataformaId: string) =>
		mutate({ params: { plataformaId } });
	return (
		<Fragment>
			<Pageheader
				title="Gerenciamento de Plataformas"
				heading="Plataforma"
				active="gestão"
			/>
			<Row>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Header>
							{/* <Card.Title>Responsive Datatable</Card.Title> */}
						</Card.Header>
						<Card.Body>
							<div className="table-responsive">
								<ResponsiveDataTable data={plataforma} columns={columns} />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Fragment>
	);
}
