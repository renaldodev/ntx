import { z } from "zod";
// import { OperatorSchema } from "./schema";
import { contract } from "../contract";
import { PlataformaSchema } from "./schema";

export const plataformaContract = contract.router({
  create: {
    method: "POST",
    path: "/Plataforma/create",
    responses: {
      201: null,
    },
    body: z.object({
      // descricao: z.string(),
      // latitude: z.number(),
      // longitude: z.number(),
      // tipoPlataformaId: z.number(),
      // blcocoId: z.number(),
      // capacidadeDeProducao: z.number(),
      // profundidadeInstalada: z.number(),

      descricao: z.string(),
      latitude: z.string(),
      longitude: z.string(),
      tipoPlataformaId: z.string(),
      blcocoId: z.string(),
      capacidadeDeProducao: z.string(),
      profundidadeInstalada: z.string(),
    }),
  },
  list: {
    method: "GET",
    path: "/Plataforma/getAll",
    responses: {
      200: z.array(PlataformaSchema),
    },
  },
  getById: {
    method: "GET",
    path: "/Plataforma/getbyid/:plataformaId",
    responses: {
      200: z.array(z.any()),
    },
    pathParams: z.object({
      plataformaId: z.string(),
    }),
  },
  delete: {
    method: "DELETE",
    path: "/Plataforma/delete/:plataformaId",
    responses: {
      200: null,
    },
    pathParams: z.object({
      plataformaId: z.string(),
    }),
    body: null,
  },
  update: {
    method: "PUT",
    path: "/Plataforma/update/",
    responses: {
      200: null,
    },
    body: z.object({
      plataformaId: z.number(),
    }),
  },
});
