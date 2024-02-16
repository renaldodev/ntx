import { z } from "zod";
import { contract } from "../contract";
import { PocoTipoSchema } from "./schema";

export const tipoPocoContract = contract.router({
  create: {
    method: "POST",
    path: "/TipoPoco/create",
    responses: {
      201: null,
    },
    body: z.object({
      descricao: z.string(),
      paisId: z.number(),
    }),
  },
  list: {
    method: "GET",
    path: "/TipoPoco/getAll",
    responses: {
      200: z.array(PocoTipoSchema),
    },
  },
  getById: {
    method: "GET",
    path: "/TipoPoco/getbyid/:tipoPocoId",
    responses: {
      200: z.array(z.any()),
    },
    pathParams: z.object({
      tipoPocoId: z.string(),
    }),
  },
  delete: {
    method: "DELETE",
    path: "/TipoPoco/delete/:tipoPocoId",
    responses: {
      200: null,
    },
    pathParams: z.object({
      tipoPocoId: z.string(),
    }),
    body: null,
  },
  update: {
    method: "PUT",
    path: "/TipoPoco/update/",
    responses: {
      200: null,
    },
    body: z.object({
      tipoPocoId: z.number(),
    }),
  },
});
