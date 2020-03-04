// To parse this data:
//
//   import { Convert, GBookingCoreV2 } from "./file";
//
//   const gBookingCoreV2 = Convert.toGBookingCoreV2(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface GBookingCoreV2 {
    Common:      Common;
    Controllers: Controllers;
    Models:      Models;
}

export interface Common {
    AuthErrorCodes?:  AuthErrorCodesObject;
    ErrorResponse?:   ErrorResponse;
    Request?:         Request;
    SuccessResponse?: SuccessResponse;
}

/**
 * Код ошибки авторизации
 */
export interface AuthErrorCodesObject {
    code: number;
}

export type ErrorResponse = any[] | boolean | ErrorResponseClass | number | number | null | string;

export interface ErrorResponseClass {
    /**
     * объект, содержащий информацию об ошибке
     */
    error: Error;
    /**
     * значение числового типа для идентификации запроса на сервере
     */
    id: number;
    /**
     * версия протокола (2.0)
     */
    jsonrpc: string;
}

/**
 * объект, содержащий информацию об ошибке
 */
export interface Error {
    /**
     * код ошибки
     */
    code: number;
    /**
     * дополнительные данные об ошибке
     */
    data?: string;
    /**
     * текстовая информация об ошибке
     */
    message: string;
}

/**
 * jsonrpc2 запрос
 */
export type Request = any[] | boolean | RequestClass | number | number | null | string;

export interface RequestClass {
    /**
     * авторизационные параметры
     */
    cred?: Cred;
    /**
     * значение числового типа для идентификации запроса на сервере
     */
    id: Id;
    /**
     * версия протокола - 2.0
     */
    jsonrpc: string;
    /**
     * название jsonrpc метода
     */
    method: string;
    /**
     * параметры запроса
     */
    params: { [key: string]: any };
}

/**
 * авторизационные параметры
 */
export interface Cred {
    /**
     * временный token для доступа
     */
    token?: string;
    /**
     * идентификатор профиля пользователя
     */
    user?: string;
}

/**
 * значение числового типа для идентификации запроса на сервере
 *
 * идентификатор витрины (передаётся вместе с with_taxonomy_showcase)
 *
 * идентификатор бизнеса
 */
export type Id = number | string;

export type SuccessResponse = any[] | boolean | SuccessResponseClass | number | number | null | string;

export interface SuccessResponseClass {
    /**
     * значение числового типа для идентификации запроса на сервере
     */
    id: number;
    /**
     * версия протокола (2.0)
     */
    jsonrpc: string;
    /**
     * данные, передаваемые в ответ
     */
    result: { [key: string]: any };
}

export interface Controllers {
    Business: BusinessController;
    Client:   ClientController;
}

export interface BusinessController {
    get_profile_by_id: GetProfileById;
}

export interface GetProfileById {
    request:  BusinessGetProfileByIdRequest;
    response: BusinessGetProfileByIdResponse;
}

export interface BusinessGetProfileByIdRequest {
    /**
     * авторизационные параметры
     */
    cred?: Cred;
    /**
     * значение числового типа для идентификации запроса на сервере
     */
    id: Id;
    /**
     * версия протокола - 2.0
     */
    jsonrpc: string;
    /**
     * название jsonrpc метода
     */
    method: string;
    /**
     * параметры запроса
     */
    params: BusinessGetProfileByIdRequestParams;
}

/**
 * параметры запроса
 */
export interface BusinessGetProfileByIdRequestParams {
    business: PurpleBusiness;
    /**
     * если указано true - меняет формат представления discounts
     */
    desktop_discounts?: boolean;
    /**
     * если указано true - возвращает только активных работников (status == 'INACTIVE')
     */
    only_active_workers?: boolean;
    /**
     * если указано true - возвращает всех работников в том числе и неактивных (status ==
     * 'INACTIVE')
     */
    show_inactive_workers?: boolean;
    /**
     * идентификатор витрины (передаётся вместе с with_taxonomy_showcase)
     */
    showcase_business_id?: Id;
    /**
     * если указано true - не приминяет сортировку работников
     */
    skip_worker_sorting?: boolean;
    /**
     * если указано true - возвращает историю биллинга в поле billing (недоступно для роли guest)
     */
    with_billing?: boolean;
    /**
     * если указано true - возвращает список операций, доступных в БекОфисе в поле profiles
     * (недоступно для роли guest)
     */
    with_bop?: boolean;
    /**
     * если указано true - возвращает кампании скидочных купонов в поле campaigns
     */
    with_campaigns?: boolean;
    /**
     * если указано true - возвращает список скидочных акций в поле discounts
     */
    with_discounts?: boolean;
    /**
     * дата начала расписания, для которого нужно получить скидочные акции
     */
    with_discounts_from?: Date;
    /**
     * дата окончания расписания, для которого нужно получить скидочные акции
     */
    with_discounts_to?: Date;
    /**
     * если указано true - возвращает информацию о других филиалах сети в поле networks
     */
    with_networks?: boolean;
    /**
     * если указано true - заполняет идентификаторы таксономий витрины showcaseTaxonomyID для
     * каждой таксономии (недоступно для роли guest)
     */
    with_taxonomy_showcase?: boolean;
    /**
     * тип сортировки работника
     */
    worker_sorting_type?: WorkerSortingType;
}

export interface PurpleBusiness {
    /**
     * идентификатор бизнеса
     */
    id: string;
}

/**
 * тип сортировки работника
 */
export enum WorkerSortingType {
    MostFree = "most_free",
    None = "none",
    Workload = "workload",
}

export interface BusinessGetProfileByIdResponse {
    /**
     * значение числового типа для идентификации запроса на сервере
     */
    id?: number;
    /**
     * версия протокола (2.0)
     */
    jsonrpc?: string;
    /**
     * данные, передаваемые в ответ
     */
    result?: BusinessGetProfileByIdResponseResult;
    /**
     * объект, содержащий информацию об ошибке
     */
    error?: BusinessGetProfileByIdResponseError;
}

/**
 * объект, содержащий информацию об ошибке
 *
 * Код ошибки авторизации
 */
export interface BusinessGetProfileByIdResponseError {
    /**
     * код ошибки
     */
    code: number;
    /**
     * дополнительные данные об ошибке
     */
    data?: string;
    /**
     * текстовая информация об ошибке
     */
    message: string;
}

/**
 * данные, передаваемые в ответ
 */
export interface BusinessGetProfileByIdResponseResult {
    active?:                boolean;
    business:               Business;
    freeSms?:               number;
    monthlyFreeSms?:        number;
    networks?:              Network[];
    top_services?:          ResultTopServices;
    useDefaultSmsTemplate?: boolean;
    yandexFeedType?:        YandexFeedType;
}

export type Business = any[] | boolean | BusinessClass | number | number | null | string;

export interface BusinessClass {
    active?:                        boolean;
    additionalSettings?:            AdditionalSettings;
    allowCategoryBooking?:          boolean;
    backoffice_configuration?:      BackofficeConfigurationObject;
    backofficeConfiguration?:       BackofficeConfigurationClass;
    backofficeType?:                BackofficeType;
    cabinets?:                      Cabinet[];
    cabinetsEnabled?:               boolean;
    callback_widget_configuration?: CallbackWidgetConfiguration;
    consumables?:                   Consumable[];
    created_on?:                    Date;
    defaultFilteredWorkers?:        string[];
    departments?:                   Department[];
    designs?:                       { [key: string]: any }[];
    extraID?:                       string;
    flatTaxonomyDisplay?:           boolean;
    general_info:                   BusinessInfo;
    group?:                         Group;
    id?:                            string;
    integration_data?:              { [key: string]: any };
    mini_widget_configuration:      MiniWidgetConfiguration;
    mobileData?:                    any[];
    notifications?:                 any[];
    resources:                      Resource[];
    stateLevelHolidaysNotWorking?:  boolean;
    taxonomies:                     BusinessTaxonomy[];
    taxonomiesComplex?:             TaxonomiesComplex[];
    taxonomy_tree_capacity?:        { [key: string]: any }[];
    top_services?:                  BusinessTopServices;
    vertical?:                      string;
    widget_configuration:           WidgetConfiguration;
    yandexFeedType?:                string;
}

export interface AdditionalSettings {
    appointmentExtensionAmount?: number;
    appointmentExtensionType?:   AppointmentExtensionType;
}

export enum AppointmentExtensionType {
    Minutes = "MINUTES",
    Percent = "PERCENT",
}

export interface BackofficeConfigurationClass {
    adjacentTaxonomiesTreshold?:                      number;
    allowHideServiceForBooking?:                      boolean;
    allowHideWorkersFromSchdeule?:                    boolean;
    allowSmsTranslit?:                                boolean;
    appointmentFutureMoving?:                         boolean;
    blockNotificationForAnyAvailableAdjacentService?: boolean;
    cabinetsEnabled?:                                 boolean;
    checkClientOverlapping?:                          boolean;
    customOnlinePaymentConfirmationTemplate?:         string;
    defaultGTScheduleDayView?:                        boolean;
    disableAppointmentClientInlineEditor?:            boolean;
    editAppExtraId?:                                  boolean;
    editTaxonomyChildren?:                            boolean;
    editTaxonomyVisitType?:                           boolean;
    enableBlackList?:                                 boolean;
    enableCalculateShedule?:                          boolean;
    enableClientCard?:                                boolean;
    enableClientLanguage?:                            boolean;
    enableClientMedicalCardReport?:                   boolean;
    enableCustomOnlinePaymentConfirmation?:           boolean;
    enableExtendedPhone?:                             boolean;
    enableExtendedRecordsClientStatistics?:           boolean;
    enableMasterImportance?:                          boolean;
    enableServiceTimeLimit?:                          boolean;
    enableSourceChoice?:                              boolean;
    enableTaxonomyChildrenAgeCheck?:                  boolean;
    exportToExcelRemovedClients?:                     boolean;
    feedbackCustomerPortalMessage?:                   string;
    feedbackCustomerPortalThankYouMessage?:           string;
    feedbackCustomerPortalTitle?:                     string;
    feedBackMinRating?:                               FeedBackMinRating;
    finId?:                                           string;
    finName?:                                         string;
    hideCustomerPortalFooter?:                        boolean;
    highlightedResource?:                             boolean;
    manualExceptionSupport?:                          boolean;
    noInternetAlert?:                                 boolean;
    pastTimeEdit?:                                    number;
    paymentProvider?:                                 PaymentProvider;
    readonlyResourceSchedule?:                        boolean;
    resourceTimetableType?:                           ResourceTimetableType;
    revisionVersion?:                                 number;
    schduleWeekViewIsDefault?:                        boolean;
    scheduleDefaultWorkersLimit?:                     number;
    schedulerWeekViewType?:                           SchedulerWeekViewType;
    scheduleWorkerHours?:                             boolean;
    showAdditionalFields?:                            boolean;
    showAddress?:                                     boolean;
    showBirthDate?:                                   boolean;
    showClientAppear?:                                boolean;
    showClientAppearOnSchedule?:                      boolean;
    showClientBirthdayFilter?:                        boolean;
    showClientContractNumber?:                        boolean;
    showClientImage?:                                 boolean;
    showClientPayment?:                               boolean;
    showDefaulterBlockscreen?:                        boolean;
    showDeliveryStatus?:                              boolean;
    showDepartmentFilter?:                            boolean;
    showDepartments?:                                 boolean;
    showDepartmentsConfiguration?:                    boolean;
    showEmail?:                                       boolean;
    showExtraClientInfo?:                             boolean;
    showFax?:                                         boolean;
    showFiredWorkerAppointmentAlert?:                 boolean;
    showFirstAvailableSlot?:                          boolean;
    showGapWindow?:                                   boolean;
    showGender?:                                      boolean;
    showGenderInRecords?:                             boolean;
    showGeneratableReportsScreen?:                    boolean;
    showHouseNumber?:                                 boolean;
    showIsraelCity?:                                  boolean;
    showKupatHolim?:                                  boolean;
    showLeadsScreen?:                                 boolean;
    showManualChanges?:                               boolean;
    showPassportId?:                                  boolean;
    showRooms?:                                       boolean;
    showSeasonTickets?:                               boolean;
    showTaxonomyChildren?:                            boolean;
    showTaxonomyLocalization?:                        boolean;
    showTaxonomyVisitType?:                           boolean;
    showTestRecord?:                                  boolean;
    showUTM?:                                         boolean;
    showWidgetColorTheme?:                            boolean;
    showWorkerDescriptionInEvent?:                    boolean;
    showWorkerExtraId?:                               boolean;
    showWorkerStatus?:                                boolean;
    skipAppointmentPriceUpdate?:                      boolean;
    skipCancelIfClientNotAppear?:                     boolean;
    skipServiceFiltering?:                            boolean;
    splitFullNameXlsExport?:                          boolean;
    stateLevelHolidays?:                              { [key: string]: any }[];
    stateLevelHolidaysNotWorking?:                    boolean;
    taxonomyChildrenMaxAge?:                          number;
    useAdditionalDurations?:                          boolean;
    useAdjacentTaxonomies?:                           boolean;
    useAdjacentTaxonomiesSlotSplitting?:              boolean;
    useGtAppMethod?:                                  boolean;
    workWeekEnd?:                                     number;
    workWeekStart?:                                   number;
}

export enum FeedBackMinRating {
    The1 = "1",
    The2 = "2",
    The3 = "3",
    The4 = "4",
    The5 = "5",
}

export enum PaymentProvider {
    DeltaProcessing = "deltaProcessing",
    Disable = "DISABLE",
    YandexMoney = "yandexMoney",
}

export enum ResourceTimetableType {
    Default = "DEFAULT",
    Evenodd = "EVENODD",
}

export enum SchedulerWeekViewType {
    Week = "week",
    WorkWeek = "workWeek",
}

export enum BackofficeType {
    Common = "COMMON",
    Gt = "GT",
    Ll = "LL",
    Mb = "MB",
    Mu = "MU",
}

export interface BackofficeConfigurationObject {
    enableMasterImportance?: boolean;
    resourceTimetableType?:  ResourceTimetableType;
}

export interface Cabinet {
    active?: boolean;
    id?:     string;
    name?:   string;
}

export interface CallbackWidgetConfiguration {
    title1?: string;
    title2?: string;
}

export interface Consumable {
    extraID:  string;
    name:     string;
    quantity: number;
}

export interface Department {
    id:   string;
    id_?: number;
    name: string;
}

/**
 * Содержит детальную информацию о бизнесе — название, адрес, график работы и другое
 */
export interface BusinessInfo {
    accepted_currency?: CurrencyList[];
    additional_info?:   null | string;
    additionalFields?:  AdditionalFields[];
    /**
     * Адреса компании или филиала
     */
    address?:               AddressElement[];
    autoAcceptAppointment?: boolean;
    /**
     * если данный бизнес является витриной, идентификаторы бизнесов, которые входят в витрину
     */
    businessShowcaseAliases?: BusinessShowcaseAlias[];
    contactName?:             string;
    date_joined?:             Date;
    description?:             string;
    /**
     * Список e-mail адресов компании или филиала
     */
    email?:             string;
    fax?:               Phone[];
    images?:            string[];
    instant_messaging?: { [key: string]: any }[];
    /**
     * является ли данный бизнес витриной
     */
    isShowcase?:             boolean;
    language?:               LanguageList;
    logo_url?:               null | string;
    marketingNotifications?: MarketingNotifications;
    metro?:                  Metro;
    min_booking_time?:       number | null;
    /**
     * Список телефонов бизнеса
     */
    mobile?: Phone[];
    /**
     * Название бизнеса
     */
    name?:            string;
    networkID?:       number | null;
    newboEnabledFor?: string[];
    paymentMethods?:  PaymentMethods;
    /**
     * Список телефонов бизнеса
     */
    phone?:           Phone[];
    phone_mask?:      null | string;
    pricingType?:     PricingType;
    revisionVersion?: number;
    schedulerTick?:   number;
    /**
     * Короткое название филиала
     */
    shortName?:              null | string;
    showAppointmentColor?:   boolean;
    showAppointmentTooltip?: boolean;
    /**
     * идентификаторы витрин, в которых участвует данный бизнес
     */
    showcases?:                  Showcase[];
    showResourceWorkStatistics?: boolean;
    showWorkerProfession?:       boolean;
    skipBilling?:                boolean;
    smsDuplicateFilter?:         SmsDuplicateFilter;
    social_network?:             SocialNetworkSchema[];
    timetable?:                  Timetable;
    timezone?:                   string;
    verticalTranslation?:        VerticalTranslation;
    website?:                    string;
}

/**
 * Аббревиатура валюты
 *
 * Аббревиатура валюты (например, RUB - рубль)
 */
export enum CurrencyList {
    Cny = "CNY",
    Eur = "EUR",
    Gbp = "GBP",
    Huf = "HUF",
    Ils = "ILS",
    Kzt = "KZT",
    Rub = "RUB",
    Uah = "UAH",
    Usd = "USD",
    Uzs = "UZS",
}

export type AdditionalFields = any[] | boolean | number | number | null | AdditionalFieldsObject | string;

export interface AdditionalFieldsObject {
    name:          string;
    requiredField: boolean;
    shortName:     string;
    type:          AdditionalFieldsType;
    value:         string;
}

export enum AdditionalFieldsType {
    Bool = "BOOL",
    Coupon = "COUPON",
    File = "FILE",
    Radio = "RADIO",
    String = "STRING",
}

export type AddressElement = any[] | boolean | AddressClass | number | number | null | string;

export interface AddressClass {
    address?:             string;
    address_add?:         string;
    admin_area?:          string;
    admin_area_type?:     string;
    building?:            string;
    corps?:               string;
    country:              Country;
    group?:               string;
    house_add?:           string;
    kilometer?:           string;
    latitude?:            string;
    locality?:            string;
    locality_type?:       string;
    longitude?:           string;
    metroStations?:       PurpleMetroStation[];
    number?:              string;
    office?:              string;
    possesion?:           string;
    street?:              string;
    street_type?:         string;
    sub_admin_area?:      string;
    sub_admin_area_type?: string;
    sub_locality?:        string;
    sub_locality_type?:   string;
    way?:                 string;
    zip_code?:            string;
}

