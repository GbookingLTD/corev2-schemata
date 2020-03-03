# Schema

```
schemas-json/models/client.schema.json
```

Данные клиента

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                      |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ----------------------------------------------- |
| Can be instantiated | No         | Experimental | No           | Forbidden         | Permitted             | [models/client.schema.json](client.schema.json) |

# Properties

| Property                                    | Type       | Required     | Nullable | Default                                    | Defined by    |
| ------------------------------------------- | ---------- | ------------ | -------- | ------------------------------------------ | ------------- |
| [birthday](#birthday)                       | multiple   | Optional     | No       |                                            | (this schema) |
| [creatorProfileID](#creatorprofileid)       | `string`   | Optional     | Yes      |                                            | (this schema) |
| [creatorProfileName](#creatorprofilename)   | `string`   | Optional     | Yes      |                                            | (this schema) |
| [driverLicense](#driverlicense)             | `string`   | Optional     | Yes      |                                            | (this schema) |
| [email](#email)                             | `string[]` | Optional     | No       |                                            | (this schema) |
| [fromSms](#fromsms)                         | multiple   | Optional     | No       | `false`                                    | (this schema) |
| [middle_name](#middle_name)                 | `string`   | Optional     | No       |                                            | (this schema) |
| [name](#name)                               | `string`   | **Required** | No       |                                            | (this schema) |
| [phone](#phone)                             | reference  | **Required** | No       |                                            | (this schema) |
| [sex](#sex)                                 | `enum`     | Optional     | No       |                                            | (this schema) |
| [surname](#surname)                         | `string`   | **Required** | No       |                                            | (this schema) |
| [taxiPark](#taxipark)                       | `string`   | Optional     | Yes      |                                            | (this schema) |
| [taxiParkMemberCount](#taxiparkmembercount) | multiple   | Optional     | Yes      |                                            | (this schema) |
| `*`                                         | any        | Additional   | Yes      | this schema _allows_ additional properties |

## birthday

`birthday`

- is optional
- type: multiple
- defined in this schema

### birthday Type

Either one of:

- `string`
- `object`

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

## middle_name

`middle_name`

- is optional
- type: `string`
- defined in this schema

### middle_name Type

`string`

## name

`name`

- is **required**
- type: `string`
- defined in this schema

### name Type

`string`

## phone

`phone`

- is **required**
- type: reference
- defined in this schema

### phone Type

- []() – `./phone.schema.json`

## sex

`sex`

- is optional
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#sex-known-values).

### sex Known Values

| Value           | Description |
| --------------- | ----------- |
| `MALE`          |             |
| `FEMALE`        |             |
| `NOT_SPECIFIED` |             |

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
