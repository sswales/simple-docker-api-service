import Joi from 'joi';

const validateEndpointOneRequestBody = (requestBody: any) => {
  const schema = Joi.object({
    email: Joi.string().min(1).required(),
  });

  return schema.validate(requestBody);
};

const validateEndpointTwoRequestBody = (requestBody: any) => {
  const schema = Joi.object({
    email: Joi.string().min(1).required(),
  });

  return schema.validate(requestBody);
};

export { validateEndpointOneRequestBody, validateEndpointTwoRequestBody };
