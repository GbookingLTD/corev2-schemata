# business.get_network_data.request Schema

```
schemas-json/controllers/business/business.get_network_data.request.schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                                                        |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ------------------------------------------------------------------------------------------------- |
| Can be instantiated | Yes        | Experimental | No           | Forbidden         | Permitted             | [controllers/business/get_network_data.request.schema.json](get_network_data.request.schema.json) |

# business.get_network_data.request Properties

| Property          | Type     | Required     | Nullable | Defined by                                      |
| ----------------- | -------- | ------------ | -------- | ----------------------------------------------- |
| [params](#params) | `object` | **Required** | No       | business.get_network_data.request (this schema) |
| `*`               | any      | Additional   | Yes      | this schema _allows_ additional properties      |

## params

параметры запроса business.get_network_data

`params`

- is **required**
- type: `object`
- defined in this schema

### params Type

`object` with following properties:

| Property             | Type          | Required     | Default |
| -------------------- | ------------- | ------------ | ------- |
| `networkID`          | number,string | **Required** |         |
| `resource`           | object        | Optional     |         |
| `taxonomy`           | object        | Optional     |         |
| `with_business_info` | boolean       | Optional     | `false` |

#### networkID

идентификатор сети

`networkID`

- is **required**
- type: multiple

##### networkID Type

Unknown type `number,string`.

```json
{
  "description": "идентификатор сети",
  "type": ["number", "string"],
  "simpletype": "multiple"
}
```

#### resource

`resource`

- is optional
- type: `object`

##### resource Type

`object` with following properties:

| Property | Type   | Required |
| -------- | ------ | -------- |
| `id`     | string | Optional |

#### id

идентификатор работника, если передано - возвращает все бизнесы нетворка где есть работник с таким ключем

`id`

- is optional
- type: `string`

##### id Type

`string`

#### taxonomy

`taxonomy`

- is optional
- type: `object`

##### taxonomy Type

`object` with following properties:

| Property | Type   | Required |
| -------- | ------ | -------- |
| `id`     | string | Optional |

#### id

идентификатор услуги, если передано - возвращает все бизнесы нетворка с такой услугой

`id`

- is optional
- type: `string`

##### id Type

`string`

#### with_business_info

Если передано true - возвращает информацию business_info/general_info по каждому бизнесу в массиве businesses

`with_business_info`

- is optional
- type: `boolean`
- default: `false`

##### with_business_info Type

`boolean`

**All** of the following _requirements_ need to be fulfilled.

#### Requirement 1

- []() – `../../common/request.schema.json`

#### Requirement 2

- []() – `#/definitions/Request`
