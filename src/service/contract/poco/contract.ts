import { z } from "zod";
// import { OperatorSchema } from "./schema";
import { contract } from "../contract";

export const pocoContract = contract.router({
  create: {
    method: "POST",
    path: "/Poco/create",
    responses: {
      201: null,
    },
    body: z.object({
      descricao: z.string(),
      bacia: z.string(),
      bloco: z.string(),
      licencaExploracao: z.string(),
      latitude: z.number(),
      longetitude: z.number(),
      lamineDeAgua: z.string(),
      dataInicioPerfuracao: z.date(),
      dataConclusaoPerfuracao: z.date(),
      profundidade: z.number(),
      profundidadeTotal: z.number(),
      nomeDaRig: z.string(),
      classe: z.string(),
      ambiente: z.string(),
      dataDt: z.date(),
      dataDeReentrada: z.date(),
      dataDeConclusao: z.date(),
      pocoTipoId: z.number(),
      plataformaId: z.number(),
    }),
  },
  list: {
    method: "GET",
    path: "/Poco/getAll",
    responses: {
      200: z.array(z.any()),
    },
  },
  getById: {
    method: "GET",
    path: "/Poco/getbyid/:pocoId",
    responses: {
      200: z.array(z.any()),
    },
    pathParams: z.object({
      pocoId: z.string(),
    }),
  },
  delete: {
    method: "DELETE",
    path: "/Poco/delete/:pocoId",
    responses: {
      200: null,
    },
    pathParams: z.object({
      pocoId: z.string(),
    }),
    body: null,
  },
  update: {
    method: "PUT",
    path: "/Poco/update/",
    responses: {
      200: null,
    },
    body: z.object({
      pocoId: z.number(),
    }),
  },
});
