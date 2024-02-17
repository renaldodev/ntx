import { z } from "zod";

export const PerfuracaoSchema = z.object({
    diametroDoPoco:z.number(),
    tipoDeRevestimento: z.string(),
    profundidade:  z.number(),
    fluidoDePerfuracao:  z.string(),
    pressaoDaFormacao: z.number(),
    temperaturaDaFormacao:  z.number(),
    dataAtividade:  z.date(),
    pocoId:  z.number(),
    metodoPerfuracaoId:  z.number(),
});

export type PerfuracaoSchema = z.infer<typeof PerfuracaoSchema>;
