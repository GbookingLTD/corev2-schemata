package ru.gbooking.apiv2;

import java.util.*;

public class BackofficeConfigurationClass {
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
    private Boolean enableMasterImportance;
    private Boolean enableServiceTimeLimit;
    private Boolean enableSourceChoice;
    private Boolean enableTaxonomyChildrenAgeCheck;
    private Boolean exportToExcelRemovedClients;
    private String feedbackCustomerPortalMessage;
    private String feedbackCustomerPortalThankYouMessage;
    private String feedbackCustomerPortalTitle;
    private FeedBackMinRating feedBackMinRating;
    private String finID;
    private String finName;
    private Boolean hideCustomerPortalFooter;
    private Boolean highlightedResource;
    private Boolean manualExceptionSupport;
    private Boolean noInternetAlert;
    private Double pastTimeEdit;
    private PaymentProvider paymentProvider;
    private Boolean readonlyResourceSchedule;
    private ResourceTimetableType resourceTimetableType;
    private Double revisionVersion;
    private Boolean schduleWeekViewIsDefault;
    private Double scheduleDefaultWorkersLimit;
    private SchedulerWeekViewType schedulerWeekViewType;
    private Boolean scheduleWorkerHours;
    private Boolean showAdditionalFields;
    private Boolean showAddress;
    private Boolean showBirthDate;
    private Boolean showClientAppear;
    private Boolean showClientAppearOnSchedule;
    private Boolean showClientBirthdayFilter;
    private Boolean showClientContractNumber;
    private Boolean showClientImage;
    private Boolean showClientPayment;
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
    private Boolean useAdditionalDurations;
    private Boolean useAdjacentTaxonomies;
    private Boolean useAdjacentTaxonomiesSlotSplitting;
    private Boolean useGtAppMethod;
    private Double workWeekEnd;
    private Double workWeekStart;

    public Double getAdjacentTaxonomiesTreshold() { return adjacentTaxonomiesTreshold; }
    public void setAdjacentTaxonomiesTreshold(Double value) { this.adjacentTaxonomiesTreshold = value; }

    public Boolean getAllowHideServiceForBooking() { return allowHideServiceForBooking; }
    public void setAllowHideServiceForBooking(Boolean value) { this.allowHideServiceForBooking = value; }

    public Boolean getAllowHideWorkersFromSchdeule() { return allowHideWorkersFromSchdeule; }
    public void setAllowHideWorkersFromSchdeule(Boolean value) { this.allowHideWorkersFromSchdeule = value; }

    public Boolean getAllowSMSTranslit() { return allowSMSTranslit; }
    public void setAllowSMSTranslit(Boolean value) { this.allowSMSTranslit = value; }

    public Boolean getAppointmentFutureMoving() { return appointmentFutureMoving; }
    public void setAppointmentFutureMoving(Boolean value) { this.appointmentFutureMoving = value; }

    public Boolean getBlockNotificationForAnyAvailableAdjacentService() { return blockNotificationForAnyAvailableAdjacentService; }
    public void setBlockNotificationForAnyAvailableAdjacentService(Boolean value) { this.blockNotificationForAnyAvailableAdjacentService = value; }

    public Boolean getCabinetsEnabled() { return cabinetsEnabled; }
    public void setCabinetsEnabled(Boolean value) { this.cabinetsEnabled = value; }

    public Boolean getCheckClientOverlapping() { return checkClientOverlapping; }
    public void setCheckClientOverlapping(Boolean value) { this.checkClientOverlapping = value; }

    public String getCustomOnlinePaymentConfirmationTemplate() { return customOnlinePaymentConfirmationTemplate; }
    public void setCustomOnlinePaymentConfirmationTemplate(String value) { this.customOnlinePaymentConfirmationTemplate = value; }

    public Boolean getDefaultGTScheduleDayView() { return defaultGTScheduleDayView; }
    public void setDefaultGTScheduleDayView(Boolean value) { this.defaultGTScheduleDayView = value; }

