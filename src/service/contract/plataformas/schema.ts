import { z } from "zod";

export const PlataformaSchema = z.object({
  usuarioRegistroId: z.number(),
  dataRegistro: z.string(),
  atualizadoPor: z.number(),
  dataAtualizacao: z.string(),
  plataformaId: z.number(),
  descricao: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  tipoPlataformaId: z.number(),
  blcocoId: z.number(),
  capacidadeDeProducao: z.number(),
  profundidadeInstalada: z.number(),
});

export type PlataformaSchema = z.infer<typeof PlataformaSchema>;
