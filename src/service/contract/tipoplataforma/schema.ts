import { z } from "zod";

export const TipoPlataformaSchema = z.object({
  usuarioRegistroId: z.number(),
  dataRegistro: z.date(),
  atualizadoPor: z.number(),
  dataAtualizacao: z.date(),
  descricao: z.string(),
  tipoPlataformaId: z.string(),

});

export type OperadorSchema = z.infer<typeof TipoPlataformaSchema>;
