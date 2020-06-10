# LoyaltyInfo Schema

```
schemas-json/models/partials/loyaltyInfo.schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                         |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ------------------------------------------------------------------ |
| Can be instantiated | No         | Experimental | No           | Forbidden         | Forbidden             | [models/partials/loyaltyInfo.schema.json](loyaltyInfo.schema.json) |

# LoyaltyInfo Properties

| Property                          | Type       | Required | Nullable | Default | Defined by                |
| --------------------------------- | ---------- | -------- | -------- | ------- | ------------------------- |
| [annualTurnover](#annualturnover) | `number`   | Optional | No       |         | LoyaltyInfo (this schema) |
| [bonusPoints](#bonuspoints)       | `number`   | Optional | No       | `0`     | LoyaltyInfo (this schema) |
| [cardNumber](#cardnumber)         | `string`   | Optional | No       |         | LoyaltyInfo (this schema) |
| [presents](#presents)             | `object[]` | Optional | No       |         | LoyaltyInfo (this schema) |
| [purchases](#purchases)           | `object[]` | Optional | No       |         | LoyaltyInfo (this schema) |
| [status](#status)                 | `string`   | Optional | No       |         | LoyaltyInfo (this schema) |

## annualTurnover

`annualTurnover`

- is optional
- type: `number`
- defined in this schema

### annualTurnover Type

`number`

## bonusPoints

`bonusPoints`

- is optional
- type: `number`
- default: `0`
- defined in this schema

### bonusPoints Type

`number`

## cardNumber

`cardNumber`

- is optional
- type: `string`
- defined in this schema

### cardNumber Type

`string`

## presents

`presents`

- is optional
- type: `object[]`
- defined in this schema

### presents Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property  | Type   | Required | Default   |
| --------- | ------ | -------- | --------- |
| `code`    | string | Optional |           |
| `extraID` | string | Optional |           |
| `name`    | string | Optional |           |
| `status`  | string | Optional | `"READY"` |

#### code

`code`

- is optional
- type: `string`

##### code Type

`string`

#### extraID

`extraID`

- is optional
- type: `string`

##### extraID Type

`string`

#### name

`name`

- is optional
- type: `string`

##### name Type

`string`

#### status

`status`

- is optional
- type: `enum`
- default: `"READY"`

The value of this property **must** be equal to one of the [known values below](#presents-known-values).

##### status Known Values

| Value      | Description |
| ---------- | ----------- |
| `READY`    |             |
| `RECEIVED` |             |

## purchases

`purchases`

- is optional
- type: `object[]`
- defined in this schema

### purchases Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property         | Type    | Required | Default |
| ---------------- | ------- | -------- | ------- |
| `active`         | boolean | Optional | `true`  |
| `expirationDate` | string  | Optional |         |
| `free`           | boolean | Optional | `false` |
| `goodID`         | string  | Optional |         |
| `price`          | number  | Optional | `0`     |
| `transactionID`  | string  | Optional |         |

#### active

`active`

- is optional
- type: `boolean`
- default: `true`

##### active Type

`boolean`

#### expirationDate

`expirationDate`

- is optional
- type: `string`

##### expirationDate Type

`string`

#### free

`free`

- is optional
- type: `boolean`
- default: `false`

##### free Type

`boolean`

#### goodID

`goodID`

- is optional
- type: `string`

##### goodID Type

`string`

#### price

`price`

- is optional
- type: `number`
- default: `0`

##### price Type

`number`

#### transactionID

`transactionID`

- is optional
- type: `string`

##### transactionID Type

`string`

## status

`status`

- is optional
- type: `string`
- defined in this schema

### status Type

`string`
