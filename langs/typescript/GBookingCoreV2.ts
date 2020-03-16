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
 */
export type Id = number | string;

/**
 * параметры запроса
 */
export type ParamsUnion = any[] | { [key: string]: any };

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
    Appointment: AppointmentController;
    Business:    BusinessController;
    Client:      ClientController;
    CracSlots:   CracSlotsController;
}

export interface AppointmentController {
    cancel_appointment_by_business?: CancelAppointmentByBusiness;
    cancel_appointment_by_client?:   CancelAppointmentByClient;
    client_confirm_appointment?:     ClientConfirmAppointment;
    client_remove_empty_appointment: ClientRemoveEmptyAppointment;
    reserve_appointment:             ReserveAppointment;
}

export interface CancelAppointmentByBusiness {
    request:  AppointmentCancelAppointmentByBusinessRequest;
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
    params: AppointmentCancelAppointmentByBusinessRequestParams;
}

export interface AppointmentCancelAppointmentByBusinessRequestParams {
    appointment: PurpleAppointment;
    client?:     PurpleClient;
    business:    any;
}

export interface PurpleAppointment {
    id: string;
}

export interface PurpleClient {
    comment?: string;
    id:       string;
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
    request:  AppointmentCancelAppointmentByClientRequest;
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
    params: AppointmentCancelAppointmentByClientRequestParams;
}

export interface AppointmentCancelAppointmentByClientRequestParams {
    appointment: FluffyAppointment;
    client?:     FluffyClient;
    business:    any;
}

export interface FluffyAppointment {
    id: string;
}

export interface FluffyClient {
    comment?: string;
    id:       string;
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
    request:  AppointmentClientConfirmAppointmentRequest;
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
    params: ConfirmAppointment;
}

export interface ConfirmAppointment {
    appointment: TentacledAppointment;
    client?:     TentacledClient;
    business:    any;
}

export interface TentacledAppointment {
    id: string;
}

export interface TentacledClient {
    comment?: string;
    id:       string;
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
    result?: AppointmentUnion;
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
export type AppointmentUnion = any[] | boolean | AppointmentSchema | number | number | null | string;

export interface AppointmentSchema {
    additional_info?:         { [key: string]: any };
    additionalClientAppears:  AdditionalClientAppear[];
    additionalClientPayments: AdditionalClientPayment[];
    additionalClients:        PurpleAppointmentClient[];
    additionalClientSources:  AdditionalClientSource[];
    additionalClientStatuses: AdditionalClientStatus[];
    additionalClientUtms:     AdditionalClientUtm[];
    additionalFields:         AdditionalField[];
    additionalProducts:       AdditionalProduct[];
    additionalTaxonomies:     AppointmentTaxonomy[];
    address?:                 string;
    adjacentId?:              string;
    appointment:              AppointmentInfo;
    autoPhoneCallStatus?:     string;
    bannedClients:            string[];
    business:                 AppointmentBusiness;
    cabinet:                  Cabinet;
    capacity?:                number;
    changeReason:             string;
    client:                   ClientClass;
    client_appear:            AppointmentClientAppear;
    client_med_code?:         string;
    client_payment:           AppointmentClientPayment;
    client_payment_invoice?:  string;
    clientComment:            string;
    clientVisitors:           PurpleAppointmentClient[];
    color?:                   string;
    destinationKeyword?:      string;
    destinationLink?:         string;
    extraFields:              ExtraField[];
    gt?:                      boolean;
    gtTimeFrame?:             string;
    location?:                Location;
    masterImportance?:        boolean;
    minClients?:              number;
    moveCounter:              number;
    movedByRobot:             boolean;
    movedFromFired?:          boolean;
    networkID?:               string;
    notes:                    string;
    order:                    Order;
    preferredResource?:       boolean;
    promoCode?:               string;
    refererLink?:             string;
    referrer?:                string;
    reminder:                 Reminder;
    removedClientsData:       RemovedClientsDatum[];
    resource:                 AppointmentResource;
    review:                   Review;
    room?:                    Room;
    showcase:                 AppointmentShowcase;
    socialToken?:             string;
    source:                   string;
    taxonomy:                 AppointmentTaxonomy;
    utm?:                     { [key: string]: any };
    withCoSale?:              boolean;
}

export interface AdditionalClientAppear {
    appear:   AppointmentClientAppear;
    clientID: string;
}

export enum AppointmentClientAppear {
    NoAppear = "NO_APPEAR",
    None = "NONE",
    YesAppear = "YES_APPEAR",
}

export interface AdditionalClientPayment {
    clientID: string;
    payment:  AppointmentClientPayment;
}

export enum AppointmentClientPayment {
    NoPayment = "NO_PAYMENT",
    None = "NONE",
    YesPayedFull = "YES_PAYED_FULL",
    YesPayedOnline = "YES_PAYED_ONLINE",
    YesPayedPart = "YES_PAYED_PART",
}

export interface AdditionalClientSource {
    clientID: string;
    source:   string;
}

export interface AdditionalClientStatus {
    clientID: string;
    status:   AppointmentStatus;
}

export enum AppointmentStatus {
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
    TimedOut = "TIMED_OUT",
}

export interface AdditionalClientUtm {
    clientID: string;
    utm:      { [key: string]: any };
}

export interface PurpleAppointmentClient {
    address?:             string;
    adminComment?:        string;
    birthday?:            string;
    clientCardNumber?:    string;
    clientComment?:       string;
    creatorProfileID?:    string;
    creatorProfileName?:  string;
    driverLicense?:       string;
    email?:               string;
    extraData?:           { [key: string]: any };
    extraID?:             string;
    extraVisitors?:       number;
    fax?:                 string;
    feedback?:            AppointmentClientFeedback;
    GAClientID?:          string;
    houseNumber?:         string;
    id:                   string;
    incomingPhone?:       IncomingPhoneClass;
    israelCity?:          IsraelCity;
    isVIP?:               boolean;
    kupatHolim?:          KupatHolim;
    language?:            string;
    middleName?:          string;
    name:                 string;
    passportId?:          string;
    phone?:               IncomingPhoneClass;
    seasonTicketId?:      string;
    seasonTicketNumber?:  string;
    sex?:                 Sex;
    shortId?:             string;
    surname:              string;
    taxiPark?:            string;
    taxiParkMemberCount?: number;
}

export interface AppointmentClientFeedback {
    complaintActionText?: string;
    complaintStatus?:     ComplaintStatus;
    complaintText?:       string;
    extraFields?:         ExtraField[];
    inprogress?:          boolean;
    originalMessage?:     string;
    rating?:              string;
}

export enum ComplaintStatus {
    Checking = "CHECKING",
    Closed = "CLOSED",
    Entered = "ENTERED",
    Invalid = "INVALID",
    Investigation = "INVESTIGATION",
    NotEntered = "NOT_ENTERED",
}

export interface ExtraField {
    fieldID:   string;
    fieldName: string;
    value:     Value;
}

export type Value = number | { [key: string]: any } | null | string;

export interface IncomingPhoneClass {
    areaCode:    string;
    countryCode: string;
    number:      string;
}

export interface IsraelCity {
    cityId: string;
    name:   string;
}

export interface KupatHolim {
    kupatHolimId: string;
    name:         string;
}

export enum Sex {
    Female = "FEMALE",
    Male = "MALE",
    NotSpecified = "NOT_SPECIFIED",
}

export interface AdditionalField {
    name:          string;
    requiredField: boolean;
    shortName:     string;
    type:          AdditionalFieldType;
    value:         string;
}

export enum AdditionalFieldType {
    Bool = "BOOL",
    Coupon = "COUPON",
    File = "FILE",
    Radio = "RADIO",
    String = "STRING",
}

export interface AdditionalProduct {
    id:    string;
    price: number;
}

export interface AppointmentTaxonomy {
    alias:    string;
    extraId?: string;
    id:       string;
}

export interface AppointmentInfo {
    backofficeID:        Id;
    blockSMS:            boolean;
    created:             Date;
    drinkAnswer:         DrinkAnswer;
    duration:            number;
    hideAppointmentTime: boolean;
    id:                  string;
    integration_data?:   IntegrationData;
    price:               Price;
    shortId:             string;
    start:               Date;
    status:              AppointmentStatus;
    talkAnswer:          TalkAnswer;
    testRecord:          boolean;
    updated:             Date;
}

export enum DrinkAnswer {
    Coffee = "COFFEE",
    NotImportant = "NOT_IMPORTANT",
    Tea = "TEA",
}

export interface IntegrationData {
    extraId: string;
}

export interface Price {
    additionalTaxonomyDiscount: AdditionalTaxonomyDiscount;
    amount:                     number;
    currency:                   CurrencyList;
    discount?:                  number;
    discountProvider?:          DiscountProvider;
    discountType?:              string;
    originalAmount?:            number;
}

export interface AdditionalTaxonomyDiscount {
    discount?:         number;
    discountProvider?: DiscountProvider;
    discountType?:     string;
    taxonomyID?:       string;
}

export enum DiscountProvider {
    Groupon = "GROUPON",
    Local = "LOCAL",
    Yandex = "YANDEX",
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

export enum TalkAnswer {
    NotImportant = "NOT_IMPORTANT",
    NotTalk = "NOT_TALK",
    Talk = "TALK",
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
export interface ClientClass {
    address?:             string;
    adminComment?:        string;
    birthday?:            string;
    clientCardNumber?:    string;
    clientComment?:       string;
    creatorProfileID?:    string;
    creatorProfileName?:  string;
    driverLicense?:       string;
    email?:               string;
    extraData?:           { [key: string]: any };
    extraID?:             string;
    extraVisitors?:       number;
    fax?:                 string;
    feedback?:            AppointmentClientFeedback;
    GAClientID?:          string;
    houseNumber?:         string;
    id?:                  string;
    incomingPhone?:       IncomingPhoneClass;
    israelCity?:          IsraelCity;
    isVIP?:               boolean;
    kupatHolim?:          KupatHolim;
    language?:            string;
    middleName?:          string;
    name?:                string;
    passportId?:          string;
    phone?:               IncomingPhoneClass;
    seasonTicketId?:      string;
    seasonTicketNumber?:  string;
    sex?:                 Sex;
    shortId?:             string;
    surname?:             string;
    taxiPark?:            string;
    taxiParkMemberCount?: number;
}

export interface Location {
    latitude:  number;
    longitude: number;
}

export interface Order {
    id: string;
}

export interface Reminder {
    status:        ReminderStatus;
    time_reminder: number;
}

export enum ReminderStatus {
    NotSet = "NOT_SET",
    Off = "OFF",
    On = "ON",
}

export interface RemovedClientsDatum {
    appear?:          AppointmentClientAppear;
    client:           PurpleAppointmentClient;
    created?:         Date;
    payment?:         AppointmentClientPayment;
    payment_invoice?: string;
    source?:          string;
    status?:          AppointmentStatus;
}

export interface AppointmentResource {
    extraID?:    string;
    id:          string;
    middleName?: string;
    name:        string;
    surname:     string;
}

export interface Review {
    business: BusinessClass;
    taxonomy: BusinessClass;
    worker:   BusinessClass;
}

export interface BusinessClass {
    comment?: string;
    rate?:    number;
}

export interface Room {
    id: string;
}

export interface AppointmentShowcase {
    businessID?: string;
}

export interface ClientRemoveEmptyAppointment {
    request:  AppointmentClientRemoveEmptyAppointmentRequest;
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
    params: RemoveEmptyAppointment;
}

export interface RemoveEmptyAppointment {
    appointment: StickyAppointment;
    business:    PurpleBusiness;
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

export interface ReserveAppointment {
    request:  AppointmentReserveAppointmentRequest;
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
    params: AppointmentReserve;
}

export interface AppointmentReserve {
    appointment:       AppointmentObject;
    business:          FluffyBusiness;
    originBusinessID?: string;
    resource:          ResourceClass;
    source:            string;
    taxonomy:          ParamsTaxonomy;
}

export interface AppointmentObject {
    start: string;
}

export interface FluffyBusiness {
    id: string;
}

export interface ResourceClass {
    id: string[];
}

export interface ParamsTaxonomy {
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
    result?: AppointmentUnion;
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
    get_network_data:  GetNetworkData;
    get_profile_by_id: GetProfileById;
}

export interface GetNetworkData {
    request:  BusinessGetNetworkDataRequest;
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
    networkID: Id;
    /**
     * Если передано true - возвращает информацию business_info/general_info по каждому бизнесу
     * в массиве businesses
     */
    with_business_info?: boolean;
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
    result?: ResultClass | null;
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

export interface ResultClass {
    businessConfiguration: { [key: string]: any };
    businesses:            TentacledBusiness[];
    clientVIPPhones:       string[];
    grantGroups:           { [key: string]: any }[];
    networkID:             string;
    networkInfo:           { [key: string]: any };
    networkName?:          string;
    /**
     * настройки показа сети в зависимости от источника, на котором размещено приложение
     */
    networkWidgetConfiguration: NetworkWidgetConfiguration[];
}

/**
 * указатель на бизнес в сети
 */
export interface TentacledBusiness {
    _id?:               string;
    businessID:         string;
    info?:              BusinessBusiness;
    isMapBusiness:      boolean;
    order?:             number;
    virtualTaxonomies?: string[];
}

export type BusinessBusiness = any[] | boolean | StickyBusiness | number | number | null | string;

export interface StickyBusiness {
    active?:                        boolean;
    additionalSettings?:            PurpleAdditionalSettings;
    allowCategoryBooking?:          boolean;
    backoffice_configuration?:      FluffyBackofficeConfiguration;
    backofficeConfiguration?:       PurpleBackofficeConfiguration;
    backofficeType?:                BackofficeType;
    cabinets?:                      PurpleCabinet[];
    cabinetsEnabled?:               boolean;
    callback_widget_configuration?: PurpleCallbackWidgetConfiguration;
    consumables?:                   PurpleConsumable[];
    created_on?:                    Date;
    defaultFilteredWorkers?:        string[];
    departments?:                   PurpleDepartment[];
    designs?:                       { [key: string]: any }[];
    extraID?:                       string;
    flatTaxonomyDisplay?:           boolean;
    general_info:                   BusinessInfo;
    group?:                         Group;
    id?:                            string;
    integration_data?:              { [key: string]: any };
    mini_widget_configuration:      PurpleMiniWidgetConfiguration;
    mobileData?:                    any[];
    notifications?:                 any[];
    stateLevelHolidaysNotWorking?:  boolean;
    taxonomiesComplex?:             PurpleTaxonomiesComplex[];
    taxonomy_tree_capacity?:        { [key: string]: any }[];
    top_services?:                  PurpleTopServices;
    vertical?:                      string;
    widget_configuration:           PurpleWidgetConfiguration;
    yandexFeedType?:                string;
}

export interface PurpleAdditionalSettings {
    appointmentExtensionAmount?: number;
    appointmentExtensionType?:   AppointmentExtensionType;
}

export enum AppointmentExtensionType {
    Minutes = "MINUTES",
    Percent = "PERCENT",
}

export interface PurpleBackofficeConfiguration {
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

export interface FluffyBackofficeConfiguration {
    enableMasterImportance?: boolean;
    resourceTimetableType?:  ResourceTimetableType;
}

export interface PurpleCabinet {
    active?: boolean;
    id?:     string;
    name?:   string;
}

export interface PurpleCallbackWidgetConfiguration {
    title1?: string;
    title2?: string;
}

export interface PurpleConsumable {
    extraID:  string;
    name:     string;
    quantity: number;
}

export interface PurpleDepartment {
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
    showcases?:                  ShowcaseElement[];
    showResourceWorkStatistics?: boolean;
    showWorkerProfession?:       boolean;
    skipBilling?:                boolean;
    smsDuplicateFilter?:         SmsDuplicateFilter;
    social_network?:             SocialNetworkSchema[];
    timetable?:                  Timetable;
    timezone?:                   null | string;
    verticalTranslation?:        VerticalTranslation;
    website?:                    string;
}

export type AdditionalFields = any[] | boolean | number | number | null | AdditionalFieldsObject | string;

export interface AdditionalFieldsObject {
    name:          string;
    requiredField: boolean;
    shortName:     string;
    type:          AdditionalFieldType;
    value:         string;
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

export interface PurpleMiniWidgetConfiguration {
    fields?: Field[];
    title1?: string;
    title2?: string;
}

export enum Field {
    Email = "email",
    Name = "name",
    Surname = "surname",
}

export interface PurpleTaxonomiesComplex {
    name?:       string;
    taxonomies?: string[];
}

export interface PurpleTopServices {
    services?: any[];
    status?:   string;
}

export interface PurpleWidgetConfiguration {
    additionalName?:                         string;
    alignmentTaxonomySlots?:                 boolean;
    allowAutoSelect?:                        boolean;
    allowBookVisitor?:                       boolean;
    allowSkipTimeCheck?:                     boolean;
    appointment_confirmation_text?:          string;
    appointment_confirmation_title?:         string;
    askClientBirthday?:                      boolean;
    askClientGender?:                        boolean;
    bookableDateRanges?:                     PurpleBookableDateRanges;
    bookableMonthsCount?:                    number;
    calendarMode?:                           boolean;
    calendarModeHideTime?:                   boolean;
    clientBlockingSettings?:                 PurpleClientBlockingSettings;
    clientCommentTitle?:                     string;
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
    discountedPriceRounding?:                PurpleDiscountedPriceRounding;
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
    middleNameSupport?:                      boolean;
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
    socialSharing?:                          PurpleSocialSharing;
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

export interface PurpleBookableDateRanges {
    enabled?: boolean;
    end?:     any;
    start?:   any;
}

export interface PurpleClientBlockingSettings {
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

export interface PurpleDiscountedPriceRounding {
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

export interface PurpleSocialSharing {
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

export interface NetworkWidgetConfiguration {
    _id?:               string;
    businesses:         NetworkWidgetConfigurationBusiness[];
    defaultServiceID:   null | string;
    showBranchSelector: boolean;
    showDefaultService: boolean;
    showOnMap:          boolean;
    source:             string;
}

export interface NetworkWidgetConfigurationBusiness {
    _id?:       string;
    active:     boolean;
    internalID: string;
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
     *
     * параметры запроса business.get_profile_by_id
     */
    params: BusinessGetProfileByIdRequestParams;
}

/**
 * параметры запроса business.get_profile_by_id
 */
export interface BusinessGetProfileByIdRequestParams {
    business: IndigoBusiness;
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

export interface IndigoBusiness {
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
    business:               ResultBusiness;
    freeSms?:               number;
    monthlyFreeSms?:        number;
    networks?:              Network[];
    profiles?:              { [key: string]: any }[];
    top_services?:          ResultTopServices;
    useDefaultSmsTemplate?: boolean;
    yandexFeedType?:        YandexFeedType;
}

export type ResultBusiness = any[] | boolean | IndecentBusiness | number | number | null | string;

export interface IndecentBusiness {
    active?:                        boolean;
    additionalSettings?:            FluffyAdditionalSettings;
    allowCategoryBooking?:          boolean;
    backoffice_configuration?:      StickyBackofficeConfiguration;
    backofficeConfiguration?:       TentacledBackofficeConfiguration;
    backofficeType?:                BackofficeType;
    cabinets?:                      FluffyCabinet[];
    cabinetsEnabled?:               boolean;
    callback_widget_configuration?: FluffyCallbackWidgetConfiguration;
    consumables?:                   FluffyConsumable[];
    created_on?:                    Date;
    defaultFilteredWorkers?:        string[];
    departments?:                   FluffyDepartment[];
    designs?:                       { [key: string]: any }[];
    extraID?:                       string;
    flatTaxonomyDisplay?:           boolean;
    general_info:                   BusinessInfo;
    group?:                         Group;
    id?:                            string;
    integration_data?:              { [key: string]: any };
    mini_widget_configuration:      FluffyMiniWidgetConfiguration;
    mobileData?:                    any[];
    notifications?:                 any[];
    resources:                      Resource[];
    stateLevelHolidaysNotWorking?:  boolean;
    taxonomies:                     BusinessTaxonomy[];
    taxonomiesComplex?:             FluffyTaxonomiesComplex[];
    taxonomy_tree_capacity?:        { [key: string]: any }[];
    top_services?:                  FluffyTopServices;
    vertical?:                      string;
    widget_configuration:           FluffyWidgetConfiguration;
    yandexFeedType?:                string;
}

export interface FluffyAdditionalSettings {
    appointmentExtensionAmount?: number;
    appointmentExtensionType?:   AppointmentExtensionType;
}

export interface TentacledBackofficeConfiguration {
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

export interface StickyBackofficeConfiguration {
    enableMasterImportance?: boolean;
    resourceTimetableType?:  ResourceTimetableType;
}

export interface FluffyCabinet {
    active?: boolean;
    id?:     string;
    name?:   string;
}

export interface FluffyCallbackWidgetConfiguration {
    title1?: string;
    title2?: string;
}

export interface FluffyConsumable {
    extraID:  string;
    name:     string;
    quantity: number;
}

export interface FluffyDepartment {
    id:   string;
    id_?: number;
    name: string;
}

export interface FluffyMiniWidgetConfiguration {
    fields?: Field[];
    title1?: string;
    title2?: string;
}

/**
 * Данные о работнике бизнеса
 */
export type Resource = any[] | boolean | ResourceResource | number | number | null | string;

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
    status?:     ResourceStatus;
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
    showcases?:                  ShowcaseElement[];
    showResourceWorkStatistics?: boolean;
    showWorkerProfession?:       boolean;
    skipBilling?:                boolean;
    smsDuplicateFilter?:         SmsDuplicateFilter;
    social_network?:             SocialNetworkSchema[];
    timetable?:                  Timetable;
    timezone?:                   null | string;
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

export enum ResourceStatus {
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
    price?:                      TaxonomyPrice;
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
    stockAmount: null | string;
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
    _id?:           string;
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

export interface TaxonomyPrice {
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

export interface FluffyTaxonomiesComplex {
    name?:       string;
    taxonomies?: string[];
}

export interface FluffyTopServices {
    services?: any[];
    status?:   string;
}

export interface FluffyWidgetConfiguration {
    additionalName?:                         string;
    alignmentTaxonomySlots?:                 boolean;
    allowAutoSelect?:                        boolean;
    allowBookVisitor?:                       boolean;
    allowSkipTimeCheck?:                     boolean;
    appointment_confirmation_text?:          string;
    appointment_confirmation_title?:         string;
    askClientBirthday?:                      boolean;
    askClientGender?:                        boolean;
    bookableDateRanges?:                     FluffyBookableDateRanges;
    bookableMonthsCount?:                    number;
    calendarMode?:                           boolean;
    calendarModeHideTime?:                   boolean;
    clientBlockingSettings?:                 FluffyClientBlockingSettings;
    clientCommentTitle?:                     string;
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
    discountedPriceRounding?:                FluffyDiscountedPriceRounding;
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
    middleNameSupport?:                      boolean;
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
    socialSharing?:                          FluffySocialSharing;
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

export interface FluffyBookableDateRanges {
    enabled?: boolean;
    end?:     any;
    start?:   any;
}

export interface FluffyClientBlockingSettings {
    appointmentClientBlock?:     boolean;
    appointmentClientBlockDays?: number;
    appointmentClientBlockText?: string;
    blockIfFutureRecordExists?:  boolean;
    blockRepeatedRecordsCount?:  number;
    blockRepeatedRecordsRange?:  number;
    blockRepeatedRecordsText?:   string;
}

export interface FluffyDiscountedPriceRounding {
    rule?:  Rule;
    value?: number;
}

export interface FluffySocialSharing {
    active?:          boolean;
    discountAmount?:  number | null;
    discountEnabled?: boolean;
    discountType?:    DiscountType;
    text?:            null | string;
    widgetText?:      null | string;
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
    add_client:             AddClient;
    find_or_create_client?: FindOrCreateClient;
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
    business:           HilariousBusiness;
    client:             ClientObject;
    profile?:           PurpleProfile;
    skipEmailCheck?:    boolean;
    skipProfileUpdate?: boolean;
}

export interface HilariousBusiness {
    /**
     * идентификатор бизнеса
     */
    id: Id;
}

/**
 * Данные клиента
 */
export interface ClientObject {
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

export interface PurpleProfile {
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
    business?:  AmbitiousBusiness;
    client:     ClientObject;
    documents?: any[];
    profile?:   FluffyProfile;
}

export interface AmbitiousBusiness {
    id: string;
}

export interface FluffyProfile {
    id: string;
}

export interface FindOrCreateClient {
    request:  ClientFindOrCreateClientRequest;
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
    params: ClientFindOrCreateClientRequestParams;
}

/**
 * параметры запроса
 */
export interface ClientFindOrCreateClientRequestParams {
    business:           CunningBusiness;
    client:             ClientObject;
    profile?:           TentacledProfile;
    skipEmailCheck?:    boolean;
    skipProfileUpdate?: boolean;
}

export interface CunningBusiness {
    /**
     * идентификатор бизнеса
     */
    id: Id;
}

export interface TentacledProfile {
    /**
     * идентификатор профиля пользователя
     */
    id: string;
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
    business?:  MagentaBusiness;
    client:     ClientObject;
    documents?: any[];
    profile?:   StickyProfile;
}

export interface MagentaBusiness {
    id: string;
}

export interface StickyProfile {
    id: string;
}

export interface CracSlotsController {
    CRACDistributedResourcesFreeByDate?: CracDistributedResourcesFreeByDate;
    CRACResourcesFreeByDate?:            CracResourcesFreeByDate;
    CRACResourcesFreeByDateV2?:          CracResourcesFreeByDateV2;
    GetCRACDistributedResourcesAndRooms: GetCracDistributedResourcesAndRooms;
    GetCRACInsuranceResourcesAndRooms?:  GetCracInsuranceResourcesAndRooms;
    GetCRACResourcesAndRooms?:           GetCracResourcesAndRooms;
}

export interface CracDistributedResourcesFreeByDate {
    request:  CracCracDistributedResourcesFreeByDateRequest;
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
    params: CracCracDistributedResourcesFreeByDateRequestParam[];
}

export interface CracCracDistributedResourcesFreeByDateRequestParam {
    business:  FriskyBusiness;
    resources: string[];
    taxonomy:  PurpleTaxonomy;
}

export interface FriskyBusiness {
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
    id:      number;
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
    date:           Date;
    maxFreeMinutes: number;
    resource:       string;
    taxonomy:       string;
}

export interface CracResourcesFreeByDate {
    request:  CracCracResourcesFreeByDateRequest;
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
    params: CracCracResourcesFreeByDateRequestParam[];
}

export interface CracCracResourcesFreeByDateRequestParam {
    duration:  number;
    resources: string[];
    taxonomy:  FluffyTaxonomy;
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
    id:      number;
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
    date:           Date;
    maxFreeMinutes: number;
    resource:       string;
    taxonomy:       string;
}

export interface CracResourcesFreeByDateV2 {
    request:  CracCracResourcesFreeByDateV2Request;
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
    params: CracCracResourcesFreeByDateV2RequestParam[];
}

export interface CracCracResourcesFreeByDateV2RequestParam {
    business:  MischievousBusiness;
    duration:  number;
    durations: number[];
    resources: string[];
    taxonomy:  TentacledTaxonomy;
}

export interface MischievousBusiness {
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
    id:      number;
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
    date:           Date;
    maxFreeMinutes: number;
    resource:       string;
    taxonomy:       string;
}

export interface GetCracDistributedResourcesAndRooms {
    request:  CracSlotsGetCracDistributedResourcesAndRoomsRequest;
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
    params: CracSlotsGetCracDistributedResourcesAndRoomsRequestParams;
}

/**
 * параметры запроса
 */
export interface CracSlotsGetCracDistributedResourcesAndRoomsRequestParams {
    business: BraggadociousBusiness;
    filters:  PurpleFilters;
}

export interface BraggadociousBusiness {
    general_info:         PurpleGeneralInfo;
    id:                   string;
    widget_configuration: TentacledWidgetConfiguration;
}

export interface PurpleGeneralInfo {
    timezone: string;
}

export interface TentacledWidgetConfiguration {
    cracServer:      string;
    mostFreeEnable?: boolean;
}

export interface PurpleFilters {
    date:       PurpleDate;
    resources:  PurpleResourceFilter[];
    rooms:      string[];
    taxonomies: string[];
}

export interface PurpleDate {
    from: string;
    to:   string;
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
    date:      Date;
    resources: any[];
    rooms:     { [key: string]: any }[];
}

export interface GetCracInsuranceResourcesAndRooms {
    request:  CracSlotsGetCracInsuranceResourcesAndRoomsRequest;
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
    params: CracSlotsGetCracInsuranceResourcesAndRoomsRequestParams;
}

/**
 * параметры запроса
 */
export interface CracSlotsGetCracInsuranceResourcesAndRoomsRequestParams {
    business: Business1;
    filters:  FluffyFilters;
}

export interface Business1 {
    general_info:         FluffyGeneralInfo;
    id:                   string;
    widget_configuration: StickyWidgetConfiguration;
}

export interface FluffyGeneralInfo {
    timezone: string;
}

export interface StickyWidgetConfiguration {
    cracServer:      string;
    mostFreeEnable?: boolean;
}

export interface FluffyFilters {
    date:        FluffyDate;
    insuranceID: string;
    resources:   FluffyResourceFilter[];
    rooms:       string[];
}

export interface FluffyDate {
    from: string;
    to:   string;
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
    date:      Date;
    resources: any[];
    rooms:     { [key: string]: any }[];
}

export interface GetCracResourcesAndRooms {
    request:  CracSlotsGetCracResourcesAndRoomsRequest;
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
    params: CracSlotsGetCracResourcesAndRoomsRequestParams;
}

/**
 * параметры запроса
 */
export interface CracSlotsGetCracResourcesAndRoomsRequestParams {
    business: Business2;
    filters:  TentacledFilters;
}

export interface Business2 {
    general_info:         TentacledGeneralInfo;
    id:                   string;
    widget_configuration: IndigoWidgetConfiguration;
}

export interface TentacledGeneralInfo {
    timezone: string;
}

export interface IndigoWidgetConfiguration {
    cracServer:      string;
    mostFreeEnable?: boolean;
}

export interface TentacledFilters {
    date:       TentacledDate;
    resources:  TentacledResourceFilter[];
    rooms:      string[];
    taxonomies: string[];
}

export interface TentacledDate {
    from: Date;
    to:   Date;
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
    date:      Date;
    resources: any[];
    rooms:     { [key: string]: any }[];
}

export interface Models {
    Appointment: AppointmentUnion;
    Business:    ResultBusiness;
    Client:      ClientObject;
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

