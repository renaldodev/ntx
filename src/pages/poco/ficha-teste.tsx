import { Card, Button, Table } from "react-bootstrap";
import { Column, CustomTable } from "../../components/common/table";
import { MessageModal } from "../../components/common/message-modal";
import { queryClient, service } from "../../service";
import { ReactNode, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { FormTeste } from "../../section/register-ficha-teste";

export function FichaTesteListagem({
	pocoId,
	action,
}: {
	pocoId: number;
	action?: () => void;
}) {
	const { data } = service.fichaTeste.list.useQuery(["ficha", "teste", "list"]);
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
		{ dataKey: "testeDeFormacao", title: "Teste de Formação", display: true },
		{ dataKey: "pressao", title: "Pressão", display: true },
		{ dataKey: "taxaDeFluxo", title: "Taxa de Fluxo", display: true },
		{ dataKey: "porosidade", title: "Porosidade", display: true },
		{ dataKey: "permeabilidade", title: "Permeabilidade", display: true },
		{ dataKey: "analiseDeNucleo", title: "Análise de Núcleo", display: true },
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
						<h3>Ficha de Teste</h3>
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
				<FichaTesteDetalhes data={ficha} action={() => setVisibility(1)} />
			) : null}
			{visibility === 3 ? (
				<FichaTesteRegister pocoId={pocoId} action={() => setVisibility(1)} />
			) : null}
		</>
	);
}

export const FichaTesteDetalhes = ({
	data,
	action,
}: {
	data: any;
	action: () => void;
}) => {
	const columns: Column[] = [
		{ dataKey: "dataRegistro", title: "Data de Registro", display: true },
		{
			dataKey: "usuarioRegistroId",
			title: "ID do Usuário de Registro",
			display: true,
		},
		{ dataKey: "atualizadoPor", title: "Atualizado Por", display: true },
		{ dataKey: "dataAtualizacao", title: "Data de Atualização", display: true },
		{ dataKey: "fichaDeTesteId", title: "ID da Ficha de Teste", display: true },
		{ dataKey: "dataAtividade", title: "Data da Atividade", display: true },
		{ dataKey: "testeDeFormacao", title: "Teste de Formação", display: true },
		{ dataKey: "pressao", title: "Pressão", display: true },
		{ dataKey: "taxaDeFluxo", title: "Taxa de Fluxo", display: true },
		{ dataKey: "porosidade", title: "Porosidade", display: true },
		{ dataKey: "permeabilidade", title: "Permeabilidade", display: true },
		{ dataKey: "analiseDeNucleo", title: "Análise de Núcleo", display: true },
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
				<h3>Detalhes da ficha de Perfuração</h3>
				<Button onClick={action} variant="success" style={{ width: 200 }}>
					voltar
				</Button>
			</div>

			<TabelaColum data={data} columns={columns} />
		</Card>
	);
};

export function FichaTesteRegister({
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

	const { mutate } = service.fichaTeste.create.useMutation({
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ["ficha", "teste", "list"],
			});
			setModalActive({
				show: true,
				message: "Ficha Teste adicionada com sucesso!",
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
			<FormTeste
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
