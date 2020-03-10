# business.get_network_data.response Schema

```
schemas-json/controllers/business/get_network_data.response.schema.json
```

| Abstract               | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                                                          |
| ---------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | --------------------------------------------------------------------------------------------------- |
| Cannot be instantiated | Yes        | Experimental | No           | Forbidden         | Permitted             | [controllers/business/get_network_data.response.schema.json](get_network_data.response.schema.json) |

# business.get_network_data.response Definitions

| Property            | Type     | Group                                                                                                  |
| ------------------- | -------- | ------------------------------------------------------------------------------------------------------ |
| [error](#error)     | complex  | `schemas-json/controllers/business/get_network_data.response.schema.json#/definitions/ErrorCodes`      |
| [id](#id)           | `number` | `schemas-json/controllers/business/get_network_data.response.schema.json#/definitions/SuccessResponse` |
| [jsonrpc](#jsonrpc) | `const`  | `schemas-json/controllers/business/get_network_data.response.schema.json#/definitions/SuccessResponse` |
| [result](#result)   | `object` | `schemas-json/controllers/business/get_network_data.response.schema.json#/definitions/SuccessResponse` |

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

код ошибки

`code`

- is **required**
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#-known-values).

##### code Known Values

| Value    | Description                                            |
| -------- | ------------------------------------------------------ |
| `-10000` | UNKNOWN_ERROR - Unknown error occurred                 |
| `-10200` | BUSINESS_RETRIEVE_FAILED - Failed to retrieve business |

## id

значение числового типа для идентификации запроса на сервере

`id`

- is **required**
- type: `number`
- defined in this schema

### id Type

`number`

## jsonrpc

версия протокола (2.0)

`jsonrpc`

- is **required**
- type: `const`
- defined in this schema

The value of this property **must** be equal to:

```json
"2.0"
```

## result

данные, передаваемые в ответ

`result`

- is **required**
- type: `object`
- defined in this schema

### result Type

`object`, nullable, with following properties:

| Property                     | Type   | Required     |
| ---------------------------- | ------ | ------------ |
| `businessConfiguration`      | object | **Required** |
| `businesses`                 | array  | **Required** |
| `clientVIPPhones`            | array  | **Required** |
| `grantGroups`                | array  | **Required** |
| `networkID`                  | string | **Required** |
| `networkInfo`                | object | **Required** |
| `networkName`                | string | Optional     |
| `networkWidgetConfiguration` | array  | **Required** |

#### businessConfiguration

`businessConfiguration`

- is **required**
- type: `object`

##### businessConfiguration Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


#### businesses

`businesses`

- is **required**
- type: `object[]`

##### businesses Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property        | Type    | Required     | Default |
| --------------- | ------- | ------------ | ------- |
| `_id`           | string  | Optional     |         |
| `businessID`    | string  | **Required** |         |
| `info`          |         | **Required** |         |
| `isMapBusiness` | boolean | **Required** | `false` |
| `order`         | number  | Optional     |         |

#### \_id

`_id`

- is optional
- type: `string`

##### \_id Type

`string`

#### businessID

`businessID`

- is **required**
- type: `string`

##### businessID Type

`string`

#### info

`info`

- is **required**
- type: reference

##### info Type

- []() – `../../models/businessData.schema.json`

#### isMapBusiness

`isMapBusiness`

- is **required**
- type: `boolean`
- default: `false`

##### isMapBusiness Type

`boolean`

#### order

`order`

- is optional
- type: `number`

##### order Type

`number`

указатель на бизнес в сети

#### clientVIPPhones

`clientVIPPhones`

- is **required**
- type: `string[]`

##### clientVIPPhones Type

Array type: `string[]`

All items must be of the type: `string`

#### grantGroups

`grantGroups`

- is **required**
- type: `object[]`

##### grantGroups Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


#### networkID

`networkID`

- is **required**
- type: `string`

##### networkID Type

`string`

#### networkInfo

`networkInfo`

- is **required**
- type: `object`

##### networkInfo Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


#### networkName

`networkName`

- is optional
- type: `string`

##### networkName Type

`string`

#### networkWidgetConfiguration

настройки показа сети в зависимости от источника, на котором размещено приложение

`networkWidgetConfiguration`

- is **required**
- type: `object[]`

##### networkWidgetConfiguration Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property             | Type        | Required     |
| -------------------- | ----------- | ------------ |
| `_id`                | string      | Optional     |
| `businesses`         | array       | **Required** |
| `defaultServiceID`   | null,string | **Required** |
| `showBranchSelector` | boolean     | **Required** |
| `showDefaultService` | boolean     | **Required** |
| `showOnMap`          | boolean     | **Required** |
| `source`             | string      | **Required** |

#### \_id

`_id`

- is optional
- type: `string`

##### \_id Type

`string`

#### businesses

`businesses`

- is **required**
- type: `object[]`

##### businesses Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property     | Type    | Required     |
| ------------ | ------- | ------------ |
| `_id`        | string  | Optional     |
| `active`     | boolean | **Required** |
| `internalID` | string  | **Required** |

#### \_id

`_id`

- is optional
- type: `string`

##### \_id Type

`string`

#### active

`active`

- is **required**
- type: `boolean`

##### active Type

`boolean`

#### internalID

`internalID`

- is **required**
- type: `string`

##### internalID Type

`string`

#### defaultServiceID

`defaultServiceID`

- is **required**
- type: `string`

##### defaultServiceID Type

`string`, nullable

#### showBranchSelector

`showBranchSelector`

- is **required**
- type: `boolean`

##### showBranchSelector Type

`boolean`

#### showDefaultService

`showDefaultService`

- is **required**
- type: `boolean`

##### showDefaultService Type

`boolean`

#### showOnMap

`showOnMap`

- is **required**
- type: `boolean`

##### showOnMap Type

`boolean`

#### source

`source`

- is **required**
- type: `string`

##### source Type

`string`

**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

- []() – `#/definitions/SuccessResponse`

#### Condition 2

- []() – `#/definitions/ErrorResponse`
