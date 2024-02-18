import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Card, Col, Row, Spinner } from "react-bootstrap";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "../../components/hook-form";
import { OperadorSchema } from "../../service";
import { useEffect } from "react";
import Pageheader from "../../components/pageheader/pageheader";
import InputGroupWithLabel from "../../components/common/inputGroup";

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
		<Card className="m-5 p-3">
			<Pageheader title="Cadastro" heading=" Operador" active="cadastro" />
			<form onSubmit={handleSubmit(onSubmit)} className="mt-5">
				<Row>
					<InputGroupWithLabel
						name="email"
						label="Email"
						control={control}
						error={errors?.email?.message || ""}
						icon="material-symbols:description"
					/>
					<InputGroupWithLabel
						name="nif"
						label="NIF"
						control={control}
						error={errors?.nif?.message || ""}
						icon="material-symbols:description"
					/>
					<InputGroupWithLabel
						name="enderecoComercial"
						label="Endereço comercial"
						control={control}
						error={errors?.enderecoComercial?.message || ""}
						icon="material-symbols:description"
					/>
					<InputGroupWithLabel
						name="descricao"
						label="Descrição"
						control={control}
						error={errors?.descricao?.message || ""}
						icon="material-symbols:description"
					/>
					<InputGroupWithLabel
						name="telefone1"
						label="Telefone"
						control={control}
						error={errors?.telefone1?.message || ""}
						icon="material-symbols:description"
					/>
					<InputGroupWithLabel
						name="telefone2"
						label="Telefone secundario"
						control={control}
						error={errors?.telefone2?.message || ""}
						icon="material-symbols:description"
					/>

					<Col md={12}>
						<Button
							type="submit"
							variant="success"
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
		</Card>
	);
}