    public static toAppointmentController(json: string): AppointmentController {
        return cast(JSON.parse(json), r("AppointmentController"));
    }

    public static appointmentControllerToJson(value: AppointmentController): string {
        return JSON.stringify(uncast(value, r("AppointmentController")), null, 2);
    }

    public static toCancelAppointmentByBusiness(json: string): CancelAppointmentByBusiness {
        return cast(JSON.parse(json), r("CancelAppointmentByBusiness"));
    }

    public static cancelAppointmentByBusinessToJson(value: CancelAppointmentByBusiness): string {
        return JSON.stringify(uncast(value, r("CancelAppointmentByBusiness")), null, 2);
    }

    public static toAppointmentCancelAppointmentByBusinessRequest(json: string): AppointmentCancelAppointmentByBusinessRequest {
        return cast(JSON.parse(json), r("AppointmentCancelAppointmentByBusinessRequest"));
    }

    public static appointmentCancelAppointmentByBusinessRequestToJson(value: AppointmentCancelAppointmentByBusinessRequest): string {
        return JSON.stringify(uncast(value, r("AppointmentCancelAppointmentByBusinessRequest")), null, 2);
    }

    public static toAppointmentCancelAppointmentByBusinessRequestParams(json: string): AppointmentCancelAppointmentByBusinessRequestParams {
        return cast(JSON.parse(json), r("AppointmentCancelAppointmentByBusinessRequestParams"));
    }

    public static appointmentCancelAppointmentByBusinessRequestParamsToJson(value: AppointmentCancelAppointmentByBusinessRequestParams): string {
        return JSON.stringify(uncast(value, r("AppointmentCancelAppointmentByBusinessRequestParams")), null, 2);
    }

    public static toPurpleAppointment(json: string): PurpleAppointment {
        return cast(JSON.parse(json), r("PurpleAppointment"));
    }

    public static purpleAppointmentToJson(value: PurpleAppointment): string {
        return JSON.stringify(uncast(value, r("PurpleAppointment")), null, 2);
    }

    public static toPurpleClient(json: string): PurpleClient {
        return cast(JSON.parse(json), r("PurpleClient"));
    }

    public static purpleClientToJson(value: PurpleClient): string {
        return JSON.stringify(uncast(value, r("PurpleClient")), null, 2);
    }

    public static toAppointmentCancelAppointmentByBusinessResponse(json: string): AppointmentCancelAppointmentByBusinessResponse {
        return cast(JSON.parse(json), r("AppointmentCancelAppointmentByBusinessResponse"));
    }

    public static appointmentCancelAppointmentByBusinessResponseToJson(value: AppointmentCancelAppointmentByBusinessResponse): string {
        return JSON.stringify(uncast(value, r("AppointmentCancelAppointmentByBusinessResponse")), null, 2);
    }

    public static toAppointmentCancelAppointmentByBusinessResponseError(json: string): AppointmentCancelAppointmentByBusinessResponseError {
        return cast(JSON.parse(json), r("AppointmentCancelAppointmentByBusinessResponseError"));
    }

    public static appointmentCancelAppointmentByBusinessResponseErrorToJson(value: AppointmentCancelAppointmentByBusinessResponseError): string {
        return JSON.stringify(uncast(value, r("AppointmentCancelAppointmentByBusinessResponseError")), null, 2);
    }

    public static toCancelAppointmentByClient(json: string): CancelAppointmentByClient {
        return cast(JSON.parse(json), r("CancelAppointmentByClient"));
    }

    public static cancelAppointmentByClientToJson(value: CancelAppointmentByClient): string {
        return JSON.stringify(uncast(value, r("CancelAppointmentByClient")), null, 2);
    }

    public static toAppointmentCancelAppointmentByClientRequest(json: string): AppointmentCancelAppointmentByClientRequest {
        return cast(JSON.parse(json), r("AppointmentCancelAppointmentByClientRequest"));
    }

    public static appointmentCancelAppointmentByClientRequestToJson(value: AppointmentCancelAppointmentByClientRequest): string {
        return JSON.stringify(uncast(value, r("AppointmentCancelAppointmentByClientRequest")), null, 2);
    }

    public static toAppointmentCancelAppointmentByClientRequestParams(json: string): AppointmentCancelAppointmentByClientRequestParams {
        return cast(JSON.parse(json), r("AppointmentCancelAppointmentByClientRequestParams"));
    }

    public static appointmentCancelAppointmentByClientRequestParamsToJson(value: AppointmentCancelAppointmentByClientRequestParams): string {
        return JSON.stringify(uncast(value, r("AppointmentCancelAppointmentByClientRequestParams")), null, 2);
    }

    public static toFluffyAppointment(json: string): FluffyAppointment {
        return cast(JSON.parse(json), r("FluffyAppointment"));
    }

    public static fluffyAppointmentToJson(value: FluffyAppointment): string {
        return JSON.stringify(uncast(value, r("FluffyAppointment")), null, 2);
    }

    public static toFluffyClient(json: string): FluffyClient {
        return cast(JSON.parse(json), r("FluffyClient"));
    }

    public static fluffyClientToJson(value: FluffyClient): string {
        return JSON.stringify(uncast(value, r("FluffyClient")), null, 2);
    }

    public static toAppointmentCancelAppointmentByClientResponse(json: string): AppointmentCancelAppointmentByClientResponse {
        return cast(JSON.parse(json), r("AppointmentCancelAppointmentByClientResponse"));
    }

    public static appointmentCancelAppointmentByClientResponseToJson(value: AppointmentCancelAppointmentByClientResponse): string {
        return JSON.stringify(uncast(value, r("AppointmentCancelAppointmentByClientResponse")), null, 2);
    }

    public static toAppointmentCancelAppointmentByClientResponseError(json: string): AppointmentCancelAppointmentByClientResponseError {
        return cast(JSON.parse(json), r("AppointmentCancelAppointmentByClientResponseError"));
    }

    public static appointmentCancelAppointmentByClientResponseErrorToJson(value: AppointmentCancelAppointmentByClientResponseError): string {
        return JSON.stringify(uncast(value, r("AppointmentCancelAppointmentByClientResponseError")), null, 2);
    }

    public static toClientConfirmAppointment(json: string): ClientConfirmAppointment {
        return cast(JSON.parse(json), r("ClientConfirmAppointment"));
    }

    public static clientConfirmAppointmentToJson(value: ClientConfirmAppointment): string {
        return JSON.stringify(uncast(value, r("ClientConfirmAppointment")), null, 2);
    }

    public static toAppointmentClientConfirmAppointmentRequest(json: string): AppointmentClientConfirmAppointmentRequest {
        return cast(JSON.parse(json), r("AppointmentClientConfirmAppointmentRequest"));
    }

    public static appointmentClientConfirmAppointmentRequestToJson(value: AppointmentClientConfirmAppointmentRequest): string {
        return JSON.stringify(uncast(value, r("AppointmentClientConfirmAppointmentRequest")), null, 2);
    }

    public static toConfirmAppointment(json: string): ConfirmAppointment {
        return cast(JSON.parse(json), r("ConfirmAppointment"));
    }

    public static confirmAppointmentToJson(value: ConfirmAppointment): string {
        return JSON.stringify(uncast(value, r("ConfirmAppointment")), null, 2);
    }

    public static toTentacledAppointment(json: string): TentacledAppointment {
        return cast(JSON.parse(json), r("TentacledAppointment"));
    }

    public static tentacledAppointmentToJson(value: TentacledAppointment): string {
        return JSON.stringify(uncast(value, r("TentacledAppointment")), null, 2);
    }

    public static toTentacledClient(json: string): TentacledClient {
        return cast(JSON.parse(json), r("TentacledClient"));
    }

    public static tentacledClientToJson(value: TentacledClient): string {
        return JSON.stringify(uncast(value, r("TentacledClient")), null, 2);
    }

    public static toAppointmentClientConfirmAppointmentResponse(json: string): AppointmentClientConfirmAppointmentResponse {
        return cast(JSON.parse(json), r("AppointmentClientConfirmAppointmentResponse"));
    }

    public static appointmentClientConfirmAppointmentResponseToJson(value: AppointmentClientConfirmAppointmentResponse): string {
        return JSON.stringify(uncast(value, r("AppointmentClientConfirmAppointmentResponse")), null, 2);
    }

    public static toAppointmentClientConfirmAppointmentResponseError(json: string): AppointmentClientConfirmAppointmentResponseError {
        return cast(JSON.parse(json), r("AppointmentClientConfirmAppointmentResponseError"));
    }

    public static appointmentClientConfirmAppointmentResponseErrorToJson(value: AppointmentClientConfirmAppointmentResponseError): string {
        return JSON.stringify(uncast(value, r("AppointmentClientConfirmAppointmentResponseError")), null, 2);
    }

    public static toAppointmentSchema(json: string): AppointmentSchema {
        return cast(JSON.parse(json), r("AppointmentSchema"));
    }

    public static appointmentSchemaToJson(value: AppointmentSchema): string {
        return JSON.stringify(uncast(value, r("AppointmentSchema")), null, 2);
    }

    public static toAdditionalClientAppear(json: string): AdditionalClientAppear {
        return cast(JSON.parse(json), r("AdditionalClientAppear"));
    }

    public static additionalClientAppearToJson(value: AdditionalClientAppear): string {
        return JSON.stringify(uncast(value, r("AdditionalClientAppear")), null, 2);
    }

    public static toAdditionalClientPayment(json: string): AdditionalClientPayment {
        return cast(JSON.parse(json), r("AdditionalClientPayment"));
    }

    public static additionalClientPaymentToJson(value: AdditionalClientPayment): string {
        return JSON.stringify(uncast(value, r("AdditionalClientPayment")), null, 2);
    }

    public static toAdditionalClientSource(json: string): AdditionalClientSource {
        return cast(JSON.parse(json), r("AdditionalClientSource"));
    }

    public static additionalClientSourceToJson(value: AdditionalClientSource): string {
        return JSON.stringify(uncast(value, r("AdditionalClientSource")), null, 2);
    }

    public static toAdditionalClientStatus(json: string): AdditionalClientStatus {
        return cast(JSON.parse(json), r("AdditionalClientStatus"));
    }

    public static additionalClientStatusToJson(value: AdditionalClientStatus): string {
        return JSON.stringify(uncast(value, r("AdditionalClientStatus")), null, 2);
    }

    public static toAdditionalClientUtm(json: string): AdditionalClientUtm {
        return cast(JSON.parse(json), r("AdditionalClientUtm"));
    }

    public static additionalClientUtmToJson(value: AdditionalClientUtm): string {
        return JSON.stringify(uncast(value, r("AdditionalClientUtm")), null, 2);
    }

    public static toPurpleAppointmentClient(json: string): PurpleAppointmentClient {
        return cast(JSON.parse(json), r("PurpleAppointmentClient"));
    }

    public static purpleAppointmentClientToJson(value: PurpleAppointmentClient): string {
        return JSON.stringify(uncast(value, r("PurpleAppointmentClient")), null, 2);
    }

    public static toAppointmentClientFeedback(json: string): AppointmentClientFeedback {
        return cast(JSON.parse(json), r("AppointmentClientFeedback"));
    }

    public static appointmentClientFeedbackToJson(value: AppointmentClientFeedback): string {
        return JSON.stringify(uncast(value, r("AppointmentClientFeedback")), null, 2);
    }

    public static toExtraField(json: string): ExtraField {
        return cast(JSON.parse(json), r("ExtraField"));
    }

    public static extraFieldToJson(value: ExtraField): string {
        return JSON.stringify(uncast(value, r("ExtraField")), null, 2);
    }

    public static toIncomingPhoneClass(json: string): IncomingPhoneClass {
        return cast(JSON.parse(json), r("IncomingPhoneClass"));
    }

    public static incomingPhoneClassToJson(value: IncomingPhoneClass): string {
        return JSON.stringify(uncast(value, r("IncomingPhoneClass")), null, 2);
    }

    public static toIsraelCity(json: string): IsraelCity {
        return cast(JSON.parse(json), r("IsraelCity"));
    }

    public static israelCityToJson(value: IsraelCity): string {
        return JSON.stringify(uncast(value, r("IsraelCity")), null, 2);
    }

    public static toKupatHolim(json: string): KupatHolim {
        return cast(JSON.parse(json), r("KupatHolim"));
    }

    public static kupatHolimToJson(value: KupatHolim): string {
        return JSON.stringify(uncast(value, r("KupatHolim")), null, 2);
    }

    public static toAdditionalField(json: string): AdditionalField {
        return cast(JSON.parse(json), r("AdditionalField"));
    }

    public static additionalFieldToJson(value: AdditionalField): string {
        return JSON.stringify(uncast(value, r("AdditionalField")), null, 2);
    }

    public static toAdditionalProduct(json: string): AdditionalProduct {
        return cast(JSON.parse(json), r("AdditionalProduct"));
    }

    public static additionalProductToJson(value: AdditionalProduct): string {
        return JSON.stringify(uncast(value, r("AdditionalProduct")), null, 2);
    }

    public static toAppointmentTaxonomy(json: string): AppointmentTaxonomy {
        return cast(JSON.parse(json), r("AppointmentTaxonomy"));
    }

    public static appointmentTaxonomyToJson(value: AppointmentTaxonomy): string {
        return JSON.stringify(uncast(value, r("AppointmentTaxonomy")), null, 2);
    }

    public static toAppointmentInfo(json: string): AppointmentInfo {
        return cast(JSON.parse(json), r("AppointmentInfo"));
    }

