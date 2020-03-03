package ru.gbooking.apiv2;

import java.util.*;

public class WidgetConfiguration {
    private String additionalName;
    private Boolean alignmentTaxonomySlots;
    private Boolean allowAutoSelect;
    private Boolean allowBookVisitor;
    private Boolean allowSkipTimeCheck;
    private String appointmentConfirmationText;
    private String appointmentConfirmationTitle;
    private Boolean askClientBirthday;
    private Boolean askClientGender;
    private BookableDateRanges bookableDateRanges;
    private Double bookableMonthsCount;
    private Boolean calendarMode;
    private Boolean calendarModeHideTime;
    private ClientBlockingSettings clientBlockingSettings;
    private Boolean clientCommentTitle;
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
    private DiscountedPriceRounding discountedPriceRounding;
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
    private List<Phone> insuranceClientSupportPhone;
    private Double maxServiceBooking;
    private Double maxTimeslotBooking;
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
    private String shortLink;
    private Boolean showAllWorkers;
    private Boolean showClientAddress;
    private Boolean showClientComment;
    private Boolean showDisabledTaxonomies;
    private Boolean showDrinkQuestion;
    private Boolean showMap;
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
    private SocialSharing socialSharing;
    private Boolean sortByMostFree;
    private Boolean sortWorkersByWorkload;
    private Boolean splitInsuranceClient;
    private Boolean splitName;
    private Double tentativeTTL;
    private String theme;
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
    private Boolean workerNameReverse;

    public String getAdditionalName() { return additionalName; }
    public void setAdditionalName(String value) { this.additionalName = value; }

    public Boolean getAlignmentTaxonomySlots() { return alignmentTaxonomySlots; }
    public void setAlignmentTaxonomySlots(Boolean value) { this.alignmentTaxonomySlots = value; }

    public Boolean getAllowAutoSelect() { return allowAutoSelect; }
    public void setAllowAutoSelect(Boolean value) { this.allowAutoSelect = value; }

    public Boolean getAllowBookVisitor() { return allowBookVisitor; }
    public void setAllowBookVisitor(Boolean value) { this.allowBookVisitor = value; }

    public Boolean getAllowSkipTimeCheck() { return allowSkipTimeCheck; }
    public void setAllowSkipTimeCheck(Boolean value) { this.allowSkipTimeCheck = value; }

    public String getAppointmentConfirmationText() { return appointmentConfirmationText; }
    public void setAppointmentConfirmationText(String value) { this.appointmentConfirmationText = value; }

    public String getAppointmentConfirmationTitle() { return appointmentConfirmationTitle; }
    public void setAppointmentConfirmationTitle(String value) { this.appointmentConfirmationTitle = value; }

    public Boolean getAskClientBirthday() { return askClientBirthday; }
    public void setAskClientBirthday(Boolean value) { this.askClientBirthday = value; }

    public Boolean getAskClientGender() { return askClientGender; }
    public void setAskClientGender(Boolean value) { this.askClientGender = value; }

    public BookableDateRanges getBookableDateRanges() { return bookableDateRanges; }
    public void setBookableDateRanges(BookableDateRanges value) { this.bookableDateRanges = value; }

    public Double getBookableMonthsCount() { return bookableMonthsCount; }
    public void setBookableMonthsCount(Double value) { this.bookableMonthsCount = value; }

    public Boolean getCalendarMode() { return calendarMode; }
    public void setCalendarMode(Boolean value) { this.calendarMode = value; }

    public Boolean getCalendarModeHideTime() { return calendarModeHideTime; }
    public void setCalendarModeHideTime(Boolean value) { this.calendarModeHideTime = value; }

    public ClientBlockingSettings getClientBlockingSettings() { return clientBlockingSettings; }
    public void setClientBlockingSettings(ClientBlockingSettings value) { this.clientBlockingSettings = value; }

    public Boolean getClientCommentTitle() { return clientCommentTitle; }
    public void setClientCommentTitle(Boolean value) { this.clientCommentTitle = value; }

    public CracServer getCracServer() { return cracServer; }
    public void setCracServer(CracServer value) { this.cracServer = value; }

    public Double getCracSlotSize() { return cracSlotSize; }
    public void setCracSlotSize(Double value) { this.cracSlotSize = value; }

    public Boolean getCrunchv2() { return crunchv2; }
    public void setCrunchv2(Boolean value) { this.crunchv2 = value; }

    public String getDayOffLabel() { return dayOffLabel; }
    public void setDayOffLabel(String value) { this.dayOffLabel = value; }

    public Double getDaysForward() { return daysForward; }
    public void setDaysForward(Double value) { this.daysForward = value; }

    public String getDayUnavailableLabel() { return dayUnavailableLabel; }
    public void setDayUnavailableLabel(String value) { this.dayUnavailableLabel = value; }

