import { z } from "zod";

export const TesteSchema = z.object({
    testeDeFormacao: z.string(),
  taxaDeFluxo:  z.number(),
  porosidade:  z.string(),
  permeabilidade: z.number(),
  analiseDeNucleo:  z.string(),
  dataAtividade:  z.date(),
  pocoId:  z.number(),
});

export type TesteSchema = z.infer<typeof TesteSchema>;
