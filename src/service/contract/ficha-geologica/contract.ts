import { z } from "zod";
 import { GeologicaSchema } from "./schema";
import { contract } from "../contract";

export const FichaGeologica = contract.router({
  create: {
    method: "POST",
    path: "/FichaGeologica/create",
    responses: {
      201: null,
    },
    body: z.object({
      formacaoGeologicaAlvo:z.string(),
      descricaoLitologica:z.string(),
      idadeDaFormacao:z.number(),
      ambienteDeDeposicao:z.string(),
      contratos:z.string(),
      rig:z.string(),
      mudlogging:z.string(),
      mud_Enginnerring:z.string(),
      directionalDrilling:z.string(),
      lwd:z.string(),
      mwd:z.string(),
      wireLine:z.string(),
      coring:z.string(),
      core:z.string(),
      coreLogging:z.string(),
      wellSeismic:z.string(),
      cement:z.string(),
      testing:z.string(),
      wellHead:z.string(),
      upperCompletion:z.string(),
      lowerCompletion:z.string(),
      phase:z.string(),
      profundidadeDeInicio:z.number(),
      profundidadeDeConclusao:z.number(),
      mudType:z.string(),
      dens:z.number(),
      visc:z.number(),
      pocoId:z.number()
    }),
  },
  list: {
    method: "GET",
    path: "/FichaGeologica/getAll",
    responses: {
      200: z.array(GeologicaSchema),
    },
  },
  getById: {
    method: "GET",
    path: "/FichaGeologica/getbyid/:FichaGeologicaId",
    responses: {
      200: z.array(GeologicaSchema),
    },
    pathParams: z.object({
      FichaGeologicaId:  z.number(),
    }),
  },
  delete: {
    method: "DELETE",
    path: "/FichaGeologica/delete/:FichaGeologicaId",
    responses: {
      200: null,
    },
    pathParams: z.object({
      FichaGeologicaId: z.string(),
    }),
    body: null,
  },
  update: {
    method: "PUT",
    path: "/FichaGeologica/update/",
    responses: {
      200: null,
    },
    body: z.object({
      FichaGeologicaId: z.number(),
    }),
  },
});
