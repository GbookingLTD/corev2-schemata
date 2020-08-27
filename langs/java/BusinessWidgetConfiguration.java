package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.util.List;
import java.util.Map;

public class BusinessWidgetConfiguration {
    private String additionalName;
    private Boolean alignmentTaxonomySlots;
    private Boolean allowAutoSelect;
    private Boolean allowBookVisitor;
    private Boolean allowSkipTimeCheck;
    private FluffyAnalyticsGoogle analyticsGoogle;
    private FluffyAnalyticsYandex analyticsYandex;
    private String appointmentConfirmationText;
    private String appointmentConfirmationTitle;
    private Boolean askClientBirthday;
    private Boolean askClientGender;
    private Boolean askClientPassportID;
    private FluffyBookableDateRanges bookableDateRanges;
    private Double bookableMonthsCount;
    private Boolean calendarMode;
    private Boolean calendarModeHideTime;
    private FluffyClientBlockingSettings clientBlockingSettings;
    private String clientCommentTitle;
    private CracServer cracServer;
    private Double cracSlotSize;
    private Boolean crunchv2;
    private String dayOffLabel;
    private Double daysForward;
    private String dayUnavailableLabel;
    private String defaultServiceImgURL;
    private String defaultWorkerImgURL;
    private Boolean denySameTimeRecords;
    private String disabledTaxonomiesText;
    private Boolean disableMobileWidget;
    private Boolean disableWidget;
    private String disableWidgetMessage;
    private FluffyDiscountedPriceRounding discountedPriceRounding;
    private Double displaySlotSize;
    private Boolean dontRequireEmail;
    private Boolean emailIsMandatory;
    private Boolean enableOverrideFooter;
    private Boolean enableWarningContactData;
    private Boolean extraVisitors;
    private Boolean filterNonInsuranceSchedule;
    private Boolean hideAnyWorkerBooking;
    private Boolean hideCallButton;
    private Boolean hideEmptyDays;
    private Boolean hideGBookingLogo;
    private Boolean hideGraySlots;
    private Boolean hideNewAppointmentButton;
    private Boolean hidePrices;
    private Boolean hideSocialNetworksAuthentication;
    private List<FaxElement> insuranceClientSupportPhone;
    private Double maxServiceBooking;
    private Double maxTimeslotBooking;
    private Boolean middleNameSupport;
    private Boolean mostFreeEnable;
    private Boolean multiServiceBooking;
    private Boolean multiTimeslotBooking;
    private Boolean multiTimeslotBookingAllDays;
    private Map<String, Object> newWidgetTheme;
    private Boolean noDefaultImages;
    private String overrideFooter;
    private Payment payment;
    private PaymentProvider paymentProvider;
    private Boolean requireAgreement;
    private String requireAgreementLink;
    private Double revisionVersion;
    private String serviceUnavailabilityText;
    private String shortLink;
    private Boolean showAllWorkers;
    private Boolean showClientAddress;
    private Boolean showClientComment;
    private Boolean showDisabledTaxonomies;
    private Boolean showDrinkQuestion;
    private Boolean showMap;
    private Boolean showStartText;
    private Boolean showSurnameFirst;
    private Boolean showTalkQuestion;
    private Boolean showTaxonomyConfirmationAlert;
    private Boolean skipAuthentication;
    private Boolean skipDaysForward;
    private Boolean skipMobileMap;
    private Boolean skipServiceDurationAlignment;
    private Boolean skipServiceSelection;
    private Boolean skipTimeSelection;
    private List<String> skipTimeSelectionServiceIDs;
    private List<String> skipWorkerSelectedServiceIDs;
    private Boolean skipWorkerServicesSelection;
    private String socialNetworkImage;
    private FluffySocialSharing socialSharing;
    private Boolean sortByMostFree;
    private Boolean sortWorkersByWorkload;
    private Boolean splitInsuranceClient;
    private Boolean splitName;
    private String startTextButton;
    private String startTextMessage;
    private Boolean strictSlotCutting;
    private Double tentativeTTL;
    private String theme;
    private Boolean toggleReminder;
    private Boolean useAppointmentReminder;
    private Boolean useBusinessScheduleForUnavailableLabel;
    private Boolean useClustersMap;
    private Boolean useCoupon;
    private Boolean useCRAC;
    private Boolean useDefaultServiceImg;
    private Boolean useDefaultWorkerImg;
    private UseDirectScheduleRead useDirectScheduleRead;
    private Boolean useInsuranceGuaranteeLetter;
    private Boolean useInsuranceSelect;
    private Boolean useMedAuth;
    private Boolean useMiddleName;
    private Boolean useNewReserveAPI;
    private Boolean useResourcePageLoading;
    private Boolean useSortByName;
    private String warningContactDataText;
    private Boolean widgetUseCRAC;
    private Boolean withoutWorkers;
    private String workerUnavailabilityText;
    private String workerWidgetUnavailabilityText;
    private Boolean workerNameReverse;

