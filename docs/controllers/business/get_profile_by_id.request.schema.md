# business.get_profile_by_id.request Schema

```
schemas-json/controllers/business/get_profile_by_id.request.schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                                                          |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | --------------------------------------------------------------------------------------------------- |
| Can be instantiated | Yes        | Experimental | No           | Forbidden         | Permitted             | [controllers/business/get_profile_by_id.request.schema.json](get_profile_by_id.request.schema.json) |

# business.get_profile_by_id.request Properties

| Property          | Type     | Required     | Nullable | Defined by                                       |
| ----------------- | -------- | ------------ | -------- | ------------------------------------------------ |
| [params](#params) | `object` | **Required** | No       | business.get_profile_by_id.request (this schema) |
| `*`               | any      | Additional   | Yes      | this schema _allows_ additional properties       |

## params

параметры запроса business.get_profile_by_id

`params`

- is **required**
- type: `object`
- defined in this schema

### params Type

`object` with following properties:

| Property                 | Type          | Required     | Default  |
| ------------------------ | ------------- | ------------ | -------- |
| `business`               | object        | **Required** |          |
| `desktop_discounts`      | boolean       | Optional     | `false`  |
| `only_active_workers`    | boolean       | Optional     | `false`  |
| `show_inactive_workers`  | boolean       | Optional     | `false`  |
| `showcase_business_id`   | number,string | Optional     |          |
| `skip_worker_sorting`    | boolean       | Optional     | `false`  |
| `with_billing`           | boolean       | Optional     | `false`  |
| `with_bop`               | boolean       | Optional     | `false`  |
| `with_campaigns`         | boolean       | Optional     | `false`  |
| `with_discounts`         | boolean       | Optional     | `false`  |
| `with_discounts_from`    | string        | Optional     |          |
| `with_discounts_to`      | string        | Optional     |          |
| `with_networks`          | boolean       | Optional     | `false`  |
| `with_taxonomy_showcase` | boolean       | Optional     |          |
| `worker_sorting_type`    | string        | Optional     | `"none"` |

#### business

`business`

- is **required**
- type: `object`

##### business Type

`object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `id`     | string | **Required** |

#### id

идентификатор бизнеса

`id`

- is **required**
- type: `string`

##### id Type

`string`

#### desktop_discounts

если указано true - меняет формат представления discounts

`desktop_discounts`

- is optional
- type: `boolean`
- default: `false`

##### desktop_discounts Type

`boolean`

#### only_active_workers

если указано true - возвращает только активных работников (status == 'INACTIVE')

`only_active_workers`

- is optional
- type: `boolean`
- default: `false`

##### only_active_workers Type

`boolean`

#### show_inactive_workers

если указано true - возвращает всех работников в том числе и неактивных (status == 'INACTIVE')

`show_inactive_workers`

- is optional
- type: `boolean`
- default: `false`

##### show_inactive_workers Type

`boolean`

#### showcase_business_id

идентификатор витрины (передаётся вместе с with_taxonomy_showcase)

`showcase_business_id`

- is optional
- type: multiple

##### showcase_business_id Type

Unknown type `number,string`.

```json
{
  "description": "идентификатор витрины (передаётся вместе с with_taxonomy_showcase)",
  "type": ["number", "string"],
  "simpletype": "multiple"
}
```

#### skip_worker_sorting

если указано true - не приминяет сортировку работников

`skip_worker_sorting`

- is optional
- type: `boolean`
- default: `false`

##### skip_worker_sorting Type

`boolean`

#### with_billing

если указано true - возвращает историю биллинга в поле billing (недоступно для роли guest)

`with_billing`

- is optional
- type: `boolean`
- default: `false`

##### with_billing Type

`boolean`

#### with_bop

если указано true - возвращает список операций, доступных в БекОфисе в поле profiles (недоступно для роли guest)

`with_bop`

- is optional
- type: `boolean`
- default: `false`

##### with_bop Type

`boolean`

#### with_campaigns

если указано true - возвращает кампании скидочных купонов в поле campaigns

`with_campaigns`

- is optional
- type: `boolean`
- default: `false`

##### with_campaigns Type

`boolean`

#### with_discounts

если указано true - возвращает список скидочных акций в поле discounts

`with_discounts`

- is optional
- type: `boolean`
- default: `false`

##### with_discounts Type

`boolean`

#### with_discounts_from

дата начала расписания, для которого нужно получить скидочные акции

`with_discounts_from`

- is optional
- type: `string`

##### with_discounts_from Type

`string`

- format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))

#### with_discounts_to

дата окончания расписания, для которого нужно получить скидочные акции

`with_discounts_to`

- is optional
- type: `string`

##### with_discounts_to Type

`string`

- format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))

#### with_networks

если указано true - возвращает информацию о других филиалах сети в поле networks

`with_networks`

- is optional
- type: `boolean`
- default: `false`

##### with_networks Type

`boolean`

#### with_taxonomy_showcase

если указано true - заполняет идентификаторы таксономий витрины showcaseTaxonomyID для каждой таксономии (недоступно
для роли guest)

`with_taxonomy_showcase`

- is optional
- type: `boolean`

##### with_taxonomy_showcase Type

`boolean`

#### worker_sorting_type

тип сортировки работника

`worker_sorting_type`

- is optional
- type: `enum`
- default: `"none"`

The value of this property **must** be equal to one of the [known values below](#params-known-values).

##### worker_sorting_type Known Values

| Value       | Description                                                                 |
| ----------- | --------------------------------------------------------------------------- |
| `workload`  | по загруженности (сумма свободных минут в расписании на ближайшие 2 недели) |
| `most_free` | по дате ближайшего приёма                                                   |
| `none`      | не переопределять порядок сортировки, установленный в БекОфисе              |

**All** of the following _requirements_ need to be fulfilled.

#### Requirement 1

- []() – `../../common/request.schema.json`

#### Requirement 2

- []() – `#/definitions/Request`
