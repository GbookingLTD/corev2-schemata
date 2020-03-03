# Timetable Schema

```
schemas-json/models/timetable.schema.json
```

таблица регулярного недельного расписания

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                            |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ----------------------------------------------------- |
| Can be instantiated | No         | Experimental | No           | Forbidden         | Forbidden             | [models/timetable.schema.json](timetable.schema.json) |

# Timetable Properties

| Property          | Type      | Required | Nullable | Defined by              |
| ----------------- | --------- | -------- | -------- | ----------------------- |
| [active](#active) | `boolean` | Optional | No       | Timetable (this schema) |
| [week](#week)     | `object`  | Optional | No       | Timetable (this schema) |

## active

установлено ли расписание для сущности

`active`

- is optional
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
- type: reference

##### fri Type

Array type: reference

All items must be of the type:

- []() – `partials/timeframe.schema.json`

#### mon

`mon`

- is **required**
- type: reference

##### mon Type

Array type: reference

All items must be of the type:

- []() – `./partials/timeframe.schema.json`

#### sat

`sat`

- is **required**
- type: reference

##### sat Type

Array type: reference

All items must be of the type:

- []() – `partials/timeframe.schema.json`

#### sun

`sun`

- is **required**
- type: reference

##### sun Type

Array type: reference

All items must be of the type:

- []() – `./partials/timeframe.schema.json`

#### thu

`thu`

- is **required**
- type: reference

##### thu Type

Array type: reference

All items must be of the type:

- []() – `partials/timeframe.schema.json`

#### tue

`tue`

- is **required**
- type: reference

##### tue Type

Array type: reference

All items must be of the type:

- []() – `./partials/timeframe.schema.json`

#### wed

`wed`

- is **required**
- type: reference

##### wed Type

Array type: reference

All items must be of the type:

- []() – `partials/timeframe.schema.json`
