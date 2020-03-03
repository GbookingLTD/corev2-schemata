// To parse this data:
//
//   import { Convert, Common, Models } from "./file";
//
//   const common = Convert.toCommon(json);
//   const models = Convert.toModels(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Common {
    $id:                  string;
    title:                string;
    properties:           CommonProperties;
    required:             string[];
    additionalProperties: boolean;
    description?:         string;
}

export interface CommonProperties {
    jsonrpc: Jsonrpc;
    id:      Id;
    error?:  Error;
    cred?:   Cred;
    method?: PuneHedgehog;
    params?: PuneHedgehog;
    result?: PuneHedgehog;
}

export interface Cred {
    description: string;
    oneOf:       CredOneOf[];
}

export interface CredOneOf {
    type:                 TypeElement;
    params?:              any[];
    required:             string[];
    additionalProperties: boolean;
    properties?:          OneOfProperties;
}

export interface OneOfProperties {
    user:  PuneHedgehog;
    token: PuneHedgehog;
}

export interface PuneHedgehog {
    description?: string;
    type:         TypeElement;
}

export enum TypeElement {
    Array = "array",
    Boolean = "boolean",
    Null = "null",
    Number = "number",
    Object = "object",
    String = "string",
}

export interface Error {
    description: string;
    type:        TypeElement;
    properties:  ErrorProperties;
    required:    string[];
}

export interface ErrorProperties {
    code:    Code;
    message: PuneHedgehog;
    data:    PuneHedgehog;
}

export interface Code {
    description: string;
    type:        TypeElement;
    "meta:enum": { [key: string]: string };
    enum:        number[];
}

export interface Id {
    description: string;
    type:        TypeUnion;
}

export type TypeUnion = TypeElement[] | TypeElement;

export interface Jsonrpc {
    description: string;
    type:        TypeElement;
    const:       string;
}

export interface Models {
    $id:                   string;
    title?:                string;
    properties:            ModelsProperties;
    required?:             string[];
    definitions?:          Definitions;
    additionalProperties?: boolean;
    "meta:extensible"?:    boolean;
    "meta:extends"?:       string[];
    type?:                 TypeElement;
    description?:          string;
}

export interface Definitions {
    MetroStation?:                      MetroStation;
    Department?:                        Department;
    Cabinet?:                           Cabinet;
    TaxonomyShowcase?:                  TaxonomyShowcase;
    BusinessTaxonomyPrice?:             BusinessTaxonomyPrice;
    AdditionalBusinessTaxonomyPrice?:   AdditionalBusinessTaxonomyPrice;
    AdditionalBusinessTaxonomyProduct?: AdditionalBusinessTaxonomyProduct;
    AdditionalDuration?:                AdditionalDuration;
    Consumable?:                        Consumable;
    BusinessTaxonomy?:                  BusinessTaxonomy;
    BackofficeConfiguration?:           BackofficeConfiguration;
    WidgetConfiguration?:               WidgetConfiguration;
    ResourceProfile?:                   ResourceProfile;
    ResourceTaxonomyLevel?:             ResourceTaxonomyLevel;
    ResourceTaxonomyChildren?:          ResourceTaxonomyChildren;
    EvenOddTimetable?:                  EvenOddTimetable;
    ResourceLocation?:                  ResourceLocation;
}

export interface AdditionalBusinessTaxonomyPrice {
    title:                string;
    type:                 TypeElement;
    properties:           AdditionalBusinessTaxonomyPriceProperties;
    required:             string[];
    additionalProperties: boolean;
}

export interface AdditionalBusinessTaxonomyPriceProperties {
    resourceLevel: PuneHedgehog;
    currency:      Currency;
    amount:        Amount;
    stockAmount:   Amount;
    type:          TypeClass;
}

export interface Amount {
    description: string;
    type:        TypeElement;
    default:     string;
}

export interface Currency {
    description: string;
    $ref:        string;
}

export interface TypeClass {
    description:  string;
    type:         TypeElement;
    enum:         string[];
    "meta:enum"?: TypeMetaEnum[];
}

export interface TypeMetaEnum {
    equal?:      string;
    begin_with?: string;
    average?:    string;
}

export interface AdditionalBusinessTaxonomyProduct {
    title:                string;
    type:                 TypeElement;
    properties:           AdditionalBusinessTaxonomyProductProperties;
    required:             string[];
    additionalProperties: boolean;
}

export interface AdditionalBusinessTaxonomyProductProperties {
    id:       PuneHedgehog;
    extraID:  PuneHedgehog;
    required: PuneHedgehog;
}

export interface AdditionalDuration {
    title:                string;
    type:                 TypeElement;
    properties:           AdditionalDurationProperties;
    additionalProperties: boolean;
}

export interface AdditionalDurationProperties {
    level:    TartuGecko;
    duration: Birthday;
}

export interface Birthday {
    type: TypeElement[];
}

export interface TartuGecko {
    type: TypeElement;
}

export interface BackofficeConfiguration {
    title:                string;
    type:                 TypeElement;
    properties:           BackofficeConfigurationProperties;
    additionalProperties: boolean;
}

export interface BackofficeConfigurationProperties {
    revisionVersion:                                 TartuGecko;
    scheduleDefaultWorkersLimit:                     LivingstoneSouthernWhiteFacedOwl;
    resourceTimetableType:                           Repeats;
    enableMasterImportance:                          HammerfestPonies;
    showTestRecord:                                  HammerfestPonies;
    skipServiceFiltering:                            HammerfestPonies;
    skipAppointmentPriceUpdate:                      HammerfestPonies;
    showManualChanges:                               HammerfestPonies;
    enableExtendedRecordsClientStatistics:           HammerfestPonies;
    pastTimeEdit:                                    LivingstoneSouthernWhiteFacedOwl;
    cabinetsEnabled:                                 HammerfestPonies;
    appointmentFutureMoving:                         HammerfestPonies;
    showClientContractNumber:                        HammerfestPonies;
    showGapWindow:                                   HammerfestPonies;
    showFirstAvailableSlot:                          HammerfestPonies;
    noInternetAlert:                                 HammerfestPonies;
    showWorkerDescriptionInEvent:                    HammerfestPonies;
    schduleWeekViewIsDefault:                        HammerfestPonies;
    showPassportId:                                  HammerfestPonies;
    showFax:                                         HammerfestPonies;
    showBirthDate:                                   HammerfestPonies;
    showEmail:                                       HammerfestPonies;
    showAddress:                                     HammerfestPonies;
    showIsraelCity:                                  HammerfestPonies;
    showHouseNumber:                                 HammerfestPonies;
    showKupatHolim:                                  HammerfestPonies;
    showDepartmentFilter:                            HammerfestPonies;
    showDepartments:                                 HammerfestPonies;
    showDepartmentsConfiguration:                    HammerfestPonies;
    showRooms:                                       HammerfestPonies;
    showClientAppearOnSchedule:                      HammerfestPonies;
    showClientAppear:                                HammerfestPonies;
    skipCancelIfClientNotAppear:                     HammerfestPonies;
    showClientPayment:                               HammerfestPonies;
    showExtraClientInfo:                             HammerfestPonies;
    showUTM:                                         HammerfestPonies;
    showWorkerStatus:                                HammerfestPonies;
    enableBlackList:                                 HammerfestPonies;
    enableCalculateShedule:                          HammerfestPonies;
    showSeasonTickets:                               HammerfestPonies;
    showLeadsScreen:                                 HammerfestPonies;
    showGeneratableReportsScreen:                    HammerfestPonies;
    schedulerWeekViewType:                           Repeats;
    workWeekStart:                                   LivingstoneSouthernWhiteFacedOwl;
    workWeekEnd:                                     LivingstoneSouthernWhiteFacedOwl;
    scheduleWorkerHours:                             HammerfestPonies;
    showTaxonomyLocalization:                        HammerfestPonies;
    highlightedResource:                             HammerfestPonies;
    showAdditionalFields:                            HammerfestPonies;
    exportToExcelRemovedClients:                     HammerfestPonies;
    checkClientOverlapping:                          HammerfestPonies;
    hideCustomerPortalFooter:                        HammerfestPonies;
    readonlyResourceSchedule:                        HammerfestPonies;
    showClientImage:                                 HammerfestPonies;
    stateLevelHolidays:                              DefaultFilteredWorkers;
    stateLevelHolidaysNotWorking:                    HammerfestPonies;
    paymentProvider:                                 BackofficeType;
    showDefaulterBlockscreen:                        HammerfestPonies;
    allowSmsTranslit:                                HammerfestPonies;
    defaultGTScheduleDayView:                        HammerfestPonies;
    enableSourceChoice:                              HammerfestPonies;
    manualExceptionSupport:                          HammerfestPonies;
    showWorkerExtraId:                               HammerfestPonies;
    editAppExtraId:                                  HammerfestPonies;
    useGtAppMethod:                                  HammerfestPonies;
    disableAppointmentClientInlineEditor:            HammerfestPonies;
    enableClientCard:                                HammerfestPonies;
    enableClientMedicalCardReport:                   HammerfestPonies;
    enableCustomOnlinePaymentConfirmation:           HammerfestPonies;
    customOnlinePaymentConfirmationTemplate:         HammerfestPonies;
    showFiredWorkerAppointmentAlert:                 HammerfestPonies;
    showDeliveryStatus:                              HammerfestPonies;
    showTaxonomyChildren:                            HammerfestPonies;
    editTaxonomyChildren:                            HammerfestPonies;
    showTaxonomyVisitType:                           HammerfestPonies;
    editTaxonomyVisitType:                           HammerfestPonies;
    finId:                                           TartuGecko;
    finName:                                         TartuGecko;
    enableServiceTimeLimit:                          HammerfestPonies;
    showGender:                                      HammerfestPonies;
    showGenderInRecords:                             HammerfestPonies;
    showWidgetColorTheme:                            HammerfestPonies;
    enableExtendedPhone:                             HammerfestPonies;
    enableTaxonomyChildrenAgeCheck:                  HammerfestPonies;
    taxonomyChildrenMaxAge:                          TartuGecko;
    useAdjacentTaxonomies:                           HammerfestPonies;
    useAdditionalDurations:                          HammerfestPonies;
    splitFullNameXlsExport:                          HammerfestPonies;
    useAdjacentTaxonomiesSlotSplitting:              HammerfestPonies;
    adjacentTaxonomiesTreshold:                      LivingstoneSouthernWhiteFacedOwl;
    allowHideWorkersFromSchdeule:                    HammerfestPonies;
    allowHideServiceForBooking:                      HammerfestPonies;
    blockNotificationForAnyAvailableAdjacentService: HammerfestPonies;
    feedbackCustomerPortalMessage:                   TartuGecko;
    feedbackCustomerPortalTitle:                     TartuGecko;
    feedbackCustomerPortalThankYouMessage:           TartuGecko;
    feedBackMinRating:                               FeedBackMinRating;
    enableClientLanguage:                            HammerfestPonies;
    showClientBirthdayFilter:                        HammerfestPonies;
}

export interface LivingstoneSouthernWhiteFacedOwl {
    type:    TypeElement;
    default: number;
}

export interface HammerfestPonies {
    type:    TypeElement;
    default: boolean;
}

export interface FeedBackMinRating {
    type:    TypeElement;
    enum:    string[];
    default: number;
}

export interface BackofficeType {
    type:  TypeElement;
    enum?: string[];
}

export interface Repeats {
    type:         TypeElement;
    enum:         string[];
    default:      string;
    "meta:enum"?: PurpleMetaEnum[];
}

export interface PurpleMetaEnum {
    PLAN_CLINIC?:        string;
    PLAN_CLINIC_ONLINE?: string;
    ONCALL_ONLINE?:      string;
    PLAN_ONLINE?:        string;
}

export interface DefaultFilteredWorkers {
    type:  TypeElement;
    items: TartuGecko;
}

export interface BusinessTaxonomy {
    title:                string;
    type:                 TypeElement;
    properties:           BusinessTaxonomyProperties;
    additionalProperties: boolean;
}

