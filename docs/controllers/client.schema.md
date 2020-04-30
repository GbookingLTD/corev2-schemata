# ClientController Schema

```
schemas-json/controllers/client.schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                           |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ---------------------------------------------------- |
| Can be instantiated | No         | Experimental | No           | Forbidden         | Forbidden             | [controllers/client.schema.json](client.schema.json) |

# ClientController Properties

| Property                                        | Type     | Required     | Nullable | Defined by                     |
| ----------------------------------------------- | -------- | ------------ | -------- | ------------------------------ |
| [add_client](#add_client)                       | `object` | **Required** | No       | ClientController (this schema) |
| [find_or_create_client](#find_or_create_client) | `object` | **Required** | No       | ClientController (this schema) |
| [update_client](#update_client)                 | `object` | **Required** | No       | ClientController (this schema) |

## add_client

`add_client`

- is **required**
- type: `object`
- defined in this schema

### add_client Type

`object` with following properties:

| Property   | Type | Required     |
| ---------- | ---- | ------------ |
| `request`  |      | **Required** |
| `response` |      | **Required** |

#### request

`request`

- is **required**
- type: reference

##### request Type

- []() – `./client/add_client.request.schema.json`

#### response

`response`

- is **required**
- type: reference

##### response Type

- []() – `./client/add_client.response.schema.json`

## find_or_create_client

`find_or_create_client`

- is **required**
- type: `object`
- defined in this schema

### find_or_create_client Type

`object` with following properties:

| Property   | Type | Required     |
| ---------- | ---- | ------------ |
| `request`  |      | **Required** |
| `response` |      | **Required** |

#### request

`request`

- is **required**
- type: reference

##### request Type

- []() – `./client/find_or_create_client.request.schema.json`

#### response

`response`

- is **required**
- type: reference

##### response Type

- []() – `./client/find_or_create_client.response.schema.json`

## update_client

`update_client`

- is **required**
- type: `object`
- defined in this schema

### update_client Type

`object` with following properties:

| Property   | Type | Required     |
| ---------- | ---- | ------------ |
| `request`  |      | **Required** |
| `response` |      | **Required** |

#### request

`request`

- is **required**
- type: reference

##### request Type

- []() – `./client/update_client.request.schema.json`

#### response

`response`

- is **required**
- type: reference

##### response Type

- []() – `./client/update_client.response.schema.json`
