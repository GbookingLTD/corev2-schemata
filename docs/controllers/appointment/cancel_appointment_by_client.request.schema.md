# appointment.cancel_appointment_by_client.request Schema

```
schemas-json/controllers/appointment/cancel_appointment_by_client.request.schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                                                                                   |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | Yes        | Experimental | No           | Forbidden         | Permitted             | [controllers/appointment/cancel_appointment_by_client.request.schema.json](cancel_appointment_by_client.request.schema.json) |

# appointment.cancel_appointment_by_client.request Definitions

| Property                    | Type     | Group                                                                                                                          |
| --------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [appointment](#appointment) | `object` | `schemas-json/controllers/appointment/cancel_appointment_by_client.request.schema.json#/definitions/CancelAppointmentByClient` |
| [client](#client)           | `object` | `schemas-json/controllers/appointment/cancel_appointment_by_client.request.schema.json#/definitions/CancelAppointmentByClient` |

## appointment

`appointment`

- is **required**
- type: `object`
- defined in this schema

### appointment Type

`object` with following properties:

| Property  | Type   | Required     |
| --------- | ------ | ------------ |
| `id`      | string | **Required** |
| `shortId` | string | Optional     |

#### id

`id`

- is **required**
- type: `string`

##### id Type

`string`

#### shortId

`shortId`

- is optional
- type: `string`

##### shortId Type

`string`

## client

`client`

- is **required**
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

# appointment.cancel_appointment_by_client.request Properties

| Property          | Type     | Required     | Nullable | Defined by                                                     |
| ----------------- | -------- | ------------ | -------- | -------------------------------------------------------------- |
| [params](#params) | `object` | **Required** | No       | appointment.cancel_appointment_by_client.request (this schema) |
| `*`               | any      | Additional   | Yes      | this schema _allows_ additional properties                     |

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
| `client`      | object | **Required** |

#### appointment

`appointment`

- is **required**
- type: `object`

##### appointment Type

`object` with following properties:

| Property  | Type   | Required     |
| --------- | ------ | ------------ |
| `id`      | string | **Required** |
| `shortId` | string | Optional     |

#### id

`id`

- is **required**
- type: `string`

##### id Type

`string`

#### shortId

`shortId`

- is optional
- type: `string`

##### shortId Type

`string`

#### client

`client`

- is **required**
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