    public Boolean getDisableAppointmentClientInlineEditor() { return disableAppointmentClientInlineEditor; }
    public void setDisableAppointmentClientInlineEditor(Boolean value) { this.disableAppointmentClientInlineEditor = value; }

    public Boolean getEditAppExtraID() { return editAppExtraID; }
    public void setEditAppExtraID(Boolean value) { this.editAppExtraID = value; }

    public Boolean getEditTaxonomyChildren() { return editTaxonomyChildren; }
    public void setEditTaxonomyChildren(Boolean value) { this.editTaxonomyChildren = value; }

    public Boolean getEditTaxonomyVisitType() { return editTaxonomyVisitType; }
    public void setEditTaxonomyVisitType(Boolean value) { this.editTaxonomyVisitType = value; }

    public Boolean getEnableBlackList() { return enableBlackList; }
    public void setEnableBlackList(Boolean value) { this.enableBlackList = value; }

    public Boolean getEnableCalculateShedule() { return enableCalculateShedule; }
    public void setEnableCalculateShedule(Boolean value) { this.enableCalculateShedule = value; }

    public Boolean getEnableClientCard() { return enableClientCard; }
    public void setEnableClientCard(Boolean value) { this.enableClientCard = value; }

    public Boolean getEnableClientLanguage() { return enableClientLanguage; }
    public void setEnableClientLanguage(Boolean value) { this.enableClientLanguage = value; }

    public Boolean getEnableClientMedicalCardReport() { return enableClientMedicalCardReport; }
    public void setEnableClientMedicalCardReport(Boolean value) { this.enableClientMedicalCardReport = value; }

    public Boolean getEnableCustomOnlinePaymentConfirmation() { return enableCustomOnlinePaymentConfirmation; }
    public void setEnableCustomOnlinePaymentConfirmation(Boolean value) { this.enableCustomOnlinePaymentConfirmation = value; }

    public Boolean getEnableExtendedPhone() { return enableExtendedPhone; }
    public void setEnableExtendedPhone(Boolean value) { this.enableExtendedPhone = value; }

    public Boolean getEnableExtendedRecordsClientStatistics() { return enableExtendedRecordsClientStatistics; }
    public void setEnableExtendedRecordsClientStatistics(Boolean value) { this.enableExtendedRecordsClientStatistics = value; }

    public Boolean getEnableMasterImportance() { return enableMasterImportance; }
    public void setEnableMasterImportance(Boolean value) { this.enableMasterImportance = value; }

    public Boolean getEnableServiceTimeLimit() { return enableServiceTimeLimit; }
    public void setEnableServiceTimeLimit(Boolean value) { this.enableServiceTimeLimit = value; }

    public Boolean getEnableSourceChoice() { return enableSourceChoice; }
    public void setEnableSourceChoice(Boolean value) { this.enableSourceChoice = value; }

    public Boolean getEnableTaxonomyChildrenAgeCheck() { return enableTaxonomyChildrenAgeCheck; }
    public void setEnableTaxonomyChildrenAgeCheck(Boolean value) { this.enableTaxonomyChildrenAgeCheck = value; }

    public Boolean getExportToExcelRemovedClients() { return exportToExcelRemovedClients; }
    public void setExportToExcelRemovedClients(Boolean value) { this.exportToExcelRemovedClients = value; }

    public String getFeedbackCustomerPortalMessage() { return feedbackCustomerPortalMessage; }
    public void setFeedbackCustomerPortalMessage(String value) { this.feedbackCustomerPortalMessage = value; }

    public String getFeedbackCustomerPortalThankYouMessage() { return feedbackCustomerPortalThankYouMessage; }
    public void setFeedbackCustomerPortalThankYouMessage(String value) { this.feedbackCustomerPortalThankYouMessage = value; }

    public String getFeedbackCustomerPortalTitle() { return feedbackCustomerPortalTitle; }
    public void setFeedbackCustomerPortalTitle(String value) { this.feedbackCustomerPortalTitle = value; }

