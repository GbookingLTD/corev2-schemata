# appointment.client_confirm_appointment.request Schema

```
schemas-json/controllers/appointment/client_confirm_appointment.request.schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                                                                               |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | Yes        | Experimental | No           | Forbidden         | Permitted             | [controllers/appointment/client_confirm_appointment.request.schema.json](client_confirm_appointment.request.schema.json) |

# appointment.client_confirm_appointment.request Definitions

| Property                    | Type     | Group                                                                                                                 |
| --------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------- |
| [appointment](#appointment) | `object` | `schemas-json/controllers/appointment/client_confirm_appointment.request.schema.json#/definitions/ConfirmAppointment` |
| [client](#client)           | `object` | `schemas-json/controllers/appointment/client_confirm_appointment.request.schema.json#/definitions/ConfirmAppointment` |

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

# appointment.client_confirm_appointment.request Properties

| Property          | Type     | Required     | Nullable | Defined by                                                   |
| ----------------- | -------- | ------------ | -------- | ------------------------------------------------------------ |
| [params](#params) | `object` | **Required** | No       | appointment.client_confirm_appointment.request (this schema) |
| `*`               | any      | Additional   | Yes      | this schema _allows_ additional properties                   |

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
