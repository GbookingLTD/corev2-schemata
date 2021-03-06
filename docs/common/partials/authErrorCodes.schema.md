# Auth Error Codes Schema

```
schemas-json/common/partials/authErrorCodes.schema.json
```

Код ошибки авторизации

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                               |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ------------------------------------------------------------------------ |
| Can be instantiated | No         | Experimental | No           | Forbidden         | Permitted             | [common/partials/authErrorCodes.schema.json](authErrorCodes.schema.json) |

# Auth Error Codes Properties

| Property      | Type   | Required     | Nullable | Defined by                                 |
| ------------- | ------ | ------------ | -------- | ------------------------------------------ |
| [code](#code) | `enum` | **Required** | No       | Auth Error Codes (this schema)             |
| `*`           | any    | Additional   | Yes      | this schema _allows_ additional properties |

## code

`code`

- is **required**
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#code-known-values).

### code Known Values

| Value    | Description                                                                                                                |
| -------- | -------------------------------------------------------------------------------------------------------------------------- |
| `-17101` | INVALID_TWOFA_AUTH_TYPE - Unknown error occurred                                                                           |
| `-17102` | AUTH_TWOFA_VERIFICATION_FAILED - Unknown error occurred                                                                    |
| `-17103` | AUTH_TWOFA_ACTIVATE_FAILED - Unknown error occurred                                                                        |
| `-18000` | AUTH_CREATE_FAILED - Cannot create profile                                                                                 |
| `-18001` | AUTH_DATA_MISSING - Invalid profile data provided                                                                          |
| `-18002` | AUTH_EMAIL_TAKEN - This email is already taken                                                                             |
| `-18003` | AUTH_INVALID_TOKEN - The oauth token provided is invalid                                                                   |
| `-18004` | AUTH_INVALID_USER - The user id provided is invalid (either user not found or the user isn&#39;t allowed to use the method |
| `-18005` | AUTH_MALFORMED_REQUEST - The RPC request was not formed correctly                                                          |
| `-18006` | AUTH_RETRIEVE_FAILED - The profile with such id not found                                                                  |
| `-18007` | AUTH_TOKEN_DATE_EXPIRED - Token expired                                                                                    |
| `-18008` | AUTH_2FA_NOT_VERIFIED - Unknown error occurred                                                                             |
