# CracSlotsController Schema

```
schemas-json/controllers/cracSlots.schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                 |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ---------------------------------------------------------- |
| Can be instantiated | No         | Experimental | No           | Forbidden         | Forbidden             | [controllers/cracSlots.schema.json](cracSlots.schema.json) |

# CracSlotsController Properties

| Property                                                                    | Type     | Required     | Nullable | Defined by                        |
| --------------------------------------------------------------------------- | -------- | ------------ | -------- | --------------------------------- |
| [GetCRACDistributedResourcesAndRooms](#getcracdistributedresourcesandrooms) | `object` | **Required** | No       | CracSlotsController (this schema) |
| [GetCRACInsuranceResourcesAndRooms](#getcracinsuranceresourcesandrooms)     | `object` | Optional     | No       | CracSlotsController (this schema) |
| [GetCRACResourcesAndRooms](#getcracresourcesandrooms)                       | `object` | Optional     | No       | CracSlotsController (this schema) |

## GetCRACDistributedResourcesAndRooms

`GetCRACDistributedResourcesAndRooms`

- is **required**
- type: `object`
- defined in this schema

### GetCRACDistributedResourcesAndRooms Type

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

- []() – `./cracSlots/GetCRACDistributedResourcesAndRooms.request.schema.json`

#### response

`response`

- is **required**
- type: reference

##### response Type

- []() – `./cracSlots/GetCRACDistributedResourcesAndRooms.response.schema.json`

## GetCRACInsuranceResourcesAndRooms

`GetCRACInsuranceResourcesAndRooms`

- is optional
- type: `object`
- defined in this schema

### GetCRACInsuranceResourcesAndRooms Type

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

- []() – `./cracSlots/GetCRACInsuranceResourcesAndRooms.request.schema.json`

#### response

`response`

- is **required**
- type: reference

##### response Type

- []() – `./cracSlots/GetCRACInsuranceResourcesAndRooms.response.schema.json`

## GetCRACResourcesAndRooms

`GetCRACResourcesAndRooms`

- is optional
- type: `object`
- defined in this schema

### GetCRACResourcesAndRooms Type

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

- []() – `./cracSlots/GetCRACResourcesAndRooms.request.schema.json`

#### response

`response`

- is **required**
- type: reference

##### response Type

- []() – `./cracSlots/GetCRACResourcesAndRooms.response.schema.json`
