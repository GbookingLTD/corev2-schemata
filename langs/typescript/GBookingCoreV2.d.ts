export interface GBookingCoreV2 {
    Common: Common;
    Controllers: Controllers;
    Models: Models;
}
export interface Common {
    AuthErrorCodes?: AuthErrorCodesObject;
    ErrorResponse?: ErrorResponse;
    Request?: Request;
    SuccessResponse?: SuccessResponse;
}
/**
 * Код ошибки авторизации
 */
export interface AuthErrorCodesObject {
    code: number;
}
export declare type ErrorResponse = any[] | boolean | ErrorResponseClass | number | number | null | string;
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
export declare type Request = any[] | boolean | RequestClass | number | number | null | string;
export interface RequestClass {
    /**
     * авторизационные параметры
     */
    cred?: Cred;
    /**
     * значение числового типа для идентификации запроса на сервере
     */
    id: BackofficeIdUnion;
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
    params: ParamsUnion;
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
 * идентификатор сети
 *
 * идентификатор витрины (передаётся вместе с with_taxonomy_showcase)
 *
 * идентификатор бизнеса
 *
 * идентификатор нетворка
 */
export declare type BackofficeIdUnion = number | string;
/**
 * параметры запроса
 */
export declare type ParamsUnion = any[] | {
    [key: string]: any;
};
export declare type SuccessResponse = any[] | boolean | SuccessResponseClass | number | number | null | string;
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
    result: {
        [key: string]: any;
    };
}
export interface Controllers {
    Appointment: AppointmentController;
    Business: BusinessController;
    Client: ClientController;
    CracSlots: CracSlotsController;
}
export interface AppointmentController {
    cancel_appointment_by_business?: CancelAppointmentByBusiness;
    cancel_appointment_by_client?: CancelAppointmentByClient;
    client_confirm_appointment?: ClientConfirmAppointment;
    client_remove_empty_appointment: ClientRemoveEmptyAppointment;
    get_appointment_by_filter?: GetAppointmentByFilter;
    get_appointment_by_showcase?: GetAppointmentByShowcase;
    reserve_appointment: ReserveAppointment;
}
export interface CancelAppointmentByBusiness {
    request: AppointmentCancelAppointmentByBusinessRequest;
    response: AppointmentCancelAppointmentByBusinessResponse;
}
export interface AppointmentCancelAppointmentByBusinessRequest {
    /**
     * авторизационные параметры
     */
    cred?: Cred;
    /**
     * значение числового типа для идентификации запроса на сервере
     */
    id: BackofficeIdUnion;
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
    params: AppointmentCancelAppointmentByBusinessRequestParams;
}
export interface AppointmentCancelAppointmentByBusinessRequestParams {
    appointment: PurpleAppointment;
    client?: PurpleClient;
    business: any;
}
export interface PurpleAppointment {
    id: string;
}
export interface PurpleClient {
    comment?: string;
    id: string;
}
export interface AppointmentCancelAppointmentByBusinessResponse {
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
    result?: boolean;
    /**
     * объект, содержащий информацию об ошибке
     */
    error?: AppointmentCancelAppointmentByBusinessResponseError;
}
/**
 * объект, содержащий информацию об ошибке
 *
 * Код ошибки авторизации
 */
