import { z } from "zod";
 import { HidrocarbonatoSchema } from "./schema";
import { contract } from "../contract";

export const FichaDeHidrocarbonetoContract = contract.router({
  create: {
    method: "POST",
    path: "/FichaDeHidrocarboneto/create",
    responses: {
      201: null,
    },
    body: z.object({
      dataAtividade:z.date(),
    volumeEstimado: z.number(),
    profundidadeDoReservatorio:  z.number(),
    espessuraDoReservatorio:  z.number(),
    tipoHidrocarbonetoId: z.number(),
    pocoId:  z.number(),
    }),
  },
  list: {
    method: "GET",
    path: "/FichaDeHidrocarboneto/getAll",
    responses: {
      200: z.array(HidrocarbonatoSchema),
    },
  },
  getById: {
    method: "GET",
    path: "/FichaDeHidrocarboneto/getbyid/:FichaDeHidrocarbonetoId",
    responses: {
      200: z.array(HidrocarbonatoSchema),
    },
    pathParams: z.object({
      FichaDeHidrocarbonetoId:  z.number(),
    }),
  },
  delete: {
    method: "DELETE",
    path: "/FichaDeHidrocarboneto/delete/:FichaDeHidrocarbonetoId",
    responses: {
      200: null,
    },
    pathParams: z.object({
      FichaDeHidrocarbonetoId: z.string(),
    }),
    body: null,
  },
  update: {
    method: "PUT",
    path: "/FichaDeHidrocarboneto/update/",
    responses: {
      200: null,
    },
    body: z.object({
      FichaDeHidrocarbonetoId: z.number(),
    }),
  },
});