    @JsonProperty("additionalName")
    public String getAdditionalName() { return additionalName; }
    @JsonProperty("additionalName")
    public void setAdditionalName(String value) { this.additionalName = value; }

    @JsonProperty("alignmentTaxonomySlots")
    public Boolean getAlignmentTaxonomySlots() { return alignmentTaxonomySlots; }
    @JsonProperty("alignmentTaxonomySlots")
    public void setAlignmentTaxonomySlots(Boolean value) { this.alignmentTaxonomySlots = value; }

    @JsonProperty("allowAutoSelect")
    public Boolean getAllowAutoSelect() { return allowAutoSelect; }
    @JsonProperty("allowAutoSelect")
    public void setAllowAutoSelect(Boolean value) { this.allowAutoSelect = value; }

    @JsonProperty("allowBookVisitor")
    public Boolean getAllowBookVisitor() { return allowBookVisitor; }
    @JsonProperty("allowBookVisitor")
    public void setAllowBookVisitor(Boolean value) { this.allowBookVisitor = value; }

    @JsonProperty("allowSkipTimeCheck")
    public Boolean getAllowSkipTimeCheck() { return allowSkipTimeCheck; }
    @JsonProperty("allowSkipTimeCheck")
    public void setAllowSkipTimeCheck(Boolean value) { this.allowSkipTimeCheck = value; }

    @JsonProperty("analyticsGoogle")
    public FluffyAnalyticsGoogle getAnalyticsGoogle() { return analyticsGoogle; }
    @JsonProperty("analyticsGoogle")
    public void setAnalyticsGoogle(FluffyAnalyticsGoogle value) { this.analyticsGoogle = value; }

    @JsonProperty("analyticsYandex")
    public FluffyAnalyticsYandex getAnalyticsYandex() { return analyticsYandex; }
    @JsonProperty("analyticsYandex")
    public void setAnalyticsYandex(FluffyAnalyticsYandex value) { this.analyticsYandex = value; }

    @JsonProperty("appointment_confirmation_text")
    public String getAppointmentConfirmationText() { return appointmentConfirmationText; }
    @JsonProperty("appointment_confirmation_text")
    public void setAppointmentConfirmationText(String value) { this.appointmentConfirmationText = value; }

    @JsonProperty("appointment_confirmation_title")
    public String getAppointmentConfirmationTitle() { return appointmentConfirmationTitle; }
    @JsonProperty("appointment_confirmation_title")
    public void setAppointmentConfirmationTitle(String value) { this.appointmentConfirmationTitle = value; }

    @JsonProperty("askClientBirthday")
    public Boolean getAskClientBirthday() { return askClientBirthday; }
    @JsonProperty("askClientBirthday")
    public void setAskClientBirthday(Boolean value) { this.askClientBirthday = value; }

    @JsonProperty("askClientGender")
    public Boolean getAskClientGender() { return askClientGender; }
    @JsonProperty("askClientGender")
    public void setAskClientGender(Boolean value) { this.askClientGender = value; }

    @JsonProperty("askClientPassportID")
    public Boolean getAskClientPassportID() { return askClientPassportID; }
    @JsonProperty("askClientPassportID")
    public void setAskClientPassportID(Boolean value) { this.askClientPassportID = value; }

    @JsonProperty("bookableDateRanges")
    public FluffyBookableDateRanges getBookableDateRanges() { return bookableDateRanges; }
    @JsonProperty("bookableDateRanges")
    public void setBookableDateRanges(FluffyBookableDateRanges value) { this.bookableDateRanges = value; }

    @JsonProperty("bookableMonthsCount")
    public Double getBookableMonthsCount() { return bookableMonthsCount; }
    @JsonProperty("bookableMonthsCount")
    public void setBookableMonthsCount(Double value) { this.bookableMonthsCount = value; }

    @JsonProperty("calendarMode")
    public Boolean getCalendarMode() { return calendarMode; }
    @JsonProperty("calendarMode")
    public void setCalendarMode(Boolean value) { this.calendarMode = value; }

