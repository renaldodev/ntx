import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import {
	Button,
	Col,
	Row,
	Spinner,
	Form as RNForm,
	InputGroup,
} from "react-bootstrap";
import { zodResolver } from "@hookform/resolvers/zod";
import { GrupoTextField, TextField } from "../../components/hook-form";
import { ProvinciaSelect } from "./provincia.component";
import { TipoPocoSelect } from "./tipoPoco.component";
import { Icon } from "@iconify/react";
import InputGroupWithLabel from "../../components/common/inputGroup";

const schema = z.object({
	descricao: z.string(),
	bacia: z.string(),
	bloco: z.string(),
	licencaExploracao: z.string(),
	latitude: z.coerce.number(),
	longetitude: z.coerce.number(),
	lamineDeAgua: z.string(),
	dataInicioPerfuracao: z.coerce.date(),
	dataConclusaoPerfuracao: z.coerce.date(),
	profundidade: z.coerce.number(),
	profundidadeTotal: z.coerce.number(),
	nomeDaRig: z.string(),
	classe: z.string(),
	ambiente: z.string(),
	dataDt: z.coerce.date(),
	dataDeReentrada: z.coerce.date(),
	dataDeConclusao: z.coerce.date(),
	pocoTipoId: z.coerce.number(),
	plataformaId: z.coerce.number(),
	provinciaId: z.coerce.number(),
	imagem: z.string(),
});

type FormValues = z.infer<typeof schema>;

type Props = {
	submit: (data: FormValues) => void;
	edit?: boolean;
	isLoading: boolean;
	plataformaId: number;
	back?: () => void;
};

