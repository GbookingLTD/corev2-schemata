
#  Schema

Данные клиента


## Schema Hierarchy

*  `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/client.schema.json`
  * [Phone](phone.schema.md) `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/phone.schema.json`



| Property | Type | Required | Default |
|----------|------|----------|---------|
| [name](#name) | `string` | **Required** |  |  (this schema) |
| [surname](#surname) | `string` | **Required** |  |  (this schema) |
| [middle_name](#middle_name) | `string` | Optional |  |  (this schema) |
| [birthday](#birthday) | `string` | Optional |  |  (this schema) |
| [phone](#phone) | Phone | **Required** |  |  (this schema) |
| [email](#email) | `string[]` | Optional |  |  (this schema) |
| [fromSms](#fromsms) | `boolean` | Optional | `false` |  (this schema) |
| [sex](#sex) | `enum` | Optional |  |  (this schema) |
| [creatorProfileID](#creatorprofileid) | `string` | Optional |  |  (this schema) |
| [creatorProfileName](#creatorprofilename) | `string` | Optional |  |  (this schema) |
| [driverLicense](#driverlicense) | `string` | Optional |  |  (this schema) |
| [taxiPark](#taxipark) | `string` | Optional |  |  (this schema) |
| [taxiParkMemberCount](#taxiparkmembercount) | `number` | Optional |  |  (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## birthday


`birthday`
* is optional
* type: `string`
* defined in this schema

### birthday type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## creatorProfileID


`creatorProfileID`
* is optional
* type: `string`
* defined in this schema

### creatorProfileID type


`string`






## creatorProfileName


`creatorProfileName`
* is optional
* type: `string`
* defined in this schema

### creatorProfileName type


`string`






## driverLicense


`driverLicense`
* is optional
* type: `string`
* defined in this schema

### driverLicense type


`string`






## email


`email`
* is optional
* type: `string[]`

* defined in this schema

### email type


Array type: `string[]`

All items must be of the type:
`string`









## fromSms


`fromSms`
* is optional
* type: `boolean`
* default: `false`
* defined in this schema

### fromSms type


`boolean`





## middle_name


`middle_name`
* is optional
* type: `string`
* defined in this schema

### middle_name type


`string`






## name


`name`
* is **required**
* type: `string`
* defined in this schema

### name type


`string`






## phone


`phone`
* is **required**
* type: Phone
* defined in this schema

### phone type



* [Phone](phone.schema.md) – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/phone.schema.json`





## sex


`sex`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#sex-known-values).

### sex Known Values
| Value | Description |
|-------|-------------|
| `MALE` |  |
| `FEMALE` |  |
| `NOT_SPECIFIED` |  |




## surname


`surname`
* is **required**
* type: `string`
* defined in this schema

### surname type


`string`






## taxiPark


`taxiPark`
* is optional
* type: `string`
* defined in this schema

### taxiPark type


`string`






## taxiParkMemberCount


`taxiParkMemberCount`
* is optional
* type: `number`
* defined in this schema

### taxiParkMemberCount type


`number`