    @JsonProperty("calendarModeHideTime")
    public Boolean getCalendarModeHideTime() { return calendarModeHideTime; }
    @JsonProperty("calendarModeHideTime")
    public void setCalendarModeHideTime(Boolean value) { this.calendarModeHideTime = value; }

    @JsonProperty("clientBlockingSettings")
    public FluffyClientBlockingSettings getClientBlockingSettings() { return clientBlockingSettings; }
    @JsonProperty("clientBlockingSettings")
    public void setClientBlockingSettings(FluffyClientBlockingSettings value) { this.clientBlockingSettings = value; }

    @JsonProperty("clientCommentTitle")
    public String getClientCommentTitle() { return clientCommentTitle; }
    @JsonProperty("clientCommentTitle")
    public void setClientCommentTitle(String value) { this.clientCommentTitle = value; }

    @JsonProperty("cracServer")
    public CracServer getCracServer() { return cracServer; }
    @JsonProperty("cracServer")
    public void setCracServer(CracServer value) { this.cracServer = value; }

    @JsonProperty("cracSlotSize")
    public Double getCracSlotSize() { return cracSlotSize; }
    @JsonProperty("cracSlotSize")
    public void setCracSlotSize(Double value) { this.cracSlotSize = value; }

    @JsonProperty("crunchv2")
    public Boolean getCrunchv2() { return crunchv2; }
    @JsonProperty("crunchv2")
    public void setCrunchv2(Boolean value) { this.crunchv2 = value; }

    @JsonProperty("dayOffLabel")
    public String getDayOffLabel() { return dayOffLabel; }
    @JsonProperty("dayOffLabel")
    public void setDayOffLabel(String value) { this.dayOffLabel = value; }

    @JsonProperty("daysForward")
    public Double getDaysForward() { return daysForward; }
    @JsonProperty("daysForward")
    public void setDaysForward(Double value) { this.daysForward = value; }

    @JsonProperty("dayUnavailableLabel")
    public String getDayUnavailableLabel() { return dayUnavailableLabel; }
    @JsonProperty("dayUnavailableLabel")
    public void setDayUnavailableLabel(String value) { this.dayUnavailableLabel = value; }

    @JsonProperty("defaultServiceImgUrl")
    public String getDefaultServiceImgURL() { return defaultServiceImgURL; }
    @JsonProperty("defaultServiceImgUrl")
    public void setDefaultServiceImgURL(String value) { this.defaultServiceImgURL = value; }

    @JsonProperty("defaultWorkerImgUrl")
    public String getDefaultWorkerImgURL() { return defaultWorkerImgURL; }
    @JsonProperty("defaultWorkerImgUrl")
    public void setDefaultWorkerImgURL(String value) { this.defaultWorkerImgURL = value; }

    @JsonProperty("denySameTimeRecords")
    public Boolean getDenySameTimeRecords() { return denySameTimeRecords; }
    @JsonProperty("denySameTimeRecords")
    public void setDenySameTimeRecords(Boolean value) { this.denySameTimeRecords = value; }

    @JsonProperty("disabledTaxonomiesText")
    public String getDisabledTaxonomiesText() { return disabledTaxonomiesText; }
    @JsonProperty("disabledTaxonomiesText")
    public void setDisabledTaxonomiesText(String value) { this.disabledTaxonomiesText = value; }

    @JsonProperty("disableMobileWidget")
    public Boolean getDisableMobileWidget() { return disableMobileWidget; }
    @JsonProperty("disableMobileWidget")
    public void setDisableMobileWidget(Boolean value) { this.disableMobileWidget = value; }

    @JsonProperty("disableWidget")
    public Boolean getDisableWidget() { return disableWidget; }
    @JsonProperty("disableWidget")
    public void setDisableWidget(Boolean value) { this.disableWidget = value; }

    @JsonProperty("disableWidgetMessage")
    public String getDisableWidgetMessage() { return disableWidgetMessage; }
    @JsonProperty("disableWidgetMessage")
    public void setDisableWidgetMessage(String value) { this.disableWidgetMessage = value; }

    @JsonProperty("discountedPriceRounding")
    public FluffyDiscountedPriceRounding getDiscountedPriceRounding() { return discountedPriceRounding; }
    @JsonProperty("discountedPriceRounding")
    public void setDiscountedPriceRounding(FluffyDiscountedPriceRounding value) { this.discountedPriceRounding = value; }

