import { z } from "zod";
 import { SismicaSchema } from "./schema";
import { contract } from "../contract";

export const FichaSismicaContract = contract.router({
  create: {
    method: "POST",
    path: "/FichaSismica/create",
    responses: {
      201: null,
    },
    body: z.object({
      dataDoLevantamento: z.date(),
      dataAtividade: z.date(),
      pocoId: z.number(),
      resolucaoSismica:z.number(),
      tipoLevantamentoSismicoId:z.number(),
      profundidadeSismicaMaxima:z.number(),
    }),
  },
  list: {
    method: "GET",
    path: "/FichaSismica/getAll",
    responses: {
      200: z.array(SismicaSchema),
    },
  },
  getById: {
    method: "GET",
    path: "/FichaSismica/getbyid/:FichaSismicaId",
    responses: {
      200: z.array(SismicaSchema),
    },
    pathParams: z.object({
      FichaSismicaId:  z.number(),
    }),
  },
  delete: {
    method: "DELETE",
    path: "/FichaSismica/delete/:FichaSismicaId",
    responses: {
      200: null,
    },
    pathParams: z.object({
      FichaSismicaId: z.string(),
    }),
    body: null,
  },
  update: {
    method: "PUT",
    path: "/FichaSismica/update/",
    responses: {
      200: null,
    },
    body: z.object({
      FichaSismicaId: z.number(),
    }),
  },
});
