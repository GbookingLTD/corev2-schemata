.PHONY: default
default: jsondir docdir ;

jsonschema2md_install:
	git clone git@github.com:swvitaliy/jsonschema2md.git
	cd jsonschema2md && npm install
	npm link
	cd ..

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
	ENDPOINT=http://api2.dev.gbooking.ru/rpc node bin/req.js

test_prod:
	ENDPOINT=http://apiv2.gbooking.ru/rpc node bin/req.js
