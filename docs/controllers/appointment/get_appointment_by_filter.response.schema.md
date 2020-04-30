# appointment.get_appointment_by_filter.response Schema

```
schemas-json/controllers/appointment/get_appointment_by_filter.response.schema.json
```

| Abstract               | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                                                                               |
| ---------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Cannot be instantiated | Yes        | Experimental | No           | Forbidden         | Permitted             | [controllers/appointment/get_appointment_by_filter.response.schema.json](get_appointment_by_filter.response.schema.json) |

# appointment.get_appointment_by_filter.response Definitions

| Property                    | Type      | Group                                                                                                                                              |
| --------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| [data](#data)               | reference | `schemas-json/controllers/appointment/get_appointment_by_filter.response.schema.json#/definitions/AppointmentGetAppointmentByFilterResponseResult` |
| [error](#error)             | complex   | `schemas-json/controllers/appointment/get_appointment_by_filter.response.schema.json#/definitions/ErrorCodes`                                      |
| [id](#id)                   | `number`  | `schemas-json/controllers/appointment/get_appointment_by_filter.response.schema.json#/definitions/SuccessResponse`                                 |
| [jsonrpc](#jsonrpc)         | `const`   | `schemas-json/controllers/appointment/get_appointment_by_filter.response.schema.json#/definitions/SuccessResponse`                                 |
| [page](#page)               | `number`  | `schemas-json/controllers/appointment/get_appointment_by_filter.response.schema.json#/definitions/AppointmentGetAppointmentByFilterResponseResult` |
| [result](#result)           | reference | `schemas-json/controllers/appointment/get_appointment_by_filter.response.schema.json#/definitions/SuccessResponse`                                 |
| [total](#total)             | `number`  | `schemas-json/controllers/appointment/get_appointment_by_filter.response.schema.json#/definitions/AppointmentGetAppointmentByFilterResponseResult` |
| [unconfirmed](#unconfirmed) | `number`  | `schemas-json/controllers/appointment/get_appointment_by_filter.response.schema.json#/definitions/AppointmentGetAppointmentByFilterResponseResult` |

## data

`data`

- is **required**
- type: reference
- defined in this schema

### data Type

Array type: reference

All items must be of the type:

- []() – `../../models/appointment.schema.json`

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

| Value    | Description                                                                                        |
| -------- | -------------------------------------------------------------------------------------------------- |
| `-10000` | UNKNOWN_ERROR - Unknown error occurred                                                             |
| `-10001` | BUSINESS_DATA_MISSING - Business data missing                                                      |
| `-10200` | BUSINESS_RETRIEVE_FAILED - Failed to retrieve business                                             |
| `-11800` | CLIENT_IN_BLACKLIST - Client in blacklist                                                          |
| `-14100` | APPOINTMENT_CREATE_FAILED - Failed to create appointment                                           |
| `-14500` | APPOINTMENT_DATA_MISSING - Appointment data missing                                                |
| `-14600` | APPOINTMENT_RESOURCE_TAXONOMY_MISMATCH - Selected resource cannot supply requested service         |
| `-14610` | APPOINTMENT_RESOURCE_TAXONOMY_UNAVAILABLE - Selected resource no longer provides requested service |
| `-14650` | APPOINTMENT_RESOURCE_BUSY - Resources are busy at requested time                                   |
| `-14700` | APPOINTMENT_CAPACITY_REACHED - Selected taxonomy capacity reached                                  |
| `-14800` | APPOINTMENT_ALLOEWD_TAXONOMIES_LIMIT - Limit of 6 taxonomies                                       |
| `-14900` | APPOINTMENT_TIME_BEFORE_NOW - Appointmnet end time before now                                      |
| `-14901` | APPOINTMENT_TIME_RANGE_ERROR - Appointmnet filter day params has wrong interval                    |
| `-15200` | ORDER_RETRIEVE_FAILED - Failed to retrieve order                                                   |

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

## page

`page`

- is **required**
- type: `number`
- defined in this schema

### page Type

`number`

## result

`result`

- is **required**
- type: reference
- defined in this schema

### result Type

- []() – `#/definitions/AppointmentGetAppointmentByFilterResponseResult`

## total

`total`

- is **required**
- type: `number`
- defined in this schema

### total Type

`number`

## unconfirmed

`unconfirmed`

- is **required**
- type: `number`
- defined in this schema

### unconfirmed Type

`number`

**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

- []() – `#/definitions/SuccessResponse`

#### Condition 2

- []() – `#/definitions/ErrorResponse`
