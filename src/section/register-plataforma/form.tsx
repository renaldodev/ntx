import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import {
	Button,
	Col,
	Row,
	Spinner,
	Form as RNForm,
	Card,
	InputGroup,
} from "react-bootstrap";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField, GrupoTextField } from "../../components/hook-form";
import { BlocoSelect } from "../register-bloco/bloco-select.component";
import { TipoPlataformaSelect } from "./tipo-plataforma-select.component";
import { Icon } from "@iconify/react";
import Pageheader from "../../components/pageheader/pageheader";
import InputGroupWithLabel from "../../components/common/inputGroup";

const schema = z.object({
	descricao: z.string(),
	latitude: z.coerce.number(),
	longitude: z.coerce.number(),
	tipoPlataformaId: z.string(),
	blcocoId: z.string(),
	capacidadeDeProducao: z.coerce.number(),
	profundidadeInstalada: z.coerce.number(),
});

type FormValues = z.infer<typeof schema>;

type Props = {
	submit: (data: FormValues) => void;
	edit?: boolean;
	isLoading: boolean;
};

export function Form({ submit, edit, isLoading }: Props) {
	const message = edit ? "Atualizar" : "Salvar";
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: zodResolver(schema),
	});
	const onSubmit: SubmitHandler<FormValues> = (data) => submit(data);
	return (
		<Card className="m-5 p-3">
			<Pageheader title="Cadastro" heading="Plataforma" active="cadastro" />
			<form onSubmit={handleSubmit(onSubmit)} className="mt-5">
				<Row>
					<InputGroupWithLabel
						name="descricao"
						label="Descrição"
						control={control}
						error={errors?.descricao?.message || ""}
						icon="material-symbols:description"
					/>
					<InputGroupWithLabel
						name="latitude"
						label="Latitude"
						control={control}
						error={errors?.latitude?.message || ""}
						icon="tabler:world-latitude"
					/>
					<InputGroupWithLabel
						name="longitude"
						label="longitude"
						control={control}
						error={errors?.longitude?.message || ""}
						icon="mingcute:earth-longitude-fill"
					/>
					<InputGroupWithLabel
						name="capacidadeDeProducao"
						label="Capacidade de produção"
						control={control}
						error={errors?.capacidadeDeProducao?.message || ""}
						icon="grommet-icons:capacity"
					/>
					<InputGroupWithLabel
						name="profundidadeInstalada"
						label="Profundidade instalada"
						control={control}
						error={errors?.profundidadeInstalada?.message || ""}
						icon="iconoir:depth"
					/>

					<Col md={6} className="mb-3">
						<InputGroup className="mb-3">
							<InputGroup.Text className="" id="basic-addon1">
								<Icon icon="flowbite:caret-sort-solid" />
							</InputGroup.Text>
							<BlocoSelect
								control={control}
								error={errors.blcocoId?.message || ""}
								label="Bloco"
								name="blcocoId"
							/>
						</InputGroup>
					</Col>
					<Col md={6} className="mb-3">
						<InputGroup className="mb-3">
							<InputGroup.Text className="" id="basic-addon1">
								<Icon icon="flowbite:caret-sort-solid" />
							</InputGroup.Text>
							<TipoPlataformaSelect
								control={control}
								error={errors.tipoPlataformaId?.message || ""}
								label="Tipo de Plataforma"
								name="tipoPlataformaId"
							/>
						</InputGroup>
					</Col>

					<Col md={12}>
						<Button
							type="submit"
							variant="success"
							className="me-3"
							style={{ padding: "5px 60px" }}
						>
							{isLoading ? (
								<Spinner animation="border" variant="light" size="sm" />
							) : (
								message
							)}
						</Button>
						<Button variant="dark" className="" style={{ padding: "5px 60px" }}>
							Cancelar
						</Button>
					</Col>
				</Row>
			</form>
		</Card>
	);
}
