import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Col, Row, Spinner, Form as RNForm } from "react-bootstrap";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "../../components/hook-form";
import { BlocoSelect } from "../register-bloco/bloco-select.component";
import { TipoPlataformaSelect } from "./tipo-plataforma-select.component";

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
		<form onSubmit={handleSubmit(onSubmit)}>
			<Row>
				<Col md={6} className="mb-3">
					<TextField
						name="descricao"
						label="descricao"
						control={control}
						error={errors?.descricao?.message || ""}
					/>
				</Col>
				<Col md={6} className="mb-3">
					<TextField
						name="latitude"
						label="latitude"
						control={control}
						error={errors?.latitude?.message || ""}
					/>
				</Col>
				<Col md={6} className="mb-3">
					<TextField
						name="longitude"
						label="longitude"
						control={control}
						error={errors?.longitude?.message || ""}
					/>
				</Col>
				<Col md={6} className="mb-3">
					<TextField
						name="capacidadeDeProducao"
						label="Capacidade de produção"
						control={control}
						error={errors?.capacidadeDeProducao?.message || ""}
					/>
				</Col>
				<Col md={6} className="mb-3">
					<TextField
						name="profundidadeInstalada"
						label="Profundidade instalada"
						control={control}
						error={errors?.profundidadeInstalada?.message || ""}
					/>
				</Col>
				<Col md={6} className="mb-3">
					<BlocoSelect
						control={control}
						error={errors.blcocoId?.message || ""}
						label="Bloco"
						name="blcocoId"
					/>
				</Col>
				<Col md={6} className="mb-3">
					<TipoPlataformaSelect
						control={control}
						error={errors.tipoPlataformaId?.message || ""}
						label="Tipo de Plataforma"
						name="tipoPlataformaId"
					/>
				</Col>

				<Col md={12}>
					<Button
						type="submit"
						variant="primary"
						className=""
						style={{ padding: "5px 60px" }}
					>
						{isLoading ? (
							<Spinner animation="border" variant="light" size="sm" />
						) : (
							message
						)}
					</Button>
				</Col>
			</Row>
		</form>
	);
}
