import { z } from "zod";

export const GravimetricaSchema = z.object({
    
  dataAtividade:  z.date(),
  dataDaMedicao:  z.date(),
  pocoId:  z.number(),
  valorDaAnomaliaGravimetrica:  z.number(),
});

export type GravimetricaSchema = z.infer<typeof GravimetricaSchema>;
