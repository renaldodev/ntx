import { z } from "zod";
 import { TesteSchema } from "./schema";
import { contract } from "../contract";

export const FichaDeTesteContract = contract.router({
  create: {
    method: "POST",
    path: "/FichaDeTeste/create",
    responses: {
      201: null,
    },
    body: z.object({
  pressao:z.number(),
  testeDeFormacao: z.string(),
  taxaDeFluxo:  z.number(),
  porosidade:  z.string(),
  permeabilidade: z.number(),
  analiseDeNucleo:  z.string(),
  dataAtividade:  z.date(),
  pocoId:  z.number(),
    }),
  },
  list: {
    method: "GET",
    path: "/FichaDeTeste/getAll",
    responses: {
      200: z.array(TesteSchema),
    },
  },
  getById: {
    method: "GET",
    path: "/FichaDeTeste/getbyid/:FichaDeTesteId",
    responses: {
      200: z.array(TesteSchema),
    },
    pathParams: z.object({
      FichaDeTesteId:  z.number(),
    }),
  },
  delete: {
    method: "DELETE",
    path: "/FichaDeTeste/delete/:FichaDeTesteId",
    responses: {
      200: null,
    },
    pathParams: z.object({
      FichaDeTesteId: z.string(),
    }),
    body: null,
  },
  update: {
    method: "PUT",
    path: "/FichaDeTeste/update/",
    responses: {
      200: null,
    },
    body: z.object({
      FichaDeTesteId: z.number(),
    }),
  },
});
