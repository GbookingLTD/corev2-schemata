# Phone Schema

```
schemas-json/models/phone.schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                    |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | --------------------------------------------- |
| Can be instantiated | Yes        | Experimental | No           | Forbidden         | Forbidden             | [models/phone.schema.json](phone.schema.json) |

# Phone Properties

| Property                      | Type     | Required     | Nullable | Defined by          |
| ----------------------------- | -------- | ------------ | -------- | ------------------- |
| [area_code](#area_code)       | `string` | **Required** | No       | Phone (this schema) |
| [country_code](#country_code) | `string` | **Required** | No       | Phone (this schema) |
| [number](#number)             | `string` | **Required** | No       | Phone (this schema) |

## area_code

`area_code`

- is **required**
- type: `string`
- defined in this schema

### area_code Type

`string`

## country_code

`country_code`

- is **required**
- type: `string`
- defined in this schema

### country_code Type

`string`

## number

`number`

- is **required**
- type: `string`
- defined in this schema

### number Type

`string`
