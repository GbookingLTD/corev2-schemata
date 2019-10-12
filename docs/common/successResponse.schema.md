
# SuccessResponse Schema




| Property | Type | Required |
|----------|------|----------|
| [jsonrpc](#jsonrpc) | `const` | **Required** | SuccessResponse (this schema) |
| [id](#id) | `number` | **Required** | SuccessResponse (this schema) |
| [result](#result) | `object` | **Required** | SuccessResponse (this schema) |

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





## result

данные, передаваемые в ответ

`result`
* is **required**
* type: `object`
* defined in this schema

### result type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|





