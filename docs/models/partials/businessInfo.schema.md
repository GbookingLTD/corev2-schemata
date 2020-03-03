# BusinessInfo Schema

```
schemas-json/models/partials/businessInfo.schema.json
```

Содержит детальную информацию о бизнесе — название, адрес, график работы и другое

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                           |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | -------------------------------------------------------------------- |
| Can be instantiated | No         | Experimental | No           | Forbidden         | Forbidden             | [models/partials/businessInfo.schema.json](businessInfo.schema.json) |

# BusinessInfo Properties

| Property                                                  | Type       | Required | Nullable | Default     | Defined by                 |
| --------------------------------------------------------- | ---------- | -------- | -------- | ----------- | -------------------------- |
| [accepted_currency](#accepted_currency)                   | reference  | Optional | No       |             | BusinessInfo (this schema) |
| [additionalFields](#additionalfields)                     | reference  | Optional | No       |             | BusinessInfo (this schema) |
| [additional_info](#additional_info)                       | `string`   | Optional | Yes      |             | BusinessInfo (this schema) |
| [address](#address)                                       | reference  | Optional | No       |             | BusinessInfo (this schema) |
| [autoAcceptAppointment](#autoacceptappointment)           | `boolean`  | Optional | No       | `false`     | BusinessInfo (this schema) |
| [businessShowcaseAliases](#businessshowcasealiases)       | `object[]` | Optional | No       |             | BusinessInfo (this schema) |
| [contactName](#contactname)                               | `string`   | Optional | No       |             | BusinessInfo (this schema) |
| [date_joined](#date_joined)                               | `string`   | Optional | No       |             | BusinessInfo (this schema) |
| [description](#description)                               | `string`   | Optional | No       |             | BusinessInfo (this schema) |
| [email](#email)                                           | `string`   | Optional | No       |             | BusinessInfo (this schema) |
| [fax](#fax)                                               | reference  | Optional | No       |             | BusinessInfo (this schema) |
| [images](#images)                                         | `string[]` | Optional | No       |             | BusinessInfo (this schema) |
| [instant_messaging](#instant_messaging)                   | `object[]` | Optional | No       |             | BusinessInfo (this schema) |
| [isShowcase](#isshowcase)                                 | `boolean`  | Optional | No       | `false`     | BusinessInfo (this schema) |
| [language](#language)                                     | reference  | Optional | No       |             | BusinessInfo (this schema) |
| [logo_url](#logo_url)                                     | `string`   | Optional | Yes      |             | BusinessInfo (this schema) |
| [marketingNotifications](#marketingnotifications)         | `object`   | Optional | No       |             | BusinessInfo (this schema) |
| [metro](#metro)                                           | `object`   | Optional | No       |             | BusinessInfo (this schema) |
| [min_booking_time](#min_booking_time)                     | `number`   | Optional | Yes      |             | BusinessInfo (this schema) |
| [mobile](#mobile)                                         | reference  | Optional | No       |             | BusinessInfo (this schema) |
| [name](#name)                                             | `string`   | Optional | No       |             | BusinessInfo (this schema) |
| [networkID](#networkid)                                   | `number`   | Optional | Yes      |             | BusinessInfo (this schema) |
| [newboEnabledFor](#newboenabledfor)                       | `string[]` | Optional | No       |             | BusinessInfo (this schema) |
| [paymentMethods](#paymentmethods)                         | `enum`     | Optional | No       |             | BusinessInfo (this schema) |
| [phone](#phone)                                           | reference  | Optional | No       |             | BusinessInfo (this schema) |
| [phone_mask](#phone_mask)                                 | `string`   | Optional | Yes      |             | BusinessInfo (this schema) |
| [pricingType](#pricingtype)                               | `enum`     | Optional | No       | `"DEFAULT"` | BusinessInfo (this schema) |
| [revisionVersion](#revisionversion)                       | `number`   | Optional | No       |             | BusinessInfo (this schema) |
| [schedulerTick](#schedulertick)                           | `number`   | Optional | No       | `15`        | BusinessInfo (this schema) |
| [shortName](#shortname)                                   | `string`   | Optional | Yes      |             | BusinessInfo (this schema) |
| [showAppointmentColor](#showappointmentcolor)             | `boolean`  | Optional | No       | `false`     | BusinessInfo (this schema) |
| [showAppointmentTooltip](#showappointmenttooltip)         | `boolean`  | Optional | No       | `false`     | BusinessInfo (this schema) |
| [showResourceWorkStatistics](#showresourceworkstatistics) | `boolean`  | Optional | No       |             | BusinessInfo (this schema) |
| [showWorkerProfession](#showworkerprofession)             | `boolean`  | Optional | No       | `false`     | BusinessInfo (this schema) |
| [showcases](#showcases)                                   | `object[]` | Optional | No       |             | BusinessInfo (this schema) |
| [skipBilling](#skipbilling)                               | `boolean`  | Optional | No       | `false`     | BusinessInfo (this schema) |
| [smsDuplicateFilter](#smsduplicatefilter)                 | `object`   | Optional | No       |             | BusinessInfo (this schema) |
| [social_network](#social_network)                         | reference  | Optional | No       |             | BusinessInfo (this schema) |
| [timetable](#timetable)                                   | reference  | Optional | No       |             | BusinessInfo (this schema) |
| [timezone](#timezone)                                     | `string`   | Optional | No       |             | BusinessInfo (this schema) |
| [verticalTranslation](#verticaltranslation)               | `enum`     | Optional | No       | `"NONE"`    | BusinessInfo (this schema) |
| [website](#website)                                       | `string`   | Optional | No       |             | BusinessInfo (this schema) |

## accepted_currency

`accepted_currency`

- is optional
- type: reference
- defined in this schema

### accepted_currency Type

Array type: reference

All items must be of the type: `string`

## additionalFields

`additionalFields`

- is optional
- type: reference
- defined in this schema

### additionalFields Type

Array type: reference

All items must be of the type:

- []() – `../additionalField.schema.json`

## additional_info

`additional_info`

- is optional
- type: `string`
- defined in this schema

### additional_info Type

`string`, nullable

## address

Адреса компании или филиала

`address`

- is optional
- type: reference
- defined in this schema

### address Type

Array type: reference

All items must be of the type:

- []() – `../address.schema.json`

## autoAcceptAppointment

`autoAcceptAppointment`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### autoAcceptAppointment Type

`boolean`

## businessShowcaseAliases

если данный бизнес является витриной, идентификаторы бизнесов, которые входят в витрину

`businessShowcaseAliases`

- is optional
- type: `object[]`
- defined in this schema

### businessShowcaseAliases Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property     | Type   | Required |
| ------------ | ------ | -------- |
| `internalID` | string | Optional |

#### internalID

`internalID`

- is optional
- type: `string`

##### internalID Type

`string`

## contactName

`contactName`

- is optional
- type: `string`
- defined in this schema

### contactName Type

`string`

## date_joined

`date_joined`

- is optional
- type: `string`
- defined in this schema

### date_joined Type

`string`

- format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))

## description

`description`

- is optional
- type: `string`
- defined in this schema

### description Type

`string`

## email

Список e-mail адресов компании или филиала

`email`

- is optional
- type: `string`
- defined in this schema

### email Type

`string`

## fax

`fax`

- is optional
- type: reference
- defined in this schema

### fax Type

Array type: reference

All items must be of the type:

- []() – `../phone.schema.json`

## images

`images`

- is optional
- type: `string[]`
- defined in this schema

### images Type

Array type: `string[]`

All items must be of the type: `string`

## instant_messaging

`instant_messaging`

- is optional
- type: `object[]`
- defined in this schema

### instant_messaging Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## isShowcase

является ли данный бизнес витриной

`isShowcase`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### isShowcase Type

`boolean`

## language

`language`

- is optional
- type: reference
- defined in this schema

### language Type

- []() – `language.schema.json#/definitions/LanguageList`

## logo_url

`logo_url`

- is optional
- type: `string`
- defined in this schema

### logo_url Type

`string`, nullable

## marketingNotifications

`marketingNotifications`

- is optional
- type: `object`
- defined in this schema

### marketingNotifications Type

`object` with following properties:

| Property          | Type    | Required     | Default |
| ----------------- | ------- | ------------ | ------- |
| `accepted`        | boolean | **Required** | `false` |
| `active`          | boolean | **Required** | `false` |
| `useSmsAlphaName` | boolean | **Required** | `false` |

#### accepted

`accepted`

- is **required**
- type: `boolean`
- default: `false`

##### accepted Type

`boolean`

#### active

`active`

- is **required**
- type: `boolean`
- default: `false`

##### active Type

`boolean`

#### useSmsAlphaName

`useSmsAlphaName`

- is **required**
- type: `boolean`
- default: `false`

##### useSmsAlphaName Type

`boolean`

## metro

`metro`

- is optional
- type: `object`
- defined in this schema

### metro Type

`object` with following properties:

| Property   | Type   | Required |
| ---------- | ------ | -------- |
| `color`    | string | Optional |
| `distance` | number | Optional |
| `name`     | string | Optional |

#### color

`color`

- is optional
- type: `string`

##### color Type

`string`

#### distance

`distance`

- is optional
- type: `number`

##### distance Type

`number`

#### name

`name`

- is optional
- type: `string`

##### name Type

`string`

## min_booking_time

`min_booking_time`

- is optional
- type: `number`
- defined in this schema

### min_booking_time Type

`number`, nullable

## mobile

Список телефонов бизнеса

`mobile`

- is optional
- type: reference
- defined in this schema

### mobile Type

Array type: reference

All items must be of the type:

- []() – `../phone.schema.json`

## name

Название бизнеса

`name`

- is optional
- type: `string`
- defined in this schema

### name Type

`string`

## networkID

`networkID`

- is optional
- type: `number`
- defined in this schema

### networkID Type

`number`, nullable

## newboEnabledFor

`newboEnabledFor`

- is optional
- type: `string[]`
- defined in this schema

### newboEnabledFor Type

Array type: `string[]`

All items must be of the type: `string`

## paymentMethods

`paymentMethods`

- is optional
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#paymentmethods-known-values).

### paymentMethods Known Values

| Value          | Description |
| -------------- | ----------- |
| `Visa`         |             |
| `Mastercard`   |             |
| `Amex`         |             |
| `PayPal`       |             |
| `MoneyBookers` |             |

## phone

Список телефонов бизнеса

`phone`

- is optional
- type: reference
- defined in this schema

### phone Type

Array type: reference

All items must be of the type:

- []() – `../phone.schema.json`

## phone_mask

`phone_mask`

- is optional
- type: `string`
- defined in this schema

### phone_mask Type

`string`, nullable

## pricingType

`pricingType`

- is optional
- type: `enum`
- default: `"DEFAULT"`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#pricingtype-known-values).

### pricingType Known Values

| Value              | Description |
| ------------------ | ----------- |
| `DEFAULT`          |             |
| `MASTER_TOPMASTER` |             |

## revisionVersion

`revisionVersion`

- is optional
- type: `number`
- defined in this schema

### revisionVersion Type

`number`

## schedulerTick

`schedulerTick`

- is optional
- type: `number`
- default: `15`
- defined in this schema

### schedulerTick Type

`number`

## shortName

Короткое название филиала

`shortName`

- is optional
- type: `string`
- defined in this schema

### shortName Type

`string`, nullable

## showAppointmentColor

`showAppointmentColor`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showAppointmentColor Type

`boolean`

## showAppointmentTooltip

`showAppointmentTooltip`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showAppointmentTooltip Type

`boolean`

## showResourceWorkStatistics

`showResourceWorkStatistics`

- is optional
- type: `boolean`
- defined in this schema

### showResourceWorkStatistics Type

`boolean`

## showWorkerProfession

`showWorkerProfession`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showWorkerProfession Type

`boolean`

## showcases

идентификаторы витрин, в которых участвует данный бизнес

`showcases`

- is optional
- type: `object[]`
- defined in this schema

### showcases Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property         | Type   | Required |
| ---------------- | ------ | -------- |
| `baseBusinessID` | string | Optional |

#### baseBusinessID

`baseBusinessID`

- is optional
- type: `string`

##### baseBusinessID Type

`string`

## skipBilling

`skipBilling`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### skipBilling Type

`boolean`

## smsDuplicateFilter

`smsDuplicateFilter`

- is optional
- type: `object`
- defined in this schema

### smsDuplicateFilter Type

`object` with following properties:

| Property | Type    | Required |
| -------- | ------- | -------- |
| `active` | boolean | Optional |

#### active

`active`

- is optional
- type: `boolean`

##### active Type

`boolean`

## social_network

`social_network`

- is optional
- type: reference
- defined in this schema

### social_network Type

Array type: reference

All items must be of the type:

- []() – `../socialNetwork.schema.json`

## timetable

`timetable`

- is optional
- type: reference
- defined in this schema

### timetable Type

- []() – `../timetable.schema.json`

## timezone

`timezone`

- is optional
- type: `string`
- defined in this schema

### timezone Type

`string`

## verticalTranslation

`verticalTranslation`

- is optional
- type: `enum`
- default: `"NONE"`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#verticaltranslation-known-values).

### verticalTranslation Known Values

| Value     | Description |
| --------- | ----------- |
| `NONE`    |             |
| `GENERIC` |             |
| `MEDICAL` |             |
| `BEAUTY`  |             |
| `FITNESS` |             |
| `SPORT`   |             |
| `YOGA`    |             |

## website

`website`

- is optional
- type: `string`
- defined in this schema

### website Type

`string`
