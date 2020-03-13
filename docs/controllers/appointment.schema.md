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
| [client_remove_empty_appointment](#client_remove_empty_appointment) | `object` | **Required** | No       | AppointmentController (this schema) |
| [reserve_appointment](#reserve_appointment)                         | `object` | **Required** | No       | AppointmentController (this schema) |

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
