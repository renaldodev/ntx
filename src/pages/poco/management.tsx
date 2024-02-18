import { Fragment, ReactNode, useState } from "react";
import Pageheader from "../../components/pageheader/pageheader";
import { Link } from "react-router-dom";
import { queryClient, service } from "../../service";
import { useTranslation } from "../../hooks";
import { enqueueSnackbar } from "notistack";
import { Button, Card, Table } from "react-bootstrap";
import { Column, CustomTable } from "../../components/common/table";
import { FichaGeologicaListagem } from "./ficha-geologica";
import { FichaGravimetricaListagem } from "./ficha-gravimetrica";
import { FichaHidrocarbonatoListagem } from "./ficha-hidrocarbonato";
import { FichaMagneticaListagem} from "./ficha-magnetica";

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
  const [pocoId, setPocoId] = useState(0);
  const [visibility, setVisibility] = useState(1);

  const LeftAction = (context: any) => (
    <div className="hstack gap-2 fs-15">
      <Link
        to="#"
        className="btn btn-icon btn-sm btn-light"
        onClick={() => {
          setPocoId(context.pocoId);
          setVisibility(2);
        }}
      >
        <i className="ri-focus-line"></i>
      </Link>
    </div>
  );

  const columns: Column[] = [
    { title: "Descrição", dataKey: "descricao", display: true },
    { title: "Profundidade", dataKey: "profundidade", display: true },
    { title: "ID", dataKey: "pocoId", display: false },
  ];
  const { translate } = useTranslation();

  const onDelete = (operadorId: string) => mutate({ params: { operadorId } });

  return (
    <Fragment>
      {visibility === 1 ? (
        <>
          <Pageheader
            title="Gestão de poços"
            heading="Poços"
            active="listagem"
          />
          <Card className={"m-5 p-3"}>
            <CustomTable
              data={pocos}
              columns={columns}
              leftAction={LeftAction}
            />
          </Card>
        </>
      ) : (
        <>
          <DetalhesPoco data={pocos.find((poco) => poco.pocoId === pocoId)} />
          <FichaGeologicaListagem pocoId={pocoId}/>
          <FichaGravimetricaListagem pocoId={pocoId} />
          <FichaHidrocarbonatoListagem pocoId={pocoId} />
          <FichaMagneticaListagem pocoId={pocoId} />
          <Card className={"m-5 p-3"}>
            <Button variant="dark" onClick={() => setVisibility(1)}>
              Voltar
            </Button>
          </Card>
        </>
      )}
    </Fragment>
  );
}

function DetalhesPoco({ data }: { data: any }) {
  const columns: Column[] = [
    { title: "ID de Usuário", dataKey: "usuarioRegistroId", display: true },
    { title: "Data de Registro", dataKey: "dataRegistro", display: true },
    { title: "Atualizado Por", dataKey: "atualizadoPor", display: true },
    { title: "Data de Atualização", dataKey: "dataAtualizacao", display: true },
    { title: "ID do Poço", dataKey: "pocoId", display: true },
    { title: "Descrição", dataKey: "descricao", display: true },
    { title: "Bacia", dataKey: "bacia", display: true },
    { title: "Bloco", dataKey: "bloco", display: true },
    {
      title: "Licença de Exploração",
      dataKey: "licencaExploracao",
      display: true,
    },
    { title: "Latitude", dataKey: "latitude", display: true },
    { title: "Longitude", dataKey: "longetitude", display: true },
    { title: "Lâmina de Água", dataKey: "lamineDeAgua", display: true },
    {
      title: "Data de Início da Perfuração",
      dataKey: "dataInicioPerfuracao",
      display: true,
    },
    {
      title: "Data de Conclusão da Perfuração",
      dataKey: "dataConclusaoPerfuracao",
      display: true,
    },
    { title: "Profundidade", dataKey: "profundidade", display: true },
    {
      title: "Profundidade Total",
      dataKey: "profundidadeTotal",
      display: true,
    },
    { title: "Nome da Rig", dataKey: "nomeDaRig", display: true },
    { title: "Classe", dataKey: "classe", display: true },
    { title: "Ambiente", dataKey: "ambiente", display: true },
    { title: "Data Dt", dataKey: "dataDt", display: true },
    { title: "Data de Reentrada", dataKey: "dataDeReentrada", display: true },
    { title: "Data de Conclusão", dataKey: "dataDeConclusao", display: true },
    { title: "ID do Tipo de Poço", dataKey: "pocoTipoId", display: true },
    { title: "ID da Plataforma", dataKey: "plataformaId", display: true },
    { title: "ID da Província", dataKey: "provinciaId", display: true },
  ];
  return (
    <>
      <Pageheader title="Detalhes do poço" heading="poço" active="detalhes" />
      <Card className={"m-5 p-3"}>
        <TabelaColum data={data} columns={columns} />
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

/**
 * import { Fragment, useState, useEffect, ReactNode } from "react";
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
export function PlataformManagement() {
  const [visibility, setVisibility] = useState(1);
  const [pocoId, setBlocoId] = useState(0);
  const [blocosData, setBlocosData] = useState<any>([]);
  const [operadoresData, setOperadoresData] = useState<any>([]);

  const { data } = service.poco.list.useQuery(["poco", "list"]);
  const { data: operadores } = service.operador.list.useQuery([
    "operator",
    "list",
  ]);

  const pocos = data?.body || [];

  useEffect(() => {
    const currentPoco = pocos.find((bloco) => bloco.pocoId === pocoId);
    setBlocosData(currentPoco ?? []);
  }, [pocoId]);

  const { mutate } = service.bloco.delete.useMutation({
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["poco", "list"] });
      enqueueSnackbar("Poço adicionado com sucesso");
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
          setBlocoId(context.pocoId);
          setVisibility(2);
        }}
      >
        <i className="ri-focus-line"></i>
      </Link>
    </div>
  );

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
              data={pocos}
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
    { title: "ID", dataKey: "pocoId", display: false },
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

 */
