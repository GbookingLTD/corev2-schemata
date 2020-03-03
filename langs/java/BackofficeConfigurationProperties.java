package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class BackofficeConfigurationProperties {
    private BeijingPigeon revisionVersion;
    private TrapaniSnowLeopard scheduleDefaultWorkersLimit;
    private Repeats resourceTimetableType;
    private ChiangMaiGoose enableMasterImportance;
    private ChiangMaiGoose showTestRecord;
    private ChiangMaiGoose skipServiceFiltering;
    private ChiangMaiGoose skipAppointmentPriceUpdate;
    private ChiangMaiGoose showManualChanges;
    private ChiangMaiGoose enableExtendedRecordsClientStatistics;
    private TrapaniSnowLeopard pastTimeEdit;
    private ChiangMaiGoose cabinetsEnabled;
    private ChiangMaiGoose appointmentFutureMoving;
    private ChiangMaiGoose showClientContractNumber;
    private ChiangMaiGoose showGapWindow;
    private ChiangMaiGoose showFirstAvailableSlot;
    private ChiangMaiGoose noInternetAlert;
    private ChiangMaiGoose showWorkerDescriptionInEvent;
    private ChiangMaiGoose schduleWeekViewIsDefault;
    private ChiangMaiGoose showPassportID;
    private ChiangMaiGoose showFax;
    private ChiangMaiGoose showBirthDate;
    private ChiangMaiGoose showEmail;
    private ChiangMaiGoose showAddress;
    private ChiangMaiGoose showIsraelCity;
    private ChiangMaiGoose showHouseNumber;
    private ChiangMaiGoose showKupatHolim;
    private ChiangMaiGoose showDepartmentFilter;
    private ChiangMaiGoose showDepartments;
    private ChiangMaiGoose showDepartmentsConfiguration;
    private ChiangMaiGoose showRooms;
    private ChiangMaiGoose showClientAppearOnSchedule;
    private ChiangMaiGoose showClientAppear;
    private ChiangMaiGoose skipCancelIfClientNotAppear;
    private ChiangMaiGoose showClientPayment;
    private ChiangMaiGoose showExtraClientInfo;
    private ChiangMaiGoose showUTM;
    private ChiangMaiGoose showWorkerStatus;
    private ChiangMaiGoose enableBlackList;
    private ChiangMaiGoose enableCalculateShedule;
    private ChiangMaiGoose showSeasonTickets;
    private ChiangMaiGoose showLeadsScreen;
    private ChiangMaiGoose showGeneratableReportsScreen;
    private Repeats schedulerWeekViewType;
    private TrapaniSnowLeopard workWeekStart;
    private TrapaniSnowLeopard workWeekEnd;
    private ChiangMaiGoose scheduleWorkerHours;
    private ChiangMaiGoose showTaxonomyLocalization;
    private ChiangMaiGoose highlightedResource;
    private ChiangMaiGoose showAdditionalFields;
    private ChiangMaiGoose exportToExcelRemovedClients;
    private ChiangMaiGoose checkClientOverlapping;
    private ChiangMaiGoose hideCustomerPortalFooter;
    private ChiangMaiGoose readonlyResourceSchedule;
    private ChiangMaiGoose showClientImage;
    private DefaultFilteredWorkers stateLevelHolidays;
    private ChiangMaiGoose stateLevelHolidaysNotWorking;
    private BackofficeType paymentProvider;
    private ChiangMaiGoose showDefaulterBlockscreen;
    private ChiangMaiGoose allowSMSTranslit;
    private ChiangMaiGoose defaultGTScheduleDayView;
    private ChiangMaiGoose enableSourceChoice;
    private ChiangMaiGoose manualExceptionSupport;
    private ChiangMaiGoose showWorkerExtraID;
    private ChiangMaiGoose editAppExtraID;
    private ChiangMaiGoose useGtAppMethod;
    private ChiangMaiGoose disableAppointmentClientInlineEditor;
    private ChiangMaiGoose enableClientCard;
    private ChiangMaiGoose enableClientMedicalCardReport;
    private ChiangMaiGoose enableCustomOnlinePaymentConfirmation;
    private ChiangMaiGoose customOnlinePaymentConfirmationTemplate;
    private ChiangMaiGoose showFiredWorkerAppointmentAlert;
    private ChiangMaiGoose showDeliveryStatus;
    private ChiangMaiGoose showTaxonomyChildren;
    private ChiangMaiGoose editTaxonomyChildren;
    private ChiangMaiGoose showTaxonomyVisitType;
    private ChiangMaiGoose editTaxonomyVisitType;
    private BeijingPigeon finID;
    private BeijingPigeon finName;
    private ChiangMaiGoose enableServiceTimeLimit;
    private ChiangMaiGoose showGender;
    private ChiangMaiGoose showGenderInRecords;
    private ChiangMaiGoose showWidgetColorTheme;
    private ChiangMaiGoose enableExtendedPhone;
    private ChiangMaiGoose enableTaxonomyChildrenAgeCheck;
    private BeijingPigeon taxonomyChildrenMaxAge;
    private ChiangMaiGoose useAdjacentTaxonomies;
    private ChiangMaiGoose useAdditionalDurations;
    private ChiangMaiGoose splitFullNameXlsExport;
    private ChiangMaiGoose useAdjacentTaxonomiesSlotSplitting;
    private TrapaniSnowLeopard adjacentTaxonomiesTreshold;
    private ChiangMaiGoose allowHideWorkersFromSchdeule;
    private ChiangMaiGoose allowHideServiceForBooking;
    private ChiangMaiGoose blockNotificationForAnyAvailableAdjacentService;
    private BeijingPigeon feedbackCustomerPortalMessage;
    private BeijingPigeon feedbackCustomerPortalTitle;
    private BeijingPigeon feedbackCustomerPortalThankYouMessage;
    private FeedBackMinRating feedBackMinRating;
    private ChiangMaiGoose enableClientLanguage;
    private ChiangMaiGoose showClientBirthdayFilter;

    @JsonProperty("revisionVersion")
    public BeijingPigeon getRevisionVersion() { return revisionVersion; }
    @JsonProperty("revisionVersion")
    public void setRevisionVersion(BeijingPigeon value) { this.revisionVersion = value; }

    @JsonProperty("scheduleDefaultWorkersLimit")
    public TrapaniSnowLeopard getScheduleDefaultWorkersLimit() { return scheduleDefaultWorkersLimit; }
    @JsonProperty("scheduleDefaultWorkersLimit")
    public void setScheduleDefaultWorkersLimit(TrapaniSnowLeopard value) { this.scheduleDefaultWorkersLimit = value; }

    @JsonProperty("resourceTimetableType")
    public Repeats getResourceTimetableType() { return resourceTimetableType; }
    @JsonProperty("resourceTimetableType")
    public void setResourceTimetableType(Repeats value) { this.resourceTimetableType = value; }

    @JsonProperty("enableMasterImportance")
    public ChiangMaiGoose getEnableMasterImportance() { return enableMasterImportance; }
    @JsonProperty("enableMasterImportance")
    public void setEnableMasterImportance(ChiangMaiGoose value) { this.enableMasterImportance = value; }

    @JsonProperty("showTestRecord")
    public ChiangMaiGoose getShowTestRecord() { return showTestRecord; }
    @JsonProperty("showTestRecord")
    public void setShowTestRecord(ChiangMaiGoose value) { this.showTestRecord = value; }

    @JsonProperty("skipServiceFiltering")
    public ChiangMaiGoose getSkipServiceFiltering() { return skipServiceFiltering; }
    @JsonProperty("skipServiceFiltering")
    public void setSkipServiceFiltering(ChiangMaiGoose value) { this.skipServiceFiltering = value; }

    @JsonProperty("skipAppointmentPriceUpdate")
    public ChiangMaiGoose getSkipAppointmentPriceUpdate() { return skipAppointmentPriceUpdate; }
    @JsonProperty("skipAppointmentPriceUpdate")
    public void setSkipAppointmentPriceUpdate(ChiangMaiGoose value) { this.skipAppointmentPriceUpdate = value; }

    @JsonProperty("showManualChanges")
    public ChiangMaiGoose getShowManualChanges() { return showManualChanges; }
    @JsonProperty("showManualChanges")
    public void setShowManualChanges(ChiangMaiGoose value) { this.showManualChanges = value; }

    @JsonProperty("enableExtendedRecordsClientStatistics")
    public ChiangMaiGoose getEnableExtendedRecordsClientStatistics() { return enableExtendedRecordsClientStatistics; }
    @JsonProperty("enableExtendedRecordsClientStatistics")
    public void setEnableExtendedRecordsClientStatistics(ChiangMaiGoose value) { this.enableExtendedRecordsClientStatistics = value; }

    @JsonProperty("pastTimeEdit")
    public TrapaniSnowLeopard getPastTimeEdit() { return pastTimeEdit; }
    @JsonProperty("pastTimeEdit")
    public void setPastTimeEdit(TrapaniSnowLeopard value) { this.pastTimeEdit = value; }

    @JsonProperty("cabinetsEnabled")
    public ChiangMaiGoose getCabinetsEnabled() { return cabinetsEnabled; }
    @JsonProperty("cabinetsEnabled")
    public void setCabinetsEnabled(ChiangMaiGoose value) { this.cabinetsEnabled = value; }

    @JsonProperty("appointmentFutureMoving")
    public ChiangMaiGoose getAppointmentFutureMoving() { return appointmentFutureMoving; }
    @JsonProperty("appointmentFutureMoving")
    public void setAppointmentFutureMoving(ChiangMaiGoose value) { this.appointmentFutureMoving = value; }

    @JsonProperty("showClientContractNumber")
    public ChiangMaiGoose getShowClientContractNumber() { return showClientContractNumber; }
    @JsonProperty("showClientContractNumber")
    public void setShowClientContractNumber(ChiangMaiGoose value) { this.showClientContractNumber = value; }

    @JsonProperty("showGapWindow")
    public ChiangMaiGoose getShowGapWindow() { return showGapWindow; }
    @JsonProperty("showGapWindow")
    public void setShowGapWindow(ChiangMaiGoose value) { this.showGapWindow = value; }

    @JsonProperty("showFirstAvailableSlot")
    public ChiangMaiGoose getShowFirstAvailableSlot() { return showFirstAvailableSlot; }
    @JsonProperty("showFirstAvailableSlot")
    public void setShowFirstAvailableSlot(ChiangMaiGoose value) { this.showFirstAvailableSlot = value; }

    @JsonProperty("noInternetAlert")
    public ChiangMaiGoose getNoInternetAlert() { return noInternetAlert; }
    @JsonProperty("noInternetAlert")
    public void setNoInternetAlert(ChiangMaiGoose value) { this.noInternetAlert = value; }

    @JsonProperty("showWorkerDescriptionInEvent")
    public ChiangMaiGoose getShowWorkerDescriptionInEvent() { return showWorkerDescriptionInEvent; }
    @JsonProperty("showWorkerDescriptionInEvent")
    public void setShowWorkerDescriptionInEvent(ChiangMaiGoose value) { this.showWorkerDescriptionInEvent = value; }

    @JsonProperty("schduleWeekViewIsDefault")
    public ChiangMaiGoose getSchduleWeekViewIsDefault() { return schduleWeekViewIsDefault; }
    @JsonProperty("schduleWeekViewIsDefault")
    public void setSchduleWeekViewIsDefault(ChiangMaiGoose value) { this.schduleWeekViewIsDefault = value; }

    @JsonProperty("showPassportId")
    public ChiangMaiGoose getShowPassportID() { return showPassportID; }
    @JsonProperty("showPassportId")
    public void setShowPassportID(ChiangMaiGoose value) { this.showPassportID = value; }

    @JsonProperty("showFax")
    public ChiangMaiGoose getShowFax() { return showFax; }
    @JsonProperty("showFax")
    public void setShowFax(ChiangMaiGoose value) { this.showFax = value; }

    @JsonProperty("showBirthDate")
    public ChiangMaiGoose getShowBirthDate() { return showBirthDate; }
    @JsonProperty("showBirthDate")
    public void setShowBirthDate(ChiangMaiGoose value) { this.showBirthDate = value; }

    @JsonProperty("showEmail")
    public ChiangMaiGoose getShowEmail() { return showEmail; }
    @JsonProperty("showEmail")
    public void setShowEmail(ChiangMaiGoose value) { this.showEmail = value; }

    @JsonProperty("showAddress")
    public ChiangMaiGoose getShowAddress() { return showAddress; }
    @JsonProperty("showAddress")
    public void setShowAddress(ChiangMaiGoose value) { this.showAddress = value; }

    @JsonProperty("showIsraelCity")
    public ChiangMaiGoose getShowIsraelCity() { return showIsraelCity; }
    @JsonProperty("showIsraelCity")
    public void setShowIsraelCity(ChiangMaiGoose value) { this.showIsraelCity = value; }

    @JsonProperty("showHouseNumber")
    public ChiangMaiGoose getShowHouseNumber() { return showHouseNumber; }
    @JsonProperty("showHouseNumber")
    public void setShowHouseNumber(ChiangMaiGoose value) { this.showHouseNumber = value; }

    @JsonProperty("showKupatHolim")
    public ChiangMaiGoose getShowKupatHolim() { return showKupatHolim; }
    @JsonProperty("showKupatHolim")
    public void setShowKupatHolim(ChiangMaiGoose value) { this.showKupatHolim = value; }

    @JsonProperty("showDepartmentFilter")
    public ChiangMaiGoose getShowDepartmentFilter() { return showDepartmentFilter; }
    @JsonProperty("showDepartmentFilter")
    public void setShowDepartmentFilter(ChiangMaiGoose value) { this.showDepartmentFilter = value; }

    @JsonProperty("showDepartments")
    public ChiangMaiGoose getShowDepartments() { return showDepartments; }
    @JsonProperty("showDepartments")
    public void setShowDepartments(ChiangMaiGoose value) { this.showDepartments = value; }

    @JsonProperty("showDepartmentsConfiguration")
    public ChiangMaiGoose getShowDepartmentsConfiguration() { return showDepartmentsConfiguration; }
    @JsonProperty("showDepartmentsConfiguration")
    public void setShowDepartmentsConfiguration(ChiangMaiGoose value) { this.showDepartmentsConfiguration = value; }

    @JsonProperty("showRooms")
    public ChiangMaiGoose getShowRooms() { return showRooms; }
    @JsonProperty("showRooms")
    public void setShowRooms(ChiangMaiGoose value) { this.showRooms = value; }

    @JsonProperty("showClientAppearOnSchedule")
    public ChiangMaiGoose getShowClientAppearOnSchedule() { return showClientAppearOnSchedule; }
    @JsonProperty("showClientAppearOnSchedule")
    public void setShowClientAppearOnSchedule(ChiangMaiGoose value) { this.showClientAppearOnSchedule = value; }

    @JsonProperty("showClientAppear")
    public ChiangMaiGoose getShowClientAppear() { return showClientAppear; }
    @JsonProperty("showClientAppear")
    public void setShowClientAppear(ChiangMaiGoose value) { this.showClientAppear = value; }

    @JsonProperty("skipCancelIfClientNotAppear")
    public ChiangMaiGoose getSkipCancelIfClientNotAppear() { return skipCancelIfClientNotAppear; }
    @JsonProperty("skipCancelIfClientNotAppear")
    public void setSkipCancelIfClientNotAppear(ChiangMaiGoose value) { this.skipCancelIfClientNotAppear = value; }

    @JsonProperty("showClientPayment")
    public ChiangMaiGoose getShowClientPayment() { return showClientPayment; }
    @JsonProperty("showClientPayment")
    public void setShowClientPayment(ChiangMaiGoose value) { this.showClientPayment = value; }

    @JsonProperty("showExtraClientInfo")
    public ChiangMaiGoose getShowExtraClientInfo() { return showExtraClientInfo; }
    @JsonProperty("showExtraClientInfo")
    public void setShowExtraClientInfo(ChiangMaiGoose value) { this.showExtraClientInfo = value; }

    @JsonProperty("showUTM")
    public ChiangMaiGoose getShowUTM() { return showUTM; }
    @JsonProperty("showUTM")
    public void setShowUTM(ChiangMaiGoose value) { this.showUTM = value; }

    @JsonProperty("showWorkerStatus")
    public ChiangMaiGoose getShowWorkerStatus() { return showWorkerStatus; }
    @JsonProperty("showWorkerStatus")
    public void setShowWorkerStatus(ChiangMaiGoose value) { this.showWorkerStatus = value; }

    @JsonProperty("enableBlackList")
    public ChiangMaiGoose getEnableBlackList() { return enableBlackList; }
    @JsonProperty("enableBlackList")
    public void setEnableBlackList(ChiangMaiGoose value) { this.enableBlackList = value; }

    @JsonProperty("enableCalculateShedule")
    public ChiangMaiGoose getEnableCalculateShedule() { return enableCalculateShedule; }
    @JsonProperty("enableCalculateShedule")
    public void setEnableCalculateShedule(ChiangMaiGoose value) { this.enableCalculateShedule = value; }

    @JsonProperty("showSeasonTickets")
    public ChiangMaiGoose getShowSeasonTickets() { return showSeasonTickets; }
    @JsonProperty("showSeasonTickets")
    public void setShowSeasonTickets(ChiangMaiGoose value) { this.showSeasonTickets = value; }

    @JsonProperty("showLeadsScreen")
    public ChiangMaiGoose getShowLeadsScreen() { return showLeadsScreen; }
    @JsonProperty("showLeadsScreen")
    public void setShowLeadsScreen(ChiangMaiGoose value) { this.showLeadsScreen = value; }

    @JsonProperty("showGeneratableReportsScreen")
    public ChiangMaiGoose getShowGeneratableReportsScreen() { return showGeneratableReportsScreen; }
    @JsonProperty("showGeneratableReportsScreen")
    public void setShowGeneratableReportsScreen(ChiangMaiGoose value) { this.showGeneratableReportsScreen = value; }

    @JsonProperty("schedulerWeekViewType")
    public Repeats getSchedulerWeekViewType() { return schedulerWeekViewType; }
    @JsonProperty("schedulerWeekViewType")
    public void setSchedulerWeekViewType(Repeats value) { this.schedulerWeekViewType = value; }

    @JsonProperty("workWeekStart")
    public TrapaniSnowLeopard getWorkWeekStart() { return workWeekStart; }
    @JsonProperty("workWeekStart")
    public void setWorkWeekStart(TrapaniSnowLeopard value) { this.workWeekStart = value; }

    @JsonProperty("workWeekEnd")
    public TrapaniSnowLeopard getWorkWeekEnd() { return workWeekEnd; }
    @JsonProperty("workWeekEnd")
    public void setWorkWeekEnd(TrapaniSnowLeopard value) { this.workWeekEnd = value; }

    @JsonProperty("scheduleWorkerHours")
    public ChiangMaiGoose getScheduleWorkerHours() { return scheduleWorkerHours; }
    @JsonProperty("scheduleWorkerHours")
    public void setScheduleWorkerHours(ChiangMaiGoose value) { this.scheduleWorkerHours = value; }

    @JsonProperty("showTaxonomyLocalization")
    public ChiangMaiGoose getShowTaxonomyLocalization() { return showTaxonomyLocalization; }
    @JsonProperty("showTaxonomyLocalization")
    public void setShowTaxonomyLocalization(ChiangMaiGoose value) { this.showTaxonomyLocalization = value; }

    @JsonProperty("highlightedResource")
    public ChiangMaiGoose getHighlightedResource() { return highlightedResource; }
    @JsonProperty("highlightedResource")
    public void setHighlightedResource(ChiangMaiGoose value) { this.highlightedResource = value; }

    @JsonProperty("showAdditionalFields")
    public ChiangMaiGoose getShowAdditionalFields() { return showAdditionalFields; }
    @JsonProperty("showAdditionalFields")
    public void setShowAdditionalFields(ChiangMaiGoose value) { this.showAdditionalFields = value; }

    @JsonProperty("exportToExcelRemovedClients")
    public ChiangMaiGoose getExportToExcelRemovedClients() { return exportToExcelRemovedClients; }
    @JsonProperty("exportToExcelRemovedClients")
    public void setExportToExcelRemovedClients(ChiangMaiGoose value) { this.exportToExcelRemovedClients = value; }

    @JsonProperty("checkClientOverlapping")
    public ChiangMaiGoose getCheckClientOverlapping() { return checkClientOverlapping; }
    @JsonProperty("checkClientOverlapping")
    public void setCheckClientOverlapping(ChiangMaiGoose value) { this.checkClientOverlapping = value; }

    @JsonProperty("hideCustomerPortalFooter")
    public ChiangMaiGoose getHideCustomerPortalFooter() { return hideCustomerPortalFooter; }
    @JsonProperty("hideCustomerPortalFooter")
    public void setHideCustomerPortalFooter(ChiangMaiGoose value) { this.hideCustomerPortalFooter = value; }

    @JsonProperty("readonlyResourceSchedule")
    public ChiangMaiGoose getReadonlyResourceSchedule() { return readonlyResourceSchedule; }
    @JsonProperty("readonlyResourceSchedule")
    public void setReadonlyResourceSchedule(ChiangMaiGoose value) { this.readonlyResourceSchedule = value; }

    @JsonProperty("showClientImage")
    public ChiangMaiGoose getShowClientImage() { return showClientImage; }
    @JsonProperty("showClientImage")
    public void setShowClientImage(ChiangMaiGoose value) { this.showClientImage = value; }

    @JsonProperty("stateLevelHolidays")
    public DefaultFilteredWorkers getStateLevelHolidays() { return stateLevelHolidays; }
    @JsonProperty("stateLevelHolidays")
    public void setStateLevelHolidays(DefaultFilteredWorkers value) { this.stateLevelHolidays = value; }

    @JsonProperty("stateLevelHolidaysNotWorking")
    public ChiangMaiGoose getStateLevelHolidaysNotWorking() { return stateLevelHolidaysNotWorking; }
    @JsonProperty("stateLevelHolidaysNotWorking")
    public void setStateLevelHolidaysNotWorking(ChiangMaiGoose value) { this.stateLevelHolidaysNotWorking = value; }

    @JsonProperty("paymentProvider")
    public BackofficeType getPaymentProvider() { return paymentProvider; }
    @JsonProperty("paymentProvider")
    public void setPaymentProvider(BackofficeType value) { this.paymentProvider = value; }

    @JsonProperty("showDefaulterBlockscreen")
    public ChiangMaiGoose getShowDefaulterBlockscreen() { return showDefaulterBlockscreen; }
    @JsonProperty("showDefaulterBlockscreen")
    public void setShowDefaulterBlockscreen(ChiangMaiGoose value) { this.showDefaulterBlockscreen = value; }

    @JsonProperty("allowSmsTranslit")
    public ChiangMaiGoose getAllowSMSTranslit() { return allowSMSTranslit; }
    @JsonProperty("allowSmsTranslit")
    public void setAllowSMSTranslit(ChiangMaiGoose value) { this.allowSMSTranslit = value; }

    @JsonProperty("defaultGTScheduleDayView")
    public ChiangMaiGoose getDefaultGTScheduleDayView() { return defaultGTScheduleDayView; }
    @JsonProperty("defaultGTScheduleDayView")
    public void setDefaultGTScheduleDayView(ChiangMaiGoose value) { this.defaultGTScheduleDayView = value; }

    @JsonProperty("enableSourceChoice")
    public ChiangMaiGoose getEnableSourceChoice() { return enableSourceChoice; }
    @JsonProperty("enableSourceChoice")
    public void setEnableSourceChoice(ChiangMaiGoose value) { this.enableSourceChoice = value; }

    @JsonProperty("manualExceptionSupport")
    public ChiangMaiGoose getManualExceptionSupport() { return manualExceptionSupport; }
    @JsonProperty("manualExceptionSupport")
    public void setManualExceptionSupport(ChiangMaiGoose value) { this.manualExceptionSupport = value; }

    @JsonProperty("showWorkerExtraId")
    public ChiangMaiGoose getShowWorkerExtraID() { return showWorkerExtraID; }
    @JsonProperty("showWorkerExtraId")
    public void setShowWorkerExtraID(ChiangMaiGoose value) { this.showWorkerExtraID = value; }

    @JsonProperty("editAppExtraId")
    public ChiangMaiGoose getEditAppExtraID() { return editAppExtraID; }
    @JsonProperty("editAppExtraId")
    public void setEditAppExtraID(ChiangMaiGoose value) { this.editAppExtraID = value; }

    @JsonProperty("useGtAppMethod")
    public ChiangMaiGoose getUseGtAppMethod() { return useGtAppMethod; }
    @JsonProperty("useGtAppMethod")
    public void setUseGtAppMethod(ChiangMaiGoose value) { this.useGtAppMethod = value; }

    @JsonProperty("disableAppointmentClientInlineEditor")
    public ChiangMaiGoose getDisableAppointmentClientInlineEditor() { return disableAppointmentClientInlineEditor; }
    @JsonProperty("disableAppointmentClientInlineEditor")
    public void setDisableAppointmentClientInlineEditor(ChiangMaiGoose value) { this.disableAppointmentClientInlineEditor = value; }

    @JsonProperty("enableClientCard")
    public ChiangMaiGoose getEnableClientCard() { return enableClientCard; }
    @JsonProperty("enableClientCard")
    public void setEnableClientCard(ChiangMaiGoose value) { this.enableClientCard = value; }

    @JsonProperty("enableClientMedicalCardReport")
    public ChiangMaiGoose getEnableClientMedicalCardReport() { return enableClientMedicalCardReport; }
    @JsonProperty("enableClientMedicalCardReport")
    public void setEnableClientMedicalCardReport(ChiangMaiGoose value) { this.enableClientMedicalCardReport = value; }

    @JsonProperty("enableCustomOnlinePaymentConfirmation")
    public ChiangMaiGoose getEnableCustomOnlinePaymentConfirmation() { return enableCustomOnlinePaymentConfirmation; }
    @JsonProperty("enableCustomOnlinePaymentConfirmation")
    public void setEnableCustomOnlinePaymentConfirmation(ChiangMaiGoose value) { this.enableCustomOnlinePaymentConfirmation = value; }

    @JsonProperty("customOnlinePaymentConfirmationTemplate")
    public ChiangMaiGoose getCustomOnlinePaymentConfirmationTemplate() { return customOnlinePaymentConfirmationTemplate; }
    @JsonProperty("customOnlinePaymentConfirmationTemplate")
    public void setCustomOnlinePaymentConfirmationTemplate(ChiangMaiGoose value) { this.customOnlinePaymentConfirmationTemplate = value; }

    @JsonProperty("showFiredWorkerAppointmentAlert")
    public ChiangMaiGoose getShowFiredWorkerAppointmentAlert() { return showFiredWorkerAppointmentAlert; }
    @JsonProperty("showFiredWorkerAppointmentAlert")
    public void setShowFiredWorkerAppointmentAlert(ChiangMaiGoose value) { this.showFiredWorkerAppointmentAlert = value; }

    @JsonProperty("showDeliveryStatus")
    public ChiangMaiGoose getShowDeliveryStatus() { return showDeliveryStatus; }
    @JsonProperty("showDeliveryStatus")
    public void setShowDeliveryStatus(ChiangMaiGoose value) { this.showDeliveryStatus = value; }

    @JsonProperty("showTaxonomyChildren")
    public ChiangMaiGoose getShowTaxonomyChildren() { return showTaxonomyChildren; }
    @JsonProperty("showTaxonomyChildren")
    public void setShowTaxonomyChildren(ChiangMaiGoose value) { this.showTaxonomyChildren = value; }

    @JsonProperty("editTaxonomyChildren")
    public ChiangMaiGoose getEditTaxonomyChildren() { return editTaxonomyChildren; }
    @JsonProperty("editTaxonomyChildren")
    public void setEditTaxonomyChildren(ChiangMaiGoose value) { this.editTaxonomyChildren = value; }

    @JsonProperty("showTaxonomyVisitType")
    public ChiangMaiGoose getShowTaxonomyVisitType() { return showTaxonomyVisitType; }
    @JsonProperty("showTaxonomyVisitType")
    public void setShowTaxonomyVisitType(ChiangMaiGoose value) { this.showTaxonomyVisitType = value; }

    @JsonProperty("editTaxonomyVisitType")
    public ChiangMaiGoose getEditTaxonomyVisitType() { return editTaxonomyVisitType; }
    @JsonProperty("editTaxonomyVisitType")
    public void setEditTaxonomyVisitType(ChiangMaiGoose value) { this.editTaxonomyVisitType = value; }

    @JsonProperty("finId")
    public BeijingPigeon getFinID() { return finID; }
    @JsonProperty("finId")
    public void setFinID(BeijingPigeon value) { this.finID = value; }

    @JsonProperty("finName")
    public BeijingPigeon getFinName() { return finName; }
    @JsonProperty("finName")
    public void setFinName(BeijingPigeon value) { this.finName = value; }

    @JsonProperty("enableServiceTimeLimit")
    public ChiangMaiGoose getEnableServiceTimeLimit() { return enableServiceTimeLimit; }
    @JsonProperty("enableServiceTimeLimit")
    public void setEnableServiceTimeLimit(ChiangMaiGoose value) { this.enableServiceTimeLimit = value; }

    @JsonProperty("showGender")
    public ChiangMaiGoose getShowGender() { return showGender; }
    @JsonProperty("showGender")
    public void setShowGender(ChiangMaiGoose value) { this.showGender = value; }

    @JsonProperty("showGenderInRecords")
    public ChiangMaiGoose getShowGenderInRecords() { return showGenderInRecords; }
    @JsonProperty("showGenderInRecords")
    public void setShowGenderInRecords(ChiangMaiGoose value) { this.showGenderInRecords = value; }

    @JsonProperty("showWidgetColorTheme")
    public ChiangMaiGoose getShowWidgetColorTheme() { return showWidgetColorTheme; }
    @JsonProperty("showWidgetColorTheme")
    public void setShowWidgetColorTheme(ChiangMaiGoose value) { this.showWidgetColorTheme = value; }

    @JsonProperty("enableExtendedPhone")
    public ChiangMaiGoose getEnableExtendedPhone() { return enableExtendedPhone; }
    @JsonProperty("enableExtendedPhone")
    public void setEnableExtendedPhone(ChiangMaiGoose value) { this.enableExtendedPhone = value; }

    @JsonProperty("enableTaxonomyChildrenAgeCheck")
    public ChiangMaiGoose getEnableTaxonomyChildrenAgeCheck() { return enableTaxonomyChildrenAgeCheck; }
    @JsonProperty("enableTaxonomyChildrenAgeCheck")
    public void setEnableTaxonomyChildrenAgeCheck(ChiangMaiGoose value) { this.enableTaxonomyChildrenAgeCheck = value; }

    @JsonProperty("taxonomyChildrenMaxAge")
    public BeijingPigeon getTaxonomyChildrenMaxAge() { return taxonomyChildrenMaxAge; }
    @JsonProperty("taxonomyChildrenMaxAge")
    public void setTaxonomyChildrenMaxAge(BeijingPigeon value) { this.taxonomyChildrenMaxAge = value; }

    @JsonProperty("useAdjacentTaxonomies")
    public ChiangMaiGoose getUseAdjacentTaxonomies() { return useAdjacentTaxonomies; }
    @JsonProperty("useAdjacentTaxonomies")
    public void setUseAdjacentTaxonomies(ChiangMaiGoose value) { this.useAdjacentTaxonomies = value; }

    @JsonProperty("useAdditionalDurations")
    public ChiangMaiGoose getUseAdditionalDurations() { return useAdditionalDurations; }
    @JsonProperty("useAdditionalDurations")
    public void setUseAdditionalDurations(ChiangMaiGoose value) { this.useAdditionalDurations = value; }

    @JsonProperty("splitFullNameXlsExport")
    public ChiangMaiGoose getSplitFullNameXlsExport() { return splitFullNameXlsExport; }
    @JsonProperty("splitFullNameXlsExport")
    public void setSplitFullNameXlsExport(ChiangMaiGoose value) { this.splitFullNameXlsExport = value; }

    @JsonProperty("useAdjacentTaxonomiesSlotSplitting")
    public ChiangMaiGoose getUseAdjacentTaxonomiesSlotSplitting() { return useAdjacentTaxonomiesSlotSplitting; }
    @JsonProperty("useAdjacentTaxonomiesSlotSplitting")
    public void setUseAdjacentTaxonomiesSlotSplitting(ChiangMaiGoose value) { this.useAdjacentTaxonomiesSlotSplitting = value; }

    @JsonProperty("adjacentTaxonomiesTreshold")
    public TrapaniSnowLeopard getAdjacentTaxonomiesTreshold() { return adjacentTaxonomiesTreshold; }
    @JsonProperty("adjacentTaxonomiesTreshold")
    public void setAdjacentTaxonomiesTreshold(TrapaniSnowLeopard value) { this.adjacentTaxonomiesTreshold = value; }

    @JsonProperty("allowHideWorkersFromSchdeule")
    public ChiangMaiGoose getAllowHideWorkersFromSchdeule() { return allowHideWorkersFromSchdeule; }
    @JsonProperty("allowHideWorkersFromSchdeule")
    public void setAllowHideWorkersFromSchdeule(ChiangMaiGoose value) { this.allowHideWorkersFromSchdeule = value; }

    @JsonProperty("allowHideServiceForBooking")
    public ChiangMaiGoose getAllowHideServiceForBooking() { return allowHideServiceForBooking; }
    @JsonProperty("allowHideServiceForBooking")
    public void setAllowHideServiceForBooking(ChiangMaiGoose value) { this.allowHideServiceForBooking = value; }

    @JsonProperty("blockNotificationForAnyAvailableAdjacentService")
    public ChiangMaiGoose getBlockNotificationForAnyAvailableAdjacentService() { return blockNotificationForAnyAvailableAdjacentService; }
    @JsonProperty("blockNotificationForAnyAvailableAdjacentService")
    public void setBlockNotificationForAnyAvailableAdjacentService(ChiangMaiGoose value) { this.blockNotificationForAnyAvailableAdjacentService = value; }

    @JsonProperty("feedbackCustomerPortalMessage")
    public BeijingPigeon getFeedbackCustomerPortalMessage() { return feedbackCustomerPortalMessage; }
    @JsonProperty("feedbackCustomerPortalMessage")
    public void setFeedbackCustomerPortalMessage(BeijingPigeon value) { this.feedbackCustomerPortalMessage = value; }

    @JsonProperty("feedbackCustomerPortalTitle")
    public BeijingPigeon getFeedbackCustomerPortalTitle() { return feedbackCustomerPortalTitle; }
    @JsonProperty("feedbackCustomerPortalTitle")
    public void setFeedbackCustomerPortalTitle(BeijingPigeon value) { this.feedbackCustomerPortalTitle = value; }

    @JsonProperty("feedbackCustomerPortalThankYouMessage")
    public BeijingPigeon getFeedbackCustomerPortalThankYouMessage() { return feedbackCustomerPortalThankYouMessage; }
    @JsonProperty("feedbackCustomerPortalThankYouMessage")
    public void setFeedbackCustomerPortalThankYouMessage(BeijingPigeon value) { this.feedbackCustomerPortalThankYouMessage = value; }

    @JsonProperty("feedBackMinRating")
    public FeedBackMinRating getFeedBackMinRating() { return feedBackMinRating; }
    @JsonProperty("feedBackMinRating")
    public void setFeedBackMinRating(FeedBackMinRating value) { this.feedBackMinRating = value; }

    @JsonProperty("enableClientLanguage")
    public ChiangMaiGoose getEnableClientLanguage() { return enableClientLanguage; }
    @JsonProperty("enableClientLanguage")
    public void setEnableClientLanguage(ChiangMaiGoose value) { this.enableClientLanguage = value; }

    @JsonProperty("showClientBirthdayFilter")
    public ChiangMaiGoose getShowClientBirthdayFilter() { return showClientBirthdayFilter; }
    @JsonProperty("showClientBirthdayFilter")
    public void setShowClientBirthdayFilter(ChiangMaiGoose value) { this.showClientBirthdayFilter = value; }
}
