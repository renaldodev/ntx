import { z } from "zod";

import { contract } from "../contract";
import { TipoHidrocarbonatoformaSchema } from "./schema";
export const tipoHidrocarbonato = contract.router({
  create: {
    method: "POST",
    path: `/TipoHidrocarboneto/create`,
    responses: {
      201: null,
    },
    body: z.object({
      descricao: z.string(),
     
    }),
  },
  delete: {
    method: "DELETE",
    path: `/TipoHidrocarboneto/delete/:TipoHidrocarbonetoId`,
    responses: {
      200: null,
    },
    pathParams: z.object({
        TipoHidrocarbonetoId: z.string(),
    }),
    body: null,
  },
  list: {
    method: "GET",
    path: `/TipoHidrocarboneto/getAll`,
    responses: {
      200: z.array(TipoHidrocarbonatoformaSchema),
    },
  },
  getById: {
    method: "GET",
    path: `/TipoHidrocarboneto/getbyid/:id`,
    responses: {
      200: z.array(TipoHidrocarbonatoformaSchema),
    },
    pathParams: z.object({
      id: z.string(),
    }),
  },
  update: {
    method: "PUT",
    path: `/TipoHidrocarboneto/update`,
    responses: {
      200: null,
    },
    body: z.object({
      TipoHidrocarbonetoId: z.number(),
      descricao: z.string(),
      operadorId: z.number(),
    }),
  },
});
