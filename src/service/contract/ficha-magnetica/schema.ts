import { z } from "zod";

export const MagneticaSchema = z.object({
    
  dataAtividade: z.date(),
  dataDaMedicao: z.date(),
  pocoId: z.number(),
  valorDaAnomaliaMagnetica:z.number(),
});

export type MagneticaSchema = z.infer<typeof MagneticaSchema>;
