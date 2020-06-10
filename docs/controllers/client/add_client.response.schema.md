# client.add_client.response Schema

```
schemas-json/controllers/client/add_client.response.schema.json
```

| Abstract               | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                                            |
| ---------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ------------------------------------------------------------------------------------- |
| Cannot be instantiated | Yes        | Experimental | No           | Forbidden         | Permitted             | [controllers/client/add_client.response.schema.json](add_client.response.schema.json) |

# client.add_client.response Definitions

| Property                | Type      | Group                                                                                                        |
| ----------------------- | --------- | ------------------------------------------------------------------------------------------------------------ |
| [business](#business)   | `object`  | `schemas-json/controllers/client/add_client.response.schema.json#/definitions/ClientAddClientResponseResult` |
| [client](#client)       | reference | `schemas-json/controllers/client/add_client.response.schema.json#/definitions/ClientAddClientResponseResult` |
| [documents](#documents) | `string`  | `schemas-json/controllers/client/add_client.response.schema.json#/definitions/ClientAddClientResponseResult` |
| [error](#error)         | complex   | `schemas-json/controllers/client/add_client.response.schema.json#/definitions/ErrorCodes`                    |
| [profile](#profile)     | `object`  | `schemas-json/controllers/client/add_client.response.schema.json#/definitions/ClientAddClientResponseResult` |
| [result](#result)       | reference | `schemas-json/controllers/client/add_client.response.schema.json#/definitions/SuccessResponse`               |
| [source](#source)       | `enum`    | `schemas-json/controllers/client/add_client.response.schema.json#/definitions/ClientAddClientResponseResult` |

## business

`business`

- is **required**
- type: `object`
- defined in this schema

### business Type

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

## client

`client`

- is **required**
- type: reference
- defined in this schema

### client Type

- []() – `../../models/client.schema.json`

## documents

`documents`

- is optional
- type: `string`
- defined in this schema

### documents Type

`string`

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

## profile

`profile`

- is optional
- type: `object`
- defined in this schema

### profile Type

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

## result

`result`

- is **required**
- type: reference
- defined in this schema

### result Type

- []() – `#/definitions/ClientAddClientResponseResult`

## source

`source`

- is optional
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#source-known-values).

### source Known Values

| Value           | Description |
| --------------- | ----------- |
| `WIDGET`        |             |
| `MOBILE_WIDGET` |             |
| `MINI_WIDGET`   |             |
| `BACKOFFICE`    |             |

**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

- []() – `#/definitions/SuccessResponse`

#### Condition 2

- []() – `#/definitions/ErrorResponse`
