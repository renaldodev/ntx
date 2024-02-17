import { z } from "zod";

import { contract } from "../contract";
import { TipoLevantamentoSismicoformaSchema } from "./schema";
export const tipoLevantamentoSismico = contract.router({
  create: {
    method: "POST",
    path: `/TiposLevantamentosSismico/create`,
    responses: {
      201: null,
    },
    body: z.object({
      descricao: z.string(),
     
    }),
  },
  delete: {
    method: "DELETE",
    path: `/TiposLevantamentosSismico/delete/:TiposLevantamentosSismicoId`,
    responses: {
      200: null,
    },
    pathParams: z.object({
        TiposLevantamentosSismicoId: z.string(),
    }),
    body: null,
  },
  list: {
    method: "GET",
    path: `/TiposLevantamentosSismico/getAll`,
    responses: {
      200: z.array(TipoLevantamentoSismicoformaSchema),
    },
  },
  getById: {
    method: "GET",
    path: `/TiposLevantamentosSismico/getbyid/:id`,
    responses: {
      200: z.array(TipoLevantamentoSismicoformaSchema),
    },
    pathParams: z.object({
      id: z.string(),
    }),
  },
  update: {
    method: "PUT",
    path: `/TiposLevantamentosSismico/update`,
    responses: {
      200: null,
    },
    body: z.object({
      TiposLevantamentosSismicoId: z.number(),
      descricao: z.string(),
      operadorId: z.number(),
    }),
  },
});
