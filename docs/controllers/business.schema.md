# BusinessController Schema

```
schemas-json/controllers/business.schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                               |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | -------------------------------------------------------- |
| Can be instantiated | No         | Experimental | No           | Forbidden         | Forbidden             | [controllers/business.schema.json](business.schema.json) |

# BusinessController Properties

| Property                                | Type     | Required     | Nullable | Defined by                       |
| --------------------------------------- | -------- | ------------ | -------- | -------------------------------- |
| [get_profile_by_id](#get_profile_by_id) | `object` | **Required** | No       | BusinessController (this schema) |

## get_profile_by_id

`get_profile_by_id`

- is **required**
- type: `object`
- defined in this schema

### get_profile_by_id Type

`object` with following properties:

| Property   | Type | Required     |
| ---------- | ---- | ------------ |
| `request`  |      | **Required** |
| `response` |      | **Required** |

#### request

`request`

- is **required**
- type: reference

##### request Type

- []() – `./business/get_profile_by_id.request.schema.json`

#### response

`response`

- is **required**
- type: reference

##### response Type

- []() – `./business/get_profile_by_id.response.schema.json`