    @JsonProperty("displaySlotSize")
    public Double getDisplaySlotSize() { return displaySlotSize; }
    @JsonProperty("displaySlotSize")
    public void setDisplaySlotSize(Double value) { this.displaySlotSize = value; }

    @JsonProperty("dontRequireEmail")
    public Boolean getDontRequireEmail() { return dontRequireEmail; }
    @JsonProperty("dontRequireEmail")
    public void setDontRequireEmail(Boolean value) { this.dontRequireEmail = value; }

    @JsonProperty("emailIsMandatory")
    public Boolean getEmailIsMandatory() { return emailIsMandatory; }
    @JsonProperty("emailIsMandatory")
    public void setEmailIsMandatory(Boolean value) { this.emailIsMandatory = value; }

    @JsonProperty("enableOverrideFooter")
    public Boolean getEnableOverrideFooter() { return enableOverrideFooter; }
    @JsonProperty("enableOverrideFooter")
    public void setEnableOverrideFooter(Boolean value) { this.enableOverrideFooter = value; }

    @JsonProperty("enableWarningContactData")
    public Boolean getEnableWarningContactData() { return enableWarningContactData; }
    @JsonProperty("enableWarningContactData")
    public void setEnableWarningContactData(Boolean value) { this.enableWarningContactData = value; }

    @JsonProperty("extraVisitors")
    public Boolean getExtraVisitors() { return extraVisitors; }
    @JsonProperty("extraVisitors")
    public void setExtraVisitors(Boolean value) { this.extraVisitors = value; }

    @JsonProperty("filterNonInsuranceSchedule")
    public Boolean getFilterNonInsuranceSchedule() { return filterNonInsuranceSchedule; }
    @JsonProperty("filterNonInsuranceSchedule")
    public void setFilterNonInsuranceSchedule(Boolean value) { this.filterNonInsuranceSchedule = value; }

    @JsonProperty("hideAnyWorkerBooking")
    public Boolean getHideAnyWorkerBooking() { return hideAnyWorkerBooking; }
    @JsonProperty("hideAnyWorkerBooking")
    public void setHideAnyWorkerBooking(Boolean value) { this.hideAnyWorkerBooking = value; }

    @JsonProperty("hideCallButton")
    public Boolean getHideCallButton() { return hideCallButton; }
    @JsonProperty("hideCallButton")
    public void setHideCallButton(Boolean value) { this.hideCallButton = value; }

    @JsonProperty("hideEmptyDays")
    public Boolean getHideEmptyDays() { return hideEmptyDays; }
    @JsonProperty("hideEmptyDays")
    public void setHideEmptyDays(Boolean value) { this.hideEmptyDays = value; }

    @JsonProperty("hideGBookingLogo")
    public Boolean getHideGBookingLogo() { return hideGBookingLogo; }
    @JsonProperty("hideGBookingLogo")
    public void setHideGBookingLogo(Boolean value) { this.hideGBookingLogo = value; }

    @JsonProperty("hideGraySlots")
    public Boolean getHideGraySlots() { return hideGraySlots; }
    @JsonProperty("hideGraySlots")
    public void setHideGraySlots(Boolean value) { this.hideGraySlots = value; }

    @JsonProperty("hideNewAppointmentButton")
    public Boolean getHideNewAppointmentButton() { return hideNewAppointmentButton; }
    @JsonProperty("hideNewAppointmentButton")
    public void setHideNewAppointmentButton(Boolean value) { this.hideNewAppointmentButton = value; }

    @JsonProperty("hidePrices")
    public Boolean getHidePrices() { return hidePrices; }
    @JsonProperty("hidePrices")
    public void setHidePrices(Boolean value) { this.hidePrices = value; }

    @JsonProperty("hideSocialNetworksAuthentication")
    public Boolean getHideSocialNetworksAuthentication() { return hideSocialNetworksAuthentication; }
    @JsonProperty("hideSocialNetworksAuthentication")
    public void setHideSocialNetworksAuthentication(Boolean value) { this.hideSocialNetworksAuthentication = value; }

    @JsonProperty("insuranceClientSupportPhone")
    public List<FaxElement> getInsuranceClientSupportPhone() { return insuranceClientSupportPhone; }
    @JsonProperty("insuranceClientSupportPhone")
    public void setInsuranceClientSupportPhone(List<FaxElement> value) { this.insuranceClientSupportPhone = value; }

    @JsonProperty("maxServiceBooking")
    public Double getMaxServiceBooking() { return maxServiceBooking; }
    @JsonProperty("maxServiceBooking")
    public void setMaxServiceBooking(Double value) { this.maxServiceBooking = value; }

