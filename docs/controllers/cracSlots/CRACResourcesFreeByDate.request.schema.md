# Crac.CRACResourcesFreeByDate.request Schema

```
schemas-json/controllers/crackSlots/CRACResourcesFreeByDate.request.schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                                                                       |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | Yes        | Experimental | No           | Forbidden         | Permitted             | [controllers/cracSlots/CRACResourcesFreeByDate.request.schema.json](CRACResourcesFreeByDate.request.schema.json) |

# Crac.CRACResourcesFreeByDate.request Properties

| Property          | Type       | Required     | Nullable | Defined by                                         |
| ----------------- | ---------- | ------------ | -------- | -------------------------------------------------- |
| [params](#params) | `object[]` | **Required** | No       | Crac.CRACResourcesFreeByDate.request (this schema) |
| `*`               | any        | Additional   | Yes      | this schema _allows_ additional properties         |

## params

параметры запроса

`params`

- is **required**
- type: `object[]`
- defined in this schema

### params Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property    | Type   | Required     |
| ----------- | ------ | ------------ |
| `duration`  | number | **Required** |
| `resources` | array  | **Required** |
| `taxonomy`  | object | **Required** |

#### duration

`duration`

- is **required**
- type: `number`

##### duration Type

`number`

#### resources

`resources`

- is **required**
- type: `string[]`

##### resources Type

Array type: `string[]`

All items must be of the type: `string`

#### taxonomy

`taxonomy`

- is **required**
- type: `object`

##### taxonomy Type

`object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `id`     | string | **Required** |

#### id

`id`

- is **required**
- type: `string`

##### id Type

`string`

**All** of the following _requirements_ need to be fulfilled.

#### Requirement 1

- []() – `../../common/request.schema.json`

#### Requirement 2

- []() – `#/definitions/Request`
