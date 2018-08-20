
# TimeFrame Schema




| Property | Type | Required |
|----------|------|----------|
| [start](#start) | `number` | **Required** | TimeFrame (this schema) |
| [end](#end) | `number` | **Required** | TimeFrame (this schema) |
| [resources](#resources) | `string[]` | Optional | TimeFrame (this schema) |
| [roomID](#roomid) | `string` | Optional | TimeFrame (this schema) |
| [capacity](#capacity) | `number` | Optional | TimeFrame (this schema) |
| [extraId](#extraid) | `string` | Optional | TimeFrame (this schema) |
| [startDate](#startdate) | `string` | Optional | TimeFrame (this schema) |
| [endDate](#enddate) | `string` | Optional | TimeFrame (this schema) |

## capacity


`capacity`
* is optional
* type: `number`
* defined in this schema

### capacity type


`number`






## end

смещение в минутах от начала дня

`end`
* is **required**
* type: `number`
* defined in this schema

### end type


`number`






## endDate


`endDate`
* is optional
* type: `string`
* defined in this schema

### endDate type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## extraId


`extraId`
* is optional
* type: `string`
* defined in this schema

### extraId type


`string`






## resources


`resources`
* is optional
* type: `string[]`

* defined in this schema

### resources type


Array type: `string[]`

All items must be of the type:
`string`









## roomID


`roomID`
* is optional
* type: `string`
* defined in this schema

### roomID type


`string`






## start

смещение в минутах от начала дня

`start`
* is **required**
* type: `number`
* defined in this schema

### start type


`number`






## startDate


`startDate`
* is optional
* type: `string`
* defined in this schema

### startDate type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))





