import { z } from "zod";

export const PlataformaSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  description: z.string(),
  category: z.string(),
  image: z.string(),
  rating: z.object({
    rate: z.number(),
    count: z.number(),
  }),
});

export type PlataformaSchema = z.infer<typeof PlataformaSchema>;
