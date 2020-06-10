# client.update_client.response Schema

```
schemas-json/controllers/client/update_client.response.schema.json
```

| Abstract               | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                                                  |
| ---------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ------------------------------------------------------------------------------------------- |
| Cannot be instantiated | Yes        | Experimental | No           | Forbidden         | Permitted             | [controllers/client/update_client.response.schema.json](update_client.response.schema.json) |

# client.update_client.response Definitions

| Property          | Type     | Group                                                                                             |
| ----------------- | -------- | ------------------------------------------------------------------------------------------------- |
| [error](#error)   | complex  | `schemas-json/controllers/client/update_client.response.schema.json#/definitions/ErrorCodes`      |
| [result](#result) | `object` | `schemas-json/controllers/client/update_client.response.schema.json#/definitions/SuccessResponse` |

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

| Property         | Type    | Required     |
| ---------------- | ------- | ------------ |
| `added_document` | object  | Optional     |
| `success`        | boolean | **Required** |

#### added_document

`added_document`

- is optional
- type: `object`

##### added_document Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


#### success

`success`

- is **required**
- type: `boolean`

##### success Type

`boolean`

**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

- []() – `#/definitions/SuccessResponse`

#### Condition 2

- []() – `#/definitions/ErrorResponse`