export interface AppointmentCancelAppointmentByBusinessResponseError {
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
export interface CancelAppointmentByClient {
    request: AppointmentCancelAppointmentByClientRequest;
    response: AppointmentCancelAppointmentByClientResponse;
}
export interface AppointmentCancelAppointmentByClientRequest {
    /**
     * авторизационные параметры
     */
    cred?: Cred;
    /**
     * значение числового типа для идентификации запроса на сервере
     */
    id: BackofficeIdUnion;
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
    params: AppointmentCancelAppointmentByClientRequestParams;
}
export interface AppointmentCancelAppointmentByClientRequestParams {
    appointment: FluffyAppointment;
    client?: FluffyClient;
    business: any;
}
export interface FluffyAppointment {
    id: string;
    shortId?: string;
}
export interface FluffyClient {
    comment?: string;
    id: string;
}
export interface AppointmentCancelAppointmentByClientResponse {
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
    result?: boolean;
    /**
     * объект, содержащий информацию об ошибке
     */
    error?: AppointmentCancelAppointmentByClientResponseError;
}
/**
 * объект, содержащий информацию об ошибке
 *
 * Код ошибки авторизации
 */
export interface AppointmentCancelAppointmentByClientResponseError {
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
export interface ClientConfirmAppointment {
    request: AppointmentClientConfirmAppointmentRequest;
    response: AppointmentClientConfirmAppointmentResponse;
}
export interface AppointmentClientConfirmAppointmentRequest {
    /**
     * авторизационные параметры
     */
    cred?: Cred;
    /**
     * значение числового типа для идентификации запроса на сервере
     */
    id: BackofficeIdUnion;
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
    params: ConfirmAppointment;
}
export interface ConfirmAppointment {
    appointment: TentacledAppointment;
    client: TentacledClient;
}
export interface TentacledAppointment {
    id: string;
    source?: string;
}
export interface TentacledClient {
    comment?: string;
    id: string;
}
export interface AppointmentClientConfirmAppointmentResponse {
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
    result?: AppointmentElement;
    /**
     * объект, содержащий информацию об ошибке
     */
    error?: AppointmentClientConfirmAppointmentResponseError;
}
/**
 * объект, содержащий информацию об ошибке
 *
 * Код ошибки авторизации
 */
export interface AppointmentClientConfirmAppointmentResponseError {
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
export declare type AppointmentElement = any[] | boolean | AppointmentSchema | number | number | null | string;
export interface AppointmentSchema {
    additional_info?: {
        [key: string]: any;
    };
    additionalClientAppears: AdditionalClientAppear[];
    additionalClientPayments: AdditionalClientPayment[];
    additionalClients: AdditionalClientElement[];
    additionalClientSources: AdditionalClientSource[];
    additionalClientStatuses: AdditionalClientStatus[];
    additionalClientUtms: AdditionalClientUtm[];
    additionalFields: AdditionalField[];
    additionalProducts: AdditionalProduct[];
    additionalTaxonomies: AppointmentTaxonomy[];
    address?: string;
    adjacentId?: string;
    appointment: AppointmentInfo;
    autoPhoneCallStatus?: string;
    bannedClients: string[];
    business: AppointmentBusiness;
    cabinet: Cabinet;
    capacity?: number;
    changeReason: string;
    client: PurpleAppointmentClient;
    client_appear: AppointmentClientAppear;
    client_med_code?: string;
    client_payment: AppointmentClientPayment;
    client_payment_invoice?: string;
    clientComment: string;
    clientVisitors?: AppointmentClientVisitor[];
    color?: string;
    destinationKeyword?: string;
    destinationLink?: string;
    extraFields: ExtraField[];
    gt?: boolean;
    gtTimeFrame?: string;
    location?: Location;
    masterImportance?: boolean;
    minClients?: number;
    moveCounter: number;
    movedByRobot: boolean;
    movedFromFired?: boolean;
    networkID?: string;
    notes: string;
    order: Order;
    preferredResource?: boolean;
    promoCode?: string;
    refererLink?: string;
    referrer?: string;
    reminder: Reminder;
    removedClientsData: RemovedClientsDatum[];
    resource: AppointmentResource;
    review?: Review;
    room?: Room;
    showcase: AppointmentShowcase;
    socialToken?: string;
    source: string;
    taxonomy: AppointmentTaxonomy;
    utm?: {
        [key: string]: any;
    };
    withCoSale?: boolean;
}
export interface AdditionalClientAppear {
    appear: AppointmentClientAppear;
    clientID: string;
}
export declare enum AppointmentClientAppear {
    NoAppear = "NO_APPEAR",
    None = "NONE",
    YesAppear = "YES_APPEAR"
}
export interface AdditionalClientPayment {
    clientID: string;
    payment: AppointmentClientPayment;
}
export declare enum AppointmentClientPayment {
    NoPayment = "NO_PAYMENT",
    None = "NONE",
    YesPayedFull = "YES_PAYED_FULL",
    YesPayedOnline = "YES_PAYED_ONLINE",
    YesPayedPart = "YES_PAYED_PART"
}
export interface AdditionalClientSource {
    _id?: string;
    clientID: string;
    source: string;
}
export interface AdditionalClientStatus {
    _id?: string;
    clientID: string;
    history?: {
        [key: string]: any;
    }[];
    status: AppointmentStatus;
}
export declare enum AppointmentStatus {
    Active = "ACTIVE",
    CancelledByAdmin = "CANCELLED_BY_ADMIN",
    CancelledByBusiness = "CANCELLED_BY_BUSINESS",
    CancelledByClient = "CANCELLED_BY_CLIENT",
    ConfirmedByAdmin = "CONFIRMED_BY_ADMIN",
    ConfirmedByBusiness = "CONFIRMED_BY_BUSINESS",
    ConfirmedByClient = "CONFIRMED_BY_CLIENT",
    ConfirmedMoved = "CONFIRMED_MOVED",
    Denied = "DENIED",
    Done = "DONE",
    Tentative = "TENTATIVE",
    TimedOut = "TIMED_OUT"
}
export interface AdditionalClientUtm {
    _id?: string;
    clientID: string;
    utm?: {
        [key: string]: any;
    };
}
export interface AdditionalClientElement {
    address?: string;
    adminComment?: string;
    birthday?: string;
    clientCardNumber?: string;
    clientComment?: string;
    creatorProfileID?: string;
    creatorProfileName?: string;
    driverLicense?: string;
    email?: string[];
    extraData?: {
        [key: string]: any;
    };
    extraID?: string;
    extraVisitors?: number;
    fax?: string;
    feedback?: AppointmentClientFeedback;
    GAClientID?: string;
    houseNumber?: string;
    id: string;
    incomingPhone?: IncomingPhoneElement[];
    israelCity?: IsraelCity;
    isVIP?: boolean;
    kupatHolim?: KupatHolim;
    language?: string;
    middleName?: string;
    name: string;
    passportId?: string;
    phone?: IncomingPhoneElement[];
    seasonTicketId?: string;
    seasonTicketNumber?: string;
    sex?: Sex;
    shortId?: string;
    surname: string;
    taxiPark?: string;
    taxiParkMemberCount?: number;
}
export interface AppointmentClientFeedback {
    complaintActionText?: string;
    complaintStatus?: ComplaintStatus;
    complaintText?: string;
    extraFields?: ExtraField[];
    inprogress?: boolean;
    originalMessage?: string;
    rating?: string;
}
export declare enum ComplaintStatus {
    Checking = "CHECKING",
    Closed = "CLOSED",
    Entered = "ENTERED",
    Invalid = "INVALID",
    Investigation = "INVESTIGATION",
    NotEntered = "NOT_ENTERED"
}
export interface ExtraField {
    fieldID: string;
    fieldName: string;
    value?: Value;
}
export declare type Value = number | {
    [key: string]: any;
} | null | string;
export interface IncomingPhoneElement {
    area_code: string;
    country_code: string;
    number: string;
}
export interface IsraelCity {
    cityId?: string;
    name?: string;
}
export interface KupatHolim {
    kupatHolimId?: string;
    name?: string;
}
export declare enum Sex {
    Female = "FEMALE",
    Male = "MALE",
    NotSpecified = "NOT_SPECIFIED"
}
export interface AdditionalField {
    name: string;
    requiredField: boolean;
    shortName: string;
    type: AdditionalFieldType;
    value: string;
}
export declare enum AdditionalFieldType {
    Bool = "BOOL",
    Coupon = "COUPON",
    File = "FILE",
    Radio = "RADIO",
    String = "STRING"
}
export interface AdditionalProduct {
    id: string;
    price: number;
}
export interface AppointmentTaxonomy {
    alias: string;
    extraId?: string;
    id: string;
}
export interface AppointmentInfo {
    backofficeID: BackofficeIdUnion;
    blockSMS: boolean;
    created: Date;
    drinkAnswer?: DrinkAnswer;
    duration: number;
    hideAppointmentTime: boolean;
    id: string;
    integration_data?: IntegrationData;
    price: Price;
    shortId: string;
    start: Date;
    status: AppointmentStatus;
    talkAnswer?: TalkAnswer;
    testRecord: boolean;
    updated: Date;
}
export declare enum DrinkAnswer {
    Coffee = "COFFEE",
    NotImportant = "NOT_IMPORTANT",
    Tea = "TEA"
}
export interface IntegrationData {
    extraId: string;
}
export interface Price {
    additionalTaxonomyDiscount: AdditionalTaxonomyDiscount[];
    amount: number;
    currency: CurrencyList;
    discount?: number;
    discountProvider?: DiscountProvider;
    discountType?: string;
    originalAmount?: number;
}
export interface AdditionalTaxonomyDiscount {
    discount?: number;
    discountProvider?: DiscountProvider;
    discountType?: string;
    taxonomyID?: string;
}
export declare enum DiscountProvider {
    Groupon = "GROUPON",
    Local = "LOCAL",
    Yandex = "YANDEX"
}
/**
 * Аббревиатура валюты
 *
 * Аббревиатура валюты (например, RUB - рубль)
 */
export declare enum CurrencyList {
    Cny = "CNY",
    Eur = "EUR",
    Gbp = "GBP",
    Huf = "HUF",
    Ils = "ILS",
    Kzt = "KZT",
    Rub = "RUB",
    Uah = "UAH",
    Usd = "USD",
    Uzs = "UZS"
}
export declare enum TalkAnswer {
    NotImportant = "NOT_IMPORTANT",
    NotTalk = "NOT_TALK",
    Talk = "TALK"
}
export interface AppointmentBusiness {
    id: string;
}
export interface Cabinet {
    id?: string;
}
/**
 * пустой объект в момент резервирования
 */
export interface PurpleAppointmentClient {
    address?: string;
    adminComment?: string;
    birthday?: string;
    clientCardNumber?: string;
    clientComment?: string;
    creatorProfileID?: string;
    creatorProfileName?: string;
    driverLicense?: string;
    email?: string[];
    extraData?: {
        [key: string]: any;
    };
    extraID?: string;
    extraVisitors?: number;
    fax?: string;
    feedback?: AppointmentClientFeedback;
    GAClientID?: string;
    houseNumber?: string;
    id?: string;
    incomingPhone?: IncomingPhoneElement[];
    israelCity?: IsraelCity;
    isVIP?: boolean;
    kupatHolim?: KupatHolim;
    language?: string;
    middleName?: string;
    name?: string;
    passportId?: string;
    phone?: IncomingPhoneElement[];
    seasonTicketId?: string;
    seasonTicketNumber?: string;
    sex?: Sex;
    shortId?: string;
    surname?: string;
    taxiPark?: string;
    taxiParkMemberCount?: number;
}
export interface AppointmentClientVisitor {
    birthday?: string;
    email?: string[];
    extraVisitors?: number;
    name?: string;
    parentClientID?: string;
    parentProfileID?: string;
    phone?: IncomingPhoneElement[];
    sex?: Sex;
}
export interface Location {
    latitude: number;
    longitude: number;
}
export interface Order {
    id: string;
}
export interface Reminder {
    status: ReminderStatus;
    time_reminder: number;
}
export declare enum ReminderStatus {
    NotSet = "NOT_SET",
    Off = "OFF",
    On = "ON"
}
export interface RemovedClientsDatum {
    appear?: AppointmentClientAppear;
    client: AdditionalClientElement;
    created?: Date;
    payment?: AppointmentClientPayment;
    payment_invoice?: string;
    source?: string;
    status?: AppointmentStatus;
}
export interface AppointmentResource {
    extraID?: string;
    id: string;
    middleName?: string;
    name: string;
    surname: string;
}
export interface Review {
    business: BusinessClass;
    taxonomy: BusinessClass;
    worker: BusinessClass;
}
export interface BusinessClass {
    comment?: string;
    rate?: number;
}
export interface Room {
    id: string;
}
export interface AppointmentShowcase {
    businessID?: string;
}
export interface ClientRemoveEmptyAppointment {
    request: AppointmentClientRemoveEmptyAppointmentRequest;
    response: AppointmentClientRemoveEmptyAppointmentResponse;
}
export interface AppointmentClientRemoveEmptyAppointmentRequest {
    /**
     * авторизационные параметры
     */
    cred?: Cred;
    /**
     * значение числового типа для идентификации запроса на сервере
     */
    id: BackofficeIdUnion;
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
    params: RemoveEmptyAppointment;
}
export interface RemoveEmptyAppointment {
    appointment: StickyAppointment;
    business: PurpleBusiness;
}
export interface StickyAppointment {
    id: string;
}
export interface PurpleBusiness {
    id: string;
}
export interface AppointmentClientRemoveEmptyAppointmentResponse {
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
    result?: boolean;
    /**
     * объект, содержащий информацию об ошибке
     */
    error?: AppointmentClientRemoveEmptyAppointmentResponseError;
}
/**
 * объект, содержащий информацию об ошибке
 *
 * Код ошибки авторизации
 */
export interface AppointmentClientRemoveEmptyAppointmentResponseError {
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
export interface GetAppointmentByFilter {
    request: AppointmentGetAppointmentByFilterRequest;
    response: AppointmentGetAppointmentByFilterResponse;
}
export interface AppointmentGetAppointmentByFilterRequest {
    /**
     * авторизационные параметры
     */
    cred?: Cred;
    /**
     * значение числового типа для идентификации запроса на сервере
     */
    id: BackofficeIdUnion;
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
    params: AppointmentGetAppointmentByFilterRequestParams;
}
export interface AppointmentGetAppointmentByFilterRequestParams {
    business?: FluffyBusiness;
    extraFilters?: ExtraFilters;
    filter?: Filter;
    network?: PurpleNetwork;
    page: number;
    pageSize: number;
    skipBusinessCancelled?: boolean;
}
export interface FluffyBusiness {
    id?: BackofficeIdUnion;
}
export interface ExtraFilters {
    sort?: Sort[];
}
export interface Sort {
    dir: Dir;
    field: SortField;
}
export declare enum Dir {
    Asc = "asc",
    Desc = "desc"
}
export declare enum SortField {
    Created = "created",
    Start = "start"
}
export interface Filter {
    created?: FilterCreated;
    end?: Date;
    services?: string[];
    skipUpdated?: boolean;
    start?: Date;
    workers?: string[];
}
export interface FilterCreated {
    end: Date;
    start: Date;
}
export interface PurpleNetwork {
    id?: BackofficeIdUnion;
}
export interface AppointmentGetAppointmentByFilterResponse {
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
    result?: AppointmentGetAppointmentByFilterResponseResult;
    /**
     * объект, содержащий информацию об ошибке
     */
    error?: AppointmentGetAppointmentByFilterResponseError;
}
/**
 * объект, содержащий информацию об ошибке
 *
 * Код ошибки авторизации
 */
export interface AppointmentGetAppointmentByFilterResponseError {
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
export interface AppointmentGetAppointmentByFilterResponseResult {
    data: AppointmentElement[];
    page: number;
    total: number;
    unconfirmed: number;
}
export interface GetAppointmentByShowcase {
    request: AppointmentGetAppointmentByShowcaseRequest;
    response: AppointmentGetAppointmentByShowcaseResponse;
}
export interface AppointmentGetAppointmentByShowcaseRequest {
    /**
     * авторизационные параметры
     */
    cred?: Cred;
    /**
     * значение числового типа для идентификации запроса на сервере
     */
    id: BackofficeIdUnion;
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
    params: AppointmentGetAppointmentByShowcaseRequestParams;
}
export interface AppointmentGetAppointmentByShowcaseRequestParams {
    business: TentacledBusiness;
    created?: ParamsCreated;
    page: number;
    pageSize: number;
    source?: string;
}
export interface TentacledBusiness {
    id: BackofficeIdUnion;
}
export interface ParamsCreated {
    end: Date;
    start: Date;
}
export interface AppointmentGetAppointmentByShowcaseResponse {
    /**
     * значение числового типа для идентификации запроса на сервере
     */
    id: number;
    /**
     * версия протокола (2.0)
     */
    jsonrpc: string;
    result?: AppointmentElement[];
    /**
     * объект, содержащий информацию об ошибке
     */
    error?: AppointmentGetAppointmentByShowcaseResponseError;
}
/**
 * объект, содержащий информацию об ошибке
 *
 * Код ошибки авторизации
 */
export interface AppointmentGetAppointmentByShowcaseResponseError {
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
export interface ReserveAppointment {
    request: AppointmentReserveAppointmentRequest;
    response: AppointmentReserveAppointmentResponse;
}
export interface AppointmentReserveAppointmentRequest {
    /**
     * авторизационные параметры
     */
    cred?: Cred;
    /**
     * значение числового типа для идентификации запроса на сервере
     */
    id: BackofficeIdUnion;
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
    params: AppointmentReserve;
}
export interface AppointmentReserve {
    appointment: AppointmentObject;
    business: StickyBusiness;
    originBusinessID?: null | string;
    resource: ResourceClass;
    source: string;
    taxonomy: ParamsTaxonomyClass;
}
export interface AppointmentObject {
    start: string;
}
export interface StickyBusiness {
    id: string;
}
export interface ResourceClass {
    id: ResourceId;
}
export declare type ResourceId = string[] | string;
export interface ParamsTaxonomyClass {
    id: string;
}
export interface AppointmentReserveAppointmentResponse {
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
    result?: AppointmentElement;
    /**
     * объект, содержащий информацию об ошибке
     */
    error?: AppointmentReserveAppointmentResponseError;
}
/**
 * объект, содержащий информацию об ошибке
 *
 * Код ошибки авторизации
 */
export interface AppointmentReserveAppointmentResponseError {
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
export interface BusinessController {
    get_network_data: GetNetworkData;
    get_profile_by_id: GetProfileById;
}
export interface GetNetworkData {
    request: BusinessGetNetworkDataRequest;
    response: BusinessGetNetworkDataResponse;
}
export interface BusinessGetNetworkDataRequest {
    /**
     * авторизационные параметры
     */
    cred?: Cred;
    /**
     * значение числового типа для идентификации запроса на сервере
     */
    id: BackofficeIdUnion;
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
     *
     * параметры запроса business.get_network_data
     */
    params: BusinessGetNetworkDataRequestParams;
}
/**
 * параметры запроса business.get_network_data
 */
export interface BusinessGetNetworkDataRequestParams {
    /**
     * идентификатор сети
     */
    networkID: BackofficeIdUnion;
    resource?: ResourceObject;
    taxonomy?: TaxonomyObject;
    /**
     * Если передано true - возвращает информацию business_info/general_info по каждому бизнесу
     * в массиве businesses
     */
    with_business_info?: boolean;
}
export interface ResourceObject {
    /**
     * идентификатор работника, если передано - возвращает все бизнесы нетворка где есть
     * работник с таким ключем
     */
    id?: string;
}
export interface TaxonomyObject {
    /**
     * идентификатор услуги, если передано - возвращает все бизнесы нетворка с такой услугой
     */
    id?: string;
}
export interface BusinessGetNetworkDataResponse {
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
    result?: BusinessGetNetworkDataResponseResult | null;
    /**
     * объект, содержащий информацию об ошибке
     */
    error?: BusinessGetNetworkDataResponseError;
}
/**
 * объект, содержащий информацию об ошибке
 *
 * Код ошибки авторизации
 */
export interface BusinessGetNetworkDataResponseError {
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
export interface BusinessGetNetworkDataResponseResult {
    businessConfiguration: {
        [key: string]: any;
    };
    businesses: BusinessRefInNetwork[];
    clientVIPPhones: string[];
    grantGroups: {
        [key: string]: any;
    }[];
    networkID: string;
    networkInfo: {
        [key: string]: any;
    };
    networkName?: string;
    /**
     * настройки показа сети в зависимости от источника, на котором размещено приложение
     */
    networkWidgetConfiguration: NetworkWidgetConfiguration[];
}
/**
 * указатель на бизнес в сети
 */
export interface BusinessRefInNetwork {
    _id?: string;
    businessID: string;
    info?: BusinessBusiness;
    isMapBusiness: boolean;
    order?: number;
    virtualTaxonomies?: string[];
}
export declare type BusinessBusiness = any[] | boolean | IndigoBusiness | number | number | null | string;
export interface IndigoBusiness {
    active?: boolean;
    /**
     * колличество активных рабоников, возвращается при вызове через get_network_data при
     * передаче ключа работника или услуги
     */
    activeResourceCount?: number;
    /**
     * колличество активных услуг, возвращается при вызове через get_network_data при передаче
     * ключа работника или услуги
     */
    activeTaxonomyCount?: number;
    additionalSettings?: PurpleAdditionalSettings;
    allowCategoryBooking?: boolean;
    backoffice_configuration?: FluffyBackofficeConfiguration;
    backofficeConfiguration?: PurpleBackofficeConfiguration;
    backofficeType?: BackofficeType;
    cabinets?: PurpleCabinet[];
    cabinetsEnabled?: boolean;
    callback_widget_configuration?: PurpleCallbackWidgetConfiguration;
    consumables?: PurpleConsumable[];
    created_on?: Date;
    defaultFilteredWorkers?: string[];
    departments?: PurpleDepartment[];
    designs?: {
        [key: string]: any;
    }[];
    extraID?: string;
    flatTaxonomyDisplay?: boolean;
    general_info: BusinessInfo;
    group?: Group;
    id?: string;
    integration_data?: {
        [key: string]: any;
    };
    mini_widget_configuration: PurpleMiniWidgetConfiguration;
    mobileData?: any[];
    notifications?: any[];
    resources?: Resource[];
    stateLevelHolidaysNotWorking?: boolean;
    taxonomies?: PurpleBusinessTaxonomy[];
    taxonomiesComplex?: PurpleTaxonomiesComplex[];
    taxonomy_tree_capacity?: {
        [key: string]: any;
    }[];
    top_services?: PurpleTopServices;
    vertical?: string;
    widget_configuration: PurpleWidgetConfiguration;
    yandexFeedType?: string;
}
export interface PurpleAdditionalSettings {
    appointmentExtensionAmount?: number;
    appointmentExtensionType?: AppointmentExtensionType;
}
export declare enum AppointmentExtensionType {
    Minutes = "MINUTES",
    Percent = "PERCENT"
}
export interface PurpleBackofficeConfiguration {
    adjacentTaxonomiesTreshold?: number;
    allowHideServiceForBooking?: boolean;
    allowHideWorkersFromSchdeule?: boolean;
    allowSmsTranslit?: boolean;
    appointmentFutureMoving?: boolean;
    blockNotificationForAnyAvailableAdjacentService?: boolean;
    cabinetsEnabled?: boolean;
    checkClientOverlapping?: boolean;
    customOnlinePaymentConfirmationTemplate?: string;
    defaultGTScheduleDayView?: boolean;
    disableAppointmentClientInlineEditor?: boolean;
    editAppExtraId?: boolean;
    editTaxonomyChildren?: boolean;
    editTaxonomyVisitType?: boolean;
    enableBlackList?: boolean;
    enableCalculateShedule?: boolean;
    enableClientCard?: boolean;
    enableClientLanguage?: boolean;
    enableClientMedicalCardReport?: boolean;
    enableCustomOnlinePaymentConfirmation?: boolean;
    enableExtendedPhone?: boolean;
    enableExtendedRecordsClientStatistics?: boolean;
    enableMasterImportance?: boolean;
    enableServiceTimeLimit?: boolean;
    enableSourceChoice?: boolean;
    enableTaxonomyChildrenAgeCheck?: boolean;
    exportToExcelRemovedClients?: boolean;
    feedbackCustomerPortalMessage?: string;
    feedbackCustomerPortalThankYouMessage?: string;
    feedbackCustomerPortalTitle?: string;
    feedBackMinRating?: FeedBackMinRating;
    finId?: string;
    finName?: string;
    hideCustomerPortalFooter?: boolean;
    highlightedResource?: boolean;
    manualExceptionSupport?: boolean;
    noInternetAlert?: boolean;
    pastTimeEdit?: number;
    paymentProvider?: PurplePaymentProvider;
    readonlyResourceSchedule?: boolean;
    resourceTimetableType?: ResourceTimetableType;
    revisionVersion?: number;
    schduleWeekViewIsDefault?: boolean;
    scheduleDefaultWorkersLimit?: number;
    scheduleDefaultWorkersLimitDay?: number | null;
    scheduleDefaultWorkersLimitWeek?: number | null;
    schedulerWeekViewType?: SchedulerWeekViewType;
    scheduleWorkerHours?: boolean;
    showAdditionalFields?: boolean;
    showAddress?: boolean;
    showBirthDate?: boolean;
    showClientAppear?: boolean;
    showClientAppearOnSchedule?: boolean;
    showClientBirthdayFilter?: boolean;
    showClientContractNumber?: boolean;
    showClientImage?: boolean;
    showClientPayment?: boolean;
    showDefaulterBlockscreen?: boolean;
    showDeliveryStatus?: boolean;
    showDepartmentFilter?: boolean;
    showDepartments?: boolean;
    showDepartmentsConfiguration?: boolean;
    showEmail?: boolean;
    showExtraClientInfo?: boolean;
    showFax?: boolean;
    showFiredWorkerAppointmentAlert?: boolean;
    showFirstAvailableSlot?: boolean;
    showGapWindow?: boolean;
    showGender?: boolean;
    showGenderInRecords?: boolean;
    showGeneratableReportsScreen?: boolean;
    showHouseNumber?: boolean;
    showIsraelCity?: boolean;
    showKupatHolim?: boolean;
    showLeadsScreen?: boolean;
    showManualChanges?: boolean;
    showPassportId?: boolean;
    showRooms?: boolean;
    showSeasonTickets?: boolean;
    showTaxonomyChildren?: boolean;
    showTaxonomyLocalization?: boolean;
    showTaxonomyVisitType?: boolean;
    showTestRecord?: boolean;
    showUTM?: boolean;
    showWidgetColorTheme?: boolean;
    showWorkerDescriptionInEvent?: boolean;
    showWorkerExtraId?: boolean;
    showWorkerStatus?: boolean;
    skipAppointmentPriceUpdate?: boolean;
    skipCancelIfClientNotAppear?: boolean;
    skipServiceFiltering?: boolean;
    splitFullNameXlsExport?: boolean;
    stateLevelHolidays?: {
        [key: string]: any;
    }[];
    stateLevelHolidaysNotWorking?: boolean;
    taxonomyChildrenMaxAge?: number;
    useAdditionalDurations?: boolean;
    useAdjacentTaxonomies?: boolean;
    useAdjacentTaxonomiesSlotSplitting?: boolean;
    useGtAppMethod?: boolean;
    workWeekEnd?: number;
    workWeekStart?: number;
}
export declare enum FeedBackMinRating {
    The1 = "1",
    The2 = "2",
    The3 = "3",
    The4 = "4",
    The5 = "5"
}
export declare enum PurplePaymentProvider {
    DeltaProcessing = "deltaProcessing",
    Disable = "DISABLE",
    YandexMoney = "yandexMoney"
}
export declare enum ResourceTimetableType {
    Default = "DEFAULT",
    Evenodd = "EVENODD"
}
export declare enum SchedulerWeekViewType {
    Week = "week",
    WorkWeek = "workWeek"
}
export declare enum BackofficeType {
    Common = "COMMON",
    Gt = "GT",
    Ll = "LL",
    Mb = "MB",
    Mu = "MU"
}
export interface FluffyBackofficeConfiguration {
    enableMasterImportance?: boolean;
    resourceTimetableType?: ResourceTimetableType;
}
export interface PurpleCabinet {
    active?: boolean;
    id?: string;
    name?: string;
}
export interface PurpleCallbackWidgetConfiguration {
    title1?: string;
    title2?: string;
}
export interface PurpleConsumable {
    extraID: string;
    name: string;
    quantity: number;
}
export interface PurpleDepartment {
    id: string;
    id_?: number;
    name: string;
}
/**
 * Содержит детальную информацию о бизнесе — название, адрес, график работы и другое
 */
export interface BusinessInfo {
    accepted_currency?: CurrencyList[];
    additional_info?: null | string;
    additionalFields?: AdditionalFields[];
    /**
     * Адреса компании или филиала
     */
    address?: AddressElement[];
    align_min_booking_time?: boolean | null;
    autoAcceptAppointment?: boolean;
    /**
     * если данный бизнес является витриной, идентификаторы бизнесов, которые входят в витрину
     */
    businessShowcaseAliases?: BusinessShowcaseAlias[];
    contactName?: null | string;
    date_joined?: Date;
    description?: string;
    /**
     * Список e-mail адресов компании или филиала
     */
    email?: string;
    fax?: Phone[];
    images?: string[];
    instant_messaging?: {
        [key: string]: any;
    }[];
    /**
     * является ли данный бизнес витриной
     */
    isShowcase?: boolean;
    language?: LanguageList;
    logo_url?: null | string;
    marketingNotifications?: MarketingNotifications;
    metro?: Metro;
    min_booking_time?: number | null;
    /**
     * Список телефонов бизнеса
     */
    mobile?: Phone[];
    /**
     * Название бизнеса
     */
    name?: string;
    networkID?: number | null;
    newboEnabledFor?: string[];
    paymentMethods?: PaymentMethods;
    /**
     * Список телефонов бизнеса
     */
    phone?: Phone[];
    phone_mask?: null | string;
    pricingType?: PricingType;
    revisionVersion?: number;
    schedulerTick?: number;
    /**
     * Короткое название филиала
     */
    shortName?: null | string;
    showAppointmentColor?: boolean;
    showAppointmentTooltip?: boolean;
    /**
     * если данный бизнес является витриной, здесь будет содержаться информация по бизнесам из
     * витрины
     */
    showcaseBusinessData?: ShowcaseBusinessDatum[];
    /**
     * идентификаторы витрин, в которых участвует данный бизнес
     */
    showcases?: ShowcaseElement[];
    showResourceWorkStatistics?: boolean;
    showWorkerProfession?: boolean;
    skipBilling?: boolean;
    smsDuplicateFilter?: SmsDuplicateFilter;
    social_network?: SocialNetworkSchema[];
    timetable?: Timetable;
    timezone?: null | string;
    verticalTranslation?: VerticalTranslation;
    website?: null | string;
}
export declare type AdditionalFields = any[] | boolean | number | number | null | AdditionalFieldsObject | string;
export interface AdditionalFieldsObject {
    name: string;
    requiredField: boolean;
    shortName: string;
    type: AdditionalFieldType;
    value: string;
}
export declare type AddressElement = any[] | boolean | AddressClass | number | number | null | string;
export interface AddressClass {
    address?: string;
    address_add?: string;
    admin_area?: string;
    admin_area_type?: string;
    building?: string;
    corps?: string;
    country: Country;
    group?: string;
    house_add?: string;
    kilometer?: string;
    latitude?: string;
    locality?: string;
    locality_type?: string;
    longitude?: string;
    metroStations?: PurpleMetroStation[];
    number?: string;
    office?: string;
    possesion?: string;
    street?: string;
    street_type?: string;
    sub_admin_area?: string;
    sub_admin_area_type?: string;
    sub_locality?: string;
    sub_locality_type?: string;
    way?: string;
    zip_code?: string;
}
export declare enum Country {
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
    Uz = "UZ"
}
export interface PurpleMetroStation {
    _id?: string;
    description?: string;
    name: string;
}
export interface BusinessShowcaseAlias {
    internalID?: string;
}
export declare type Phone = any[] | boolean | PhoneClass | number | number | null | string;
export interface PhoneClass {
    area_code: string;
    country_code: string;
    number: string;
}
export declare enum LanguageList {
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
    ZhCn = "zh-cn"
}
export interface MarketingNotifications {
    accepted: boolean;
    active: boolean;
    useSmsAlphaName: boolean;
}
export interface Metro {
    color?: string;
    distance?: number;
    name?: string;
}
export declare enum PaymentMethods {
    Amex = "Amex",
    Mastercard = "Mastercard",
    MoneyBookers = "MoneyBookers",
    PayPal = "PayPal",
    Visa = "Visa"
}
export declare enum PricingType {
    Default = "DEFAULT",
    MasterTopmaster = "MASTER_TOPMASTER"
}
export interface ShowcaseBusinessDatum {
    /**
     * Адреса компании или филиала
     */
    address?: AddressElement[];
    /**
     * Список e-mail адресов компании или филиала
     */
    email?: string;
    internalID?: string;
    language?: LanguageList;
    /**
     * Название бизнеса
     */
    name?: string;
    /**
     * Список телефонов бизнеса
     */
    phone?: Phone[];
    /**
     * Список видов приема филиала
     */
    receptionTypes?: string[];
    timezone?: string;
}
export interface ShowcaseElement {
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
    id: string;
    social_network: SocialNetwork;
    url: string;
}
export declare enum SocialNetwork {
    Facebook = "Facebook",
    GBooking = "GBooking",
    Google = "Google",
    LinkedIn = "LinkedIn",
    Mailru = "Mailru",
    Odnoklassniki = "Odnoklassniki",
    Twitter = "Twitter",
    VKontakte = "VKontakte",
    Yahoo = "Yahoo",
    Yandex = "Yandex"
}
/**
 * таблица регулярного недельного расписания
 */
export interface Timetable {
    /**
     * установлено ли расписание для сущности
     */
    active?: boolean;
    week?: Week;
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
    end: number;
    endDate?: TimeFrameDate;
    extraId?: string;
    /**
     * уникальный идентификатор временного слота
     */
    id?: string;
    resources?: string[];
    roomID?: string;
    /**
     * смещение в минутах от начала дня
     */
    start: number;
    startDate?: TimeFrameDate;
}
export declare type TimeFrameDate = Date | number;
export declare enum VerticalTranslation {
    Beauty = "BEAUTY",
    Fitness = "FITNESS",
    Generic = "GENERIC",
    Medical = "MEDICAL",
    None = "NONE",
    Sport = "SPORT",
    Yoga = "YOGA"
}
export declare enum Group {
    French = "FRENCH",
    General = "GENERAL",
    Hungarian = "HUNGARIAN",
    Latvian = "LATVIAN"
}
export interface PurpleMiniWidgetConfiguration {
    fields?: FieldElement[];
    title1?: string;
    title2?: string;
}
export declare enum FieldElement {
    Email = "email",
    Name = "name",
    Surname = "surname"
}
/**
 * Данные о работнике бизнеса
 */
export declare type Resource = any[] | boolean | ResourceResource | number | number | null | string;
export interface ResourceResource {
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
    color?: string;
    degree?: string;
    /**
     * идентификатор отделения, к которому привязан работник
     */
    departmentId?: string;
    /**
     * краткое описание работника
     */
    description?: string;
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
    emailEnabled?: boolean;
    evenOddTimetable: EvenOddTimetable;
    exceptions?: any[];
    experience?: Date;
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
    id: string;
    image?: string;
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
    loanedTo?: string;
    location: ResourceLocation;
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
    profile?: ИнформацияОПрофилеРаботника;
    /**
     * Рейтинг работника
     */
    rating?: number;
    readonlyTaxonomies?: string[];
    /**
     * Версия изменений документа
     */
    revisionVersion: number;
    scheduleIsEmpty?: boolean;
    /**
     * информация из внешней информационной системы как есть (при интеграции)
     */
    siteId?: string;
    /**
     * включена ли отправка смс уведомлений для данного работника
     */
    smsEnabled?: boolean;
    status?: ResourceStatus;
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
    timetable: Timetable;
    userData?: {
        [key: string]: any;
    };
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
export declare enum StartPeriod {
    Month = "month",
    Week = "week"
}
export interface ResourceLocation {
    latitude?: number;
    longitude?: number;
    /**
     * время последнего обновления координат
     */
    time?: string;
}
/**
 * вес работника, в зависимости от указанного способа сортировки
 */
export declare type OrderWeight = number | null | string;
/**
 * (только в витрине) объект с данными бизнеса-филиала
 *
 * Содержит детальную информацию о бизнесе — название, адрес, график работы и другое
 */
export interface Info {
    accepted_currency?: CurrencyList[];
    additional_info?: null | string;
    additionalFields?: AdditionalFields[];
    /**
     * Адреса компании или филиала
     */
    address?: AddressElement[];
    align_min_booking_time?: boolean | null;
    autoAcceptAppointment?: boolean;
    /**
     * если данный бизнес является витриной, идентификаторы бизнесов, которые входят в витрину
     */
    businessShowcaseAliases?: BusinessShowcaseAlias[];
    contactName?: null | string;
    date_joined?: Date;
    description?: string;
    /**
     * Список e-mail адресов компании или филиала
     */
    email?: string;
    fax?: Phone[];
    images?: string[];
    instant_messaging?: {
        [key: string]: any;
    }[];
    /**
     * является ли данный бизнес витриной
     */
    isShowcase?: boolean;
    language?: LanguageList;
    logo_url?: null | string;
    marketingNotifications?: MarketingNotifications;
    metro?: Metro;
    min_booking_time?: number | null;
    /**
     * Список телефонов бизнеса
     */
    mobile?: Phone[];
    /**
     * Название бизнеса
     */
    name?: string;
    networkID?: number | null;
    newboEnabledFor?: string[];
    paymentMethods?: PaymentMethods;
    /**
     * Список телефонов бизнеса
     */
    phone?: Phone[];
    phone_mask?: null | string;
    pricingType?: PricingType;
    revisionVersion?: number;
    schedulerTick?: number;
    /**
     * Короткое название филиала
     */
    shortName?: null | string;
    showAppointmentColor?: boolean;
    showAppointmentTooltip?: boolean;
    /**
     * если данный бизнес является витриной, здесь будет содержаться информация по бизнесам из
     * витрины
     */
    showcaseBusinessData?: ShowcaseBusinessDatum[];
    /**
     * идентификаторы витрин, в которых участвует данный бизнес
     */
    showcases?: ShowcaseElement[];
    showResourceWorkStatistics?: boolean;
    showWorkerProfession?: boolean;
    skipBilling?: boolean;
    smsDuplicateFilter?: SmsDuplicateFilter;
    social_network?: SocialNetworkSchema[];
    timetable?: Timetable;
    timezone?: null | string;
    verticalTranslation?: VerticalTranslation;
    website?: null | string;
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
export declare enum AccessType {
    None = "NONE",
    WorkerExtended = "WORKER_EXTENDED",
    WorkerSimple = "WORKER_SIMPLE"
}
export declare enum ResourceStatus {
    Active = "ACTIVE",
    Inactive = "INACTIVE"
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
export interface PurpleBusinessTaxonomy {
    active?: boolean;
    additionalDurations?: PurpleAdditionalDuration[];
    additionalPrices?: PurpleBusinessTaxonomyPrice[];
    additionalProducts?: PurpleBusinessTaxonomyProduct[];
    additionalTaxonomyExtraId?: {
        [key: string]: any;
    }[];
    adjacentSameTimeStart?: boolean;
    adjacentTaxonomies?: PurpleAdjacentTaxonomy[];
    alias?: {
        [key: string]: any;
    };
    allowBookingInBO?: boolean;
    allowNextBookingCount?: number;
    allowNextBookingInDays?: number;
    allowNextBookingInDaysText?: string;
    cabinets?: string[];
    cabinetsEnabled?: boolean;
    capacity?: number;
    capacity_decrease?: number;
    chargeUnitsStep?: number;
    childrenTaxonomyTypes?: ChildrenTaxonomyType[];
    color?: string;
    confirmationAlert?: string;
    confirmationSmsAlert?: string;
    dateLimits?: PurpleDateLimit[];
    dateLimitType?: DateLimitType;
    designs?: string[];
    discounts?: Discount;
    displayInWidget?: boolean;
    duration?: number;
    exceptions?: any[];
    extraDescription?: string;
    extraId?: string;
    extraLink?: string;
    forPay?: boolean;
    id?: string;
    images?: string[];
    isOther?: boolean;
    lastModified?: Date;
    leaves?: string[];
    manualChanges?: boolean;
    newTaxonomy?: boolean;
    onlineMode?: OnlineMode;
    onlyAfterTaxonomies?: string[];
    order?: number;
    parallelTaxonomies?: string[];
    popularity?: number;
    price?: PurplePrice;
    priceLink?: string;
    /**
     * Список видов приема услуги
     */
    receptionTypes?: string[];
    rooms?: string[];
    showcaseItems?: PurpleShowcaseItem[];
    showcases?: PurpleTaxonomyShowcase[];
    /**
     * Идентификатор услуги в витрине
     */
    showcaseTaxonomyID?: string;
    /**
     * Внешний идентификатор таксономии
     */
    siteId?: string;
    specialCabinet?: string;
    taxonomyAppExtraID?: string;
    taxonomyCategoryExtraID?: string;
    taxonomyParentID?: string;
    taxonomyType?: TaxonomyType;
    timetable?: Timetable;
    useConfirmationSmsAlert?: boolean;
    visitType?: string;
}
export interface PurpleAdditionalDuration {
    duration?: number | null;
    level?: number;
}
export interface PurpleBusinessTaxonomyPrice {
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
    stockAmount: null | string;
    /**
     * Тип цены
     */
    type?: AdditionalPriceType;
}
/**
 * Тип цены
 */
export declare enum AdditionalPriceType {
    Average = "average",
    BeginWith = "begin_with",
    Equal = "equal"
}
export interface PurpleBusinessTaxonomyProduct {
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
export interface PurpleAdjacentTaxonomy {
    isAnyAvailable?: boolean;
    order?: number;
    slotDuration?: number;
    taxonomyID?: string;
}
export declare enum ChildrenTaxonomyType {
    Child = "child",
    None = "none",
    Parent = "parent"
}
export declare enum DateLimitType {
    AllDates = "all_dates",
    FromDate = "from_date",
    RangeDates = "range_dates",
    ToDate = "to_date"
}
export interface PurpleDateLimit {
    _id?: string;
    dateLimitFrom?: Date;
    dateLimitTo?: Date;
}
/**
 * Информация о скидке
 */
export declare type Discount = any[] | boolean | DiscountClass | number | number | null | string;
export interface DiscountClass {
    active?: boolean;
    daysOfWeek?: DaysOfWeek;
    repeats?: Repeats;
    slots?: Slots;
    start?: Date;
    unlimWeeklyRepeat?: boolean;
    weeklyRepeat?: number;
}
export declare enum DaysOfWeek {
    Fri = "fri",
    Mon = "mon",
    Sat = "sat",
    Sun = "sun",
    Thu = "thu",
    Tue = "tue",
    Wed = "wed"
}
export declare enum Repeats {
    Daily = "daily",
    None = "none",
    Weekly = "weekly"
}
export interface Slots {
    time?: TimeFrame;
}
export declare enum OnlineMode {
    OncallOnline = "ONCALL_ONLINE",
    PlanClinic = "PLAN_CLINIC",
    PlanClinicOnline = "PLAN_CLINIC_ONLINE",
    PlanOnline = "PLAN_ONLINE"
}
export interface PurplePrice {
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
export interface PurpleShowcaseItem {
    _id?: string;
    additionalDurations?: FluffyAdditionalDuration[];
    businessID?: string;
    /**
     * Список видов приема услуги
     */
    receptionTypes?: string[];
    taxonomyID?: string;
}
export interface FluffyAdditionalDuration {
    _id?: string;
    duration?: number;
    /**
     * поддержка различной длительности услуг в зависимости от работника
     */
    level?: number;
}
export interface PurpleTaxonomyShowcase {
    baseBusinessID?: string;
    isBaseNode?: boolean;
    originBusinessID?: string;
    showcaseItemID?: string;
}
export declare enum TaxonomyType {
    Category = "CATEGORY",
    Service = "SERVICE",
    Subcategory = "SUBCATEGORY"
}
export interface PurpleTaxonomiesComplex {
    name?: string;
    taxonomies?: string[];
}
export interface PurpleTopServices {
    services?: any[];
    status?: string;
}
export interface PurpleWidgetConfiguration {
    additionalName?: string;
    alignmentTaxonomySlots?: boolean;
    allowAutoSelect?: boolean;
    allowBookVisitor?: boolean;
    allowSkipTimeCheck?: boolean;
    appointment_confirmation_text?: string;
    appointment_confirmation_title?: string;
    askClientBirthday?: boolean;
    askClientGender?: boolean;
    bookableDateRanges?: PurpleBookableDateRanges;
    bookableMonthsCount?: number;
    calendarMode?: boolean;
    calendarModeHideTime?: boolean;
    clientBlockingSettings?: PurpleClientBlockingSettings;
    clientCommentTitle?: string;
    cracServer?: CracServer;
    cracSlotSize?: number;
    crunchv2?: boolean;
    dayOffLabel?: string;
    daysForward?: number;
    dayUnavailableLabel?: string;
    defaultServiceImgUrl?: string;
    defaultWorkerImgUrl?: string;
    denySameTimeRecords?: boolean;
    disabledTaxonomiesText?: string;
    disableMobileWidget?: boolean;
    disableWidget?: boolean;
    disableWidgetMessage?: string;
    discountedPriceRounding?: PurpleDiscountedPriceRounding;
    displaySlotSize?: number;
    dontRequireEmail?: boolean;
    emailIsMandatory?: boolean;
    enableOverrideFooter?: boolean;
    enableWarningContactData?: boolean;
    extraVisitors?: boolean;
    filterNonInsuranceSchedule?: boolean;
    hideAnyWorkerBooking?: boolean;
    hideCallButton?: boolean;
    hideEmptyDays?: boolean;
    hideGBookingLogo?: boolean;
    hideGraySlots?: boolean;
    hideNewAppointmentButton?: boolean;
    hidePrices?: boolean;
    hideSocialNetworksAuthentication?: boolean;
    insuranceClientSupportPhone?: Phone[];
    maxServiceBooking?: number;
    maxTimeslotBooking?: number;
    middleNameSupport?: boolean;
    mostFreeEnable?: boolean;
    multiServiceBooking?: boolean;
    multiTimeslotBooking?: boolean;
    multiTimeslotBookingAllDays?: boolean;
    newWidgetTheme?: {
        [key: string]: any;
    };
    noDefaultImages?: boolean;
    overrideFooter?: string;
    payment?: Payment;
    paymentProvider?: PurplePaymentProvider;
    requireAgreement?: boolean;
    requireAgreementLink?: string;
    revisionVersion?: number;
    shortLink?: string;
    showAllWorkers?: boolean;
    showClientAddress?: boolean;
    showClientComment?: boolean;
    showDisabledTaxonomies?: boolean;
    showDrinkQuestion?: boolean;
    showMap?: boolean;
    showStartText?: boolean;
    showSurnameFirst?: boolean;
    showTalkQuestion?: boolean;
    showTaxonomyConfirmationAlert?: boolean;
    skipAuthentication?: boolean;
    skipDaysForward?: boolean;
    skipMobileMap?: boolean;
    skipServiceDurationAlignment?: boolean;
    skipServiceSelection?: boolean;
    skipTimeSelection?: boolean;
    skipTimeSelectionServiceIDs?: string[];
    skipWorkerSelectedServiceIDs?: string[];
    skipWorkerServicesSelection?: boolean;
    socialNetworkImage?: string;
    socialSharing?: PurpleSocialSharing;
    sortByMostFree?: boolean;
    sortWorkersByWorkload?: boolean;
    splitInsuranceClient?: boolean;
    splitName?: boolean;
    startTextButton?: string;
    startTextMessage?: string;
    tentativeTTL?: number;
    theme?: string;
    useAppointmentReminder?: boolean;
    useBusinessScheduleForUnavailableLabel?: boolean;
    useClustersMap?: boolean;
    useCoupon?: boolean;
    useCRAC?: boolean;
    useDefaultServiceImg?: boolean;
    useDefaultWorkerImg?: boolean;
    useDirectScheduleRead?: UseDirectScheduleRead;
    useInsuranceGuaranteeLetter?: boolean;
    useInsuranceSelect?: boolean;
    useMedAuth?: boolean;
    useMiddleName?: boolean;
    useNewReserveAPI?: boolean;
    useResourcePageLoading?: boolean;
    useSortByName?: boolean;
    warningContactDataText?: string;
    widgetUseCRAC?: boolean;
    withoutWorkers?: boolean;
    worker_unavailability_text?: string;
    workerNameReverse?: boolean;
}
export interface PurpleBookableDateRanges {
    enabled?: boolean;
    end?: any;
    start?: any;
}
export interface PurpleClientBlockingSettings {
    appointmentClientBlock?: boolean;
    appointmentClientBlockDays?: number;
    appointmentClientBlockText?: string;
    blockIfFutureRecordExists?: boolean;
    blockRepeatedRecordsCount?: number;
    blockRepeatedRecordsRange?: number;
    blockRepeatedRecordsText?: string;
}
export declare enum CracServer {
    Crac = "CRAC",
    CracProd3 = "CRAC_PROD3"
}
export interface PurpleDiscountedPriceRounding {
    rule?: Rule;
    value?: number;
}
export declare enum Rule {
    Custom = "CUSTOM",
    NearestInteger = "NEAREST_INTEGER",
    TwoDecimals = "TWO_DECIMALS"
}
export declare enum Payment {
    Optional = "OPTIONAL",
    Required = "REQUIRED",
    Without = "WITHOUT"
}
export interface PurpleSocialSharing {
    active?: boolean;
    discountAmount?: number | null;
    discountEnabled?: boolean;
    discountType?: DiscountType;
    text?: null | string;
    widgetText?: null | string;
}
export declare enum DiscountType {
    Percent = "PERCENT"
}
export declare enum UseDirectScheduleRead {
    All = "ALL",
    Authenticated = "AUTHENTICATED",
    Guest = "GUEST",
    None = "NONE"
}
export interface NetworkWidgetConfiguration {
    _id?: string;
    businesses: BusinessElement[];
    defaultServiceID: null | string;
    showBranchSelector: boolean;
    showDefaultService: boolean;
    showOnMap: boolean;
    source: string;
}
export interface BusinessElement {
    _id?: string;
    active: boolean;
    internalID: string;
}
export interface GetProfileById {
    request: BusinessGetProfileByIdRequest;
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
    id: BackofficeIdUnion;
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
     *
     * параметры запроса business.get_profile_by_id
     */
    params: BusinessGetProfileByIdRequestParams;
}
/**
 * параметры запроса business.get_profile_by_id
 */
export interface BusinessGetProfileByIdRequestParams {
    business: IndecentBusiness;
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
    showcase_business_id?: BackofficeIdUnion;
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
export interface IndecentBusiness {
    /**
     * идентификатор бизнеса
     */
    id: string;
}
/**
 * тип сортировки работника
 */
export declare enum WorkerSortingType {
    MostFree = "most_free",
    None = "none",
    Workload = "workload"
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
    active?: boolean;
    business: ResultBusiness;
    freeSms?: number;
    monthlyFreeSms?: number;
    networks?: NetworkElement[];
    profiles?: {
        [key: string]: any;
    }[];
    top_services?: ResultTopServices;
    useDefaultSmsTemplate?: boolean;
    yandexFeedType?: YandexFeedType;
}
export declare type ResultBusiness = any[] | boolean | HilariousBusiness | number | number | null | string;
export interface HilariousBusiness {
    active?: boolean;
    additionalSettings?: FluffyAdditionalSettings;
    allowCategoryBooking?: boolean;
    backoffice_configuration?: StickyBackofficeConfiguration;
    backofficeConfiguration?: TentacledBackofficeConfiguration;
    backofficeType?: BackofficeType;
    cabinets?: FluffyCabinet[];
    cabinetsEnabled?: boolean;
    callback_widget_configuration?: FluffyCallbackWidgetConfiguration;
    consumables?: FluffyConsumable[];
    created_on?: Date;
    defaultFilteredWorkers?: string[];
    departments?: FluffyDepartment[];
    designs?: {
        [key: string]: any;
    }[];
    extraID?: string;
    flatTaxonomyDisplay?: boolean;
    general_info: BusinessInfo;
    group?: Group;
    id?: string;
    integration_data?: {
        [key: string]: any;
    };
    mini_widget_configuration: FluffyMiniWidgetConfiguration;
    mobileData?: any[];
    notifications?: any[];
    resources: Resource[];
    stateLevelHolidaysNotWorking?: boolean;
    taxonomies: FluffyBusinessTaxonomy[];
    taxonomiesComplex?: FluffyTaxonomiesComplex[];
    taxonomy_tree_capacity?: {
        [key: string]: any;
    }[];
    top_services?: FluffyTopServices;
    vertical?: string;
    widget_configuration: FluffyWidgetConfiguration;
    yandexFeedType?: string;
}
export interface FluffyAdditionalSettings {
    appointmentExtensionAmount?: number;
    appointmentExtensionType?: AppointmentExtensionType;
}
export interface TentacledBackofficeConfiguration {
    adjacentTaxonomiesTreshold?: number;
    allowHideServiceForBooking?: boolean;
    allowHideWorkersFromSchdeule?: boolean;
    allowSmsTranslit?: boolean;
    appointmentFutureMoving?: boolean;
    blockNotificationForAnyAvailableAdjacentService?: boolean;
    cabinetsEnabled?: boolean;
    checkClientOverlapping?: boolean;
    customOnlinePaymentConfirmationTemplate?: string;
    defaultGTScheduleDayView?: boolean;
    disableAppointmentClientInlineEditor?: boolean;
    editAppExtraId?: boolean;
    editTaxonomyChildren?: boolean;
    editTaxonomyVisitType?: boolean;
    enableBlackList?: boolean;
    enableCalculateShedule?: boolean;
    enableClientCard?: boolean;
    enableClientLanguage?: boolean;
    enableClientMedicalCardReport?: boolean;
    enableCustomOnlinePaymentConfirmation?: boolean;
    enableExtendedPhone?: boolean;
    enableExtendedRecordsClientStatistics?: boolean;
    enableMasterImportance?: boolean;
    enableServiceTimeLimit?: boolean;
    enableSourceChoice?: boolean;
    enableTaxonomyChildrenAgeCheck?: boolean;
    exportToExcelRemovedClients?: boolean;
    feedbackCustomerPortalMessage?: string;
    feedbackCustomerPortalThankYouMessage?: string;
    feedbackCustomerPortalTitle?: string;
    feedBackMinRating?: FeedBackMinRating;
    finId?: string;
    finName?: string;
    hideCustomerPortalFooter?: boolean;
    highlightedResource?: boolean;
    manualExceptionSupport?: boolean;
    noInternetAlert?: boolean;
    pastTimeEdit?: number;
    paymentProvider?: FluffyPaymentProvider;
    readonlyResourceSchedule?: boolean;
    resourceTimetableType?: ResourceTimetableType;
    revisionVersion?: number;
    schduleWeekViewIsDefault?: boolean;
    scheduleDefaultWorkersLimit?: number;
    scheduleDefaultWorkersLimitDay?: number | null;
    scheduleDefaultWorkersLimitWeek?: number | null;
    schedulerWeekViewType?: SchedulerWeekViewType;
    scheduleWorkerHours?: boolean;
    showAdditionalFields?: boolean;
    showAddress?: boolean;
    showBirthDate?: boolean;
    showClientAppear?: boolean;
    showClientAppearOnSchedule?: boolean;
    showClientBirthdayFilter?: boolean;
    showClientContractNumber?: boolean;
    showClientImage?: boolean;
    showClientPayment?: boolean;
    showDefaulterBlockscreen?: boolean;
    showDeliveryStatus?: boolean;
    showDepartmentFilter?: boolean;
    showDepartments?: boolean;
    showDepartmentsConfiguration?: boolean;
    showEmail?: boolean;
    showExtraClientInfo?: boolean;
    showFax?: boolean;
    showFiredWorkerAppointmentAlert?: boolean;
    showFirstAvailableSlot?: boolean;
    showGapWindow?: boolean;
    showGender?: boolean;
    showGenderInRecords?: boolean;
    showGeneratableReportsScreen?: boolean;
    showHouseNumber?: boolean;
    showIsraelCity?: boolean;
    showKupatHolim?: boolean;
    showLeadsScreen?: boolean;
    showManualChanges?: boolean;
    showPassportId?: boolean;
    showRooms?: boolean;
    showSeasonTickets?: boolean;
    showTaxonomyChildren?: boolean;
    showTaxonomyLocalization?: boolean;
    showTaxonomyVisitType?: boolean;
    showTestRecord?: boolean;
    showUTM?: boolean;
    showWidgetColorTheme?: boolean;
    showWorkerDescriptionInEvent?: boolean;
    showWorkerExtraId?: boolean;
    showWorkerStatus?: boolean;
    skipAppointmentPriceUpdate?: boolean;
    skipCancelIfClientNotAppear?: boolean;
    skipServiceFiltering?: boolean;
    splitFullNameXlsExport?: boolean;
    stateLevelHolidays?: {
        [key: string]: any;
    }[] | null;
    stateLevelHolidaysNotWorking?: boolean;
    taxonomyChildrenMaxAge?: number;
    useAdditionalDurations?: boolean;
    useAdjacentTaxonomies?: boolean;
    useAdjacentTaxonomiesSlotSplitting?: boolean;
    useGtAppMethod?: boolean;
    workWeekEnd?: number;
    workWeekStart?: number;
}
export declare enum FluffyPaymentProvider {
    Cloudpayments = "cloudpayments",
    DeltaProcessing = "deltaProcessing",
    Disable = "DISABLE",
    Pelecard = "pelecard",
    YandexMoney = "yandexMoney"
}
export interface StickyBackofficeConfiguration {
    enableMasterImportance?: boolean;
    resourceTimetableType?: ResourceTimetableType;
}
export interface FluffyCabinet {
    active?: boolean;
    id?: string;
    name?: string;
}
export interface FluffyCallbackWidgetConfiguration {
    title1?: string;
    title2?: string;
}
export interface FluffyConsumable {
    extraID: string;
    name: string;
    quantity: number;
}
export interface FluffyDepartment {
    id: string;
    id_?: number;
    name: string;
}
export interface FluffyMiniWidgetConfiguration {
    fields?: FieldElement[];
    title1?: string;
    title2?: string;
}
export interface FluffyBusinessTaxonomy {
    active?: boolean;
    additionalDurations?: TentacledAdditionalDuration[];
    additionalPrices?: FluffyBusinessTaxonomyPrice[];
    additionalProducts?: FluffyBusinessTaxonomyProduct[];
    additionalTaxonomyExtraId?: {
        [key: string]: any;
    }[];
    adjacentSameTimeStart?: boolean;
    adjacentTaxonomies?: FluffyAdjacentTaxonomy[];
    alias?: {
        [key: string]: any;
    };
    allowBookingInBO?: boolean;
    allowNextBookingCount?: number;
    allowNextBookingInDays?: number;
    allowNextBookingInDaysText?: string;
    cabinets?: string[];
    cabinetsEnabled?: boolean;
    capacity?: number;
    capacity_decrease?: number;
    chargeUnitsStep?: number;
    childrenTaxonomyTypes?: ChildrenTaxonomyType[];
    color?: string;
    confirmationAlert?: string;
    confirmationSmsAlert?: string;
    dateLimits?: FluffyDateLimit[];
    dateLimitType?: DateLimitType;
    designs?: string[];
    discounts?: Discount;
    displayInWidget?: boolean;
    duration?: number;
    exceptions?: any[];
    extraDescription?: string;
    extraId?: string;
    extraLink?: string;
    forPay?: boolean;
    id?: string;
    images?: string[];
    isOther?: boolean;
    lastModified?: Date;
    leaves?: string[];
    manualChanges?: boolean;
    newTaxonomy?: boolean;
    onlineMode?: OnlineMode;
    onlyAfterTaxonomies?: string[];
    order?: number;
    parallelTaxonomies?: string[];
    popularity?: number;
    price?: FluffyPrice;
    priceLink?: string;
    /**
     * Список видов приема услуги
     */
    receptionTypes?: string[];
    rooms?: string[];
    showcaseItems?: FluffyShowcaseItem[];
    showcases?: FluffyTaxonomyShowcase[];
    /**
     * Идентификатор услуги в витрине
     */
    showcaseTaxonomyID?: string;
    /**
     * Внешний идентификатор таксономии
     */
    siteId?: string;
    specialCabinet?: string;
    taxonomyAppExtraID?: string;
    taxonomyCategoryExtraID?: string;
    taxonomyParentID?: string;
    taxonomyType?: TaxonomyType;
    timetable?: Timetable;
    useConfirmationSmsAlert?: boolean;
    visitType?: string;
}
export interface TentacledAdditionalDuration {
    duration?: number | null;
    level?: number;
}
export interface FluffyBusinessTaxonomyPrice {
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
    stockAmount: null | string;
    /**
     * Тип цены
     */
    type?: AdditionalPriceType;
}
export interface FluffyBusinessTaxonomyProduct {
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
export interface FluffyAdjacentTaxonomy {
    isAnyAvailable?: boolean;
    order?: number;
    slotDuration?: number;
    taxonomyID?: string;
}
export interface FluffyDateLimit {
    _id?: string;
    dateLimitFrom?: Date;
    dateLimitTo?: Date;
}
export interface FluffyPrice {
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
export interface FluffyShowcaseItem {
    _id?: string;
    additionalDurations?: StickyAdditionalDuration[];
    businessID?: string;
    /**
     * Список видов приема услуги
     */
    receptionTypes?: string[];
    taxonomyID?: string;
}
export interface StickyAdditionalDuration {
    _id?: string;
    duration?: number;
    /**
     * поддержка различной длительности услуг в зависимости от работника
     */
    level?: number;
}
export interface FluffyTaxonomyShowcase {
    baseBusinessID?: string;
    isBaseNode?: boolean;
    originBusinessID?: string;
    showcaseItemID?: string;
}
export interface FluffyTaxonomiesComplex {
    name?: string;
    taxonomies?: string[];
}
export interface FluffyTopServices {
    services?: any[];
    status?: string;
}
export interface FluffyWidgetConfiguration {
    additionalName?: string;
    alignmentTaxonomySlots?: boolean;
    allowAutoSelect?: boolean;
    allowBookVisitor?: boolean;
    allowSkipTimeCheck?: boolean;
    appointment_confirmation_text?: string;
    appointment_confirmation_title?: string;
    askClientBirthday?: boolean;
    askClientGender?: boolean;
    bookableDateRanges?: FluffyBookableDateRanges;
    bookableMonthsCount?: number;
    calendarMode?: boolean;
    calendarModeHideTime?: boolean;
    clientBlockingSettings?: FluffyClientBlockingSettings;
    clientCommentTitle?: string;
    cracServer?: CracServer;
    cracSlotSize?: number;
    crunchv2?: boolean;
    dayOffLabel?: string;
    daysForward?: number;
    dayUnavailableLabel?: string;
    defaultServiceImgUrl?: string;
    defaultWorkerImgUrl?: string;
    denySameTimeRecords?: boolean;
    disabledTaxonomiesText?: string;
    disableMobileWidget?: boolean;
    disableWidget?: boolean;
    disableWidgetMessage?: string;
    discountedPriceRounding?: FluffyDiscountedPriceRounding;
    displaySlotSize?: number;
    dontRequireEmail?: boolean;
    emailIsMandatory?: boolean;
    enableOverrideFooter?: boolean;
    enableWarningContactData?: boolean;
    extraVisitors?: boolean;
    filterNonInsuranceSchedule?: boolean;
    hideAnyWorkerBooking?: boolean;
    hideCallButton?: boolean;
    hideEmptyDays?: boolean;
    hideGBookingLogo?: boolean;
    hideGraySlots?: boolean;
    hideNewAppointmentButton?: boolean;
    hidePrices?: boolean;
    hideSocialNetworksAuthentication?: boolean;
    insuranceClientSupportPhone?: Phone[];
    maxServiceBooking?: number;
    maxTimeslotBooking?: number;
    middleNameSupport?: boolean;
    mostFreeEnable?: boolean;
    multiServiceBooking?: boolean;
    multiTimeslotBooking?: boolean;
    multiTimeslotBookingAllDays?: boolean;
    newWidgetTheme?: {
        [key: string]: any;
    };
    noDefaultImages?: boolean;
    overrideFooter?: string;
    payment?: Payment;
    paymentProvider?: FluffyPaymentProvider;
    requireAgreement?: boolean;
    requireAgreementLink?: string;
    revisionVersion?: number;
    shortLink?: string;
    showAllWorkers?: boolean;
    showClientAddress?: boolean;
    showClientComment?: boolean;
    showDisabledTaxonomies?: boolean;
    showDrinkQuestion?: boolean;
    showMap?: boolean;
    showStartText?: boolean;
    showSurnameFirst?: boolean;
    showTalkQuestion?: boolean;
    showTaxonomyConfirmationAlert?: boolean;
    skipAuthentication?: boolean;
    skipDaysForward?: boolean;
    skipMobileMap?: boolean;
    skipServiceDurationAlignment?: boolean;
    skipServiceSelection?: boolean;
    skipTimeSelection?: boolean;
    skipTimeSelectionServiceIDs?: string[];
    skipWorkerSelectedServiceIDs?: string[];
    skipWorkerServicesSelection?: boolean;
    socialNetworkImage?: string;
    socialSharing?: FluffySocialSharing;
    sortByMostFree?: boolean;
    sortWorkersByWorkload?: boolean;
    splitInsuranceClient?: boolean;
    splitName?: boolean;
    startTextButton?: string;
    startTextMessage?: string;
    tentativeTTL?: number;
    theme?: string;
    useAppointmentReminder?: boolean;
    useBusinessScheduleForUnavailableLabel?: boolean;
    useClustersMap?: boolean;
    useCoupon?: boolean;
    useCRAC?: boolean;
    useDefaultServiceImg?: boolean;
    useDefaultWorkerImg?: boolean;
    useDirectScheduleRead?: UseDirectScheduleRead;
    useInsuranceGuaranteeLetter?: boolean;
    useInsuranceSelect?: boolean;
    useMedAuth?: boolean;
    useMiddleName?: boolean;
    useNewReserveAPI?: boolean;
    useResourcePageLoading?: boolean;
    useSortByName?: boolean;
    warningContactDataText?: string;
    widgetUseCRAC?: boolean;
    withoutWorkers?: boolean;
    worker_unavailability_text?: string;
    workerNameReverse?: boolean;
}
export interface FluffyBookableDateRanges {
    enabled?: boolean;
    end?: any;
    start?: any;
}
export interface FluffyClientBlockingSettings {
    appointmentClientBlock?: boolean;
    appointmentClientBlockDays?: number;
    appointmentClientBlockText?: string;
    blockIfFutureRecordExists?: boolean;
    blockRepeatedRecordsCount?: number;
    blockRepeatedRecordsRange?: number;
    blockRepeatedRecordsText?: string;
}
export interface FluffyDiscountedPriceRounding {
    rule?: Rule;
    value?: number;
}
export interface FluffySocialSharing {
    active?: boolean;
    discountAmount?: number | null;
    discountEnabled?: boolean;
    discountType?: DiscountType;
    text?: null | string;
    widgetText?: null | string;
}
export interface NetworkElement {
    address?: Address;
    businessName: string;
    description: string;
    internalID: string;
}
export declare type Address = any[] | boolean | AddressCamelCaseSchema | number | number | null | string;
export interface AddressCamelCaseSchema {
    address?: string;
    addressAdd?: string;
    adminArea?: string;
    adminAreaType?: string;
    building?: string;
    corps?: string;
    country: Country;
    group?: string;
    houseAdd?: string;
    kilometer?: string;
    latitude?: string;
    locality?: string;
    localityType?: string;
    longitude?: string;
    metroStations?: FluffyMetroStation[];
    number?: string;
    office?: string;
    possesion?: string;
    street?: string;
    streetType?: string;
    subAdminArea?: string;
    subAdminAreaType?: string;
    subLocality?: string;
    subLocalityType?: string;
    way?: string;
    zipCode?: string;
}
export interface FluffyMetroStation {
    _id?: string;
    description?: string;
    name: string;
}
export interface ResultTopServices {
    services: string[];
    status: boolean;
}
export declare enum YandexFeedType {
    Dynamic = "dynamic",
    No = "no",
    Static = "static",
    StaticServiceOnly = "static-service-only"
}
export interface ClientController {
    add_client: AddClient;
    find_or_create_client?: FindOrCreateClient;
}
export interface AddClient {
    request: ClientAddClientRequest;
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
    id: BackofficeIdUnion;
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
    business: AmbitiousBusiness;
    client: ClientObject;
    profile?: ParamsProfile;
    skipEmailCheck?: boolean;
    skipProfileUpdate?: boolean;
}
export interface AmbitiousBusiness {
    /**
     * идентификатор бизнеса
     */
    id: BackofficeIdUnion;
}
/**
 * Данные клиента
 */
export interface ClientObject {
    birthday?: Birthday;
    creatorProfileID?: null | string;
    creatorProfileName?: null | string;
    driverLicense?: null | string;
    email?: string[];
    fromSms?: FromSms;
    middle_name?: string;
    name: string;
    phone: Phone;
    sex?: Sex;
    surname: string;
    taxiPark?: null | string;
    taxiParkMemberCount?: OrderWeight;
}
export declare type Birthday = {
    [key: string]: any;
} | string;
export declare type FromSms = boolean | string;
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
    business?: CunningBusiness;
    client: ClientObject;
    documents?: any[];
    profile?: PurpleProfile;
}
export interface CunningBusiness {
    id: string;
}
export interface PurpleProfile {
    id: string;
}
export interface FindOrCreateClient {
    request: ClientFindOrCreateClientRequest;
    response: ClientFindOfCreateClientResponse;
}
export interface ClientFindOrCreateClientRequest {
    /**
     * авторизационные параметры
     */
    cred?: Cred;
    /**
     * значение числового типа для идентификации запроса на сервере
     */
    id: BackofficeIdUnion;
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
    params: ClientFindOrCreateClientRequestParams;
}
/**
 * параметры запроса
 */
export interface ClientFindOrCreateClientRequestParams {
    business: MagentaBusiness;
    network?: FluffyNetwork;
    skipEmailCheck?: boolean;
    skipProfileUpdate?: boolean;
}
export interface MagentaBusiness {
    /**
     * идентификатор бизнеса
     */
    id: BackofficeIdUnion;
}
export interface FluffyNetwork {
    /**
     * идентификатор нетворка
     */
    id: BackofficeIdUnion;
}
export interface ClientFindOfCreateClientResponse {
    result?: ClientFindOfCreateClientResponseResult;
    /**
     * объект, содержащий информацию об ошибке
     */
    error?: ClientFindOfCreateClientResponseError;
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
export interface ClientFindOfCreateClientResponseError {
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
export interface ClientFindOfCreateClientResponseResult {
    business?: FriskyBusiness;
    client: ClientObject;
    documents?: any[];
    profile?: FluffyProfile;
}
export interface FriskyBusiness {
    id: string;
}
export interface FluffyProfile {
    id: string;
}
export interface CracSlotsController {
    CRACDistributedResourcesFreeByDate?: CracDistributedResourcesFreeByDate;
    CRACResourcesFreeByDate?: CracResourcesFreeByDate;
    CRACResourcesFreeByDateV2?: CracResourcesFreeByDateV2;
    GetCRACDistributedResourcesAndRooms: GetCracDistributedResourcesAndRooms;
    GetCRACInsuranceResourcesAndRooms?: GetCracInsuranceResourcesAndRooms;
    GetCRACResourcesAndRooms?: GetCracResourcesAndRooms;
}
export interface CracDistributedResourcesFreeByDate {
    request: CracCracDistributedResourcesFreeByDateRequest;
    response: CracCracDistributedResourcesFreeByDateResponse;
}
export interface CracCracDistributedResourcesFreeByDateRequest {
    /**
     * авторизационные параметры
     */
    cred?: Cred;
    /**
     * значение числового типа для идентификации запроса на сервере
     */
    id: BackofficeIdUnion;
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
    params: CracCracDistributedResourcesFreeByDateRequestParam[];
}
export interface CracCracDistributedResourcesFreeByDateRequestParam {
    business: MischievousBusiness;
    resources: string[];
    taxonomy: PurpleTaxonomy;
}
export interface MischievousBusiness {
    id: string;
}
export interface PurpleTaxonomy {
    id: string;
}
export interface CracCracDistributedResourcesFreeByDateResponse {
    /**
     * объект, содержащий информацию об ошибке
     */
    error: null | CracCracDistributedResourcesFreeByDateResponseError;
    /**
     * значение числового типа для идентификации запроса на сервере
     */
    id: number;
    result?: CracCracDistributedResourcesFreeByDateResponseResult;
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
export interface CracCracDistributedResourcesFreeByDateResponseError {
    /**
     * код ошибки
     */
    code?: number;
    /**
     * дополнительные данные об ошибке
     */
    data?: string;
    /**
     * текстовая информация об ошибке
     */
    message?: string;
}
export interface CracCracDistributedResourcesFreeByDateResponseResult {
    Free: PurpleFree[];
}
export interface PurpleFree {
    date: Date;
    maxFreeMinutes: number;
    resource: string;
    taxonomy: string;
}
export interface CracResourcesFreeByDate {
    request: CracCracResourcesFreeByDateRequest;
    response: CracCracResourcesFreeByDateResponse;
}
export interface CracCracResourcesFreeByDateRequest {
    /**
     * авторизационные параметры
     */
    cred?: Cred;
    /**
     * значение числового типа для идентификации запроса на сервере
     */
    id: BackofficeIdUnion;
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
    params: CracCracResourcesFreeByDateRequestParam[];
}
export interface CracCracResourcesFreeByDateRequestParam {
    duration: number;
    resources: string[];
    taxonomy: FluffyTaxonomy;
}
export interface FluffyTaxonomy {
    id: string;
}
export interface CracCracResourcesFreeByDateResponse {
    /**
     * объект, содержащий информацию об ошибке
     */
    error: null | CracCracResourcesFreeByDateResponseError;
    /**
     * значение числового типа для идентификации запроса на сервере
     */
    id: number;
    result?: CracCracResourcesFreeByDateResponseResult;
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
export interface CracCracResourcesFreeByDateResponseError {
    /**
     * код ошибки
     */
    code?: number;
    /**
     * дополнительные данные об ошибке
     */
    data?: string;
    /**
     * текстовая информация об ошибке
     */
    message?: string;
}
export interface CracCracResourcesFreeByDateResponseResult {
    Free: FluffyFree[];
}
export interface FluffyFree {
    date: Date;
    maxFreeMinutes: number;
    resource: string;
    taxonomy: string;
}
export interface CracResourcesFreeByDateV2 {
    request: CracCracResourcesFreeByDateV2Request;
    response: CracCracResourcesFreeByDateV2Response;
}
export interface CracCracResourcesFreeByDateV2Request {
    /**
     * авторизационные параметры
     */
    cred?: Cred;
    /**
     * значение числового типа для идентификации запроса на сервере
     */
    id: BackofficeIdUnion;
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
    params: CracCracResourcesFreeByDateV2RequestParam[];
}
export interface CracCracResourcesFreeByDateV2RequestParam {
    business: BraggadociousBusiness;
    duration: number;
    durations: number[];
    resources: string[];
    taxonomy: TentacledTaxonomy;
}
export interface BraggadociousBusiness {
    id: string;
}
export interface TentacledTaxonomy {
    id: string;
}
export interface CracCracResourcesFreeByDateV2Response {
    /**
     * объект, содержащий информацию об ошибке
     */
    error: null | CracCracResourcesFreeByDateV2ResponseError;
    /**
     * значение числового типа для идентификации запроса на сервере
     */
    id: number;
    result?: CracCracResourcesFreeByDateV2ResponseResult;
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
export interface CracCracResourcesFreeByDateV2ResponseError {
    /**
     * код ошибки
     */
    code?: number;
    /**
     * дополнительные данные об ошибке
     */
    data?: string;
    /**
     * текстовая информация об ошибке
     */
    message?: string;
}
export interface CracCracResourcesFreeByDateV2ResponseResult {
    Free: TentacledFree[];
}
export interface TentacledFree {
    date: Date;
    maxFreeMinutes: number;
    resource: string;
    taxonomy: string;
}
export interface GetCracDistributedResourcesAndRooms {
    request: CracSlotsGetCracDistributedResourcesAndRoomsRequest;
    response: CracSlotsGetCracDistributedResourcesAndRoomsResponse;
}
export interface CracSlotsGetCracDistributedResourcesAndRoomsRequest {
    /**
     * авторизационные параметры
     */
    cred?: Cred;
    /**
     * значение числового типа для идентификации запроса на сервере
     */
    id: BackofficeIdUnion;
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
    params: CracSlotsGetCracDistributedResourcesAndRoomsRequestParams;
}
/**
 * параметры запроса
 */
export interface CracSlotsGetCracDistributedResourcesAndRoomsRequestParams {
    business: Business1;
    filters: PurpleFilters;
}
export interface Business1 {
    general_info: PurpleGeneralInfo;
    id: string;
    widget_configuration: TentacledWidgetConfiguration;
}
export interface PurpleGeneralInfo {
    timezone: string;
}
export interface TentacledWidgetConfiguration {
    cracServer: string;
    mostFreeEnable?: boolean;
}
export interface PurpleFilters {
    date: PurpleDate;
    resources: PurpleResourceFilter[];
    rooms: string[];
    taxonomies: string[];
}
export interface PurpleDate {
    from: string;
    to: string;
}
export interface PurpleResourceFilter {
    business: ResourceBusiness;
    /**
     * идентификатор ресурса
     */
    resource: string;
}
export interface ResourceBusiness {
    /**
     * идентификатор бизнеса
     */
    id: string;
}
export interface CracSlotsGetCracDistributedResourcesAndRoomsResponse {
    /**
     * значение числового типа для идентификации запроса на сервере
     */
    id: number;
    /**
     * версия протокола (2.0)
     */
    jsonrpc: string;
    result?: CracSlotsGetCracDistributedResourcesAndRoomsResponseResult;
    /**
     * объект, содержащий информацию об ошибке
     */
    error?: CracSlotsGetCracDistributedResourcesAndRoomsResponseError;
}
/**
 * объект, содержащий информацию об ошибке
 *
 * Код ошибки авторизации
 */
export interface CracSlotsGetCracDistributedResourcesAndRoomsResponseError {
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
export interface CracSlotsGetCracDistributedResourcesAndRoomsResponseResult {
    slots: PurpleSlot[];
}
export interface PurpleSlot {
    date: Date;
    resources: any[];
    rooms: {
        [key: string]: any;
    }[];
}
export interface GetCracInsuranceResourcesAndRooms {
    request: CracSlotsGetCracInsuranceResourcesAndRoomsRequest;
    response: CracSlotsGetCracInsuranceResourcesAndRoomsResponse;
}
export interface CracSlotsGetCracInsuranceResourcesAndRoomsRequest {
    /**
     * авторизационные параметры
     */
    cred?: Cred;
    /**
     * значение числового типа для идентификации запроса на сервере
     */
    id: BackofficeIdUnion;
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
    params: CracSlotsGetCracInsuranceResourcesAndRoomsRequestParams;
}
/**
 * параметры запроса
 */
export interface CracSlotsGetCracInsuranceResourcesAndRoomsRequestParams {
    business: Business2;
    filters: FluffyFilters;
}
export interface Business2 {
    general_info: FluffyGeneralInfo;
    id: string;
    widget_configuration: StickyWidgetConfiguration;
}
export interface FluffyGeneralInfo {
    timezone: string;
}
export interface StickyWidgetConfiguration {
    cracServer: string;
    mostFreeEnable?: boolean;
}
export interface FluffyFilters {
    date: FluffyDate;
    insuranceID: string;
    resources: FluffyResourceFilter[];
    rooms: string[];
}
export interface FluffyDate {
    from: string;
    to: string;
}
export interface FluffyResourceFilter {
    duration: number;
    /**
     * идентификатор ресурса
     */
    id: string;
}
export interface CracSlotsGetCracInsuranceResourcesAndRoomsResponse {
    /**
     * значение числового типа для идентификации запроса на сервере
     */
    id: number;
    /**
     * версия протокола (2.0)
     */
    jsonrpc: string;
    result?: CracSlotsGetCracInsuranceResourcesAndRoomsResponseResult;
    /**
     * объект, содержащий информацию об ошибке
     */
    error?: CracSlotsGetCracInsuranceResourcesAndRoomsResponseError;
}
/**
 * объект, содержащий информацию об ошибке
 *
 * Код ошибки авторизации
 */
export interface CracSlotsGetCracInsuranceResourcesAndRoomsResponseError {
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
export interface CracSlotsGetCracInsuranceResourcesAndRoomsResponseResult {
    slots: FluffySlot[];
}
export interface FluffySlot {
    date: Date;
    resources: any[];
    rooms: {
        [key: string]: any;
    }[];
}
export interface GetCracResourcesAndRooms {
    request: CracSlotsGetCracResourcesAndRoomsRequest;
    response: CracSlotsGetCracResourcesAndRoomsResponse;
}
export interface CracSlotsGetCracResourcesAndRoomsRequest {
    /**
     * авторизационные параметры
     */
    cred?: Cred;
    /**
     * значение числового типа для идентификации запроса на сервере
     */
    id: BackofficeIdUnion;
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
    params: CracSlotsGetCracResourcesAndRoomsRequestParams;
}
/**
 * параметры запроса
 */
export interface CracSlotsGetCracResourcesAndRoomsRequestParams {
    business: Business3;
    filters: TentacledFilters;
}
export interface Business3 {
    general_info: TentacledGeneralInfo;
    id: string;
    widget_configuration: IndigoWidgetConfiguration;
}
export interface TentacledGeneralInfo {
    timezone: string;
}
export interface IndigoWidgetConfiguration {
    cracServer: string;
    mostFreeEnable?: boolean;
}
export interface TentacledFilters {
    date: TentacledDate;
    resources: TentacledResourceFilter[];
    rooms: string[];
    taxonomies: string[];
}
export interface TentacledDate {
    from: Date;
    to: Date;
}
export interface TentacledResourceFilter {
    duration: number;
    /**
     * идентификатор ресурса
     */
    id: string;
}
export interface CracSlotsGetCracResourcesAndRoomsResponse {
    /**
     * значение числового типа для идентификации запроса на сервере
     */
    id: number;
    /**
     * версия протокола (2.0)
     */
    jsonrpc: string;
    result?: CracSlotsGetCracResourcesAndRoomsResponseResult;
    /**
     * объект, содержащий информацию об ошибке
     */
    error?: CracSlotsGetCracResourcesAndRoomsResponseError;
}
/**
 * объект, содержащий информацию об ошибке
 *
 * Код ошибки авторизации
 */
export interface CracSlotsGetCracResourcesAndRoomsResponseError {
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
export interface CracSlotsGetCracResourcesAndRoomsResponseResult {
    slots: TentacledSlot[];
}
export interface TentacledSlot {
    date: Date;
    resources: any[];
    rooms: {
        [key: string]: any;
    }[];
}
export interface Models {
    Appointment: AppointmentElement;
    Business: ResultBusiness;
    Client: ClientObject;
}
export declare class Convert {
    static toGBookingCoreV2(json: string): GBookingCoreV2;
    static gBookingCoreV2ToJson(value: GBookingCoreV2): string;
}
