js2md=jsonschema2md
qt=quicktype

.PHONY: default
default: json docu gen_java gen_csharp gen_typescript gen_golang gen_python

errors:
	bin/error_response.sh > errorResponce.yaml
	node bin/errors.js > errors.md

gen_java: clear_java
	$(qt) --src-lang schema ./schemas-json -l java -o ./langs/java/* \
		--package ru.gbooking.apiv2 \
		--array-type list

clear_java:
	rm ./langs/java/*

gen_csharp: clear_csharp
	$(qt) --src-lang schema ./schemas-json -l csharp -o ./langs/csharp/GBookingAPIv2.cs \
		--namespace GBookingAPIv2 \
		--csharp-version 6 \
		--number-type double \
		--features complete \
		--array-type list

clear_csharp:
	rm -f ./langs/csharp/*

gen_typescript: clear_typescript
	$(qt) --src-lang schema ./schemas-json -l typescript -o ./langs/typescript/GBookingAPIv2.ts \
		--explicit-unions \
		--runtime-typecheck \
		--acronym-style camel \
		--converters top-level

clear_typescript:
	rm -f ./langs/typescript/*

gen_golang: clear_golang
	$(qt) --src-lang schema ./schemas-json -l golang -o ./langs/golang/* \
		--package ru.gbooking.apiv2 \
		--multi-file-output

clear_golang:
	rm -f ./langs/golang/*

gen_python: clear_python
	$(qt) --src-lang schema ./schemas-json -l python -o ./langs/python/GBookingAPIv2.py \
		--python-version 3.6 \
		--nice-property-names

clear_python:
	rm -f ./langs/python/*

json: spellcheck
	rm -rf ./schemas-json
	bin/jsongen.sh

docu: spellcheck
	rm -rf ./docs
	$(js2md) -o docs -d schemas-json

spellcheck:
	node load.js

test_dev:
	ENDPOINT=http://api2.dev.gbooking.ru/rpc node bin/test_dev.js

test_prod:
	ENDPOINT=http://apiv2.gbooking.ru/rpc node bin/test_prod.js