export enum Country {
    Am = "AM",
    Blr = "BLR",
    Ch = "CH",
    De = "DE",
    Empty = "_",
    Es = "ES",
    Fi = "FI",
    Fr = "FR",
    Ge = "GE",
    Hu = "HU",
    Il = "IL",
    Kz = "KZ",
    Li = "LI",
    Lt = "LT",
    Lv = "LV",
    Ru = "RU",
    Ua = "UA",
    Uk = "UK",
    Us = "US",
    Uz = "UZ",
}

export interface PurpleMetroStation {
    _id?:         string;
    description?: string;
    name:         string;
}

export interface BusinessShowcaseAlias {
    internalID?: string;
}

export type Phone = any[] | boolean | PhoneClass | number | number | null | string;

export interface PhoneClass {
    area_code:    string;
    country_code: string;
    number:       string;
}

export enum LanguageList {
    AmAm = "am-am",
    DeDe = "de-de",
    EeEe = "ee-ee",
    EnUs = "en-us",
    EsEs = "es-es",
    FiFi = "fi-fi",
    FrFr = "fr-fr",
    GeGe = "ge-ge",
    HeIl = "he-il",
    HuHu = "hu-hu",
    LtLt = "lt-lt",
    LvLv = "lv-lv",
    RuRu = "ru-ru",
    UzUz = "uz-uz",
    ZhCn = "zh-cn",
}

export interface MarketingNotifications {
    accepted:        boolean;
    active:          boolean;
    useSmsAlphaName: boolean;
}

export interface Metro {
    color?:    string;
    distance?: number;
    name?:     string;
}

export enum PaymentMethods {
    Amex = "Amex",
    Mastercard = "Mastercard",
    MoneyBookers = "MoneyBookers",
    PayPal = "PayPal",
    Visa = "Visa",
}

export enum PricingType {
    Default = "DEFAULT",
    MasterTopmaster = "MASTER_TOPMASTER",
}

export interface Showcase {
    baseBusinessID?: string;
}

export interface SmsDuplicateFilter {
    active?: boolean;
}

export interface SocialNetworkSchema {
    handle: string;
    /**
     * network id
     */
    id:             string;
    social_network: SocialNetwork;
    url:            string;
}

export enum SocialNetwork {
    Facebook = "Facebook",
    GBooking = "GBooking",
    Google = "Google",
    LinkedIn = "LinkedIn",
    Mailru = "Mailru",
    Odnoklassniki = "Odnoklassniki",
    Twitter = "Twitter",
    VKontakte = "VKontakte",
    Yahoo = "Yahoo",
    Yandex = "Yandex",
}

/**
 * таблица регулярного недельного расписания
 */
export interface Timetable {
    /**
     * установлено ли расписание для сущности
     */
    active?: boolean;
    week?:   Week;
}

export interface Week {
    fri: TimeFrame[];
    mon: TimeFrame[];
    sat: TimeFrame[];
    sun: TimeFrame[];
    thu: TimeFrame[];
    tue: TimeFrame[];
    wed: TimeFrame[];
}

export interface TimeFrame {
    capacity?: number;
    /**
     * смещение в минутах от начала дня
     */
    end:      number;
    endDate?: TimeFrameDate;
    extraId?: string;
    /**
     * уникальный идентификатор временного слота
     */
    id?:        string;
    resources?: string[];
    roomID?:    string;
    /**
     * смещение в минутах от начала дня
     */
    start:      number;
    startDate?: TimeFrameDate;
}

export type TimeFrameDate = Date | number;

export enum VerticalTranslation {
    Beauty = "BEAUTY",
    Fitness = "FITNESS",
    Generic = "GENERIC",
    Medical = "MEDICAL",
    None = "NONE",
    Sport = "SPORT",
    Yoga = "YOGA",
}

export enum Group {
    French = "FRENCH",
    General = "GENERAL",
    Hungarian = "HUNGARIAN",
    Latvian = "LATVIAN",
}

export interface MiniWidgetConfiguration {
    fields?: Field[];
    title1?: string;
    title2?: string;
}

export enum Field {
    Email = "email",
    Name = "name",
    Surname = "surname",
}

/**
 * Данные о работнике бизнеса
 */
export type Resource = any[] | boolean | ResourceClass | number | number | null | string;

export interface ResourceClass {
    /**
     * информация из внешней информационной системы как есть (при интеграции)
     */
    additionalExtraId?: string[];
    /**
     * Количество записей, которые может принимать работник единовременно
     */
    capacity: number;
    /**
     * цвет колонки с работником
     */
    color?:  string;
    degree?: string;
    /**
     * идентификатор отделения, к которому привязан работник
     */
    departmentId?: string;
    /**
     * краткое описание работника
     */
    description?:       string;
    displayInSchedule?: boolean;
    /**
     * отображать ли данного работника на виджете или любом другом клиенте
     */
    displayInWidget: boolean;
    /**
     * e-mail работника
     */
    email?: string;
    /**
     * включена ли отправка e-mail уведомлений для данного работника
     */
    emailEnabled?:    boolean;
    evenOddTimetable: EvenOddTimetable;
    exceptions?:      any[];
    experience?:      Date;
    /**
     * информация из внешней информационной системы как есть (при интеграции)
     */
    extraDescription?: string;
    /**
     * информация из внешней информационной системы как есть (при интеграции)
     */
    extraId?: string;
    /**
     * информация из внешней информационной системы как есть (при интеграции)
     */
    extraLink?: string;
    /**
     * информация из внешней информационной системы как есть (при интеграции)
     */
    extraMediaId?: string;
    /**
     * url изображения работника; Если указан относительный путь, то используйте
     * http://cdn.gbooking.ru (см. так же Business WidgetConfiguration.useDefaultWorkerImg и
     * WidgetConfiguration.defaultWorkerImgUrl)
     */
    icon_url?: null | string;
    /**
     * внутренний идентификатор работника; уникальный во всей системе GBooking
     */
    id:      string;
    image?:  string;
    lastSU?: Date;
    /**
     * уровень скорости выполнения услуги по-умолчанию (если не найдено в taxonomyLevels)
     */
    level: number;
    /**
     * не используется
     */
    loaned: boolean;
    /**
     * не используется
     */
    loanedFrom?: string;
    /**
     * не используется
     */
    loanedTo?:     string;
    location:      ResourceLocation;
    manualChanges: boolean;
    /**
     * отчество работника
     */
    middleName?: string;
    /**
     * имя работника
     */
    name: string;
    /**
     * внутреннее название работника в Бекофис
     */
    nickname?: string;
    /**
     * индекс сортировки работника
     */
    order?: number;
    /**
     * вес работника, в зависимости от указанного способа сортировки
     */
    orderWeight?: OrderWeight;
    /**
     * (только в витрине) объект с данными бизнеса-филиала
     */
    origin_general_info?: Info;
    /**
     * (только в витрине) идентификатор бизнеса-филиала, откуда был взят работник
     */
    originBusinessID?: string;
    /**
     * (только в витрине) список идентификаторов услуг на бизнесе-филиале, которые выполняет
     * работник
     */
    originTaxonomies?: string[];
    /**
     * особый навык
     */
    perk?: string;
    phone: Phone;
    /**
     * информация о профессии работника, используется в Бекофис
     */
    profession?: string;
    profile?:    ИнформацияОПрофилеРаботника;
    /**
     * Рейтинг работника
     */
    rating?:             number;
    readonlyTaxonomies?: string[];
    /**
     * Версия изменений документа
     */
    revisionVersion:  number;
    scheduleIsEmpty?: boolean;
    /**
     * информация из внешней информационной системы как есть (при интеграции)
     */
    siteId?: string;
    /**
     * включена ли отправка смс уведомлений для данного работника
     */
    smsEnabled?: boolean;
    status?:     Status;
    /**
     * фамилия и отчество работника
     */
    surname: string;
    /**
     * массив идентификаторов услуг, которые выполняет работник
     */
    taxonomies: string[];
    /**
     * массив свойств выполнения услуги как детской, как взрослой или как общей (если указаны
     * оба или не указаны вовсе для услуги)
     */
    taxonomyChildren: ResourceTaxonomyChildren[];
    /**
     * массив уровня скорости выполнения услуги (см так же Resource level)
     */
    taxonomyLevels: ResourceTaxonomyLevel[];
    timetable:      Timetable;
    userData?:      { [key: string]: any };
    /**
     * рабочее место, которое занимает работник
     */
    workPlace?: string;
}

export interface EvenOddTimetable {
    /**
     * расписание для чётных дней
     */
    even: TimeFrame[];
    /**
     * расписание для нечётных дней
     */
    odd: TimeFrame[];
    /**
     * month - по дням месяца (1-е число каждого месяца - нечётно), week - по дням недели
     * (понедельник считается нечётным)
     */
    startPeriod: StartPeriod;
}

/**
 * month - по дням месяца (1-е число каждого месяца - нечётно), week - по дням недели
 * (понедельник считается нечётным)
 */
export enum StartPeriod {
    Month = "month",
    Week = "week",
}

export interface ResourceLocation {
    latitude?:  number;
    longitude?: number;
    /**
     * время последнего обновления координат
     */
    time?: string;
}

/**
 * вес работника, в зависимости от указанного способа сортировки
 */
export type OrderWeight = number | null | string;

/**
 * (только в витрине) объект с данными бизнеса-филиала
 *
 * Содержит детальную информацию о бизнесе — название, адрес, график работы и другое
 */
export interface Info {
    accepted_currency?: CurrencyList[];
    additional_info?:   null | string;
    additionalFields?:  AdditionalFields[];
    /**
     * Адреса компании или филиала
     */
    address?:               AddressElement[];
    autoAcceptAppointment?: boolean;
    /**
     * если данный бизнес является витриной, идентификаторы бизнесов, которые входят в витрину
     */
    businessShowcaseAliases?: BusinessShowcaseAlias[];
    contactName?:             string;
    date_joined?:             Date;
    description?:             string;
    /**
     * Список e-mail адресов компании или филиала
     */
    email?:             string;
    fax?:               Phone[];
    images?:            string[];
    instant_messaging?: { [key: string]: any }[];
    /**
     * является ли данный бизнес витриной
     */
    isShowcase?:             boolean;
    language?:               LanguageList;
    logo_url?:               null | string;
    marketingNotifications?: MarketingNotifications;
    metro?:                  Metro;
    min_booking_time?:       number | null;
    /**
     * Список телефонов бизнеса
     */
    mobile?: Phone[];
    /**
     * Название бизнеса
     */
    name?:            string;
    networkID?:       number | null;
    newboEnabledFor?: string[];
    paymentMethods?:  PaymentMethods;
    /**
     * Список телефонов бизнеса
     */
    phone?:           Phone[];
    phone_mask?:      null | string;
    pricingType?:     PricingType;
    revisionVersion?: number;
    schedulerTick?:   number;
    /**
     * Короткое название филиала
     */
    shortName?:              null | string;
    showAppointmentColor?:   boolean;
    showAppointmentTooltip?: boolean;
    /**
     * идентификаторы витрин, в которых участвует данный бизнес
     */
    showcases?:                  Showcase[];
    showResourceWorkStatistics?: boolean;
    showWorkerProfession?:       boolean;
    skipBilling?:                boolean;
    smsDuplicateFilter?:         SmsDuplicateFilter;
    social_network?:             SocialNetworkSchema[];
    timetable?:                  Timetable;
    timezone?:                   string;
    verticalTranslation?:        VerticalTranslation;
    website?:                    string;
}

/**
 * Доступ имеют только пользователи с правами resource или admin
 */
export interface ИнформацияОПрофилеРаботника {
    /**
     * тип доступа работника в систему через его учётную запись
     */
    accessType: AccessType;
    /**
     * e-mail профиля работника
     */
    email: string;
    /**
     * идентификатор профиля работника уникальный во всей системе
     */
    profileID: string;
    /**
     * идентификатор работника
     */
    userID: string;
}

/**
 * тип доступа работника в систему через его учётную запись
 */
export enum AccessType {
    None = "NONE",
    WorkerExtended = "WORKER_EXTENDED",
    WorkerSimple = "WORKER_SIMPLE",
}

export enum Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
}

export interface ResourceTaxonomyChildren {
    /**
     * true - детская услуга; false - взрослая услуга
     */
    children: boolean;
    /**
     * идентификатор услуги, для которой установлено свойство
     */
    taxonomyID: string;
}

export interface ResourceTaxonomyLevel {
    /**
     * идентификатор услуги, для которой установлено уровень скорости
     */
    id: string;
    /**
     * уровень скорости
     */
    level: number;
}

export interface BusinessTaxonomy {
    active?:                     boolean;
    additionalDurations?:        AdditionalDuration[];
    additionalPrices?:           BusinessTaxonomyPrice[];
    additionalProducts?:         BusinessTaxonomyProduct[];
    additionalTaxonomyExtraId?:  { [key: string]: any }[];
    adjacentSameTimeStart?:      boolean;
    adjacentTaxonomies?:         AdjacentTaxonomy[];
    alias?:                      { [key: string]: any };
    allowBookingInBO?:           boolean;
    allowNextBookingCount?:      number;
    allowNextBookingInDays?:     number;
    allowNextBookingInDaysText?: string;
    cabinets?:                   string[];
    cabinetsEnabled?:            boolean;
    capacity?:                   number;
    capacity_decrease?:          number;
    chargeUnitsStep?:            number;
    childrenTaxonomyTypes?:      ChildrenTaxonomyType[];
    color?:                      string;
    confirmationAlert?:          string;
    confirmationSmsAlert?:       string;
    dateLimits?:                 DateLimit[];
    dateLimitType?:              DateLimitType;
    designs?:                    string[];
    discounts?:                  Discount;
    displayInWidget?:            boolean;
    duration?:                   number;
    exceptions?:                 any[];
    extraDescription?:           string;
    extraId?:                    string;
    extraLink?:                  string;
    forPay?:                     boolean;
    id?:                         string;
    images?:                     string[];
    isOther?:                    boolean;
    lastModified?:               Date;
    leaves?:                     string[];
    manualChanges?:              boolean;
    newTaxonomy?:                boolean;
    onlineMode?:                 OnlineMode;
    onlyAfterTaxonomies?:        string[];
    order?:                      number;
    parallelTaxonomies?:         string[];
    popularity?:                 number;
    price?:                      Price;
    priceLink?:                  string;
    rooms?:                      string[];
    showcaseItems?:              ShowcaseItem[];
    showcases?:                  TaxonomyShowcase[];
    /**
     * Идентификатор услуги в витрине
     */
    showcaseTaxonomyID?: string;
    /**
     * Внешний идентификатор таксономии
     */
    siteId?:                  string;
    specialCabinet?:          string;
    taxonomyAppExtraID?:      string;
    taxonomyCategoryExtraID?: string;
    taxonomyParentID?:        string;
    taxonomyType?:            TaxonomyType;
    timetable?:               Timetable;
    useConfirmationSmsAlert?: boolean;
    visitType?:               string;
}

export interface AdditionalDuration {
    duration?: number | null;
    level?:    number;
}

export interface BusinessTaxonomyPrice {
    /**
     * Значение цены
     */
    amount?: string;
    /**
     * Аббревиатура валюты
     */
    currency: CurrencyList;
    /**
     * "Уровень" цены. Работнику можно выставить его "уровень" (поле level в resources)
     */
    resourceLevel: number;
    /**
     * Значение цены, с учётом промо акций
     */
    stockAmount: string;
    /**
     * Тип цены
     */
    type?: AdditionalPriceType;
}

/**
 * Тип цены
 */
export enum AdditionalPriceType {
    Average = "average",
    BeginWith = "begin_with",
    Equal = "equal",
}

export interface BusinessTaxonomyProduct {
    /**
     * Дополнительный ID товара
     */
    extraID: string;
    /**
     * ID товара
     */
    id: string;
    /**
     * Является ли обязательным при выполнении данной услуги
     */
    required: boolean;
}

export interface AdjacentTaxonomy {
    isAnyAvailable?: boolean;
    order?:          number;
    slotDuration?:   number;
    taxonomyID?:     string;
}

export enum ChildrenTaxonomyType {
    Child = "child",
    None = "none",
    Parent = "parent",
}

export enum DateLimitType {
    AllDates = "all_dates",
    FromDate = "from_date",
    RangeDates = "range_dates",
    ToDate = "to_date",
}

export interface DateLimit {
    dateLimitFrom?: Date;
    dateLimitTo?:   Date;
}

/**
 * Информация о скидке
 */
export type Discount = any[] | boolean | DiscountClass | number | number | null | string;

export interface DiscountClass {
    active?:            boolean;
    daysOfWeek?:        DaysOfWeek;
    repeats?:           Repeats;
    slots?:             Slots;
    start?:             Date;
    unlimWeeklyRepeat?: boolean;
    weeklyRepeat?:      number;
}

export enum DaysOfWeek {
    Fri = "fri",
    Mon = "mon",
    Sat = "sat",
    Sun = "sun",
    Thu = "thu",
    Tue = "tue",
    Wed = "wed",
}

export enum Repeats {
    Daily = "daily",
    None = "none",
    Weekly = "weekly",
}

export interface Slots {
    time?: TimeFrame;
}

export enum OnlineMode {
    OncallOnline = "ONCALL_ONLINE",
    PlanClinic = "PLAN_CLINIC",
    PlanClinicOnline = "PLAN_CLINIC_ONLINE",
    PlanOnline = "PLAN_ONLINE",
}

export interface Price {
    /**
     * Значение цены
     */
    amount: string;
    /**
     * Аббревиатура валюты (например, RUB - рубль)
     */
    currency: CurrencyList;
    /**
     * Значение цены, с учётом промо акций
     */
    stockAmount: null | string;
    /**
     * Тип цены
     */
    type: AdditionalPriceType;
}