    @JsonProperty("maxTimeslotBooking")
    public Double getMaxTimeslotBooking() { return maxTimeslotBooking; }
    @JsonProperty("maxTimeslotBooking")
    public void setMaxTimeslotBooking(Double value) { this.maxTimeslotBooking = value; }

    @JsonProperty("middleNameSupport")
    public Boolean getMiddleNameSupport() { return middleNameSupport; }
    @JsonProperty("middleNameSupport")
    public void setMiddleNameSupport(Boolean value) { this.middleNameSupport = value; }

    @JsonProperty("mostFreeEnable")
    public Boolean getMostFreeEnable() { return mostFreeEnable; }
    @JsonProperty("mostFreeEnable")
    public void setMostFreeEnable(Boolean value) { this.mostFreeEnable = value; }

    @JsonProperty("multiServiceBooking")
    public Boolean getMultiServiceBooking() { return multiServiceBooking; }
    @JsonProperty("multiServiceBooking")
    public void setMultiServiceBooking(Boolean value) { this.multiServiceBooking = value; }

    @JsonProperty("multiTimeslotBooking")
    public Boolean getMultiTimeslotBooking() { return multiTimeslotBooking; }
    @JsonProperty("multiTimeslotBooking")
    public void setMultiTimeslotBooking(Boolean value) { this.multiTimeslotBooking = value; }

    @JsonProperty("multiTimeslotBookingAllDays")
    public Boolean getMultiTimeslotBookingAllDays() { return multiTimeslotBookingAllDays; }
    @JsonProperty("multiTimeslotBookingAllDays")
    public void setMultiTimeslotBookingAllDays(Boolean value) { this.multiTimeslotBookingAllDays = value; }

    @JsonProperty("newWidgetTheme")
    public Map<String, Object> getNewWidgetTheme() { return newWidgetTheme; }
    @JsonProperty("newWidgetTheme")
    public void setNewWidgetTheme(Map<String, Object> value) { this.newWidgetTheme = value; }

    @JsonProperty("noDefaultImages")
    public Boolean getNoDefaultImages() { return noDefaultImages; }
    @JsonProperty("noDefaultImages")
    public void setNoDefaultImages(Boolean value) { this.noDefaultImages = value; }

    @JsonProperty("overrideFooter")
    public String getOverrideFooter() { return overrideFooter; }
    @JsonProperty("overrideFooter")
    public void setOverrideFooter(String value) { this.overrideFooter = value; }

    @JsonProperty("payment")
    public Payment getPayment() { return payment; }
    @JsonProperty("payment")
    public void setPayment(Payment value) { this.payment = value; }

    @JsonProperty("paymentProvider")
    public PaymentProvider getPaymentProvider() { return paymentProvider; }
    @JsonProperty("paymentProvider")
    public void setPaymentProvider(PaymentProvider value) { this.paymentProvider = value; }

    @JsonProperty("requireAgreement")
    public Boolean getRequireAgreement() { return requireAgreement; }
    @JsonProperty("requireAgreement")
    public void setRequireAgreement(Boolean value) { this.requireAgreement = value; }

    @JsonProperty("requireAgreementLink")
    public String getRequireAgreementLink() { return requireAgreementLink; }
    @JsonProperty("requireAgreementLink")
    public void setRequireAgreementLink(String value) { this.requireAgreementLink = value; }

    @JsonProperty("revisionVersion")
    public Double getRevisionVersion() { return revisionVersion; }
    @JsonProperty("revisionVersion")
    public void setRevisionVersion(Double value) { this.revisionVersion = value; }

    @JsonProperty("service_unavailability_text")
    public String getServiceUnavailabilityText() { return serviceUnavailabilityText; }
    @JsonProperty("service_unavailability_text")
    public void setServiceUnavailabilityText(String value) { this.serviceUnavailabilityText = value; }

    @JsonProperty("shortLink")
    public String getShortLink() { return shortLink; }
    @JsonProperty("shortLink")
    public void setShortLink(String value) { this.shortLink = value; }

    @JsonProperty("showAllWorkers")
    public Boolean getShowAllWorkers() { return showAllWorkers; }
    @JsonProperty("showAllWorkers")
    public void setShowAllWorkers(Boolean value) { this.showAllWorkers = value; }

