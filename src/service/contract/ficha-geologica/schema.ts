import { z } from "zod";

export const GeologicaSchema = z.object({
  formacaoGeologicaAlvo:z.string(),
  descricaoLitologica:z.string(),
  idadeDaFormacao:z.number(),
  ambienteDeDeposicao:z.string(),
  contratos:z.string(),
  rig:z.string(),
  mudlogging:z.string(),
  mud_Enginnerring:z.string(),
  directionalDrillin:z.string(),
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

});

export type GeologicaSchema = z.infer<typeof GeologicaSchema>;
