# TimeFrame Schema

```
http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/timeframe.schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                     |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | -------------------------------------------------------------- |
| Can be instantiated | Yes        | Experimental | No           | Forbidden         | Forbidden             | [models/partials/timeframe.schema.json](timeframe.schema.json) |

# TimeFrame Properties

| Property                | Type       | Required     | Nullable | Defined by              |
| ----------------------- | ---------- | ------------ | -------- | ----------------------- |
| [capacity](#capacity)   | `number`   | Optional     | No       | TimeFrame (this schema) |
| [end](#end)             | `number`   | **Required** | No       | TimeFrame (this schema) |
| [endDate](#enddate)     | complex    | Optional     | No       | TimeFrame (this schema) |
| [extraId](#extraid)     | `string`   | Optional     | No       | TimeFrame (this schema) |
| [id](#id)               | `string`   | Optional     | No       | TimeFrame (this schema) |
| [resources](#resources) | `string[]` | Optional     | No       | TimeFrame (this schema) |
| [roomID](#roomid)       | `string`   | Optional     | No       | TimeFrame (this schema) |
| [start](#start)         | `number`   | **Required** | No       | TimeFrame (this schema) |
| [startDate](#startdate) | complex    | Optional     | No       | TimeFrame (this schema) |

## capacity

`capacity`

- is optional
- type: `number`
- defined in this schema

### capacity Type

`number`

## end

смещение в минутах от начала дня

`end`

- is **required**
- type: `number`
- defined in this schema

### end Type

`number`

## endDate

`endDate`

- is optional
- type: complex
- defined in this schema

### endDate Type

**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

`string`

- format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))

#### Condition 2

`number`

## extraId

`extraId`

- is optional
- type: `string`
- defined in this schema

### extraId Type

`string`

## id

уникальный идентификатор временного слота

`id`

- is optional
- type: `string`
- defined in this schema

### id Type

`string`

## resources

`resources`

- is optional
- type: `string[]`
- defined in this schema

### resources Type

Array type: `string[]`

All items must be of the type: `string`

## roomID

`roomID`

- is optional
- type: `string`
- defined in this schema

### roomID Type

`string`

## start

смещение в минутах от начала дня

`start`

- is **required**
- type: `number`
- defined in this schema

### start Type

`number`

## startDate

`startDate`

- is optional
- type: complex
- defined in this schema

### startDate Type

**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

`string`

- format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))

#### Condition 2

`number`
