# client.find_or_create_client.request Schema

```
schemas-json/controllers/client/find_or_create_client.request.schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                                                                |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | --------------------------------------------------------------------------------------------------------- |
| Can be instantiated | Yes        | Experimental | No           | Forbidden         | Permitted             | [controllers/client/find_or_create_client.request.schema.json](find_or_create_client.request.schema.json) |

# client.find_or_create_client.request Properties

| Property          | Type     | Required     | Nullable | Defined by                                         |
| ----------------- | -------- | ------------ | -------- | -------------------------------------------------- |
| [params](#params) | `object` | **Required** | No       | client.find_or_create_client.request (this schema) |
| `*`               | any      | Additional   | Yes      | this schema _allows_ additional properties         |

## params

параметры запроса

`params`

- is **required**
- type: `object`
- defined in this schema

### params Type

`object` with following properties:

| Property            | Type    | Required     | Default |
| ------------------- | ------- | ------------ | ------- |
| `business`          | object  | **Required** |         |
| `client`            |         | Optional     |         |
| `network`           | object  | Optional     |         |
| `skipEmailCheck`    | boolean | Optional     | `false` |
| `skipProfileUpdate` | boolean | Optional     | `false` |

#### business

`business`

- is **required**
- type: `object`

##### business Type

`object` with following properties:

| Property | Type          | Required     |
| -------- | ------------- | ------------ |
| `id`     | string,number | **Required** |

#### id

идентификатор бизнеса

`id`

- is **required**
- type: multiple

##### id Type

Unknown type `string,number`.

```json
{
  "type": ["string", "number"],
  "description": "идентификатор бизнеса",
  "simpletype": "multiple"
}
```

#### client

`client`

- is optional
- type: reference

##### client Type

- []() – `../../models/client.schema.json`

#### network

`network`

- is optional
- type: `object`

##### network Type

`object` with following properties:

| Property | Type          | Required |
| -------- | ------------- | -------- |
| `id`     | string,number | Optional |

#### id

идентификатор нетворка

`id`

- is optional
- type: multiple

##### id Type

Unknown type `string,number`.

```json
{
  "type": ["string", "number"],
  "description": "идентификатор нетворка",
  "simpletype": "multiple"
}
```

#### skipEmailCheck

`skipEmailCheck`

- is optional
- type: `boolean`
- default: `false`

##### skipEmailCheck Type

`boolean`

#### skipProfileUpdate

`skipProfileUpdate`

- is optional
- type: `boolean`
- default: `false`

##### skipProfileUpdate Type

`boolean`

**All** of the following _requirements_ need to be fulfilled.

#### Requirement 1

- []() – `../../common/request.schema.json`

#### Requirement 2

- []() – `#/definitions/Request`
