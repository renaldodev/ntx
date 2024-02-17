import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Col, Row, Spinner, Form as RNForm } from "react-bootstrap";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "../../components/hook-form";
import { ProvinciaSelect } from "./provincia.component";
import { TipoPocoSelect } from "./tipoPoco.component";

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

export function PlataformaForm({ submit, edit, isLoading, plataformaId, back }: Props) {
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
            label="Descrição"
            control={control}
            error={errors?.descricao?.message || ""}
          />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            name="bacia"
            label="Bacia"
            control={control}
            error={errors?.bacia?.message || ""}
          />
        </Col>

        <Col md={6} className="mb-3">
          <TextField
            name="bloco"
            label="Bloco"
            control={control}
            error={errors?.bloco?.message || ""}
          />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            name="licencaExploracao"
            label="licencaExploracao"
            control={control}
            error={errors?.licencaExploracao?.message || ""}
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
            name="longetitude"
            label="longetitude"
            control={control}
            error={errors?.longetitude?.message || ""}
          />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            name="lamineDeAgua"
            label="lamineDeAgua"
            control={control}
            error={errors?.lamineDeAgua?.message || ""}
          />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            name="dataInicioPerfuracao"
            label="dataInicioPerfuracao"
            control={control}
            type="date"
            error={errors?.dataInicioPerfuracao?.message || ""}
          />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            name="dataConclusaoPerfuracao"
            label="dataConclusaoPerfuracao"
            control={control}
            type="date"
            error={errors?.dataConclusaoPerfuracao?.message || ""}
          />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            name="profundidade"
            label="profundidade"
            control={control}
            error={errors?.profundidade?.message || ""}
          />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            name="profundidadeTotal"
            label="profundidadeTotal"
            control={control}
            error={errors?.profundidadeTotal?.message || ""}
          />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            name="nomeDaRig"
            label="nomeDaRig"
            control={control}
            error={errors?.nomeDaRig?.message || ""}
          />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            name="classe"
            label="classe"
            control={control}
            error={errors?.classe?.message || ""}
          />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            name="ambiente"
            label="ambiente"
            control={control}
            error={errors?.ambiente?.message || ""}
          />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            name="imagem"
            label="Imagem"
            control={control}
            error={errors?.imagem?.message || ""}
          />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            name="dataDt"
            label="dataDt"
            control={control}
            type="date"
            error={errors?.dataDt?.message || ""}
          />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            name="dataDeReentrada"
            label="dataDeReentrada"
            type="date"
            control={control}
            error={errors?.dataDeReentrada?.message || ""}
          />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            name="dataDeConclusao"
            label="dataDeConclusao"
            type="date"
            control={control}
            error={errors?.dataDeConclusao?.message || ""}
          />
        </Col>
        <Col md={6} className="mb-3">
          <TipoPocoSelect
            control={control}
            error={errors.pocoTipoId?.message || ""}
            label="Tipo de poço"
            name="pocoTipoId"
          />
        </Col>
        <Col md={6} className="mb-3">
          <ProvinciaSelect
            control={control}
            error={errors.provinciaId?.message || ""}
            label="Província"
            name="provinciaId"
          />
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
          {back && (
            <Button
              variant="secondary"
              className="m-4"
              style={{ padding: "5px 60px" }}
              onClick={back}
            >
              Canselar
            </Button>
          )}
        </Col>
      </Row>
    </form>
  );
}
