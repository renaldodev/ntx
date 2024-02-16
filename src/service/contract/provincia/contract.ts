import { z } from "zod";
import { contract } from "../contract";
import { ProvinciaSchema } from "./schema";

export const provinciaContract = contract.router({
  create: {
    method: "POST",
    path: "/Provincia/create",
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
    path: "/Provincia/getAll",
    responses: {
      200: z.array(ProvinciaSchema),
    },
  },
  getById: {
    method: "GET",
    path: "/Provincia/getbyid/:provinciaId",
    responses: {
      200: z.array(z.any()),
    },
    pathParams: z.object({
      provinciaId: z.string(),
    }),
  },
  delete: {
    method: "DELETE",
    path: "/Provincia/delete/:provinciaId",
    responses: {
      200: null,
    },
    pathParams: z.object({
      provinciaId: z.string(),
    }),
    body: null,
  },
  update: {
    method: "PUT",
    path: "/Provincia/update/",
    responses: {
      200: null,
    },
    body: z.object({
      ProvinciaId: z.number(),
    }),
  },
});
