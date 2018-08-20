#!/bin/sh

ERROR_CODES=`node ./bin/errorCodes.js | awk '{ print "            - " $1; }'`

cat << EOF
ErrorResponseSchema:
  properties:
    jsonrpc:
      description: "версия протокола (2.0)"
      type: "string"
      enum: ["2.0"]
    id:
      description: "значение числового типа для идентификации запроса на сервере"
      type: "string"
    error:
      description: "объект, содержащий информацию об ошибке"
      type: "object"
      properties:
        code:
          type: "number"
          enum:
$ERROR_CODES
        message:
          type: "string"
        data:
          type: "string"

  required: ["jsonrpc", "id", "error"]
EOF