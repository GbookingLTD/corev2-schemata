# business.get_profile_by_id.request Schema

```
http://git.dev.gbooking.ru/corev2-schemata/schemas-json/controllers/business/get_profile_by_id.request.schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                                                          |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | --------------------------------------------------------------------------------------------------- |
| Can be instantiated | Yes        | Experimental | No           | Forbidden         | Permitted             | [controllers/business/get_profile_by_id.request.schema.json](get_profile_by_id.request.schema.json) |

## Schema Hierarchy

- business.get_profile_by_id.request
  `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/controllers/business/get_profile_by_id.request.schema.json`
  - [Request](../../common/request.schema.md)
    `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/common/request.schema.json`

# business.get_profile_by_id.request Properties

| Property            | Type     | Required     | Nullable | Defined by                                        |
| ------------------- | -------- | ------------ | -------- | ------------------------------------------------- |
| [cred](#cred)       | complex  | Optional     | No       | [Request](../../common/request.schema.md#cred)    |
| [id](#id)           | multiple | Optional     | No       | [Request](../../common/request.schema.md#id)      |
| [jsonrpc](#jsonrpc) | `const`  | Optional     | No       | [Request](../../common/request.schema.md#jsonrpc) |
| [method](#method)   | `string` | Optional     | No       | [Request](../../common/request.schema.md#method)  |
| [params](#params)   | `object` | **Required** | No       | [Request](../../common/request.schema.md#params)  |
| `*`                 | any      | Additional   | Yes      | this schema _allows_ additional properties        |

## cred

авторизационные параметры

`cred`

- is optional
- type: complex
- defined in [Request](../../common/request.schema.md#cred)

### cred Type

**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


#### Condition 2

`object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `token`  | string | **Required** |
| `user`   | string | **Required** |

#### token

временный token для доступа

`token`

- is **required**
- type: `string`

##### token Type

`string`

#### user

идентификатор профиля пользователя

`user`

- is **required**
- type: `string`

##### user Type

`string`

## id

значение числового типа для идентификации запроса на сервере

`id`

- is optional
- type: multiple
- defined in [Request](../../common/request.schema.md#id)

### id Type

Either one of:

- `number`
- `string`

## jsonrpc

версия протокола - 2.0

`jsonrpc`

- is optional
- type: `const`
- defined in [Request](../../common/request.schema.md#jsonrpc)

The value of this property **must** be equal to:

```json
"2.0"
```

## method

название jsonrpc метода

`method`

- is optional
- type: `string`
- defined in [Request](../../common/request.schema.md#method)

### method Type

`string`

## params

параметры запроса

`params`

- is **required**
- type: `object`
- defined in [Request](../../common/request.schema.md#params)

### params Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


**All** of the following _requirements_ need to be fulfilled.

#### Requirement 1

- []() – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/common/request.schema.json`

#### Requirement 2

- []() – `#/definitions/Request`