    public FeedBackMinRating getFeedBackMinRating() { return feedBackMinRating; }
    public void setFeedBackMinRating(FeedBackMinRating value) { this.feedBackMinRating = value; }

    public String getFinID() { return finID; }
    public void setFinID(String value) { this.finID = value; }

    public String getFinName() { return finName; }
    public void setFinName(String value) { this.finName = value; }

    public Boolean getHideCustomerPortalFooter() { return hideCustomerPortalFooter; }
    public void setHideCustomerPortalFooter(Boolean value) { this.hideCustomerPortalFooter = value; }

    public Boolean getHighlightedResource() { return highlightedResource; }
    public void setHighlightedResource(Boolean value) { this.highlightedResource = value; }

    public Boolean getManualExceptionSupport() { return manualExceptionSupport; }
    public void setManualExceptionSupport(Boolean value) { this.manualExceptionSupport = value; }

    public Boolean getNoInternetAlert() { return noInternetAlert; }
    public void setNoInternetAlert(Boolean value) { this.noInternetAlert = value; }

    public Double getPastTimeEdit() { return pastTimeEdit; }
    public void setPastTimeEdit(Double value) { this.pastTimeEdit = value; }

    public PaymentProvider getPaymentProvider() { return paymentProvider; }
    public void setPaymentProvider(PaymentProvider value) { this.paymentProvider = value; }

    public Boolean getReadonlyResourceSchedule() { return readonlyResourceSchedule; }
    public void setReadonlyResourceSchedule(Boolean value) { this.readonlyResourceSchedule = value; }

    public ResourceTimetableType getResourceTimetableType() { return resourceTimetableType; }
    public void setResourceTimetableType(ResourceTimetableType value) { this.resourceTimetableType = value; }

    public Double getRevisionVersion() { return revisionVersion; }
    public void setRevisionVersion(Double value) { this.revisionVersion = value; }

    public Boolean getSchduleWeekViewIsDefault() { return schduleWeekViewIsDefault; }
    public void setSchduleWeekViewIsDefault(Boolean value) { this.schduleWeekViewIsDefault = value; }

    public Double getScheduleDefaultWorkersLimit() { return scheduleDefaultWorkersLimit; }
    public void setScheduleDefaultWorkersLimit(Double value) { this.scheduleDefaultWorkersLimit = value; }

    public SchedulerWeekViewType getSchedulerWeekViewType() { return schedulerWeekViewType; }
    public void setSchedulerWeekViewType(SchedulerWeekViewType value) { this.schedulerWeekViewType = value; }

    public Boolean getScheduleWorkerHours() { return scheduleWorkerHours; }
    public void setScheduleWorkerHours(Boolean value) { this.scheduleWorkerHours = value; }

    public Boolean getShowAdditionalFields() { return showAdditionalFields; }
    public void setShowAdditionalFields(Boolean value) { this.showAdditionalFields = value; }

    public Boolean getShowAddress() { return showAddress; }
    public void setShowAddress(Boolean value) { this.showAddress = value; }

    public Boolean getShowBirthDate() { return showBirthDate; }
    public void setShowBirthDate(Boolean value) { this.showBirthDate = value; }

    public Boolean getShowClientAppear() { return showClientAppear; }
    public void setShowClientAppear(Boolean value) { this.showClientAppear = value; }

    public Boolean getShowClientAppearOnSchedule() { return showClientAppearOnSchedule; }
    public void setShowClientAppearOnSchedule(Boolean value) { this.showClientAppearOnSchedule = value; }

    public Boolean getShowClientBirthdayFilter() { return showClientBirthdayFilter; }
    public void setShowClientBirthdayFilter(Boolean value) { this.showClientBirthdayFilter = value; }

    public Boolean getShowClientContractNumber() { return showClientContractNumber; }
    public void setShowClientContractNumber(Boolean value) { this.showClientContractNumber = value; }

    public Boolean getShowClientImage() { return showClientImage; }
    public void setShowClientImage(Boolean value) { this.showClientImage = value; }

