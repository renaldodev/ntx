import { Fragment, useState, useEffect, ReactNode } from "react";
import { Card, Col, Row, Table, Button } from "react-bootstrap";
import Pageheader from "../../components/pageheader/pageheader";
import { Link } from "react-router-dom";
import { queryClient, service } from "../../service";
import { useTranslation } from "../../hooks";
import { enqueueSnackbar } from "notistack";
import { Column, CustomTable } from "../../components/common/table";
import { Form } from "../../section/register-bloco";

const img =
  "https://hips.hearstapps.com/hmg-prod/images/robert-pattinson-as-bruce-wayne-batman-in-the-batman-1645187114.jpg";

const RightAction = (context: any) => (
  <div className="hstack gap-2 fs-15">
    <Link to="#" className="btn btn-icon btn-sm btn-light">
      <i className="ri-download-2-line"></i>
    </Link>
    <Link to="#" className="btn btn-icon btn-sm btn-light">
      <i className="ri-edit-line"></i>
    </Link>
  </div>
);
export function BlocoManagement() {
  const [visibility, setVisibility] = useState(1);
  const [blocoId, setBlocoId] = useState(0);
  const [blocosData, setBlocosData] = useState<any>([]);
  const [operadoresData, setOperadoresData] = useState<any>([]);

  const { data } = service.bloco.list.useQuery(["bloco", "list"]);
  const { data: operadores } = service.operador.list.useQuery([
    "operator",
    "list",
  ]);

  const blocos = data?.body || [];

  useEffect(() => {
    const currentBlocos = blocos.find((bloco) => bloco.blocoId === blocoId);
    setBlocosData(currentBlocos ?? []);
  }, [blocoId]);

  useEffect(() => {
    const operadoresDoBloco = blocos.filter(
      (bloco) => bloco.blocoId === blocoId
    );
    const operadorIds = operadoresDoBloco.map((bloco) => bloco.operadorId);
    const resu = operadores?.body.filter((operador) =>
      operadorIds.includes(operador.operadorId)
    );
    setOperadoresData(resu ?? []);
  }, [blocoId]);

  const { mutate } = service.bloco.delete.useMutation({
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["bloco", "list"] });
      enqueueSnackbar("Bloco adicionado com sucesso");
    },
    onError() {
      enqueueSnackbar("Algo deu errado", { variant: "error" });
    },
  });

  const { translate } = useTranslation();

  const LeftAction = (context: any) => (
    <div className="hstack gap-2 fs-15">
      <Link
        to="#"
        className="btn btn-icon btn-sm btn-light"
        onClick={() => {
          setBlocoId(context.blocoId);
          setVisibility(2);
        }}
      >
        <i className="ri-focus-line"></i>
      </Link>
    </div>
  );

  // const columns: Column[] = [
  //   { title: "Email", dataKey: "email", display: true },
  //   { title: "Telefone", dataKey: "telefone1", display: true },
  //   { title: "NIF", dataKey: "nif", display: true },
  //   { title: "ID", dataKey: "blocoId", display: false },
  // ];

  const columns: Column[] = [
    { dataKey: "descricao", title: "Descrição", display: true },
    { dataKey: "longetude", title: "Longetude", display: true },
    {
      dataKey: "latitude",
      title: "Latitude",
      display: true,
    },
    { dataKey: "numero", title: "Número", display: true },
  ];
  return (
    <Fragment>
      {visibility === 1 ? (
        <>
          <Pageheader
            title="Gestão de operadores"
            heading="Operador"
            active="listagem"
          />
          <Card className={"m-5 p-3"}>
            <CustomTable
              data={blocos}
              columns={columns}
              leftAction={LeftAction}
              // rightAction={RightAction}
            />
          </Card>
        </>
      ) : (
        <div />
      )}
      {visibility === 2 ? (
        <>
          <DetalhesBloco data={blocosData} />
          <OperadorDoBloco data={operadoresData} />
          <Card className={"m-5 p-3"}>
            <Button
              variant="secondary"
              className="m-4"
              style={{ padding: "5px 60px" }}
              onClick={() => setVisibility(1)}
            >
              Canselar
            </Button>
          </Card>
        </>
      ) : (
        <div />
      )}
    </Fragment>
  );
}

function DetalhesBloco({ data }: { data: any }) {
  const columns: Column[] = [
    { dataKey: "descricao", title: "Descriação", display: true },
    { dataKey: "numero", title: "Número", display: true },
    { dataKey: "longetude", title: "Longetude", display: true },
    {
      dataKey: "latitude",
      title: "Latitude",
      display: true,
    },
    { title: "ID", dataKey: "blocoId", display: false },
    { dataKey: "dataRegistro", title: "Data de Registro" },
    { dataKey: "atualizadoPor", title: "Atualizado Por" },
    { dataKey: "dataAtualizacao", title: "Data de Atualização" },
  ];
  return (
    <>
      <Pageheader
        title="Detalhes do operador"
        heading="Operador"
        active="detalhes"
      />
      <Card className={"m-5 p-3"}>
        <TabelaColum data={data} columns={columns} />
      </Card>
    </>
  );
}

function OperadorDoBloco({ data }: { data: any }) {
  const columns: Column[] = [
    { title: "Email", dataKey: "email", display: true },
    { title: "Telefone", dataKey: "telefone1", display: true },
    { title: "NIF", dataKey: "nif", display: true },
    { title: "ID", dataKey: "operadorId", display: false },
  ];

  return (
    <>
      <Card className={"m-5 p-3"}>
        <h3>Operadores associados</h3>
        <CustomTable data={data} columns={columns} />
      </Card>
    </>
  );
}

interface TableColumProps {
  data: Record<string, string | number>;
  columns: { title: ReactNode; dataKey: string }[];
}

const TabelaColum: React.FC<TableColumProps> = ({ data, columns }) => {
  return (
    <Table>
      <tbody>
        {columns.map((column, index) => (
          <tr key={index}>
            <td>{column.title}</td>
            <td>{data[column.dataKey]}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
