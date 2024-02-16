import { z } from "zod";

export const PlataformaSchema = z.object({
  descricao: z.string(),
  latitude: z.string(),
  longitude:z.string(),
  tipoPlataformaId: z.string(),
  blcocoId: z.string(),
  capacidadeDeProducao: z.string(),
  profundidadeInstalada: z.string(),
});

export type PlataformaSchema = z.infer<typeof PlataformaSchema>;
