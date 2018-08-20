|name|value|description|
|---|---|---|
|UNKNOWN_ERROR|-10000|Unknown error occurred|
|BUSINESS_DATA_MISSING|-10001|Business data missing|
|BUSINESS_DATA_REVISION_CONFLICT|-10002|Business data revision conflict|
|BUSINESS_CREATE_FAILED|-10100|Failed to create business|
|BUSINESS_RETRIEVE_FAILED|-10200|Failed to retrieve business|
|BUSINESS_PRICING_PLAN_RETRIEVE_FAILED|-10205|Failed to retrieve business pricing plan|
|BUSINESS_PRICING_PLAN_LIMIT_REACHED_FAILED|-10206|Pricing plan limit reached|
|BUSINESS_UPDATE_FAILED|-10300|Failed to update business|
|BUSINESS_DELETE_FAILED|-10400|Failed to delete business|
|BUSINESS_INFO_UPDATE_FAILED|-10500|Failed to update business info|
|BUSINESS_INFO_MISSING|-10501|Business info missing|
|BUSINESS_INTEGRATION_DATA_UPDATE_FAILED|-10600|Failed to update business integration data|
|BUSINESS_INTEGRATION_DATA_MISSING|-10601|Integration data missing|
|BUSINESS_INTEGRATION_NOT_SUPPORT_FOR_PROVIDER|-10602|Unknown error occurred|
|BUSINESS_TAXONOMY_UPDATE_FAILED|-10700|Failed to update taxonomy|
|BUSINESS_TAXONOMY_MISSING|-10701|Business taxonomy missing|
|BUSINESS_TAXONOMY_NOT_FOUND|-10702|Failed to retrieve business taxonomy|
|BUSINESS_TAXONOMY_EXISTS|-10703|Taxonomy exists in business|
|BUSINESS_TIMETABLE_UPDATE_FAILED|-10800|Failed to update business timetable|
|BUSINESS_TIMETABLE_MISSING|-10801|Business timetable missing|
|BUSINESS_TAXONOMY_TIMETABLE_UPDATE_FAILED|-10900|Failed to update taxonomy timetable|
|BUSINESS_TAXONOMY_TIMETABLE_MISSING|-10901|Taxonomy timetable missing|
|BUSINESS_ALREADY_OWNED_BY_USER|-10902|This user already owns a business|
|BUSINESS_TAXONOMY_ALREADY_UPDATED|-10903|Business taxonomy already updated|
|BUSINESS_CABINET_RETRIEVE_FAILED|-10904|Unknown error occurred|
|BUSINESS_NOT_FOUND|-10905|Unknown error occurred|
|BUSINESS_STATE_LEVEL_HOLIDAYS_NOT_APPLICABLE|-10906|Business have no country or not in network to apply state-level holidays|
|CLIENT_CREATE_FAILED|-11100|Failed to create client|
|CLIENT_RETRIEVE_FAILED|-11200|Failed to retrieve client|
|CLIENT_DUPLICATE_PHONE_FAILED|-11201|Failed to retrieve client|
|CLIENT_UPDATE_FAILED|-11300|Failed to update client|
|CLIENT_DELETE_FAILED|-11400|Failed to delete client|
|CLIENT_DATA_MISSING|-11500|Client data missing|
|CLIENT_DEACTIVATE_FAILED|-11600|Failed to deactivate client|
|CLIENT_EMAIL_ALREADY_REGISTERED|-11700|Client with same email already registered|
|CLIENT_IN_BLACKLIST|-11800|Client in blacklist|
|RESOURCE_CREATE_FAILED|-12100|Failed to create resource|
|RESOURCE_RETRIEVE_FAILED|-12200|Failed to retrieve resource|
|RESOURCE_UPDATE_FAILED|-12300|Failed to update resource|
|RESOURCE_DELETE_FAILED|-12400|Failed to delete resource|
|RESOURCE_DATA_MISSING|-12500|Resource data missing|
|RESOURCE_NOT_ACTIVE|-12600|Resource not active|
|TAXONOMY_CREATE_FAILED|-13100|Failed to create taxonomy|
|TAXONOMY_RETRIEVE_FAILED|-13200|Failed to retrieve taxonomy|
|TAXONOMY_UPDATE_FAILED|-13300|Failed to update taxonomy|
|TAXONOMY_DELETE_FAILED|-13400|Failed to delete taxonomy|
|TAXONOMY_NOT_FOUND|-13401|Taxonomy not found|
|TAXONOMY_ID_EXISTS|-13402|Unknown error occurred|
|TAXONOMY_DATA_MISSING|-13500|Taxonomy data missing|
|APPOINTMENT_CREATE_FAILED|-14100|Failed to create appointment|
|APPOINTMENT_ALREADY_EXISTS|-14101|Unknown error occurred|
|APPOINTMENT_RETRIEVE_FAILED|-14200|Failed to retrieve appointment|
|APPOINTMENT_TIMESLOT_TAKEN|-14202|Time slot busy|
|APPOINTMENT_UPDATE_FAILED|-14300|Failed to update appointment|
|APPOINTMENT_CONFIRM_FAILED|-14301|Failed to confirm appointment|
|APPOINTMENT_CLIENT_OVERLAPPED|-14302|Client overlapped|
|APPOINTMENT_CANCEL_FAILED|-14303|Appointment already canceled|
|APPOINTMENT_PRE_RESERVE_FAILED|-14304|Unknown error occurred|
|APPOINTMENT_PRE_CANCEL_FAILED|-14305|Unknown error occurred|
|APPOINTMENT_GUEST_CANCEL_FAILED|-14306|Failed to cancel appointment|
|APPOINTMENT_CABINET_OVERLAPPED|-14307|Failed to confirm appointment|
|APPOINTMENT_MIS_CONFIRM_FAILED|-14308|Failed to create mis appointment|
|APPOINTMENT_MIS_RESERVE_FAILED|-14309|Failed to reserve mis appointment|
|APPOINTMENT_MIS_CONFIRM_CLEINT_DUPLICATE_RECORD_ERROR|-14310|Failed to reserve mis appointment - Client duplicate record|
|APPOINTMENT_DELETE_FAILED|-14400|Failed to delete appointment|
|APPOINTMENT_DATA_MISSING|-14500|Appointment data missing|
|APPOINTMENT_RESOURCE_TAXONOMY_MISMATCH|-14600|Selected resource cannot supply requested service|
|APPOINTMENT_RESOURCE_TAXONOMY_UNAVAILABLE|-14610|Selected resource no longer provides requested service|
|APPOINTMENT_RESOURCE_BUSY|-14650|Resources are busy at requested time|
|APPOINTMENT_CAPACITY_REACHED|-14700|Selected taxonomy capacity reached|
|APPOINTMENT_ALLOEWD_TAXONOMIES_LIMIT|-14800|Limit of 6 taxonomies|
|APPOINTMENT_TIME_BEFORE_NOW|-14900|Appointmnet end time before now|
|ORDER_CREATE_FAILED|-15100|Failed to create order|
|ORDER_RETRIEVE_FAILED|-15200|Failed to retrieve order|
|ORDER_UPDATE_FAILED|-15300|Failed to update order|
|ORDER_DELETE_FAILED|-15400|Failed to delete order|
|PROFILE_CREATE_FAILED|-16100|Failed to create profile|
|PROFILE_RETRIEVE_FAILED|-16200|Failed to retrieve profile|
|PROFILE_UPDATE_FAILED|-16300|Failed to update profile|
|PROFILE_DELETE_FAILED|-16400|Failed to delete profile|
|PROFILE_DATA_MISSING|-16500|Profile data missing|
|ADDRESS_INVALID|-17000|Address data invalid|
|INVALID_PHONE|-17100|Phone data invalid|
|INVALID_TWOFA_AUTH_TYPE|-17101|Unknown error occurred|
|AUTH_TWOFA_VERIFICATION_FAILED|-17102|Unknown error occurred|
|AUTH_TWOFA_ACTIVATE_FAILED|-17103|Unknown error occurred|
|AUTH_CREATE_FAILED|-18000|Cannot create profile|
|AUTH_DATA_MISSING|-18001|Invalid profile data provided|
|AUTH_EMAIL_TAKEN|-18002|This email is already taken|
|AUTH_INVALID_TOKEN|-18003|The oauth token provided is invalid|
|AUTH_INVALID_USER|-18004|The user id provided is invalid (either user not found or the user isn't allowed to use the method|
|AUTH_MALFORMED_REQUEST|-18005|The RPC request was not formed correctly|
|AUTH_RETRIEVE_FAILED|-18006|The profile with such id not found|
|AUTH_TOKEN_DATE_EXPIRED|-18007|Token expired|
|AUTH_2FA_NOT_VERIFIED|-18008|Unknown error occurred|
|DISCOUNT_TO_DATE_NOT_VALID|-19000|End date bounds not valid|
|DISCOUNT_FROM_DATE_NOT_VALID|-19001|Start date bounds not valid|
|DISCOUNT_DATE_RANGE_NOT_VALID|-19002|Date range not valid|
|BUSINESS_MOBILE_DATA_CREATE_FAILED|-20000|Mobile data for business was not created|
|BUSINESS_MOBILE_DATA_UPDATE_FAILED|-20001|Mobile data for business was not updated|
|MOBILE_CANNOT_START_APNS|-20002|Cannot connect to APNS|
|MOBILE_CANNOT_SEND_PUSH_APNS|-20003|Problem while sending push to APNS|
|MOBILE_CANNOT_SEND_PUSH_GCM|-20004|Problem while sending push to GCM|
|BUSINESS_NOTIFICATION_DATA_UPDATE_FAILED|-20005|Notification data for business was not updated|
|NETWORK_RETRIEVE_FAILED|-21000|Failed to retrieve network|
|EXCEPTION_RETRIEVE_FAILED|-22000|Failed to retrieve exception|
|EXCEPTION_UPDATE_FAILED|-22001|Failed to update exception|
|SOCIAL_TOKEN_DATA_MISSING|-23000|Social token data missing|
|SOCIAL_TOKEN_RETRIEVE_FAILED|-23001|Failed to retrieve social token|
|SOCIAL_TOKEN_UPDATE_FAILED|-23001|Failed to retrieve social token|
|STAT_COUNTER_DATA_MISSING|-24000|Stat counter data missing|
|STAT_COUNTER_CREATE_FAILED|-24001|Failed to create stat counter|
|STAT_COUNTER_RETRIEVE_FAILED|-24002|Failed to retrieve stat counter|
|PAYMENT_ILLEGAL_PARAMETER|-25000|Unknown error occurred|
|PAYMENT_RETRIEVE_FAILED|-25100|Unknown error occurred|
|PAYMENT_UPDATE_FAILED|-25200|Unknown error occurred|
|FILE_TOKEN_NOT_VALID|-26000|File token is not valid|
|NETWORK_DATA_MISSING|-27000|Unknown error occurred|
|NETWORK_UPDATE_FAILED|-27100|Unknown error occurred|
|SAVED_REPORT_FAILED|-28000|Could not add saved report|
|ACCESS_DENIED_ILLEGAL_PARAMETER|-30000|Access denied illegal parameter|
|SEASON_TICKET_CREATE_FAILED|-31000|Unknown error occurred|
|SEASON_TICKET_RETRIEVE_FAILED|-32000|Unknown error occurred|
|SEASON_TICKET_UPDATE_FAILED|-33000|Unknown error occurred|
|SEASON_TICKET_ALREADY_EXIST|-34000|Unknown error occurred|
|SEASON_TICKET_NOT_ENOUGH_VISITS|-34100|Not enough visits number for client season ticket|
|SEASON_TICKET_NOT_ENOUGH_DAYS|-34200|Not enough days for client season ticket|
|SEASON_TICKET_NOT_ENOUGH_CHARGE_UNITS|-34300|Not enough charge units for client season ticket|
|SEASON_TICKET_EXPIRED|-34400|Season ticket expired|
|US_INVALID_ZIPCODE|-35000|Invalid zip codes|
|DESIGN_CREATE_FAILED|-35100|Failed to create design|
|DESIGN_RETRIEVE_FAILED|-35200|Failed to retrieve design|
|DESIGN_UPDATE_FAILED|-35300|Failed to update design|
|DESIGN_DELETE_FAILED|-35400|Failed to delete design|
|DESIGN_DATA_MISSING|-35500|Design data missing|
|LOYALTY_GIFT_CREATE_FAILED|-36100|Failed to create loyalty gift|
|LOYALTY_GIFT_RETRIEVE_FAILED|-36200|Failed to retrieve loyalty gift|
|LOYALTY_GIFT_UPDATE_FAILED|-36300|Failed to update loyalty gift|
|LOYALTY_GIFT_DELETE_FAILED|-36400|Failed to delete loyalty gift|
|LOYALTY_GIFT_DATA_MISSING|-36500|Loyalty gift data missing|
|LOYALTY_STATUS_CREATE_FAILED|-37100|Failed to create loyalty status|
|LOYALTY_STATUS_RETRIEVE_FAILED|-37200|Failed to retrieve loyalty status|
|LOYALTY_STATUS_UPDATE_FAILED|-37300|Failed to update loyalty status|
|LOYALTY_STATUS_DELETE_FAILED|-37400|Failed to delete loyalty status|
|LOYALTY_STATUS_DATA_MISSING|-37500|Loyalty status data missing|
|PROMO_CREATE_FAILED|-38100|Failed to create promo|
|PROMO_RETRIEVE_FAILED|-38200|Failed to retrieve promo|
|PROMO_UPDATE_FAILED|-38300|Failed to update promo|
|PROMO_DELETE_FAILED|-38400|Failed to delete promo|
|PROMO_DATA_MISSING|-38500|Promo data missing|
|CURRENT_PASSWORD_INVALID|-40100|Current password incorrect|
|API_1188_WRONG_ID|-41100|Jūs esat ievadījis nepareizu vai neeksistējošu uzņēmuma reģistrācijas numuru. Lūdzu, pārbaudiet ievadītu uzņēmuma reģistrācijas numuru.|
|LEAD_DATA_MISSING|-50000|Lead data missing or wrong|
|LEAD_BAD_STATUS|-50100|This status does not accepted|
|LEAD_CLIENT_PHONE_MISSING|-50200|Lead client phone[] missing|
|LEAD_CLIENT_NAME_MISSING|-50300|Lead client data missing|
|LEAD_CLIENT_DATA_MISSING|-50400|Lead client data missing|
|LEAD_NOT_FOUND|-50500|Lead not found|
|LEAD_FILTER_MISSING|-50600|Lead searching filter missing or wrong|
|LEAD_SAME_STATUS|-50700|Requested Lead status already applyed and changes have no effect|
|CALENDAR_RETRIEVE_FAILED|-51000|Calendar data retrieve failed|
|CALENDAR_NOT_FOUND|-51100|Retrieved calendar not found|
|CALENDAR_BAD_COUNTRY|-51200|Bad country code in calendar|
|MU_ORDER_NOT_FOUND|-59992|Order is not found|
|MU_PROMO_NOT_FOUND|-59993|The promocode is not active|
|MU_CLIENT_NOT_ACTIVE|-59994|The client is not active|
|MU_COMBO_NOT_FOUND|-59997|The combo is not found|
|MU_ID_NOT_FOUND|-59998|error code 59998|
|MU_MASTER_NOT_FOUND|-59999|The master is not found|
|UNSUPPORTED_FILTER_OPERATOR|-60000|Given unsupported filter operator for search query|
|UNSUPPORTED_FILTER_FIELD|-60100|Given unsupported fitler field|
|UNSUPPORTED_FILTER_VALUE|-60200|Given unsupported fitlter value|
|BAD_DATE_FILTER_RANGE|-60300|Given bad date.from...date.to filter range|
|CRAC_BAD_AUTH_TOKEN|-70000|Crac operations token is missing or invalid|
|CRAC_ENSURE_APPOINTMENT_INFO_MISSING|-70100|Appointment data missing|
|CRAC_BAD_CLEANUP_VALUE|-70200|daysToClean value should be in [1, 365]|
|CRAC_PROXY_ERROR|-70300|Unknown error occurred|
|GRANT_GROUP_DELETE_FAILED|-80101|Unknown error occurred|
|EXTRA_FIELD_CREATE_FAILED|-71100|Unknown error occurred|
|EXTRA_FIELD_RETRIEVE_FAILED|-71200|Unknown error occurred|
|EXTRA_FIELD_UPDATE_FAILED|-71300|Unknown error occurred|
|EXTRA_FIELD_DELETE_FAILED|-71400|Unknown error occurred|
|PARSE_ERROR|-32700|Parse error|
|INVALID_REQUEST|-32600|Invalid request|
|METHOD_NOT_FOUND|-32601|Method not found|
|INVALID_PARAMETERS|-32602|Invalid parameters|
|INTERNAL_ERROR|-32603|Internal error|
|VERSION_NOT_FOUND|-32604|Version not found|