    public String getDefaultServiceImgURL() { return defaultServiceImgURL; }
    public void setDefaultServiceImgURL(String value) { this.defaultServiceImgURL = value; }

    public String getDefaultWorkerImgURL() { return defaultWorkerImgURL; }
    public void setDefaultWorkerImgURL(String value) { this.defaultWorkerImgURL = value; }

    public Boolean getDenySameTimeRecords() { return denySameTimeRecords; }
    public void setDenySameTimeRecords(Boolean value) { this.denySameTimeRecords = value; }

    public String getDisabledTaxonomiesText() { return disabledTaxonomiesText; }
    public void setDisabledTaxonomiesText(String value) { this.disabledTaxonomiesText = value; }

    public Boolean getDisableMobileWidget() { return disableMobileWidget; }
    public void setDisableMobileWidget(Boolean value) { this.disableMobileWidget = value; }

    public Boolean getDisableWidget() { return disableWidget; }
    public void setDisableWidget(Boolean value) { this.disableWidget = value; }

    public String getDisableWidgetMessage() { return disableWidgetMessage; }
    public void setDisableWidgetMessage(String value) { this.disableWidgetMessage = value; }

    public DiscountedPriceRounding getDiscountedPriceRounding() { return discountedPriceRounding; }
    public void setDiscountedPriceRounding(DiscountedPriceRounding value) { this.discountedPriceRounding = value; }

    public Double getDisplaySlotSize() { return displaySlotSize; }
    public void setDisplaySlotSize(Double value) { this.displaySlotSize = value; }

    public Boolean getDontRequireEmail() { return dontRequireEmail; }
    public void setDontRequireEmail(Boolean value) { this.dontRequireEmail = value; }

    public Boolean getEmailIsMandatory() { return emailIsMandatory; }
    public void setEmailIsMandatory(Boolean value) { this.emailIsMandatory = value; }

    public Boolean getEnableOverrideFooter() { return enableOverrideFooter; }
    public void setEnableOverrideFooter(Boolean value) { this.enableOverrideFooter = value; }

    public Boolean getEnableWarningContactData() { return enableWarningContactData; }
    public void setEnableWarningContactData(Boolean value) { this.enableWarningContactData = value; }

    public Boolean getExtraVisitors() { return extraVisitors; }
    public void setExtraVisitors(Boolean value) { this.extraVisitors = value; }

    public Boolean getFilterNonInsuranceSchedule() { return filterNonInsuranceSchedule; }
    public void setFilterNonInsuranceSchedule(Boolean value) { this.filterNonInsuranceSchedule = value; }

    public Boolean getHideAnyWorkerBooking() { return hideAnyWorkerBooking; }
    public void setHideAnyWorkerBooking(Boolean value) { this.hideAnyWorkerBooking = value; }

    public Boolean getHideCallButton() { return hideCallButton; }
    public void setHideCallButton(Boolean value) { this.hideCallButton = value; }

    public Boolean getHideEmptyDays() { return hideEmptyDays; }
    public void setHideEmptyDays(Boolean value) { this.hideEmptyDays = value; }

    public Boolean getHideGBookingLogo() { return hideGBookingLogo; }
    public void setHideGBookingLogo(Boolean value) { this.hideGBookingLogo = value; }

    public Boolean getHideGraySlots() { return hideGraySlots; }
    public void setHideGraySlots(Boolean value) { this.hideGraySlots = value; }

    public Boolean getHideNewAppointmentButton() { return hideNewAppointmentButton; }
    public void setHideNewAppointmentButton(Boolean value) { this.hideNewAppointmentButton = value; }

    public Boolean getHidePrices() { return hidePrices; }
    public void setHidePrices(Boolean value) { this.hidePrices = value; }

    public Boolean getHideSocialNetworksAuthentication() { return hideSocialNetworksAuthentication; }
    public void setHideSocialNetworksAuthentication(Boolean value) { this.hideSocialNetworksAuthentication = value; }

    public List<Phone> getInsuranceClientSupportPhone() { return insuranceClientSupportPhone; }
    public void setInsuranceClientSupportPhone(List<Phone> value) { this.insuranceClientSupportPhone = value; }

    public Double getMaxServiceBooking() { return maxServiceBooking; }
    public void setMaxServiceBooking(Double value) { this.maxServiceBooking = value; }

    public Double getMaxTimeslotBooking() { return maxTimeslotBooking; }
    public void setMaxTimeslotBooking(Double value) { this.maxTimeslotBooking = value; }

    public Boolean getMostFreeEnable() { return mostFreeEnable; }
    public void setMostFreeEnable(Boolean value) { this.mostFreeEnable = value; }

    public Boolean getMultiServiceBooking() { return multiServiceBooking; }
    public void setMultiServiceBooking(Boolean value) { this.multiServiceBooking = value; }

