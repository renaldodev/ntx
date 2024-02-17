import { z } from "zod";

export const HidrocarbonatoSchema = z.object({
    dataAtividade:z.date(),
    volumeEstimado: z.coerce.number(),
    profundidadeDoReservatorio:z.coerce.number(),
     espessuraDoReservatorio: z.string(),
     tipoHidrocarbonetoId: z.string(),
     pocoId: z.coerce.number(),
});

export type HidrocarbonatoSchema = z.infer<typeof HidrocarbonatoSchema>;
