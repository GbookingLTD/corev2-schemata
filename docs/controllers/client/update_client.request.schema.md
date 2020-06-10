# client.update_client.request Schema

```
schemas-json/controllers/client/update_client.request.schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                                                |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ----------------------------------------------------------------------------------------- |
| Can be instantiated | Yes        | Experimental | No           | Forbidden         | Permitted             | [controllers/client/update_client.request.schema.json](update_client.request.schema.json) |

# client.update_client.request Properties

| Property          | Type     | Required     | Nullable | Defined by                                 |
| ----------------- | -------- | ------------ | -------- | ------------------------------------------ |
| [params](#params) | `object` | **Required** | No       | client.update_client.request (this schema) |
| `*`               | any      | Additional   | Yes      | this schema _allows_ additional properties |

## params

параметры запроса

`params`

- is **required**
- type: `object`
- defined in this schema

### params Type

`object` with following properties:

| Property   | Type   | Required     |
| ---------- | ------ | ------------ |
| `business` | object | **Required** |
| `client`   |        | **Required** |
| `network`  | object | Optional     |

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

- is **required**
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

**All** of the following _requirements_ need to be fulfilled.

#### Requirement 1

- []() – `../../common/request.schema.json`

#### Requirement 2

- []() – `#/definitions/Request`