export interface BusinessTaxonomyProperties {
    id:                         TartuGecko;
    taxonomyParentID:           TartuGecko;
    taxonomyCategoryExtraID:    TartuGecko;
    taxonomyAppExtraID:         TartuGecko;
    extraId:                    TartuGecko;
    siteId:                     PuneHedgehog;
    alias:                      TartuGecko;
    showcases:                  Cabinets;
    rooms:                      DefaultFilteredWorkers;
    cabinetsEnabled:            HammerfestPonies;
    cabinets:                   DefaultFilteredWorkers;
    specialCabinet:             TartuGecko;
    lastModified:               CreatedOn;
    price:                      BackofficeConfigurationClass;
    additionalPrices:           Cabinets;
    additionalProducts:         Cabinets;
    capacity:                   TartuGecko;
    capacity_decrease:          LivingstoneSouthernWhiteFacedOwl;
    duration:                   TartuGecko;
    popularity:                 TartuGecko;
    active:                     TartuGecko;
    extraDescription:           TartuGecko;
    confirmationAlert:          TartuGecko;
    extraLink:                  TartuGecko;
    priceLink:                  TartuGecko;
    color:                      TartuGecko;
    order:                      TartuGecko;
    images:                     DefaultFilteredWorkers;
    manualChanges:              TartuGecko;
    discounts:                  GeneralInfo;
    additionalDurations:        Cabinets;
    additionalTaxonomyExtraId:  AdditionalTaxonomyExtraId;
    parallelTaxonomies:         DefaultFilteredWorkers;
    onlyAfterTaxonomies:        DefaultFilteredWorkers;
    displayInWidget:            TartuGecko;
    allowNextBookingInDays:     LivingstoneSouthernWhiteFacedOwl;
    allowNextBookingInDaysText: TartuGecko;
    taxonomyType:               GeneralInfo;
    designs:                    DefaultFilteredWorkers;
    isOther:                    TartuGecko;
    chargeUnitsStep:            TartuGecko;
    forPay:                     HammerfestPonies;
    childrenTaxonomyTypes:      ChildrenTaxonomyTypes;
    visitType:                  TartuGecko;
    timetable:                  GeneralInfo;
    exceptions:                 TartuGecko;
    leaves:                     DefaultFilteredWorkers;
    showcaseTaxonomyID:         PuneHedgehog;
    newTaxonomy:                HammerfestPonies;
    adjacentTaxonomies:         AdjacentTaxonomies;
    adjacentSameTimeStart:      TartuGecko;
    dateLimitType:              Repeats;
    dateLimits:                 DateLimits;
    allowNextBookingCount:      LivingstoneSouthernWhiteFacedOwl;
    allowBookingInBO:           HammerfestPonies;
    confirmationSmsAlert:       TartuGecko;
    useConfirmationSmsAlert:    TartuGecko;
    onlineMode:                 Repeats;
    showcaseItems:              ShowcaseItems;
}

export interface Cabinets {
    type:  TypeElement;
    items: GeneralInfo;
}

export interface GeneralInfo {
    $ref: string;
}

export interface AdditionalTaxonomyExtraId {
    type:  TypeElement;
    items: AdditionalTaxonomyExtraIdItems;
}

export interface AdditionalTaxonomyExtraIdItems {
    type:      TypeElement;
    properies: Properies;
}

export interface Properies {
    taxonomyExtraID: TartuGecko;
    extraId:         TartuGecko;
}

export interface AdjacentTaxonomies {
    type:  TypeElement;
    items: AdjacentTaxonomiesItems;
}

export interface AdjacentTaxonomiesItems {
    type:                 TypeElement;
    properties:           PurpleProperties;
    additionalProperties: boolean;
}

export interface PurpleProperties {
    slotDuration:   LivingstoneSouthernWhiteFacedOwl;
    isAnyAvailable: HammerfestPonies;
    taxonomyID:     TartuGecko;
    order:          TartuGecko;
}

export interface ChildrenTaxonomyTypes {
    type:  TypeElement;
    items: BackofficeType;
}

export interface DateLimits {
    type:  TypeElement;
    items: DateLimitsItems;
}

export interface DateLimitsItems {
    type:                 TypeElement;
    properties:           FluffyProperties;
    additionalProperties: boolean;
}

export interface FluffyProperties {
    dateLimitFrom: CreatedOn;
    dateLimitTo:   CreatedOn;
}

export interface CreatedOn {
    type:   TypeElement;
    format: string;
}

export interface BackofficeConfigurationClass {
    type?: TypeElement;
    $ref?: string;
}

export interface ShowcaseItems {
    type:  TypeElement;
    items: ShowcaseItemsItems;
}

export interface ShowcaseItemsItems {
    type:                 TypeElement;
    properties:           TentacledProperties;
    additionalProperties: boolean;
}

export interface TentacledProperties {
    _id:                 TartuGecko;
    taxonomyID:          TartuGecko;
    additionalDurations: AdditionalDurations;
    businessID:          TartuGecko;
}

export interface AdditionalDurations {
    type:  TypeElement;
    items: AdditionalDurationsItems;
}

export interface AdditionalDurationsItems {
    type:                 TypeElement;
    properties:           StickyProperties;
    additionalProperties: boolean;
}

export interface StickyProperties {
    _id:      TartuGecko;
    level:    PuneHedgehog;
    duration: LivingstoneSouthernWhiteFacedOwl;
}

export interface BusinessTaxonomyPrice {
    title:                string;
    type:                 TypeElement;
    properties:           BusinessTaxonomyPriceProperties;
    required:             string[];
    additionalProperties: boolean;
}

export interface BusinessTaxonomyPriceProperties {
    currency:    Currency;
    amount:      Amount;
    stockAmount: StockAmount;
    type:        TypeClass;
}

export interface StockAmount {
    description: string;
    type:        TypeElement[];
    default:     string;
}

export interface Cabinet {
    title:                string;
    type:                 TypeElement;
    properties:           CabinetProperties;
    additionalProperties: boolean;
}

export interface CabinetProperties {
    id:     TartuGecko;
    name:   TartuGecko;
    active: TartuGecko;
}

export interface Consumable {
    title:      string;
    type:       TypeElement;
    properties: ConsumableProperties;
    required:   string[];
}

export interface ConsumableProperties {
    extraID:  TartuGecko;
    name:     TartuGecko;
    quantity: TartuGecko;
}

export interface Department {
    title:                string;
    type:                 TypeElement;
    properties:           DepartmentProperties;
    required:             string[];
    additionalProperties: boolean;
}

export interface DepartmentProperties {
    id_:  TartuGecko;
    id:   TartuGecko;
    name: TartuGecko;
}

export interface EvenOddTimetable {
    "meta:extensible": boolean;
    "meta:extends":    string[];
    type:              TypeElement;
    properties:        EvenOddTimetableProperties;
    required:          string[];
}

export interface EvenOddTimetableProperties {
    startPeriod: TypeClass;
    even:        TaxonomyChildren;
    odd:         TaxonomyChildren;
}

export interface TaxonomyChildren {
    description: string;
    type:        TypeElement;
    items:       GeneralInfo;
}

export interface MetroStation {
    type:                 TypeElement;
    properties:           MetroStationProperties;
    required:             string[];
    additionalProperties: boolean;
}

export interface MetroStationProperties {
    _id:         TartuGecko;
    name:        TartuGecko;
    description: TartuGecko;
}

export interface ResourceLocation {
    type:       TypeElement;
    properties: ResourceLocationProperties;
    required:   any[];
}

export interface ResourceLocationProperties {
    longitude: TartuGecko;
    latitude:  TartuGecko;
    time:      PuneHedgehog;
}

export interface ResourceProfile {
    title:       string;
    description: string;
    type:        TypeElement;
    properties:  ResourceProfileProperties;
    required:    string[];
}

export interface ResourceProfileProperties {
    email:      PuneHedgehog;
    profileID:  PuneHedgehog;
    userID:     PuneHedgehog;
    accessType: TypeClass;
}

export interface ResourceTaxonomyChildren {
    type:       TypeElement;
    properties: ResourceTaxonomyChildrenProperties;
    required:   string[];
}

export interface ResourceTaxonomyChildrenProperties {
    taxonomyID: PuneHedgehog;
    children:   PuneHedgehog;
}

export interface ResourceTaxonomyLevel {
    $id:        string;
    type:       TypeElement;
    properties: ResourceTaxonomyLevelProperties;
    required:   string[];
}

export interface ResourceTaxonomyLevelProperties {
    level: PuneHedgehog;
    id:    PuneHedgehog;
}

export interface TaxonomyShowcase {
    title:                string;
    type:                 TypeElement;
    properties:           TaxonomyShowcaseProperties;
    additionalProperties: boolean;
}

export interface TaxonomyShowcaseProperties {
    baseBusinessID:   TartuGecko;
    originBusinessID: TartuGecko;
    showcaseItemID:   TartuGecko;
    isBaseNode:       TartuGecko;
}

export interface WidgetConfiguration {
    title:                string;
    type:                 TypeElement;
    properties:           WidgetConfigurationProperties;
    additionalProperties: boolean;
}

export interface WidgetConfigurationProperties {
    revisionVersion:                        TartuGecko;
    crunchv2:                               HammerfestPonies;
    useCRAC:                                HammerfestPonies;
    cracSlotSize:                           CracSlotSize;
    widgetUseCRAC:                          HammerfestPonies;
    skipDaysForward:                        HammerfestPonies;
    daysForward:                            LivingstoneSouthernWhiteFacedOwl;
    cracServer:                             BackofficeType;
    useMedAuth:                             HammerfestPonies;
    useSortByName:                          HammerfestPonies;
    useMiddleName:                          HammerfestPonies;
    showSurnameFirst:                       HammerfestPonies;
    hidePrices:                             HammerfestPonies;
    hideEmptyDays:                          HammerfestPonies;
    showMap:                                HammerfestPonies;
    tentativeTTL:                           TartuGecko;
    showDrinkQuestion:                      HammerfestPonies;
    showTalkQuestion:                       HammerfestPonies;
    showClientAddress:                      HammerfestPonies;
    skipMobileMap:                          HammerfestPonies;
    skipAuthentication:                     HammerfestPonies;
    skipServiceSelection:                   HammerfestPonies;
    showTaxonomyConfirmationAlert:          HammerfestPonies;
    showClientComment:                      HammerfestPonies;
    clientCommentTitle:                     HammerfestPonies;
    calendarMode:                           HammerfestPonies;
    calendarModeHideTime:                   HammerfestPonies;
    useCoupon:                              HammerfestPonies;
    dontRequireEmail:                       HammerfestPonies;
    emailIsMandatory:                       HammerfestPonies;
    displaySlotSize:                        TartuGecko;
    additionalName:                         TartuGecko;
    shortLink:                              TartuGecko;
    appointment_confirmation_title:         TartuGecko;
    appointment_confirmation_text:          TartuGecko;
    theme:                                  DefaultWorkerImgUrl;
    socialSharing:                          SocialSharing;
    noDefaultImages:                        HammerfestPonies;
    withoutWorkers:                         HammerfestPonies;
    bookableMonthsCount:                    LivingstoneSouthernWhiteFacedOwl;
    dayUnavailableLabel:                    TartuGecko;
    dayOffLabel:                            TartuGecko;
    useBusinessScheduleForUnavailableLabel: HammerfestPonies;
    hideAnyWorkerBooking:                   HammerfestPonies;
    disableMobileWidget:                    HammerfestPonies;
    socialNetworkImage:                     HammerfestPonies;
    payment:                                Repeats;
    paymentProvider:                        Repeats;
    alignmentTaxonomySlots:                 HammerfestPonies;
    bookableDateRanges:                     BookableDateRanges;
    discountedPriceRounding:                DiscountedPriceRounding;
    multiServiceBooking:                    HammerfestPonies;
    maxServiceBooking:                      LivingstoneSouthernWhiteFacedOwl;
    multiTimeslotBooking:                   HammerfestPonies;
    maxTimeslotBooking:                     LivingstoneSouthernWhiteFacedOwl;
    multiTimeslotBookingAllDays:            HammerfestPonies;
    showAllWorkers:                         HammerfestPonies;
    sortByMostFree:                         HammerfestPonies;
    skipTimeSelection:                      HammerfestPonies;
    skipTimeSelectionServiceIDs:            DefaultFilteredWorkers;
    skipWorkerServicesSelection:            HammerfestPonies;
    skipWorkerSelectedServiceIDs:           DefaultFilteredWorkers;
    requireAgreement:                       HammerfestPonies;
    requireAgreementLink:                   DefaultWorkerImgUrl;
    hideGraySlots:                          HammerfestPonies;
    extraVisitors:                          HammerfestPonies;
    overrideFooter:                         DefaultWorkerImgUrl;
    enableOverrideFooter:                   HammerfestPonies;
    hideGBookingLogo:                       HammerfestPonies;
    hideCallButton:                         HammerfestPonies;
    hideNewAppointmentButton:               HammerfestPonies;
    hideSocialNetworksAuthentication:       HammerfestPonies;
    skipServiceDurationAlignment:           HammerfestPonies;
    warningContactDataText:                 DefaultWorkerImgUrl;
    enableWarningContactData:               HammerfestPonies;
    splitName:                              HammerfestPonies;
    useDefaultWorkerImg:                    HammerfestPonies;
    defaultWorkerImgUrl:                    DefaultWorkerImgUrl;
    useClustersMap:                         HammerfestPonies;
    useAppointmentReminder:                 HammerfestPonies;
    disableWidget:                          HammerfestPonies;
    disableWidgetMessage:                   TartuGecko;
    denySameTimeRecords:                    HammerfestPonies;
    sortWorkersByWorkload:                  HammerfestPonies;
    mostFreeEnable:                         HammerfestPonies;
    askClientBirthday:                      HammerfestPonies;
    askClientGender:                        HammerfestPonies;
    splitInsuranceClient:                   HammerfestPonies;
    insuranceClientSupportPhone:            Cabinets;
    showDisabledTaxonomies:                 HammerfestPonies;
    disabledTaxonomiesText:                 TartuGecko;
    workerNameReverse:                      HammerfestPonies;
    useDefaultServiceImg:                   HammerfestPonies;
    clientBlockingSettings:                 ClientBlockingSettings;
    defaultServiceImgUrl:                   TartuGecko;
    allowBookVisitor:                       HammerfestPonies;
    useNewReserveAPI:                       HammerfestPonies;
    allowAutoSelect:                        HammerfestPonies;
    useDirectScheduleRead:                  Repeats;
    allowSkipTimeCheck:                     HammerfestPonies;
    useInsuranceSelect:                     HammerfestPonies;
    filterNonInsuranceSchedule:             HammerfestPonies;
    useInsuranceGuaranteeLetter:            HammerfestPonies;
    useResourcePageLoading:                 HammerfestPonies;
    newWidgetTheme:                         NewWidgetTheme;
    worker_unavailability_text:             TartuGecko;
}

