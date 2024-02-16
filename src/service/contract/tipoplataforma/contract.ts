import { z } from "zod";

import { contract } from "../contract";
import { TipoPlataformaSchema } from "./schema";
export const tipoPlataformaContract = contract.router({
  create: {
    method: "POST",
    path: `/TipoPlataforma/create`,
    responses: {
      201: null,
    },
    body: z.object({
      descricao: z.string(),
      operadorId: z.number(),
    }),
  },
  delete: {
    method: "DELETE",
    path: `/TipoPlataforma/delete/:tipoPlataformaId`,
    responses: {
      200: null,
    },
    pathParams: z.object({
        tipoPlataformaId: z.string(),
    }),
    body: null,
  },
  list: {
    method: "GET",
    path: `/TipoPlataforma/getAll`,
    responses: {
      200: z.array(TipoPlataformaSchema),
    },
  },
  getById: {
    method: "GET",
    path: `/TipoPlataforma/getbyid/:id`,
    responses: {
      200: z.array(TipoPlataformaSchema),
    },
    pathParams: z.object({
      id: z.string(),
    }),
  },
  update: {
    method: "PUT",
    path: `/TipoPlataforma/update`,
    responses: {
      200: null,
    },
    body: z.object({
      tipoPlataformaId: z.number(),
      descricao: z.string(),
      operadorId: z.number(),
    }),
  },
});
