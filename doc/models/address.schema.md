
#  Schema




| Property | Type | Required |
|----------|------|----------|
| [country](#country) | `enum` | **Required** |  (this schema) |
| [zip_code](#zip_code) | `string` | Optional |  (this schema) |
| [locality](#locality) | `string` | Optional |  (this schema) |
| [locality_type](#locality_type) | `string` | Optional |  (this schema) |
| [street](#street) | `string` | Optional |  (this schema) |
| [street_type](#street_type) | `string` | Optional |  (this schema) |
| [number](#number) | `string` | Optional |  (this schema) |
| [admin_area](#admin_area) | `string` | Optional |  (this schema) |
| [admin_area_type](#admin_area_type) | `string` | Optional |  (this schema) |
| [sub_admin_area](#sub_admin_area) | `string` | Optional |  (this schema) |
| [sub_admin_area_type](#sub_admin_area_type) | `string` | Optional |  (this schema) |
| [sub_locality](#sub_locality) | `string` | Optional |  (this schema) |
| [sub_locality_type](#sub_locality_type) | `string` | Optional |  (this schema) |
| [corps](#corps) | `string` | Optional |  (this schema) |
| [building](#building) | `string` | Optional |  (this schema) |
| [possesion](#possesion) | `string` | Optional |  (this schema) |
| [kilometer](#kilometer) | `string` | Optional |  (this schema) |
| [address](#address) | `string` | Optional |  (this schema) |
| [house_add](#house_add) | `string` | Optional |  (this schema) |
| [longitude](#longitude) | `string` | Optional |  (this schema) |
| [latitude](#latitude) | `string` | Optional |  (this schema) |
| [address_add](#address_add) | `string` | Optional |  (this schema) |
| [office](#office) | `string` | Optional |  (this schema) |
| [metroStations](#metrostations) | ``undefined[]`` | Optional |  (this schema) |

## address


`address`
* is optional
* type: `string`
* defined in this schema

### address type


`string`






## address_add


`address_add`
* is optional
* type: `string`
* defined in this schema

### address_add type


`string`






## admin_area


`admin_area`
* is optional
* type: `string`
* defined in this schema

### admin_area type


`string`






## admin_area_type


`admin_area_type`
* is optional
* type: `string`
* defined in this schema

### admin_area_type type


`string`






## building


`building`
* is optional
* type: `string`
* defined in this schema

### building type


`string`






## corps


`corps`
* is optional
* type: `string`
* defined in this schema

### corps type


`string`






## country


`country`
* is **required**
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#country-known-values).

### country Known Values
| Value | Description |
|-------|-------------|
| `RU` |  |
| `IL` |  |
| `US` |  |
| `UA` |  |
| `BLR` |  |
| `FR` |  |
| `UK` |  |
| `KZ` |  |
| `HU` |  |
| `LT` |  |
| `LV` |  |
| `DE` |  |
| `CH` |  |
| `ES` |  |
| `AM` |  |
| `GE` |  |
| `UZ` |  |
| `FI` |  |
| `LI` |  |
| `_` |  |




## house_add


`house_add`
* is optional
* type: `string`
* defined in this schema

### house_add type


`string`






## kilometer


`kilometer`
* is optional
* type: `string`
* defined in this schema

### kilometer type


`string`






## latitude


`latitude`
* is optional
* type: `string`
* defined in this schema

### latitude type


`string`






## locality


`locality`
* is optional
* type: `string`
* defined in this schema

### locality type


`string`






## locality_type


`locality_type`
* is optional
* type: `string`
* defined in this schema

### locality_type type


`string`






## longitude


`longitude`
* is optional
* type: `string`
* defined in this schema

### longitude type


`string`






## metroStations
### `undefined[]`

`metroStations`
* is optional
* type: `reference[]`

* defined in this schema

### metroStations type


Array type: `reference[]`

All items must be of the type:

* []() – `#/definitions/MetroStation`








## number


`number`
* is optional
* type: `string`
* defined in this schema

### number type


`string`






## office


`office`
* is optional
* type: `string`
* defined in this schema

### office type


`string`






## possesion


`possesion`
* is optional
* type: `string`
* defined in this schema

### possesion type


`string`






## street


`street`
* is optional
* type: `string`
* defined in this schema

### street type


`string`






## street_type


`street_type`
* is optional
* type: `string`
* defined in this schema

### street_type type


`string`






## sub_admin_area


`sub_admin_area`
* is optional
* type: `string`
* defined in this schema

### sub_admin_area type


`string`






## sub_admin_area_type


`sub_admin_area_type`
* is optional
* type: `string`
* defined in this schema

### sub_admin_area_type type


`string`






## sub_locality


`sub_locality`
* is optional
* type: `string`
* defined in this schema

### sub_locality type


`string`






## sub_locality_type


`sub_locality_type`
* is optional
* type: `string`
* defined in this schema

### sub_locality_type type


`string`






## zip_code


`zip_code`
* is optional
* type: `string`
* defined in this schema

### zip_code type


`string`





