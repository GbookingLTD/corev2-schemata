js2md=node_modules/.bin/jsonschema2md

.PHONY: default
default: json docu ;

errors:
	bin/error_response.sh > errorResponce.yaml
	node bin/errors.js > errors.md
	
json:
	rm -rf ./schemas-json
	bin/jsondir.sh
	
docu:
	rm -rf ./doc
	$(js2md) -o doc -d schemas-json -t templates/md
	
test_dev:
	ENDPOINT=http://api2.dev.gbooking.ru/rpc node bin/test_dev.js

test_prod:
	ENDPOINT=http://apiv2.gbooking.ru/rpc node bin/test_prod.js
