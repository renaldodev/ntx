import { Card, Button, Table } from "react-bootstrap";
import { Column, CustomTable } from "../../components/common/table";
import { MessageModal } from "../../components/common/message-modal";
import { service,queryClient } from "../../service";

import { ReactNode, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { FormFichaGeologica } from "../../section/register-ficha-geologica";

export function FichaGeologicaListagem({
  pocoId,
  action,
}: {
  pocoId: number;
  action?: () => void;
}) {
  const { data } = service.fichaGeologica.list.useQuery([
    "ficha",
    "geologica",
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
    {
      dataKey: "descricaoLitologica",
      title: "Descrição Litológica",
      display: true,
    },
    { dataKey: "idadeDaFormacao", title: "Idade da Formação", display: true },
    {
      dataKey: "ambienteDeDeposicao",
      title: "Ambiente de Deposição",
      display: true,
    },
    { dataKey: "contratos", title: "Contratos", display: true },
    { dataKey: "rig", title: "Rig", display: true },
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
            <h3>Ficha geológica</h3>
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
        <FichaGeologicaDetalhes data={ficha} action={() => setVisibility(1)} />
      ) : null}
      {visibility === 3 ? (
        <FichaGeologicaRegister
          pocoId={pocoId}
          action={() => setVisibility(1)}
        />
      ) : null}
    </>
  );
}

export const FichaGeologicaDetalhes = ({
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
      dataKey: "fichaGeologicaId",
      title: "ID da Ficha Geológica",
      display: true,
    },
    {
      dataKey: "formacaoGeologicaAlvo",
      title: "Formação Geológica Alvo",
      display: true,
    },
    {
      dataKey: "descricaoLitologica",
      title: "Descrição Litológica",
      display: true,
    },
    { dataKey: "idadeDaFormacao", title: "Idade da Formação", display: true },
    {
      dataKey: "ambienteDeDeposicao",
      title: "Ambiente de Deposição",
      display: true,
    },
    { dataKey: "contratos", title: "Contratos", display: true },
    { dataKey: "rig", title: "Rig", display: true },
    { dataKey: "mudlogging", title: "Mudlogging", display: true },
    { dataKey: "mud_Enginnerring", title: "Engenharia de Lama", display: true },
    {
      dataKey: "directionalDrilling",
      title: "Perfuração Direcional",
      display: true,
    },
    { dataKey: "lwd", title: "LWD", display: true },
    { dataKey: "mwd", title: "MWD", display: true },
    { dataKey: "wireLine", title: "Wire Line", display: true },
    { dataKey: "coring", title: "Amostragem", display: true },
    { dataKey: "core", title: "Núcleo", display: true },
    { dataKey: "coreLogging", title: "Registro de Núcleo", display: true },
    { dataKey: "wellSeismic", title: "Sísmica de Poço", display: true },
    { dataKey: "cement", title: "Cimento", display: true },
    { dataKey: "testing", title: "Teste", display: true },
    { dataKey: "wellHead", title: "Cabeça de Poço", display: true },
    {
      dataKey: "upperCompletion",
      title: "Completamento Superior",
      display: true,
    },
    {
      dataKey: "lowerCompletion",
      title: "Completamento Inferior",
      display: true,
    },
    { dataKey: "phase", title: "Fase", display: true },
    {
      dataKey: "profundidadeDeInicio",
      title: "Profundidade de Início",
      display: true,
    },
    {
      dataKey: "profundidadeDeConclusao",
      title: "Profundidade de Conclusão",
      display: true,
    },
    { dataKey: "mudType", title: "Tipo de Lama", display: true },
    { dataKey: "dens", title: "Densidade", display: true },
    { dataKey: "visc", title: "Viscosidade", display: true },
    { dataKey: "pocoId", title: "ID do Poço", display: true },
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
        <h3>Detalhes da ficha geológica</h3>
        <Button onClick={action} variant="success" style={{ width: 200 }}>
          voltar
        </Button>
      </div>

      <TabelaColum data={data} columns={columns} />
    </Card>
  );
};

export function FichaGeologicaRegister({
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

  const { mutate } = service.fichaGeologica.create.useMutation({
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["ficha", "geologia","list"] });

      setModalActive({
        show: true,
        message: "Ficha Geologica adicionada com sucesso!",
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
      <FormFichaGeologica
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
