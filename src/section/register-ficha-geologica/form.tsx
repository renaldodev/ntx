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
import { Icon } from "@iconify/react";
import Pageheader from "../../components/pageheader/pageheader";
import { TipoPocoSelect } from "../register-poco/tipoPoco.component";
import InputGroupWithLabel from "../../components/common/inputGroup";
import { TextField } from "../../components/hook-form/textfield";

const schema = z.object({
  formacaoGeologicaAlvo: z.string(),
  descricaoLitologica: z.string(),
  idadeDaFormacao: z.coerce.number(),
  ambienteDeDeposicao: z.string(),
  contratos: z.string(),
  rig: z.string(),
  mudlogging: z.string(),
  mud_Enginnerring: z.string(),
  directionalDrilling: z.string(),
  lwd: z.string(),
  mwd: z.string(),
  wireLine: z.string(),
  coring: z.string(),
  core: z.string(),
  coreLogging: z.string(),
  wellSeismic: z.string(),
  cement: z.string(),
  testing: z.string(),
  wellHead: z.string(),
  upperCompletion: z.string(),
  lowerCompletion: z.string(),
  phase: z.string(),
  profundidadeDeInicio: z.coerce.number(),
  profundidadeDeConclusao: z.coerce.number(),
  mudType: z.string(),
  dens: z.coerce.number(),
  visc: z.coerce.number(),
  pocoId: z.coerce.number(),
});

type FormValues = z.infer<typeof schema>;

type Props = {
  submit: (data: FormValues) => void;
  edit?: boolean;
  isLoading: boolean;
  pocoId: number;
  back: () => void;
};

export function FormFichaGeologica({ submit, edit, isLoading,pocoId,back }: Props) {
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
        heading=" Ficha Geologica"
        active="cadastro"
      />
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
        <Row>
          <InputGroupWithLabel
            name="formacaoGeologicaAlvo"
            label="Formacao Geologica Alvo"
            control={control}
            error={errors?.formacaoGeologicaAlvo?.message || ""}
            icon="material-symbols:description"
          />
          <InputGroupWithLabel
            name="descricaoLitologica"
            label="Descricão Litólogica"
            control={control}
            error={errors?.descricaoLitologica?.message || ""}
            icon="material-symbols:description"
          />
          <InputGroupWithLabel
            name="idadeDaFormacao"
            label="Idade da Formação"
            control={control}
            error={errors?.idadeDaFormacao?.message || ""}
            icon="material-symbols:description"
          />
          <InputGroupWithLabel
            name="ambienteDeDeposicao"
            label="Ambiente De Deposicao"
            control={control}
            error={errors?.ambienteDeDeposicao?.message || ""}
            icon="material-symbols:description"
          />
          <InputGroupWithLabel
            name="rig"
            label="Rig"
            control={control}
            error={errors?.rig?.message || ""}
            icon="material-symbols:description"
          />
          <InputGroupWithLabel
            name="core"
            label="core"
            control={control}
            error={errors?.core?.message || ""}
            icon="material-symbols:description"
          />

          <InputGroupWithLabel
            name="contratos"
            label="Contratos"
            control={control}
            error={errors?.contratos?.message || ""}
            icon="material-symbols:description"
          />
          <InputGroupWithLabel
            name="mudlogging"
            label="Mudlogging"
            control={control}
            error={errors?.mudlogging?.message || ""}
            icon="material-symbols:description"
          />
          <InputGroupWithLabel
            name="mud_Enginnerring"
            label="Mud Engineering"
            control={control}
            error={errors?.mud_Enginnerring?.message || ""}
            icon="material-symbols:description"
          />
          <InputGroupWithLabel
            name="directionalDrilling"
            label="Directional Drilling"
            control={control}
            error={errors?.directionalDrilling?.message || ""}
            icon="material-symbols:description"
          />
          <InputGroupWithLabel
            name="lwd"
            label="LWD"
            control={control}
            error={errors?.lwd?.message || ""}
            icon="material-symbols:description"
          />
          <InputGroupWithLabel
            name="mwd"
            label="MWD"
            control={control}
            error={errors?.mwd?.message || ""}
            icon="material-symbols:description"
          />
          <InputGroupWithLabel
            name="wireLine"
            label="Wire Line"
            control={control}
            error={errors?.wireLine?.message || ""}
            icon="material-symbols:description"
          />
          <InputGroupWithLabel
            name="profundidadeDeInicio"
            label="Profundidade de Início"
            control={control}
            error={errors?.profundidadeDeInicio?.message || ""}
            icon="material-symbols:description"
          />
          <InputGroupWithLabel
            name="profundidadeDeConclusao"
            label="Profundidade de Conclusão"
            control={control}
            error={errors?.profundidadeDeConclusao?.message || ""}
            icon="material-symbols:description"
          />
          <InputGroupWithLabel
            name="mudType"
            label="Mud Type"
            control={control}
            error={errors?.mudType?.message || ""}
            icon="material-symbols:description"
          />

          <InputGroupWithLabel
            name="visc"
            label="Viscosity"
            control={control}
            error={errors?.visc?.message || ""}
            icon="material-symbols:description"
          />
          <InputGroupWithLabel
            name="coreLogging"
            label="coreLogging"
            control={control}
            error={errors?.coreLogging?.message || ""}
            icon="material-symbols:description"
          />
          <InputGroupWithLabel
            name="wellSeismic"
            label="wellSeismic"
            control={control}
            error={errors?.wellSeismic?.message || ""}
            icon="material-symbols:description"
          />
          <InputGroupWithLabel
            name="cement"
            label="cement"
            control={control}
            error={errors?.cement?.message || ""}
            icon="material-symbols:description"
          />
          <InputGroupWithLabel
            name="testing"
            label="testing"
            control={control}
            error={errors?.testing?.message || ""}
            icon="material-symbols:description"
          />
          <InputGroupWithLabel
            name="wellHead"
            label="wellHead"
            control={control}
            error={errors?.wellHead?.message || ""}
            icon="material-symbols:description"
          />
          <InputGroupWithLabel
            name="upperCompletion"
            label="upperCompletion"
            control={control}
            error={errors?.upperCompletion?.message || ""}
            icon="material-symbols:description"
          />
          <InputGroupWithLabel
            name="lowerCompletion"
            label="lowerCompletion"
            control={control}
            error={errors?.lowerCompletion?.message || ""}
            icon="material-symbols:description"
          />
          <InputGroupWithLabel
            name="phase"
            label="phase"
            control={control}
            error={errors?.phase?.message || ""}
            icon="material-symbols:description"
          />
          <InputGroupWithLabel
            name="coring"
            label="coring"
            control={control}
            error={errors?.coring?.message || ""}
            icon="material-symbols:description"
          />
          <InputGroupWithLabel
            name="dens"
            label="Density"
            control={control}
            error={errors?.dens?.message || ""}
            icon="material-symbols:description"
          />

          <TextField
            control={control}
            style={{ visibility: "hidden" }}
            error={errors.pocoId?.message || ""}
            label=""
            name="pocoId"
            defaultValue={pocoId}
          />

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
            <Button
              variant="dark"
              className=""
              style={{ padding: "5px 60px" }}
              onClick={back}
            >
              Cancelar
            </Button>
          </Col>
        </Row>
      </form>
    </Card>
  );
}
