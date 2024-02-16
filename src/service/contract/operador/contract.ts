import { z } from "zod";
import { OperadorSchema } from "./schema";
import { contract } from "../contract";

export const operadorContract = contract.router({
  create: {
    method: "POST",
    path: "/Operador/create",
    responses: {
      201: null,
    },
    body: z.object({
      descricao: z.string(),
      nif: z.string(),
      enderecoComercial: z.string(),
      email: z.string(),
      telefone1: z.string(),
      telefone2: z.string(),
    }),
  },
  list: {
    method: "GET",
    path: "/Operador/getAll",
    responses: {
      200: z.array(OperadorSchema),
    },
  },
  getById: {
    method: "GET",
    path: "/Operador/getbyid/:operadorId",
    responses: {
      200: OperadorSchema,
    },
    pathParams: z.object({
      operadorId: z.string(),
    }),
  },
  delete: {
    method: "DELETE",
    path: "/Operador/delete/:operadorId",
    responses: {
      200: null,
    },
    pathParams: z.object({
      operadorId: z.string(),
    }),
    body: null,
  },
  update: {
    method: "PUT",
    path: "/Operador/update/",
    responses: {
      200: null,
    },
    body: z.object({
      operadorId: z.number(),
    }),
  },
});
