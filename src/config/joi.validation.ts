import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  PORT: Joi.number().default(3001),
  MONGODB: Joi.string().required(),
  DB_NAME: Joi.string().default('pokemon'),
});
