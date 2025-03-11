import { z } from "zod";

export const loginSchema = () =>
  z.object({
    email: z
      .string()
      .nonempty({ message: "Email is required" })
      .email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .max(50, { message: "Password must not exceed 50 characters" })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/\d/, { message: "Password must contain at least one number" })
      .regex(/[@$!%*?&^#()_+=[\]{}|\\:;"'<>,./]/, {
        message: "Password must contain at least one special character",
      })
      .refine((value) => value.length > 0, {
        message: "Password is required",
      }),
  });