    public Boolean getShowClientPayment() { return showClientPayment; }
    public void setShowClientPayment(Boolean value) { this.showClientPayment = value; }

    public Boolean getShowDefaulterBlockscreen() { return showDefaulterBlockscreen; }
    public void setShowDefaulterBlockscreen(Boolean value) { this.showDefaulterBlockscreen = value; }

    public Boolean getShowDeliveryStatus() { return showDeliveryStatus; }
    public void setShowDeliveryStatus(Boolean value) { this.showDeliveryStatus = value; }

    public Boolean getShowDepartmentFilter() { return showDepartmentFilter; }
    public void setShowDepartmentFilter(Boolean value) { this.showDepartmentFilter = value; }

    public Boolean getShowDepartments() { return showDepartments; }
    public void setShowDepartments(Boolean value) { this.showDepartments = value; }

    public Boolean getShowDepartmentsConfiguration() { return showDepartmentsConfiguration; }
    public void setShowDepartmentsConfiguration(Boolean value) { this.showDepartmentsConfiguration = value; }

    public Boolean getShowEmail() { return showEmail; }
    public void setShowEmail(Boolean value) { this.showEmail = value; }

    public Boolean getShowExtraClientInfo() { return showExtraClientInfo; }
    public void setShowExtraClientInfo(Boolean value) { this.showExtraClientInfo = value; }

    public Boolean getShowFax() { return showFax; }
    public void setShowFax(Boolean value) { this.showFax = value; }

    public Boolean getShowFiredWorkerAppointmentAlert() { return showFiredWorkerAppointmentAlert; }
    public void setShowFiredWorkerAppointmentAlert(Boolean value) { this.showFiredWorkerAppointmentAlert = value; }

    public Boolean getShowFirstAvailableSlot() { return showFirstAvailableSlot; }
    public void setShowFirstAvailableSlot(Boolean value) { this.showFirstAvailableSlot = value; }

    public Boolean getShowGapWindow() { return showGapWindow; }
    public void setShowGapWindow(Boolean value) { this.showGapWindow = value; }

    public Boolean getShowGender() { return showGender; }
    public void setShowGender(Boolean value) { this.showGender = value; }

    public Boolean getShowGenderInRecords() { return showGenderInRecords; }
    public void setShowGenderInRecords(Boolean value) { this.showGenderInRecords = value; }

    public Boolean getShowGeneratableReportsScreen() { return showGeneratableReportsScreen; }
    public void setShowGeneratableReportsScreen(Boolean value) { this.showGeneratableReportsScreen = value; }

    public Boolean getShowHouseNumber() { return showHouseNumber; }
    public void setShowHouseNumber(Boolean value) { this.showHouseNumber = value; }

    public Boolean getShowIsraelCity() { return showIsraelCity; }
    public void setShowIsraelCity(Boolean value) { this.showIsraelCity = value; }

    public Boolean getShowKupatHolim() { return showKupatHolim; }
    public void setShowKupatHolim(Boolean value) { this.showKupatHolim = value; }

    public Boolean getShowLeadsScreen() { return showLeadsScreen; }
    public void setShowLeadsScreen(Boolean value) { this.showLeadsScreen = value; }

    public Boolean getShowManualChanges() { return showManualChanges; }
    public void setShowManualChanges(Boolean value) { this.showManualChanges = value; }

    public Boolean getShowPassportID() { return showPassportID; }
    public void setShowPassportID(Boolean value) { this.showPassportID = value; }

    public Boolean getShowRooms() { return showRooms; }
    public void setShowRooms(Boolean value) { this.showRooms = value; }

    public Boolean getShowSeasonTickets() { return showSeasonTickets; }
    public void setShowSeasonTickets(Boolean value) { this.showSeasonTickets = value; }

    public Boolean getShowTaxonomyChildren() { return showTaxonomyChildren; }
    public void setShowTaxonomyChildren(Boolean value) { this.showTaxonomyChildren = value; }