    @JsonProperty("showClientAddress")
    public Boolean getShowClientAddress() { return showClientAddress; }
    @JsonProperty("showClientAddress")
    public void setShowClientAddress(Boolean value) { this.showClientAddress = value; }

    @JsonProperty("showClientComment")
    public Boolean getShowClientComment() { return showClientComment; }
    @JsonProperty("showClientComment")
    public void setShowClientComment(Boolean value) { this.showClientComment = value; }

    @JsonProperty("showDisabledTaxonomies")
    public Boolean getShowDisabledTaxonomies() { return showDisabledTaxonomies; }
    @JsonProperty("showDisabledTaxonomies")
    public void setShowDisabledTaxonomies(Boolean value) { this.showDisabledTaxonomies = value; }

    @JsonProperty("showDrinkQuestion")
    public Boolean getShowDrinkQuestion() { return showDrinkQuestion; }
    @JsonProperty("showDrinkQuestion")
    public void setShowDrinkQuestion(Boolean value) { this.showDrinkQuestion = value; }

    @JsonProperty("showMap")
    public Boolean getShowMap() { return showMap; }
    @JsonProperty("showMap")
    public void setShowMap(Boolean value) { this.showMap = value; }

    @JsonProperty("showStartText")
    public Boolean getShowStartText() { return showStartText; }
    @JsonProperty("showStartText")
    public void setShowStartText(Boolean value) { this.showStartText = value; }

    @JsonProperty("showSurnameFirst")
    public Boolean getShowSurnameFirst() { return showSurnameFirst; }
    @JsonProperty("showSurnameFirst")
    public void setShowSurnameFirst(Boolean value) { this.showSurnameFirst = value; }

    @JsonProperty("showTalkQuestion")
    public Boolean getShowTalkQuestion() { return showTalkQuestion; }
    @JsonProperty("showTalkQuestion")
    public void setShowTalkQuestion(Boolean value) { this.showTalkQuestion = value; }

    @JsonProperty("showTaxonomyConfirmationAlert")
    public Boolean getShowTaxonomyConfirmationAlert() { return showTaxonomyConfirmationAlert; }
    @JsonProperty("showTaxonomyConfirmationAlert")
    public void setShowTaxonomyConfirmationAlert(Boolean value) { this.showTaxonomyConfirmationAlert = value; }

    @JsonProperty("skipAuthentication")
    public Boolean getSkipAuthentication() { return skipAuthentication; }
    @JsonProperty("skipAuthentication")
    public void setSkipAuthentication(Boolean value) { this.skipAuthentication = value; }

    @JsonProperty("skipDaysForward")
    public Boolean getSkipDaysForward() { return skipDaysForward; }
    @JsonProperty("skipDaysForward")
    public void setSkipDaysForward(Boolean value) { this.skipDaysForward = value; }

    @JsonProperty("skipMobileMap")
    public Boolean getSkipMobileMap() { return skipMobileMap; }
    @JsonProperty("skipMobileMap")
    public void setSkipMobileMap(Boolean value) { this.skipMobileMap = value; }

    @JsonProperty("skipServiceDurationAlignment")
    public Boolean getSkipServiceDurationAlignment() { return skipServiceDurationAlignment; }
    @JsonProperty("skipServiceDurationAlignment")
    public void setSkipServiceDurationAlignment(Boolean value) { this.skipServiceDurationAlignment = value; }

    @JsonProperty("skipServiceSelection")
    public Boolean getSkipServiceSelection() { return skipServiceSelection; }
    @JsonProperty("skipServiceSelection")
    public void setSkipServiceSelection(Boolean value) { this.skipServiceSelection = value; }

    @JsonProperty("skipTimeSelection")
    public Boolean getSkipTimeSelection() { return skipTimeSelection; }
    @JsonProperty("skipTimeSelection")
    public void setSkipTimeSelection(Boolean value) { this.skipTimeSelection = value; }

    @JsonProperty("skipTimeSelectionServiceIDs")
    public List<String> getSkipTimeSelectionServiceIDs() { return skipTimeSelectionServiceIDs; }
    @JsonProperty("skipTimeSelectionServiceIDs")
    public void setSkipTimeSelectionServiceIDs(List<String> value) { this.skipTimeSelectionServiceIDs = value; }

    @JsonProperty("skipWorkerSelectedServiceIDs")
    public List<String> getSkipWorkerSelectedServiceIDs() { return skipWorkerSelectedServiceIDs; }
    @JsonProperty("skipWorkerSelectedServiceIDs")
    public void setSkipWorkerSelectedServiceIDs(List<String> value) { this.skipWorkerSelectedServiceIDs = value; }

