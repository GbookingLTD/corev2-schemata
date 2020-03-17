# appointment.get_appointment_by_showcase.request Schema

```
schemas-json/controllers/appointment/get_appointment_by_showcase.request.schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                                                                                 |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | Yes        | Experimental | No           | Forbidden         | Permitted             | [controllers/appointment/get_appointment_by_showcase.request.schema.json](get_appointment_by_showcase.request.schema.json) |

# appointment.get_appointment_by_showcase.request Definitions

| Property              | Type     | Group                                                                                                       |
| --------------------- | -------- | ----------------------------------------------------------------------------------------------------------- |
| [business](#business) | `object` | `schemas-json/controllers/appointment/get_appointment_by_showcase.request.schema.json#/definitions/Filters` |
| [created](#created)   | `object` | `schemas-json/controllers/appointment/get_appointment_by_showcase.request.schema.json#/definitions/Filters` |
| [page](#page)         | `number` | `schemas-json/controllers/appointment/get_appointment_by_showcase.request.schema.json#/definitions/Filters` |
| [pageSize](#pagesize) | `number` | `schemas-json/controllers/appointment/get_appointment_by_showcase.request.schema.json#/definitions/Filters` |
| [source](#source)     | `string` | `schemas-json/controllers/appointment/get_appointment_by_showcase.request.schema.json#/definitions/Filters` |

## business

`business`

- is **required**
- type: `object`
- defined in this schema

### business Type

`object` with following properties:

| Property | Type          | Required     |
| -------- | ------------- | ------------ |
| `id`     | string,number | **Required** |

#### id

`id`

- is **required**
- type: multiple

##### id Type

Unknown type `string,number`.

```json
{
  "type": ["string", "number"],
  "simpletype": "multiple"
}
```

## created

`created`

- is optional
- type: `object`
- defined in this schema

### created Type

`object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `end`    | string | **Required** |
| `start`  | string | **Required** |

#### end

`end`

- is **required**
- type: `string`

##### end Type

`string`

- format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))

#### start

`start`

- is **required**
- type: `string`

##### start Type

`string`

- format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))

## page

`page`

- is **required**
- type: `number`
- defined in this schema

### page Type

`number`

## pageSize

`pageSize`

- is **required**
- type: `number`
- defined in this schema

### pageSize Type

`number`

## source

`source`

- is optional
- type: `string`
- defined in this schema

### source Type

`string`

# appointment.get_appointment_by_showcase.request Properties

| Property          | Type     | Required     | Nullable | Defined by                                                    |
| ----------------- | -------- | ------------ | -------- | ------------------------------------------------------------- |
| [params](#params) | `object` | **Required** | No       | appointment.get_appointment_by_showcase.request (this schema) |
| `*`               | any      | Additional   | Yes      | this schema _allows_ additional properties                    |

## params

`params`

- is **required**
- type: `object`
- defined in this schema

### params Type

`object` with following properties:

| Property   | Type   | Required     |
| ---------- | ------ | ------------ |
| `business` | object | **Required** |
| `created`  | object | Optional     |
| `page`     | number | **Required** |
| `pageSize` | number | **Required** |
| `source`   | string | Optional     |

#### business

`business`

- is **required**
- type: `object`

##### business Type

`object` with following properties:

| Property | Type          | Required     |
| -------- | ------------- | ------------ |
| `id`     | string,number | **Required** |

#### id

`id`

- is **required**
- type: multiple

##### id Type

Unknown type `string,number`.

```json
{
  "type": ["string", "number"],
  "simpletype": "multiple"
}
```

#### created

`created`

- is optional
- type: `object`

##### created Type

`object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `end`    | string | **Required** |
| `start`  | string | **Required** |

#### end

`end`

- is **required**
- type: `string`

##### end Type

`string`

- format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))

#### start

`start`

- is **required**
- type: `string`

##### start Type

`string`

- format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))

#### page

`page`

- is **required**
- type: `number`

##### page Type

`number`

#### pageSize

`pageSize`

- is **required**
- type: `number`

##### pageSize Type

`number`

#### source

`source`

- is optional
- type: `string`

##### source Type

`string`

**All** of the following _requirements_ need to be fulfilled.

#### Requirement 1

- []() – `../../common/request.schema.json`

#### Requirement 2

- []() – `#/definitions/Request`
