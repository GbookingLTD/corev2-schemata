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
export type BackofficeIdUnion = number | string;

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
    get_appointment_by_filter?:      GetAppointmentByFilter;
    get_appointment_by_showcase?:    GetAppointmentByShowcase;
    get_appointments_by_client_v2?:  GetAppointmentsByClientV2;
    get_appointments_by_user?:       GetAppointmentsByUser;
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
    params: ParamsObject;
}

export interface ParamsObject {
    appointment: PurpleAppointment;
    client:      PurpleClient;
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
    client:      FluffyClient;
}

export interface FluffyAppointment {
    id:       string;
    shortId?: string;
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
    client:      ClientObject;
}

export interface TentacledAppointment {
    id:      string;
    source?: string;
}

export interface ClientObject {
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
    result?: Appointment;
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
export interface Appointment {
    additional_info?:               { [key: string]: any };
    additionalClientAppears:        AdditionalClientAppear[];
    additionalClientPayments:       AdditionalClientPayment[];
    additionalClients:              AdditionalClientElement[];
    additionalClientSources:        AdditionalClientSource[];
    additionalClientStatuses:       AdditionalClientStatus[];
    additionalClientUtms:           AdditionalClientUtm[];
    additionalFields:               AdditionalField[];
    additionalProducts:             AdditionalProduct[];
    additionalTaxonomies:           AppointmentTaxonomy[];
    address?:                       string;
    adjacentId?:                    string;
    appointment:                    AppointmentInfo;
    autoPhoneCallStatus?:           string;
    bannedClients:                  string[];
    business:                       AppointmentBusiness;
    cabinet:                        Cabinet;
    capacity?:                      number;
    changeReason:                   string;
    client:                         PurpleAppointmentClient;
    client_appear:                  AppointmentClientAppear;
    client_med_code?:               string;
    client_payment:                 AppointmentClientPayment;
    client_payment_invoice?:        string;
    client_payment_transaction_id?: string;
    clientComment:                  string;
    clientVisitors?:                AppointmentClientVisitor[];
    color?:                         string;
    destinationKeyword?:            string;
    destinationLink?:               string;
    extraFields:                    ExtraField[];
    gt?:                            boolean;
    gtTimeFrame?:                   string;
    location?:                      Location;
    masterImportance?:              boolean;
    minClients?:                    number;
    moveCounter:                    number;
    movedByRobot:                   boolean;
    movedFromFired?:                boolean;
    networkID?:                     string;
    notes:                          string;
    order:                          Order;
    preferredResource?:             boolean;
    promoCode?:                     string;
    refererLink?:                   string;
    referrer?:                      string;
    reminder:                       Reminder;
    removedClientsData:             RemovedClientsDatum[];
    resource:                       AppointmentResource;
    review?:                        Review;
    room?:                          Room;
    showcase:                       AppointmentShowcase;
    socialToken?:                   string;
    source:                         string;
    taxonomy:                       AppointmentTaxonomy;
    utm?:                           { [key: string]: any };
    withCoSale?:                    boolean;
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
    _id?:     string;
    clientID: string;
    source:   string;
}

export interface AdditionalClientStatus {
    _id?:     string;
    clientID: string;
    history?: { [key: string]: any }[];
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
    _id?:     string;
    clientID: string;
    utm?:     { [key: string]: any };
}

export interface AdditionalClientElement {
    address?:             null | string;
    adminComment?:        null | string;
    birthday?:            Birthday;
    clientCardNumber?:    null | string;
    clientComment?:       null | string;
    creatorProfileID?:    null | string;
    creatorProfileName?:  null | string;
    driverLicense?:       null | string;
    email?:               string[];
    extraData?:           { [key: string]: any };
    extraID?:             null | string;
    extraVisitors?:       number;
    fax?:                 null | string;
    feedback?:            AppointmentClientFeedback;
    GAClientID?:          null | string;
    houseNumber?:         null | string;
    id:                   string;
    incomingPhone?:       IncomingPhoneElement[];
    israelCity?:          IsraelCityClass | null;
    isVIP?:               boolean;
    kupatHolim?:          KupatHolimClass | null;
    language?:            string;
    middleName?:          null | string;
    name:                 string;
    passportId?:          null | string;
    phone?:               IncomingPhoneElement[];
    seasonTicketId?:      null | string;
    seasonTicketNumber?:  null | string;
    sex?:                 Sex;
    shortId?:             string;
    surname:              string;
    taxiPark?:            null | string;
    taxiParkMemberCount?: number | null;
}

export type Birthday = { [key: string]: any } | null | string;

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
    value?:    PurpleValue;
}

export type PurpleValue = number | { [key: string]: any } | null | string;

export interface IncomingPhoneElement {
    area_code:    string;
    country_code: string;
    number:       string;
}

export interface IsraelCityClass {
    cityId?: string;
    name?:   string;
}

export interface KupatHolimClass {
    kupatHolimId?: string;
    name?:         string;
}

export enum Sex {
    Empty = "",
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
    backofficeID:        BackofficeIdUnion;
    blockSMS:            boolean;
    created:             Date;
    drinkAnswer?:        DrinkAnswer;
    duration:            number;
    hideAppointmentTime: boolean;
    id:                  string;
    integration_data?:   IntegrationData;
    price:               Price;
    shortId:             string;
    start:               Date;
    status:              AppointmentStatus;
    talkAnswer?:         TalkAnswer;
    testRecord:          boolean;
    updated:             Date;
}

export enum DrinkAnswer {
    Coffee = "COFFEE",
    NotImportant = "NOT_IMPORTANT",
    Tea = "TEA",
}

export interface IntegrationData {
    extraId: null | string;
}

