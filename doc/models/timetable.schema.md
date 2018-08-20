
# Timetable Schema

таблица регулярного недельного расписания




| Property | Type | Required |
|----------|------|----------|
| [active](#active) | `boolean` | Optional | Timetable (this schema) |
| [weeklySchedule](#weeklyschedule) | `object` | Optional | Timetable (this schema) |

## active

установлено ли расписание для сущности

`active`
* is optional
* type: `boolean`
* defined in this schema

### active type


`boolean`





## weeklySchedule


`weeklySchedule`
* is optional
* type: `object`
* defined in this schema

### weeklySchedule type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `sun`| array | Optional |
| `mon`| array | Optional |
| `tue`| array | Optional |
| `wed`| array | Optional |
| `thu`| array | Optional |
| `fri`| array | Optional |
| `sat`| array | Optional |



#### fri

undefined

`fri`
* is optional
* type: `reference[]`


##### fri type


Array type: `reference[]`

All items must be of the type:

* []() – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/timeframe.schema.json`










#### mon

undefined

`mon`
* is optional
* type: `reference[]`


##### mon type


Array type: `reference[]`

All items must be of the type:

* []() – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/timeframe.schema.json`










#### sat

undefined

`sat`
* is optional
* type: `reference[]`


##### sat type


Array type: `reference[]`

All items must be of the type:

* []() – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/timeframe.schema.json`










#### sun

undefined

`sun`
* is optional
* type: `reference[]`


##### sun type


Array type: `reference[]`

All items must be of the type:

* []() – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/timeframe.schema.json`










#### thu

undefined

`thu`
* is optional
* type: `reference[]`


##### thu type


Array type: `reference[]`

All items must be of the type:

* []() – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/timeframe.schema.json`










#### tue

undefined

`tue`
* is optional
* type: `reference[]`


##### tue type


Array type: `reference[]`

All items must be of the type:

* []() – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/timeframe.schema.json`










#### wed

undefined

`wed`
* is optional
* type: `reference[]`


##### wed type


Array type: `reference[]`

All items must be of the type:

* []() – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/timeframe.schema.json`












