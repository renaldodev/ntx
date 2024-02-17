import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "../../components/hook-form";

const schema = z.object({
  descricao: z.string(),
  numero: z.string(),
  latitude: z.string().transform(Number),
  longetude: z.string().transform(Number),
  operadorId: z.number(),
});

type FormValues = z.infer<typeof schema>;

type Props = {
  submit: (data: FormValues) => void;
  edit?: boolean;
  isLoading: boolean;
  operadorId: number;
  back?: () => void;
};

export function BlocoForm({
  submit,
  edit,
  isLoading,
  operadorId,
  back,
}: Props) {
  const message = edit ? "Atualizar" : "Salvar";
  const {
    handleSubmit,
    control,
    reset,
    resetField,
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
          <TextField
            control={control}
            error={errors.operadorId?.message || ""}
            value={operadorId}
            defaultValue={operadorId}
            name="operadorId"
            label=""
            style={{ visibility: "hidden" }}
          />
        </Col>

        <Col md={12}>
          <Button
            type="submit"
            variant="primary"
            className="m-4"
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
