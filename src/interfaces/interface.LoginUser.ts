import { z } from "zod";
import { createdLoginSchema } from "../schema/login.Schema";

type Tlogin = z.infer<typeof createdLoginSchema>;

export { Tlogin };

