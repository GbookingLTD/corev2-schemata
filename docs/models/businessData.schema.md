# Business Schema

```
schemas-json/models/businessData.schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                  |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ----------------------------------------------------------- |
| Can be instantiated | Yes        | Experimental | No           | Forbidden         | Forbidden             | [models/businessData.schema.json](businessData.schema.json) |

# Business Definitions

| Property                                                                                            | Type       | Group                                                                                         |
| --------------------------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------- |
| [additionalDurations](#additionaldurations)                                                         | reference  | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [additionalName](#additionalname)                                                                   | `string`   | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [additionalPrices](#additionalprices)                                                               | reference  | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [additionalProducts](#additionalproducts)                                                           | reference  | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [additionalTaxonomyExtraId](#additionaltaxonomyextraid)                                             | `object[]` | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [adjacentSameTimeStart](#adjacentsametimestart)                                                     | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [adjacentTaxonomies](#adjacenttaxonomies)                                                           | `object[]` | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [adjacentTaxonomiesTreshold](#adjacenttaxonomiestreshold)                                           | `number`   | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [alias](#alias)                                                                                     | `object`   | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [alignmentTaxonomySlots](#alignmenttaxonomyslots)                                                   | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [allowAutoSelect](#allowautoselect)                                                                 | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [allowBookVisitor](#allowbookvisitor)                                                               | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [allowBookingInBO](#allowbookinginbo)                                                               | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [allowHideServiceForBooking](#allowhideserviceforbooking)                                           | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [allowHideWorkersFromSchdeule](#allowhideworkersfromschdeule)                                       | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [allowNextBookingCount](#allownextbookingcount)                                                     | `number`   | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [allowNextBookingInDays](#allownextbookingindays)                                                   | `number`   | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [allowNextBookingInDaysText](#allownextbookingindaystext)                                           | `string`   | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [allowSkipTimeCheck](#allowskiptimecheck)                                                           | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [allowSmsTranslit](#allowsmstranslit)                                                               | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [amount](#amount)                                                                                   | `string`   | `schemas-json/models/businessData.schema.json#/definitions/AdditionalBusinessTaxonomyPrice`   |
| [appointmentFutureMoving](#appointmentfuturemoving)                                                 | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [appointment_confirmation_text](#appointment_confirmation_text)                                     | `string`   | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [appointment_confirmation_title](#appointment_confirmation_title)                                   | `string`   | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [askClientBirthday](#askclientbirthday)                                                             | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [askClientGender](#askclientgender)                                                                 | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [baseBusinessID](#basebusinessid)                                                                   | `string`   | `schemas-json/models/businessData.schema.json#/definitions/TaxonomyShowcase`                  |
| [blockNotificationForAnyAvailableAdjacentService](#blocknotificationforanyavailableadjacentservice) | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [bookableDateRanges](#bookabledateranges)                                                           | `object`   | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [bookableMonthsCount](#bookablemonthscount)                                                         | `number`   | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [calendarMode](#calendarmode)                                                                       | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [calendarModeHideTime](#calendarmodehidetime)                                                       | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [capacity](#capacity)                                                                               | `number`   | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [capacity_decrease](#capacity_decrease)                                                             | `number`   | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [chargeUnitsStep](#chargeunitsstep)                                                                 | `number`   | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [checkClientOverlapping](#checkclientoverlapping)                                                   | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [childrenTaxonomyTypes](#childrentaxonomytypes)                                                     | `enum[]`   | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [clientBlockingSettings](#clientblockingsettings)                                                   | `object`   | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [clientCommentTitle](#clientcommenttitle)                                                           | `string`   | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [color](#color)                                                                                     | `string`   | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [confirmationAlert](#confirmationalert)                                                             | `string`   | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [confirmationSmsAlert](#confirmationsmsalert)                                                       | `string`   | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [cracServer](#cracserver)                                                                           | `enum`     | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [cracSlotSize](#cracslotsize)                                                                       | `enum`     | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [crunchv2](#crunchv2)                                                                               | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [currency](#currency)                                                                               | reference  | `schemas-json/models/businessData.schema.json#/definitions/AdditionalBusinessTaxonomyPrice`   |
| [customOnlinePaymentConfirmationTemplate](#customonlinepaymentconfirmationtemplate)                 | `string`   | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [dateLimitType](#datelimittype)                                                                     | `enum`     | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [dateLimits](#datelimits)                                                                           | `object[]` | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [dayOffLabel](#dayofflabel)                                                                         | `string`   | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [dayUnavailableLabel](#dayunavailablelabel)                                                         | `string`   | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [daysForward](#daysforward)                                                                         | `number`   | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [defaultGTScheduleDayView](#defaultgtscheduledayview)                                               | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [defaultServiceImgUrl](#defaultserviceimgurl)                                                       | `string`   | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [defaultWorkerImgUrl](#defaultworkerimgurl)                                                         | `string`   | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [denySameTimeRecords](#denysametimerecords)                                                         | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [disableAppointmentClientInlineEditor](#disableappointmentclientinlineeditor)                       | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [disableMobileWidget](#disablemobilewidget)                                                         | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [disableWidget](#disablewidget)                                                                     | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [disableWidgetMessage](#disablewidgetmessage)                                                       | `string`   | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [disabledTaxonomiesText](#disabledtaxonomiestext)                                                   | `string`   | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [discountedPriceRounding](#discountedpricerounding)                                                 | `object`   | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [discounts](#discounts)                                                                             | reference  | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [displayInWidget](#displayinwidget)                                                                 | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [displaySlotSize](#displayslotsize)                                                                 | `number`   | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [dontRequireEmail](#dontrequireemail)                                                               | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [duration](#duration)                                                                               | `number`   | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [editAppExtraId](#editappextraid)                                                                   | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [editTaxonomyChildren](#edittaxonomychildren)                                                       | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [editTaxonomyVisitType](#edittaxonomyvisittype)                                                     | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [emailIsMandatory](#emailismandatory)                                                               | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [enableBlackList](#enableblacklist)                                                                 | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [enableCalculateShedule](#enablecalculateshedule)                                                   | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [enableClientCard](#enableclientcard)                                                               | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [enableClientLanguage](#enableclientlanguage)                                                       | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [enableClientMedicalCardReport](#enableclientmedicalcardreport)                                     | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [enableCustomOnlinePaymentConfirmation](#enablecustomonlinepaymentconfirmation)                     | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [enableExtendedPhone](#enableextendedphone)                                                         | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [enableExtendedRecordsClientStatistics](#enableextendedrecordsclientstatistics)                     | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [enableMasterImportance](#enablemasterimportance)                                                   | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [enableOverrideFooter](#enableoverridefooter)                                                       | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [enablePrintingReportRecordsScreen](#enableprintingreportrecordsscreen)                             | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [enableServiceTimeLimit](#enableservicetimelimit)                                                   | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [enableSourceChoice](#enablesourcechoice)                                                           | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [enableTaxonomyChildrenAgeCheck](#enabletaxonomychildrenagecheck)                                   | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [enableWarningContactData](#enablewarningcontactdata)                                               | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [exceptions](#exceptions)                                                                           | `array`    | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [exportToExcelRemovedClients](#exporttoexcelremovedclients)                                         | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [extraDescription](#extradescription)                                                               | `string`   | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [extraId](#extraid)                                                                                 | `string`   | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [extraLink](#extralink)                                                                             | `string`   | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [extraVisitors](#extravisitors)                                                                     | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [feedBackMinRating](#feedbackminrating)                                                             | `enum`     | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [feedbackCustomerPortalMessage](#feedbackcustomerportalmessage)                                     | `string`   | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [feedbackCustomerPortalThankYouMessage](#feedbackcustomerportalthankyoumessage)                     | `string`   | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [feedbackCustomerPortalTitle](#feedbackcustomerportaltitle)                                         | `string`   | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [filterNonInsuranceSchedule](#filternoninsuranceschedule)                                           | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [finId](#finid)                                                                                     | `string`   | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [finName](#finname)                                                                                 | `string`   | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [forPay](#forpay)                                                                                   | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [hideAnyWorkerBooking](#hideanyworkerbooking)                                                       | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [hideCallButton](#hidecallbutton)                                                                   | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [hideCustomerPortalFooter](#hidecustomerportalfooter)                                               | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [hideEmptyDays](#hideemptydays)                                                                     | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [hideGBookingLogo](#hidegbookinglogo)                                                               | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [hideGraySlots](#hidegrayslots)                                                                     | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [hideNewAppointmentButton](#hidenewappointmentbutton)                                               | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [hidePrices](#hideprices)                                                                           | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [hideSocialNetworksAuthentication](#hidesocialnetworksauthentication)                               | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [highlightedResource](#highlightedresource)                                                         | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [id\_](#id_)                                                                                        | `number`   | `schemas-json/models/businessData.schema.json#/definitions/Department`                        |
| [images](#images)                                                                                   | `string[]` | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [insuranceClientSupportPhone](#insuranceclientsupportphone)                                         | reference  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [isBaseNode](#isbasenode)                                                                           | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/TaxonomyShowcase`                  |
| [isOther](#isother)                                                                                 | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [lastModified](#lastmodified)                                                                       | `string`   | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [leaves](#leaves)                                                                                   | `string[]` | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [level](#level)                                                                                     | `number`   | `schemas-json/models/businessData.schema.json#/definitions/AdditionalDuration`                |
| [manualChanges](#manualchanges)                                                                     | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [manualExceptionSupport](#manualexceptionsupport)                                                   | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [maxServiceBooking](#maxservicebooking)                                                             | `number`   | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [maxTimeslotBooking](#maxtimeslotbooking)                                                           | `number`   | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [middleNameSupport](#middlenamesupport)                                                             | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [mostFreeEnable](#mostfreeenable)                                                                   | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [multiServiceBooking](#multiservicebooking)                                                         | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [multiTimeslotBooking](#multitimeslotbooking)                                                       | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [multiTimeslotBookingAllDays](#multitimeslotbookingalldays)                                         | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [name](#name)                                                                                       | `string`   | `schemas-json/models/businessData.schema.json#/definitions/Consumable`                        |
| [newTaxonomy](#newtaxonomy)                                                                         | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [newWidgetTheme](#newwidgettheme)                                                                   | `object`   | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [noDefaultImages](#nodefaultimages)                                                                 | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [noInternetAlert](#nointernetalert)                                                                 | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [onlineMode](#onlinemode)                                                                           | `enum`     | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [onlyAfterTaxonomies](#onlyaftertaxonomies)                                                         | `string[]` | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [order](#order)                                                                                     | `number`   | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [originBusinessID](#originbusinessid)                                                               | `string`   | `schemas-json/models/businessData.schema.json#/definitions/TaxonomyShowcase`                  |
| [overrideFooter](#overridefooter)                                                                   | `string`   | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [parallelTaxonomies](#paralleltaxonomies)                                                           | `string[]` | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [pastTimeEdit](#pasttimeedit)                                                                       | `number`   | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [payment](#payment)                                                                                 | `enum`     | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [paymentProvider](#paymentprovider)                                                                 | `enum`     | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [popularity](#popularity)                                                                           | `number`   | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [price](#price)                                                                                     | reference  | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [priceLink](#pricelink)                                                                             | `string`   | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [quantity](#quantity)                                                                               | `number`   | `schemas-json/models/businessData.schema.json#/definitions/Consumable`                        |
| [readonlyResourceSchedule](#readonlyresourceschedule)                                               | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [receptionTypes](#receptiontypes)                                                                   | `string[]` | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [requireAgreement](#requireagreement)                                                               | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [requireAgreementLink](#requireagreementlink)                                                       | `string`   | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [required](#required)                                                                               | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/AdditionalBusinessTaxonomyProduct` |
| [resourceLevel](#resourcelevel)                                                                     | `number`   | `schemas-json/models/businessData.schema.json#/definitions/AdditionalBusinessTaxonomyPrice`   |
| [resourceTimetableType](#resourcetimetabletype)                                                     | `enum`     | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [revisionVersion](#revisionversion)                                                                 | `number`   | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [rooms](#rooms)                                                                                     | `string[]` | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [schduleWeekViewIsDefault](#schduleweekviewisdefault)                                               | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [scheduleDefaultWorkersLimit](#scheduledefaultworkerslimit)                                         | `number`   | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [scheduleDefaultWorkersLimitDay](#scheduledefaultworkerslimitday)                                   | `number`   | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [scheduleDefaultWorkersLimitWeek](#scheduledefaultworkerslimitweek)                                 | `number`   | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [scheduleWorkerHours](#scheduleworkerhours)                                                         | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [schedulerWeekViewType](#schedulerweekviewtype)                                                     | `enum`     | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [shortLink](#shortlink)                                                                             | `string`   | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [showAdditionalFields](#showadditionalfields)                                                       | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showAddress](#showaddress)                                                                         | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showAllWorkers](#showallworkers)                                                                   | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [showBirthDate](#showbirthdate)                                                                     | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showClientAddress](#showclientaddress)                                                             | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [showClientAppear](#showclientappear)                                                               | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showClientAppearOnSchedule](#showclientappearonschedule)                                           | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showClientBirthdayFilter](#showclientbirthdayfilter)                                               | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showClientComment](#showclientcomment)                                                             | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [showClientContractNumber](#showclientcontractnumber)                                               | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showClientImage](#showclientimage)                                                                 | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showClientPayment](#showclientpayment)                                                             | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showDefaulterBlockscreen](#showdefaulterblockscreen)                                               | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showDeliveryStatus](#showdeliverystatus)                                                           | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showDepartmentFilter](#showdepartmentfilter)                                                       | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showDepartments](#showdepartments)                                                                 | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showDepartmentsConfiguration](#showdepartmentsconfiguration)                                       | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showDisabledTaxonomies](#showdisabledtaxonomies)                                                   | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [showDrinkQuestion](#showdrinkquestion)                                                             | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [showEmail](#showemail)                                                                             | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showExtraClientInfo](#showextraclientinfo)                                                         | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showFax](#showfax)                                                                                 | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showFiredWorkerAppointmentAlert](#showfiredworkerappointmentalert)                                 | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showFirstAvailableSlot](#showfirstavailableslot)                                                   | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showGapWindow](#showgapwindow)                                                                     | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showGender](#showgender)                                                                           | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showGenderInRecords](#showgenderinrecords)                                                         | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showGeneratableReportsScreen](#showgeneratablereportsscreen)                                       | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showHouseNumber](#showhousenumber)                                                                 | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showIsraelCity](#showisraelcity)                                                                   | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showKupatHolim](#showkupatholim)                                                                   | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showLeadsScreen](#showleadsscreen)                                                                 | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showManualChanges](#showmanualchanges)                                                             | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showMap](#showmap)                                                                                 | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [showPassportId](#showpassportid)                                                                   | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showRooms](#showrooms)                                                                             | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showSeasonTickets](#showseasontickets)                                                             | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showStartText](#showstarttext)                                                                     | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [showSurnameFirst](#showsurnamefirst)                                                               | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [showTalkQuestion](#showtalkquestion)                                                               | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [showTaxonomyChildren](#showtaxonomychildren)                                                       | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showTaxonomyConfirmationAlert](#showtaxonomyconfirmationalert)                                     | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [showTaxonomyLocalization](#showtaxonomylocalization)                                               | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showTaxonomyVisitType](#showtaxonomyvisittype)                                                     | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showTestRecord](#showtestrecord)                                                                   | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showUTM](#showutm)                                                                                 | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showWidgetColorTheme](#showwidgetcolortheme)                                                       | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showWorkerDescriptionInEvent](#showworkerdescriptioninevent)                                       | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showWorkerExtraId](#showworkerextraid)                                                             | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showWorkerStatus](#showworkerstatus)                                                               | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [showcaseItemID](#showcaseitemid)                                                                   | `string`   | `schemas-json/models/businessData.schema.json#/definitions/TaxonomyShowcase`                  |
| [showcaseItems](#showcaseitems)                                                                     | `object[]` | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [showcaseTaxonomyID](#showcasetaxonomyid)                                                           | `string`   | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [showcases](#showcases)                                                                             | reference  | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [siteId](#siteid)                                                                                   | `string`   | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [skipAppointmentPriceUpdate](#skipappointmentpriceupdate)                                           | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [skipAuthentication](#skipauthentication)                                                           | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [skipCancelIfClientNotAppear](#skipcancelifclientnotappear)                                         | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [skipDaysForward](#skipdaysforward)                                                                 | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [skipMobileMap](#skipmobilemap)                                                                     | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [skipServiceDurationAlignment](#skipservicedurationalignment)                                       | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [skipServiceFiltering](#skipservicefiltering)                                                       | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [skipServiceSelection](#skipserviceselection)                                                       | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [skipTimeSelection](#skiptimeselection)                                                             | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [skipTimeSelectionServiceIDs](#skiptimeselectionserviceids)                                         | `string[]` | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [skipWorkerSelectedServiceIDs](#skipworkerselectedserviceids)                                       | `string[]` | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [skipWorkerServicesSelection](#skipworkerservicesselection)                                         | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [socialNetworkImage](#socialnetworkimage)                                                           | `string`   | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [socialSharing](#socialsharing)                                                                     | `object`   | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [sortByMostFree](#sortbymostfree)                                                                   | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [sortWorkersByWorkload](#sortworkersbyworkload)                                                     | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [specialCabinet](#specialcabinet)                                                                   | `string`   | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [splitFullNameXlsExport](#splitfullnamexlsexport)                                                   | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [splitInsuranceClient](#splitinsuranceclient)                                                       | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [splitName](#splitname)                                                                             | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [startTextButton](#starttextbutton)                                                                 | `string`   | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [startTextMessage](#starttextmessage)                                                               | `string`   | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [stateLevelHolidays](#statelevelholidays)                                                           | `object[]` | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [stockAmount](#stockamount)                                                                         | `string`   | `schemas-json/models/businessData.schema.json#/definitions/AdditionalBusinessTaxonomyPrice`   |
| [strictSlotCutting](#strictslotcutting)                                                             | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [taxonomyAppExtraID](#taxonomyappextraid)                                                           | `string`   | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [taxonomyCategoryExtraID](#taxonomycategoryextraid)                                                 | `string`   | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [taxonomyChildrenMaxAge](#taxonomychildrenmaxage)                                                   | `number`   | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [taxonomyParentID](#taxonomyparentid)                                                               | `string`   | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [taxonomyType](#taxonomytype)                                                                       | reference  | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [tentativeTTL](#tentativettl)                                                                       | `number`   | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [theme](#theme)                                                                                     | `string`   | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [timetable](#timetable)                                                                             | reference  | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [type](#type)                                                                                       | `enum`     | `schemas-json/models/businessData.schema.json#/definitions/AdditionalBusinessTaxonomyPrice`   |
| [useAdditionalDurations](#useadditionaldurations)                                                   | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [useAdjacentTaxonomies](#useadjacenttaxonomies)                                                     | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [useAdjacentTaxonomiesSlotSplitting](#useadjacenttaxonomiesslotsplitting)                           | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [useAppointmentReminder](#useappointmentreminder)                                                   | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [useBusinessScheduleForUnavailableLabel](#usebusinessscheduleforunavailablelabel)                   | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [useCRAC](#usecrac)                                                                                 | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [useClustersMap](#useclustersmap)                                                                   | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [useConfirmationSmsAlert](#useconfirmationsmsalert)                                                 | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [useCoupon](#usecoupon)                                                                             | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [useDefaultServiceImg](#usedefaultserviceimg)                                                       | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [useDefaultWorkerImg](#usedefaultworkerimg)                                                         | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [useDirectScheduleRead](#usedirectscheduleread)                                                     | `enum`     | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [useGtAppMethod](#usegtappmethod)                                                                   | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [useInsuranceGuaranteeLetter](#useinsuranceguaranteeletter)                                         | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [useInsuranceSelect](#useinsuranceselect)                                                           | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [useMedAuth](#usemedauth)                                                                           | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [useMiddleName](#usemiddlename)                                                                     | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [useNewReserveAPI](#usenewreserveapi)                                                               | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [useResourcePageLoading](#useresourcepageloading)                                                   | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [useSortByName](#usesortbyname)                                                                     | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [visitType](#visittype)                                                                             | `string`   | `schemas-json/models/businessData.schema.json#/definitions/BusinessTaxonomy`                  |
| [warningContactDataText](#warningcontactdatatext)                                                   | `string`   | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [widgetUseCRAC](#widgetusecrac)                                                                     | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [withoutWorkers](#withoutworkers)                                                                   | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [workWeekEnd](#workweekend)                                                                         | `number`   | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [workWeekStart](#workweekstart)                                                                     | `number`   | `schemas-json/models/businessData.schema.json#/definitions/BackofficeConfiguration`           |
| [workerNameReverse](#workernamereverse)                                                             | `boolean`  | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |
| [worker_unavailability_text](#worker_unavailability_text)                                           | `string`   | `schemas-json/models/businessData.schema.json#/definitions/WidgetConfiguration`               |

## additionalDurations

`additionalDurations`

- is optional
- type: reference
- defined in this schema

### additionalDurations Type

Array type: reference

All items must be of the type:

- []() – `#/definitions/AdditionalDuration`

## additionalName

`additionalName`

- is optional
- type: `string`
- defined in this schema

### additionalName Type

`string`

## additionalPrices

`additionalPrices`

- is optional
- type: reference
- defined in this schema

### additionalPrices Type

Array type: reference

All items must be of the type:

- []() – `#/definitions/AdditionalBusinessTaxonomyPrice`

## additionalProducts

`additionalProducts`

- is optional
- type: reference
- defined in this schema

### additionalProducts Type

Array type: reference

All items must be of the type:

- []() – `#/definitions/AdditionalBusinessTaxonomyProduct`

## additionalTaxonomyExtraId

`additionalTaxonomyExtraId`

- is optional
- type: `object[]`
- defined in this schema

### additionalTaxonomyExtraId Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## adjacentSameTimeStart

`adjacentSameTimeStart`

- is optional
- type: `boolean`
- defined in this schema

### adjacentSameTimeStart Type

`boolean`

## adjacentTaxonomies

`adjacentTaxonomies`

- is optional
- type: `object[]`
- defined in this schema

### adjacentTaxonomies Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property         | Type    | Required | Default |
| ---------------- | ------- | -------- | ------- |
| `isAnyAvailable` | boolean | Optional | `false` |
| `order`          | number  | Optional |         |
| `slotDuration`   | number  | Optional | `20`    |
| `taxonomyID`     | string  | Optional |         |

#### isAnyAvailable

`isAnyAvailable`

- is optional
- type: `boolean`
- default: `false`

##### isAnyAvailable Type

`boolean`

#### order

`order`

- is optional
- type: `number`

##### order Type

`number`

#### slotDuration

`slotDuration`

- is optional
- type: `number`
- default: `20`

##### slotDuration Type

`number`

#### taxonomyID

`taxonomyID`

- is optional
- type: `string`

##### taxonomyID Type

`string`

## adjacentTaxonomiesTreshold

`adjacentTaxonomiesTreshold`

- is optional
- type: `number`
- default: `0`
- defined in this schema

### adjacentTaxonomiesTreshold Type

`number`

## alias

`alias`

- is optional
- type: `object`
- defined in this schema

### alias Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## alignmentTaxonomySlots

`alignmentTaxonomySlots`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### alignmentTaxonomySlots Type

`boolean`

## allowAutoSelect

`allowAutoSelect`

- is optional
- type: `boolean`
- default: `true`
- defined in this schema

### allowAutoSelect Type

`boolean`

## allowBookVisitor

`allowBookVisitor`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### allowBookVisitor Type

`boolean`

## allowBookingInBO

`allowBookingInBO`

- is optional
- type: `boolean`
- default: `true`
- defined in this schema

### allowBookingInBO Type

`boolean`

## allowHideServiceForBooking

`allowHideServiceForBooking`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### allowHideServiceForBooking Type

`boolean`

## allowHideWorkersFromSchdeule

`allowHideWorkersFromSchdeule`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### allowHideWorkersFromSchdeule Type

`boolean`

## allowNextBookingCount

`allowNextBookingCount`

- is optional
- type: `number`
- default: `1`
- defined in this schema

### allowNextBookingCount Type

`number`

## allowNextBookingInDays

`allowNextBookingInDays`

- is optional
- type: `number`
- default: `0`
- defined in this schema

### allowNextBookingInDays Type

`number`

## allowNextBookingInDaysText

`allowNextBookingInDaysText`

- is optional
- type: `string`
- defined in this schema

### allowNextBookingInDaysText Type

`string`

## allowSkipTimeCheck

`allowSkipTimeCheck`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### allowSkipTimeCheck Type

`boolean`

## allowSmsTranslit

`allowSmsTranslit`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### allowSmsTranslit Type

`boolean`

## amount

Значение цены

`amount`

- is **required**
- type: `string`
- default: `"0"`
- defined in this schema

### amount Type

`string`

## appointmentFutureMoving

`appointmentFutureMoving`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### appointmentFutureMoving Type

`boolean`

## appointment_confirmation_text

`appointment_confirmation_text`

- is optional
- type: `string`
- defined in this schema

### appointment_confirmation_text Type

`string`

## appointment_confirmation_title

`appointment_confirmation_title`

- is optional
- type: `string`
- defined in this schema

### appointment_confirmation_title Type

`string`

## askClientBirthday

`askClientBirthday`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### askClientBirthday Type

`boolean`

## askClientGender

`askClientGender`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### askClientGender Type

`boolean`

## baseBusinessID

`baseBusinessID`

- is optional
- type: `string`
- defined in this schema

### baseBusinessID Type

`string`

## blockNotificationForAnyAvailableAdjacentService

`blockNotificationForAnyAvailableAdjacentService`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### blockNotificationForAnyAvailableAdjacentService Type

`boolean`

## bookableDateRanges

`bookableDateRanges`

- is optional
- type: `object`
- defined in this schema

### bookableDateRanges Type

`object` with following properties:

| Property  | Type    | Required | Default |
| --------- | ------- | -------- | ------- |
| `enabled` | boolean | Optional | `false` |
| `end`     |         | Optional |         |
| `start`   |         | Optional |         |

#### enabled

`enabled`

- is optional
- type: `boolean`
- default: `false`

##### enabled Type

`boolean`

#### end

`end`

- is optional
- type: complex

##### end Type

**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

`string`

- format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))

#### Condition 2

#### start

`start`

- is optional
- type: complex

##### start Type

**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

`string`

- format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))

#### Condition 2

## bookableMonthsCount

`bookableMonthsCount`

- is optional
- type: `number`
- default: `-1`
- defined in this schema

### bookableMonthsCount Type

`number`

## calendarMode

`calendarMode`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### calendarMode Type

`boolean`

## calendarModeHideTime

`calendarModeHideTime`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### calendarModeHideTime Type

`boolean`

## capacity

`capacity`

- is optional
- type: `number`
- defined in this schema

### capacity Type

`number`

## capacity_decrease

`capacity_decrease`

- is optional
- type: `number`
- default: `1`
- defined in this schema

### capacity_decrease Type

`number`

## chargeUnitsStep

`chargeUnitsStep`

- is optional
- type: `number`
- defined in this schema

### chargeUnitsStep Type

`number`

## checkClientOverlapping

`checkClientOverlapping`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### checkClientOverlapping Type

`boolean`

## childrenTaxonomyTypes

`childrenTaxonomyTypes`

- is optional
- type: `enum[]`
- defined in this schema

### childrenTaxonomyTypes Type

Array type: `enum[]`

All items must be of the type: `string`

## clientBlockingSettings

`clientBlockingSettings`

- is optional
- type: `object`
- defined in this schema

### clientBlockingSettings Type

`object` with following properties:

| Property                     | Type    | Required | Default |
| ---------------------------- | ------- | -------- | ------- |
| `appointmentClientBlock`     | boolean | Optional | `false` |
| `appointmentClientBlockDays` | number  | Optional | `30`    |
| `appointmentClientBlockText` | string  | Optional |         |
| `blockIfFutureRecordExists`  | boolean | Optional | `false` |
| `blockRepeatedRecordsCount`  | number  | Optional | `1`     |
| `blockRepeatedRecordsRange`  | number  | Optional | `0`     |
| `blockRepeatedRecordsText`   | string  | Optional |         |

#### appointmentClientBlock

`appointmentClientBlock`

- is optional
- type: `boolean`
- default: `false`

##### appointmentClientBlock Type

`boolean`

#### appointmentClientBlockDays

`appointmentClientBlockDays`

- is optional
- type: `number`
- default: `30`

##### appointmentClientBlockDays Type

`number`

#### appointmentClientBlockText

`appointmentClientBlockText`

- is optional
- type: `string`

##### appointmentClientBlockText Type

`string`

#### blockIfFutureRecordExists

`blockIfFutureRecordExists`

- is optional
- type: `boolean`
- default: `false`

##### blockIfFutureRecordExists Type

`boolean`

#### blockRepeatedRecordsCount

`blockRepeatedRecordsCount`

- is optional
- type: `number`
- default: `1`

##### blockRepeatedRecordsCount Type

`number`

#### blockRepeatedRecordsRange

`blockRepeatedRecordsRange`

- is optional
- type: `number`
- default: `0`

##### blockRepeatedRecordsRange Type

`number`

#### blockRepeatedRecordsText

`blockRepeatedRecordsText`

- is optional
- type: `string`

##### blockRepeatedRecordsText Type

`string`

## clientCommentTitle

`clientCommentTitle`

- is optional
- type: `string`
- defined in this schema

### clientCommentTitle Type

`string`

## color

`color`

- is optional
- type: `string`
- defined in this schema

### color Type

`string`

## confirmationAlert

`confirmationAlert`

- is optional
- type: `string`
- defined in this schema

### confirmationAlert Type

`string`

## confirmationSmsAlert

`confirmationSmsAlert`

- is optional
- type: `string`
- defined in this schema

### confirmationSmsAlert Type

`string`

## cracServer

`cracServer`

- is optional
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#cracserver-known-values).

### cracServer Known Values

| Value        | Description |
| ------------ | ----------- |
| `CRAC`       |             |
| `CRAC_PROD3` |             |

## cracSlotSize

`cracSlotSize`

- is optional
- type: `enum`
- default: `5`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#cracslotsize-known-values).

### cracSlotSize Known Values

| Value | Description |
| ----- | ----------- |
| `1`   |             |
| `5`   |             |

## crunchv2

`crunchv2`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### crunchv2 Type

`boolean`

## currency

Аббревиатура валюты

`currency`

- is **required**
- type: reference
- defined in this schema

### currency Type

- []() – `./partials/currency.schema.json#/definitions/CurrencyList`

## customOnlinePaymentConfirmationTemplate

`customOnlinePaymentConfirmationTemplate`

- is optional
- type: `string`
- default: `false`
- defined in this schema

### customOnlinePaymentConfirmationTemplate Type

`string`

## dateLimitType

`dateLimitType`

- is optional
- type: `enum`
- default: `"all_dates"`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#datelimittype-known-values).

### dateLimitType Known Values

| Value         | Description |
| ------------- | ----------- |
| `all_dates`   |             |
| `from_date`   |             |
| `to_date`     |             |
| `range_dates` |             |

## dateLimits

`dateLimits`

- is optional
- type: `object[]`
- defined in this schema

### dateLimits Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property        | Type   | Required |
| --------------- | ------ | -------- |
| `_id`           | string | Optional |
| `dateLimitFrom` | string | Optional |
| `dateLimitTo`   | string | Optional |

#### \_id

`_id`

- is optional
- type: `string`

##### \_id Type

`string`

#### dateLimitFrom

`dateLimitFrom`

- is optional
- type: `string`

##### dateLimitFrom Type

`string`

- format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))

#### dateLimitTo

`dateLimitTo`

- is optional
- type: `string`

##### dateLimitTo Type

`string`

- format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))

## dayOffLabel

`dayOffLabel`

- is optional
- type: `string`
- defined in this schema

### dayOffLabel Type

`string`

## dayUnavailableLabel

`dayUnavailableLabel`

- is optional
- type: `string`
- defined in this schema

### dayUnavailableLabel Type

`string`

## daysForward

`daysForward`

- is optional
- type: `number`
- default: `30`
- defined in this schema

### daysForward Type

`number`

## defaultGTScheduleDayView

`defaultGTScheduleDayView`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### defaultGTScheduleDayView Type

`boolean`

## defaultServiceImgUrl

`defaultServiceImgUrl`

- is optional
- type: `string`
- defined in this schema

### defaultServiceImgUrl Type

`string`

## defaultWorkerImgUrl

`defaultWorkerImgUrl`

- is optional
- type: `string`
- default: `""`
- defined in this schema

### defaultWorkerImgUrl Type

`string`

## denySameTimeRecords

`denySameTimeRecords`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### denySameTimeRecords Type

`boolean`

## disableAppointmentClientInlineEditor

`disableAppointmentClientInlineEditor`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### disableAppointmentClientInlineEditor Type

`boolean`

## disableMobileWidget

`disableMobileWidget`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### disableMobileWidget Type

`boolean`

## disableWidget

`disableWidget`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### disableWidget Type

`boolean`

## disableWidgetMessage

`disableWidgetMessage`

- is optional
- type: `string`
- defined in this schema

### disableWidgetMessage Type

`string`

## disabledTaxonomiesText

`disabledTaxonomiesText`

- is optional
- type: `string`
- defined in this schema

### disabledTaxonomiesText Type

`string`

## discountedPriceRounding

`discountedPriceRounding`

- is optional
- type: `object`
- defined in this schema

### discountedPriceRounding Type

`object` with following properties:

| Property | Type   | Required | Default |
| -------- | ------ | -------- | ------- |
| `rule`   | string | Optional |         |
| `value`  | number | Optional | `-1`    |

#### rule

`rule`

- is optional
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#discountedpricerounding-known-values).

##### rule Known Values

| Value             | Description |
| ----------------- | ----------- |
| `TWO_DECIMALS`    |             |
| `NEAREST_INTEGER` |             |
| `CUSTOM`          |             |

#### value

`value`

- is optional
- type: `number`
- default: `-1`

##### value Type

`number`

## discounts

`discounts`

- is optional
- type: reference
- defined in this schema

### discounts Type

- []() – `./discount.schema.json`

## displayInWidget

`displayInWidget`

- is optional
- type: `boolean`
- defined in this schema

### displayInWidget Type

`boolean`

## displaySlotSize

`displaySlotSize`

- is optional
- type: `number`
- defined in this schema

### displaySlotSize Type

`number`

## dontRequireEmail

`dontRequireEmail`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### dontRequireEmail Type

`boolean`

## duration

`duration`

- is optional
- type: `number`
- defined in this schema

### duration Type

`number`

## editAppExtraId

`editAppExtraId`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### editAppExtraId Type

`boolean`

## editTaxonomyChildren

`editTaxonomyChildren`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### editTaxonomyChildren Type

`boolean`

## editTaxonomyVisitType

`editTaxonomyVisitType`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### editTaxonomyVisitType Type

`boolean`

## emailIsMandatory

`emailIsMandatory`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### emailIsMandatory Type

`boolean`

## enableBlackList

`enableBlackList`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### enableBlackList Type

`boolean`

## enableCalculateShedule

`enableCalculateShedule`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### enableCalculateShedule Type

`boolean`

## enableClientCard

`enableClientCard`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### enableClientCard Type

`boolean`

## enableClientLanguage

`enableClientLanguage`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### enableClientLanguage Type

`boolean`

## enableClientMedicalCardReport

`enableClientMedicalCardReport`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### enableClientMedicalCardReport Type

`boolean`

## enableCustomOnlinePaymentConfirmation

`enableCustomOnlinePaymentConfirmation`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### enableCustomOnlinePaymentConfirmation Type

`boolean`

## enableExtendedPhone

`enableExtendedPhone`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### enableExtendedPhone Type

`boolean`

## enableExtendedRecordsClientStatistics

`enableExtendedRecordsClientStatistics`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### enableExtendedRecordsClientStatistics Type

`boolean`

## enableMasterImportance

`enableMasterImportance`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### enableMasterImportance Type

`boolean`

## enableOverrideFooter

`enableOverrideFooter`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### enableOverrideFooter Type

`boolean`

## enablePrintingReportRecordsScreen

`enablePrintingReportRecordsScreen`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### enablePrintingReportRecordsScreen Type

`boolean`

## enableServiceTimeLimit

`enableServiceTimeLimit`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### enableServiceTimeLimit Type

`boolean`

## enableSourceChoice

`enableSourceChoice`

- is optional
- type: `boolean`
- default: `true`
- defined in this schema

### enableSourceChoice Type

`boolean`

## enableTaxonomyChildrenAgeCheck

`enableTaxonomyChildrenAgeCheck`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### enableTaxonomyChildrenAgeCheck Type

`boolean`

## enableWarningContactData

`enableWarningContactData`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### enableWarningContactData Type

`boolean`

## exceptions

`exceptions`

- is optional
- type: `array`
- defined in this schema

### exceptions Type

Array type: `array`

## exportToExcelRemovedClients

`exportToExcelRemovedClients`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### exportToExcelRemovedClients Type

`boolean`

## extraDescription

`extraDescription`

- is optional
- type: `string`
- defined in this schema

### extraDescription Type

`string`

## extraId

`extraId`

- is optional
- type: `string`
- defined in this schema

### extraId Type

`string`

## extraLink

`extraLink`

- is optional
- type: `string`
- defined in this schema

### extraLink Type

`string`

## extraVisitors

`extraVisitors`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### extraVisitors Type

`boolean`

## feedBackMinRating

`feedBackMinRating`

- is optional
- type: `enum`
- default: `1`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#feedbackminrating-known-values).

### feedBackMinRating Known Values

| Value | Description |
| ----- | ----------- |
| `1`   |             |
| `2`   |             |
| `3`   |             |
| `4`   |             |
| `5`   |             |

## feedbackCustomerPortalMessage

`feedbackCustomerPortalMessage`

- is optional
- type: `string`
- defined in this schema

### feedbackCustomerPortalMessage Type

`string`

## feedbackCustomerPortalThankYouMessage

`feedbackCustomerPortalThankYouMessage`

- is optional
- type: `string`
- defined in this schema

### feedbackCustomerPortalThankYouMessage Type

`string`

## feedbackCustomerPortalTitle

`feedbackCustomerPortalTitle`

- is optional
- type: `string`
- defined in this schema

### feedbackCustomerPortalTitle Type

`string`

## filterNonInsuranceSchedule

`filterNonInsuranceSchedule`

- is optional
- type: `boolean`
- default: `true`
- defined in this schema

### filterNonInsuranceSchedule Type

`boolean`

## finId

`finId`

- is optional
- type: `string`
- defined in this schema

### finId Type

`string`

## finName

`finName`

- is optional
- type: `string`
- defined in this schema

### finName Type

`string`

## forPay

`forPay`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### forPay Type

`boolean`

## hideAnyWorkerBooking

`hideAnyWorkerBooking`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### hideAnyWorkerBooking Type

`boolean`

## hideCallButton

`hideCallButton`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### hideCallButton Type

`boolean`

## hideCustomerPortalFooter

`hideCustomerPortalFooter`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### hideCustomerPortalFooter Type

`boolean`

## hideEmptyDays

`hideEmptyDays`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### hideEmptyDays Type

`boolean`

## hideGBookingLogo

`hideGBookingLogo`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### hideGBookingLogo Type

`boolean`

## hideGraySlots

`hideGraySlots`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### hideGraySlots Type

`boolean`

## hideNewAppointmentButton

`hideNewAppointmentButton`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### hideNewAppointmentButton Type

`boolean`

## hidePrices

`hidePrices`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### hidePrices Type

`boolean`

## hideSocialNetworksAuthentication

`hideSocialNetworksAuthentication`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### hideSocialNetworksAuthentication Type

`boolean`

## highlightedResource

`highlightedResource`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### highlightedResource Type

`boolean`

## id\_

`id_`

- is optional
- type: `number`
- defined in this schema

### id\_ Type

`number`

## images

`images`

- is optional
- type: `string[]`
- defined in this schema

### images Type

Array type: `string[]`

All items must be of the type: `string`

## insuranceClientSupportPhone

`insuranceClientSupportPhone`

- is optional
- type: reference
- defined in this schema

### insuranceClientSupportPhone Type

Array type: reference

All items must be of the type:

- []() – `./phone.schema.json`

## isBaseNode

`isBaseNode`

- is optional
- type: `boolean`
- defined in this schema

### isBaseNode Type

`boolean`

## isOther

`isOther`

- is optional
- type: `boolean`
- defined in this schema

### isOther Type

`boolean`

## lastModified

`lastModified`

- is optional
- type: `string`
- defined in this schema

### lastModified Type

`string`

- format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))

## leaves

`leaves`

- is optional
- type: `string[]`
- defined in this schema

### leaves Type

Array type: `string[]`

All items must be of the type: `string`

## level

`level`

- is optional
- type: `number`
- defined in this schema

### level Type

`number`

## manualChanges

`manualChanges`

- is optional
- type: `boolean`
- defined in this schema

### manualChanges Type

`boolean`

## manualExceptionSupport

`manualExceptionSupport`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### manualExceptionSupport Type

`boolean`

## maxServiceBooking

`maxServiceBooking`

- is optional
- type: `number`
- default: `1`
- defined in this schema

### maxServiceBooking Type

`number`

## maxTimeslotBooking

`maxTimeslotBooking`

- is optional
- type: `number`
- default: `1`
- defined in this schema

### maxTimeslotBooking Type

`number`

## middleNameSupport

`middleNameSupport`

- is optional
- type: `boolean`
- defined in this schema

### middleNameSupport Type

`boolean`

## mostFreeEnable

`mostFreeEnable`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### mostFreeEnable Type

`boolean`

## multiServiceBooking

`multiServiceBooking`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### multiServiceBooking Type

`boolean`

## multiTimeslotBooking

`multiTimeslotBooking`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### multiTimeslotBooking Type

`boolean`

## multiTimeslotBookingAllDays

`multiTimeslotBookingAllDays`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### multiTimeslotBookingAllDays Type

`boolean`

## name

`name`

- is **required**
- type: `string`
- defined in this schema

### name Type

`string`

## newTaxonomy

`newTaxonomy`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### newTaxonomy Type

`boolean`

## newWidgetTheme

`newWidgetTheme`

- is optional
- type: `object`
- defined in this schema

### newWidgetTheme Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## noDefaultImages

`noDefaultImages`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### noDefaultImages Type

`boolean`

## noInternetAlert

`noInternetAlert`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### noInternetAlert Type

`boolean`

## onlineMode

`onlineMode`

- is optional
- type: `enum`
- default: `"PLAN_CLINIC"`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#onlinemode-known-values).

### onlineMode Known Values

| Value                | Description     |
| -------------------- | --------------- |
| `0`                  | [object Object] |
| `1`                  | [object Object] |
| `2`                  | [object Object] |
| `3`                  | [object Object] |
| `PLAN_CLINIC`        |                 |
| `PLAN_CLINIC_ONLINE` |                 |
| `ONCALL_ONLINE`      |                 |
| `PLAN_ONLINE`        |                 |

## onlyAfterTaxonomies

`onlyAfterTaxonomies`

- is optional
- type: `string[]`
- defined in this schema

### onlyAfterTaxonomies Type

Array type: `string[]`

All items must be of the type: `string`

## order

`order`

- is optional
- type: `number`
- defined in this schema

### order Type

`number`

## originBusinessID

`originBusinessID`

- is optional
- type: `string`
- defined in this schema

### originBusinessID Type

`string`

## overrideFooter

`overrideFooter`

- is optional
- type: `string`
- default: `""`
- defined in this schema

### overrideFooter Type

`string`

## parallelTaxonomies

`parallelTaxonomies`

- is optional
- type: `string[]`
- defined in this schema

### parallelTaxonomies Type

Array type: `string[]`

All items must be of the type: `string`

## pastTimeEdit

`pastTimeEdit`

- is optional
- type: `number`
- default: `1`
- defined in this schema

### pastTimeEdit Type

`number`

## payment

`payment`

- is optional
- type: `enum`
- default: `"WITHOUT"`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#payment-known-values).

### payment Known Values

| Value      | Description |
| ---------- | ----------- |
| `WITHOUT`  |             |
| `OPTIONAL` |             |
| `REQUIRED` |             |

## paymentProvider

`paymentProvider`

- is optional
- type: `enum`
- default: `"yandexMoney"`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#paymentprovider-known-values).

### paymentProvider Known Values

| Value             | Description |
| ----------------- | ----------- |
| `yandexMoney`     |             |
| `deltaProcessing` |             |
| `DISABLE`         |             |

## popularity

`popularity`

- is optional
- type: `number`
- defined in this schema

### popularity Type

`number`

## price

`price`

- is optional
- type: reference
- defined in this schema

### price Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## priceLink

`priceLink`

- is optional
- type: `string`
- defined in this schema

### priceLink Type

`string`

## quantity

`quantity`

- is **required**
- type: `number`
- defined in this schema

### quantity Type

`number`

## readonlyResourceSchedule

`readonlyResourceSchedule`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### readonlyResourceSchedule Type

`boolean`

## receptionTypes

Список видов приема услуги

`receptionTypes`

- is optional
- type: `string[]`
- defined in this schema

### receptionTypes Type

Array type: `string[]`

All items must be of the type: `string`

## requireAgreement

`requireAgreement`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### requireAgreement Type

`boolean`

## requireAgreementLink

`requireAgreementLink`

- is optional
- type: `string`
- default: `""`
- defined in this schema

### requireAgreementLink Type

`string`

## required

Является ли обязательным при выполнении данной услуги

`required`

- is **required**
- type: `boolean`
- defined in this schema

### required Type

`boolean`

## resourceLevel

"Уровень" цены. Работнику можно выставить его "уровень" (поле level в resources)

`resourceLevel`

- is **required**
- type: `number`
- defined in this schema

### resourceLevel Type

`number`

## resourceTimetableType

`resourceTimetableType`

- is optional
- type: `enum`
- default: `"DEFAULT"`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#resourcetimetabletype-known-values).

### resourceTimetableType Known Values

| Value     | Description |
| --------- | ----------- |
| `DEFAULT` |             |
| `EVENODD` |             |

## revisionVersion

`revisionVersion`

- is optional
- type: `number`
- defined in this schema

### revisionVersion Type

`number`

## rooms

`rooms`

- is optional
- type: `string[]`
- defined in this schema

### rooms Type

Array type: `string[]`

All items must be of the type: `string`

## schduleWeekViewIsDefault

`schduleWeekViewIsDefault`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### schduleWeekViewIsDefault Type

`boolean`

## scheduleDefaultWorkersLimit

`scheduleDefaultWorkersLimit`

- is optional
- type: `number`
- default: `25`
- defined in this schema

### scheduleDefaultWorkersLimit Type

`number`

## scheduleDefaultWorkersLimitDay

`scheduleDefaultWorkersLimitDay`

- is optional
- type: `number`
- defined in this schema

### scheduleDefaultWorkersLimitDay Type

`number`, nullable

## scheduleDefaultWorkersLimitWeek

`scheduleDefaultWorkersLimitWeek`

- is optional
- type: `number`
- defined in this schema

### scheduleDefaultWorkersLimitWeek Type

`number`, nullable

## scheduleWorkerHours

`scheduleWorkerHours`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### scheduleWorkerHours Type

`boolean`

## schedulerWeekViewType

`schedulerWeekViewType`

- is optional
- type: `enum`
- default: `"week"`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#schedulerweekviewtype-known-values).

### schedulerWeekViewType Known Values

| Value      | Description |
| ---------- | ----------- |
| `week`     |             |
| `workWeek` |             |

## shortLink

`shortLink`

- is optional
- type: `string`
- defined in this schema

### shortLink Type

`string`

## showAdditionalFields

`showAdditionalFields`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showAdditionalFields Type

`boolean`

## showAddress

`showAddress`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showAddress Type

`boolean`

## showAllWorkers

`showAllWorkers`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showAllWorkers Type

`boolean`

## showBirthDate

`showBirthDate`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showBirthDate Type

`boolean`

## showClientAddress

`showClientAddress`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showClientAddress Type

`boolean`

## showClientAppear

`showClientAppear`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showClientAppear Type

`boolean`

## showClientAppearOnSchedule

`showClientAppearOnSchedule`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showClientAppearOnSchedule Type

`boolean`

## showClientBirthdayFilter

`showClientBirthdayFilter`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showClientBirthdayFilter Type

`boolean`

## showClientComment

`showClientComment`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showClientComment Type

`boolean`

## showClientContractNumber

`showClientContractNumber`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showClientContractNumber Type

`boolean`

## showClientImage

`showClientImage`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showClientImage Type

`boolean`

## showClientPayment

`showClientPayment`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showClientPayment Type

`boolean`

## showDefaulterBlockscreen

`showDefaulterBlockscreen`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showDefaulterBlockscreen Type

`boolean`

## showDeliveryStatus

`showDeliveryStatus`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showDeliveryStatus Type

`boolean`

## showDepartmentFilter

`showDepartmentFilter`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showDepartmentFilter Type

`boolean`

## showDepartments

`showDepartments`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showDepartments Type

`boolean`

## showDepartmentsConfiguration

`showDepartmentsConfiguration`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showDepartmentsConfiguration Type

`boolean`

## showDisabledTaxonomies

`showDisabledTaxonomies`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showDisabledTaxonomies Type

`boolean`

## showDrinkQuestion

`showDrinkQuestion`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showDrinkQuestion Type

`boolean`

## showEmail

`showEmail`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showEmail Type

`boolean`

## showExtraClientInfo

`showExtraClientInfo`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showExtraClientInfo Type

`boolean`

## showFax

`showFax`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showFax Type

`boolean`

## showFiredWorkerAppointmentAlert

`showFiredWorkerAppointmentAlert`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showFiredWorkerAppointmentAlert Type

`boolean`

## showFirstAvailableSlot

`showFirstAvailableSlot`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showFirstAvailableSlot Type

`boolean`

## showGapWindow

`showGapWindow`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showGapWindow Type

`boolean`

## showGender

`showGender`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showGender Type

`boolean`

## showGenderInRecords

`showGenderInRecords`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showGenderInRecords Type

`boolean`

## showGeneratableReportsScreen

`showGeneratableReportsScreen`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showGeneratableReportsScreen Type

`boolean`

## showHouseNumber

`showHouseNumber`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showHouseNumber Type

`boolean`

## showIsraelCity

`showIsraelCity`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showIsraelCity Type

`boolean`

## showKupatHolim

`showKupatHolim`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showKupatHolim Type

`boolean`

## showLeadsScreen

`showLeadsScreen`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showLeadsScreen Type

`boolean`

## showManualChanges

`showManualChanges`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showManualChanges Type

`boolean`

## showMap

`showMap`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showMap Type

`boolean`

## showPassportId

`showPassportId`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showPassportId Type

`boolean`

## showRooms

`showRooms`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showRooms Type

`boolean`

## showSeasonTickets

`showSeasonTickets`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showSeasonTickets Type

`boolean`

## showStartText

`showStartText`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showStartText Type

`boolean`

## showSurnameFirst

`showSurnameFirst`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showSurnameFirst Type

`boolean`

## showTalkQuestion

`showTalkQuestion`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showTalkQuestion Type

`boolean`

## showTaxonomyChildren

`showTaxonomyChildren`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showTaxonomyChildren Type

`boolean`

## showTaxonomyConfirmationAlert

`showTaxonomyConfirmationAlert`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showTaxonomyConfirmationAlert Type

`boolean`

## showTaxonomyLocalization

`showTaxonomyLocalization`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showTaxonomyLocalization Type

`boolean`

## showTaxonomyVisitType

`showTaxonomyVisitType`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showTaxonomyVisitType Type

`boolean`

## showTestRecord

`showTestRecord`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showTestRecord Type

`boolean`

## showUTM

`showUTM`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showUTM Type

`boolean`

## showWidgetColorTheme

`showWidgetColorTheme`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showWidgetColorTheme Type

`boolean`

## showWorkerDescriptionInEvent

`showWorkerDescriptionInEvent`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showWorkerDescriptionInEvent Type

`boolean`

## showWorkerExtraId

`showWorkerExtraId`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showWorkerExtraId Type

`boolean`

## showWorkerStatus

`showWorkerStatus`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### showWorkerStatus Type

`boolean`

## showcaseItemID

`showcaseItemID`

- is optional
- type: `string`
- defined in this schema

### showcaseItemID Type

`string`

## showcaseItems

`showcaseItems`

- is optional
- type: `object[]`
- defined in this schema

### showcaseItems Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property              | Type   | Required |
| --------------------- | ------ | -------- |
| `_id`                 | string | Optional |
| `additionalDurations` | array  | Optional |
| `businessID`          | string | Optional |
| `receptionTypes`      | array  | Optional |
| `taxonomyID`          | string | Optional |

#### \_id

`_id`

- is optional
- type: `string`

##### \_id Type

`string`

#### additionalDurations

`additionalDurations`

- is optional
- type: `object[]`

##### additionalDurations Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property   | Type   | Required | Default |
| ---------- | ------ | -------- | ------- |
| `_id`      | string | Optional |         |
| `duration` | number | Optional | `0`     |
| `level`    | number | Optional |         |

#### \_id

`_id`

- is optional
- type: `string`

##### \_id Type

`string`

#### duration

`duration`

- is optional
- type: `number`
- default: `0`

##### duration Type

`number`

#### level

поддержка различной длительности услуг в зависимости от работника

`level`

- is optional
- type: `number`

##### level Type

`number`

#### businessID

`businessID`

- is optional
- type: `string`

##### businessID Type

`string`

#### receptionTypes

Список видов приема услуги

`receptionTypes`

- is optional
- type: `string[]`

##### receptionTypes Type

Array type: `string[]`

All items must be of the type: `string`

#### taxonomyID

`taxonomyID`

- is optional
- type: `string`

##### taxonomyID Type

`string`

## showcaseTaxonomyID

Идентификатор услуги в витрине

`showcaseTaxonomyID`

- is optional
- type: `string`
- defined in this schema

### showcaseTaxonomyID Type

`string`

## showcases

`showcases`

- is optional
- type: reference
- defined in this schema

### showcases Type

Array type: reference

All items must be of the type:

- []() – `#/definitions/TaxonomyShowcase`

## siteId

Внешний идентификатор таксономии

`siteId`

- is optional
- type: `string`
- defined in this schema

### siteId Type

`string`

## skipAppointmentPriceUpdate

`skipAppointmentPriceUpdate`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### skipAppointmentPriceUpdate Type

`boolean`

## skipAuthentication

`skipAuthentication`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### skipAuthentication Type

`boolean`

## skipCancelIfClientNotAppear

`skipCancelIfClientNotAppear`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### skipCancelIfClientNotAppear Type

`boolean`

## skipDaysForward

`skipDaysForward`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### skipDaysForward Type

`boolean`

## skipMobileMap

`skipMobileMap`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### skipMobileMap Type

`boolean`

## skipServiceDurationAlignment

`skipServiceDurationAlignment`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### skipServiceDurationAlignment Type

`boolean`

## skipServiceFiltering

`skipServiceFiltering`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### skipServiceFiltering Type

`boolean`

## skipServiceSelection

`skipServiceSelection`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### skipServiceSelection Type

`boolean`

## skipTimeSelection

`skipTimeSelection`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### skipTimeSelection Type

`boolean`

## skipTimeSelectionServiceIDs

`skipTimeSelectionServiceIDs`

- is optional
- type: `string[]`
- defined in this schema

### skipTimeSelectionServiceIDs Type

Array type: `string[]`

All items must be of the type: `string`

## skipWorkerSelectedServiceIDs

`skipWorkerSelectedServiceIDs`

- is optional
- type: `string[]`
- defined in this schema

### skipWorkerSelectedServiceIDs Type

Array type: `string[]`

All items must be of the type: `string`

## skipWorkerServicesSelection

`skipWorkerServicesSelection`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### skipWorkerServicesSelection Type

`boolean`

## socialNetworkImage

`socialNetworkImage`

- is optional
- type: `string`
- default: `false`
- defined in this schema

### socialNetworkImage Type

`string`

## socialSharing

`socialSharing`

- is optional
- type: `object`
- defined in this schema

### socialSharing Type

`object` with following properties:

| Property          | Type        | Required | Default |
| ----------------- | ----------- | -------- | ------- |
| `active`          | boolean     | Optional | `false` |
| `discountAmount`  | number,null | Optional |         |
| `discountEnabled` | boolean     | Optional |         |
| `discountType`    | string      | Optional |         |
| `text`            | string,null | Optional |         |
| `widgetText`      | string,null | Optional |         |

#### active

`active`

- is optional
- type: `boolean`
- default: `false`

##### active Type

`boolean`

#### discountAmount

`discountAmount`

- is optional
- type: `number`

##### discountAmount Type

`number`, nullable

#### discountEnabled

`discountEnabled`

- is optional
- type: `boolean`

##### discountEnabled Type

`boolean`

#### discountType

`discountType`

- is optional
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#socialsharing-known-values).

##### discountType Known Values

| Value     | Description |
| --------- | ----------- |
| `PERCENT` |             |

#### text

`text`

- is optional
- type: `string`

##### text Type

`string`, nullable

#### widgetText

`widgetText`

- is optional
- type: `string`

##### widgetText Type

`string`, nullable

## sortByMostFree

`sortByMostFree`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### sortByMostFree Type

`boolean`

## sortWorkersByWorkload

`sortWorkersByWorkload`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### sortWorkersByWorkload Type

`boolean`

## specialCabinet

`specialCabinet`

- is optional
- type: `string`
- defined in this schema

### specialCabinet Type

`string`

## splitFullNameXlsExport

`splitFullNameXlsExport`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### splitFullNameXlsExport Type

`boolean`

## splitInsuranceClient

`splitInsuranceClient`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### splitInsuranceClient Type

`boolean`

## splitName

`splitName`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### splitName Type

`boolean`

## startTextButton

`startTextButton`

- is optional
- type: `string`
- defined in this schema

### startTextButton Type

`string`

## startTextMessage

`startTextMessage`

- is optional
- type: `string`
- defined in this schema

### startTextMessage Type

`string`

## stateLevelHolidays

`stateLevelHolidays`

- is optional
- type: `object[]`
- defined in this schema

### stateLevelHolidays Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## stockAmount

Значение цены, с учётом промо акций

`stockAmount`

- is **required**
- type: `string`
- default: `"0"`
- defined in this schema

### stockAmount Type

`string`, nullable

## strictSlotCutting

`strictSlotCutting`

- is optional
- type: `boolean`
- defined in this schema

### strictSlotCutting Type

`boolean`

## taxonomyAppExtraID

`taxonomyAppExtraID`

- is optional
- type: `string`
- defined in this schema

### taxonomyAppExtraID Type

`string`

## taxonomyCategoryExtraID

`taxonomyCategoryExtraID`

- is optional
- type: `string`
- defined in this schema

### taxonomyCategoryExtraID Type

`string`

## taxonomyChildrenMaxAge

`taxonomyChildrenMaxAge`

- is optional
- type: `number`
- defined in this schema

### taxonomyChildrenMaxAge Type

`number`

## taxonomyParentID

`taxonomyParentID`

- is optional
- type: `string`
- defined in this schema

### taxonomyParentID Type

`string`

## taxonomyType

`taxonomyType`

- is optional
- type: reference
- defined in this schema

### taxonomyType Type

- []() – `./partials/taxonomyType.schema.json#/definitions/TaxonomyType`

## tentativeTTL

`tentativeTTL`

- is optional
- type: `number`
- defined in this schema

### tentativeTTL Type

`number`

## theme

`theme`

- is optional
- type: `string`
- default: `"theme1"`
- defined in this schema

### theme Type

`string`

## timetable

`timetable`

- is optional
- type: reference
- defined in this schema

### timetable Type

- []() – `./timetable.schema.json`

## type

Тип цены

`type`

- is **required**
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#type-known-values).

### type Known Values

| Value        | Description     |
| ------------ | --------------- |
| `0`          | [object Object] |
| `1`          | [object Object] |
| `2`          | [object Object] |
| `equal`      |                 |
| `begin_with` |                 |
| `average`    |                 |

## useAdditionalDurations

`useAdditionalDurations`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### useAdditionalDurations Type

`boolean`

## useAdjacentTaxonomies

`useAdjacentTaxonomies`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### useAdjacentTaxonomies Type

`boolean`

## useAdjacentTaxonomiesSlotSplitting

`useAdjacentTaxonomiesSlotSplitting`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### useAdjacentTaxonomiesSlotSplitting Type

`boolean`

## useAppointmentReminder

`useAppointmentReminder`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### useAppointmentReminder Type

`boolean`

## useBusinessScheduleForUnavailableLabel

`useBusinessScheduleForUnavailableLabel`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### useBusinessScheduleForUnavailableLabel Type

`boolean`

## useCRAC

`useCRAC`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### useCRAC Type

`boolean`

## useClustersMap

`useClustersMap`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### useClustersMap Type

`boolean`

## useConfirmationSmsAlert

`useConfirmationSmsAlert`

- is optional
- type: `boolean`
- defined in this schema

### useConfirmationSmsAlert Type

`boolean`

## useCoupon

`useCoupon`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### useCoupon Type

`boolean`

## useDefaultServiceImg

`useDefaultServiceImg`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### useDefaultServiceImg Type

`boolean`

## useDefaultWorkerImg

`useDefaultWorkerImg`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### useDefaultWorkerImg Type

`boolean`

## useDirectScheduleRead

`useDirectScheduleRead`

- is optional
- type: `enum`
- default: `"NONE"`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#usedirectscheduleread-known-values).

### useDirectScheduleRead Known Values

| Value           | Description |
| --------------- | ----------- |
| `ALL`           |             |
| `AUTHENTICATED` |             |
| `GUEST`         |             |
| `NONE`          |             |

## useGtAppMethod

`useGtAppMethod`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### useGtAppMethod Type

`boolean`

## useInsuranceGuaranteeLetter

`useInsuranceGuaranteeLetter`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### useInsuranceGuaranteeLetter Type

`boolean`

## useInsuranceSelect

`useInsuranceSelect`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### useInsuranceSelect Type

`boolean`

## useMedAuth

`useMedAuth`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### useMedAuth Type

`boolean`

## useMiddleName

`useMiddleName`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### useMiddleName Type

`boolean`

## useNewReserveAPI

`useNewReserveAPI`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### useNewReserveAPI Type

`boolean`

## useResourcePageLoading

`useResourcePageLoading`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### useResourcePageLoading Type

`boolean`

## useSortByName

`useSortByName`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### useSortByName Type

`boolean`

## visitType

`visitType`

- is optional
- type: `string`
- defined in this schema

### visitType Type

`string`

## warningContactDataText

`warningContactDataText`

- is optional
- type: `string`
- default: `""`
- defined in this schema

### warningContactDataText Type

`string`

## widgetUseCRAC

`widgetUseCRAC`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### widgetUseCRAC Type

`boolean`

## withoutWorkers

`withoutWorkers`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### withoutWorkers Type

`boolean`

## workWeekEnd

`workWeekEnd`

- is optional
- type: `number`
- default: `6`
- defined in this schema

### workWeekEnd Type

`number`

## workWeekStart

`workWeekStart`

- is optional
- type: `number`
- default: `0`
- defined in this schema

### workWeekStart Type

`number`

## workerNameReverse

`workerNameReverse`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### workerNameReverse Type

`boolean`

## worker_unavailability_text

`worker_unavailability_text`

- is optional
- type: `string`
- defined in this schema

### worker_unavailability_text Type

`string`

# Business Properties

| Property                                                        | Type       | Required     | Nullable | Default | Defined by             |
| --------------------------------------------------------------- | ---------- | ------------ | -------- | ------- | ---------------------- |
| [active](#active)                                               | `boolean`  | Optional     | No       |         | Business (this schema) |
| [activeResourceCount](#activeresourcecount)                     | `number`   | Optional     | No       |         | Business (this schema) |
| [activeTaxonomyCount](#activetaxonomycount)                     | `number`   | Optional     | No       |         | Business (this schema) |
| [additionalSettings](#additionalsettings)                       | `object`   | Optional     | No       |         | Business (this schema) |
| [allowCategoryBooking](#allowcategorybooking)                   | `boolean`  | Optional     | No       |         | Business (this schema) |
| [backofficeConfiguration](#backofficeconfiguration)             | `object`   | Optional     | No       |         | Business (this schema) |
| [backofficeType](#backofficetype)                               | `enum`     | Optional     | No       |         | Business (this schema) |
| [backoffice_configuration](#backoffice_configuration)           | `object`   | Optional     | No       |         | Business (this schema) |
| [cabinets](#cabinets)                                           | reference  | Optional     | No       |         | Business (this schema) |
| [cabinetsEnabled](#cabinetsenabled)                             | `boolean`  | Optional     | No       |         | Business (this schema) |
| [callback_widget_configuration](#callback_widget_configuration) | `object`   | Optional     | No       |         | Business (this schema) |
| [consumables](#consumables)                                     | reference  | Optional     | No       |         | Business (this schema) |
| [created_on](#created_on)                                       | `string`   | Optional     | No       |         | Business (this schema) |
| [defaultFilteredWorkers](#defaultfilteredworkers)               | `string[]` | Optional     | No       |         | Business (this schema) |
| [departments](#departments)                                     | reference  | Optional     | No       |         | Business (this schema) |
| [designs](#designs)                                             | `object[]` | Optional     | No       |         | Business (this schema) |
| [extraID](#extraid)                                             | `string`   | **Required** | No       |         | Business (this schema) |
| [flatTaxonomyDisplay](#flattaxonomydisplay)                     | `boolean`  | Optional     | No       |         | Business (this schema) |
| [general_info](#general_info)                                   | reference  | **Required** | No       |         | Business (this schema) |
| [group](#group)                                                 | `enum`     | Optional     | No       |         | Business (this schema) |
| [id](#id)                                                       | `string`   | **Required** | No       |         | Business (this schema) |
| [integration_data](#integration_data)                           | `object`   | Optional     | No       |         | Business (this schema) |
| [mini_widget_configuration](#mini_widget_configuration)         | `object`   | **Required** | No       |         | Business (this schema) |
| [mobileData](#mobiledata)                                       | `array`    | Optional     | No       |         | Business (this schema) |
| [notifications](#notifications)                                 | `array`    | Optional     | No       |         | Business (this schema) |
| [resources](#resources)                                         | reference  | Optional     | No       |         | Business (this schema) |
| [stateLevelHolidaysNotWorking](#statelevelholidaysnotworking)   | `boolean`  | Optional     | No       | `false` | Business (this schema) |
| [taxonomies](#taxonomies)                                       | reference  | Optional     | No       |         | Business (this schema) |
| [taxonomiesComplex](#taxonomiescomplex)                         | `object[]` | Optional     | No       |         | Business (this schema) |
| [taxonomy_tree_capacity](#taxonomy_tree_capacity)               | `object[]` | Optional     | No       |         | Business (this schema) |
| [top_services](#top_services)                                   | `object`   | Optional     | No       |         | Business (this schema) |
| [vertical](#vertical)                                           | `string`   | Optional     | No       |         | Business (this schema) |
| [widget_configuration](#widget_configuration)                   | `object`   | **Required** | No       |         | Business (this schema) |
| [yandexFeedType](#yandexfeedtype)                               | `string`   | Optional     | No       |         | Business (this schema) |

## active

`active`

- is optional
- type: `boolean`
- defined in this schema

### active Type

`boolean`

## activeResourceCount

колличество активных рабоников, возвращается при вызове через get_network_data при передаче ключа работника или услуги

`activeResourceCount`

- is optional
- type: `number`
- defined in this schema

### activeResourceCount Type

`number`

## activeTaxonomyCount

колличество активных услуг, возвращается при вызове через get_network_data при передаче ключа работника или услуги

`activeTaxonomyCount`

- is optional
- type: `number`
- defined in this schema

### activeTaxonomyCount Type

`number`

## additionalSettings

`additionalSettings`

- is optional
- type: `object`
- defined in this schema

### additionalSettings Type

`object` with following properties:

| Property                     | Type   | Required | Default     |
| ---------------------------- | ------ | -------- | ----------- |
| `appointmentExtensionAmount` | number | Optional | `30`        |
| `appointmentExtensionType`   | string | Optional | `"PERCENT"` |

#### appointmentExtensionAmount

`appointmentExtensionAmount`

- is optional
- type: `number`
- default: `30`

##### appointmentExtensionAmount Type

`number`

#### appointmentExtensionType

`appointmentExtensionType`

- is optional
- type: `enum`
- default: `"PERCENT"`

The value of this property **must** be equal to one of the [known values below](#additionalsettings-known-values).

##### appointmentExtensionType Known Values

| Value     | Description |
| --------- | ----------- |
| `PERCENT` |             |
| `MINUTES` |             |

## allowCategoryBooking

`allowCategoryBooking`

- is optional
- type: `boolean`
- defined in this schema

### allowCategoryBooking Type

`boolean`

## backofficeConfiguration

### BackofficeConfiguration

`backofficeConfiguration`

- is optional
- type: `object`
- defined in this schema

### backofficeConfiguration Type

`object` with following properties:

| Property                                          | Type        | Required | Default     |
| ------------------------------------------------- | ----------- | -------- | ----------- |
| `adjacentTaxonomiesTreshold`                      | number      | Optional | `0`         |
| `allowHideServiceForBooking`                      | boolean     | Optional | `false`     |
| `allowHideWorkersFromSchdeule`                    | boolean     | Optional | `false`     |
| `allowSmsTranslit`                                | boolean     | Optional | `false`     |
| `appointmentFutureMoving`                         | boolean     | Optional | `false`     |
| `blockNotificationForAnyAvailableAdjacentService` | boolean     | Optional | `false`     |
| `cabinetsEnabled`                                 | boolean     | Optional | `false`     |
| `checkClientOverlapping`                          | boolean     | Optional | `false`     |
| `customOnlinePaymentConfirmationTemplate`         | string      | Optional | `false`     |
| `defaultGTScheduleDayView`                        | boolean     | Optional | `false`     |
| `disableAppointmentClientInlineEditor`            | boolean     | Optional | `false`     |
| `editAppExtraId`                                  | boolean     | Optional | `false`     |
| `editTaxonomyChildren`                            | boolean     | Optional | `false`     |
| `editTaxonomyVisitType`                           | boolean     | Optional | `false`     |
| `enableBlackList`                                 | boolean     | Optional | `false`     |
| `enableCalculateShedule`                          | boolean     | Optional | `false`     |
| `enableClientCard`                                | boolean     | Optional | `false`     |
| `enableClientLanguage`                            | boolean     | Optional | `false`     |
| `enableClientMedicalCardReport`                   | boolean     | Optional | `false`     |
| `enableCustomOnlinePaymentConfirmation`           | boolean     | Optional | `false`     |
| `enableExtendedPhone`                             | boolean     | Optional | `false`     |
| `enableExtendedRecordsClientStatistics`           | boolean     | Optional | `false`     |
| `enableMasterImportance`                          | boolean     | Optional | `false`     |
| `enablePrintingReportRecordsScreen`               | boolean     | Optional | `false`     |
| `enableServiceTimeLimit`                          | boolean     | Optional | `false`     |
| `enableSourceChoice`                              | boolean     | Optional | `true`      |
| `enableTaxonomyChildrenAgeCheck`                  | boolean     | Optional | `false`     |
| `exportToExcelRemovedClients`                     | boolean     | Optional | `false`     |
| `feedBackMinRating`                               | string      | Optional | `1`         |
| `feedbackCustomerPortalMessage`                   | string      | Optional |             |
| `feedbackCustomerPortalThankYouMessage`           | string      | Optional |             |
| `feedbackCustomerPortalTitle`                     | string      | Optional |             |
| `finId`                                           | string      | Optional |             |
| `finName`                                         | string      | Optional |             |
| `hideCustomerPortalFooter`                        | boolean     | Optional | `false`     |
| `highlightedResource`                             | boolean     | Optional | `false`     |
| `manualExceptionSupport`                          | boolean     | Optional | `false`     |
| `noInternetAlert`                                 | boolean     | Optional | `false`     |
| `pastTimeEdit`                                    | number      | Optional | `1`         |
| `paymentProvider`                                 | string      | Optional |             |
| `readonlyResourceSchedule`                        | boolean     | Optional | `false`     |
| `resourceTimetableType`                           | string      | Optional | `"DEFAULT"` |
| `revisionVersion`                                 | number      | Optional |             |
| `schduleWeekViewIsDefault`                        | boolean     | Optional | `false`     |
| `scheduleDefaultWorkersLimit`                     | number      | Optional | `25`        |
| `scheduleDefaultWorkersLimitDay`                  | number,null | Optional |             |
| `scheduleDefaultWorkersLimitWeek`                 | number,null | Optional |             |
| `scheduleWorkerHours`                             | boolean     | Optional | `false`     |
| `schedulerWeekViewType`                           | string      | Optional | `"week"`    |
| `showAdditionalFields`                            | boolean     | Optional | `false`     |
| `showAddress`                                     | boolean     | Optional | `false`     |
| `showBirthDate`                                   | boolean     | Optional | `false`     |
| `showClientAppear`                                | boolean     | Optional | `false`     |
| `showClientAppearOnSchedule`                      | boolean     | Optional | `false`     |
| `showClientBirthdayFilter`                        | boolean     | Optional | `false`     |
| `showClientContractNumber`                        | boolean     | Optional | `false`     |
| `showClientImage`                                 | boolean     | Optional | `false`     |
| `showClientPayment`                               | boolean     | Optional | `false`     |
| `showDefaulterBlockscreen`                        | boolean     | Optional | `false`     |
| `showDeliveryStatus`                              | boolean     | Optional | `false`     |
| `showDepartmentFilter`                            | boolean     | Optional | `false`     |
| `showDepartments`                                 | boolean     | Optional | `false`     |
| `showDepartmentsConfiguration`                    | boolean     | Optional | `false`     |
| `showEmail`                                       | boolean     | Optional | `false`     |
| `showExtraClientInfo`                             | boolean     | Optional | `false`     |
| `showFax`                                         | boolean     | Optional | `false`     |
| `showFiredWorkerAppointmentAlert`                 | boolean     | Optional | `false`     |
| `showFirstAvailableSlot`                          | boolean     | Optional | `false`     |
| `showGapWindow`                                   | boolean     | Optional | `false`     |
| `showGender`                                      | boolean     | Optional | `false`     |
| `showGenderInRecords`                             | boolean     | Optional | `false`     |
| `showGeneratableReportsScreen`                    | boolean     | Optional | `false`     |
| `showHouseNumber`                                 | boolean     | Optional | `false`     |
| `showIsraelCity`                                  | boolean     | Optional | `false`     |
| `showKupatHolim`                                  | boolean     | Optional | `false`     |
| `showLeadsScreen`                                 | boolean     | Optional | `false`     |
| `showManualChanges`                               | boolean     | Optional | `false`     |
| `showPassportId`                                  | boolean     | Optional | `false`     |
| `showRooms`                                       | boolean     | Optional | `false`     |
| `showSeasonTickets`                               | boolean     | Optional | `false`     |
| `showTaxonomyChildren`                            | boolean     | Optional | `false`     |
| `showTaxonomyLocalization`                        | boolean     | Optional | `false`     |
| `showTaxonomyVisitType`                           | boolean     | Optional | `false`     |
| `showTestRecord`                                  | boolean     | Optional | `false`     |
| `showUTM`                                         | boolean     | Optional | `false`     |
| `showWidgetColorTheme`                            | boolean     | Optional | `false`     |
| `showWorkerDescriptionInEvent`                    | boolean     | Optional | `false`     |
| `showWorkerExtraId`                               | boolean     | Optional | `false`     |
| `showWorkerStatus`                                | boolean     | Optional | `false`     |
| `skipAppointmentPriceUpdate`                      | boolean     | Optional | `false`     |
| `skipCancelIfClientNotAppear`                     | boolean     | Optional | `false`     |
| `skipServiceFiltering`                            | boolean     | Optional | `false`     |
| `splitFullNameXlsExport`                          | boolean     | Optional | `false`     |
| `stateLevelHolidays`                              | array       | Optional |             |
| `stateLevelHolidaysNotWorking`                    | boolean     | Optional | `false`     |
| `taxonomyChildrenMaxAge`                          | number      | Optional |             |
| `useAdditionalDurations`                          | boolean     | Optional | `false`     |
| `useAdjacentTaxonomies`                           | boolean     | Optional | `false`     |
| `useAdjacentTaxonomiesSlotSplitting`              | boolean     | Optional | `false`     |
| `useGtAppMethod`                                  | boolean     | Optional | `false`     |
| `workWeekEnd`                                     | number      | Optional | `6`         |
| `workWeekStart`                                   | number      | Optional | `0`         |

#### adjacentTaxonomiesTreshold

`adjacentTaxonomiesTreshold`

- is optional
- type: `number`
- default: `0`

##### adjacentTaxonomiesTreshold Type

`number`

#### allowHideServiceForBooking

`allowHideServiceForBooking`

- is optional
- type: `boolean`
- default: `false`

##### allowHideServiceForBooking Type

`boolean`

#### allowHideWorkersFromSchdeule

`allowHideWorkersFromSchdeule`

- is optional
- type: `boolean`
- default: `false`

##### allowHideWorkersFromSchdeule Type

`boolean`

#### allowSmsTranslit

`allowSmsTranslit`

- is optional
- type: `boolean`
- default: `false`

##### allowSmsTranslit Type

`boolean`

#### appointmentFutureMoving

`appointmentFutureMoving`

- is optional
- type: `boolean`
- default: `false`

##### appointmentFutureMoving Type

`boolean`

#### blockNotificationForAnyAvailableAdjacentService

`blockNotificationForAnyAvailableAdjacentService`

- is optional
- type: `boolean`
- default: `false`

##### blockNotificationForAnyAvailableAdjacentService Type

`boolean`

#### cabinetsEnabled

`cabinetsEnabled`

- is optional
- type: `boolean`
- default: `false`

##### cabinetsEnabled Type

`boolean`

#### checkClientOverlapping

`checkClientOverlapping`

- is optional
- type: `boolean`
- default: `false`

##### checkClientOverlapping Type

`boolean`

#### customOnlinePaymentConfirmationTemplate

`customOnlinePaymentConfirmationTemplate`

- is optional
- type: `string`
- default: `false`

##### customOnlinePaymentConfirmationTemplate Type

`string`

#### defaultGTScheduleDayView

`defaultGTScheduleDayView`

- is optional
- type: `boolean`
- default: `false`

##### defaultGTScheduleDayView Type

`boolean`

#### disableAppointmentClientInlineEditor

`disableAppointmentClientInlineEditor`

- is optional
- type: `boolean`
- default: `false`

##### disableAppointmentClientInlineEditor Type

`boolean`

#### editAppExtraId

`editAppExtraId`

- is optional
- type: `boolean`
- default: `false`

##### editAppExtraId Type

`boolean`

#### editTaxonomyChildren

`editTaxonomyChildren`

- is optional
- type: `boolean`
- default: `false`

##### editTaxonomyChildren Type

`boolean`

#### editTaxonomyVisitType

`editTaxonomyVisitType`

- is optional
- type: `boolean`
- default: `false`

##### editTaxonomyVisitType Type

`boolean`

#### enableBlackList

`enableBlackList`

- is optional
- type: `boolean`
- default: `false`

##### enableBlackList Type

`boolean`

#### enableCalculateShedule

`enableCalculateShedule`

- is optional
- type: `boolean`
- default: `false`

##### enableCalculateShedule Type

`boolean`

#### enableClientCard

`enableClientCard`

- is optional
- type: `boolean`
- default: `false`

##### enableClientCard Type

`boolean`

#### enableClientLanguage

`enableClientLanguage`

- is optional
- type: `boolean`
- default: `false`

##### enableClientLanguage Type

`boolean`

#### enableClientMedicalCardReport

`enableClientMedicalCardReport`

- is optional
- type: `boolean`
- default: `false`

##### enableClientMedicalCardReport Type

`boolean`

#### enableCustomOnlinePaymentConfirmation

`enableCustomOnlinePaymentConfirmation`

- is optional
- type: `boolean`
- default: `false`

##### enableCustomOnlinePaymentConfirmation Type

`boolean`

#### enableExtendedPhone

`enableExtendedPhone`

- is optional
- type: `boolean`
- default: `false`

##### enableExtendedPhone Type

`boolean`

#### enableExtendedRecordsClientStatistics

`enableExtendedRecordsClientStatistics`

- is optional
- type: `boolean`
- default: `false`

##### enableExtendedRecordsClientStatistics Type

`boolean`

#### enableMasterImportance

`enableMasterImportance`

- is optional
- type: `boolean`
- default: `false`

##### enableMasterImportance Type

`boolean`

#### enablePrintingReportRecordsScreen

`enablePrintingReportRecordsScreen`

- is optional
- type: `boolean`
- default: `false`

##### enablePrintingReportRecordsScreen Type

`boolean`

#### enableServiceTimeLimit

`enableServiceTimeLimit`

- is optional
- type: `boolean`
- default: `false`

##### enableServiceTimeLimit Type

`boolean`

#### enableSourceChoice

`enableSourceChoice`

- is optional
- type: `boolean`
- default: `true`

##### enableSourceChoice Type

`boolean`

#### enableTaxonomyChildrenAgeCheck

`enableTaxonomyChildrenAgeCheck`

- is optional
- type: `boolean`
- default: `false`

##### enableTaxonomyChildrenAgeCheck Type

`boolean`

#### exportToExcelRemovedClients

`exportToExcelRemovedClients`

- is optional
- type: `boolean`
- default: `false`

##### exportToExcelRemovedClients Type

`boolean`

#### feedBackMinRating

`feedBackMinRating`

- is optional
- type: `enum`
- default: `1`

The value of this property **must** be equal to one of the [known values below](#backofficeconfiguration-known-values).

##### feedBackMinRating Known Values

| Value | Description |
| ----- | ----------- |
| `1`   |             |
| `2`   |             |
| `3`   |             |
| `4`   |             |
| `5`   |             |

#### feedbackCustomerPortalMessage

`feedbackCustomerPortalMessage`

- is optional
- type: `string`

##### feedbackCustomerPortalMessage Type

`string`

#### feedbackCustomerPortalThankYouMessage

`feedbackCustomerPortalThankYouMessage`

- is optional
- type: `string`

##### feedbackCustomerPortalThankYouMessage Type

`string`

#### feedbackCustomerPortalTitle

`feedbackCustomerPortalTitle`

- is optional
- type: `string`

##### feedbackCustomerPortalTitle Type

`string`

#### finId

`finId`

- is optional
- type: `string`

##### finId Type

`string`

#### finName

`finName`

- is optional
- type: `string`

##### finName Type

`string`

#### hideCustomerPortalFooter

`hideCustomerPortalFooter`

- is optional
- type: `boolean`
- default: `false`

##### hideCustomerPortalFooter Type

`boolean`

#### highlightedResource

`highlightedResource`

- is optional
- type: `boolean`
- default: `false`

##### highlightedResource Type

`boolean`

#### manualExceptionSupport

`manualExceptionSupport`

- is optional
- type: `boolean`
- default: `false`

##### manualExceptionSupport Type

`boolean`

#### noInternetAlert

`noInternetAlert`

- is optional
- type: `boolean`
- default: `false`

##### noInternetAlert Type

`boolean`

#### pastTimeEdit

`pastTimeEdit`

- is optional
- type: `number`
- default: `1`

##### pastTimeEdit Type

`number`

#### paymentProvider

`paymentProvider`

- is optional
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#backofficeconfiguration-known-values).

##### paymentProvider Known Values

| Value             | Description |
| ----------------- | ----------- |
| `yandexMoney`     |             |
| `deltaProcessing` |             |
| `DISABLE`         |             |

#### readonlyResourceSchedule

`readonlyResourceSchedule`

- is optional
- type: `boolean`
- default: `false`

##### readonlyResourceSchedule Type

`boolean`

#### resourceTimetableType

`resourceTimetableType`

- is optional
- type: `enum`
- default: `"DEFAULT"`

The value of this property **must** be equal to one of the [known values below](#backofficeconfiguration-known-values).

##### resourceTimetableType Known Values

| Value     | Description |
| --------- | ----------- |
| `DEFAULT` |             |
| `EVENODD` |             |

#### revisionVersion

`revisionVersion`

- is optional
- type: `number`

##### revisionVersion Type

`number`

#### schduleWeekViewIsDefault

`schduleWeekViewIsDefault`

- is optional
- type: `boolean`
- default: `false`

##### schduleWeekViewIsDefault Type

`boolean`

#### scheduleDefaultWorkersLimit

`scheduleDefaultWorkersLimit`

- is optional
- type: `number`
- default: `25`

##### scheduleDefaultWorkersLimit Type

`number`

#### scheduleDefaultWorkersLimitDay

`scheduleDefaultWorkersLimitDay`

- is optional
- type: `number`

##### scheduleDefaultWorkersLimitDay Type

`number`, nullable

#### scheduleDefaultWorkersLimitWeek

`scheduleDefaultWorkersLimitWeek`

- is optional
- type: `number`

##### scheduleDefaultWorkersLimitWeek Type

`number`, nullable

#### scheduleWorkerHours

`scheduleWorkerHours`

- is optional
- type: `boolean`
- default: `false`

##### scheduleWorkerHours Type

`boolean`

#### schedulerWeekViewType

`schedulerWeekViewType`

- is optional
- type: `enum`
- default: `"week"`

The value of this property **must** be equal to one of the [known values below](#backofficeconfiguration-known-values).

##### schedulerWeekViewType Known Values

| Value      | Description |
| ---------- | ----------- |
| `week`     |             |
| `workWeek` |             |

#### showAdditionalFields

`showAdditionalFields`

- is optional
- type: `boolean`
- default: `false`

##### showAdditionalFields Type

`boolean`

#### showAddress

`showAddress`

- is optional
- type: `boolean`
- default: `false`

##### showAddress Type

`boolean`

#### showBirthDate

`showBirthDate`

- is optional
- type: `boolean`
- default: `false`

##### showBirthDate Type

`boolean`

#### showClientAppear

`showClientAppear`

- is optional
- type: `boolean`
- default: `false`

##### showClientAppear Type

`boolean`

#### showClientAppearOnSchedule

`showClientAppearOnSchedule`

- is optional
- type: `boolean`
- default: `false`

##### showClientAppearOnSchedule Type

`boolean`

#### showClientBirthdayFilter

`showClientBirthdayFilter`

- is optional
- type: `boolean`
- default: `false`

##### showClientBirthdayFilter Type

`boolean`

#### showClientContractNumber

`showClientContractNumber`

- is optional
- type: `boolean`
- default: `false`

##### showClientContractNumber Type

`boolean`

#### showClientImage

`showClientImage`

- is optional
- type: `boolean`
- default: `false`

##### showClientImage Type

`boolean`

#### showClientPayment

`showClientPayment`

- is optional
- type: `boolean`
- default: `false`

##### showClientPayment Type

`boolean`

#### showDefaulterBlockscreen

`showDefaulterBlockscreen`

- is optional
- type: `boolean`
- default: `false`

##### showDefaulterBlockscreen Type

`boolean`

#### showDeliveryStatus

`showDeliveryStatus`

- is optional
- type: `boolean`
- default: `false`

##### showDeliveryStatus Type

`boolean`

#### showDepartmentFilter

`showDepartmentFilter`

- is optional
- type: `boolean`
- default: `false`

##### showDepartmentFilter Type

`boolean`

#### showDepartments

`showDepartments`

- is optional
- type: `boolean`
- default: `false`

##### showDepartments Type

`boolean`

#### showDepartmentsConfiguration

`showDepartmentsConfiguration`

- is optional
- type: `boolean`
- default: `false`

##### showDepartmentsConfiguration Type

`boolean`

#### showEmail

`showEmail`

- is optional
- type: `boolean`
- default: `false`

##### showEmail Type

`boolean`

#### showExtraClientInfo

`showExtraClientInfo`

- is optional
- type: `boolean`
- default: `false`

##### showExtraClientInfo Type

`boolean`

#### showFax

`showFax`

- is optional
- type: `boolean`
- default: `false`

##### showFax Type

`boolean`

#### showFiredWorkerAppointmentAlert

`showFiredWorkerAppointmentAlert`

- is optional
- type: `boolean`
- default: `false`

##### showFiredWorkerAppointmentAlert Type

`boolean`

#### showFirstAvailableSlot

`showFirstAvailableSlot`

- is optional
- type: `boolean`
- default: `false`

##### showFirstAvailableSlot Type

`boolean`

#### showGapWindow

`showGapWindow`

- is optional
- type: `boolean`
- default: `false`

##### showGapWindow Type

`boolean`

#### showGender

`showGender`

- is optional
- type: `boolean`
- default: `false`

##### showGender Type

`boolean`

#### showGenderInRecords

`showGenderInRecords`

- is optional
- type: `boolean`
- default: `false`

##### showGenderInRecords Type

`boolean`

#### showGeneratableReportsScreen

`showGeneratableReportsScreen`

- is optional
- type: `boolean`
- default: `false`

##### showGeneratableReportsScreen Type

`boolean`

#### showHouseNumber

`showHouseNumber`

- is optional
- type: `boolean`
- default: `false`

##### showHouseNumber Type

`boolean`

#### showIsraelCity

`showIsraelCity`

- is optional
- type: `boolean`
- default: `false`

##### showIsraelCity Type

`boolean`

#### showKupatHolim

`showKupatHolim`

- is optional
- type: `boolean`
- default: `false`

##### showKupatHolim Type

`boolean`

#### showLeadsScreen

`showLeadsScreen`

- is optional
- type: `boolean`
- default: `false`

##### showLeadsScreen Type

`boolean`

#### showManualChanges

`showManualChanges`

- is optional
- type: `boolean`
- default: `false`

##### showManualChanges Type

`boolean`

#### showPassportId

`showPassportId`

- is optional
- type: `boolean`
- default: `false`

##### showPassportId Type

`boolean`

#### showRooms

`showRooms`

- is optional
- type: `boolean`
- default: `false`

##### showRooms Type

`boolean`

#### showSeasonTickets

`showSeasonTickets`

- is optional
- type: `boolean`
- default: `false`

##### showSeasonTickets Type

`boolean`

#### showTaxonomyChildren

`showTaxonomyChildren`

- is optional
- type: `boolean`
- default: `false`

##### showTaxonomyChildren Type

`boolean`

#### showTaxonomyLocalization

`showTaxonomyLocalization`

- is optional
- type: `boolean`
- default: `false`

##### showTaxonomyLocalization Type

`boolean`

#### showTaxonomyVisitType

`showTaxonomyVisitType`

- is optional
- type: `boolean`
- default: `false`

##### showTaxonomyVisitType Type

`boolean`

#### showTestRecord

`showTestRecord`

- is optional
- type: `boolean`
- default: `false`

##### showTestRecord Type

`boolean`

#### showUTM

`showUTM`

- is optional
- type: `boolean`
- default: `false`

##### showUTM Type

`boolean`

#### showWidgetColorTheme

`showWidgetColorTheme`

- is optional
- type: `boolean`
- default: `false`

##### showWidgetColorTheme Type

`boolean`

#### showWorkerDescriptionInEvent

`showWorkerDescriptionInEvent`

- is optional
- type: `boolean`
- default: `false`

##### showWorkerDescriptionInEvent Type

`boolean`

#### showWorkerExtraId

`showWorkerExtraId`

- is optional
- type: `boolean`
- default: `false`

##### showWorkerExtraId Type

`boolean`

#### showWorkerStatus

`showWorkerStatus`

- is optional
- type: `boolean`
- default: `false`

##### showWorkerStatus Type

`boolean`

#### skipAppointmentPriceUpdate

`skipAppointmentPriceUpdate`

- is optional
- type: `boolean`
- default: `false`

##### skipAppointmentPriceUpdate Type

`boolean`

#### skipCancelIfClientNotAppear

`skipCancelIfClientNotAppear`

- is optional
- type: `boolean`
- default: `false`

##### skipCancelIfClientNotAppear Type

`boolean`

#### skipServiceFiltering

`skipServiceFiltering`

- is optional
- type: `boolean`
- default: `false`

##### skipServiceFiltering Type

`boolean`

#### splitFullNameXlsExport

`splitFullNameXlsExport`

- is optional
- type: `boolean`
- default: `false`

##### splitFullNameXlsExport Type

`boolean`

#### stateLevelHolidays

`stateLevelHolidays`

- is optional
- type: `object[]`

##### stateLevelHolidays Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


#### stateLevelHolidaysNotWorking

`stateLevelHolidaysNotWorking`

- is optional
- type: `boolean`
- default: `false`

##### stateLevelHolidaysNotWorking Type

`boolean`

#### taxonomyChildrenMaxAge

`taxonomyChildrenMaxAge`

- is optional
- type: `number`

##### taxonomyChildrenMaxAge Type

`number`

#### useAdditionalDurations

`useAdditionalDurations`

- is optional
- type: `boolean`
- default: `false`

##### useAdditionalDurations Type

`boolean`

#### useAdjacentTaxonomies

`useAdjacentTaxonomies`

- is optional
- type: `boolean`
- default: `false`

##### useAdjacentTaxonomies Type

`boolean`

#### useAdjacentTaxonomiesSlotSplitting

`useAdjacentTaxonomiesSlotSplitting`

- is optional
- type: `boolean`
- default: `false`

##### useAdjacentTaxonomiesSlotSplitting Type

`boolean`

#### useGtAppMethod

`useGtAppMethod`

- is optional
- type: `boolean`
- default: `false`

##### useGtAppMethod Type

`boolean`

#### workWeekEnd

`workWeekEnd`

- is optional
- type: `number`
- default: `6`

##### workWeekEnd Type

`number`

#### workWeekStart

`workWeekStart`

- is optional
- type: `number`
- default: `0`

##### workWeekStart Type

`number`

## backofficeType

`backofficeType`

- is optional
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#backofficetype-known-values).

### backofficeType Known Values

| Value    | Description |
| -------- | ----------- |
| `COMMON` |             |
| `GT`     |             |
| `LL`     |             |
| `MB`     |             |
| `MU`     |             |

## backoffice_configuration

`backoffice_configuration`

- is optional
- type: `object`
- defined in this schema

### backoffice_configuration Type

`object` with following properties:

| Property                 | Type    | Required | Default     |
| ------------------------ | ------- | -------- | ----------- |
| `enableMasterImportance` | boolean | Optional | `false`     |
| `resourceTimetableType`  | string  | Optional | `"DEFAULT"` |

#### enableMasterImportance

`enableMasterImportance`

- is optional
- type: `boolean`
- default: `false`

##### enableMasterImportance Type

`boolean`

#### resourceTimetableType

`resourceTimetableType`

- is optional
- type: `enum`
- default: `"DEFAULT"`

The value of this property **must** be equal to one of the
[known values below](#backoffice_configuration-known-values).

##### resourceTimetableType Known Values

| Value     | Description |
| --------- | ----------- |
| `DEFAULT` |             |
| `EVENODD` |             |

## cabinets

`cabinets`

- is optional
- type: reference
- defined in this schema

### cabinets Type

Array type: reference

All items must be of the type:

- []() – `#/definitions/Cabinet`

## cabinetsEnabled

`cabinetsEnabled`

- is optional
- type: `boolean`
- defined in this schema

### cabinetsEnabled Type

`boolean`

## callback_widget_configuration

`callback_widget_configuration`

- is optional
- type: `object`
- defined in this schema

### callback_widget_configuration Type

`object` with following properties:

| Property | Type   | Required |
| -------- | ------ | -------- |
| `title1` | string | Optional |
| `title2` | string | Optional |

#### title1

`title1`

- is optional
- type: `string`

##### title1 Type

`string`

#### title2

`title2`

- is optional
- type: `string`

##### title2 Type

`string`

## consumables

`consumables`

- is optional
- type: reference
- defined in this schema

### consumables Type

Array type: reference

All items must be of the type:

- []() – `#/definitions/Consumable`

## created_on

`created_on`

- is optional
- type: `string`
- defined in this schema

### created_on Type

`string`

- format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))

## defaultFilteredWorkers

`defaultFilteredWorkers`

- is optional
- type: `string[]`
- defined in this schema

### defaultFilteredWorkers Type

Array type: `string[]`

All items must be of the type: `string`

## departments

`departments`

- is optional
- type: reference
- defined in this schema

### departments Type

Array type: reference

All items must be of the type:

- []() – `#/definitions/Department`

## designs

`designs`

- is optional
- type: `object[]`
- defined in this schema

### designs Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## extraID

`extraID`

- is **required**
- type: `string`
- defined in this schema

### extraID Type

`string`

## flatTaxonomyDisplay

`flatTaxonomyDisplay`

- is optional
- type: `boolean`
- defined in this schema

### flatTaxonomyDisplay Type

`boolean`

## general_info

`general_info`

- is **required**
- type: reference
- defined in this schema

### general_info Type

- []() – `./partials/businessInfo.schema.json`

## group

`group`

- is optional
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#group-known-values).

### group Known Values

| Value       | Description |
| ----------- | ----------- |
| `GENERAL`   |             |
| `FRENCH`    |             |
| `HUNGARIAN` |             |
| `LATVIAN`   |             |

## id

`id`

- is **required**
- type: `string`
- defined in this schema

### id Type

`string`

## integration_data

`integration_data`

- is optional
- type: `object`
- defined in this schema

### integration_data Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## mini_widget_configuration

`mini_widget_configuration`

- is **required**
- type: `object`
- defined in this schema

### mini_widget_configuration Type

`object` with following properties:

| Property | Type   | Required |
| -------- | ------ | -------- |
| `fields` | array  | Optional |
| `title1` | string | Optional |
| `title2` | string | Optional |

#### fields

`fields`

- is optional
- type: `enum[]`

##### fields Type

Array type: `enum[]`

All items must be of the type: `string`

#### title1

`title1`

- is optional
- type: `string`

##### title1 Type

`string`

#### title2

`title2`

- is optional
- type: `string`

##### title2 Type

`string`

## mobileData

`mobileData`

- is optional
- type: `array`
- defined in this schema

### mobileData Type

Array type: `array`

## notifications

`notifications`

- is optional
- type: `array`
- defined in this schema

### notifications Type

Array type: `array`

## resources

`resources`

- is optional
- type: reference
- defined in this schema

### resources Type

Array type: reference

All items must be of the type:

- []() – `./resource.schema.json`

## stateLevelHolidaysNotWorking

`stateLevelHolidaysNotWorking`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### stateLevelHolidaysNotWorking Type

`boolean`

## taxonomies

`taxonomies`

- is optional
- type: reference
- defined in this schema

### taxonomies Type

Array type: reference

All items must be of the type:

- []() – `#/definitions/BusinessTaxonomy`

## taxonomiesComplex

`taxonomiesComplex`

- is optional
- type: `object[]`
- defined in this schema

### taxonomiesComplex Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property     | Type   | Required |
| ------------ | ------ | -------- |
| `name`       | string | Optional |
| `taxonomies` | array  | Optional |

#### name

`name`

- is optional
- type: `string`

##### name Type

`string`

#### taxonomies

`taxonomies`

- is optional
- type: `string[]`

##### taxonomies Type

Array type: `string[]`

All items must be of the type: `string`

## taxonomy_tree_capacity

`taxonomy_tree_capacity`

- is optional
- type: `object[]`
- defined in this schema

### taxonomy_tree_capacity Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## top_services

`top_services`

- is optional
- type: `object`
- defined in this schema

### top_services Type

`object` with following properties:

| Property   | Type   | Required |
| ---------- | ------ | -------- |
| `services` | array  | Optional |
| `status`   | string | Optional |

#### services

`services`

- is optional
- type: `array`

##### services Type

Array type: `array`

#### status

`status`

- is optional
- type: `string`

##### status Type

`string`

## vertical

`vertical`

- is optional
- type: `string`
- defined in this schema

### vertical Type

`string`

## widget_configuration

### WidgetConfiguration

`widget_configuration`

- is **required**
- type: `object`
- defined in this schema

### widget_configuration Type

`object` with following properties:

| Property                                 | Type    | Required | Default         |
| ---------------------------------------- | ------- | -------- | --------------- |
| `additionalName`                         | string  | Optional |                 |
| `alignmentTaxonomySlots`                 | boolean | Optional | `false`         |
| `allowAutoSelect`                        | boolean | Optional | `true`          |
| `allowBookVisitor`                       | boolean | Optional | `false`         |
| `allowSkipTimeCheck`                     | boolean | Optional | `false`         |
| `appointment_confirmation_text`          | string  | Optional |                 |
| `appointment_confirmation_title`         | string  | Optional |                 |
| `askClientBirthday`                      | boolean | Optional | `false`         |
| `askClientGender`                        | boolean | Optional | `false`         |
| `bookableDateRanges`                     | object  | Optional |                 |
| `bookableMonthsCount`                    | number  | Optional | `-1`            |
| `calendarMode`                           | boolean | Optional | `false`         |
| `calendarModeHideTime`                   | boolean | Optional | `false`         |
| `clientBlockingSettings`                 | object  | Optional |                 |
| `clientCommentTitle`                     | string  | Optional |                 |
| `cracServer`                             | string  | Optional |                 |
| `cracSlotSize`                           | number  | Optional | `5`             |
| `crunchv2`                               | boolean | Optional | `false`         |
| `dayOffLabel`                            | string  | Optional |                 |
| `dayUnavailableLabel`                    | string  | Optional |                 |
| `daysForward`                            | number  | Optional | `30`            |
| `defaultServiceImgUrl`                   | string  | Optional |                 |
| `defaultWorkerImgUrl`                    | string  | Optional | `""`            |
| `denySameTimeRecords`                    | boolean | Optional | `false`         |
| `disableMobileWidget`                    | boolean | Optional | `false`         |
| `disableWidget`                          | boolean | Optional | `false`         |
| `disableWidgetMessage`                   | string  | Optional |                 |
| `disabledTaxonomiesText`                 | string  | Optional |                 |
| `discountedPriceRounding`                | object  | Optional |                 |
| `displaySlotSize`                        | number  | Optional |                 |
| `dontRequireEmail`                       | boolean | Optional | `false`         |
| `emailIsMandatory`                       | boolean | Optional | `false`         |
| `enableOverrideFooter`                   | boolean | Optional | `false`         |
| `enableWarningContactData`               | boolean | Optional | `false`         |
| `extraVisitors`                          | boolean | Optional | `false`         |
| `filterNonInsuranceSchedule`             | boolean | Optional | `true`          |
| `hideAnyWorkerBooking`                   | boolean | Optional | `false`         |
| `hideCallButton`                         | boolean | Optional | `false`         |
| `hideEmptyDays`                          | boolean | Optional | `false`         |
| `hideGBookingLogo`                       | boolean | Optional | `false`         |
| `hideGraySlots`                          | boolean | Optional | `false`         |
| `hideNewAppointmentButton`               | boolean | Optional | `false`         |
| `hidePrices`                             | boolean | Optional | `false`         |
| `hideSocialNetworksAuthentication`       | boolean | Optional | `false`         |
| `insuranceClientSupportPhone`            | array   | Optional |                 |
| `maxServiceBooking`                      | number  | Optional | `1`             |
| `maxTimeslotBooking`                     | number  | Optional | `1`             |
| `middleNameSupport`                      | boolean | Optional |                 |
| `mostFreeEnable`                         | boolean | Optional | `false`         |
| `multiServiceBooking`                    | boolean | Optional | `false`         |
| `multiTimeslotBooking`                   | boolean | Optional | `false`         |
| `multiTimeslotBookingAllDays`            | boolean | Optional | `false`         |
| `newWidgetTheme`                         | object  | Optional |                 |
| `noDefaultImages`                        | boolean | Optional | `false`         |
| `overrideFooter`                         | string  | Optional | `""`            |
| `payment`                                | string  | Optional | `"WITHOUT"`     |
| `paymentProvider`                        | string  | Optional | `"yandexMoney"` |
| `requireAgreement`                       | boolean | Optional | `false`         |
| `requireAgreementLink`                   | string  | Optional | `""`            |
| `revisionVersion`                        | number  | Optional |                 |
| `shortLink`                              | string  | Optional |                 |
| `showAllWorkers`                         | boolean | Optional | `false`         |
| `showClientAddress`                      | boolean | Optional | `false`         |
| `showClientComment`                      | boolean | Optional | `false`         |
| `showDisabledTaxonomies`                 | boolean | Optional | `false`         |
| `showDrinkQuestion`                      | boolean | Optional | `false`         |
| `showMap`                                | boolean | Optional | `false`         |
| `showStartText`                          | boolean | Optional | `false`         |
| `showSurnameFirst`                       | boolean | Optional | `false`         |
| `showTalkQuestion`                       | boolean | Optional | `false`         |
| `showTaxonomyConfirmationAlert`          | boolean | Optional | `false`         |
| `skipAuthentication`                     | boolean | Optional | `false`         |
| `skipDaysForward`                        | boolean | Optional | `false`         |
| `skipMobileMap`                          | boolean | Optional | `false`         |
| `skipServiceDurationAlignment`           | boolean | Optional | `false`         |
| `skipServiceSelection`                   | boolean | Optional | `false`         |
| `skipTimeSelection`                      | boolean | Optional | `false`         |
| `skipTimeSelectionServiceIDs`            | array   | Optional |                 |
| `skipWorkerSelectedServiceIDs`           | array   | Optional |                 |
| `skipWorkerServicesSelection`            | boolean | Optional | `false`         |
| `socialNetworkImage`                     | string  | Optional | `false`         |
| `socialSharing`                          | object  | Optional |                 |
| `sortByMostFree`                         | boolean | Optional | `false`         |
| `sortWorkersByWorkload`                  | boolean | Optional | `false`         |
| `splitInsuranceClient`                   | boolean | Optional | `false`         |
| `splitName`                              | boolean | Optional | `false`         |
| `startTextButton`                        | string  | Optional |                 |
| `startTextMessage`                       | string  | Optional |                 |
| `strictSlotCutting`                      | boolean | Optional |                 |
| `tentativeTTL`                           | number  | Optional |                 |
| `theme`                                  | string  | Optional | `"theme1"`      |
| `useAppointmentReminder`                 | boolean | Optional | `false`         |
| `useBusinessScheduleForUnavailableLabel` | boolean | Optional | `false`         |
| `useCRAC`                                | boolean | Optional | `false`         |
| `useClustersMap`                         | boolean | Optional | `false`         |
| `useCoupon`                              | boolean | Optional | `false`         |
| `useDefaultServiceImg`                   | boolean | Optional | `false`         |
| `useDefaultWorkerImg`                    | boolean | Optional | `false`         |
| `useDirectScheduleRead`                  | string  | Optional | `"NONE"`        |
| `useInsuranceGuaranteeLetter`            | boolean | Optional | `false`         |
| `useInsuranceSelect`                     | boolean | Optional | `false`         |
| `useMedAuth`                             | boolean | Optional | `false`         |
| `useMiddleName`                          | boolean | Optional | `false`         |
| `useNewReserveAPI`                       | boolean | Optional | `false`         |
| `useResourcePageLoading`                 | boolean | Optional | `false`         |
| `useSortByName`                          | boolean | Optional | `false`         |
| `warningContactDataText`                 | string  | Optional | `""`            |
| `widgetUseCRAC`                          | boolean | Optional | `false`         |
| `withoutWorkers`                         | boolean | Optional | `false`         |
| `workerNameReverse`                      | boolean | Optional | `false`         |
| `worker_unavailability_text`             | string  | Optional |                 |

#### additionalName

`additionalName`

- is optional
- type: `string`

##### additionalName Type

`string`

#### alignmentTaxonomySlots

`alignmentTaxonomySlots`

- is optional
- type: `boolean`
- default: `false`

##### alignmentTaxonomySlots Type

`boolean`

#### allowAutoSelect

`allowAutoSelect`

- is optional
- type: `boolean`
- default: `true`

##### allowAutoSelect Type

`boolean`

#### allowBookVisitor

`allowBookVisitor`

- is optional
- type: `boolean`
- default: `false`

##### allowBookVisitor Type

`boolean`

#### allowSkipTimeCheck

`allowSkipTimeCheck`

- is optional
- type: `boolean`
- default: `false`

##### allowSkipTimeCheck Type

`boolean`

#### appointment_confirmation_text

`appointment_confirmation_text`

- is optional
- type: `string`

##### appointment_confirmation_text Type

`string`

#### appointment_confirmation_title

`appointment_confirmation_title`

- is optional
- type: `string`

##### appointment_confirmation_title Type

`string`

#### askClientBirthday

`askClientBirthday`

- is optional
- type: `boolean`
- default: `false`

##### askClientBirthday Type

`boolean`

#### askClientGender

`askClientGender`

- is optional
- type: `boolean`
- default: `false`

##### askClientGender Type

`boolean`

#### bookableDateRanges

`bookableDateRanges`

- is optional
- type: `object`

##### bookableDateRanges Type

`object` with following properties:

| Property  | Type    | Required | Default |
| --------- | ------- | -------- | ------- |
| `enabled` | boolean | Optional | `false` |
| `end`     |         | Optional |         |
| `start`   |         | Optional |         |

#### enabled

`enabled`

- is optional
- type: `boolean`
- default: `false`

##### enabled Type

`boolean`

#### end

`end`

- is optional
- type: complex

##### end Type

**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

`string`

- format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))

#### Condition 2

#### start

`start`

- is optional
- type: complex

##### start Type

**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

`string`

- format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))

#### Condition 2

#### bookableMonthsCount

`bookableMonthsCount`

- is optional
- type: `number`
- default: `-1`

##### bookableMonthsCount Type

`number`

#### calendarMode

`calendarMode`

- is optional
- type: `boolean`
- default: `false`

##### calendarMode Type

`boolean`

#### calendarModeHideTime

`calendarModeHideTime`

- is optional
- type: `boolean`
- default: `false`

##### calendarModeHideTime Type

`boolean`

#### clientBlockingSettings

`clientBlockingSettings`

- is optional
- type: `object`

##### clientBlockingSettings Type

`object` with following properties:

| Property                     | Type    | Required | Default |
| ---------------------------- | ------- | -------- | ------- |
| `appointmentClientBlock`     | boolean | Optional | `false` |
| `appointmentClientBlockDays` | number  | Optional | `30`    |
| `appointmentClientBlockText` | string  | Optional |         |
| `blockIfFutureRecordExists`  | boolean | Optional | `false` |
| `blockRepeatedRecordsCount`  | number  | Optional | `1`     |
| `blockRepeatedRecordsRange`  | number  | Optional | `0`     |
| `blockRepeatedRecordsText`   | string  | Optional |         |

#### appointmentClientBlock

`appointmentClientBlock`

- is optional
- type: `boolean`
- default: `false`

##### appointmentClientBlock Type

`boolean`

#### appointmentClientBlockDays

`appointmentClientBlockDays`

- is optional
- type: `number`
- default: `30`

##### appointmentClientBlockDays Type

`number`

#### appointmentClientBlockText

`appointmentClientBlockText`

- is optional
- type: `string`

##### appointmentClientBlockText Type

`string`

#### blockIfFutureRecordExists

`blockIfFutureRecordExists`

- is optional
- type: `boolean`
- default: `false`

##### blockIfFutureRecordExists Type

`boolean`

#### blockRepeatedRecordsCount

`blockRepeatedRecordsCount`

- is optional
- type: `number`
- default: `1`

##### blockRepeatedRecordsCount Type

`number`

#### blockRepeatedRecordsRange

`blockRepeatedRecordsRange`

- is optional
- type: `number`
- default: `0`

##### blockRepeatedRecordsRange Type

`number`

#### blockRepeatedRecordsText

`blockRepeatedRecordsText`

- is optional
- type: `string`

##### blockRepeatedRecordsText Type

`string`

#### clientCommentTitle

`clientCommentTitle`

- is optional
- type: `string`

##### clientCommentTitle Type

`string`

#### cracServer

`cracServer`

- is optional
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#widget_configuration-known-values).

##### cracServer Known Values

| Value        | Description |
| ------------ | ----------- |
| `CRAC`       |             |
| `CRAC_PROD3` |             |

#### cracSlotSize

`cracSlotSize`

- is optional
- type: `enum`
- default: `5`

The value of this property **must** be equal to one of the [known values below](#widget_configuration-known-values).

##### cracSlotSize Known Values

| Value | Description |
| ----- | ----------- |
| `1`   |             |
| `5`   |             |

#### crunchv2

`crunchv2`

- is optional
- type: `boolean`
- default: `false`

##### crunchv2 Type

`boolean`

#### dayOffLabel

`dayOffLabel`

- is optional
- type: `string`

##### dayOffLabel Type

`string`

#### dayUnavailableLabel

`dayUnavailableLabel`

- is optional
- type: `string`

##### dayUnavailableLabel Type

`string`

#### daysForward

`daysForward`

- is optional
- type: `number`
- default: `30`

##### daysForward Type

`number`

#### defaultServiceImgUrl

`defaultServiceImgUrl`

- is optional
- type: `string`

##### defaultServiceImgUrl Type

`string`

#### defaultWorkerImgUrl

`defaultWorkerImgUrl`

- is optional
- type: `string`
- default: `""`

##### defaultWorkerImgUrl Type

`string`

#### denySameTimeRecords

`denySameTimeRecords`

- is optional
- type: `boolean`
- default: `false`

##### denySameTimeRecords Type

`boolean`

#### disableMobileWidget

`disableMobileWidget`

- is optional
- type: `boolean`
- default: `false`

##### disableMobileWidget Type

`boolean`

#### disableWidget

`disableWidget`

- is optional
- type: `boolean`
- default: `false`

##### disableWidget Type

`boolean`

#### disableWidgetMessage

`disableWidgetMessage`

- is optional
- type: `string`

##### disableWidgetMessage Type

`string`

#### disabledTaxonomiesText

`disabledTaxonomiesText`

- is optional
- type: `string`

##### disabledTaxonomiesText Type

`string`

#### discountedPriceRounding

`discountedPriceRounding`

- is optional
- type: `object`

##### discountedPriceRounding Type

`object` with following properties:

| Property | Type   | Required | Default |
| -------- | ------ | -------- | ------- |
| `rule`   | string | Optional |         |
| `value`  | number | Optional | `-1`    |

#### rule

`rule`

- is optional
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#widget_configuration-known-values).

##### rule Known Values

| Value             | Description |
| ----------------- | ----------- |
| `TWO_DECIMALS`    |             |
| `NEAREST_INTEGER` |             |
| `CUSTOM`          |             |

#### value

`value`

- is optional
- type: `number`
- default: `-1`

##### value Type

`number`

#### displaySlotSize

`displaySlotSize`

- is optional
- type: `number`

##### displaySlotSize Type

`number`

#### dontRequireEmail

`dontRequireEmail`

- is optional
- type: `boolean`
- default: `false`

##### dontRequireEmail Type

`boolean`

#### emailIsMandatory

`emailIsMandatory`

- is optional
- type: `boolean`
- default: `false`

##### emailIsMandatory Type

`boolean`

#### enableOverrideFooter

`enableOverrideFooter`

- is optional
- type: `boolean`
- default: `false`

##### enableOverrideFooter Type

`boolean`

#### enableWarningContactData

`enableWarningContactData`

- is optional
- type: `boolean`
- default: `false`

##### enableWarningContactData Type

`boolean`

#### extraVisitors

`extraVisitors`

- is optional
- type: `boolean`
- default: `false`

##### extraVisitors Type

`boolean`

#### filterNonInsuranceSchedule

`filterNonInsuranceSchedule`

- is optional
- type: `boolean`
- default: `true`

##### filterNonInsuranceSchedule Type

`boolean`

#### hideAnyWorkerBooking

`hideAnyWorkerBooking`

- is optional
- type: `boolean`
- default: `false`

##### hideAnyWorkerBooking Type

`boolean`

#### hideCallButton

`hideCallButton`

- is optional
- type: `boolean`
- default: `false`

##### hideCallButton Type

`boolean`

#### hideEmptyDays

`hideEmptyDays`

- is optional
- type: `boolean`
- default: `false`

##### hideEmptyDays Type

`boolean`

#### hideGBookingLogo

`hideGBookingLogo`

- is optional
- type: `boolean`
- default: `false`

##### hideGBookingLogo Type

`boolean`

#### hideGraySlots

`hideGraySlots`

- is optional
- type: `boolean`
- default: `false`

##### hideGraySlots Type

`boolean`

#### hideNewAppointmentButton

`hideNewAppointmentButton`

- is optional
- type: `boolean`
- default: `false`

##### hideNewAppointmentButton Type

`boolean`

#### hidePrices

`hidePrices`

- is optional
- type: `boolean`
- default: `false`

##### hidePrices Type

`boolean`

#### hideSocialNetworksAuthentication

`hideSocialNetworksAuthentication`

- is optional
- type: `boolean`
- default: `false`

##### hideSocialNetworksAuthentication Type

`boolean`

#### insuranceClientSupportPhone

`insuranceClientSupportPhone`

- is optional
- type: reference

##### insuranceClientSupportPhone Type

Array type: reference

All items must be of the type:

- []() – `./phone.schema.json`

#### maxServiceBooking

`maxServiceBooking`

- is optional
- type: `number`
- default: `1`

##### maxServiceBooking Type

`number`

#### maxTimeslotBooking

`maxTimeslotBooking`

- is optional
- type: `number`
- default: `1`

##### maxTimeslotBooking Type

`number`

#### middleNameSupport

`middleNameSupport`

- is optional
- type: `boolean`

##### middleNameSupport Type

`boolean`

#### mostFreeEnable

`mostFreeEnable`

- is optional
- type: `boolean`
- default: `false`

##### mostFreeEnable Type

`boolean`

#### multiServiceBooking

`multiServiceBooking`

- is optional
- type: `boolean`
- default: `false`

##### multiServiceBooking Type

`boolean`

#### multiTimeslotBooking

`multiTimeslotBooking`

- is optional
- type: `boolean`
- default: `false`

##### multiTimeslotBooking Type

`boolean`

#### multiTimeslotBookingAllDays

`multiTimeslotBookingAllDays`

- is optional
- type: `boolean`
- default: `false`

##### multiTimeslotBookingAllDays Type

`boolean`

#### newWidgetTheme

`newWidgetTheme`

- is optional
- type: `object`

##### newWidgetTheme Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


#### noDefaultImages

`noDefaultImages`

- is optional
- type: `boolean`
- default: `false`

##### noDefaultImages Type

`boolean`

#### overrideFooter

`overrideFooter`

- is optional
- type: `string`
- default: `""`

##### overrideFooter Type

`string`

#### payment

`payment`

- is optional
- type: `enum`
- default: `"WITHOUT"`

The value of this property **must** be equal to one of the [known values below](#widget_configuration-known-values).

##### payment Known Values

| Value      | Description |
| ---------- | ----------- |
| `WITHOUT`  |             |
| `OPTIONAL` |             |
| `REQUIRED` |             |

#### paymentProvider

`paymentProvider`

- is optional
- type: `enum`
- default: `"yandexMoney"`

The value of this property **must** be equal to one of the [known values below](#widget_configuration-known-values).

##### paymentProvider Known Values

| Value             | Description |
| ----------------- | ----------- |
| `yandexMoney`     |             |
| `deltaProcessing` |             |
| `DISABLE`         |             |

#### requireAgreement

`requireAgreement`

- is optional
- type: `boolean`
- default: `false`

##### requireAgreement Type

`boolean`

#### requireAgreementLink

`requireAgreementLink`

- is optional
- type: `string`
- default: `""`

##### requireAgreementLink Type

`string`

#### revisionVersion

`revisionVersion`

- is optional
- type: `number`

##### revisionVersion Type

`number`

#### shortLink

`shortLink`

- is optional
- type: `string`

##### shortLink Type

`string`

#### showAllWorkers

`showAllWorkers`

- is optional
- type: `boolean`
- default: `false`

##### showAllWorkers Type

`boolean`

#### showClientAddress

`showClientAddress`

- is optional
- type: `boolean`
- default: `false`

##### showClientAddress Type

`boolean`

#### showClientComment

`showClientComment`

- is optional
- type: `boolean`
- default: `false`

##### showClientComment Type

`boolean`

#### showDisabledTaxonomies

`showDisabledTaxonomies`

- is optional
- type: `boolean`
- default: `false`

##### showDisabledTaxonomies Type

`boolean`

#### showDrinkQuestion

`showDrinkQuestion`

- is optional
- type: `boolean`
- default: `false`

##### showDrinkQuestion Type

`boolean`

#### showMap

`showMap`

- is optional
- type: `boolean`
- default: `false`

##### showMap Type

`boolean`

#### showStartText

`showStartText`

- is optional
- type: `boolean`
- default: `false`

##### showStartText Type

`boolean`

#### showSurnameFirst

`showSurnameFirst`

- is optional
- type: `boolean`
- default: `false`

##### showSurnameFirst Type

`boolean`

#### showTalkQuestion

`showTalkQuestion`

- is optional
- type: `boolean`
- default: `false`

##### showTalkQuestion Type

`boolean`

#### showTaxonomyConfirmationAlert

`showTaxonomyConfirmationAlert`

- is optional
- type: `boolean`
- default: `false`

##### showTaxonomyConfirmationAlert Type

`boolean`

#### skipAuthentication

`skipAuthentication`

- is optional
- type: `boolean`
- default: `false`

##### skipAuthentication Type

`boolean`

#### skipDaysForward

`skipDaysForward`

- is optional
- type: `boolean`
- default: `false`

##### skipDaysForward Type

`boolean`

#### skipMobileMap

`skipMobileMap`

- is optional
- type: `boolean`
- default: `false`

##### skipMobileMap Type

`boolean`

#### skipServiceDurationAlignment

`skipServiceDurationAlignment`

- is optional
- type: `boolean`
- default: `false`

##### skipServiceDurationAlignment Type

`boolean`

#### skipServiceSelection

`skipServiceSelection`

- is optional
- type: `boolean`
- default: `false`

##### skipServiceSelection Type

`boolean`

#### skipTimeSelection

`skipTimeSelection`

- is optional
- type: `boolean`
- default: `false`

##### skipTimeSelection Type

`boolean`

#### skipTimeSelectionServiceIDs

`skipTimeSelectionServiceIDs`

- is optional
- type: `string[]`

##### skipTimeSelectionServiceIDs Type

Array type: `string[]`

All items must be of the type: `string`

#### skipWorkerSelectedServiceIDs

`skipWorkerSelectedServiceIDs`

- is optional
- type: `string[]`

##### skipWorkerSelectedServiceIDs Type

Array type: `string[]`

All items must be of the type: `string`

#### skipWorkerServicesSelection

`skipWorkerServicesSelection`

- is optional
- type: `boolean`
- default: `false`

##### skipWorkerServicesSelection Type

`boolean`

#### socialNetworkImage

`socialNetworkImage`

- is optional
- type: `string`
- default: `false`

##### socialNetworkImage Type

`string`

#### socialSharing

`socialSharing`

- is optional
- type: `object`

##### socialSharing Type

`object` with following properties:

| Property          | Type        | Required | Default |
| ----------------- | ----------- | -------- | ------- |
| `active`          | boolean     | Optional | `false` |
| `discountAmount`  | number,null | Optional |         |
| `discountEnabled` | boolean     | Optional |         |
| `discountType`    | string      | Optional |         |
| `text`            | string,null | Optional |         |
| `widgetText`      | string,null | Optional |         |

#### active

`active`

- is optional
- type: `boolean`
- default: `false`

##### active Type

`boolean`

#### discountAmount

`discountAmount`

- is optional
- type: `number`

##### discountAmount Type

`number`, nullable

#### discountEnabled

`discountEnabled`

- is optional
- type: `boolean`

##### discountEnabled Type

`boolean`

#### discountType

`discountType`

- is optional
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#widget_configuration-known-values).

##### discountType Known Values

| Value     | Description |
| --------- | ----------- |
| `PERCENT` |             |

#### text

`text`

- is optional
- type: `string`

##### text Type

`string`, nullable

#### widgetText

`widgetText`

- is optional
- type: `string`

##### widgetText Type

`string`, nullable

#### sortByMostFree

`sortByMostFree`

- is optional
- type: `boolean`
- default: `false`

##### sortByMostFree Type

`boolean`

#### sortWorkersByWorkload

`sortWorkersByWorkload`

- is optional
- type: `boolean`
- default: `false`

##### sortWorkersByWorkload Type

`boolean`

#### splitInsuranceClient

`splitInsuranceClient`

- is optional
- type: `boolean`
- default: `false`

##### splitInsuranceClient Type

`boolean`

#### splitName

`splitName`

- is optional
- type: `boolean`
- default: `false`

##### splitName Type

`boolean`

#### startTextButton

`startTextButton`

- is optional
- type: `string`

##### startTextButton Type

`string`

#### startTextMessage

`startTextMessage`

- is optional
- type: `string`

##### startTextMessage Type

`string`

#### strictSlotCutting

`strictSlotCutting`

- is optional
- type: `boolean`

##### strictSlotCutting Type

`boolean`

#### tentativeTTL

`tentativeTTL`

- is optional
- type: `number`

##### tentativeTTL Type

`number`

#### theme

`theme`

- is optional
- type: `string`
- default: `"theme1"`

##### theme Type

`string`

#### useAppointmentReminder

`useAppointmentReminder`

- is optional
- type: `boolean`
- default: `false`

##### useAppointmentReminder Type

`boolean`

#### useBusinessScheduleForUnavailableLabel

`useBusinessScheduleForUnavailableLabel`

- is optional
- type: `boolean`
- default: `false`

##### useBusinessScheduleForUnavailableLabel Type

`boolean`

#### useCRAC

`useCRAC`

- is optional
- type: `boolean`
- default: `false`

##### useCRAC Type

`boolean`

#### useClustersMap

`useClustersMap`

- is optional
- type: `boolean`
- default: `false`

##### useClustersMap Type

`boolean`

#### useCoupon

`useCoupon`

- is optional
- type: `boolean`
- default: `false`

##### useCoupon Type

`boolean`

#### useDefaultServiceImg

`useDefaultServiceImg`

- is optional
- type: `boolean`
- default: `false`

##### useDefaultServiceImg Type

`boolean`

#### useDefaultWorkerImg

`useDefaultWorkerImg`

- is optional
- type: `boolean`
- default: `false`

##### useDefaultWorkerImg Type

`boolean`

#### useDirectScheduleRead

`useDirectScheduleRead`

- is optional
- type: `enum`
- default: `"NONE"`

The value of this property **must** be equal to one of the [known values below](#widget_configuration-known-values).

##### useDirectScheduleRead Known Values

| Value           | Description |
| --------------- | ----------- |
| `ALL`           |             |
| `AUTHENTICATED` |             |
| `GUEST`         |             |
| `NONE`          |             |

#### useInsuranceGuaranteeLetter

`useInsuranceGuaranteeLetter`

- is optional
- type: `boolean`
- default: `false`

##### useInsuranceGuaranteeLetter Type

`boolean`

#### useInsuranceSelect

`useInsuranceSelect`

- is optional
- type: `boolean`
- default: `false`

##### useInsuranceSelect Type

`boolean`

#### useMedAuth

`useMedAuth`

- is optional
- type: `boolean`
- default: `false`

##### useMedAuth Type

`boolean`

#### useMiddleName

`useMiddleName`

- is optional
- type: `boolean`
- default: `false`

##### useMiddleName Type

`boolean`

#### useNewReserveAPI

`useNewReserveAPI`

- is optional
- type: `boolean`
- default: `false`

##### useNewReserveAPI Type

`boolean`

#### useResourcePageLoading

`useResourcePageLoading`

- is optional
- type: `boolean`
- default: `false`

##### useResourcePageLoading Type

`boolean`

#### useSortByName

`useSortByName`

- is optional
- type: `boolean`
- default: `false`

##### useSortByName Type

`boolean`

#### warningContactDataText

`warningContactDataText`

- is optional
- type: `string`
- default: `""`

##### warningContactDataText Type

`string`

#### widgetUseCRAC

`widgetUseCRAC`

- is optional
- type: `boolean`
- default: `false`

##### widgetUseCRAC Type

`boolean`

#### withoutWorkers

`withoutWorkers`

- is optional
- type: `boolean`
- default: `false`

##### withoutWorkers Type

`boolean`

#### workerNameReverse

`workerNameReverse`

- is optional
- type: `boolean`
- default: `false`

##### workerNameReverse Type

`boolean`

#### worker_unavailability_text

`worker_unavailability_text`

- is optional
- type: `string`

##### worker_unavailability_text Type

`string`

## yandexFeedType

`yandexFeedType`

- is optional
- type: `string`
- defined in this schema

### yandexFeedType Type

`string`
