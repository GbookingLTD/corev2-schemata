
# Resource Schema

Данные о работнике бизнеса


## Schema Hierarchy

* Resource `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/resource.schema.json`
  * [Phone](phone.schema.md) `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/phone.schema.json`
  * [Timetable](timetable.schema.md) `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/timetable.schema.json`



| Property | Type | Required |
|----------|------|----------|
| [revisionVersion](#revisionversion) | `number` | **Required** | Resource (this schema) |
| [rating](#rating) | `number` | Optional | Resource (this schema) |
| [email](#email) | `string` | **Required** | Resource (this schema) |
| [capacity](#capacity) | `number` | **Required** | Resource (this schema) |
| [icon_url](#icon_url) | `string` | Optional | Resource (this schema) |
| [id](#id) | `string` | **Required** | Resource (this schema) |
| [name](#name) | `string` | **Required** | Resource (this schema) |
| [surname](#surname) | `string` | **Required** | Resource (this schema) |
| [nickname](#nickname) | `string` | **Required** | Resource (this schema) |
| [loaned](#loaned) | `boolean` | **Required** | Resource (this schema) |
| [loanedTo](#loanedto) | `string` | Optional | Resource (this schema) |
| [loanedFrom](#loanedfrom) | `string` | Optional | Resource (this schema) |
| [description](#description) | `string` | **Required** | Resource (this schema) |
| [profession](#profession) | `string` | Optional | Resource (this schema) |
| [extraDescription](#extradescription) | `string` | Optional | Resource (this schema) |
| [extraLink](#extralink) | `string` | Optional | Resource (this schema) |
| [extraId](#extraid) | `string` | Optional | Resource (this schema) |
| [additionalExtraId](#additionalextraid) | `string[]` | Optional | Resource (this schema) |
| [extraMediaId](#extramediaid) | `string` | Optional | Resource (this schema) |
| [departmentId](#departmentid) | `string` | Optional | Resource (this schema) |
| [workPlace](#workplace) | `string` | Optional | Resource (this schema) |
| [order](#order) | `number` | **Required** | Resource (this schema) |
| [profile](#profile) | `Информация о профиле работника` | Optional | Resource (this schema) |
| [taxonomies](#taxonomies) | `string[]` | **Required** | Resource (this schema) |
| [taxonomyLevels](#taxonomylevels) | ``undefined[]`` | **Required** | Resource (this schema) |
| [taxonomyChildren](#taxonomychildren) | ``undefined[]`` | **Required** | Resource (this schema) |
| [level](#level) | `number` | **Required** | Resource (this schema) |
| [perk](#perk) | `string` | Optional | Resource (this schema) |
| [phone](#phone) | Phone | **Required** | Resource (this schema) |
| [smsEnabled](#smsenabled) | `boolean` | **Required** | Resource (this schema) |
| [emailEnabled](#emailenabled) | `boolean` | Optional | Resource (this schema) |
| [displayInWidget](#displayinwidget) | `boolean` | **Required** | Resource (this schema) |
| [manualChanges](#manualchanges) | `boolean` | **Required** | Resource (this schema) |
| [timetable](#timetable) | Timetable | **Required** | Resource (this schema) |
| [evenOddTimetable](#evenoddtimetable) | `object` | **Required** | Resource (this schema) |
| [status](#status) | `enum` | Optional | Resource (this schema) |
| [image](#image) | `string` | Optional | Resource (this schema) |
| [location](#location) | `object` | **Required** | Resource (this schema) |
| [exceptions](#exceptions) | `array` | Optional | Resource (this schema) |
| [userData](#userdata) | `object` | Optional | Resource (this schema) |

## additionalExtraId

информация из внешней информационной системы как есть (при интеграции)

`additionalExtraId`
* is optional
* type: `string[]`

* defined in this schema

### additionalExtraId type


Array type: `string[]`

All items must be of the type:
`string`









## capacity

Количество записей, которые может принимать работник единовременно

`capacity`
* is **required**
* type: `number`
* defined in this schema

### capacity type


`number`






## departmentId

идентификатор отделения, к которому привязан работник

`departmentId`
* is optional
* type: `string`
* defined in this schema

### departmentId type


`string`






## description

краткое описание работника

`description`
* is **required**
* type: `string`
* defined in this schema

### description type


`string`






## displayInWidget

отображать ли данного работника на виджете или любом другом клиенте

`displayInWidget`
* is **required**
* type: `boolean`
* defined in this schema

### displayInWidget type


`boolean`





## email

e-mail работника

`email`
* is **required**
* type: `string`
* defined in this schema

### email type


`string`






## emailEnabled

включена ли отправка e-mail уведомлений для данного работника

`emailEnabled`
* is optional
* type: `boolean`
* defined in this schema

### emailEnabled type


`boolean`





## evenOddTimetable


`evenOddTimetable`
* is **required**
* type: `object`
* defined in this schema

### evenOddTimetable type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `startPeriod`| string | **Required** |
| `even`| array | **Required** |
| `odd`| array | **Required** |



#### even

расписание для чётных дней

`even`
* is **required**
* type: `reference[]`


##### even type


Array type: `reference[]`

All items must be of the type:

* []() – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/timeframe.schema.json`










#### odd

расписание для нечётных дней

`odd`
* is **required**
* type: `reference[]`


##### odd type


Array type: `reference[]`

All items must be of the type:

* []() – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/timeframe.schema.json`










#### startPeriod

month - по дням месяца (1-е число каждого месяца - нечётно), week - по дням недели (понедельник считается нечётным)

`startPeriod`
* is **required**
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#evenoddtimetable-known-values).

##### startPeriod known values
| Value | Description |
|-------|-------------|
| `week` |  |
| `month` |  |









## exceptions


`exceptions`
* is optional
* type: `array`
* no more than `0` items in the array
* defined in this schema

### exceptions type


Array type: `array`






## extraDescription

информация из внешней информационной системы как есть (при интеграции)

`extraDescription`
* is optional
* type: `string`
* defined in this schema

### extraDescription type


`string`






## extraId

информация из внешней информационной системы как есть (при интеграции)

`extraId`
* is optional
* type: `string`
* defined in this schema

### extraId type


`string`






## extraLink

информация из внешней информационной системы как есть (при интеграции)

`extraLink`
* is optional
* type: `string`
* defined in this schema

### extraLink type


`string`






## extraMediaId

информация из внешней информационной системы как есть (при интеграции)

`extraMediaId`
* is optional
* type: `string`
* defined in this schema

### extraMediaId type


`string`






## icon_url

url изображения работника; Если указан относительный путь, то используйте http://cdn.gbooking.ru (см. так же Business WidgetConfiguration.useDefaultWorkerImg и WidgetConfiguration.defaultWorkerImgUrl) 

`icon_url`
* is optional
* type: `string`
* defined in this schema

### icon_url type


`string`






## id

внутренний идентификатор работника; уникальный во всей системе GBooking

`id`
* is **required**
* type: `string`
* defined in this schema

### id type


`string`






## image


`image`
* is optional
* type: `string`
* defined in this schema

### image type


`string`






## level

уровень скорости выполнения услуги по-умолчанию (если не найдено в taxonomyLevels)

`level`
* is **required**
* type: `number`
* defined in this schema

### level type


`number`






## loaned

не используется

`loaned`
* is **required**
* type: `boolean`
* defined in this schema

### loaned type


`boolean`





## loanedFrom

не используется

`loanedFrom`
* is optional
* type: `string`
* defined in this schema

### loanedFrom type


`string`






## loanedTo

не используется

`loanedTo`
* is optional
* type: `string`
* defined in this schema

### loanedTo type


`string`






## location


`location`
* is **required**
* type: `object`
* defined in this schema

### location type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `longitude`| number | Optional |
| `latitude`| number | Optional |
| `time`| string | Optional |



#### latitude

undefined

`latitude`
* is optional
* type: `number`

##### latitude type


`number`








#### longitude

undefined

`longitude`
* is optional
* type: `number`

##### longitude type


`number`








#### time

время последнего обновления координат

`time`
* is optional
* type: `string`

##### time type


`string`











## manualChanges


`manualChanges`
* is **required**
* type: `boolean`
* defined in this schema

### manualChanges type


`boolean`





## name

имя работника

`name`
* is **required**
* type: `string`
* defined in this schema

### name type


`string`






## nickname

внутреннее название работника в Бекофис

`nickname`
* is **required**
* type: `string`
* defined in this schema

### nickname type


`string`






## order

индекс сортировки работника

`order`
* is **required**
* type: `number`
* defined in this schema

### order type


`number`






## perk

особый навык

`perk`
* is optional
* type: `string`
* defined in this schema

### perk type


`string`






## phone


`phone`
* is **required**
* type: Phone
* defined in this schema

### phone type



* [Phone](phone.schema.md) – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/phone.schema.json`





## profession

информация о профессии работника, используется в Бекофис

`profession`
* is optional
* type: `string`
* defined in this schema

### profession type


`string`






## profile
### Информация о профиле работника

Доступ имеют только пользователи с правами resource или admin

`profile`
* is optional
* type: `object`
* defined in this schema

### profile type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `email`| string | **Required** |
| `profileID`| string | **Required** |
| `userID`| string | **Required** |
| `accessType`| string | **Required** |



#### accessType

тип доступа работника в систему через его учётную запись

`accessType`
* is **required**
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#profile-known-values).

##### accessType known values
| Value | Description |
|-------|-------------|
| `NONE` |  |
| `WORKER_SIMPLE` |  |
| `WORKER_EXTENDED` |  |






#### email

e-mail профиля работника

`email`
* is **required**
* type: `string`

##### email type


`string`








#### profileID

идентификатор профиля работника уникальный во всей системе

`profileID`
* is **required**
* type: `string`

##### profileID type


`string`








#### userID

идентификатор работника

`userID`
* is **required**
* type: `string`

##### userID type


`string`











## rating

Рейтинг работника

`rating`
* is optional
* type: `number`
* defined in this schema

### rating type


`number`






## revisionVersion

Версия изменений документа

`revisionVersion`
* is **required**
* type: `number`
* defined in this schema

### revisionVersion type


`number`






## smsEnabled

включена ли отправка смс уведомлений для данного работника

`smsEnabled`
* is **required**
* type: `boolean`
* defined in this schema

### smsEnabled type


`boolean`





## status


`status`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#status-known-values).

### status Known Values
| Value | Description |
|-------|-------------|
| `ACTIVE` |  |
| `NOTACTIVE` |  |




## surname

фамилия и отчество работника

`surname`
* is **required**
* type: `string`
* defined in this schema

### surname type


`string`






## taxonomies

массив идентификаторов услуг, которые выполняет работник

`taxonomies`
* is **required**
* type: `string[]`

* defined in this schema

### taxonomies type


Array type: `string[]`

All items must be of the type:
`string`









## taxonomyChildren
### `undefined[]`

массив свойств выполнения услуги как детской, как взрослой или как общей (если указаны оба или не указаны вовсе для услуги)

`taxonomyChildren`
* is **required**
* type: `reference[]`

* defined in this schema

### taxonomyChildren type


Array type: `reference[]`

All items must be of the type:

* []() – `#/definitions/ResourceTaxonomyChildren`








## taxonomyLevels
### `undefined[]`

массив уровня скорости выполнения услуги (см так же Resource level)

`taxonomyLevels`
* is **required**
* type: `reference[]`

* defined in this schema

### taxonomyLevels type


Array type: `reference[]`

All items must be of the type:

* []() – `#/definitions/ResourceTaxonomyLevel`








## timetable


`timetable`
* is **required**
* type: Timetable
* defined in this schema

### timetable type



* [Timetable](timetable.schema.md) – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/timetable.schema.json`





## userData


`userData`
* is optional
* type: `object`
* defined in this schema

### userData type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## workPlace

рабочее место, которое занимает работник

`workPlace`
* is optional
* type: `string`
* defined in this schema

### workPlace type


`string`