    public Boolean getShowTaxonomyLocalization() { return showTaxonomyLocalization; }
    public void setShowTaxonomyLocalization(Boolean value) { this.showTaxonomyLocalization = value; }

    public Boolean getShowTaxonomyVisitType() { return showTaxonomyVisitType; }
    public void setShowTaxonomyVisitType(Boolean value) { this.showTaxonomyVisitType = value; }

    public Boolean getShowTestRecord() { return showTestRecord; }
    public void setShowTestRecord(Boolean value) { this.showTestRecord = value; }

    public Boolean getShowUTM() { return showUTM; }
    public void setShowUTM(Boolean value) { this.showUTM = value; }

    public Boolean getShowWidgetColorTheme() { return showWidgetColorTheme; }
    public void setShowWidgetColorTheme(Boolean value) { this.showWidgetColorTheme = value; }

    public Boolean getShowWorkerDescriptionInEvent() { return showWorkerDescriptionInEvent; }
    public void setShowWorkerDescriptionInEvent(Boolean value) { this.showWorkerDescriptionInEvent = value; }

    public Boolean getShowWorkerExtraID() { return showWorkerExtraID; }
    public void setShowWorkerExtraID(Boolean value) { this.showWorkerExtraID = value; }

    public Boolean getShowWorkerStatus() { return showWorkerStatus; }
    public void setShowWorkerStatus(Boolean value) { this.showWorkerStatus = value; }

    public Boolean getSkipAppointmentPriceUpdate() { return skipAppointmentPriceUpdate; }
    public void setSkipAppointmentPriceUpdate(Boolean value) { this.skipAppointmentPriceUpdate = value; }

    public Boolean getSkipCancelIfClientNotAppear() { return skipCancelIfClientNotAppear; }
    public void setSkipCancelIfClientNotAppear(Boolean value) { this.skipCancelIfClientNotAppear = value; }

    public Boolean getSkipServiceFiltering() { return skipServiceFiltering; }
    public void setSkipServiceFiltering(Boolean value) { this.skipServiceFiltering = value; }

    public Boolean getSplitFullNameXlsExport() { return splitFullNameXlsExport; }
    public void setSplitFullNameXlsExport(Boolean value) { this.splitFullNameXlsExport = value; }

    public List<Map<String, Object>> getStateLevelHolidays() { return stateLevelHolidays; }
    public void setStateLevelHolidays(List<Map<String, Object>> value) { this.stateLevelHolidays = value; }

    public Boolean getStateLevelHolidaysNotWorking() { return stateLevelHolidaysNotWorking; }
    public void setStateLevelHolidaysNotWorking(Boolean value) { this.stateLevelHolidaysNotWorking = value; }

    public Double getTaxonomyChildrenMaxAge() { return taxonomyChildrenMaxAge; }
    public void setTaxonomyChildrenMaxAge(Double value) { this.taxonomyChildrenMaxAge = value; }

    public Boolean getUseAdditionalDurations() { return useAdditionalDurations; }
    public void setUseAdditionalDurations(Boolean value) { this.useAdditionalDurations = value; }

    public Boolean getUseAdjacentTaxonomies() { return useAdjacentTaxonomies; }
    public void setUseAdjacentTaxonomies(Boolean value) { this.useAdjacentTaxonomies = value; }

    public Boolean getUseAdjacentTaxonomiesSlotSplitting() { return useAdjacentTaxonomiesSlotSplitting; }
    public void setUseAdjacentTaxonomiesSlotSplitting(Boolean value) { this.useAdjacentTaxonomiesSlotSplitting = value; }

    public Boolean getUseGtAppMethod() { return useGtAppMethod; }
    public void setUseGtAppMethod(Boolean value) { this.useGtAppMethod = value; }

    public Double getWorkWeekEnd() { return workWeekEnd; }
    public void setWorkWeekEnd(Double value) { this.workWeekEnd = value; }

    public Double getWorkWeekStart() { return workWeekStart; }
    public void setWorkWeekStart(Double value) { this.workWeekStart = value; }
}
