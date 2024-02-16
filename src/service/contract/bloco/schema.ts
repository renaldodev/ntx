import { z } from "zod";

export const BlocoSchema = z.object({
  usuarioRegistroId: z.number(),
  dataRegistro: z.date(),
  atualizadoPor: z.number(),
  dataAtualizacao: z.date(),
  blocoId: z.number(),
  descricao: z.string(),
  numero: z.string(), 
  latitude: z.number(),
  longetude: z.number(),
  operadorId: z.number(),
});

export type BlocoSchema = z.infer<typeof BlocoSchema>;
