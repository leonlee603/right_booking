import * as z from "zod/v4";
import { ZodSchema } from "zod/v4";

export const profileSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First Name must be at least 2 characters" }),
  lastName: z
    .string()
    .min(2, { message: "Last Name must be at least 2 characters" }),
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters" }),
});

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);
  
  if (!result.success) {
    const errors = result.error.issues.map((error) => error.message);

    throw new Error(errors.join(", "));
  }
  return result.data;
}
