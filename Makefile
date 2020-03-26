js2md=jsonschema2md
qt=quicktype
tsc=tsc

.PHONY: default
default: json docu gen_java gen_csharp gen_typescript gen_golang gen_python

errors:
	bin/error_response.sh > errorResponce.yaml
	node bin/errors.js > errors.md

gen_java: clear_java
	$(qt) -s schema ./schemas-json/CoreV2.schema.json -l java \
		-o ./langs/java/* \
		--package ru.gbooking.apiv2 \
		--no-just-types \
		--array-type list

clear_java:
	rm -f ./langs/java/*

gen_csharp: json clear_csharp
	$(qt) -s schema ./schemas-json/CoreV2.schema.json -l csharp \
		-o ./langs/csharp/GBookingCoreV2.cs \
		--namespace GBookingCoreV2 \
		--features complete \
		--csharp-version 6 \
		--number-type double \
		--array-type list

clear_csharp:
	rm -f ./langs/csharp/*

gen_typescript: json clear_typescript
	$(qt) -s schema ./schemas-json/CoreV2.schema.json -l ts \
 		-o ./langs/typescript/GBookingCoreV2.ts \
		--no-just-types \
		--explicit-unions \
		--runtime-typecheck \
		--acronym-style camel \
		--converters top-level && \
	$(tsc) --declaration langs/typescript/GBookingCoreV2.ts

clear_typescript:
	rm -f ./langs/typescript/*

gen_golang: json clear_golang
	$(qt) -s schema ./schemas-json/CoreV2.schema.json -l golang \
		-o ./langs/golang/GBookingCoreV2.go \
		--no-just-types \
		--package ru.gbooking.apiv2

clear_golang:
	rm -f ./langs/golang/*

gen_python: json clear_python
	$(qt) -s schema ./schemas-json/CoreV2.schema.json -l python \
		-o ./langs/python/GBookingCoreV2.py \
		--no-just-types \
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
	ENDPOINT=http://api2.dev.gbooking.ru/rpc node bin/test_dev.js $(GROUP)

test_prod:
	ENDPOINT=http://apiv2.gbooking.ru/rpc node bin/test_prod.js $(GROUP)

example_ts:
	tsc examples/typescript/business.get_profile_by_id.ts && \
		ENDPOINT=http://api2.dev.gbooking.ru/rpc node examples/typescript/business.get_profile_by_id.js


