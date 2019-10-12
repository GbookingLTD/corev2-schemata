
#  Schema




| Property | Type | Required |
|----------|------|----------|
| [country](#country) | `enum` | **Required** |  (this schema) |
| [zipCode](#zipcode) | `string` | Optional |  (this schema) |
| [locality](#locality) | `string` | Optional |  (this schema) |
| [localityType](#localitytype) | `string` | Optional |  (this schema) |
| [street](#street) | `string` | Optional |  (this schema) |
| [streetType](#streettype) | `string` | Optional |  (this schema) |
| [number](#number) | `string` | Optional |  (this schema) |
| [adminArea](#adminarea) | `string` | Optional |  (this schema) |
| [adminAreaType](#adminareatype) | `string` | Optional |  (this schema) |
| [subAdminArea](#subadminarea) | `string` | Optional |  (this schema) |
| [subAdminAreaType](#subadminareatype) | `string` | Optional |  (this schema) |
| [subLocality](#sublocality) | `string` | Optional |  (this schema) |
| [subLocalityType](#sublocalitytype) | `string` | Optional |  (this schema) |
| [corps](#corps) | `string` | Optional |  (this schema) |
| [building](#building) | `string` | Optional |  (this schema) |
| [possesion](#possesion) | `string` | Optional |  (this schema) |
| [kilometer](#kilometer) | `string` | Optional |  (this schema) |
| [address](#address) | `string` | Optional |  (this schema) |
| [houseAdd](#houseadd) | `string` | Optional |  (this schema) |
| [longitude](#longitude) | `string` | Optional |  (this schema) |
| [latitude](#latitude) | `string` | Optional |  (this schema) |
| [addressAdd](#addressadd) | `string` | Optional |  (this schema) |
| [office](#office) | `string` | Optional |  (this schema) |
| [metroStations](#metrostations) | ``undefined[]`` | Optional |  (this schema) |

## address


`address`
* is optional
* type: `string`
* defined in this schema

### address type


`string`






## addressAdd


`addressAdd`
* is optional
* type: `string`
* defined in this schema

### addressAdd type


`string`






## adminArea


`adminArea`
* is optional
* type: `string`
* defined in this schema

### adminArea type


`string`






## adminAreaType


`adminAreaType`
* is optional
* type: `string`
* defined in this schema

### adminAreaType type


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




## houseAdd


`houseAdd`
* is optional
* type: `string`
* defined in this schema

### houseAdd type


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






## localityType


`localityType`
* is optional
* type: `string`
* defined in this schema

### localityType type


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






## streetType


`streetType`
* is optional
* type: `string`
* defined in this schema

### streetType type


`string`






## subAdminArea


`subAdminArea`
* is optional
* type: `string`
* defined in this schema

### subAdminArea type


`string`






## subAdminAreaType


`subAdminAreaType`
* is optional
* type: `string`
* defined in this schema

### subAdminAreaType type


`string`






## subLocality


`subLocality`
* is optional
* type: `string`
* defined in this schema

### subLocality type


`string`






## subLocalityType


`subLocalityType`
* is optional
* type: `string`
* defined in this schema

### subLocalityType type


`string`






## zipCode


`zipCode`
* is optional
* type: `string`
* defined in this schema

### zipCode type


`string`





