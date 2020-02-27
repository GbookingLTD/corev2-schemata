# Schema

```
http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/address.schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                        |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ------------------------------------------------- |
| Can be instantiated | Yes        | Experimental | No           | Forbidden         | Forbidden             | [models/address.schema.json](address.schema.json) |

# Definitions

| Property                    | Type     | Group                                                                                                          |
| --------------------------- | -------- | -------------------------------------------------------------------------------------------------------------- |
| [\_id](#_id)                | `string` | `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/address.schema.json#/definitions/MetroStation` |
| [description](#description) | `string` | `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/address.schema.json#/definitions/MetroStation` |
| [name](#name)               | `string` | `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/address.schema.json#/definitions/MetroStation` |

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

| Property                                    | Type      | Required     | Nullable | Defined by    |
| ------------------------------------------- | --------- | ------------ | -------- | ------------- |
| [address](#address)                         | `string`  | Optional     | No       | (this schema) |
| [address_add](#address_add)                 | `string`  | Optional     | No       | (this schema) |
| [admin_area](#admin_area)                   | `string`  | Optional     | No       | (this schema) |
| [admin_area_type](#admin_area_type)         | `string`  | Optional     | No       | (this schema) |
| [building](#building)                       | `string`  | Optional     | No       | (this schema) |
| [corps](#corps)                             | `string`  | Optional     | No       | (this schema) |
| [country](#country)                         | `enum`    | **Required** | No       | (this schema) |
| [group](#group)                             | `string`  | Optional     | No       | (this schema) |
| [house_add](#house_add)                     | `string`  | Optional     | No       | (this schema) |
| [kilometer](#kilometer)                     | `string`  | Optional     | No       | (this schema) |
| [latitude](#latitude)                       | `string`  | Optional     | No       | (this schema) |
| [locality](#locality)                       | `string`  | Optional     | No       | (this schema) |
| [locality_type](#locality_type)             | `string`  | Optional     | No       | (this schema) |
| [longitude](#longitude)                     | `string`  | Optional     | No       | (this schema) |
| [metroStations](#metrostations)             | reference | Optional     | No       | (this schema) |
| [number](#number)                           | `string`  | Optional     | No       | (this schema) |
| [office](#office)                           | `string`  | Optional     | No       | (this schema) |
| [possesion](#possesion)                     | `string`  | Optional     | No       | (this schema) |
| [street](#street)                           | `string`  | Optional     | No       | (this schema) |
| [street_type](#street_type)                 | `string`  | Optional     | No       | (this schema) |
| [sub_admin_area](#sub_admin_area)           | `string`  | Optional     | No       | (this schema) |
| [sub_admin_area_type](#sub_admin_area_type) | `string`  | Optional     | No       | (this schema) |
| [sub_locality](#sub_locality)               | `string`  | Optional     | No       | (this schema) |
| [sub_locality_type](#sub_locality_type)     | `string`  | Optional     | No       | (this schema) |
| [way](#way)                                 | `string`  | Optional     | No       | (this schema) |
| [zip_code](#zip_code)                       | `string`  | Optional     | No       | (this schema) |

## address

`address`

- is optional
- type: `string`
- defined in this schema

### address Type

`string`

## address_add

`address_add`

- is optional
- type: `string`
- defined in this schema

### address_add Type

`string`

## admin_area

`admin_area`

- is optional
- type: `string`
- defined in this schema

### admin_area Type

`string`

## admin_area_type

`admin_area_type`

- is optional
- type: `string`
- defined in this schema

### admin_area_type Type

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

## house_add

`house_add`

- is optional
- type: `string`
- defined in this schema

### house_add Type

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

## locality_type

`locality_type`

- is optional
- type: `string`
- defined in this schema

### locality_type Type

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

## street_type

`street_type`

- is optional
- type: `string`
- defined in this schema

### street_type Type

`string`

## sub_admin_area

`sub_admin_area`

- is optional
- type: `string`
- defined in this schema

### sub_admin_area Type

`string`

## sub_admin_area_type

`sub_admin_area_type`

- is optional
- type: `string`
- defined in this schema

### sub_admin_area_type Type

`string`

## sub_locality

`sub_locality`

- is optional
- type: `string`
- defined in this schema

### sub_locality Type

`string`

## sub_locality_type

`sub_locality_type`

- is optional
- type: `string`
- defined in this schema

### sub_locality_type Type

`string`

## way

`way`

- is optional
- type: `string`
- defined in this schema

### way Type

`string`

## zip_code

`zip_code`

- is optional
- type: `string`
- defined in this schema

### zip_code Type

`string`
