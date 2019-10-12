
# BusinessInfo Schema

Содержит детальную информацию о бизнесе — название, адрес, график работы и другое


## Schema Hierarchy

* BusinessInfo `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/businessInfo.schema.json`
  * [Timetable](../timetable.schema.md) `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/timetable.schema.json`
  * [language.schema](language.schema.md) `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/language.schema.json`



| Property | Type | Required | Default |
|----------|------|----------|---------|
| [revisionVersion](#revisionversion) | `number` | Optional |  | BusinessInfo (this schema) |
| [name](#name) | `string` | Optional |  | BusinessInfo (this schema) |
| [address](#address) | address.schema | Optional |  | BusinessInfo (this schema) |
| [email](#email) | `string` | Optional |  | BusinessInfo (this schema) |
| [phone](#phone) | Phone | Optional |  | BusinessInfo (this schema) |
| [mobile](#mobile) | Phone | Optional |  | BusinessInfo (this schema) |
| [fax](#fax) | Phone | Optional |  | BusinessInfo (this schema) |
| [timezone](#timezone) | `string` | Optional |  | BusinessInfo (this schema) |
| [description](#description) | `string` | Optional |  | BusinessInfo (this schema) |
| [logo_url](#logo_url) | complex | Optional |  | BusinessInfo (this schema) |
| [additionalFields](#additionalfields) | AdditionalFields | Optional |  | BusinessInfo (this schema) |
| [contactName](#contactname) | `string` | Optional |  | BusinessInfo (this schema) |
| [website](#website) | `string` | Optional |  | BusinessInfo (this schema) |
| [timetable](#timetable) | Timetable | Optional |  | BusinessInfo (this schema) |
| [instant_messaging](#instant_messaging) | `object[]` | Optional |  | BusinessInfo (this schema) |
| [social_network](#social_network) | socialNetwork.schema | Optional |  | BusinessInfo (this schema) |
| [accepted_currency](#accepted_currency) | `reference[]` | Optional |  | BusinessInfo (this schema) |
| [paymentMethods](#paymentmethods) | `enum` | Optional |  | BusinessInfo (this schema) |
| [date_joined](#date_joined) | `string` | Optional |  | BusinessInfo (this schema) |
| [additional_info](#additional_info) | complex | Optional |  | BusinessInfo (this schema) |
| [phone_mask](#phone_mask) | complex | Optional |  | BusinessInfo (this schema) |
| [min_booking_time](#min_booking_time) | complex | Optional |  | BusinessInfo (this schema) |
| [images](#images) | `string[]` | Optional |  | BusinessInfo (this schema) |
| [metro](#metro) | `object` | Optional |  | BusinessInfo (this schema) |
| [language](#language) | `enum` | Optional |  | BusinessInfo (this schema) |
| [networkID](#networkid) | complex | Optional |  | BusinessInfo (this schema) |
| [autoAcceptAppointment](#autoacceptappointment) | `boolean` | Optional | `false` | BusinessInfo (this schema) |
| [showAppointmentTooltip](#showappointmenttooltip) | `boolean` | Optional | `false` | BusinessInfo (this schema) |
| [showAppointmentColor](#showappointmentcolor) | `boolean` | Optional | `false` | BusinessInfo (this schema) |
| [newboEnabledFor](#newboenabledfor) | `string[]` | Optional |  | BusinessInfo (this schema) |
| [pricingType](#pricingtype) | `enum` | Optional | `"DEFAULT"` | BusinessInfo (this schema) |
| [schedulerTick](#schedulertick) | `number` | Optional | `15` | BusinessInfo (this schema) |
| [skipBilling](#skipbilling) | `boolean` | Optional | `false` | BusinessInfo (this schema) |
| [showResourceWorkStatistics](#showresourceworkstatistics) | `boolean` | Optional |  | BusinessInfo (this schema) |
| [showWorkerProfession](#showworkerprofession) | `boolean` | Optional | `false` | BusinessInfo (this schema) |
| [verticalTranslation](#verticaltranslation) | `enum` | Optional | `"NONE"` | BusinessInfo (this schema) |
| [smsDuplicateFilter](#smsduplicatefilter) | `object` | Optional |  | BusinessInfo (this schema) |
| [marketingNotifications](#marketingnotifications) | `object` | Optional |  | BusinessInfo (this schema) |
| [isShowcase](#isshowcase) | `boolean` | Optional | `false` | BusinessInfo (this schema) |

## accepted_currency


`accepted_currency`
* is optional
* type: `reference[]`

* defined in this schema

### accepted_currency type


Array type: `reference[]`

All items must be of the type:
`string`



  
Аббревиатура валюты







## additionalFields


`additionalFields`
* is optional
* type: AdditionalFields

* defined in this schema

### additionalFields type


Array type: AdditionalFields

All items must be of the type:

* [AdditionalFields](../additionalField.schema.md) – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/additionalFields.schema.json`








## additional_info


`additional_info`
* is optional
* type: complex
* defined in this schema

### additional_info type

Unknown type `string,null`.

```json
{
  "type": [
    "string",
    "null"
  ],
  "simpletype": "complex"
}
```





## address

Адреса компании или филиала

`address`
* is optional
* type: address.schema

* defined in this schema

### address type


Array type: address.schema

All items must be of the type:

* [address.schema](../address.schema.md) – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/address.schema.json`








## autoAcceptAppointment


`autoAcceptAppointment`
* is optional
* type: `boolean`
* default: `false`
* defined in this schema

### autoAcceptAppointment type


`boolean`





## contactName


`contactName`
* is optional
* type: `string`
* defined in this schema

### contactName type


`string`






## date_joined


`date_joined`
* is optional
* type: `string`
* defined in this schema

### date_joined type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## description


`description`
* is optional
* type: `string`
* defined in this schema

### description type


`string`






## email

Список e-mail адресов компании или филиала

`email`
* is optional
* type: `string`
* defined in this schema

### email type


`string`






## fax


`fax`
* is optional
* type: Phone

* defined in this schema

### fax type


Array type: Phone

All items must be of the type:

* [Phone](../phone.schema.md) – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/phone.schema.json`








## images


`images`
* is optional
* type: `string[]`

* defined in this schema

### images type


Array type: `string[]`

All items must be of the type:
`string`









## instant_messaging


`instant_messaging`
* is optional
* type: `object[]`

* defined in this schema

### instant_messaging type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|








## isShowcase


`isShowcase`
* is optional
* type: `boolean`
* default: `false`
* defined in this schema

### isShowcase type


`boolean`





## language


`language`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#language-known-values).

### language Known Values
| Value | Description |
|-------|-------------|
| `en-us` |  |
| `ru-ru` |  |
| `he-il` |  |
| `fr-fr` |  |
| `hu-hu` |  |
| `ee-ee` |  |
| `lv-lv` |  |
| `lt-lt` |  |
| `de-de` |  |
| `zh-cn` |  |
| `fi-fi` |  |
| `am-am` |  |
| `es-es` |  |
| `ge-ge` |  |
| `uz-uz` |  |




## logo_url


`logo_url`
* is optional
* type: complex
* defined in this schema

### logo_url type

Unknown type `string,null`.

```json
{
  "description": "",
  "type": [
    "string",
    "null"
  ],
  "simpletype": "complex"
}
```





## marketingNotifications


`marketingNotifications`
* is optional
* type: `object`
* defined in this schema

### marketingNotifications type


`object` with following properties:


| Property | Type | Required | Default |
|----------|------|----------|---------|
| `active`| boolean | **Required** | `false` |
| `accepted`| boolean | **Required** | `false` |
| `useSmsAlphaName`| boolean | **Required** | `false` |



#### accepted

undefined

`accepted`
* is **required**
* type: `boolean`
* default: `false`


##### accepted type


`boolean`







#### active

undefined

`active`
* is **required**
* type: `boolean`
* default: `false`


##### active type


`boolean`







#### useSmsAlphaName

undefined

`useSmsAlphaName`
* is **required**
* type: `boolean`
* default: `false`


##### useSmsAlphaName type


`boolean`










## metro


`metro`
* is optional
* type: `object`
* defined in this schema

### metro type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `name`| string | Optional |
| `distance`| number | Optional |
| `color`| string | Optional |



#### color

undefined

`color`
* is optional
* type: `string`

##### color type


`string`








#### distance

undefined

`distance`
* is optional
* type: `number`

##### distance type


`number`








#### name

undefined

`name`
* is optional
* type: `string`

##### name type


`string`











## min_booking_time


`min_booking_time`
* is optional
* type: complex
* defined in this schema

### min_booking_time type

Unknown type `number,null`.

```json
{
  "type": [
    "number",
    "null"
  ],
  "simpletype": "complex"
}
```





## mobile

Список телефонов бизнеса

`mobile`
* is optional
* type: Phone

* defined in this schema

### mobile type


Array type: Phone

All items must be of the type:

* [Phone](../phone.schema.md) – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/phone.schema.json`








## name

Название бизнеса

`name`
* is optional
* type: `string`
* defined in this schema

### name type


`string`






## networkID


`networkID`
* is optional
* type: complex
* defined in this schema

### networkID type

Unknown type `number,null`.

```json
{
  "type": [
    "number",
    "null"
  ],
  "simpletype": "complex"
}
```





## newboEnabledFor


`newboEnabledFor`
* is optional
* type: `string[]`

* defined in this schema

### newboEnabledFor type


Array type: `string[]`

All items must be of the type:
`string`









## paymentMethods


`paymentMethods`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#paymentmethods-known-values).

### paymentMethods Known Values
| Value | Description |
|-------|-------------|
| `Visa` |  |
| `Mastercard` |  |
| `Amex` |  |
| `PayPal` |  |
| `MoneyBookers` |  |




## phone

Список телефонов бизнеса

`phone`
* is optional
* type: Phone

* defined in this schema

### phone type


Array type: Phone

All items must be of the type:

* [Phone](../phone.schema.md) – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/phone.schema.json`








## phone_mask


`phone_mask`
* is optional
* type: complex
* defined in this schema

### phone_mask type

Unknown type `string,null`.

```json
{
  "type": [
    "string",
    "null"
  ],
  "simpletype": "complex"
}
```





## pricingType


`pricingType`
* is optional
* type: `enum`
* default: `"DEFAULT"`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#pricingtype-known-values).

### pricingType Known Values
| Value | Description |
|-------|-------------|
| `DEFAULT` |  |
| `MASTER_TOPMASTER` |  |




## revisionVersion


`revisionVersion`
* is optional
* type: `number`
* defined in this schema

### revisionVersion type


`number`






## schedulerTick


`schedulerTick`
* is optional
* type: `number`
* default: `15`
* defined in this schema

### schedulerTick type


`number`






## showAppointmentColor


`showAppointmentColor`
* is optional
* type: `boolean`
* default: `false`
* defined in this schema

### showAppointmentColor type


`boolean`





## showAppointmentTooltip


`showAppointmentTooltip`
* is optional
* type: `boolean`
* default: `false`
* defined in this schema

### showAppointmentTooltip type


`boolean`





## showResourceWorkStatistics


`showResourceWorkStatistics`
* is optional
* type: `boolean`
* defined in this schema

### showResourceWorkStatistics type


`boolean`





## showWorkerProfession


`showWorkerProfession`
* is optional
* type: `boolean`
* default: `false`
* defined in this schema

### showWorkerProfession type


`boolean`





## skipBilling


`skipBilling`
* is optional
* type: `boolean`
* default: `false`
* defined in this schema

### skipBilling type


`boolean`





## smsDuplicateFilter


`smsDuplicateFilter`
* is optional
* type: `object`
* defined in this schema

### smsDuplicateFilter type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `active`| boolean | Optional |



#### active

undefined

`active`
* is optional
* type: `boolean`

##### active type


`boolean`










## social_network


`social_network`
* is optional
* type: socialNetwork.schema

* defined in this schema

### social_network type


Array type: socialNetwork.schema

All items must be of the type:

* [socialNetwork.schema](../socialNetwork.schema.md) – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/socialnetwork.schema.json`








## timetable


`timetable`
* is optional
* type: Timetable
* defined in this schema

### timetable type



* [Timetable](../timetable.schema.md) – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/timetable.schema.json`





## timezone


`timezone`
* is optional
* type: `string`
* defined in this schema

### timezone type


`string`






## verticalTranslation


`verticalTranslation`
* is optional
* type: `enum`
* default: `"NONE"`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#verticaltranslation-known-values).

### verticalTranslation Known Values
| Value | Description |
|-------|-------------|
| `NONE` |  |
| `GENERIC` |  |
| `MEDICAL` |  |
| `BEAUTY` |  |
| `FITNESS` |  |
| `SPORT` |  |
| `YOGA` |  |




## website


`website`
* is optional
* type: `string`
* defined in this schema

### website type


`string`





