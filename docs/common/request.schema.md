# Request Schema

```
schemas-json/common/request.schema.json
```

jsonrpc2 запрос

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                        |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ------------------------------------------------- |
| Can be instantiated | No         | Experimental | No           | Forbidden         | Forbidden             | [common/request.schema.json](request.schema.json) |

# Request Properties

| Property            | Type     | Required     | Nullable | Defined by            |
| ------------------- | -------- | ------------ | -------- | --------------------- |
| [cred](#cred)       | complex  | Optional     | No       | Request (this schema) |
| [id](#id)           | multiple | **Required** | No       | Request (this schema) |
| [jsonrpc](#jsonrpc) | `const`  | **Required** | No       | Request (this schema) |
| [method](#method)   | `string` | **Required** | No       | Request (this schema) |
| [params](#params)   | `object` | **Required** | No       | Request (this schema) |

## cred

авторизационные параметры

`cred`

- is optional
- type: complex
- defined in this schema

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

- is **required**
- type: multiple
- defined in this schema

### id Type

Either one of:

- `number`
- `string`

## jsonrpc

версия протокола - 2.0

`jsonrpc`

- is **required**
- type: `const`
- defined in this schema

The value of this property **must** be equal to:

```json
"2.0"
```

## method

название jsonrpc метода

`method`

- is **required**
- type: `string`
- defined in this schema

### method Type

`string`

## params

параметры запроса

`params`

- is **required**
- type: `object`
- defined in this schema

### params Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |

