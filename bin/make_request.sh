#!/bin/bash

CONTROLLER=$1
METHOD=$2
FILE=schemas/controllers/${CONTROLLER}/${METHOD}.request.yaml

echo "Generate request scaffolding to file ${FILE}"
echo "Controller: ${CONTROLLER}"
echo "Method: ${METHOD}"

mkdir -p schemas/controllers/${CONTROLLER}

cat > ${FILE} << REQ
\$id: "http://git.dev.gbooking.ru/corev2-schemata/schemas-json/controllers/${CONTROLLER}/${METHOD}.request.schema.json"
title: "${CONTROLLER}.${METHOD}.request"
type: "object"
definitions:
  Request:
    type: "object"
    required: ["params"]
    properties:
      params:
        description: "параметры запроса"
        type: "object"
        additionalProperties: false
        required:
          # TODO Declare required params here ...
        properties:
          # TODO Declare params here ...
    
allOf:
  - \$ref: "http://git.dev.gbooking.ru/corev2-schemata/schemas-json/common/request.schema.json"
  - \$ref: "#/definitions/Request"

REQ