    @JsonProperty("skipWorkerServicesSelection")
    public Boolean getSkipWorkerServicesSelection() { return skipWorkerServicesSelection; }
    @JsonProperty("skipWorkerServicesSelection")
    public void setSkipWorkerServicesSelection(Boolean value) { this.skipWorkerServicesSelection = value; }

    @JsonProperty("socialNetworkImage")
    public String getSocialNetworkImage() { return socialNetworkImage; }
    @JsonProperty("socialNetworkImage")
    public void setSocialNetworkImage(String value) { this.socialNetworkImage = value; }

    @JsonProperty("socialSharing")
    public FluffySocialSharing getSocialSharing() { return socialSharing; }
    @JsonProperty("socialSharing")
    public void setSocialSharing(FluffySocialSharing value) { this.socialSharing = value; }

    @JsonProperty("sortByMostFree")
    public Boolean getSortByMostFree() { return sortByMostFree; }
    @JsonProperty("sortByMostFree")
    public void setSortByMostFree(Boolean value) { this.sortByMostFree = value; }

    @JsonProperty("sortWorkersByWorkload")
    public Boolean getSortWorkersByWorkload() { return sortWorkersByWorkload; }
    @JsonProperty("sortWorkersByWorkload")
    public void setSortWorkersByWorkload(Boolean value) { this.sortWorkersByWorkload = value; }

    @JsonProperty("splitInsuranceClient")
    public Boolean getSplitInsuranceClient() { return splitInsuranceClient; }
    @JsonProperty("splitInsuranceClient")
    public void setSplitInsuranceClient(Boolean value) { this.splitInsuranceClient = value; }

    @JsonProperty("splitName")
    public Boolean getSplitName() { return splitName; }
    @JsonProperty("splitName")
    public void setSplitName(Boolean value) { this.splitName = value; }

    @JsonProperty("startTextButton")
    public String getStartTextButton() { return startTextButton; }
    @JsonProperty("startTextButton")
    public void setStartTextButton(String value) { this.startTextButton = value; }

    @JsonProperty("startTextMessage")
    public String getStartTextMessage() { return startTextMessage; }
    @JsonProperty("startTextMessage")
    public void setStartTextMessage(String value) { this.startTextMessage = value; }

    @JsonProperty("strictSlotCutting")
    public Boolean getStrictSlotCutting() { return strictSlotCutting; }
    @JsonProperty("strictSlotCutting")
    public void setStrictSlotCutting(Boolean value) { this.strictSlotCutting = value; }

    @JsonProperty("tentativeTTL")
    public Double getTentativeTTL() { return tentativeTTL; }
    @JsonProperty("tentativeTTL")
    public void setTentativeTTL(Double value) { this.tentativeTTL = value; }

    @JsonProperty("theme")
    public String getTheme() { return theme; }
    @JsonProperty("theme")
    public void setTheme(String value) { this.theme = value; }

    @JsonProperty("toggleReminder")
    public Boolean getToggleReminder() { return toggleReminder; }
    @JsonProperty("toggleReminder")
    public void setToggleReminder(Boolean value) { this.toggleReminder = value; }

    @JsonProperty("useAppointmentReminder")
    public Boolean getUseAppointmentReminder() { return useAppointmentReminder; }
    @JsonProperty("useAppointmentReminder")
    public void setUseAppointmentReminder(Boolean value) { this.useAppointmentReminder = value; }

    @JsonProperty("useBusinessScheduleForUnavailableLabel")
    public Boolean getUseBusinessScheduleForUnavailableLabel() { return useBusinessScheduleForUnavailableLabel; }
    @JsonProperty("useBusinessScheduleForUnavailableLabel")
    public void setUseBusinessScheduleForUnavailableLabel(Boolean value) { this.useBusinessScheduleForUnavailableLabel = value; }

    @JsonProperty("useClustersMap")
    public Boolean getUseClustersMap() { return useClustersMap; }
    @JsonProperty("useClustersMap")
    public void setUseClustersMap(Boolean value) { this.useClustersMap = value; }

    @JsonProperty("useCoupon")
    public Boolean getUseCoupon() { return useCoupon; }
    @JsonProperty("useCoupon")
    public void setUseCoupon(Boolean value) { this.useCoupon = value; }

    @JsonProperty("useCRAC")
    public Boolean getUseCRAC() { return useCRAC; }
    @JsonProperty("useCRAC")
    public void setUseCRAC(Boolean value) { this.useCRAC = value; }

