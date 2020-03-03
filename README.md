# CoreV2 Schemata

This is json-schema for gbooking api. 
The main idea for what it is supporting of documentation in actual state. 
The corev2-schemata link to corev2 as npm module and validate request and response schema if it exists. 
It validate model schema and __pass error in development environment if data is not match schema__.

Please do not remove validating from corev2 if was parse error. 
It can broke communication between GBooking/MedMe platform and our customers. Instead of it if you have Parse error response 
you need to fix json-schema.

## Installation

This is nodejs npm module. It should be installed to corev2 project (package.json file should contain this one in deps).
When you need to update changes or install this module first time run `npm install corev2-schemata`.

Before updating the doc need to install adobe/jsonschema2md:

````
npm install
````

For generate of code you need install `quicktype` globally:

````
npm install -g quicktype
````

## Updating schemas

If you need to check remote data (response from dev or prod servers) you can run `make test_dev` or `make test_prod`.
It will check remote data with local schema. So, you can change schemas locally and commit changes when all tests will be ok.

All schemas has in `schemas` directory. Directory `schemas-json` was generated automatically.
Please, edit schema files only in `schemas` directory.

Validation applying only for requests contains in files 
 `schemas/controllers/<controller_name>/<method_name>.{request,response}.yaml`. Like this
 
````
  schemas/controllers/business/get_profile_by_id.response.yaml
  
````

It will get to corev2 validate response of business.get_profile_by_id response. If you need to validate request you can change ending of filename to `.request.yaml`. 

## Tests

All tests contains in `bin/test_dev.js` for dev server and in `bin/test_prod.js` file for prod env.
If you need to change or add more tests, please, edit these files.
  
## Documentation

If you need to generate documentation please run `make` command. It will recreate `doc` folder.
