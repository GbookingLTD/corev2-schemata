# appointment.cancel_appointment_by_business.request Schema

```
schemas-json/controllers/appointment/cancel_appointment_by_business.request.schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                                                                                       |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | Yes        | Experimental | No           | Forbidden         | Permitted             | [controllers/appointment/cancel_appointment_by_business.request.schema.json](cancel_appointment_by_business.request.schema.json) |

# appointment.cancel_appointment_by_business.request Definitions

| Property                    | Type     | Group                                                                                                                    |
| --------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------ |
| [appointment](#appointment) | `object` | `schemas-json/controllers/appointment/cancel_appointment_by_business.request.schema.json#/definitions/CancelAppointment` |
| [client](#client)           | `object` | `schemas-json/controllers/appointment/cancel_appointment_by_business.request.schema.json#/definitions/CancelAppointment` |

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

## client

`client`

- is optional
- type: `object`
- defined in this schema

### client Type

`object` with following properties:

| Property  | Type   | Required     |
| --------- | ------ | ------------ |
| `comment` | string | Optional     |
| `id`      | string | **Required** |

#### comment

`comment`

- is optional
- type: `string`

##### comment Type

`string`

#### id

`id`

- is **required**
- type: `string`

##### id Type

`string`

# appointment.cancel_appointment_by_business.request Properties

| Property          | Type     | Required     | Nullable | Defined by                                                       |
| ----------------- | -------- | ------------ | -------- | ---------------------------------------------------------------- |
| [params](#params) | `object` | **Required** | No       | appointment.cancel_appointment_by_business.request (this schema) |
| `*`               | any      | Additional   | Yes      | this schema _allows_ additional properties                       |

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
| `client`      | object | Optional     |

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

#### client

`client`

- is optional
- type: `object`

##### client Type

`object` with following properties:

| Property  | Type   | Required     |
| --------- | ------ | ------------ |
| `comment` | string | Optional     |
| `id`      | string | **Required** |

#### comment

`comment`

- is optional
- type: `string`

##### comment Type

`string`

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