export interface ShowcaseItem {
    _id?:                 string;
    additionalDurations?: ShowcaseItemAdditionalDuration[];
    businessID?:          string;
    taxonomyID?:          string;
}

export interface ShowcaseItemAdditionalDuration {
    _id?:      string;
    duration?: number;
    /**
     * поддержка различной длительности услуг в зависимости от работника
     */
    level?: number;
}

export interface TaxonomyShowcase {
    baseBusinessID?:   string;
    isBaseNode?:       boolean;
    originBusinessID?: string;
    showcaseItemID?:   string;
}

export enum TaxonomyType {
    Category = "CATEGORY",
    Service = "SERVICE",
    Subcategory = "SUBCATEGORY",
}

export interface TaxonomiesComplex {
    name?:       string;
    taxonomies?: string[];
}

export interface BusinessTopServices {
    services?: any[];
    status?:   string;
}

export interface WidgetConfiguration {
    additionalName?:                         string;
    alignmentTaxonomySlots?:                 boolean;
    allowAutoSelect?:                        boolean;
    allowBookVisitor?:                       boolean;
    allowSkipTimeCheck?:                     boolean;
    appointment_confirmation_text?:          string;
    appointment_confirmation_title?:         string;
    askClientBirthday?:                      boolean;
    askClientGender?:                        boolean;
    bookableDateRanges?:                     BookableDateRanges;
    bookableMonthsCount?:                    number;
    calendarMode?:                           boolean;
    calendarModeHideTime?:                   boolean;
    clientBlockingSettings?:                 ClientBlockingSettings;
    clientCommentTitle?:                     boolean;
    cracServer?:                             CracServer;
    cracSlotSize?:                           number;
    crunchv2?:                               boolean;
    dayOffLabel?:                            string;
    daysForward?:                            number;
    dayUnavailableLabel?:                    string;
    defaultServiceImgUrl?:                   string;
    defaultWorkerImgUrl?:                    string;
    denySameTimeRecords?:                    boolean;
    disabledTaxonomiesText?:                 string;
    disableMobileWidget?:                    boolean;
    disableWidget?:                          boolean;
    disableWidgetMessage?:                   string;
    discountedPriceRounding?:                DiscountedPriceRounding;
    displaySlotSize?:                        number;
    dontRequireEmail?:                       boolean;
    emailIsMandatory?:                       boolean;
    enableOverrideFooter?:                   boolean;
    enableWarningContactData?:               boolean;
    extraVisitors?:                          boolean;
    filterNonInsuranceSchedule?:             boolean;
    hideAnyWorkerBooking?:                   boolean;
    hideCallButton?:                         boolean;
    hideEmptyDays?:                          boolean;
    hideGBookingLogo?:                       boolean;
    hideGraySlots?:                          boolean;
    hideNewAppointmentButton?:               boolean;
    hidePrices?:                             boolean;
    hideSocialNetworksAuthentication?:       boolean;
    insuranceClientSupportPhone?:            Phone[];
    maxServiceBooking?:                      number;
    maxTimeslotBooking?:                     number;
    mostFreeEnable?:                         boolean;
    multiServiceBooking?:                    boolean;
    multiTimeslotBooking?:                   boolean;
    multiTimeslotBookingAllDays?:            boolean;
    newWidgetTheme?:                         { [key: string]: any };
    noDefaultImages?:                        boolean;
    overrideFooter?:                         string;
    payment?:                                Payment;
    paymentProvider?:                        PaymentProvider;
    requireAgreement?:                       boolean;
    requireAgreementLink?:                   string;
    revisionVersion?:                        number;
    shortLink?:                              string;
    showAllWorkers?:                         boolean;
    showClientAddress?:                      boolean;
    showClientComment?:                      boolean;
    showDisabledTaxonomies?:                 boolean;
    showDrinkQuestion?:                      boolean;
    showMap?:                                boolean;
    showSurnameFirst?:                       boolean;
    showTalkQuestion?:                       boolean;
    showTaxonomyConfirmationAlert?:          boolean;
    skipAuthentication?:                     boolean;
    skipDaysForward?:                        boolean;
    skipMobileMap?:                          boolean;
    skipServiceDurationAlignment?:           boolean;
    skipServiceSelection?:                   boolean;
    skipTimeSelection?:                      boolean;
    skipTimeSelectionServiceIDs?:            string[];
    skipWorkerSelectedServiceIDs?:           string[];
    skipWorkerServicesSelection?:            boolean;
    socialNetworkImage?:                     string;
    socialSharing?:                          SocialSharing;
    sortByMostFree?:                         boolean;
    sortWorkersByWorkload?:                  boolean;
    splitInsuranceClient?:                   boolean;
    splitName?:                              boolean;
    tentativeTTL?:                           number;
    theme?:                                  string;
    useAppointmentReminder?:                 boolean;
    useBusinessScheduleForUnavailableLabel?: boolean;
    useClustersMap?:                         boolean;
    useCoupon?:                              boolean;
    useCRAC?:                                boolean;
    useDefaultServiceImg?:                   boolean;
    useDefaultWorkerImg?:                    boolean;
    useDirectScheduleRead?:                  UseDirectScheduleRead;
    useInsuranceGuaranteeLetter?:            boolean;
    useInsuranceSelect?:                     boolean;
    useMedAuth?:                             boolean;
    useMiddleName?:                          boolean;
    useNewReserveAPI?:                       boolean;
    useResourcePageLoading?:                 boolean;
    useSortByName?:                          boolean;
    warningContactDataText?:                 string;
    widgetUseCRAC?:                          boolean;
    withoutWorkers?:                         boolean;
    worker_unavailability_text?:             string;
    workerNameReverse?:                      boolean;
}

export interface BookableDateRanges {
    enabled?: boolean;
    end?:     any;
    start?:   any;
}

export interface ClientBlockingSettings {
    appointmentClientBlock?:     boolean;
    appointmentClientBlockDays?: number;
    appointmentClientBlockText?: string;
    blockIfFutureRecordExists?:  boolean;
    blockRepeatedRecordsCount?:  number;
    blockRepeatedRecordsRange?:  number;
    blockRepeatedRecordsText?:   string;
}

export enum CracServer {
    Crac = "CRAC",
    CracProd3 = "CRAC_PROD3",
}

export interface DiscountedPriceRounding {
    rule?:  Rule;
    value?: number;
}

export enum Rule {
    Custom = "CUSTOM",
    NearestInteger = "NEAREST_INTEGER",
    TwoDecimals = "TWO_DECIMALS",
}

export enum Payment {
    Optional = "OPTIONAL",
    Required = "REQUIRED",
    Without = "WITHOUT",
}

export interface SocialSharing {
    active?:          boolean;
    discountAmount?:  number | null;
    discountEnabled?: boolean;
    discountType?:    DiscountType;
    text?:            null | string;
    widgetText?:      null | string;
}

export enum DiscountType {
    Percent = "PERCENT",
}

export enum UseDirectScheduleRead {
    All = "ALL",
    Authenticated = "AUTHENTICATED",
    Guest = "GUEST",
    None = "NONE",
}

export interface Network {
    address?:     Address;
    businessName: string;
    description:  string;
    internalID:   string;
}

export type Address = any[] | boolean | AddressCamelCaseSchema | number | number | null | string;

export interface AddressCamelCaseSchema {
    address?:          string;
    addressAdd?:       string;
    adminArea?:        string;
    adminAreaType?:    string;
    building?:         string;
    corps?:            string;
    country:           Country;
    group?:            string;
    houseAdd?:         string;
    kilometer?:        string;
    latitude?:         string;
    locality?:         string;
    localityType?:     string;
    longitude?:        string;
    metroStations?:    FluffyMetroStation[];
    number?:           string;
    office?:           string;
    possesion?:        string;
    street?:           string;
    streetType?:       string;
    subAdminArea?:     string;
    subAdminAreaType?: string;
    subLocality?:      string;
    subLocalityType?:  string;
    way?:              string;
    zipCode?:          string;
}

export interface FluffyMetroStation {
    _id?:         string;
    description?: string;
    name:         string;
}

export interface ResultTopServices {
    services: string[];
    status:   boolean;
}

export enum YandexFeedType {
    Dynamic = "dynamic",
    No = "no",
    Static = "static",
    StaticServiceOnly = "static-service-only",
}

export interface ClientController {
    add_client: AddClient;
}

export interface AddClient {
    request:  ClientAddClientRequest;
    response: ClientAddClientResponse;
}

export interface ClientAddClientRequest {
    /**
     * авторизационные параметры
     */
    cred?: Cred;
    /**
     * значение числового типа для идентификации запроса на сервере
     */
    id: Id;
    /**
     * версия протокола - 2.0
     */
    jsonrpc: string;
    /**
     * название jsonrpc метода
     */
    method: string;
    /**
     * параметры запроса
     */
    params: ClientAddClientRequestParams;
}

/**
 * параметры запроса
 */
export interface ClientAddClientRequestParams {
    business:           FluffyBusiness;
    client:             Client;
    profile?:           ParamsProfile;
    skipEmailCheck?:    boolean;
    skipProfileUpdate?: boolean;
}

export interface FluffyBusiness {
    /**
     * идентификатор бизнеса
     */
    id: Id;
}

/**
 * Данные клиента
 */
export interface Client {
    birthday?:            Birthday;
    creatorProfileID?:    null | string;
    creatorProfileName?:  null | string;
    driverLicense?:       null | string;
    email?:               string[];
    fromSms?:             FromSms;
    middle_name?:         string;
    name:                 string;
    phone:                Phone;
    sex?:                 Sex;
    surname:              string;
    taxiPark?:            null | string;
    taxiParkMemberCount?: OrderWeight;
}

export type Birthday = { [key: string]: any } | string;

export type FromSms = boolean | string;

export enum Sex {
    Female = "FEMALE",
    Male = "MALE",
    NotSpecified = "NOT_SPECIFIED",
}

export interface ParamsProfile {
    /**
     * идентификатор профиля пользователя
     */
    id: string;
}

export interface ClientAddClientResponse {
    result?: ClientAddClientResponseResult;
    /**
     * объект, содержащий информацию об ошибке
     */
    error?: ClientAddClientResponseError;
    /**
     * значение числового типа для идентификации запроса на сервере
     */
    id?: number;
    /**
     * версия протокола (2.0)
     */
    jsonrpc?: string;
}

/**
 * объект, содержащий информацию об ошибке
 *
 * Код ошибки авторизации
 */
export interface ClientAddClientResponseError {
    /**
     * код ошибки
     *
     * код ошибки создания клиента
     */
    code: number;
    /**
     * дополнительные данные об ошибке
     */
    data?: string;
    /**
     * текстовая информация об ошибке
     */
    message: string;
}

export interface ClientAddClientResponseResult {
    business?:  ResultBusiness;
    client:     Client;
    documents?: any[];
    profile?:   ResultProfile;
}

export interface ResultBusiness {
    id: string;
}

export interface ResultProfile {
    id: string;
}

export interface Models {
    Business: Business;
    Client:   Client;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toGBookingCoreV2(json: string): GBookingCoreV2 {
        return cast(JSON.parse(json), r("GBookingCoreV2"));
    }

    public static gBookingCoreV2ToJson(value: GBookingCoreV2): string {
        return JSON.stringify(uncast(value, r("GBookingCoreV2")), null, 2);
    }

    public static toCommon(json: string): Common {
        return cast(JSON.parse(json), r("Common"));
    }

    public static commonToJson(value: Common): string {
        return JSON.stringify(uncast(value, r("Common")), null, 2);
    }

    public static toAuthErrorCodesObject(json: string): AuthErrorCodesObject {
        return cast(JSON.parse(json), r("AuthErrorCodesObject"));
    }

    public static authErrorCodesObjectToJson(value: AuthErrorCodesObject): string {
        return JSON.stringify(uncast(value, r("AuthErrorCodesObject")), null, 2);
    }

    public static toErrorResponseClass(json: string): ErrorResponseClass {
        return cast(JSON.parse(json), r("ErrorResponseClass"));
    }

    public static errorResponseClassToJson(value: ErrorResponseClass): string {
        return JSON.stringify(uncast(value, r("ErrorResponseClass")), null, 2);
    }

    public static toError(json: string): Error {
        return cast(JSON.parse(json), r("Error"));
    }

    public static errorToJson(value: Error): string {
        return JSON.stringify(uncast(value, r("Error")), null, 2);
    }

    public static toRequestClass(json: string): RequestClass {
        return cast(JSON.parse(json), r("RequestClass"));
    }

    public static requestClassToJson(value: RequestClass): string {
        return JSON.stringify(uncast(value, r("RequestClass")), null, 2);
    }

    public static toCred(json: string): Cred {
        return cast(JSON.parse(json), r("Cred"));
    }

    public static credToJson(value: Cred): string {
        return JSON.stringify(uncast(value, r("Cred")), null, 2);
    }

    public static toSuccessResponseClass(json: string): SuccessResponseClass {
        return cast(JSON.parse(json), r("SuccessResponseClass"));
    }

    public static successResponseClassToJson(value: SuccessResponseClass): string {
        return JSON.stringify(uncast(value, r("SuccessResponseClass")), null, 2);
    }

    public static toControllers(json: string): Controllers {
        return cast(JSON.parse(json), r("Controllers"));
    }

    public static controllersToJson(value: Controllers): string {
        return JSON.stringify(uncast(value, r("Controllers")), null, 2);
    }

    public static toBusinessController(json: string): BusinessController {
        return cast(JSON.parse(json), r("BusinessController"));
    }

    public static businessControllerToJson(value: BusinessController): string {
        return JSON.stringify(uncast(value, r("BusinessController")), null, 2);
    }

    public static toGetProfileById(json: string): GetProfileById {
        return cast(JSON.parse(json), r("GetProfileById"));
    }

    public static getProfileByIdToJson(value: GetProfileById): string {
        return JSON.stringify(uncast(value, r("GetProfileById")), null, 2);
    }

    public static toBusinessGetProfileByIdRequest(json: string): BusinessGetProfileByIdRequest {
        return cast(JSON.parse(json), r("BusinessGetProfileByIdRequest"));
    }

    public static businessGetProfileByIdRequestToJson(value: BusinessGetProfileByIdRequest): string {
        return JSON.stringify(uncast(value, r("BusinessGetProfileByIdRequest")), null, 2);
    }

    public static toBusinessGetProfileByIdRequestParams(json: string): BusinessGetProfileByIdRequestParams {
        return cast(JSON.parse(json), r("BusinessGetProfileByIdRequestParams"));
    }

    public static businessGetProfileByIdRequestParamsToJson(value: BusinessGetProfileByIdRequestParams): string {
        return JSON.stringify(uncast(value, r("BusinessGetProfileByIdRequestParams")), null, 2);
    }

    public static toPurpleBusiness(json: string): PurpleBusiness {
        return cast(JSON.parse(json), r("PurpleBusiness"));
    }

    public static purpleBusinessToJson(value: PurpleBusiness): string {
        return JSON.stringify(uncast(value, r("PurpleBusiness")), null, 2);
    }

    public static toBusinessGetProfileByIdResponse(json: string): BusinessGetProfileByIdResponse {
        return cast(JSON.parse(json), r("BusinessGetProfileByIdResponse"));
    }

    public static businessGetProfileByIdResponseToJson(value: BusinessGetProfileByIdResponse): string {
        return JSON.stringify(uncast(value, r("BusinessGetProfileByIdResponse")), null, 2);
    }

    public static toBusinessGetProfileByIdResponseError(json: string): BusinessGetProfileByIdResponseError {
        return cast(JSON.parse(json), r("BusinessGetProfileByIdResponseError"));
    }

    public static businessGetProfileByIdResponseErrorToJson(value: BusinessGetProfileByIdResponseError): string {
        return JSON.stringify(uncast(value, r("BusinessGetProfileByIdResponseError")), null, 2);
    }

    public static toBusinessGetProfileByIdResponseResult(json: string): BusinessGetProfileByIdResponseResult {
        return cast(JSON.parse(json), r("BusinessGetProfileByIdResponseResult"));
    }

    public static businessGetProfileByIdResponseResultToJson(value: BusinessGetProfileByIdResponseResult): string {
        return JSON.stringify(uncast(value, r("BusinessGetProfileByIdResponseResult")), null, 2);
    }

    public static toBusinessClass(json: string): BusinessClass {
        return cast(JSON.parse(json), r("BusinessClass"));
    }

    public static businessClassToJson(value: BusinessClass): string {
        return JSON.stringify(uncast(value, r("BusinessClass")), null, 2);
    }

    public static toAdditionalSettings(json: string): AdditionalSettings {
        return cast(JSON.parse(json), r("AdditionalSettings"));
    }

    public static additionalSettingsToJson(value: AdditionalSettings): string {
        return JSON.stringify(uncast(value, r("AdditionalSettings")), null, 2);
    }

    public static toBackofficeConfigurationClass(json: string): BackofficeConfigurationClass {
        return cast(JSON.parse(json), r("BackofficeConfigurationClass"));
    }

    public static backofficeConfigurationClassToJson(value: BackofficeConfigurationClass): string {
        return JSON.stringify(uncast(value, r("BackofficeConfigurationClass")), null, 2);
    }

    public static toBackofficeConfigurationObject(json: string): BackofficeConfigurationObject {
        return cast(JSON.parse(json), r("BackofficeConfigurationObject"));
    }

    public static backofficeConfigurationObjectToJson(value: BackofficeConfigurationObject): string {
        return JSON.stringify(uncast(value, r("BackofficeConfigurationObject")), null, 2);
    }

    public static toCabinet(json: string): Cabinet {
        return cast(JSON.parse(json), r("Cabinet"));
    }

    public static cabinetToJson(value: Cabinet): string {
        return JSON.stringify(uncast(value, r("Cabinet")), null, 2);
    }

    public static toCallbackWidgetConfiguration(json: string): CallbackWidgetConfiguration {
        return cast(JSON.parse(json), r("CallbackWidgetConfiguration"));
    }

