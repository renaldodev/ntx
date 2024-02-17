import { z } from "zod";

export const SismicaSchema = z.object({
  dataDoLevantamento: z.date(),
  dataAtividade: z.date(),
  pocoId: z.number(),
  resolucaoSismica:z.number(),
  tipoLevantamentoSismicoId:z.number(),
  profundidadeSismicaMaxima:z.number(),
});

export type SismicaSchema = z.infer<typeof SismicaSchema>;
