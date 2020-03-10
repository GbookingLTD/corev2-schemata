# appointment.client_remove_empty_appointment.request Schema

```
schemas-json/controllers/appointment/client_remove_empty_appointment.request.schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                                                                                         |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | Yes        | Experimental | No           | Forbidden         | Permitted             | [controllers/appointment/client_remove_empty_appointment.request.schema.json](client_remove_empty_appointment.request.schema.json) |

# appointment.client_remove_empty_appointment.request Definitions

| Property                    | Type     | Group                                                                                                                          |
| --------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [appointment](#appointment) | `object` | `schemas-json/controllers/appointment/client_remove_empty_appointment.request.schema.json#/definitions/RemoveEmptyAppointment` |
| [business](#business)       | `object` | `schemas-json/controllers/appointment/client_remove_empty_appointment.request.schema.json#/definitions/RemoveEmptyAppointment` |

## appointment

`appointment`

- is **required**
- type: `object`
- defined in this schema

### appointment Type

`object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `id`     | string | **Required** |

#### id

`id`

- is **required**
- type: `string`

##### id Type

`string`

## business

`business`

- is **required**
- type: `object`
- defined in this schema

### business Type

`object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `id`     | string | **Required** |

#### id

`id`

- is **required**
- type: `string`

##### id Type

`string`

# appointment.client_remove_empty_appointment.request Properties

| Property          | Type     | Required     | Nullable | Defined by                                                        |
| ----------------- | -------- | ------------ | -------- | ----------------------------------------------------------------- |
| [params](#params) | `object` | **Required** | No       | appointment.client_remove_empty_appointment.request (this schema) |
| `*`               | any      | Additional   | Yes      | this schema _allows_ additional properties                        |

## params

`params`

- is **required**
- type: `object`
- defined in this schema

### params Type

`object` with following properties:

| Property      | Type   | Required     |
| ------------- | ------ | ------------ |
| `appointment` | object | **Required** |
| `business`    | object | **Required** |

#### appointment

`appointment`

- is **required**
- type: `object`

##### appointment Type

`object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `id`     | string | **Required** |

#### id

`id`

- is **required**
- type: `string`

##### id Type

`string`

#### business

`business`

- is **required**
- type: `object`

##### business Type

`object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `id`     | string | **Required** |

#### id

`id`

- is **required**
- type: `string`

##### id Type

`string`

**All** of the following _requirements_ need to be fulfilled.

#### Requirement 1

- []() – `../../common/request.schema.json`

#### Requirement 2

- []() – `#/definitions/Request`