    public static callbackWidgetConfigurationToJson(value: CallbackWidgetConfiguration): string {
        return JSON.stringify(uncast(value, r("CallbackWidgetConfiguration")), null, 2);
    }

    public static toConsumable(json: string): Consumable {
        return cast(JSON.parse(json), r("Consumable"));
    }

    public static consumableToJson(value: Consumable): string {
        return JSON.stringify(uncast(value, r("Consumable")), null, 2);
    }

    public static toDepartment(json: string): Department {
        return cast(JSON.parse(json), r("Department"));
    }

    public static departmentToJson(value: Department): string {
        return JSON.stringify(uncast(value, r("Department")), null, 2);
    }

    public static toBusinessInfo(json: string): BusinessInfo {
        return cast(JSON.parse(json), r("BusinessInfo"));
    }

    public static businessInfoToJson(value: BusinessInfo): string {
        return JSON.stringify(uncast(value, r("BusinessInfo")), null, 2);
    }

    public static toAdditionalFieldsObject(json: string): AdditionalFieldsObject {
        return cast(JSON.parse(json), r("AdditionalFieldsObject"));
    }

    public static additionalFieldsObjectToJson(value: AdditionalFieldsObject): string {
        return JSON.stringify(uncast(value, r("AdditionalFieldsObject")), null, 2);
    }

    public static toAddressClass(json: string): AddressClass {
        return cast(JSON.parse(json), r("AddressClass"));
    }

    public static addressClassToJson(value: AddressClass): string {
        return JSON.stringify(uncast(value, r("AddressClass")), null, 2);
    }

    public static toPurpleMetroStation(json: string): PurpleMetroStation {
        return cast(JSON.parse(json), r("PurpleMetroStation"));
    }

    public static purpleMetroStationToJson(value: PurpleMetroStation): string {
        return JSON.stringify(uncast(value, r("PurpleMetroStation")), null, 2);
    }

    public static toBusinessShowcaseAlias(json: string): BusinessShowcaseAlias {
        return cast(JSON.parse(json), r("BusinessShowcaseAlias"));
    }

    public static businessShowcaseAliasToJson(value: BusinessShowcaseAlias): string {
        return JSON.stringify(uncast(value, r("BusinessShowcaseAlias")), null, 2);
    }

    public static toPhoneClass(json: string): PhoneClass {
        return cast(JSON.parse(json), r("PhoneClass"));
    }

    public static phoneClassToJson(value: PhoneClass): string {
        return JSON.stringify(uncast(value, r("PhoneClass")), null, 2);
    }

    public static toMarketingNotifications(json: string): MarketingNotifications {
        return cast(JSON.parse(json), r("MarketingNotifications"));
    }

    public static marketingNotificationsToJson(value: MarketingNotifications): string {
        return JSON.stringify(uncast(value, r("MarketingNotifications")), null, 2);
    }

    public static toMetro(json: string): Metro {
        return cast(JSON.parse(json), r("Metro"));
    }

    public static metroToJson(value: Metro): string {
        return JSON.stringify(uncast(value, r("Metro")), null, 2);
    }

    public static toShowcase(json: string): Showcase {
        return cast(JSON.parse(json), r("Showcase"));
    }

    public static showcaseToJson(value: Showcase): string {
        return JSON.stringify(uncast(value, r("Showcase")), null, 2);
    }

    public static toSmsDuplicateFilter(json: string): SmsDuplicateFilter {
        return cast(JSON.parse(json), r("SmsDuplicateFilter"));
    }

    public static smsDuplicateFilterToJson(value: SmsDuplicateFilter): string {
        return JSON.stringify(uncast(value, r("SmsDuplicateFilter")), null, 2);
    }

    public static toSocialNetworkSchema(json: string): SocialNetworkSchema {
        return cast(JSON.parse(json), r("SocialNetworkSchema"));
    }

    public static socialNetworkSchemaToJson(value: SocialNetworkSchema): string {
        return JSON.stringify(uncast(value, r("SocialNetworkSchema")), null, 2);
    }

    public static toTimetable(json: string): Timetable {
        return cast(JSON.parse(json), r("Timetable"));
    }

    public static timetableToJson(value: Timetable): string {
        return JSON.stringify(uncast(value, r("Timetable")), null, 2);
    }

    public static toWeek(json: string): Week {
        return cast(JSON.parse(json), r("Week"));
    }

    public static weekToJson(value: Week): string {
        return JSON.stringify(uncast(value, r("Week")), null, 2);
    }

    public static toTimeFrame(json: string): TimeFrame {
        return cast(JSON.parse(json), r("TimeFrame"));
    }

    public static timeFrameToJson(value: TimeFrame): string {
        return JSON.stringify(uncast(value, r("TimeFrame")), null, 2);
    }

    public static toMiniWidgetConfiguration(json: string): MiniWidgetConfiguration {
        return cast(JSON.parse(json), r("MiniWidgetConfiguration"));
    }

    public static miniWidgetConfigurationToJson(value: MiniWidgetConfiguration): string {
        return JSON.stringify(uncast(value, r("MiniWidgetConfiguration")), null, 2);
    }

    public static toResourceClass(json: string): ResourceClass {
        return cast(JSON.parse(json), r("ResourceClass"));
    }

    public static resourceClassToJson(value: ResourceClass): string {
        return JSON.stringify(uncast(value, r("ResourceClass")), null, 2);
    }

    public static toEvenOddTimetable(json: string): EvenOddTimetable {
        return cast(JSON.parse(json), r("EvenOddTimetable"));
    }

    public static evenOddTimetableToJson(value: EvenOddTimetable): string {
        return JSON.stringify(uncast(value, r("EvenOddTimetable")), null, 2);
    }

    public static toResourceLocation(json: string): ResourceLocation {
        return cast(JSON.parse(json), r("ResourceLocation"));
    }

    public static resourceLocationToJson(value: ResourceLocation): string {
        return JSON.stringify(uncast(value, r("ResourceLocation")), null, 2);
    }

    public static toInfo(json: string): Info {
        return cast(JSON.parse(json), r("Info"));
    }

    public static infoToJson(value: Info): string {
        return JSON.stringify(uncast(value, r("Info")), null, 2);
    }

    public static toИнформацияОПрофилеРаботника(json: string): ИнформацияОПрофилеРаботника {
        return cast(JSON.parse(json), r("ИнформацияОПрофилеРаботника"));
    }

    public static информацияОПрофилеРаботникаToJson(value: ИнформацияОПрофилеРаботника): string {
        return JSON.stringify(uncast(value, r("ИнформацияОПрофилеРаботника")), null, 2);
    }

    public static toResourceTaxonomyChildren(json: string): ResourceTaxonomyChildren {
        return cast(JSON.parse(json), r("ResourceTaxonomyChildren"));
    }

    public static resourceTaxonomyChildrenToJson(value: ResourceTaxonomyChildren): string {
        return JSON.stringify(uncast(value, r("ResourceTaxonomyChildren")), null, 2);
    }

    public static toResourceTaxonomyLevel(json: string): ResourceTaxonomyLevel {
        return cast(JSON.parse(json), r("ResourceTaxonomyLevel"));
    }

    public static resourceTaxonomyLevelToJson(value: ResourceTaxonomyLevel): string {
        return JSON.stringify(uncast(value, r("ResourceTaxonomyLevel")), null, 2);
    }

    public static toBusinessTaxonomy(json: string): BusinessTaxonomy {
        return cast(JSON.parse(json), r("BusinessTaxonomy"));
    }

    public static businessTaxonomyToJson(value: BusinessTaxonomy): string {
        return JSON.stringify(uncast(value, r("BusinessTaxonomy")), null, 2);
    }

    public static toAdditionalDuration(json: string): AdditionalDuration {
        return cast(JSON.parse(json), r("AdditionalDuration"));
    }

    public static additionalDurationToJson(value: AdditionalDuration): string {
        return JSON.stringify(uncast(value, r("AdditionalDuration")), null, 2);
    }

    public static toBusinessTaxonomyPrice(json: string): BusinessTaxonomyPrice {
        return cast(JSON.parse(json), r("BusinessTaxonomyPrice"));
    }

    public static businessTaxonomyPriceToJson(value: BusinessTaxonomyPrice): string {
        return JSON.stringify(uncast(value, r("BusinessTaxonomyPrice")), null, 2);
    }

    public static toBusinessTaxonomyProduct(json: string): BusinessTaxonomyProduct {
        return cast(JSON.parse(json), r("BusinessTaxonomyProduct"));
    }

    public static businessTaxonomyProductToJson(value: BusinessTaxonomyProduct): string {
        return JSON.stringify(uncast(value, r("BusinessTaxonomyProduct")), null, 2);
    }

    public static toAdjacentTaxonomy(json: string): AdjacentTaxonomy {
        return cast(JSON.parse(json), r("AdjacentTaxonomy"));
    }

    public static adjacentTaxonomyToJson(value: AdjacentTaxonomy): string {
        return JSON.stringify(uncast(value, r("AdjacentTaxonomy")), null, 2);
    }

    public static toDateLimit(json: string): DateLimit {
        return cast(JSON.parse(json), r("DateLimit"));
    }

    public static dateLimitToJson(value: DateLimit): string {
        return JSON.stringify(uncast(value, r("DateLimit")), null, 2);
    }

    public static toDiscountClass(json: string): DiscountClass {
        return cast(JSON.parse(json), r("DiscountClass"));
    }

    public static discountClassToJson(value: DiscountClass): string {
        return JSON.stringify(uncast(value, r("DiscountClass")), null, 2);
    }

    public static toSlots(json: string): Slots {
        return cast(JSON.parse(json), r("Slots"));
    }

    public static slotsToJson(value: Slots): string {
        return JSON.stringify(uncast(value, r("Slots")), null, 2);
    }

    public static toPrice(json: string): Price {
        return cast(JSON.parse(json), r("Price"));
    }

    public static priceToJson(value: Price): string {
        return JSON.stringify(uncast(value, r("Price")), null, 2);
    }

    public static toShowcaseItem(json: string): ShowcaseItem {
        return cast(JSON.parse(json), r("ShowcaseItem"));
    }

    public static showcaseItemToJson(value: ShowcaseItem): string {
        return JSON.stringify(uncast(value, r("ShowcaseItem")), null, 2);
    }

    public static toShowcaseItemAdditionalDuration(json: string): ShowcaseItemAdditionalDuration {
        return cast(JSON.parse(json), r("ShowcaseItemAdditionalDuration"));
    }

    public static showcaseItemAdditionalDurationToJson(value: ShowcaseItemAdditionalDuration): string {
        return JSON.stringify(uncast(value, r("ShowcaseItemAdditionalDuration")), null, 2);
    }

    public static toTaxonomyShowcase(json: string): TaxonomyShowcase {
        return cast(JSON.parse(json), r("TaxonomyShowcase"));
    }

    public static taxonomyShowcaseToJson(value: TaxonomyShowcase): string {
        return JSON.stringify(uncast(value, r("TaxonomyShowcase")), null, 2);
    }

    public static toTaxonomiesComplex(json: string): TaxonomiesComplex {
        return cast(JSON.parse(json), r("TaxonomiesComplex"));
    }

    public static taxonomiesComplexToJson(value: TaxonomiesComplex): string {
        return JSON.stringify(uncast(value, r("TaxonomiesComplex")), null, 2);
    }

    public static toBusinessTopServices(json: string): BusinessTopServices {
        return cast(JSON.parse(json), r("BusinessTopServices"));
    }

    public static businessTopServicesToJson(value: BusinessTopServices): string {
        return JSON.stringify(uncast(value, r("BusinessTopServices")), null, 2);
    }

    public static toWidgetConfiguration(json: string): WidgetConfiguration {
        return cast(JSON.parse(json), r("WidgetConfiguration"));
    }

    public static widgetConfigurationToJson(value: WidgetConfiguration): string {
        return JSON.stringify(uncast(value, r("WidgetConfiguration")), null, 2);
    }

    public static toBookableDateRanges(json: string): BookableDateRanges {
        return cast(JSON.parse(json), r("BookableDateRanges"));
    }

    public static bookableDateRangesToJson(value: BookableDateRanges): string {
        return JSON.stringify(uncast(value, r("BookableDateRanges")), null, 2);
    }

    public static toClientBlockingSettings(json: string): ClientBlockingSettings {
        return cast(JSON.parse(json), r("ClientBlockingSettings"));
    }

    public static clientBlockingSettingsToJson(value: ClientBlockingSettings): string {
        return JSON.stringify(uncast(value, r("ClientBlockingSettings")), null, 2);
    }

    public static toDiscountedPriceRounding(json: string): DiscountedPriceRounding {
        return cast(JSON.parse(json), r("DiscountedPriceRounding"));
    }

    public static discountedPriceRoundingToJson(value: DiscountedPriceRounding): string {
        return JSON.stringify(uncast(value, r("DiscountedPriceRounding")), null, 2);
    }

    public static toSocialSharing(json: string): SocialSharing {
        return cast(JSON.parse(json), r("SocialSharing"));
    }

    public static socialSharingToJson(value: SocialSharing): string {
        return JSON.stringify(uncast(value, r("SocialSharing")), null, 2);
    }

    public static toNetwork(json: string): Network {
        return cast(JSON.parse(json), r("Network"));
    }

    public static networkToJson(value: Network): string {
        return JSON.stringify(uncast(value, r("Network")), null, 2);
    }

    public static toAddressCamelCaseSchema(json: string): AddressCamelCaseSchema {
        return cast(JSON.parse(json), r("AddressCamelCaseSchema"));
    }

    public static addressCamelCaseSchemaToJson(value: AddressCamelCaseSchema): string {
        return JSON.stringify(uncast(value, r("AddressCamelCaseSchema")), null, 2);
    }

    public static toFluffyMetroStation(json: string): FluffyMetroStation {
        return cast(JSON.parse(json), r("FluffyMetroStation"));
    }

    public static fluffyMetroStationToJson(value: FluffyMetroStation): string {
        return JSON.stringify(uncast(value, r("FluffyMetroStation")), null, 2);
    }

    public static toResultTopServices(json: string): ResultTopServices {
        return cast(JSON.parse(json), r("ResultTopServices"));
    }

    public static resultTopServicesToJson(value: ResultTopServices): string {
        return JSON.stringify(uncast(value, r("ResultTopServices")), null, 2);
    }

    public static toClientController(json: string): ClientController {
        return cast(JSON.parse(json), r("ClientController"));
    }

    public static clientControllerToJson(value: ClientController): string {
        return JSON.stringify(uncast(value, r("ClientController")), null, 2);
    }

    public static toAddClient(json: string): AddClient {
        return cast(JSON.parse(json), r("AddClient"));
    }

    public static addClientToJson(value: AddClient): string {
        return JSON.stringify(uncast(value, r("AddClient")), null, 2);
    }

    public static toClientAddClientRequest(json: string): ClientAddClientRequest {
        return cast(JSON.parse(json), r("ClientAddClientRequest"));
    }

    public static clientAddClientRequestToJson(value: ClientAddClientRequest): string {
        return JSON.stringify(uncast(value, r("ClientAddClientRequest")), null, 2);
    }

    public static toClientAddClientRequestParams(json: string): ClientAddClientRequestParams {
        return cast(JSON.parse(json), r("ClientAddClientRequestParams"));
    }

    public static clientAddClientRequestParamsToJson(value: ClientAddClientRequestParams): string {
        return JSON.stringify(uncast(value, r("ClientAddClientRequestParams")), null, 2);
    }

    public static toFluffyBusiness(json: string): FluffyBusiness {
        return cast(JSON.parse(json), r("FluffyBusiness"));
    }

    public static fluffyBusinessToJson(value: FluffyBusiness): string {
        return JSON.stringify(uncast(value, r("FluffyBusiness")), null, 2);
    }

    public static toClient(json: string): Client {
        return cast(JSON.parse(json), r("Client"));
    }

    public static clientToJson(value: Client): string {
        return JSON.stringify(uncast(value, r("Client")), null, 2);
    }

    public static toParamsProfile(json: string): ParamsProfile {
        return cast(JSON.parse(json), r("ParamsProfile"));
    }

    public static paramsProfileToJson(value: ParamsProfile): string {
        return JSON.stringify(uncast(value, r("ParamsProfile")), null, 2);
    }

    public static toClientAddClientResponse(json: string): ClientAddClientResponse {
        return cast(JSON.parse(json), r("ClientAddClientResponse"));
    }

    public static clientAddClientResponseToJson(value: ClientAddClientResponse): string {
        return JSON.stringify(uncast(value, r("ClientAddClientResponse")), null, 2);
    }

    public static toClientAddClientResponseError(json: string): ClientAddClientResponseError {
        return cast(JSON.parse(json), r("ClientAddClientResponseError"));
    }

    public static clientAddClientResponseErrorToJson(value: ClientAddClientResponseError): string {
        return JSON.stringify(uncast(value, r("ClientAddClientResponseError")), null, 2);
    }

    public static toClientAddClientResponseResult(json: string): ClientAddClientResponseResult {
        return cast(JSON.parse(json), r("ClientAddClientResponseResult"));
    }

    public static clientAddClientResponseResultToJson(value: ClientAddClientResponseResult): string {
        return JSON.stringify(uncast(value, r("ClientAddClientResponseResult")), null, 2);
    }

    public static toResultBusiness(json: string): ResultBusiness {
        return cast(JSON.parse(json), r("ResultBusiness"));
    }

    public static resultBusinessToJson(value: ResultBusiness): string {
        return JSON.stringify(uncast(value, r("ResultBusiness")), null, 2);
    }

    public static toResultProfile(json: string): ResultProfile {
        return cast(JSON.parse(json), r("ResultProfile"));
    }

