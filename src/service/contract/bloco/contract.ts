import { z } from "zod";
import { BlocoSchema } from "./schema";
import { contract } from "../contract";

export const blocoContract = contract.router({
  create: {
    method: "POST",
    path: "/Bloco/create",
    responses: {
      201: null,
    },
    body: z.object({
      descricao: z.string(),
      numero: z.string(),
      latitude: z.number(),
      longetude: z.number(),
      operadorId: z.number(),
    }),
  },
  list: {
    method: "GET",
    path: "/Bloco/getAll",
    responses: {
      200: z.array(BlocoSchema),
    },
  },
  getById: {
    method: "GET",
    path: "/Bloco/getAll",
    responses: {
      200: BlocoSchema,
    },
  },
  delete: {
    method: "DELETE",
    path: "/Bloco/delete/:blocoId",
    responses: {
      200: null,
    },
    pathParams: z.object({
      blocoId: z.string(),
    }),
    body: null,
  },
  update: {
    method: "PUT",
    path: "/Bloco/update/",
    responses: {
      200: null,
    },
    body: z.object({
      descricao: z.string(),
      numero: z.string(),
      latitude: z.number(),
      longetude: z.number(),
      operadorId: z.number(),
      blocoId: z.number(),
    }),
  },
});
