# Timetable Schema

```
http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/timetable.schema.json
```

таблица регулярного недельного расписания

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                            |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ----------------------------------------------------- |
| Can be instantiated | No         | Experimental | No           | Forbidden         | Forbidden             | [models/timetable.schema.json](timetable.schema.json) |

# Timetable Properties

| Property          | Type      | Required     | Nullable | Defined by              |
| ----------------- | --------- | ------------ | -------- | ----------------------- |
| [active](#active) | `boolean` | **Required** | No       | Timetable (this schema) |
| [week](#week)     | `object`  | Optional     | No       | Timetable (this schema) |

## active

установлено ли расписание для сущности

`active`

- is **required**
- type: `boolean`
- defined in this schema

### active Type

`boolean`

## week

`week`

- is optional
- type: `object`
- defined in this schema

### week Type

`object` with following properties:

| Property | Type  | Required     |
| -------- | ----- | ------------ |
| `fri`    | array | **Required** |
| `mon`    | array | **Required** |
| `sat`    | array | **Required** |
| `sun`    | array | **Required** |
| `thu`    | array | **Required** |
| `tue`    | array | **Required** |
| `wed`    | array | **Required** |

#### fri

`fri`

- is **required**
- type: TimeFrame

##### fri Type

Array type: TimeFrame

All items must be of the type:

- [TimeFrame](partials/timeframe.schema.md) –
  `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/timeframe.schema.json`

#### mon

`mon`

- is **required**
- type: TimeFrame

##### mon Type

Array type: TimeFrame

All items must be of the type:

- [TimeFrame](partials/timeframe.schema.md) –
  `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/timeframe.schema.json`

#### sat

`sat`

- is **required**
- type: TimeFrame

##### sat Type

Array type: TimeFrame

All items must be of the type:

- [TimeFrame](partials/timeframe.schema.md) –
  `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/timeframe.schema.json`

#### sun

`sun`

- is **required**
- type: TimeFrame

##### sun Type

Array type: TimeFrame

All items must be of the type:

- [TimeFrame](partials/timeframe.schema.md) –
  `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/timeframe.schema.json`

#### thu

`thu`

- is **required**
- type: TimeFrame

##### thu Type

Array type: TimeFrame

All items must be of the type:

- [TimeFrame](partials/timeframe.schema.md) –
  `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/timeframe.schema.json`

#### tue

`tue`

- is **required**
- type: TimeFrame

##### tue Type

Array type: TimeFrame

All items must be of the type:

- [TimeFrame](partials/timeframe.schema.md) –
  `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/timeframe.schema.json`

#### wed

`wed`

- is **required**
- type: TimeFrame

##### wed Type

Array type: TimeFrame

All items must be of the type:

- [TimeFrame](partials/timeframe.schema.md) –
  `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/timeframe.schema.json`