    public static resultProfileToJson(value: ResultProfile): string {
        return JSON.stringify(uncast(value, r("ResultProfile")), null, 2);
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
    "GBookingCoreV2": o([
        { json: "Common", js: "Common", typ: r("Common") },
        { json: "Controllers", js: "Controllers", typ: r("Controllers") },
        { json: "Models", js: "Models", typ: r("Models") },
    ], false),
    "Common": o([
        { json: "AuthErrorCodes", js: "AuthErrorCodes", typ: u(undefined, r("AuthErrorCodesObject")) },
        { json: "ErrorResponse", js: "ErrorResponse", typ: u(undefined, u(a("any"), true, r("ErrorResponseClass"), 3.14, 0, null, "")) },
        { json: "Request", js: "Request", typ: u(undefined, u(a("any"), true, r("RequestClass"), 3.14, 0, null, "")) },
        { json: "SuccessResponse", js: "SuccessResponse", typ: u(undefined, u(a("any"), true, r("SuccessResponseClass"), 3.14, 0, null, "")) },
    ], "any"),
    "AuthErrorCodesObject": o([
        { json: "code", js: "code", typ: 3.14 },
    ], "any"),
    "ErrorResponseClass": o([
        { json: "error", js: "error", typ: r("Error") },
        { json: "id", js: "id", typ: 3.14 },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
    ], false),
    "Error": o([
        { json: "code", js: "code", typ: 3.14 },
        { json: "data", js: "data", typ: u(undefined, "") },
        { json: "message", js: "message", typ: "" },
    ], "any"),
    "RequestClass": o([
        { json: "cred", js: "cred", typ: u(undefined, r("Cred")) },
        { json: "id", js: "id", typ: u(3.14, "") },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "method", js: "method", typ: "" },
        { json: "params", js: "params", typ: m("any") },
    ], false),
    "Cred": o([
        { json: "token", js: "token", typ: u(undefined, "") },
        { json: "user", js: "user", typ: u(undefined, "") },
    ], false),
    "SuccessResponseClass": o([
        { json: "id", js: "id", typ: 3.14 },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "result", js: "result", typ: m("any") },
    ], false),
    "Controllers": o([
        { json: "Business", js: "Business", typ: r("BusinessController") },
        { json: "Client", js: "Client", typ: r("ClientController") },
    ], false),
    "BusinessController": o([
        { json: "get_profile_by_id", js: "get_profile_by_id", typ: r("GetProfileById") },
    ], false),
    "GetProfileById": o([
        { json: "request", js: "request", typ: r("BusinessGetProfileByIdRequest") },
        { json: "response", js: "response", typ: r("BusinessGetProfileByIdResponse") },
    ], false),
    "BusinessGetProfileByIdRequest": o([
        { json: "cred", js: "cred", typ: u(undefined, r("Cred")) },
        { json: "id", js: "id", typ: u(3.14, "") },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "method", js: "method", typ: "" },
        { json: "params", js: "params", typ: r("BusinessGetProfileByIdRequestParams") },
    ], false),
    "BusinessGetProfileByIdRequestParams": o([
        { json: "business", js: "business", typ: r("PurpleBusiness") },
        { json: "desktop_discounts", js: "desktop_discounts", typ: u(undefined, true) },
        { json: "only_active_workers", js: "only_active_workers", typ: u(undefined, true) },
        { json: "show_inactive_workers", js: "show_inactive_workers", typ: u(undefined, true) },
        { json: "showcase_business_id", js: "showcase_business_id", typ: u(undefined, u(3.14, "")) },
        { json: "skip_worker_sorting", js: "skip_worker_sorting", typ: u(undefined, true) },
        { json: "with_billing", js: "with_billing", typ: u(undefined, true) },
        { json: "with_bop", js: "with_bop", typ: u(undefined, true) },
        { json: "with_campaigns", js: "with_campaigns", typ: u(undefined, true) },
        { json: "with_discounts", js: "with_discounts", typ: u(undefined, true) },
        { json: "with_discounts_from", js: "with_discounts_from", typ: u(undefined, Date) },
        { json: "with_discounts_to", js: "with_discounts_to", typ: u(undefined, Date) },
        { json: "with_networks", js: "with_networks", typ: u(undefined, true) },
        { json: "with_taxonomy_showcase", js: "with_taxonomy_showcase", typ: u(undefined, true) },
        { json: "worker_sorting_type", js: "worker_sorting_type", typ: u(undefined, r("WorkerSortingType")) },
    ], false),
    "PurpleBusiness": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "BusinessGetProfileByIdResponse": o([
        { json: "id", js: "id", typ: u(undefined, 3.14) },
        { json: "jsonrpc", js: "jsonrpc", typ: u(undefined, "") },
        { json: "result", js: "result", typ: u(undefined, r("BusinessGetProfileByIdResponseResult")) },
        { json: "error", js: "error", typ: u(undefined, r("BusinessGetProfileByIdResponseError")) },
    ], "any"),
    "BusinessGetProfileByIdResponseError": o([
        { json: "code", js: "code", typ: 3.14 },
        { json: "data", js: "data", typ: u(undefined, "") },
        { json: "message", js: "message", typ: "" },
    ], "any"),
    "BusinessGetProfileByIdResponseResult": o([
        { json: "active", js: "active", typ: u(undefined, true) },
        { json: "business", js: "business", typ: u(a("any"), true, r("BusinessClass"), 3.14, 0, null, "") },
        { json: "freeSms", js: "freeSms", typ: u(undefined, 3.14) },
        { json: "monthlyFreeSms", js: "monthlyFreeSms", typ: u(undefined, 3.14) },
        { json: "networks", js: "networks", typ: u(undefined, a(r("Network"))) },
        { json: "top_services", js: "top_services", typ: u(undefined, r("ResultTopServices")) },
        { json: "useDefaultSmsTemplate", js: "useDefaultSmsTemplate", typ: u(undefined, true) },
        { json: "yandexFeedType", js: "yandexFeedType", typ: u(undefined, r("YandexFeedType")) },
    ], "any"),
    "BusinessClass": o([
        { json: "active", js: "active", typ: u(undefined, true) },
        { json: "additionalSettings", js: "additionalSettings", typ: u(undefined, r("AdditionalSettings")) },
        { json: "allowCategoryBooking", js: "allowCategoryBooking", typ: u(undefined, true) },
        { json: "backoffice_configuration", js: "backoffice_configuration", typ: u(undefined, r("BackofficeConfigurationObject")) },
        { json: "backofficeConfiguration", js: "backofficeConfiguration", typ: u(undefined, r("BackofficeConfigurationClass")) },
        { json: "backofficeType", js: "backofficeType", typ: u(undefined, r("BackofficeType")) },
        { json: "cabinets", js: "cabinets", typ: u(undefined, a(r("Cabinet"))) },
        { json: "cabinetsEnabled", js: "cabinetsEnabled", typ: u(undefined, true) },
        { json: "callback_widget_configuration", js: "callback_widget_configuration", typ: u(undefined, r("CallbackWidgetConfiguration")) },
        { json: "consumables", js: "consumables", typ: u(undefined, a(r("Consumable"))) },
        { json: "created_on", js: "created_on", typ: u(undefined, Date) },
        { json: "defaultFilteredWorkers", js: "defaultFilteredWorkers", typ: u(undefined, a("")) },
        { json: "departments", js: "departments", typ: u(undefined, a(r("Department"))) },
        { json: "designs", js: "designs", typ: u(undefined, a(m("any"))) },
        { json: "extraID", js: "extraID", typ: u(undefined, "") },
        { json: "flatTaxonomyDisplay", js: "flatTaxonomyDisplay", typ: u(undefined, true) },
        { json: "general_info", js: "general_info", typ: r("BusinessInfo") },
        { json: "group", js: "group", typ: u(undefined, r("Group")) },
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "integration_data", js: "integration_data", typ: u(undefined, m("any")) },
        { json: "mini_widget_configuration", js: "mini_widget_configuration", typ: r("MiniWidgetConfiguration") },
        { json: "mobileData", js: "mobileData", typ: u(undefined, a("any")) },
        { json: "notifications", js: "notifications", typ: u(undefined, a("any")) },
        { json: "resources", js: "resources", typ: a(u(a("any"), true, r("ResourceClass"), 3.14, 0, null, "")) },
        { json: "stateLevelHolidaysNotWorking", js: "stateLevelHolidaysNotWorking", typ: u(undefined, true) },
        { json: "taxonomies", js: "taxonomies", typ: a(r("BusinessTaxonomy")) },
        { json: "taxonomiesComplex", js: "taxonomiesComplex", typ: u(undefined, a(r("TaxonomiesComplex"))) },
        { json: "taxonomy_tree_capacity", js: "taxonomy_tree_capacity", typ: u(undefined, a(m("any"))) },
        { json: "top_services", js: "top_services", typ: u(undefined, r("BusinessTopServices")) },
        { json: "vertical", js: "vertical", typ: u(undefined, "") },
        { json: "widget_configuration", js: "widget_configuration", typ: r("WidgetConfiguration") },
        { json: "yandexFeedType", js: "yandexFeedType", typ: u(undefined, "") },
    ], false),
    "AdditionalSettings": o([
        { json: "appointmentExtensionAmount", js: "appointmentExtensionAmount", typ: u(undefined, 3.14) },
        { json: "appointmentExtensionType", js: "appointmentExtensionType", typ: u(undefined, r("AppointmentExtensionType")) },
    ], "any"),
    "BackofficeConfigurationClass": o([
        { json: "adjacentTaxonomiesTreshold", js: "adjacentTaxonomiesTreshold", typ: u(undefined, 3.14) },
        { json: "allowHideServiceForBooking", js: "allowHideServiceForBooking", typ: u(undefined, true) },
        { json: "allowHideWorkersFromSchdeule", js: "allowHideWorkersFromSchdeule", typ: u(undefined, true) },
        { json: "allowSmsTranslit", js: "allowSmsTranslit", typ: u(undefined, true) },
        { json: "appointmentFutureMoving", js: "appointmentFutureMoving", typ: u(undefined, true) },
        { json: "blockNotificationForAnyAvailableAdjacentService", js: "blockNotificationForAnyAvailableAdjacentService", typ: u(undefined, true) },
        { json: "cabinetsEnabled", js: "cabinetsEnabled", typ: u(undefined, true) },
        { json: "checkClientOverlapping", js: "checkClientOverlapping", typ: u(undefined, true) },
        { json: "customOnlinePaymentConfirmationTemplate", js: "customOnlinePaymentConfirmationTemplate", typ: u(undefined, "") },
        { json: "defaultGTScheduleDayView", js: "defaultGTScheduleDayView", typ: u(undefined, true) },
        { json: "disableAppointmentClientInlineEditor", js: "disableAppointmentClientInlineEditor", typ: u(undefined, true) },
        { json: "editAppExtraId", js: "editAppExtraId", typ: u(undefined, true) },
        { json: "editTaxonomyChildren", js: "editTaxonomyChildren", typ: u(undefined, true) },
        { json: "editTaxonomyVisitType", js: "editTaxonomyVisitType", typ: u(undefined, true) },
        { json: "enableBlackList", js: "enableBlackList", typ: u(undefined, true) },
        { json: "enableCalculateShedule", js: "enableCalculateShedule", typ: u(undefined, true) },
        { json: "enableClientCard", js: "enableClientCard", typ: u(undefined, true) },
        { json: "enableClientLanguage", js: "enableClientLanguage", typ: u(undefined, true) },
        { json: "enableClientMedicalCardReport", js: "enableClientMedicalCardReport", typ: u(undefined, true) },
        { json: "enableCustomOnlinePaymentConfirmation", js: "enableCustomOnlinePaymentConfirmation", typ: u(undefined, true) },
        { json: "enableExtendedPhone", js: "enableExtendedPhone", typ: u(undefined, true) },
        { json: "enableExtendedRecordsClientStatistics", js: "enableExtendedRecordsClientStatistics", typ: u(undefined, true) },
        { json: "enableMasterImportance", js: "enableMasterImportance", typ: u(undefined, true) },
        { json: "enableServiceTimeLimit", js: "enableServiceTimeLimit", typ: u(undefined, true) },
        { json: "enableSourceChoice", js: "enableSourceChoice", typ: u(undefined, true) },
        { json: "enableTaxonomyChildrenAgeCheck", js: "enableTaxonomyChildrenAgeCheck", typ: u(undefined, true) },
        { json: "exportToExcelRemovedClients", js: "exportToExcelRemovedClients", typ: u(undefined, true) },
        { json: "feedbackCustomerPortalMessage", js: "feedbackCustomerPortalMessage", typ: u(undefined, "") },
        { json: "feedbackCustomerPortalThankYouMessage", js: "feedbackCustomerPortalThankYouMessage", typ: u(undefined, "") },
        { json: "feedbackCustomerPortalTitle", js: "feedbackCustomerPortalTitle", typ: u(undefined, "") },
        { json: "feedBackMinRating", js: "feedBackMinRating", typ: u(undefined, r("FeedBackMinRating")) },
        { json: "finId", js: "finId", typ: u(undefined, "") },
        { json: "finName", js: "finName", typ: u(undefined, "") },
        { json: "hideCustomerPortalFooter", js: "hideCustomerPortalFooter", typ: u(undefined, true) },
        { json: "highlightedResource", js: "highlightedResource", typ: u(undefined, true) },
        { json: "manualExceptionSupport", js: "manualExceptionSupport", typ: u(undefined, true) },
        { json: "noInternetAlert", js: "noInternetAlert", typ: u(undefined, true) },
        { json: "pastTimeEdit", js: "pastTimeEdit", typ: u(undefined, 3.14) },
        { json: "paymentProvider", js: "paymentProvider", typ: u(undefined, r("PaymentProvider")) },
        { json: "readonlyResourceSchedule", js: "readonlyResourceSchedule", typ: u(undefined, true) },
        { json: "resourceTimetableType", js: "resourceTimetableType", typ: u(undefined, r("ResourceTimetableType")) },
        { json: "revisionVersion", js: "revisionVersion", typ: u(undefined, 3.14) },
        { json: "schduleWeekViewIsDefault", js: "schduleWeekViewIsDefault", typ: u(undefined, true) },
        { json: "scheduleDefaultWorkersLimit", js: "scheduleDefaultWorkersLimit", typ: u(undefined, 3.14) },
        { json: "schedulerWeekViewType", js: "schedulerWeekViewType", typ: u(undefined, r("SchedulerWeekViewType")) },
        { json: "scheduleWorkerHours", js: "scheduleWorkerHours", typ: u(undefined, true) },
        { json: "showAdditionalFields", js: "showAdditionalFields", typ: u(undefined, true) },
        { json: "showAddress", js: "showAddress", typ: u(undefined, true) },
        { json: "showBirthDate", js: "showBirthDate", typ: u(undefined, true) },
        { json: "showClientAppear", js: "showClientAppear", typ: u(undefined, true) },
        { json: "showClientAppearOnSchedule", js: "showClientAppearOnSchedule", typ: u(undefined, true) },
        { json: "showClientBirthdayFilter", js: "showClientBirthdayFilter", typ: u(undefined, true) },
        { json: "showClientContractNumber", js: "showClientContractNumber", typ: u(undefined, true) },
        { json: "showClientImage", js: "showClientImage", typ: u(undefined, true) },
        { json: "showClientPayment", js: "showClientPayment", typ: u(undefined, true) },
        { json: "showDefaulterBlockscreen", js: "showDefaulterBlockscreen", typ: u(undefined, true) },
        { json: "showDeliveryStatus", js: "showDeliveryStatus", typ: u(undefined, true) },
        { json: "showDepartmentFilter", js: "showDepartmentFilter", typ: u(undefined, true) },
        { json: "showDepartments", js: "showDepartments", typ: u(undefined, true) },
        { json: "showDepartmentsConfiguration", js: "showDepartmentsConfiguration", typ: u(undefined, true) },
        { json: "showEmail", js: "showEmail", typ: u(undefined, true) },
        { json: "showExtraClientInfo", js: "showExtraClientInfo", typ: u(undefined, true) },
        { json: "showFax", js: "showFax", typ: u(undefined, true) },
        { json: "showFiredWorkerAppointmentAlert", js: "showFiredWorkerAppointmentAlert", typ: u(undefined, true) },
        { json: "showFirstAvailableSlot", js: "showFirstAvailableSlot", typ: u(undefined, true) },
        { json: "showGapWindow", js: "showGapWindow", typ: u(undefined, true) },
        { json: "showGender", js: "showGender", typ: u(undefined, true) },
        { json: "showGenderInRecords", js: "showGenderInRecords", typ: u(undefined, true) },
        { json: "showGeneratableReportsScreen", js: "showGeneratableReportsScreen", typ: u(undefined, true) },
        { json: "showHouseNumber", js: "showHouseNumber", typ: u(undefined, true) },
        { json: "showIsraelCity", js: "showIsraelCity", typ: u(undefined, true) },
        { json: "showKupatHolim", js: "showKupatHolim", typ: u(undefined, true) },
        { json: "showLeadsScreen", js: "showLeadsScreen", typ: u(undefined, true) },
        { json: "showManualChanges", js: "showManualChanges", typ: u(undefined, true) },
        { json: "showPassportId", js: "showPassportId", typ: u(undefined, true) },
        { json: "showRooms", js: "showRooms", typ: u(undefined, true) },
        { json: "showSeasonTickets", js: "showSeasonTickets", typ: u(undefined, true) },
        { json: "showTaxonomyChildren", js: "showTaxonomyChildren", typ: u(undefined, true) },
        { json: "showTaxonomyLocalization", js: "showTaxonomyLocalization", typ: u(undefined, true) },
        { json: "showTaxonomyVisitType", js: "showTaxonomyVisitType", typ: u(undefined, true) },
        { json: "showTestRecord", js: "showTestRecord", typ: u(undefined, true) },
        { json: "showUTM", js: "showUTM", typ: u(undefined, true) },
        { json: "showWidgetColorTheme", js: "showWidgetColorTheme", typ: u(undefined, true) },
        { json: "showWorkerDescriptionInEvent", js: "showWorkerDescriptionInEvent", typ: u(undefined, true) },
        { json: "showWorkerExtraId", js: "showWorkerExtraId", typ: u(undefined, true) },
        { json: "showWorkerStatus", js: "showWorkerStatus", typ: u(undefined, true) },
        { json: "skipAppointmentPriceUpdate", js: "skipAppointmentPriceUpdate", typ: u(undefined, true) },
        { json: "skipCancelIfClientNotAppear", js: "skipCancelIfClientNotAppear", typ: u(undefined, true) },
        { json: "skipServiceFiltering", js: "skipServiceFiltering", typ: u(undefined, true) },
        { json: "splitFullNameXlsExport", js: "splitFullNameXlsExport", typ: u(undefined, true) },
        { json: "stateLevelHolidays", js: "stateLevelHolidays", typ: u(undefined, a(m("any"))) },
        { json: "stateLevelHolidaysNotWorking", js: "stateLevelHolidaysNotWorking", typ: u(undefined, true) },
        { json: "taxonomyChildrenMaxAge", js: "taxonomyChildrenMaxAge", typ: u(undefined, 3.14) },
        { json: "useAdditionalDurations", js: "useAdditionalDurations", typ: u(undefined, true) },
        { json: "useAdjacentTaxonomies", js: "useAdjacentTaxonomies", typ: u(undefined, true) },
        { json: "useAdjacentTaxonomiesSlotSplitting", js: "useAdjacentTaxonomiesSlotSplitting", typ: u(undefined, true) },
        { json: "useGtAppMethod", js: "useGtAppMethod", typ: u(undefined, true) },
        { json: "workWeekEnd", js: "workWeekEnd", typ: u(undefined, 3.14) },
        { json: "workWeekStart", js: "workWeekStart", typ: u(undefined, 3.14) },
    ], false),
    "BackofficeConfigurationObject": o([
        { json: "enableMasterImportance", js: "enableMasterImportance", typ: u(undefined, true) },
        { json: "resourceTimetableType", js: "resourceTimetableType", typ: u(undefined, r("ResourceTimetableType")) },
    ], "any"),
    "Cabinet": o([
        { json: "active", js: "active", typ: u(undefined, true) },
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], false),
    "CallbackWidgetConfiguration": o([
        { json: "title1", js: "title1", typ: u(undefined, "") },
        { json: "title2", js: "title2", typ: u(undefined, "") },
    ], "any"),
    "Consumable": o([
        { json: "extraID", js: "extraID", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "quantity", js: "quantity", typ: 3.14 },
    ], "any"),
    "Department": o([
        { json: "id", js: "id", typ: "" },
        { json: "id_", js: "id_", typ: u(undefined, 3.14) },
        { json: "name", js: "name", typ: "" },
    ], false),
    "BusinessInfo": o([
        { json: "accepted_currency", js: "accepted_currency", typ: u(undefined, a(r("CurrencyList"))) },
        { json: "additional_info", js: "additional_info", typ: u(undefined, u(null, "")) },
        { json: "additionalFields", js: "additionalFields", typ: u(undefined, a(u(a("any"), true, 3.14, 0, null, r("AdditionalFieldsObject"), ""))) },
        { json: "address", js: "address", typ: u(undefined, a(u(a("any"), true, r("AddressClass"), 3.14, 0, null, ""))) },
        { json: "autoAcceptAppointment", js: "autoAcceptAppointment", typ: u(undefined, true) },
        { json: "businessShowcaseAliases", js: "businessShowcaseAliases", typ: u(undefined, a(r("BusinessShowcaseAlias"))) },
        { json: "contactName", js: "contactName", typ: u(undefined, "") },
        { json: "date_joined", js: "date_joined", typ: u(undefined, Date) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "email", js: "email", typ: u(undefined, "") },
        { json: "fax", js: "fax", typ: u(undefined, a(u(a("any"), true, r("PhoneClass"), 3.14, 0, null, ""))) },
        { json: "images", js: "images", typ: u(undefined, a("")) },
        { json: "instant_messaging", js: "instant_messaging", typ: u(undefined, a(m("any"))) },
        { json: "isShowcase", js: "isShowcase", typ: u(undefined, true) },
        { json: "language", js: "language", typ: u(undefined, r("LanguageList")) },
        { json: "logo_url", js: "logo_url", typ: u(undefined, u(null, "")) },
        { json: "marketingNotifications", js: "marketingNotifications", typ: u(undefined, r("MarketingNotifications")) },
        { json: "metro", js: "metro", typ: u(undefined, r("Metro")) },
        { json: "min_booking_time", js: "min_booking_time", typ: u(undefined, u(3.14, null)) },
        { json: "mobile", js: "mobile", typ: u(undefined, a(u(a("any"), true, r("PhoneClass"), 3.14, 0, null, ""))) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "networkID", js: "networkID", typ: u(undefined, u(3.14, null)) },
        { json: "newboEnabledFor", js: "newboEnabledFor", typ: u(undefined, a("")) },
        { json: "paymentMethods", js: "paymentMethods", typ: u(undefined, r("PaymentMethods")) },
        { json: "phone", js: "phone", typ: u(undefined, a(u(a("any"), true, r("PhoneClass"), 3.14, 0, null, ""))) },
        { json: "phone_mask", js: "phone_mask", typ: u(undefined, u(null, "")) },
        { json: "pricingType", js: "pricingType", typ: u(undefined, r("PricingType")) },
        { json: "revisionVersion", js: "revisionVersion", typ: u(undefined, 3.14) },
        { json: "schedulerTick", js: "schedulerTick", typ: u(undefined, 3.14) },
        { json: "shortName", js: "shortName", typ: u(undefined, u(null, "")) },
        { json: "showAppointmentColor", js: "showAppointmentColor", typ: u(undefined, true) },
        { json: "showAppointmentTooltip", js: "showAppointmentTooltip", typ: u(undefined, true) },
        { json: "showcases", js: "showcases", typ: u(undefined, a(r("Showcase"))) },
        { json: "showResourceWorkStatistics", js: "showResourceWorkStatistics", typ: u(undefined, true) },
        { json: "showWorkerProfession", js: "showWorkerProfession", typ: u(undefined, true) },
        { json: "skipBilling", js: "skipBilling", typ: u(undefined, true) },
        { json: "smsDuplicateFilter", js: "smsDuplicateFilter", typ: u(undefined, r("SmsDuplicateFilter")) },
        { json: "social_network", js: "social_network", typ: u(undefined, a(r("SocialNetworkSchema"))) },
        { json: "timetable", js: "timetable", typ: u(undefined, r("Timetable")) },
        { json: "timezone", js: "timezone", typ: u(undefined, "") },
        { json: "verticalTranslation", js: "verticalTranslation", typ: u(undefined, r("VerticalTranslation")) },
        { json: "website", js: "website", typ: u(undefined, "") },
    ], false),
    "AdditionalFieldsObject": o([
        { json: "name", js: "name", typ: "" },
        { json: "requiredField", js: "requiredField", typ: true },
        { json: "shortName", js: "shortName", typ: "" },
        { json: "type", js: "type", typ: r("AdditionalFieldsType") },
        { json: "value", js: "value", typ: "" },
    ], "any"),
    "AddressClass": o([
        { json: "address", js: "address", typ: u(undefined, "") },
        { json: "address_add", js: "address_add", typ: u(undefined, "") },
        { json: "admin_area", js: "admin_area", typ: u(undefined, "") },
        { json: "admin_area_type", js: "admin_area_type", typ: u(undefined, "") },
        { json: "building", js: "building", typ: u(undefined, "") },
        { json: "corps", js: "corps", typ: u(undefined, "") },
        { json: "country", js: "country", typ: r("Country") },
        { json: "group", js: "group", typ: u(undefined, "") },
        { json: "house_add", js: "house_add", typ: u(undefined, "") },
        { json: "kilometer", js: "kilometer", typ: u(undefined, "") },
        { json: "latitude", js: "latitude", typ: u(undefined, "") },
        { json: "locality", js: "locality", typ: u(undefined, "") },
        { json: "locality_type", js: "locality_type", typ: u(undefined, "") },
        { json: "longitude", js: "longitude", typ: u(undefined, "") },
        { json: "metroStations", js: "metroStations", typ: u(undefined, a(r("PurpleMetroStation"))) },
        { json: "number", js: "number", typ: u(undefined, "") },
        { json: "office", js: "office", typ: u(undefined, "") },
        { json: "possesion", js: "possesion", typ: u(undefined, "") },
        { json: "street", js: "street", typ: u(undefined, "") },
        { json: "street_type", js: "street_type", typ: u(undefined, "") },
        { json: "sub_admin_area", js: "sub_admin_area", typ: u(undefined, "") },
        { json: "sub_admin_area_type", js: "sub_admin_area_type", typ: u(undefined, "") },
        { json: "sub_locality", js: "sub_locality", typ: u(undefined, "") },
        { json: "sub_locality_type", js: "sub_locality_type", typ: u(undefined, "") },
        { json: "way", js: "way", typ: u(undefined, "") },
        { json: "zip_code", js: "zip_code", typ: u(undefined, "") },
    ], false),
    "PurpleMetroStation": o([
        { json: "_id", js: "_id", typ: u(undefined, "") },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "name", js: "name", typ: "" },
    ], false),
    "BusinessShowcaseAlias": o([
        { json: "internalID", js: "internalID", typ: u(undefined, "") },
    ], "any"),
    "PhoneClass": o([
        { json: "area_code", js: "area_code", typ: "" },
        { json: "country_code", js: "country_code", typ: "" },
        { json: "number", js: "number", typ: "" },
    ], false),
    "MarketingNotifications": o([
        { json: "accepted", js: "accepted", typ: true },
        { json: "active", js: "active", typ: true },
        { json: "useSmsAlphaName", js: "useSmsAlphaName", typ: true },
    ], false),
    "Metro": o([
        { json: "color", js: "color", typ: u(undefined, "") },
        { json: "distance", js: "distance", typ: u(undefined, 3.14) },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], false),
    "Showcase": o([
        { json: "baseBusinessID", js: "baseBusinessID", typ: u(undefined, "") },
    ], false),
    "SmsDuplicateFilter": o([
        { json: "active", js: "active", typ: u(undefined, true) },
    ], false),
    "SocialNetworkSchema": o([
        { json: "handle", js: "handle", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "social_network", js: "social_network", typ: r("SocialNetwork") },
        { json: "url", js: "url", typ: "" },
    ], "any"),
    "Timetable": o([
        { json: "active", js: "active", typ: u(undefined, true) },
        { json: "week", js: "week", typ: u(undefined, r("Week")) },
    ], false),
    "Week": o([
        { json: "fri", js: "fri", typ: a(r("TimeFrame")) },
        { json: "mon", js: "mon", typ: a(r("TimeFrame")) },
        { json: "sat", js: "sat", typ: a(r("TimeFrame")) },
        { json: "sun", js: "sun", typ: a(r("TimeFrame")) },
        { json: "thu", js: "thu", typ: a(r("TimeFrame")) },
        { json: "tue", js: "tue", typ: a(r("TimeFrame")) },
        { json: "wed", js: "wed", typ: a(r("TimeFrame")) },
    ], false),
    "TimeFrame": o([
        { json: "capacity", js: "capacity", typ: u(undefined, 3.14) },
        { json: "end", js: "end", typ: 3.14 },
        { json: "endDate", js: "endDate", typ: u(undefined, u(Date, 3.14)) },
        { json: "extraId", js: "extraId", typ: u(undefined, "") },
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "resources", js: "resources", typ: u(undefined, a("")) },
        { json: "roomID", js: "roomID", typ: u(undefined, "") },
        { json: "start", js: "start", typ: 3.14 },
        { json: "startDate", js: "startDate", typ: u(undefined, u(Date, 3.14)) },
    ], false),
    "MiniWidgetConfiguration": o([
        { json: "fields", js: "fields", typ: u(undefined, a(r("Field"))) },
        { json: "title1", js: "title1", typ: u(undefined, "") },
        { json: "title2", js: "title2", typ: u(undefined, "") },
    ], "any"),
    "ResourceClass": o([
        { json: "additionalExtraId", js: "additionalExtraId", typ: u(undefined, a("")) },
        { json: "capacity", js: "capacity", typ: 3.14 },
        { json: "color", js: "color", typ: u(undefined, "") },
        { json: "degree", js: "degree", typ: u(undefined, "") },
        { json: "departmentId", js: "departmentId", typ: u(undefined, "") },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "displayInSchedule", js: "displayInSchedule", typ: u(undefined, true) },
        { json: "displayInWidget", js: "displayInWidget", typ: true },
        { json: "email", js: "email", typ: u(undefined, "") },
        { json: "emailEnabled", js: "emailEnabled", typ: u(undefined, true) },
        { json: "evenOddTimetable", js: "evenOddTimetable", typ: r("EvenOddTimetable") },
        { json: "exceptions", js: "exceptions", typ: u(undefined, a("any")) },
        { json: "experience", js: "experience", typ: u(undefined, Date) },
        { json: "extraDescription", js: "extraDescription", typ: u(undefined, "") },
        { json: "extraId", js: "extraId", typ: u(undefined, "") },
        { json: "extraLink", js: "extraLink", typ: u(undefined, "") },
        { json: "extraMediaId", js: "extraMediaId", typ: u(undefined, "") },
        { json: "icon_url", js: "icon_url", typ: u(undefined, u(null, "")) },
        { json: "id", js: "id", typ: "" },
        { json: "image", js: "image", typ: u(undefined, "") },
        { json: "lastSU", js: "lastSU", typ: u(undefined, Date) },
        { json: "level", js: "level", typ: 3.14 },
        { json: "loaned", js: "loaned", typ: true },
        { json: "loanedFrom", js: "loanedFrom", typ: u(undefined, "") },
        { json: "loanedTo", js: "loanedTo", typ: u(undefined, "") },
        { json: "location", js: "location", typ: r("ResourceLocation") },
        { json: "manualChanges", js: "manualChanges", typ: true },
        { json: "middleName", js: "middleName", typ: u(undefined, "") },
        { json: "name", js: "name", typ: "" },
        { json: "nickname", js: "nickname", typ: u(undefined, "") },
        { json: "order", js: "order", typ: u(undefined, 3.14) },
        { json: "orderWeight", js: "orderWeight", typ: u(undefined, u(3.14, null, "")) },
        { json: "origin_general_info", js: "origin_general_info", typ: u(undefined, r("Info")) },
        { json: "originBusinessID", js: "originBusinessID", typ: u(undefined, "") },
        { json: "originTaxonomies", js: "originTaxonomies", typ: u(undefined, a("")) },
        { json: "perk", js: "perk", typ: u(undefined, "") },
        { json: "phone", js: "phone", typ: u(a("any"), true, r("PhoneClass"), 3.14, 0, null, "") },
        { json: "profession", js: "profession", typ: u(undefined, "") },
        { json: "profile", js: "profile", typ: u(undefined, r("ИнформацияОПрофилеРаботника")) },
        { json: "rating", js: "rating", typ: u(undefined, 3.14) },
        { json: "readonlyTaxonomies", js: "readonlyTaxonomies", typ: u(undefined, a("")) },
        { json: "revisionVersion", js: "revisionVersion", typ: 3.14 },
        { json: "scheduleIsEmpty", js: "scheduleIsEmpty", typ: u(undefined, true) },
        { json: "siteId", js: "siteId", typ: u(undefined, "") },
        { json: "smsEnabled", js: "smsEnabled", typ: u(undefined, true) },
        { json: "status", js: "status", typ: u(undefined, r("Status")) },
        { json: "surname", js: "surname", typ: "" },
        { json: "taxonomies", js: "taxonomies", typ: a("") },
        { json: "taxonomyChildren", js: "taxonomyChildren", typ: a(r("ResourceTaxonomyChildren")) },
        { json: "taxonomyLevels", js: "taxonomyLevels", typ: a(r("ResourceTaxonomyLevel")) },
        { json: "timetable", js: "timetable", typ: r("Timetable") },
        { json: "userData", js: "userData", typ: u(undefined, m("any")) },
        { json: "workPlace", js: "workPlace", typ: u(undefined, "") },
    ], false),
    "EvenOddTimetable": o([
        { json: "even", js: "even", typ: a(r("TimeFrame")) },
        { json: "odd", js: "odd", typ: a(r("TimeFrame")) },
        { json: "startPeriod", js: "startPeriod", typ: r("StartPeriod") },
    ], "any"),
    "ResourceLocation": o([
        { json: "latitude", js: "latitude", typ: u(undefined, 3.14) },
        { json: "longitude", js: "longitude", typ: u(undefined, 3.14) },
        { json: "time", js: "time", typ: u(undefined, "") },
    ], "any"),
    "Info": o([
        { json: "accepted_currency", js: "accepted_currency", typ: u(undefined, a(r("CurrencyList"))) },
        { json: "additional_info", js: "additional_info", typ: u(undefined, u(null, "")) },
        { json: "additionalFields", js: "additionalFields", typ: u(undefined, a(u(a("any"), true, 3.14, 0, null, r("AdditionalFieldsObject"), ""))) },
        { json: "address", js: "address", typ: u(undefined, a(u(a("any"), true, r("AddressClass"), 3.14, 0, null, ""))) },
        { json: "autoAcceptAppointment", js: "autoAcceptAppointment", typ: u(undefined, true) },
        { json: "businessShowcaseAliases", js: "businessShowcaseAliases", typ: u(undefined, a(r("BusinessShowcaseAlias"))) },
        { json: "contactName", js: "contactName", typ: u(undefined, "") },
        { json: "date_joined", js: "date_joined", typ: u(undefined, Date) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "email", js: "email", typ: u(undefined, "") },
        { json: "fax", js: "fax", typ: u(undefined, a(u(a("any"), true, r("PhoneClass"), 3.14, 0, null, ""))) },
        { json: "images", js: "images", typ: u(undefined, a("")) },
        { json: "instant_messaging", js: "instant_messaging", typ: u(undefined, a(m("any"))) },
        { json: "isShowcase", js: "isShowcase", typ: u(undefined, true) },
        { json: "language", js: "language", typ: u(undefined, r("LanguageList")) },
        { json: "logo_url", js: "logo_url", typ: u(undefined, u(null, "")) },
        { json: "marketingNotifications", js: "marketingNotifications", typ: u(undefined, r("MarketingNotifications")) },
        { json: "metro", js: "metro", typ: u(undefined, r("Metro")) },
        { json: "min_booking_time", js: "min_booking_time", typ: u(undefined, u(3.14, null)) },
        { json: "mobile", js: "mobile", typ: u(undefined, a(u(a("any"), true, r("PhoneClass"), 3.14, 0, null, ""))) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "networkID", js: "networkID", typ: u(undefined, u(3.14, null)) },
        { json: "newboEnabledFor", js: "newboEnabledFor", typ: u(undefined, a("")) },
        { json: "paymentMethods", js: "paymentMethods", typ: u(undefined, r("PaymentMethods")) },
        { json: "phone", js: "phone", typ: u(undefined, a(u(a("any"), true, r("PhoneClass"), 3.14, 0, null, ""))) },
        { json: "phone_mask", js: "phone_mask", typ: u(undefined, u(null, "")) },
        { json: "pricingType", js: "pricingType", typ: u(undefined, r("PricingType")) },
        { json: "revisionVersion", js: "revisionVersion", typ: u(undefined, 3.14) },
        { json: "schedulerTick", js: "schedulerTick", typ: u(undefined, 3.14) },
        { json: "shortName", js: "shortName", typ: u(undefined, u(null, "")) },
        { json: "showAppointmentColor", js: "showAppointmentColor", typ: u(undefined, true) },
        { json: "showAppointmentTooltip", js: "showAppointmentTooltip", typ: u(undefined, true) },
        { json: "showcases", js: "showcases", typ: u(undefined, a(r("Showcase"))) },
        { json: "showResourceWorkStatistics", js: "showResourceWorkStatistics", typ: u(undefined, true) },
        { json: "showWorkerProfession", js: "showWorkerProfession", typ: u(undefined, true) },
        { json: "skipBilling", js: "skipBilling", typ: u(undefined, true) },
        { json: "smsDuplicateFilter", js: "smsDuplicateFilter", typ: u(undefined, r("SmsDuplicateFilter")) },
        { json: "social_network", js: "social_network", typ: u(undefined, a(r("SocialNetworkSchema"))) },
        { json: "timetable", js: "timetable", typ: u(undefined, r("Timetable")) },
        { json: "timezone", js: "timezone", typ: u(undefined, "") },
        { json: "verticalTranslation", js: "verticalTranslation", typ: u(undefined, r("VerticalTranslation")) },
        { json: "website", js: "website", typ: u(undefined, "") },
    ], false),
    "ИнформацияОПрофилеРаботника": o([
        { json: "accessType", js: "accessType", typ: r("AccessType") },
        { json: "email", js: "email", typ: "" },
        { json: "profileID", js: "profileID", typ: "" },
        { json: "userID", js: "userID", typ: "" },
    ], "any"),
    "ResourceTaxonomyChildren": o([
        { json: "children", js: "children", typ: true },
        { json: "taxonomyID", js: "taxonomyID", typ: "" },
    ], "any"),
    "ResourceTaxonomyLevel": o([
        { json: "id", js: "id", typ: "" },
        { json: "level", js: "level", typ: 3.14 },
    ], "any"),
    "BusinessTaxonomy": o([
        { json: "active", js: "active", typ: u(undefined, true) },
        { json: "additionalDurations", js: "additionalDurations", typ: u(undefined, a(r("AdditionalDuration"))) },
        { json: "additionalPrices", js: "additionalPrices", typ: u(undefined, a(r("BusinessTaxonomyPrice"))) },
        { json: "additionalProducts", js: "additionalProducts", typ: u(undefined, a(r("BusinessTaxonomyProduct"))) },
        { json: "additionalTaxonomyExtraId", js: "additionalTaxonomyExtraId", typ: u(undefined, a(m("any"))) },
        { json: "adjacentSameTimeStart", js: "adjacentSameTimeStart", typ: u(undefined, true) },
        { json: "adjacentTaxonomies", js: "adjacentTaxonomies", typ: u(undefined, a(r("AdjacentTaxonomy"))) },
        { json: "alias", js: "alias", typ: u(undefined, m("any")) },
        { json: "allowBookingInBO", js: "allowBookingInBO", typ: u(undefined, true) },
        { json: "allowNextBookingCount", js: "allowNextBookingCount", typ: u(undefined, 3.14) },
        { json: "allowNextBookingInDays", js: "allowNextBookingInDays", typ: u(undefined, 3.14) },
        { json: "allowNextBookingInDaysText", js: "allowNextBookingInDaysText", typ: u(undefined, "") },
        { json: "cabinets", js: "cabinets", typ: u(undefined, a("")) },
        { json: "cabinetsEnabled", js: "cabinetsEnabled", typ: u(undefined, true) },
        { json: "capacity", js: "capacity", typ: u(undefined, 3.14) },
        { json: "capacity_decrease", js: "capacity_decrease", typ: u(undefined, 3.14) },
        { json: "chargeUnitsStep", js: "chargeUnitsStep", typ: u(undefined, 3.14) },
        { json: "childrenTaxonomyTypes", js: "childrenTaxonomyTypes", typ: u(undefined, a(r("ChildrenTaxonomyType"))) },
        { json: "color", js: "color", typ: u(undefined, "") },
        { json: "confirmationAlert", js: "confirmationAlert", typ: u(undefined, "") },
        { json: "confirmationSmsAlert", js: "confirmationSmsAlert", typ: u(undefined, "") },
        { json: "dateLimits", js: "dateLimits", typ: u(undefined, a(r("DateLimit"))) },
        { json: "dateLimitType", js: "dateLimitType", typ: u(undefined, r("DateLimitType")) },
        { json: "designs", js: "designs", typ: u(undefined, a("")) },
        { json: "discounts", js: "discounts", typ: u(undefined, u(a("any"), true, r("DiscountClass"), 3.14, 0, null, "")) },
        { json: "displayInWidget", js: "displayInWidget", typ: u(undefined, true) },
        { json: "duration", js: "duration", typ: u(undefined, 3.14) },
        { json: "exceptions", js: "exceptions", typ: u(undefined, a("any")) },
        { json: "extraDescription", js: "extraDescription", typ: u(undefined, "") },
        { json: "extraId", js: "extraId", typ: u(undefined, "") },
        { json: "extraLink", js: "extraLink", typ: u(undefined, "") },
        { json: "forPay", js: "forPay", typ: u(undefined, true) },
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "images", js: "images", typ: u(undefined, a("")) },
        { json: "isOther", js: "isOther", typ: u(undefined, true) },
        { json: "lastModified", js: "lastModified", typ: u(undefined, Date) },
        { json: "leaves", js: "leaves", typ: u(undefined, a("")) },
        { json: "manualChanges", js: "manualChanges", typ: u(undefined, true) },
        { json: "newTaxonomy", js: "newTaxonomy", typ: u(undefined, true) },
        { json: "onlineMode", js: "onlineMode", typ: u(undefined, r("OnlineMode")) },
        { json: "onlyAfterTaxonomies", js: "onlyAfterTaxonomies", typ: u(undefined, a("")) },
        { json: "order", js: "order", typ: u(undefined, 3.14) },
        { json: "parallelTaxonomies", js: "parallelTaxonomies", typ: u(undefined, a("")) },
        { json: "popularity", js: "popularity", typ: u(undefined, 3.14) },
        { json: "price", js: "price", typ: u(undefined, r("Price")) },
        { json: "priceLink", js: "priceLink", typ: u(undefined, "") },
        { json: "rooms", js: "rooms", typ: u(undefined, a("")) },
        { json: "showcaseItems", js: "showcaseItems", typ: u(undefined, a(r("ShowcaseItem"))) },
        { json: "showcases", js: "showcases", typ: u(undefined, a(r("TaxonomyShowcase"))) },
        { json: "showcaseTaxonomyID", js: "showcaseTaxonomyID", typ: u(undefined, "") },
        { json: "siteId", js: "siteId", typ: u(undefined, "") },
        { json: "specialCabinet", js: "specialCabinet", typ: u(undefined, "") },
        { json: "taxonomyAppExtraID", js: "taxonomyAppExtraID", typ: u(undefined, "") },
        { json: "taxonomyCategoryExtraID", js: "taxonomyCategoryExtraID", typ: u(undefined, "") },
        { json: "taxonomyParentID", js: "taxonomyParentID", typ: u(undefined, "") },
        { json: "taxonomyType", js: "taxonomyType", typ: u(undefined, r("TaxonomyType")) },
        { json: "timetable", js: "timetable", typ: u(undefined, r("Timetable")) },
        { json: "useConfirmationSmsAlert", js: "useConfirmationSmsAlert", typ: u(undefined, true) },
        { json: "visitType", js: "visitType", typ: u(undefined, "") },
    ], false),
    "AdditionalDuration": o([
        { json: "duration", js: "duration", typ: u(undefined, u(3.14, null)) },
        { json: "level", js: "level", typ: u(undefined, 3.14) },
    ], false),
    "BusinessTaxonomyPrice": o([
        { json: "amount", js: "amount", typ: u(undefined, "") },
        { json: "currency", js: "currency", typ: r("CurrencyList") },
        { json: "resourceLevel", js: "resourceLevel", typ: 3.14 },
        { json: "stockAmount", js: "stockAmount", typ: "" },
        { json: "type", js: "type", typ: u(undefined, r("AdditionalPriceType")) },
    ], false),
    "BusinessTaxonomyProduct": o([
        { json: "extraID", js: "extraID", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "required", js: "required", typ: true },
    ], false),
    "AdjacentTaxonomy": o([
        { json: "isAnyAvailable", js: "isAnyAvailable", typ: u(undefined, true) },
        { json: "order", js: "order", typ: u(undefined, 3.14) },
        { json: "slotDuration", js: "slotDuration", typ: u(undefined, 3.14) },
        { json: "taxonomyID", js: "taxonomyID", typ: u(undefined, "") },
    ], false),
    "DateLimit": o([
        { json: "dateLimitFrom", js: "dateLimitFrom", typ: u(undefined, Date) },
        { json: "dateLimitTo", js: "dateLimitTo", typ: u(undefined, Date) },
    ], false),
    "DiscountClass": o([
        { json: "active", js: "active", typ: u(undefined, true) },
        { json: "daysOfWeek", js: "daysOfWeek", typ: u(undefined, r("DaysOfWeek")) },
        { json: "repeats", js: "repeats", typ: u(undefined, r("Repeats")) },
        { json: "slots", js: "slots", typ: u(undefined, r("Slots")) },
        { json: "start", js: "start", typ: u(undefined, Date) },
        { json: "unlimWeeklyRepeat", js: "unlimWeeklyRepeat", typ: u(undefined, true) },
        { json: "weeklyRepeat", js: "weeklyRepeat", typ: u(undefined, 3.14) },
    ], false),
    "Slots": o([
        { json: "time", js: "time", typ: u(undefined, r("TimeFrame")) },
    ], "any"),
    "Price": o([
        { json: "amount", js: "amount", typ: "" },
        { json: "currency", js: "currency", typ: r("CurrencyList") },
        { json: "stockAmount", js: "stockAmount", typ: u(null, "") },
        { json: "type", js: "type", typ: r("AdditionalPriceType") },
    ], false),
    "ShowcaseItem": o([
        { json: "_id", js: "_id", typ: u(undefined, "") },
        { json: "additionalDurations", js: "additionalDurations", typ: u(undefined, a(r("ShowcaseItemAdditionalDuration"))) },
        { json: "businessID", js: "businessID", typ: u(undefined, "") },
        { json: "taxonomyID", js: "taxonomyID", typ: u(undefined, "") },
    ], false),
    "ShowcaseItemAdditionalDuration": o([
        { json: "_id", js: "_id", typ: u(undefined, "") },
        { json: "duration", js: "duration", typ: u(undefined, 3.14) },
        { json: "level", js: "level", typ: u(undefined, 3.14) },
    ], false),
    "TaxonomyShowcase": o([
        { json: "baseBusinessID", js: "baseBusinessID", typ: u(undefined, "") },
        { json: "isBaseNode", js: "isBaseNode", typ: u(undefined, true) },
        { json: "originBusinessID", js: "originBusinessID", typ: u(undefined, "") },
        { json: "showcaseItemID", js: "showcaseItemID", typ: u(undefined, "") },
    ], false),
    "TaxonomiesComplex": o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "taxonomies", js: "taxonomies", typ: u(undefined, a("")) },
    ], "any"),
    "BusinessTopServices": o([
        { json: "services", js: "services", typ: u(undefined, a("any")) },
        { json: "status", js: "status", typ: u(undefined, "") },
    ], "any"),
    "WidgetConfiguration": o([
        { json: "additionalName", js: "additionalName", typ: u(undefined, "") },
        { json: "alignmentTaxonomySlots", js: "alignmentTaxonomySlots", typ: u(undefined, true) },
        { json: "allowAutoSelect", js: "allowAutoSelect", typ: u(undefined, true) },
        { json: "allowBookVisitor", js: "allowBookVisitor", typ: u(undefined, true) },
        { json: "allowSkipTimeCheck", js: "allowSkipTimeCheck", typ: u(undefined, true) },
        { json: "appointment_confirmation_text", js: "appointment_confirmation_text", typ: u(undefined, "") },
        { json: "appointment_confirmation_title", js: "appointment_confirmation_title", typ: u(undefined, "") },
        { json: "askClientBirthday", js: "askClientBirthday", typ: u(undefined, true) },
        { json: "askClientGender", js: "askClientGender", typ: u(undefined, true) },
        { json: "bookableDateRanges", js: "bookableDateRanges", typ: u(undefined, r("BookableDateRanges")) },
        { json: "bookableMonthsCount", js: "bookableMonthsCount", typ: u(undefined, 3.14) },
        { json: "calendarMode", js: "calendarMode", typ: u(undefined, true) },
        { json: "calendarModeHideTime", js: "calendarModeHideTime", typ: u(undefined, true) },
        { json: "clientBlockingSettings", js: "clientBlockingSettings", typ: u(undefined, r("ClientBlockingSettings")) },
        { json: "clientCommentTitle", js: "clientCommentTitle", typ: u(undefined, true) },
        { json: "cracServer", js: "cracServer", typ: u(undefined, r("CracServer")) },
        { json: "cracSlotSize", js: "cracSlotSize", typ: u(undefined, 3.14) },
        { json: "crunchv2", js: "crunchv2", typ: u(undefined, true) },
        { json: "dayOffLabel", js: "dayOffLabel", typ: u(undefined, "") },
        { json: "daysForward", js: "daysForward", typ: u(undefined, 3.14) },
        { json: "dayUnavailableLabel", js: "dayUnavailableLabel", typ: u(undefined, "") },
        { json: "defaultServiceImgUrl", js: "defaultServiceImgUrl", typ: u(undefined, "") },
        { json: "defaultWorkerImgUrl", js: "defaultWorkerImgUrl", typ: u(undefined, "") },
        { json: "denySameTimeRecords", js: "denySameTimeRecords", typ: u(undefined, true) },
        { json: "disabledTaxonomiesText", js: "disabledTaxonomiesText", typ: u(undefined, "") },
        { json: "disableMobileWidget", js: "disableMobileWidget", typ: u(undefined, true) },
        { json: "disableWidget", js: "disableWidget", typ: u(undefined, true) },
        { json: "disableWidgetMessage", js: "disableWidgetMessage", typ: u(undefined, "") },
        { json: "discountedPriceRounding", js: "discountedPriceRounding", typ: u(undefined, r("DiscountedPriceRounding")) },
        { json: "displaySlotSize", js: "displaySlotSize", typ: u(undefined, 3.14) },
        { json: "dontRequireEmail", js: "dontRequireEmail", typ: u(undefined, true) },
        { json: "emailIsMandatory", js: "emailIsMandatory", typ: u(undefined, true) },
        { json: "enableOverrideFooter", js: "enableOverrideFooter", typ: u(undefined, true) },
        { json: "enableWarningContactData", js: "enableWarningContactData", typ: u(undefined, true) },
        { json: "extraVisitors", js: "extraVisitors", typ: u(undefined, true) },
        { json: "filterNonInsuranceSchedule", js: "filterNonInsuranceSchedule", typ: u(undefined, true) },
        { json: "hideAnyWorkerBooking", js: "hideAnyWorkerBooking", typ: u(undefined, true) },
        { json: "hideCallButton", js: "hideCallButton", typ: u(undefined, true) },
        { json: "hideEmptyDays", js: "hideEmptyDays", typ: u(undefined, true) },
        { json: "hideGBookingLogo", js: "hideGBookingLogo", typ: u(undefined, true) },
        { json: "hideGraySlots", js: "hideGraySlots", typ: u(undefined, true) },
        { json: "hideNewAppointmentButton", js: "hideNewAppointmentButton", typ: u(undefined, true) },
        { json: "hidePrices", js: "hidePrices", typ: u(undefined, true) },
        { json: "hideSocialNetworksAuthentication", js: "hideSocialNetworksAuthentication", typ: u(undefined, true) },
        { json: "insuranceClientSupportPhone", js: "insuranceClientSupportPhone", typ: u(undefined, a(u(a("any"), true, r("PhoneClass"), 3.14, 0, null, ""))) },
        { json: "maxServiceBooking", js: "maxServiceBooking", typ: u(undefined, 3.14) },
        { json: "maxTimeslotBooking", js: "maxTimeslotBooking", typ: u(undefined, 3.14) },
        { json: "mostFreeEnable", js: "mostFreeEnable", typ: u(undefined, true) },
        { json: "multiServiceBooking", js: "multiServiceBooking", typ: u(undefined, true) },
        { json: "multiTimeslotBooking", js: "multiTimeslotBooking", typ: u(undefined, true) },
        { json: "multiTimeslotBookingAllDays", js: "multiTimeslotBookingAllDays", typ: u(undefined, true) },
        { json: "newWidgetTheme", js: "newWidgetTheme", typ: u(undefined, m("any")) },
        { json: "noDefaultImages", js: "noDefaultImages", typ: u(undefined, true) },
        { json: "overrideFooter", js: "overrideFooter", typ: u(undefined, "") },
        { json: "payment", js: "payment", typ: u(undefined, r("Payment")) },
        { json: "paymentProvider", js: "paymentProvider", typ: u(undefined, r("PaymentProvider")) },
        { json: "requireAgreement", js: "requireAgreement", typ: u(undefined, true) },
        { json: "requireAgreementLink", js: "requireAgreementLink", typ: u(undefined, "") },
        { json: "revisionVersion", js: "revisionVersion", typ: u(undefined, 3.14) },
        { json: "shortLink", js: "shortLink", typ: u(undefined, "") },
        { json: "showAllWorkers", js: "showAllWorkers", typ: u(undefined, true) },
        { json: "showClientAddress", js: "showClientAddress", typ: u(undefined, true) },
        { json: "showClientComment", js: "showClientComment", typ: u(undefined, true) },
        { json: "showDisabledTaxonomies", js: "showDisabledTaxonomies", typ: u(undefined, true) },
        { json: "showDrinkQuestion", js: "showDrinkQuestion", typ: u(undefined, true) },
        { json: "showMap", js: "showMap", typ: u(undefined, true) },
        { json: "showSurnameFirst", js: "showSurnameFirst", typ: u(undefined, true) },
        { json: "showTalkQuestion", js: "showTalkQuestion", typ: u(undefined, true) },
        { json: "showTaxonomyConfirmationAlert", js: "showTaxonomyConfirmationAlert", typ: u(undefined, true) },
        { json: "skipAuthentication", js: "skipAuthentication", typ: u(undefined, true) },
        { json: "skipDaysForward", js: "skipDaysForward", typ: u(undefined, true) },
        { json: "skipMobileMap", js: "skipMobileMap", typ: u(undefined, true) },
        { json: "skipServiceDurationAlignment", js: "skipServiceDurationAlignment", typ: u(undefined, true) },
        { json: "skipServiceSelection", js: "skipServiceSelection", typ: u(undefined, true) },
        { json: "skipTimeSelection", js: "skipTimeSelection", typ: u(undefined, true) },
        { json: "skipTimeSelectionServiceIDs", js: "skipTimeSelectionServiceIDs", typ: u(undefined, a("")) },
        { json: "skipWorkerSelectedServiceIDs", js: "skipWorkerSelectedServiceIDs", typ: u(undefined, a("")) },
        { json: "skipWorkerServicesSelection", js: "skipWorkerServicesSelection", typ: u(undefined, true) },
        { json: "socialNetworkImage", js: "socialNetworkImage", typ: u(undefined, "") },
        { json: "socialSharing", js: "socialSharing", typ: u(undefined, r("SocialSharing")) },
        { json: "sortByMostFree", js: "sortByMostFree", typ: u(undefined, true) },
        { json: "sortWorkersByWorkload", js: "sortWorkersByWorkload", typ: u(undefined, true) },
        { json: "splitInsuranceClient", js: "splitInsuranceClient", typ: u(undefined, true) },
        { json: "splitName", js: "splitName", typ: u(undefined, true) },
        { json: "tentativeTTL", js: "tentativeTTL", typ: u(undefined, 3.14) },
        { json: "theme", js: "theme", typ: u(undefined, "") },
        { json: "useAppointmentReminder", js: "useAppointmentReminder", typ: u(undefined, true) },
        { json: "useBusinessScheduleForUnavailableLabel", js: "useBusinessScheduleForUnavailableLabel", typ: u(undefined, true) },
        { json: "useClustersMap", js: "useClustersMap", typ: u(undefined, true) },
        { json: "useCoupon", js: "useCoupon", typ: u(undefined, true) },
        { json: "useCRAC", js: "useCRAC", typ: u(undefined, true) },
        { json: "useDefaultServiceImg", js: "useDefaultServiceImg", typ: u(undefined, true) },
        { json: "useDefaultWorkerImg", js: "useDefaultWorkerImg", typ: u(undefined, true) },
        { json: "useDirectScheduleRead", js: "useDirectScheduleRead", typ: u(undefined, r("UseDirectScheduleRead")) },
        { json: "useInsuranceGuaranteeLetter", js: "useInsuranceGuaranteeLetter", typ: u(undefined, true) },
        { json: "useInsuranceSelect", js: "useInsuranceSelect", typ: u(undefined, true) },
        { json: "useMedAuth", js: "useMedAuth", typ: u(undefined, true) },
        { json: "useMiddleName", js: "useMiddleName", typ: u(undefined, true) },
        { json: "useNewReserveAPI", js: "useNewReserveAPI", typ: u(undefined, true) },
        { json: "useResourcePageLoading", js: "useResourcePageLoading", typ: u(undefined, true) },
        { json: "useSortByName", js: "useSortByName", typ: u(undefined, true) },
        { json: "warningContactDataText", js: "warningContactDataText", typ: u(undefined, "") },
        { json: "widgetUseCRAC", js: "widgetUseCRAC", typ: u(undefined, true) },
        { json: "withoutWorkers", js: "withoutWorkers", typ: u(undefined, true) },
        { json: "worker_unavailability_text", js: "worker_unavailability_text", typ: u(undefined, "") },
        { json: "workerNameReverse", js: "workerNameReverse", typ: u(undefined, true) },
    ], false),
    "BookableDateRanges": o([
        { json: "enabled", js: "enabled", typ: u(undefined, true) },
        { json: "end", js: "end", typ: u(undefined, "any") },
        { json: "start", js: "start", typ: u(undefined, "any") },
    ], "any"),
    "ClientBlockingSettings": o([
        { json: "appointmentClientBlock", js: "appointmentClientBlock", typ: u(undefined, true) },
        { json: "appointmentClientBlockDays", js: "appointmentClientBlockDays", typ: u(undefined, 3.14) },
        { json: "appointmentClientBlockText", js: "appointmentClientBlockText", typ: u(undefined, "") },
        { json: "blockIfFutureRecordExists", js: "blockIfFutureRecordExists", typ: u(undefined, true) },
        { json: "blockRepeatedRecordsCount", js: "blockRepeatedRecordsCount", typ: u(undefined, 3.14) },
        { json: "blockRepeatedRecordsRange", js: "blockRepeatedRecordsRange", typ: u(undefined, 3.14) },
        { json: "blockRepeatedRecordsText", js: "blockRepeatedRecordsText", typ: u(undefined, "") },
    ], false),
    "DiscountedPriceRounding": o([
        { json: "rule", js: "rule", typ: u(undefined, r("Rule")) },
        { json: "value", js: "value", typ: u(undefined, 3.14) },
    ], "any"),
    "SocialSharing": o([
        { json: "active", js: "active", typ: u(undefined, true) },
        { json: "discountAmount", js: "discountAmount", typ: u(undefined, u(3.14, null)) },
        { json: "discountEnabled", js: "discountEnabled", typ: u(undefined, true) },
        { json: "discountType", js: "discountType", typ: u(undefined, r("DiscountType")) },
        { json: "text", js: "text", typ: u(undefined, u(null, "")) },
        { json: "widgetText", js: "widgetText", typ: u(undefined, u(null, "")) },
    ], "any"),
    "Network": o([
        { json: "address", js: "address", typ: u(undefined, u(a("any"), true, r("AddressCamelCaseSchema"), 3.14, 0, null, "")) },
        { json: "businessName", js: "businessName", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "internalID", js: "internalID", typ: "" },
    ], "any"),
    "AddressCamelCaseSchema": o([
        { json: "address", js: "address", typ: u(undefined, "") },
        { json: "addressAdd", js: "addressAdd", typ: u(undefined, "") },
        { json: "adminArea", js: "adminArea", typ: u(undefined, "") },
        { json: "adminAreaType", js: "adminAreaType", typ: u(undefined, "") },
        { json: "building", js: "building", typ: u(undefined, "") },
        { json: "corps", js: "corps", typ: u(undefined, "") },
        { json: "country", js: "country", typ: r("Country") },
        { json: "group", js: "group", typ: u(undefined, "") },
        { json: "houseAdd", js: "houseAdd", typ: u(undefined, "") },
        { json: "kilometer", js: "kilometer", typ: u(undefined, "") },
        { json: "latitude", js: "latitude", typ: u(undefined, "") },
        { json: "locality", js: "locality", typ: u(undefined, "") },
        { json: "localityType", js: "localityType", typ: u(undefined, "") },
        { json: "longitude", js: "longitude", typ: u(undefined, "") },
        { json: "metroStations", js: "metroStations", typ: u(undefined, a(r("FluffyMetroStation"))) },
        { json: "number", js: "number", typ: u(undefined, "") },
        { json: "office", js: "office", typ: u(undefined, "") },
        { json: "possesion", js: "possesion", typ: u(undefined, "") },
        { json: "street", js: "street", typ: u(undefined, "") },
        { json: "streetType", js: "streetType", typ: u(undefined, "") },
        { json: "subAdminArea", js: "subAdminArea", typ: u(undefined, "") },
        { json: "subAdminAreaType", js: "subAdminAreaType", typ: u(undefined, "") },
        { json: "subLocality", js: "subLocality", typ: u(undefined, "") },
        { json: "subLocalityType", js: "subLocalityType", typ: u(undefined, "") },
        { json: "way", js: "way", typ: u(undefined, "") },
        { json: "zipCode", js: "zipCode", typ: u(undefined, "") },
    ], false),
    "FluffyMetroStation": o([
        { json: "_id", js: "_id", typ: u(undefined, "") },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "name", js: "name", typ: "" },
    ], false),
    "ResultTopServices": o([
        { json: "services", js: "services", typ: a("") },
        { json: "status", js: "status", typ: true },
    ], "any"),
    "ClientController": o([
        { json: "add_client", js: "add_client", typ: r("AddClient") },
    ], false),
    "AddClient": o([
        { json: "request", js: "request", typ: r("ClientAddClientRequest") },
        { json: "response", js: "response", typ: r("ClientAddClientResponse") },
    ], false),
    "ClientAddClientRequest": o([
        { json: "cred", js: "cred", typ: u(undefined, r("Cred")) },
        { json: "id", js: "id", typ: u(3.14, "") },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "method", js: "method", typ: "" },
        { json: "params", js: "params", typ: r("ClientAddClientRequestParams") },
    ], false),
    "ClientAddClientRequestParams": o([
        { json: "business", js: "business", typ: r("FluffyBusiness") },
        { json: "client", js: "client", typ: r("Client") },
        { json: "profile", js: "profile", typ: u(undefined, r("ParamsProfile")) },
        { json: "skipEmailCheck", js: "skipEmailCheck", typ: u(undefined, true) },
        { json: "skipProfileUpdate", js: "skipProfileUpdate", typ: u(undefined, true) },
    ], false),
    "FluffyBusiness": o([
        { json: "id", js: "id", typ: u(3.14, "") },
    ], false),
    "Client": o([
        { json: "birthday", js: "birthday", typ: u(undefined, u(m("any"), "")) },
        { json: "creatorProfileID", js: "creatorProfileID", typ: u(undefined, u(null, "")) },
        { json: "creatorProfileName", js: "creatorProfileName", typ: u(undefined, u(null, "")) },
        { json: "driverLicense", js: "driverLicense", typ: u(undefined, u(null, "")) },
        { json: "email", js: "email", typ: u(undefined, a("")) },
        { json: "fromSms", js: "fromSms", typ: u(undefined, u(true, "")) },
        { json: "middle_name", js: "middle_name", typ: u(undefined, "") },
        { json: "name", js: "name", typ: "" },
        { json: "phone", js: "phone", typ: u(a("any"), true, r("PhoneClass"), 3.14, 0, null, "") },
        { json: "sex", js: "sex", typ: u(undefined, r("Sex")) },
        { json: "surname", js: "surname", typ: "" },
        { json: "taxiPark", js: "taxiPark", typ: u(undefined, u(null, "")) },
        { json: "taxiParkMemberCount", js: "taxiParkMemberCount", typ: u(undefined, u(3.14, null, "")) },
    ], "any"),
    "ParamsProfile": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "ClientAddClientResponse": o([
        { json: "result", js: "result", typ: u(undefined, r("ClientAddClientResponseResult")) },
        { json: "error", js: "error", typ: u(undefined, r("ClientAddClientResponseError")) },
        { json: "id", js: "id", typ: u(undefined, 3.14) },
        { json: "jsonrpc", js: "jsonrpc", typ: u(undefined, "") },
    ], "any"),
    "ClientAddClientResponseError": o([
        { json: "code", js: "code", typ: 3.14 },
        { json: "data", js: "data", typ: u(undefined, "") },
        { json: "message", js: "message", typ: "" },
    ], "any"),
    "ClientAddClientResponseResult": o([
        { json: "business", js: "business", typ: u(undefined, r("ResultBusiness")) },
        { json: "client", js: "client", typ: r("Client") },
        { json: "documents", js: "documents", typ: u(undefined, a("any")) },
        { json: "profile", js: "profile", typ: u(undefined, r("ResultProfile")) },
    ], "any"),
    "ResultBusiness": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "ResultProfile": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "Models": o([
        { json: "Business", js: "Business", typ: u(a("any"), true, r("BusinessClass"), 3.14, 0, null, "") },
        { json: "Client", js: "Client", typ: r("Client") },
    ], false),
    "WorkerSortingType": [
        "most_free",
        "none",
        "workload",
    ],
    "AppointmentExtensionType": [
        "MINUTES",
        "PERCENT",
    ],
    "FeedBackMinRating": [
        "1",
        "2",
        "3",
        "4",
        "5",
    ],
    "PaymentProvider": [
        "deltaProcessing",
        "DISABLE",
        "yandexMoney",
    ],
    "ResourceTimetableType": [
        "DEFAULT",
        "EVENODD",
    ],
    "SchedulerWeekViewType": [
        "week",
        "workWeek",
    ],
    "BackofficeType": [
        "COMMON",
        "GT",
        "LL",
        "MB",
        "MU",
    ],
    "CurrencyList": [
        "CNY",
        "EUR",
        "GBP",
        "HUF",
        "ILS",
        "KZT",
        "RUB",
        "UAH",
        "USD",
        "UZS",
    ],
    "AdditionalFieldsType": [
        "BOOL",
        "COUPON",
        "FILE",
        "RADIO",
        "STRING",
    ],
    "Country": [
        "AM",
        "BLR",
        "CH",
        "DE",
        "_",
        "ES",
        "FI",
        "FR",
        "GE",
        "HU",
        "IL",
        "KZ",
        "LI",
        "LT",
        "LV",
        "RU",
        "UA",
        "UK",
        "US",
        "UZ",
    ],
    "LanguageList": [
        "am-am",
        "de-de",
        "ee-ee",
        "en-us",
        "es-es",
        "fi-fi",
        "fr-fr",
        "ge-ge",
        "he-il",
        "hu-hu",
        "lt-lt",
        "lv-lv",
        "ru-ru",
        "uz-uz",
        "zh-cn",
    ],
    "PaymentMethods": [
        "Amex",
        "Mastercard",
        "MoneyBookers",
        "PayPal",
        "Visa",
    ],
    "PricingType": [
        "DEFAULT",
        "MASTER_TOPMASTER",
    ],
    "SocialNetwork": [
        "Facebook",
        "GBooking",
        "Google",
        "LinkedIn",
        "Mailru",
        "Odnoklassniki",
        "Twitter",
        "VKontakte",
        "Yahoo",
        "Yandex",
    ],
    "VerticalTranslation": [
        "BEAUTY",
        "FITNESS",
        "GENERIC",
        "MEDICAL",
        "NONE",
        "SPORT",
        "YOGA",
    ],
    "Group": [
        "FRENCH",
        "GENERAL",
        "HUNGARIAN",
        "LATVIAN",
    ],
    "Field": [
        "email",
        "name",
        "surname",
    ],
    "StartPeriod": [
        "month",
        "week",
    ],
    "AccessType": [
        "NONE",
        "WORKER_EXTENDED",
        "WORKER_SIMPLE",
    ],
    "Status": [
        "ACTIVE",
        "INACTIVE",
    ],
    "AdditionalPriceType": [
        "average",
        "begin_with",
        "equal",
    ],
    "ChildrenTaxonomyType": [
        "child",
        "none",
        "parent",
    ],
    "DateLimitType": [
        "all_dates",
        "from_date",
        "range_dates",
        "to_date",
    ],
    "DaysOfWeek": [
        "fri",
        "mon",
        "sat",
        "sun",
        "thu",
        "tue",
        "wed",
    ],
    "Repeats": [
        "daily",
        "none",
        "weekly",
    ],
    "OnlineMode": [
        "ONCALL_ONLINE",
        "PLAN_CLINIC",
        "PLAN_CLINIC_ONLINE",
        "PLAN_ONLINE",
    ],
    "TaxonomyType": [
        "CATEGORY",
        "SERVICE",
        "SUBCATEGORY",
    ],
    "CracServer": [
        "CRAC",
        "CRAC_PROD3",
    ],
    "Rule": [
        "CUSTOM",
        "NEAREST_INTEGER",
        "TWO_DECIMALS",
    ],
    "Payment": [
        "OPTIONAL",
        "REQUIRED",
        "WITHOUT",
    ],
    "DiscountType": [
        "PERCENT",
    ],
    "UseDirectScheduleRead": [
        "ALL",
        "AUTHENTICATED",
        "GUEST",
        "NONE",
    ],
    "YandexFeedType": [
        "dynamic",
        "no",
        "static",
        "static-service-only",
    ],
    "Sex": [
        "FEMALE",
        "MALE",
        "NOT_SPECIFIED",
    ],
};
