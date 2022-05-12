const HTTP_STATUS = {
  OK: { CODE: 200, DESCRIPTION: 'Ok' },
  CREATED: { CODE: 201, DESCRIPTION: 'Created' },
  NO_CONTENT: { CODE: 204, DESCRIPTION: 'Ok, no content' },

  BAD_REQUEST: { CODE: 400, DESCRIPTION: 'Bad request exception' },
  UNAUTHORIZED: { CODE: 401, DESCRIPTION: 'Unauthorized exception' },
  FORBIDEN: { CODE: 403, DESCRIPTION: 'Forbiden exception' },
  NOT_FOUND: { CODE: 404, DESCRIPTION: 'Not found exception' },
  UNPROCESSABLE_ENTITY: { CODE: 422, DESCRIPTION: 'Validation exception' },

  INTERNAL_SERVER: { CODE: 500, DESCRIPTION: 'Internal server exception' }
}

export default  HTTP_STATUS 