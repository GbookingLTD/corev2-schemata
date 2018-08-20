.PHONY: default
default: jsondir docdir ;

jsonschema2md_install:
	git clone git@github.com:swvitaliy/jsonschema2md.git
	cd jsonschema2md && npm install
	npm link
	cd ..

mderrors:
	bin/errorResponse.sh > errorResponce.yaml
	node bin/errors.js > errors.md
	
jsondir:
	rm -rf ./schemas-json
	bin/jsondir.sh
	
docdir:
	rm -rf ./doc
	jsonschema2md -o doc -d schemas-json -t templates/md
