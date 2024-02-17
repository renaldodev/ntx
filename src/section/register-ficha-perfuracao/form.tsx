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
import { Icon } from "@iconify/react";
import Pageheader from "../../components/pageheader/pageheader";
import { TipoPocoSelect } from "../register-poco/tipoPoco.component";
import { MetodoPerfuracaoselect } from "./metodo-perfuracao-select";

const schema = z.object({
	diametroDoPoco: z.coerce.number(),
	tipoDeRevestimento: z.string(),
	profundidade: z.coerce.number(),
	fluidoDePerfuracao: z.string(),
	pressaoDaFormacao: z.coerce.number(),
	temperaturaDaFormacao: z.coerce.number(),
	dataAtividade: z.coerce.date(),
	pocoId: z.coerce.number(),
	metodoPerfuracaoId: z.coerce.number(),
});

type FormValues = z.infer<typeof schema>;

type Props = {
	submit: (data: FormValues) => void;
	edit?: boolean;
	isLoading: boolean;
};

export function FormFichaPerfuracao({ submit, edit, isLoading }: Props) {
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
			<Pageheader
				title="Cadastro"
				heading=" Ficha Perfuração"
				active="cadastro"
			/>
			<form onSubmit={handleSubmit(onSubmit)} className="mt-5">
				<Row>
					<Col md={6} className="mb-3 ">
						<InputGroup className="mb-3">
							<InputGroup.Text id="basic-addon1">
								<Icon icon="material-symbols:description" />
							</InputGroup.Text>
							<GrupoTextField
								name="fluidoDePerfuracao"
								label="Fluido de Perfuracao"
								control={control}
								error={errors?.fluidoDePerfuracao?.message || ""}
							/>
						</InputGroup>
					</Col>
					<Col md={6} className="mb-3 ">
						<InputGroup className="mb-3">
							<InputGroup.Text id="basic-addon1">
								<Icon icon="material-symbols:description" />
							</InputGroup.Text>
							<GrupoTextField
								name="pressaoDaFormacao"
								label="Pressão de Formação"
								control={control}
								error={errors?.pressaoDaFormacao?.message || ""}
							/>
						</InputGroup>
					</Col>
					<Col md={6} className="mb-3 ">
						<InputGroup className="mb-3">
							<InputGroup.Text id="basic-addon1">
								<Icon icon="material-symbols:description" />
							</InputGroup.Text>
							<GrupoTextField
								name="profundidade"
								label="Profundidade"
								control={control}
								error={errors?.profundidade?.message || ""}
							/>
						</InputGroup>
					</Col>
					<Col md={6} className="mb-3">
						<InputGroup className="mb-3">
							<InputGroup.Text className="" id="basic-addon1">
								<Icon icon="cbi:friends-of-hue-flat-p" />
							</InputGroup.Text>
							<GrupoTextField
								name="diametroDoPoco"
								label="Diamentro do Poço"
								control={control}
								error={errors?.diametroDoPoco?.message || ""}
							/>
						</InputGroup>
					</Col>
					<Col md={6} className="mb-3">
						<InputGroup className="mb-3">
							<InputGroup.Text className="" id="basic-addon1">
								<Icon icon="cbi:friends-of-hue-flat-p" />
							</InputGroup.Text>
							<GrupoTextField
								name="dataAtividade"
								label="Data Atividade"
								control={control}
								type="date"
								error={errors?.dataAtividade?.message || ""}
							/>
						</InputGroup>
					</Col>
					<Col md={6} className="mb-3">
						<InputGroup className="mb-3">
							<InputGroup.Text className="" id="basic-addon1">
								<Icon icon="mdi:longitude" />
							</InputGroup.Text>
							<GrupoTextField
								name="temperaturaDaFormacao"
								label="Temperatura de Formação"
								control={control}
								error={errors?.temperaturaDaFormacao?.message || ""}
							/>
						</InputGroup>
					</Col>
					<Col md={6} className="mb-3">
						<InputGroup className="mb-3">
							<InputGroup.Text className="" id="basic-addon1">
								<Icon icon="ph:wall-fill" />
							</InputGroup.Text>
							<TipoPocoSelect
								control={control}
								error={errors.pocoId?.message || ""}
								label="Poço"
								name="pocoId"
							/>
						</InputGroup>
					</Col>
					<Col md={6} className="mb-3">
						<InputGroup className="mb-3">
							<InputGroup.Text className="" id="basic-addon1">
								<Icon icon="ph:wall-fill" />
							</InputGroup.Text>
							<MetodoPerfuracaoselect
								control={control}
								error={errors.metodoPerfuracaoId?.message || ""}
								label=" Metódo de Perfuração"
								name="metodoPerfuracaoId"
							/>
						</InputGroup>
					</Col>
					<Col md={6} className="mb-3 ">
						<InputGroup className="mb-3">
							<InputGroup.Text id="basic-addon1">
								<Icon icon="material-symbols:description" />
							</InputGroup.Text>
							<GrupoTextField
								name="tipoDeRevestimento"
								label="Tipo de Revestimento"
								control={control}
								error={errors?.tipoDeRevestimento?.message || ""}
							/>
						</InputGroup>
					</Col>

					<Col md={12}>
						<Button
							type="submit"
							variant="primary"
							className="me-3"
							style={{ padding: "5px 60px" }}
						>
							{isLoading ? (
								<Spinner animation="border" variant="light" size="sm" />
							) : (
								message
							)}
						</Button>
						<Button
							variant="secondary"
							className=""
							style={{ padding: "5px 60px" }}
						>
							Cancelar
						</Button>
					</Col>
				</Row>
			</form>
		</Card>
	);
}
