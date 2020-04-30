# CracSlots.GetCRACInsuranceResourcesAndRooms.request Schema

```
schemas-json/controllers/crackSlots/GetCRACInsuranceResourcesAndRooms.request.schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                                                                                           |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | Yes        | Experimental | No           | Forbidden         | Permitted             | [controllers/cracSlots/GetCRACInsuranceResourcesAndRooms.request.schema.json](GetCRACInsuranceResourcesAndRooms.request.schema.json) |

# CracSlots.GetCRACInsuranceResourcesAndRooms.request Definitions

| Property                    | Type       | Group                                                                                                                   |
| --------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------- |
| [date](#date)               | `object`   | `schemas-json/controllers/crackSlots/GetCRACInsuranceResourcesAndRooms.request.schema.json#/definitions/Filters`        |
| [duration](#duration)       | `number`   | `schemas-json/controllers/crackSlots/GetCRACInsuranceResourcesAndRooms.request.schema.json#/definitions/ResourceFilter` |
| [id](#id)                   | `string`   | `schemas-json/controllers/crackSlots/GetCRACInsuranceResourcesAndRooms.request.schema.json#/definitions/ResourceFilter` |
| [insuranceID](#insuranceid) | `string`   | `schemas-json/controllers/crackSlots/GetCRACInsuranceResourcesAndRooms.request.schema.json#/definitions/Filters`        |
| [resources](#resources)     | reference  | `schemas-json/controllers/crackSlots/GetCRACInsuranceResourcesAndRooms.request.schema.json#/definitions/Filters`        |
| [rooms](#rooms)             | `string[]` | `schemas-json/controllers/crackSlots/GetCRACInsuranceResourcesAndRooms.request.schema.json#/definitions/Filters`        |

## date

`date`

- is **required**
- type: `object`
- defined in this schema

### date Type

`object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `from`   | string | **Required** |
| `to`     | string | **Required** |

#### from

`from`

- is **required**
- type: `string`

##### from Type

`string`

#### to

`to`

- is **required**
- type: `string`

##### to Type

`string`

## duration

`duration`

- is **required**
- type: `number`
- defined in this schema

### duration Type

`number`

## id

идентификатор ресурса

`id`

- is **required**
- type: `string`
- defined in this schema

### id Type

`string`

## insuranceID

`insuranceID`

- is **required**
- type: `string`
- defined in this schema

### insuranceID Type

`string`

## resources

`resources`

- is **required**
- type: reference
- defined in this schema

### resources Type

Array type: reference

All items must be of the type:

- []() – `#/definitions/ResourceFilter`

## rooms

`rooms`

- is **required**
- type: `string[]`
- defined in this schema

### rooms Type

Array type: `string[]`

All items must be of the type: `string`

# CracSlots.GetCRACInsuranceResourcesAndRooms.request Properties

| Property          | Type     | Required     | Nullable | Defined by                                                        |
| ----------------- | -------- | ------------ | -------- | ----------------------------------------------------------------- |
| [params](#params) | `object` | **Required** | No       | CracSlots.GetCRACInsuranceResourcesAndRooms.request (this schema) |
| `*`               | any      | Additional   | Yes      | this schema _allows_ additional properties                        |

## params

параметры запроса

`params`

- is **required**
- type: `object`
- defined in this schema

### params Type

`object` with following properties:

| Property   | Type | Required     |
| ---------- | ---- | ------------ |
| `business` |      | **Required** |
| `filters`  |      | **Required** |

#### business

`business`

- is **required**
- type: reference

##### business Type

- []() – `../../models/partials/cracSlotsRequestBusinessParams.schema.json`

#### filters

`filters`

- is **required**
- type: reference

##### filters Type

- []() – `#/definitions/Filters`

**All** of the following _requirements_ need to be fulfilled.

#### Requirement 1

- []() – `../../common/request.schema.json`

#### Requirement 2

- []() – `#/definitions/Request`
