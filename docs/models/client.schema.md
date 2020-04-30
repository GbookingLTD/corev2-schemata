# Schema

```
schemas-json/models/client.schema.json
```

Данные клиента

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                      |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ----------------------------------------------- |
| Can be instantiated | No         | Experimental | No           | Forbidden         | Forbidden             | [models/client.schema.json](client.schema.json) |

# Properties

| Property                                                  | Type       | Required     | Nullable | Default    | Defined by    |
| --------------------------------------------------------- | ---------- | ------------ | -------- | ---------- | ------------- |
| [address](#address)                                       | `string`   | Optional     | No       | `""`       | (this schema) |
| [birthday](#birthday)                                     | multiple   | Optional     | Yes      |            | (this schema) |
| [blackList](#blacklist)                                   | `string`   | Optional     | No       |            | (this schema) |
| [childrenClients](#childrenclients)                       | `object[]` | Optional     | No       |            | (this schema) |
| [clientCardCreationDate](#clientcardcreationdate)         | `string`   | Optional     | No       |            | (this schema) |
| [clientCardNumber](#clientcardnumber)                     | `string`   | Optional     | No       |            | (this schema) |
| [clientContractNumber](#clientcontractnumber)             | `string`   | Optional     | No       |            | (this schema) |
| [creatorProfileID](#creatorprofileid)                     | `string`   | Optional     | Yes      |            | (this schema) |
| [creatorProfileName](#creatorprofilename)                 | `string`   | Optional     | Yes      |            | (this schema) |
| [discountCode](#discountcode)                             | `string`   | Optional     | No       |            | (this schema) |
| [driverLicense](#driverlicense)                           | `string`   | Optional     | Yes      |            | (this schema) |
| [email](#email)                                           | `string[]` | Optional     | No       |            | (this schema) |
| [extraFields](#extrafields)                               | `object[]` | Optional     | No       |            | (this schema) |
| [extraID](#extraid)                                       | `string`   | Optional     | No       |            | (this schema) |
| [favResources](#favresources)                             | `object[]` | Optional     | No       |            | (this schema) |
| [fax](#fax)                                               | reference  | Optional     | No       |            | (this schema) |
| [fromSms](#fromsms)                                       | multiple   | Optional     | No       | `false`    | (this schema) |
| [fullAddress](#fulladdress)                               | reference  | Optional     | No       |            | (this schema) |
| [houseNumber](#housenumber)                               | `string`   | Optional     | No       |            | (this schema) |
| [icon_url](#icon_url)                                     | `string`   | Optional     | No       |            | (this schema) |
| [id](#id)                                                 | `string`   | Optional     | No       |            | (this schema) |
| [insuranceCompany](#insurancecompany)                     | `string`   | Optional     | No       |            | (this schema) |
| [insuranceNumber](#insurancenumber)                       | `string`   | Optional     | No       |            | (this schema) |
| [integrationData](#integrationdata)                       | `object`   | Optional     | No       |            | (this schema) |
| [isLazy](#islazy)                                         | `boolean`  | Optional     | No       |            | (this schema) |
| [isVIP](#isvip)                                           | `boolean`  | Optional     | No       | `"false;"` | (this schema) |
| [israelCity](#israelcity)                                 | `string`   | Optional     | No       |            | (this schema) |
| [kupatHolim](#kupatholim)                                 | `string`   | Optional     | No       |            | (this schema) |
| [language](#language)                                     | reference  | Optional     | No       |            | (this schema) |
| [lazyResolvedDate](#lazyresolveddate)                     | `string`   | Optional     | No       |            | (this schema) |
| [locality](#locality)                                     | `string`   | Optional     | No       |            | (this schema) |
| [loyaltyInfo](#loyaltyinfo)                               | reference  | Optional     | No       |            | (this schema) |
| [middleName](#middlename)                                 | `string`   | Optional     | Yes      |            | (this schema) |
| [name](#name)                                             | `string`   | **Required** | No       |            | (this schema) |
| [passportDate](#passportdate)                             | `string`   | Optional     | No       |            | (this schema) |
| [passportId](#passportid)                                 | `string`   | Optional     | No       |            | (this schema) |
| [passportIssued](#passportissued)                         | `string`   | Optional     | No       |            | (this schema) |
| [passportSeries](#passportseries)                         | `string`   | Optional     | No       |            | (this schema) |
| [phone](#phone)                                           | reference  | **Required** | No       |            | (this schema) |
| [receiveSmsAfterService](#receivesmsafterservice)         | `string`   | Optional     | No       |            | (this schema) |
| [sex](#sex)                                               | `enum`     | Optional     | No       |            | (this schema) |
| [skipMarketingNotifications](#skipmarketingnotifications) | `boolean`  | Optional     | No       |            | (this schema) |
| [skipNotifications](#skipnotifications)                   | `boolean`  | Optional     | No       |            | (this schema) |
| [snils](#snils)                                           | `string`   | Optional     | No       |            | (this schema) |
| [status](#status)                                         | `enum`     | Optional     | No       |            | (this schema) |
| [surname](#surname)                                       | `string`   | **Required** | No       |            | (this schema) |
| [taxiPark](#taxipark)                                     | `string`   | Optional     | Yes      |            | (this schema) |
| [taxiParkMemberCount](#taxiparkmembercount)               | multiple   | Optional     | Yes      |            | (this schema) |
| [twoFAUserID](#twofauserid)                               | `string`   | Optional     | No       |            | (this schema) |
| [workPlace](#workplace)                                   | `string`   | Optional     | No       |            | (this schema) |

## address

`address`

- is optional
- type: `string`
- default: `""`
- defined in this schema

### address Type

`string`

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

## blackList

`blackList`

- is optional
- type: `string`
- defined in this schema

### blackList Type

`string`

## childrenClients

`childrenClients`

- is optional
- type: `object[]`
- defined in this schema

### childrenClients Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property     | Type   | Required     |
| ------------ | ------ | ------------ |
| `clientID`   | string | **Required** |
| `extraID`    | string | Optional     |
| `middleName` | string | Optional     |
| `name`       | string | Optional     |
| `surname`    | string | Optional     |

#### clientID

`clientID`

- is **required**
- type: `string`

##### clientID Type

`string`

#### extraID

`extraID`

- is optional
- type: `string`

##### extraID Type

`string`

#### middleName

`middleName`

- is optional
- type: `string`

##### middleName Type

`string`

#### name

`name`

- is optional
- type: `string`

##### name Type

`string`

#### surname

`surname`

- is optional
- type: `string`

##### surname Type

`string`

## clientCardCreationDate

`clientCardCreationDate`

- is optional
- type: `string`
- defined in this schema

### clientCardCreationDate Type

`string`

## clientCardNumber

`clientCardNumber`

- is optional
- type: `string`
- defined in this schema

### clientCardNumber Type

`string`

## clientContractNumber

`clientContractNumber`

- is optional
- type: `string`
- defined in this schema

### clientContractNumber Type

`string`

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

## discountCode

`discountCode`

- is optional
- type: `string`
- defined in this schema

### discountCode Type

`string`

## driverLicense

`driverLicense`

- is optional
- type: `string`
- defined in this schema

### driverLicense Type

`string`, nullable

## email

`email`

- is optional
- type: `string[]`
- defined in this schema

### email Type

Array type: `string[]`

All items must be of the type: `string`

## extraFields

`extraFields`

- is optional
- type: `object[]`
- defined in this schema

### extraFields Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property    | Type                              | Required     |
| ----------- | --------------------------------- | ------------ |
| `fieldID`   | string                            | **Required** |
| `fieldName` | string                            | **Required** |
| `value`     | null,number,boolean,string,object | **Required** |

#### fieldID

`fieldID`

- is **required**
- type: `string`

##### fieldID Type

`string`

#### fieldName

`fieldName`

- is **required**
- type: `string`

##### fieldName Type

`string`

#### value

`value`

- is **required**
- type: multiple

##### value Type

Unknown type `number,boolean,string,object`.

```json
{
  "type": ["number", "boolean", "string", "object"],
  "nullable": true,
  "simpletype": "multiple"
}
```

## extraID

`extraID`

- is optional
- type: `string`
- defined in this schema

### extraID Type

`string`

## favResources

`favResources`

- is optional
- type: `object[]`
- defined in this schema

### favResources Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property     | Type   | Required     |
| ------------ | ------ | ------------ |
| `businessID` | number | **Required** |
| `networkID`  | string | **Required** |
| `resourceID` | string | **Required** |

#### businessID

`businessID`

- is **required**
- type: `number`

##### businessID Type

`number`

#### networkID

`networkID`

- is **required**
- type: `string`

##### networkID Type

`string`

#### resourceID

`resourceID`

- is **required**
- type: `string`

##### resourceID Type

`string`

## fax

`fax`

- is optional
- type: reference
- defined in this schema

### fax Type

Array type: reference

All items must be of the type:

- []() – `./phone.schema.json`

## fromSms

`fromSms`

- is optional
- type: multiple
- default: `false`
- defined in this schema

### fromSms Type

Either one of:

- `boolean`
- `string`

## fullAddress

`fullAddress`

- is optional
- type: reference
- defined in this schema

### fullAddress Type

Array type: reference

All items must be of the type:

- []() – `../models/address.schema.json`

## houseNumber

`houseNumber`

- is optional
- type: `string`
- defined in this schema

### houseNumber Type

`string`

## icon_url

`icon_url`

- is optional
- type: `string`
- defined in this schema

### icon_url Type

`string`

## id

`id`

- is optional
- type: `string`
- defined in this schema

### id Type

`string`

## insuranceCompany

`insuranceCompany`

- is optional
- type: `string`
- defined in this schema

### insuranceCompany Type

`string`

## insuranceNumber

`insuranceNumber`

- is optional
- type: `string`
- defined in this schema

### insuranceNumber Type

`string`

## integrationData

`integrationData`

- is optional
- type: `object`
- defined in this schema

### integrationData Type

`object` with following properties:

| Property        | Type   | Required     |
| --------------- | ------ | ------------ |
| `transactionID` | string | **Required** |

#### transactionID

`transactionID`

- is **required**
- type: `string`

##### transactionID Type

`string`

## isLazy

`isLazy`

- is optional
- type: `boolean`
- defined in this schema

### isLazy Type

`boolean`

## isVIP

`isVIP`

- is optional
- type: `boolean`
- default: `"false;"`
- defined in this schema

### isVIP Type

`boolean`

## israelCity

`israelCity`

- is optional
- type: `string`
- defined in this schema

### israelCity Type

`string`

## kupatHolim

`kupatHolim`

- is optional
- type: `string`
- defined in this schema

### kupatHolim Type

`string`

## language

`language`

- is optional
- type: reference
- defined in this schema

### language Type

- []() – `./partials/language.schema.json#/definitions/LanguageList`

## lazyResolvedDate

`lazyResolvedDate`

- is optional
- type: `string`
- defined in this schema

### lazyResolvedDate Type

`string`

## locality

`locality`

- is optional
- type: `string`
- defined in this schema

### locality Type

`string`

## loyaltyInfo

`loyaltyInfo`

- is optional
- type: reference
- defined in this schema

### loyaltyInfo Type

- []() – `./partials/loyaltyInfo.schema.json`

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

## passportDate

`passportDate`

- is optional
- type: `string`
- defined in this schema

### passportDate Type

`string`

## passportId

`passportId`

- is optional
- type: `string`
- defined in this schema

### passportId Type

`string`

## passportIssued

`passportIssued`

- is optional
- type: `string`
- defined in this schema

### passportIssued Type

`string`

## passportSeries

`passportSeries`

- is optional
- type: `string`
- defined in this schema

### passportSeries Type

`string`

## phone

`phone`

- is **required**
- type: reference
- defined in this schema

### phone Type

Array type: reference

All items must be of the type:

- []() – `./phone.schema.json`

## receiveSmsAfterService

`receiveSmsAfterService`

- is optional
- type: `string`
- defined in this schema

### receiveSmsAfterService Type

`string`

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

## skipMarketingNotifications

`skipMarketingNotifications`

- is optional
- type: `boolean`
- defined in this schema

### skipMarketingNotifications Type

`boolean`

## skipNotifications

`skipNotifications`

- is optional
- type: `boolean`
- defined in this schema

### skipNotifications Type

`boolean`

## snils

`snils`

- is optional
- type: `string`
- defined in this schema

### snils Type

`string`

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

`surname`

- is **required**
- type: `string`
- defined in this schema

### surname Type

`string`

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
- type: multiple
- defined in this schema

### taxiParkMemberCount Type

Either one of:

- `number`
- `string`
- or `null`

## twoFAUserID

`twoFAUserID`

- is optional
- type: `string`
- defined in this schema

### twoFAUserID Type

`string`

## workPlace

`workPlace`

- is optional
- type: `string`
- defined in this schema

### workPlace Type

`string`
