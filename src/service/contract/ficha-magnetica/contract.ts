import { z } from "zod";
 import { MagneticaSchema } from "./schema";
import { contract } from "../contract";

export const FichaMagneticaContract = contract.router({
  create: {
    method: "POST",
    path: "/FichaMagnetica/create",
    responses: {
      201: null,
    },
    body: z.object({
  dataAtividade: z.date(),
  dataDaMedicao: z.date(),
  pocoId: z.number(),
  valorDaAnomaliaMagnetica:z.number(),
    }),
  },
  list: {
    method: "GET",
    path: "/FichaMagnetica/getAll",
    responses: {
      200: z.array(MagneticaSchema),
    },
  },
  getById: {
    method: "GET",
    path: "/FichaMagnetica/getbyid/:FichaMagneticaId",
    responses: {
      200: z.array(MagneticaSchema),
    },
    pathParams: z.object({
      FichaMagneticaId:  z.number(),
    }),
  },
  delete: {
    method: "DELETE",
    path: "/FichaMagnetica/delete/:FichaMagneticaId",
    responses: {
      200: null,
    },
    pathParams: z.object({
      FichaMagneticaId: z.string(),
    }),
    body: null,
  },
  update: {
    method: "PUT",
    path: "/FichaMagnetica/update/",
    responses: {
      200: null,
    },
    body: z.object({
      FichaMagneticaId: z.number(),
    }),
  },
});
