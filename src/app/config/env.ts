import { z } from "zod";

const envVariables = z.object({
  CLIENT_ID: z.string(),
  CLIENT_SECRET: z.string(),
  REDIRECT_URL: z.string(),
  MONGO_URI: z.string().url(),
  JWT_SECRET: z.string(),
});

envVariables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
