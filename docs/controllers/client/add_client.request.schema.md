# client.add_client.request Schema

```
schemas-json/controllers/client/add_client.request.schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                                          |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ----------------------------------------------------------------------------------- |
| Can be instantiated | Yes        | Experimental | No           | Forbidden         | Permitted             | [controllers/client/add_client.request.schema.json](add_client.request.schema.json) |

# client.add_client.request Properties

| Property          | Type     | Required     | Nullable | Defined by                                 |
| ----------------- | -------- | ------------ | -------- | ------------------------------------------ |
| [params](#params) | `object` | **Required** | No       | client.add_client.request (this schema)    |
| `*`               | any      | Additional   | Yes      | this schema _allows_ additional properties |

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
| `client`            |         | **Required** |         |
| `profile`           | object  | Optional     |         |
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

- is **required**
- type: reference

##### client Type

- []() – `../../models/client.schema.json`

#### profile

`profile`

- is optional
- type: `object`

##### profile Type

`object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `id`     | string | **Required** |

#### id

идентификатор профиля пользователя

`id`

- is **required**
- type: `string`

##### id Type

`string`

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
