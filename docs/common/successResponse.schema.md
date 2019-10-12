# Success Response Schema

```
http://git.dev.gbooking.ru/corev2-schemata/schemas-json/common/successResponse.schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                        |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ----------------------------------------------------------------- |
| Can be instantiated | No         | Experimental | No           | Forbidden         | Forbidden             | [common/successResponse.schema.json](successResponse.schema.json) |

# Success Response Properties

| Property            | Type     | Required     | Nullable | Defined by                     |
| ------------------- | -------- | ------------ | -------- | ------------------------------ |
| [id](#id)           | `number` | **Required** | No       | Success Response (this schema) |
| [jsonrpc](#jsonrpc) | `const`  | **Required** | No       | Success Response (this schema) |
| [result](#result)   | `object` | **Required** | No       | Success Response (this schema) |

## id

значение числового типа для идентификации запроса на сервере

`id`

- is **required**
- type: `number`
- defined in this schema

### id Type

`number`

## jsonrpc

версия протокола (2.0)

`jsonrpc`

- is **required**
- type: `const`
- defined in this schema

The value of this property **must** be equal to:

```json
"2.0"
```

## result

данные, передаваемые в ответ

`result`

- is **required**
- type: `object`
- defined in this schema

### result Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |

