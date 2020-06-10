# Discount Schema

```
schemas-json/models/discount.schema.json
```

Информация о скидке

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                          |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | --------------------------------------------------- |
| Can be instantiated | No         | Experimental | No           | Forbidden         | Forbidden             | [models/discount.schema.json](discount.schema.json) |

# Discount Properties

| Property                                | Type      | Required | Nullable | Default  | Defined by             |
| --------------------------------------- | --------- | -------- | -------- | -------- | ---------------------- |
| [active](#active)                       | `boolean` | Optional | No       |          | Discount (this schema) |
| [daysOfWeek](#daysofweek)               | `enum`    | Optional | No       |          | Discount (this schema) |
| [repeats](#repeats)                     | `enum`    | Optional | No       | `"none"` | Discount (this schema) |
| [slots](#slots)                         | `object`  | Optional | No       |          | Discount (this schema) |
| [start](#start)                         | `string`  | Optional | No       |          | Discount (this schema) |
| [unlimWeeklyRepeat](#unlimweeklyrepeat) | `boolean` | Optional | No       | `false`  | Discount (this schema) |
| [weeklyRepeat](#weeklyrepeat)           | `number`  | Optional | No       | `1`      | Discount (this schema) |

## active

`active`

- is optional
- type: `boolean`
- defined in this schema

### active Type

`boolean`

## daysOfWeek

`daysOfWeek`

- is optional
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#daysofweek-known-values).

### daysOfWeek Known Values

| Value | Description |
| ----- | ----------- |
| `sun` |             |
| `mon` |             |
| `tue` |             |
| `wed` |             |
| `thu` |             |
| `fri` |             |
| `sat` |             |

## repeats

`repeats`

- is optional
- type: `enum`
- default: `"none"`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#repeats-known-values).

### repeats Known Values

| Value    | Description |
| -------- | ----------- |
| `none`   |             |
| `daily`  |             |
| `weekly` |             |

## slots

`slots`

- is optional
- type: `object`
- defined in this schema

### slots Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |
| `time`   |      | Optional |

#### time

`time`

- is optional
- type: reference

##### time Type

- []() – `./partials/timeframe.schema.json`

## start

`start`

- is optional
- type: `string`
- defined in this schema

### start Type

`string`

- format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))

## unlimWeeklyRepeat

`unlimWeeklyRepeat`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### unlimWeeklyRepeat Type

`boolean`

## weeklyRepeat

`weeklyRepeat`

- is optional
- type: `number`
- default: `1`
- defined in this schema

### weeklyRepeat Type

`number`
