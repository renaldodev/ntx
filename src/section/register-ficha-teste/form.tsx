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
import { Icon } from "@iconify/react";
import Pageheader from "../../components/pageheader/pageheader";
import { TipoPocoSelect } from "../register-poco/tipoPoco.component";

const schema = z.object({
	pressao: z.coerce.number(),
	testeDeFormacao: z.string(),
	taxaDeFluxo: z.coerce.number(),
	porosidade: z.string(),
	permeabilidade: z.coerce.number(),
	analiseDeNucleo: z.string(),
	dataAtividade: z.coerce.date(),
	pocoId: z.coerce.number(),
});

type FormValues = z.infer<typeof schema>;

type Props = {
	submit: (data: FormValues) => void;
	edit?: boolean;
	isLoading: boolean;
};

export function FormTeste({ submit, edit, isLoading }: Props) {
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
			<Pageheader title="Cadastro" heading=" Ficha Teste" active="cadastro" />
			<form onSubmit={handleSubmit(onSubmit)} className="mt-5">
				<Row>
					<Col md={6} className="mb-3 ">
						<InputGroup className="mb-3">
							<InputGroup.Text id="basic-addon1">
								<Icon icon="material-symbols:description" />
							</InputGroup.Text>
							<GrupoTextField
								name="testeDeFormacao"
								label="Teste de Formação"
								control={control}
								error={errors?.testeDeFormacao?.message || ""}
							/>
						</InputGroup>
					</Col>

					<Col md={6} className="mb-3">
						<InputGroup className="mb-3">
							<InputGroup.Text className="" id="basic-addon1">
								<Icon icon="cbi:friends-of-hue-flat-p" />
							</InputGroup.Text>
							<GrupoTextField
								name="pressao"
								label="Pressão"
								control={control}
								error={errors?.pressao?.message || ""}
							/>
						</InputGroup>
					</Col>
					<Col md={6} className="mb-3">
						<InputGroup className="mb-3">
							<InputGroup.Text className="" id="basic-addon1">
								<Icon icon="mdi:longitude" />
							</InputGroup.Text>
							<GrupoTextField
								name="porosidade"
								label="Porosidade"
								control={control}
								error={errors?.porosidade?.message || ""}
							/>
						</InputGroup>
					</Col>
					<Col md={6} className="mb-3">
						<InputGroup className="mb-3">
							<InputGroup.Text className="" id="basic-addon1">
								<Icon icon="cbi:friends-of-hue-flat-p" />
							</InputGroup.Text>
							<GrupoTextField
								name="taxaDeFluxo"
								label="Taxa De Fluxo"
								control={control}
								error={errors?.taxaDeFluxo?.message || ""}
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
								<Icon icon="grommet-icons:capacity" />
							</InputGroup.Text>
							<GrupoTextField
								name="analiseDeNucleo"
								label="Análise De Nucleo"
								control={control}
								error={errors?.analiseDeNucleo?.message || ""}
							/>
						</InputGroup>
					</Col>
					<Col md={6} className="mb-3">
						<InputGroup className="mb-3">
							<InputGroup.Text className="" id="basic-addon1">
								<Icon icon="mdi:selection-ellipse-arrow-inside" />
							</InputGroup.Text>
							<GrupoTextField
								name="permeabilidade"
								label="Permeabilidade"
								control={control}
								error={errors?.permeabilidade?.message || ""}
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
							type="submit"
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
