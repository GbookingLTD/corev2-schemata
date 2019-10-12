
# Request Schema

json-rpc-2 запрос




| Property | Type | Required |
|----------|------|----------|
| [jsonrpc](#jsonrpc) | `const` | **Required** | Request (this schema) |
| [id](#id) | `number` | **Required** | Request (this schema) |
| [cred](#cred) | complex | Optional | Request (this schema) |
| [method](#method) | `string` | **Required** | Request (this schema) |
| [params](#params) | `object` | **Required** | Request (this schema) |

## cred

авторизационные параметры

`cred`
* is optional
* type: complex
* defined in this schema

### cred type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



#### Condition 2







## id

значение числового типа для идентификации запроса на сервере

`id`
* is **required**
* type: `number`
* defined in this schema

### id type


`number`






## jsonrpc

версия протокола (2.0)

`jsonrpc`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"2.0"
```





## method

название json-rpc метода

`method`
* is **required**
* type: `string`
* defined in this schema

### method type


`string`






## params

параметры запроса

`params`
* is **required**
* type: `object`
* defined in this schema

### params type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|





