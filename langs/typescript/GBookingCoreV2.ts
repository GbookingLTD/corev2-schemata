export interface GBookingCoreV2 {
    Controllers: Controllers;
    Models:      Models;
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
 * Список кодов ошибки авторизации
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
 * Список кодов ошибки авторизации
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