    public Boolean getMultiTimeslotBooking() { return multiTimeslotBooking; }
    public void setMultiTimeslotBooking(Boolean value) { this.multiTimeslotBooking = value; }

    public Boolean getMultiTimeslotBookingAllDays() { return multiTimeslotBookingAllDays; }
    public void setMultiTimeslotBookingAllDays(Boolean value) { this.multiTimeslotBookingAllDays = value; }

    public Map<String, Object> getNewWidgetTheme() { return newWidgetTheme; }
    public void setNewWidgetTheme(Map<String, Object> value) { this.newWidgetTheme = value; }

    public Boolean getNoDefaultImages() { return noDefaultImages; }
    public void setNoDefaultImages(Boolean value) { this.noDefaultImages = value; }

    public String getOverrideFooter() { return overrideFooter; }
    public void setOverrideFooter(String value) { this.overrideFooter = value; }

    public Payment getPayment() { return payment; }
    public void setPayment(Payment value) { this.payment = value; }

    public PaymentProvider getPaymentProvider() { return paymentProvider; }
    public void setPaymentProvider(PaymentProvider value) { this.paymentProvider = value; }

    public Boolean getRequireAgreement() { return requireAgreement; }
    public void setRequireAgreement(Boolean value) { this.requireAgreement = value; }

    public String getRequireAgreementLink() { return requireAgreementLink; }
    public void setRequireAgreementLink(String value) { this.requireAgreementLink = value; }

    public Double getRevisionVersion() { return revisionVersion; }
    public void setRevisionVersion(Double value) { this.revisionVersion = value; }

    public String getShortLink() { return shortLink; }
    public void setShortLink(String value) { this.shortLink = value; }

    public Boolean getShowAllWorkers() { return showAllWorkers; }
    public void setShowAllWorkers(Boolean value) { this.showAllWorkers = value; }

    public Boolean getShowClientAddress() { return showClientAddress; }
    public void setShowClientAddress(Boolean value) { this.showClientAddress = value; }

    public Boolean getShowClientComment() { return showClientComment; }
    public void setShowClientComment(Boolean value) { this.showClientComment = value; }

    public Boolean getShowDisabledTaxonomies() { return showDisabledTaxonomies; }
    public void setShowDisabledTaxonomies(Boolean value) { this.showDisabledTaxonomies = value; }

    public Boolean getShowDrinkQuestion() { return showDrinkQuestion; }
    public void setShowDrinkQuestion(Boolean value) { this.showDrinkQuestion = value; }

    public Boolean getShowMap() { return showMap; }
    public void setShowMap(Boolean value) { this.showMap = value; }

    public Boolean getShowSurnameFirst() { return showSurnameFirst; }
    public void setShowSurnameFirst(Boolean value) { this.showSurnameFirst = value; }

    public Boolean getShowTalkQuestion() { return showTalkQuestion; }
    public void setShowTalkQuestion(Boolean value) { this.showTalkQuestion = value; }

    public Boolean getShowTaxonomyConfirmationAlert() { return showTaxonomyConfirmationAlert; }
    public void setShowTaxonomyConfirmationAlert(Boolean value) { this.showTaxonomyConfirmationAlert = value; }

    public Boolean getSkipAuthentication() { return skipAuthentication; }
    public void setSkipAuthentication(Boolean value) { this.skipAuthentication = value; }

    public Boolean getSkipDaysForward() { return skipDaysForward; }
    public void setSkipDaysForward(Boolean value) { this.skipDaysForward = value; }

    public Boolean getSkipMobileMap() { return skipMobileMap; }
    public void setSkipMobileMap(Boolean value) { this.skipMobileMap = value; }

    public Boolean getSkipServiceDurationAlignment() { return skipServiceDurationAlignment; }
    public void setSkipServiceDurationAlignment(Boolean value) { this.skipServiceDurationAlignment = value; }

    public Boolean getSkipServiceSelection() { return skipServiceSelection; }
    public void setSkipServiceSelection(Boolean value) { this.skipServiceSelection = value; }

    public Boolean getSkipTimeSelection() { return skipTimeSelection; }
    public void setSkipTimeSelection(Boolean value) { this.skipTimeSelection = value; }

    public List<String> getSkipTimeSelectionServiceIDs() { return skipTimeSelectionServiceIDs; }
    public void setSkipTimeSelectionServiceIDs(List<String> value) { this.skipTimeSelectionServiceIDs = value; }

    public List<String> getSkipWorkerSelectedServiceIDs() { return skipWorkerSelectedServiceIDs; }
    public void setSkipWorkerSelectedServiceIDs(List<String> value) { this.skipWorkerSelectedServiceIDs = value; }

