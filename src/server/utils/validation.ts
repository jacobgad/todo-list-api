import { z } from "zod";

export const paramIdSchema = z.object({ id: z.string().pipe(z.coerce.number().positive()) });