export interface Price {
    additionalTaxonomyDiscount: AdditionalTaxonomyDiscount[];
    amount:                     number;
    currency:                   CurrencyList;
    discount?:                  number;
    discountProvider?:          DiscountProvider;
    discountType?:              string;
    originalAmount?:            number | null;
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
export interface PurpleAppointmentClient {
    address?:             null | string;
    adminComment?:        null | string;
    birthday?:            Birthday;
    clientCardNumber?:    null | string;
    clientComment?:       null | string;
    creatorProfileID?:    null | string;
    creatorProfileName?:  null | string;
    driverLicense?:       null | string;
    email?:               string[];
    extraData?:           { [key: string]: any };
    extraID?:             null | string;
    extraVisitors?:       number;
    fax?:                 null | string;
    feedback?:            AppointmentClientFeedback;
    GAClientID?:          null | string;
    houseNumber?:         null | string;
    id?:                  string;
    incomingPhone?:       IncomingPhoneElement[];
    israelCity?:          IsraelCityClass | null;
    isVIP?:               boolean;
    kupatHolim?:          KupatHolimClass | null;
    language?:            string;
    middleName?:          null | string;
    name?:                string;
    passportId?:          null | string;
    phone?:               IncomingPhoneElement[];
    seasonTicketId?:      null | string;
    seasonTicketNumber?:  null | string;
    sex?:                 Sex;
    shortId?:             string;
    surname?:             string;
    taxiPark?:            null | string;
    taxiParkMemberCount?: number | null;
}

export interface AppointmentClientVisitor {
    birthday?:        Birthday;
    email?:           string[];
    extraVisitors?:   number;
    name?:            string;
    parentClientID?:  string;
    parentProfileID?: string;
    phone?:           IncomingPhoneElement[];
    sex?:             Sex;
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
    appear?:                 AppointmentClientAppear;
    client:                  AdditionalClientElement;
    created?:                Date;
    payment?:                AppointmentClientPayment;
    payment_invoice?:        string;
    payment_transaction_id?: string;
    source?:                 string;
    status?:                 AppointmentStatus;
}

export interface AppointmentResource {
    extraID?:    null | string;
    id:          string;
    middleName?: string;
    name:        string;
    surname:     string;
}

export interface Review {
    business: TaxonomyClass;
    taxonomy: TaxonomyClass;
    worker:   TaxonomyClass;
}

export interface TaxonomyClass {
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

export interface GetAppointmentByFilter {
    request:  AppointmentGetAppointmentByFilterRequest;
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
    business?:              FluffyBusiness;
    extraFilters?:          PurpleExtraFilters;
    filter?:                PurpleFilter;
    network?:               PurpleNetwork;
    page:                   number;
    pageSize:               number;
    skipBusinessCancelled?: boolean;
}

export interface FluffyBusiness {
    id?: BackofficeIdUnion;
}

export interface PurpleExtraFilters {
    sort?: PurpleSort[];
}

export interface PurpleSort {
    dir:   Dir;
    field: SortField;
}

export enum Dir {
    Asc = "asc",
    Desc = "desc",
}

export enum SortField {
    Created = "created",
    Start = "start",
}

export interface PurpleFilter {
    created?:     PurpleCreated;
    end?:         Date;
    services?:    string[];
    skipUpdated?: boolean;
    start?:       Date;
    workers?:     string[];
}

export interface PurpleCreated {
    end:   Date;
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
    data:        Appointment[];
    page:        number;
    total:       number;
    unconfirmed: number;
}

export interface GetAppointmentByShowcase {
    request:  AppointmentGetAppointmentByShowcaseRequest;
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
    page:     number;
    pageSize: number;
    source?:  string;
}

export interface TentacledBusiness {
    id: BackofficeIdUnion;
}

export interface ParamsCreated {
    end:   Date;
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
    result?: Appointment[];
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

export interface GetAppointmentsByClientV2 {
    request:  AppointmentGetAppointmentsByClientV2Request;
    response: AppointmentGetAppointmentsByClientV2Response;
}

export interface AppointmentGetAppointmentsByClientV2Request {
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
    params: AppointmentGetAppointmentsByClientV2RequestParams;
}

export interface AppointmentGetAppointmentsByClientV2RequestParams {
    business:               StickyBusiness;
    client:                 TentacledClient;
    extraFilters?:          FluffyExtraFilters;
    filter?:                FluffyFilter;
    network?:               FluffyNetwork;
    skipBusinessCancelled?: boolean;
}

export interface StickyBusiness {
    id: BackofficeIdUnion;
}

export interface TentacledClient {
    id: BackofficeIdUnion;
}

export interface FluffyExtraFilters {
    sort?: FluffySort[];
}

export interface FluffySort {
    dir:   Dir;
    field: SortField;
}

export interface FluffyFilter {
    created?:     FluffyCreated;
    end?:         Date;
    services?:    string[];
    skipUpdated?: boolean;
    start?:       Date;
    workers?:     string[];
}

export interface FluffyCreated {
    end:   Date;
    start: Date;
}

export interface FluffyNetwork {
    id?: BackofficeIdUnion;
}

export interface AppointmentGetAppointmentsByClientV2Response {
    /**
     * значение числового типа для идентификации запроса на сервере
     */
    id: number;
    /**
     * версия протокола (2.0)
     */
    jsonrpc: string;
    result?: AppointmentGetAppointmentsByClientV2ResponseResult;
    /**
     * объект, содержащий информацию об ошибке
     */
    error?: AppointmentGetAppointmentsByClientV2ResponseError;
}

/**
 * объект, содержащий информацию об ошибке
 *
 * Код ошибки авторизации
 */
export interface AppointmentGetAppointmentsByClientV2ResponseError {
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
export interface AppointmentGetAppointmentsByClientV2ResponseResult {
    data:        Appointment[];
    page:        number;
    total:       number;
    unconfirmed: number;
}

export interface GetAppointmentsByUser {
    request:  AppointmentGetAppointmentsByUserRequest;
    response: AppointmentGetAppointmentsByUserResponse;
}

export interface AppointmentGetAppointmentsByUserRequest {
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
    params: AppointmentGetAppointmentsByUserRequestParams;
}

export interface AppointmentGetAppointmentsByUserRequestParams {
    business?:              IndigoBusiness;
    extraFilters?:          TentacledExtraFilters;
    filter?:                TentacledFilter;
    network?:               TentacledNetwork;
    skipBusinessCancelled?: boolean;
}

export interface IndigoBusiness {
    id: BackofficeIdUnion;
}

export interface TentacledExtraFilters {
    sort?: TentacledSort[];
}

export interface TentacledSort {
    dir:   Dir;
    field: SortField;
}

export interface TentacledFilter {
    created?:     TentacledCreated;
    end?:         Date;
    services?:    string[];
    skipUpdated?: boolean;
    start?:       Date;
    workers?:     string[];
}

export interface TentacledCreated {
    end:   Date;
    start: Date;
}

export interface TentacledNetwork {
    id?: BackofficeIdUnion;
}

export interface AppointmentGetAppointmentsByUserResponse {
    /**
     * значение числового типа для идентификации запроса на сервере
     */
    id: number;
    /**
     * версия протокола (2.0)
     */
    jsonrpc: string;
    result?: AppointmentGetAppointmentsByUserResponseResult;
    /**
     * объект, содержащий информацию об ошибке
     */
    error?: AppointmentGetAppointmentsByUserResponseError;
}

/**
 * объект, содержащий информацию об ошибке
 *
 * Код ошибки авторизации
 */
export interface AppointmentGetAppointmentsByUserResponseError {
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
export interface AppointmentGetAppointmentsByUserResponseResult {
    data:        Appointment[];
    page:        number;
    total:       number;
    unconfirmed: number;
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
    appointment:       AppointmentObject;
    business:          IndecentBusiness;
    originBusinessID?: null | string;
    resource:          ParamsResourceClass;
    source:            string;
    taxonomy:          ParamsTaxonomyClass;
}

export interface AppointmentObject {
    duration?: number;
    price?:    PurplePrice;
    start:     string;
}

export interface PurplePrice {
    amount:   number;
    currency: CurrencyList;
}

export interface IndecentBusiness {
    id: string;
}

export interface ParamsResourceClass {
    id: ResourceId;
}

export type ResourceId = string[] | string;

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
    result?: Appointment;
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
    businesses:            BusinessRefInNetwork[];
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
export interface BusinessRefInNetwork {
    _id?:               string;
    businessID:         string;
    info?:              InfoClass;
    isMapBusiness:      boolean;
    order?:             number;
    virtualTaxonomies?: string[];
}

export interface InfoClass {
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
    activeTaxonomyCount?:           number;
    additionalSettings?:            InfoAdditionalSettings;
    allowCategoryBooking?:          boolean;
    backoffice_configuration?:      InfoBackofficeConfigurationObject;
    backofficeConfiguration?:       InfoBackofficeConfiguration;
    backofficeType?:                BackofficeType;
    cabinets?:                      InfoCabinet[];
    cabinetsEnabled?:               boolean;
    callback_widget_configuration?: InfoCallbackWidgetConfiguration;
    consumables?:                   InfoConsumable[];
    created_on?:                    Date;
    defaultFilteredWorkers?:        string[];
    departments?:                   InfoDepartment[];
    designs?:                       { [key: string]: any }[];
    extraID?:                       string;
    flatTaxonomyDisplay?:           boolean;
    general_info:                   BusinessInfo;
    group?:                         Group;
    id?:                            string;
    integration_data?:              { [key: string]: any };
    mini_widget_configuration:      InfoMiniWidgetConfiguration;
    mobileData?:                    any[];
    notifications?:                 any[];
    resources?:                     Resource[];
    stateLevelHolidaysNotWorking?:  boolean;
    taxonomies?:                    InfoTaxonomy[];
    taxonomiesComplex?:             InfoTaxonomiesComplex[];
    taxonomy_tree_capacity?:        { [key: string]: any }[];
    top_services?:                  InfoTopServices;
    vertical?:                      string;
    widget_configuration:           InfoWidgetConfiguration;
    yandexFeedType?:                string;
}

export interface InfoAdditionalSettings {
    appointmentExtensionAmount?: number;
    appointmentExtensionType?:   AppointmentExtensionType;
}

export enum AppointmentExtensionType {
    Minutes = "MINUTES",
    Percent = "PERCENT",
}

export interface InfoBackofficeConfiguration {
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
    enableInvoice?:                                   boolean;
    enableMasterImportance?:                          boolean;
    enablePhoneNationalMode?:                         boolean;
    enablePrintingReportRecordsScreen?:               boolean;
    enableServiceTimeLimit?:                          boolean;
    enableSourceChoice?:                              boolean;
    enableTaxonomyChildrenAgeCheck?:                  boolean;
    enableTelemed?:                                   boolean;
    exportToExcelRemovedClients?:                     boolean;
    feedbackCustomerPortalMessage?:                   string;
    feedbackCustomerPortalThankYouMessage?:           string;
    feedbackCustomerPortalTitle?:                     string;
    feedBackMinRating?:                               FeedBackMinRating;
    finId?:                                           string;
    finName?:                                         string;
    hideCustomerPortalFooter?:                        boolean;
    highlightedResource?:                             boolean;
    invoiceCondition?:                                AppointmentClientPayment[];
    invoiceProvider?:                                 InvoiceProvider;
    manualExceptionSupport?:                          boolean;
    noInternetAlert?:                                 boolean;
    pastTimeEdit?:                                    number;
    paymentProvider?:                                 PurplePaymentProvider;
    readonlyResourceSchedule?:                        boolean;
    resourceSurnameFirst?:                            boolean;
    resourceTimetableType?:                           ResourceTimetableType;
    revisionVersion?:                                 number;
    schduleWeekViewIsDefault?:                        boolean;
    scheduleDefaultWorkersLimit?:                     number;
    scheduleDefaultWorkersLimitDay?:                  number | null;
    scheduleDefaultWorkersLimitWeek?:                 number | null;
    schedulerWeekViewType?:                           SchedulerWeekViewType;
    scheduleWorkerHours?:                             boolean;
    showAdditionalFields?:                            boolean;
    showAddress?:                                     boolean;
    showBirthDate?:                                   boolean;
    showClientAddress?:                               boolean;
    showClientAppear?:                                boolean;
    showClientAppearOnSchedule?:                      boolean;
    showClientBirthdayFilter?:                        boolean;
    showClientContractNumber?:                        boolean;
    showClientImage?:                                 boolean;
    showClientPayment?:                               boolean;
    showCreatedUsername?:                             boolean;
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
    telemedProvider?:                                 TelemedProvider;
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

export enum InvoiceProvider {
    Disable = "DISABLE",
    Icount = "icount",
}

export enum PurplePaymentProvider {
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

export enum TelemedProvider {
    Disable = "DISABLE",
    Zoom = "zoom",
}

export enum BackofficeType {
    Common = "COMMON",
    Gt = "GT",
    Ll = "LL",
    Mb = "MB",
    Mu = "MU",
}

export interface InfoBackofficeConfigurationObject {
    enableMasterImportance?: boolean;
    resourceTimetableType?:  ResourceTimetableType;
}

export interface InfoCabinet {
    active?: boolean;
    id?:     string;
    name?:   string;
}

export interface InfoCallbackWidgetConfiguration {
    title1?: string;
    title2?: string;
}

export interface InfoConsumable {
    extraID:  string;
    name:     string;
    quantity: number;
}

export interface InfoDepartment {
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
    address?:                AddressSchema[];
    align_min_booking_time?: boolean | null;
    autoAcceptAppointment?:  boolean;
    /**
     * если данный бизнес является витриной, идентификаторы бизнесов, которые входят в витрину
     */
    businessShowcaseAliases?: BusinessShowcaseAlias[];
    contactName?:             null | string;
    date_joined?:             Date;
    description?:             string;
    /**
     * Список e-mail адресов компании или филиала
     */
    email?:                  string;
    eventEditorMinutesTick?: number;
    fax?:                    FaxElement[];
    images?:                 string[];
    instant_messaging?:      { [key: string]: any }[];
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
    mobile?: FaxElement[];
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
    phone?:           FaxElement[];
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
     * если данный бизнес является витриной, здесь будет содержаться информация по бизнесам из
     * витрины
     */
    showcaseBusinessData?: ShowcaseBusinessDatum[];
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
    website?:                    null | string;
}

export interface AdditionalFields {
    name:          string;
    requiredField: boolean;
    shortName:     string;
    type:          AdditionalFieldType;
    value:         string;
}

export interface AddressSchema {
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
    metroStations?:       FullAddressMetroStation[];
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

export interface FullAddressMetroStation {
    _id?:         string;
    description?: string;
    name:         string;
}

export interface BusinessShowcaseAlias {
    internalID?: string;
}

export interface FaxElement {
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

export interface ShowcaseBusinessDatum {
    /**
     * Адреса компании или филиала
     */
    address?: AddressSchema[];
    /**
     * Список e-mail адресов компании или филиала
     */
    email?:      string;
    internalID?: string;
    language?:   LanguageList;
    /**
     * Название бизнеса
     */
    name?: string;
    /**
     * Список телефонов бизнеса
     */
    phone?: FaxElement[];
    /**
     * Список видов приема филиала
     */
    receptionTypes?: string[];
    timezone?:       string;
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

export interface InfoMiniWidgetConfiguration {
    fields?: FieldElement[];
    title1?: string;
    title2?: string;
}

export enum FieldElement {
    Email = "email",
    Name = "name",
    Surname = "surname",
}

/**
 * Данные о работнике бизнеса
 */
export interface Resource {
    /**
     * информация из внешней информационной системы как есть (при интеграции)
     */
    additionalExtraId?: string[];
    badIconResolution?: boolean;
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
    perk?:  string;
    phone?: FaxElement[];
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
    telemedData?:   TelemedData;
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
    address?:                AddressSchema[];
    align_min_booking_time?: boolean | null;
    autoAcceptAppointment?:  boolean;
    /**
     * если данный бизнес является витриной, идентификаторы бизнесов, которые входят в витрину
     */
    businessShowcaseAliases?: BusinessShowcaseAlias[];
    contactName?:             null | string;
    date_joined?:             Date;
    description?:             string;
    /**
     * Список e-mail адресов компании или филиала
     */
    email?:                  string;
    eventEditorMinutesTick?: number;
    fax?:                    FaxElement[];
    images?:                 string[];
    instant_messaging?:      { [key: string]: any }[];
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
    mobile?: FaxElement[];
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
    phone?:           FaxElement[];
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
     * если данный бизнес является витриной, здесь будет содержаться информация по бизнесам из
     * витрины
     */
    showcaseBusinessData?: ShowcaseBusinessDatum[];
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
    website?:                    null | string;
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

export interface TelemedData {
    active?: boolean;
    id?:     string;
}

export interface InfoTaxonomy {
    active?:                     boolean;
    additionalDurations?:        PurpleAdditionalDuration[];
    additionalPrices?:           PurpleBusinessTaxonomyPrice[];
    additionalProducts?:         PurpleBusinessTaxonomyProduct[];
    additionalTaxonomyExtraId?:  { [key: string]: any }[];
    adjacentSameTimeStart?:      boolean;
    adjacentTaxonomies?:         PurpleAdjacentTaxonomy[];
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
    dateLimits?:                 PurpleDateLimit[];
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
    price?:                      FluffyPrice;
    priceLink?:                  string;
    /**
     * Список видов приема услуги
     */
    receptionTypes?: string[];
    rooms?:          string[];
    showcaseItems?:  PurpleShowcaseItem[];
    showcases?:      PurpleTaxonomyShowcase[];
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

export interface PurpleAdditionalDuration {
    duration?: number | null;
    level?:    number;
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
export enum AdditionalPriceType {
    Average = "average",
    BeginWith = "begin_with",
    Equal = "equal",
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

export interface PurpleDateLimit {
    _id?:           string;
    dateLimitFrom?: Date;
    dateLimitTo?:   Date;
}

/**
 * Информация о скидке
 */
export interface Discount {
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

export interface PurpleShowcaseItem {
    _id?:                 string;
    additionalDurations?: FluffyAdditionalDuration[];
    businessID?:          string;
    /**
     * Список видов приема услуги
     */
    receptionTypes?: string[];
    taxonomyID?:     string;
}

export interface FluffyAdditionalDuration {
    _id?:      string;
    duration?: number;
    /**
     * поддержка различной длительности услуг в зависимости от работника
     */
    level?: number;
}

export interface PurpleTaxonomyShowcase {
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

export interface InfoTaxonomiesComplex {
    name?:       string;
    taxonomies?: string[];
}

export interface InfoTopServices {
    services?: any[];
    status?:   string;
}

export interface InfoWidgetConfiguration {
    additionalName?:                         string;
    alignmentTaxonomySlots?:                 boolean;
    allowAutoSelect?:                        boolean;
    allowBookVisitor?:                       boolean;
    allowSkipTimeCheck?:                     boolean;
    analyticsGoogle?:                        PurpleAnalyticsGoogle;
    analyticsYandex?:                        PurpleAnalyticsYandex;
    appointment_confirmation_text?:          string;
    appointment_confirmation_title?:         string;
    askClientBirthday?:                      boolean;
    askClientGender?:                        boolean;
    askClientPassportID?:                    boolean;
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
    insuranceClientSupportPhone?:            FaxElement[];
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
    paymentProvider?:                        PurplePaymentProvider;
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
    showStartText?:                          boolean;
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
    startTextButton?:                        string;
    startTextMessage?:                       string;
    strictSlotCutting?:                      boolean;
    tentativeTTL?:                           number;
    theme?:                                  string;
    toggleReminder?:                         boolean;
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

export interface PurpleAnalyticsGoogle {
    active?: boolean;
    key?:    string;
}

export interface PurpleAnalyticsYandex {
    active?: boolean;
    key?:    string;
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
    businesses:         NetworkConfigurationBusiness[];
    defaultServiceID:   null | string;
    showBranchSelector: boolean;
    showDefaultService: boolean;
    showOnMap:          boolean;
    source:             string;
}

export interface NetworkConfigurationBusiness {
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
    business: HilariousBusiness;
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

export interface HilariousBusiness {
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
    business:               BusinessClass;
    freeSms?:               number;
    monthlyFreeSms?:        number;
    networks?:              NetworkElement[];
    profiles?:              { [key: string]: any }[];
    top_services?:          ResultTopServices;
    useDefaultSmsTemplate?: boolean;
    yandexFeedType?:        YandexFeedType;
}

export interface BusinessClass {
    active?:                        boolean;
    additionalSettings?:            BusinessAdditionalSettings;
    allowCategoryBooking?:          boolean;
    backoffice_configuration?:      BusinessBackofficeConfigurationObject;
    backofficeConfiguration?:       BusinessBackofficeConfiguration;
    backofficeType?:                BackofficeType;
    cabinets?:                      BusinessCabinet[];
    cabinetsEnabled?:               boolean;
    callback_widget_configuration?: BusinessCallbackWidgetConfiguration;
    consumables?:                   BusinessConsumable[];
    created_on?:                    Date;
    defaultFilteredWorkers?:        string[];
    departments?:                   BusinessDepartment[];
    designs?:                       { [key: string]: any }[];
    extraID?:                       string;
    flatTaxonomyDisplay?:           boolean;
    general_info:                   BusinessInfo;
    group?:                         Group;
    id?:                            string;
    integration_data?:              { [key: string]: any };
    maxFilterDateDuration?:         number;
    mini_widget_configuration:      BusinessMiniWidgetConfiguration;
    mobileData?:                    any[];
    notifications?:                 any[];
    resources:                      Resource[];
    stateLevelHolidaysNotWorking?:  boolean;
    taxonomies:                     BusinessTaxonomy[];
    taxonomiesComplex?:             BusinessTaxonomiesComplex[];
    taxonomy_tree_capacity?:        { [key: string]: any }[];
    top_services?:                  BusinessTopServices;
    vertical?:                      string;
    widget_configuration:           BusinessWidgetConfiguration;
    yandexFeedType?:                string;
}

export interface BusinessAdditionalSettings {
    appointmentExtensionAmount?: number;
    appointmentExtensionType?:   AppointmentExtensionType;
}

export interface BusinessBackofficeConfiguration {
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
    enableInvoice?:                                   boolean;
    enableMasterImportance?:                          boolean;
    enablePhoneNationalMode?:                         boolean;
    enablePrintingReportRecordsScreen?:               boolean;
    enableServiceTimeLimit?:                          boolean;
    enableSourceChoice?:                              boolean;
    enableTaxonomyChildrenAgeCheck?:                  boolean;
    enableTelemed?:                                   boolean;
    exportToExcelRemovedClients?:                     boolean;
    feedbackCustomerPortalMessage?:                   string;
    feedbackCustomerPortalThankYouMessage?:           string;
    feedbackCustomerPortalTitle?:                     string;
    feedBackMinRating?:                               FeedBackMinRating;
    finId?:                                           string;
    finName?:                                         string;
    hideCustomerPortalFooter?:                        boolean;
    highlightedResource?:                             boolean;
    invoiceCondition?:                                AppointmentClientPayment[];
    invoiceProvider?:                                 InvoiceProvider;
    manualExceptionSupport?:                          boolean;
    noInternetAlert?:                                 boolean;
    pastTimeEdit?:                                    number;
    paymentProvider?:                                 FluffyPaymentProvider;
    readonlyResourceSchedule?:                        boolean;
    resourceSurnameFirst?:                            boolean;
    resourceTimetableType?:                           ResourceTimetableType;
    revisionVersion?:                                 number;
    schduleWeekViewIsDefault?:                        boolean;
    scheduleDefaultWorkersLimit?:                     number;
    scheduleDefaultWorkersLimitDay?:                  number | null;
    scheduleDefaultWorkersLimitWeek?:                 number | null;
    scheduleEnableDayIntervals?:                      boolean;
    schedulerWeekViewType?:                           SchedulerWeekViewType;
    scheduleSplitDayTimeIntervals?:                   ScheduleSplitDayTimeInterval[];
    scheduleWorkerHours?:                             boolean;
    showAdditionalFields?:                            boolean;
    showAddress?:                                     boolean;
    showBirthDate?:                                   boolean;
    showClientAddress?:                               boolean;
    showClientAppear?:                                boolean;
    showClientAppearOnSchedule?:                      boolean;
    showClientBirthdayFilter?:                        boolean;
    showClientContractNumber?:                        boolean;
    showClientImage?:                                 boolean;
    showClientPayment?:                               boolean;
    showCreatedUsername?:                             boolean;
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
    showTaxonomyNameExtraId?:                         boolean;
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
    stateLevelHolidays?:                              { [key: string]: any }[] | null;
    stateLevelHolidaysNotWorking?:                    boolean;
    taxonomyChildrenMaxAge?:                          number;
    telemedProvider?:                                 TelemedProvider;
    useAdditionalDurations?:                          boolean;
    useAdjacentTaxonomies?:                           boolean;
    useAdjacentTaxonomiesSlotSplitting?:              boolean;
    useGtAppMethod?:                                  boolean;
    workWeekEnd?:                                     number;
    workWeekStart?:                                   number;
}

export enum FluffyPaymentProvider {
    Cloudpayments = "cloudpayments",
    DeltaProcessing = "deltaProcessing",
    Disable = "DISABLE",
    Pelecard = "pelecard",
    YandexMoney = "yandexMoney",
}

export interface ScheduleSplitDayTimeInterval {
    endHour?:       number;
    endMinute?:     number;
    schedulerTick?: number;
    selected?:      boolean;
    startHour?:     number;
    startMinute?:   number;
    title?:         string;
}

export interface BusinessBackofficeConfigurationObject {
    enableMasterImportance?: boolean;
    resourceTimetableType?:  ResourceTimetableType;
}

export interface BusinessCabinet {
    active?: boolean;
    id?:     string;
    name?:   string;
}

export interface BusinessCallbackWidgetConfiguration {
    title1?: string;
    title2?: string;
}

export interface BusinessConsumable {
    extraID:  string;
    name:     string;
    quantity: number;
}

export interface BusinessDepartment {
    id:   string;
    id_?: number;
    name: string;
}

export interface BusinessMiniWidgetConfiguration {
    fields?: FieldElement[];
    title1?: string;
    title2?: string;
}

export interface BusinessTaxonomy {
    active?:                        boolean;
    additionalDurations?:           TentacledAdditionalDuration[];
    additionalPrices?:              FluffyBusinessTaxonomyPrice[];
    additionalProducts?:            FluffyBusinessTaxonomyProduct[];
    additionalTaxonomyExtraId?:     { [key: string]: any }[];
    adjacentSameTimeStart?:         boolean;
    adjacentTaxonomies?:            FluffyAdjacentTaxonomy[];
    alias?:                         { [key: string]: any };
    allowBookingInBO?:              boolean;
    allowNextBookingCount?:         number;
    allowNextBookingInDays?:        number;
    allowNextBookingInDaysText?:    string;
    cabinets?:                      string[];
    cabinetsEnabled?:               boolean;
    capacity?:                      number;
    capacity_decrease?:             number;
    chargeUnitsStep?:               number;
    childrenTaxonomyTypes?:         ChildrenTaxonomyType[];
    color?:                         string;
    confirmationAlert?:             string;
    confirmationEmailAlert?:        string;
    confirmationSmsAlert?:          string;
    dateLimits?:                    FluffyDateLimit[];
    dateLimitType?:                 DateLimitType;
    designs?:                       string[];
    disableClientSmsNotifications?: boolean;
    discounts?:                     Discount[];
    displayInWidget?:               boolean;
    duration?:                      number;
    exceptions?:                    any[];
    extraDescription?:              string;
    extraId?:                       string;
    extraLink?:                     string;
    forPay?:                        boolean;
    id?:                            string;
    images?:                        string[];
    isOther?:                       boolean;
    isTelemed?:                     boolean;
    lastModified?:                  Date;
    leaves?:                        string[];
    manualChanges?:                 boolean;
    newTaxonomy?:                   boolean;
    onlineMode?:                    OnlineMode;
    onlyAfterTaxonomies?:           string[];
    order?:                         number;
    parallelTaxonomies?:            string[];
    popularity?:                    number;
    price?:                         TentacledPrice;
    priceLink?:                     string;
    /**
     * Список видов приема услуги
     */
    receptionTypes?: string[];
    rooms?:          string[];
    showcaseItems?:  FluffyShowcaseItem[];
    showcases?:      FluffyTaxonomyShowcase[];
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

export interface TentacledAdditionalDuration {
    duration?: number | null;
    level?:    number;
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
    order?:          number;
    slotDuration?:   number;
    taxonomyID?:     string;
}

export interface FluffyDateLimit {
    _id?:           string;
    dateLimitFrom?: Date;
    dateLimitTo?:   Date;
}

export interface TentacledPrice {
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
    _id?:                 string;
    additionalDurations?: StickyAdditionalDuration[];
    businessID?:          string;
    /**
     * Список видов приема услуги
     */
    receptionTypes?: string[];
    taxonomyID?:     string;
}

export interface StickyAdditionalDuration {
    _id?:      string;
    duration?: number;
    /**
     * поддержка различной длительности услуг в зависимости от работника
     */
    level?: number;
}

export interface FluffyTaxonomyShowcase {
    baseBusinessID?:   string;
    isBaseNode?:       boolean;
    originBusinessID?: string;
    showcaseItemID?:   string;
}

export interface BusinessTaxonomiesComplex {
    name?:       string;
    taxonomies?: string[];
}

export interface BusinessTopServices {
    services?: any[];
    status?:   string;
}

export interface BusinessWidgetConfiguration {
    additionalName?:                         string;
    alignmentTaxonomySlots?:                 boolean;
    allowAutoSelect?:                        boolean;
    allowBookVisitor?:                       boolean;
    allowSkipTimeCheck?:                     boolean;
    analyticsGoogle?:                        FluffyAnalyticsGoogle;
    analyticsYandex?:                        FluffyAnalyticsYandex;
    appointment_confirmation_text?:          string;
    appointment_confirmation_title?:         string;
    askClientBirthday?:                      boolean;
    askClientGender?:                        boolean;
    askClientPassportID?:                    boolean;
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
    insuranceClientSupportPhone?:            FaxElement[];
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
    paymentProvider?:                        FluffyPaymentProvider;
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
    showStartText?:                          boolean;
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
    startTextButton?:                        string;
    startTextMessage?:                       string;
    strictSlotCutting?:                      boolean;
    tentativeTTL?:                           number;
    theme?:                                  string;
    toggleReminder?:                         boolean;
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

export interface FluffyAnalyticsGoogle {
    active?: boolean;
    key?:    string;
}

export interface FluffyAnalyticsYandex {
    active?: boolean;
    key?:    string;
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

export interface NetworkElement {
    address?:     Address;
    businessName: string;
    description:  string;
    internalID:   string;
}

export interface Address {
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
    metroStations?:    PurpleMetroStation[];
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

export interface PurpleMetroStation {
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
    add_client:            AddClient;
    find_or_create_client: FindOrCreateClient;
    update_client:         UpdateClient;
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
    business:           AmbitiousBusiness;
    client:             ClientClass;
    profile?:           ParamsProfile;
    skipEmailCheck?:    boolean;
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
export interface ClientClass {
    address?:                    string;
    birthday?:                   Birthday;
    blackList?:                  boolean;
    childrenClients?:            ChildrenClient[];
    clientCardCreationDate?:     string;
    clientCardNumber?:           string;
    clientContractNumber?:       string;
    creatorProfileID?:           null | string;
    creatorProfileName?:         null | string;
    description?:                string;
    discountCode?:               string;
    driverLicense?:              null | string;
    email?:                      string[];
    extraFields?:                ClientExtraField[];
    extraID?:                    string;
    favResources?:               FavResource[];
    fax?:                        string;
    fromSms?:                    FromSms;
    fullAddress?:                AddressSchema[];
    houseNumber?:                string;
    icon_url?:                   string;
    id?:                         string;
    insuranceCompany?:           string;
    insuranceNumber?:            string;
    integrationData?:            IntegrationDataClass;
    isLazy?:                     boolean;
    israelCity?:                 IsraelCityUnion;
    isVIP?:                      boolean;
    kupatHolim?:                 KupatHolimUnion;
    language?:                   LanguageList;
    lazyResolvedDate?:           string;
    locality?:                   string;
    loyaltyInfo?:                LoyaltyInfo;
    middleName?:                 null | string;
    name:                        string;
    passportDate?:               string;
    passportId?:                 string;
    passportIssued?:             string;
    passportSeries?:             string;
    phone:                       FaxElement[];
    receiveSmsAfterService?:     boolean;
    sex?:                        Sex;
    skipMarketingNotifications?: boolean;
    skipNotifications?:          boolean;
    snils?:                      string;
    status?:                     ResourceStatus;
    surname:                     string;
    taxiPark?:                   null | string;
    taxiParkMemberCount?:        OrderWeight;
    twoFAUserID?:                string;
    workPlace?:                  string;
}

export interface ChildrenClient {
    clientID:    string;
    extraID?:    string;
    middleName?: string;
    name?:       string;
    surname?:    string;
}

export interface ClientExtraField {
    fieldID:   string;
    fieldName: string;
    value?:    FluffyValue;
}

export type FluffyValue = boolean | number | { [key: string]: any } | null | string;

export interface FavResource {
    businessID: number;
    networkID:  string;
    resourceID: string;
}

export type FromSms = boolean | string;

export interface IntegrationDataClass {
    transactionID: string;
}

export type IsraelCityUnion = any[] | boolean | number | number | null | IsraelCityObject | string;

export interface IsraelCityObject {
    cityId?: string;
    name?:   string;
}

export type KupatHolimUnion = any[] | boolean | number | number | null | KupatHolimObject | string;

export interface KupatHolimObject {
    kupatHolimId?: string;
    name?:         string;
}

export interface LoyaltyInfo {
    annualTurnover?: number;
    bonusPoints?:    number;
    cardNumber?:     string;
    presents?:       Present[];
    purchases?:      Purchase[];
    status?:         string;
}

export interface Present {
    code?:    string;
    extraID?: string;
    name?:    string;
    status?:  PresentStatus;
}

export enum PresentStatus {
    Ready = "READY",
    Received = "RECEIVED",
}

export interface Purchase {
    active?:         boolean;
    expirationDate?: string;
    free?:           boolean;
    goodID?:         string;
    price?:          number;
    transactionID?:  string;
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
    business:   CunningBusiness;
    client:     ClientClass;
    documents?: string;
    profile?:   PurpleProfile;
    source?:    Source;
}

export interface CunningBusiness {
    id: string;
}

export interface PurpleProfile {
    id: string;
}

export enum Source {
    Backoffice = "BACKOFFICE",
    MiniWidget = "MINI_WIDGET",
    MobileWidget = "MOBILE_WIDGET",
    Widget = "WIDGET",
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
    business:           MagentaBusiness;
    client?:            ClientClass;
    network?:           StickyNetwork;
    skipEmailCheck?:    boolean;
    skipProfileUpdate?: boolean;
}

export interface MagentaBusiness {
    /**
     * идентификатор бизнеса
     */
    id: BackofficeIdUnion;
}

export interface StickyNetwork {
    /**
     * идентификатор нетворка
     */
    id?: BackofficeIdUnion;
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
    business?:  FriskyBusiness;
    client:     ClientClass;
    documents?: any[];
    profile?:   FluffyProfile;
}

export interface FriskyBusiness {
    id: string;
}

export interface FluffyProfile {
    id: string;
}

export interface UpdateClient {
    request:  ClientUpdateClientRequest;
    response: ClientUpdateClientResponse;
}

export interface ClientUpdateClientRequest {
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
    params: ClientUpdateClientRequestParams;
}

/**
 * параметры запроса
 */
export interface ClientUpdateClientRequestParams {
    business: MischievousBusiness;
    client:   ClientClass;
    network?: IndigoNetwork;
}

export interface MischievousBusiness {
    /**
     * идентификатор бизнеса
     */
    id: BackofficeIdUnion;
}

export interface IndigoNetwork {
    /**
     * идентификатор нетворка
     */
    id?: BackofficeIdUnion;
}

export interface ClientUpdateClientResponse {
    result?: ClientUpdateClientResponseResult;
    /**
     * объект, содержащий информацию об ошибке
     */
    error?: ClientUpdateClientResponseError;
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
export interface ClientUpdateClientResponseError {
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

export interface ClientUpdateClientResponseResult {
    added_document?: { [key: string]: any };
    success:         boolean;
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
    business:  BraggadociousBusiness;
    resources: string[];
    taxonomy:  PurpleTaxonomy;
}

export interface BraggadociousBusiness {
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
    business:  Business1;
    duration:  number;
    durations: number[];
    resources: string[];
    taxonomy:  TentacledTaxonomy;
}

export interface Business1 {
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
    business: CracSlotsRequestBusinessParams;
    filters:  CracSlotsGetCracDistributedResourcesAndRoomsRequestFilters;
}

export interface CracSlotsRequestBusinessParams {
    general_info:         GeneralInfo;
    id:                   string;
    widget_configuration: PurpleWidgetConfiguration;
}

export interface GeneralInfo {
    timezone: string;
}

export interface PurpleWidgetConfiguration {
    cracServer:       string;
    displaySlotSize?: number;
    hideGraySlots?:   boolean;
}

export interface CracSlotsGetCracDistributedResourcesAndRoomsRequestFilters {
    date:       PurpleDate;
    resources:  CracSlotsGetCracDistributedResourcesAndRoomsRequestResourceFilter[];
    rooms:      string[];
    taxonomies: string[];
}

export interface PurpleDate {
    from: string;
    to:   string;
}

export interface CracSlotsGetCracDistributedResourcesAndRoomsRequestResourceFilter {
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
    business: CracSlotsRequestBusinessParams;
    filters:  CracSlotsGetCracInsuranceResourcesAndRoomsRequestFilters;
}

export interface CracSlotsGetCracInsuranceResourcesAndRoomsRequestFilters {
    date:        FluffyDate;
    insuranceID: string;
    resources:   CracSlotsGetCracInsuranceResourcesAndRoomsRequestResourceFilter[];
    rooms:       string[];
}

export interface FluffyDate {
    from: string;
    to:   string;
}

export interface CracSlotsGetCracInsuranceResourcesAndRoomsRequestResourceFilter {
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
    business: CracSlotsRequestBusinessParams;
    filters:  CracSlotsGetCracResourcesAndRoomsRequestFilters;
}

export interface CracSlotsGetCracResourcesAndRoomsRequestFilters {
    date:       TentacledDate;
    resources:  CracSlotsGetCracResourcesAndRoomsRequestResourceFilter[];
    rooms:      string[];
    taxonomies: string[];
}

export interface TentacledDate {
    from: Date;
    to:   Date;
}

export interface CracSlotsGetCracResourcesAndRoomsRequestResourceFilter {
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
    slots: CracDaySchedule[];
}

export interface CracDaySchedule {
    date:      string;
    resources: SlotResource[];
    rooms:     { [key: string]: any }[];
}

export interface SlotResource {
    cutSlots:   CracCutSlot[];
    resourceId: string;
}

export interface CracCutSlot {
    available: boolean;
    duration:  number;
    end:       number;
    start:     number;
}

export interface Models {
    Appointment: Appointment;
    Business:    BusinessClass;
    Client:      ClientClass;
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
        { json: "get_appointment_by_filter", js: "get_appointment_by_filter", typ: u(undefined, r("GetAppointmentByFilter")) },
        { json: "get_appointment_by_showcase", js: "get_appointment_by_showcase", typ: u(undefined, r("GetAppointmentByShowcase")) },
        { json: "get_appointments_by_client_v2", js: "get_appointments_by_client_v2", typ: u(undefined, r("GetAppointmentsByClientV2")) },
        { json: "get_appointments_by_user", js: "get_appointments_by_user", typ: u(undefined, r("GetAppointmentsByUser")) },
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
        { json: "params", js: "params", typ: r("ParamsObject") },
    ], false),
    "ParamsObject": o([
        { json: "appointment", js: "appointment", typ: r("PurpleAppointment") },
        { json: "client", js: "client", typ: r("PurpleClient") },
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
        { json: "client", js: "client", typ: r("FluffyClient") },
    ], "any"),
    "FluffyAppointment": o([
        { json: "id", js: "id", typ: "" },
        { json: "shortId", js: "shortId", typ: u(undefined, "") },
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
        { json: "client", js: "client", typ: r("ClientObject") },
    ], "any"),
    "TentacledAppointment": o([
        { json: "id", js: "id", typ: "" },
        { json: "source", js: "source", typ: u(undefined, "") },
    ], false),
    "ClientObject": o([
        { json: "comment", js: "comment", typ: u(undefined, "") },
        { json: "id", js: "id", typ: "" },
    ], "any"),
    "AppointmentClientConfirmAppointmentResponse": o([
        { json: "id", js: "id", typ: 3.14 },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "result", js: "result", typ: u(undefined, r("Appointment")) },
        { json: "error", js: "error", typ: u(undefined, r("AppointmentClientConfirmAppointmentResponseError")) },
    ], false),
    "AppointmentClientConfirmAppointmentResponseError": o([
        { json: "code", js: "code", typ: 3.14 },
        { json: "data", js: "data", typ: u(undefined, "") },
        { json: "message", js: "message", typ: "" },
    ], "any"),
    "Appointment": o([
        { json: "additional_info", js: "additional_info", typ: u(undefined, m("any")) },
        { json: "additionalClientAppears", js: "additionalClientAppears", typ: a(r("AdditionalClientAppear")) },
        { json: "additionalClientPayments", js: "additionalClientPayments", typ: a(r("AdditionalClientPayment")) },
        { json: "additionalClients", js: "additionalClients", typ: a(r("AdditionalClientElement")) },
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
        { json: "client", js: "client", typ: r("PurpleAppointmentClient") },
        { json: "client_appear", js: "client_appear", typ: r("AppointmentClientAppear") },
        { json: "client_med_code", js: "client_med_code", typ: u(undefined, "") },
        { json: "client_payment", js: "client_payment", typ: r("AppointmentClientPayment") },
        { json: "client_payment_invoice", js: "client_payment_invoice", typ: u(undefined, "") },
        { json: "client_payment_transaction_id", js: "client_payment_transaction_id", typ: u(undefined, "") },
        { json: "clientComment", js: "clientComment", typ: "" },
        { json: "clientVisitors", js: "clientVisitors", typ: u(undefined, a(r("AppointmentClientVisitor"))) },
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
        { json: "review", js: "review", typ: u(undefined, r("Review")) },
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
        { json: "_id", js: "_id", typ: u(undefined, "") },
        { json: "clientID", js: "clientID", typ: "" },
        { json: "source", js: "source", typ: "" },
    ], false),
    "AdditionalClientStatus": o([
        { json: "_id", js: "_id", typ: u(undefined, "") },
        { json: "clientID", js: "clientID", typ: "" },
        { json: "history", js: "history", typ: u(undefined, a(m("any"))) },
        { json: "status", js: "status", typ: r("AppointmentStatus") },
    ], false),
    "AdditionalClientUtm": o([
        { json: "_id", js: "_id", typ: u(undefined, "") },
        { json: "clientID", js: "clientID", typ: "" },
        { json: "utm", js: "utm", typ: u(undefined, m("any")) },
    ], false),
    "AdditionalClientElement": o([
        { json: "address", js: "address", typ: u(undefined, u(null, "")) },
        { json: "adminComment", js: "adminComment", typ: u(undefined, u(null, "")) },
        { json: "birthday", js: "birthday", typ: u(undefined, u(m("any"), null, "")) },
        { json: "clientCardNumber", js: "clientCardNumber", typ: u(undefined, u(null, "")) },
        { json: "clientComment", js: "clientComment", typ: u(undefined, u(null, "")) },
        { json: "creatorProfileID", js: "creatorProfileID", typ: u(undefined, u(null, "")) },
        { json: "creatorProfileName", js: "creatorProfileName", typ: u(undefined, u(null, "")) },
        { json: "driverLicense", js: "driverLicense", typ: u(undefined, u(null, "")) },
        { json: "email", js: "email", typ: u(undefined, a("")) },
        { json: "extraData", js: "extraData", typ: u(undefined, m("any")) },
        { json: "extraID", js: "extraID", typ: u(undefined, u(null, "")) },
        { json: "extraVisitors", js: "extraVisitors", typ: u(undefined, 3.14) },
        { json: "fax", js: "fax", typ: u(undefined, u(null, "")) },
        { json: "feedback", js: "feedback", typ: u(undefined, r("AppointmentClientFeedback")) },
        { json: "GAClientID", js: "GAClientID", typ: u(undefined, u(null, "")) },
        { json: "houseNumber", js: "houseNumber", typ: u(undefined, u(null, "")) },
        { json: "id", js: "id", typ: "" },
        { json: "incomingPhone", js: "incomingPhone", typ: u(undefined, a(r("IncomingPhoneElement"))) },
        { json: "israelCity", js: "israelCity", typ: u(undefined, u(r("IsraelCityClass"), null)) },
        { json: "isVIP", js: "isVIP", typ: u(undefined, true) },
        { json: "kupatHolim", js: "kupatHolim", typ: u(undefined, u(r("KupatHolimClass"), null)) },
        { json: "language", js: "language", typ: u(undefined, "") },
        { json: "middleName", js: "middleName", typ: u(undefined, u(null, "")) },
        { json: "name", js: "name", typ: "" },
        { json: "passportId", js: "passportId", typ: u(undefined, u(null, "")) },
        { json: "phone", js: "phone", typ: u(undefined, a(r("IncomingPhoneElement"))) },
        { json: "seasonTicketId", js: "seasonTicketId", typ: u(undefined, u(null, "")) },
        { json: "seasonTicketNumber", js: "seasonTicketNumber", typ: u(undefined, u(null, "")) },
        { json: "sex", js: "sex", typ: u(undefined, r("Sex")) },
        { json: "shortId", js: "shortId", typ: u(undefined, "") },
        { json: "surname", js: "surname", typ: "" },
        { json: "taxiPark", js: "taxiPark", typ: u(undefined, u(null, "")) },
        { json: "taxiParkMemberCount", js: "taxiParkMemberCount", typ: u(undefined, u(3.14, null)) },
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
        { json: "value", js: "value", typ: u(undefined, u(3.14, m("any"), null, "")) },
    ], false),
    "IncomingPhoneElement": o([
        { json: "area_code", js: "area_code", typ: "" },
        { json: "country_code", js: "country_code", typ: "" },
        { json: "number", js: "number", typ: "" },
    ], false),
    "IsraelCityClass": o([
        { json: "cityId", js: "cityId", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], false),
    "KupatHolimClass": o([
        { json: "kupatHolimId", js: "kupatHolimId", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
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
        { json: "drinkAnswer", js: "drinkAnswer", typ: u(undefined, r("DrinkAnswer")) },
        { json: "duration", js: "duration", typ: 3.14 },
        { json: "hideAppointmentTime", js: "hideAppointmentTime", typ: true },
        { json: "id", js: "id", typ: "" },
        { json: "integration_data", js: "integration_data", typ: u(undefined, r("IntegrationData")) },
        { json: "price", js: "price", typ: r("Price") },
        { json: "shortId", js: "shortId", typ: "" },
        { json: "start", js: "start", typ: Date },
        { json: "status", js: "status", typ: r("AppointmentStatus") },
        { json: "talkAnswer", js: "talkAnswer", typ: u(undefined, r("TalkAnswer")) },
        { json: "testRecord", js: "testRecord", typ: true },
        { json: "updated", js: "updated", typ: Date },
    ], false),
    "IntegrationData": o([
        { json: "extraId", js: "extraId", typ: u(null, "") },
    ], false),
    "Price": o([
        { json: "additionalTaxonomyDiscount", js: "additionalTaxonomyDiscount", typ: a(r("AdditionalTaxonomyDiscount")) },
        { json: "amount", js: "amount", typ: 3.14 },
        { json: "currency", js: "currency", typ: r("CurrencyList") },
        { json: "discount", js: "discount", typ: u(undefined, 3.14) },
        { json: "discountProvider", js: "discountProvider", typ: u(undefined, r("DiscountProvider")) },
        { json: "discountType", js: "discountType", typ: u(undefined, "") },
        { json: "originalAmount", js: "originalAmount", typ: u(undefined, u(3.14, null)) },
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
    "PurpleAppointmentClient": o([
        { json: "address", js: "address", typ: u(undefined, u(null, "")) },
        { json: "adminComment", js: "adminComment", typ: u(undefined, u(null, "")) },
        { json: "birthday", js: "birthday", typ: u(undefined, u(m("any"), null, "")) },
        { json: "clientCardNumber", js: "clientCardNumber", typ: u(undefined, u(null, "")) },
        { json: "clientComment", js: "clientComment", typ: u(undefined, u(null, "")) },
        { json: "creatorProfileID", js: "creatorProfileID", typ: u(undefined, u(null, "")) },
        { json: "creatorProfileName", js: "creatorProfileName", typ: u(undefined, u(null, "")) },
        { json: "driverLicense", js: "driverLicense", typ: u(undefined, u(null, "")) },
        { json: "email", js: "email", typ: u(undefined, a("")) },
        { json: "extraData", js: "extraData", typ: u(undefined, m("any")) },
        { json: "extraID", js: "extraID", typ: u(undefined, u(null, "")) },
        { json: "extraVisitors", js: "extraVisitors", typ: u(undefined, 3.14) },
        { json: "fax", js: "fax", typ: u(undefined, u(null, "")) },
        { json: "feedback", js: "feedback", typ: u(undefined, r("AppointmentClientFeedback")) },
        { json: "GAClientID", js: "GAClientID", typ: u(undefined, u(null, "")) },
        { json: "houseNumber", js: "houseNumber", typ: u(undefined, u(null, "")) },
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "incomingPhone", js: "incomingPhone", typ: u(undefined, a(r("IncomingPhoneElement"))) },
        { json: "israelCity", js: "israelCity", typ: u(undefined, u(r("IsraelCityClass"), null)) },
        { json: "isVIP", js: "isVIP", typ: u(undefined, true) },
        { json: "kupatHolim", js: "kupatHolim", typ: u(undefined, u(r("KupatHolimClass"), null)) },
        { json: "language", js: "language", typ: u(undefined, "") },
        { json: "middleName", js: "middleName", typ: u(undefined, u(null, "")) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "passportId", js: "passportId", typ: u(undefined, u(null, "")) },
        { json: "phone", js: "phone", typ: u(undefined, a(r("IncomingPhoneElement"))) },
        { json: "seasonTicketId", js: "seasonTicketId", typ: u(undefined, u(null, "")) },
        { json: "seasonTicketNumber", js: "seasonTicketNumber", typ: u(undefined, u(null, "")) },
        { json: "sex", js: "sex", typ: u(undefined, r("Sex")) },
        { json: "shortId", js: "shortId", typ: u(undefined, "") },
        { json: "surname", js: "surname", typ: u(undefined, "") },
        { json: "taxiPark", js: "taxiPark", typ: u(undefined, u(null, "")) },
        { json: "taxiParkMemberCount", js: "taxiParkMemberCount", typ: u(undefined, u(3.14, null)) },
    ], false),
    "AppointmentClientVisitor": o([
        { json: "birthday", js: "birthday", typ: u(undefined, u(m("any"), null, "")) },
        { json: "email", js: "email", typ: u(undefined, a("")) },
        { json: "extraVisitors", js: "extraVisitors", typ: u(undefined, 3.14) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "parentClientID", js: "parentClientID", typ: u(undefined, "") },
        { json: "parentProfileID", js: "parentProfileID", typ: u(undefined, "") },
        { json: "phone", js: "phone", typ: u(undefined, a(r("IncomingPhoneElement"))) },
        { json: "sex", js: "sex", typ: u(undefined, r("Sex")) },
    ], "any"),
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
        { json: "client", js: "client", typ: r("AdditionalClientElement") },
        { json: "created", js: "created", typ: u(undefined, Date) },
        { json: "payment", js: "payment", typ: u(undefined, r("AppointmentClientPayment")) },
        { json: "payment_invoice", js: "payment_invoice", typ: u(undefined, "") },
        { json: "payment_transaction_id", js: "payment_transaction_id", typ: u(undefined, "") },
        { json: "source", js: "source", typ: u(undefined, "") },
        { json: "status", js: "status", typ: u(undefined, r("AppointmentStatus")) },
    ], false),
    "AppointmentResource": o([
        { json: "extraID", js: "extraID", typ: u(undefined, u(null, "")) },
        { json: "id", js: "id", typ: "" },
        { json: "middleName", js: "middleName", typ: u(undefined, "") },
        { json: "name", js: "name", typ: "" },
        { json: "surname", js: "surname", typ: "" },
    ], false),
    "Review": o([
        { json: "business", js: "business", typ: r("TaxonomyClass") },
        { json: "taxonomy", js: "taxonomy", typ: r("TaxonomyClass") },
        { json: "worker", js: "worker", typ: r("TaxonomyClass") },
    ], false),
    "TaxonomyClass": o([
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
    "GetAppointmentByFilter": o([
        { json: "request", js: "request", typ: r("AppointmentGetAppointmentByFilterRequest") },
        { json: "response", js: "response", typ: r("AppointmentGetAppointmentByFilterResponse") },
    ], false),
    "AppointmentGetAppointmentByFilterRequest": o([
        { json: "cred", js: "cred", typ: u(undefined, r("Cred")) },
        { json: "id", js: "id", typ: u(3.14, "") },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "method", js: "method", typ: "" },
        { json: "params", js: "params", typ: r("AppointmentGetAppointmentByFilterRequestParams") },
    ], false),
    "AppointmentGetAppointmentByFilterRequestParams": o([
        { json: "business", js: "business", typ: u(undefined, r("FluffyBusiness")) },
        { json: "extraFilters", js: "extraFilters", typ: u(undefined, r("PurpleExtraFilters")) },
        { json: "filter", js: "filter", typ: u(undefined, r("PurpleFilter")) },
        { json: "network", js: "network", typ: u(undefined, r("PurpleNetwork")) },
        { json: "page", js: "page", typ: 3.14 },
        { json: "pageSize", js: "pageSize", typ: 3.14 },
        { json: "skipBusinessCancelled", js: "skipBusinessCancelled", typ: u(undefined, true) },
    ], "any"),
    "FluffyBusiness": o([
        { json: "id", js: "id", typ: u(undefined, u(3.14, "")) },
    ], false),
    "PurpleExtraFilters": o([
        { json: "sort", js: "sort", typ: u(undefined, a(r("PurpleSort"))) },
    ], false),
    "PurpleSort": o([
        { json: "dir", js: "dir", typ: r("Dir") },
        { json: "field", js: "field", typ: r("SortField") },
    ], false),
    "PurpleFilter": o([
        { json: "created", js: "created", typ: u(undefined, r("PurpleCreated")) },
        { json: "end", js: "end", typ: u(undefined, Date) },
        { json: "services", js: "services", typ: u(undefined, a("")) },
        { json: "skipUpdated", js: "skipUpdated", typ: u(undefined, true) },
        { json: "start", js: "start", typ: u(undefined, Date) },
        { json: "workers", js: "workers", typ: u(undefined, a("")) },
    ], false),
    "PurpleCreated": o([
        { json: "end", js: "end", typ: Date },
        { json: "start", js: "start", typ: Date },
    ], false),
    "PurpleNetwork": o([
        { json: "id", js: "id", typ: u(undefined, u(3.14, "")) },
    ], false),
    "AppointmentGetAppointmentByFilterResponse": o([
        { json: "id", js: "id", typ: 3.14 },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "result", js: "result", typ: u(undefined, r("AppointmentGetAppointmentByFilterResponseResult")) },
        { json: "error", js: "error", typ: u(undefined, r("AppointmentGetAppointmentByFilterResponseError")) },
    ], false),
    "AppointmentGetAppointmentByFilterResponseError": o([
        { json: "code", js: "code", typ: 3.14 },
        { json: "data", js: "data", typ: u(undefined, "") },
        { json: "message", js: "message", typ: "" },
    ], "any"),
    "AppointmentGetAppointmentByFilterResponseResult": o([
        { json: "data", js: "data", typ: a(r("Appointment")) },
        { json: "page", js: "page", typ: 3.14 },
        { json: "total", js: "total", typ: 3.14 },
        { json: "unconfirmed", js: "unconfirmed", typ: 3.14 },
    ], false),
    "GetAppointmentByShowcase": o([
        { json: "request", js: "request", typ: r("AppointmentGetAppointmentByShowcaseRequest") },
        { json: "response", js: "response", typ: r("AppointmentGetAppointmentByShowcaseResponse") },
    ], false),
    "AppointmentGetAppointmentByShowcaseRequest": o([
        { json: "cred", js: "cred", typ: u(undefined, r("Cred")) },
        { json: "id", js: "id", typ: u(3.14, "") },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "method", js: "method", typ: "" },
        { json: "params", js: "params", typ: r("AppointmentGetAppointmentByShowcaseRequestParams") },
    ], false),
    "AppointmentGetAppointmentByShowcaseRequestParams": o([
        { json: "business", js: "business", typ: r("TentacledBusiness") },
        { json: "created", js: "created", typ: u(undefined, r("ParamsCreated")) },
        { json: "page", js: "page", typ: 3.14 },
        { json: "pageSize", js: "pageSize", typ: 3.14 },
        { json: "source", js: "source", typ: u(undefined, "") },
    ], "any"),
    "TentacledBusiness": o([
        { json: "id", js: "id", typ: u(3.14, "") },
    ], false),
    "ParamsCreated": o([
        { json: "end", js: "end", typ: Date },
        { json: "start", js: "start", typ: Date },
    ], false),
    "AppointmentGetAppointmentByShowcaseResponse": o([
        { json: "id", js: "id", typ: 3.14 },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "result", js: "result", typ: u(undefined, a(r("Appointment"))) },
        { json: "error", js: "error", typ: u(undefined, r("AppointmentGetAppointmentByShowcaseResponseError")) },
    ], false),
    "AppointmentGetAppointmentByShowcaseResponseError": o([
        { json: "code", js: "code", typ: 3.14 },
        { json: "data", js: "data", typ: u(undefined, "") },
        { json: "message", js: "message", typ: "" },
    ], "any"),
    "GetAppointmentsByClientV2": o([
        { json: "request", js: "request", typ: r("AppointmentGetAppointmentsByClientV2Request") },
        { json: "response", js: "response", typ: r("AppointmentGetAppointmentsByClientV2Response") },
    ], false),
    "AppointmentGetAppointmentsByClientV2Request": o([
        { json: "cred", js: "cred", typ: u(undefined, r("Cred")) },
        { json: "id", js: "id", typ: u(3.14, "") },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "method", js: "method", typ: "" },
        { json: "params", js: "params", typ: r("AppointmentGetAppointmentsByClientV2RequestParams") },
    ], false),
    "AppointmentGetAppointmentsByClientV2RequestParams": o([
        { json: "business", js: "business", typ: r("StickyBusiness") },
        { json: "client", js: "client", typ: r("TentacledClient") },
        { json: "extraFilters", js: "extraFilters", typ: u(undefined, r("FluffyExtraFilters")) },
        { json: "filter", js: "filter", typ: u(undefined, r("FluffyFilter")) },
        { json: "network", js: "network", typ: u(undefined, r("FluffyNetwork")) },
        { json: "skipBusinessCancelled", js: "skipBusinessCancelled", typ: u(undefined, true) },
    ], "any"),
    "StickyBusiness": o([
        { json: "id", js: "id", typ: u(3.14, "") },
    ], false),
    "TentacledClient": o([
        { json: "id", js: "id", typ: u(3.14, "") },
    ], false),
    "FluffyExtraFilters": o([
        { json: "sort", js: "sort", typ: u(undefined, a(r("FluffySort"))) },
    ], false),
    "FluffySort": o([
        { json: "dir", js: "dir", typ: r("Dir") },
        { json: "field", js: "field", typ: r("SortField") },
    ], false),
    "FluffyFilter": o([
        { json: "created", js: "created", typ: u(undefined, r("FluffyCreated")) },
        { json: "end", js: "end", typ: u(undefined, Date) },
        { json: "services", js: "services", typ: u(undefined, a("")) },
        { json: "skipUpdated", js: "skipUpdated", typ: u(undefined, true) },
        { json: "start", js: "start", typ: u(undefined, Date) },
        { json: "workers", js: "workers", typ: u(undefined, a("")) },
    ], false),
    "FluffyCreated": o([
        { json: "end", js: "end", typ: Date },
        { json: "start", js: "start", typ: Date },
    ], false),
    "FluffyNetwork": o([
        { json: "id", js: "id", typ: u(undefined, u(3.14, "")) },
    ], false),
    "AppointmentGetAppointmentsByClientV2Response": o([
        { json: "id", js: "id", typ: 3.14 },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "result", js: "result", typ: u(undefined, r("AppointmentGetAppointmentsByClientV2ResponseResult")) },
        { json: "error", js: "error", typ: u(undefined, r("AppointmentGetAppointmentsByClientV2ResponseError")) },
    ], false),
    "AppointmentGetAppointmentsByClientV2ResponseError": o([
        { json: "code", js: "code", typ: 3.14 },
        { json: "data", js: "data", typ: u(undefined, "") },
        { json: "message", js: "message", typ: "" },
    ], "any"),
    "AppointmentGetAppointmentsByClientV2ResponseResult": o([
        { json: "data", js: "data", typ: a(r("Appointment")) },
        { json: "page", js: "page", typ: 3.14 },
        { json: "total", js: "total", typ: 3.14 },
        { json: "unconfirmed", js: "unconfirmed", typ: 3.14 },
    ], false),
    "GetAppointmentsByUser": o([
        { json: "request", js: "request", typ: r("AppointmentGetAppointmentsByUserRequest") },
        { json: "response", js: "response", typ: r("AppointmentGetAppointmentsByUserResponse") },
    ], false),
    "AppointmentGetAppointmentsByUserRequest": o([
        { json: "cred", js: "cred", typ: u(undefined, r("Cred")) },
        { json: "id", js: "id", typ: u(3.14, "") },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "method", js: "method", typ: "" },
        { json: "params", js: "params", typ: r("AppointmentGetAppointmentsByUserRequestParams") },
    ], false),
    "AppointmentGetAppointmentsByUserRequestParams": o([
        { json: "business", js: "business", typ: u(undefined, r("IndigoBusiness")) },
        { json: "extraFilters", js: "extraFilters", typ: u(undefined, r("TentacledExtraFilters")) },
        { json: "filter", js: "filter", typ: u(undefined, r("TentacledFilter")) },
        { json: "network", js: "network", typ: u(undefined, r("TentacledNetwork")) },
        { json: "skipBusinessCancelled", js: "skipBusinessCancelled", typ: u(undefined, true) },
    ], "any"),
    "IndigoBusiness": o([
        { json: "id", js: "id", typ: u(3.14, "") },
    ], false),
    "TentacledExtraFilters": o([
        { json: "sort", js: "sort", typ: u(undefined, a(r("TentacledSort"))) },
    ], false),
    "TentacledSort": o([
        { json: "dir", js: "dir", typ: r("Dir") },
        { json: "field", js: "field", typ: r("SortField") },
    ], false),
    "TentacledFilter": o([
        { json: "created", js: "created", typ: u(undefined, r("TentacledCreated")) },
        { json: "end", js: "end", typ: u(undefined, Date) },
        { json: "services", js: "services", typ: u(undefined, a("")) },
        { json: "skipUpdated", js: "skipUpdated", typ: u(undefined, true) },
        { json: "start", js: "start", typ: u(undefined, Date) },
        { json: "workers", js: "workers", typ: u(undefined, a("")) },
    ], false),
    "TentacledCreated": o([
        { json: "end", js: "end", typ: Date },
        { json: "start", js: "start", typ: Date },
    ], false),
    "TentacledNetwork": o([
        { json: "id", js: "id", typ: u(undefined, u(3.14, "")) },
    ], false),
    "AppointmentGetAppointmentsByUserResponse": o([
        { json: "id", js: "id", typ: 3.14 },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "result", js: "result", typ: u(undefined, r("AppointmentGetAppointmentsByUserResponseResult")) },
        { json: "error", js: "error", typ: u(undefined, r("AppointmentGetAppointmentsByUserResponseError")) },
    ], false),
    "AppointmentGetAppointmentsByUserResponseError": o([
        { json: "code", js: "code", typ: 3.14 },
        { json: "data", js: "data", typ: u(undefined, "") },
        { json: "message", js: "message", typ: "" },
    ], "any"),
    "AppointmentGetAppointmentsByUserResponseResult": o([
        { json: "data", js: "data", typ: a(r("Appointment")) },
        { json: "page", js: "page", typ: 3.14 },
        { json: "total", js: "total", typ: 3.14 },
        { json: "unconfirmed", js: "unconfirmed", typ: 3.14 },
    ], false),
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
        { json: "business", js: "business", typ: r("IndecentBusiness") },
        { json: "originBusinessID", js: "originBusinessID", typ: u(undefined, u(null, "")) },
        { json: "resource", js: "resource", typ: r("ParamsResourceClass") },
        { json: "source", js: "source", typ: "" },
        { json: "taxonomy", js: "taxonomy", typ: r("ParamsTaxonomyClass") },
    ], "any"),
    "AppointmentObject": o([
        { json: "duration", js: "duration", typ: u(undefined, 3.14) },
        { json: "price", js: "price", typ: u(undefined, r("PurplePrice")) },
        { json: "start", js: "start", typ: "" },
    ], "any"),
    "PurplePrice": o([
        { json: "amount", js: "amount", typ: 3.14 },
        { json: "currency", js: "currency", typ: r("CurrencyList") },
    ], false),
    "IndecentBusiness": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "ParamsResourceClass": o([
        { json: "id", js: "id", typ: u(a(""), "") },
    ], false),
    "ParamsTaxonomyClass": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "AppointmentReserveAppointmentResponse": o([
        { json: "id", js: "id", typ: 3.14 },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "result", js: "result", typ: u(undefined, r("Appointment")) },
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
        { json: "resource", js: "resource", typ: u(undefined, r("ResourceObject")) },
        { json: "taxonomy", js: "taxonomy", typ: u(undefined, r("TaxonomyObject")) },
        { json: "with_business_info", js: "with_business_info", typ: u(undefined, true) },
    ], false),
    "ResourceObject": o([
        { json: "id", js: "id", typ: u(undefined, "") },
    ], "any"),
    "TaxonomyObject": o([
        { json: "id", js: "id", typ: u(undefined, "") },
    ], "any"),
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
        { json: "businesses", js: "businesses", typ: a(r("BusinessRefInNetwork")) },
        { json: "clientVIPPhones", js: "clientVIPPhones", typ: a("") },
        { json: "grantGroups", js: "grantGroups", typ: a(m("any")) },
        { json: "networkID", js: "networkID", typ: "" },
        { json: "networkInfo", js: "networkInfo", typ: m("any") },
        { json: "networkName", js: "networkName", typ: u(undefined, "") },
        { json: "networkWidgetConfiguration", js: "networkWidgetConfiguration", typ: a(r("NetworkWidgetConfiguration")) },
    ], false),
    "BusinessRefInNetwork": o([
        { json: "_id", js: "_id", typ: u(undefined, "") },
        { json: "businessID", js: "businessID", typ: "" },
        { json: "info", js: "info", typ: u(undefined, r("InfoClass")) },
        { json: "isMapBusiness", js: "isMapBusiness", typ: true },
        { json: "order", js: "order", typ: u(undefined, 3.14) },
        { json: "virtualTaxonomies", js: "virtualTaxonomies", typ: u(undefined, a("")) },
    ], false),
    "InfoClass": o([
        { json: "active", js: "active", typ: u(undefined, true) },
        { json: "activeResourceCount", js: "activeResourceCount", typ: u(undefined, 3.14) },
        { json: "activeTaxonomyCount", js: "activeTaxonomyCount", typ: u(undefined, 3.14) },
        { json: "additionalSettings", js: "additionalSettings", typ: u(undefined, r("InfoAdditionalSettings")) },
        { json: "allowCategoryBooking", js: "allowCategoryBooking", typ: u(undefined, true) },
        { json: "backoffice_configuration", js: "backoffice_configuration", typ: u(undefined, r("InfoBackofficeConfigurationObject")) },
        { json: "backofficeConfiguration", js: "backofficeConfiguration", typ: u(undefined, r("InfoBackofficeConfiguration")) },
        { json: "backofficeType", js: "backofficeType", typ: u(undefined, r("BackofficeType")) },
        { json: "cabinets", js: "cabinets", typ: u(undefined, a(r("InfoCabinet"))) },
        { json: "cabinetsEnabled", js: "cabinetsEnabled", typ: u(undefined, true) },
        { json: "callback_widget_configuration", js: "callback_widget_configuration", typ: u(undefined, r("InfoCallbackWidgetConfiguration")) },
        { json: "consumables", js: "consumables", typ: u(undefined, a(r("InfoConsumable"))) },
        { json: "created_on", js: "created_on", typ: u(undefined, Date) },
        { json: "defaultFilteredWorkers", js: "defaultFilteredWorkers", typ: u(undefined, a("")) },
        { json: "departments", js: "departments", typ: u(undefined, a(r("InfoDepartment"))) },
        { json: "designs", js: "designs", typ: u(undefined, a(m("any"))) },
        { json: "extraID", js: "extraID", typ: u(undefined, "") },
        { json: "flatTaxonomyDisplay", js: "flatTaxonomyDisplay", typ: u(undefined, true) },
        { json: "general_info", js: "general_info", typ: r("BusinessInfo") },
        { json: "group", js: "group", typ: u(undefined, r("Group")) },
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "integration_data", js: "integration_data", typ: u(undefined, m("any")) },
        { json: "mini_widget_configuration", js: "mini_widget_configuration", typ: r("InfoMiniWidgetConfiguration") },
        { json: "mobileData", js: "mobileData", typ: u(undefined, a("any")) },
        { json: "notifications", js: "notifications", typ: u(undefined, a("any")) },
        { json: "resources", js: "resources", typ: u(undefined, a(r("Resource"))) },
        { json: "stateLevelHolidaysNotWorking", js: "stateLevelHolidaysNotWorking", typ: u(undefined, true) },
        { json: "taxonomies", js: "taxonomies", typ: u(undefined, a(r("InfoTaxonomy"))) },
        { json: "taxonomiesComplex", js: "taxonomiesComplex", typ: u(undefined, a(r("InfoTaxonomiesComplex"))) },
        { json: "taxonomy_tree_capacity", js: "taxonomy_tree_capacity", typ: u(undefined, a(m("any"))) },
        { json: "top_services", js: "top_services", typ: u(undefined, r("InfoTopServices")) },
        { json: "vertical", js: "vertical", typ: u(undefined, "") },
        { json: "widget_configuration", js: "widget_configuration", typ: r("InfoWidgetConfiguration") },
        { json: "yandexFeedType", js: "yandexFeedType", typ: u(undefined, "") },
    ], false),
    "InfoAdditionalSettings": o([
        { json: "appointmentExtensionAmount", js: "appointmentExtensionAmount", typ: u(undefined, 3.14) },
        { json: "appointmentExtensionType", js: "appointmentExtensionType", typ: u(undefined, r("AppointmentExtensionType")) },
    ], "any"),
    "InfoBackofficeConfiguration": o([
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
        { json: "enableInvoice", js: "enableInvoice", typ: u(undefined, true) },
        { json: "enableMasterImportance", js: "enableMasterImportance", typ: u(undefined, true) },
        { json: "enablePhoneNationalMode", js: "enablePhoneNationalMode", typ: u(undefined, true) },
        { json: "enablePrintingReportRecordsScreen", js: "enablePrintingReportRecordsScreen", typ: u(undefined, true) },
        { json: "enableServiceTimeLimit", js: "enableServiceTimeLimit", typ: u(undefined, true) },
        { json: "enableSourceChoice", js: "enableSourceChoice", typ: u(undefined, true) },
        { json: "enableTaxonomyChildrenAgeCheck", js: "enableTaxonomyChildrenAgeCheck", typ: u(undefined, true) },
        { json: "enableTelemed", js: "enableTelemed", typ: u(undefined, true) },
        { json: "exportToExcelRemovedClients", js: "exportToExcelRemovedClients", typ: u(undefined, true) },
        { json: "feedbackCustomerPortalMessage", js: "feedbackCustomerPortalMessage", typ: u(undefined, "") },
        { json: "feedbackCustomerPortalThankYouMessage", js: "feedbackCustomerPortalThankYouMessage", typ: u(undefined, "") },
        { json: "feedbackCustomerPortalTitle", js: "feedbackCustomerPortalTitle", typ: u(undefined, "") },
        { json: "feedBackMinRating", js: "feedBackMinRating", typ: u(undefined, r("FeedBackMinRating")) },
        { json: "finId", js: "finId", typ: u(undefined, "") },
        { json: "finName", js: "finName", typ: u(undefined, "") },
        { json: "hideCustomerPortalFooter", js: "hideCustomerPortalFooter", typ: u(undefined, true) },
        { json: "highlightedResource", js: "highlightedResource", typ: u(undefined, true) },
        { json: "invoiceCondition", js: "invoiceCondition", typ: u(undefined, a(r("AppointmentClientPayment"))) },
        { json: "invoiceProvider", js: "invoiceProvider", typ: u(undefined, r("InvoiceProvider")) },
        { json: "manualExceptionSupport", js: "manualExceptionSupport", typ: u(undefined, true) },
        { json: "noInternetAlert", js: "noInternetAlert", typ: u(undefined, true) },
        { json: "pastTimeEdit", js: "pastTimeEdit", typ: u(undefined, 3.14) },
        { json: "paymentProvider", js: "paymentProvider", typ: u(undefined, r("PurplePaymentProvider")) },
        { json: "readonlyResourceSchedule", js: "readonlyResourceSchedule", typ: u(undefined, true) },
        { json: "resourceSurnameFirst", js: "resourceSurnameFirst", typ: u(undefined, true) },
        { json: "resourceTimetableType", js: "resourceTimetableType", typ: u(undefined, r("ResourceTimetableType")) },
        { json: "revisionVersion", js: "revisionVersion", typ: u(undefined, 3.14) },
        { json: "schduleWeekViewIsDefault", js: "schduleWeekViewIsDefault", typ: u(undefined, true) },
        { json: "scheduleDefaultWorkersLimit", js: "scheduleDefaultWorkersLimit", typ: u(undefined, 3.14) },
        { json: "scheduleDefaultWorkersLimitDay", js: "scheduleDefaultWorkersLimitDay", typ: u(undefined, u(3.14, null)) },
        { json: "scheduleDefaultWorkersLimitWeek", js: "scheduleDefaultWorkersLimitWeek", typ: u(undefined, u(3.14, null)) },
        { json: "schedulerWeekViewType", js: "schedulerWeekViewType", typ: u(undefined, r("SchedulerWeekViewType")) },
        { json: "scheduleWorkerHours", js: "scheduleWorkerHours", typ: u(undefined, true) },
        { json: "showAdditionalFields", js: "showAdditionalFields", typ: u(undefined, true) },
        { json: "showAddress", js: "showAddress", typ: u(undefined, true) },
        { json: "showBirthDate", js: "showBirthDate", typ: u(undefined, true) },
        { json: "showClientAddress", js: "showClientAddress", typ: u(undefined, true) },
        { json: "showClientAppear", js: "showClientAppear", typ: u(undefined, true) },
        { json: "showClientAppearOnSchedule", js: "showClientAppearOnSchedule", typ: u(undefined, true) },
        { json: "showClientBirthdayFilter", js: "showClientBirthdayFilter", typ: u(undefined, true) },
        { json: "showClientContractNumber", js: "showClientContractNumber", typ: u(undefined, true) },
        { json: "showClientImage", js: "showClientImage", typ: u(undefined, true) },
        { json: "showClientPayment", js: "showClientPayment", typ: u(undefined, true) },
        { json: "showCreatedUsername", js: "showCreatedUsername", typ: u(undefined, true) },
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
        { json: "telemedProvider", js: "telemedProvider", typ: u(undefined, r("TelemedProvider")) },
        { json: "useAdditionalDurations", js: "useAdditionalDurations", typ: u(undefined, true) },
        { json: "useAdjacentTaxonomies", js: "useAdjacentTaxonomies", typ: u(undefined, true) },
        { json: "useAdjacentTaxonomiesSlotSplitting", js: "useAdjacentTaxonomiesSlotSplitting", typ: u(undefined, true) },
        { json: "useGtAppMethod", js: "useGtAppMethod", typ: u(undefined, true) },
        { json: "workWeekEnd", js: "workWeekEnd", typ: u(undefined, 3.14) },
        { json: "workWeekStart", js: "workWeekStart", typ: u(undefined, 3.14) },
    ], false),
    "InfoBackofficeConfigurationObject": o([
        { json: "enableMasterImportance", js: "enableMasterImportance", typ: u(undefined, true) },
        { json: "resourceTimetableType", js: "resourceTimetableType", typ: u(undefined, r("ResourceTimetableType")) },
    ], "any"),
    "InfoCabinet": o([
        { json: "active", js: "active", typ: u(undefined, true) },
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], false),
    "InfoCallbackWidgetConfiguration": o([
        { json: "title1", js: "title1", typ: u(undefined, "") },
        { json: "title2", js: "title2", typ: u(undefined, "") },
    ], "any"),
    "InfoConsumable": o([
        { json: "extraID", js: "extraID", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "quantity", js: "quantity", typ: 3.14 },
    ], "any"),
    "InfoDepartment": o([
        { json: "id", js: "id", typ: "" },
        { json: "id_", js: "id_", typ: u(undefined, 3.14) },
        { json: "name", js: "name", typ: "" },
    ], false),
    "BusinessInfo": o([
        { json: "accepted_currency", js: "accepted_currency", typ: u(undefined, a(r("CurrencyList"))) },
        { json: "additional_info", js: "additional_info", typ: u(undefined, u(null, "")) },
        { json: "additionalFields", js: "additionalFields", typ: u(undefined, a(r("AdditionalFields"))) },
        { json: "address", js: "address", typ: u(undefined, a(r("AddressSchema"))) },
        { json: "align_min_booking_time", js: "align_min_booking_time", typ: u(undefined, u(true, null)) },
        { json: "autoAcceptAppointment", js: "autoAcceptAppointment", typ: u(undefined, true) },
        { json: "businessShowcaseAliases", js: "businessShowcaseAliases", typ: u(undefined, a(r("BusinessShowcaseAlias"))) },
        { json: "contactName", js: "contactName", typ: u(undefined, u(null, "")) },
        { json: "date_joined", js: "date_joined", typ: u(undefined, Date) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "email", js: "email", typ: u(undefined, "") },
        { json: "eventEditorMinutesTick", js: "eventEditorMinutesTick", typ: u(undefined, 3.14) },
        { json: "fax", js: "fax", typ: u(undefined, a(r("FaxElement"))) },
        { json: "images", js: "images", typ: u(undefined, a("")) },
        { json: "instant_messaging", js: "instant_messaging", typ: u(undefined, a(m("any"))) },
        { json: "isShowcase", js: "isShowcase", typ: u(undefined, true) },
        { json: "language", js: "language", typ: u(undefined, r("LanguageList")) },
        { json: "logo_url", js: "logo_url", typ: u(undefined, u(null, "")) },
        { json: "marketingNotifications", js: "marketingNotifications", typ: u(undefined, r("MarketingNotifications")) },
        { json: "metro", js: "metro", typ: u(undefined, r("Metro")) },
        { json: "min_booking_time", js: "min_booking_time", typ: u(undefined, u(3.14, null)) },
        { json: "mobile", js: "mobile", typ: u(undefined, a(r("FaxElement"))) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "networkID", js: "networkID", typ: u(undefined, u(3.14, null)) },
        { json: "newboEnabledFor", js: "newboEnabledFor", typ: u(undefined, a("")) },
        { json: "paymentMethods", js: "paymentMethods", typ: u(undefined, r("PaymentMethods")) },
        { json: "phone", js: "phone", typ: u(undefined, a(r("FaxElement"))) },
        { json: "phone_mask", js: "phone_mask", typ: u(undefined, u(null, "")) },
        { json: "pricingType", js: "pricingType", typ: u(undefined, r("PricingType")) },
        { json: "revisionVersion", js: "revisionVersion", typ: u(undefined, 3.14) },
        { json: "schedulerTick", js: "schedulerTick", typ: u(undefined, 3.14) },
        { json: "shortName", js: "shortName", typ: u(undefined, u(null, "")) },
        { json: "showAppointmentColor", js: "showAppointmentColor", typ: u(undefined, true) },
        { json: "showAppointmentTooltip", js: "showAppointmentTooltip", typ: u(undefined, true) },
        { json: "showcaseBusinessData", js: "showcaseBusinessData", typ: u(undefined, a(r("ShowcaseBusinessDatum"))) },
        { json: "showcases", js: "showcases", typ: u(undefined, a(r("ShowcaseElement"))) },
        { json: "showResourceWorkStatistics", js: "showResourceWorkStatistics", typ: u(undefined, true) },
        { json: "showWorkerProfession", js: "showWorkerProfession", typ: u(undefined, true) },
        { json: "skipBilling", js: "skipBilling", typ: u(undefined, true) },
        { json: "smsDuplicateFilter", js: "smsDuplicateFilter", typ: u(undefined, r("SmsDuplicateFilter")) },
        { json: "social_network", js: "social_network", typ: u(undefined, a(r("SocialNetworkSchema"))) },
        { json: "timetable", js: "timetable", typ: u(undefined, r("Timetable")) },
        { json: "timezone", js: "timezone", typ: u(undefined, u(null, "")) },
        { json: "verticalTranslation", js: "verticalTranslation", typ: u(undefined, r("VerticalTranslation")) },
        { json: "website", js: "website", typ: u(undefined, u(null, "")) },
    ], false),
    "AdditionalFields": o([
        { json: "name", js: "name", typ: "" },
        { json: "requiredField", js: "requiredField", typ: true },
        { json: "shortName", js: "shortName", typ: "" },
        { json: "type", js: "type", typ: r("AdditionalFieldType") },
        { json: "value", js: "value", typ: "" },
    ], "any"),
    "AddressSchema": o([
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
        { json: "metroStations", js: "metroStations", typ: u(undefined, a(r("FullAddressMetroStation"))) },
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
    "FullAddressMetroStation": o([
        { json: "_id", js: "_id", typ: u(undefined, "") },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "name", js: "name", typ: "" },
    ], false),
    "BusinessShowcaseAlias": o([
        { json: "internalID", js: "internalID", typ: u(undefined, "") },
    ], "any"),
    "FaxElement": o([
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
    "ShowcaseBusinessDatum": o([
        { json: "address", js: "address", typ: u(undefined, a(r("AddressSchema"))) },
        { json: "email", js: "email", typ: u(undefined, "") },
        { json: "internalID", js: "internalID", typ: u(undefined, "") },
        { json: "language", js: "language", typ: u(undefined, r("LanguageList")) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "phone", js: "phone", typ: u(undefined, a(r("FaxElement"))) },
        { json: "receptionTypes", js: "receptionTypes", typ: u(undefined, a("")) },
        { json: "timezone", js: "timezone", typ: u(undefined, "") },
    ], "any"),
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
    "InfoMiniWidgetConfiguration": o([
        { json: "fields", js: "fields", typ: u(undefined, a(r("FieldElement"))) },
        { json: "title1", js: "title1", typ: u(undefined, "") },
        { json: "title2", js: "title2", typ: u(undefined, "") },
    ], "any"),
    "Resource": o([
        { json: "additionalExtraId", js: "additionalExtraId", typ: u(undefined, a("")) },
        { json: "badIconResolution", js: "badIconResolution", typ: u(undefined, true) },
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
        { json: "phone", js: "phone", typ: u(undefined, a(r("FaxElement"))) },
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
        { json: "telemedData", js: "telemedData", typ: u(undefined, r("TelemedData")) },
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
        { json: "additionalFields", js: "additionalFields", typ: u(undefined, a(r("AdditionalFields"))) },
        { json: "address", js: "address", typ: u(undefined, a(r("AddressSchema"))) },
        { json: "align_min_booking_time", js: "align_min_booking_time", typ: u(undefined, u(true, null)) },
        { json: "autoAcceptAppointment", js: "autoAcceptAppointment", typ: u(undefined, true) },
        { json: "businessShowcaseAliases", js: "businessShowcaseAliases", typ: u(undefined, a(r("BusinessShowcaseAlias"))) },
        { json: "contactName", js: "contactName", typ: u(undefined, u(null, "")) },
        { json: "date_joined", js: "date_joined", typ: u(undefined, Date) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "email", js: "email", typ: u(undefined, "") },
        { json: "eventEditorMinutesTick", js: "eventEditorMinutesTick", typ: u(undefined, 3.14) },
        { json: "fax", js: "fax", typ: u(undefined, a(r("FaxElement"))) },
        { json: "images", js: "images", typ: u(undefined, a("")) },
        { json: "instant_messaging", js: "instant_messaging", typ: u(undefined, a(m("any"))) },
        { json: "isShowcase", js: "isShowcase", typ: u(undefined, true) },
        { json: "language", js: "language", typ: u(undefined, r("LanguageList")) },
        { json: "logo_url", js: "logo_url", typ: u(undefined, u(null, "")) },
        { json: "marketingNotifications", js: "marketingNotifications", typ: u(undefined, r("MarketingNotifications")) },
        { json: "metro", js: "metro", typ: u(undefined, r("Metro")) },
        { json: "min_booking_time", js: "min_booking_time", typ: u(undefined, u(3.14, null)) },
        { json: "mobile", js: "mobile", typ: u(undefined, a(r("FaxElement"))) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "networkID", js: "networkID", typ: u(undefined, u(3.14, null)) },
        { json: "newboEnabledFor", js: "newboEnabledFor", typ: u(undefined, a("")) },
        { json: "paymentMethods", js: "paymentMethods", typ: u(undefined, r("PaymentMethods")) },
        { json: "phone", js: "phone", typ: u(undefined, a(r("FaxElement"))) },
        { json: "phone_mask", js: "phone_mask", typ: u(undefined, u(null, "")) },
        { json: "pricingType", js: "pricingType", typ: u(undefined, r("PricingType")) },
        { json: "revisionVersion", js: "revisionVersion", typ: u(undefined, 3.14) },
        { json: "schedulerTick", js: "schedulerTick", typ: u(undefined, 3.14) },
        { json: "shortName", js: "shortName", typ: u(undefined, u(null, "")) },
        { json: "showAppointmentColor", js: "showAppointmentColor", typ: u(undefined, true) },
        { json: "showAppointmentTooltip", js: "showAppointmentTooltip", typ: u(undefined, true) },
        { json: "showcaseBusinessData", js: "showcaseBusinessData", typ: u(undefined, a(r("ShowcaseBusinessDatum"))) },
        { json: "showcases", js: "showcases", typ: u(undefined, a(r("ShowcaseElement"))) },
        { json: "showResourceWorkStatistics", js: "showResourceWorkStatistics", typ: u(undefined, true) },
        { json: "showWorkerProfession", js: "showWorkerProfession", typ: u(undefined, true) },
        { json: "skipBilling", js: "skipBilling", typ: u(undefined, true) },
        { json: "smsDuplicateFilter", js: "smsDuplicateFilter", typ: u(undefined, r("SmsDuplicateFilter")) },
        { json: "social_network", js: "social_network", typ: u(undefined, a(r("SocialNetworkSchema"))) },
        { json: "timetable", js: "timetable", typ: u(undefined, r("Timetable")) },
        { json: "timezone", js: "timezone", typ: u(undefined, u(null, "")) },
        { json: "verticalTranslation", js: "verticalTranslation", typ: u(undefined, r("VerticalTranslation")) },
        { json: "website", js: "website", typ: u(undefined, u(null, "")) },
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
    "TelemedData": o([
        { json: "active", js: "active", typ: u(undefined, true) },
        { json: "id", js: "id", typ: u(undefined, "") },
    ], "any"),
    "InfoTaxonomy": o([
        { json: "active", js: "active", typ: u(undefined, true) },
        { json: "additionalDurations", js: "additionalDurations", typ: u(undefined, a(r("PurpleAdditionalDuration"))) },
        { json: "additionalPrices", js: "additionalPrices", typ: u(undefined, a(r("PurpleBusinessTaxonomyPrice"))) },
        { json: "additionalProducts", js: "additionalProducts", typ: u(undefined, a(r("PurpleBusinessTaxonomyProduct"))) },
        { json: "additionalTaxonomyExtraId", js: "additionalTaxonomyExtraId", typ: u(undefined, a(m("any"))) },
        { json: "adjacentSameTimeStart", js: "adjacentSameTimeStart", typ: u(undefined, true) },
        { json: "adjacentTaxonomies", js: "adjacentTaxonomies", typ: u(undefined, a(r("PurpleAdjacentTaxonomy"))) },
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
        { json: "dateLimits", js: "dateLimits", typ: u(undefined, a(r("PurpleDateLimit"))) },
        { json: "dateLimitType", js: "dateLimitType", typ: u(undefined, r("DateLimitType")) },
        { json: "designs", js: "designs", typ: u(undefined, a("")) },
        { json: "discounts", js: "discounts", typ: u(undefined, r("Discount")) },
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
        { json: "price", js: "price", typ: u(undefined, r("FluffyPrice")) },
        { json: "priceLink", js: "priceLink", typ: u(undefined, "") },
        { json: "receptionTypes", js: "receptionTypes", typ: u(undefined, a("")) },
        { json: "rooms", js: "rooms", typ: u(undefined, a("")) },
        { json: "showcaseItems", js: "showcaseItems", typ: u(undefined, a(r("PurpleShowcaseItem"))) },
        { json: "showcases", js: "showcases", typ: u(undefined, a(r("PurpleTaxonomyShowcase"))) },
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
    "PurpleAdditionalDuration": o([
        { json: "duration", js: "duration", typ: u(undefined, u(3.14, null)) },
        { json: "level", js: "level", typ: u(undefined, 3.14) },
    ], false),
    "PurpleBusinessTaxonomyPrice": o([
        { json: "amount", js: "amount", typ: u(undefined, "") },
        { json: "currency", js: "currency", typ: r("CurrencyList") },
        { json: "resourceLevel", js: "resourceLevel", typ: 3.14 },
        { json: "stockAmount", js: "stockAmount", typ: u(null, "") },
        { json: "type", js: "type", typ: u(undefined, r("AdditionalPriceType")) },
    ], false),
    "PurpleBusinessTaxonomyProduct": o([
        { json: "extraID", js: "extraID", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "required", js: "required", typ: true },
    ], false),
    "PurpleAdjacentTaxonomy": o([
        { json: "isAnyAvailable", js: "isAnyAvailable", typ: u(undefined, true) },
        { json: "order", js: "order", typ: u(undefined, 3.14) },
        { json: "slotDuration", js: "slotDuration", typ: u(undefined, 3.14) },
        { json: "taxonomyID", js: "taxonomyID", typ: u(undefined, "") },
    ], false),
    "PurpleDateLimit": o([
        { json: "_id", js: "_id", typ: u(undefined, "") },
        { json: "dateLimitFrom", js: "dateLimitFrom", typ: u(undefined, Date) },
        { json: "dateLimitTo", js: "dateLimitTo", typ: u(undefined, Date) },
    ], false),
    "Discount": o([
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
    "FluffyPrice": o([
        { json: "amount", js: "amount", typ: "" },
        { json: "currency", js: "currency", typ: r("CurrencyList") },
        { json: "stockAmount", js: "stockAmount", typ: u(null, "") },
        { json: "type", js: "type", typ: r("AdditionalPriceType") },
    ], false),
    "PurpleShowcaseItem": o([
        { json: "_id", js: "_id", typ: u(undefined, "") },
        { json: "additionalDurations", js: "additionalDurations", typ: u(undefined, a(r("FluffyAdditionalDuration"))) },
        { json: "businessID", js: "businessID", typ: u(undefined, "") },
        { json: "receptionTypes", js: "receptionTypes", typ: u(undefined, a("")) },
        { json: "taxonomyID", js: "taxonomyID", typ: u(undefined, "") },
    ], false),
    "FluffyAdditionalDuration": o([
        { json: "_id", js: "_id", typ: u(undefined, "") },
        { json: "duration", js: "duration", typ: u(undefined, 3.14) },
        { json: "level", js: "level", typ: u(undefined, 3.14) },
    ], false),
    "PurpleTaxonomyShowcase": o([
        { json: "baseBusinessID", js: "baseBusinessID", typ: u(undefined, "") },
        { json: "isBaseNode", js: "isBaseNode", typ: u(undefined, true) },
        { json: "originBusinessID", js: "originBusinessID", typ: u(undefined, "") },
        { json: "showcaseItemID", js: "showcaseItemID", typ: u(undefined, "") },
    ], false),
    "InfoTaxonomiesComplex": o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "taxonomies", js: "taxonomies", typ: u(undefined, a("")) },
    ], "any"),
    "InfoTopServices": o([
        { json: "services", js: "services", typ: u(undefined, a("any")) },
        { json: "status", js: "status", typ: u(undefined, "") },
    ], "any"),
    "InfoWidgetConfiguration": o([
        { json: "additionalName", js: "additionalName", typ: u(undefined, "") },
        { json: "alignmentTaxonomySlots", js: "alignmentTaxonomySlots", typ: u(undefined, true) },
        { json: "allowAutoSelect", js: "allowAutoSelect", typ: u(undefined, true) },
        { json: "allowBookVisitor", js: "allowBookVisitor", typ: u(undefined, true) },
        { json: "allowSkipTimeCheck", js: "allowSkipTimeCheck", typ: u(undefined, true) },
        { json: "analyticsGoogle", js: "analyticsGoogle", typ: u(undefined, r("PurpleAnalyticsGoogle")) },
        { json: "analyticsYandex", js: "analyticsYandex", typ: u(undefined, r("PurpleAnalyticsYandex")) },
        { json: "appointment_confirmation_text", js: "appointment_confirmation_text", typ: u(undefined, "") },
        { json: "appointment_confirmation_title", js: "appointment_confirmation_title", typ: u(undefined, "") },
        { json: "askClientBirthday", js: "askClientBirthday", typ: u(undefined, true) },
        { json: "askClientGender", js: "askClientGender", typ: u(undefined, true) },
        { json: "askClientPassportID", js: "askClientPassportID", typ: u(undefined, true) },
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
        { json: "insuranceClientSupportPhone", js: "insuranceClientSupportPhone", typ: u(undefined, a(r("FaxElement"))) },
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
        { json: "paymentProvider", js: "paymentProvider", typ: u(undefined, r("PurplePaymentProvider")) },
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
        { json: "showStartText", js: "showStartText", typ: u(undefined, true) },
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
        { json: "startTextButton", js: "startTextButton", typ: u(undefined, "") },
        { json: "startTextMessage", js: "startTextMessage", typ: u(undefined, "") },
        { json: "strictSlotCutting", js: "strictSlotCutting", typ: u(undefined, true) },
        { json: "tentativeTTL", js: "tentativeTTL", typ: u(undefined, 3.14) },
        { json: "theme", js: "theme", typ: u(undefined, "") },
        { json: "toggleReminder", js: "toggleReminder", typ: u(undefined, true) },
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
    "PurpleAnalyticsGoogle": o([
        { json: "active", js: "active", typ: u(undefined, true) },
        { json: "key", js: "key", typ: u(undefined, "") },
    ], false),
    "PurpleAnalyticsYandex": o([
        { json: "active", js: "active", typ: u(undefined, true) },
        { json: "key", js: "key", typ: u(undefined, "") },
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
        { json: "businesses", js: "businesses", typ: a(r("NetworkConfigurationBusiness")) },
        { json: "defaultServiceID", js: "defaultServiceID", typ: u(null, "") },
        { json: "showBranchSelector", js: "showBranchSelector", typ: true },
        { json: "showDefaultService", js: "showDefaultService", typ: true },
        { json: "showOnMap", js: "showOnMap", typ: true },
        { json: "source", js: "source", typ: "" },
    ], false),
    "NetworkConfigurationBusiness": o([
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
        { json: "business", js: "business", typ: r("HilariousBusiness") },
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
    "HilariousBusiness": o([
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
        { json: "business", js: "business", typ: r("BusinessClass") },
        { json: "freeSms", js: "freeSms", typ: u(undefined, 3.14) },
        { json: "monthlyFreeSms", js: "monthlyFreeSms", typ: u(undefined, 3.14) },
        { json: "networks", js: "networks", typ: u(undefined, a(r("NetworkElement"))) },
        { json: "profiles", js: "profiles", typ: u(undefined, a(m("any"))) },
        { json: "top_services", js: "top_services", typ: u(undefined, r("ResultTopServices")) },
        { json: "useDefaultSmsTemplate", js: "useDefaultSmsTemplate", typ: u(undefined, true) },
        { json: "yandexFeedType", js: "yandexFeedType", typ: u(undefined, r("YandexFeedType")) },
    ], "any"),
    "BusinessClass": o([
        { json: "active", js: "active", typ: u(undefined, true) },
        { json: "additionalSettings", js: "additionalSettings", typ: u(undefined, r("BusinessAdditionalSettings")) },
        { json: "allowCategoryBooking", js: "allowCategoryBooking", typ: u(undefined, true) },
        { json: "backoffice_configuration", js: "backoffice_configuration", typ: u(undefined, r("BusinessBackofficeConfigurationObject")) },
        { json: "backofficeConfiguration", js: "backofficeConfiguration", typ: u(undefined, r("BusinessBackofficeConfiguration")) },
        { json: "backofficeType", js: "backofficeType", typ: u(undefined, r("BackofficeType")) },
        { json: "cabinets", js: "cabinets", typ: u(undefined, a(r("BusinessCabinet"))) },
        { json: "cabinetsEnabled", js: "cabinetsEnabled", typ: u(undefined, true) },
        { json: "callback_widget_configuration", js: "callback_widget_configuration", typ: u(undefined, r("BusinessCallbackWidgetConfiguration")) },
        { json: "consumables", js: "consumables", typ: u(undefined, a(r("BusinessConsumable"))) },
        { json: "created_on", js: "created_on", typ: u(undefined, Date) },
        { json: "defaultFilteredWorkers", js: "defaultFilteredWorkers", typ: u(undefined, a("")) },
        { json: "departments", js: "departments", typ: u(undefined, a(r("BusinessDepartment"))) },
        { json: "designs", js: "designs", typ: u(undefined, a(m("any"))) },
        { json: "extraID", js: "extraID", typ: u(undefined, "") },
        { json: "flatTaxonomyDisplay", js: "flatTaxonomyDisplay", typ: u(undefined, true) },
        { json: "general_info", js: "general_info", typ: r("BusinessInfo") },
        { json: "group", js: "group", typ: u(undefined, r("Group")) },
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "integration_data", js: "integration_data", typ: u(undefined, m("any")) },
        { json: "maxFilterDateDuration", js: "maxFilterDateDuration", typ: u(undefined, 3.14) },
        { json: "mini_widget_configuration", js: "mini_widget_configuration", typ: r("BusinessMiniWidgetConfiguration") },
        { json: "mobileData", js: "mobileData", typ: u(undefined, a("any")) },
        { json: "notifications", js: "notifications", typ: u(undefined, a("any")) },
        { json: "resources", js: "resources", typ: a(r("Resource")) },
        { json: "stateLevelHolidaysNotWorking", js: "stateLevelHolidaysNotWorking", typ: u(undefined, true) },
        { json: "taxonomies", js: "taxonomies", typ: a(r("BusinessTaxonomy")) },
        { json: "taxonomiesComplex", js: "taxonomiesComplex", typ: u(undefined, a(r("BusinessTaxonomiesComplex"))) },
        { json: "taxonomy_tree_capacity", js: "taxonomy_tree_capacity", typ: u(undefined, a(m("any"))) },
        { json: "top_services", js: "top_services", typ: u(undefined, r("BusinessTopServices")) },
        { json: "vertical", js: "vertical", typ: u(undefined, "") },
        { json: "widget_configuration", js: "widget_configuration", typ: r("BusinessWidgetConfiguration") },
        { json: "yandexFeedType", js: "yandexFeedType", typ: u(undefined, "") },
    ], false),
    "BusinessAdditionalSettings": o([
        { json: "appointmentExtensionAmount", js: "appointmentExtensionAmount", typ: u(undefined, 3.14) },
        { json: "appointmentExtensionType", js: "appointmentExtensionType", typ: u(undefined, r("AppointmentExtensionType")) },
    ], "any"),
    "BusinessBackofficeConfiguration": o([
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
        { json: "enableInvoice", js: "enableInvoice", typ: u(undefined, true) },
        { json: "enableMasterImportance", js: "enableMasterImportance", typ: u(undefined, true) },
        { json: "enablePhoneNationalMode", js: "enablePhoneNationalMode", typ: u(undefined, true) },
        { json: "enablePrintingReportRecordsScreen", js: "enablePrintingReportRecordsScreen", typ: u(undefined, true) },
        { json: "enableServiceTimeLimit", js: "enableServiceTimeLimit", typ: u(undefined, true) },
        { json: "enableSourceChoice", js: "enableSourceChoice", typ: u(undefined, true) },
        { json: "enableTaxonomyChildrenAgeCheck", js: "enableTaxonomyChildrenAgeCheck", typ: u(undefined, true) },
        { json: "enableTelemed", js: "enableTelemed", typ: u(undefined, true) },
        { json: "exportToExcelRemovedClients", js: "exportToExcelRemovedClients", typ: u(undefined, true) },
        { json: "feedbackCustomerPortalMessage", js: "feedbackCustomerPortalMessage", typ: u(undefined, "") },
        { json: "feedbackCustomerPortalThankYouMessage", js: "feedbackCustomerPortalThankYouMessage", typ: u(undefined, "") },
        { json: "feedbackCustomerPortalTitle", js: "feedbackCustomerPortalTitle", typ: u(undefined, "") },
        { json: "feedBackMinRating", js: "feedBackMinRating", typ: u(undefined, r("FeedBackMinRating")) },
        { json: "finId", js: "finId", typ: u(undefined, "") },
        { json: "finName", js: "finName", typ: u(undefined, "") },
        { json: "hideCustomerPortalFooter", js: "hideCustomerPortalFooter", typ: u(undefined, true) },
        { json: "highlightedResource", js: "highlightedResource", typ: u(undefined, true) },
        { json: "invoiceCondition", js: "invoiceCondition", typ: u(undefined, a(r("AppointmentClientPayment"))) },
        { json: "invoiceProvider", js: "invoiceProvider", typ: u(undefined, r("InvoiceProvider")) },
        { json: "manualExceptionSupport", js: "manualExceptionSupport", typ: u(undefined, true) },
        { json: "noInternetAlert", js: "noInternetAlert", typ: u(undefined, true) },
        { json: "pastTimeEdit", js: "pastTimeEdit", typ: u(undefined, 3.14) },
        { json: "paymentProvider", js: "paymentProvider", typ: u(undefined, r("FluffyPaymentProvider")) },
        { json: "readonlyResourceSchedule", js: "readonlyResourceSchedule", typ: u(undefined, true) },
        { json: "resourceSurnameFirst", js: "resourceSurnameFirst", typ: u(undefined, true) },
        { json: "resourceTimetableType", js: "resourceTimetableType", typ: u(undefined, r("ResourceTimetableType")) },
        { json: "revisionVersion", js: "revisionVersion", typ: u(undefined, 3.14) },
        { json: "schduleWeekViewIsDefault", js: "schduleWeekViewIsDefault", typ: u(undefined, true) },
        { json: "scheduleDefaultWorkersLimit", js: "scheduleDefaultWorkersLimit", typ: u(undefined, 3.14) },
        { json: "scheduleDefaultWorkersLimitDay", js: "scheduleDefaultWorkersLimitDay", typ: u(undefined, u(3.14, null)) },
        { json: "scheduleDefaultWorkersLimitWeek", js: "scheduleDefaultWorkersLimitWeek", typ: u(undefined, u(3.14, null)) },
        { json: "scheduleEnableDayIntervals", js: "scheduleEnableDayIntervals", typ: u(undefined, true) },
        { json: "schedulerWeekViewType", js: "schedulerWeekViewType", typ: u(undefined, r("SchedulerWeekViewType")) },
        { json: "scheduleSplitDayTimeIntervals", js: "scheduleSplitDayTimeIntervals", typ: u(undefined, a(r("ScheduleSplitDayTimeInterval"))) },
        { json: "scheduleWorkerHours", js: "scheduleWorkerHours", typ: u(undefined, true) },
        { json: "showAdditionalFields", js: "showAdditionalFields", typ: u(undefined, true) },
        { json: "showAddress", js: "showAddress", typ: u(undefined, true) },
        { json: "showBirthDate", js: "showBirthDate", typ: u(undefined, true) },
        { json: "showClientAddress", js: "showClientAddress", typ: u(undefined, true) },
        { json: "showClientAppear", js: "showClientAppear", typ: u(undefined, true) },
        { json: "showClientAppearOnSchedule", js: "showClientAppearOnSchedule", typ: u(undefined, true) },
        { json: "showClientBirthdayFilter", js: "showClientBirthdayFilter", typ: u(undefined, true) },
        { json: "showClientContractNumber", js: "showClientContractNumber", typ: u(undefined, true) },
        { json: "showClientImage", js: "showClientImage", typ: u(undefined, true) },
        { json: "showClientPayment", js: "showClientPayment", typ: u(undefined, true) },
        { json: "showCreatedUsername", js: "showCreatedUsername", typ: u(undefined, true) },
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
        { json: "showTaxonomyNameExtraId", js: "showTaxonomyNameExtraId", typ: u(undefined, true) },
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
        { json: "stateLevelHolidays", js: "stateLevelHolidays", typ: u(undefined, u(a(m("any")), null)) },
        { json: "stateLevelHolidaysNotWorking", js: "stateLevelHolidaysNotWorking", typ: u(undefined, true) },
        { json: "taxonomyChildrenMaxAge", js: "taxonomyChildrenMaxAge", typ: u(undefined, 3.14) },
        { json: "telemedProvider", js: "telemedProvider", typ: u(undefined, r("TelemedProvider")) },
        { json: "useAdditionalDurations", js: "useAdditionalDurations", typ: u(undefined, true) },
        { json: "useAdjacentTaxonomies", js: "useAdjacentTaxonomies", typ: u(undefined, true) },
        { json: "useAdjacentTaxonomiesSlotSplitting", js: "useAdjacentTaxonomiesSlotSplitting", typ: u(undefined, true) },
        { json: "useGtAppMethod", js: "useGtAppMethod", typ: u(undefined, true) },
        { json: "workWeekEnd", js: "workWeekEnd", typ: u(undefined, 3.14) },
        { json: "workWeekStart", js: "workWeekStart", typ: u(undefined, 3.14) },
    ], false),
    "ScheduleSplitDayTimeInterval": o([
        { json: "endHour", js: "endHour", typ: u(undefined, 3.14) },
        { json: "endMinute", js: "endMinute", typ: u(undefined, 3.14) },
        { json: "schedulerTick", js: "schedulerTick", typ: u(undefined, 3.14) },
        { json: "selected", js: "selected", typ: u(undefined, true) },
        { json: "startHour", js: "startHour", typ: u(undefined, 3.14) },
        { json: "startMinute", js: "startMinute", typ: u(undefined, 3.14) },
        { json: "title", js: "title", typ: u(undefined, "") },
    ], false),
    "BusinessBackofficeConfigurationObject": o([
        { json: "enableMasterImportance", js: "enableMasterImportance", typ: u(undefined, true) },
        { json: "resourceTimetableType", js: "resourceTimetableType", typ: u(undefined, r("ResourceTimetableType")) },
    ], "any"),
    "BusinessCabinet": o([
        { json: "active", js: "active", typ: u(undefined, true) },
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], false),
    "BusinessCallbackWidgetConfiguration": o([
        { json: "title1", js: "title1", typ: u(undefined, "") },
        { json: "title2", js: "title2", typ: u(undefined, "") },
    ], "any"),
    "BusinessConsumable": o([
        { json: "extraID", js: "extraID", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "quantity", js: "quantity", typ: 3.14 },
    ], "any"),
    "BusinessDepartment": o([
        { json: "id", js: "id", typ: "" },
        { json: "id_", js: "id_", typ: u(undefined, 3.14) },
        { json: "name", js: "name", typ: "" },
    ], false),
    "BusinessMiniWidgetConfiguration": o([
        { json: "fields", js: "fields", typ: u(undefined, a(r("FieldElement"))) },
        { json: "title1", js: "title1", typ: u(undefined, "") },
        { json: "title2", js: "title2", typ: u(undefined, "") },
    ], "any"),
    "BusinessTaxonomy": o([
        { json: "active", js: "active", typ: u(undefined, true) },
        { json: "additionalDurations", js: "additionalDurations", typ: u(undefined, a(r("TentacledAdditionalDuration"))) },
        { json: "additionalPrices", js: "additionalPrices", typ: u(undefined, a(r("FluffyBusinessTaxonomyPrice"))) },
        { json: "additionalProducts", js: "additionalProducts", typ: u(undefined, a(r("FluffyBusinessTaxonomyProduct"))) },
        { json: "additionalTaxonomyExtraId", js: "additionalTaxonomyExtraId", typ: u(undefined, a(m("any"))) },
        { json: "adjacentSameTimeStart", js: "adjacentSameTimeStart", typ: u(undefined, true) },
        { json: "adjacentTaxonomies", js: "adjacentTaxonomies", typ: u(undefined, a(r("FluffyAdjacentTaxonomy"))) },
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
        { json: "confirmationEmailAlert", js: "confirmationEmailAlert", typ: u(undefined, "") },
        { json: "confirmationSmsAlert", js: "confirmationSmsAlert", typ: u(undefined, "") },
        { json: "dateLimits", js: "dateLimits", typ: u(undefined, a(r("FluffyDateLimit"))) },
        { json: "dateLimitType", js: "dateLimitType", typ: u(undefined, r("DateLimitType")) },
        { json: "designs", js: "designs", typ: u(undefined, a("")) },
        { json: "disableClientSmsNotifications", js: "disableClientSmsNotifications", typ: u(undefined, true) },
        { json: "discounts", js: "discounts", typ: u(undefined, a(r("Discount"))) },
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
        { json: "isTelemed", js: "isTelemed", typ: u(undefined, true) },
        { json: "lastModified", js: "lastModified", typ: u(undefined, Date) },
        { json: "leaves", js: "leaves", typ: u(undefined, a("")) },
        { json: "manualChanges", js: "manualChanges", typ: u(undefined, true) },
        { json: "newTaxonomy", js: "newTaxonomy", typ: u(undefined, true) },
        { json: "onlineMode", js: "onlineMode", typ: u(undefined, r("OnlineMode")) },
        { json: "onlyAfterTaxonomies", js: "onlyAfterTaxonomies", typ: u(undefined, a("")) },
        { json: "order", js: "order", typ: u(undefined, 3.14) },
        { json: "parallelTaxonomies", js: "parallelTaxonomies", typ: u(undefined, a("")) },
        { json: "popularity", js: "popularity", typ: u(undefined, 3.14) },
        { json: "price", js: "price", typ: u(undefined, r("TentacledPrice")) },
        { json: "priceLink", js: "priceLink", typ: u(undefined, "") },
        { json: "receptionTypes", js: "receptionTypes", typ: u(undefined, a("")) },
        { json: "rooms", js: "rooms", typ: u(undefined, a("")) },
        { json: "showcaseItems", js: "showcaseItems", typ: u(undefined, a(r("FluffyShowcaseItem"))) },
        { json: "showcases", js: "showcases", typ: u(undefined, a(r("FluffyTaxonomyShowcase"))) },
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
    "TentacledAdditionalDuration": o([
        { json: "duration", js: "duration", typ: u(undefined, u(3.14, null)) },
        { json: "level", js: "level", typ: u(undefined, 3.14) },
    ], false),
    "FluffyBusinessTaxonomyPrice": o([
        { json: "amount", js: "amount", typ: u(undefined, "") },
        { json: "currency", js: "currency", typ: r("CurrencyList") },
        { json: "resourceLevel", js: "resourceLevel", typ: 3.14 },
        { json: "stockAmount", js: "stockAmount", typ: u(null, "") },
        { json: "type", js: "type", typ: u(undefined, r("AdditionalPriceType")) },
    ], false),
    "FluffyBusinessTaxonomyProduct": o([
        { json: "extraID", js: "extraID", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "required", js: "required", typ: true },
    ], false),
    "FluffyAdjacentTaxonomy": o([
        { json: "isAnyAvailable", js: "isAnyAvailable", typ: u(undefined, true) },
        { json: "order", js: "order", typ: u(undefined, 3.14) },
        { json: "slotDuration", js: "slotDuration", typ: u(undefined, 3.14) },
        { json: "taxonomyID", js: "taxonomyID", typ: u(undefined, "") },
    ], false),
    "FluffyDateLimit": o([
        { json: "_id", js: "_id", typ: u(undefined, "") },
        { json: "dateLimitFrom", js: "dateLimitFrom", typ: u(undefined, Date) },
        { json: "dateLimitTo", js: "dateLimitTo", typ: u(undefined, Date) },
    ], false),
    "TentacledPrice": o([
        { json: "amount", js: "amount", typ: "" },
        { json: "currency", js: "currency", typ: r("CurrencyList") },
        { json: "stockAmount", js: "stockAmount", typ: u(null, "") },
        { json: "type", js: "type", typ: r("AdditionalPriceType") },
    ], false),
    "FluffyShowcaseItem": o([
        { json: "_id", js: "_id", typ: u(undefined, "") },
        { json: "additionalDurations", js: "additionalDurations", typ: u(undefined, a(r("StickyAdditionalDuration"))) },
        { json: "businessID", js: "businessID", typ: u(undefined, "") },
        { json: "receptionTypes", js: "receptionTypes", typ: u(undefined, a("")) },
        { json: "taxonomyID", js: "taxonomyID", typ: u(undefined, "") },
    ], false),
    "StickyAdditionalDuration": o([
        { json: "_id", js: "_id", typ: u(undefined, "") },
        { json: "duration", js: "duration", typ: u(undefined, 3.14) },
        { json: "level", js: "level", typ: u(undefined, 3.14) },
    ], false),
    "FluffyTaxonomyShowcase": o([
        { json: "baseBusinessID", js: "baseBusinessID", typ: u(undefined, "") },
        { json: "isBaseNode", js: "isBaseNode", typ: u(undefined, true) },
        { json: "originBusinessID", js: "originBusinessID", typ: u(undefined, "") },
        { json: "showcaseItemID", js: "showcaseItemID", typ: u(undefined, "") },
    ], false),
    "BusinessTaxonomiesComplex": o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "taxonomies", js: "taxonomies", typ: u(undefined, a("")) },
    ], "any"),
    "BusinessTopServices": o([
        { json: "services", js: "services", typ: u(undefined, a("any")) },
        { json: "status", js: "status", typ: u(undefined, "") },
    ], "any"),
    "BusinessWidgetConfiguration": o([
        { json: "additionalName", js: "additionalName", typ: u(undefined, "") },
        { json: "alignmentTaxonomySlots", js: "alignmentTaxonomySlots", typ: u(undefined, true) },
        { json: "allowAutoSelect", js: "allowAutoSelect", typ: u(undefined, true) },
        { json: "allowBookVisitor", js: "allowBookVisitor", typ: u(undefined, true) },
        { json: "allowSkipTimeCheck", js: "allowSkipTimeCheck", typ: u(undefined, true) },
        { json: "analyticsGoogle", js: "analyticsGoogle", typ: u(undefined, r("FluffyAnalyticsGoogle")) },
        { json: "analyticsYandex", js: "analyticsYandex", typ: u(undefined, r("FluffyAnalyticsYandex")) },
        { json: "appointment_confirmation_text", js: "appointment_confirmation_text", typ: u(undefined, "") },
        { json: "appointment_confirmation_title", js: "appointment_confirmation_title", typ: u(undefined, "") },
        { json: "askClientBirthday", js: "askClientBirthday", typ: u(undefined, true) },
        { json: "askClientGender", js: "askClientGender", typ: u(undefined, true) },
        { json: "askClientPassportID", js: "askClientPassportID", typ: u(undefined, true) },
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
        { json: "insuranceClientSupportPhone", js: "insuranceClientSupportPhone", typ: u(undefined, a(r("FaxElement"))) },
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
        { json: "paymentProvider", js: "paymentProvider", typ: u(undefined, r("FluffyPaymentProvider")) },
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
        { json: "showStartText", js: "showStartText", typ: u(undefined, true) },
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
        { json: "startTextButton", js: "startTextButton", typ: u(undefined, "") },
        { json: "startTextMessage", js: "startTextMessage", typ: u(undefined, "") },
        { json: "strictSlotCutting", js: "strictSlotCutting", typ: u(undefined, true) },
        { json: "tentativeTTL", js: "tentativeTTL", typ: u(undefined, 3.14) },
        { json: "theme", js: "theme", typ: u(undefined, "") },
        { json: "toggleReminder", js: "toggleReminder", typ: u(undefined, true) },
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
    "FluffyAnalyticsGoogle": o([
        { json: "active", js: "active", typ: u(undefined, true) },
        { json: "key", js: "key", typ: u(undefined, "") },
    ], false),
    "FluffyAnalyticsYandex": o([
        { json: "active", js: "active", typ: u(undefined, true) },
        { json: "key", js: "key", typ: u(undefined, "") },
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
    "NetworkElement": o([
        { json: "address", js: "address", typ: u(undefined, r("Address")) },
        { json: "businessName", js: "businessName", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "internalID", js: "internalID", typ: "" },
    ], "any"),
    "Address": o([
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
        { json: "metroStations", js: "metroStations", typ: u(undefined, a(r("PurpleMetroStation"))) },
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
    "PurpleMetroStation": o([
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
        { json: "find_or_create_client", js: "find_or_create_client", typ: r("FindOrCreateClient") },
        { json: "update_client", js: "update_client", typ: r("UpdateClient") },
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
        { json: "business", js: "business", typ: r("AmbitiousBusiness") },
        { json: "client", js: "client", typ: r("ClientClass") },
        { json: "profile", js: "profile", typ: u(undefined, r("ParamsProfile")) },
        { json: "skipEmailCheck", js: "skipEmailCheck", typ: u(undefined, true) },
        { json: "skipProfileUpdate", js: "skipProfileUpdate", typ: u(undefined, true) },
    ], false),
    "AmbitiousBusiness": o([
        { json: "id", js: "id", typ: u(3.14, "") },
    ], false),
    "ClientClass": o([
        { json: "address", js: "address", typ: u(undefined, "") },
        { json: "birthday", js: "birthday", typ: u(undefined, u(m("any"), null, "")) },
        { json: "blackList", js: "blackList", typ: u(undefined, true) },
        { json: "childrenClients", js: "childrenClients", typ: u(undefined, a(r("ChildrenClient"))) },
        { json: "clientCardCreationDate", js: "clientCardCreationDate", typ: u(undefined, "") },
        { json: "clientCardNumber", js: "clientCardNumber", typ: u(undefined, "") },
        { json: "clientContractNumber", js: "clientContractNumber", typ: u(undefined, "") },
        { json: "creatorProfileID", js: "creatorProfileID", typ: u(undefined, u(null, "")) },
        { json: "creatorProfileName", js: "creatorProfileName", typ: u(undefined, u(null, "")) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "discountCode", js: "discountCode", typ: u(undefined, "") },
        { json: "driverLicense", js: "driverLicense", typ: u(undefined, u(null, "")) },
        { json: "email", js: "email", typ: u(undefined, a("")) },
        { json: "extraFields", js: "extraFields", typ: u(undefined, a(r("ClientExtraField"))) },
        { json: "extraID", js: "extraID", typ: u(undefined, "") },
        { json: "favResources", js: "favResources", typ: u(undefined, a(r("FavResource"))) },
        { json: "fax", js: "fax", typ: u(undefined, "") },
        { json: "fromSms", js: "fromSms", typ: u(undefined, u(true, "")) },
        { json: "fullAddress", js: "fullAddress", typ: u(undefined, a(r("AddressSchema"))) },
        { json: "houseNumber", js: "houseNumber", typ: u(undefined, "") },
        { json: "icon_url", js: "icon_url", typ: u(undefined, "") },
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "insuranceCompany", js: "insuranceCompany", typ: u(undefined, "") },
        { json: "insuranceNumber", js: "insuranceNumber", typ: u(undefined, "") },
        { json: "integrationData", js: "integrationData", typ: u(undefined, r("IntegrationDataClass")) },
        { json: "isLazy", js: "isLazy", typ: u(undefined, true) },
        { json: "israelCity", js: "israelCity", typ: u(undefined, u(a("any"), true, 3.14, 0, null, r("IsraelCityObject"), "")) },
        { json: "isVIP", js: "isVIP", typ: u(undefined, true) },
        { json: "kupatHolim", js: "kupatHolim", typ: u(undefined, u(a("any"), true, 3.14, 0, null, r("KupatHolimObject"), "")) },
        { json: "language", js: "language", typ: u(undefined, r("LanguageList")) },
        { json: "lazyResolvedDate", js: "lazyResolvedDate", typ: u(undefined, "") },
        { json: "locality", js: "locality", typ: u(undefined, "") },
        { json: "loyaltyInfo", js: "loyaltyInfo", typ: u(undefined, r("LoyaltyInfo")) },
        { json: "middleName", js: "middleName", typ: u(undefined, u(null, "")) },
        { json: "name", js: "name", typ: "" },
        { json: "passportDate", js: "passportDate", typ: u(undefined, "") },
        { json: "passportId", js: "passportId", typ: u(undefined, "") },
        { json: "passportIssued", js: "passportIssued", typ: u(undefined, "") },
        { json: "passportSeries", js: "passportSeries", typ: u(undefined, "") },
        { json: "phone", js: "phone", typ: a(r("FaxElement")) },
        { json: "receiveSmsAfterService", js: "receiveSmsAfterService", typ: u(undefined, true) },
        { json: "sex", js: "sex", typ: u(undefined, r("Sex")) },
        { json: "skipMarketingNotifications", js: "skipMarketingNotifications", typ: u(undefined, true) },
        { json: "skipNotifications", js: "skipNotifications", typ: u(undefined, true) },
        { json: "snils", js: "snils", typ: u(undefined, "") },
        { json: "status", js: "status", typ: u(undefined, r("ResourceStatus")) },
        { json: "surname", js: "surname", typ: "" },
        { json: "taxiPark", js: "taxiPark", typ: u(undefined, u(null, "")) },
        { json: "taxiParkMemberCount", js: "taxiParkMemberCount", typ: u(undefined, u(3.14, null, "")) },
        { json: "twoFAUserID", js: "twoFAUserID", typ: u(undefined, "") },
        { json: "workPlace", js: "workPlace", typ: u(undefined, "") },
    ], false),
    "ChildrenClient": o([
        { json: "clientID", js: "clientID", typ: "" },
        { json: "extraID", js: "extraID", typ: u(undefined, "") },
        { json: "middleName", js: "middleName", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "surname", js: "surname", typ: u(undefined, "") },
    ], false),
    "ClientExtraField": o([
        { json: "fieldID", js: "fieldID", typ: "" },
        { json: "fieldName", js: "fieldName", typ: "" },
        { json: "value", js: "value", typ: u(undefined, u(true, 3.14, m("any"), null, "")) },
    ], false),
    "FavResource": o([
        { json: "businessID", js: "businessID", typ: 3.14 },
        { json: "networkID", js: "networkID", typ: "" },
        { json: "resourceID", js: "resourceID", typ: "" },
    ], false),
    "IntegrationDataClass": o([
        { json: "transactionID", js: "transactionID", typ: "" },
    ], false),
    "IsraelCityObject": o([
        { json: "cityId", js: "cityId", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "KupatHolimObject": o([
        { json: "kupatHolimId", js: "kupatHolimId", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "LoyaltyInfo": o([
        { json: "annualTurnover", js: "annualTurnover", typ: u(undefined, 3.14) },
        { json: "bonusPoints", js: "bonusPoints", typ: u(undefined, 3.14) },
        { json: "cardNumber", js: "cardNumber", typ: u(undefined, "") },
        { json: "presents", js: "presents", typ: u(undefined, a(r("Present"))) },
        { json: "purchases", js: "purchases", typ: u(undefined, a(r("Purchase"))) },
        { json: "status", js: "status", typ: u(undefined, "") },
    ], false),
    "Present": o([
        { json: "code", js: "code", typ: u(undefined, "") },
        { json: "extraID", js: "extraID", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "status", js: "status", typ: u(undefined, r("PresentStatus")) },
    ], "any"),
    "Purchase": o([
        { json: "active", js: "active", typ: u(undefined, true) },
        { json: "expirationDate", js: "expirationDate", typ: u(undefined, "") },
        { json: "free", js: "free", typ: u(undefined, true) },
        { json: "goodID", js: "goodID", typ: u(undefined, "") },
        { json: "price", js: "price", typ: u(undefined, 3.14) },
        { json: "transactionID", js: "transactionID", typ: u(undefined, "") },
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
        { json: "business", js: "business", typ: r("CunningBusiness") },
        { json: "client", js: "client", typ: r("ClientClass") },
        { json: "documents", js: "documents", typ: u(undefined, "") },
        { json: "profile", js: "profile", typ: u(undefined, r("PurpleProfile")) },
        { json: "source", js: "source", typ: u(undefined, r("Source")) },
    ], "any"),
    "CunningBusiness": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "PurpleProfile": o([
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
        { json: "business", js: "business", typ: r("MagentaBusiness") },
        { json: "client", js: "client", typ: u(undefined, r("ClientClass")) },
        { json: "network", js: "network", typ: u(undefined, r("StickyNetwork")) },
        { json: "skipEmailCheck", js: "skipEmailCheck", typ: u(undefined, true) },
        { json: "skipProfileUpdate", js: "skipProfileUpdate", typ: u(undefined, true) },
    ], false),
    "MagentaBusiness": o([
        { json: "id", js: "id", typ: u(3.14, "") },
    ], false),
    "StickyNetwork": o([
        { json: "id", js: "id", typ: u(undefined, u(3.14, "")) },
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
        { json: "business", js: "business", typ: u(undefined, r("FriskyBusiness")) },
        { json: "client", js: "client", typ: r("ClientClass") },
        { json: "documents", js: "documents", typ: u(undefined, a("any")) },
        { json: "profile", js: "profile", typ: u(undefined, r("FluffyProfile")) },
    ], "any"),
    "FriskyBusiness": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "FluffyProfile": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "UpdateClient": o([
        { json: "request", js: "request", typ: r("ClientUpdateClientRequest") },
        { json: "response", js: "response", typ: r("ClientUpdateClientResponse") },
    ], false),
    "ClientUpdateClientRequest": o([
        { json: "cred", js: "cred", typ: u(undefined, r("Cred")) },
        { json: "id", js: "id", typ: u(3.14, "") },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "method", js: "method", typ: "" },
        { json: "params", js: "params", typ: r("ClientUpdateClientRequestParams") },
    ], false),
    "ClientUpdateClientRequestParams": o([
        { json: "business", js: "business", typ: r("MischievousBusiness") },
        { json: "client", js: "client", typ: r("ClientClass") },
        { json: "network", js: "network", typ: u(undefined, r("IndigoNetwork")) },
    ], false),
    "MischievousBusiness": o([
        { json: "id", js: "id", typ: u(3.14, "") },
    ], false),
    "IndigoNetwork": o([
        { json: "id", js: "id", typ: u(undefined, u(3.14, "")) },
    ], false),
    "ClientUpdateClientResponse": o([
        { json: "result", js: "result", typ: u(undefined, r("ClientUpdateClientResponseResult")) },
        { json: "error", js: "error", typ: u(undefined, r("ClientUpdateClientResponseError")) },
        { json: "id", js: "id", typ: u(undefined, 3.14) },
        { json: "jsonrpc", js: "jsonrpc", typ: u(undefined, "") },
    ], "any"),
    "ClientUpdateClientResponseError": o([
        { json: "code", js: "code", typ: 3.14 },
        { json: "data", js: "data", typ: u(undefined, "") },
        { json: "message", js: "message", typ: "" },
    ], "any"),
    "ClientUpdateClientResponseResult": o([
        { json: "added_document", js: "added_document", typ: u(undefined, m("any")) },
        { json: "success", js: "success", typ: true },
    ], "any"),
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
        { json: "business", js: "business", typ: r("BraggadociousBusiness") },
        { json: "resources", js: "resources", typ: a("") },
        { json: "taxonomy", js: "taxonomy", typ: r("PurpleTaxonomy") },
    ], false),
    "BraggadociousBusiness": o([
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
        { json: "business", js: "business", typ: r("Business1") },
        { json: "duration", js: "duration", typ: 3.14 },
        { json: "durations", js: "durations", typ: a(3.14) },
        { json: "resources", js: "resources", typ: a("") },
        { json: "taxonomy", js: "taxonomy", typ: r("TentacledTaxonomy") },
    ], false),
    "Business1": o([
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
        { json: "business", js: "business", typ: r("CracSlotsRequestBusinessParams") },
        { json: "filters", js: "filters", typ: r("CracSlotsGetCracDistributedResourcesAndRoomsRequestFilters") },
    ], false),
    "CracSlotsRequestBusinessParams": o([
        { json: "general_info", js: "general_info", typ: r("GeneralInfo") },
        { json: "id", js: "id", typ: "" },
        { json: "widget_configuration", js: "widget_configuration", typ: r("PurpleWidgetConfiguration") },
    ], false),
    "GeneralInfo": o([
        { json: "timezone", js: "timezone", typ: "" },
    ], false),
    "PurpleWidgetConfiguration": o([
        { json: "cracServer", js: "cracServer", typ: "" },
        { json: "displaySlotSize", js: "displaySlotSize", typ: u(undefined, 3.14) },
        { json: "hideGraySlots", js: "hideGraySlots", typ: u(undefined, true) },
    ], false),
    "CracSlotsGetCracDistributedResourcesAndRoomsRequestFilters": o([
        { json: "date", js: "date", typ: r("PurpleDate") },
        { json: "resources", js: "resources", typ: a(r("CracSlotsGetCracDistributedResourcesAndRoomsRequestResourceFilter")) },
        { json: "rooms", js: "rooms", typ: a("") },
        { json: "taxonomies", js: "taxonomies", typ: a("") },
    ], false),
    "PurpleDate": o([
        { json: "from", js: "from", typ: "" },
        { json: "to", js: "to", typ: "" },
    ], false),
    "CracSlotsGetCracDistributedResourcesAndRoomsRequestResourceFilter": o([
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
        { json: "business", js: "business", typ: r("CracSlotsRequestBusinessParams") },
        { json: "filters", js: "filters", typ: r("CracSlotsGetCracInsuranceResourcesAndRoomsRequestFilters") },
    ], false),
    "CracSlotsGetCracInsuranceResourcesAndRoomsRequestFilters": o([
        { json: "date", js: "date", typ: r("FluffyDate") },
        { json: "insuranceID", js: "insuranceID", typ: "" },
        { json: "resources", js: "resources", typ: a(r("CracSlotsGetCracInsuranceResourcesAndRoomsRequestResourceFilter")) },
        { json: "rooms", js: "rooms", typ: a("") },
    ], false),
    "FluffyDate": o([
        { json: "from", js: "from", typ: "" },
        { json: "to", js: "to", typ: "" },
    ], false),
    "CracSlotsGetCracInsuranceResourcesAndRoomsRequestResourceFilter": o([
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
        { json: "business", js: "business", typ: r("CracSlotsRequestBusinessParams") },
        { json: "filters", js: "filters", typ: r("CracSlotsGetCracResourcesAndRoomsRequestFilters") },
    ], false),
    "CracSlotsGetCracResourcesAndRoomsRequestFilters": o([
        { json: "date", js: "date", typ: r("TentacledDate") },
        { json: "resources", js: "resources", typ: a(r("CracSlotsGetCracResourcesAndRoomsRequestResourceFilter")) },
        { json: "rooms", js: "rooms", typ: a("") },
        { json: "taxonomies", js: "taxonomies", typ: a("") },
    ], false),
    "TentacledDate": o([
        { json: "from", js: "from", typ: Date },
        { json: "to", js: "to", typ: Date },
    ], false),
    "CracSlotsGetCracResourcesAndRoomsRequestResourceFilter": o([
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
        { json: "slots", js: "slots", typ: a(r("CracDaySchedule")) },
    ], false),
    "CracDaySchedule": o([
        { json: "date", js: "date", typ: "" },
        { json: "resources", js: "resources", typ: a(r("SlotResource")) },
        { json: "rooms", js: "rooms", typ: a(m("any")) },
    ], false),
    "SlotResource": o([
        { json: "cutSlots", js: "cutSlots", typ: a(r("CracCutSlot")) },
        { json: "resourceId", js: "resourceId", typ: "" },
    ], false),
    "CracCutSlot": o([
        { json: "available", js: "available", typ: true },
        { json: "duration", js: "duration", typ: 3.14 },
        { json: "end", js: "end", typ: 3.14 },
        { json: "start", js: "start", typ: 3.14 },
    ], false),
    "Models": o([
        { json: "Appointment", js: "Appointment", typ: r("Appointment") },
        { json: "Business", js: "Business", typ: r("BusinessClass") },
        { json: "Client", js: "Client", typ: r("ClientClass") },
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
        "",
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
    "Dir": [
        "asc",
        "desc",
    ],
    "SortField": [
        "created",
        "start",
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
    "InvoiceProvider": [
        "DISABLE",
        "icount",
    ],
    "PurplePaymentProvider": [
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
    "TelemedProvider": [
        "DISABLE",
        "zoom",
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
    "FieldElement": [
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
    "FluffyPaymentProvider": [
        "cloudpayments",
        "deltaProcessing",
        "DISABLE",
        "pelecard",
        "yandexMoney",
    ],
    "YandexFeedType": [
        "dynamic",
        "no",
        "static",
        "static-service-only",
    ],
    "PresentStatus": [
        "READY",
        "RECEIVED",
    ],
    "Source": [
        "BACKOFFICE",
        "MINI_WIDGET",
        "MOBILE_WIDGET",
        "WIDGET",
    ],
};
