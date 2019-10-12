# Schema

```
http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/socialnetwork.schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                    |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ------------------------------------------------------------- |
| Can be instantiated | No         | Experimental | No           | Forbidden         | Permitted             | [models/socialNetwork.schema.json](socialNetwork.schema.json) |

# Properties

| Property                          | Type     | Required     | Nullable | Defined by                                 |
| --------------------------------- | -------- | ------------ | -------- | ------------------------------------------ |
| [handle](#handle)                 | `string` | **Required** | No       | (this schema)                              |
| [id](#id)                         | `string` | **Required** | No       | (this schema)                              |
| [social_network](#social_network) | `enum`   | **Required** | No       | (this schema)                              |
| [url](#url)                       | `string` | **Required** | No       | (this schema)                              |
| `*`                               | any      | Additional   | Yes      | this schema _allows_ additional properties |

## handle

`handle`

- is **required**
- type: `string`
- defined in this schema

### handle Type

`string`

## id

network id

`id`

- is **required**
- type: `string`
- defined in this schema

### id Type

`string`

## social_network

`social_network`

- is **required**
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#social_network-known-values).

### social_network Known Values

| Value           | Description |
| --------------- | ----------- |
| `GBooking`      |             |
| `Facebook`      |             |
| `VKontakte`     |             |
| `Odnoklassniki` |             |
| `Twitter`       |             |
| `LinkedIn`      |             |
| `Mailru`        |             |
| `Yandex`        |             |
| `Yahoo`         |             |
| `Google`        |             |

## url

`url`

- is **required**
- type: `string`
- defined in this schema

### url Type

`string`
