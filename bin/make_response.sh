#!/bin/bash

CONTROLLER=$1
METHOD=$2
FILE=schemas/controllers/${CONTROLLER}/${METHOD}.response.yaml

echo "Generate response scaffolding to file ${FILE}"
echo "Controller: ${CONTROLLER}"
echo "Method: ${METHOD}"

mkdir -p schemas/controllers/${CONTROLLER}

cat > ${FILE} << RESP
\$id: "http://git.dev.gbooking.ru/corev2-schemata/schemas-json/controllers/business/${CONTROLLER}.${METHOD}.schema.json"
title: "${CONTROLLER}.${METHOD}.response"
type: "object"
definitions:
  ErrorCodes:
    type: "object"
    required: ["error"]
    additionalProperties: true
    properties:
      error:
        oneOf:
          - $ref: "http://git.dev.gbooking.ru/corev2-schemata/schemas-json/common/partials/authErrorCodes.yaml"
          - type: "object"
            required: ["code"]
            additionalProperties: true
            properties:
              code:
                description: "код ошибки"
                type: "number"
                enum:
                  # TODO Declare error codes here
                meta:enum:
                  # TODO Declare meta for error codes here
  
  ErrorResponse:
    allOf:
    - \$ref: "http://git.dev.gbooking.ru/corev2-schemata/schemas-json/common/errorResponse.schema.json"
    - \$ref: "#/definitions/ErrorCodes"
    
  SuccessResponse:
    type: "object"
    properties:
      result:
        description: "данные, передаваемые в ответ"
        type: "object"
        required:
          # TODO Declare required required here 
        properties:
          # TODO Declare result properties here 
        
    required:
    - "result"

oneOf:
- \$ref: "#/definitions/SuccessResponse"
- \$ref: "#/definitions/ErrorResponse"

RESP