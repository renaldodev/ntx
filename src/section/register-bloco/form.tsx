import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "../../components/hook-form";
import { OperadorSelect } from "./operador.component";

const schema = z.object({
  descricao: z.string(),
  numero: z.string(),
  latitude: z.string().transform(Number),
  longetude: z.string().transform(Number),
  operadorId: z.string().transform(Number),
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
            label="NIF"
            control={control}
            error={errors?.descricao?.message || ""}
          />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            name="latitude"
            label="Latitude"
            control={control}
            error={errors?.latitude?.message || ""}
          />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            name="longetude"
            label="Longetude"
            control={control}
            error={errors?.longetude?.message || ""}
          />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            name="numero"
            label="Número"
            control={control}
            error={errors?.numero?.message || ""}
          />
        </Col>
        <Col md={6} className="mb-3">
          <OperadorSelect
            control={control}
            error={errors.operadorId?.message || ""}
            label="Operador"
            name="operadorId"
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
