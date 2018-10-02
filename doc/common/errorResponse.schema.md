
# ErrorResponse Schema




| Property | Type | Required |
|----------|------|----------|
| [jsonrpc](#jsonrpc) | `const` | **Required** | ErrorResponse (this schema) |
| [id](#id) | `number` | **Required** | ErrorResponse (this schema) |
| [error](#error) | `object` | **Required** | ErrorResponse (this schema) |

## error

объект, содержащий информацию об ошибке

`error`
* is **required**
* type: `object`
* defined in this schema

### error type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `code`| number | **Required** |
| `message`| string | **Required** |
| `data`| string | Optional |



#### code

код ошибки

`code`
* is **required**
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#error-known-values).

##### code known values
| Value | Description |
|-------|-------------|
| `-10000` | UNKNOWN_ERROR - Unknown error occurred |
| `-10001` | BUSINESS_DATA_MISSING - Business data missing |
| `-10002` | BUSINESS_DATA_REVISION_CONFLICT - Business data revision conflict |
| `-10100` | BUSINESS_CREATE_FAILED - Failed to create business |
| `-10200` | BUSINESS_RETRIEVE_FAILED - Failed to retrieve business |
| `-10205` | BUSINESS_PRICING_PLAN_RETRIEVE_FAILED - Failed to retrieve business pricing plan |
| `-10206` | BUSINESS_PRICING_PLAN_LIMIT_REACHED_FAILED - Pricing plan limit reached |
| `-10300` | BUSINESS_UPDATE_FAILED - Failed to update business |
| `-10400` | BUSINESS_DELETE_FAILED - Failed to delete business |
| `-10500` | BUSINESS_INFO_UPDATE_FAILED - Failed to update business info |
| `-10501` | BUSINESS_INFO_MISSING - Business info missing |
| `-10600` | BUSINESS_INTEGRATION_DATA_UPDATE_FAILED - Failed to update business integration data |
| `-10601` | BUSINESS_INTEGRATION_DATA_MISSING - Integration data missing |
| `-10602` | BUSINESS_INTEGRATION_NOT_SUPPORT_FOR_PROVIDER - Unknown error occurred |
| `-10700` | BUSINESS_TAXONOMY_UPDATE_FAILED - Failed to update taxonomy |
| `-10701` | BUSINESS_TAXONOMY_MISSING - Business taxonomy missing |
| `-10702` | BUSINESS_TAXONOMY_NOT_FOUND - Failed to retrieve business taxonomy |
| `-10703` | BUSINESS_TAXONOMY_EXISTS - Taxonomy exists in business |
| `-10800` | BUSINESS_TIMETABLE_UPDATE_FAILED - Failed to update business timetable |
| `-10801` | BUSINESS_TIMETABLE_MISSING - Business timetable missing |
| `-10900` | BUSINESS_TAXONOMY_TIMETABLE_UPDATE_FAILED - Failed to update taxonomy timetable |
| `-10901` | BUSINESS_TAXONOMY_TIMETABLE_MISSING - Taxonomy timetable missing |
| `-10902` | BUSINESS_ALREADY_OWNED_BY_USER - This user already owns a business |
| `-10903` | BUSINESS_TAXONOMY_ALREADY_UPDATED - Business taxonomy already updated |
| `-10904` | BUSINESS_CABINET_RETRIEVE_FAILED - Unknown error occurred |
| `-10905` | BUSINESS_NOT_FOUND - Unknown error occurred |
| `-10906` | BUSINESS_STATE_LEVEL_HOLIDAYS_NOT_APPLICABLE - Business have no country or not in network to apply state-level holidays |
| `-11100` | CLIENT_CREATE_FAILED - Failed to create client |
| `-11200` | CLIENT_RETRIEVE_FAILED - Failed to retrieve client |
| `-11201` | CLIENT_DUPLICATE_PHONE_FAILED - Failed to retrieve client |
| `-11300` | CLIENT_UPDATE_FAILED - Failed to update client |
| `-11400` | CLIENT_DELETE_FAILED - Failed to delete client |
| `-11500` | CLIENT_DATA_MISSING - Client data missing |
| `-11600` | CLIENT_DEACTIVATE_FAILED - Failed to deactivate client |
| `-11700` | CLIENT_EMAIL_ALREADY_REGISTERED - Client with same email already registered |
| `-11800` | CLIENT_IN_BLACKLIST - Client in blacklist |
| `-12100` | RESOURCE_CREATE_FAILED - Failed to create resource |
| `-12200` | RESOURCE_RETRIEVE_FAILED - Failed to retrieve resource |
| `-12300` | RESOURCE_UPDATE_FAILED - Failed to update resource |
| `-12400` | RESOURCE_DELETE_FAILED - Failed to delete resource |
| `-12500` | RESOURCE_DATA_MISSING - Resource data missing |
| `-12600` | RESOURCE_NOT_ACTIVE - Resource not active |
| `-13100` | TAXONOMY_CREATE_FAILED - Failed to create taxonomy |
| `-13200` | TAXONOMY_RETRIEVE_FAILED - Failed to retrieve taxonomy |
| `-13300` | TAXONOMY_UPDATE_FAILED - Failed to update taxonomy |
| `-13400` | TAXONOMY_DELETE_FAILED - Failed to delete taxonomy |
| `-13401` | TAXONOMY_NOT_FOUND - Taxonomy not found |
| `-13402` | TAXONOMY_ID_EXISTS - Unknown error occurred |
| `-13500` | TAXONOMY_DATA_MISSING - Taxonomy data missing |
| `-14100` | APPOINTMENT_CREATE_FAILED - Failed to create appointment |
| `-14101` | APPOINTMENT_ALREADY_EXISTS - Unknown error occurred |
| `-14200` | APPOINTMENT_RETRIEVE_FAILED - Failed to retrieve appointment |
| `-14202` | APPOINTMENT_TIMESLOT_TAKEN - Time slot busy |
| `-14300` | APPOINTMENT_UPDATE_FAILED - Failed to update appointment |
| `-14301` | APPOINTMENT_CONFIRM_FAILED - Failed to confirm appointment |
| `-14302` | APPOINTMENT_CLIENT_OVERLAPPED - Client overlapped |
| `-14303` | APPOINTMENT_CANCEL_FAILED - Appointment already canceled |
| `-14304` | APPOINTMENT_PRE_RESERVE_FAILED - Unknown error occurred |
| `-14305` | APPOINTMENT_PRE_CANCEL_FAILED - Unknown error occurred |
| `-14306` | APPOINTMENT_GUEST_CANCEL_FAILED - Failed to cancel appointment |
| `-14307` | APPOINTMENT_CABINET_OVERLAPPED - Failed to confirm appointment |
| `-14308` | APPOINTMENT_MIS_CONFIRM_FAILED - Failed to create mis appointment |
| `-14309` | APPOINTMENT_MIS_RESERVE_FAILED - Failed to reserve mis appointment |
| `-14310` | APPOINTMENT_MIS_CONFIRM_CLEINT_DUPLICATE_RECORD_ERROR - Failed to reserve mis appointment - Client duplicate record |
| `-14400` | APPOINTMENT_DELETE_FAILED - Failed to delete appointment |
| `-14500` | APPOINTMENT_DATA_MISSING - Appointment data missing |
| `-14600` | APPOINTMENT_RESOURCE_TAXONOMY_MISMATCH - Selected resource cannot supply requested service |
| `-14610` | APPOINTMENT_RESOURCE_TAXONOMY_UNAVAILABLE - Selected resource no longer provides requested service |
| `-14650` | APPOINTMENT_RESOURCE_BUSY - Resources are busy at requested time |
| `-14700` | APPOINTMENT_CAPACITY_REACHED - Selected taxonomy capacity reached |
| `-14800` | APPOINTMENT_ALLOEWD_TAXONOMIES_LIMIT - Limit of 6 taxonomies |
| `-14900` | APPOINTMENT_TIME_BEFORE_NOW - Appointmnet end time before now |
| `-15100` | ORDER_CREATE_FAILED - Failed to create order |
| `-15200` | ORDER_RETRIEVE_FAILED - Failed to retrieve order |
| `-15300` | ORDER_UPDATE_FAILED - Failed to update order |
| `-15400` | ORDER_DELETE_FAILED - Failed to delete order |
| `-16100` | PROFILE_CREATE_FAILED - Failed to create profile |
| `-16200` | PROFILE_RETRIEVE_FAILED - Failed to retrieve profile |
| `-16300` | PROFILE_UPDATE_FAILED - Failed to update profile |
| `-16400` | PROFILE_DELETE_FAILED - Failed to delete profile |
| `-16500` | PROFILE_DATA_MISSING - Profile data missing |
| `-17000` | ADDRESS_INVALID - Address data invalid |
| `-17100` | INVALID_PHONE - Phone data invalid |
| `-17101` | INVALID_TWOFA_AUTH_TYPE - Unknown error occurred |
| `-17102` | AUTH_TWOFA_VERIFICATION_FAILED - Unknown error occurred |
| `-17103` | AUTH_TWOFA_ACTIVATE_FAILED - Unknown error occurred |
| `-18000` | AUTH_CREATE_FAILED - Cannot create profile |
| `-18001` | AUTH_DATA_MISSING - Invalid profile data provided |
| `-18002` | AUTH_EMAIL_TAKEN - This email is already taken |
| `-18003` | AUTH_INVALID_TOKEN - The oauth token provided is invalid |
| `-18004` | AUTH_INVALID_USER - The user id provided is invalid (either user not found or the user isn&#39;t allowed to use the method |
| `-18005` | AUTH_MALFORMED_REQUEST - The RPC request was not formed correctly |
| `-18006` | AUTH_RETRIEVE_FAILED - The profile with such id not found |
| `-18007` | AUTH_TOKEN_DATE_EXPIRED - Token expired |
| `-18008` | AUTH_2FA_NOT_VERIFIED - Unknown error occurred |
| `-19000` | DISCOUNT_TO_DATE_NOT_VALID - End date bounds not valid |
| `-19001` | DISCOUNT_FROM_DATE_NOT_VALID - Start date bounds not valid |
| `-19002` | DISCOUNT_DATE_RANGE_NOT_VALID - Date range not valid |
| `-20000` | BUSINESS_MOBILE_DATA_CREATE_FAILED - Mobile data for business was not created |
| `-20001` | BUSINESS_MOBILE_DATA_UPDATE_FAILED - Mobile data for business was not updated |
| `-20002` | MOBILE_CANNOT_START_APNS - Cannot connect to APNS |
| `-20003` | MOBILE_CANNOT_SEND_PUSH_APNS - Problem while sending push to APNS |
| `-20004` | MOBILE_CANNOT_SEND_PUSH_GCM - Problem while sending push to GCM |
| `-20005` | BUSINESS_NOTIFICATION_DATA_UPDATE_FAILED - Notification data for business was not updated |
| `-21000` | NETWORK_RETRIEVE_FAILED - Failed to retrieve network |
| `-22000` | EXCEPTION_RETRIEVE_FAILED - Failed to retrieve exception |
| `-22001` | EXCEPTION_UPDATE_FAILED - Failed to update exception |
| `-23000` | SOCIAL_TOKEN_DATA_MISSING - Social token data missing |
| `-23001` | SOCIAL_TOKEN_RETRIEVE_FAILED - Failed to retrieve social token |
| `-24000` | STAT_COUNTER_DATA_MISSING - Stat counter data missing |
| `-24001` | STAT_COUNTER_CREATE_FAILED - Failed to create stat counter |
| `-24002` | STAT_COUNTER_RETRIEVE_FAILED - Failed to retrieve stat counter |
| `-25000` | PAYMENT_ILLEGAL_PARAMETER - Unknown error occurred |
| `-25100` | PAYMENT_RETRIEVE_FAILED - Unknown error occurred |
| `-25200` | PAYMENT_UPDATE_FAILED - Unknown error occurred |
| `-26000` | FILE_TOKEN_NOT_VALID - File token is not valid |
| `-27000` | NETWORK_DATA_MISSING - Unknown error occurred |
| `-27100` | NETWORK_UPDATE_FAILED - Unknown error occurred |
| `-28000` | SAVED_REPORT_FAILED - Could not add saved report |
| `-30000` | ACCESS_DENIED_ILLEGAL_PARAMETER - Access denied illegal parameter |
| `-31000` | SEASON_TICKET_CREATE_FAILED - Unknown error occurred |
| `-32000` | SEASON_TICKET_RETRIEVE_FAILED - Unknown error occurred |
| `-33000` | SEASON_TICKET_UPDATE_FAILED - Unknown error occurred |
| `-34000` | SEASON_TICKET_ALREADY_EXIST - Unknown error occurred |
| `-34100` | SEASON_TICKET_NOT_ENOUGH_VISITS - Not enough visits number for client season ticket |
| `-34200` | SEASON_TICKET_NOT_ENOUGH_DAYS - Not enough days for client season ticket |
| `-34300` | SEASON_TICKET_NOT_ENOUGH_CHARGE_UNITS - Not enough charge units for client season ticket |
| `-34400` | SEASON_TICKET_EXPIRED - Season ticket expired |
| `-35000` | US_INVALID_ZIPCODE - Invalid zip codes |
| `-35100` | DESIGN_CREATE_FAILED - Failed to create design |
| `-35200` | DESIGN_RETRIEVE_FAILED - Failed to retrieve design |
| `-35300` | DESIGN_UPDATE_FAILED - Failed to update design |
| `-35400` | DESIGN_DELETE_FAILED - Failed to delete design |
| `-35500` | DESIGN_DATA_MISSING - Design data missing |
| `-36100` | LOYALTY_GIFT_CREATE_FAILED - Failed to create loyalty gift |
| `-36200` | LOYALTY_GIFT_RETRIEVE_FAILED - Failed to retrieve loyalty gift |
| `-36300` | LOYALTY_GIFT_UPDATE_FAILED - Failed to update loyalty gift |
| `-36400` | LOYALTY_GIFT_DELETE_FAILED - Failed to delete loyalty gift |
| `-36500` | LOYALTY_GIFT_DATA_MISSING - Loyalty gift data missing |
| `-37100` | LOYALTY_STATUS_CREATE_FAILED - Failed to create loyalty status |
| `-37200` | LOYALTY_STATUS_RETRIEVE_FAILED - Failed to retrieve loyalty status |
| `-37300` | LOYALTY_STATUS_UPDATE_FAILED - Failed to update loyalty status |
| `-37400` | LOYALTY_STATUS_DELETE_FAILED - Failed to delete loyalty status |
| `-37500` | LOYALTY_STATUS_DATA_MISSING - Loyalty status data missing |
| `-38100` | PROMO_CREATE_FAILED - Failed to create promo |
| `-38200` | PROMO_RETRIEVE_FAILED - Failed to retrieve promo |
| `-38300` | PROMO_UPDATE_FAILED - Failed to update promo |
| `-38400` | PROMO_DELETE_FAILED - Failed to delete promo |
| `-38500` | PROMO_DATA_MISSING - Promo data missing |
| `-40100` | CURRENT_PASSWORD_INVALID - Current password incorrect |
| `-41100` | API_1188_WRONG_ID - Jūs esat ievadījis nepareizu vai neeksistējošu uzņēmuma reģistrācijas numuru. Lūdzu, pārbaudiet ievadītu uzņēmuma reģistrācijas numuru. |
| `-50000` | LEAD_DATA_MISSING - Lead data missing or wrong |
| `-50100` | LEAD_BAD_STATUS - This status does not accepted |
| `-50200` | LEAD_CLIENT_PHONE_MISSING - Lead client phone[] missing |
| `-50300` | LEAD_CLIENT_NAME_MISSING - Lead client data missing |
| `-50400` | LEAD_CLIENT_DATA_MISSING - Lead client data missing |
| `-50500` | LEAD_NOT_FOUND - Lead not found |
| `-50600` | LEAD_FILTER_MISSING - Lead searching filter missing or wrong |
| `-50700` | LEAD_SAME_STATUS - Requested Lead status already applyed and changes have no effect |
| `-51000` | CALENDAR_RETRIEVE_FAILED - Calendar data retrieve failed |
| `-51100` | CALENDAR_NOT_FOUND - Retrieved calendar not found |
| `-51200` | CALENDAR_BAD_COUNTRY - Bad country code in calendar |
| `-59992` | MU_ORDER_NOT_FOUND - Order is not found |
| `-59993` | MU_PROMO_NOT_FOUND - The promocode is not active |
| `-59994` | MU_CLIENT_NOT_ACTIVE - The client is not active |
| `-59997` | MU_COMBO_NOT_FOUND - The combo is not found |
| `-59998` | MU_ID_NOT_FOUND - error code 59998 |
| `-59999` | MU_MASTER_NOT_FOUND - The master is not found |
| `-60000` | UNSUPPORTED_FILTER_OPERATOR - Given unsupported filter operator for search query |
| `-60100` | UNSUPPORTED_FILTER_FIELD - Given unsupported fitler field |
| `-60200` | UNSUPPORTED_FILTER_VALUE - Given unsupported fitlter value |
| `-60300` | BAD_DATE_FILTER_RANGE - Given bad date.from...date.to filter range |
| `-70000` | CRAC_BAD_AUTH_TOKEN - Crac operations token is missing or invalid |
| `-70100` | CRAC_ENSURE_APPOINTMENT_INFO_MISSING - Appointment data missing |
| `-70200` | CRAC_BAD_CLEANUP_VALUE - daysToClean value should be in [1, 365] |
| `-70300` | CRAC_PROXY_ERROR - Unknown error occurred |
| `-80101` | GRANT_GROUP_DELETE_FAILED - Unknown error occurred |
| `-71100` | EXTRA_FIELD_CREATE_FAILED - Unknown error occurred |
| `-71200` | EXTRA_FIELD_RETRIEVE_FAILED - Unknown error occurred |
| `-71300` | EXTRA_FIELD_UPDATE_FAILED - Unknown error occurred |
| `-71400` | EXTRA_FIELD_DELETE_FAILED - Unknown error occurred |
| `-72100` | PRODUCT_CREATE_FAILED - Unknown error occurred |
| `-72200` | PRODUCT_RETRIEVE_FAILED - Unknown error occurred |
| `-72300` | PRODUCT_UPDATE_FAILED - Unknown error occurred |
| `-72400` | PRODUCT_DELETE_FAILED - Unknown error occurred |
| `-32700` | PARSE_ERROR - Parse error |
| `-32600` | INVALID_REQUEST - Invalid request |
| `-32601` | METHOD_NOT_FOUND - Method not found |
| `-32602` | INVALID_PARAMETERS - Invalid parameters |
| `-32603` | INTERNAL_ERROR - Internal error |
| `-32604` | VERSION_NOT_FOUND - Version not found |
| `-73100` | LOYALTY_GOOD_RETRIEVE_FAILED - Good retrieve failed |
| `-73200` | LOYALTY_GOOD_ALREADY_USED - Good already used |
| `-73300` | LOYALTY_NOT_ENOUGH_POINTS - Not enough points |
| `-73400` | LOYALTY_GOOD_ACTIVATION_FAILED - Good activation failed |
| `-73500` | LOYALTY_VERSION_INCORRECT - Loyalty version incorrect |






#### data

дополнительные данные об ошибке

`data`
* is optional
* type: `string`

##### data type


`string`








#### message

текстовая информация об ошибке

`message`
* is **required**
* type: `string`

##### message type


`string`











## id

значение числового типа для идентификации запроса на сервере

`id`
* is **required**
* type: `number`
* defined in this schema

### id type


`number`






## jsonrpc

версия протокола (2.0)

`jsonrpc`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"2.0"
```




