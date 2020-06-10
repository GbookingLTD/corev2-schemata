# business.get_profile_by_id.response Schema

```
schemas-json/controllers/business/get_profile_by_id.response.schema.json
```

| Abstract               | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                                                            |
| ---------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ----------------------------------------------------------------------------------------------------- |
| Cannot be instantiated | Yes        | Experimental | No           | Forbidden         | Permitted             | [controllers/business/get_profile_by_id.response.schema.json](get_profile_by_id.response.schema.json) |

# business.get_profile_by_id.response Definitions

| Property            | Type     | Group                                                                                                   |
| ------------------- | -------- | ------------------------------------------------------------------------------------------------------- |
| [error](#error)     | complex  | `schemas-json/controllers/business/get_profile_by_id.response.schema.json#/definitions/ErrorCodes`      |
| [id](#id)           | `number` | `schemas-json/controllers/business/get_profile_by_id.response.schema.json#/definitions/SuccessResponse` |
| [jsonrpc](#jsonrpc) | `const`  | `schemas-json/controllers/business/get_profile_by_id.response.schema.json#/definitions/SuccessResponse` |
| [result](#result)   | `object` | `schemas-json/controllers/business/get_profile_by_id.response.schema.json#/definitions/SuccessResponse` |

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

- is optional
- type: `number`
- defined in this schema

### id Type

`number`

## jsonrpc

версия протокола (2.0)

`jsonrpc`

- is optional
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

| Property                | Type    | Required     | Default |
| ----------------------- | ------- | ------------ | ------- |
| `active`                | boolean | Optional     |         |
| `business`              |         | **Required** |         |
| `freeSms`               | number  | Optional     | `0`     |
| `monthlyFreeSms`        | number  | Optional     | `0`     |
| `networks`              | array   | Optional     |         |
| `profiles`              | array   | Optional     |         |
| `top_services`          | object  | Optional     |         |
| `useDefaultSmsTemplate` | boolean | Optional     | `true`  |
| `yandexFeedType`        | string  | Optional     | `"no"`  |

#### active

`active`

- is optional
- type: `boolean`

##### active Type

`boolean`

#### business

`business`

- is **required**
- type: reference

##### business Type

- []() – `../../models/business.schema.json`

#### freeSms

`freeSms`

- is optional
- type: `number`
- default: `0`

##### freeSms Type

`number`

#### monthlyFreeSms

`monthlyFreeSms`

- is optional
- type: `number`
- default: `0`

##### monthlyFreeSms Type

`number`

#### networks

`networks`

- is optional
- type: `object[]`

##### networks Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property       | Type   | Required     |
| -------------- | ------ | ------------ |
| `address`      |        | Optional     |
| `businessName` | string | **Required** |
| `description`  | string | **Required** |
| `internalID`   | string | **Required** |

#### address

`address`

- is optional
- type: reference

##### address Type

- []() – `../../models/addressCamelCase.schema.json`

#### businessName

`businessName`

- is **required**
- type: `string`

##### businessName Type

`string`

#### description

`description`

- is **required**
- type: `string`

##### description Type

`string`

#### internalID

`internalID`

- is **required**
- type: `string`

##### internalID Type

`string`

#### profiles

`profiles`

- is optional
- type: `object[]`

##### profiles Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


#### top_services

`top_services`

- is optional
- type: `object`

##### top_services Type

`object` with following properties:

| Property   | Type    | Required     | Default |
| ---------- | ------- | ------------ | ------- |
| `services` | array   | **Required** |         |
| `status`   | boolean | **Required** | `false` |

#### services

`services`

- is **required**
- type: `string[]`

##### services Type

Array type: `string[]`

All items must be of the type: `string`

#### status

`status`

- is **required**
- type: `boolean`
- default: `false`

##### status Type

`boolean`

#### useDefaultSmsTemplate

`useDefaultSmsTemplate`

- is optional
- type: `boolean`
- default: `true`

##### useDefaultSmsTemplate Type

`boolean`

#### yandexFeedType

`yandexFeedType`

- is optional
- type: `enum`
- default: `"no"`

The value of this property **must** be equal to one of the [known values below](#result-known-values).

##### yandexFeedType Known Values

| Value                 | Description |
| --------------------- | ----------- |
| `static`              |             |
| `dynamic`             |             |
| `static-service-only` |             |
| `no`                  |             |

**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

- []() – `#/definitions/SuccessResponse`

#### Condition 2

- []() – `#/definitions/ErrorResponse`
