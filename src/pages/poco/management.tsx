import { Fragment } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import Pageheader from "../../components/pageheader/pageheader";
import { Link } from "react-router-dom";
import { queryClient, service } from "../../service";
import { useTranslation } from "../../hooks";
import { enqueueSnackbar } from "notistack";
import { ResponsiveDataTable } from "../../components/common/responsive-table";

const img =
  "https://hips.hearstapps.com/hmg-prod/images/robert-pattinson-as-bruce-wayne-batman-in-the-batman-1645187114.jpg";

export function PocoManagement() {
  const { data } = service.poco.list.useQuery(["poco", "list"]);
  const { mutate } = service.operador.delete.useMutation({
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["operator", "list"] });
      enqueueSnackbar("Operador adicionado com sucesso");
    },
    onError() {
      enqueueSnackbar("Algo deu errado", { variant: "error" });
    },
  });
  const pocos = data?.body || [];
  const columns = [
    {
      Header: "Descrição",
      accessor: "descricao",
    },
    {
      Header: "Bacia",
      accessor: "bacia",
    },
    {
      Header: "Bloco",
      accessor: "bloco",
    },
    {
      Header: "Licença de Exploração",
      accessor: "licencaExploracao",
    },
    {
      Header: "Latitude",
      accessor: "latitude",
    },
    {
      Header: "Longitude",
      accessor: "longetitude",
    },
    {
      Header: "Lâmina de Água",
      accessor: "lamineDeAgua",
    },
    {
      Header: "Data de Início de Perfuração",
      accessor: "dataInicioPerfuracao",
    },
    {
      Header: "Data de Conclusão de Perfuração",
      accessor: "dataConclusaoPerfuracao",
    },
    {
      Header: "Profundidade",
      accessor: "profundidade",
    },
    {
      Header: "Profundidade Total",
      accessor: "profundidadeTotal",
    },
    {
      Header: "Nome da Rig",
      accessor: "nomeDaRig",
    },
    {
      Header: "Classe",
      accessor: "classe",
    },
    {
      Header: "Ambiente",
      accessor: "ambiente",
    },
    {
      Header: "Data DT",
      accessor: "dataDt",
    },
    {
      Header: "Data de Reentrada",
      accessor: "dataDeReentrada",
    },
    {
      Header: "Data de Conclusão",
      accessor: "dataDeConclusao",
    },
    {
      Header: "Tipo de Poço",
      accessor: "pocoTipoId",
    },
    {
      Header: "Plataforma",
      accessor: "plataformaId",
    },
    {
      Header: "Provincia",
      accessor: "provinciaId",
    },
    {
      Header: "Imagem",
      accessor: "imagem",
    },
  ];
  const { translate } = useTranslation();

  const onDelete = (operadorId: string) => mutate({ params: { operadorId } });
  return (
    <Fragment>
      <Pageheader title="Gestão de poços" heading="Poços" active="gestão" />
      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header>
              {/* <Card.Title>Responsive Datatable</Card.Title> */}
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <ResponsiveDataTable data={pocos} columns={columns} />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}