export interface BookableDateRanges {
    type:       TypeElement;
    properties: BookableDateRangesProperties;
}

export interface BookableDateRangesProperties {
    enabled: HammerfestPonies;
    start:   End;
    end:     End;
}

export interface End {
    oneOf: EndOneOf[];
}

export interface EndOneOf {
    type?:   TypeElement;
    format?: string;
    const?:  null;
}

export interface ClientBlockingSettings {
    type:                 TypeElement;
    properties:           ClientBlockingSettingsProperties;
    additionalProperties: boolean;
}

export interface ClientBlockingSettingsProperties {
    blockIfFutureRecordExists:  HammerfestPonies;
    blockRepeatedRecordsRange:  LivingstoneSouthernWhiteFacedOwl;
    blockRepeatedRecordsCount:  LivingstoneSouthernWhiteFacedOwl;
    blockRepeatedRecordsText:   TartuGecko;
    appointmentClientBlock:     HammerfestPonies;
    appointmentClientBlockDays: LivingstoneSouthernWhiteFacedOwl;
    appointmentClientBlockText: TartuGecko;
}

export interface CracSlotSize {
    type:    TypeElement;
    enum:    number[];
    default: number;
}

export interface DefaultWorkerImgUrl {
    type:    TypeElement;
    default: string;
}

export interface DiscountedPriceRounding {
    type:       TypeElement;
    properties: DiscountedPriceRoundingProperties;
}

export interface DiscountedPriceRoundingProperties {
    rule:  BackofficeType;
    value: LivingstoneSouthernWhiteFacedOwl;
}

export interface NewWidgetTheme {
    type:                 TypeElement;
    additionalProperties: boolean;
}

export interface SocialSharing {
    type:       TypeElement;
    properties: SocialSharingProperties;
}

export interface SocialSharingProperties {
    active:          HammerfestPonies;
    widgetText:      Birthday;
    text:            Birthday;
    discountEnabled: TartuGecko;
    discountType:    BackofficeType;
    discountAmount:  Birthday;
}

export interface ModelsProperties {
    name?:                          PuneHedgehog;
    shortName?:                     TartuGecko;
    value?:                         TartuGecko;
    type?:                          Repeats;
    requiredField?:                 TartuGecko;
    country?:                       BackofficeType;
    zip_code?:                      TartuGecko;
    locality?:                      TartuGecko;
    locality_type?:                 TartuGecko;
    street?:                        TartuGecko;
    street_type?:                   TartuGecko;
    number?:                        TartuGecko;
    admin_area?:                    TartuGecko;
    admin_area_type?:               TartuGecko;
    sub_admin_area?:                TartuGecko;
    sub_admin_area_type?:           TartuGecko;
    sub_locality?:                  TartuGecko;
    sub_locality_type?:             TartuGecko;
    corps?:                         TartuGecko;
    building?:                      TartuGecko;
    possesion?:                     TartuGecko;
    kilometer?:                     TartuGecko;
    address?:                       TartuGecko;
    house_add?:                     TartuGecko;
    longitude?:                     TartuGecko;
    latitude?:                      TartuGecko;
    address_add?:                   TartuGecko;
    office?:                        TartuGecko;
    metroStations?:                 Cabinets;
    way?:                           TartuGecko;
    group?:                         BackofficeType;
    zipCode?:                       TartuGecko;
    localityType?:                  TartuGecko;
    streetType?:                    TartuGecko;
    adminArea?:                     TartuGecko;
    adminAreaType?:                 TartuGecko;
    subAdminArea?:                  TartuGecko;
    subAdminAreaType?:              TartuGecko;
    subLocality?:                   TartuGecko;
    subLocalityType?:               TartuGecko;
    houseAdd?:                      TartuGecko;
    addressAdd?:                    TartuGecko;
    id?:                            PuneHedgehog;
    extraID?:                       TartuGecko;
    created_on?:                    CreatedOn;
    general_info?:                  GeneralInfo;
    taxonomies?:                    Taxonomies;
    resources?:                     Cabinets;
    designs?:                       DefaultFilteredWorkers;
    stateLevelHolidaysNotWorking?:  HammerfestPonies;
    notifications?:                 TartuGecko;
    vertical?:                      TartuGecko;
    flatTaxonomyDisplay?:           TartuGecko;
    allowCategoryBooking?:          TartuGecko;
    cabinetsEnabled?:               TartuGecko;
    taxonomy_tree_capacity?:        DefaultFilteredWorkers;
    consumables?:                   Cabinets;
    departments?:                   Cabinets;
    cabinets?:                      Cabinets;
    defaultFilteredWorkers?:        DefaultFilteredWorkers;
    integration_data?:              TartuGecko;
    yandexFeedType?:                TartuGecko;
    top_services?:                  TopServices;
    mobileData?:                    TartuGecko;
    active?:                        PuneHedgehog;
    backofficeType?:                BackofficeType;
    backofficeConfiguration?:       BackofficeConfigurationClass;
    additionalSettings?:            AdditionalSettings;
    widget_configuration?:          BackofficeConfigurationClass;
    mini_widget_configuration?:     MiniWidgetConfiguration;
    callback_widget_configuration?: CallbackWidgetConfiguration;
    taxonomiesComplex?:             TaxonomiesComplex;
    backoffice_configuration?:      PropertiesBackofficeConfiguration;
    surname?:                       PuneHedgehog;
    middle_name?:                   TartuGecko;
    birthday?:                      Birthday;
    phone?:                         GeneralInfo;
    email?:                         AdditionalExtraId;
    fromSms?:                       FromSms;
    sex?:                           BackofficeType;
    creatorProfileID?:              Birthday;
    creatorProfileName?:            Birthday;
    driverLicense?:                 Birthday;
    taxiPark?:                      Birthday;
    taxiParkMemberCount?:           Birthday;
    start?:                         CreatedOn;
    repeats?:                       Repeats;
    weeklyRepeat?:                  LivingstoneSouthernWhiteFacedOwl;
    unlimWeeklyRepeat?:             HammerfestPonies;
    daysOfWeek?:                    BackofficeType;
    slots?:                         Slots;
    country_code?:                  TartuGecko;
    area_code?:                     TartuGecko;
    revisionVersion?:               PuneHedgehog;
    rating?:                        PuneHedgehog;
    capacity?:                      PuneHedgehog;
    icon_url?:                      IconUrl;
    originBusinessID?:              PuneHedgehog;
    originTaxonomies?:              AdditionalExtraId;
    origin_general_info?:           OriginGeneralInfo;
    nickname?:                      PuneHedgehog;
    middleName?:                    PuneHedgehog;
    loaned?:                        PuneHedgehog;
    loanedTo?:                      PuneHedgehog;
    loanedFrom?:                    PuneHedgehog;
    description?:                   PuneHedgehog;
    profession?:                    PuneHedgehog;
    extraDescription?:              PuneHedgehog;
    extraLink?:                     PuneHedgehog;
    extraId?:                       PuneHedgehog;
    siteId?:                        PuneHedgehog;
    additionalExtraId?:             AdditionalExtraId;
    extraMediaId?:                  PuneHedgehog;
    departmentId?:                  PuneHedgehog;
    workPlace?:                     PuneHedgehog;
    order?:                         PuneHedgehog;
    color?:                         PuneHedgehog;
    profile?:                       GeneralInfo;
    taxonomyLevels?:                TaxonomyChildren;
    taxonomyChildren?:              TaxonomyChildren;
    level?:                         PuneHedgehog;
    perk?:                          PuneHedgehog;
    smsEnabled?:                    PuneHedgehog;
    emailEnabled?:                  PuneHedgehog;
    displayInWidget?:               PuneHedgehog;
    manualChanges?:                 Exceptions;
    timetable?:                     EvenOddTimetableClass;
    evenOddTimetable?:              EvenOddTimetableClass;
    status?:                        Status;
    image?:                         Exceptions;
    location?:                      EvenOddTimetableClass;
    exceptions?:                    Exceptions;
    userData?:                      TartuGecko;
    scheduleIsEmpty?:               Exceptions;
    orderWeight?:                   IconUrl;
    readonlyTaxonomies?:            DefaultFilteredWorkers;
    displayInSchedule?:             HammerfestPonies;
    lastSU?:                        CreatedOn;
    experience?:                    CreatedOn;
    degree?:                        TartuGecko;
    social_network?:                BackofficeType;
    handle?:                        TartuGecko;
    url?:                           TartuGecko;
    week?:                          Week;
}

export interface AdditionalExtraId {
    description?: string;
    type:         TypeElement;
    items?:       TartuGecko;
}

export interface AdditionalSettings {
    type:       TypeElement;
    properties: AdditionalSettingsProperties;
}

export interface AdditionalSettingsProperties {
    appointmentExtensionAmount: LivingstoneSouthernWhiteFacedOwl;
    appointmentExtensionType:   Repeats;
}

export interface PropertiesBackofficeConfiguration {
    type:       TypeElement;
    properties: BackofficeConfigurationPropertiesClass;
}

export interface BackofficeConfigurationPropertiesClass {
    resourceTimetableType:  Repeats;
    enableMasterImportance: HammerfestPonies;
}

export interface CallbackWidgetConfiguration {
    type:       TypeElement;
    properties: CallbackWidgetConfigurationProperties;
}

export interface CallbackWidgetConfigurationProperties {
    title1: TartuGecko;
    title2: TartuGecko;
}

export interface EvenOddTimetableClass {
    definition: string;
    $ref:       string;
}

export interface Exceptions {
    definition: string;
    type:       TypeElement;
}

export interface FromSms {
    type:    TypeElement[];
    default: boolean;
}

export interface IconUrl {
    description: string;
    type:        TypeElement[];
}

export interface MiniWidgetConfiguration {
    type:       TypeElement;
    properties: MiniWidgetConfigurationProperties;
}

export interface MiniWidgetConfigurationProperties {
    title1: TartuGecko;
    title2: TartuGecko;
    fields: ChildrenTaxonomyTypes;
}

export interface OriginGeneralInfo {
    description: string;
    type:        TypeElement;
    $ref:        string;
}

export interface Slots {
    type:       TypeElement;
    properties: SlotsProperties;
}

export interface SlotsProperties {
    time: GeneralInfo;
}

export interface Status {
    definition: string;
    type:       TypeElement;
    enum:       string[];
}

export interface Taxonomies {
    type:         TypeElement;
    items:        BackofficeConfigurationClass;
    description?: string;
}

export interface TaxonomiesComplex {
    type:  TypeElement;
    items: TaxonomiesComplexItems;
}

export interface TaxonomiesComplexItems {
    type:       TypeElement;
    properties: IndigoProperties;
}

export interface IndigoProperties {
    name:       TartuGecko;
    taxonomies: DefaultFilteredWorkers;
}

export interface TopServices {
    type:       TypeElement;
    properties: TopServicesProperties;
}

export interface TopServicesProperties {
    status:   TartuGecko;
    services: TartuGecko;
}

export interface Week {
    type:                 TypeElement;
    properties:           WeekProperties;
    required:             string[];
    additionalProperties: boolean;
}

export interface WeekProperties {
    sun: Cabinets;
    mon: Cabinets;
    tue: Cabinets;
    wed: Cabinets;
    thu: Cabinets;
    fri: Cabinets;
    sat: Cabinets;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toCommon(json: string): Common {
        return cast(JSON.parse(json), r("Common"));
    }

    public static commonToJson(value: Common): string {
        return JSON.stringify(uncast(value, r("Common")), null, 2);
    }

    public static toModels(json: string): Models {
        return cast(JSON.parse(json), r("Models"));
    }

    public static modelsToJson(value: Models): string {
        return JSON.stringify(uncast(value, r("Models")), null, 2);
    }
}