    public Boolean getSkipWorkerServicesSelection() { return skipWorkerServicesSelection; }
    public void setSkipWorkerServicesSelection(Boolean value) { this.skipWorkerServicesSelection = value; }

    public String getSocialNetworkImage() { return socialNetworkImage; }
    public void setSocialNetworkImage(String value) { this.socialNetworkImage = value; }

    public SocialSharing getSocialSharing() { return socialSharing; }
    public void setSocialSharing(SocialSharing value) { this.socialSharing = value; }

    public Boolean getSortByMostFree() { return sortByMostFree; }
    public void setSortByMostFree(Boolean value) { this.sortByMostFree = value; }

    public Boolean getSortWorkersByWorkload() { return sortWorkersByWorkload; }
    public void setSortWorkersByWorkload(Boolean value) { this.sortWorkersByWorkload = value; }

    public Boolean getSplitInsuranceClient() { return splitInsuranceClient; }
    public void setSplitInsuranceClient(Boolean value) { this.splitInsuranceClient = value; }

    public Boolean getSplitName() { return splitName; }
    public void setSplitName(Boolean value) { this.splitName = value; }

    public Double getTentativeTTL() { return tentativeTTL; }
    public void setTentativeTTL(Double value) { this.tentativeTTL = value; }

    public String getTheme() { return theme; }
    public void setTheme(String value) { this.theme = value; }

    public Boolean getUseAppointmentReminder() { return useAppointmentReminder; }
    public void setUseAppointmentReminder(Boolean value) { this.useAppointmentReminder = value; }

    public Boolean getUseBusinessScheduleForUnavailableLabel() { return useBusinessScheduleForUnavailableLabel; }
    public void setUseBusinessScheduleForUnavailableLabel(Boolean value) { this.useBusinessScheduleForUnavailableLabel = value; }

    public Boolean getUseClustersMap() { return useClustersMap; }
    public void setUseClustersMap(Boolean value) { this.useClustersMap = value; }

    public Boolean getUseCoupon() { return useCoupon; }
    public void setUseCoupon(Boolean value) { this.useCoupon = value; }

    public Boolean getUseCRAC() { return useCRAC; }
    public void setUseCRAC(Boolean value) { this.useCRAC = value; }

    public Boolean getUseDefaultServiceImg() { return useDefaultServiceImg; }
    public void setUseDefaultServiceImg(Boolean value) { this.useDefaultServiceImg = value; }

    public Boolean getUseDefaultWorkerImg() { return useDefaultWorkerImg; }
    public void setUseDefaultWorkerImg(Boolean value) { this.useDefaultWorkerImg = value; }

    public UseDirectScheduleRead getUseDirectScheduleRead() { return useDirectScheduleRead; }
    public void setUseDirectScheduleRead(UseDirectScheduleRead value) { this.useDirectScheduleRead = value; }

    public Boolean getUseInsuranceGuaranteeLetter() { return useInsuranceGuaranteeLetter; }
    public void setUseInsuranceGuaranteeLetter(Boolean value) { this.useInsuranceGuaranteeLetter = value; }

    public Boolean getUseInsuranceSelect() { return useInsuranceSelect; }
    public void setUseInsuranceSelect(Boolean value) { this.useInsuranceSelect = value; }

    public Boolean getUseMedAuth() { return useMedAuth; }
    public void setUseMedAuth(Boolean value) { this.useMedAuth = value; }

    public Boolean getUseMiddleName() { return useMiddleName; }
    public void setUseMiddleName(Boolean value) { this.useMiddleName = value; }

    public Boolean getUseNewReserveAPI() { return useNewReserveAPI; }
    public void setUseNewReserveAPI(Boolean value) { this.useNewReserveAPI = value; }

    public Boolean getUseResourcePageLoading() { return useResourcePageLoading; }
    public void setUseResourcePageLoading(Boolean value) { this.useResourcePageLoading = value; }

    public Boolean getUseSortByName() { return useSortByName; }
    public void setUseSortByName(Boolean value) { this.useSortByName = value; }

    public String getWarningContactDataText() { return warningContactDataText; }
    public void setWarningContactDataText(String value) { this.warningContactDataText = value; }

    public Boolean getWidgetUseCRAC() { return widgetUseCRAC; }
    public void setWidgetUseCRAC(Boolean value) { this.widgetUseCRAC = value; }

    public Boolean getWithoutWorkers() { return withoutWorkers; }
    public void setWithoutWorkers(Boolean value) { this.withoutWorkers = value; }

    public String getWorkerUnavailabilityText() { return workerUnavailabilityText; }
    public void setWorkerUnavailabilityText(String value) { this.workerUnavailabilityText = value; }

    public Boolean getWorkerNameReverse() { return workerNameReverse; }
    public void setWorkerNameReverse(Boolean value) { this.workerNameReverse = value; }
}
