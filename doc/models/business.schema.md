
# Business Schema




| Property | Type | Required | Default |
|----------|------|----------|---------|
| [id](#id) | `string` | Optional |  | Business (this schema) |
| [created_on](#created_on) | `string` | Optional |  | Business (this schema) |
| [general_info](#general_info) | `BusinessInfo` | **Required** |  | Business (this schema) |
| [taxonomies](#taxonomies) | ``BusinessTaxonomy[]`` | **Required** |  | Business (this schema) |
| [resources](#resources) | Resource | **Required** |  | Business (this schema) |
| [designs](#designs) | `object[]` | Optional |  | Business (this schema) |
| [stateLevelHolidaysNotWorking](#statelevelholidaysnotworking) | `boolean` | Optional | `false` | Business (this schema) |
| [notifications](#notifications) | `array` | Optional |  | Business (this schema) |
| [vertical](#vertical) | `string` | Optional |  | Business (this schema) |
| [flatTaxonomyDisplay](#flattaxonomydisplay) | `boolean` | Optional |  | Business (this schema) |
| [allowCategoryBooking](#allowcategorybooking) | `boolean` | Optional |  | Business (this schema) |
| [cabinetsEnabled](#cabinetsenabled) | `boolean` | Optional |  | Business (this schema) |
| [taxonomy_tree_capacity](#taxonomy_tree_capacity) | `object[]` | Optional |  | Business (this schema) |
| [consumables](#consumables) | ``Consumable[]`` | Optional |  | Business (this schema) |
| [departments](#departments) | ``Department[]`` | Optional |  | Business (this schema) |
| [cabinets](#cabinets) | ``Cabinet[]`` | Optional |  | Business (this schema) |
| [defaultFilteredWorkers](#defaultfilteredworkers) | `string[]` | Optional |  | Business (this schema) |
| [integration_data](#integration_data) | `object` | Optional |  | Business (this schema) |
| [yandexFeedType](#yandexfeedtype) | `string` | Optional |  | Business (this schema) |
| [top_services](#top_services) | `object` | Optional |  | Business (this schema) |
| [mobileData](#mobiledata) | `array` | Optional |  | Business (this schema) |
| [active](#active) | `boolean` | Optional |  | Business (this schema) |
| [group](#group) | `enum` | Optional |  | Business (this schema) |
| [backofficeType](#backofficetype) | `enum` | Optional |  | Business (this schema) |
| [backofficeConfiguration](#backofficeconfiguration) | `BackofficeConfiguration` | Optional |  | Business (this schema) |
| [additionalSettings](#additionalsettings) | `object` | Optional |  | Business (this schema) |
| [widget_configuration](#widget_configuration) | `WidgetConfiguration` | **Required** |  | Business (this schema) |
| [mini_widget_configuration](#mini_widget_configuration) | `object` | **Required** |  | Business (this schema) |
| [callback_widget_configuration](#callback_widget_configuration) | `object` | Optional |  | Business (this schema) |
| [taxonomiesComplex](#taxonomiescomplex) | `object[]` | Optional |  | Business (this schema) |

## active


`active`
* is optional
* type: `boolean`
* defined in this schema

### active type


`boolean`





## additionalSettings


`additionalSettings`
* is optional
* type: `object`
* defined in this schema

### additionalSettings type


`object` with following properties:


| Property | Type | Required | Default |
|----------|------|----------|---------|
| `appointmentExtensionAmount`| number | Optional | `30` |
| `appointmentExtensionType`| string | Optional | `"PERCENT"` |



#### appointmentExtensionAmount

undefined

`appointmentExtensionAmount`
* is optional
* type: `number`
* default: `30`


##### appointmentExtensionAmount type


`number`








#### appointmentExtensionType

undefined

`appointmentExtensionType`
* is optional
* type: `enum`
* default: `"PERCENT"`

The value of this property **must** be equal to one of the [known values below](#additionalsettings-known-values).

##### appointmentExtensionType known values
| Value | Description |
|-------|-------------|
| `PERCENT` |  |
| `MINUTES` |  |









## allowCategoryBooking


`allowCategoryBooking`
* is optional
* type: `boolean`
* defined in this schema

### allowCategoryBooking type


`boolean`





## backofficeConfiguration
### BackofficeConfiguration

`backofficeConfiguration`
* is optional
* type: `object`
* defined in this schema

### backofficeConfiguration type


`object` with following properties:


| Property | Type | Required | Default |
|----------|------|----------|---------|
| `revisionVersion`| number | Optional |  |
| `scheduleDefaultWorkersLimit`| number | Optional | `25` |
| `resourceTimetableType`| string | Optional | `"DEFAULT"` |
| `skipServiceFiltering`| boolean | Optional | `false` |
| `showManualChanges`| boolean | Optional | `false` |
| `enableExtendedRecordsClientStatistics`| boolean | Optional | `false` |
| `pastTimeEdit`| number | Optional | `1` |
| `cabinetsEnabled`| boolean | Optional | `false` |
| `appointmentFutureMoving`| boolean | Optional | `false` |
| `showClientContractNumber`| boolean | Optional | `false` |
| `showGapWindow`| boolean | Optional | `false` |
| `showFirstAvailableSlot`| boolean | Optional | `false` |
| `noInternetAlert`| boolean | Optional | `false` |
| `showWorkerDescriptionInEvent`| boolean | Optional | `false` |
| `schduleWeekViewIsDefault`| boolean | Optional | `false` |
| `showPassportId`| boolean | Optional | `false` |
| `showFax`| boolean | Optional | `false` |
| `showBirthDate`| boolean | Optional | `false` |
| `showEmail`| boolean | Optional | `false` |
| `showAddress`| boolean | Optional | `false` |
| `showIsraelCity`| boolean | Optional | `false` |
| `showHouseNumber`| boolean | Optional | `false` |
| `showKupatHolim`| boolean | Optional | `false` |
| `showDepartmentFilter`| boolean | Optional | `false` |
| `showDepartments`| boolean | Optional | `false` |
| `showDepartmentsConfiguration`| boolean | Optional | `false` |
| `showRooms`| boolean | Optional | `false` |
| `showClientAppearOnSchedule`| boolean | Optional | `false` |
| `showClientAppear`| boolean | Optional | `false` |
| `skipCancelIfClientNotAppear`| boolean | Optional | `false` |
| `showClientPayment`| boolean | Optional | `false` |
| `showUTM`| boolean | Optional | `false` |
| `showWorkerStatus`| boolean | Optional | `false` |
| `enableBlackList`| boolean | Optional | `false` |
| `enableCalculateShedule`| boolean | Optional | `false` |
| `showSeasonTickets`| boolean | Optional | `false` |
| `showLeadsScreen`| boolean | Optional | `false` |
| `showGeneratableReportsScreen`| boolean | Optional | `false` |
| `schedulerWeekViewType`| string | Optional | `"week"` |
| `workWeekStart`| number | Optional | `0` |
| `workWeekEnd`| number | Optional | `6` |
| `scheduleWorkerHours`| boolean | Optional | `false` |
| `showTaxonomyLocalization`| boolean | Optional | `false` |
| `highlightedResource`| boolean | Optional | `false` |
| `showAdditionalFields`| boolean | Optional | `false` |
| `exportToExcelRemovedClients`| boolean | Optional | `false` |
| `checkClientOverlapping`| boolean | Optional | `false` |
| `hideCustomerPortalFooter`| boolean | Optional | `false` |
| `readonlyResourceSchedule`| boolean | Optional | `false` |
| `showClientImage`| boolean | Optional | `false` |
| `stateLevelHolidays`| array | Optional |  |
| `stateLevelHolidaysNotWorking`| boolean | Optional | `false` |
| `paymentProvider`| string | Optional |  |
| `showDefaulterBlockscreen`| boolean | Optional | `false` |
| `allowSmsTranslit`| boolean | Optional | `false` |
| `defaultGTScheduleDayView`| boolean | Optional | `false` |
| `enableSourceChoice`| boolean | Optional | `true` |
| `manualExceptionSupport`| boolean | Optional | `false` |
| `showWorkerExtraId`| boolean | Optional | `false` |
| `editAppExtraId`| boolean | Optional | `false` |
| `useGtAppMethod`| boolean | Optional | `false` |
| `disableAppointmentClientInlineEditor`| boolean | Optional | `false` |
| `enableClientCard`| boolean | Optional | `false` |
| `enableClientMedicalCardReport`| boolean | Optional | `false` |
| `enableCustomOnlinePaymentConfirmation`| boolean | Optional | `false` |
| `customOnlinePaymentConfirmationTemplate`| boolean | Optional | `false` |
| `showFiredWorkerAppointmentAlert`| boolean | Optional | `false` |
| `showDeliveryStatus`| boolean | Optional | `false` |
| `showTaxonomyChildren`| boolean | Optional | `false` |
| `editTaxonomyChildren`| boolean | Optional | `false` |



#### allowSmsTranslit

undefined

`allowSmsTranslit`
* is optional
* type: `boolean`
* default: `false`


##### allowSmsTranslit type


`boolean`







#### appointmentFutureMoving

undefined

`appointmentFutureMoving`
* is optional
* type: `boolean`
* default: `false`


##### appointmentFutureMoving type


`boolean`







#### cabinetsEnabled

undefined

`cabinetsEnabled`
* is optional
* type: `boolean`
* default: `false`


##### cabinetsEnabled type


`boolean`







#### checkClientOverlapping

undefined

`checkClientOverlapping`
* is optional
* type: `boolean`
* default: `false`


##### checkClientOverlapping type


`boolean`







#### customOnlinePaymentConfirmationTemplate

undefined

`customOnlinePaymentConfirmationTemplate`
* is optional
* type: `boolean`
* default: `false`


##### customOnlinePaymentConfirmationTemplate type


`boolean`







#### defaultGTScheduleDayView

undefined

`defaultGTScheduleDayView`
* is optional
* type: `boolean`
* default: `false`


##### defaultGTScheduleDayView type


`boolean`







#### disableAppointmentClientInlineEditor

undefined

`disableAppointmentClientInlineEditor`
* is optional
* type: `boolean`
* default: `false`


##### disableAppointmentClientInlineEditor type


`boolean`







#### editAppExtraId

undefined

`editAppExtraId`
* is optional
* type: `boolean`
* default: `false`


##### editAppExtraId type


`boolean`







#### editTaxonomyChildren

undefined

`editTaxonomyChildren`
* is optional
* type: `boolean`
* default: `false`


##### editTaxonomyChildren type


`boolean`







#### enableBlackList

undefined

`enableBlackList`
* is optional
* type: `boolean`
* default: `false`


##### enableBlackList type


`boolean`







#### enableCalculateShedule

undefined

`enableCalculateShedule`
* is optional
* type: `boolean`
* default: `false`


##### enableCalculateShedule type


`boolean`







#### enableClientCard

undefined

`enableClientCard`
* is optional
* type: `boolean`
* default: `false`


##### enableClientCard type


`boolean`







#### enableClientMedicalCardReport

undefined

`enableClientMedicalCardReport`
* is optional
* type: `boolean`
* default: `false`


##### enableClientMedicalCardReport type


`boolean`







#### enableCustomOnlinePaymentConfirmation

undefined

`enableCustomOnlinePaymentConfirmation`
* is optional
* type: `boolean`
* default: `false`


##### enableCustomOnlinePaymentConfirmation type


`boolean`







#### enableExtendedRecordsClientStatistics

undefined

`enableExtendedRecordsClientStatistics`
* is optional
* type: `boolean`
* default: `false`


##### enableExtendedRecordsClientStatistics type


`boolean`







#### enableSourceChoice

undefined

`enableSourceChoice`
* is optional
* type: `boolean`
* default: `true`


##### enableSourceChoice type


`boolean`







#### exportToExcelRemovedClients

undefined

`exportToExcelRemovedClients`
* is optional
* type: `boolean`
* default: `false`


##### exportToExcelRemovedClients type


`boolean`







#### hideCustomerPortalFooter

undefined

`hideCustomerPortalFooter`
* is optional
* type: `boolean`
* default: `false`


##### hideCustomerPortalFooter type


`boolean`







#### highlightedResource

undefined

`highlightedResource`
* is optional
* type: `boolean`
* default: `false`


##### highlightedResource type


`boolean`







#### manualExceptionSupport

undefined

`manualExceptionSupport`
* is optional
* type: `boolean`
* default: `false`


##### manualExceptionSupport type


`boolean`







#### noInternetAlert

undefined

`noInternetAlert`
* is optional
* type: `boolean`
* default: `false`


##### noInternetAlert type


`boolean`







#### pastTimeEdit

undefined

`pastTimeEdit`
* is optional
* type: `number`
* default: `1`


##### pastTimeEdit type


`number`








#### paymentProvider

undefined

`paymentProvider`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#backofficeconfiguration-known-values).

##### paymentProvider known values
| Value | Description |
|-------|-------------|
| `yandexMoney` |  |
| `deltaProcessing` |  |
| `DISABLE` |  |






#### readonlyResourceSchedule

undefined

`readonlyResourceSchedule`
* is optional
* type: `boolean`
* default: `false`


##### readonlyResourceSchedule type


`boolean`







#### resourceTimetableType

undefined

`resourceTimetableType`
* is optional
* type: `enum`
* default: `"DEFAULT"`

The value of this property **must** be equal to one of the [known values below](#backofficeconfiguration-known-values).

##### resourceTimetableType known values
| Value | Description |
|-------|-------------|
| `DEFAULT` |  |
| `EVENODD` |  |






#### revisionVersion

undefined

`revisionVersion`
* is optional
* type: `number`

##### revisionVersion type


`number`








#### schduleWeekViewIsDefault

undefined

`schduleWeekViewIsDefault`
* is optional
* type: `boolean`
* default: `false`


##### schduleWeekViewIsDefault type


`boolean`







#### scheduleDefaultWorkersLimit

undefined

`scheduleDefaultWorkersLimit`
* is optional
* type: `number`
* default: `25`


##### scheduleDefaultWorkersLimit type


`number`








#### scheduleWorkerHours

undefined

`scheduleWorkerHours`
* is optional
* type: `boolean`
* default: `false`


##### scheduleWorkerHours type


`boolean`







#### schedulerWeekViewType

undefined

`schedulerWeekViewType`
* is optional
* type: `enum`
* default: `"week"`

The value of this property **must** be equal to one of the [known values below](#backofficeconfiguration-known-values).

##### schedulerWeekViewType known values
| Value | Description |
|-------|-------------|
| `week` |  |
| `workWeek` |  |






#### showAdditionalFields

undefined

`showAdditionalFields`
* is optional
* type: `boolean`
* default: `false`


##### showAdditionalFields type


`boolean`







#### showAddress

undefined

`showAddress`
* is optional
* type: `boolean`
* default: `false`


##### showAddress type


`boolean`







#### showBirthDate

undefined

`showBirthDate`
* is optional
* type: `boolean`
* default: `false`


##### showBirthDate type


`boolean`







#### showClientAppear

undefined

`showClientAppear`
* is optional
* type: `boolean`
* default: `false`


##### showClientAppear type


`boolean`







#### showClientAppearOnSchedule

undefined

`showClientAppearOnSchedule`
* is optional
* type: `boolean`
* default: `false`


##### showClientAppearOnSchedule type


`boolean`







#### showClientContractNumber

undefined

`showClientContractNumber`
* is optional
* type: `boolean`
* default: `false`


##### showClientContractNumber type


`boolean`







#### showClientImage

undefined

`showClientImage`
* is optional
* type: `boolean`
* default: `false`


##### showClientImage type


`boolean`







#### showClientPayment

undefined

`showClientPayment`
* is optional
* type: `boolean`
* default: `false`


##### showClientPayment type


`boolean`







#### showDefaulterBlockscreen

undefined

`showDefaulterBlockscreen`
* is optional
* type: `boolean`
* default: `false`


##### showDefaulterBlockscreen type


`boolean`







#### showDeliveryStatus

undefined

`showDeliveryStatus`
* is optional
* type: `boolean`
* default: `false`


##### showDeliveryStatus type


`boolean`







#### showDepartmentFilter

undefined

`showDepartmentFilter`
* is optional
* type: `boolean`
* default: `false`


##### showDepartmentFilter type


`boolean`







#### showDepartments

undefined

`showDepartments`
* is optional
* type: `boolean`
* default: `false`


##### showDepartments type


`boolean`







#### showDepartmentsConfiguration

undefined

`showDepartmentsConfiguration`
* is optional
* type: `boolean`
* default: `false`


##### showDepartmentsConfiguration type


`boolean`







#### showEmail

undefined

`showEmail`
* is optional
* type: `boolean`
* default: `false`


##### showEmail type


`boolean`







#### showFax

undefined

`showFax`
* is optional
* type: `boolean`
* default: `false`


##### showFax type


`boolean`







#### showFiredWorkerAppointmentAlert

undefined

`showFiredWorkerAppointmentAlert`
* is optional
* type: `boolean`
* default: `false`


##### showFiredWorkerAppointmentAlert type


`boolean`







#### showFirstAvailableSlot

undefined

`showFirstAvailableSlot`
* is optional
* type: `boolean`
* default: `false`


##### showFirstAvailableSlot type


`boolean`







#### showGapWindow

undefined

`showGapWindow`
* is optional
* type: `boolean`
* default: `false`


##### showGapWindow type


`boolean`







#### showGeneratableReportsScreen

undefined

`showGeneratableReportsScreen`
* is optional
* type: `boolean`
* default: `false`


##### showGeneratableReportsScreen type


`boolean`







#### showHouseNumber

undefined

`showHouseNumber`
* is optional
* type: `boolean`
* default: `false`


##### showHouseNumber type


`boolean`







#### showIsraelCity

undefined

`showIsraelCity`
* is optional
* type: `boolean`
* default: `false`


##### showIsraelCity type


`boolean`







#### showKupatHolim

undefined

`showKupatHolim`
* is optional
* type: `boolean`
* default: `false`


##### showKupatHolim type


`boolean`







#### showLeadsScreen

undefined

`showLeadsScreen`
* is optional
* type: `boolean`
* default: `false`


##### showLeadsScreen type


`boolean`







#### showManualChanges

undefined

`showManualChanges`
* is optional
* type: `boolean`
* default: `false`


##### showManualChanges type


`boolean`







#### showPassportId

undefined

`showPassportId`
* is optional
* type: `boolean`
* default: `false`


##### showPassportId type


`boolean`







#### showRooms

undefined

`showRooms`
* is optional
* type: `boolean`
* default: `false`


##### showRooms type


`boolean`







#### showSeasonTickets

undefined

`showSeasonTickets`
* is optional
* type: `boolean`
* default: `false`


##### showSeasonTickets type


`boolean`







#### showTaxonomyChildren

undefined

`showTaxonomyChildren`
* is optional
* type: `boolean`
* default: `false`


##### showTaxonomyChildren type


`boolean`







#### showTaxonomyLocalization

undefined

`showTaxonomyLocalization`
* is optional
* type: `boolean`
* default: `false`


##### showTaxonomyLocalization type


`boolean`







#### showUTM

undefined

`showUTM`
* is optional
* type: `boolean`
* default: `false`


##### showUTM type


`boolean`







#### showWorkerDescriptionInEvent

undefined

`showWorkerDescriptionInEvent`
* is optional
* type: `boolean`
* default: `false`


##### showWorkerDescriptionInEvent type


`boolean`







#### showWorkerExtraId

undefined

`showWorkerExtraId`
* is optional
* type: `boolean`
* default: `false`


##### showWorkerExtraId type


`boolean`







#### showWorkerStatus

undefined

`showWorkerStatus`
* is optional
* type: `boolean`
* default: `false`


##### showWorkerStatus type


`boolean`







#### skipCancelIfClientNotAppear

undefined

`skipCancelIfClientNotAppear`
* is optional
* type: `boolean`
* default: `false`


##### skipCancelIfClientNotAppear type


`boolean`







#### skipServiceFiltering

undefined

`skipServiceFiltering`
* is optional
* type: `boolean`
* default: `false`


##### skipServiceFiltering type


`boolean`







#### stateLevelHolidays

undefined

`stateLevelHolidays`
* is optional
* type: `object[]`


##### stateLevelHolidays type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|










#### stateLevelHolidaysNotWorking

undefined

`stateLevelHolidaysNotWorking`
* is optional
* type: `boolean`
* default: `false`


##### stateLevelHolidaysNotWorking type


`boolean`







#### useGtAppMethod

undefined

`useGtAppMethod`
* is optional
* type: `boolean`
* default: `false`


##### useGtAppMethod type


`boolean`







#### workWeekEnd

undefined

`workWeekEnd`
* is optional
* type: `number`
* default: `6`


##### workWeekEnd type


`number`








#### workWeekStart

undefined

`workWeekStart`
* is optional
* type: `number`
* default: `0`


##### workWeekStart type


`number`











## backofficeType


`backofficeType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#backofficetype-known-values).

### backofficeType Known Values
| Value | Description |
|-------|-------------|
| `COMMON` |  |
| `GT` |  |
| `LL` |  |
| `MB` |  |
| `MU` |  |




## cabinets
### `Cabinet[]`

`cabinets`
* is optional
* type: `reference[]`

* defined in this schema

### cabinets type


Array type: `reference[]`

All items must be of the type:

* []() – `#/definitions/Cabinet`








## cabinetsEnabled


`cabinetsEnabled`
* is optional
* type: `boolean`
* defined in this schema

### cabinetsEnabled type


`boolean`





## callback_widget_configuration


`callback_widget_configuration`
* is optional
* type: `object`
* defined in this schema

### callback_widget_configuration type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `title1`| string | Optional |
| `title2`| string | Optional |



#### title1

undefined

`title1`
* is optional
* type: `string`

##### title1 type


`string`








#### title2

undefined

`title2`
* is optional
* type: `string`

##### title2 type


`string`











## consumables
### `Consumable[]`

`consumables`
* is optional
* type: `reference[]`

* defined in this schema

### consumables type


Array type: `reference[]`

All items must be of the type:

* []() – `#/definitions/Consumable`








## created_on


`created_on`
* is optional
* type: `string`
* defined in this schema

### created_on type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## defaultFilteredWorkers


`defaultFilteredWorkers`
* is optional
* type: `string[]`

* defined in this schema

### defaultFilteredWorkers type


Array type: `string[]`

All items must be of the type:
`string`









## departments
### `Department[]`

`departments`
* is optional
* type: `reference[]`

* defined in this schema

### departments type


Array type: `reference[]`

All items must be of the type:

* []() – `#/definitions/Department`








## designs


`designs`
* is optional
* type: `object[]`

* defined in this schema

### designs type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|








## flatTaxonomyDisplay


`flatTaxonomyDisplay`
* is optional
* type: `boolean`
* defined in this schema

### flatTaxonomyDisplay type


`boolean`





## general_info
### BusinessInfo

Содержит детальную информацию о бизнесе — название, адрес, график работы и другое

`general_info`
* is **required**
* type: `object`
* defined in this schema

### general_info type


`object` with following properties:


| Property | Type | Required | Default |
|----------|------|----------|---------|
| `revisionVersion`| number | Optional |  |
| `name`| string | Optional |  |
| `address`| array | Optional |  |
| `email`| string | Optional |  |
| `phone`| array | Optional |  |
| `mobile`| array | Optional |  |
| `fax`| array | Optional |  |
| `timezone`| string | Optional |  |
| `description`| string | Optional |  |
| `logo_url`| string | Optional |  |
| `additionalFields`| array | Optional |  |
| `contactName`| string | Optional |  |
| `website`| string | Optional |  |
| `timetable`|  | Optional |  |
| `instant_messaging`| array | Optional |  |
| `social_network`| array | Optional |  |
| `accepted_currency`| array | Optional |  |
| `paymentMethods`| string | Optional |  |
| `date_joined`| string | Optional |  |
| `additional_info`| string,null | Optional |  |
| `phone_mask`| string,null | Optional |  |
| `min_booking_time`| number,null | Optional |  |
| `images`| array | Optional |  |
| `metro`| object | Optional |  |
| `language`|  | Optional |  |
| `networkID`| number,null | Optional |  |
| `autoAcceptAppointment`| boolean | Optional | `false` |
| `showAppointmentTooltip`| boolean | Optional | `false` |
| `showAppointmentColor`| boolean | Optional | `false` |
| `newboEnabledFor`| array | Optional |  |
| `pricingType`| string | Optional | `"DEFAULT"` |
| `schedulerTick`| number | Optional | `15` |
| `skipBilling`| boolean | Optional | `false` |
| `showResourceWorkStatistics`| boolean | Optional |  |
| `showWorkerProfession`| boolean | Optional | `false` |
| `verticalTranslation`| string | Optional | `"NONE"` |
| `smsDuplicateFilter`| object | Optional |  |
| `marketingNotifications`| object | Optional |  |
| `isShowcase`| boolean | Optional | `false` |



#### accepted_currency

undefined

`accepted_currency`
* is optional
* type: `reference[]`


##### accepted_currency type


Array type: `reference[]`

All items must be of the type:
`string`











#### additionalFields

undefined

`additionalFields`
* is optional
* type: `reference[]`


##### additionalFields type


Array type: `reference[]`

All items must be of the type:

* []() – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/additionalFields.schema.json`










#### additional_info

undefined

`additional_info`
* is optional
* type: complex

##### additional_info type

Unknown type `string,null`.

```json
{
  "type": [
    "string",
    "null"
  ],
  "simpletype": "complex"
}
```







#### address

Адреса компании или филиала

`address`
* is optional
* type: `reference[]`


##### address type


Array type: `reference[]`

All items must be of the type:

* []() – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/address.schema.json`










#### autoAcceptAppointment

undefined

`autoAcceptAppointment`
* is optional
* type: `boolean`
* default: `false`


##### autoAcceptAppointment type


`boolean`







#### contactName

undefined

`contactName`
* is optional
* type: `string`

##### contactName type


`string`








#### date_joined

undefined

`date_joined`
* is optional
* type: `string`

##### date_joined type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### description



`description`
* is optional
* type: `string`

##### description type


`string`








#### email

Список e-mail адресов компании или филиала

`email`
* is optional
* type: `string`

##### email type


`string`








#### fax



`fax`
* is optional
* type: `reference[]`


##### fax type


Array type: `reference[]`

All items must be of the type:

* []() – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/phone.schema.json`










#### images

undefined

`images`
* is optional
* type: `string[]`


##### images type


Array type: `string[]`

All items must be of the type:
`string`











#### instant_messaging

undefined

`instant_messaging`
* is optional
* type: `object[]`


##### instant_messaging type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|










#### isShowcase

undefined

`isShowcase`
* is optional
* type: `boolean`
* default: `false`


##### isShowcase type


`boolean`







#### language

undefined

`language`
* is optional
* type: `reference`

##### language type



* []() – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/language.schema.json#/definitions/LanguageList`







#### logo_url



`logo_url`
* is optional
* type: `string`

##### logo_url type


`string`








#### marketingNotifications

undefined

`marketingNotifications`
* is optional
* type: `object`

##### marketingNotifications type

Unknown type `object`.

```json
{
  "type": "object",
  "properties": {
    "active": {
      "type": "boolean",
      "default": false
    },
    "accepted": {
      "type": "boolean",
      "default": false
    },
    "useSmsAlphaName": {
      "type": "boolean",
      "default": false
    }
  },
  "required": [
    "active",
    "accepted",
    "useSmsAlphaName"
  ],
  "additionalProperties": false,
  "simpletype": "`object`"
}
```







#### metro

undefined

`metro`
* is optional
* type: `object`

##### metro type

Unknown type `object`.

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "distance": {
      "type": "number"
    },
    "color": {
      "type": "string"
    }
  },
  "required": [],
  "additionalProperties": false,
  "simpletype": "`object`"
}
```







#### min_booking_time

undefined

`min_booking_time`
* is optional
* type: complex

##### min_booking_time type

Unknown type `number,null`.

```json
{
  "type": [
    "number",
    "null"
  ],
  "simpletype": "complex"
}
```







#### mobile

Список телефонов бизнеса

`mobile`
* is optional
* type: `reference[]`


##### mobile type


Array type: `reference[]`

All items must be of the type:

* []() – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/phone.schema.json`










#### name

Название бизнеса

`name`
* is optional
* type: `string`

##### name type


`string`








#### networkID

undefined

`networkID`
* is optional
* type: complex

##### networkID type

Unknown type `number,null`.

```json
{
  "type": [
    "number",
    "null"
  ],
  "simpletype": "complex"
}
```







#### newboEnabledFor

undefined

`newboEnabledFor`
* is optional
* type: `string[]`


##### newboEnabledFor type


Array type: `string[]`

All items must be of the type:
`string`











#### paymentMethods

undefined

`paymentMethods`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#general_info-known-values).

##### paymentMethods known values
| Value | Description |
|-------|-------------|
| `Visa` |  |
| `Mastercard` |  |
| `Amex` |  |
| `PayPal` |  |
| `MoneyBookers` |  |






#### phone

Список телефонов бизнеса

`phone`
* is optional
* type: `reference[]`


##### phone type


Array type: `reference[]`

All items must be of the type:

* []() – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/phone.schema.json`










#### phone_mask

undefined

`phone_mask`
* is optional
* type: complex

##### phone_mask type

Unknown type `string,null`.

```json
{
  "type": [
    "string",
    "null"
  ],
  "simpletype": "complex"
}
```







#### pricingType

undefined

`pricingType`
* is optional
* type: `enum`
* default: `"DEFAULT"`

The value of this property **must** be equal to one of the [known values below](#general_info-known-values).

##### pricingType known values
| Value | Description |
|-------|-------------|
| `DEFAULT` |  |
| `MASTER_TOPMASTER` |  |






#### revisionVersion



`revisionVersion`
* is optional
* type: `number`

##### revisionVersion type


`number`








#### schedulerTick

undefined

`schedulerTick`
* is optional
* type: `number`
* default: `15`


##### schedulerTick type


`number`








#### showAppointmentColor

undefined

`showAppointmentColor`
* is optional
* type: `boolean`
* default: `false`


##### showAppointmentColor type


`boolean`







#### showAppointmentTooltip

undefined

`showAppointmentTooltip`
* is optional
* type: `boolean`
* default: `false`


##### showAppointmentTooltip type


`boolean`







#### showResourceWorkStatistics

undefined

`showResourceWorkStatistics`
* is optional
* type: `boolean`

##### showResourceWorkStatistics type


`boolean`







#### showWorkerProfession

undefined

`showWorkerProfession`
* is optional
* type: `boolean`
* default: `false`


##### showWorkerProfession type


`boolean`







#### skipBilling

undefined

`skipBilling`
* is optional
* type: `boolean`
* default: `false`


##### skipBilling type


`boolean`







#### smsDuplicateFilter

undefined

`smsDuplicateFilter`
* is optional
* type: `object`

##### smsDuplicateFilter type

Unknown type `object`.

```json
{
  "type": "object",
  "properties": {
    "active": {
      "type": "boolean"
    }
  },
  "additionalProperties": false,
  "simpletype": "`object`"
}
```







#### social_network

undefined

`social_network`
* is optional
* type: `reference[]`


##### social_network type


Array type: `reference[]`

All items must be of the type:

* []() – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/socialnetwork.schema.json`










#### timetable

undefined

`timetable`
* is optional
* type: `reference`

##### timetable type



* []() – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/timetable.schema.json`







#### timezone

undefined

`timezone`
* is optional
* type: `string`

##### timezone type


`string`








#### verticalTranslation

undefined

`verticalTranslation`
* is optional
* type: `enum`
* default: `"NONE"`

The value of this property **must** be equal to one of the [known values below](#general_info-known-values).

##### verticalTranslation known values
| Value | Description |
|-------|-------------|
| `NONE` |  |
| `GENERIC` |  |
| `MEDICAL` |  |
| `BEAUTY` |  |
| `FITNESS` |  |
| `SPORT` |  |
| `YOGA` |  |






#### website

undefined

`website`
* is optional
* type: `string`

##### website type


`string`











## group


`group`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#group-known-values).

### group Known Values
| Value | Description |
|-------|-------------|
| `GENERAL` |  |
| `FRENCH` |  |
| `HUNGARIAN` |  |
| `LATVIAN` |  |




## id


`id`
* is optional
* type: `string`
* defined in this schema

### id type


`string`






## integration_data


`integration_data`
* is optional
* type: `object`
* defined in this schema

### integration_data type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## mini_widget_configuration


`mini_widget_configuration`
* is **required**
* type: `object`
* defined in this schema

### mini_widget_configuration type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `title1`| string | Optional |
| `title2`| string | Optional |
| `fields`| array | Optional |



#### fields

undefined

`fields`
* is optional
* type: `enum[]`


##### fields type


Array type: `enum[]`

All items must be of the type:
`string`











#### title1

undefined

`title1`
* is optional
* type: `string`

##### title1 type


`string`








#### title2

undefined

`title2`
* is optional
* type: `string`

##### title2 type


`string`











## mobileData


`mobileData`
* is optional
* type: `array`

* defined in this schema

### mobileData type


Array type: `array`






## notifications


`notifications`
* is optional
* type: `array`

* defined in this schema

### notifications type


Array type: `array`






## resources


`resources`
* is **required**
* type: Resource

* defined in this schema

### resources type


Array type: Resource

All items must be of the type:

* [Resource](resource.schema.md) – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/resource.schema.json`








## stateLevelHolidaysNotWorking


`stateLevelHolidaysNotWorking`
* is optional
* type: `boolean`
* default: `false`
* defined in this schema

### stateLevelHolidaysNotWorking type


`boolean`





## taxonomies
### `BusinessTaxonomy[]`

`taxonomies`
* is **required**
* type: `reference[]`

* defined in this schema

### taxonomies type


Array type: `reference[]`

All items must be of the type:

* []() – `#/definitions/BusinessTaxonomy`








## taxonomiesComplex


`taxonomiesComplex`
* is optional
* type: `object[]`

* defined in this schema

### taxonomiesComplex type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `name`| string | Optional |
| `taxonomies`| array | Optional |



#### name

undefined

`name`
* is optional
* type: `string`

##### name type


`string`








#### taxonomies

undefined

`taxonomies`
* is optional
* type: `string[]`


##### taxonomies type


Array type: `string[]`

All items must be of the type:
`string`
















## taxonomy_tree_capacity


`taxonomy_tree_capacity`
* is optional
* type: `object[]`

* defined in this schema

### taxonomy_tree_capacity type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|








## top_services


`top_services`
* is optional
* type: `object`
* defined in this schema

### top_services type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `status`| string | Optional |
| `services`| array | Optional |



#### services

undefined

`services`
* is optional
* type: `array`


##### services type


Array type: `array`








#### status

undefined

`status`
* is optional
* type: `string`

##### status type


`string`











## vertical


`vertical`
* is optional
* type: `string`
* defined in this schema

### vertical type


`string`






## widget_configuration
### WidgetConfiguration

`widget_configuration`
* is **required**
* type: `object`
* defined in this schema

### widget_configuration type


`object` with following properties:


| Property | Type | Required | Default |
|----------|------|----------|---------|
| `revisionVersion`| number | Optional |  |
| `crunchv2`| boolean | Optional | `false` |
| `useCRAC`| boolean | Optional | `false` |
| `cracSlotSize`| number | Optional | `5` |
| `widgetUseCRAC`| boolean | Optional | `false` |
| `skipDaysForward`| boolean | Optional | `false` |
| `daysForward`| number | Optional | `30` |
| `cracServer`| string | Optional |  |
| `useMedAuth`| boolean | Optional | `false` |
| `useSortByName`| boolean | Optional | `false` |
| `useMiddleName`| boolean | Optional | `false` |
| `showSurnameFirst`| boolean | Optional | `false` |
| `hidePrices`| boolean | Optional | `false` |
| `hideEmptyDays`| boolean | Optional | `false` |
| `showMap`| boolean | Optional | `false` |
| `tentativeTTL`| number | Optional |  |
| `showDrinkQuestion`| boolean | Optional | `false` |
| `showTalkQuestion`| boolean | Optional | `false` |
| `showClientAddress`| boolean | Optional | `false` |
| `skipMobileMap`| boolean | Optional | `false` |
| `skipAuthentication`| boolean | Optional | `false` |
| `skipServiceSelection`| boolean | Optional | `false` |
| `showTaxonomyConfirmationAlert`| boolean | Optional | `false` |
| `showClientComment`| boolean | Optional | `false` |
| `clientCommentTitle`| boolean | Optional | `false` |
| `calendarMode`| boolean | Optional | `false` |
| `useCoupon`| boolean | Optional | `false` |
| `dontRequireEmail`| boolean | Optional | `false` |
| `emailIsMandatory`| boolean | Optional | `false` |
| `displaySlotSize`| number | Optional |  |
| `additionalName`| string | Optional |  |
| `shortLink`| string | Optional |  |
| `appointment_confirmation_title`| string | Optional |  |
| `appointment_confirmation_text`| string | Optional |  |
| `theme`| string | Optional | `"theme1"` |
| `socialSharing`| object | Optional |  |
| `noDefaultImages`| boolean | Optional | `false` |
| `withoutWorkers`| boolean | Optional | `false` |
| `bookableMonthsCount`| number | Optional | `-1` |
| `dayUnavailableLabel`| string | Optional |  |
| `dayOffLabel`| string | Optional |  |
| `useBusinessScheduleForUnavailableLabel`| boolean | Optional | `false` |
| `hideAnyWorkerBooking`| boolean | Optional | `false` |
| `disableMobileWidget`| boolean | Optional | `false` |
| `socialNetworkImage`| string | Optional | `false` |
| `payment`| string | Optional | `"WITHOUT"` |
| `paymentProvider`| string | Optional | `"yandexMoney"` |
| `alignmentTaxonomySlots`| boolean | Optional | `false` |
| `bookableDateRanges`| object | Optional |  |
| `discountedPriceRounding`| object | Optional |  |
| `multiServiceBooking`| boolean | Optional | `false` |
| `maxServiceBooking`| number | Optional | `1` |
| `multiTimeslotBooking`| boolean | Optional | `false` |
| `maxTimeslotBooking`| number | Optional | `1` |
| `multiTimeslotBookingAllDays`| boolean | Optional | `false` |
| `showAllWorkers`| boolean | Optional | `false` |
| `sortByMostFree`| boolean | Optional | `false` |
| `skipTimeSelection`| boolean | Optional | `false` |
| `skipTimeSelectionServiceIDs`| array | Optional |  |
| `requireAgreement`| boolean | Optional | `false` |
| `requireAgreementLink`| string | Optional | `""` |
| `hideGraySlots`| boolean | Optional | `false` |
| `extraVisitors`| boolean | Optional | `false` |
| `overrideFooter`| string | Optional | `""` |
| `enableOverrideFooter`| boolean | Optional | `false` |
| `hideGBookingLogo`| boolean | Optional | `false` |
| `hideCallButton`| boolean | Optional | `false` |
| `hideNewAppointmentButton`| boolean | Optional | `false` |
| `hideSocialNetworksAuthentication`| boolean | Optional | `false` |
| `skipServiceDurationAlignment`| boolean | Optional | `false` |
| `warningContactDataText`| string | Optional | `""` |
| `enableWarningContactData`| boolean | Optional | `false` |
| `splitName`| boolean | Optional | `false` |
| `useDefaultWorkerImg`| boolean | Optional | `false` |
| `defaultWorkerImgUrl`| string | Optional | `""` |
| `useClustersMap`| boolean | Optional | `false` |
| `useAppointmentReminder`| boolean | Optional | `false` |
| `disableWidget`| boolean | Optional | `false` |
| `disableWidgetMessage`| string | Optional |  |
| `denySameTimeRecords`| boolean | Optional | `false` |
| `sortWorkersByWorkload`| boolean | Optional | `false` |
| `mostFreeEnable`| boolean | Optional | `false` |
| `askClientBirthday`| boolean | Optional | `false` |
| `askClientGender`| boolean | Optional | `false` |
| `splitInsuranceClient`| boolean | Optional | `false` |
| `insuranceClientSupportPhone`| array | Optional |  |
| `showDisabledTaxonomies`| boolean | Optional | `false` |
| `disabledTaxonomiesText`| string | Optional |  |
| `workerNameReverse`| boolean | Optional | `false` |



#### additionalName

undefined

`additionalName`
* is optional
* type: `string`

##### additionalName type


`string`








#### alignmentTaxonomySlots

undefined

`alignmentTaxonomySlots`
* is optional
* type: `boolean`
* default: `false`


##### alignmentTaxonomySlots type


`boolean`







#### appointment_confirmation_text

undefined

`appointment_confirmation_text`
* is optional
* type: `string`

##### appointment_confirmation_text type


`string`








#### appointment_confirmation_title

undefined

`appointment_confirmation_title`
* is optional
* type: `string`

##### appointment_confirmation_title type


`string`








#### askClientBirthday

undefined

`askClientBirthday`
* is optional
* type: `boolean`
* default: `false`


##### askClientBirthday type


`boolean`







#### askClientGender

undefined

`askClientGender`
* is optional
* type: `boolean`
* default: `false`


##### askClientGender type


`boolean`







#### bookableDateRanges

undefined

`bookableDateRanges`
* is optional
* type: `object`

##### bookableDateRanges type

Unknown type `object`.

```json
{
  "type": "object",
  "properties": {
    "enabled": {
      "type": "boolean",
      "default": false
    },
    "start": {
      "oneOf": [
        {
          "type": "string",
          "format": "date-time"
        },
        {
          "const": null
        }
      ]
    },
    "end": {
      "oneOf": [
        {
          "type": "string",
          "format": "date-time"
        },
        {
          "const": null
        }
      ]
    }
  },
  "simpletype": "`object`"
}
```







#### bookableMonthsCount

undefined

`bookableMonthsCount`
* is optional
* type: `number`
* default: `-1`


##### bookableMonthsCount type


`number`








#### calendarMode

undefined

`calendarMode`
* is optional
* type: `boolean`
* default: `false`


##### calendarMode type


`boolean`







#### clientCommentTitle

undefined

`clientCommentTitle`
* is optional
* type: `boolean`
* default: `false`


##### clientCommentTitle type


`boolean`







#### cracServer

undefined

`cracServer`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#widget_configuration-known-values).

##### cracServer known values
| Value | Description |
|-------|-------------|
| `CRAC` |  |
| `CRAC_PROD3` |  |






#### cracSlotSize

undefined

`cracSlotSize`
* is optional
* type: `enum`
* default: `5`

The value of this property **must** be equal to one of the [known values below](#widget_configuration-known-values).

##### cracSlotSize known values
| Value | Description |
|-------|-------------|
| `1` |  |
| `5` |  |






#### crunchv2

undefined

`crunchv2`
* is optional
* type: `boolean`
* default: `false`


##### crunchv2 type


`boolean`







#### dayOffLabel

undefined

`dayOffLabel`
* is optional
* type: `string`

##### dayOffLabel type


`string`








#### dayUnavailableLabel

undefined

`dayUnavailableLabel`
* is optional
* type: `string`

##### dayUnavailableLabel type


`string`








#### daysForward

undefined

`daysForward`
* is optional
* type: `number`
* default: `30`


##### daysForward type


`number`








#### defaultWorkerImgUrl

undefined

`defaultWorkerImgUrl`
* is optional
* type: `string`
* default: `""`


##### defaultWorkerImgUrl type


`string`








#### denySameTimeRecords

undefined

`denySameTimeRecords`
* is optional
* type: `boolean`
* default: `false`


##### denySameTimeRecords type


`boolean`







#### disableMobileWidget

undefined

`disableMobileWidget`
* is optional
* type: `boolean`
* default: `false`


##### disableMobileWidget type


`boolean`







#### disableWidget

undefined

`disableWidget`
* is optional
* type: `boolean`
* default: `false`


##### disableWidget type


`boolean`







#### disableWidgetMessage

undefined

`disableWidgetMessage`
* is optional
* type: `string`

##### disableWidgetMessage type


`string`








#### disabledTaxonomiesText

undefined

`disabledTaxonomiesText`
* is optional
* type: `string`

##### disabledTaxonomiesText type


`string`








#### discountedPriceRounding

undefined

`discountedPriceRounding`
* is optional
* type: `object`

##### discountedPriceRounding type

Unknown type `object`.

```json
{
  "type": "object",
  "properties": {
    "rule": {
      "type": "string",
      "enum": [
        "TWO_DECIMALS",
        "NEAREST_INTEGER",
        "CUSTOM"
      ]
    },
    "value": {
      "type": "number",
      "default": -1
    }
  },
  "simpletype": "`object`"
}
```







#### displaySlotSize

undefined

`displaySlotSize`
* is optional
* type: `number`

##### displaySlotSize type


`number`








#### dontRequireEmail

undefined

`dontRequireEmail`
* is optional
* type: `boolean`
* default: `false`


##### dontRequireEmail type


`boolean`







#### emailIsMandatory

undefined

`emailIsMandatory`
* is optional
* type: `boolean`
* default: `false`


##### emailIsMandatory type


`boolean`







#### enableOverrideFooter

undefined

`enableOverrideFooter`
* is optional
* type: `boolean`
* default: `false`


##### enableOverrideFooter type


`boolean`







#### enableWarningContactData

undefined

`enableWarningContactData`
* is optional
* type: `boolean`
* default: `false`


##### enableWarningContactData type


`boolean`







#### extraVisitors

undefined

`extraVisitors`
* is optional
* type: `boolean`
* default: `false`


##### extraVisitors type


`boolean`







#### hideAnyWorkerBooking

undefined

`hideAnyWorkerBooking`
* is optional
* type: `boolean`
* default: `false`


##### hideAnyWorkerBooking type


`boolean`







#### hideCallButton

undefined

`hideCallButton`
* is optional
* type: `boolean`
* default: `false`


##### hideCallButton type


`boolean`







#### hideEmptyDays

undefined

`hideEmptyDays`
* is optional
* type: `boolean`
* default: `false`


##### hideEmptyDays type


`boolean`







#### hideGBookingLogo

undefined

`hideGBookingLogo`
* is optional
* type: `boolean`
* default: `false`


##### hideGBookingLogo type


`boolean`







#### hideGraySlots

undefined

`hideGraySlots`
* is optional
* type: `boolean`
* default: `false`


##### hideGraySlots type


`boolean`







#### hideNewAppointmentButton

undefined

`hideNewAppointmentButton`
* is optional
* type: `boolean`
* default: `false`


##### hideNewAppointmentButton type


`boolean`







#### hidePrices

undefined

`hidePrices`
* is optional
* type: `boolean`
* default: `false`


##### hidePrices type


`boolean`







#### hideSocialNetworksAuthentication

undefined

`hideSocialNetworksAuthentication`
* is optional
* type: `boolean`
* default: `false`


##### hideSocialNetworksAuthentication type


`boolean`







#### insuranceClientSupportPhone

undefined

`insuranceClientSupportPhone`
* is optional
* type: `reference[]`


##### insuranceClientSupportPhone type


Array type: `reference[]`

All items must be of the type:

* []() – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/phone.schema.json`










#### maxServiceBooking

undefined

`maxServiceBooking`
* is optional
* type: `number`
* default: `1`


##### maxServiceBooking type


`number`








#### maxTimeslotBooking

undefined

`maxTimeslotBooking`
* is optional
* type: `number`
* default: `1`


##### maxTimeslotBooking type


`number`








#### mostFreeEnable

undefined

`mostFreeEnable`
* is optional
* type: `boolean`
* default: `false`


##### mostFreeEnable type


`boolean`







#### multiServiceBooking

undefined

`multiServiceBooking`
* is optional
* type: `boolean`
* default: `false`


##### multiServiceBooking type


`boolean`







#### multiTimeslotBooking

undefined

`multiTimeslotBooking`
* is optional
* type: `boolean`
* default: `false`


##### multiTimeslotBooking type


`boolean`







#### multiTimeslotBookingAllDays

undefined

`multiTimeslotBookingAllDays`
* is optional
* type: `boolean`
* default: `false`


##### multiTimeslotBookingAllDays type


`boolean`







#### noDefaultImages

undefined

`noDefaultImages`
* is optional
* type: `boolean`
* default: `false`


##### noDefaultImages type


`boolean`







#### overrideFooter

undefined

`overrideFooter`
* is optional
* type: `string`
* default: `""`


##### overrideFooter type


`string`








#### payment

undefined

`payment`
* is optional
* type: `enum`
* default: `"WITHOUT"`

The value of this property **must** be equal to one of the [known values below](#widget_configuration-known-values).

##### payment known values
| Value | Description |
|-------|-------------|
| `WITHOUT` |  |
| `OPTIONAL` |  |
| `REQUIRED` |  |






#### paymentProvider

undefined

`paymentProvider`
* is optional
* type: `enum`
* default: `"yandexMoney"`

The value of this property **must** be equal to one of the [known values below](#widget_configuration-known-values).

##### paymentProvider known values
| Value | Description |
|-------|-------------|
| `yandexMoney` |  |
| `deltaProcessing` |  |
| `DISABLE` |  |






#### requireAgreement

undefined

`requireAgreement`
* is optional
* type: `boolean`
* default: `false`


##### requireAgreement type


`boolean`







#### requireAgreementLink

undefined

`requireAgreementLink`
* is optional
* type: `string`
* default: `""`


##### requireAgreementLink type


`string`








#### revisionVersion

undefined

`revisionVersion`
* is optional
* type: `number`

##### revisionVersion type


`number`








#### shortLink

undefined

`shortLink`
* is optional
* type: `string`

##### shortLink type


`string`








#### showAllWorkers

undefined

`showAllWorkers`
* is optional
* type: `boolean`
* default: `false`


##### showAllWorkers type


`boolean`







#### showClientAddress

undefined

`showClientAddress`
* is optional
* type: `boolean`
* default: `false`


##### showClientAddress type


`boolean`







#### showClientComment

undefined

`showClientComment`
* is optional
* type: `boolean`
* default: `false`


##### showClientComment type


`boolean`







#### showDisabledTaxonomies

undefined

`showDisabledTaxonomies`
* is optional
* type: `boolean`
* default: `false`


##### showDisabledTaxonomies type


`boolean`







#### showDrinkQuestion

undefined

`showDrinkQuestion`
* is optional
* type: `boolean`
* default: `false`


##### showDrinkQuestion type


`boolean`







#### showMap

undefined

`showMap`
* is optional
* type: `boolean`
* default: `false`


##### showMap type


`boolean`







#### showSurnameFirst

undefined

`showSurnameFirst`
* is optional
* type: `boolean`
* default: `false`


##### showSurnameFirst type


`boolean`







#### showTalkQuestion

undefined

`showTalkQuestion`
* is optional
* type: `boolean`
* default: `false`


##### showTalkQuestion type


`boolean`







#### showTaxonomyConfirmationAlert

undefined

`showTaxonomyConfirmationAlert`
* is optional
* type: `boolean`
* default: `false`


##### showTaxonomyConfirmationAlert type


`boolean`







#### skipAuthentication

undefined

`skipAuthentication`
* is optional
* type: `boolean`
* default: `false`


##### skipAuthentication type


`boolean`







#### skipDaysForward

undefined

`skipDaysForward`
* is optional
* type: `boolean`
* default: `false`


##### skipDaysForward type


`boolean`







#### skipMobileMap

undefined

`skipMobileMap`
* is optional
* type: `boolean`
* default: `false`


##### skipMobileMap type


`boolean`







#### skipServiceDurationAlignment

undefined

`skipServiceDurationAlignment`
* is optional
* type: `boolean`
* default: `false`


##### skipServiceDurationAlignment type


`boolean`







#### skipServiceSelection

undefined

`skipServiceSelection`
* is optional
* type: `boolean`
* default: `false`


##### skipServiceSelection type


`boolean`







#### skipTimeSelection

undefined

`skipTimeSelection`
* is optional
* type: `boolean`
* default: `false`


##### skipTimeSelection type


`boolean`







#### skipTimeSelectionServiceIDs

undefined

`skipTimeSelectionServiceIDs`
* is optional
* type: `string[]`


##### skipTimeSelectionServiceIDs type


Array type: `string[]`

All items must be of the type:
`string`











#### socialNetworkImage

undefined

`socialNetworkImage`
* is optional
* type: `string`
* default: `false`


##### socialNetworkImage type


`string`








#### socialSharing

undefined

`socialSharing`
* is optional
* type: `object`

##### socialSharing type

Unknown type `object`.

```json
{
  "type": "object",
  "properties": {
    "active": {
      "type": "boolean",
      "default": false
    },
    "widgetText": {
      "type": [
        "string",
        "null"
      ]
    },
    "text": {
      "type": [
        "string",
        "null"
      ]
    },
    "discountEnabled": {
      "type": "boolean"
    },
    "discountType": {
      "type": "string",
      "enum": [
        "PERCENT"
      ]
    },
    "discountAmount": {
      "type": [
        "number",
        "null"
      ]
    }
  },
  "simpletype": "`object`"
}
```







#### sortByMostFree

undefined

`sortByMostFree`
* is optional
* type: `boolean`
* default: `false`


##### sortByMostFree type


`boolean`







#### sortWorkersByWorkload

undefined

`sortWorkersByWorkload`
* is optional
* type: `boolean`
* default: `false`


##### sortWorkersByWorkload type


`boolean`







#### splitInsuranceClient

undefined

`splitInsuranceClient`
* is optional
* type: `boolean`
* default: `false`


##### splitInsuranceClient type


`boolean`







#### splitName

undefined

`splitName`
* is optional
* type: `boolean`
* default: `false`


##### splitName type


`boolean`







#### tentativeTTL

undefined

`tentativeTTL`
* is optional
* type: `number`

##### tentativeTTL type


`number`








#### theme

undefined

`theme`
* is optional
* type: `string`
* default: `"theme1"`


##### theme type


`string`








#### useAppointmentReminder

undefined

`useAppointmentReminder`
* is optional
* type: `boolean`
* default: `false`


##### useAppointmentReminder type


`boolean`







#### useBusinessScheduleForUnavailableLabel

undefined

`useBusinessScheduleForUnavailableLabel`
* is optional
* type: `boolean`
* default: `false`


##### useBusinessScheduleForUnavailableLabel type


`boolean`







#### useCRAC

undefined

`useCRAC`
* is optional
* type: `boolean`
* default: `false`


##### useCRAC type


`boolean`







#### useClustersMap

undefined

`useClustersMap`
* is optional
* type: `boolean`
* default: `false`


##### useClustersMap type


`boolean`







#### useCoupon

undefined

`useCoupon`
* is optional
* type: `boolean`
* default: `false`


##### useCoupon type


`boolean`







#### useDefaultWorkerImg

undefined

`useDefaultWorkerImg`
* is optional
* type: `boolean`
* default: `false`


##### useDefaultWorkerImg type


`boolean`







#### useMedAuth

undefined

`useMedAuth`
* is optional
* type: `boolean`
* default: `false`


##### useMedAuth type


`boolean`







#### useMiddleName

undefined

`useMiddleName`
* is optional
* type: `boolean`
* default: `false`


##### useMiddleName type


`boolean`







#### useSortByName

undefined

`useSortByName`
* is optional
* type: `boolean`
* default: `false`


##### useSortByName type


`boolean`







#### warningContactDataText

undefined

`warningContactDataText`
* is optional
* type: `string`
* default: `""`


##### warningContactDataText type


`string`








#### widgetUseCRAC

undefined

`widgetUseCRAC`
* is optional
* type: `boolean`
* default: `false`


##### widgetUseCRAC type


`boolean`







#### withoutWorkers

undefined

`withoutWorkers`
* is optional
* type: `boolean`
* default: `false`


##### withoutWorkers type


`boolean`







#### workerNameReverse

undefined

`workerNameReverse`
* is optional
* type: `boolean`
* default: `false`


##### workerNameReverse type


`boolean`










## yandexFeedType


`yandexFeedType`
* is optional
* type: `string`
* defined in this schema

### yandexFeedType type


`string`





