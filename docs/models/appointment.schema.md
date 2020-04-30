# Appointment Schema

```
schemas-json/models/appointment.schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | --------------------------------------------------------- |
| Can be instantiated | Yes        | Experimental | No           | Forbidden         | Forbidden             | [models/appointment.schema.json](appointment.schema.json) |

# Appointment Definitions

| Property                                                  | Type       | Group                                                                                |
| --------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------ |
| [GAClientID](#gaclientid)                                 | `string`   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClient`         |
| [additionalTaxonomyDiscount](#additionaltaxonomydiscount) | `object[]` | `schemas-json/models/appointment.schema.json#/definitions/Price`                     |
| [adminComment](#admincomment)                             | `string`   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClient`         |
| [alias](#alias)                                           | `string`   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentTaxonomy`       |
| [amount](#amount)                                         | `number`   | `schemas-json/models/appointment.schema.json#/definitions/Price`                     |
| [areaCode](#areacode)                                     | `string`   | `schemas-json/models/appointment.schema.json#/definitions/CamelPhone`                |
| [area_code](#area_code)                                   | `string`   | `schemas-json/models/appointment.schema.json#/definitions/Phone`                     |
| [backofficeID](#backofficeid)                             | multiple   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentInfo`           |
| [birthday](#birthday)                                     | multiple   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClientVisitor`  |
| [blockSMS](#blocksms)                                     | `boolean`  | `schemas-json/models/appointment.schema.json#/definitions/AppointmentInfo`           |
| [clientCardNumber](#clientcardnumber)                     | `string`   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClient`         |
| [comment](#comment)                                       | `string`   | `schemas-json/models/appointment.schema.json#/definitions/Review`                    |
| [complaintActionText](#complaintactiontext)               | `string`   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClientFeedback` |
| [complaintStatus](#complaintstatus)                       | `enum`     | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClientFeedback` |
| [complaintText](#complainttext)                           | `string`   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClientFeedback` |
| [countryCode](#countrycode)                               | `string`   | `schemas-json/models/appointment.schema.json#/definitions/CamelPhone`                |
| [country_code](#country_code)                             | `string`   | `schemas-json/models/appointment.schema.json#/definitions/Phone`                     |
| [created](#created)                                       | `string`   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentInfo`           |
| [creatorProfileID](#creatorprofileid)                     | `string`   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClient`         |
| [creatorProfileName](#creatorprofilename)                 | `string`   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClient`         |
| [currency](#currency)                                     | reference  | `schemas-json/models/appointment.schema.json#/definitions/Price`                     |
| [discount](#discount)                                     | `number`   | `schemas-json/models/appointment.schema.json#/definitions/Price`                     |
| [discountProvider](#discountprovider)                     | `enum`     | `schemas-json/models/appointment.schema.json#/definitions/Price`                     |
| [discountType](#discounttype)                             | `string`   | `schemas-json/models/appointment.schema.json#/definitions/Price`                     |
| [drinkAnswer](#drinkanswer)                               | `enum`     | `schemas-json/models/appointment.schema.json#/definitions/AppointmentInfo`           |
| [driverLicense](#driverlicense)                           | `string`   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClient`         |
| [duration](#duration)                                     | `number`   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentInfo`           |
| [email](#email)                                           | `string[]` | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClientVisitor`  |
| [extraData](#extradata)                                   | `object`   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClient`         |
| [extraID](#extraid)                                       | `string`   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClient`         |
| [extraId](#extraid-1)                                     | `string`   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentTaxonomy`       |
| [extraVisitors](#extravisitors)                           | `number`   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClientVisitor`  |
| [fax](#fax)                                               | `string`   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClient`         |
| [feedback](#feedback)                                     | reference  | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClient`         |
| [fieldID](#fieldid)                                       | `string`   | `schemas-json/models/appointment.schema.json#/definitions/ExtraField`                |
| [fieldName](#fieldname)                                   | `string`   | `schemas-json/models/appointment.schema.json#/definitions/ExtraField`                |
| [hideAppointmentTime](#hideappointmenttime)               | `boolean`  | `schemas-json/models/appointment.schema.json#/definitions/AppointmentInfo`           |
| [houseNumber](#housenumber)                               | `string`   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClient`         |
| [id](#id)                                                 | `string`   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentInfo`           |
| [incomingPhone](#incomingphone)                           | reference  | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClient`         |
| [inprogress](#inprogress)                                 | `boolean`  | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClientFeedback` |
| [integration_data](#integration_data)                     | `object`   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentInfo`           |
| [isVIP](#isvip)                                           | `boolean`  | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClient`         |
| [israelCity](#israelcity)                                 | complex    | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClient`         |
| [kupatHolim](#kupatholim)                                 | complex    | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClient`         |
| [language](#language)                                     | `string`   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClient`         |
| [middleName](#middlename)                                 | `string`   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClient`         |
| [name](#name)                                             | `string`   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClientVisitor`  |
| [number](#number)                                         | `string`   | `schemas-json/models/appointment.schema.json#/definitions/Phone`                     |
| [originalAmount](#originalamount)                         | `number`   | `schemas-json/models/appointment.schema.json#/definitions/Price`                     |
| [originalMessage](#originalmessage)                       | `string`   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClientFeedback` |
| [parentClientID](#parentclientid)                         | `string`   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClientVisitor`  |
| [parentProfileID](#parentprofileid)                       | `string`   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClientVisitor`  |
| [passportId](#passportid)                                 | `string`   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClient`         |
| [phone](#phone)                                           | reference  | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClientVisitor`  |
| [price](#price)                                           | reference  | `schemas-json/models/appointment.schema.json#/definitions/AppointmentInfo`           |
| [rate](#rate)                                             | `number`   | `schemas-json/models/appointment.schema.json#/definitions/Review`                    |
| [rating](#rating)                                         | `string`   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClientFeedback` |
| [requiredField](#requiredfield)                           | `boolean`  | `schemas-json/models/appointment.schema.json#/definitions/AdditionalField`           |
| [seasonTicketId](#seasonticketid)                         | `string`   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClient`         |
| [seasonTicketNumber](#seasonticketnumber)                 | `string`   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClient`         |
| [sex](#sex)                                               | `enum`     | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClientVisitor`  |
| [shortId](#shortid)                                       | `string`   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentInfo`           |
| [shortName](#shortname)                                   | `string`   | `schemas-json/models/appointment.schema.json#/definitions/AdditionalField`           |
| [start](#start)                                           | `string`   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentInfo`           |
| [status](#status)                                         | reference  | `schemas-json/models/appointment.schema.json#/definitions/AppointmentInfo`           |
| [surname](#surname)                                       | `string`   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClient`         |
| [talkAnswer](#talkanswer)                                 | `enum`     | `schemas-json/models/appointment.schema.json#/definitions/AppointmentInfo`           |
| [taxiPark](#taxipark)                                     | `string`   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClient`         |
| [taxiParkMemberCount](#taxiparkmembercount)               | `number`   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentClient`         |
| [testRecord](#testrecord)                                 | `boolean`  | `schemas-json/models/appointment.schema.json#/definitions/AppointmentInfo`           |
| [type](#type)                                             | `enum`     | `schemas-json/models/appointment.schema.json#/definitions/AdditionalField`           |
| [updated](#updated)                                       | `string`   | `schemas-json/models/appointment.schema.json#/definitions/AppointmentInfo`           |
| [value](#value)                                           | multiple   | `schemas-json/models/appointment.schema.json#/definitions/ExtraField`                |

## GAClientID

`GAClientID`

- is optional
- type: `string`
- defined in this schema

### GAClientID Type

`string`, nullable

## additionalTaxonomyDiscount

`additionalTaxonomyDiscount`

- is **required**
- type: `object[]`
- defined in this schema

### additionalTaxonomyDiscount Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property           | Type   | Required |
| ------------------ | ------ | -------- |
| `discount`         | number | Optional |
| `discountProvider` | string | Optional |
| `discountType`     | string | Optional |
| `taxonomyID`       | string | Optional |

#### discount

`discount`

- is optional
- type: `number`

##### discount Type

`number`

#### discountProvider

`discountProvider`

- is optional
- type: `enum`

The value of this property **must** be equal to one of the
[known values below](#additionaltaxonomydiscount-known-values).

##### discountProvider Known Values

| Value     | Description |
| --------- | ----------- |
| `LOCAL`   |             |
| `YANDEX`  |             |
| `GROUPON` |             |

#### discountType

`discountType`

- is optional
- type: `string`

##### discountType Type

`string`

#### taxonomyID

`taxonomyID`

- is optional
- type: `string`

##### taxonomyID Type

`string`

## adminComment

`adminComment`

- is optional
- type: `string`
- defined in this schema

### adminComment Type

`string`, nullable

## alias

`alias`

- is **required**
- type: `string`
- defined in this schema

### alias Type

`string`

## amount

`amount`

- is **required**
- type: `number`
- defined in this schema

### amount Type

`number`

## areaCode

`areaCode`

- is **required**
- type: `string`
- defined in this schema

### areaCode Type

`string`

## area_code

`area_code`

- is **required**
- type: `string`
- defined in this schema

### area_code Type

`string`

## backofficeID

`backofficeID`

- is **required**
- type: multiple
- default: `0`
- defined in this schema

### backofficeID Type

Either one of:

- `string`
- `number`

## birthday

`birthday`

- is optional
- type: multiple
- defined in this schema

### birthday Type

Either one of:

- `string`
- `object`
- or `null`

## blockSMS

`blockSMS`

- is **required**
- type: `boolean`
- defined in this schema

### blockSMS Type

`boolean`

## clientCardNumber

`clientCardNumber`

- is optional
- type: `string`
- defined in this schema

### clientCardNumber Type

`string`, nullable

## comment

`comment`

- is optional
- type: `string`
- defined in this schema

### comment Type

`string`

## complaintActionText

`complaintActionText`

- is optional
- type: `string`
- defined in this schema

### complaintActionText Type

`string`

## complaintStatus

`complaintStatus`

- is optional
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#complaintstatus-known-values).

### complaintStatus Known Values

| Value           | Description |
| --------------- | ----------- |
| `INVALID`       |             |
| `NOT_ENTERED`   |             |
| `CHECKING`      |             |
| `ENTERED`       |             |
| `INVESTIGATION` |             |
| `CLOSED`        |             |

## complaintText

`complaintText`

- is optional
- type: `string`
- defined in this schema

### complaintText Type

`string`

## countryCode

`countryCode`

- is **required**
- type: `string`
- defined in this schema

### countryCode Type

`string`

## country_code

`country_code`

- is **required**
- type: `string`
- defined in this schema

### country_code Type

`string`

## created

`created`

- is **required**
- type: `string`
- defined in this schema

### created Type

`string`

- format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))

## creatorProfileID

`creatorProfileID`

- is optional
- type: `string`
- defined in this schema

### creatorProfileID Type

`string`, nullable

## creatorProfileName

`creatorProfileName`

- is optional
- type: `string`
- defined in this schema

### creatorProfileName Type

`string`, nullable

## currency

`currency`

- is **required**
- type: reference
- defined in this schema

### currency Type

- []() – `./partials/currency.schema.json#/definitions/CurrencyList`

## discount

`discount`

- is optional
- type: `number`
- defined in this schema

### discount Type

`number`

## discountProvider

`discountProvider`

- is optional
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#discountprovider-known-values).

### discountProvider Known Values

| Value     | Description |
| --------- | ----------- |
| `LOCAL`   |             |
| `YANDEX`  |             |
| `GROUPON` |             |

## discountType

`discountType`

- is optional
- type: `string`
- defined in this schema

### discountType Type

`string`

## drinkAnswer

`drinkAnswer`

- is optional
- type: `enum`
- default: `"NOT_IMPORTANT"`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#drinkanswer-known-values).

### drinkAnswer Known Values

| Value           | Description |
| --------------- | ----------- |
| `NOT_IMPORTANT` |             |
| `TEA`           |             |
| `COFFEE`        |             |

## driverLicense

`driverLicense`

- is optional
- type: `string`
- defined in this schema

### driverLicense Type

`string`, nullable

## duration

`duration`

- is **required**
- type: `number`
- defined in this schema

### duration Type

`number`

## email

`email`

- is optional
- type: `string[]`
- defined in this schema

### email Type

Array type: `string[]`

All items must be of the type: `string`

## extraData

`extraData`

- is optional
- type: `object`
- defined in this schema

### extraData Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## extraID

`extraID`

- is optional
- type: `string`
- defined in this schema

### extraID Type

`string`, nullable

## extraId

`extraId`

- is optional
- type: `string`
- defined in this schema

### extraId Type

`string`

## extraVisitors

`extraVisitors`

- is optional
- type: `number`
- defined in this schema

### extraVisitors Type

`number`

## fax

`fax`

- is optional
- type: `string`
- defined in this schema

### fax Type

`string`, nullable

## feedback

`feedback`

- is optional
- type: reference
- defined in this schema

### feedback Type

- []() – `#/definitions/AppointmentClientFeedback`

## fieldID

`fieldID`

- is **required**
- type: `string`
- defined in this schema

### fieldID Type

`string`

## fieldName

`fieldName`

- is **required**
- type: `string`
- defined in this schema

### fieldName Type

`string`

## hideAppointmentTime

`hideAppointmentTime`

- is **required**
- type: `boolean`
- defined in this schema

### hideAppointmentTime Type

`boolean`

## houseNumber

`houseNumber`

- is optional
- type: `string`
- defined in this schema

### houseNumber Type

`string`, nullable

## id

`id`

- is **required**
- type: `string`
- defined in this schema

### id Type

`string`

## incomingPhone

`incomingPhone`

- is optional
- type: reference
- defined in this schema

### incomingPhone Type

Array type: reference

All items must be of the type:

- []() – `#/definitions/Phone`

## inprogress

`inprogress`

- is optional
- type: `boolean`
- defined in this schema

### inprogress Type

`boolean`

## integration_data

`integration_data`

- is optional
- type: `object`
- defined in this schema

### integration_data Type

`object` with following properties:

| Property  | Type        | Required     |
| --------- | ----------- | ------------ |
| `extraId` | string,null | **Required** |

#### extraId

`extraId`

- is **required**
- type: `string`

##### extraId Type

`string`, nullable

## isVIP

`isVIP`

- is optional
- type: `boolean`
- defined in this schema

### isVIP Type

`boolean`

## israelCity

`israelCity`

- is optional
- type: complex
- defined in this schema

### israelCity Type

**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

#### Condition 2

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


#### Condition 3

`object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `cityId` | string | **Required** |
| `name`   | string | **Required** |

#### cityId

`cityId`

- is **required**
- type: `string`

##### cityId Type

`string`

#### name

`name`

- is **required**
- type: `string`

##### name Type

`string`

## kupatHolim

`kupatHolim`

- is optional
- type: complex
- defined in this schema

### kupatHolim Type

**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

#### Condition 2

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


#### Condition 3

`object` with following properties:

| Property       | Type   | Required     |
| -------------- | ------ | ------------ |
| `kupatHolimId` | string | **Required** |
| `name`         | string | **Required** |

#### kupatHolimId

`kupatHolimId`

- is **required**
- type: `string`

##### kupatHolimId Type

`string`

#### name

`name`

- is **required**
- type: `string`

##### name Type

`string`

## language

`language`

- is optional
- type: `string`
- defined in this schema

### language Type

`string`

## middleName

`middleName`

- is optional
- type: `string`
- defined in this schema

### middleName Type

`string`, nullable

## name

`name`

- is **required**
- type: `string`
- defined in this schema

### name Type

`string`

## number

`number`

- is **required**
- type: `string`
- defined in this schema

### number Type

`string`

## originalAmount

`originalAmount`

- is optional
- type: `number`
- defined in this schema

### originalAmount Type

`number`, nullable

## originalMessage

`originalMessage`

- is optional
- type: `string`
- defined in this schema

### originalMessage Type

`string`

## parentClientID

`parentClientID`

- is optional
- type: `string`
- defined in this schema

### parentClientID Type

`string`

## parentProfileID

`parentProfileID`

- is optional
- type: `string`
- defined in this schema

### parentProfileID Type

`string`

## passportId

`passportId`

- is optional
- type: `string`
- defined in this schema

### passportId Type

`string`, nullable

## phone

`phone`

- is optional
- type: reference
- defined in this schema

### phone Type

Array type: reference

All items must be of the type:

- []() – `#/definitions/Phone`

## price

`price`

- is **required**
- type: reference
- defined in this schema

### price Type

- []() – `#/definitions/Price`

## rate

`rate`

- is optional
- type: `number`
- defined in this schema

### rate Type

`number`

## rating

`rating`

- is optional
- type: `string`
- defined in this schema

### rating Type

`string`

## requiredField

`requiredField`

- is **required**
- type: `boolean`
- defined in this schema

### requiredField Type

`boolean`

## seasonTicketId

`seasonTicketId`

- is optional
- type: `string`
- defined in this schema

### seasonTicketId Type

`string`, nullable

## seasonTicketNumber

`seasonTicketNumber`

- is optional
- type: `string`
- defined in this schema

### seasonTicketNumber Type

`string`, nullable

## sex

`sex`

- is optional
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#sex-known-values).

### sex Known Values

| Value           | Description |
| --------------- | ----------- |
| ``              |
| `MALE`          |             |
| `FEMALE`        |             |
| `NOT_SPECIFIED` |             |

## shortId

`shortId`

- is **required**
- type: `string`
- defined in this schema

### shortId Type

`string`

## shortName

`shortName`

- is **required**
- type: `string`
- defined in this schema

### shortName Type

`string`

## start

`start`

- is **required**
- type: `string`
- defined in this schema

### start Type

`string`

- format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))

## status

`status`

- is **required**
- type: reference
- defined in this schema

### status Type

- []() – `#/definitions/AppointmentStatus`

## surname

`surname`

- is **required**
- type: `string`
- defined in this schema

### surname Type

`string`

## talkAnswer

`talkAnswer`

- is optional
- type: `enum`
- default: `"NOT_IMPORTANT"`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#talkanswer-known-values).

### talkAnswer Known Values

| Value           | Description |
| --------------- | ----------- |
| `NOT_IMPORTANT` |             |
| `TALK`          |             |
| `NOT_TALK`      |             |

## taxiPark

`taxiPark`

- is optional
- type: `string`
- defined in this schema

### taxiPark Type

`string`, nullable

## taxiParkMemberCount

`taxiParkMemberCount`

- is optional
- type: `number`
- defined in this schema

### taxiParkMemberCount Type

`number`, nullable

## testRecord

`testRecord`

- is **required**
- type: `boolean`
- default: `false`
- defined in this schema

### testRecord Type

`boolean`

## type

`type`

- is **required**
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#type-known-values).

### type Known Values

| Value    | Description |
| -------- | ----------- |
| `STRING` |             |
| `BOOL`   |             |
| `RADIO`  |             |
| `FILE`   |             |
| `COUPON` |             |

## updated

`updated`

- is **required**
- type: `string`
- defined in this schema

### updated Type

`string`

- format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))

## value

`value`

- is **required**
- type: multiple
- defined in this schema

### value Type

Either one of:

- `number`
- `string`
- `object`
- or `null`

# Appointment Properties

| Property                                              | Type       | Required     | Nullable | Default | Defined by                |
| ----------------------------------------------------- | ---------- | ------------ | -------- | ------- | ------------------------- |
| [additionalClientAppears](#additionalclientappears)   | `object[]` | **Required** | No       |         | Appointment (this schema) |
| [additionalClientPayments](#additionalclientpayments) | `object[]` | **Required** | No       |         | Appointment (this schema) |
| [additionalClientSources](#additionalclientsources)   | `object[]` | **Required** | No       |         | Appointment (this schema) |
| [additionalClientStatuses](#additionalclientstatuses) | `object[]` | **Required** | No       |         | Appointment (this schema) |
| [additionalClientUtms](#additionalclientutms)         | `object[]` | **Required** | No       |         | Appointment (this schema) |
| [additionalClients](#additionalclients)               | reference  | **Required** | No       |         | Appointment (this schema) |
| [additionalFields](#additionalfields)                 | reference  | **Required** | No       |         | Appointment (this schema) |
| [additionalProducts](#additionalproducts)             | `object[]` | **Required** | No       |         | Appointment (this schema) |
| [additionalTaxonomies](#additionaltaxonomies)         | reference  | **Required** | No       |         | Appointment (this schema) |
| [additional_info](#additional_info)                   | `object`   | Optional     | No       |         | Appointment (this schema) |
| [address](#address)                                   | `string`   | Optional     | No       |         | Appointment (this schema) |
| [adjacentId](#adjacentid)                             | `string`   | Optional     | No       |         | Appointment (this schema) |
| [appointment](#appointment)                           | `object`   | **Required** | No       |         | Appointment (this schema) |
| [autoPhoneCallStatus](#autophonecallstatus)           | `string`   | Optional     | No       |         | Appointment (this schema) |
| [bannedClients](#bannedclients)                       | `string[]` | **Required** | No       |         | Appointment (this schema) |
| [business](#business)                                 | `object`   | **Required** | No       |         | Appointment (this schema) |
| [cabinet](#cabinet)                                   | `object`   | **Required** | No       |         | Appointment (this schema) |
| [capacity](#capacity)                                 | `number`   | Optional     | No       | `1`     | Appointment (this schema) |
| [changeReason](#changereason)                         | `string`   | **Required** | No       | `""`    | Appointment (this schema) |
| [client](#client)                                     | complex    | **Required** | No       |         | Appointment (this schema) |
| [clientComment](#clientcomment)                       | `string`   | **Required** | No       | `""`    | Appointment (this schema) |
| [clientVisitors](#clientvisitors)                     | reference  | Optional     | No       |         | Appointment (this schema) |
| [client_appear](#client_appear)                       | `enum`     | **Required** | No       |         | Appointment (this schema) |
| [client_med_code](#client_med_code)                   | `string`   | Optional     | No       |         | Appointment (this schema) |
| [client_payment](#client_payment)                     | `enum`     | **Required** | No       |         | Appointment (this schema) |
| [client_payment_invoice](#client_payment_invoice)     | `string`   | Optional     | No       |         | Appointment (this schema) |
| [color](#color)                                       | `string`   | Optional     | No       |         | Appointment (this schema) |
| [destinationKeyword](#destinationkeyword)             | `string`   | Optional     | No       |         | Appointment (this schema) |
| [destinationLink](#destinationlink)                   | `string`   | Optional     | No       |         | Appointment (this schema) |
| [extraFields](#extrafields)                           | reference  | **Required** | No       |         | Appointment (this schema) |
| [gt](#gt)                                             | `boolean`  | Optional     | No       |         | Appointment (this schema) |
| [gtTimeFrame](#gttimeframe)                           | `string`   | Optional     | No       |         | Appointment (this schema) |
| [location](#location)                                 | `object`   | Optional     | No       |         | Appointment (this schema) |
| [masterImportance](#masterimportance)                 | `boolean`  | Optional     | No       |         | Appointment (this schema) |
| [minClients](#minclients)                             | `number`   | Optional     | No       |         | Appointment (this schema) |
| [moveCounter](#movecounter)                           | `number`   | **Required** | No       |         | Appointment (this schema) |
| [movedByRobot](#movedbyrobot)                         | `boolean`  | **Required** | No       |         | Appointment (this schema) |
| [movedFromFired](#movedfromfired)                     | `boolean`  | Optional     | No       |         | Appointment (this schema) |
| [networkID](#networkid)                               | `string`   | Optional     | No       |         | Appointment (this schema) |
| [notes](#notes)                                       | `string`   | **Required** | No       | `""`    | Appointment (this schema) |
| [order](#order)                                       | `object`   | **Required** | No       |         | Appointment (this schema) |
| [preferredResource](#preferredresource)               | `boolean`  | Optional     | No       |         | Appointment (this schema) |
| [promoCode](#promocode)                               | `string`   | Optional     | No       |         | Appointment (this schema) |
| [refererLink](#refererlink)                           | `string`   | Optional     | No       |         | Appointment (this schema) |
| [referrer](#referrer)                                 | `string`   | Optional     | No       |         | Appointment (this schema) |
| [reminder](#reminder)                                 | `object`   | **Required** | No       |         | Appointment (this schema) |
| [removedClientsData](#removedclientsdata)             | `object[]` | **Required** | No       |         | Appointment (this schema) |
| [resource](#resource)                                 | `object`   | **Required** | No       |         | Appointment (this schema) |
| [review](#review)                                     | `object`   | Optional     | No       |         | Appointment (this schema) |
| [room](#room)                                         | `object`   | Optional     | No       |         | Appointment (this schema) |
| [showcase](#showcase)                                 | `object`   | **Required** | No       |         | Appointment (this schema) |
| [socialToken](#socialtoken)                           | `string`   | Optional     | No       |         | Appointment (this schema) |
| [source](#source)                                     | `string`   | **Required** | No       |         | Appointment (this schema) |
| [taxonomy](#taxonomy)                                 | `object`   | **Required** | No       |         | Appointment (this schema) |
| [utm](#utm)                                           | `object`   | Optional     | No       |         | Appointment (this schema) |
| [withCoSale](#withcosale)                             | `boolean`  | Optional     | No       |         | Appointment (this schema) |

## additionalClientAppears

`additionalClientAppears`

- is **required**
- type: `object[]`
- defined in this schema

### additionalClientAppears Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property   | Type   | Required     |
| ---------- | ------ | ------------ |
| `appear`   |        | **Required** |
| `clientID` | string | **Required** |

#### appear

`appear`

- is **required**
- type: reference

##### appear Type

- []() – `#/definitions/AppointmentClientAppear`

#### clientID

`clientID`

- is **required**
- type: `string`

##### clientID Type

`string`

## additionalClientPayments

`additionalClientPayments`

- is **required**
- type: `object[]`
- defined in this schema

### additionalClientPayments Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property   | Type   | Required     |
| ---------- | ------ | ------------ |
| `clientID` | string | **Required** |
| `payment`  |        | **Required** |

#### clientID

`clientID`

- is **required**
- type: `string`

##### clientID Type

`string`

#### payment

`payment`

- is **required**
- type: reference

##### payment Type

- []() – `#/definitions/AppointmentClientPayment`

## additionalClientSources

`additionalClientSources`

- is **required**
- type: `object[]`
- defined in this schema

### additionalClientSources Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property   | Type   | Required     |
| ---------- | ------ | ------------ |
| `_id`      | string | Optional     |
| `clientID` | string | **Required** |
| `source`   | string | **Required** |

#### \_id

`_id`

- is optional
- type: `string`

##### \_id Type

`string`

#### clientID

`clientID`

- is **required**
- type: `string`

##### clientID Type

`string`

#### source

`source`

- is **required**
- type: `string`

##### source Type

`string`

## additionalClientStatuses

`additionalClientStatuses`

- is **required**
- type: `object[]`
- defined in this schema

### additionalClientStatuses Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property   | Type   | Required     |
| ---------- | ------ | ------------ |
| `_id`      | string | Optional     |
| `clientID` | string | **Required** |
| `history`  | array  | Optional     |
| `status`   |        | **Required** |

#### \_id

`_id`

- is optional
- type: `string`

##### \_id Type

`string`

#### clientID

`clientID`

- is **required**
- type: `string`

##### clientID Type

`string`

#### history

`history`

- is optional
- type: `object[]`

##### history Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


#### status

`status`

- is **required**
- type: reference

##### status Type

- []() – `#/definitions/AppointmentStatus`

## additionalClientUtms

`additionalClientUtms`

- is **required**
- type: `object[]`
- defined in this schema

### additionalClientUtms Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property   | Type   | Required     |
| ---------- | ------ | ------------ |
| `_id`      | string | Optional     |
| `clientID` | string | **Required** |
| `utm`      | object | Optional     |

#### \_id

`_id`

- is optional
- type: `string`

##### \_id Type

`string`

#### clientID

`clientID`

- is **required**
- type: `string`

##### clientID Type

`string`

#### utm

`utm`

- is optional
- type: `object`

##### utm Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## additionalClients

`additionalClients`

- is **required**
- type: reference
- defined in this schema

### additionalClients Type

Array type: reference

All items must be of the type:

- []() – `#/definitions/AppointmentClient`

## additionalFields

`additionalFields`

- is **required**
- type: reference
- defined in this schema

### additionalFields Type

Array type: reference

All items must be of the type:

- []() – `#/definitions/AdditionalField`

## additionalProducts

`additionalProducts`

- is **required**
- type: `object[]`
- defined in this schema

### additionalProducts Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `id`     | string | **Required** |
| `price`  | number | **Required** |

#### id

`id`

- is **required**
- type: `string`

##### id Type

`string`

#### price

`price`

- is **required**
- type: `number`

##### price Type

`number`

## additionalTaxonomies

`additionalTaxonomies`

- is **required**
- type: reference
- defined in this schema

### additionalTaxonomies Type

Array type: reference

All items must be of the type:

- []() – `#/definitions/AppointmentTaxonomy`

## additional_info

`additional_info`

- is optional
- type: `object`
- defined in this schema

### additional_info Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## address

`address`

- is optional
- type: `string`
- defined in this schema

### address Type

`string`

## adjacentId

`adjacentId`

- is optional
- type: `string`
- defined in this schema

### adjacentId Type

`string`

## appointment

`appointment`

- is **required**
- type: `object`
- defined in this schema

### appointment Type

`object` with following properties:

| Property              | Type          | Required     | Default           |
| --------------------- | ------------- | ------------ | ----------------- |
| `backofficeID`        | string,number | **Required** | `0`               |
| `blockSMS`            | boolean       | **Required** |                   |
| `created`             | string        | **Required** |                   |
| `drinkAnswer`         | string        | Optional     | `"NOT_IMPORTANT"` |
| `duration`            | number        | **Required** |                   |
| `hideAppointmentTime` | boolean       | **Required** |                   |
| `id`                  | string        | **Required** |                   |
| `integration_data`    | object        | Optional     |                   |
| `price`               |               | **Required** |                   |
| `shortId`             | string        | **Required** |                   |
| `start`               | string        | **Required** |                   |
| `status`              |               | **Required** |                   |
| `talkAnswer`          | string        | Optional     | `"NOT_IMPORTANT"` |
| `testRecord`          | boolean       | **Required** | `false`           |
| `updated`             | string        | **Required** |                   |

#### backofficeID

`backofficeID`

- is **required**
- type: multiple
- default: `0`

##### backofficeID Type

Unknown type `string,number`.

```json
{
  "type": ["string", "number"],
  "default": 0,
  "simpletype": "multiple"
}
```

#### blockSMS

`blockSMS`

- is **required**
- type: `boolean`

##### blockSMS Type

`boolean`

#### created

`created`

- is **required**
- type: `string`

##### created Type

`string`

- format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))

#### drinkAnswer

`drinkAnswer`

- is optional
- type: `enum`
- default: `"NOT_IMPORTANT"`

The value of this property **must** be equal to one of the [known values below](#appointment-known-values).

##### drinkAnswer Known Values

| Value           | Description |
| --------------- | ----------- |
| `NOT_IMPORTANT` |             |
| `TEA`           |             |
| `COFFEE`        |             |

#### duration

`duration`

- is **required**
- type: `number`

##### duration Type

`number`

#### hideAppointmentTime

`hideAppointmentTime`

- is **required**
- type: `boolean`

##### hideAppointmentTime Type

`boolean`

#### id

`id`

- is **required**
- type: `string`

##### id Type

`string`

#### integration_data

`integration_data`

- is optional
- type: `object`

##### integration_data Type

`object` with following properties:

| Property  | Type        | Required     |
| --------- | ----------- | ------------ |
| `extraId` | string,null | **Required** |

#### extraId

`extraId`

- is **required**
- type: `string`

##### extraId Type

`string`, nullable

#### price

`price`

- is **required**
- type: reference

##### price Type

- []() – `#/definitions/Price`

#### shortId

`shortId`

- is **required**
- type: `string`

##### shortId Type

`string`

#### start

`start`

- is **required**
- type: `string`

##### start Type

`string`

- format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))

#### status

`status`

- is **required**
- type: reference

##### status Type

- []() – `#/definitions/AppointmentStatus`

#### talkAnswer

`talkAnswer`

- is optional
- type: `enum`
- default: `"NOT_IMPORTANT"`

The value of this property **must** be equal to one of the [known values below](#appointment-known-values).

##### talkAnswer Known Values

| Value           | Description |
| --------------- | ----------- |
| `NOT_IMPORTANT` |             |
| `TALK`          |             |
| `NOT_TALK`      |             |

#### testRecord

`testRecord`

- is **required**
- type: `boolean`
- default: `false`

##### testRecord Type

`boolean`

#### updated

`updated`

- is **required**
- type: `string`

##### updated Type

`string`

- format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))

## autoPhoneCallStatus

`autoPhoneCallStatus`

- is optional
- type: `string`
- defined in this schema

### autoPhoneCallStatus Type

`string`

## bannedClients

`bannedClients`

- is **required**
- type: `string[]`
- defined in this schema

### bannedClients Type

Array type: `string[]`

All items must be of the type: `string`

## business

`business`

- is **required**
- type: `object`
- defined in this schema

### business Type

`object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `id`     | string | **Required** |

#### id

`id`

- is **required**
- type: `string`

##### id Type

`string`

## cabinet

`cabinet`

- is **required**
- type: `object`
- defined in this schema

### cabinet Type

`object` with following properties:

| Property | Type   | Required |
| -------- | ------ | -------- |
| `id`     | string | Optional |

#### id

`id`

- is optional
- type: `string`

##### id Type

`string`

## capacity

`capacity`

- is optional
- type: `number`
- default: `1`
- defined in this schema

### capacity Type

`number`

## changeReason

`changeReason`

- is **required**
- type: `string`
- default: `""`
- defined in this schema

### changeReason Type

`string`

## client

`client`

- is **required**
- type: complex
- defined in this schema

### client Type

**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

- []() – `#/definitions/AppointmentClient`

#### Condition 2

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## clientComment

`clientComment`

- is **required**
- type: `string`
- default: `""`
- defined in this schema

### clientComment Type

`string`

## clientVisitors

`clientVisitors`

- is optional
- type: reference
- defined in this schema

### clientVisitors Type

Array type: reference

All items must be of the type:

- []() – `#/definitions/AppointmentClientVisitor`

## client_appear

`client_appear`

- is **required**
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#client_appear-known-values).

### client_appear Known Values

| Value        | Description |
| ------------ | ----------- |
| `YES_APPEAR` |             |
| `NO_APPEAR`  |             |
| `NONE`       |             |

## client_med_code

`client_med_code`

- is optional
- type: `string`
- defined in this schema

### client_med_code Type

`string`

## client_payment

`client_payment`

- is **required**
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#client_payment-known-values).

### client_payment Known Values

| Value              | Description |
| ------------------ | ----------- |
| `YES_PAYED_ONLINE` |             |
| `YES_PAYED_FULL`   |             |
| `YES_PAYED_PART`   |             |
| `NO_PAYMENT`       |             |
| `NONE`             |             |

## client_payment_invoice

`client_payment_invoice`

- is optional
- type: `string`
- defined in this schema

### client_payment_invoice Type

`string`

## color

`color`

- is optional
- type: `string`
- defined in this schema

### color Type

`string`

## destinationKeyword

`destinationKeyword`

- is optional
- type: `string`
- defined in this schema

### destinationKeyword Type

`string`

## destinationLink

`destinationLink`

- is optional
- type: `string`
- defined in this schema

### destinationLink Type

`string`

## extraFields

`extraFields`

- is **required**
- type: reference
- defined in this schema

### extraFields Type

Array type: reference

All items must be of the type:

- []() – `#/definitions/ExtraField`

## gt

`gt`

- is optional
- type: `boolean`
- defined in this schema

### gt Type

`boolean`

## gtTimeFrame

`gtTimeFrame`

- is optional
- type: `string`
- defined in this schema

### gtTimeFrame Type

`string`

## location

`location`

- is optional
- type: `object`
- defined in this schema

### location Type

`object` with following properties:

| Property    | Type   | Required     |
| ----------- | ------ | ------------ |
| `latitude`  | number | **Required** |
| `longitude` | number | **Required** |

#### latitude

`latitude`

- is **required**
- type: `number`

##### latitude Type

`number`

#### longitude

`longitude`

- is **required**
- type: `number`

##### longitude Type

`number`

## masterImportance

`masterImportance`

- is optional
- type: `boolean`
- defined in this schema

### masterImportance Type

`boolean`

## minClients

`minClients`

- is optional
- type: `number`
- defined in this schema

### minClients Type

`number`

## moveCounter

`moveCounter`

- is **required**
- type: `number`
- defined in this schema

### moveCounter Type

`number`

## movedByRobot

`movedByRobot`

- is **required**
- type: `boolean`
- defined in this schema

### movedByRobot Type

`boolean`

## movedFromFired

`movedFromFired`

- is optional
- type: `boolean`
- defined in this schema

### movedFromFired Type

`boolean`

## networkID

`networkID`

- is optional
- type: `string`
- defined in this schema

### networkID Type

`string`

## notes

`notes`

- is **required**
- type: `string`
- default: `""`
- defined in this schema

### notes Type

`string`

## order

`order`

- is **required**
- type: `object`
- defined in this schema

### order Type

`object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `id`     | string | **Required** |

#### id

`id`

- is **required**
- type: `string`

##### id Type

`string`

## preferredResource

`preferredResource`

- is optional
- type: `boolean`
- defined in this schema

### preferredResource Type

`boolean`

## promoCode

`promoCode`

- is optional
- type: `string`
- defined in this schema

### promoCode Type

`string`

## refererLink

`refererLink`

- is optional
- type: `string`
- defined in this schema

### refererLink Type

`string`

## referrer

`referrer`

- is optional
- type: `string`
- defined in this schema

### referrer Type

`string`

## reminder

`reminder`

- is **required**
- type: `object`
- defined in this schema

### reminder Type

`object` with following properties:

| Property        | Type   | Required     |
| --------------- | ------ | ------------ |
| `status`        | string | **Required** |
| `time_reminder` | number | **Required** |

#### status

`status`

- is **required**
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#reminder-known-values).

##### status Known Values

| Value     | Description |
| --------- | ----------- |
| `ON`      |             |
| `OFF`     |             |
| `NOT_SET` |             |

#### time_reminder

`time_reminder`

- is **required**
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#reminder-known-values).

##### time_reminder Known Values

| Value | Description |
| ----- | ----------- |
| `0`   |             |
| `1`   |             |
| `2`   |             |
| `4`   |             |
| `6`   |             |
| `8`   |             |
| `12`  |             |
| `24`  |             |

## removedClientsData

`removedClientsData`

- is **required**
- type: `object[]`
- defined in this schema

### removedClientsData Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property          | Type   | Required     |
| ----------------- | ------ | ------------ |
| `appear`          |        | Optional     |
| `client`          |        | **Required** |
| `created`         | string | Optional     |
| `payment`         |        | Optional     |
| `payment_invoice` | string | Optional     |
| `source`          | string | Optional     |
| `status`          |        | Optional     |

#### appear

`appear`

- is optional
- type: reference

##### appear Type

- []() – `#/definitions/AppointmentClientAppear`

#### client

`client`

- is **required**
- type: reference

##### client Type

- []() – `#/definitions/AppointmentClient`

#### created

`created`

- is optional
- type: `string`

##### created Type

`string`

- format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))

#### payment

`payment`

- is optional
- type: reference

##### payment Type

- []() – `#/definitions/AppointmentClientPayment`

#### payment_invoice

`payment_invoice`

- is optional
- type: `string`

##### payment_invoice Type

`string`

#### source

`source`

- is optional
- type: `string`

##### source Type

`string`

#### status

`status`

- is optional
- type: reference

##### status Type

- []() – `#/definitions/AppointmentStatus`

## resource

`resource`

- is **required**
- type: `object`
- defined in this schema

### resource Type

`object` with following properties:

| Property     | Type        | Required     |
| ------------ | ----------- | ------------ |
| `extraID`    | string,null | Optional     |
| `id`         | string      | **Required** |
| `middleName` | string      | Optional     |
| `name`       | string      | **Required** |
| `surname`    | string      | **Required** |

#### extraID

`extraID`

- is optional
- type: `string`

##### extraID Type

`string`, nullable

#### id

`id`

- is **required**
- type: `string`

##### id Type

`string`

#### middleName

`middleName`

- is optional
- type: `string`

##### middleName Type

`string`

#### name

`name`

- is **required**
- type: `string`

##### name Type

`string`

#### surname

`surname`

- is **required**
- type: `string`

##### surname Type

`string`

## review

`review`

- is optional
- type: `object`
- defined in this schema

### review Type

`object` with following properties:

| Property   | Type | Required     |
| ---------- | ---- | ------------ |
| `business` |      | **Required** |
| `taxonomy` |      | **Required** |
| `worker`   |      | **Required** |

#### business

`business`

- is **required**
- type: reference

##### business Type

- []() – `#/definitions/Review`

#### taxonomy

`taxonomy`

- is **required**
- type: reference

##### taxonomy Type

- []() – `#/definitions/Review`

#### worker

`worker`

- is **required**
- type: reference

##### worker Type

- []() – `#/definitions/Review`

## room

`room`

- is optional
- type: `object`
- defined in this schema

### room Type

`object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `id`     | string | **Required** |

#### id

`id`

- is **required**
- type: `string`

##### id Type

`string`

## showcase

`showcase`

- is **required**
- type: `object`
- defined in this schema

### showcase Type

`object` with following properties:

| Property     | Type   | Required |
| ------------ | ------ | -------- |
| `businessID` | string | Optional |

#### businessID

`businessID`

- is optional
- type: `string`

##### businessID Type

`string`

## socialToken

`socialToken`

- is optional
- type: `string`
- defined in this schema

### socialToken Type

`string`

## source

`source`

- is **required**
- type: `string`
- defined in this schema

### source Type

`string`

## taxonomy

`taxonomy`

- is **required**
- type: `object`
- defined in this schema

### taxonomy Type

`object` with following properties:

| Property  | Type   | Required     |
| --------- | ------ | ------------ |
| `alias`   | string | **Required** |
| `extraId` | string | Optional     |
| `id`      | string | **Required** |

#### alias

`alias`

- is **required**
- type: `string`

##### alias Type

`string`

#### extraId

`extraId`

- is optional
- type: `string`

##### extraId Type

`string`

#### id

`id`

- is **required**
- type: `string`

##### id Type

`string`

## utm

`utm`

- is optional
- type: `object`
- defined in this schema

### utm Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## withCoSale

`withCoSale`

- is optional
- type: `boolean`
- defined in this schema

### withCoSale Type

`boolean`
