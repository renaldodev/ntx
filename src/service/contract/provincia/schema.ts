import { z } from "zod";

/*
"usuarioRegistroId": 1000,
    "dataRegistro": "2024-02-13T07:53:12.8256084",
    "atualizadoPor": 1000,
    "dataAtualizacao": "2024-02-13T07:53:12.8257548",
    "provinciaId": 1,
    "descricao": "Luanda",
    "paisId": 2
*/

export const ProvinciaSchema = z.object({
  descricao: z.string(),
  provinciaId: z.number(),
  paisId: z.number(),
  dataRegistro: z.string(),
  atualizadoPor: z.number(),
  dataAtualizacao: z.string(),
});

