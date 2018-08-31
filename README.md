# CoreV2 Schemata

This is json-schema for gbooking api. 
The main idea for what it is supporting of documentation in actual state. 
The corev2-schemata link to corev2 as npm module and validate request and response schema if it exists. 
It validate model schema and __pass error in development environment if data is not match schema__.

Please do not remove validating from corev2 if was parse error. 
It can broke communication between GBooking/MedMe platform and our customers. Instead of it if you have Parse error response 
you need to fix json-schema.

