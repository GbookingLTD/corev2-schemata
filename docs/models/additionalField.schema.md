
# AdditionalFields Schema




| Property | Type | Required | Default |
|----------|------|----------|---------|
| [name](#name) | `string` | **Required** |  | AdditionalFields (this schema) |
| [shortName](#shortname) | `string` | **Required** |  | AdditionalFields (this schema) |
| [value](#value) | `string` | **Required** |  | AdditionalFields (this schema) |
| [type](#type) | `enum` | **Required** | `"STRING"` | AdditionalFields (this schema) |
| [requiredField](#requiredfield) | `boolean` | **Required** |  | AdditionalFields (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## name


`name`
* is **required**
* type: `string`
* defined in this schema

### name type


`string`






## requiredField


`requiredField`
* is **required**
* type: `boolean`
* defined in this schema

### requiredField type


`boolean`





## shortName


`shortName`
* is **required**
* type: `string`
* defined in this schema

### shortName type


`string`






## type


`type`
* is **required**
* type: `enum`
* default: `"STRING"`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#type-known-values).

### type Known Values
| Value | Description |
|-------|-------------|
| `STRING` |  |
| `BOOL` |  |
| `RADIO` |  |
| `FILE` |  |
| `COUPON` |  |




## value


`value`
* is **required**
* type: `string`
* defined in this schema

### value type


`string`





