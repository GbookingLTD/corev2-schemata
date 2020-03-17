# appointment.get_appointment_by_filter.request Schema

```
schemas-json/controllers/appointment/get_appointment_by_filter.request.schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                                                                             |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | Yes        | Experimental | No           | Forbidden         | Permitted             | [controllers/appointment/get_appointment_by_filter.request.schema.json](get_appointment_by_filter.request.schema.json) |

# appointment.get_appointment_by_filter.request Definitions

| Property                                        | Type      | Group                                                                                                     |
| ----------------------------------------------- | --------- | --------------------------------------------------------------------------------------------------------- |
| [business](#business)                           | `object`  | `schemas-json/controllers/appointment/get_appointment_by_filter.request.schema.json#/definitions/Filters` |
| [extraFilters](#extrafilters)                   | `object`  | `schemas-json/controllers/appointment/get_appointment_by_filter.request.schema.json#/definitions/Filters` |
| [filter](#filter)                               | `object`  | `schemas-json/controllers/appointment/get_appointment_by_filter.request.schema.json#/definitions/Filters` |
| [network](#network)                             | `object`  | `schemas-json/controllers/appointment/get_appointment_by_filter.request.schema.json#/definitions/Filters` |
| [page](#page)                                   | `number`  | `schemas-json/controllers/appointment/get_appointment_by_filter.request.schema.json#/definitions/Filters` |
| [pageSize](#pagesize)                           | `number`  | `schemas-json/controllers/appointment/get_appointment_by_filter.request.schema.json#/definitions/Filters` |
| [skipBusinessCancelled](#skipbusinesscancelled) | `boolean` | `schemas-json/controllers/appointment/get_appointment_by_filter.request.schema.json#/definitions/Filters` |

## business

`business`

- is **required**
- type: `object`
- defined in this schema

### business Type

`object` with following properties:

| Property | Type          | Required |
| -------- | ------------- | -------- |
| `id`     | string,number | Optional |

#### id

`id`

- is optional
- type: multiple

##### id Type

Unknown type `string,number`.

```json
{
  "type": ["string", "number"],
  "simpletype": "multiple"
}
```

## extraFilters

`extraFilters`

- is optional
- type: `object`
- defined in this schema

### extraFilters Type

`object` with following properties:

| Property | Type  | Required |
| -------- | ----- | -------- |
| `sort`   | array | Optional |

#### sort

`sort`

- is optional
- type: `object[]`

##### sort Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `dir`    | string | **Required** |
| `field`  | string | **Required** |

#### dir

`dir`

- is **required**
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#extrafilters-known-values).

##### dir Known Values

| Value  | Description |
| ------ | ----------- |
| `asc`  |             |
| `desc` |             |

#### field

`field`

- is **required**
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#extrafilters-known-values).

##### field Known Values

| Value     | Description |
| --------- | ----------- |
| `created` |             |
| `start`   |             |

## filter

`filter`

- is optional
- type: `object`
- defined in this schema

### filter Type

`object` with following properties:

| Property      | Type    | Required | Default |
| ------------- | ------- | -------- | ------- |
| `created`     | object  | Optional |         |
| `end`         | string  | Optional |         |
| `services`    | array   | Optional |         |
| `skipUpdated` | boolean | Optional | `false` |
| `start`       | string  | Optional |         |
| `workers`     | array   | Optional |         |

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

#### end

`end`

- is optional
- type: `string`

##### end Type

`string`

- format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))

#### services

`services`

- is optional
- type: `string[]`

##### services Type

Array type: `string[]`

All items must be of the type: `string`

#### skipUpdated

`skipUpdated`

- is optional
- type: `boolean`
- default: `false`

##### skipUpdated Type

`boolean`

#### start

`start`

- is optional
- type: `string`

##### start Type

`string`

- format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))

#### workers

`workers`

- is optional
- type: `string[]`

##### workers Type

Array type: `string[]`

All items must be of the type: `string`

## network

`network`

- is optional
- type: `object`
- defined in this schema

### network Type

`object` with following properties:

| Property | Type          | Required |
| -------- | ------------- | -------- |
| `id`     | string,number | Optional |

#### id

`id`

- is optional
- type: multiple

##### id Type

Unknown type `string,number`.

```json
{
  "type": ["string", "number"],
  "simpletype": "multiple"
}
```

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

## skipBusinessCancelled

`skipBusinessCancelled`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### skipBusinessCancelled Type

`boolean`

# appointment.get_appointment_by_filter.request Properties

| Property          | Type     | Required     | Nullable | Defined by                                                  |
| ----------------- | -------- | ------------ | -------- | ----------------------------------------------------------- |
| [params](#params) | `object` | **Required** | No       | appointment.get_appointment_by_filter.request (this schema) |
| `*`               | any      | Additional   | Yes      | this schema _allows_ additional properties                  |

## params

`params`

- is **required**
- type: `object`
- defined in this schema

### params Type

`object` with following properties:

| Property                | Type    | Required     | Default |
| ----------------------- | ------- | ------------ | ------- |
| `business`              | object  | **Required** |         |
| `extraFilters`          | object  | Optional     |         |
| `filter`                | object  | Optional     |         |
| `network`               | object  | Optional     |         |
| `page`                  | number  | **Required** |         |
| `pageSize`              | number  | **Required** |         |
| `skipBusinessCancelled` | boolean | Optional     | `false` |

#### business

`business`

- is **required**
- type: `object`

##### business Type

`object` with following properties:

| Property | Type          | Required |
| -------- | ------------- | -------- |
| `id`     | string,number | Optional |

#### id

`id`

- is optional
- type: multiple

##### id Type

Unknown type `string,number`.

```json
{
  "type": ["string", "number"],
  "simpletype": "multiple"
}
```

#### extraFilters

`extraFilters`

- is optional
- type: `object`

##### extraFilters Type

`object` with following properties:

| Property | Type  | Required |
| -------- | ----- | -------- |
| `sort`   | array | Optional |

#### sort

`sort`

- is optional
- type: `object[]`

##### sort Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `dir`    | string | **Required** |
| `field`  | string | **Required** |

#### dir

`dir`

- is **required**
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#params-known-values).

##### dir Known Values

| Value  | Description |
| ------ | ----------- |
| `asc`  |             |
| `desc` |             |

#### field

`field`

- is **required**
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#params-known-values).

##### field Known Values

| Value     | Description |
| --------- | ----------- |
| `created` |             |
| `start`   |             |

#### filter

`filter`

- is optional
- type: `object`

##### filter Type

`object` with following properties:

| Property      | Type    | Required | Default |
| ------------- | ------- | -------- | ------- |
| `created`     | object  | Optional |         |
| `end`         | string  | Optional |         |
| `services`    | array   | Optional |         |
| `skipUpdated` | boolean | Optional | `false` |
| `start`       | string  | Optional |         |
| `workers`     | array   | Optional |         |

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

#### end

`end`

- is optional
- type: `string`

##### end Type

`string`

- format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))

#### services

`services`

- is optional
- type: `string[]`

##### services Type

Array type: `string[]`

All items must be of the type: `string`

#### skipUpdated

`skipUpdated`

- is optional
- type: `boolean`
- default: `false`

##### skipUpdated Type

`boolean`

#### start

`start`

- is optional
- type: `string`

##### start Type

`string`

- format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))

#### workers

`workers`

- is optional
- type: `string[]`

##### workers Type

Array type: `string[]`

All items must be of the type: `string`

#### network

`network`

- is optional
- type: `object`

##### network Type

`object` with following properties:

| Property | Type          | Required |
| -------- | ------------- | -------- |
| `id`     | string,number | Optional |

#### id

`id`

- is optional
- type: multiple

##### id Type

Unknown type `string,number`.

```json
{
  "type": ["string", "number"],
  "simpletype": "multiple"
}
```

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

#### skipBusinessCancelled

`skipBusinessCancelled`

- is optional
- type: `boolean`
- default: `false`

##### skipBusinessCancelled Type

`boolean`

**All** of the following _requirements_ need to be fulfilled.

#### Requirement 1

- []() – `../../common/request.schema.json`

#### Requirement 2

- []() – `#/definitions/Request`
