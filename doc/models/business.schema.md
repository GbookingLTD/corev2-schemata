
# Business Schema




| Property | Type | Required |
|----------|------|----------|
| [id](#id) | `number` | Optional | Business (this schema) |
| [created_on](#created_on) | `string` | Optional | Business (this schema) |
| [general_info](#general_info) | `BusinessInfo` | Optional | Business (this schema) |
| [resources](#resources) | Resource | **Required** | Business (this schema) |
| [taxonomies](#taxonomies) | ``BusinessTaxonomy[]`` | Optional | Business (this schema) |
| [notifications](#notifications) | `array` | Optional | Business (this schema) |
| [vertical](#vertical) | `number` | Optional | Business (this schema) |
| [flatTaxonomyDisplay](#flattaxonomydisplay) | `boolean` | Optional | Business (this schema) |
| [allowCategoryBooking](#allowcategorybooking) | `boolean` | Optional | Business (this schema) |
| [consumables](#consumables) | ``Consumable[]`` | Optional | Business (this schema) |
| [departments](#departments) | ``Department[]`` | Optional | Business (this schema) |
| [cabinets](#cabinets) | ``Cabinet[]`` | Optional | Business (this schema) |
| [defaultFilteredWorkers](#defaultfilteredworkers) | `string[]` | Optional | Business (this schema) |
| [integration_data](#integration_data) | `object` | Optional | Business (this schema) |
| [yandexFeedType](#yandexfeedtype) | `string` | Optional | Business (this schema) |
| [top_services](#top_services) | `object` | Optional | Business (this schema) |
| [mobileData](#mobiledata) | `object` | Optional | Business (this schema) |
| [active](#active) | `boolean` | Optional | Business (this schema) |
| [group](#group) | `enum` | Optional | Business (this schema) |
| [backofficeType](#backofficetype) | `enum` | Optional | Business (this schema) |
| [backofficeConfiguration](#backofficeconfiguration) | `BackofficeConfiguration` | Optional | Business (this schema) |
| [additionalSettings](#additionalsettings) | `object` | Optional | Business (this schema) |
| [widgetConfiguration](#widgetconfiguration) | `WidgetConfiguration` | Optional | Business (this schema) |
| [miniWidgetConfiguration](#miniwidgetconfiguration) | `object` | Optional | Business (this schema) |
| [callbackWidgetConfiguration](#callbackwidgetconfiguration) | `object` | Optional | Business (this schema) |
| [taxonomiesComplex](#taxonomiescomplex) | `object[]` | Optional | Business (this schema) |

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
| `appointmentExtensionType`| number | Optional | `"PERCENT"` |



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
| `pastTimeEdit`| boolean | Optional | `false` |
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
* type: `boolean`
* default: `false`


##### pastTimeEdit type


`boolean`







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








## callbackWidgetConfiguration


`callbackWidgetConfiguration`
* is optional
* type: `object`
* defined in this schema

### callbackWidgetConfiguration type


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
* is optional
* type: `object`
* defined in this schema

### general_info type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `revisionVersion`| number | Optional |
| `name`| string | Optional |
| `address`| array | Optional |
| `email`| array | Optional |
| `phone`| array | Optional |
| `fax`| array | Optional |
| `description`| string | Optional |
| `logoURL`| string | Optional |



#### address

Адреса компании или филиала

`address`
* is optional
* type: `reference[]`


##### address type


Array type: `reference[]`

All items must be of the type:

* []() – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/partials/address.schema.json`










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
* type: `string[]`


##### email type


Array type: `string[]`

All items must be of the type:
`string`











#### fax



`fax`
* is optional
* type: `reference[]`


##### fax type


Array type: `reference[]`

All items must be of the type:

* []() – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/phone.schema.json`










#### logoURL



`logoURL`
* is optional
* type: `string`

##### logoURL type


`string`








#### name

Название бизнеса

`name`
* is optional
* type: `string`

##### name type


`string`








#### phone

Список телефонов бизнеса

`phone`
* is optional
* type: `reference[]`


##### phone type


Array type: `reference[]`

All items must be of the type:

* []() – `http://git.dev.gbooking.ru/corev2-schemata/schemas-json/models/phone.schema.json`










#### revisionVersion



`revisionVersion`
* is optional
* type: `number`

##### revisionVersion type


`number`











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
* type: `number`
* defined in this schema

### id type


`number`






## integration_data


`integration_data`
* is optional
* type: `object`
* defined in this schema

### integration_data type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## miniWidgetConfiguration


`miniWidgetConfiguration`
* is optional
* type: `object`
* defined in this schema

### miniWidgetConfiguration type


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
* type: `object`
* defined in this schema

### mobileData type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






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








## taxonomies
### `BusinessTaxonomy[]`

`taxonomies`
* is optional
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
* type: `number`
* defined in this schema

### vertical type


`number`






## widgetConfiguration
### WidgetConfiguration

`widgetConfiguration`
* is optional
* type: `object`
* defined in this schema

### widgetConfiguration type


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
| `tentativeTTL`| boolean | Optional | `false` |
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
| `appointmentConfirmationTitle`| string | Optional |  |
| `appointmentConfirmationText`| string | Optional |  |
| `theme`| string | Optional | `"theme1"` |
| `socialSharing`| object | Optional |  |
| `noDefaultImages`| boolean | Optional | `false` |
| `withoutWorkers`| boolean | Optional | `false` |
| `bookableMonthsCount`| boolean | Optional | `false` |
| `dayUnavailableLabel`| boolean | Optional | `false` |
| `dayOffLabel`| boolean | Optional | `false` |
| `useBusinessScheduleForUnavailableLabel`| boolean | Optional | `false` |
| `hideAnyWorkerBooking`| boolean | Optional | `false` |
| `disableMobileWidget`| boolean | Optional | `false` |
| `socialNetworkImage`| boolean | Optional | `false` |
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
| `disableWidgetMessage`| boolean | Optional | `false` |
| `denySameTimeRecords`| boolean | Optional | `false` |
| `sortWorkersByWorkload`| boolean | Optional | `false` |
| `mostFreeEnable`| boolean | Optional | `false` |
| `askClientBirthday`| boolean | Optional | `false` |
| `askClientGender`| boolean | Optional | `false` |
| `splitInsuranceClient`| boolean | Optional | `false` |
| `insuranceClientSupportPhone`| array | Optional |  |
| `showDisabledTaxonomies`| boolean | Optional | `false` |
| `disabledTaxonomiesText`| string | Optional |  |



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







#### appointmentConfirmationText

undefined

`appointmentConfirmationText`
* is optional
* type: `string`

##### appointmentConfirmationText type


`string`








#### appointmentConfirmationTitle

undefined

`appointmentConfirmationTitle`
* is optional
* type: `string`

##### appointmentConfirmationTitle type


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
      "type": "string",
      "format": "date-time"
    },
    "end": {
      "type": "string",
      "format": "date-time"
    }
  },
  "simpletype": "`object`"
}
```







#### bookableMonthsCount

undefined

`bookableMonthsCount`
* is optional
* type: `boolean`
* default: `false`


##### bookableMonthsCount type


`boolean`







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

The value of this property **must** be equal to one of the [known values below](#widgetconfiguration-known-values).

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

The value of this property **must** be equal to one of the [known values below](#widgetconfiguration-known-values).

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
* type: `boolean`
* default: `false`


##### dayOffLabel type


`boolean`







#### dayUnavailableLabel

undefined

`dayUnavailableLabel`
* is optional
* type: `boolean`
* default: `false`


##### dayUnavailableLabel type


`boolean`







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
* type: `boolean`
* default: `false`


##### disableWidgetMessage type


`boolean`







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

The value of this property **must** be equal to one of the [known values below](#widgetconfiguration-known-values).

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

The value of this property **must** be equal to one of the [known values below](#widgetconfiguration-known-values).

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
* type: `boolean`
* default: `false`


##### socialNetworkImage type


`boolean`







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
      "type": "string"
    },
    "text": {
      "type": "string"
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
      "type": "number"
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
* type: `boolean`
* default: `false`


##### tentativeTTL type


`boolean`







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










## yandexFeedType


`yandexFeedType`
* is optional
* type: `string`
* defined in this schema

### yandexFeedType type


`string`





