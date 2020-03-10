# appointment.client_remove_empty_appointment.response Schema

```
schemas-json/controllers/appointment/client_remove_empty_appointment.response.schema.json
```

| Abstract               | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                                                                                           |
| ---------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Cannot be instantiated | Yes        | Experimental | No           | Forbidden         | Permitted             | [controllers/appointment/client_remove_empty_appointment.response.schema.json](client_remove_empty_appointment.response.schema.json) |

# appointment.client_remove_empty_appointment.response Definitions

| Property            | Type     | Group                                                                                                                    |
| ------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------ |
| [error](#error)     | complex  | `schemas-json/controllers/appointment/client_remove_empty_appointment.response.schema.json#/definitions/ErrorCodes`      |
| [id](#id)           | `number` | `schemas-json/controllers/appointment/client_remove_empty_appointment.response.schema.json#/definitions/SuccessResponse` |
| [jsonrpc](#jsonrpc) | `const`  | `schemas-json/controllers/appointment/client_remove_empty_appointment.response.schema.json#/definitions/SuccessResponse` |
| [result](#result)   | `object` | `schemas-json/controllers/appointment/client_remove_empty_appointment.response.schema.json#/definitions/SuccessResponse` |

## error

`error`

- is **required**
- type: complex
- defined in this schema

### error Type

**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

- []() – `../../common/partials/authErrorCodes.schema.json`

#### Condition 2

`object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `code`   | number | **Required** |

#### code

код ошибки

`code`

- is **required**
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#-known-values).

##### code Known Values

| Value    | Description                                            |
| -------- | ------------------------------------------------------ |
| `-10000` | UNKNOWN_ERROR - Unknown error occurred                 |
| `-10200` | BUSINESS_RETRIEVE_FAILED - Failed to retrieve business |

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

`object`, nullable, with following properties:

| Property      | Type   | Required     |
| ------------- | ------ | ------------ |
| `appointment` | object | **Required** |

#### appointment

`appointment`

- is **required**
- type: `object`

##### appointment Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

- []() – `#/definitions/SuccessResponse`

#### Condition 2

- []() – `#/definitions/ErrorResponse`
