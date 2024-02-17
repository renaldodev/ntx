import { z } from "zod";

export const TipoHidrocarbonatoformaSchema = z.object({
  usuarioRegistroId: z.number(),
  dataRegistro: z.date(),
  atualizadoPor: z.number(),
  dataAtualizacao: z.date(),
  descricao: z.string(),
  tipoHidrocarbonetoId: z.string(),

});

export type OperadorSchema = z.infer<typeof TipoHidrocarbonatoformaSchema>;
