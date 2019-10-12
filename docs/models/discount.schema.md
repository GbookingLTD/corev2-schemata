
# Discount Schema

Информация о скидке




| Property | Type | Required | Default |
|----------|------|----------|---------|
| [active](#active) | `boolean` | Optional |  | Discount (this schema) |
| [start](#start) | `string` | Optional |  | Discount (this schema) |
| [repeats](#repeats) | `enum` | Optional | `"none"` | Discount (this schema) |
| [weeklyRepeat](#weeklyrepeat) | `number` | Optional | `1` | Discount (this schema) |
| [unlimWeeklyRepeat](#unlimweeklyrepeat) | `boolean` | Optional | `false` | Discount (this schema) |
| [daysOfWeek](#daysofweek) | `enum` | Optional |  | Discount (this schema) |
| [slots](#slots) | `object` | Optional |  | Discount (this schema) |

## active


`active`
* is optional
* type: `boolean`
* defined in this schema

### active type


`boolean`





## daysOfWeek


`daysOfWeek`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#daysofweek-known-values).

### daysOfWeek Known Values
| Value | Description |
|-------|-------------|
| `sun` |  |
| `mon` |  |
| `tue` |  |
| `wed` |  |
| `thu` |  |
| `fri` |  |
| `sat` |  |




## repeats


`repeats`
* is optional
* type: `enum`
* default: `"none"`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#repeats-known-values).

### repeats Known Values
| Value | Description |
|-------|-------------|
| `none` |  |
| `daily` |  |
| `weekly` |  |




## slots


`slots`
* is optional
* type: `object`
* defined in this schema

### slots type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `time`|  | Optional |



#### time

undefined

`time`
* is optional
* type: `reference`

##### time type



* []() – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/timeframe.schema.json`










## start


`start`
* is optional
* type: `string`
* defined in this schema

### start type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## unlimWeeklyRepeat


`unlimWeeklyRepeat`
* is optional
* type: `boolean`
* default: `false`
* defined in this schema

### unlimWeeklyRepeat type


`boolean`





## weeklyRepeat


`weeklyRepeat`
* is optional
* type: `number`
* default: `1`
* defined in this schema

### weeklyRepeat type


`number`





