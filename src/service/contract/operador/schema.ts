import { z } from "zod";

export const OperadorSchema = z.object({
  usuarioRegistroId: z.number(),
  dataRegistro: z.date(),
  atualizadoPor: z.number(),
  dataAtualizacao: z.date(),
  descricao: z.string(),
  nif: z.string(),
  enderecoComercial: z.string(),
  email: z.string(),
  telefone1: z.string(),
  telefone2: z.string(),
});

export type OperadorSchema = z.infer<typeof OperadorSchema>;
