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
| [CRACDistributedResourcesFreeByDate](#cracdistributedresourcesfreebydate)   | `object` | Optional     | No       | CracSlotsController (this schema) |
| [CRACResourcesFreeByDate](#cracresourcesfreebydate)                         | `object` | Optional     | No       | CracSlotsController (this schema) |
| [CRACResourcesFreeByDateV2](#cracresourcesfreebydatev2)                     | `object` | Optional     | No       | CracSlotsController (this schema) |
| [GetCRACDistributedResourcesAndRooms](#getcracdistributedresourcesandrooms) | `object` | **Required** | No       | CracSlotsController (this schema) |
| [GetCRACInsuranceResourcesAndRooms](#getcracinsuranceresourcesandrooms)     | `object` | Optional     | No       | CracSlotsController (this schema) |
| [GetCRACResourcesAndRooms](#getcracresourcesandrooms)                       | `object` | Optional     | No       | CracSlotsController (this schema) |

## CRACDistributedResourcesFreeByDate

`CRACDistributedResourcesFreeByDate`

- is optional
- type: `object`
- defined in this schema

### CRACDistributedResourcesFreeByDate Type

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

- []() – `./cracSlots/CRACDistributedResourcesFreeByDate.request.schema.json`

#### response

`response`

- is **required**
- type: reference

##### response Type

- []() – `./cracSlots/CRACDistributedResourcesFreeByDate.response.schema.json`

## CRACResourcesFreeByDate

`CRACResourcesFreeByDate`

- is optional
- type: `object`
- defined in this schema

### CRACResourcesFreeByDate Type

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

- []() – `./cracSlots/CRACResourcesFreeByDate.request.schema.json`

#### response

`response`

- is **required**
- type: reference

##### response Type

- []() – `./cracSlots/CRACResourcesFreeByDate.response.schema.json`

## CRACResourcesFreeByDateV2

`CRACResourcesFreeByDateV2`

- is optional
- type: `object`
- defined in this schema

### CRACResourcesFreeByDateV2 Type

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

- []() – `./cracSlots/CRACResourcesFreeByDateV2.request.schema.json`

#### response

`response`

- is **required**
- type: reference

##### response Type

- []() – `./cracSlots/CRACResourcesFreeByDateV2.response.schema.json`

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
