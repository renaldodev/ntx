import { Fragment, useState, useEffect, ReactNode } from "react";
import { Card, Col, Row, Table, Button } from "react-bootstrap";
import Pageheader from "../../components/pageheader/pageheader";
import { Link } from "react-router-dom";
import { queryClient, service } from "../../service";
import { useTranslation } from "../../hooks";
import { enqueueSnackbar } from "notistack";
import { Column, CustomTable } from "../../components/common/table";
import { PlataformaForm } from "./poco-form";
import { Icon } from "@iconify/react";
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
export function PlataformaManagement() {
  const [visibility, setVisibility] = useState(1);
  const [plataformaId, setPlataformaId] = useState(0);
  const [plataformaData, setPlataformaData] = useState<any>([]);
  const [pocosData, setPocosData] = useState<any>([]);
  const [mostrarPoco, setMostrarPoco] = useState(false);

  const { data } = service.plataforma.list.useQuery(["plataforma", "list"]);
  const { data: pocos } = service.poco.list.useQuery(["poco", "list"]);

  useEffect(() => {
    const currentPocos = pocos?.body.filter(
      (o) => o.plataformaId === plataformaId
    );
    setPocosData(currentPocos ?? []);
  }, [plataformaId]);

  const plataformas = data?.body || [];

  useEffect(() => {
    const currentPlataforma = plataformas.find(
      (o) => o.plataformaId === plataformaId
    );
    setPlataformaData(currentPlataforma ?? []);
  }, [plataformaId]);

  const { mutate } = service.plataforma.delete.useMutation({
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["plataforma", "list"] });
      enqueueSnackbar("Plataforma adicionado com sucesso");
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
          setPlataformaId(context.plataformaId);
          setVisibility(2);
        }}
      >
        <i className="ri-focus-line"></i>
      </Link>
    </div>
  );

  const columns: Column[] = [
    { dataKey: "descricao", title: "Descrição", display: true },
    {
      dataKey: "capacidadeDeProducao",
      title: "Capacidade de produção",
      display: true,
    },
    {
      dataKey: "profundidadeInstalada",
      title: "Profundidade Instalada",
      display: true,
    },
  ];
  return (
    <Fragment>
      {visibility === 1 ? (
        <>
          <Pageheader
            title="Gestão de plataformas"
            heading="plataforma"
            active="listagem"
          />
          <Card className={"m-5 p-3"}>
            <CustomTable
              data={plataformas}
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
          <DetalhesPlataforma data={plataformaData} />
          {mostrarPoco === false ? (
            <PocosDaPlataforma
              data={pocosData}
              action={() => setMostrarPoco(!mostrarPoco)}
            />
          ) : (
            <PocoRegister
              plataformaId={plataformaId}
              back={() => setMostrarPoco(false)}
            />
          )}
          {mostrarPoco === false ? (
            <Card className={"m-5 p-3"}>
              <Button
                variant="secondary"
                className="m-4"
                style={{ padding: "5px 60px" }}
                onClick={() => setVisibility(1)}
              >
                Voltar
              </Button>
            </Card>
          ) : null}
        </>
      ) : (
        <div />
      )}
    </Fragment>
  );
}

function DetalhesPlataforma({ data }: { data: any }) {
  const columns: Column[] = [
    {
      dataKey: "descricao",
      title: (
        <>
          <Icon icon="material-symbols:description" /> Descrição
        </>
      ),
      display: true,
    },
    {
      dataKey: "capacidadeDeProducao",
      title: (
        <>
          <Icon icon="grommet-icons:capacity" /> Capacidade de Produção
        </>
      ),
      display: true,
    },
    {
      dataKey: "profundidadeInstalada",
      title: (
        <>
          <Icon icon="iconoir:depth" /> Profundidade Instalada
        </>
      ),
      display: true,
    },

    {
      dataKey: "longitude",
      title: (
        <>
          <Icon icon="mingcute:earth-longitude-fill" /> Longitude
        </>
      ),
      display: true,
    },
    {
      dataKey: "latitude",
      title: (
        <>
          <Icon icon="tabler:world-latitude" /> Latitude
        </>
      ),
      display: true,
    },
    {
      title: (
        <>
          <Icon icon="teenyicons:id-outline" /> ID
        </>
      ),
      dataKey: "plataformaId",
      display: false,
    },
    {
      dataKey: "dataRegistro",
      title: (
        <>
          <Icon icon="fontisto:date" /> Data de Registro
        </>
      ),
    },
    {
      dataKey: "atualizadoPor",
      title: (
        <>
          <Icon icon="icon-park-twotone:me" /> Actualizado Por
        </>
      ),
    },
    {
      dataKey: "dataAtualizacao",
      title: (
        <>
          <Icon icon="fontisto:date" /> Data de Actualização
        </>
      ),
    },
  ];
  return (
    <>
      <Pageheader
        title="Gestão de plataformas"
        heading="plataforma"
        active="detalhes"
      />
      <Card className={"m-5 p-3"}>
        <h3>Detalhes da plataforma</h3>
        <TabelaColum data={data} columns={columns} />
      </Card>
    </>
  );
}

function PocoRegister({
  plataformaId,
  back,
}: {
  plataformaId: number;
  back?: () => void;
}) {
  const { mutate } = service.plataforma.create.useMutation({
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["plataforma", "list"] });

      enqueueSnackbar("Plataforma adicionado com sucesso");
    },
    onError() {
      enqueueSnackbar(`Algo deu errado`, {
        variant: "error",
      });
    },
  });
  return (
    <Fragment>
      <Card className={"m-5 p-3"}>
        <h3>Adicionar poço</h3>
        <PlataformaForm
          submit={(body) => mutate({ body })}
          isLoading={false}
          plataformaId={plataformaId}
          back={back}
        />
      </Card>
    </Fragment>
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

function PocosDaPlataforma({
  data,
  action,
}: {
  data: any;
  action: () => void;
}) {
  const columns: Column[] = [
    {
      dataKey: "descricao",
      title: (
        <>
          <Icon icon="material-symbols:description" /> Descrição
        </>
      ),
      display: true,
    },
    {
      dataKey: "bacia",
      title: (
        <>
          <Icon icon="material-symbols:description" /> Bacia
        </>
      ),
      display: true,
    },
    {
      dataKey: "profundidade",
      title: (
        <>
          <Icon icon="iconoir:depth" /> Profundidade
        </>
      ),
      display: true,
    },
  ];
  return (
    <>
      <Card className={"m-5 p-3"}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "16px",
          }}
        >
          <h3>Poços associados a plataforma</h3>
          <Button onClick={action} variant="success" style={{ width: 200 }}>
            Adicionar poço
          </Button>
        </div>
        <CustomTable data={data} columns={columns} />
      </Card>
    </>
  );
}
