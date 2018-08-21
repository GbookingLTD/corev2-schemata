
# Timetable Schema

таблица регулярного недельного расписания




| Property | Type | Required |
|----------|------|----------|
| [active](#active) | `boolean` | **Required** | Timetable (this schema) |
| [week](#week) | `object` | **Required** | Timetable (this schema) |

## active

установлено ли расписание для сущности

`active`
* is **required**
* type: `boolean`
* defined in this schema

### active type


`boolean`





## week


`week`
* is **required**
* type: `object`
* defined in this schema

### week type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `sun`| array | **Required** |
| `mon`| array | **Required** |
| `tue`| array | **Required** |
| `wed`| array | **Required** |
| `thu`| array | **Required** |
| `fri`| array | **Required** |
| `sat`| array | **Required** |



#### fri

undefined

`fri`
* is **required**
* type: `reference[]`


##### fri type


Array type: `reference[]`

All items must be of the type:

* []() – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/timeframe.schema.json`










#### mon

undefined

`mon`
* is **required**
* type: `reference[]`


##### mon type


Array type: `reference[]`

All items must be of the type:

* []() – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/timeframe.schema.json`










#### sat

undefined

`sat`
* is **required**
* type: `reference[]`


##### sat type


Array type: `reference[]`

All items must be of the type:

* []() – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/timeframe.schema.json`










#### sun

undefined

`sun`
* is **required**
* type: `reference[]`


##### sun type


Array type: `reference[]`

All items must be of the type:

* []() – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/timeframe.schema.json`










#### thu

undefined

`thu`
* is **required**
* type: `reference[]`


##### thu type


Array type: `reference[]`

All items must be of the type:

* []() – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/timeframe.schema.json`










#### tue

undefined

`tue`
* is **required**
* type: `reference[]`


##### tue type


Array type: `reference[]`

All items must be of the type:

* []() – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/timeframe.schema.json`










#### wed

undefined

`wed`
* is **required**
* type: `reference[]`


##### wed type


Array type: `reference[]`

All items must be of the type:

* []() – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/timeframe.schema.json`