    public static appointmentInfoToJson(value: AppointmentInfo): string {
        return JSON.stringify(uncast(value, r("AppointmentInfo")), null, 2);
    }

    public static toIntegrationData(json: string): IntegrationData {
        return cast(JSON.parse(json), r("IntegrationData"));
    }

    public static integrationDataToJson(value: IntegrationData): string {
        return JSON.stringify(uncast(value, r("IntegrationData")), null, 2);
    }

    public static toPrice(json: string): Price {
        return cast(JSON.parse(json), r("Price"));
    }

    public static priceToJson(value: Price): string {
        return JSON.stringify(uncast(value, r("Price")), null, 2);
    }

    public static toAdditionalTaxonomyDiscount(json: string): AdditionalTaxonomyDiscount {
        return cast(JSON.parse(json), r("AdditionalTaxonomyDiscount"));
    }

    public static additionalTaxonomyDiscountToJson(value: AdditionalTaxonomyDiscount): string {
        return JSON.stringify(uncast(value, r("AdditionalTaxonomyDiscount")), null, 2);
    }

    public static toAppointmentBusiness(json: string): AppointmentBusiness {
        return cast(JSON.parse(json), r("AppointmentBusiness"));
    }

    public static appointmentBusinessToJson(value: AppointmentBusiness): string {
        return JSON.stringify(uncast(value, r("AppointmentBusiness")), null, 2);
    }

    public static toCabinet(json: string): Cabinet {
        return cast(JSON.parse(json), r("Cabinet"));
    }

    public static cabinetToJson(value: Cabinet): string {
        return JSON.stringify(uncast(value, r("Cabinet")), null, 2);
    }

    public static toClientClass(json: string): ClientClass {
        return cast(JSON.parse(json), r("ClientClass"));
    }

    public static clientClassToJson(value: ClientClass): string {
        return JSON.stringify(uncast(value, r("ClientClass")), null, 2);
    }

    public static toLocation(json: string): Location {
        return cast(JSON.parse(json), r("Location"));
    }

    public static locationToJson(value: Location): string {
        return JSON.stringify(uncast(value, r("Location")), null, 2);
    }

    public static toOrder(json: string): Order {
        return cast(JSON.parse(json), r("Order"));
    }

    public static orderToJson(value: Order): string {
        return JSON.stringify(uncast(value, r("Order")), null, 2);
    }

    public static toReminder(json: string): Reminder {
        return cast(JSON.parse(json), r("Reminder"));
    }

    public static reminderToJson(value: Reminder): string {
        return JSON.stringify(uncast(value, r("Reminder")), null, 2);
    }

    public static toRemovedClientsDatum(json: string): RemovedClientsDatum {
        return cast(JSON.parse(json), r("RemovedClientsDatum"));
    }

    public static removedClientsDatumToJson(value: RemovedClientsDatum): string {
        return JSON.stringify(uncast(value, r("RemovedClientsDatum")), null, 2);
    }

    public static toAppointmentResource(json: string): AppointmentResource {
        return cast(JSON.parse(json), r("AppointmentResource"));
    }

    public static appointmentResourceToJson(value: AppointmentResource): string {
        return JSON.stringify(uncast(value, r("AppointmentResource")), null, 2);
    }

    public static toReview(json: string): Review {
        return cast(JSON.parse(json), r("Review"));
    }

    public static reviewToJson(value: Review): string {
        return JSON.stringify(uncast(value, r("Review")), null, 2);
    }

    public static toBusinessClass(json: string): BusinessClass {
        return cast(JSON.parse(json), r("BusinessClass"));
    }

    public static businessClassToJson(value: BusinessClass): string {
        return JSON.stringify(uncast(value, r("BusinessClass")), null, 2);
    }

    public static toRoom(json: string): Room {
        return cast(JSON.parse(json), r("Room"));
    }

    public static roomToJson(value: Room): string {
        return JSON.stringify(uncast(value, r("Room")), null, 2);
    }

    public static toAppointmentShowcase(json: string): AppointmentShowcase {
        return cast(JSON.parse(json), r("AppointmentShowcase"));
    }

    public static appointmentShowcaseToJson(value: AppointmentShowcase): string {
        return JSON.stringify(uncast(value, r("AppointmentShowcase")), null, 2);
    }

    public static toClientRemoveEmptyAppointment(json: string): ClientRemoveEmptyAppointment {
        return cast(JSON.parse(json), r("ClientRemoveEmptyAppointment"));
    }

    public static clientRemoveEmptyAppointmentToJson(value: ClientRemoveEmptyAppointment): string {
        return JSON.stringify(uncast(value, r("ClientRemoveEmptyAppointment")), null, 2);
    }

    public static toAppointmentClientRemoveEmptyAppointmentRequest(json: string): AppointmentClientRemoveEmptyAppointmentRequest {
        return cast(JSON.parse(json), r("AppointmentClientRemoveEmptyAppointmentRequest"));
    }

    public static appointmentClientRemoveEmptyAppointmentRequestToJson(value: AppointmentClientRemoveEmptyAppointmentRequest): string {
        return JSON.stringify(uncast(value, r("AppointmentClientRemoveEmptyAppointmentRequest")), null, 2);
    }

    public static toRemoveEmptyAppointment(json: string): RemoveEmptyAppointment {
        return cast(JSON.parse(json), r("RemoveEmptyAppointment"));
    }

    public static removeEmptyAppointmentToJson(value: RemoveEmptyAppointment): string {
        return JSON.stringify(uncast(value, r("RemoveEmptyAppointment")), null, 2);
    }

    public static toStickyAppointment(json: string): StickyAppointment {
        return cast(JSON.parse(json), r("StickyAppointment"));
    }

    public static stickyAppointmentToJson(value: StickyAppointment): string {
        return JSON.stringify(uncast(value, r("StickyAppointment")), null, 2);
    }

    public static toPurpleBusiness(json: string): PurpleBusiness {
        return cast(JSON.parse(json), r("PurpleBusiness"));
    }

    public static purpleBusinessToJson(value: PurpleBusiness): string {
        return JSON.stringify(uncast(value, r("PurpleBusiness")), null, 2);
    }

    public static toAppointmentClientRemoveEmptyAppointmentResponse(json: string): AppointmentClientRemoveEmptyAppointmentResponse {
        return cast(JSON.parse(json), r("AppointmentClientRemoveEmptyAppointmentResponse"));
    }

    public static appointmentClientRemoveEmptyAppointmentResponseToJson(value: AppointmentClientRemoveEmptyAppointmentResponse): string {
        return JSON.stringify(uncast(value, r("AppointmentClientRemoveEmptyAppointmentResponse")), null, 2);
    }

    public static toAppointmentClientRemoveEmptyAppointmentResponseError(json: string): AppointmentClientRemoveEmptyAppointmentResponseError {
        return cast(JSON.parse(json), r("AppointmentClientRemoveEmptyAppointmentResponseError"));
    }

    public static appointmentClientRemoveEmptyAppointmentResponseErrorToJson(value: AppointmentClientRemoveEmptyAppointmentResponseError): string {
        return JSON.stringify(uncast(value, r("AppointmentClientRemoveEmptyAppointmentResponseError")), null, 2);
    }

    public static toReserveAppointment(json: string): ReserveAppointment {
        return cast(JSON.parse(json), r("ReserveAppointment"));
    }

    public static reserveAppointmentToJson(value: ReserveAppointment): string {
        return JSON.stringify(uncast(value, r("ReserveAppointment")), null, 2);
    }

    public static toAppointmentReserveAppointmentRequest(json: string): AppointmentReserveAppointmentRequest {
        return cast(JSON.parse(json), r("AppointmentReserveAppointmentRequest"));
    }

    public static appointmentReserveAppointmentRequestToJson(value: AppointmentReserveAppointmentRequest): string {
        return JSON.stringify(uncast(value, r("AppointmentReserveAppointmentRequest")), null, 2);
    }

    public static toAppointmentReserve(json: string): AppointmentReserve {
        return cast(JSON.parse(json), r("AppointmentReserve"));
    }

    public static appointmentReserveToJson(value: AppointmentReserve): string {
        return JSON.stringify(uncast(value, r("AppointmentReserve")), null, 2);
    }

    public static toAppointmentObject(json: string): AppointmentObject {
        return cast(JSON.parse(json), r("AppointmentObject"));
    }

    public static appointmentObjectToJson(value: AppointmentObject): string {
        return JSON.stringify(uncast(value, r("AppointmentObject")), null, 2);
    }

    public static toFluffyBusiness(json: string): FluffyBusiness {
        return cast(JSON.parse(json), r("FluffyBusiness"));
    }

    public static fluffyBusinessToJson(value: FluffyBusiness): string {
        return JSON.stringify(uncast(value, r("FluffyBusiness")), null, 2);
    }

    public static toResourceClass(json: string): ResourceClass {
        return cast(JSON.parse(json), r("ResourceClass"));
    }

    public static resourceClassToJson(value: ResourceClass): string {
        return JSON.stringify(uncast(value, r("ResourceClass")), null, 2);
    }

    public static toParamsTaxonomy(json: string): ParamsTaxonomy {
        return cast(JSON.parse(json), r("ParamsTaxonomy"));
    }

    public static paramsTaxonomyToJson(value: ParamsTaxonomy): string {
        return JSON.stringify(uncast(value, r("ParamsTaxonomy")), null, 2);
    }

    public static toAppointmentReserveAppointmentResponse(json: string): AppointmentReserveAppointmentResponse {
        return cast(JSON.parse(json), r("AppointmentReserveAppointmentResponse"));
    }

    public static appointmentReserveAppointmentResponseToJson(value: AppointmentReserveAppointmentResponse): string {
        return JSON.stringify(uncast(value, r("AppointmentReserveAppointmentResponse")), null, 2);
    }

    public static toAppointmentReserveAppointmentResponseError(json: string): AppointmentReserveAppointmentResponseError {
        return cast(JSON.parse(json), r("AppointmentReserveAppointmentResponseError"));
    }

    public static appointmentReserveAppointmentResponseErrorToJson(value: AppointmentReserveAppointmentResponseError): string {
        return JSON.stringify(uncast(value, r("AppointmentReserveAppointmentResponseError")), null, 2);
    }

    public static toBusinessController(json: string): BusinessController {
        return cast(JSON.parse(json), r("BusinessController"));
    }

    public static businessControllerToJson(value: BusinessController): string {
        return JSON.stringify(uncast(value, r("BusinessController")), null, 2);
    }

    public static toGetNetworkData(json: string): GetNetworkData {
        return cast(JSON.parse(json), r("GetNetworkData"));
    }

    public static getNetworkDataToJson(value: GetNetworkData): string {
        return JSON.stringify(uncast(value, r("GetNetworkData")), null, 2);
    }

    public static toBusinessGetNetworkDataRequest(json: string): BusinessGetNetworkDataRequest {
        return cast(JSON.parse(json), r("BusinessGetNetworkDataRequest"));
    }

    public static businessGetNetworkDataRequestToJson(value: BusinessGetNetworkDataRequest): string {
        return JSON.stringify(uncast(value, r("BusinessGetNetworkDataRequest")), null, 2);
    }

    public static toBusinessGetNetworkDataRequestParams(json: string): BusinessGetNetworkDataRequestParams {
        return cast(JSON.parse(json), r("BusinessGetNetworkDataRequestParams"));
    }

    public static businessGetNetworkDataRequestParamsToJson(value: BusinessGetNetworkDataRequestParams): string {
        return JSON.stringify(uncast(value, r("BusinessGetNetworkDataRequestParams")), null, 2);
    }

    public static toBusinessGetNetworkDataResponse(json: string): BusinessGetNetworkDataResponse {
        return cast(JSON.parse(json), r("BusinessGetNetworkDataResponse"));
    }

    public static businessGetNetworkDataResponseToJson(value: BusinessGetNetworkDataResponse): string {
        return JSON.stringify(uncast(value, r("BusinessGetNetworkDataResponse")), null, 2);
    }

    public static toBusinessGetNetworkDataResponseError(json: string): BusinessGetNetworkDataResponseError {
        return cast(JSON.parse(json), r("BusinessGetNetworkDataResponseError"));
    }

    public static businessGetNetworkDataResponseErrorToJson(value: BusinessGetNetworkDataResponseError): string {
        return JSON.stringify(uncast(value, r("BusinessGetNetworkDataResponseError")), null, 2);
    }

    public static toResultClass(json: string): ResultClass {
        return cast(JSON.parse(json), r("ResultClass"));
    }

    public static resultClassToJson(value: ResultClass): string {
        return JSON.stringify(uncast(value, r("ResultClass")), null, 2);
    }

    public static toTentacledBusiness(json: string): TentacledBusiness {
        return cast(JSON.parse(json), r("TentacledBusiness"));
    }

    public static tentacledBusinessToJson(value: TentacledBusiness): string {
        return JSON.stringify(uncast(value, r("TentacledBusiness")), null, 2);
    }

    public static toStickyBusiness(json: string): StickyBusiness {
        return cast(JSON.parse(json), r("StickyBusiness"));
    }

    public static stickyBusinessToJson(value: StickyBusiness): string {
        return JSON.stringify(uncast(value, r("StickyBusiness")), null, 2);
    }

    public static toPurpleAdditionalSettings(json: string): PurpleAdditionalSettings {
        return cast(JSON.parse(json), r("PurpleAdditionalSettings"));
    }

    public static purpleAdditionalSettingsToJson(value: PurpleAdditionalSettings): string {
        return JSON.stringify(uncast(value, r("PurpleAdditionalSettings")), null, 2);
    }

    public static toPurpleBackofficeConfiguration(json: string): PurpleBackofficeConfiguration {
        return cast(JSON.parse(json), r("PurpleBackofficeConfiguration"));
    }

    public static purpleBackofficeConfigurationToJson(value: PurpleBackofficeConfiguration): string {
        return JSON.stringify(uncast(value, r("PurpleBackofficeConfiguration")), null, 2);
    }

    public static toFluffyBackofficeConfiguration(json: string): FluffyBackofficeConfiguration {
        return cast(JSON.parse(json), r("FluffyBackofficeConfiguration"));
    }

    public static fluffyBackofficeConfigurationToJson(value: FluffyBackofficeConfiguration): string {
        return JSON.stringify(uncast(value, r("FluffyBackofficeConfiguration")), null, 2);
    }

    public static toPurpleCabinet(json: string): PurpleCabinet {
        return cast(JSON.parse(json), r("PurpleCabinet"));
    }

    public static purpleCabinetToJson(value: PurpleCabinet): string {
        return JSON.stringify(uncast(value, r("PurpleCabinet")), null, 2);
    }

    public static toPurpleCallbackWidgetConfiguration(json: string): PurpleCallbackWidgetConfiguration {
        return cast(JSON.parse(json), r("PurpleCallbackWidgetConfiguration"));
    }

    public static purpleCallbackWidgetConfigurationToJson(value: PurpleCallbackWidgetConfiguration): string {
        return JSON.stringify(uncast(value, r("PurpleCallbackWidgetConfiguration")), null, 2);
    }

    public static toPurpleConsumable(json: string): PurpleConsumable {
        return cast(JSON.parse(json), r("PurpleConsumable"));
    }

    public static purpleConsumableToJson(value: PurpleConsumable): string {
        return JSON.stringify(uncast(value, r("PurpleConsumable")), null, 2);
    }

    public static toPurpleDepartment(json: string): PurpleDepartment {
        return cast(JSON.parse(json), r("PurpleDepartment"));
    }

