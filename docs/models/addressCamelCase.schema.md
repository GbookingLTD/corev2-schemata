# Schema

```
schemas-json/models/addressCamelCase.schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                          |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ------------------------------------------------------------------- |
| Can be instantiated | Yes        | Experimental | No           | Forbidden         | Forbidden             | [models/addressCamelCase.schema.json](addressCamelCase.schema.json) |

# Definitions

| Property                    | Type     | Group                                                                        |
| --------------------------- | -------- | ---------------------------------------------------------------------------- |
| [\_id](#_id)                | `string` | `schemas-json/models/addressCamelCase.schema.json#/definitions/MetroStation` |
| [description](#description) | `string` | `schemas-json/models/addressCamelCase.schema.json#/definitions/MetroStation` |
| [name](#name)               | `string` | `schemas-json/models/addressCamelCase.schema.json#/definitions/MetroStation` |

## \_id

`_id`

- is optional
- type: `string`
- defined in this schema

### \_id Type

`string`

## description

`description`

- is optional
- type: `string`
- defined in this schema

### description Type

`string`

## name

`name`

- is **required**
- type: `string`
- defined in this schema

### name Type

`string`

# Properties

| Property                              | Type      | Required     | Nullable | Defined by    |
| ------------------------------------- | --------- | ------------ | -------- | ------------- |
| [address](#address)                   | `string`  | Optional     | No       | (this schema) |
| [addressAdd](#addressadd)             | `string`  | Optional     | No       | (this schema) |
| [adminArea](#adminarea)               | `string`  | Optional     | No       | (this schema) |
| [adminAreaType](#adminareatype)       | `string`  | Optional     | No       | (this schema) |
| [building](#building)                 | `string`  | Optional     | No       | (this schema) |
| [corps](#corps)                       | `string`  | Optional     | No       | (this schema) |
| [country](#country)                   | `enum`    | **Required** | No       | (this schema) |
| [group](#group)                       | `string`  | Optional     | No       | (this schema) |
| [houseAdd](#houseadd)                 | `string`  | Optional     | No       | (this schema) |
| [kilometer](#kilometer)               | `string`  | Optional     | No       | (this schema) |
| [latitude](#latitude)                 | `string`  | Optional     | No       | (this schema) |
| [locality](#locality)                 | `string`  | Optional     | No       | (this schema) |
| [localityType](#localitytype)         | `string`  | Optional     | No       | (this schema) |
| [longitude](#longitude)               | `string`  | Optional     | No       | (this schema) |
| [metroStations](#metrostations)       | reference | Optional     | No       | (this schema) |
| [number](#number)                     | `string`  | Optional     | No       | (this schema) |
| [office](#office)                     | `string`  | Optional     | No       | (this schema) |
| [possesion](#possesion)               | `string`  | Optional     | No       | (this schema) |
| [street](#street)                     | `string`  | Optional     | No       | (this schema) |
| [streetType](#streettype)             | `string`  | Optional     | No       | (this schema) |
| [subAdminArea](#subadminarea)         | `string`  | Optional     | No       | (this schema) |
| [subAdminAreaType](#subadminareatype) | `string`  | Optional     | No       | (this schema) |
| [subLocality](#sublocality)           | `string`  | Optional     | No       | (this schema) |
| [subLocalityType](#sublocalitytype)   | `string`  | Optional     | No       | (this schema) |
| [way](#way)                           | `string`  | Optional     | No       | (this schema) |
| [zipCode](#zipcode)                   | `string`  | Optional     | No       | (this schema) |

## address

`address`

- is optional
- type: `string`
- defined in this schema

### address Type

`string`

## addressAdd

`addressAdd`

- is optional
- type: `string`
- defined in this schema

### addressAdd Type

`string`

## adminArea

`adminArea`

- is optional
- type: `string`
- defined in this schema

### adminArea Type

`string`

## adminAreaType

`adminAreaType`

- is optional
- type: `string`
- defined in this schema

### adminAreaType Type

`string`

## building

`building`

- is optional
- type: `string`
- defined in this schema

### building Type

`string`

## corps

`corps`

- is optional
- type: `string`
- defined in this schema

### corps Type

`string`

## country

`country`

- is **required**
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#country-known-values).

### country Known Values

| Value | Description |
| ----- | ----------- |
| `RU`  |             |
| `IL`  |             |
| `US`  |             |
| `UA`  |             |
| `BLR` |             |
| `FR`  |             |
| `UK`  |             |
| `KZ`  |             |
| `HU`  |             |
| `LT`  |             |
| `LV`  |             |
| `DE`  |             |
| `CH`  |             |
| `ES`  |             |
| `AM`  |             |
| `GE`  |             |
| `UZ`  |             |
| `FI`  |             |
| `LI`  |             |
| `_`   |             |

## group

`group`

- is optional
- type: `string`
- defined in this schema

### group Type

`string`

## houseAdd

`houseAdd`

- is optional
- type: `string`
- defined in this schema

### houseAdd Type

`string`

## kilometer

`kilometer`

- is optional
- type: `string`
- defined in this schema

### kilometer Type

`string`

## latitude

`latitude`

- is optional
- type: `string`
- defined in this schema

### latitude Type

`string`

## locality

`locality`

- is optional
- type: `string`
- defined in this schema

### locality Type

`string`

## localityType

`localityType`

- is optional
- type: `string`
- defined in this schema

### localityType Type

`string`

## longitude

`longitude`

- is optional
- type: `string`
- defined in this schema

### longitude Type

`string`

## metroStations

`metroStations`

- is optional
- type: reference
- defined in this schema

### metroStations Type

Array type: reference

All items must be of the type:

- []() – `#/definitions/MetroStation`

## number

`number`

- is optional
- type: `string`
- defined in this schema

### number Type

`string`

## office

`office`

- is optional
- type: `string`
- defined in this schema

### office Type

`string`

## possesion

`possesion`

- is optional
- type: `string`
- defined in this schema

### possesion Type

`string`

## street

`street`

- is optional
- type: `string`
- defined in this schema

### street Type

`string`

## streetType

`streetType`

- is optional
- type: `string`
- defined in this schema

### streetType Type

`string`

## subAdminArea

`subAdminArea`

- is optional
- type: `string`
- defined in this schema

### subAdminArea Type

`string`

## subAdminAreaType

`subAdminAreaType`

- is optional
- type: `string`
- defined in this schema

### subAdminAreaType Type

`string`

## subLocality

`subLocality`

- is optional
- type: `string`
- defined in this schema

### subLocality Type

`string`

## subLocalityType

`subLocalityType`

- is optional
- type: `string`
- defined in this schema

### subLocalityType Type

`string`

## way

`way`

- is optional
- type: `string`
- defined in this schema

### way Type

`string`

## zipCode

`zipCode`

- is optional
- type: `string`
- defined in this schema

### zipCode Type

`string`
