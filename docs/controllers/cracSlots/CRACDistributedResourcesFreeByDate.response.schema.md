# Crac.CRACDistributedResourcesFreeByDate.response Schema

```
schemas-json/controllers/crackSlots/CRACDistributedResourcesFreeByDate.response.schema.json
```

| Abstract               | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                                                                                               |
| ---------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Cannot be instantiated | Yes        | Experimental | No           | Forbidden         | Permitted             | [controllers/cracSlots/CRACDistributedResourcesFreeByDate.response.schema.json](CRACDistributedResourcesFreeByDate.response.schema.json) |

# Crac.CRACDistributedResourcesFreeByDate.response Definitions

| Property          | Type       | Group                                                                                                                      |
| ----------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------- |
| [Free](#free)     | `object[]` | `schemas-json/controllers/crackSlots/CRACDistributedResourcesFreeByDate.response.schema.json#/definitions/Free`            |
| [error](#error)   | `object`   | `schemas-json/controllers/crackSlots/CRACDistributedResourcesFreeByDate.response.schema.json#/definitions/SuccessResponse` |
| [id](#id)         | `number`   | `schemas-json/controllers/crackSlots/CRACDistributedResourcesFreeByDate.response.schema.json#/definitions/SuccessResponse` |
| [result](#result) | reference  | `schemas-json/controllers/crackSlots/CRACDistributedResourcesFreeByDate.response.schema.json#/definitions/SuccessResponse` |

## Free

`Free`

- is **required**
- type: `object[]`
- defined in this schema

### Free Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property         | Type   | Required     |
| ---------------- | ------ | ------------ |
| `date`           | string | **Required** |
| `maxFreeMinutes` | number | **Required** |
| `resource`       | string | **Required** |
| `taxonomy`       | string | **Required** |

#### date

`date`

- is **required**
- type: `string`

##### date Type

`string`

- format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))

#### maxFreeMinutes

`maxFreeMinutes`

- is **required**
- type: `number`

##### maxFreeMinutes Type

`number`

#### resource

`resource`

- is **required**
- type: `string`

##### resource Type

`string`

#### taxonomy

`taxonomy`

- is **required**
- type: `string`

##### taxonomy Type

`string`

## error

`error`

- is **required**
- type: `object`
- defined in this schema

### error Type

`object`, nullable, with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## id

значение числового типа для идентификации запроса на сервере

`id`

- is **required**
- type: `number`
- defined in this schema

### id Type

`number`

## result

`result`

- is **required**
- type: reference
- defined in this schema

### result Type

- []() – `#/definitions/Free`

**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

- []() – `#/definitions/SuccessResponse`

#### Condition 2

- []() – `#/definitions/ErrorResponse`
