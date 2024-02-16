import { z } from "zod";
 import { PlataformaSchema } from "./schema";
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
       descricao: z.string(),
       latitude: z.coerce.number(),
       longitude:z.coerce.number(),
       tipoPlataformaId: z.string(),
       blcocoId: z.string(),
       capacidadeDeProducao: z.coerce.number(),
       profundidadeInstalada:z.coerce.number(),
    
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
      200: z.array(PlataformaSchema),
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
