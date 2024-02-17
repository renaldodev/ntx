import { z } from "zod";

export const TipoLevantamentoSismicoformaSchema = z.object({

  usuarioRegistroId: z.number(),
  dataRegistro: z.date(),
  atualizadoPor: z.number(),
  dataAtualizacao: z.date(),
  descricao: z.string(),
  tiposLevantamentosSismicoId: z.string(),

});

export type TipoLevantamentoSismicoformaSchema = z.infer<typeof TipoLevantamentoSismicoformaSchema>;
