import { Fragment, useState, useEffect, ReactNode } from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import Pageheader from "../../components/pageheader/pageheader";
import { Link } from "react-router-dom";
import { queryClient, service } from "../../service";
import { useTranslation } from "../../hooks";
import { enqueueSnackbar } from "notistack";
import { Column, CustomTable } from "../../components/common/table";
import { Form } from "../../section/register-bloco";
import { BlocoForm } from "./register-bloco-form";
import { Icon } from "@iconify/react";
import { MessageModal } from "./message-modal";
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
export function OperadorManagement() {
	const [visibility, setVisibility] = useState(1);
	const [operadorId, setOperadorId] = useState(0);
	const [operator, setOperator] = useState({});
	const [blocosData, setBlocosData] = useState<any>([]);
	const [activo, setActivo] = useState(false);

	const { data: blocos } = service.bloco.list.useQuery(["bloco", "list"]);

	useEffect(() => {
		const currentBlocos = blocos?.body.filter(
			(bloco) => bloco.operadorId === operadorId
		);

		setBlocosData(currentBlocos ?? []);
	}, [operadorId]);

	useEffect(() => {
		const operator = operators.find(
			(operator) => operator.operadorId === operadorId
		);
		if (operator) {
			setOperator(operator);
		}
	}, [operadorId]);
	const LeftAction = (context: any) => (
		<div className="hstack gap-2 fs-15">
			<Link
				to="#"
				className="btn btn-icon btn-sm btn-light"
				onClick={() => {
					setOperadorId(context.operadorId);
					setVisibility(2);
				}}
			>
				<i className="ri-focus-line"></i>
			</Link>
		</div>
	);

	const { data } = service.operador.list.useQuery(["operator", "list"]);

	const { mutate } = service.operador.delete.useMutation({
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ["operator", "list"] });
			enqueueSnackbar("Operador adicionado com sucesso");
		},
		onError() {
			enqueueSnackbar("Algo deu errado", { variant: "error" });
		},
	});
	const operators = data?.body || [];
	const { translate } = useTranslation();
	const columns: Column[] = [
		{ title: "Email", dataKey: "email", display: true },
		{ title: "Telefone", dataKey: "telefone1", display: true },
		{ title: "NIF", dataKey: "nif", display: true },
		{ title: "ID", dataKey: "operadorId", display: false },
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
							data={operators}
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
					<DetalhesOperador data={operator} />

					{activo === false ? (
						<BlocoDoOperador
							data={blocosData}
							action={() => setActivo(!activo)}
						/>
					) : (
						<BlocoRegister
							operadorId={operadorId}
							back={() => setActivo(false)}
						/>
					)}
					{activo === false ? (
						<Card className={"m-5 p-3"}>
							<Button
								variant="dark"
								className="m-4"
								style={{ padding: "5px 60px" }}
								onClick={() => setVisibility(1)}
							>
								Cancelar
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

function BlocoRegister({
	operadorId,
	back,
}: {
	operadorId: number;
	back?: () => void;
}) {
	const [modalActive, setModalActive] = useState({
		show: false,
		title: "",
		message: "",
	});
	const { mutate } = service.bloco.create.useMutation({
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ["operator", "list"] });
			queryClient.invalidateQueries({ queryKey: ["bloco", "list"] });
			// enqueueSnackbar("Bloco adicionado com sucesso");
			setModalActive({
				show: true,
				message: "Bloco adicionado com sucesso",
				title: "Sucesso",
			});
		},
		onError() {
			// enqueueSnackbar(`Algo deu errado`, {
			//   variant: "error",
			// });
			setModalActive({
				show: true,
				message: "Algo deu errado",
				title: "Erro",
			});
		},
	});
	return (
		<Fragment>
			<MessageModal
				close={() => {
					setModalActive((value) => ({ ...value, show: false }));
					back && back();
				}}
				{...modalActive}
			/>
			<Card className={"m-5 p-3"}>
				<h3>Adicionar Bloco</h3>
				<BlocoForm
					submit={(body) => mutate({ body })}
					isLoading={false}
					operadorId={operadorId}
					back={back}
				/>
			</Card>
		</Fragment>
	);
}

function DetalhesOperador({ data }: { data: any }) {
	const columns: Column[] = [
		{
			dataKey: "descricao",
			title: (
				<>
					<Icon icon="material-symbols:description" /> Descrição
				</>
			),
		},
		{
			dataKey: "nif",
			title: (
				<>
					<Icon icon="material-symbols:description" /> NIF
				</>
			),
		},
		{
			dataKey: "enderecoComercial",
			title: (
				<>
					<Icon icon="material-symbols:description" /> Endereço Comercial
				</>
			),
		},
		{
			dataKey: "email",
			title: (
				<>
					<Icon icon="material-symbols:description" /> Email
				</>
			),
		},
		{
			dataKey: "telefone1",
			title: (
				<>
					<Icon icon="material-symbols:description" /> Telefone 1
				</>
			),
		},
		{
			dataKey: "telefone2",
			title: (
				<>
					<Icon icon="material-symbols:description" /> Telefone 2
				</>
			),
		},
		{
			dataKey: "usuarioRegistroId",
			title: (
				<>
					<Icon icon="material-symbols:description" /> ID de Usuario
				</>
			),
		},
		{
			dataKey: "dataRegistro",
			title: (
				<>
					<Icon icon="material-symbols:description" /> Data de Registro
				</>
			),
		},
		{
			dataKey: "atualizadoPor",
			title: (
				<>
					<Icon icon="material-symbols:description" /> Actualizado por
				</>
			),
		},
		{
			dataKey: "dataAtualizacao",
			title: (
				<>
					<Icon icon="material-symbols:description" /> Data de Actualização
				</>
			),
		},
	];
	return (
		<>
			<Pageheader
				title="Detalhes do operador"
				heading="Operador"
				active="detalhes"
			/>
			<Card className={"m-5 p-3"}>
				<div className="text-center mb-2">
					<img
						src={
							data.imagem ??
							"https://gravatar.com/avatar/6a7c2a95197deaa5a5a9142f3bcd70ca?s=400&d=robohash&r=x"
						}
						className="img-thumbnail rounded-pill"
						alt="..."
						aria-hidden={true}
						style={{ width: "150px" }}
					/>
				</div>
				<TabelaColum data={data} columns={columns} />
			</Card>
		</>
	);
}

function BlocoDoOperador({ data, action }: { data: any; action: () => void }) {
	const columns: Column[] = [
		{
			dataKey: "longetude",
			title: (
				<>
					<Icon icon="material-symbols:description" /> Longetude
				</>
			),
			display: true,
		},
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
			dataKey: "latitude",
			title: (
				<>
					<Icon icon="material-symbols:description" /> Latitude
				</>
			),
			display: true,
		},
		{
			dataKey: "numero",
			title: (
				<>
					<Icon icon="material-symbols:description" /> Número
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
					<h3>Blocos associados</h3>
					<Button
						onClick={action}
						variant="success"
						style={{ width: 200, background: "green" }}
					>
						Adicionar Bloco
					</Button>
				</div>
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
