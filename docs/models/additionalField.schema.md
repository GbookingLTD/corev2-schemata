# AdditionalFields Schema

```
schemas-json/models/additionalField.schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                        |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ----------------------------------------------------------------- |
| Can be instantiated | No         | Experimental | No           | Forbidden         | Permitted             | [models/additionalField.schema.json](additionalField.schema.json) |

# AdditionalFields Properties

| Property                        | Type      | Required     | Nullable | Default                                    | Defined by                     |
| ------------------------------- | --------- | ------------ | -------- | ------------------------------------------ | ------------------------------ |
| [name](#name)                   | `string`  | **Required** | No       |                                            | AdditionalFields (this schema) |
| [requiredField](#requiredfield) | `boolean` | **Required** | No       |                                            | AdditionalFields (this schema) |
| [shortName](#shortname)         | `string`  | **Required** | No       |                                            | AdditionalFields (this schema) |
| [type](#type)                   | `enum`    | **Required** | No       | `"STRING"`                                 | AdditionalFields (this schema) |
| [value](#value)                 | `string`  | **Required** | No       |                                            | AdditionalFields (this schema) |
| `*`                             | any       | Additional   | Yes      | this schema _allows_ additional properties |

## name

`name`

- is **required**
- type: `string`
- defined in this schema

### name Type

`string`

## requiredField

`requiredField`

- is **required**
- type: `boolean`
- defined in this schema

### requiredField Type

`boolean`

## shortName

`shortName`

- is **required**
- type: `string`
- defined in this schema

### shortName Type

`string`

## type

`type`

- is **required**
- type: `enum`
- default: `"STRING"`
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

## value

`value`

- is **required**
- type: `string`
- defined in this schema

### value Type

`string`