export function PlataformaForm({
	submit,
	edit,
	isLoading,
	plataformaId,
	back,
}: Props) {
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
					name="bacia"
					label="Bacia"
					control={control}
					error={errors?.bacia?.message || ""}
					icon="material-symbols:description"
				/>
				<InputGroupWithLabel
					name="bloco"
					label="Bloco"
					control={control}
					error={errors?.bloco?.message || ""}
					icon="clarity:block-line"
				/>
				<InputGroupWithLabel
					name="licencaExploracao"
					label="licença de Exploracao"
					control={control}
					error={errors?.licencaExploracao?.message || ""}
					icon="carbon:license-maintenance"
				/>
				<InputGroupWithLabel
					name="latitude"
					label="latitude"
					control={control}
					error={errors?.latitude?.message || ""}
					icon="tabler:world-latitude"
				/>
				<InputGroupWithLabel
					name="longetitude"
					label="longetitude"
					control={control}
					error={errors?.longetitude?.message || ""}
					icon="mingcute:earth-longitude-fill"
				/>
				<InputGroupWithLabel
					name="lamineDeAgua"
					label="Lamine De Agua"
					control={control}
					error={errors?.lamineDeAgua?.message || ""}
					icon="material-symbols:description"
				/>
				<Col md={6} className="mb-3">
					<InputGroup className="mb-3">
						<InputGroup.Text
							className=""
							id="basic-addon1"
							style={{ maxWidth: "30%" }}
						>
							<Icon fontSize={16} icon="fontisto:date" />
						</InputGroup.Text>
						<GrupoTextField
							name="dataInicioPerfuracao"
							label="Data Inicio Perfuracão"
							control={control}
							type="date"
							error={errors?.dataInicioPerfuracao?.message || ""}
						/>
					</InputGroup>
				</Col>
				<Col md={6} className="mb-3">
					<InputGroup className="mb-3">
						<InputGroup.Text
							className=""
							id="basic-addon1"
							style={{ maxWidth: "30%" }}
						>
							<Icon fontSize={16} icon="fontisto:date" />
						</InputGroup.Text>
						<GrupoTextField
							name="dataConclusaoPerfuracao"
							label="Data de Conclusao da Perfuração"
							control={control}
							type="date"
							error={errors?.dataConclusaoPerfuracao?.message || ""}
						/>
					</InputGroup>
				</Col>
				<InputGroupWithLabel
					name="profundidade"
					label="profundidade"
					control={control}
					error={errors?.profundidade?.message || ""}
					icon="iconoir:depth"
				/>
				<InputGroupWithLabel
					name="profundidadeTotal"
					label="Profundidade Total"
					control={control}
					error={errors?.profundidadeTotal?.message || ""}
					icon="cbi:pool-depth"
				/>
				<InputGroupWithLabel
					name="nomeDaRig"
					label="Nome Da Rig"
					control={control}
					error={errors?.nomeDaRig?.message || ""}
					icon="material-symbols:description"
				/>
				<InputGroupWithLabel
					name="classe"
					label="Classe"
					control={control}
					error={errors?.classe?.message || ""}
					icon="nonicons:class-16"
				/>
				<InputGroupWithLabel
					name="ambiente"
					label="Ambiente"
					control={control}
					error={errors?.ambiente?.message || ""}
					icon="arcticons:atmospherelogger"
				/>
				<InputGroupWithLabel
					name="imagem"
					label="Imagem"
					control={control}
					error={errors?.imagem?.message || ""}
					icon="line-md:image"
				/>
				<Col md={6} className="mb-3">
					<InputGroup className="mb-3">
						<InputGroup.Text className="" id="basic-addon1">
							<Icon icon="fontisto:date" />
						</InputGroup.Text>
						<GrupoTextField
							name="dataDt"
							label="Data Inicio"
							control={control}
							type="date"
							error={errors?.dataDt?.message || ""}
						/>
					</InputGroup>
				</Col>
				<Col md={6} className="mb-3">
					<InputGroup className="mb-3">
						<InputGroup.Text className="" id="basic-addon1">
							<Icon icon="fontisto:date" />
						</InputGroup.Text>
						<GrupoTextField
							name="dataDeReentrada"
							label="Data De Reentrada"
							type="date"
							control={control}
							error={errors?.dataDeReentrada?.message || ""}
						/>
					</InputGroup>
				</Col>
				<Col md={6} className="mb-3">
					<InputGroup className="mb-3">
						<InputGroup.Text
							className=""
							id="basic-addon1"
							style={{ maxWidth: "30%" }}
						>
							<Icon fontSize={16} icon="fontisto:date" />
						</InputGroup.Text>
						<GrupoTextField
							name="dataDeConclusao"
							label="Data De Conclusão"
							type="date"
							control={control}
							error={errors?.dataDeConclusao?.message || ""}
						/>
					</InputGroup>
				</Col>

				<Col md={6} className="mb-3">
					<InputGroup className="mb-3">
						<InputGroup.Text
							className=""
							id="basic-addon1"
							style={{ maxWidth: "30%" }}
						>
							<Icon fontSize={16} icon="flowbite:caret-sort-solid" />
						</InputGroup.Text>
						<TipoPocoSelect
							control={control}
							error={errors.pocoTipoId?.message || ""}
							label="Tipo de poço"
							name="pocoTipoId"
						/>
					</InputGroup>
				</Col>
				<Col md={6} className="mb-3">
					<InputGroup className="mb-3">
						<InputGroup.Text
							className=""
							id="basic-addon1"
							style={{ maxWidth: "30%" }}
						>
							<Icon fontSize={16} icon="flowbite:caret-sort-solid" />
						</InputGroup.Text>
						<ProvinciaSelect
							control={control}
							error={errors.provinciaId?.message || ""}
							label="Província"
							name="provinciaId"
						/>
					</InputGroup>
				</Col>

				<Col md={6} className="mb-3">
					<TextField
						label=""
						control={control}
						style={{ visibility: "hidden" }}
						error={errors.plataformaId?.message || ""}
						name="plataformaId"
						defaultValue={plataformaId}
					/>
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
					{back && (
						<Button
							variant="dark"
							style={{ padding: "5px 60px" }}
							onClick={back}
						>
							Cancelar
						</Button>
					)}
				</Col>
			</Row>
		</form>
	);
}
