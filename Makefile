.PHONY: default
default: jsondir docdir ;

errors:
	bin/error_response.sh > errorResponce.yaml
	node bin/errors.js > errors.md
	
jsondir:
	rm -rf ./schemas-json
	bin/jsondir.sh
	
docdir:
	rm -rf ./doc
	jsonschema2md -o doc -d schemas-json -t templates/md
	
test_dev:
	ENDPOINT=http://api2.dev.gbooking.ru/rpc node bin/test_dev.js

test_prod:
	ENDPOINT=http://apiv2.gbooking.ru/rpc node bin/test_prod.js
