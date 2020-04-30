# CracSlotsRequestBusinessParams Schema

```
schemas-json/models/partials/cracSlotsRequestBusinessParams.schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                                                               |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | -------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Experimental | No           | Forbidden         | Forbidden             | [models/partials/cracSlotsRequestBusinessParams.schema.json](cracSlotsRequestBusinessParams.schema.json) |

# CracSlotsRequestBusinessParams Properties

| Property                                      | Type     | Required     | Nullable | Defined by                                   |
| --------------------------------------------- | -------- | ------------ | -------- | -------------------------------------------- |
| [general_info](#general_info)                 | `object` | **Required** | No       | CracSlotsRequestBusinessParams (this schema) |
| [id](#id)                                     | `string` | **Required** | No       | CracSlotsRequestBusinessParams (this schema) |
| [widget_configuration](#widget_configuration) | `object` | **Required** | No       | CracSlotsRequestBusinessParams (this schema) |

## general_info

`general_info`

- is **required**
- type: `object`
- defined in this schema

### general_info Type

`object` with following properties:

| Property   | Type   | Required     |
| ---------- | ------ | ------------ |
| `timezone` | string | **Required** |

#### timezone

`timezone`

- is **required**
- type: `string`

##### timezone Type

`string`

## id

`id`

- is **required**
- type: `string`
- defined in this schema

### id Type

`string`

## widget_configuration

`widget_configuration`

- is **required**
- type: `object`
- defined in this schema

### widget_configuration Type

`object` with following properties:

| Property          | Type    | Required     | Default |
| ----------------- | ------- | ------------ | ------- |
| `cracServer`      | string  | **Required** |         |
| `displaySlotSize` | number  | Optional     |         |
| `hideGraySlots`   | boolean | Optional     | `false` |

#### cracServer

`cracServer`

- is **required**
- type: `string`

##### cracServer Type

`string`

#### displaySlotSize

`displaySlotSize`

- is optional
- type: `number`

##### displaySlotSize Type

`number`

#### hideGraySlots

`hideGraySlots`

- is optional
- type: `boolean`
- default: `false`

##### hideGraySlots Type

`boolean`
