import { z } from "zod";
 import { PerfuracaoSchema } from "./schema";
import { contract } from "../contract";

export const FichaDePerfuracaoContract = contract.router({
  create: {
    method: "POST",
    path: "/FichaDePerfuracao/create",
    responses: {
      201: null,
    },
    body: z.object({
  diametroDoPoco:z.number(),
  tipoDeRevestimento: z.string(),
  profundidade:  z.number(),
  fluidoDePerfuracao:  z.string(),
  pressaoDaFormacao: z.number(),
  temperaturaDaFormacao:  z.number(),
  dataAtividade:  z.date(),
  pocoId:  z.number(),
  metodoPerfuracaoId:  z.number(),

    }),
  },
  list: {
    method: "GET",
    path: "/FichaDePerfuracao/getAll",
    responses: {
      200: z.array(PerfuracaoSchema),
    },
  },
  getById: {
    method: "GET",
    path: "/FichaDePerfuracao/getbyid/:FichaDePerfuracaoId",
    responses: {
      200: z.array(PerfuracaoSchema),
    },
    pathParams: z.object({
      FichaDePerfuracaoId:  z.number(),
    }),
  },
  delete: {
    method: "DELETE",
    path: "/FichaDePerfuracao/delete/:FichaDePerfuracaoId",
    responses: {
      200: null,
    },
    pathParams: z.object({
      FichaDePerfuracaoId: z.string(),
    }),
    body: null,
  },
  update: {
    method: "PUT",
    path: "/FichaDePerfuracao/update/",
    responses: {
      200: null,
    },
    body: z.object({
      FichaDePerfuracaoId: z.number(),
    }),
  },
});
