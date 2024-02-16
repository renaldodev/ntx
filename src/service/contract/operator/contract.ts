import { z } from "zod";
import { OperatorSchema } from "./schema";
import { contract } from "../contract";

export const operatorContract = contract.router({
  create: {
    method: "POST",
    path: "",
    responses: {
      201: OperatorSchema,
    },
    body: z.object({
      title: z.string(),
      body: z.string(),
    }),
  },
  list: {
    method: "GET",
    path: "/products",
    responses: {
      //   201: OperatorSchema,
      200: z.array(OperatorSchema),
    },
  },
});
