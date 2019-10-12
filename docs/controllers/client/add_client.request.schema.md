
# client.add_client.request Schema


## Schema Hierarchy

* client.add_client.request `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/controllers/client/add_client.request.schema.json`
  * [Request](../../common/request.schema.md) `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/common/request.schema.json`



| Property | Type | Required |
|----------|------|----------|
| [params](#params) | `object` | Optional | [Request](../../common/request.schema.md#params) |
| [jsonrpc](#jsonrpc) | `const` | Optional | [Request](../../common/request.schema.md#jsonrpc) |
| [id](#id) | `number` | Optional | [Request](../../common/request.schema.md#id) |
| [cred](#cred) | complex | Optional | [Request](../../common/request.schema.md#cred) |
| [method](#method) | `string` | Optional | [Request](../../common/request.schema.md#method) |
| `*` | any | Additional | this schema *allows* additional properties |

## cred

авторизационные параметры

`cred`
* is optional
* type: complex
* defined in [Request](../../common/request.schema.md#cred)

### cred type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



#### Condition 2







## id

значение числового типа для идентификации запроса на сервере

`id`
* is optional
* type: `number`
* defined in [Request](../../common/request.schema.md#id)

### id type


`number`






## jsonrpc

версия протокола (2.0)

`jsonrpc`
* is optional
* type: `const`
* defined in [Request](../../common/request.schema.md#jsonrpc)

The value of this property **must** be equal to:

```json
"2.0"
```





## method

название json-rpc метода

`method`
* is optional
* type: `string`
* defined in [Request](../../common/request.schema.md#method)

### method type


`string`






## params

параметры запроса

`params`
* is optional
* type: `object`
* defined in [Request](../../common/request.schema.md#params)

### params type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|





