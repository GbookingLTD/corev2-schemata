# CracSlots.GetCRACResourcesAndRooms.request Schema

```
schemas-json/controllers/crackSlots/GetCRACResourcesAndRooms.request.schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                                                                         |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | Yes        | Experimental | No           | Forbidden         | Permitted             | [controllers/cracSlots/GetCRACResourcesAndRooms.request.schema.json](GetCRACResourcesAndRooms.request.schema.json) |

# CracSlots.GetCRACResourcesAndRooms.request Definitions

| Property              | Type     | Group                                                                                                          |
| --------------------- | -------- | -------------------------------------------------------------------------------------------------------------- |
| [duration](#duration) | `number` | `schemas-json/controllers/crackSlots/GetCRACResourcesAndRooms.request.schema.json#/definitions/ResourceFilter` |
| [id](#id)             | `string` | `schemas-json/controllers/crackSlots/GetCRACResourcesAndRooms.request.schema.json#/definitions/ResourceFilter` |

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

# CracSlots.GetCRACResourcesAndRooms.request Properties

| Property          | Type     | Required     | Nullable | Defined by                                               |
| ----------------- | -------- | ------------ | -------- | -------------------------------------------------------- |
| [params](#params) | `object` | **Required** | No       | CracSlots.GetCRACResourcesAndRooms.request (this schema) |
| `*`               | any      | Additional   | Yes      | this schema _allows_ additional properties               |

## params

параметры запроса

`params`

- is **required**
- type: `object`
- defined in this schema

### params Type

`object` with following properties:

| Property   | Type   | Required     |
| ---------- | ------ | ------------ |
| `business` | object | **Required** |
| `filters`  | object | **Required** |

#### business

`business`

- is **required**
- type: `object`

##### business Type

`object` with following properties:

| Property               | Type   | Required     |
| ---------------------- | ------ | ------------ |
| `general_info`         | object | **Required** |
| `id`                   | string | **Required** |
| `widget_configuration` | object | **Required** |

#### general_info

`general_info`

- is **required**
- type: `object`

##### general_info Type

`object` with following properties:

| Property   | Type   | Required     |
| ---------- | ------ | ------------ |
| `timezone` | string | **Required** |

#### timezone

`timezone`

- is **required**
- type: `string`

##### timezone Type

`string`

#### id

`id`

- is **required**
- type: `string`

##### id Type

`string`

#### widget_configuration

`widget_configuration`

- is **required**
- type: `object`

##### widget_configuration Type

`object` with following properties:

| Property         | Type    | Required     |
| ---------------- | ------- | ------------ |
| `cracServer`     | string  | **Required** |
| `mostFreeEnable` | boolean | Optional     |

#### cracServer

`cracServer`

- is **required**
- type: `string`

##### cracServer Type

`string`

#### mostFreeEnable

`mostFreeEnable`

- is optional
- type: `boolean`

##### mostFreeEnable Type

`boolean`

#### filters

`filters`

- is **required**
- type: `object`

##### filters Type

`object` with following properties:

| Property     | Type   | Required     |
| ------------ | ------ | ------------ |
| `date`       | object | **Required** |
| `resources`  | array  | **Required** |
| `rooms`      | array  | **Required** |
| `taxonomies` | array  | **Required** |

#### date

`date`

- is **required**
- type: `object`

##### date Type

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

- format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))

#### to

`to`

- is **required**
- type: `string`

##### to Type

`string`

- format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))

#### resources

`resources`

- is **required**
- type: reference

##### resources Type

Array type: reference

All items must be of the type:

- []() – `#/definitions/ResourceFilter`

#### rooms

`rooms`

- is **required**
- type: `string[]`

##### rooms Type

Array type: `string[]`

All items must be of the type: `string`

#### taxonomies

`taxonomies`

- is **required**
- type: `string[]`

##### taxonomies Type

Array type: `string[]`

All items must be of the type: `string`

**All** of the following _requirements_ need to be fulfilled.

#### Requirement 1

- []() – `../../common/request.schema.json`

#### Requirement 2

- []() – `#/definitions/Request`
