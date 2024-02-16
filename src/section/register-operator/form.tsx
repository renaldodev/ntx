import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "../../components/hook-form";
import { OperadorSchema } from "../../service";
import { useEffect } from "react";

const schema = z.object({
	descricao: z.string(),
	nif: z.string(),
	enderecoComercial: z.string(),
	email: z.string().email(),
	telefone1: z.string(),
	telefone2: z.string(),
});

type FormValues = z.infer<typeof schema>;

type Props = {
	submit: (data: FormValues) => void;
	edit?: boolean;
	operador?: OperadorSchema;
};

export function RegisterForm({ submit, edit, operador }: Props) {
	const message = edit ? "Atualizar" : "Salvar";
	const {
		reset,
		handleSubmit,
		control,
		formState: { errors, isSubmitting },
	} = useForm<FormValues>({
		resolver: zodResolver(schema),
	});

	useEffect(() => {
		if (edit && operador) {
			reset(operador);
		}
	}, []);

	const onSubmit: SubmitHandler<FormValues> = async (data) => submit(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Row>
				<Col md={6} className="mb-3">
					<TextField
						name="email"
						label="Email"
						control={control}
						error={errors?.email?.message || ""}
					/>
				</Col>
				<Col md={6} className="mb-3">
					<TextField
						name="nif"
						label="NIF"
						control={control}
						error={errors?.nif?.message || ""}
					/>
				</Col>
				<Col md={6} className="mb-3">
					<TextField
						name="enderecoComercial"
						label="Endereço comercial"
						control={control}
						error={errors?.enderecoComercial?.message || ""}
					/>
				</Col>
				<Col md={6} className="mb-3">
					<TextField
						name="descricao"
						label="Descrição"
						control={control}
						error={errors?.descricao?.message || ""}
					/>
				</Col>
				<Col md={6} className="mb-3">
					<TextField
						name="telefone1"
						label="Telefone"
						control={control}
						error={errors?.telefone1?.message || ""}
					/>
				</Col>
				<Col md={6} className="mb-3">
					<TextField
						name="telefone2"
						label="Telefone secundario"
						control={control}
						error={errors?.telefone2?.message || ""}
					/>
				</Col>
				<Col md={12}>
					<Button
						type="submit"
						variant="primary"
						className=""
						style={{ padding: "5px 60px" }}
					>
						{isSubmitting ? (
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
