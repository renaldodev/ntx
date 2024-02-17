import { z } from "zod";
 import { MetodoPerfuracaoSchema } from "./schema";
import { contract } from "../contract";

export const MetodoPerfuracao = contract.router({
  create: {
    method: "POST",
    path: "/MetodoPerfuracao/create",
    responses: {
      201: null,
    },
    body: z.object({

    descricao: z.string(),
    
    }),
  },
  list: {
    method: "GET",
    path: "/MetodoPerfuracao/getAll",
    responses: {
      200: z.array(MetodoPerfuracaoSchema),
    },
  },
  getById: {
    method: "GET",
    path: "/MetodoPerfuracao/getbyid/:MetodoPerfuracaoId",
    responses: {
      200: z.array(MetodoPerfuracaoSchema),
    },
    pathParams: z.object({
      MetodoPerfuracaoId:  z.number(),
    }),
  },
  delete: {
    method: "DELETE",
    path: "/MetodoPerfuracao/delete/:MetodoPerfuracaoId",
    responses: {
      200: null,
    },
    pathParams: z.object({
      MetodoPerfuracaoId: z.string(),
    }),
    body: null,
  },
  update: {
    method: "PUT",
    path: "/MetodoPerfuracao/update/",
    responses: {
      200: null,
    },
    body: z.object({
      MetodoPerfuracaoId: z.number(),
    }),
  },
});
