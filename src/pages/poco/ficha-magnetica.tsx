import { Card, Button, Table } from "react-bootstrap";
import { Column, CustomTable } from "../../components/common/table";
import { MessageModal } from "../../components/common/message-modal";
import { service,queryClient } from "../../service";
import { ReactNode, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { FormFichaMagnetica } from "../../section/register-ficha-magnetica";

export function FichaMagneticaListagem({
  pocoId,
  action,
}: {
  pocoId: number;
  action?: () => void;
}) {
  const { data } = service.fichaMagnetica.list.useQuery([
    "ficha",
    "magnetica",
    "list",
  ]);
  const [fichaId, setFichaId] = useState(0);
  const [visibility, setVisibility] = useState(1);

  const LeftAction = (context: any) => (
    <div className="hstack gap-2 fs-15">
      <Link
        to="#"
        className="btn btn-icon btn-sm btn-light"
        onClick={() => {
          setFichaId(context.id);
          setVisibility(2);
        }}
      >
        <i className="ri-focus-line"></i>
      </Link>
    </div>
  );

  const fichas = data?.body?.filter((ficha) => ficha.pocoId === pocoId);
  const fichasComId = fichas?.map((ficha, index) => ({ ...ficha, id: index }));
  const ficha = fichasComId?.find((ficha) => ficha.id === fichaId);

  const columns: Column[] = [
    { dataKey: "atualizadoPor", title: "Atualizado Por", display: true },
    { dataKey: "dataAtualizacao", title: "Data de Atualização", display: true },
    {
      dataKey: "fichaMagneticaId",
      title: "ID da Ficha Magnética",
      display: true,
    },
    { dataKey: "dataAtividade", title: "Data de Atividade", display: true },
    {
      dataKey: "valorDaAnomaliaMagnetica",
      title: "Valor da Anomalia Magnética",
      display: true,
    },
  ];
  return (
    <>
      {visibility === 1 ? (
        <Card className={"m-5 p-3"}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "16px",
            }}
          >
            <h3>Ficha magnética</h3>
            <Button
              onClick={() => setVisibility(3)}
              variant="success"
              style={{ width: 200 }}
            >
              Adicionar ficha
            </Button>
          </div>
          <CustomTable
            data={fichasComId ?? []}
            columns={columns}
            leftAction={LeftAction}
          />
        </Card>
      ) : null}
      {visibility === 2 ? (
        <FichaMagneticaDetalhes data={ficha} action={() => setVisibility(1)} />
      ) : null}
      {visibility === 3 ? (
        <FichaMagneticaRegister
          pocoId={pocoId}
          action={() => setVisibility(1)}
        />
      ) : null}
    </>
  );
}

export const FichaMagneticaDetalhes = ({
  data,
  action,
}: {
  data: any;
  action: () => void;
}) => {
  const columns: Column[] = [
    { dataKey: "usuarioRegistroId", title: "ID de Usuário", display: true },
    { dataKey: "dataRegistro", title: "Data de Registro", display: true },
    { dataKey: "atualizadoPor", title: "Atualizado Por", display: true },
    { dataKey: "dataAtualizacao", title: "Data de Atualização", display: true },
    {
      dataKey: "fichaMagneticaId",
      title: "ID da Ficha Magnética",
      display: true,
    },
    { dataKey: "dataAtividade", title: "Data de Atividade", display: true },
    {
      dataKey: "valorDaAnomaliaMagnetica",
      title: "Valor da Anomalia Magnética",
      display: true,
    },
    { dataKey: "dataDaMedicao", title: "Data da Medição", display: true },
  ];
  return (
    <Card className={"m-5 p-3"}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        <h3>Detalhes da ficha magnética</h3>
        <Button onClick={action} variant="success" style={{ width: 200 }}>
          voltar
        </Button>
      </div>

      <TabelaColum data={data} columns={columns} />
    </Card>
  );
};

export function FichaMagneticaRegister({
  pocoId,
  action,
}: {
  pocoId: number;
  action: () => void;
}) {
  const [modalActive, setModalActive] = useState({
    show: false,
    title: "",
    message: "",
  });

  const { mutate } = service.fichaMagnetica.create.useMutation({
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: [ "ficha",
      "magnetica",
      "list",] });
      setModalActive({
        show: true,
        message: "Ficha Magnética adicionada com sucesso!",
        title: "Sucesso",
      });
    },
    onError() {
      setModalActive({
        show: true,
        message: "Algo deu errado!",
        title: "Erro",
      });
    },
  });
  return (
    <Fragment>
      <MessageModal
        close={() => {
          setModalActive((value) => ({ ...value, show: false }));
          action();
        }}
        {...modalActive}
      />
      <FormFichaMagnetica
        pocoId={pocoId}
        back={action}
        submit={(body) => mutate({ body })}
        isLoading={false}
      />
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
