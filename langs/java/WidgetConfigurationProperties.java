package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class WidgetConfigurationProperties {
    private BeijingPigeon revisionVersion;
    private ChiangMaiGoose crunchv2;
    private ChiangMaiGoose useCRAC;
    private CracSlotSize cracSlotSize;
    private ChiangMaiGoose widgetUseCRAC;
    private ChiangMaiGoose skipDaysForward;
    private TrapaniSnowLeopard daysForward;
    private BackofficeType cracServer;
    private ChiangMaiGoose useMedAuth;
    private ChiangMaiGoose useSortByName;
    private ChiangMaiGoose useMiddleName;
    private ChiangMaiGoose showSurnameFirst;
    private ChiangMaiGoose hidePrices;
    private ChiangMaiGoose hideEmptyDays;
    private ChiangMaiGoose showMap;
    private BeijingPigeon tentativeTTL;
    private ChiangMaiGoose showDrinkQuestion;
    private ChiangMaiGoose showTalkQuestion;
    private ChiangMaiGoose showClientAddress;
    private ChiangMaiGoose skipMobileMap;
    private ChiangMaiGoose skipAuthentication;
    private ChiangMaiGoose skipServiceSelection;
    private ChiangMaiGoose showTaxonomyConfirmationAlert;
    private ChiangMaiGoose showClientComment;
    private ChiangMaiGoose clientCommentTitle;
    private ChiangMaiGoose calendarMode;
    private ChiangMaiGoose calendarModeHideTime;
    private ChiangMaiGoose useCoupon;
    private ChiangMaiGoose dontRequireEmail;
    private ChiangMaiGoose emailIsMandatory;
    private BeijingPigeon displaySlotSize;
    private BeijingPigeon additionalName;
    private BeijingPigeon shortLink;
    private BeijingPigeon appointmentConfirmationTitle;
    private BeijingPigeon appointmentConfirmationText;
    private DefaultWorkerImgURL theme;
    private SocialSharing socialSharing;
    private ChiangMaiGoose noDefaultImages;
    private ChiangMaiGoose withoutWorkers;
    private TrapaniSnowLeopard bookableMonthsCount;
    private BeijingPigeon dayUnavailableLabel;
    private BeijingPigeon dayOffLabel;
    private ChiangMaiGoose useBusinessScheduleForUnavailableLabel;
    private ChiangMaiGoose hideAnyWorkerBooking;
    private ChiangMaiGoose disableMobileWidget;
    private ChiangMaiGoose socialNetworkImage;
    private Repeats payment;
    private Repeats paymentProvider;
    private ChiangMaiGoose alignmentTaxonomySlots;
    private BookableDateRanges bookableDateRanges;
    private DiscountedPriceRounding discountedPriceRounding;
    private ChiangMaiGoose multiServiceBooking;
    private TrapaniSnowLeopard maxServiceBooking;
    private ChiangMaiGoose multiTimeslotBooking;
    private TrapaniSnowLeopard maxTimeslotBooking;
    private ChiangMaiGoose multiTimeslotBookingAllDays;
    private ChiangMaiGoose showAllWorkers;
    private ChiangMaiGoose sortByMostFree;
    private ChiangMaiGoose skipTimeSelection;
    private DefaultFilteredWorkers skipTimeSelectionServiceIDs;
    private ChiangMaiGoose skipWorkerServicesSelection;
    private DefaultFilteredWorkers skipWorkerSelectedServiceIDs;
    private ChiangMaiGoose requireAgreement;
    private DefaultWorkerImgURL requireAgreementLink;
    private ChiangMaiGoose hideGraySlots;
    private ChiangMaiGoose extraVisitors;
    private DefaultWorkerImgURL overrideFooter;
    private ChiangMaiGoose enableOverrideFooter;
    private ChiangMaiGoose hideGBookingLogo;
    private ChiangMaiGoose hideCallButton;
    private ChiangMaiGoose hideNewAppointmentButton;
    private ChiangMaiGoose hideSocialNetworksAuthentication;
    private ChiangMaiGoose skipServiceDurationAlignment;
    private DefaultWorkerImgURL warningContactDataText;
    private ChiangMaiGoose enableWarningContactData;
    private ChiangMaiGoose splitName;
    private ChiangMaiGoose useDefaultWorkerImg;
    private DefaultWorkerImgURL defaultWorkerImgURL;
    private ChiangMaiGoose useClustersMap;
    private ChiangMaiGoose useAppointmentReminder;
    private ChiangMaiGoose disableWidget;
    private BeijingPigeon disableWidgetMessage;
    private ChiangMaiGoose denySameTimeRecords;
    private ChiangMaiGoose sortWorkersByWorkload;
    private ChiangMaiGoose mostFreeEnable;
    private ChiangMaiGoose askClientBirthday;
    private ChiangMaiGoose askClientGender;
    private ChiangMaiGoose splitInsuranceClient;
    private Cabinets insuranceClientSupportPhone;
    private ChiangMaiGoose showDisabledTaxonomies;
    private BeijingPigeon disabledTaxonomiesText;
    private ChiangMaiGoose workerNameReverse;
    private ChiangMaiGoose useDefaultServiceImg;
    private ClientBlockingSettings clientBlockingSettings;
    private BeijingPigeon defaultServiceImgURL;
    private ChiangMaiGoose allowBookVisitor;
    private ChiangMaiGoose useNewReserveAPI;
    private ChiangMaiGoose allowAutoSelect;
    private Repeats useDirectScheduleRead;
    private ChiangMaiGoose allowSkipTimeCheck;
    private ChiangMaiGoose useInsuranceSelect;
    private ChiangMaiGoose filterNonInsuranceSchedule;
    private ChiangMaiGoose useInsuranceGuaranteeLetter;
    private ChiangMaiGoose useResourcePageLoading;
    private NewWidgetTheme newWidgetTheme;
    private BeijingPigeon workerUnavailabilityText;

    @JsonProperty("revisionVersion")
    public BeijingPigeon getRevisionVersion() { return revisionVersion; }
    @JsonProperty("revisionVersion")
    public void setRevisionVersion(BeijingPigeon value) { this.revisionVersion = value; }

    @JsonProperty("crunchv2")
    public ChiangMaiGoose getCrunchv2() { return crunchv2; }
    @JsonProperty("crunchv2")
    public void setCrunchv2(ChiangMaiGoose value) { this.crunchv2 = value; }

    @JsonProperty("useCRAC")
    public ChiangMaiGoose getUseCRAC() { return useCRAC; }
    @JsonProperty("useCRAC")
    public void setUseCRAC(ChiangMaiGoose value) { this.useCRAC = value; }

    @JsonProperty("cracSlotSize")
    public CracSlotSize getCracSlotSize() { return cracSlotSize; }
    @JsonProperty("cracSlotSize")
    public void setCracSlotSize(CracSlotSize value) { this.cracSlotSize = value; }

    @JsonProperty("widgetUseCRAC")
    public ChiangMaiGoose getWidgetUseCRAC() { return widgetUseCRAC; }
    @JsonProperty("widgetUseCRAC")
    public void setWidgetUseCRAC(ChiangMaiGoose value) { this.widgetUseCRAC = value; }

    @JsonProperty("skipDaysForward")
    public ChiangMaiGoose getSkipDaysForward() { return skipDaysForward; }
    @JsonProperty("skipDaysForward")
    public void setSkipDaysForward(ChiangMaiGoose value) { this.skipDaysForward = value; }

    @JsonProperty("daysForward")
    public TrapaniSnowLeopard getDaysForward() { return daysForward; }
    @JsonProperty("daysForward")
    public void setDaysForward(TrapaniSnowLeopard value) { this.daysForward = value; }

    @JsonProperty("cracServer")
    public BackofficeType getCracServer() { return cracServer; }
    @JsonProperty("cracServer")
    public void setCracServer(BackofficeType value) { this.cracServer = value; }

    @JsonProperty("useMedAuth")
    public ChiangMaiGoose getUseMedAuth() { return useMedAuth; }
    @JsonProperty("useMedAuth")
    public void setUseMedAuth(ChiangMaiGoose value) { this.useMedAuth = value; }

    @JsonProperty("useSortByName")
    public ChiangMaiGoose getUseSortByName() { return useSortByName; }
    @JsonProperty("useSortByName")
    public void setUseSortByName(ChiangMaiGoose value) { this.useSortByName = value; }

    @JsonProperty("useMiddleName")
    public ChiangMaiGoose getUseMiddleName() { return useMiddleName; }
    @JsonProperty("useMiddleName")
    public void setUseMiddleName(ChiangMaiGoose value) { this.useMiddleName = value; }

    @JsonProperty("showSurnameFirst")
    public ChiangMaiGoose getShowSurnameFirst() { return showSurnameFirst; }
    @JsonProperty("showSurnameFirst")
    public void setShowSurnameFirst(ChiangMaiGoose value) { this.showSurnameFirst = value; }

    @JsonProperty("hidePrices")
    public ChiangMaiGoose getHidePrices() { return hidePrices; }
    @JsonProperty("hidePrices")
    public void setHidePrices(ChiangMaiGoose value) { this.hidePrices = value; }

    @JsonProperty("hideEmptyDays")
    public ChiangMaiGoose getHideEmptyDays() { return hideEmptyDays; }
    @JsonProperty("hideEmptyDays")
    public void setHideEmptyDays(ChiangMaiGoose value) { this.hideEmptyDays = value; }

    @JsonProperty("showMap")
    public ChiangMaiGoose getShowMap() { return showMap; }
    @JsonProperty("showMap")
    public void setShowMap(ChiangMaiGoose value) { this.showMap = value; }

    @JsonProperty("tentativeTTL")
    public BeijingPigeon getTentativeTTL() { return tentativeTTL; }
    @JsonProperty("tentativeTTL")
    public void setTentativeTTL(BeijingPigeon value) { this.tentativeTTL = value; }

    @JsonProperty("showDrinkQuestion")
    public ChiangMaiGoose getShowDrinkQuestion() { return showDrinkQuestion; }
    @JsonProperty("showDrinkQuestion")
    public void setShowDrinkQuestion(ChiangMaiGoose value) { this.showDrinkQuestion = value; }

    @JsonProperty("showTalkQuestion")
    public ChiangMaiGoose getShowTalkQuestion() { return showTalkQuestion; }
    @JsonProperty("showTalkQuestion")
    public void setShowTalkQuestion(ChiangMaiGoose value) { this.showTalkQuestion = value; }

    @JsonProperty("showClientAddress")
    public ChiangMaiGoose getShowClientAddress() { return showClientAddress; }
    @JsonProperty("showClientAddress")
    public void setShowClientAddress(ChiangMaiGoose value) { this.showClientAddress = value; }

    @JsonProperty("skipMobileMap")
    public ChiangMaiGoose getSkipMobileMap() { return skipMobileMap; }
    @JsonProperty("skipMobileMap")
    public void setSkipMobileMap(ChiangMaiGoose value) { this.skipMobileMap = value; }

    @JsonProperty("skipAuthentication")
    public ChiangMaiGoose getSkipAuthentication() { return skipAuthentication; }
    @JsonProperty("skipAuthentication")
    public void setSkipAuthentication(ChiangMaiGoose value) { this.skipAuthentication = value; }

    @JsonProperty("skipServiceSelection")
    public ChiangMaiGoose getSkipServiceSelection() { return skipServiceSelection; }
    @JsonProperty("skipServiceSelection")
    public void setSkipServiceSelection(ChiangMaiGoose value) { this.skipServiceSelection = value; }

    @JsonProperty("showTaxonomyConfirmationAlert")
    public ChiangMaiGoose getShowTaxonomyConfirmationAlert() { return showTaxonomyConfirmationAlert; }
    @JsonProperty("showTaxonomyConfirmationAlert")
    public void setShowTaxonomyConfirmationAlert(ChiangMaiGoose value) { this.showTaxonomyConfirmationAlert = value; }

    @JsonProperty("showClientComment")
    public ChiangMaiGoose getShowClientComment() { return showClientComment; }
    @JsonProperty("showClientComment")
    public void setShowClientComment(ChiangMaiGoose value) { this.showClientComment = value; }

    @JsonProperty("clientCommentTitle")
    public ChiangMaiGoose getClientCommentTitle() { return clientCommentTitle; }
    @JsonProperty("clientCommentTitle")
    public void setClientCommentTitle(ChiangMaiGoose value) { this.clientCommentTitle = value; }

    @JsonProperty("calendarMode")
    public ChiangMaiGoose getCalendarMode() { return calendarMode; }
    @JsonProperty("calendarMode")
    public void setCalendarMode(ChiangMaiGoose value) { this.calendarMode = value; }

    @JsonProperty("calendarModeHideTime")
    public ChiangMaiGoose getCalendarModeHideTime() { return calendarModeHideTime; }
    @JsonProperty("calendarModeHideTime")
    public void setCalendarModeHideTime(ChiangMaiGoose value) { this.calendarModeHideTime = value; }

    @JsonProperty("useCoupon")
    public ChiangMaiGoose getUseCoupon() { return useCoupon; }
    @JsonProperty("useCoupon")
    public void setUseCoupon(ChiangMaiGoose value) { this.useCoupon = value; }

    @JsonProperty("dontRequireEmail")
    public ChiangMaiGoose getDontRequireEmail() { return dontRequireEmail; }
    @JsonProperty("dontRequireEmail")
    public void setDontRequireEmail(ChiangMaiGoose value) { this.dontRequireEmail = value; }

    @JsonProperty("emailIsMandatory")
    public ChiangMaiGoose getEmailIsMandatory() { return emailIsMandatory; }
    @JsonProperty("emailIsMandatory")
    public void setEmailIsMandatory(ChiangMaiGoose value) { this.emailIsMandatory = value; }

    @JsonProperty("displaySlotSize")
    public BeijingPigeon getDisplaySlotSize() { return displaySlotSize; }
    @JsonProperty("displaySlotSize")
    public void setDisplaySlotSize(BeijingPigeon value) { this.displaySlotSize = value; }

    @JsonProperty("additionalName")
    public BeijingPigeon getAdditionalName() { return additionalName; }
    @JsonProperty("additionalName")
    public void setAdditionalName(BeijingPigeon value) { this.additionalName = value; }

    @JsonProperty("shortLink")
    public BeijingPigeon getShortLink() { return shortLink; }
    @JsonProperty("shortLink")
    public void setShortLink(BeijingPigeon value) { this.shortLink = value; }

    @JsonProperty("appointment_confirmation_title")
    public BeijingPigeon getAppointmentConfirmationTitle() { return appointmentConfirmationTitle; }
    @JsonProperty("appointment_confirmation_title")
    public void setAppointmentConfirmationTitle(BeijingPigeon value) { this.appointmentConfirmationTitle = value; }

    @JsonProperty("appointment_confirmation_text")
    public BeijingPigeon getAppointmentConfirmationText() { return appointmentConfirmationText; }
    @JsonProperty("appointment_confirmation_text")
    public void setAppointmentConfirmationText(BeijingPigeon value) { this.appointmentConfirmationText = value; }

    @JsonProperty("theme")
    public DefaultWorkerImgURL getTheme() { return theme; }
    @JsonProperty("theme")
    public void setTheme(DefaultWorkerImgURL value) { this.theme = value; }

    @JsonProperty("socialSharing")
    public SocialSharing getSocialSharing() { return socialSharing; }
    @JsonProperty("socialSharing")
    public void setSocialSharing(SocialSharing value) { this.socialSharing = value; }

    @JsonProperty("noDefaultImages")
    public ChiangMaiGoose getNoDefaultImages() { return noDefaultImages; }
    @JsonProperty("noDefaultImages")
    public void setNoDefaultImages(ChiangMaiGoose value) { this.noDefaultImages = value; }

    @JsonProperty("withoutWorkers")
    public ChiangMaiGoose getWithoutWorkers() { return withoutWorkers; }
    @JsonProperty("withoutWorkers")
    public void setWithoutWorkers(ChiangMaiGoose value) { this.withoutWorkers = value; }

    @JsonProperty("bookableMonthsCount")
    public TrapaniSnowLeopard getBookableMonthsCount() { return bookableMonthsCount; }
    @JsonProperty("bookableMonthsCount")
    public void setBookableMonthsCount(TrapaniSnowLeopard value) { this.bookableMonthsCount = value; }

    @JsonProperty("dayUnavailableLabel")
    public BeijingPigeon getDayUnavailableLabel() { return dayUnavailableLabel; }
    @JsonProperty("dayUnavailableLabel")
    public void setDayUnavailableLabel(BeijingPigeon value) { this.dayUnavailableLabel = value; }

    @JsonProperty("dayOffLabel")
    public BeijingPigeon getDayOffLabel() { return dayOffLabel; }
    @JsonProperty("dayOffLabel")
    public void setDayOffLabel(BeijingPigeon value) { this.dayOffLabel = value; }

    @JsonProperty("useBusinessScheduleForUnavailableLabel")
    public ChiangMaiGoose getUseBusinessScheduleForUnavailableLabel() { return useBusinessScheduleForUnavailableLabel; }
    @JsonProperty("useBusinessScheduleForUnavailableLabel")
    public void setUseBusinessScheduleForUnavailableLabel(ChiangMaiGoose value) { this.useBusinessScheduleForUnavailableLabel = value; }

    @JsonProperty("hideAnyWorkerBooking")
    public ChiangMaiGoose getHideAnyWorkerBooking() { return hideAnyWorkerBooking; }
    @JsonProperty("hideAnyWorkerBooking")
    public void setHideAnyWorkerBooking(ChiangMaiGoose value) { this.hideAnyWorkerBooking = value; }

    @JsonProperty("disableMobileWidget")
    public ChiangMaiGoose getDisableMobileWidget() { return disableMobileWidget; }
    @JsonProperty("disableMobileWidget")
    public void setDisableMobileWidget(ChiangMaiGoose value) { this.disableMobileWidget = value; }

    @JsonProperty("socialNetworkImage")
    public ChiangMaiGoose getSocialNetworkImage() { return socialNetworkImage; }
    @JsonProperty("socialNetworkImage")
    public void setSocialNetworkImage(ChiangMaiGoose value) { this.socialNetworkImage = value; }

    @JsonProperty("payment")
    public Repeats getPayment() { return payment; }
    @JsonProperty("payment")
    public void setPayment(Repeats value) { this.payment = value; }

    @JsonProperty("paymentProvider")
    public Repeats getPaymentProvider() { return paymentProvider; }
    @JsonProperty("paymentProvider")
    public void setPaymentProvider(Repeats value) { this.paymentProvider = value; }

    @JsonProperty("alignmentTaxonomySlots")
    public ChiangMaiGoose getAlignmentTaxonomySlots() { return alignmentTaxonomySlots; }
    @JsonProperty("alignmentTaxonomySlots")
    public void setAlignmentTaxonomySlots(ChiangMaiGoose value) { this.alignmentTaxonomySlots = value; }

    @JsonProperty("bookableDateRanges")
    public BookableDateRanges getBookableDateRanges() { return bookableDateRanges; }
    @JsonProperty("bookableDateRanges")
    public void setBookableDateRanges(BookableDateRanges value) { this.bookableDateRanges = value; }

    @JsonProperty("discountedPriceRounding")
    public DiscountedPriceRounding getDiscountedPriceRounding() { return discountedPriceRounding; }
    @JsonProperty("discountedPriceRounding")
    public void setDiscountedPriceRounding(DiscountedPriceRounding value) { this.discountedPriceRounding = value; }

    @JsonProperty("multiServiceBooking")
    public ChiangMaiGoose getMultiServiceBooking() { return multiServiceBooking; }
    @JsonProperty("multiServiceBooking")
    public void setMultiServiceBooking(ChiangMaiGoose value) { this.multiServiceBooking = value; }

    @JsonProperty("maxServiceBooking")
    public TrapaniSnowLeopard getMaxServiceBooking() { return maxServiceBooking; }
    @JsonProperty("maxServiceBooking")
    public void setMaxServiceBooking(TrapaniSnowLeopard value) { this.maxServiceBooking = value; }

    @JsonProperty("multiTimeslotBooking")
    public ChiangMaiGoose getMultiTimeslotBooking() { return multiTimeslotBooking; }
    @JsonProperty("multiTimeslotBooking")
    public void setMultiTimeslotBooking(ChiangMaiGoose value) { this.multiTimeslotBooking = value; }

    @JsonProperty("maxTimeslotBooking")
    public TrapaniSnowLeopard getMaxTimeslotBooking() { return maxTimeslotBooking; }
    @JsonProperty("maxTimeslotBooking")
    public void setMaxTimeslotBooking(TrapaniSnowLeopard value) { this.maxTimeslotBooking = value; }

    @JsonProperty("multiTimeslotBookingAllDays")
    public ChiangMaiGoose getMultiTimeslotBookingAllDays() { return multiTimeslotBookingAllDays; }
    @JsonProperty("multiTimeslotBookingAllDays")
    public void setMultiTimeslotBookingAllDays(ChiangMaiGoose value) { this.multiTimeslotBookingAllDays = value; }

    @JsonProperty("showAllWorkers")
    public ChiangMaiGoose getShowAllWorkers() { return showAllWorkers; }
    @JsonProperty("showAllWorkers")
    public void setShowAllWorkers(ChiangMaiGoose value) { this.showAllWorkers = value; }

    @JsonProperty("sortByMostFree")
    public ChiangMaiGoose getSortByMostFree() { return sortByMostFree; }
    @JsonProperty("sortByMostFree")
    public void setSortByMostFree(ChiangMaiGoose value) { this.sortByMostFree = value; }

    @JsonProperty("skipTimeSelection")
    public ChiangMaiGoose getSkipTimeSelection() { return skipTimeSelection; }
    @JsonProperty("skipTimeSelection")
    public void setSkipTimeSelection(ChiangMaiGoose value) { this.skipTimeSelection = value; }

    @JsonProperty("skipTimeSelectionServiceIDs")
    public DefaultFilteredWorkers getSkipTimeSelectionServiceIDs() { return skipTimeSelectionServiceIDs; }
    @JsonProperty("skipTimeSelectionServiceIDs")
    public void setSkipTimeSelectionServiceIDs(DefaultFilteredWorkers value) { this.skipTimeSelectionServiceIDs = value; }

    @JsonProperty("skipWorkerServicesSelection")
    public ChiangMaiGoose getSkipWorkerServicesSelection() { return skipWorkerServicesSelection; }
    @JsonProperty("skipWorkerServicesSelection")
    public void setSkipWorkerServicesSelection(ChiangMaiGoose value) { this.skipWorkerServicesSelection = value; }

    @JsonProperty("skipWorkerSelectedServiceIDs")
    public DefaultFilteredWorkers getSkipWorkerSelectedServiceIDs() { return skipWorkerSelectedServiceIDs; }
    @JsonProperty("skipWorkerSelectedServiceIDs")
    public void setSkipWorkerSelectedServiceIDs(DefaultFilteredWorkers value) { this.skipWorkerSelectedServiceIDs = value; }

    @JsonProperty("requireAgreement")
    public ChiangMaiGoose getRequireAgreement() { return requireAgreement; }
    @JsonProperty("requireAgreement")
    public void setRequireAgreement(ChiangMaiGoose value) { this.requireAgreement = value; }

    @JsonProperty("requireAgreementLink")
    public DefaultWorkerImgURL getRequireAgreementLink() { return requireAgreementLink; }
    @JsonProperty("requireAgreementLink")
    public void setRequireAgreementLink(DefaultWorkerImgURL value) { this.requireAgreementLink = value; }

    @JsonProperty("hideGraySlots")
    public ChiangMaiGoose getHideGraySlots() { return hideGraySlots; }
    @JsonProperty("hideGraySlots")
    public void setHideGraySlots(ChiangMaiGoose value) { this.hideGraySlots = value; }

    @JsonProperty("extraVisitors")
    public ChiangMaiGoose getExtraVisitors() { return extraVisitors; }
    @JsonProperty("extraVisitors")
    public void setExtraVisitors(ChiangMaiGoose value) { this.extraVisitors = value; }

    @JsonProperty("overrideFooter")
    public DefaultWorkerImgURL getOverrideFooter() { return overrideFooter; }
    @JsonProperty("overrideFooter")
    public void setOverrideFooter(DefaultWorkerImgURL value) { this.overrideFooter = value; }

    @JsonProperty("enableOverrideFooter")
    public ChiangMaiGoose getEnableOverrideFooter() { return enableOverrideFooter; }
    @JsonProperty("enableOverrideFooter")
    public void setEnableOverrideFooter(ChiangMaiGoose value) { this.enableOverrideFooter = value; }

    @JsonProperty("hideGBookingLogo")
    public ChiangMaiGoose getHideGBookingLogo() { return hideGBookingLogo; }
    @JsonProperty("hideGBookingLogo")
    public void setHideGBookingLogo(ChiangMaiGoose value) { this.hideGBookingLogo = value; }

    @JsonProperty("hideCallButton")
    public ChiangMaiGoose getHideCallButton() { return hideCallButton; }
    @JsonProperty("hideCallButton")
    public void setHideCallButton(ChiangMaiGoose value) { this.hideCallButton = value; }

    @JsonProperty("hideNewAppointmentButton")
    public ChiangMaiGoose getHideNewAppointmentButton() { return hideNewAppointmentButton; }
    @JsonProperty("hideNewAppointmentButton")
    public void setHideNewAppointmentButton(ChiangMaiGoose value) { this.hideNewAppointmentButton = value; }

    @JsonProperty("hideSocialNetworksAuthentication")
    public ChiangMaiGoose getHideSocialNetworksAuthentication() { return hideSocialNetworksAuthentication; }
    @JsonProperty("hideSocialNetworksAuthentication")
    public void setHideSocialNetworksAuthentication(ChiangMaiGoose value) { this.hideSocialNetworksAuthentication = value; }

    @JsonProperty("skipServiceDurationAlignment")
    public ChiangMaiGoose getSkipServiceDurationAlignment() { return skipServiceDurationAlignment; }
    @JsonProperty("skipServiceDurationAlignment")
    public void setSkipServiceDurationAlignment(ChiangMaiGoose value) { this.skipServiceDurationAlignment = value; }

    @JsonProperty("warningContactDataText")
    public DefaultWorkerImgURL getWarningContactDataText() { return warningContactDataText; }
    @JsonProperty("warningContactDataText")
    public void setWarningContactDataText(DefaultWorkerImgURL value) { this.warningContactDataText = value; }

    @JsonProperty("enableWarningContactData")
    public ChiangMaiGoose getEnableWarningContactData() { return enableWarningContactData; }
    @JsonProperty("enableWarningContactData")
    public void setEnableWarningContactData(ChiangMaiGoose value) { this.enableWarningContactData = value; }

    @JsonProperty("splitName")
    public ChiangMaiGoose getSplitName() { return splitName; }
    @JsonProperty("splitName")
    public void setSplitName(ChiangMaiGoose value) { this.splitName = value; }

    @JsonProperty("useDefaultWorkerImg")
    public ChiangMaiGoose getUseDefaultWorkerImg() { return useDefaultWorkerImg; }
    @JsonProperty("useDefaultWorkerImg")
    public void setUseDefaultWorkerImg(ChiangMaiGoose value) { this.useDefaultWorkerImg = value; }

    @JsonProperty("defaultWorkerImgUrl")
    public DefaultWorkerImgURL getDefaultWorkerImgURL() { return defaultWorkerImgURL; }
    @JsonProperty("defaultWorkerImgUrl")
    public void setDefaultWorkerImgURL(DefaultWorkerImgURL value) { this.defaultWorkerImgURL = value; }

    @JsonProperty("useClustersMap")
    public ChiangMaiGoose getUseClustersMap() { return useClustersMap; }
    @JsonProperty("useClustersMap")
    public void setUseClustersMap(ChiangMaiGoose value) { this.useClustersMap = value; }

    @JsonProperty("useAppointmentReminder")
    public ChiangMaiGoose getUseAppointmentReminder() { return useAppointmentReminder; }
    @JsonProperty("useAppointmentReminder")
    public void setUseAppointmentReminder(ChiangMaiGoose value) { this.useAppointmentReminder = value; }

    @JsonProperty("disableWidget")
    public ChiangMaiGoose getDisableWidget() { return disableWidget; }
    @JsonProperty("disableWidget")
    public void setDisableWidget(ChiangMaiGoose value) { this.disableWidget = value; }

    @JsonProperty("disableWidgetMessage")
    public BeijingPigeon getDisableWidgetMessage() { return disableWidgetMessage; }
    @JsonProperty("disableWidgetMessage")
    public void setDisableWidgetMessage(BeijingPigeon value) { this.disableWidgetMessage = value; }

    @JsonProperty("denySameTimeRecords")
    public ChiangMaiGoose getDenySameTimeRecords() { return denySameTimeRecords; }
    @JsonProperty("denySameTimeRecords")
    public void setDenySameTimeRecords(ChiangMaiGoose value) { this.denySameTimeRecords = value; }

    @JsonProperty("sortWorkersByWorkload")
    public ChiangMaiGoose getSortWorkersByWorkload() { return sortWorkersByWorkload; }
    @JsonProperty("sortWorkersByWorkload")
    public void setSortWorkersByWorkload(ChiangMaiGoose value) { this.sortWorkersByWorkload = value; }

    @JsonProperty("mostFreeEnable")
    public ChiangMaiGoose getMostFreeEnable() { return mostFreeEnable; }
    @JsonProperty("mostFreeEnable")
    public void setMostFreeEnable(ChiangMaiGoose value) { this.mostFreeEnable = value; }

    @JsonProperty("askClientBirthday")
    public ChiangMaiGoose getAskClientBirthday() { return askClientBirthday; }
    @JsonProperty("askClientBirthday")
    public void setAskClientBirthday(ChiangMaiGoose value) { this.askClientBirthday = value; }

    @JsonProperty("askClientGender")
    public ChiangMaiGoose getAskClientGender() { return askClientGender; }
    @JsonProperty("askClientGender")
    public void setAskClientGender(ChiangMaiGoose value) { this.askClientGender = value; }

    @JsonProperty("splitInsuranceClient")
    public ChiangMaiGoose getSplitInsuranceClient() { return splitInsuranceClient; }
    @JsonProperty("splitInsuranceClient")
    public void setSplitInsuranceClient(ChiangMaiGoose value) { this.splitInsuranceClient = value; }

    @JsonProperty("insuranceClientSupportPhone")
    public Cabinets getInsuranceClientSupportPhone() { return insuranceClientSupportPhone; }
    @JsonProperty("insuranceClientSupportPhone")
    public void setInsuranceClientSupportPhone(Cabinets value) { this.insuranceClientSupportPhone = value; }

    @JsonProperty("showDisabledTaxonomies")
    public ChiangMaiGoose getShowDisabledTaxonomies() { return showDisabledTaxonomies; }
    @JsonProperty("showDisabledTaxonomies")
    public void setShowDisabledTaxonomies(ChiangMaiGoose value) { this.showDisabledTaxonomies = value; }

    @JsonProperty("disabledTaxonomiesText")
    public BeijingPigeon getDisabledTaxonomiesText() { return disabledTaxonomiesText; }
    @JsonProperty("disabledTaxonomiesText")
    public void setDisabledTaxonomiesText(BeijingPigeon value) { this.disabledTaxonomiesText = value; }

    @JsonProperty("workerNameReverse")
    public ChiangMaiGoose getWorkerNameReverse() { return workerNameReverse; }
    @JsonProperty("workerNameReverse")
    public void setWorkerNameReverse(ChiangMaiGoose value) { this.workerNameReverse = value; }

    @JsonProperty("useDefaultServiceImg")
    public ChiangMaiGoose getUseDefaultServiceImg() { return useDefaultServiceImg; }
    @JsonProperty("useDefaultServiceImg")
    public void setUseDefaultServiceImg(ChiangMaiGoose value) { this.useDefaultServiceImg = value; }

    @JsonProperty("clientBlockingSettings")
    public ClientBlockingSettings getClientBlockingSettings() { return clientBlockingSettings; }
    @JsonProperty("clientBlockingSettings")
    public void setClientBlockingSettings(ClientBlockingSettings value) { this.clientBlockingSettings = value; }

    @JsonProperty("defaultServiceImgUrl")
    public BeijingPigeon getDefaultServiceImgURL() { return defaultServiceImgURL; }
    @JsonProperty("defaultServiceImgUrl")
    public void setDefaultServiceImgURL(BeijingPigeon value) { this.defaultServiceImgURL = value; }

    @JsonProperty("allowBookVisitor")
    public ChiangMaiGoose getAllowBookVisitor() { return allowBookVisitor; }
    @JsonProperty("allowBookVisitor")
    public void setAllowBookVisitor(ChiangMaiGoose value) { this.allowBookVisitor = value; }

    @JsonProperty("useNewReserveAPI")
    public ChiangMaiGoose getUseNewReserveAPI() { return useNewReserveAPI; }
    @JsonProperty("useNewReserveAPI")
    public void setUseNewReserveAPI(ChiangMaiGoose value) { this.useNewReserveAPI = value; }

    @JsonProperty("allowAutoSelect")
    public ChiangMaiGoose getAllowAutoSelect() { return allowAutoSelect; }
    @JsonProperty("allowAutoSelect")
    public void setAllowAutoSelect(ChiangMaiGoose value) { this.allowAutoSelect = value; }

    @JsonProperty("useDirectScheduleRead")
    public Repeats getUseDirectScheduleRead() { return useDirectScheduleRead; }
    @JsonProperty("useDirectScheduleRead")
    public void setUseDirectScheduleRead(Repeats value) { this.useDirectScheduleRead = value; }

    @JsonProperty("allowSkipTimeCheck")
    public ChiangMaiGoose getAllowSkipTimeCheck() { return allowSkipTimeCheck; }
    @JsonProperty("allowSkipTimeCheck")
    public void setAllowSkipTimeCheck(ChiangMaiGoose value) { this.allowSkipTimeCheck = value; }

    @JsonProperty("useInsuranceSelect")
    public ChiangMaiGoose getUseInsuranceSelect() { return useInsuranceSelect; }
    @JsonProperty("useInsuranceSelect")
    public void setUseInsuranceSelect(ChiangMaiGoose value) { this.useInsuranceSelect = value; }

    @JsonProperty("filterNonInsuranceSchedule")
    public ChiangMaiGoose getFilterNonInsuranceSchedule() { return filterNonInsuranceSchedule; }
    @JsonProperty("filterNonInsuranceSchedule")
    public void setFilterNonInsuranceSchedule(ChiangMaiGoose value) { this.filterNonInsuranceSchedule = value; }

    @JsonProperty("useInsuranceGuaranteeLetter")
    public ChiangMaiGoose getUseInsuranceGuaranteeLetter() { return useInsuranceGuaranteeLetter; }
    @JsonProperty("useInsuranceGuaranteeLetter")
    public void setUseInsuranceGuaranteeLetter(ChiangMaiGoose value) { this.useInsuranceGuaranteeLetter = value; }

    @JsonProperty("useResourcePageLoading")
    public ChiangMaiGoose getUseResourcePageLoading() { return useResourcePageLoading; }
    @JsonProperty("useResourcePageLoading")
    public void setUseResourcePageLoading(ChiangMaiGoose value) { this.useResourcePageLoading = value; }

    @JsonProperty("newWidgetTheme")
    public NewWidgetTheme getNewWidgetTheme() { return newWidgetTheme; }
    @JsonProperty("newWidgetTheme")
    public void setNewWidgetTheme(NewWidgetTheme value) { this.newWidgetTheme = value; }

    @JsonProperty("worker_unavailability_text")
    public BeijingPigeon getWorkerUnavailabilityText() { return workerUnavailabilityText; }
    @JsonProperty("worker_unavailability_text")
    public void setWorkerUnavailabilityText(BeijingPigeon value) { this.workerUnavailabilityText = value; }
}
