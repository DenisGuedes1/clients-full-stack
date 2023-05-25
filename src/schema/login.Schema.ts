import { z } from "zod";

const createdLoginSchema = z.object({
  email: z.string().email().min(10).max(45),
  password: z.string().max(120),
});

export { createdLoginSchema };
