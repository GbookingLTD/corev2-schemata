# Resource Schema

```
http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/resource.schema.json
```

Данные о работнике бизнеса

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                          |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | --------------------------------------------------- |
| Can be instantiated | Yes        | Experimental | No           | Forbidden         | Forbidden             | [models/resource.schema.json](resource.schema.json) |

## Schema Hierarchy

- Resource `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/resource.schema.json`
  - [BusinessInfo](partials/businessInfo.schema.md)
    `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/businessInfo.schema.json`
  - [Phone](phone.schema.md) `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/phone.schema.json`
  - [Timetable](timetable.schema.md)
    `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/timetable.schema.json`

# Resource Definitions

| Property                    | Type      | Group                                                                                                                       |
| --------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------- |
| [accessType](#accesstype)   | `enum`    | `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/resource.schema.json#/definitions/ResourceProfile`          |
| [children](#children)       | `boolean` | `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/resource.schema.json#/definitions/ResourceTaxonomyChildren` |
| [even](#even)               | reference | `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/resource.schema.json#/definitions/EvenOddTimetable`         |
| [latitude](#latitude)       | `number`  | `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/resource.schema.json#/definitions/ResourceLocation`         |
| [longitude](#longitude)     | `number`  | `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/resource.schema.json#/definitions/ResourceLocation`         |
| [odd](#odd)                 | reference | `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/resource.schema.json#/definitions/EvenOddTimetable`         |
| [profileID](#profileid)     | `string`  | `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/resource.schema.json#/definitions/ResourceProfile`          |
| [startPeriod](#startperiod) | `enum`    | `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/resource.schema.json#/definitions/EvenOddTimetable`         |
| [taxonomyID](#taxonomyid)   | `string`  | `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/resource.schema.json#/definitions/ResourceTaxonomyChildren` |
| [time](#time)               | `string`  | `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/resource.schema.json#/definitions/ResourceLocation`         |
| [userID](#userid)           | `string`  | `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/resource.schema.json#/definitions/ResourceProfile`          |

## accessType

тип доступа работника в систему через его учётную запись

`accessType`

- is **required**
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#accesstype-known-values).

### accessType Known Values

| Value             | Description |
| ----------------- | ----------- |
| `NONE`            |             |
| `WORKER_SIMPLE`   |             |
| `WORKER_EXTENDED` |             |

## children

true - детская услуга; false - взрослая услуга

`children`

- is **required**
- type: `boolean`
- defined in this schema

### children Type

`boolean`

## even

расписание для чётных дней

`even`

- is **required**
- type: reference
- defined in this schema

### even Type

Array type: reference

All items must be of the type:

- []() – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/timeframe.schema.json`

## latitude

`latitude`

- is optional
- type: `number`
- defined in this schema

### latitude Type

`number`

## longitude

`longitude`

- is optional
- type: `number`
- defined in this schema

### longitude Type

`number`

## odd

расписание для нечётных дней

`odd`

- is **required**
- type: reference
- defined in this schema

### odd Type

Array type: reference

All items must be of the type:

- []() – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/timeframe.schema.json`

## profileID

идентификатор профиля работника уникальный во всей системе

`profileID`

- is **required**
- type: `string`
- defined in this schema

### profileID Type

`string`

## startPeriod

month - по дням месяца (1-е число каждого месяца - нечётно), week - по дням недели (понедельник считается нечётным)

`startPeriod`

- is **required**
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#startperiod-known-values).

### startPeriod Known Values

| Value   | Description |
| ------- | ----------- |
| `week`  |             |
| `month` |             |

## taxonomyID

идентификатор услуги, для которой установлено свойство

`taxonomyID`

- is **required**
- type: `string`
- defined in this schema

### taxonomyID Type

`string`

## time

время последнего обновления координат

`time`

- is optional
- type: `string`
- defined in this schema

### time Type

`string`

## userID

идентификатор работника

`userID`

- is **required**
- type: `string`
- defined in this schema

### userID Type

`string`

# Resource Properties

| Property                                    | Type         | Required     | Nullable | Defined by             |
| ------------------------------------------- | ------------ | ------------ | -------- | ---------------------- |
| [additionalExtraId](#additionalextraid)     | `string[]`   | Optional     | No       | Resource (this schema) |
| [capacity](#capacity)                       | `number`     | **Required** | No       | Resource (this schema) |
| [color](#color)                             | `string`     | Optional     | No       | Resource (this schema) |
| [departmentId](#departmentid)               | `string`     | Optional     | No       | Resource (this schema) |
| [description](#description)                 | `string`     | Optional     | No       | Resource (this schema) |
| [displayInWidget](#displayinwidget)         | `boolean`    | **Required** | No       | Resource (this schema) |
| [email](#email)                             | `string`     | **Required** | No       | Resource (this schema) |
| [emailEnabled](#emailenabled)               | `boolean`    | Optional     | No       | Resource (this schema) |
| [evenOddTimetable](#evenoddtimetable)       | `object`     | **Required** | No       | Resource (this schema) |
| [exceptions](#exceptions)                   | `array`      | Optional     | No       | Resource (this schema) |
| [extraDescription](#extradescription)       | `string`     | Optional     | No       | Resource (this schema) |
| [extraId](#extraid)                         | `string`     | Optional     | No       | Resource (this schema) |
| [extraLink](#extralink)                     | `string`     | Optional     | No       | Resource (this schema) |
| [extraMediaId](#extramediaid)               | `string`     | Optional     | No       | Resource (this schema) |
| [icon_url](#icon_url)                       | `string`     | Optional     | Yes      | Resource (this schema) |
| [id](#id)                                   | `string`     | **Required** | No       | Resource (this schema) |
| [image](#image)                             | `string`     | Optional     | No       | Resource (this schema) |
| [level](#level)                             | `number`     | **Required** | No       | Resource (this schema) |
| [loaned](#loaned)                           | `boolean`    | **Required** | No       | Resource (this schema) |
| [loanedFrom](#loanedfrom)                   | `string`     | Optional     | No       | Resource (this schema) |
| [loanedTo](#loanedto)                       | `string`     | Optional     | No       | Resource (this schema) |
| [location](#location)                       | `object`     | **Required** | No       | Resource (this schema) |
| [manualChanges](#manualchanges)             | `boolean`    | **Required** | No       | Resource (this schema) |
| [name](#name)                               | `string`     | **Required** | No       | Resource (this schema) |
| [nickname](#nickname)                       | `string`     | **Required** | No       | Resource (this schema) |
| [order](#order)                             | `number`     | Optional     | No       | Resource (this schema) |
| [orderWeight](#orderweight)                 | multiple     | Optional     | Yes      | Resource (this schema) |
| [originBusinessID](#originbusinessid)       | `string`     | Optional     | No       | Resource (this schema) |
| [originTaxonomies](#origintaxonomies)       | `string[]`   | Optional     | No       | Resource (this schema) |
| [origin_general_info](#origin_general_info) | BusinessInfo | Optional     | No       | Resource (this schema) |
| [perk](#perk)                               | `string`     | Optional     | No       | Resource (this schema) |
| [phone](#phone)                             | Phone        | **Required** | No       | Resource (this schema) |
| [profession](#profession)                   | `string`     | Optional     | No       | Resource (this schema) |
| [profile](#profile)                         | `object`     | Optional     | No       | Resource (this schema) |
| [rating](#rating)                           | `number`     | Optional     | No       | Resource (this schema) |
| [revisionVersion](#revisionversion)         | `number`     | **Required** | No       | Resource (this schema) |
| [scheduleIsEmpty](#scheduleisempty)         | `boolean`    | Optional     | No       | Resource (this schema) |
| [siteId](#siteid)                           | `string`     | Optional     | No       | Resource (this schema) |
| [smsEnabled](#smsenabled)                   | `boolean`    | Optional     | No       | Resource (this schema) |
| [status](#status)                           | `enum`       | Optional     | No       | Resource (this schema) |
| [surname](#surname)                         | `string`     | **Required** | No       | Resource (this schema) |
| [taxonomies](#taxonomies)                   | `string[]`   | **Required** | No       | Resource (this schema) |
| [taxonomyChildren](#taxonomychildren)       | reference    | **Required** | No       | Resource (this schema) |
| [taxonomyLevels](#taxonomylevels)           | reference    | **Required** | No       | Resource (this schema) |
| [timetable](#timetable)                     | Timetable    | **Required** | No       | Resource (this schema) |
| [userData](#userdata)                       | `object`     | Optional     | No       | Resource (this schema) |
| [workPlace](#workplace)                     | `string`     | Optional     | No       | Resource (this schema) |

## additionalExtraId

информация из внешней информационной системы как есть (при интеграции)

`additionalExtraId`

- is optional
- type: `string[]`
- defined in this schema

### additionalExtraId Type

Array type: `string[]`

All items must be of the type: `string`

## capacity

Количество записей, которые может принимать работник единовременно

`capacity`

- is **required**
- type: `number`
- defined in this schema

### capacity Type

`number`

## color

цвет колонки с работником

`color`

- is optional
- type: `string`
- defined in this schema

### color Type

`string`

## departmentId

идентификатор отделения, к которому привязан работник

`departmentId`

- is optional
- type: `string`
- defined in this schema

### departmentId Type

`string`

## description

краткое описание работника

`description`

- is optional
- type: `string`
- defined in this schema

### description Type

`string`

## displayInWidget

отображать ли данного работника на виджете или любом другом клиенте

`displayInWidget`

- is **required**
- type: `boolean`
- defined in this schema

### displayInWidget Type

`boolean`

## email

e-mail работника

`email`

- is **required**
- type: `string`
- defined in this schema

### email Type

`string`

## emailEnabled

включена ли отправка e-mail уведомлений для данного работника

`emailEnabled`

- is optional
- type: `boolean`
- defined in this schema

### emailEnabled Type

`boolean`

## evenOddTimetable

`evenOddTimetable`

- is **required**
- type: `object`
- defined in this schema

### evenOddTimetable Type

`object` with following properties:

| Property      | Type   | Required     |
| ------------- | ------ | ------------ |
| `even`        | array  | **Required** |
| `odd`         | array  | **Required** |
| `startPeriod` | string | **Required** |

#### even

расписание для чётных дней

`even`

- is **required**
- type: reference

##### even Type

Array type: reference

All items must be of the type:

- []() – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/timeframe.schema.json`

#### odd

расписание для нечётных дней

`odd`

- is **required**
- type: reference

##### odd Type

Array type: reference

All items must be of the type:

- []() – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/timeframe.schema.json`

#### startPeriod

month - по дням месяца (1-е число каждого месяца - нечётно), week - по дням недели (понедельник считается нечётным)

`startPeriod`

- is **required**
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#evenoddtimetable-known-values).

##### startPeriod Known Values

| Value   | Description |
| ------- | ----------- |
| `week`  |             |
| `month` |             |

## exceptions

`exceptions`

- is optional
- type: `array`
- defined in this schema

### exceptions Type

Array type: `array`

## extraDescription

информация из внешней информационной системы как есть (при интеграции)

`extraDescription`

- is optional
- type: `string`
- defined in this schema

### extraDescription Type

`string`

## extraId

информация из внешней информационной системы как есть (при интеграции)

`extraId`

- is optional
- type: `string`
- defined in this schema

### extraId Type

`string`

## extraLink

информация из внешней информационной системы как есть (при интеграции)

`extraLink`

- is optional
- type: `string`
- defined in this schema

### extraLink Type

`string`

## extraMediaId

информация из внешней информационной системы как есть (при интеграции)

`extraMediaId`

- is optional
- type: `string`
- defined in this schema

### extraMediaId Type

`string`

## icon_url

url изображения работника; Если указан относительный путь, то используйте http://cdn.gbooking.ru (см. так же Business
WidgetConfiguration.useDefaultWorkerImg и WidgetConfiguration.defaultWorkerImgUrl)

`icon_url`

- is optional
- type: `string`
- defined in this schema

### icon_url Type

`string`, nullable

## id

внутренний идентификатор работника; уникальный во всей системе GBooking

`id`

- is **required**
- type: `string`
- defined in this schema

### id Type

`string`

## image

`image`

- is optional
- type: `string`
- defined in this schema

### image Type

`string`

## level

уровень скорости выполнения услуги по-умолчанию (если не найдено в taxonomyLevels)

`level`

- is **required**
- type: `number`
- defined in this schema

### level Type

`number`

## loaned

не используется

`loaned`

- is **required**
- type: `boolean`
- defined in this schema

### loaned Type

`boolean`

## loanedFrom

не используется

`loanedFrom`

- is optional
- type: `string`
- defined in this schema

### loanedFrom Type

`string`

## loanedTo

не используется

`loanedTo`

- is optional
- type: `string`
- defined in this schema

### loanedTo Type

`string`

## location

`location`

- is **required**
- type: `object`
- defined in this schema

### location Type

`object` with following properties:

| Property    | Type   | Required |
| ----------- | ------ | -------- |
| `latitude`  | number | Optional |
| `longitude` | number | Optional |
| `time`      | string | Optional |

#### latitude

`latitude`

- is optional
- type: `number`

##### latitude Type

`number`

#### longitude

`longitude`

- is optional
- type: `number`

##### longitude Type

`number`

#### time

время последнего обновления координат

`time`

- is optional
- type: `string`

##### time Type

`string`

## manualChanges

`manualChanges`

- is **required**
- type: `boolean`
- defined in this schema

### manualChanges Type

`boolean`

## name

имя работника

`name`

- is **required**
- type: `string`
- defined in this schema

### name Type

`string`

## nickname

внутреннее название работника в Бекофис

`nickname`

- is **required**
- type: `string`
- defined in this schema

### nickname Type

`string`

## order

индекс сортировки работника

`order`

- is optional
- type: `number`
- defined in this schema

### order Type

`number`

## orderWeight

`orderWeight`

- is optional
- type: multiple
- defined in this schema

### orderWeight Type

Either one of:

- `number`
- `object`
- or `null`

## originBusinessID

(только в витрине) идентификатор бизнеса-филиала, откуда был взят работник

`originBusinessID`

- is optional
- type: `string`
- defined in this schema

### originBusinessID Type

`string`

## originTaxonomies

(только в витрине) список идентификаторов услуг на бизнесе-филиале, которые выполняет работник

`originTaxonomies`

- is optional
- type: `string[]`
- defined in this schema

### originTaxonomies Type

Array type: `string[]`

All items must be of the type: `string`

## origin_general_info

(только в витрине) объект с данными бизнеса-филиала

`origin_general_info`

- is optional
- type: BusinessInfo
- defined in this schema

### origin_general_info Type

- [BusinessInfo](partials/businessInfo.schema.md) –
  `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/businessInfo.schema.json`

## perk

особый навык

`perk`

- is optional
- type: `string`
- defined in this schema

### perk Type

`string`

## phone

`phone`

- is **required**
- type: Phone
- defined in this schema

### phone Type

- [Phone](phone.schema.md) – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/phone.schema.json`

## profession

информация о профессии работника, используется в Бекофис

`profession`

- is optional
- type: `string`
- defined in this schema

### profession Type

`string`

## profile

### Информация о профиле работника

Доступ имеют только пользователи с правами resource или admin

`profile`

- is optional
- type: `object`
- defined in this schema

### profile Type

`object` with following properties:

| Property     | Type   | Required     |
| ------------ | ------ | ------------ |
| `accessType` | string | **Required** |
| `email`      | string | **Required** |
| `profileID`  | string | **Required** |
| `userID`     | string | **Required** |

#### accessType

тип доступа работника в систему через его учётную запись

`accessType`

- is **required**
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#profile-known-values).

##### accessType Known Values

| Value             | Description |
| ----------------- | ----------- |
| `NONE`            |             |
| `WORKER_SIMPLE`   |             |
| `WORKER_EXTENDED` |             |

#### email

e-mail профиля работника

`email`

- is **required**
- type: `string`

##### email Type

`string`

#### profileID

идентификатор профиля работника уникальный во всей системе

`profileID`

- is **required**
- type: `string`

##### profileID Type

`string`

#### userID

идентификатор работника

`userID`

- is **required**
- type: `string`

##### userID Type

`string`

## rating

Рейтинг работника

`rating`

- is optional
- type: `number`
- defined in this schema

### rating Type

`number`

## revisionVersion

Версия изменений документа

`revisionVersion`

- is **required**
- type: `number`
- defined in this schema

### revisionVersion Type

`number`

## scheduleIsEmpty

`scheduleIsEmpty`

- is optional
- type: `boolean`
- defined in this schema

### scheduleIsEmpty Type

`boolean`

## siteId

информация из внешней информационной системы как есть (при интеграции)

`siteId`

- is optional
- type: `string`
- defined in this schema

### siteId Type

`string`

## smsEnabled

включена ли отправка смс уведомлений для данного работника

`smsEnabled`

- is optional
- type: `boolean`
- defined in this schema

### smsEnabled Type

`boolean`

## status

`status`

- is optional
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#status-known-values).

### status Known Values

| Value      | Description |
| ---------- | ----------- |
| `ACTIVE`   |             |
| `INACTIVE` |             |

## surname

фамилия и отчество работника

`surname`

- is **required**
- type: `string`
- defined in this schema

### surname Type

`string`

## taxonomies

массив идентификаторов услуг, которые выполняет работник

`taxonomies`

- is **required**
- type: `string[]`
- defined in this schema

### taxonomies Type

Array type: `string[]`

All items must be of the type: `string`

## taxonomyChildren

массив свойств выполнения услуги как детской, как взрослой или как общей (если указаны оба или не указаны вовсе для
услуги)

`taxonomyChildren`

- is **required**
- type: reference
- defined in this schema

### taxonomyChildren Type

Array type: reference

All items must be of the type:

- []() – `#/definitions/ResourceTaxonomyChildren`

## taxonomyLevels

массив уровня скорости выполнения услуги (см так же Resource level)

`taxonomyLevels`

- is **required**
- type: reference
- defined in this schema

### taxonomyLevels Type

Array type: reference

All items must be of the type:

- []() – `#/definitions/ResourceTaxonomyLevel`

## timetable

`timetable`

- is **required**
- type: Timetable
- defined in this schema

### timetable Type

- [Timetable](timetable.schema.md) –
  `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/timetable.schema.json`

## userData

`userData`

- is optional
- type: `object`
- defined in this schema

### userData Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## workPlace

рабочее место, которое занимает работник

`workPlace`

- is optional
- type: `string`
- defined in this schema

### workPlace Type

`string`
