
#  Schema




| Property | Type | Required |
|----------|------|----------|
| [social_network](#social_network) | `enum` | **Required** |  (this schema) |
| [handle](#handle) | `string` | **Required** |  (this schema) |
| [url](#url) | `string` | **Required** |  (this schema) |
| [id](#id) | `string` | **Required** |  (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## handle


`handle`
* is **required**
* type: `string`
* defined in this schema

### handle type


`string`






## id

network id

`id`
* is **required**
* type: `string`
* defined in this schema

### id type


`string`






## social_network


`social_network`
* is **required**
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#social_network-known-values).

### social_network Known Values
| Value | Description |
|-------|-------------|
| `GBooking` |  |
| `Facebook` |  |
| `VKontakte` |  |
| `Odnoklassniki` |  |
| `Twitter` |  |
| `LinkedIn` |  |
| `Mailru` |  |
| `Yandex` |  |
| `Yahoo` |  |
| `Google` |  |




## url


`url`
* is **required**
* type: `string`
* defined in this schema

### url type


`string`





