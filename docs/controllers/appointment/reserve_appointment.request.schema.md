# appointment.reserve_appointment.request Schema

```
schemas-json/controllers/appointment/reserve_appointment.request.schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                                                                 |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ---------------------------------------------------------------------------------------------------------- |
| Can be instantiated | Yes        | Experimental | No           | Forbidden         | Permitted             | [controllers/appointment/reserve_appointment.request.schema.json](reserve_appointment.request.schema.json) |

# appointment.reserve_appointment.request Definitions

| Property                              | Type     | Group                                                                                                          |
| ------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------- |
| [appointment](#appointment)           | `object` | `schemas-json/controllers/appointment/reserve_appointment.request.schema.json#/definitions/AppointmentReserve` |
| [business](#business)                 | `object` | `schemas-json/controllers/appointment/reserve_appointment.request.schema.json#/definitions/AppointmentReserve` |
| [originBusinessID](#originbusinessid) | `string` | `schemas-json/controllers/appointment/reserve_appointment.request.schema.json#/definitions/AppointmentReserve` |
| [resource](#resource)                 | `object` | `schemas-json/controllers/appointment/reserve_appointment.request.schema.json#/definitions/AppointmentReserve` |
| [source](#source)                     | `string` | `schemas-json/controllers/appointment/reserve_appointment.request.schema.json#/definitions/AppointmentReserve` |
| [taxonomy](#taxonomy)                 | `object` | `schemas-json/controllers/appointment/reserve_appointment.request.schema.json#/definitions/AppointmentReserve` |

## appointment

`appointment`

- is **required**
- type: `object`
- defined in this schema

### appointment Type

`object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `start`  | string | **Required** |

#### start

`start`

- is **required**
- type: `string`

##### start Type

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

## originBusinessID

`originBusinessID`

- is optional
- type: `string`
- defined in this schema

### originBusinessID Type

`string`, nullable

## resource

`resource`

- is **required**
- type: `object`
- defined in this schema

### resource Type

`object` with following properties:

| Property | Type | Required     |
| -------- | ---- | ------------ |
| `id`     |      | **Required** |

#### id

`id`

- is **required**
- type: complex

##### id Type

**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

`string`

#### Condition 2

Array type:

All items must be of the type: `string`

## source

`source`

- is **required**
- type: `string`
- defined in this schema

### source Type

`string`

## taxonomy

`taxonomy`

- is **required**
- type: `object`
- defined in this schema

### taxonomy Type

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

# appointment.reserve_appointment.request Properties

| Property          | Type     | Required     | Nullable | Defined by                                            |
| ----------------- | -------- | ------------ | -------- | ----------------------------------------------------- |
| [params](#params) | `object` | **Required** | No       | appointment.reserve_appointment.request (this schema) |
| `*`               | any      | Additional   | Yes      | this schema _allows_ additional properties            |

## params

`params`

- is **required**
- type: `object`
- defined in this schema

### params Type

`object` with following properties:

| Property           | Type        | Required     |
| ------------------ | ----------- | ------------ |
| `appointment`      | object      | **Required** |
| `business`         | object      | **Required** |
| `originBusinessID` | string,null | Optional     |
| `resource`         | object      | **Required** |
| `source`           | string      | **Required** |
| `taxonomy`         | object      | **Required** |

#### appointment

`appointment`

- is **required**
- type: `object`

##### appointment Type

`object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `start`  | string | **Required** |

#### start

`start`

- is **required**
- type: `string`

##### start Type

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

#### originBusinessID

`originBusinessID`

- is optional
- type: `string`

##### originBusinessID Type

`string`, nullable

#### resource

`resource`

- is **required**
- type: `object`

##### resource Type

`object` with following properties:

| Property | Type | Required     |
| -------- | ---- | ------------ |
| `id`     |      | **Required** |

#### id

`id`

- is **required**
- type: complex

##### id Type

**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

`string`

#### Condition 2

Array type:

All items must be of the type: `string`

#### source

`source`

- is **required**
- type: `string`

##### source Type

`string`

#### taxonomy

`taxonomy`

- is **required**
- type: `object`

##### taxonomy Type

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
