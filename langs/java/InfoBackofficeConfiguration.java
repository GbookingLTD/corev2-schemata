package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class InfoBackofficeConfiguration {
    private Double adjacentTaxonomiesTreshold;
    private Boolean allowHideServiceForBooking;
    private Boolean allowHideWorkersFromSchdeule;
    private Boolean allowSMSTranslit;
    private Boolean appointmentFutureMoving;
    private Boolean blockNotificationForAnyAvailableAdjacentService;
    private Boolean cabinetsEnabled;
    private Boolean checkClientOverlapping;
    private String customOnlinePaymentConfirmationTemplate;
    private Boolean defaultGTScheduleDayView;
    private Boolean disableAppointmentClientInlineEditor;
    private Boolean editAppExtraID;
    private Boolean editTaxonomyChildren;
    private Boolean editTaxonomyVisitType;
    private Boolean enableBlackList;
    private Boolean enableCalculateShedule;
    private Boolean enableClientCard;
    private Boolean enableClientLanguage;
    private Boolean enableClientMedicalCardReport;
    private Boolean enableCustomOnlinePaymentConfirmation;
    private Boolean enableExtendedPhone;
    private Boolean enableExtendedRecordsClientStatistics;
    private Boolean enableInvoice;
    private Boolean enableMasterImportance;
    private Boolean enablePhoneNationalMode;
    private Boolean enablePrintingReportRecordsScreen;
    private Boolean enableServiceTimeLimit;
    private Boolean enableSourceChoice;
    private Boolean enableTaxonomyChildrenAgeCheck;
    private Boolean enableTelemed;
    private Boolean exportToExcelRemovedClients;
    private String feedbackCustomerPortalMessage;
    private String feedbackCustomerPortalThankYouMessage;
    private String feedbackCustomerPortalTitle;
    private FeedBackMinRating feedBackMinRating;
    private String finID;
    private String finName;
    private Boolean hideCustomerPortalFooter;
    private Boolean highlightedResource;
    private List<AppointmentClientPayment> invoiceCondition;
    private InvoiceProvider invoiceProvider;
    private Boolean manualExceptionSupport;
    private Boolean noInternetAlert;
    private Double pastTimeEdit;
    private BackofficeConfigurationPaymentProvider paymentProvider;
    private Boolean readonlyResourceSchedule;
    private Boolean resourceSurnameFirst;
    private ResourceTimetableType resourceTimetableType;
    private Double revisionVersion;
    private Boolean schduleWeekViewIsDefault;
    private Double scheduleDefaultWorkersLimit;
    private Double scheduleDefaultWorkersLimitDay;
    private Double scheduleDefaultWorkersLimitWeek;
    private SchedulerWeekViewType schedulerWeekViewType;
    private Boolean scheduleWorkerHours;
    private Boolean showAdditionalFields;
    private Boolean showAddress;
    private Boolean showBirthDate;
    private Boolean showClientAddress;
    private Boolean showClientAppear;
    private Boolean showClientAppearOnSchedule;
    private Boolean showClientBirthdayFilter;
    private Boolean showClientContractNumber;
    private Boolean showClientImage;
    private Boolean showClientPayment;
    private Boolean showCreatedUsername;
    private Boolean showDefaulterBlockscreen;
    private Boolean showDeliveryStatus;
    private Boolean showDepartmentFilter;
    private Boolean showDepartments;
    private Boolean showDepartmentsConfiguration;
    private Boolean showEmail;
    private Boolean showExtraClientInfo;
    private Boolean showFax;
    private Boolean showFiredWorkerAppointmentAlert;
    private Boolean showFirstAvailableSlot;
    private Boolean showGapWindow;
    private Boolean showGender;
    private Boolean showGenderInRecords;
    private Boolean showGeneratableReportsScreen;
    private Boolean showHouseNumber;
    private Boolean showIsraelCity;
    private Boolean showKupatHolim;
    private Boolean showLeadsScreen;
    private Boolean showManualChanges;
    private Boolean showPassportID;
    private Boolean showRooms;
    private Boolean showSeasonTickets;
    private Boolean showTaxonomyChildren;
    private Boolean showTaxonomyLocalization;
    private Boolean showTaxonomyVisitType;
    private Boolean showTestRecord;
    private Boolean showUTM;
    private Boolean showWidgetColorTheme;
    private Boolean showWorkerDescriptionInEvent;
    private Boolean showWorkerExtraID;
    private Boolean showWorkerStatus;
    private Boolean skipAppointmentPriceUpdate;
    private Boolean skipCancelIfClientNotAppear;
    private Boolean skipServiceFiltering;
    private Boolean splitFullNameXlsExport;
    private List<Map<String, Object>> stateLevelHolidays;
    private Boolean stateLevelHolidaysNotWorking;
    private Double taxonomyChildrenMaxAge;
    private TelemedProvider telemedProvider;
    private Boolean useAdditionalDurations;
    private Boolean useAdjacentTaxonomies;
    private Boolean useAdjacentTaxonomiesSlotSplitting;
    private Boolean useGtAppMethod;
    private Double workWeekEnd;
    private Double workWeekStart;

    @JsonProperty("adjacentTaxonomiesTreshold")
    public Double getAdjacentTaxonomiesTreshold() { return adjacentTaxonomiesTreshold; }
    @JsonProperty("adjacentTaxonomiesTreshold")
    public void setAdjacentTaxonomiesTreshold(Double value) { this.adjacentTaxonomiesTreshold = value; }

    @JsonProperty("allowHideServiceForBooking")
    public Boolean getAllowHideServiceForBooking() { return allowHideServiceForBooking; }
    @JsonProperty("allowHideServiceForBooking")
    public void setAllowHideServiceForBooking(Boolean value) { this.allowHideServiceForBooking = value; }

    @JsonProperty("allowHideWorkersFromSchdeule")
    public Boolean getAllowHideWorkersFromSchdeule() { return allowHideWorkersFromSchdeule; }
    @JsonProperty("allowHideWorkersFromSchdeule")
    public void setAllowHideWorkersFromSchdeule(Boolean value) { this.allowHideWorkersFromSchdeule = value; }

    @JsonProperty("allowSmsTranslit")
    public Boolean getAllowSMSTranslit() { return allowSMSTranslit; }
    @JsonProperty("allowSmsTranslit")
    public void setAllowSMSTranslit(Boolean value) { this.allowSMSTranslit = value; }

    @JsonProperty("appointmentFutureMoving")
    public Boolean getAppointmentFutureMoving() { return appointmentFutureMoving; }
    @JsonProperty("appointmentFutureMoving")
    public void setAppointmentFutureMoving(Boolean value) { this.appointmentFutureMoving = value; }

    @JsonProperty("blockNotificationForAnyAvailableAdjacentService")
    public Boolean getBlockNotificationForAnyAvailableAdjacentService() { return blockNotificationForAnyAvailableAdjacentService; }
    @JsonProperty("blockNotificationForAnyAvailableAdjacentService")
    public void setBlockNotificationForAnyAvailableAdjacentService(Boolean value) { this.blockNotificationForAnyAvailableAdjacentService = value; }

    @JsonProperty("cabinetsEnabled")
    public Boolean getCabinetsEnabled() { return cabinetsEnabled; }
    @JsonProperty("cabinetsEnabled")
    public void setCabinetsEnabled(Boolean value) { this.cabinetsEnabled = value; }

    @JsonProperty("checkClientOverlapping")
    public Boolean getCheckClientOverlapping() { return checkClientOverlapping; }
    @JsonProperty("checkClientOverlapping")
    public void setCheckClientOverlapping(Boolean value) { this.checkClientOverlapping = value; }

    @JsonProperty("customOnlinePaymentConfirmationTemplate")
    public String getCustomOnlinePaymentConfirmationTemplate() { return customOnlinePaymentConfirmationTemplate; }
    @JsonProperty("customOnlinePaymentConfirmationTemplate")
    public void setCustomOnlinePaymentConfirmationTemplate(String value) { this.customOnlinePaymentConfirmationTemplate = value; }

    @JsonProperty("defaultGTScheduleDayView")
    public Boolean getDefaultGTScheduleDayView() { return defaultGTScheduleDayView; }
    @JsonProperty("defaultGTScheduleDayView")
    public void setDefaultGTScheduleDayView(Boolean value) { this.defaultGTScheduleDayView = value; }

    @JsonProperty("disableAppointmentClientInlineEditor")
    public Boolean getDisableAppointmentClientInlineEditor() { return disableAppointmentClientInlineEditor; }
    @JsonProperty("disableAppointmentClientInlineEditor")
    public void setDisableAppointmentClientInlineEditor(Boolean value) { this.disableAppointmentClientInlineEditor = value; }

    @JsonProperty("editAppExtraId")
    public Boolean getEditAppExtraID() { return editAppExtraID; }
    @JsonProperty("editAppExtraId")
    public void setEditAppExtraID(Boolean value) { this.editAppExtraID = value; }

    @JsonProperty("editTaxonomyChildren")
    public Boolean getEditTaxonomyChildren() { return editTaxonomyChildren; }
    @JsonProperty("editTaxonomyChildren")
    public void setEditTaxonomyChildren(Boolean value) { this.editTaxonomyChildren = value; }

    @JsonProperty("editTaxonomyVisitType")
    public Boolean getEditTaxonomyVisitType() { return editTaxonomyVisitType; }
    @JsonProperty("editTaxonomyVisitType")
    public void setEditTaxonomyVisitType(Boolean value) { this.editTaxonomyVisitType = value; }

    @JsonProperty("enableBlackList")
    public Boolean getEnableBlackList() { return enableBlackList; }
    @JsonProperty("enableBlackList")
    public void setEnableBlackList(Boolean value) { this.enableBlackList = value; }

    @JsonProperty("enableCalculateShedule")
    public Boolean getEnableCalculateShedule() { return enableCalculateShedule; }
    @JsonProperty("enableCalculateShedule")
    public void setEnableCalculateShedule(Boolean value) { this.enableCalculateShedule = value; }

    @JsonProperty("enableClientCard")
    public Boolean getEnableClientCard() { return enableClientCard; }
    @JsonProperty("enableClientCard")
    public void setEnableClientCard(Boolean value) { this.enableClientCard = value; }

    @JsonProperty("enableClientLanguage")
    public Boolean getEnableClientLanguage() { return enableClientLanguage; }
    @JsonProperty("enableClientLanguage")
    public void setEnableClientLanguage(Boolean value) { this.enableClientLanguage = value; }

    @JsonProperty("enableClientMedicalCardReport")
    public Boolean getEnableClientMedicalCardReport() { return enableClientMedicalCardReport; }
    @JsonProperty("enableClientMedicalCardReport")
    public void setEnableClientMedicalCardReport(Boolean value) { this.enableClientMedicalCardReport = value; }

    @JsonProperty("enableCustomOnlinePaymentConfirmation")
    public Boolean getEnableCustomOnlinePaymentConfirmation() { return enableCustomOnlinePaymentConfirmation; }
    @JsonProperty("enableCustomOnlinePaymentConfirmation")
    public void setEnableCustomOnlinePaymentConfirmation(Boolean value) { this.enableCustomOnlinePaymentConfirmation = value; }

    @JsonProperty("enableExtendedPhone")
    public Boolean getEnableExtendedPhone() { return enableExtendedPhone; }
    @JsonProperty("enableExtendedPhone")
    public void setEnableExtendedPhone(Boolean value) { this.enableExtendedPhone = value; }

    @JsonProperty("enableExtendedRecordsClientStatistics")
    public Boolean getEnableExtendedRecordsClientStatistics() { return enableExtendedRecordsClientStatistics; }
    @JsonProperty("enableExtendedRecordsClientStatistics")
    public void setEnableExtendedRecordsClientStatistics(Boolean value) { this.enableExtendedRecordsClientStatistics = value; }

    @JsonProperty("enableInvoice")
    public Boolean getEnableInvoice() { return enableInvoice; }
    @JsonProperty("enableInvoice")
    public void setEnableInvoice(Boolean value) { this.enableInvoice = value; }

    @JsonProperty("enableMasterImportance")
    public Boolean getEnableMasterImportance() { return enableMasterImportance; }
    @JsonProperty("enableMasterImportance")
    public void setEnableMasterImportance(Boolean value) { this.enableMasterImportance = value; }

    @JsonProperty("enablePhoneNationalMode")
    public Boolean getEnablePhoneNationalMode() { return enablePhoneNationalMode; }
    @JsonProperty("enablePhoneNationalMode")
    public void setEnablePhoneNationalMode(Boolean value) { this.enablePhoneNationalMode = value; }

    @JsonProperty("enablePrintingReportRecordsScreen")
    public Boolean getEnablePrintingReportRecordsScreen() { return enablePrintingReportRecordsScreen; }
    @JsonProperty("enablePrintingReportRecordsScreen")
    public void setEnablePrintingReportRecordsScreen(Boolean value) { this.enablePrintingReportRecordsScreen = value; }

    @JsonProperty("enableServiceTimeLimit")
    public Boolean getEnableServiceTimeLimit() { return enableServiceTimeLimit; }
    @JsonProperty("enableServiceTimeLimit")
    public void setEnableServiceTimeLimit(Boolean value) { this.enableServiceTimeLimit = value; }

    @JsonProperty("enableSourceChoice")
    public Boolean getEnableSourceChoice() { return enableSourceChoice; }
    @JsonProperty("enableSourceChoice")
    public void setEnableSourceChoice(Boolean value) { this.enableSourceChoice = value; }

    @JsonProperty("enableTaxonomyChildrenAgeCheck")
    public Boolean getEnableTaxonomyChildrenAgeCheck() { return enableTaxonomyChildrenAgeCheck; }
    @JsonProperty("enableTaxonomyChildrenAgeCheck")
    public void setEnableTaxonomyChildrenAgeCheck(Boolean value) { this.enableTaxonomyChildrenAgeCheck = value; }

    @JsonProperty("enableTelemed")
    public Boolean getEnableTelemed() { return enableTelemed; }
    @JsonProperty("enableTelemed")
    public void setEnableTelemed(Boolean value) { this.enableTelemed = value; }

    @JsonProperty("exportToExcelRemovedClients")
    public Boolean getExportToExcelRemovedClients() { return exportToExcelRemovedClients; }
    @JsonProperty("exportToExcelRemovedClients")
    public void setExportToExcelRemovedClients(Boolean value) { this.exportToExcelRemovedClients = value; }

    @JsonProperty("feedbackCustomerPortalMessage")
    public String getFeedbackCustomerPortalMessage() { return feedbackCustomerPortalMessage; }
    @JsonProperty("feedbackCustomerPortalMessage")
    public void setFeedbackCustomerPortalMessage(String value) { this.feedbackCustomerPortalMessage = value; }

    @JsonProperty("feedbackCustomerPortalThankYouMessage")
    public String getFeedbackCustomerPortalThankYouMessage() { return feedbackCustomerPortalThankYouMessage; }
    @JsonProperty("feedbackCustomerPortalThankYouMessage")
    public void setFeedbackCustomerPortalThankYouMessage(String value) { this.feedbackCustomerPortalThankYouMessage = value; }

    @JsonProperty("feedbackCustomerPortalTitle")
    public String getFeedbackCustomerPortalTitle() { return feedbackCustomerPortalTitle; }
    @JsonProperty("feedbackCustomerPortalTitle")
    public void setFeedbackCustomerPortalTitle(String value) { this.feedbackCustomerPortalTitle = value; }

    @JsonProperty("feedBackMinRating")
    public FeedBackMinRating getFeedBackMinRating() { return feedBackMinRating; }
    @JsonProperty("feedBackMinRating")
    public void setFeedBackMinRating(FeedBackMinRating value) { this.feedBackMinRating = value; }

    @JsonProperty("finId")
    public String getFinID() { return finID; }
    @JsonProperty("finId")
    public void setFinID(String value) { this.finID = value; }

    @JsonProperty("finName")
    public String getFinName() { return finName; }
    @JsonProperty("finName")
    public void setFinName(String value) { this.finName = value; }

    @JsonProperty("hideCustomerPortalFooter")
    public Boolean getHideCustomerPortalFooter() { return hideCustomerPortalFooter; }
    @JsonProperty("hideCustomerPortalFooter")
    public void setHideCustomerPortalFooter(Boolean value) { this.hideCustomerPortalFooter = value; }

    @JsonProperty("highlightedResource")
    public Boolean getHighlightedResource() { return highlightedResource; }
    @JsonProperty("highlightedResource")
    public void setHighlightedResource(Boolean value) { this.highlightedResource = value; }

    @JsonProperty("invoiceCondition")
    public List<AppointmentClientPayment> getInvoiceCondition() { return invoiceCondition; }
    @JsonProperty("invoiceCondition")
    public void setInvoiceCondition(List<AppointmentClientPayment> value) { this.invoiceCondition = value; }

    @JsonProperty("invoiceProvider")
    public InvoiceProvider getInvoiceProvider() { return invoiceProvider; }
    @JsonProperty("invoiceProvider")
    public void setInvoiceProvider(InvoiceProvider value) { this.invoiceProvider = value; }

    @JsonProperty("manualExceptionSupport")
    public Boolean getManualExceptionSupport() { return manualExceptionSupport; }
    @JsonProperty("manualExceptionSupport")
    public void setManualExceptionSupport(Boolean value) { this.manualExceptionSupport = value; }

    @JsonProperty("noInternetAlert")
    public Boolean getNoInternetAlert() { return noInternetAlert; }
    @JsonProperty("noInternetAlert")
    public void setNoInternetAlert(Boolean value) { this.noInternetAlert = value; }

    @JsonProperty("pastTimeEdit")
    public Double getPastTimeEdit() { return pastTimeEdit; }
    @JsonProperty("pastTimeEdit")
    public void setPastTimeEdit(Double value) { this.pastTimeEdit = value; }

    @JsonProperty("paymentProvider")
    public BackofficeConfigurationPaymentProvider getPaymentProvider() { return paymentProvider; }
    @JsonProperty("paymentProvider")
    public void setPaymentProvider(BackofficeConfigurationPaymentProvider value) { this.paymentProvider = value; }

    @JsonProperty("readonlyResourceSchedule")
    public Boolean getReadonlyResourceSchedule() { return readonlyResourceSchedule; }
    @JsonProperty("readonlyResourceSchedule")
    public void setReadonlyResourceSchedule(Boolean value) { this.readonlyResourceSchedule = value; }

    @JsonProperty("resourceSurnameFirst")
    public Boolean getResourceSurnameFirst() { return resourceSurnameFirst; }
    @JsonProperty("resourceSurnameFirst")
    public void setResourceSurnameFirst(Boolean value) { this.resourceSurnameFirst = value; }

    @JsonProperty("resourceTimetableType")
    public ResourceTimetableType getResourceTimetableType() { return resourceTimetableType; }
    @JsonProperty("resourceTimetableType")
    public void setResourceTimetableType(ResourceTimetableType value) { this.resourceTimetableType = value; }

    @JsonProperty("revisionVersion")
    public Double getRevisionVersion() { return revisionVersion; }
    @JsonProperty("revisionVersion")
    public void setRevisionVersion(Double value) { this.revisionVersion = value; }

    @JsonProperty("schduleWeekViewIsDefault")
    public Boolean getSchduleWeekViewIsDefault() { return schduleWeekViewIsDefault; }
    @JsonProperty("schduleWeekViewIsDefault")
    public void setSchduleWeekViewIsDefault(Boolean value) { this.schduleWeekViewIsDefault = value; }

    @JsonProperty("scheduleDefaultWorkersLimit")
    public Double getScheduleDefaultWorkersLimit() { return scheduleDefaultWorkersLimit; }
    @JsonProperty("scheduleDefaultWorkersLimit")
    public void setScheduleDefaultWorkersLimit(Double value) { this.scheduleDefaultWorkersLimit = value; }

    @JsonProperty("scheduleDefaultWorkersLimitDay")
    public Double getScheduleDefaultWorkersLimitDay() { return scheduleDefaultWorkersLimitDay; }
    @JsonProperty("scheduleDefaultWorkersLimitDay")
    public void setScheduleDefaultWorkersLimitDay(Double value) { this.scheduleDefaultWorkersLimitDay = value; }

    @JsonProperty("scheduleDefaultWorkersLimitWeek")
    public Double getScheduleDefaultWorkersLimitWeek() { return scheduleDefaultWorkersLimitWeek; }
    @JsonProperty("scheduleDefaultWorkersLimitWeek")
    public void setScheduleDefaultWorkersLimitWeek(Double value) { this.scheduleDefaultWorkersLimitWeek = value; }

    @JsonProperty("schedulerWeekViewType")
    public SchedulerWeekViewType getSchedulerWeekViewType() { return schedulerWeekViewType; }
    @JsonProperty("schedulerWeekViewType")
    public void setSchedulerWeekViewType(SchedulerWeekViewType value) { this.schedulerWeekViewType = value; }

    @JsonProperty("scheduleWorkerHours")
    public Boolean getScheduleWorkerHours() { return scheduleWorkerHours; }
    @JsonProperty("scheduleWorkerHours")
    public void setScheduleWorkerHours(Boolean value) { this.scheduleWorkerHours = value; }

    @JsonProperty("showAdditionalFields")
    public Boolean getShowAdditionalFields() { return showAdditionalFields; }
    @JsonProperty("showAdditionalFields")
    public void setShowAdditionalFields(Boolean value) { this.showAdditionalFields = value; }

    @JsonProperty("showAddress")
    public Boolean getShowAddress() { return showAddress; }
    @JsonProperty("showAddress")
    public void setShowAddress(Boolean value) { this.showAddress = value; }

    @JsonProperty("showBirthDate")
    public Boolean getShowBirthDate() { return showBirthDate; }
    @JsonProperty("showBirthDate")
    public void setShowBirthDate(Boolean value) { this.showBirthDate = value; }

    @JsonProperty("showClientAddress")
    public Boolean getShowClientAddress() { return showClientAddress; }
    @JsonProperty("showClientAddress")
    public void setShowClientAddress(Boolean value) { this.showClientAddress = value; }

    @JsonProperty("showClientAppear")
    public Boolean getShowClientAppear() { return showClientAppear; }
    @JsonProperty("showClientAppear")
    public void setShowClientAppear(Boolean value) { this.showClientAppear = value; }

    @JsonProperty("showClientAppearOnSchedule")
    public Boolean getShowClientAppearOnSchedule() { return showClientAppearOnSchedule; }
    @JsonProperty("showClientAppearOnSchedule")
    public void setShowClientAppearOnSchedule(Boolean value) { this.showClientAppearOnSchedule = value; }

    @JsonProperty("showClientBirthdayFilter")
    public Boolean getShowClientBirthdayFilter() { return showClientBirthdayFilter; }
    @JsonProperty("showClientBirthdayFilter")
    public void setShowClientBirthdayFilter(Boolean value) { this.showClientBirthdayFilter = value; }

    @JsonProperty("showClientContractNumber")
    public Boolean getShowClientContractNumber() { return showClientContractNumber; }
    @JsonProperty("showClientContractNumber")
    public void setShowClientContractNumber(Boolean value) { this.showClientContractNumber = value; }

    @JsonProperty("showClientImage")
    public Boolean getShowClientImage() { return showClientImage; }
    @JsonProperty("showClientImage")
    public void setShowClientImage(Boolean value) { this.showClientImage = value; }

    @JsonProperty("showClientPayment")
    public Boolean getShowClientPayment() { return showClientPayment; }
    @JsonProperty("showClientPayment")
    public void setShowClientPayment(Boolean value) { this.showClientPayment = value; }

    @JsonProperty("showCreatedUsername")
    public Boolean getShowCreatedUsername() { return showCreatedUsername; }
    @JsonProperty("showCreatedUsername")
    public void setShowCreatedUsername(Boolean value) { this.showCreatedUsername = value; }

    @JsonProperty("showDefaulterBlockscreen")
    public Boolean getShowDefaulterBlockscreen() { return showDefaulterBlockscreen; }
    @JsonProperty("showDefaulterBlockscreen")
    public void setShowDefaulterBlockscreen(Boolean value) { this.showDefaulterBlockscreen = value; }

    @JsonProperty("showDeliveryStatus")
    public Boolean getShowDeliveryStatus() { return showDeliveryStatus; }
    @JsonProperty("showDeliveryStatus")
    public void setShowDeliveryStatus(Boolean value) { this.showDeliveryStatus = value; }

    @JsonProperty("showDepartmentFilter")
    public Boolean getShowDepartmentFilter() { return showDepartmentFilter; }
    @JsonProperty("showDepartmentFilter")
    public void setShowDepartmentFilter(Boolean value) { this.showDepartmentFilter = value; }

    @JsonProperty("showDepartments")
    public Boolean getShowDepartments() { return showDepartments; }
    @JsonProperty("showDepartments")
    public void setShowDepartments(Boolean value) { this.showDepartments = value; }

    @JsonProperty("showDepartmentsConfiguration")
    public Boolean getShowDepartmentsConfiguration() { return showDepartmentsConfiguration; }
    @JsonProperty("showDepartmentsConfiguration")
    public void setShowDepartmentsConfiguration(Boolean value) { this.showDepartmentsConfiguration = value; }

    @JsonProperty("showEmail")
    public Boolean getShowEmail() { return showEmail; }
    @JsonProperty("showEmail")
    public void setShowEmail(Boolean value) { this.showEmail = value; }

    @JsonProperty("showExtraClientInfo")
    public Boolean getShowExtraClientInfo() { return showExtraClientInfo; }
    @JsonProperty("showExtraClientInfo")
    public void setShowExtraClientInfo(Boolean value) { this.showExtraClientInfo = value; }

    @JsonProperty("showFax")
    public Boolean getShowFax() { return showFax; }
    @JsonProperty("showFax")
    public void setShowFax(Boolean value) { this.showFax = value; }

    @JsonProperty("showFiredWorkerAppointmentAlert")
    public Boolean getShowFiredWorkerAppointmentAlert() { return showFiredWorkerAppointmentAlert; }
    @JsonProperty("showFiredWorkerAppointmentAlert")
    public void setShowFiredWorkerAppointmentAlert(Boolean value) { this.showFiredWorkerAppointmentAlert = value; }

    @JsonProperty("showFirstAvailableSlot")
    public Boolean getShowFirstAvailableSlot() { return showFirstAvailableSlot; }
    @JsonProperty("showFirstAvailableSlot")
    public void setShowFirstAvailableSlot(Boolean value) { this.showFirstAvailableSlot = value; }

    @JsonProperty("showGapWindow")
    public Boolean getShowGapWindow() { return showGapWindow; }
    @JsonProperty("showGapWindow")
    public void setShowGapWindow(Boolean value) { this.showGapWindow = value; }

    @JsonProperty("showGender")
    public Boolean getShowGender() { return showGender; }
    @JsonProperty("showGender")
    public void setShowGender(Boolean value) { this.showGender = value; }

    @JsonProperty("showGenderInRecords")
    public Boolean getShowGenderInRecords() { return showGenderInRecords; }
    @JsonProperty("showGenderInRecords")
    public void setShowGenderInRecords(Boolean value) { this.showGenderInRecords = value; }

    @JsonProperty("showGeneratableReportsScreen")
    public Boolean getShowGeneratableReportsScreen() { return showGeneratableReportsScreen; }
    @JsonProperty("showGeneratableReportsScreen")
    public void setShowGeneratableReportsScreen(Boolean value) { this.showGeneratableReportsScreen = value; }

    @JsonProperty("showHouseNumber")
    public Boolean getShowHouseNumber() { return showHouseNumber; }
    @JsonProperty("showHouseNumber")
    public void setShowHouseNumber(Boolean value) { this.showHouseNumber = value; }

    @JsonProperty("showIsraelCity")
    public Boolean getShowIsraelCity() { return showIsraelCity; }
    @JsonProperty("showIsraelCity")
    public void setShowIsraelCity(Boolean value) { this.showIsraelCity = value; }

    @JsonProperty("showKupatHolim")
    public Boolean getShowKupatHolim() { return showKupatHolim; }
    @JsonProperty("showKupatHolim")
    public void setShowKupatHolim(Boolean value) { this.showKupatHolim = value; }

    @JsonProperty("showLeadsScreen")
    public Boolean getShowLeadsScreen() { return showLeadsScreen; }
    @JsonProperty("showLeadsScreen")
    public void setShowLeadsScreen(Boolean value) { this.showLeadsScreen = value; }

    @JsonProperty("showManualChanges")
    public Boolean getShowManualChanges() { return showManualChanges; }
    @JsonProperty("showManualChanges")
    public void setShowManualChanges(Boolean value) { this.showManualChanges = value; }

    @JsonProperty("showPassportId")
    public Boolean getShowPassportID() { return showPassportID; }
    @JsonProperty("showPassportId")
    public void setShowPassportID(Boolean value) { this.showPassportID = value; }

    @JsonProperty("showRooms")
    public Boolean getShowRooms() { return showRooms; }
    @JsonProperty("showRooms")
    public void setShowRooms(Boolean value) { this.showRooms = value; }

    @JsonProperty("showSeasonTickets")
    public Boolean getShowSeasonTickets() { return showSeasonTickets; }
    @JsonProperty("showSeasonTickets")
    public void setShowSeasonTickets(Boolean value) { this.showSeasonTickets = value; }

    @JsonProperty("showTaxonomyChildren")
    public Boolean getShowTaxonomyChildren() { return showTaxonomyChildren; }
    @JsonProperty("showTaxonomyChildren")
    public void setShowTaxonomyChildren(Boolean value) { this.showTaxonomyChildren = value; }

    @JsonProperty("showTaxonomyLocalization")
    public Boolean getShowTaxonomyLocalization() { return showTaxonomyLocalization; }
    @JsonProperty("showTaxonomyLocalization")
    public void setShowTaxonomyLocalization(Boolean value) { this.showTaxonomyLocalization = value; }

    @JsonProperty("showTaxonomyVisitType")
    public Boolean getShowTaxonomyVisitType() { return showTaxonomyVisitType; }
    @JsonProperty("showTaxonomyVisitType")
    public void setShowTaxonomyVisitType(Boolean value) { this.showTaxonomyVisitType = value; }

    @JsonProperty("showTestRecord")
    public Boolean getShowTestRecord() { return showTestRecord; }
    @JsonProperty("showTestRecord")
    public void setShowTestRecord(Boolean value) { this.showTestRecord = value; }

    @JsonProperty("showUTM")
    public Boolean getShowUTM() { return showUTM; }
    @JsonProperty("showUTM")
    public void setShowUTM(Boolean value) { this.showUTM = value; }

    @JsonProperty("showWidgetColorTheme")
    public Boolean getShowWidgetColorTheme() { return showWidgetColorTheme; }
    @JsonProperty("showWidgetColorTheme")
    public void setShowWidgetColorTheme(Boolean value) { this.showWidgetColorTheme = value; }

    @JsonProperty("showWorkerDescriptionInEvent")
    public Boolean getShowWorkerDescriptionInEvent() { return showWorkerDescriptionInEvent; }
    @JsonProperty("showWorkerDescriptionInEvent")
    public void setShowWorkerDescriptionInEvent(Boolean value) { this.showWorkerDescriptionInEvent = value; }

    @JsonProperty("showWorkerExtraId")
    public Boolean getShowWorkerExtraID() { return showWorkerExtraID; }
    @JsonProperty("showWorkerExtraId")
    public void setShowWorkerExtraID(Boolean value) { this.showWorkerExtraID = value; }

    @JsonProperty("showWorkerStatus")
    public Boolean getShowWorkerStatus() { return showWorkerStatus; }
    @JsonProperty("showWorkerStatus")
    public void setShowWorkerStatus(Boolean value) { this.showWorkerStatus = value; }

    @JsonProperty("skipAppointmentPriceUpdate")
    public Boolean getSkipAppointmentPriceUpdate() { return skipAppointmentPriceUpdate; }
    @JsonProperty("skipAppointmentPriceUpdate")
    public void setSkipAppointmentPriceUpdate(Boolean value) { this.skipAppointmentPriceUpdate = value; }

    @JsonProperty("skipCancelIfClientNotAppear")
    public Boolean getSkipCancelIfClientNotAppear() { return skipCancelIfClientNotAppear; }
    @JsonProperty("skipCancelIfClientNotAppear")
    public void setSkipCancelIfClientNotAppear(Boolean value) { this.skipCancelIfClientNotAppear = value; }

    @JsonProperty("skipServiceFiltering")
    public Boolean getSkipServiceFiltering() { return skipServiceFiltering; }
    @JsonProperty("skipServiceFiltering")
    public void setSkipServiceFiltering(Boolean value) { this.skipServiceFiltering = value; }

    @JsonProperty("splitFullNameXlsExport")
    public Boolean getSplitFullNameXlsExport() { return splitFullNameXlsExport; }
    @JsonProperty("splitFullNameXlsExport")
    public void setSplitFullNameXlsExport(Boolean value) { this.splitFullNameXlsExport = value; }

    @JsonProperty("stateLevelHolidays")
    public List<Map<String, Object>> getStateLevelHolidays() { return stateLevelHolidays; }
    @JsonProperty("stateLevelHolidays")
    public void setStateLevelHolidays(List<Map<String, Object>> value) { this.stateLevelHolidays = value; }

    @JsonProperty("stateLevelHolidaysNotWorking")
    public Boolean getStateLevelHolidaysNotWorking() { return stateLevelHolidaysNotWorking; }
    @JsonProperty("stateLevelHolidaysNotWorking")
    public void setStateLevelHolidaysNotWorking(Boolean value) { this.stateLevelHolidaysNotWorking = value; }

    @JsonProperty("taxonomyChildrenMaxAge")
    public Double getTaxonomyChildrenMaxAge() { return taxonomyChildrenMaxAge; }
    @JsonProperty("taxonomyChildrenMaxAge")
    public void setTaxonomyChildrenMaxAge(Double value) { this.taxonomyChildrenMaxAge = value; }

    @JsonProperty("telemedProvider")
    public TelemedProvider getTelemedProvider() { return telemedProvider; }
    @JsonProperty("telemedProvider")
    public void setTelemedProvider(TelemedProvider value) { this.telemedProvider = value; }

    @JsonProperty("useAdditionalDurations")
    public Boolean getUseAdditionalDurations() { return useAdditionalDurations; }
    @JsonProperty("useAdditionalDurations")
    public void setUseAdditionalDurations(Boolean value) { this.useAdditionalDurations = value; }

    @JsonProperty("useAdjacentTaxonomies")
    public Boolean getUseAdjacentTaxonomies() { return useAdjacentTaxonomies; }
    @JsonProperty("useAdjacentTaxonomies")
    public void setUseAdjacentTaxonomies(Boolean value) { this.useAdjacentTaxonomies = value; }

    @JsonProperty("useAdjacentTaxonomiesSlotSplitting")
    public Boolean getUseAdjacentTaxonomiesSlotSplitting() { return useAdjacentTaxonomiesSlotSplitting; }
    @JsonProperty("useAdjacentTaxonomiesSlotSplitting")
    public void setUseAdjacentTaxonomiesSlotSplitting(Boolean value) { this.useAdjacentTaxonomiesSlotSplitting = value; }

    @JsonProperty("useGtAppMethod")
    public Boolean getUseGtAppMethod() { return useGtAppMethod; }
    @JsonProperty("useGtAppMethod")
    public void setUseGtAppMethod(Boolean value) { this.useGtAppMethod = value; }

    @JsonProperty("workWeekEnd")
    public Double getWorkWeekEnd() { return workWeekEnd; }
    @JsonProperty("workWeekEnd")
    public void setWorkWeekEnd(Double value) { this.workWeekEnd = value; }

    @JsonProperty("workWeekStart")
    public Double getWorkWeekStart() { return workWeekStart; }
    @JsonProperty("workWeekStart")
    public void setWorkWeekStart(Double value) { this.workWeekStart = value; }
}
