import { z } from "zod";

export const PocoTipoSchema = z.object({
  usuarioRegistroId: z.number(),
  dataRegistro: z.string(),
  atualizadoPor: z.number(),
  dataAtualizacao: z.string(),
  tipoPocoId: z.number(),
  descricao: z.string(),
});
