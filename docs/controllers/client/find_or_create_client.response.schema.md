# client.find_of_create_client.response Schema

```
schemas-json/controllers/client/find_of_create_client.response.schema.json
```

| Abstract               | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                                                                  |
| ---------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ----------------------------------------------------------------------------------------------------------- |
| Cannot be instantiated | Yes        | Experimental | No           | Forbidden         | Permitted             | [controllers/client/find_or_create_client.response.schema.json](find_or_create_client.response.schema.json) |

# client.find_of_create_client.response Definitions

| Property          | Type     | Group                                                                                                     |
| ----------------- | -------- | --------------------------------------------------------------------------------------------------------- |
| [error](#error)   | complex  | `schemas-json/controllers/client/find_of_create_client.response.schema.json#/definitions/ErrorCodes`      |
| [result](#result) | `object` | `schemas-json/controllers/client/find_of_create_client.response.schema.json#/definitions/SuccessResponse` |

## error

`error`

- is **required**
- type: complex
- defined in this schema

### error Type

**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

- []() – `../../common/partials/authErrorCodes.schema.json`

#### Condition 2

`object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `code`   | number | **Required** |

#### code

код ошибки создания клиента

`code`

- is **required**
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#-known-values).

##### code Known Values

| Value    | Description                                               |
| -------- | --------------------------------------------------------- |
| `-11100` | CLIENT_CREATE_FAILED - Failed to create client            |
| `-11200` | CLIENT_RETRIEVE_FAILED - Failed to retrieve client        |
| `-11201` | CLIENT_DUPLICATE_PHONE_FAILED - Failed to retrieve client |
| `-11300` | CLIENT_UPDATE_FAILED - Failed to update client            |
| `-11500` | CLIENT_DATA_MISSING - Client data missing                 |
| `-11800` | CLIENT_IN_BLACKLIST - Client in blacklist                 |

## result

`result`

- is **required**
- type: `object`
- defined in this schema

### result Type

`object` with following properties:

| Property    | Type   | Required     |
| ----------- | ------ | ------------ |
| `business`  | object | Optional     |
| `client`    |        | **Required** |
| `documents` | array  | Optional     |
| `profile`   | object | Optional     |

#### business

`business`

- is optional
- type: `object`

##### business Type

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

#### client

`client`

- is **required**
- type: reference

##### client Type

- []() – `../../models/client.schema.json`

#### documents

`documents`

- is optional
- type: `array`

##### documents Type

Array type: `array`

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

`id`

- is **required**
- type: `string`

##### id Type

`string`

**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

- []() – `#/definitions/SuccessResponse`

#### Condition 2

- []() – `#/definitions/ErrorResponse`
