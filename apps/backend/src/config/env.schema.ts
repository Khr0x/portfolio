import * as Joi from 'joi';

export const envSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),

  PORT: Joi.number().default(3000),

  SUPABASE_JWT_SECRET: Joi.string().required(),
  SUPABASE_URL: Joi.string().uri().required(),
});