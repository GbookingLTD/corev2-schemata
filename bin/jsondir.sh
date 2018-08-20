#!/usr/bin/env bash

find schemas | egrep ".*\.yaml$" | for i in `xargs`; do
  path=$(dirname ${i} | sed --expression="s/^schemas/schemas-json/") 
  mkdir -p ${path}
  target=$(echo ${i} | sed --expression="s/^schemas/schemas-json/" | sed --expression="s/\.yaml$/.schema.json/")
  echo "${i} -> ${target}"
  cat ${i} | node bin/yaml2json.js > ${target}
done