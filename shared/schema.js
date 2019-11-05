const Joi = require('joi')

const authDataSchema = Joi.object({
  username: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .required()
    .strict()
})

const userCreateDataSchema = Joi.object({
  UserName: Joi.string()
    .email()
    .required(),
  Password: Joi.string()
    .required()
    .strict(),
  FullName: Joi.string()
    .required()
    .strict(),
  RoleId: Joi.string()
    .required()
    .strict()
})

const updateCreateDataSchema = Joi.object({
  UserName: Joi.string()
    .email()
    .required(),
  FullName: Joi.string()
    .required()
    .strict(),
  RoleId: Joi.string()
    .required()
    .strict(),
  Id: Joi.string()
    .required()
    .strict()
})

// export the schemas
module.exports = {
    '/api/account/login': authDataSchema,
    '/api/setup/user/create' : userCreateDataSchema,
    '/api/setup/user/update' : updateCreateDataSchema
  }