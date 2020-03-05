# CracSlots.GetCRACResourcesAndRooms.response Schema

```
schemas-json/controllers/crack-slots/GetCRACResourcesAndRooms.response.schema.json
```

| Abstract               | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                                                                           |
| ---------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Cannot be instantiated | Yes        | Experimental | No           | Forbidden         | Permitted             | [controllers/cracSlots/GetCRACResourcesAndRooms.response.schema.json](GetCRACResourcesAndRooms.response.schema.json) |

# CracSlots.GetCRACResourcesAndRooms.response Definitions

| Property                | Type       | Group                                                                                                             |
| ----------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------- |
| [available](#available) | `boolean`  | `schemas-json/controllers/crack-slots/GetCRACResourcesAndRooms.response.schema.json#/definitions/CutSlot`         |
| [duration](#duration)   | `number`   | `schemas-json/controllers/crack-slots/GetCRACResourcesAndRooms.response.schema.json#/definitions/CutSlot`         |
| [end](#end)             | `number`   | `schemas-json/controllers/crack-slots/GetCRACResourcesAndRooms.response.schema.json#/definitions/CutSlot`         |
| [error](#error)         | complex    | `schemas-json/controllers/crack-slots/GetCRACResourcesAndRooms.response.schema.json#/definitions/ErrorCodes`      |
| [id](#id)               | `number`   | `schemas-json/controllers/crack-slots/GetCRACResourcesAndRooms.response.schema.json#/definitions/SuccessResponse` |
| [jsonrpc](#jsonrpc)     | `const`    | `schemas-json/controllers/crack-slots/GetCRACResourcesAndRooms.response.schema.json#/definitions/SuccessResponse` |
| [result](#result)       | reference  | `schemas-json/controllers/crack-slots/GetCRACResourcesAndRooms.response.schema.json#/definitions/SuccessResponse` |
| [slots](#slots)         | `object[]` | `schemas-json/controllers/crack-slots/GetCRACResourcesAndRooms.response.schema.json#/definitions/CracSlots`       |
| [start](#start)         | `number`   | `schemas-json/controllers/crack-slots/GetCRACResourcesAndRooms.response.schema.json#/definitions/CutSlot`         |

## available

`available`

- is **required**
- type: `boolean`
- defined in this schema

### available Type

`boolean`

## duration

`duration`

- is **required**
- type: `number`
- defined in this schema

### duration Type

`number`

## end

`end`

- is **required**
- type: `number`
- defined in this schema

### end Type

`number`

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

| Value    | Description                            |
| -------- | -------------------------------------- |
| `-10000` | UNKNOWN_ERROR - Unknown error occurred |
| `-70300` | CRAC_PROXY_ERROR                       |

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

`result`

- is **required**
- type: reference
- defined in this schema

### result Type

- []() – `#/definitions/CracSlots`

## slots

`slots`

- is **required**
- type: `object[]`
- defined in this schema

### slots Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property     | Type   | Required     |
| ------------ | ------ | ------------ |
| `cutSlots`   | array  | **Required** |
| `resourceId` | string | **Required** |

#### cutSlots

`cutSlots`

- is **required**
- type: reference

##### cutSlots Type

Array type: reference

All items must be of the type:

- []() – `#/definitions/CutSlot`

#### resourceId

`resourceId`

- is **required**
- type: `string`

##### resourceId Type

`string`

## start

`start`

- is **required**
- type: `number`
- defined in this schema

### start Type

`number`

**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

- []() – `#/definitions/SuccessResponse`

#### Condition 2

- []() – `#/definitions/ErrorResponse`
