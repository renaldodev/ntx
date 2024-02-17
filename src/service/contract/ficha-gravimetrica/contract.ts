import { z } from "zod";
 import { GravimetricaSchema } from "./schema";
import { contract } from "../contract";

export const FichaGravimetricaContract = contract.router({
  create: {
    method: "POST",
    path: "/FichaGravimetrica/create",
    responses: {
      201: null,
    },
    body: z.object({
  dataAtividade: z.date(),
  dataDaMedicao: z.date(),
  pocoId: z.number(),
  valorDaAnomaliaGravimetrica:z.number(),
    }),
  },
  list: {
    method: "GET",
    path: "/FichaGravimetrica/getAll",
    responses: {
      200: z.array(GravimetricaSchema),
    },
  },
  getById: {
    method: "GET",
    path: "/FichaGravimetrica/getbyid/:FichaGravimetricaId",
    responses: {
      200: z.array(GravimetricaSchema),
    },
    pathParams: z.object({
      FichaGravimetricaId:  z.number(),
    }),
  },
  delete: {
    method: "DELETE",
    path: "/FichaGravimetrica/delete/:FichaGravimetricaId",
    responses: {
      200: null,
    },
    pathParams: z.object({
      FichaGravimetricaId: z.string(),
    }),
    body: null,
  },
  update: {
    method: "PUT",
    path: "/FichaGravimetrica/update/",
    responses: {
      200: null,
    },
    body: z.object({
      FichaGravimetricaId: z.number(),
    }),
  },
});
