# AppointmentController Schema

```
schemas-json/controllers/appointment.schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                     |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | -------------------------------------------------------------- |
| Can be instantiated | No         | Experimental | No           | Forbidden         | Forbidden             | [controllers/appointment.schema.json](appointment.schema.json) |

# AppointmentController Properties

| Property                                                            | Type     | Required     | Nullable | Defined by                          |
| ------------------------------------------------------------------- | -------- | ------------ | -------- | ----------------------------------- |
| [cancel_appointment_by_business](#cancel_appointment_by_business)   | `object` | Optional     | No       | AppointmentController (this schema) |
| [cancel_appointment_by_client](#cancel_appointment_by_client)       | `object` | Optional     | No       | AppointmentController (this schema) |
| [client_confirm_appointment](#client_confirm_appointment)           | `object` | Optional     | No       | AppointmentController (this schema) |
| [client_remove_empty_appointment](#client_remove_empty_appointment) | `object` | **Required** | No       | AppointmentController (this schema) |
| [get_appointment_by_filter](#get_appointment_by_filter)             | `object` | Optional     | No       | AppointmentController (this schema) |
| [reserve_appointment](#reserve_appointment)                         | `object` | **Required** | No       | AppointmentController (this schema) |

## cancel_appointment_by_business

`cancel_appointment_by_business`

- is optional
- type: `object`
- defined in this schema

### cancel_appointment_by_business Type

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

- []() – `./appointment/cancel_appointment_by_business.request.schema.json`

#### response

`response`

- is **required**
- type: reference

##### response Type

- []() – `./appointment/cancel_appointment_by_business.response.schema.json`

## cancel_appointment_by_client

`cancel_appointment_by_client`

- is optional
- type: `object`
- defined in this schema

### cancel_appointment_by_client Type

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

- []() – `./appointment/cancel_appointment_by_client.request.schema.json`

#### response

`response`

- is **required**
- type: reference

##### response Type

- []() – `./appointment/cancel_appointment_by_client.response.schema.json`

## client_confirm_appointment

`client_confirm_appointment`

- is optional
- type: `object`
- defined in this schema

### client_confirm_appointment Type

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

- []() – `./appointment/client_confirm_appointment.request.schema.json`

#### response

`response`

- is **required**
- type: reference

##### response Type

- []() – `./appointment/client_confirm_appointment.response.schema.json`

## client_remove_empty_appointment

`client_remove_empty_appointment`

- is **required**
- type: `object`
- defined in this schema

### client_remove_empty_appointment Type

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

- []() – `./appointment/client_remove_empty_appointment.request.schema.json`

#### response

`response`

- is **required**
- type: reference

##### response Type

- []() – `./appointment/client_remove_empty_appointment.response.schema.json`

## get_appointment_by_filter

`get_appointment_by_filter`

- is optional
- type: `object`
- defined in this schema

### get_appointment_by_filter Type

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

- []() – `./appointment/get_appointment_by_filter.request.schema.json`

#### response

`response`

- is **required**
- type: reference

##### response Type

- []() – `./appointment/get_appointment_by_filter.response.schema.json`

## reserve_appointment

`reserve_appointment`

- is **required**
- type: `object`
- defined in this schema

### reserve_appointment Type

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

- []() – `./appointment/reserve_appointment.request.schema.json`

#### response

`response`

- is **required**
- type: reference

##### response Type

- []() – `./appointment/reserve_appointment.response.schema.json`