    @JsonProperty("useDefaultServiceImg")
    public Boolean getUseDefaultServiceImg() { return useDefaultServiceImg; }
    @JsonProperty("useDefaultServiceImg")
    public void setUseDefaultServiceImg(Boolean value) { this.useDefaultServiceImg = value; }

    @JsonProperty("useDefaultWorkerImg")
    public Boolean getUseDefaultWorkerImg() { return useDefaultWorkerImg; }
    @JsonProperty("useDefaultWorkerImg")
    public void setUseDefaultWorkerImg(Boolean value) { this.useDefaultWorkerImg = value; }

    @JsonProperty("useDirectScheduleRead")
    public UseDirectScheduleRead getUseDirectScheduleRead() { return useDirectScheduleRead; }
    @JsonProperty("useDirectScheduleRead")
    public void setUseDirectScheduleRead(UseDirectScheduleRead value) { this.useDirectScheduleRead = value; }

    @JsonProperty("useInsuranceGuaranteeLetter")
    public Boolean getUseInsuranceGuaranteeLetter() { return useInsuranceGuaranteeLetter; }
    @JsonProperty("useInsuranceGuaranteeLetter")
    public void setUseInsuranceGuaranteeLetter(Boolean value) { this.useInsuranceGuaranteeLetter = value; }

    @JsonProperty("useInsuranceSelect")
    public Boolean getUseInsuranceSelect() { return useInsuranceSelect; }
    @JsonProperty("useInsuranceSelect")
    public void setUseInsuranceSelect(Boolean value) { this.useInsuranceSelect = value; }

    @JsonProperty("useMedAuth")
    public Boolean getUseMedAuth() { return useMedAuth; }
    @JsonProperty("useMedAuth")
    public void setUseMedAuth(Boolean value) { this.useMedAuth = value; }

    @JsonProperty("useMiddleName")
    public Boolean getUseMiddleName() { return useMiddleName; }
    @JsonProperty("useMiddleName")
    public void setUseMiddleName(Boolean value) { this.useMiddleName = value; }

    @JsonProperty("useNewReserveAPI")
    public Boolean getUseNewReserveAPI() { return useNewReserveAPI; }
    @JsonProperty("useNewReserveAPI")
    public void setUseNewReserveAPI(Boolean value) { this.useNewReserveAPI = value; }

    @JsonProperty("useResourcePageLoading")
    public Boolean getUseResourcePageLoading() { return useResourcePageLoading; }
    @JsonProperty("useResourcePageLoading")
    public void setUseResourcePageLoading(Boolean value) { this.useResourcePageLoading = value; }

    @JsonProperty("useSortByName")
    public Boolean getUseSortByName() { return useSortByName; }
    @JsonProperty("useSortByName")
    public void setUseSortByName(Boolean value) { this.useSortByName = value; }

    @JsonProperty("warningContactDataText")
    public String getWarningContactDataText() { return warningContactDataText; }
    @JsonProperty("warningContactDataText")
    public void setWarningContactDataText(String value) { this.warningContactDataText = value; }

    @JsonProperty("widgetUseCRAC")
    public Boolean getWidgetUseCRAC() { return widgetUseCRAC; }
    @JsonProperty("widgetUseCRAC")
    public void setWidgetUseCRAC(Boolean value) { this.widgetUseCRAC = value; }

    @JsonProperty("withoutWorkers")
    public Boolean getWithoutWorkers() { return withoutWorkers; }
    @JsonProperty("withoutWorkers")
    public void setWithoutWorkers(Boolean value) { this.withoutWorkers = value; }

    @JsonProperty("worker_unavailability_text")
    public String getWorkerUnavailabilityText() { return workerUnavailabilityText; }
    @JsonProperty("worker_unavailability_text")
    public void setWorkerUnavailabilityText(String value) { this.workerUnavailabilityText = value; }

    @JsonProperty("worker_widget_unavailability_text")
    public String getWorkerWidgetUnavailabilityText() { return workerWidgetUnavailabilityText; }
    @JsonProperty("worker_widget_unavailability_text")
    public void setWorkerWidgetUnavailabilityText(String value) { this.workerWidgetUnavailabilityText = value; }

    @JsonProperty("workerNameReverse")
    public Boolean getWorkerNameReverse() { return workerNameReverse; }
    @JsonProperty("workerNameReverse")
    public void setWorkerNameReverse(Boolean value) { this.workerNameReverse = value; }
}
