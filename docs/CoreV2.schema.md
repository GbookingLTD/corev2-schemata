# GBooking CoreV2 API Schema

```
schemas-json/CoreV2.schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                               |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ---------------------------------------- |
| Can be instantiated | No         | Experimental | No           | Forbidden         | Forbidden             | [CoreV2.schema.json](CoreV2.schema.json) |

# GBooking CoreV2 API Properties

| Property                    | Type     | Required     | Nullable | Defined by                        |
| --------------------------- | -------- | ------------ | -------- | --------------------------------- |
| [Common](#common)           | `object` | **Required** | No       | GBooking CoreV2 API (this schema) |
| [Controllers](#controllers) | `object` | **Required** | No       | GBooking CoreV2 API (this schema) |
| [Models](#models)           | `object` | **Required** | No       | GBooking CoreV2 API (this schema) |

## Common

`Common`

- is **required**
- type: `object`
- defined in this schema

### Common Type

`object` with following properties:

| Property          | Type | Required |
| ----------------- | ---- | -------- |
| `AuthErrorCodes`  |      | Optional |
| `ErrorResponse`   |      | Optional |
| `Request`         |      | Optional |
| `SuccessResponse` |      | Optional |

#### AuthErrorCodes

`AuthErrorCodes`

- is optional
- type: reference

##### AuthErrorCodes Type

- []() – `./common/partials/authErrorCodes.schema.json`

#### ErrorResponse

`ErrorResponse`

- is optional
- type: reference

##### ErrorResponse Type

- []() – `./common/errorResponse.schema.json`

#### Request

`Request`

- is optional
- type: reference

##### Request Type

- []() – `./common/request.schema.json`

#### SuccessResponse

`SuccessResponse`

- is optional
- type: reference

##### SuccessResponse Type

- []() – `./common/successResponse.schema.json`

## Controllers

`Controllers`

- is **required**
- type: `object`
- defined in this schema

### Controllers Type

`object` with following properties:

| Property   | Type | Required     |
| ---------- | ---- | ------------ |
| `Business` |      | **Required** |
| `Client`   |      | **Required** |

#### Business

`Business`

- is **required**
- type: reference

##### Business Type

- []() – `./controllers/business.schema.json`

#### Client

`Client`

- is **required**
- type: reference

##### Client Type

- []() – `./controllers/client.schema.json`

## Models

`Models`

- is **required**
- type: `object`
- defined in this schema

### Models Type

`object` with following properties:

| Property   | Type | Required     |
| ---------- | ---- | ------------ |
| `Business` |      | **Required** |
| `Client`   |      | **Required** |

#### Business

`Business`

- is **required**
- type: reference

##### Business Type

- []() – `./models/business.schema.json`

#### Client

`Client`

- is **required**
- type: reference

##### Client Type

- []() – `./models/client.schema.json`
