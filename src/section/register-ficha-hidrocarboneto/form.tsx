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
import { HidrocarnonadoSelect } from "./hidrocarbonato-select";
import { TextField } from "../../components/hook-form/textfield";

const schema = z.object({
  volumeEstimado: z.coerce.number(),
  profundidadeDoReservatorio: z.coerce.number(),
  espessuraDoReservatorio: z.coerce.number(),
  tipoHidrocarbonetoId: z.coerce.number(),
  pocoId: z.coerce.number(),
  dataAtividade: z.coerce.date(),
});

type FormValues = z.infer<typeof schema>;

type Props = {
  submit: (data: FormValues) => void;
  edit?: boolean;
  isLoading: boolean;
  pocoId: number;
  back: () => void;
};

export function FormFichaHidrocarboneto({
  submit,
  edit,
  isLoading,
  pocoId,
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
    <Card className="m-5 p-4">
      <Pageheader
        title="Cadastro"
        heading=" Ficha HidroCarbonato"
        active="cadastro"
      />
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
        <Row>
          <Col md={6} className="mb-3 ">
            <InputGroup className="">
              <InputGroup.Text id="basic-addon1">
                <Icon icon="material-symbols:description" />
              </InputGroup.Text>
              <GrupoTextField
                name="volumeEstimado"
                label="Valor Estimado"
                control={control}
                error={errors?.volumeEstimado?.message || ""}
              />
            </InputGroup>
          </Col>
          <Col md={6} className="mb-3">
            <InputGroup className="mb-3">
              <InputGroup.Text className="" id="basic-addon1">
                <Icon icon="cbi:friends-of-hue-flat-p" />
              </InputGroup.Text>
              <GrupoTextField
                name="profundidadeDoReservatorio"
                label="Profundidade Do Reservatório"
                control={control}
                error={errors?.profundidadeDoReservatorio?.message || ""}
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
                name="espessuraDoReservatorio"
                label="Espressura Do Reservatório"
                control={control}
                error={errors?.espessuraDoReservatorio?.message || ""}
              />
            </InputGroup>
          </Col>
          <Col md={6} className="mb-3">
            <InputGroup className="mb-3">
              <InputGroup.Text className="" id="basic-addon1">
                <Icon icon="ph:wall-fill" />
              </InputGroup.Text>
              <HidrocarnonadoSelect
                control={control}
                error={errors.tipoHidrocarbonetoId?.message || ""}
                label=" Tipo de Hidrocarboneto"
                name="tipoHidrocarbonetoId"
              />
            </InputGroup>
          </Col>
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
