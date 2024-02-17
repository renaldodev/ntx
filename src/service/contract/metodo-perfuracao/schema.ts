import { z } from "zod";

export const MetodoPerfuracaoSchema = z.object({
    usuarioRegistroId: z.number(),
    dataRegistro: z.string(),
    atualizadoPor: z.number(),
    dataAtualizacao: z.string(),
    metodoPerfuracaoId: z.number(),
    descricao: z.string(),
  
});

export type MetodoPerfuracaoSchema = z.infer<typeof MetodoPerfuracaoSchema>;