    public static purpleDepartmentToJson(value: PurpleDepartment): string {
        return JSON.stringify(uncast(value, r("PurpleDepartment")), null, 2);
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

    public static toShowcaseElement(json: string): ShowcaseElement {
        return cast(JSON.parse(json), r("ShowcaseElement"));
    }

    public static showcaseElementToJson(value: ShowcaseElement): string {
        return JSON.stringify(uncast(value, r("ShowcaseElement")), null, 2);
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

    public static toPurpleMiniWidgetConfiguration(json: string): PurpleMiniWidgetConfiguration {
        return cast(JSON.parse(json), r("PurpleMiniWidgetConfiguration"));
    }

    public static purpleMiniWidgetConfigurationToJson(value: PurpleMiniWidgetConfiguration): string {
        return JSON.stringify(uncast(value, r("PurpleMiniWidgetConfiguration")), null, 2);
    }

    public static toPurpleTaxonomiesComplex(json: string): PurpleTaxonomiesComplex {
        return cast(JSON.parse(json), r("PurpleTaxonomiesComplex"));
    }

    public static purpleTaxonomiesComplexToJson(value: PurpleTaxonomiesComplex): string {
        return JSON.stringify(uncast(value, r("PurpleTaxonomiesComplex")), null, 2);
    }

    public static toPurpleTopServices(json: string): PurpleTopServices {
        return cast(JSON.parse(json), r("PurpleTopServices"));
    }

    public static purpleTopServicesToJson(value: PurpleTopServices): string {
        return JSON.stringify(uncast(value, r("PurpleTopServices")), null, 2);
    }

    public static toPurpleWidgetConfiguration(json: string): PurpleWidgetConfiguration {
        return cast(JSON.parse(json), r("PurpleWidgetConfiguration"));
    }

    public static purpleWidgetConfigurationToJson(value: PurpleWidgetConfiguration): string {
        return JSON.stringify(uncast(value, r("PurpleWidgetConfiguration")), null, 2);
    }

    public static toPurpleBookableDateRanges(json: string): PurpleBookableDateRanges {
        return cast(JSON.parse(json), r("PurpleBookableDateRanges"));
    }

    public static purpleBookableDateRangesToJson(value: PurpleBookableDateRanges): string {
        return JSON.stringify(uncast(value, r("PurpleBookableDateRanges")), null, 2);
    }

    public static toPurpleClientBlockingSettings(json: string): PurpleClientBlockingSettings {
        return cast(JSON.parse(json), r("PurpleClientBlockingSettings"));
    }

    public static purpleClientBlockingSettingsToJson(value: PurpleClientBlockingSettings): string {
        return JSON.stringify(uncast(value, r("PurpleClientBlockingSettings")), null, 2);
    }

    public static toPurpleDiscountedPriceRounding(json: string): PurpleDiscountedPriceRounding {
        return cast(JSON.parse(json), r("PurpleDiscountedPriceRounding"));
    }

    public static purpleDiscountedPriceRoundingToJson(value: PurpleDiscountedPriceRounding): string {
        return JSON.stringify(uncast(value, r("PurpleDiscountedPriceRounding")), null, 2);
    }

    public static toPurpleSocialSharing(json: string): PurpleSocialSharing {
        return cast(JSON.parse(json), r("PurpleSocialSharing"));
    }

    public static purpleSocialSharingToJson(value: PurpleSocialSharing): string {
        return JSON.stringify(uncast(value, r("PurpleSocialSharing")), null, 2);
    }

    public static toNetworkWidgetConfiguration(json: string): NetworkWidgetConfiguration {
        return cast(JSON.parse(json), r("NetworkWidgetConfiguration"));
    }

    public static networkWidgetConfigurationToJson(value: NetworkWidgetConfiguration): string {
        return JSON.stringify(uncast(value, r("NetworkWidgetConfiguration")), null, 2);
    }

    public static toNetworkWidgetConfigurationBusiness(json: string): NetworkWidgetConfigurationBusiness {
        return cast(JSON.parse(json), r("NetworkWidgetConfigurationBusiness"));
    }

    public static networkWidgetConfigurationBusinessToJson(value: NetworkWidgetConfigurationBusiness): string {
        return JSON.stringify(uncast(value, r("NetworkWidgetConfigurationBusiness")), null, 2);
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

    public static toIndigoBusiness(json: string): IndigoBusiness {
        return cast(JSON.parse(json), r("IndigoBusiness"));
    }

    public static indigoBusinessToJson(value: IndigoBusiness): string {
        return JSON.stringify(uncast(value, r("IndigoBusiness")), null, 2);
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

    public static toIndecentBusiness(json: string): IndecentBusiness {
        return cast(JSON.parse(json), r("IndecentBusiness"));
    }

    public static indecentBusinessToJson(value: IndecentBusiness): string {
        return JSON.stringify(uncast(value, r("IndecentBusiness")), null, 2);
    }

    public static toFluffyAdditionalSettings(json: string): FluffyAdditionalSettings {
        return cast(JSON.parse(json), r("FluffyAdditionalSettings"));
    }

    public static fluffyAdditionalSettingsToJson(value: FluffyAdditionalSettings): string {
        return JSON.stringify(uncast(value, r("FluffyAdditionalSettings")), null, 2);
    }

    public static toTentacledBackofficeConfiguration(json: string): TentacledBackofficeConfiguration {
        return cast(JSON.parse(json), r("TentacledBackofficeConfiguration"));
    }

    public static tentacledBackofficeConfigurationToJson(value: TentacledBackofficeConfiguration): string {
        return JSON.stringify(uncast(value, r("TentacledBackofficeConfiguration")), null, 2);
    }

    public static toStickyBackofficeConfiguration(json: string): StickyBackofficeConfiguration {
        return cast(JSON.parse(json), r("StickyBackofficeConfiguration"));
    }

    public static stickyBackofficeConfigurationToJson(value: StickyBackofficeConfiguration): string {
        return JSON.stringify(uncast(value, r("StickyBackofficeConfiguration")), null, 2);
    }

    public static toFluffyCabinet(json: string): FluffyCabinet {
        return cast(JSON.parse(json), r("FluffyCabinet"));
    }

    public static fluffyCabinetToJson(value: FluffyCabinet): string {
        return JSON.stringify(uncast(value, r("FluffyCabinet")), null, 2);
    }

    public static toFluffyCallbackWidgetConfiguration(json: string): FluffyCallbackWidgetConfiguration {
        return cast(JSON.parse(json), r("FluffyCallbackWidgetConfiguration"));
    }

    public static fluffyCallbackWidgetConfigurationToJson(value: FluffyCallbackWidgetConfiguration): string {
        return JSON.stringify(uncast(value, r("FluffyCallbackWidgetConfiguration")), null, 2);
    }

    public static toFluffyConsumable(json: string): FluffyConsumable {
        return cast(JSON.parse(json), r("FluffyConsumable"));
    }

    public static fluffyConsumableToJson(value: FluffyConsumable): string {
        return JSON.stringify(uncast(value, r("FluffyConsumable")), null, 2);
    }

    public static toFluffyDepartment(json: string): FluffyDepartment {
        return cast(JSON.parse(json), r("FluffyDepartment"));
    }

    public static fluffyDepartmentToJson(value: FluffyDepartment): string {
        return JSON.stringify(uncast(value, r("FluffyDepartment")), null, 2);
    }

    public static toFluffyMiniWidgetConfiguration(json: string): FluffyMiniWidgetConfiguration {
        return cast(JSON.parse(json), r("FluffyMiniWidgetConfiguration"));
    }

    public static fluffyMiniWidgetConfigurationToJson(value: FluffyMiniWidgetConfiguration): string {
        return JSON.stringify(uncast(value, r("FluffyMiniWidgetConfiguration")), null, 2);
    }

    public static toResourceResource(json: string): ResourceResource {
        return cast(JSON.parse(json), r("ResourceResource"));
    }

    public static resourceResourceToJson(value: ResourceResource): string {
        return JSON.stringify(uncast(value, r("ResourceResource")), null, 2);
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

    public static toTaxonomyPrice(json: string): TaxonomyPrice {
        return cast(JSON.parse(json), r("TaxonomyPrice"));
    }

    public static taxonomyPriceToJson(value: TaxonomyPrice): string {
        return JSON.stringify(uncast(value, r("TaxonomyPrice")), null, 2);
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

    public static toFluffyTaxonomiesComplex(json: string): FluffyTaxonomiesComplex {
        return cast(JSON.parse(json), r("FluffyTaxonomiesComplex"));
    }

    public static fluffyTaxonomiesComplexToJson(value: FluffyTaxonomiesComplex): string {
        return JSON.stringify(uncast(value, r("FluffyTaxonomiesComplex")), null, 2);
    }

    public static toFluffyTopServices(json: string): FluffyTopServices {
        return cast(JSON.parse(json), r("FluffyTopServices"));
    }

    public static fluffyTopServicesToJson(value: FluffyTopServices): string {
        return JSON.stringify(uncast(value, r("FluffyTopServices")), null, 2);
    }

    public static toFluffyWidgetConfiguration(json: string): FluffyWidgetConfiguration {
        return cast(JSON.parse(json), r("FluffyWidgetConfiguration"));
    }

    public static fluffyWidgetConfigurationToJson(value: FluffyWidgetConfiguration): string {
        return JSON.stringify(uncast(value, r("FluffyWidgetConfiguration")), null, 2);
    }

    public static toFluffyBookableDateRanges(json: string): FluffyBookableDateRanges {
        return cast(JSON.parse(json), r("FluffyBookableDateRanges"));
    }

    public static fluffyBookableDateRangesToJson(value: FluffyBookableDateRanges): string {
        return JSON.stringify(uncast(value, r("FluffyBookableDateRanges")), null, 2);
    }

    public static toFluffyClientBlockingSettings(json: string): FluffyClientBlockingSettings {
        return cast(JSON.parse(json), r("FluffyClientBlockingSettings"));
    }

    public static fluffyClientBlockingSettingsToJson(value: FluffyClientBlockingSettings): string {
        return JSON.stringify(uncast(value, r("FluffyClientBlockingSettings")), null, 2);
    }

    public static toFluffyDiscountedPriceRounding(json: string): FluffyDiscountedPriceRounding {
        return cast(JSON.parse(json), r("FluffyDiscountedPriceRounding"));
    }

    public static fluffyDiscountedPriceRoundingToJson(value: FluffyDiscountedPriceRounding): string {
        return JSON.stringify(uncast(value, r("FluffyDiscountedPriceRounding")), null, 2);
    }

    public static toFluffySocialSharing(json: string): FluffySocialSharing {
        return cast(JSON.parse(json), r("FluffySocialSharing"));
    }

    public static fluffySocialSharingToJson(value: FluffySocialSharing): string {
        return JSON.stringify(uncast(value, r("FluffySocialSharing")), null, 2);
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

    public static toHilariousBusiness(json: string): HilariousBusiness {
        return cast(JSON.parse(json), r("HilariousBusiness"));
    }

    public static hilariousBusinessToJson(value: HilariousBusiness): string {
        return JSON.stringify(uncast(value, r("HilariousBusiness")), null, 2);
    }

    public static toClientObject(json: string): ClientObject {
        return cast(JSON.parse(json), r("ClientObject"));
    }

    public static clientObjectToJson(value: ClientObject): string {
        return JSON.stringify(uncast(value, r("ClientObject")), null, 2);
    }

    public static toPurpleProfile(json: string): PurpleProfile {
        return cast(JSON.parse(json), r("PurpleProfile"));
    }

    public static purpleProfileToJson(value: PurpleProfile): string {
        return JSON.stringify(uncast(value, r("PurpleProfile")), null, 2);
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

    public static toAmbitiousBusiness(json: string): AmbitiousBusiness {
        return cast(JSON.parse(json), r("AmbitiousBusiness"));
    }

    public static ambitiousBusinessToJson(value: AmbitiousBusiness): string {
        return JSON.stringify(uncast(value, r("AmbitiousBusiness")), null, 2);
    }

    public static toFluffyProfile(json: string): FluffyProfile {
        return cast(JSON.parse(json), r("FluffyProfile"));
    }

    public static fluffyProfileToJson(value: FluffyProfile): string {
        return JSON.stringify(uncast(value, r("FluffyProfile")), null, 2);
    }

    public static toFindOrCreateClient(json: string): FindOrCreateClient {
        return cast(JSON.parse(json), r("FindOrCreateClient"));
    }

    public static findOrCreateClientToJson(value: FindOrCreateClient): string {
        return JSON.stringify(uncast(value, r("FindOrCreateClient")), null, 2);
    }

    public static toClientFindOrCreateClientRequest(json: string): ClientFindOrCreateClientRequest {
        return cast(JSON.parse(json), r("ClientFindOrCreateClientRequest"));
    }

    public static clientFindOrCreateClientRequestToJson(value: ClientFindOrCreateClientRequest): string {
        return JSON.stringify(uncast(value, r("ClientFindOrCreateClientRequest")), null, 2);
    }

    public static toClientFindOrCreateClientRequestParams(json: string): ClientFindOrCreateClientRequestParams {
        return cast(JSON.parse(json), r("ClientFindOrCreateClientRequestParams"));
    }

    public static clientFindOrCreateClientRequestParamsToJson(value: ClientFindOrCreateClientRequestParams): string {
        return JSON.stringify(uncast(value, r("ClientFindOrCreateClientRequestParams")), null, 2);
    }

    public static toCunningBusiness(json: string): CunningBusiness {
        return cast(JSON.parse(json), r("CunningBusiness"));
    }

    public static cunningBusinessToJson(value: CunningBusiness): string {
        return JSON.stringify(uncast(value, r("CunningBusiness")), null, 2);
    }

    public static toTentacledProfile(json: string): TentacledProfile {
        return cast(JSON.parse(json), r("TentacledProfile"));
    }

    public static tentacledProfileToJson(value: TentacledProfile): string {
        return JSON.stringify(uncast(value, r("TentacledProfile")), null, 2);
    }

    public static toClientFindOfCreateClientResponse(json: string): ClientFindOfCreateClientResponse {
        return cast(JSON.parse(json), r("ClientFindOfCreateClientResponse"));
    }

    public static clientFindOfCreateClientResponseToJson(value: ClientFindOfCreateClientResponse): string {
        return JSON.stringify(uncast(value, r("ClientFindOfCreateClientResponse")), null, 2);
    }

    public static toClientFindOfCreateClientResponseError(json: string): ClientFindOfCreateClientResponseError {
        return cast(JSON.parse(json), r("ClientFindOfCreateClientResponseError"));
    }

    public static clientFindOfCreateClientResponseErrorToJson(value: ClientFindOfCreateClientResponseError): string {
        return JSON.stringify(uncast(value, r("ClientFindOfCreateClientResponseError")), null, 2);
    }

    public static toClientFindOfCreateClientResponseResult(json: string): ClientFindOfCreateClientResponseResult {
        return cast(JSON.parse(json), r("ClientFindOfCreateClientResponseResult"));
    }

    public static clientFindOfCreateClientResponseResultToJson(value: ClientFindOfCreateClientResponseResult): string {
        return JSON.stringify(uncast(value, r("ClientFindOfCreateClientResponseResult")), null, 2);
    }

    public static toMagentaBusiness(json: string): MagentaBusiness {
        return cast(JSON.parse(json), r("MagentaBusiness"));
    }

    public static magentaBusinessToJson(value: MagentaBusiness): string {
        return JSON.stringify(uncast(value, r("MagentaBusiness")), null, 2);
    }

    public static toStickyProfile(json: string): StickyProfile {
        return cast(JSON.parse(json), r("StickyProfile"));
    }

    public static stickyProfileToJson(value: StickyProfile): string {
        return JSON.stringify(uncast(value, r("StickyProfile")), null, 2);
    }

    public static toCracSlotsController(json: string): CracSlotsController {
        return cast(JSON.parse(json), r("CracSlotsController"));
    }

    public static cracSlotsControllerToJson(value: CracSlotsController): string {
        return JSON.stringify(uncast(value, r("CracSlotsController")), null, 2);
    }

    public static toCracDistributedResourcesFreeByDate(json: string): CracDistributedResourcesFreeByDate {
        return cast(JSON.parse(json), r("CracDistributedResourcesFreeByDate"));
    }

    public static cracDistributedResourcesFreeByDateToJson(value: CracDistributedResourcesFreeByDate): string {
        return JSON.stringify(uncast(value, r("CracDistributedResourcesFreeByDate")), null, 2);
    }

    public static toCracCracDistributedResourcesFreeByDateRequest(json: string): CracCracDistributedResourcesFreeByDateRequest {
        return cast(JSON.parse(json), r("CracCracDistributedResourcesFreeByDateRequest"));
    }

    public static cracCracDistributedResourcesFreeByDateRequestToJson(value: CracCracDistributedResourcesFreeByDateRequest): string {
        return JSON.stringify(uncast(value, r("CracCracDistributedResourcesFreeByDateRequest")), null, 2);
    }

    public static toCracCracDistributedResourcesFreeByDateRequestParam(json: string): CracCracDistributedResourcesFreeByDateRequestParam {
        return cast(JSON.parse(json), r("CracCracDistributedResourcesFreeByDateRequestParam"));
    }

    public static cracCracDistributedResourcesFreeByDateRequestParamToJson(value: CracCracDistributedResourcesFreeByDateRequestParam): string {
        return JSON.stringify(uncast(value, r("CracCracDistributedResourcesFreeByDateRequestParam")), null, 2);
    }

    public static toFriskyBusiness(json: string): FriskyBusiness {
        return cast(JSON.parse(json), r("FriskyBusiness"));
    }

    public static friskyBusinessToJson(value: FriskyBusiness): string {
        return JSON.stringify(uncast(value, r("FriskyBusiness")), null, 2);
    }

    public static toPurpleTaxonomy(json: string): PurpleTaxonomy {
        return cast(JSON.parse(json), r("PurpleTaxonomy"));
    }

    public static purpleTaxonomyToJson(value: PurpleTaxonomy): string {
        return JSON.stringify(uncast(value, r("PurpleTaxonomy")), null, 2);
    }

    public static toCracCracDistributedResourcesFreeByDateResponse(json: string): CracCracDistributedResourcesFreeByDateResponse {
        return cast(JSON.parse(json), r("CracCracDistributedResourcesFreeByDateResponse"));
    }

    public static cracCracDistributedResourcesFreeByDateResponseToJson(value: CracCracDistributedResourcesFreeByDateResponse): string {
        return JSON.stringify(uncast(value, r("CracCracDistributedResourcesFreeByDateResponse")), null, 2);
    }

    public static toCracCracDistributedResourcesFreeByDateResponseError(json: string): CracCracDistributedResourcesFreeByDateResponseError {
        return cast(JSON.parse(json), r("CracCracDistributedResourcesFreeByDateResponseError"));
    }

    public static cracCracDistributedResourcesFreeByDateResponseErrorToJson(value: CracCracDistributedResourcesFreeByDateResponseError): string {
        return JSON.stringify(uncast(value, r("CracCracDistributedResourcesFreeByDateResponseError")), null, 2);
    }

    public static toCracCracDistributedResourcesFreeByDateResponseResult(json: string): CracCracDistributedResourcesFreeByDateResponseResult {
        return cast(JSON.parse(json), r("CracCracDistributedResourcesFreeByDateResponseResult"));
    }

    public static cracCracDistributedResourcesFreeByDateResponseResultToJson(value: CracCracDistributedResourcesFreeByDateResponseResult): string {
        return JSON.stringify(uncast(value, r("CracCracDistributedResourcesFreeByDateResponseResult")), null, 2);
    }

    public static toPurpleFree(json: string): PurpleFree {
        return cast(JSON.parse(json), r("PurpleFree"));
    }

    public static purpleFreeToJson(value: PurpleFree): string {
        return JSON.stringify(uncast(value, r("PurpleFree")), null, 2);
    }

    public static toCracResourcesFreeByDate(json: string): CracResourcesFreeByDate {
        return cast(JSON.parse(json), r("CracResourcesFreeByDate"));
    }

    public static cracResourcesFreeByDateToJson(value: CracResourcesFreeByDate): string {
        return JSON.stringify(uncast(value, r("CracResourcesFreeByDate")), null, 2);
    }

    public static toCracCracResourcesFreeByDateRequest(json: string): CracCracResourcesFreeByDateRequest {
        return cast(JSON.parse(json), r("CracCracResourcesFreeByDateRequest"));
    }

    public static cracCracResourcesFreeByDateRequestToJson(value: CracCracResourcesFreeByDateRequest): string {
        return JSON.stringify(uncast(value, r("CracCracResourcesFreeByDateRequest")), null, 2);
    }

    public static toCracCracResourcesFreeByDateRequestParam(json: string): CracCracResourcesFreeByDateRequestParam {
        return cast(JSON.parse(json), r("CracCracResourcesFreeByDateRequestParam"));
    }

    public static cracCracResourcesFreeByDateRequestParamToJson(value: CracCracResourcesFreeByDateRequestParam): string {
        return JSON.stringify(uncast(value, r("CracCracResourcesFreeByDateRequestParam")), null, 2);
    }

    public static toFluffyTaxonomy(json: string): FluffyTaxonomy {
        return cast(JSON.parse(json), r("FluffyTaxonomy"));
    }

    public static fluffyTaxonomyToJson(value: FluffyTaxonomy): string {
        return JSON.stringify(uncast(value, r("FluffyTaxonomy")), null, 2);
    }

    public static toCracCracResourcesFreeByDateResponse(json: string): CracCracResourcesFreeByDateResponse {
        return cast(JSON.parse(json), r("CracCracResourcesFreeByDateResponse"));
    }

    public static cracCracResourcesFreeByDateResponseToJson(value: CracCracResourcesFreeByDateResponse): string {
        return JSON.stringify(uncast(value, r("CracCracResourcesFreeByDateResponse")), null, 2);
    }

    public static toCracCracResourcesFreeByDateResponseError(json: string): CracCracResourcesFreeByDateResponseError {
        return cast(JSON.parse(json), r("CracCracResourcesFreeByDateResponseError"));
    }

    public static cracCracResourcesFreeByDateResponseErrorToJson(value: CracCracResourcesFreeByDateResponseError): string {
        return JSON.stringify(uncast(value, r("CracCracResourcesFreeByDateResponseError")), null, 2);
    }

    public static toCracCracResourcesFreeByDateResponseResult(json: string): CracCracResourcesFreeByDateResponseResult {
        return cast(JSON.parse(json), r("CracCracResourcesFreeByDateResponseResult"));
    }

    public static cracCracResourcesFreeByDateResponseResultToJson(value: CracCracResourcesFreeByDateResponseResult): string {
        return JSON.stringify(uncast(value, r("CracCracResourcesFreeByDateResponseResult")), null, 2);
    }

    public static toFluffyFree(json: string): FluffyFree {
        return cast(JSON.parse(json), r("FluffyFree"));
    }

    public static fluffyFreeToJson(value: FluffyFree): string {
        return JSON.stringify(uncast(value, r("FluffyFree")), null, 2);
    }

    public static toCracResourcesFreeByDateV2(json: string): CracResourcesFreeByDateV2 {
        return cast(JSON.parse(json), r("CracResourcesFreeByDateV2"));
    }

    public static cracResourcesFreeByDateV2ToJson(value: CracResourcesFreeByDateV2): string {
        return JSON.stringify(uncast(value, r("CracResourcesFreeByDateV2")), null, 2);
    }

    public static toCracCracResourcesFreeByDateV2Request(json: string): CracCracResourcesFreeByDateV2Request {
        return cast(JSON.parse(json), r("CracCracResourcesFreeByDateV2Request"));
    }

    public static cracCracResourcesFreeByDateV2RequestToJson(value: CracCracResourcesFreeByDateV2Request): string {
        return JSON.stringify(uncast(value, r("CracCracResourcesFreeByDateV2Request")), null, 2);
    }

    public static toCracCracResourcesFreeByDateV2RequestParam(json: string): CracCracResourcesFreeByDateV2RequestParam {
        return cast(JSON.parse(json), r("CracCracResourcesFreeByDateV2RequestParam"));
    }

    public static cracCracResourcesFreeByDateV2RequestParamToJson(value: CracCracResourcesFreeByDateV2RequestParam): string {
        return JSON.stringify(uncast(value, r("CracCracResourcesFreeByDateV2RequestParam")), null, 2);
    }

    public static toMischievousBusiness(json: string): MischievousBusiness {
        return cast(JSON.parse(json), r("MischievousBusiness"));
    }

    public static mischievousBusinessToJson(value: MischievousBusiness): string {
        return JSON.stringify(uncast(value, r("MischievousBusiness")), null, 2);
    }

    public static toTentacledTaxonomy(json: string): TentacledTaxonomy {
        return cast(JSON.parse(json), r("TentacledTaxonomy"));
    }

    public static tentacledTaxonomyToJson(value: TentacledTaxonomy): string {
        return JSON.stringify(uncast(value, r("TentacledTaxonomy")), null, 2);
    }

    public static toCracCracResourcesFreeByDateV2Response(json: string): CracCracResourcesFreeByDateV2Response {
        return cast(JSON.parse(json), r("CracCracResourcesFreeByDateV2Response"));
    }

    public static cracCracResourcesFreeByDateV2ResponseToJson(value: CracCracResourcesFreeByDateV2Response): string {
        return JSON.stringify(uncast(value, r("CracCracResourcesFreeByDateV2Response")), null, 2);
    }

    public static toCracCracResourcesFreeByDateV2ResponseError(json: string): CracCracResourcesFreeByDateV2ResponseError {
        return cast(JSON.parse(json), r("CracCracResourcesFreeByDateV2ResponseError"));
    }

    public static cracCracResourcesFreeByDateV2ResponseErrorToJson(value: CracCracResourcesFreeByDateV2ResponseError): string {
        return JSON.stringify(uncast(value, r("CracCracResourcesFreeByDateV2ResponseError")), null, 2);
    }

    public static toCracCracResourcesFreeByDateV2ResponseResult(json: string): CracCracResourcesFreeByDateV2ResponseResult {
        return cast(JSON.parse(json), r("CracCracResourcesFreeByDateV2ResponseResult"));
    }

    public static cracCracResourcesFreeByDateV2ResponseResultToJson(value: CracCracResourcesFreeByDateV2ResponseResult): string {
        return JSON.stringify(uncast(value, r("CracCracResourcesFreeByDateV2ResponseResult")), null, 2);
    }

    public static toTentacledFree(json: string): TentacledFree {
        return cast(JSON.parse(json), r("TentacledFree"));
    }

    public static tentacledFreeToJson(value: TentacledFree): string {
        return JSON.stringify(uncast(value, r("TentacledFree")), null, 2);
    }

    public static toGetCracDistributedResourcesAndRooms(json: string): GetCracDistributedResourcesAndRooms {
        return cast(JSON.parse(json), r("GetCracDistributedResourcesAndRooms"));
    }

    public static getCracDistributedResourcesAndRoomsToJson(value: GetCracDistributedResourcesAndRooms): string {
        return JSON.stringify(uncast(value, r("GetCracDistributedResourcesAndRooms")), null, 2);
    }

    public static toCracSlotsGetCracDistributedResourcesAndRoomsRequest(json: string): CracSlotsGetCracDistributedResourcesAndRoomsRequest {
        return cast(JSON.parse(json), r("CracSlotsGetCracDistributedResourcesAndRoomsRequest"));
    }

    public static cracSlotsGetCracDistributedResourcesAndRoomsRequestToJson(value: CracSlotsGetCracDistributedResourcesAndRoomsRequest): string {
        return JSON.stringify(uncast(value, r("CracSlotsGetCracDistributedResourcesAndRoomsRequest")), null, 2);
    }

    public static toCracSlotsGetCracDistributedResourcesAndRoomsRequestParams(json: string): CracSlotsGetCracDistributedResourcesAndRoomsRequestParams {
        return cast(JSON.parse(json), r("CracSlotsGetCracDistributedResourcesAndRoomsRequestParams"));
    }

    public static cracSlotsGetCracDistributedResourcesAndRoomsRequestParamsToJson(value: CracSlotsGetCracDistributedResourcesAndRoomsRequestParams): string {
        return JSON.stringify(uncast(value, r("CracSlotsGetCracDistributedResourcesAndRoomsRequestParams")), null, 2);
    }

    public static toBraggadociousBusiness(json: string): BraggadociousBusiness {
        return cast(JSON.parse(json), r("BraggadociousBusiness"));
    }

    public static braggadociousBusinessToJson(value: BraggadociousBusiness): string {
        return JSON.stringify(uncast(value, r("BraggadociousBusiness")), null, 2);
    }

    public static toPurpleGeneralInfo(json: string): PurpleGeneralInfo {
        return cast(JSON.parse(json), r("PurpleGeneralInfo"));
    }

    public static purpleGeneralInfoToJson(value: PurpleGeneralInfo): string {
        return JSON.stringify(uncast(value, r("PurpleGeneralInfo")), null, 2);
    }

    public static toTentacledWidgetConfiguration(json: string): TentacledWidgetConfiguration {
        return cast(JSON.parse(json), r("TentacledWidgetConfiguration"));
    }

    public static tentacledWidgetConfigurationToJson(value: TentacledWidgetConfiguration): string {
        return JSON.stringify(uncast(value, r("TentacledWidgetConfiguration")), null, 2);
    }

    public static toPurpleFilters(json: string): PurpleFilters {
        return cast(JSON.parse(json), r("PurpleFilters"));
    }

    public static purpleFiltersToJson(value: PurpleFilters): string {
        return JSON.stringify(uncast(value, r("PurpleFilters")), null, 2);
    }

    public static toPurpleDate(json: string): PurpleDate {
        return cast(JSON.parse(json), r("PurpleDate"));
    }

    public static purpleDateToJson(value: PurpleDate): string {
        return JSON.stringify(uncast(value, r("PurpleDate")), null, 2);
    }

    public static toPurpleResourceFilter(json: string): PurpleResourceFilter {
        return cast(JSON.parse(json), r("PurpleResourceFilter"));
    }

    public static purpleResourceFilterToJson(value: PurpleResourceFilter): string {
        return JSON.stringify(uncast(value, r("PurpleResourceFilter")), null, 2);
    }

    public static toResourceBusiness(json: string): ResourceBusiness {
        return cast(JSON.parse(json), r("ResourceBusiness"));
    }

    public static resourceBusinessToJson(value: ResourceBusiness): string {
        return JSON.stringify(uncast(value, r("ResourceBusiness")), null, 2);
    }

    public static toCracSlotsGetCracDistributedResourcesAndRoomsResponse(json: string): CracSlotsGetCracDistributedResourcesAndRoomsResponse {
        return cast(JSON.parse(json), r("CracSlotsGetCracDistributedResourcesAndRoomsResponse"));
    }

    public static cracSlotsGetCracDistributedResourcesAndRoomsResponseToJson(value: CracSlotsGetCracDistributedResourcesAndRoomsResponse): string {
        return JSON.stringify(uncast(value, r("CracSlotsGetCracDistributedResourcesAndRoomsResponse")), null, 2);
    }

    public static toCracSlotsGetCracDistributedResourcesAndRoomsResponseError(json: string): CracSlotsGetCracDistributedResourcesAndRoomsResponseError {
        return cast(JSON.parse(json), r("CracSlotsGetCracDistributedResourcesAndRoomsResponseError"));
    }

    public static cracSlotsGetCracDistributedResourcesAndRoomsResponseErrorToJson(value: CracSlotsGetCracDistributedResourcesAndRoomsResponseError): string {
        return JSON.stringify(uncast(value, r("CracSlotsGetCracDistributedResourcesAndRoomsResponseError")), null, 2);
    }

    public static toCracSlotsGetCracDistributedResourcesAndRoomsResponseResult(json: string): CracSlotsGetCracDistributedResourcesAndRoomsResponseResult {
        return cast(JSON.parse(json), r("CracSlotsGetCracDistributedResourcesAndRoomsResponseResult"));
    }

    public static cracSlotsGetCracDistributedResourcesAndRoomsResponseResultToJson(value: CracSlotsGetCracDistributedResourcesAndRoomsResponseResult): string {
        return JSON.stringify(uncast(value, r("CracSlotsGetCracDistributedResourcesAndRoomsResponseResult")), null, 2);
    }

    public static toPurpleSlot(json: string): PurpleSlot {
        return cast(JSON.parse(json), r("PurpleSlot"));
    }

    public static purpleSlotToJson(value: PurpleSlot): string {
        return JSON.stringify(uncast(value, r("PurpleSlot")), null, 2);
    }

    public static toGetCracInsuranceResourcesAndRooms(json: string): GetCracInsuranceResourcesAndRooms {
        return cast(JSON.parse(json), r("GetCracInsuranceResourcesAndRooms"));
    }

    public static getCracInsuranceResourcesAndRoomsToJson(value: GetCracInsuranceResourcesAndRooms): string {
        return JSON.stringify(uncast(value, r("GetCracInsuranceResourcesAndRooms")), null, 2);
    }

    public static toCracSlotsGetCracInsuranceResourcesAndRoomsRequest(json: string): CracSlotsGetCracInsuranceResourcesAndRoomsRequest {
        return cast(JSON.parse(json), r("CracSlotsGetCracInsuranceResourcesAndRoomsRequest"));
    }

    public static cracSlotsGetCracInsuranceResourcesAndRoomsRequestToJson(value: CracSlotsGetCracInsuranceResourcesAndRoomsRequest): string {
        return JSON.stringify(uncast(value, r("CracSlotsGetCracInsuranceResourcesAndRoomsRequest")), null, 2);
    }

    public static toCracSlotsGetCracInsuranceResourcesAndRoomsRequestParams(json: string): CracSlotsGetCracInsuranceResourcesAndRoomsRequestParams {
        return cast(JSON.parse(json), r("CracSlotsGetCracInsuranceResourcesAndRoomsRequestParams"));
    }

    public static cracSlotsGetCracInsuranceResourcesAndRoomsRequestParamsToJson(value: CracSlotsGetCracInsuranceResourcesAndRoomsRequestParams): string {
        return JSON.stringify(uncast(value, r("CracSlotsGetCracInsuranceResourcesAndRoomsRequestParams")), null, 2);
    }

    public static toBusiness1(json: string): Business1 {
        return cast(JSON.parse(json), r("Business1"));
    }

    public static business1ToJson(value: Business1): string {
        return JSON.stringify(uncast(value, r("Business1")), null, 2);
    }

    public static toFluffyGeneralInfo(json: string): FluffyGeneralInfo {
        return cast(JSON.parse(json), r("FluffyGeneralInfo"));
    }

    public static fluffyGeneralInfoToJson(value: FluffyGeneralInfo): string {
        return JSON.stringify(uncast(value, r("FluffyGeneralInfo")), null, 2);
    }

    public static toStickyWidgetConfiguration(json: string): StickyWidgetConfiguration {
        return cast(JSON.parse(json), r("StickyWidgetConfiguration"));
    }

    public static stickyWidgetConfigurationToJson(value: StickyWidgetConfiguration): string {
        return JSON.stringify(uncast(value, r("StickyWidgetConfiguration")), null, 2);
    }

    public static toFluffyFilters(json: string): FluffyFilters {
        return cast(JSON.parse(json), r("FluffyFilters"));
    }

    public static fluffyFiltersToJson(value: FluffyFilters): string {
        return JSON.stringify(uncast(value, r("FluffyFilters")), null, 2);
    }

    public static toFluffyDate(json: string): FluffyDate {
        return cast(JSON.parse(json), r("FluffyDate"));
    }

    public static fluffyDateToJson(value: FluffyDate): string {
        return JSON.stringify(uncast(value, r("FluffyDate")), null, 2);
    }

    public static toFluffyResourceFilter(json: string): FluffyResourceFilter {
        return cast(JSON.parse(json), r("FluffyResourceFilter"));
    }

    public static fluffyResourceFilterToJson(value: FluffyResourceFilter): string {
        return JSON.stringify(uncast(value, r("FluffyResourceFilter")), null, 2);
    }

    public static toCracSlotsGetCracInsuranceResourcesAndRoomsResponse(json: string): CracSlotsGetCracInsuranceResourcesAndRoomsResponse {
        return cast(JSON.parse(json), r("CracSlotsGetCracInsuranceResourcesAndRoomsResponse"));
    }

    public static cracSlotsGetCracInsuranceResourcesAndRoomsResponseToJson(value: CracSlotsGetCracInsuranceResourcesAndRoomsResponse): string {
        return JSON.stringify(uncast(value, r("CracSlotsGetCracInsuranceResourcesAndRoomsResponse")), null, 2);
    }

    public static toCracSlotsGetCracInsuranceResourcesAndRoomsResponseError(json: string): CracSlotsGetCracInsuranceResourcesAndRoomsResponseError {
        return cast(JSON.parse(json), r("CracSlotsGetCracInsuranceResourcesAndRoomsResponseError"));
    }

    public static cracSlotsGetCracInsuranceResourcesAndRoomsResponseErrorToJson(value: CracSlotsGetCracInsuranceResourcesAndRoomsResponseError): string {
        return JSON.stringify(uncast(value, r("CracSlotsGetCracInsuranceResourcesAndRoomsResponseError")), null, 2);
    }

    public static toCracSlotsGetCracInsuranceResourcesAndRoomsResponseResult(json: string): CracSlotsGetCracInsuranceResourcesAndRoomsResponseResult {
        return cast(JSON.parse(json), r("CracSlotsGetCracInsuranceResourcesAndRoomsResponseResult"));
    }

    public static cracSlotsGetCracInsuranceResourcesAndRoomsResponseResultToJson(value: CracSlotsGetCracInsuranceResourcesAndRoomsResponseResult): string {
        return JSON.stringify(uncast(value, r("CracSlotsGetCracInsuranceResourcesAndRoomsResponseResult")), null, 2);
    }

    public static toFluffySlot(json: string): FluffySlot {
        return cast(JSON.parse(json), r("FluffySlot"));
    }

    public static fluffySlotToJson(value: FluffySlot): string {
        return JSON.stringify(uncast(value, r("FluffySlot")), null, 2);
    }

    public static toGetCracResourcesAndRooms(json: string): GetCracResourcesAndRooms {
        return cast(JSON.parse(json), r("GetCracResourcesAndRooms"));
    }

    public static getCracResourcesAndRoomsToJson(value: GetCracResourcesAndRooms): string {
        return JSON.stringify(uncast(value, r("GetCracResourcesAndRooms")), null, 2);
    }

    public static toCracSlotsGetCracResourcesAndRoomsRequest(json: string): CracSlotsGetCracResourcesAndRoomsRequest {
        return cast(JSON.parse(json), r("CracSlotsGetCracResourcesAndRoomsRequest"));
    }

    public static cracSlotsGetCracResourcesAndRoomsRequestToJson(value: CracSlotsGetCracResourcesAndRoomsRequest): string {
        return JSON.stringify(uncast(value, r("CracSlotsGetCracResourcesAndRoomsRequest")), null, 2);
    }

    public static toCracSlotsGetCracResourcesAndRoomsRequestParams(json: string): CracSlotsGetCracResourcesAndRoomsRequestParams {
        return cast(JSON.parse(json), r("CracSlotsGetCracResourcesAndRoomsRequestParams"));
    }

    public static cracSlotsGetCracResourcesAndRoomsRequestParamsToJson(value: CracSlotsGetCracResourcesAndRoomsRequestParams): string {
        return JSON.stringify(uncast(value, r("CracSlotsGetCracResourcesAndRoomsRequestParams")), null, 2);
    }

    public static toBusiness2(json: string): Business2 {
        return cast(JSON.parse(json), r("Business2"));
    }

    public static business2ToJson(value: Business2): string {
        return JSON.stringify(uncast(value, r("Business2")), null, 2);
    }

    public static toTentacledGeneralInfo(json: string): TentacledGeneralInfo {
        return cast(JSON.parse(json), r("TentacledGeneralInfo"));
    }

    public static tentacledGeneralInfoToJson(value: TentacledGeneralInfo): string {
        return JSON.stringify(uncast(value, r("TentacledGeneralInfo")), null, 2);
    }

    public static toIndigoWidgetConfiguration(json: string): IndigoWidgetConfiguration {
        return cast(JSON.parse(json), r("IndigoWidgetConfiguration"));
    }

    public static indigoWidgetConfigurationToJson(value: IndigoWidgetConfiguration): string {
        return JSON.stringify(uncast(value, r("IndigoWidgetConfiguration")), null, 2);
    }

    public static toTentacledFilters(json: string): TentacledFilters {
        return cast(JSON.parse(json), r("TentacledFilters"));
    }

    public static tentacledFiltersToJson(value: TentacledFilters): string {
        return JSON.stringify(uncast(value, r("TentacledFilters")), null, 2);
    }

    public static toTentacledDate(json: string): TentacledDate {
        return cast(JSON.parse(json), r("TentacledDate"));
    }

    public static tentacledDateToJson(value: TentacledDate): string {
        return JSON.stringify(uncast(value, r("TentacledDate")), null, 2);
    }

    public static toTentacledResourceFilter(json: string): TentacledResourceFilter {
        return cast(JSON.parse(json), r("TentacledResourceFilter"));
    }

    public static tentacledResourceFilterToJson(value: TentacledResourceFilter): string {
        return JSON.stringify(uncast(value, r("TentacledResourceFilter")), null, 2);
    }

    public static toCracSlotsGetCracResourcesAndRoomsResponse(json: string): CracSlotsGetCracResourcesAndRoomsResponse {
        return cast(JSON.parse(json), r("CracSlotsGetCracResourcesAndRoomsResponse"));
    }

    public static cracSlotsGetCracResourcesAndRoomsResponseToJson(value: CracSlotsGetCracResourcesAndRoomsResponse): string {
        return JSON.stringify(uncast(value, r("CracSlotsGetCracResourcesAndRoomsResponse")), null, 2);
    }

    public static toCracSlotsGetCracResourcesAndRoomsResponseError(json: string): CracSlotsGetCracResourcesAndRoomsResponseError {
        return cast(JSON.parse(json), r("CracSlotsGetCracResourcesAndRoomsResponseError"));
    }

    public static cracSlotsGetCracResourcesAndRoomsResponseErrorToJson(value: CracSlotsGetCracResourcesAndRoomsResponseError): string {
        return JSON.stringify(uncast(value, r("CracSlotsGetCracResourcesAndRoomsResponseError")), null, 2);
    }

    public static toCracSlotsGetCracResourcesAndRoomsResponseResult(json: string): CracSlotsGetCracResourcesAndRoomsResponseResult {
        return cast(JSON.parse(json), r("CracSlotsGetCracResourcesAndRoomsResponseResult"));
    }

    public static cracSlotsGetCracResourcesAndRoomsResponseResultToJson(value: CracSlotsGetCracResourcesAndRoomsResponseResult): string {
        return JSON.stringify(uncast(value, r("CracSlotsGetCracResourcesAndRoomsResponseResult")), null, 2);
    }

    public static toTentacledSlot(json: string): TentacledSlot {
        return cast(JSON.parse(json), r("TentacledSlot"));
    }

    public static tentacledSlotToJson(value: TentacledSlot): string {
        return JSON.stringify(uncast(value, r("TentacledSlot")), null, 2);
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
        { json: "params", js: "params", typ: u(a("any"), m("any")) },
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
        { json: "Appointment", js: "Appointment", typ: r("AppointmentController") },
        { json: "Business", js: "Business", typ: r("BusinessController") },
        { json: "Client", js: "Client", typ: r("ClientController") },
        { json: "CracSlots", js: "CracSlots", typ: r("CracSlotsController") },
    ], false),
    "AppointmentController": o([
        { json: "cancel_appointment_by_business", js: "cancel_appointment_by_business", typ: u(undefined, r("CancelAppointmentByBusiness")) },
        { json: "cancel_appointment_by_client", js: "cancel_appointment_by_client", typ: u(undefined, r("CancelAppointmentByClient")) },
        { json: "client_confirm_appointment", js: "client_confirm_appointment", typ: u(undefined, r("ClientConfirmAppointment")) },
        { json: "client_remove_empty_appointment", js: "client_remove_empty_appointment", typ: r("ClientRemoveEmptyAppointment") },
        { json: "reserve_appointment", js: "reserve_appointment", typ: r("ReserveAppointment") },
    ], false),
    "CancelAppointmentByBusiness": o([
        { json: "request", js: "request", typ: r("AppointmentCancelAppointmentByBusinessRequest") },
        { json: "response", js: "response", typ: r("AppointmentCancelAppointmentByBusinessResponse") },
    ], false),
    "AppointmentCancelAppointmentByBusinessRequest": o([
        { json: "cred", js: "cred", typ: u(undefined, r("Cred")) },
        { json: "id", js: "id", typ: u(3.14, "") },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "method", js: "method", typ: "" },
        { json: "params", js: "params", typ: r("AppointmentCancelAppointmentByBusinessRequestParams") },
    ], false),
    "AppointmentCancelAppointmentByBusinessRequestParams": o([
        { json: "appointment", js: "appointment", typ: r("PurpleAppointment") },
        { json: "client", js: "client", typ: u(undefined, r("PurpleClient")) },
        { json: "business", js: "business", typ: "any" },
    ], "any"),
    "PurpleAppointment": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "PurpleClient": o([
        { json: "comment", js: "comment", typ: u(undefined, "") },
        { json: "id", js: "id", typ: "" },
    ], false),
    "AppointmentCancelAppointmentByBusinessResponse": o([
        { json: "id", js: "id", typ: 3.14 },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "result", js: "result", typ: u(undefined, true) },
        { json: "error", js: "error", typ: u(undefined, r("AppointmentCancelAppointmentByBusinessResponseError")) },
    ], false),
    "AppointmentCancelAppointmentByBusinessResponseError": o([
        { json: "code", js: "code", typ: 3.14 },
        { json: "data", js: "data", typ: u(undefined, "") },
        { json: "message", js: "message", typ: "" },
    ], "any"),
    "CancelAppointmentByClient": o([
        { json: "request", js: "request", typ: r("AppointmentCancelAppointmentByClientRequest") },
        { json: "response", js: "response", typ: r("AppointmentCancelAppointmentByClientResponse") },
    ], false),
    "AppointmentCancelAppointmentByClientRequest": o([
        { json: "cred", js: "cred", typ: u(undefined, r("Cred")) },
        { json: "id", js: "id", typ: u(3.14, "") },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "method", js: "method", typ: "" },
        { json: "params", js: "params", typ: r("AppointmentCancelAppointmentByClientRequestParams") },
    ], false),
    "AppointmentCancelAppointmentByClientRequestParams": o([
        { json: "appointment", js: "appointment", typ: r("FluffyAppointment") },
        { json: "client", js: "client", typ: u(undefined, r("FluffyClient")) },
        { json: "business", js: "business", typ: "any" },
    ], "any"),
    "FluffyAppointment": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "FluffyClient": o([
        { json: "comment", js: "comment", typ: u(undefined, "") },
        { json: "id", js: "id", typ: "" },
    ], false),
    "AppointmentCancelAppointmentByClientResponse": o([
        { json: "id", js: "id", typ: 3.14 },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "result", js: "result", typ: u(undefined, true) },
        { json: "error", js: "error", typ: u(undefined, r("AppointmentCancelAppointmentByClientResponseError")) },
    ], false),
    "AppointmentCancelAppointmentByClientResponseError": o([
        { json: "code", js: "code", typ: 3.14 },
        { json: "data", js: "data", typ: u(undefined, "") },
        { json: "message", js: "message", typ: "" },
    ], "any"),
    "ClientConfirmAppointment": o([
        { json: "request", js: "request", typ: r("AppointmentClientConfirmAppointmentRequest") },
        { json: "response", js: "response", typ: r("AppointmentClientConfirmAppointmentResponse") },
    ], false),
    "AppointmentClientConfirmAppointmentRequest": o([
        { json: "cred", js: "cred", typ: u(undefined, r("Cred")) },
        { json: "id", js: "id", typ: u(3.14, "") },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "method", js: "method", typ: "" },
        { json: "params", js: "params", typ: r("ConfirmAppointment") },
    ], false),
    "ConfirmAppointment": o([
        { json: "appointment", js: "appointment", typ: r("TentacledAppointment") },
        { json: "client", js: "client", typ: u(undefined, r("TentacledClient")) },
        { json: "business", js: "business", typ: "any" },
    ], "any"),
    "TentacledAppointment": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "TentacledClient": o([
        { json: "comment", js: "comment", typ: u(undefined, "") },
        { json: "id", js: "id", typ: "" },
    ], false),
    "AppointmentClientConfirmAppointmentResponse": o([
        { json: "id", js: "id", typ: 3.14 },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "result", js: "result", typ: u(undefined, u(a("any"), true, r("AppointmentSchema"), 3.14, 0, null, "")) },
        { json: "error", js: "error", typ: u(undefined, r("AppointmentClientConfirmAppointmentResponseError")) },
    ], false),
    "AppointmentClientConfirmAppointmentResponseError": o([
        { json: "code", js: "code", typ: 3.14 },
        { json: "data", js: "data", typ: u(undefined, "") },
        { json: "message", js: "message", typ: "" },
    ], "any"),
    "AppointmentSchema": o([
        { json: "additional_info", js: "additional_info", typ: u(undefined, m("any")) },
        { json: "additionalClientAppears", js: "additionalClientAppears", typ: a(r("AdditionalClientAppear")) },
        { json: "additionalClientPayments", js: "additionalClientPayments", typ: a(r("AdditionalClientPayment")) },
        { json: "additionalClients", js: "additionalClients", typ: a(r("PurpleAppointmentClient")) },
        { json: "additionalClientSources", js: "additionalClientSources", typ: a(r("AdditionalClientSource")) },
        { json: "additionalClientStatuses", js: "additionalClientStatuses", typ: a(r("AdditionalClientStatus")) },
        { json: "additionalClientUtms", js: "additionalClientUtms", typ: a(r("AdditionalClientUtm")) },
        { json: "additionalFields", js: "additionalFields", typ: a(r("AdditionalField")) },
        { json: "additionalProducts", js: "additionalProducts", typ: a(r("AdditionalProduct")) },
        { json: "additionalTaxonomies", js: "additionalTaxonomies", typ: a(r("AppointmentTaxonomy")) },
        { json: "address", js: "address", typ: u(undefined, "") },
        { json: "adjacentId", js: "adjacentId", typ: u(undefined, "") },
        { json: "appointment", js: "appointment", typ: r("AppointmentInfo") },
        { json: "autoPhoneCallStatus", js: "autoPhoneCallStatus", typ: u(undefined, "") },
        { json: "bannedClients", js: "bannedClients", typ: a("") },
        { json: "business", js: "business", typ: r("AppointmentBusiness") },
        { json: "cabinet", js: "cabinet", typ: r("Cabinet") },
        { json: "capacity", js: "capacity", typ: u(undefined, 3.14) },
        { json: "changeReason", js: "changeReason", typ: "" },
        { json: "client", js: "client", typ: r("ClientClass") },
        { json: "client_appear", js: "client_appear", typ: r("AppointmentClientAppear") },
        { json: "client_med_code", js: "client_med_code", typ: u(undefined, "") },
        { json: "client_payment", js: "client_payment", typ: r("AppointmentClientPayment") },
        { json: "client_payment_invoice", js: "client_payment_invoice", typ: u(undefined, "") },
        { json: "clientComment", js: "clientComment", typ: "" },
        { json: "clientVisitors", js: "clientVisitors", typ: a(r("PurpleAppointmentClient")) },
        { json: "color", js: "color", typ: u(undefined, "") },
        { json: "destinationKeyword", js: "destinationKeyword", typ: u(undefined, "") },
        { json: "destinationLink", js: "destinationLink", typ: u(undefined, "") },
        { json: "extraFields", js: "extraFields", typ: a(r("ExtraField")) },
        { json: "gt", js: "gt", typ: u(undefined, true) },
        { json: "gtTimeFrame", js: "gtTimeFrame", typ: u(undefined, "") },
        { json: "location", js: "location", typ: u(undefined, r("Location")) },
        { json: "masterImportance", js: "masterImportance", typ: u(undefined, true) },
        { json: "minClients", js: "minClients", typ: u(undefined, 3.14) },
        { json: "moveCounter", js: "moveCounter", typ: 3.14 },
        { json: "movedByRobot", js: "movedByRobot", typ: true },
        { json: "movedFromFired", js: "movedFromFired", typ: u(undefined, true) },
        { json: "networkID", js: "networkID", typ: u(undefined, "") },
        { json: "notes", js: "notes", typ: "" },
        { json: "order", js: "order", typ: r("Order") },
        { json: "preferredResource", js: "preferredResource", typ: u(undefined, true) },
        { json: "promoCode", js: "promoCode", typ: u(undefined, "") },
        { json: "refererLink", js: "refererLink", typ: u(undefined, "") },
        { json: "referrer", js: "referrer", typ: u(undefined, "") },
        { json: "reminder", js: "reminder", typ: r("Reminder") },
        { json: "removedClientsData", js: "removedClientsData", typ: a(r("RemovedClientsDatum")) },
        { json: "resource", js: "resource", typ: r("AppointmentResource") },
        { json: "review", js: "review", typ: r("Review") },
        { json: "room", js: "room", typ: u(undefined, r("Room")) },
        { json: "showcase", js: "showcase", typ: r("AppointmentShowcase") },
        { json: "socialToken", js: "socialToken", typ: u(undefined, "") },
        { json: "source", js: "source", typ: "" },
        { json: "taxonomy", js: "taxonomy", typ: r("AppointmentTaxonomy") },
        { json: "utm", js: "utm", typ: u(undefined, m("any")) },
        { json: "withCoSale", js: "withCoSale", typ: u(undefined, true) },
    ], false),
    "AdditionalClientAppear": o([
        { json: "appear", js: "appear", typ: r("AppointmentClientAppear") },
        { json: "clientID", js: "clientID", typ: "" },
    ], false),
    "AdditionalClientPayment": o([
        { json: "clientID", js: "clientID", typ: "" },
        { json: "payment", js: "payment", typ: r("AppointmentClientPayment") },
    ], false),
    "AdditionalClientSource": o([
        { json: "clientID", js: "clientID", typ: "" },
        { json: "source", js: "source", typ: "" },
    ], false),
    "AdditionalClientStatus": o([
        { json: "clientID", js: "clientID", typ: "" },
        { json: "status", js: "status", typ: r("AppointmentStatus") },
    ], false),
    "AdditionalClientUtm": o([
        { json: "clientID", js: "clientID", typ: "" },
        { json: "utm", js: "utm", typ: m("any") },
    ], false),
    "PurpleAppointmentClient": o([
        { json: "address", js: "address", typ: u(undefined, "") },
        { json: "adminComment", js: "adminComment", typ: u(undefined, "") },
        { json: "birthday", js: "birthday", typ: u(undefined, "") },
        { json: "clientCardNumber", js: "clientCardNumber", typ: u(undefined, "") },
        { json: "clientComment", js: "clientComment", typ: u(undefined, "") },
        { json: "creatorProfileID", js: "creatorProfileID", typ: u(undefined, "") },
        { json: "creatorProfileName", js: "creatorProfileName", typ: u(undefined, "") },
        { json: "driverLicense", js: "driverLicense", typ: u(undefined, "") },
        { json: "email", js: "email", typ: u(undefined, "") },
        { json: "extraData", js: "extraData", typ: u(undefined, m("any")) },
        { json: "extraID", js: "extraID", typ: u(undefined, "") },
        { json: "extraVisitors", js: "extraVisitors", typ: u(undefined, 3.14) },
        { json: "fax", js: "fax", typ: u(undefined, "") },
        { json: "feedback", js: "feedback", typ: u(undefined, r("AppointmentClientFeedback")) },
        { json: "GAClientID", js: "GAClientID", typ: u(undefined, "") },
        { json: "houseNumber", js: "houseNumber", typ: u(undefined, "") },
        { json: "id", js: "id", typ: "" },
        { json: "incomingPhone", js: "incomingPhone", typ: u(undefined, r("IncomingPhoneClass")) },
        { json: "israelCity", js: "israelCity", typ: u(undefined, r("IsraelCity")) },
        { json: "isVIP", js: "isVIP", typ: u(undefined, true) },
        { json: "kupatHolim", js: "kupatHolim", typ: u(undefined, r("KupatHolim")) },
        { json: "language", js: "language", typ: u(undefined, "") },
        { json: "middleName", js: "middleName", typ: u(undefined, "") },
        { json: "name", js: "name", typ: "" },
        { json: "passportId", js: "passportId", typ: u(undefined, "") },
        { json: "phone", js: "phone", typ: u(undefined, r("IncomingPhoneClass")) },
        { json: "seasonTicketId", js: "seasonTicketId", typ: u(undefined, "") },
        { json: "seasonTicketNumber", js: "seasonTicketNumber", typ: u(undefined, "") },
        { json: "sex", js: "sex", typ: u(undefined, r("Sex")) },
        { json: "shortId", js: "shortId", typ: u(undefined, "") },
        { json: "surname", js: "surname", typ: "" },
        { json: "taxiPark", js: "taxiPark", typ: u(undefined, "") },
        { json: "taxiParkMemberCount", js: "taxiParkMemberCount", typ: u(undefined, 3.14) },
    ], false),
    "AppointmentClientFeedback": o([
        { json: "complaintActionText", js: "complaintActionText", typ: u(undefined, "") },
        { json: "complaintStatus", js: "complaintStatus", typ: u(undefined, r("ComplaintStatus")) },
        { json: "complaintText", js: "complaintText", typ: u(undefined, "") },
        { json: "extraFields", js: "extraFields", typ: u(undefined, a(r("ExtraField"))) },
        { json: "inprogress", js: "inprogress", typ: u(undefined, true) },
        { json: "originalMessage", js: "originalMessage", typ: u(undefined, "") },
        { json: "rating", js: "rating", typ: u(undefined, "") },
    ], false),
    "ExtraField": o([
        { json: "fieldID", js: "fieldID", typ: "" },
        { json: "fieldName", js: "fieldName", typ: "" },
        { json: "value", js: "value", typ: u(3.14, m("any"), null, "") },
    ], false),
    "IncomingPhoneClass": o([
        { json: "areaCode", js: "areaCode", typ: "" },
        { json: "countryCode", js: "countryCode", typ: "" },
        { json: "number", js: "number", typ: "" },
    ], false),
    "IsraelCity": o([
        { json: "cityId", js: "cityId", typ: "" },
        { json: "name", js: "name", typ: "" },
    ], false),
    "KupatHolim": o([
        { json: "kupatHolimId", js: "kupatHolimId", typ: "" },
        { json: "name", js: "name", typ: "" },
    ], false),
    "AdditionalField": o([
        { json: "name", js: "name", typ: "" },
        { json: "requiredField", js: "requiredField", typ: true },
        { json: "shortName", js: "shortName", typ: "" },
        { json: "type", js: "type", typ: r("AdditionalFieldType") },
        { json: "value", js: "value", typ: "" },
    ], false),
    "AdditionalProduct": o([
        { json: "id", js: "id", typ: "" },
        { json: "price", js: "price", typ: 3.14 },
    ], false),
    "AppointmentTaxonomy": o([
        { json: "alias", js: "alias", typ: "" },
        { json: "extraId", js: "extraId", typ: u(undefined, "") },
        { json: "id", js: "id", typ: "" },
    ], false),
    "AppointmentInfo": o([
        { json: "backofficeID", js: "backofficeID", typ: u(3.14, "") },
        { json: "blockSMS", js: "blockSMS", typ: true },
        { json: "created", js: "created", typ: Date },
        { json: "drinkAnswer", js: "drinkAnswer", typ: r("DrinkAnswer") },
        { json: "duration", js: "duration", typ: 3.14 },
        { json: "hideAppointmentTime", js: "hideAppointmentTime", typ: true },
        { json: "id", js: "id", typ: "" },
        { json: "integration_data", js: "integration_data", typ: u(undefined, r("IntegrationData")) },
        { json: "price", js: "price", typ: r("Price") },
        { json: "shortId", js: "shortId", typ: "" },
        { json: "start", js: "start", typ: Date },
        { json: "status", js: "status", typ: r("AppointmentStatus") },
        { json: "talkAnswer", js: "talkAnswer", typ: r("TalkAnswer") },
        { json: "testRecord", js: "testRecord", typ: true },
        { json: "updated", js: "updated", typ: Date },
    ], false),
    "IntegrationData": o([
        { json: "extraId", js: "extraId", typ: "" },
    ], false),
    "Price": o([
        { json: "additionalTaxonomyDiscount", js: "additionalTaxonomyDiscount", typ: r("AdditionalTaxonomyDiscount") },
        { json: "amount", js: "amount", typ: 3.14 },
        { json: "currency", js: "currency", typ: r("CurrencyList") },
        { json: "discount", js: "discount", typ: u(undefined, 3.14) },
        { json: "discountProvider", js: "discountProvider", typ: u(undefined, r("DiscountProvider")) },
        { json: "discountType", js: "discountType", typ: u(undefined, "") },
        { json: "originalAmount", js: "originalAmount", typ: u(undefined, 3.14) },
    ], false),
    "AdditionalTaxonomyDiscount": o([
        { json: "discount", js: "discount", typ: u(undefined, 3.14) },
        { json: "discountProvider", js: "discountProvider", typ: u(undefined, r("DiscountProvider")) },
        { json: "discountType", js: "discountType", typ: u(undefined, "") },
        { json: "taxonomyID", js: "taxonomyID", typ: u(undefined, "") },
    ], false),
    "AppointmentBusiness": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "Cabinet": o([
        { json: "id", js: "id", typ: u(undefined, "") },
    ], false),
    "ClientClass": o([
        { json: "address", js: "address", typ: u(undefined, "") },
        { json: "adminComment", js: "adminComment", typ: u(undefined, "") },
        { json: "birthday", js: "birthday", typ: u(undefined, "") },
        { json: "clientCardNumber", js: "clientCardNumber", typ: u(undefined, "") },
        { json: "clientComment", js: "clientComment", typ: u(undefined, "") },
        { json: "creatorProfileID", js: "creatorProfileID", typ: u(undefined, "") },
        { json: "creatorProfileName", js: "creatorProfileName", typ: u(undefined, "") },
        { json: "driverLicense", js: "driverLicense", typ: u(undefined, "") },
        { json: "email", js: "email", typ: u(undefined, "") },
        { json: "extraData", js: "extraData", typ: u(undefined, m("any")) },
        { json: "extraID", js: "extraID", typ: u(undefined, "") },
        { json: "extraVisitors", js: "extraVisitors", typ: u(undefined, 3.14) },
        { json: "fax", js: "fax", typ: u(undefined, "") },
        { json: "feedback", js: "feedback", typ: u(undefined, r("AppointmentClientFeedback")) },
        { json: "GAClientID", js: "GAClientID", typ: u(undefined, "") },
        { json: "houseNumber", js: "houseNumber", typ: u(undefined, "") },
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "incomingPhone", js: "incomingPhone", typ: u(undefined, r("IncomingPhoneClass")) },
        { json: "israelCity", js: "israelCity", typ: u(undefined, r("IsraelCity")) },
        { json: "isVIP", js: "isVIP", typ: u(undefined, true) },
        { json: "kupatHolim", js: "kupatHolim", typ: u(undefined, r("KupatHolim")) },
        { json: "language", js: "language", typ: u(undefined, "") },
        { json: "middleName", js: "middleName", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "passportId", js: "passportId", typ: u(undefined, "") },
        { json: "phone", js: "phone", typ: u(undefined, r("IncomingPhoneClass")) },
        { json: "seasonTicketId", js: "seasonTicketId", typ: u(undefined, "") },
        { json: "seasonTicketNumber", js: "seasonTicketNumber", typ: u(undefined, "") },
        { json: "sex", js: "sex", typ: u(undefined, r("Sex")) },
        { json: "shortId", js: "shortId", typ: u(undefined, "") },
        { json: "surname", js: "surname", typ: u(undefined, "") },
        { json: "taxiPark", js: "taxiPark", typ: u(undefined, "") },
        { json: "taxiParkMemberCount", js: "taxiParkMemberCount", typ: u(undefined, 3.14) },
    ], false),
    "Location": o([
        { json: "latitude", js: "latitude", typ: 3.14 },
        { json: "longitude", js: "longitude", typ: 3.14 },
    ], false),
    "Order": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "Reminder": o([
        { json: "status", js: "status", typ: r("ReminderStatus") },
        { json: "time_reminder", js: "time_reminder", typ: 3.14 },
    ], false),
    "RemovedClientsDatum": o([
        { json: "appear", js: "appear", typ: u(undefined, r("AppointmentClientAppear")) },
        { json: "client", js: "client", typ: r("PurpleAppointmentClient") },
        { json: "created", js: "created", typ: u(undefined, Date) },
        { json: "payment", js: "payment", typ: u(undefined, r("AppointmentClientPayment")) },
        { json: "payment_invoice", js: "payment_invoice", typ: u(undefined, "") },
        { json: "source", js: "source", typ: u(undefined, "") },
        { json: "status", js: "status", typ: u(undefined, r("AppointmentStatus")) },
    ], false),
    "AppointmentResource": o([
        { json: "extraID", js: "extraID", typ: u(undefined, "") },
        { json: "id", js: "id", typ: "" },
        { json: "middleName", js: "middleName", typ: u(undefined, "") },
        { json: "name", js: "name", typ: "" },
        { json: "surname", js: "surname", typ: "" },
    ], false),
    "Review": o([
        { json: "business", js: "business", typ: r("BusinessClass") },
        { json: "taxonomy", js: "taxonomy", typ: r("BusinessClass") },
        { json: "worker", js: "worker", typ: r("BusinessClass") },
    ], false),
    "BusinessClass": o([
        { json: "comment", js: "comment", typ: u(undefined, "") },
        { json: "rate", js: "rate", typ: u(undefined, 3.14) },
    ], false),
    "Room": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "AppointmentShowcase": o([
        { json: "businessID", js: "businessID", typ: u(undefined, "") },
    ], false),
    "ClientRemoveEmptyAppointment": o([
        { json: "request", js: "request", typ: r("AppointmentClientRemoveEmptyAppointmentRequest") },
        { json: "response", js: "response", typ: r("AppointmentClientRemoveEmptyAppointmentResponse") },
    ], false),
    "AppointmentClientRemoveEmptyAppointmentRequest": o([
        { json: "cred", js: "cred", typ: u(undefined, r("Cred")) },
        { json: "id", js: "id", typ: u(3.14, "") },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "method", js: "method", typ: "" },
        { json: "params", js: "params", typ: r("RemoveEmptyAppointment") },
    ], false),
    "RemoveEmptyAppointment": o([
        { json: "appointment", js: "appointment", typ: r("StickyAppointment") },
        { json: "business", js: "business", typ: r("PurpleBusiness") },
    ], "any"),
    "StickyAppointment": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "PurpleBusiness": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "AppointmentClientRemoveEmptyAppointmentResponse": o([
        { json: "id", js: "id", typ: 3.14 },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "result", js: "result", typ: u(undefined, true) },
        { json: "error", js: "error", typ: u(undefined, r("AppointmentClientRemoveEmptyAppointmentResponseError")) },
    ], false),
    "AppointmentClientRemoveEmptyAppointmentResponseError": o([
        { json: "code", js: "code", typ: 3.14 },
        { json: "data", js: "data", typ: u(undefined, "") },
        { json: "message", js: "message", typ: "" },
    ], "any"),
    "ReserveAppointment": o([
        { json: "request", js: "request", typ: r("AppointmentReserveAppointmentRequest") },
        { json: "response", js: "response", typ: r("AppointmentReserveAppointmentResponse") },
    ], false),
    "AppointmentReserveAppointmentRequest": o([
        { json: "cred", js: "cred", typ: u(undefined, r("Cred")) },
        { json: "id", js: "id", typ: u(3.14, "") },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "method", js: "method", typ: "" },
        { json: "params", js: "params", typ: r("AppointmentReserve") },
    ], false),
    "AppointmentReserve": o([
        { json: "appointment", js: "appointment", typ: r("AppointmentObject") },
        { json: "business", js: "business", typ: r("FluffyBusiness") },
        { json: "originBusinessID", js: "originBusinessID", typ: u(undefined, "") },
        { json: "resource", js: "resource", typ: r("ResourceClass") },
        { json: "source", js: "source", typ: "" },
        { json: "taxonomy", js: "taxonomy", typ: r("ParamsTaxonomy") },
    ], "any"),
    "AppointmentObject": o([
        { json: "start", js: "start", typ: "" },
    ], "any"),
    "FluffyBusiness": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "ResourceClass": o([
        { json: "id", js: "id", typ: a("") },
    ], false),
    "ParamsTaxonomy": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "AppointmentReserveAppointmentResponse": o([
        { json: "id", js: "id", typ: 3.14 },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "result", js: "result", typ: u(undefined, u(a("any"), true, r("AppointmentSchema"), 3.14, 0, null, "")) },
        { json: "error", js: "error", typ: u(undefined, r("AppointmentReserveAppointmentResponseError")) },
    ], false),
    "AppointmentReserveAppointmentResponseError": o([
        { json: "code", js: "code", typ: 3.14 },
        { json: "data", js: "data", typ: u(undefined, "") },
        { json: "message", js: "message", typ: "" },
    ], "any"),
    "BusinessController": o([
        { json: "get_network_data", js: "get_network_data", typ: r("GetNetworkData") },
        { json: "get_profile_by_id", js: "get_profile_by_id", typ: r("GetProfileById") },
    ], false),
    "GetNetworkData": o([
        { json: "request", js: "request", typ: r("BusinessGetNetworkDataRequest") },
        { json: "response", js: "response", typ: r("BusinessGetNetworkDataResponse") },
    ], false),
    "BusinessGetNetworkDataRequest": o([
        { json: "cred", js: "cred", typ: u(undefined, r("Cred")) },
        { json: "id", js: "id", typ: u(3.14, "") },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "method", js: "method", typ: "" },
        { json: "params", js: "params", typ: r("BusinessGetNetworkDataRequestParams") },
    ], false),
    "BusinessGetNetworkDataRequestParams": o([
        { json: "networkID", js: "networkID", typ: u(3.14, "") },
        { json: "with_business_info", js: "with_business_info", typ: u(undefined, true) },
    ], false),
    "BusinessGetNetworkDataResponse": o([
        { json: "id", js: "id", typ: 3.14 },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "result", js: "result", typ: u(undefined, u(r("ResultClass"), null)) },
        { json: "error", js: "error", typ: u(undefined, r("BusinessGetNetworkDataResponseError")) },
    ], false),
    "BusinessGetNetworkDataResponseError": o([
        { json: "code", js: "code", typ: 3.14 },
        { json: "data", js: "data", typ: u(undefined, "") },
        { json: "message", js: "message", typ: "" },
    ], "any"),
    "ResultClass": o([
        { json: "businessConfiguration", js: "businessConfiguration", typ: m("any") },
        { json: "businesses", js: "businesses", typ: a(r("TentacledBusiness")) },
        { json: "clientVIPPhones", js: "clientVIPPhones", typ: a("") },
        { json: "grantGroups", js: "grantGroups", typ: a(m("any")) },
        { json: "networkID", js: "networkID", typ: "" },
        { json: "networkInfo", js: "networkInfo", typ: m("any") },
        { json: "networkName", js: "networkName", typ: u(undefined, "") },
        { json: "networkWidgetConfiguration", js: "networkWidgetConfiguration", typ: a(r("NetworkWidgetConfiguration")) },
    ], false),
    "TentacledBusiness": o([
        { json: "_id", js: "_id", typ: u(undefined, "") },
        { json: "businessID", js: "businessID", typ: "" },
        { json: "info", js: "info", typ: u(undefined, u(a("any"), true, r("StickyBusiness"), 3.14, 0, null, "")) },
        { json: "isMapBusiness", js: "isMapBusiness", typ: true },
        { json: "order", js: "order", typ: u(undefined, 3.14) },
        { json: "virtualTaxonomies", js: "virtualTaxonomies", typ: u(undefined, a("")) },
    ], false),
    "StickyBusiness": o([
        { json: "active", js: "active", typ: u(undefined, true) },
        { json: "additionalSettings", js: "additionalSettings", typ: u(undefined, r("PurpleAdditionalSettings")) },
        { json: "allowCategoryBooking", js: "allowCategoryBooking", typ: u(undefined, true) },
        { json: "backoffice_configuration", js: "backoffice_configuration", typ: u(undefined, r("FluffyBackofficeConfiguration")) },
        { json: "backofficeConfiguration", js: "backofficeConfiguration", typ: u(undefined, r("PurpleBackofficeConfiguration")) },
        { json: "backofficeType", js: "backofficeType", typ: u(undefined, r("BackofficeType")) },
        { json: "cabinets", js: "cabinets", typ: u(undefined, a(r("PurpleCabinet"))) },
        { json: "cabinetsEnabled", js: "cabinetsEnabled", typ: u(undefined, true) },
        { json: "callback_widget_configuration", js: "callback_widget_configuration", typ: u(undefined, r("PurpleCallbackWidgetConfiguration")) },
        { json: "consumables", js: "consumables", typ: u(undefined, a(r("PurpleConsumable"))) },
        { json: "created_on", js: "created_on", typ: u(undefined, Date) },
        { json: "defaultFilteredWorkers", js: "defaultFilteredWorkers", typ: u(undefined, a("")) },
        { json: "departments", js: "departments", typ: u(undefined, a(r("PurpleDepartment"))) },
        { json: "designs", js: "designs", typ: u(undefined, a(m("any"))) },
        { json: "extraID", js: "extraID", typ: u(undefined, "") },
        { json: "flatTaxonomyDisplay", js: "flatTaxonomyDisplay", typ: u(undefined, true) },
        { json: "general_info", js: "general_info", typ: r("BusinessInfo") },
        { json: "group", js: "group", typ: u(undefined, r("Group")) },
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "integration_data", js: "integration_data", typ: u(undefined, m("any")) },
        { json: "mini_widget_configuration", js: "mini_widget_configuration", typ: r("PurpleMiniWidgetConfiguration") },
        { json: "mobileData", js: "mobileData", typ: u(undefined, a("any")) },
        { json: "notifications", js: "notifications", typ: u(undefined, a("any")) },
        { json: "stateLevelHolidaysNotWorking", js: "stateLevelHolidaysNotWorking", typ: u(undefined, true) },
        { json: "taxonomiesComplex", js: "taxonomiesComplex", typ: u(undefined, a(r("PurpleTaxonomiesComplex"))) },
        { json: "taxonomy_tree_capacity", js: "taxonomy_tree_capacity", typ: u(undefined, a(m("any"))) },
        { json: "top_services", js: "top_services", typ: u(undefined, r("PurpleTopServices")) },
        { json: "vertical", js: "vertical", typ: u(undefined, "") },
        { json: "widget_configuration", js: "widget_configuration", typ: r("PurpleWidgetConfiguration") },
        { json: "yandexFeedType", js: "yandexFeedType", typ: u(undefined, "") },
    ], false),
    "PurpleAdditionalSettings": o([
        { json: "appointmentExtensionAmount", js: "appointmentExtensionAmount", typ: u(undefined, 3.14) },
        { json: "appointmentExtensionType", js: "appointmentExtensionType", typ: u(undefined, r("AppointmentExtensionType")) },
    ], "any"),
    "PurpleBackofficeConfiguration": o([
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
    "FluffyBackofficeConfiguration": o([
        { json: "enableMasterImportance", js: "enableMasterImportance", typ: u(undefined, true) },
        { json: "resourceTimetableType", js: "resourceTimetableType", typ: u(undefined, r("ResourceTimetableType")) },
    ], "any"),
    "PurpleCabinet": o([
        { json: "active", js: "active", typ: u(undefined, true) },
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], false),
    "PurpleCallbackWidgetConfiguration": o([
        { json: "title1", js: "title1", typ: u(undefined, "") },
        { json: "title2", js: "title2", typ: u(undefined, "") },
    ], "any"),
    "PurpleConsumable": o([
        { json: "extraID", js: "extraID", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "quantity", js: "quantity", typ: 3.14 },
    ], "any"),
    "PurpleDepartment": o([
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
        { json: "showcases", js: "showcases", typ: u(undefined, a(r("ShowcaseElement"))) },
        { json: "showResourceWorkStatistics", js: "showResourceWorkStatistics", typ: u(undefined, true) },
        { json: "showWorkerProfession", js: "showWorkerProfession", typ: u(undefined, true) },
        { json: "skipBilling", js: "skipBilling", typ: u(undefined, true) },
        { json: "smsDuplicateFilter", js: "smsDuplicateFilter", typ: u(undefined, r("SmsDuplicateFilter")) },
        { json: "social_network", js: "social_network", typ: u(undefined, a(r("SocialNetworkSchema"))) },
        { json: "timetable", js: "timetable", typ: u(undefined, r("Timetable")) },
        { json: "timezone", js: "timezone", typ: u(undefined, u(null, "")) },
        { json: "verticalTranslation", js: "verticalTranslation", typ: u(undefined, r("VerticalTranslation")) },
        { json: "website", js: "website", typ: u(undefined, "") },
    ], false),
    "AdditionalFieldsObject": o([
        { json: "name", js: "name", typ: "" },
        { json: "requiredField", js: "requiredField", typ: true },
        { json: "shortName", js: "shortName", typ: "" },
        { json: "type", js: "type", typ: r("AdditionalFieldType") },
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
    "ShowcaseElement": o([
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
    "PurpleMiniWidgetConfiguration": o([
        { json: "fields", js: "fields", typ: u(undefined, a(r("Field"))) },
        { json: "title1", js: "title1", typ: u(undefined, "") },
        { json: "title2", js: "title2", typ: u(undefined, "") },
    ], "any"),
    "PurpleTaxonomiesComplex": o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "taxonomies", js: "taxonomies", typ: u(undefined, a("")) },
    ], "any"),
    "PurpleTopServices": o([
        { json: "services", js: "services", typ: u(undefined, a("any")) },
        { json: "status", js: "status", typ: u(undefined, "") },
    ], "any"),
    "PurpleWidgetConfiguration": o([
        { json: "additionalName", js: "additionalName", typ: u(undefined, "") },
        { json: "alignmentTaxonomySlots", js: "alignmentTaxonomySlots", typ: u(undefined, true) },
        { json: "allowAutoSelect", js: "allowAutoSelect", typ: u(undefined, true) },
        { json: "allowBookVisitor", js: "allowBookVisitor", typ: u(undefined, true) },
        { json: "allowSkipTimeCheck", js: "allowSkipTimeCheck", typ: u(undefined, true) },
        { json: "appointment_confirmation_text", js: "appointment_confirmation_text", typ: u(undefined, "") },
        { json: "appointment_confirmation_title", js: "appointment_confirmation_title", typ: u(undefined, "") },
        { json: "askClientBirthday", js: "askClientBirthday", typ: u(undefined, true) },
        { json: "askClientGender", js: "askClientGender", typ: u(undefined, true) },
        { json: "bookableDateRanges", js: "bookableDateRanges", typ: u(undefined, r("PurpleBookableDateRanges")) },
        { json: "bookableMonthsCount", js: "bookableMonthsCount", typ: u(undefined, 3.14) },
        { json: "calendarMode", js: "calendarMode", typ: u(undefined, true) },
        { json: "calendarModeHideTime", js: "calendarModeHideTime", typ: u(undefined, true) },
        { json: "clientBlockingSettings", js: "clientBlockingSettings", typ: u(undefined, r("PurpleClientBlockingSettings")) },
        { json: "clientCommentTitle", js: "clientCommentTitle", typ: u(undefined, "") },
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
        { json: "discountedPriceRounding", js: "discountedPriceRounding", typ: u(undefined, r("PurpleDiscountedPriceRounding")) },
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
        { json: "middleNameSupport", js: "middleNameSupport", typ: u(undefined, true) },
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
        { json: "socialSharing", js: "socialSharing", typ: u(undefined, r("PurpleSocialSharing")) },
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
    "PurpleBookableDateRanges": o([
        { json: "enabled", js: "enabled", typ: u(undefined, true) },
        { json: "end", js: "end", typ: u(undefined, "any") },
        { json: "start", js: "start", typ: u(undefined, "any") },
    ], "any"),
    "PurpleClientBlockingSettings": o([
        { json: "appointmentClientBlock", js: "appointmentClientBlock", typ: u(undefined, true) },
        { json: "appointmentClientBlockDays", js: "appointmentClientBlockDays", typ: u(undefined, 3.14) },
        { json: "appointmentClientBlockText", js: "appointmentClientBlockText", typ: u(undefined, "") },
        { json: "blockIfFutureRecordExists", js: "blockIfFutureRecordExists", typ: u(undefined, true) },
        { json: "blockRepeatedRecordsCount", js: "blockRepeatedRecordsCount", typ: u(undefined, 3.14) },
        { json: "blockRepeatedRecordsRange", js: "blockRepeatedRecordsRange", typ: u(undefined, 3.14) },
        { json: "blockRepeatedRecordsText", js: "blockRepeatedRecordsText", typ: u(undefined, "") },
    ], false),
    "PurpleDiscountedPriceRounding": o([
        { json: "rule", js: "rule", typ: u(undefined, r("Rule")) },
        { json: "value", js: "value", typ: u(undefined, 3.14) },
    ], "any"),
    "PurpleSocialSharing": o([
        { json: "active", js: "active", typ: u(undefined, true) },
        { json: "discountAmount", js: "discountAmount", typ: u(undefined, u(3.14, null)) },
        { json: "discountEnabled", js: "discountEnabled", typ: u(undefined, true) },
        { json: "discountType", js: "discountType", typ: u(undefined, r("DiscountType")) },
        { json: "text", js: "text", typ: u(undefined, u(null, "")) },
        { json: "widgetText", js: "widgetText", typ: u(undefined, u(null, "")) },
    ], "any"),
    "NetworkWidgetConfiguration": o([
        { json: "_id", js: "_id", typ: u(undefined, "") },
        { json: "businesses", js: "businesses", typ: a(r("NetworkWidgetConfigurationBusiness")) },
        { json: "defaultServiceID", js: "defaultServiceID", typ: u(null, "") },
        { json: "showBranchSelector", js: "showBranchSelector", typ: true },
        { json: "showDefaultService", js: "showDefaultService", typ: true },
        { json: "showOnMap", js: "showOnMap", typ: true },
        { json: "source", js: "source", typ: "" },
    ], false),
    "NetworkWidgetConfigurationBusiness": o([
        { json: "_id", js: "_id", typ: u(undefined, "") },
        { json: "active", js: "active", typ: true },
        { json: "internalID", js: "internalID", typ: "" },
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
        { json: "business", js: "business", typ: r("IndigoBusiness") },
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
    "IndigoBusiness": o([
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
        { json: "business", js: "business", typ: u(a("any"), true, r("IndecentBusiness"), 3.14, 0, null, "") },
        { json: "freeSms", js: "freeSms", typ: u(undefined, 3.14) },
        { json: "monthlyFreeSms", js: "monthlyFreeSms", typ: u(undefined, 3.14) },
        { json: "networks", js: "networks", typ: u(undefined, a(r("Network"))) },
        { json: "profiles", js: "profiles", typ: u(undefined, a(m("any"))) },
        { json: "top_services", js: "top_services", typ: u(undefined, r("ResultTopServices")) },
        { json: "useDefaultSmsTemplate", js: "useDefaultSmsTemplate", typ: u(undefined, true) },
        { json: "yandexFeedType", js: "yandexFeedType", typ: u(undefined, r("YandexFeedType")) },
    ], "any"),
    "IndecentBusiness": o([
        { json: "active", js: "active", typ: u(undefined, true) },
        { json: "additionalSettings", js: "additionalSettings", typ: u(undefined, r("FluffyAdditionalSettings")) },
        { json: "allowCategoryBooking", js: "allowCategoryBooking", typ: u(undefined, true) },
        { json: "backoffice_configuration", js: "backoffice_configuration", typ: u(undefined, r("StickyBackofficeConfiguration")) },
        { json: "backofficeConfiguration", js: "backofficeConfiguration", typ: u(undefined, r("TentacledBackofficeConfiguration")) },
        { json: "backofficeType", js: "backofficeType", typ: u(undefined, r("BackofficeType")) },
        { json: "cabinets", js: "cabinets", typ: u(undefined, a(r("FluffyCabinet"))) },
        { json: "cabinetsEnabled", js: "cabinetsEnabled", typ: u(undefined, true) },
        { json: "callback_widget_configuration", js: "callback_widget_configuration", typ: u(undefined, r("FluffyCallbackWidgetConfiguration")) },
        { json: "consumables", js: "consumables", typ: u(undefined, a(r("FluffyConsumable"))) },
        { json: "created_on", js: "created_on", typ: u(undefined, Date) },
        { json: "defaultFilteredWorkers", js: "defaultFilteredWorkers", typ: u(undefined, a("")) },
        { json: "departments", js: "departments", typ: u(undefined, a(r("FluffyDepartment"))) },
        { json: "designs", js: "designs", typ: u(undefined, a(m("any"))) },
        { json: "extraID", js: "extraID", typ: u(undefined, "") },
        { json: "flatTaxonomyDisplay", js: "flatTaxonomyDisplay", typ: u(undefined, true) },
        { json: "general_info", js: "general_info", typ: r("BusinessInfo") },
        { json: "group", js: "group", typ: u(undefined, r("Group")) },
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "integration_data", js: "integration_data", typ: u(undefined, m("any")) },
        { json: "mini_widget_configuration", js: "mini_widget_configuration", typ: r("FluffyMiniWidgetConfiguration") },
        { json: "mobileData", js: "mobileData", typ: u(undefined, a("any")) },
        { json: "notifications", js: "notifications", typ: u(undefined, a("any")) },
        { json: "resources", js: "resources", typ: a(u(a("any"), true, r("ResourceResource"), 3.14, 0, null, "")) },
        { json: "stateLevelHolidaysNotWorking", js: "stateLevelHolidaysNotWorking", typ: u(undefined, true) },
        { json: "taxonomies", js: "taxonomies", typ: a(r("BusinessTaxonomy")) },
        { json: "taxonomiesComplex", js: "taxonomiesComplex", typ: u(undefined, a(r("FluffyTaxonomiesComplex"))) },
        { json: "taxonomy_tree_capacity", js: "taxonomy_tree_capacity", typ: u(undefined, a(m("any"))) },
        { json: "top_services", js: "top_services", typ: u(undefined, r("FluffyTopServices")) },
        { json: "vertical", js: "vertical", typ: u(undefined, "") },
        { json: "widget_configuration", js: "widget_configuration", typ: r("FluffyWidgetConfiguration") },
        { json: "yandexFeedType", js: "yandexFeedType", typ: u(undefined, "") },
    ], false),
    "FluffyAdditionalSettings": o([
        { json: "appointmentExtensionAmount", js: "appointmentExtensionAmount", typ: u(undefined, 3.14) },
        { json: "appointmentExtensionType", js: "appointmentExtensionType", typ: u(undefined, r("AppointmentExtensionType")) },
    ], "any"),
    "TentacledBackofficeConfiguration": o([
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
    "StickyBackofficeConfiguration": o([
        { json: "enableMasterImportance", js: "enableMasterImportance", typ: u(undefined, true) },
        { json: "resourceTimetableType", js: "resourceTimetableType", typ: u(undefined, r("ResourceTimetableType")) },
    ], "any"),
    "FluffyCabinet": o([
        { json: "active", js: "active", typ: u(undefined, true) },
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], false),
    "FluffyCallbackWidgetConfiguration": o([
        { json: "title1", js: "title1", typ: u(undefined, "") },
        { json: "title2", js: "title2", typ: u(undefined, "") },
    ], "any"),
    "FluffyConsumable": o([
        { json: "extraID", js: "extraID", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "quantity", js: "quantity", typ: 3.14 },
    ], "any"),
    "FluffyDepartment": o([
        { json: "id", js: "id", typ: "" },
        { json: "id_", js: "id_", typ: u(undefined, 3.14) },
        { json: "name", js: "name", typ: "" },
    ], false),
    "FluffyMiniWidgetConfiguration": o([
        { json: "fields", js: "fields", typ: u(undefined, a(r("Field"))) },
        { json: "title1", js: "title1", typ: u(undefined, "") },
        { json: "title2", js: "title2", typ: u(undefined, "") },
    ], "any"),
    "ResourceResource": o([
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
        { json: "status", js: "status", typ: u(undefined, r("ResourceStatus")) },
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
        { json: "showcases", js: "showcases", typ: u(undefined, a(r("ShowcaseElement"))) },
        { json: "showResourceWorkStatistics", js: "showResourceWorkStatistics", typ: u(undefined, true) },
        { json: "showWorkerProfession", js: "showWorkerProfession", typ: u(undefined, true) },
        { json: "skipBilling", js: "skipBilling", typ: u(undefined, true) },
        { json: "smsDuplicateFilter", js: "smsDuplicateFilter", typ: u(undefined, r("SmsDuplicateFilter")) },
        { json: "social_network", js: "social_network", typ: u(undefined, a(r("SocialNetworkSchema"))) },
        { json: "timetable", js: "timetable", typ: u(undefined, r("Timetable")) },
        { json: "timezone", js: "timezone", typ: u(undefined, u(null, "")) },
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
        { json: "price", js: "price", typ: u(undefined, r("TaxonomyPrice")) },
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
        { json: "stockAmount", js: "stockAmount", typ: u(null, "") },
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
        { json: "_id", js: "_id", typ: u(undefined, "") },
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
    "TaxonomyPrice": o([
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
    "FluffyTaxonomiesComplex": o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "taxonomies", js: "taxonomies", typ: u(undefined, a("")) },
    ], "any"),
    "FluffyTopServices": o([
        { json: "services", js: "services", typ: u(undefined, a("any")) },
        { json: "status", js: "status", typ: u(undefined, "") },
    ], "any"),
    "FluffyWidgetConfiguration": o([
        { json: "additionalName", js: "additionalName", typ: u(undefined, "") },
        { json: "alignmentTaxonomySlots", js: "alignmentTaxonomySlots", typ: u(undefined, true) },
        { json: "allowAutoSelect", js: "allowAutoSelect", typ: u(undefined, true) },
        { json: "allowBookVisitor", js: "allowBookVisitor", typ: u(undefined, true) },
        { json: "allowSkipTimeCheck", js: "allowSkipTimeCheck", typ: u(undefined, true) },
        { json: "appointment_confirmation_text", js: "appointment_confirmation_text", typ: u(undefined, "") },
        { json: "appointment_confirmation_title", js: "appointment_confirmation_title", typ: u(undefined, "") },
        { json: "askClientBirthday", js: "askClientBirthday", typ: u(undefined, true) },
        { json: "askClientGender", js: "askClientGender", typ: u(undefined, true) },
        { json: "bookableDateRanges", js: "bookableDateRanges", typ: u(undefined, r("FluffyBookableDateRanges")) },
        { json: "bookableMonthsCount", js: "bookableMonthsCount", typ: u(undefined, 3.14) },
        { json: "calendarMode", js: "calendarMode", typ: u(undefined, true) },
        { json: "calendarModeHideTime", js: "calendarModeHideTime", typ: u(undefined, true) },
        { json: "clientBlockingSettings", js: "clientBlockingSettings", typ: u(undefined, r("FluffyClientBlockingSettings")) },
        { json: "clientCommentTitle", js: "clientCommentTitle", typ: u(undefined, "") },
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
        { json: "discountedPriceRounding", js: "discountedPriceRounding", typ: u(undefined, r("FluffyDiscountedPriceRounding")) },
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
        { json: "middleNameSupport", js: "middleNameSupport", typ: u(undefined, true) },
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
        { json: "socialSharing", js: "socialSharing", typ: u(undefined, r("FluffySocialSharing")) },
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
    "FluffyBookableDateRanges": o([
        { json: "enabled", js: "enabled", typ: u(undefined, true) },
        { json: "end", js: "end", typ: u(undefined, "any") },
        { json: "start", js: "start", typ: u(undefined, "any") },
    ], "any"),
    "FluffyClientBlockingSettings": o([
        { json: "appointmentClientBlock", js: "appointmentClientBlock", typ: u(undefined, true) },
        { json: "appointmentClientBlockDays", js: "appointmentClientBlockDays", typ: u(undefined, 3.14) },
        { json: "appointmentClientBlockText", js: "appointmentClientBlockText", typ: u(undefined, "") },
        { json: "blockIfFutureRecordExists", js: "blockIfFutureRecordExists", typ: u(undefined, true) },
        { json: "blockRepeatedRecordsCount", js: "blockRepeatedRecordsCount", typ: u(undefined, 3.14) },
        { json: "blockRepeatedRecordsRange", js: "blockRepeatedRecordsRange", typ: u(undefined, 3.14) },
        { json: "blockRepeatedRecordsText", js: "blockRepeatedRecordsText", typ: u(undefined, "") },
    ], false),
    "FluffyDiscountedPriceRounding": o([
        { json: "rule", js: "rule", typ: u(undefined, r("Rule")) },
        { json: "value", js: "value", typ: u(undefined, 3.14) },
    ], "any"),
    "FluffySocialSharing": o([
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
        { json: "find_or_create_client", js: "find_or_create_client", typ: u(undefined, r("FindOrCreateClient")) },
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
        { json: "business", js: "business", typ: r("HilariousBusiness") },
        { json: "client", js: "client", typ: r("ClientObject") },
        { json: "profile", js: "profile", typ: u(undefined, r("PurpleProfile")) },
        { json: "skipEmailCheck", js: "skipEmailCheck", typ: u(undefined, true) },
        { json: "skipProfileUpdate", js: "skipProfileUpdate", typ: u(undefined, true) },
    ], false),
    "HilariousBusiness": o([
        { json: "id", js: "id", typ: u(3.14, "") },
    ], false),
    "ClientObject": o([
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
    "PurpleProfile": o([
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
        { json: "business", js: "business", typ: u(undefined, r("AmbitiousBusiness")) },
        { json: "client", js: "client", typ: r("ClientObject") },
        { json: "documents", js: "documents", typ: u(undefined, a("any")) },
        { json: "profile", js: "profile", typ: u(undefined, r("FluffyProfile")) },
    ], "any"),
    "AmbitiousBusiness": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "FluffyProfile": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "FindOrCreateClient": o([
        { json: "request", js: "request", typ: r("ClientFindOrCreateClientRequest") },
        { json: "response", js: "response", typ: r("ClientFindOfCreateClientResponse") },
    ], false),
    "ClientFindOrCreateClientRequest": o([
        { json: "cred", js: "cred", typ: u(undefined, r("Cred")) },
        { json: "id", js: "id", typ: u(3.14, "") },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "method", js: "method", typ: "" },
        { json: "params", js: "params", typ: r("ClientFindOrCreateClientRequestParams") },
    ], false),
    "ClientFindOrCreateClientRequestParams": o([
        { json: "business", js: "business", typ: r("CunningBusiness") },
        { json: "client", js: "client", typ: r("ClientObject") },
        { json: "profile", js: "profile", typ: u(undefined, r("TentacledProfile")) },
        { json: "skipEmailCheck", js: "skipEmailCheck", typ: u(undefined, true) },
        { json: "skipProfileUpdate", js: "skipProfileUpdate", typ: u(undefined, true) },
    ], false),
    "CunningBusiness": o([
        { json: "id", js: "id", typ: u(3.14, "") },
    ], false),
    "TentacledProfile": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "ClientFindOfCreateClientResponse": o([
        { json: "result", js: "result", typ: u(undefined, r("ClientFindOfCreateClientResponseResult")) },
        { json: "error", js: "error", typ: u(undefined, r("ClientFindOfCreateClientResponseError")) },
        { json: "id", js: "id", typ: u(undefined, 3.14) },
        { json: "jsonrpc", js: "jsonrpc", typ: u(undefined, "") },
    ], "any"),
    "ClientFindOfCreateClientResponseError": o([
        { json: "code", js: "code", typ: 3.14 },
        { json: "data", js: "data", typ: u(undefined, "") },
        { json: "message", js: "message", typ: "" },
    ], "any"),
    "ClientFindOfCreateClientResponseResult": o([
        { json: "business", js: "business", typ: u(undefined, r("MagentaBusiness")) },
        { json: "client", js: "client", typ: r("ClientObject") },
        { json: "documents", js: "documents", typ: u(undefined, a("any")) },
        { json: "profile", js: "profile", typ: u(undefined, r("StickyProfile")) },
    ], "any"),
    "MagentaBusiness": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "StickyProfile": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "CracSlotsController": o([
        { json: "CRACDistributedResourcesFreeByDate", js: "CRACDistributedResourcesFreeByDate", typ: u(undefined, r("CracDistributedResourcesFreeByDate")) },
        { json: "CRACResourcesFreeByDate", js: "CRACResourcesFreeByDate", typ: u(undefined, r("CracResourcesFreeByDate")) },
        { json: "CRACResourcesFreeByDateV2", js: "CRACResourcesFreeByDateV2", typ: u(undefined, r("CracResourcesFreeByDateV2")) },
        { json: "GetCRACDistributedResourcesAndRooms", js: "GetCRACDistributedResourcesAndRooms", typ: r("GetCracDistributedResourcesAndRooms") },
        { json: "GetCRACInsuranceResourcesAndRooms", js: "GetCRACInsuranceResourcesAndRooms", typ: u(undefined, r("GetCracInsuranceResourcesAndRooms")) },
        { json: "GetCRACResourcesAndRooms", js: "GetCRACResourcesAndRooms", typ: u(undefined, r("GetCracResourcesAndRooms")) },
    ], false),
    "CracDistributedResourcesFreeByDate": o([
        { json: "request", js: "request", typ: r("CracCracDistributedResourcesFreeByDateRequest") },
        { json: "response", js: "response", typ: r("CracCracDistributedResourcesFreeByDateResponse") },
    ], false),
    "CracCracDistributedResourcesFreeByDateRequest": o([
        { json: "cred", js: "cred", typ: u(undefined, r("Cred")) },
        { json: "id", js: "id", typ: u(3.14, "") },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "method", js: "method", typ: "" },
        { json: "params", js: "params", typ: a(r("CracCracDistributedResourcesFreeByDateRequestParam")) },
    ], false),
    "CracCracDistributedResourcesFreeByDateRequestParam": o([
        { json: "business", js: "business", typ: r("FriskyBusiness") },
        { json: "resources", js: "resources", typ: a("") },
        { json: "taxonomy", js: "taxonomy", typ: r("PurpleTaxonomy") },
    ], false),
    "FriskyBusiness": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "PurpleTaxonomy": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "CracCracDistributedResourcesFreeByDateResponse": o([
        { json: "error", js: "error", typ: u(null, r("CracCracDistributedResourcesFreeByDateResponseError")) },
        { json: "id", js: "id", typ: 3.14 },
        { json: "result", js: "result", typ: u(undefined, r("CracCracDistributedResourcesFreeByDateResponseResult")) },
        { json: "jsonrpc", js: "jsonrpc", typ: u(undefined, "") },
    ], false),
    "CracCracDistributedResourcesFreeByDateResponseError": o([
        { json: "code", js: "code", typ: u(undefined, 3.14) },
        { json: "data", js: "data", typ: u(undefined, "") },
        { json: "message", js: "message", typ: u(undefined, "") },
    ], "any"),
    "CracCracDistributedResourcesFreeByDateResponseResult": o([
        { json: "Free", js: "Free", typ: a(r("PurpleFree")) },
    ], "any"),
    "PurpleFree": o([
        { json: "date", js: "date", typ: Date },
        { json: "maxFreeMinutes", js: "maxFreeMinutes", typ: 3.14 },
        { json: "resource", js: "resource", typ: "" },
        { json: "taxonomy", js: "taxonomy", typ: "" },
    ], "any"),
    "CracResourcesFreeByDate": o([
        { json: "request", js: "request", typ: r("CracCracResourcesFreeByDateRequest") },
        { json: "response", js: "response", typ: r("CracCracResourcesFreeByDateResponse") },
    ], "any"),
    "CracCracResourcesFreeByDateRequest": o([
        { json: "cred", js: "cred", typ: u(undefined, r("Cred")) },
        { json: "id", js: "id", typ: u(3.14, "") },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "method", js: "method", typ: "" },
        { json: "params", js: "params", typ: a(r("CracCracResourcesFreeByDateRequestParam")) },
    ], false),
    "CracCracResourcesFreeByDateRequestParam": o([
        { json: "duration", js: "duration", typ: 3.14 },
        { json: "resources", js: "resources", typ: a("") },
        { json: "taxonomy", js: "taxonomy", typ: r("FluffyTaxonomy") },
    ], false),
    "FluffyTaxonomy": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "CracCracResourcesFreeByDateResponse": o([
        { json: "error", js: "error", typ: u(null, r("CracCracResourcesFreeByDateResponseError")) },
        { json: "id", js: "id", typ: 3.14 },
        { json: "result", js: "result", typ: u(undefined, r("CracCracResourcesFreeByDateResponseResult")) },
        { json: "jsonrpc", js: "jsonrpc", typ: u(undefined, "") },
    ], false),
    "CracCracResourcesFreeByDateResponseError": o([
        { json: "code", js: "code", typ: u(undefined, 3.14) },
        { json: "data", js: "data", typ: u(undefined, "") },
        { json: "message", js: "message", typ: u(undefined, "") },
    ], "any"),
    "CracCracResourcesFreeByDateResponseResult": o([
        { json: "Free", js: "Free", typ: a(r("FluffyFree")) },
    ], "any"),
    "FluffyFree": o([
        { json: "date", js: "date", typ: Date },
        { json: "maxFreeMinutes", js: "maxFreeMinutes", typ: 3.14 },
        { json: "resource", js: "resource", typ: "" },
        { json: "taxonomy", js: "taxonomy", typ: "" },
    ], "any"),
    "CracResourcesFreeByDateV2": o([
        { json: "request", js: "request", typ: r("CracCracResourcesFreeByDateV2Request") },
        { json: "response", js: "response", typ: r("CracCracResourcesFreeByDateV2Response") },
    ], false),
    "CracCracResourcesFreeByDateV2Request": o([
        { json: "cred", js: "cred", typ: u(undefined, r("Cred")) },
        { json: "id", js: "id", typ: u(3.14, "") },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "method", js: "method", typ: "" },
        { json: "params", js: "params", typ: a(r("CracCracResourcesFreeByDateV2RequestParam")) },
    ], false),
    "CracCracResourcesFreeByDateV2RequestParam": o([
        { json: "business", js: "business", typ: r("MischievousBusiness") },
        { json: "duration", js: "duration", typ: 3.14 },
        { json: "durations", js: "durations", typ: a(3.14) },
        { json: "resources", js: "resources", typ: a("") },
        { json: "taxonomy", js: "taxonomy", typ: r("TentacledTaxonomy") },
    ], false),
    "MischievousBusiness": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "TentacledTaxonomy": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "CracCracResourcesFreeByDateV2Response": o([
        { json: "error", js: "error", typ: u(null, r("CracCracResourcesFreeByDateV2ResponseError")) },
        { json: "id", js: "id", typ: 3.14 },
        { json: "result", js: "result", typ: u(undefined, r("CracCracResourcesFreeByDateV2ResponseResult")) },
        { json: "jsonrpc", js: "jsonrpc", typ: u(undefined, "") },
    ], false),
    "CracCracResourcesFreeByDateV2ResponseError": o([
        { json: "code", js: "code", typ: u(undefined, 3.14) },
        { json: "data", js: "data", typ: u(undefined, "") },
        { json: "message", js: "message", typ: u(undefined, "") },
    ], "any"),
    "CracCracResourcesFreeByDateV2ResponseResult": o([
        { json: "Free", js: "Free", typ: a(r("TentacledFree")) },
    ], "any"),
    "TentacledFree": o([
        { json: "date", js: "date", typ: Date },
        { json: "maxFreeMinutes", js: "maxFreeMinutes", typ: 3.14 },
        { json: "resource", js: "resource", typ: "" },
        { json: "taxonomy", js: "taxonomy", typ: "" },
    ], "any"),
    "GetCracDistributedResourcesAndRooms": o([
        { json: "request", js: "request", typ: r("CracSlotsGetCracDistributedResourcesAndRoomsRequest") },
        { json: "response", js: "response", typ: r("CracSlotsGetCracDistributedResourcesAndRoomsResponse") },
    ], false),
    "CracSlotsGetCracDistributedResourcesAndRoomsRequest": o([
        { json: "cred", js: "cred", typ: u(undefined, r("Cred")) },
        { json: "id", js: "id", typ: u(3.14, "") },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "method", js: "method", typ: "" },
        { json: "params", js: "params", typ: r("CracSlotsGetCracDistributedResourcesAndRoomsRequestParams") },
    ], false),
    "CracSlotsGetCracDistributedResourcesAndRoomsRequestParams": o([
        { json: "business", js: "business", typ: r("BraggadociousBusiness") },
        { json: "filters", js: "filters", typ: r("PurpleFilters") },
    ], false),
    "BraggadociousBusiness": o([
        { json: "general_info", js: "general_info", typ: r("PurpleGeneralInfo") },
        { json: "id", js: "id", typ: "" },
        { json: "widget_configuration", js: "widget_configuration", typ: r("TentacledWidgetConfiguration") },
    ], false),
    "PurpleGeneralInfo": o([
        { json: "timezone", js: "timezone", typ: "" },
    ], false),
    "TentacledWidgetConfiguration": o([
        { json: "cracServer", js: "cracServer", typ: "" },
        { json: "mostFreeEnable", js: "mostFreeEnable", typ: u(undefined, true) },
    ], false),
    "PurpleFilters": o([
        { json: "date", js: "date", typ: r("PurpleDate") },
        { json: "resources", js: "resources", typ: a(r("PurpleResourceFilter")) },
        { json: "rooms", js: "rooms", typ: a("") },
        { json: "taxonomies", js: "taxonomies", typ: a("") },
    ], false),
    "PurpleDate": o([
        { json: "from", js: "from", typ: "" },
        { json: "to", js: "to", typ: "" },
    ], false),
    "PurpleResourceFilter": o([
        { json: "business", js: "business", typ: r("ResourceBusiness") },
        { json: "resource", js: "resource", typ: "" },
    ], "any"),
    "ResourceBusiness": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "CracSlotsGetCracDistributedResourcesAndRoomsResponse": o([
        { json: "id", js: "id", typ: 3.14 },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "result", js: "result", typ: u(undefined, r("CracSlotsGetCracDistributedResourcesAndRoomsResponseResult")) },
        { json: "error", js: "error", typ: u(undefined, r("CracSlotsGetCracDistributedResourcesAndRoomsResponseError")) },
    ], false),
    "CracSlotsGetCracDistributedResourcesAndRoomsResponseError": o([
        { json: "code", js: "code", typ: 3.14 },
        { json: "data", js: "data", typ: u(undefined, "") },
        { json: "message", js: "message", typ: "" },
    ], "any"),
    "CracSlotsGetCracDistributedResourcesAndRoomsResponseResult": o([
        { json: "slots", js: "slots", typ: a(r("PurpleSlot")) },
    ], false),
    "PurpleSlot": o([
        { json: "date", js: "date", typ: Date },
        { json: "resources", js: "resources", typ: a("any") },
        { json: "rooms", js: "rooms", typ: a(m("any")) },
    ], false),
    "GetCracInsuranceResourcesAndRooms": o([
        { json: "request", js: "request", typ: r("CracSlotsGetCracInsuranceResourcesAndRoomsRequest") },
        { json: "response", js: "response", typ: r("CracSlotsGetCracInsuranceResourcesAndRoomsResponse") },
    ], false),
    "CracSlotsGetCracInsuranceResourcesAndRoomsRequest": o([
        { json: "cred", js: "cred", typ: u(undefined, r("Cred")) },
        { json: "id", js: "id", typ: u(3.14, "") },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "method", js: "method", typ: "" },
        { json: "params", js: "params", typ: r("CracSlotsGetCracInsuranceResourcesAndRoomsRequestParams") },
    ], false),
    "CracSlotsGetCracInsuranceResourcesAndRoomsRequestParams": o([
        { json: "business", js: "business", typ: r("Business1") },
        { json: "filters", js: "filters", typ: r("FluffyFilters") },
    ], false),
    "Business1": o([
        { json: "general_info", js: "general_info", typ: r("FluffyGeneralInfo") },
        { json: "id", js: "id", typ: "" },
        { json: "widget_configuration", js: "widget_configuration", typ: r("StickyWidgetConfiguration") },
    ], false),
    "FluffyGeneralInfo": o([
        { json: "timezone", js: "timezone", typ: "" },
    ], false),
    "StickyWidgetConfiguration": o([
        { json: "cracServer", js: "cracServer", typ: "" },
        { json: "mostFreeEnable", js: "mostFreeEnable", typ: u(undefined, true) },
    ], false),
    "FluffyFilters": o([
        { json: "date", js: "date", typ: r("FluffyDate") },
        { json: "insuranceID", js: "insuranceID", typ: "" },
        { json: "resources", js: "resources", typ: a(r("FluffyResourceFilter")) },
        { json: "rooms", js: "rooms", typ: a("") },
    ], false),
    "FluffyDate": o([
        { json: "from", js: "from", typ: "" },
        { json: "to", js: "to", typ: "" },
    ], false),
    "FluffyResourceFilter": o([
        { json: "duration", js: "duration", typ: 3.14 },
        { json: "id", js: "id", typ: "" },
    ], "any"),
    "CracSlotsGetCracInsuranceResourcesAndRoomsResponse": o([
        { json: "id", js: "id", typ: 3.14 },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "result", js: "result", typ: u(undefined, r("CracSlotsGetCracInsuranceResourcesAndRoomsResponseResult")) },
        { json: "error", js: "error", typ: u(undefined, r("CracSlotsGetCracInsuranceResourcesAndRoomsResponseError")) },
    ], false),
    "CracSlotsGetCracInsuranceResourcesAndRoomsResponseError": o([
        { json: "code", js: "code", typ: 3.14 },
        { json: "data", js: "data", typ: u(undefined, "") },
        { json: "message", js: "message", typ: "" },
    ], "any"),
    "CracSlotsGetCracInsuranceResourcesAndRoomsResponseResult": o([
        { json: "slots", js: "slots", typ: a(r("FluffySlot")) },
    ], false),
    "FluffySlot": o([
        { json: "date", js: "date", typ: Date },
        { json: "resources", js: "resources", typ: a("any") },
        { json: "rooms", js: "rooms", typ: a(m("any")) },
    ], false),
    "GetCracResourcesAndRooms": o([
        { json: "request", js: "request", typ: r("CracSlotsGetCracResourcesAndRoomsRequest") },
        { json: "response", js: "response", typ: r("CracSlotsGetCracResourcesAndRoomsResponse") },
    ], false),
    "CracSlotsGetCracResourcesAndRoomsRequest": o([
        { json: "cred", js: "cred", typ: u(undefined, r("Cred")) },
        { json: "id", js: "id", typ: u(3.14, "") },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "method", js: "method", typ: "" },
        { json: "params", js: "params", typ: r("CracSlotsGetCracResourcesAndRoomsRequestParams") },
    ], false),
    "CracSlotsGetCracResourcesAndRoomsRequestParams": o([
        { json: "business", js: "business", typ: r("Business2") },
        { json: "filters", js: "filters", typ: r("TentacledFilters") },
    ], false),
    "Business2": o([
        { json: "general_info", js: "general_info", typ: r("TentacledGeneralInfo") },
        { json: "id", js: "id", typ: "" },
        { json: "widget_configuration", js: "widget_configuration", typ: r("IndigoWidgetConfiguration") },
    ], false),
    "TentacledGeneralInfo": o([
        { json: "timezone", js: "timezone", typ: "" },
    ], false),
    "IndigoWidgetConfiguration": o([
        { json: "cracServer", js: "cracServer", typ: "" },
        { json: "mostFreeEnable", js: "mostFreeEnable", typ: u(undefined, true) },
    ], false),
    "TentacledFilters": o([
        { json: "date", js: "date", typ: r("TentacledDate") },
        { json: "resources", js: "resources", typ: a(r("TentacledResourceFilter")) },
        { json: "rooms", js: "rooms", typ: a("") },
        { json: "taxonomies", js: "taxonomies", typ: a("") },
    ], false),
    "TentacledDate": o([
        { json: "from", js: "from", typ: Date },
        { json: "to", js: "to", typ: Date },
    ], false),
    "TentacledResourceFilter": o([
        { json: "duration", js: "duration", typ: 3.14 },
        { json: "id", js: "id", typ: "" },
    ], "any"),
    "CracSlotsGetCracResourcesAndRoomsResponse": o([
        { json: "id", js: "id", typ: 3.14 },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "result", js: "result", typ: u(undefined, r("CracSlotsGetCracResourcesAndRoomsResponseResult")) },
        { json: "error", js: "error", typ: u(undefined, r("CracSlotsGetCracResourcesAndRoomsResponseError")) },
    ], false),
    "CracSlotsGetCracResourcesAndRoomsResponseError": o([
        { json: "code", js: "code", typ: 3.14 },
        { json: "data", js: "data", typ: u(undefined, "") },
        { json: "message", js: "message", typ: "" },
    ], "any"),
    "CracSlotsGetCracResourcesAndRoomsResponseResult": o([
        { json: "slots", js: "slots", typ: a(r("TentacledSlot")) },
    ], false),
    "TentacledSlot": o([
        { json: "date", js: "date", typ: Date },
        { json: "resources", js: "resources", typ: a("any") },
        { json: "rooms", js: "rooms", typ: a(m("any")) },
    ], false),
    "Models": o([
        { json: "Appointment", js: "Appointment", typ: u(a("any"), true, r("AppointmentSchema"), 3.14, 0, null, "") },
        { json: "Business", js: "Business", typ: u(a("any"), true, r("IndecentBusiness"), 3.14, 0, null, "") },
        { json: "Client", js: "Client", typ: r("ClientObject") },
    ], false),
    "AppointmentClientAppear": [
        "NO_APPEAR",
        "NONE",
        "YES_APPEAR",
    ],
    "AppointmentClientPayment": [
        "NO_PAYMENT",
        "NONE",
        "YES_PAYED_FULL",
        "YES_PAYED_ONLINE",
        "YES_PAYED_PART",
    ],
    "AppointmentStatus": [
        "ACTIVE",
        "CANCELLED_BY_ADMIN",
        "CANCELLED_BY_BUSINESS",
        "CANCELLED_BY_CLIENT",
        "CONFIRMED_BY_ADMIN",
        "CONFIRMED_BY_BUSINESS",
        "CONFIRMED_BY_CLIENT",
        "CONFIRMED_MOVED",
        "DENIED",
        "DONE",
        "TENTATIVE",
        "TIMED_OUT",
    ],
    "ComplaintStatus": [
        "CHECKING",
        "CLOSED",
        "ENTERED",
        "INVALID",
        "INVESTIGATION",
        "NOT_ENTERED",
    ],
    "Sex": [
        "FEMALE",
        "MALE",
        "NOT_SPECIFIED",
    ],
    "AdditionalFieldType": [
        "BOOL",
        "COUPON",
        "FILE",
        "RADIO",
        "STRING",
    ],
    "DrinkAnswer": [
        "COFFEE",
        "NOT_IMPORTANT",
        "TEA",
    ],
    "DiscountProvider": [
        "GROUPON",
        "LOCAL",
        "YANDEX",
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
    "TalkAnswer": [
        "NOT_IMPORTANT",
        "NOT_TALK",
        "TALK",
    ],
    "ReminderStatus": [
        "NOT_SET",
        "OFF",
        "ON",
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
    "WorkerSortingType": [
        "most_free",
        "none",
        "workload",
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
    "ResourceStatus": [
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
    "YandexFeedType": [
        "dynamic",
        "no",
        "static",
        "static-service-only",
    ],
};
