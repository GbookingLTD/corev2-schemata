# business.get_network_data.response Schema

```
schemas-json/controllers/business/get_network_data.response.schema.json
```

| Abstract               | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                                                          |
| ---------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | --------------------------------------------------------------------------------------------------- |
| Cannot be instantiated | Yes        | Experimental | No           | Forbidden         | Permitted             | [controllers/business/get_network_data.response.schema.json](get_network_data.response.schema.json) |

# business.get_network_data.response Definitions

| Property                                | Type       | Group                                                                                                               |
| --------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------- |
| [\_id](#_id)                            | `string`   | `schemas-json/controllers/business/get_network_data.response.schema.json#/definitions/NetworkConfigurationBusiness` |
| [active](#active)                       | `boolean`  | `schemas-json/controllers/business/get_network_data.response.schema.json#/definitions/NetworkConfigurationBusiness` |
| [businessID](#businessid)               | `string`   | `schemas-json/controllers/business/get_network_data.response.schema.json#/definitions/BusinessRefInNetwork`         |
| [error](#error)                         | complex    | `schemas-json/controllers/business/get_network_data.response.schema.json#/definitions/ErrorCodes`                   |
| [id](#id)                               | `number`   | `schemas-json/controllers/business/get_network_data.response.schema.json#/definitions/SuccessResponse`              |
| [info](#info)                           | reference  | `schemas-json/controllers/business/get_network_data.response.schema.json#/definitions/BusinessRefInNetwork`         |
| [internalID](#internalid)               | `string`   | `schemas-json/controllers/business/get_network_data.response.schema.json#/definitions/NetworkConfigurationBusiness` |
| [isMapBusiness](#ismapbusiness)         | `boolean`  | `schemas-json/controllers/business/get_network_data.response.schema.json#/definitions/BusinessRefInNetwork`         |
| [jsonrpc](#jsonrpc)                     | `const`    | `schemas-json/controllers/business/get_network_data.response.schema.json#/definitions/SuccessResponse`              |
| [order](#order)                         | `number`   | `schemas-json/controllers/business/get_network_data.response.schema.json#/definitions/BusinessRefInNetwork`         |
| [result](#result)                       | `object`   | `schemas-json/controllers/business/get_network_data.response.schema.json#/definitions/SuccessResponse`              |
| [virtualTaxonomies](#virtualtaxonomies) | `string[]` | `schemas-json/controllers/business/get_network_data.response.schema.json#/definitions/BusinessRefInNetwork`         |

## \_id

`_id`

- is optional
- type: `string`
- defined in this schema

### \_id Type

`string`

## active

`active`

- is **required**
- type: `boolean`
- defined in this schema

### active Type

`boolean`

## businessID

`businessID`

- is **required**
- type: `string`
- defined in this schema

### businessID Type

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

## info

`info`

- is optional
- type: reference
- defined in this schema

### info Type

- []() – `../../models/businessData.schema.json`

## internalID

`internalID`

- is **required**
- type: `string`
- defined in this schema

### internalID Type

`string`

## isMapBusiness

`isMapBusiness`

- is **required**
- type: `boolean`
- default: `false`
- defined in this schema

### isMapBusiness Type

`boolean`

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

## order

`order`

- is optional
- type: `number`
- defined in this schema

### order Type

`number`

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
- type: reference

##### businesses Type

Array type: reference

All items must be of the type:

- []() – `#/definitions/BusinessRefInNetwork`

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
- type: reference

##### businesses Type

Array type: reference

All items must be of the type:

- []() – `#/definitions/NetworkConfigurationBusiness`

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

## virtualTaxonomies

`virtualTaxonomies`

- is optional
- type: `string[]`
- defined in this schema

### virtualTaxonomies Type

Array type: `string[]`

All items must be of the type: `string`

**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

- []() – `#/definitions/SuccessResponse`

#### Condition 2

- []() – `#/definitions/ErrorResponse`
