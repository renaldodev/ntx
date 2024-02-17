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
import { GrupoTextField } from "../../components/hook-form";
import { Icon } from "@iconify/react";
import Pageheader from "../../components/pageheader/pageheader";
import { TipoPocoSelect } from "../register-poco/tipoPoco.component";
import InputGroupWithLabel from "../../components/common/inputGroup";

const schema = z.object({
	dataAtividade: z.coerce.date(),
	dataDaMedicao: z.coerce.date(),
	pocoId: z.coerce.number(),
	valorDaAnomaliaMagnetica: z.coerce.number(),
});

type FormValues = z.infer<typeof schema>;

type Props = {
	submit: (data: FormValues) => void;
	edit?: boolean;
	isLoading: boolean;
};

export function FormFichaMagnetica({ submit, edit, isLoading }: Props) {
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
				heading=" Ficha Magnética"
				active="cadastro"
			/>
			<form onSubmit={handleSubmit(onSubmit)} className="mt-5">
				<Row>
					<InputGroupWithLabel
						name="valorDaAnomaliaMagnetica"
						label="valor Da Anomalia Magnetica"
						control={control}
						error={errors?.valorDaAnomaliaMagnetica?.message || ""}
						icon="material-symbols:description"
					/>
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
								<Icon icon="cbi:friends-of-hue-flat-p" />
							</InputGroup.Text>
							<GrupoTextField
								name="dataDaMedicao"
								label="Data de Medicão"
								control={control}
								type="date"
								error={errors?.dataDaMedicao?.message || ""}
							/>
						</InputGroup>
					</Col>
					<Col md={6} className="mb-5">
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