function invalidValue(typ: any, val: any): never {
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`);
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        var map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        var map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        var l = typs.length;
        for (var i = 0; i < l; i++) {
            var typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(typ: any, val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        var result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(typ, val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Common": o([
        { json: "$id", js: "$id", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "properties", js: "properties", typ: r("CommonProperties") },
        { json: "required", js: "required", typ: a("") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "description", js: "description", typ: u(undefined, "") },
    ], false),
    "CommonProperties": o([
        { json: "jsonrpc", js: "jsonrpc", typ: r("Jsonrpc") },
        { json: "id", js: "id", typ: r("Id") },
        { json: "error", js: "error", typ: u(undefined, r("Error")) },
        { json: "cred", js: "cred", typ: u(undefined, r("Cred")) },
        { json: "method", js: "method", typ: u(undefined, r("PuneHedgehog")) },
        { json: "params", js: "params", typ: u(undefined, r("PuneHedgehog")) },
        { json: "result", js: "result", typ: u(undefined, r("PuneHedgehog")) },
    ], false),
    "Cred": o([
        { json: "description", js: "description", typ: "" },
        { json: "oneOf", js: "oneOf", typ: a(r("CredOneOf")) },
    ], false),
    "CredOneOf": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "params", js: "params", typ: u(undefined, a("any")) },
        { json: "required", js: "required", typ: a("") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: u(undefined, r("OneOfProperties")) },
    ], false),
    "OneOfProperties": o([
        { json: "user", js: "user", typ: r("PuneHedgehog") },
        { json: "token", js: "token", typ: r("PuneHedgehog") },
    ], false),
    "PuneHedgehog": o([
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "type", js: "type", typ: r("TypeElement") },
    ], false),
    "Error": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("ErrorProperties") },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "ErrorProperties": o([
        { json: "code", js: "code", typ: r("Code") },
        { json: "message", js: "message", typ: r("PuneHedgehog") },
        { json: "data", js: "data", typ: r("PuneHedgehog") },
    ], false),
    "Code": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "meta:enum", js: "meta:enum", typ: m("") },
        { json: "enum", js: "enum", typ: a(0) },
    ], false),
    "Id": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: u(a(r("TypeElement")), r("TypeElement")) },
    ], false),
    "Jsonrpc": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "const", js: "const", typ: "" },
    ], false),
    "Models": o([
        { json: "$id", js: "$id", typ: "" },
        { json: "title", js: "title", typ: u(undefined, "") },
        { json: "properties", js: "properties", typ: r("ModelsProperties") },
        { json: "required", js: "required", typ: u(undefined, a("")) },
        { json: "definitions", js: "definitions", typ: u(undefined, r("Definitions")) },
        { json: "additionalProperties", js: "additionalProperties", typ: u(undefined, true) },
        { json: "meta:extensible", js: "meta:extensible", typ: u(undefined, true) },
        { json: "meta:extends", js: "meta:extends", typ: u(undefined, a("")) },
        { json: "type", js: "type", typ: u(undefined, r("TypeElement")) },
        { json: "description", js: "description", typ: u(undefined, "") },
    ], false),
    "Definitions": o([
        { json: "MetroStation", js: "MetroStation", typ: u(undefined, r("MetroStation")) },
        { json: "Department", js: "Department", typ: u(undefined, r("Department")) },
        { json: "Cabinet", js: "Cabinet", typ: u(undefined, r("Cabinet")) },
        { json: "TaxonomyShowcase", js: "TaxonomyShowcase", typ: u(undefined, r("TaxonomyShowcase")) },
        { json: "BusinessTaxonomyPrice", js: "BusinessTaxonomyPrice", typ: u(undefined, r("BusinessTaxonomyPrice")) },
        { json: "AdditionalBusinessTaxonomyPrice", js: "AdditionalBusinessTaxonomyPrice", typ: u(undefined, r("AdditionalBusinessTaxonomyPrice")) },
        { json: "AdditionalBusinessTaxonomyProduct", js: "AdditionalBusinessTaxonomyProduct", typ: u(undefined, r("AdditionalBusinessTaxonomyProduct")) },
        { json: "AdditionalDuration", js: "AdditionalDuration", typ: u(undefined, r("AdditionalDuration")) },
        { json: "Consumable", js: "Consumable", typ: u(undefined, r("Consumable")) },
        { json: "BusinessTaxonomy", js: "BusinessTaxonomy", typ: u(undefined, r("BusinessTaxonomy")) },
        { json: "BackofficeConfiguration", js: "BackofficeConfiguration", typ: u(undefined, r("BackofficeConfiguration")) },
        { json: "WidgetConfiguration", js: "WidgetConfiguration", typ: u(undefined, r("WidgetConfiguration")) },
        { json: "ResourceProfile", js: "ResourceProfile", typ: u(undefined, r("ResourceProfile")) },
        { json: "ResourceTaxonomyLevel", js: "ResourceTaxonomyLevel", typ: u(undefined, r("ResourceTaxonomyLevel")) },
        { json: "ResourceTaxonomyChildren", js: "ResourceTaxonomyChildren", typ: u(undefined, r("ResourceTaxonomyChildren")) },
        { json: "EvenOddTimetable", js: "EvenOddTimetable", typ: u(undefined, r("EvenOddTimetable")) },
        { json: "ResourceLocation", js: "ResourceLocation", typ: u(undefined, r("ResourceLocation")) },
    ], false),
    "AdditionalBusinessTaxonomyPrice": o([
        { json: "title", js: "title", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("AdditionalBusinessTaxonomyPriceProperties") },
        { json: "required", js: "required", typ: a("") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "AdditionalBusinessTaxonomyPriceProperties": o([
        { json: "resourceLevel", js: "resourceLevel", typ: r("PuneHedgehog") },
        { json: "currency", js: "currency", typ: r("Currency") },
        { json: "amount", js: "amount", typ: r("Amount") },
        { json: "stockAmount", js: "stockAmount", typ: r("Amount") },
        { json: "type", js: "type", typ: r("TypeClass") },
    ], false),
    "Amount": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "default", js: "default", typ: "" },
    ], false),
    "Currency": o([
        { json: "description", js: "description", typ: "" },
        { json: "$ref", js: "$ref", typ: "" },
    ], false),
    "TypeClass": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "enum", js: "enum", typ: a("") },
        { json: "meta:enum", js: "meta:enum", typ: u(undefined, a(r("TypeMetaEnum"))) },
    ], false),
    "TypeMetaEnum": o([
        { json: "equal", js: "equal", typ: u(undefined, "") },
        { json: "begin_with", js: "begin_with", typ: u(undefined, "") },
        { json: "average", js: "average", typ: u(undefined, "") },
    ], false),
    "AdditionalBusinessTaxonomyProduct": o([
        { json: "title", js: "title", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("AdditionalBusinessTaxonomyProductProperties") },
        { json: "required", js: "required", typ: a("") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "AdditionalBusinessTaxonomyProductProperties": o([
        { json: "id", js: "id", typ: r("PuneHedgehog") },
        { json: "extraID", js: "extraID", typ: r("PuneHedgehog") },
        { json: "required", js: "required", typ: r("PuneHedgehog") },
    ], false),
    "AdditionalDuration": o([
        { json: "title", js: "title", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("AdditionalDurationProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "AdditionalDurationProperties": o([
        { json: "level", js: "level", typ: r("TartuGecko") },
        { json: "duration", js: "duration", typ: r("Birthday") },
    ], false),
    "Birthday": o([
        { json: "type", js: "type", typ: a(r("TypeElement")) },
    ], false),
    "TartuGecko": o([
        { json: "type", js: "type", typ: r("TypeElement") },
    ], false),
    "BackofficeConfiguration": o([
        { json: "title", js: "title", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("BackofficeConfigurationProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "BackofficeConfigurationProperties": o([
        { json: "revisionVersion", js: "revisionVersion", typ: r("TartuGecko") },
        { json: "scheduleDefaultWorkersLimit", js: "scheduleDefaultWorkersLimit", typ: r("LivingstoneSouthernWhiteFacedOwl") },
        { json: "resourceTimetableType", js: "resourceTimetableType", typ: r("Repeats") },
        { json: "enableMasterImportance", js: "enableMasterImportance", typ: r("HammerfestPonies") },
        { json: "showTestRecord", js: "showTestRecord", typ: r("HammerfestPonies") },
        { json: "skipServiceFiltering", js: "skipServiceFiltering", typ: r("HammerfestPonies") },
        { json: "skipAppointmentPriceUpdate", js: "skipAppointmentPriceUpdate", typ: r("HammerfestPonies") },
        { json: "showManualChanges", js: "showManualChanges", typ: r("HammerfestPonies") },
        { json: "enableExtendedRecordsClientStatistics", js: "enableExtendedRecordsClientStatistics", typ: r("HammerfestPonies") },
        { json: "pastTimeEdit", js: "pastTimeEdit", typ: r("LivingstoneSouthernWhiteFacedOwl") },
        { json: "cabinetsEnabled", js: "cabinetsEnabled", typ: r("HammerfestPonies") },
        { json: "appointmentFutureMoving", js: "appointmentFutureMoving", typ: r("HammerfestPonies") },
        { json: "showClientContractNumber", js: "showClientContractNumber", typ: r("HammerfestPonies") },
        { json: "showGapWindow", js: "showGapWindow", typ: r("HammerfestPonies") },
        { json: "showFirstAvailableSlot", js: "showFirstAvailableSlot", typ: r("HammerfestPonies") },
        { json: "noInternetAlert", js: "noInternetAlert", typ: r("HammerfestPonies") },
        { json: "showWorkerDescriptionInEvent", js: "showWorkerDescriptionInEvent", typ: r("HammerfestPonies") },
        { json: "schduleWeekViewIsDefault", js: "schduleWeekViewIsDefault", typ: r("HammerfestPonies") },
        { json: "showPassportId", js: "showPassportId", typ: r("HammerfestPonies") },
        { json: "showFax", js: "showFax", typ: r("HammerfestPonies") },
        { json: "showBirthDate", js: "showBirthDate", typ: r("HammerfestPonies") },
        { json: "showEmail", js: "showEmail", typ: r("HammerfestPonies") },
        { json: "showAddress", js: "showAddress", typ: r("HammerfestPonies") },
        { json: "showIsraelCity", js: "showIsraelCity", typ: r("HammerfestPonies") },
        { json: "showHouseNumber", js: "showHouseNumber", typ: r("HammerfestPonies") },
        { json: "showKupatHolim", js: "showKupatHolim", typ: r("HammerfestPonies") },
        { json: "showDepartmentFilter", js: "showDepartmentFilter", typ: r("HammerfestPonies") },
        { json: "showDepartments", js: "showDepartments", typ: r("HammerfestPonies") },
        { json: "showDepartmentsConfiguration", js: "showDepartmentsConfiguration", typ: r("HammerfestPonies") },
        { json: "showRooms", js: "showRooms", typ: r("HammerfestPonies") },
        { json: "showClientAppearOnSchedule", js: "showClientAppearOnSchedule", typ: r("HammerfestPonies") },
        { json: "showClientAppear", js: "showClientAppear", typ: r("HammerfestPonies") },
        { json: "skipCancelIfClientNotAppear", js: "skipCancelIfClientNotAppear", typ: r("HammerfestPonies") },
        { json: "showClientPayment", js: "showClientPayment", typ: r("HammerfestPonies") },
        { json: "showExtraClientInfo", js: "showExtraClientInfo", typ: r("HammerfestPonies") },
        { json: "showUTM", js: "showUTM", typ: r("HammerfestPonies") },
        { json: "showWorkerStatus", js: "showWorkerStatus", typ: r("HammerfestPonies") },
        { json: "enableBlackList", js: "enableBlackList", typ: r("HammerfestPonies") },
        { json: "enableCalculateShedule", js: "enableCalculateShedule", typ: r("HammerfestPonies") },
        { json: "showSeasonTickets", js: "showSeasonTickets", typ: r("HammerfestPonies") },
        { json: "showLeadsScreen", js: "showLeadsScreen", typ: r("HammerfestPonies") },
        { json: "showGeneratableReportsScreen", js: "showGeneratableReportsScreen", typ: r("HammerfestPonies") },
        { json: "schedulerWeekViewType", js: "schedulerWeekViewType", typ: r("Repeats") },
        { json: "workWeekStart", js: "workWeekStart", typ: r("LivingstoneSouthernWhiteFacedOwl") },
        { json: "workWeekEnd", js: "workWeekEnd", typ: r("LivingstoneSouthernWhiteFacedOwl") },
        { json: "scheduleWorkerHours", js: "scheduleWorkerHours", typ: r("HammerfestPonies") },
        { json: "showTaxonomyLocalization", js: "showTaxonomyLocalization", typ: r("HammerfestPonies") },
        { json: "highlightedResource", js: "highlightedResource", typ: r("HammerfestPonies") },
        { json: "showAdditionalFields", js: "showAdditionalFields", typ: r("HammerfestPonies") },
        { json: "exportToExcelRemovedClients", js: "exportToExcelRemovedClients", typ: r("HammerfestPonies") },
        { json: "checkClientOverlapping", js: "checkClientOverlapping", typ: r("HammerfestPonies") },
        { json: "hideCustomerPortalFooter", js: "hideCustomerPortalFooter", typ: r("HammerfestPonies") },
        { json: "readonlyResourceSchedule", js: "readonlyResourceSchedule", typ: r("HammerfestPonies") },
        { json: "showClientImage", js: "showClientImage", typ: r("HammerfestPonies") },
        { json: "stateLevelHolidays", js: "stateLevelHolidays", typ: r("DefaultFilteredWorkers") },
        { json: "stateLevelHolidaysNotWorking", js: "stateLevelHolidaysNotWorking", typ: r("HammerfestPonies") },
        { json: "paymentProvider", js: "paymentProvider", typ: r("BackofficeType") },
        { json: "showDefaulterBlockscreen", js: "showDefaulterBlockscreen", typ: r("HammerfestPonies") },
        { json: "allowSmsTranslit", js: "allowSmsTranslit", typ: r("HammerfestPonies") },
        { json: "defaultGTScheduleDayView", js: "defaultGTScheduleDayView", typ: r("HammerfestPonies") },
        { json: "enableSourceChoice", js: "enableSourceChoice", typ: r("HammerfestPonies") },
        { json: "manualExceptionSupport", js: "manualExceptionSupport", typ: r("HammerfestPonies") },
        { json: "showWorkerExtraId", js: "showWorkerExtraId", typ: r("HammerfestPonies") },
        { json: "editAppExtraId", js: "editAppExtraId", typ: r("HammerfestPonies") },
        { json: "useGtAppMethod", js: "useGtAppMethod", typ: r("HammerfestPonies") },
        { json: "disableAppointmentClientInlineEditor", js: "disableAppointmentClientInlineEditor", typ: r("HammerfestPonies") },
        { json: "enableClientCard", js: "enableClientCard", typ: r("HammerfestPonies") },
        { json: "enableClientMedicalCardReport", js: "enableClientMedicalCardReport", typ: r("HammerfestPonies") },
        { json: "enableCustomOnlinePaymentConfirmation", js: "enableCustomOnlinePaymentConfirmation", typ: r("HammerfestPonies") },
        { json: "customOnlinePaymentConfirmationTemplate", js: "customOnlinePaymentConfirmationTemplate", typ: r("HammerfestPonies") },
        { json: "showFiredWorkerAppointmentAlert", js: "showFiredWorkerAppointmentAlert", typ: r("HammerfestPonies") },
        { json: "showDeliveryStatus", js: "showDeliveryStatus", typ: r("HammerfestPonies") },
        { json: "showTaxonomyChildren", js: "showTaxonomyChildren", typ: r("HammerfestPonies") },
        { json: "editTaxonomyChildren", js: "editTaxonomyChildren", typ: r("HammerfestPonies") },
        { json: "showTaxonomyVisitType", js: "showTaxonomyVisitType", typ: r("HammerfestPonies") },
        { json: "editTaxonomyVisitType", js: "editTaxonomyVisitType", typ: r("HammerfestPonies") },
        { json: "finId", js: "finId", typ: r("TartuGecko") },
        { json: "finName", js: "finName", typ: r("TartuGecko") },
        { json: "enableServiceTimeLimit", js: "enableServiceTimeLimit", typ: r("HammerfestPonies") },
        { json: "showGender", js: "showGender", typ: r("HammerfestPonies") },
        { json: "showGenderInRecords", js: "showGenderInRecords", typ: r("HammerfestPonies") },
        { json: "showWidgetColorTheme", js: "showWidgetColorTheme", typ: r("HammerfestPonies") },
        { json: "enableExtendedPhone", js: "enableExtendedPhone", typ: r("HammerfestPonies") },
        { json: "enableTaxonomyChildrenAgeCheck", js: "enableTaxonomyChildrenAgeCheck", typ: r("HammerfestPonies") },
        { json: "taxonomyChildrenMaxAge", js: "taxonomyChildrenMaxAge", typ: r("TartuGecko") },
        { json: "useAdjacentTaxonomies", js: "useAdjacentTaxonomies", typ: r("HammerfestPonies") },
        { json: "useAdditionalDurations", js: "useAdditionalDurations", typ: r("HammerfestPonies") },
        { json: "splitFullNameXlsExport", js: "splitFullNameXlsExport", typ: r("HammerfestPonies") },
        { json: "useAdjacentTaxonomiesSlotSplitting", js: "useAdjacentTaxonomiesSlotSplitting", typ: r("HammerfestPonies") },
        { json: "adjacentTaxonomiesTreshold", js: "adjacentTaxonomiesTreshold", typ: r("LivingstoneSouthernWhiteFacedOwl") },
        { json: "allowHideWorkersFromSchdeule", js: "allowHideWorkersFromSchdeule", typ: r("HammerfestPonies") },
        { json: "allowHideServiceForBooking", js: "allowHideServiceForBooking", typ: r("HammerfestPonies") },
        { json: "blockNotificationForAnyAvailableAdjacentService", js: "blockNotificationForAnyAvailableAdjacentService", typ: r("HammerfestPonies") },
        { json: "feedbackCustomerPortalMessage", js: "feedbackCustomerPortalMessage", typ: r("TartuGecko") },
        { json: "feedbackCustomerPortalTitle", js: "feedbackCustomerPortalTitle", typ: r("TartuGecko") },
        { json: "feedbackCustomerPortalThankYouMessage", js: "feedbackCustomerPortalThankYouMessage", typ: r("TartuGecko") },
        { json: "feedBackMinRating", js: "feedBackMinRating", typ: r("FeedBackMinRating") },
        { json: "enableClientLanguage", js: "enableClientLanguage", typ: r("HammerfestPonies") },
        { json: "showClientBirthdayFilter", js: "showClientBirthdayFilter", typ: r("HammerfestPonies") },
    ], false),
    "LivingstoneSouthernWhiteFacedOwl": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "default", js: "default", typ: 0 },
    ], false),
    "HammerfestPonies": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "default", js: "default", typ: true },
    ], false),
    "FeedBackMinRating": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "enum", js: "enum", typ: a("") },
        { json: "default", js: "default", typ: 0 },
    ], false),
    "BackofficeType": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "enum", js: "enum", typ: u(undefined, a("")) },
    ], false),
    "Repeats": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "enum", js: "enum", typ: a("") },
        { json: "default", js: "default", typ: "" },
        { json: "meta:enum", js: "meta:enum", typ: u(undefined, a(r("PurpleMetaEnum"))) },
    ], false),
    "PurpleMetaEnum": o([
        { json: "PLAN_CLINIC", js: "PLAN_CLINIC", typ: u(undefined, "") },
        { json: "PLAN_CLINIC_ONLINE", js: "PLAN_CLINIC_ONLINE", typ: u(undefined, "") },
        { json: "ONCALL_ONLINE", js: "ONCALL_ONLINE", typ: u(undefined, "") },
        { json: "PLAN_ONLINE", js: "PLAN_ONLINE", typ: u(undefined, "") },
    ], false),
    "DefaultFilteredWorkers": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "items", js: "items", typ: r("TartuGecko") },
    ], false),
    "BusinessTaxonomy": o([
        { json: "title", js: "title", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("BusinessTaxonomyProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "BusinessTaxonomyProperties": o([
        { json: "id", js: "id", typ: r("TartuGecko") },
        { json: "taxonomyParentID", js: "taxonomyParentID", typ: r("TartuGecko") },
        { json: "taxonomyCategoryExtraID", js: "taxonomyCategoryExtraID", typ: r("TartuGecko") },
        { json: "taxonomyAppExtraID", js: "taxonomyAppExtraID", typ: r("TartuGecko") },
        { json: "extraId", js: "extraId", typ: r("TartuGecko") },
        { json: "siteId", js: "siteId", typ: r("PuneHedgehog") },
        { json: "alias", js: "alias", typ: r("TartuGecko") },
        { json: "showcases", js: "showcases", typ: r("Cabinets") },
        { json: "rooms", js: "rooms", typ: r("DefaultFilteredWorkers") },
        { json: "cabinetsEnabled", js: "cabinetsEnabled", typ: r("HammerfestPonies") },
        { json: "cabinets", js: "cabinets", typ: r("DefaultFilteredWorkers") },
        { json: "specialCabinet", js: "specialCabinet", typ: r("TartuGecko") },
        { json: "lastModified", js: "lastModified", typ: r("CreatedOn") },
        { json: "price", js: "price", typ: r("BackofficeConfigurationClass") },
        { json: "additionalPrices", js: "additionalPrices", typ: r("Cabinets") },
        { json: "additionalProducts", js: "additionalProducts", typ: r("Cabinets") },
        { json: "capacity", js: "capacity", typ: r("TartuGecko") },
        { json: "capacity_decrease", js: "capacity_decrease", typ: r("LivingstoneSouthernWhiteFacedOwl") },
        { json: "duration", js: "duration", typ: r("TartuGecko") },
        { json: "popularity", js: "popularity", typ: r("TartuGecko") },
        { json: "active", js: "active", typ: r("TartuGecko") },
        { json: "extraDescription", js: "extraDescription", typ: r("TartuGecko") },
        { json: "confirmationAlert", js: "confirmationAlert", typ: r("TartuGecko") },
        { json: "extraLink", js: "extraLink", typ: r("TartuGecko") },
        { json: "priceLink", js: "priceLink", typ: r("TartuGecko") },
        { json: "color", js: "color", typ: r("TartuGecko") },
        { json: "order", js: "order", typ: r("TartuGecko") },
        { json: "images", js: "images", typ: r("DefaultFilteredWorkers") },
        { json: "manualChanges", js: "manualChanges", typ: r("TartuGecko") },
        { json: "discounts", js: "discounts", typ: r("GeneralInfo") },
        { json: "additionalDurations", js: "additionalDurations", typ: r("Cabinets") },
        { json: "additionalTaxonomyExtraId", js: "additionalTaxonomyExtraId", typ: r("AdditionalTaxonomyExtraId") },
        { json: "parallelTaxonomies", js: "parallelTaxonomies", typ: r("DefaultFilteredWorkers") },
        { json: "onlyAfterTaxonomies", js: "onlyAfterTaxonomies", typ: r("DefaultFilteredWorkers") },
        { json: "displayInWidget", js: "displayInWidget", typ: r("TartuGecko") },
        { json: "allowNextBookingInDays", js: "allowNextBookingInDays", typ: r("LivingstoneSouthernWhiteFacedOwl") },
        { json: "allowNextBookingInDaysText", js: "allowNextBookingInDaysText", typ: r("TartuGecko") },
        { json: "taxonomyType", js: "taxonomyType", typ: r("GeneralInfo") },
        { json: "designs", js: "designs", typ: r("DefaultFilteredWorkers") },
        { json: "isOther", js: "isOther", typ: r("TartuGecko") },
        { json: "chargeUnitsStep", js: "chargeUnitsStep", typ: r("TartuGecko") },
        { json: "forPay", js: "forPay", typ: r("HammerfestPonies") },
        { json: "childrenTaxonomyTypes", js: "childrenTaxonomyTypes", typ: r("ChildrenTaxonomyTypes") },
        { json: "visitType", js: "visitType", typ: r("TartuGecko") },
        { json: "timetable", js: "timetable", typ: r("GeneralInfo") },
        { json: "exceptions", js: "exceptions", typ: r("TartuGecko") },
        { json: "leaves", js: "leaves", typ: r("DefaultFilteredWorkers") },
        { json: "showcaseTaxonomyID", js: "showcaseTaxonomyID", typ: r("PuneHedgehog") },
        { json: "newTaxonomy", js: "newTaxonomy", typ: r("HammerfestPonies") },
        { json: "adjacentTaxonomies", js: "adjacentTaxonomies", typ: r("AdjacentTaxonomies") },
        { json: "adjacentSameTimeStart", js: "adjacentSameTimeStart", typ: r("TartuGecko") },
        { json: "dateLimitType", js: "dateLimitType", typ: r("Repeats") },
        { json: "dateLimits", js: "dateLimits", typ: r("DateLimits") },
        { json: "allowNextBookingCount", js: "allowNextBookingCount", typ: r("LivingstoneSouthernWhiteFacedOwl") },
        { json: "allowBookingInBO", js: "allowBookingInBO", typ: r("HammerfestPonies") },
        { json: "confirmationSmsAlert", js: "confirmationSmsAlert", typ: r("TartuGecko") },
        { json: "useConfirmationSmsAlert", js: "useConfirmationSmsAlert", typ: r("TartuGecko") },
        { json: "onlineMode", js: "onlineMode", typ: r("Repeats") },
        { json: "showcaseItems", js: "showcaseItems", typ: r("ShowcaseItems") },
    ], false),
    "Cabinets": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "items", js: "items", typ: r("GeneralInfo") },
    ], false),
    "GeneralInfo": o([
        { json: "$ref", js: "$ref", typ: "" },
    ], false),
    "AdditionalTaxonomyExtraId": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "items", js: "items", typ: r("AdditionalTaxonomyExtraIdItems") },
    ], false),
    "AdditionalTaxonomyExtraIdItems": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properies", js: "properies", typ: r("Properies") },
    ], false),
    "Properies": o([
        { json: "taxonomyExtraID", js: "taxonomyExtraID", typ: r("TartuGecko") },
        { json: "extraId", js: "extraId", typ: r("TartuGecko") },
    ], false),
    "AdjacentTaxonomies": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "items", js: "items", typ: r("AdjacentTaxonomiesItems") },
    ], false),
    "AdjacentTaxonomiesItems": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("PurpleProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "PurpleProperties": o([
        { json: "slotDuration", js: "slotDuration", typ: r("LivingstoneSouthernWhiteFacedOwl") },
        { json: "isAnyAvailable", js: "isAnyAvailable", typ: r("HammerfestPonies") },
        { json: "taxonomyID", js: "taxonomyID", typ: r("TartuGecko") },
        { json: "order", js: "order", typ: r("TartuGecko") },
    ], false),
    "ChildrenTaxonomyTypes": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "items", js: "items", typ: r("BackofficeType") },
    ], false),
    "DateLimits": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "items", js: "items", typ: r("DateLimitsItems") },
    ], false),
    "DateLimitsItems": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("FluffyProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "FluffyProperties": o([
        { json: "dateLimitFrom", js: "dateLimitFrom", typ: r("CreatedOn") },
        { json: "dateLimitTo", js: "dateLimitTo", typ: r("CreatedOn") },
    ], false),
    "CreatedOn": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "format", js: "format", typ: "" },
    ], false),
    "BackofficeConfigurationClass": o([
        { json: "type", js: "type", typ: u(undefined, r("TypeElement")) },
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
    ], false),
    "ShowcaseItems": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "items", js: "items", typ: r("ShowcaseItemsItems") },
    ], false),
    "ShowcaseItemsItems": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("TentacledProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "TentacledProperties": o([
        { json: "_id", js: "_id", typ: r("TartuGecko") },
        { json: "taxonomyID", js: "taxonomyID", typ: r("TartuGecko") },
        { json: "additionalDurations", js: "additionalDurations", typ: r("AdditionalDurations") },
        { json: "businessID", js: "businessID", typ: r("TartuGecko") },
    ], false),
    "AdditionalDurations": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "items", js: "items", typ: r("AdditionalDurationsItems") },
    ], false),
    "AdditionalDurationsItems": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("StickyProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "StickyProperties": o([
        { json: "_id", js: "_id", typ: r("TartuGecko") },
        { json: "level", js: "level", typ: r("PuneHedgehog") },
        { json: "duration", js: "duration", typ: r("LivingstoneSouthernWhiteFacedOwl") },
    ], false),
    "BusinessTaxonomyPrice": o([
        { json: "title", js: "title", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("BusinessTaxonomyPriceProperties") },
        { json: "required", js: "required", typ: a("") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "BusinessTaxonomyPriceProperties": o([
        { json: "currency", js: "currency", typ: r("Currency") },
        { json: "amount", js: "amount", typ: r("Amount") },
        { json: "stockAmount", js: "stockAmount", typ: r("StockAmount") },
        { json: "type", js: "type", typ: r("TypeClass") },
    ], false),
    "StockAmount": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: a(r("TypeElement")) },
        { json: "default", js: "default", typ: "" },
    ], false),
    "Cabinet": o([
        { json: "title", js: "title", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("CabinetProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "CabinetProperties": o([
        { json: "id", js: "id", typ: r("TartuGecko") },
        { json: "name", js: "name", typ: r("TartuGecko") },
        { json: "active", js: "active", typ: r("TartuGecko") },
    ], false),
    "Consumable": o([
        { json: "title", js: "title", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("ConsumableProperties") },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "ConsumableProperties": o([
        { json: "extraID", js: "extraID", typ: r("TartuGecko") },
        { json: "name", js: "name", typ: r("TartuGecko") },
        { json: "quantity", js: "quantity", typ: r("TartuGecko") },
    ], false),
    "Department": o([
        { json: "title", js: "title", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("DepartmentProperties") },
        { json: "required", js: "required", typ: a("") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "DepartmentProperties": o([
        { json: "id_", js: "id_", typ: r("TartuGecko") },
        { json: "id", js: "id", typ: r("TartuGecko") },
        { json: "name", js: "name", typ: r("TartuGecko") },
    ], false),
    "EvenOddTimetable": o([
        { json: "meta:extensible", js: "meta:extensible", typ: true },
        { json: "meta:extends", js: "meta:extends", typ: a("") },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("EvenOddTimetableProperties") },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "EvenOddTimetableProperties": o([
        { json: "startPeriod", js: "startPeriod", typ: r("TypeClass") },
        { json: "even", js: "even", typ: r("TaxonomyChildren") },
        { json: "odd", js: "odd", typ: r("TaxonomyChildren") },
    ], false),
    "TaxonomyChildren": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "items", js: "items", typ: r("GeneralInfo") },
    ], false),
    "MetroStation": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("MetroStationProperties") },
        { json: "required", js: "required", typ: a("") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "MetroStationProperties": o([
        { json: "_id", js: "_id", typ: r("TartuGecko") },
        { json: "name", js: "name", typ: r("TartuGecko") },
        { json: "description", js: "description", typ: r("TartuGecko") },
    ], false),
    "ResourceLocation": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("ResourceLocationProperties") },
        { json: "required", js: "required", typ: a("any") },
    ], false),
    "ResourceLocationProperties": o([
        { json: "longitude", js: "longitude", typ: r("TartuGecko") },
        { json: "latitude", js: "latitude", typ: r("TartuGecko") },
        { json: "time", js: "time", typ: r("PuneHedgehog") },
    ], false),
    "ResourceProfile": o([
        { json: "title", js: "title", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("ResourceProfileProperties") },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "ResourceProfileProperties": o([
        { json: "email", js: "email", typ: r("PuneHedgehog") },
        { json: "profileID", js: "profileID", typ: r("PuneHedgehog") },
        { json: "userID", js: "userID", typ: r("PuneHedgehog") },
        { json: "accessType", js: "accessType", typ: r("TypeClass") },
    ], false),
    "ResourceTaxonomyChildren": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("ResourceTaxonomyChildrenProperties") },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "ResourceTaxonomyChildrenProperties": o([
        { json: "taxonomyID", js: "taxonomyID", typ: r("PuneHedgehog") },
        { json: "children", js: "children", typ: r("PuneHedgehog") },
    ], false),
    "ResourceTaxonomyLevel": o([
        { json: "$id", js: "$id", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("ResourceTaxonomyLevelProperties") },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "ResourceTaxonomyLevelProperties": o([
        { json: "level", js: "level", typ: r("PuneHedgehog") },
        { json: "id", js: "id", typ: r("PuneHedgehog") },
    ], false),
    "TaxonomyShowcase": o([
        { json: "title", js: "title", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("TaxonomyShowcaseProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "TaxonomyShowcaseProperties": o([
        { json: "baseBusinessID", js: "baseBusinessID", typ: r("TartuGecko") },
        { json: "originBusinessID", js: "originBusinessID", typ: r("TartuGecko") },
        { json: "showcaseItemID", js: "showcaseItemID", typ: r("TartuGecko") },
        { json: "isBaseNode", js: "isBaseNode", typ: r("TartuGecko") },
    ], false),
    "WidgetConfiguration": o([
        { json: "title", js: "title", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("WidgetConfigurationProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "WidgetConfigurationProperties": o([
        { json: "revisionVersion", js: "revisionVersion", typ: r("TartuGecko") },
        { json: "crunchv2", js: "crunchv2", typ: r("HammerfestPonies") },
        { json: "useCRAC", js: "useCRAC", typ: r("HammerfestPonies") },
        { json: "cracSlotSize", js: "cracSlotSize", typ: r("CracSlotSize") },
        { json: "widgetUseCRAC", js: "widgetUseCRAC", typ: r("HammerfestPonies") },
        { json: "skipDaysForward", js: "skipDaysForward", typ: r("HammerfestPonies") },
        { json: "daysForward", js: "daysForward", typ: r("LivingstoneSouthernWhiteFacedOwl") },
        { json: "cracServer", js: "cracServer", typ: r("BackofficeType") },
        { json: "useMedAuth", js: "useMedAuth", typ: r("HammerfestPonies") },
        { json: "useSortByName", js: "useSortByName", typ: r("HammerfestPonies") },
        { json: "useMiddleName", js: "useMiddleName", typ: r("HammerfestPonies") },
        { json: "showSurnameFirst", js: "showSurnameFirst", typ: r("HammerfestPonies") },
        { json: "hidePrices", js: "hidePrices", typ: r("HammerfestPonies") },
        { json: "hideEmptyDays", js: "hideEmptyDays", typ: r("HammerfestPonies") },
        { json: "showMap", js: "showMap", typ: r("HammerfestPonies") },
        { json: "tentativeTTL", js: "tentativeTTL", typ: r("TartuGecko") },
        { json: "showDrinkQuestion", js: "showDrinkQuestion", typ: r("HammerfestPonies") },
        { json: "showTalkQuestion", js: "showTalkQuestion", typ: r("HammerfestPonies") },
        { json: "showClientAddress", js: "showClientAddress", typ: r("HammerfestPonies") },
        { json: "skipMobileMap", js: "skipMobileMap", typ: r("HammerfestPonies") },
        { json: "skipAuthentication", js: "skipAuthentication", typ: r("HammerfestPonies") },
        { json: "skipServiceSelection", js: "skipServiceSelection", typ: r("HammerfestPonies") },
        { json: "showTaxonomyConfirmationAlert", js: "showTaxonomyConfirmationAlert", typ: r("HammerfestPonies") },
        { json: "showClientComment", js: "showClientComment", typ: r("HammerfestPonies") },
        { json: "clientCommentTitle", js: "clientCommentTitle", typ: r("HammerfestPonies") },
        { json: "calendarMode", js: "calendarMode", typ: r("HammerfestPonies") },
        { json: "calendarModeHideTime", js: "calendarModeHideTime", typ: r("HammerfestPonies") },
        { json: "useCoupon", js: "useCoupon", typ: r("HammerfestPonies") },
        { json: "dontRequireEmail", js: "dontRequireEmail", typ: r("HammerfestPonies") },
        { json: "emailIsMandatory", js: "emailIsMandatory", typ: r("HammerfestPonies") },
        { json: "displaySlotSize", js: "displaySlotSize", typ: r("TartuGecko") },
        { json: "additionalName", js: "additionalName", typ: r("TartuGecko") },
        { json: "shortLink", js: "shortLink", typ: r("TartuGecko") },
        { json: "appointment_confirmation_title", js: "appointment_confirmation_title", typ: r("TartuGecko") },
        { json: "appointment_confirmation_text", js: "appointment_confirmation_text", typ: r("TartuGecko") },
        { json: "theme", js: "theme", typ: r("DefaultWorkerImgUrl") },
        { json: "socialSharing", js: "socialSharing", typ: r("SocialSharing") },
        { json: "noDefaultImages", js: "noDefaultImages", typ: r("HammerfestPonies") },
        { json: "withoutWorkers", js: "withoutWorkers", typ: r("HammerfestPonies") },
        { json: "bookableMonthsCount", js: "bookableMonthsCount", typ: r("LivingstoneSouthernWhiteFacedOwl") },
        { json: "dayUnavailableLabel", js: "dayUnavailableLabel", typ: r("TartuGecko") },
        { json: "dayOffLabel", js: "dayOffLabel", typ: r("TartuGecko") },
        { json: "useBusinessScheduleForUnavailableLabel", js: "useBusinessScheduleForUnavailableLabel", typ: r("HammerfestPonies") },
        { json: "hideAnyWorkerBooking", js: "hideAnyWorkerBooking", typ: r("HammerfestPonies") },
        { json: "disableMobileWidget", js: "disableMobileWidget", typ: r("HammerfestPonies") },
        { json: "socialNetworkImage", js: "socialNetworkImage", typ: r("HammerfestPonies") },
        { json: "payment", js: "payment", typ: r("Repeats") },
        { json: "paymentProvider", js: "paymentProvider", typ: r("Repeats") },
        { json: "alignmentTaxonomySlots", js: "alignmentTaxonomySlots", typ: r("HammerfestPonies") },
        { json: "bookableDateRanges", js: "bookableDateRanges", typ: r("BookableDateRanges") },
        { json: "discountedPriceRounding", js: "discountedPriceRounding", typ: r("DiscountedPriceRounding") },
        { json: "multiServiceBooking", js: "multiServiceBooking", typ: r("HammerfestPonies") },
        { json: "maxServiceBooking", js: "maxServiceBooking", typ: r("LivingstoneSouthernWhiteFacedOwl") },
        { json: "multiTimeslotBooking", js: "multiTimeslotBooking", typ: r("HammerfestPonies") },
        { json: "maxTimeslotBooking", js: "maxTimeslotBooking", typ: r("LivingstoneSouthernWhiteFacedOwl") },
        { json: "multiTimeslotBookingAllDays", js: "multiTimeslotBookingAllDays", typ: r("HammerfestPonies") },
        { json: "showAllWorkers", js: "showAllWorkers", typ: r("HammerfestPonies") },
        { json: "sortByMostFree", js: "sortByMostFree", typ: r("HammerfestPonies") },
        { json: "skipTimeSelection", js: "skipTimeSelection", typ: r("HammerfestPonies") },
        { json: "skipTimeSelectionServiceIDs", js: "skipTimeSelectionServiceIDs", typ: r("DefaultFilteredWorkers") },
        { json: "skipWorkerServicesSelection", js: "skipWorkerServicesSelection", typ: r("HammerfestPonies") },
        { json: "skipWorkerSelectedServiceIDs", js: "skipWorkerSelectedServiceIDs", typ: r("DefaultFilteredWorkers") },
        { json: "requireAgreement", js: "requireAgreement", typ: r("HammerfestPonies") },
        { json: "requireAgreementLink", js: "requireAgreementLink", typ: r("DefaultWorkerImgUrl") },
        { json: "hideGraySlots", js: "hideGraySlots", typ: r("HammerfestPonies") },
        { json: "extraVisitors", js: "extraVisitors", typ: r("HammerfestPonies") },
        { json: "overrideFooter", js: "overrideFooter", typ: r("DefaultWorkerImgUrl") },
        { json: "enableOverrideFooter", js: "enableOverrideFooter", typ: r("HammerfestPonies") },
        { json: "hideGBookingLogo", js: "hideGBookingLogo", typ: r("HammerfestPonies") },
        { json: "hideCallButton", js: "hideCallButton", typ: r("HammerfestPonies") },
        { json: "hideNewAppointmentButton", js: "hideNewAppointmentButton", typ: r("HammerfestPonies") },
        { json: "hideSocialNetworksAuthentication", js: "hideSocialNetworksAuthentication", typ: r("HammerfestPonies") },
        { json: "skipServiceDurationAlignment", js: "skipServiceDurationAlignment", typ: r("HammerfestPonies") },
        { json: "warningContactDataText", js: "warningContactDataText", typ: r("DefaultWorkerImgUrl") },
        { json: "enableWarningContactData", js: "enableWarningContactData", typ: r("HammerfestPonies") },
        { json: "splitName", js: "splitName", typ: r("HammerfestPonies") },
        { json: "useDefaultWorkerImg", js: "useDefaultWorkerImg", typ: r("HammerfestPonies") },
        { json: "defaultWorkerImgUrl", js: "defaultWorkerImgUrl", typ: r("DefaultWorkerImgUrl") },
        { json: "useClustersMap", js: "useClustersMap", typ: r("HammerfestPonies") },
        { json: "useAppointmentReminder", js: "useAppointmentReminder", typ: r("HammerfestPonies") },
        { json: "disableWidget", js: "disableWidget", typ: r("HammerfestPonies") },
        { json: "disableWidgetMessage", js: "disableWidgetMessage", typ: r("TartuGecko") },
        { json: "denySameTimeRecords", js: "denySameTimeRecords", typ: r("HammerfestPonies") },
        { json: "sortWorkersByWorkload", js: "sortWorkersByWorkload", typ: r("HammerfestPonies") },
        { json: "mostFreeEnable", js: "mostFreeEnable", typ: r("HammerfestPonies") },
        { json: "askClientBirthday", js: "askClientBirthday", typ: r("HammerfestPonies") },
        { json: "askClientGender", js: "askClientGender", typ: r("HammerfestPonies") },
        { json: "splitInsuranceClient", js: "splitInsuranceClient", typ: r("HammerfestPonies") },
        { json: "insuranceClientSupportPhone", js: "insuranceClientSupportPhone", typ: r("Cabinets") },
        { json: "showDisabledTaxonomies", js: "showDisabledTaxonomies", typ: r("HammerfestPonies") },
        { json: "disabledTaxonomiesText", js: "disabledTaxonomiesText", typ: r("TartuGecko") },
        { json: "workerNameReverse", js: "workerNameReverse", typ: r("HammerfestPonies") },
        { json: "useDefaultServiceImg", js: "useDefaultServiceImg", typ: r("HammerfestPonies") },
        { json: "clientBlockingSettings", js: "clientBlockingSettings", typ: r("ClientBlockingSettings") },
        { json: "defaultServiceImgUrl", js: "defaultServiceImgUrl", typ: r("TartuGecko") },
        { json: "allowBookVisitor", js: "allowBookVisitor", typ: r("HammerfestPonies") },
        { json: "useNewReserveAPI", js: "useNewReserveAPI", typ: r("HammerfestPonies") },
        { json: "allowAutoSelect", js: "allowAutoSelect", typ: r("HammerfestPonies") },
        { json: "useDirectScheduleRead", js: "useDirectScheduleRead", typ: r("Repeats") },
        { json: "allowSkipTimeCheck", js: "allowSkipTimeCheck", typ: r("HammerfestPonies") },
        { json: "useInsuranceSelect", js: "useInsuranceSelect", typ: r("HammerfestPonies") },
        { json: "filterNonInsuranceSchedule", js: "filterNonInsuranceSchedule", typ: r("HammerfestPonies") },
        { json: "useInsuranceGuaranteeLetter", js: "useInsuranceGuaranteeLetter", typ: r("HammerfestPonies") },
        { json: "useResourcePageLoading", js: "useResourcePageLoading", typ: r("HammerfestPonies") },
        { json: "newWidgetTheme", js: "newWidgetTheme", typ: r("NewWidgetTheme") },
        { json: "worker_unavailability_text", js: "worker_unavailability_text", typ: r("TartuGecko") },
    ], false),
    "BookableDateRanges": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("BookableDateRangesProperties") },
    ], false),
    "BookableDateRangesProperties": o([
        { json: "enabled", js: "enabled", typ: r("HammerfestPonies") },
        { json: "start", js: "start", typ: r("End") },
        { json: "end", js: "end", typ: r("End") },
    ], false),
    "End": o([
        { json: "oneOf", js: "oneOf", typ: a(r("EndOneOf")) },
    ], false),
    "EndOneOf": o([
        { json: "type", js: "type", typ: u(undefined, r("TypeElement")) },
        { json: "format", js: "format", typ: u(undefined, "") },
        { json: "const", js: "const", typ: u(undefined, null) },
    ], false),
    "ClientBlockingSettings": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("ClientBlockingSettingsProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "ClientBlockingSettingsProperties": o([
        { json: "blockIfFutureRecordExists", js: "blockIfFutureRecordExists", typ: r("HammerfestPonies") },
        { json: "blockRepeatedRecordsRange", js: "blockRepeatedRecordsRange", typ: r("LivingstoneSouthernWhiteFacedOwl") },
        { json: "blockRepeatedRecordsCount", js: "blockRepeatedRecordsCount", typ: r("LivingstoneSouthernWhiteFacedOwl") },
        { json: "blockRepeatedRecordsText", js: "blockRepeatedRecordsText", typ: r("TartuGecko") },
        { json: "appointmentClientBlock", js: "appointmentClientBlock", typ: r("HammerfestPonies") },
        { json: "appointmentClientBlockDays", js: "appointmentClientBlockDays", typ: r("LivingstoneSouthernWhiteFacedOwl") },
        { json: "appointmentClientBlockText", js: "appointmentClientBlockText", typ: r("TartuGecko") },
    ], false),
    "CracSlotSize": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "enum", js: "enum", typ: a(0) },
        { json: "default", js: "default", typ: 0 },
    ], false),
    "DefaultWorkerImgUrl": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "default", js: "default", typ: "" },
    ], false),
    "DiscountedPriceRounding": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("DiscountedPriceRoundingProperties") },
    ], false),
    "DiscountedPriceRoundingProperties": o([
        { json: "rule", js: "rule", typ: r("BackofficeType") },
        { json: "value", js: "value", typ: r("LivingstoneSouthernWhiteFacedOwl") },
    ], false),
    "NewWidgetTheme": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "SocialSharing": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("SocialSharingProperties") },
    ], false),
    "SocialSharingProperties": o([
        { json: "active", js: "active", typ: r("HammerfestPonies") },
        { json: "widgetText", js: "widgetText", typ: r("Birthday") },
        { json: "text", js: "text", typ: r("Birthday") },
        { json: "discountEnabled", js: "discountEnabled", typ: r("TartuGecko") },
        { json: "discountType", js: "discountType", typ: r("BackofficeType") },
        { json: "discountAmount", js: "discountAmount", typ: r("Birthday") },
    ], false),
    "ModelsProperties": o([
        { json: "name", js: "name", typ: u(undefined, r("PuneHedgehog")) },
        { json: "shortName", js: "shortName", typ: u(undefined, r("TartuGecko")) },
        { json: "value", js: "value", typ: u(undefined, r("TartuGecko")) },
        { json: "type", js: "type", typ: u(undefined, r("Repeats")) },
        { json: "requiredField", js: "requiredField", typ: u(undefined, r("TartuGecko")) },
        { json: "country", js: "country", typ: u(undefined, r("BackofficeType")) },
        { json: "zip_code", js: "zip_code", typ: u(undefined, r("TartuGecko")) },
        { json: "locality", js: "locality", typ: u(undefined, r("TartuGecko")) },
        { json: "locality_type", js: "locality_type", typ: u(undefined, r("TartuGecko")) },
        { json: "street", js: "street", typ: u(undefined, r("TartuGecko")) },
        { json: "street_type", js: "street_type", typ: u(undefined, r("TartuGecko")) },
        { json: "number", js: "number", typ: u(undefined, r("TartuGecko")) },
        { json: "admin_area", js: "admin_area", typ: u(undefined, r("TartuGecko")) },
        { json: "admin_area_type", js: "admin_area_type", typ: u(undefined, r("TartuGecko")) },
        { json: "sub_admin_area", js: "sub_admin_area", typ: u(undefined, r("TartuGecko")) },
        { json: "sub_admin_area_type", js: "sub_admin_area_type", typ: u(undefined, r("TartuGecko")) },
        { json: "sub_locality", js: "sub_locality", typ: u(undefined, r("TartuGecko")) },
        { json: "sub_locality_type", js: "sub_locality_type", typ: u(undefined, r("TartuGecko")) },
        { json: "corps", js: "corps", typ: u(undefined, r("TartuGecko")) },
        { json: "building", js: "building", typ: u(undefined, r("TartuGecko")) },
        { json: "possesion", js: "possesion", typ: u(undefined, r("TartuGecko")) },
        { json: "kilometer", js: "kilometer", typ: u(undefined, r("TartuGecko")) },
        { json: "address", js: "address", typ: u(undefined, r("TartuGecko")) },
        { json: "house_add", js: "house_add", typ: u(undefined, r("TartuGecko")) },
        { json: "longitude", js: "longitude", typ: u(undefined, r("TartuGecko")) },
        { json: "latitude", js: "latitude", typ: u(undefined, r("TartuGecko")) },
        { json: "address_add", js: "address_add", typ: u(undefined, r("TartuGecko")) },
        { json: "office", js: "office", typ: u(undefined, r("TartuGecko")) },
        { json: "metroStations", js: "metroStations", typ: u(undefined, r("Cabinets")) },
        { json: "way", js: "way", typ: u(undefined, r("TartuGecko")) },
        { json: "group", js: "group", typ: u(undefined, r("BackofficeType")) },
        { json: "zipCode", js: "zipCode", typ: u(undefined, r("TartuGecko")) },
        { json: "localityType", js: "localityType", typ: u(undefined, r("TartuGecko")) },
        { json: "streetType", js: "streetType", typ: u(undefined, r("TartuGecko")) },
        { json: "adminArea", js: "adminArea", typ: u(undefined, r("TartuGecko")) },
        { json: "adminAreaType", js: "adminAreaType", typ: u(undefined, r("TartuGecko")) },
        { json: "subAdminArea", js: "subAdminArea", typ: u(undefined, r("TartuGecko")) },
        { json: "subAdminAreaType", js: "subAdminAreaType", typ: u(undefined, r("TartuGecko")) },
        { json: "subLocality", js: "subLocality", typ: u(undefined, r("TartuGecko")) },
        { json: "subLocalityType", js: "subLocalityType", typ: u(undefined, r("TartuGecko")) },
        { json: "houseAdd", js: "houseAdd", typ: u(undefined, r("TartuGecko")) },
        { json: "addressAdd", js: "addressAdd", typ: u(undefined, r("TartuGecko")) },
        { json: "id", js: "id", typ: u(undefined, r("PuneHedgehog")) },
        { json: "extraID", js: "extraID", typ: u(undefined, r("TartuGecko")) },
        { json: "created_on", js: "created_on", typ: u(undefined, r("CreatedOn")) },
        { json: "general_info", js: "general_info", typ: u(undefined, r("GeneralInfo")) },
        { json: "taxonomies", js: "taxonomies", typ: u(undefined, r("Taxonomies")) },
        { json: "resources", js: "resources", typ: u(undefined, r("Cabinets")) },
        { json: "designs", js: "designs", typ: u(undefined, r("DefaultFilteredWorkers")) },
        { json: "stateLevelHolidaysNotWorking", js: "stateLevelHolidaysNotWorking", typ: u(undefined, r("HammerfestPonies")) },
        { json: "notifications", js: "notifications", typ: u(undefined, r("TartuGecko")) },
        { json: "vertical", js: "vertical", typ: u(undefined, r("TartuGecko")) },
        { json: "flatTaxonomyDisplay", js: "flatTaxonomyDisplay", typ: u(undefined, r("TartuGecko")) },
        { json: "allowCategoryBooking", js: "allowCategoryBooking", typ: u(undefined, r("TartuGecko")) },
        { json: "cabinetsEnabled", js: "cabinetsEnabled", typ: u(undefined, r("TartuGecko")) },
        { json: "taxonomy_tree_capacity", js: "taxonomy_tree_capacity", typ: u(undefined, r("DefaultFilteredWorkers")) },
        { json: "consumables", js: "consumables", typ: u(undefined, r("Cabinets")) },
        { json: "departments", js: "departments", typ: u(undefined, r("Cabinets")) },
        { json: "cabinets", js: "cabinets", typ: u(undefined, r("Cabinets")) },
        { json: "defaultFilteredWorkers", js: "defaultFilteredWorkers", typ: u(undefined, r("DefaultFilteredWorkers")) },
        { json: "integration_data", js: "integration_data", typ: u(undefined, r("TartuGecko")) },
        { json: "yandexFeedType", js: "yandexFeedType", typ: u(undefined, r("TartuGecko")) },
        { json: "top_services", js: "top_services", typ: u(undefined, r("TopServices")) },
        { json: "mobileData", js: "mobileData", typ: u(undefined, r("TartuGecko")) },
        { json: "active", js: "active", typ: u(undefined, r("PuneHedgehog")) },
        { json: "backofficeType", js: "backofficeType", typ: u(undefined, r("BackofficeType")) },
        { json: "backofficeConfiguration", js: "backofficeConfiguration", typ: u(undefined, r("BackofficeConfigurationClass")) },
        { json: "additionalSettings", js: "additionalSettings", typ: u(undefined, r("AdditionalSettings")) },
        { json: "widget_configuration", js: "widget_configuration", typ: u(undefined, r("BackofficeConfigurationClass")) },
        { json: "mini_widget_configuration", js: "mini_widget_configuration", typ: u(undefined, r("MiniWidgetConfiguration")) },
        { json: "callback_widget_configuration", js: "callback_widget_configuration", typ: u(undefined, r("CallbackWidgetConfiguration")) },
        { json: "taxonomiesComplex", js: "taxonomiesComplex", typ: u(undefined, r("TaxonomiesComplex")) },
        { json: "backoffice_configuration", js: "backoffice_configuration", typ: u(undefined, r("PropertiesBackofficeConfiguration")) },
        { json: "surname", js: "surname", typ: u(undefined, r("PuneHedgehog")) },
        { json: "middle_name", js: "middle_name", typ: u(undefined, r("TartuGecko")) },
        { json: "birthday", js: "birthday", typ: u(undefined, r("Birthday")) },
        { json: "phone", js: "phone", typ: u(undefined, r("GeneralInfo")) },
        { json: "email", js: "email", typ: u(undefined, r("AdditionalExtraId")) },
        { json: "fromSms", js: "fromSms", typ: u(undefined, r("FromSms")) },
        { json: "sex", js: "sex", typ: u(undefined, r("BackofficeType")) },
        { json: "creatorProfileID", js: "creatorProfileID", typ: u(undefined, r("Birthday")) },
        { json: "creatorProfileName", js: "creatorProfileName", typ: u(undefined, r("Birthday")) },
        { json: "driverLicense", js: "driverLicense", typ: u(undefined, r("Birthday")) },
        { json: "taxiPark", js: "taxiPark", typ: u(undefined, r("Birthday")) },
        { json: "taxiParkMemberCount", js: "taxiParkMemberCount", typ: u(undefined, r("Birthday")) },
        { json: "start", js: "start", typ: u(undefined, r("CreatedOn")) },
        { json: "repeats", js: "repeats", typ: u(undefined, r("Repeats")) },
        { json: "weeklyRepeat", js: "weeklyRepeat", typ: u(undefined, r("LivingstoneSouthernWhiteFacedOwl")) },
        { json: "unlimWeeklyRepeat", js: "unlimWeeklyRepeat", typ: u(undefined, r("HammerfestPonies")) },
        { json: "daysOfWeek", js: "daysOfWeek", typ: u(undefined, r("BackofficeType")) },
        { json: "slots", js: "slots", typ: u(undefined, r("Slots")) },
        { json: "country_code", js: "country_code", typ: u(undefined, r("TartuGecko")) },
        { json: "area_code", js: "area_code", typ: u(undefined, r("TartuGecko")) },
        { json: "revisionVersion", js: "revisionVersion", typ: u(undefined, r("PuneHedgehog")) },
        { json: "rating", js: "rating", typ: u(undefined, r("PuneHedgehog")) },
        { json: "capacity", js: "capacity", typ: u(undefined, r("PuneHedgehog")) },
        { json: "icon_url", js: "icon_url", typ: u(undefined, r("IconUrl")) },
        { json: "originBusinessID", js: "originBusinessID", typ: u(undefined, r("PuneHedgehog")) },
        { json: "originTaxonomies", js: "originTaxonomies", typ: u(undefined, r("AdditionalExtraId")) },
        { json: "origin_general_info", js: "origin_general_info", typ: u(undefined, r("OriginGeneralInfo")) },
        { json: "nickname", js: "nickname", typ: u(undefined, r("PuneHedgehog")) },
        { json: "middleName", js: "middleName", typ: u(undefined, r("PuneHedgehog")) },
        { json: "loaned", js: "loaned", typ: u(undefined, r("PuneHedgehog")) },
        { json: "loanedTo", js: "loanedTo", typ: u(undefined, r("PuneHedgehog")) },
        { json: "loanedFrom", js: "loanedFrom", typ: u(undefined, r("PuneHedgehog")) },
        { json: "description", js: "description", typ: u(undefined, r("PuneHedgehog")) },
        { json: "profession", js: "profession", typ: u(undefined, r("PuneHedgehog")) },
        { json: "extraDescription", js: "extraDescription", typ: u(undefined, r("PuneHedgehog")) },
        { json: "extraLink", js: "extraLink", typ: u(undefined, r("PuneHedgehog")) },
        { json: "extraId", js: "extraId", typ: u(undefined, r("PuneHedgehog")) },
        { json: "siteId", js: "siteId", typ: u(undefined, r("PuneHedgehog")) },
        { json: "additionalExtraId", js: "additionalExtraId", typ: u(undefined, r("AdditionalExtraId")) },
        { json: "extraMediaId", js: "extraMediaId", typ: u(undefined, r("PuneHedgehog")) },
        { json: "departmentId", js: "departmentId", typ: u(undefined, r("PuneHedgehog")) },
        { json: "workPlace", js: "workPlace", typ: u(undefined, r("PuneHedgehog")) },
        { json: "order", js: "order", typ: u(undefined, r("PuneHedgehog")) },
        { json: "color", js: "color", typ: u(undefined, r("PuneHedgehog")) },
        { json: "profile", js: "profile", typ: u(undefined, r("GeneralInfo")) },
        { json: "taxonomyLevels", js: "taxonomyLevels", typ: u(undefined, r("TaxonomyChildren")) },
        { json: "taxonomyChildren", js: "taxonomyChildren", typ: u(undefined, r("TaxonomyChildren")) },
        { json: "level", js: "level", typ: u(undefined, r("PuneHedgehog")) },
        { json: "perk", js: "perk", typ: u(undefined, r("PuneHedgehog")) },
        { json: "smsEnabled", js: "smsEnabled", typ: u(undefined, r("PuneHedgehog")) },
        { json: "emailEnabled", js: "emailEnabled", typ: u(undefined, r("PuneHedgehog")) },
        { json: "displayInWidget", js: "displayInWidget", typ: u(undefined, r("PuneHedgehog")) },
        { json: "manualChanges", js: "manualChanges", typ: u(undefined, r("Exceptions")) },
        { json: "timetable", js: "timetable", typ: u(undefined, r("EvenOddTimetableClass")) },
        { json: "evenOddTimetable", js: "evenOddTimetable", typ: u(undefined, r("EvenOddTimetableClass")) },
        { json: "status", js: "status", typ: u(undefined, r("Status")) },
        { json: "image", js: "image", typ: u(undefined, r("Exceptions")) },
        { json: "location", js: "location", typ: u(undefined, r("EvenOddTimetableClass")) },
        { json: "exceptions", js: "exceptions", typ: u(undefined, r("Exceptions")) },
        { json: "userData", js: "userData", typ: u(undefined, r("TartuGecko")) },
        { json: "scheduleIsEmpty", js: "scheduleIsEmpty", typ: u(undefined, r("Exceptions")) },
        { json: "orderWeight", js: "orderWeight", typ: u(undefined, r("IconUrl")) },
        { json: "readonlyTaxonomies", js: "readonlyTaxonomies", typ: u(undefined, r("DefaultFilteredWorkers")) },
        { json: "displayInSchedule", js: "displayInSchedule", typ: u(undefined, r("HammerfestPonies")) },
        { json: "lastSU", js: "lastSU", typ: u(undefined, r("CreatedOn")) },
        { json: "experience", js: "experience", typ: u(undefined, r("CreatedOn")) },
        { json: "degree", js: "degree", typ: u(undefined, r("TartuGecko")) },
        { json: "social_network", js: "social_network", typ: u(undefined, r("BackofficeType")) },
        { json: "handle", js: "handle", typ: u(undefined, r("TartuGecko")) },
        { json: "url", js: "url", typ: u(undefined, r("TartuGecko")) },
        { json: "week", js: "week", typ: u(undefined, r("Week")) },
    ], false),
    "AdditionalExtraId": o([
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "items", js: "items", typ: u(undefined, r("TartuGecko")) },
    ], false),
    "AdditionalSettings": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("AdditionalSettingsProperties") },
    ], false),
    "AdditionalSettingsProperties": o([
        { json: "appointmentExtensionAmount", js: "appointmentExtensionAmount", typ: r("LivingstoneSouthernWhiteFacedOwl") },
        { json: "appointmentExtensionType", js: "appointmentExtensionType", typ: r("Repeats") },
    ], false),
    "PropertiesBackofficeConfiguration": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("BackofficeConfigurationPropertiesClass") },
    ], false),
    "BackofficeConfigurationPropertiesClass": o([
        { json: "resourceTimetableType", js: "resourceTimetableType", typ: r("Repeats") },
        { json: "enableMasterImportance", js: "enableMasterImportance", typ: r("HammerfestPonies") },
    ], false),
    "CallbackWidgetConfiguration": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("CallbackWidgetConfigurationProperties") },
    ], false),
    "CallbackWidgetConfigurationProperties": o([
        { json: "title1", js: "title1", typ: r("TartuGecko") },
        { json: "title2", js: "title2", typ: r("TartuGecko") },
    ], false),
    "EvenOddTimetableClass": o([
        { json: "definition", js: "definition", typ: "" },
        { json: "$ref", js: "$ref", typ: "" },
    ], false),
    "Exceptions": o([
        { json: "definition", js: "definition", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
    ], false),
    "FromSms": o([
        { json: "type", js: "type", typ: a(r("TypeElement")) },
        { json: "default", js: "default", typ: true },
    ], false),
    "IconUrl": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: a(r("TypeElement")) },
    ], false),
    "MiniWidgetConfiguration": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("MiniWidgetConfigurationProperties") },
    ], false),
    "MiniWidgetConfigurationProperties": o([
        { json: "title1", js: "title1", typ: r("TartuGecko") },
        { json: "title2", js: "title2", typ: r("TartuGecko") },
        { json: "fields", js: "fields", typ: r("ChildrenTaxonomyTypes") },
    ], false),
    "OriginGeneralInfo": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "$ref", js: "$ref", typ: "" },
    ], false),
    "Slots": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("SlotsProperties") },
    ], false),
    "SlotsProperties": o([
        { json: "time", js: "time", typ: r("GeneralInfo") },
    ], false),
    "Status": o([
        { json: "definition", js: "definition", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "enum", js: "enum", typ: a("") },
    ], false),
    "Taxonomies": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "items", js: "items", typ: r("BackofficeConfigurationClass") },
        { json: "description", js: "description", typ: u(undefined, "") },
    ], false),
    "TaxonomiesComplex": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "items", js: "items", typ: r("TaxonomiesComplexItems") },
    ], false),
    "TaxonomiesComplexItems": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("IndigoProperties") },
    ], false),
    "IndigoProperties": o([
        { json: "name", js: "name", typ: r("TartuGecko") },
        { json: "taxonomies", js: "taxonomies", typ: r("DefaultFilteredWorkers") },
    ], false),
    "TopServices": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("TopServicesProperties") },
    ], false),
    "TopServicesProperties": o([
        { json: "status", js: "status", typ: r("TartuGecko") },
        { json: "services", js: "services", typ: r("TartuGecko") },
    ], false),
    "Week": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("WeekProperties") },
        { json: "required", js: "required", typ: a("") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "WeekProperties": o([
        { json: "sun", js: "sun", typ: r("Cabinets") },
        { json: "mon", js: "mon", typ: r("Cabinets") },
        { json: "tue", js: "tue", typ: r("Cabinets") },
        { json: "wed", js: "wed", typ: r("Cabinets") },
        { json: "thu", js: "thu", typ: r("Cabinets") },
        { json: "fri", js: "fri", typ: r("Cabinets") },
        { json: "sat", js: "sat", typ: r("Cabinets") },
    ], false),
    "TypeElement": [
        "array",
        "boolean",
        "null",
        "number",
        "object",
        "string",
    ],
};
