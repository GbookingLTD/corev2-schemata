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
    data?: Data;
    /**
     * текстовая информация об ошибке
     */
    message: string;
}
/**
 * дополнительные данные об ошибке
 */
export declare type Data = {
    [key: string]: any;
} | string;
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
    client_appear?: ClientAppear;
    client_confirm_appointment?: ClientConfirmAppointment;
    client_remove_empty_appointment: ClientRemoveEmptyAppointment;
    finish_appointment?: FinishAppointment;
    get_appointment_by_filter?: GetAppointmentByFilter;
    get_appointment_by_showcase?: GetAppointmentByShowcase;
    get_appointments_by_client_v2?: GetAppointmentsByClientV2;
    get_appointments_by_user?: GetAppointmentsByUser;
    open_appointment?: OpenAppointment;
    reserve_appointment: ReserveAppointment;
    start_appointment?: StartAppointment;
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
    params: CancelAppointmentByBusinessParams;
}
export interface CancelAppointmentByBusinessParams {
    appointment: PurpleAppointment;
    client?: PurpleClient;
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
    data?: Data;
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
    params: CancelAppointmentByClientParams;
}
export interface CancelAppointmentByClientParams {
    appointment: FluffyAppointment;
    client?: FluffyClient;
}
export interface FluffyAppointment {
    clientID?: string;
    id: string;
    shortId?: string;
}
export interface FluffyClient {
    clientID?: string;
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
    data?: Data;
    /**
     * текстовая информация об ошибке
     */
    message: string;
}
export interface ClientAppear {
    request: AppointmentClientAppearRequest;
    response: AppointmentClientAppearResponse;
}
export interface AppointmentClientAppearRequest {
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
    params: ClientAppearParams;
}
export interface ClientAppearParams {
    appointment: TentacledAppointment;
    business: PurpleBusiness;
}
export interface TentacledAppointment {
    client_appear: AppointmentClientAppear;
    id: string;
}
export declare enum AppointmentClientAppear {
    NoAppear = "NO_APPEAR",
    None = "NONE",
    YesAppear = "YES_APPEAR"
}
export interface PurpleBusiness {
    id: string;
}
export interface AppointmentClientAppearResponse {
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
    error?: AppointmentClientAppearResponseError;
}
/**
 * объект, содержащий информацию об ошибке
 *
 * Код ошибки авторизации
 */
export interface AppointmentClientAppearResponseError {
    /**
     * код ошибки
     */
    code: number;
    /**
     * дополнительные данные об ошибке
     */
    data?: Data;
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
    params: ConfirmAppointmentParams;
}
export interface ConfirmAppointmentParams {
    appointment: StickyAppointment;
    client: ClientObject;
    contract?: PurpleContract;
}
export interface StickyAppointment {
    id: string;
    reminder?: AppointmentReminder;
    source?: string;
}
export interface AppointmentReminder {
    status?: ReminderStatus;
    time_reminder?: number;
}
export declare enum ReminderStatus {
    NotSet = "NOT_SET",
    Off = "OFF",
    On = "ON"
}
export interface ClientObject {
    comment?: string;
    id: string;
}
export interface PurpleContract {
    clientContractID?: string;
    contractID?: string;
    id?: string;
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
    data?: Data;
    /**
     * текстовая информация об ошибке
     */
    message: string;
}
/**
 * данные, передаваемые в ответ
 */
export interface Appointment {
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
    client_payment_transaction_id?: string;
    clientComment: string;
    clientVisitors?: AppointmentClientVisitor[];
    color?: string;
    contract?: AppointmentContract;
    createdUser?: CreatedUser;
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
    reminder: ResultReminder;
    removedClientsData: RemovedClientsDatum[];
    resource: AppointmentResource;
    review?: Review;
    room?: Room;
    showcase: AppointmentShowcase;
    socialToken?: string;
    source: string;
    taxonomy: AppointmentTaxonomy;
    /**
     * Данные для телемед конференции
     */
    telemedData?: TelemedDataClass;
    third_party?: {
        [key: string]: any;
    }[];
    utm?: {
        [key: string]: any;
    };
    withCoSale?: boolean;
}
export interface AdditionalClientAppear {
    appear: AppointmentClientAppear;
    clientID: string;
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
    address?: null | string;
    adminComment?: null | string;
    birthday?: Birthday;
    clientCardNumber?: null | string;
    clientComment?: null | string;
    creatorProfileID?: null | string;
    creatorProfileName?: null | string;
    driverLicense?: null | string;
    email?: string[];
    extraData?: {
        [key: string]: any;
    };
    extraID?: null | string;
    extraVisitors?: number;
    fax?: null | string;
    feedback?: AppointmentClientFeedback;
    GAClientID?: null | string;
    houseNumber?: null | string;
    id: string;
    incomingPhone?: IncomingPhoneObject;
    israelCity?: IsraelCityClass | null;
    isVIP?: boolean;
    kupatHolim?: KupatHolimClass | null;
    language?: string;
    middleName?: null | string;
    name: string;
    passportId?: null | string;
    phone?: AdditionalClientPhone[];
    seasonTicketId?: null | string;
    seasonTicketNumber?: null | string;
    sex?: Sex;
    shortId?: string;
    surname: string;
    taxiPark?: null | string;
    taxiParkMemberCount?: number | null;
}
export declare type Birthday = {
    [key: string]: any;
} | null | string;
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
    value?: PurpleValue;
}
export declare type PurpleValue = any[] | boolean | number | {
    [key: string]: any;
} | null | string;
/**
 * пустой объект в момент резервирования
 */
export interface IncomingPhoneObject {
    area_code?: string;
    country_code?: string;
    number?: string;
}
export interface IsraelCityClass {
    cityId?: string;
    name?: string;
}
export interface KupatHolimClass {
    kupatHolimId?: string;
    name?: string;
}
export interface AdditionalClientPhone {
    area_code: string;
    country_code: string;
    number: string;
}
export declare enum Sex {
    Empty = "",
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
    confirmationAlert?: string;
    extraDescription?: string;
    extraId?: string;
    id: string;
    siteId?: string;
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
    extraId: null | string;
}
export interface Price {
    additionalTaxonomyDiscount?: PurpleAdditionalTaxonomyDiscount[];
    amount?: number;
    currency: CurrencyList;
    discount?: number;
    discountProvider?: DiscountProvider;
    discountType?: string;
    originalAmount?: number | null;
}
export interface PurpleAdditionalTaxonomyDiscount {
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
    address?: null | string;
    adminComment?: null | string;
    birthday?: Birthday;
    clientCardNumber?: null | string;
    clientComment?: null | string;
    creatorProfileID?: null | string;
    creatorProfileName?: null | string;
    driverLicense?: null | string;
    email?: string[];
    extraData?: {
        [key: string]: any;
    };
    extraID?: null | string;
    extraVisitors?: number;
    fax?: null | string;
    feedback?: AppointmentClientFeedback;
    GAClientID?: null | string;
    houseNumber?: null | string;
    id?: string;
    incomingPhone?: IncomingPhoneObject;
    israelCity?: IsraelCityClass | null;
    isVIP?: boolean;
    kupatHolim?: KupatHolimClass | null;
    language?: string;
    middleName?: null | string;
    name?: string;
    passportId?: null | string;
    phone?: AdditionalClientPhone[];
    seasonTicketId?: null | string;
    seasonTicketNumber?: null | string;
    sex?: Sex;
    shortId?: string;
    surname?: string;
    taxiPark?: null | string;
    taxiParkMemberCount?: number | null;
}
export interface AppointmentClientVisitor {
    birthday?: Birthday;
    email?: string[];
    extraVisitors?: number;
    name?: string;
    parentClientID?: string;
    parentProfileID?: string;
    phone?: AdditionalClientPhone[];
    sex?: Sex;
}
export interface AppointmentContract {
    clientContractID?: string;
    contractID?: string;
    id?: string;
}
export interface CreatedUser {
    email?: string;
    id: string;
    middleName?: string;
    name: string;
    surname?: string;
}
export interface Location {
    latitude: number;
    longitude: number;
}
export interface Order {
    id: string;
}
export interface ResultReminder {
    status: ReminderStatus;
    time_reminder?: number;
}
export interface RemovedClientsDatum {
    appear?: AppointmentClientAppear;
    client: AdditionalClientElement;
    created?: Date;
    payment?: AppointmentClientPayment;
    payment_invoice?: string;
    payment_transaction_id?: string;
    source?: string;
    status?: AppointmentStatus;
}
export interface AppointmentResource {
    degree?: string;
    description?: string;
    experience?: string;
    extraID?: null | string;
    icon_url?: string;
    id: string;
    middleName?: string;
    name: string;
    profession?: string;
    siteId?: string;
    surname: string;
}
export interface Review {
    business: TaxonomyClass;
    taxonomy: TaxonomyClass;
    worker: TaxonomyClass;
}
export interface TaxonomyClass {
    comment?: string;
    rate?: number;
}
export interface Room {
    id: string;
}
export interface AppointmentShowcase {
    businessID?: string;
}
/**
 * Данные для телемед конференции
 */
export interface TelemedDataClass {
    id?: string;
    joinUrl?: string;
    password?: string;
    shortJoinUrl?: string;
    shortStartUrl?: string;
    startUrl?: string;
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
    appointment: IndigoAppointment;
    business: FluffyBusiness;
}
export interface IndigoAppointment {
    id: string;
}
export interface FluffyBusiness {
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
    data?: Data;
    /**
     * текстовая информация об ошибке
     */
    message: string;
}
export interface FinishAppointment {
    request: AppointmentFinishAppointmentRequest;
    response: AppointmentFinishAppointmentResponse;
}
export interface AppointmentFinishAppointmentRequest {
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
    params: FinishAppointmentParams;
}
export interface FinishAppointmentParams {
    appointment: IndecentAppointment;
    business: TentacledBusiness;
}
export interface IndecentAppointment {
    finish?: string;
    id: string;
}
export interface TentacledBusiness {
    id: string;
}
export interface AppointmentFinishAppointmentResponse {
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
    error?: AppointmentFinishAppointmentResponseError;
}
/**
 * объект, содержащий информацию об ошибке
 *
 * Код ошибки авторизации
 */
export interface AppointmentFinishAppointmentResponseError {
    /**
     * код ошибки
     */
    code: number;
    /**
     * дополнительные данные об ошибке
     */
    data?: Data;
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
    business?: StickyBusiness;
    /**
     * данные по договору, если указано то будут переданы записи только по данному договору
     */
    contract?: FluffyContract;
    extraFilters?: PurpleExtraFilters;
    filter?: PurpleFilter;
    network?: PurpleNetwork;
    page: number;
    pageSize: number;
    skipBusinessCancelled?: boolean;
}
export interface StickyBusiness {
    id?: BackofficeIdUnion;
}
/**
 * данные по договору, если указано то будут переданы записи только по данному договору
 */
export interface FluffyContract {
    extraId?: string;
    id?: string;
}
export interface PurpleExtraFilters {
    sort?: PurpleSort[];
}
export interface PurpleSort {
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
export interface PurpleFilter {
    created?: PurpleCreated;
    end?: Date;
    services?: string[];
    skipUpdated?: boolean;
    start?: Date;
    workers?: string[];
}
export interface PurpleCreated {
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
    data?: Data;
    /**
     * текстовая информация об ошибке
     */
    message: string;
}
/**
 * данные, передаваемые в ответ
 */
export interface AppointmentGetAppointmentByFilterResponseResult {
    data: Appointment[];
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
    business: IndigoBusiness;
    created?: ParamsCreated;
    page: number;
    pageSize: number;
    source?: string;
}
export interface IndigoBusiness {
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
    data?: Data;
    /**
     * текстовая информация об ошибке
     */
    message: string;
}
export interface GetAppointmentsByClientV2 {
    request: AppointmentGetAppointmentsByClientV2Request;
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
    business: IndecentBusiness;
    client: TentacledClient;
    extraFilters?: FluffyExtraFilters;
    filter?: FluffyFilter;
    network?: FluffyNetwork;
    skipBusinessCancelled?: boolean;
}
export interface IndecentBusiness {
    id: BackofficeIdUnion;
}
export interface TentacledClient {
    id: BackofficeIdUnion;
}
export interface FluffyExtraFilters {
    sort?: FluffySort[];
}
export interface FluffySort {
    dir: Dir;
    field: SortField;
}
export interface FluffyFilter {
    appointmentId?: string;
    created?: FluffyCreated;
    end?: Date;
    services?: string[];
    skipUpdated?: boolean;
    start?: Date;
    workers?: string[];
}
export interface FluffyCreated {
    end: Date;
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
    result?: Appointment[];
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
    data?: Data;
    /**
     * текстовая информация об ошибке
     */
    message: string;
}
export interface GetAppointmentsByUser {
    request: AppointmentGetAppointmentsByUserRequest;
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
    business?: HilariousBusiness;
    /**
     * данные по договору, если указано то будут переданы записи только по данному договору
     */
    contract?: TentacledContract;
    extraFilters?: TentacledExtraFilters;
    fill_business_data?: boolean;
    filter?: TentacledFilter;
    network?: TentacledNetwork;
    page: number;
    pageSize: number;
    skipBusinessCancelled?: boolean;
}
export interface HilariousBusiness {
    id: BackofficeIdUnion;
}
/**
 * данные по договору, если указано то будут переданы записи только по данному договору
 */
export interface TentacledContract {
    extraId?: string;
    id?: string;
}
export interface TentacledExtraFilters {
    sort?: TentacledSort[];
}
export interface TentacledSort {
    dir: Dir;
    field: SortField;
}
export interface TentacledFilter {
    created?: TentacledCreated;
    end?: Date;
    services?: string[];
    skipUpdated?: boolean;
    start?: Date;
    workers?: string[];
}
export interface TentacledCreated {
    end: Date;
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
    data?: Data;
    /**
     * текстовая информация об ошибке
     */
    message: string;
}
export interface AppointmentGetAppointmentsByUserResponseResult {
    data: Appointment[];
    page: number;
    total: number;
    unconfirmed?: number;
}
export interface OpenAppointment {
    request: AppointmentOpenAppointmentRequest;
    response: AppointmentOpenAppointmentResponse;
}
export interface AppointmentOpenAppointmentRequest {
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
    params: OpenAppointmentParams;
}
export interface OpenAppointmentParams {
    appointment: HilariousAppointment;
    business: AmbitiousBusiness;
}
export interface HilariousAppointment {
    id: string;
}
export interface AmbitiousBusiness {
    id: string;
}
export interface AppointmentOpenAppointmentResponse {
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
    error?: AppointmentOpenAppointmentResponseError;
}
/**
 * объект, содержащий информацию об ошибке
 *
 * Код ошибки авторизации
 */
export interface AppointmentOpenAppointmentResponseError {
    /**
     * код ошибки
     */
    code: number;
    /**
     * дополнительные данные об ошибке
     */
    data?: Data;
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
    business: CunningBusiness;
    originBusinessID?: null | string;
    resource: ParamsResourceClass;
    source: string;
    taxonomy: ParamsTaxonomyClass;
}
export interface AppointmentObject {
    duration?: number;
    price?: PurplePrice;
    start: string;
}
export interface PurplePrice {
    additionalTaxonomyDiscount?: FluffyAdditionalTaxonomyDiscount[];
    amount?: number;
    currency: CurrencyList;
    discount?: number;
    discountProvider?: DiscountProvider;
    discountType?: string;
    originalAmount?: number;
}
export interface FluffyAdditionalTaxonomyDiscount {
    discount?: number;
    discountProvider?: DiscountProvider;
    discountType?: string;
    taxonomyID?: string;
}
export interface CunningBusiness {
    id: string;
}
export interface ParamsResourceClass {
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
    data?: Data;
    /**
     * текстовая информация об ошибке
     */
    message: string;
}
export interface StartAppointment {
    request: AppointmentStartAppointmentRequest;
    response: AppointmentStartAppointmentResponse;
}
export interface AppointmentStartAppointmentRequest {
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
    params: StartAppointmentParams;
}
export interface StartAppointmentParams {
    appointment: AmbitiousAppointment;
    business: MagentaBusiness;
}
export interface AmbitiousAppointment {
    id: string;
}
export interface MagentaBusiness {
    id: string;
}
export interface AppointmentStartAppointmentResponse {
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
    error?: AppointmentStartAppointmentResponseError;
}
/**
 * объект, содержащий информацию об ошибке
 *
 * Код ошибки авторизации
 */
export interface AppointmentStartAppointmentResponseError {
    /**
     * код ошибки
     */
    code: number;
    /**
     * дополнительные данные об ошибке
     */
    data?: Data;
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
     * данные по договору, если указано то список работников и услуг формируется на основе
     * переданного договора
     */
    contract?: StickyContract;
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
/**
 * данные по договору, если указано то список работников и услуг формируется на основе
 * переданного договора
 */
export interface StickyContract {
    extraId?: string;
    id?: string;
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
    data?: Data;
    /**
     * текстовая информация об ошибке
     */
    message: string;
}
export interface ResultClass {
    businessConfiguration: {
        [key: string]: any;
    };
    businesses: BusinessRefInNetwork[];
    clientVIPPhones: string[];
    grantGroups: {
        [key: string]: any;
    }[];
    integrationData?: IntegrationDataObject;
    networkClientBlockingSettings?: NetworkClientBlockingSettings;
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
    info?: InfoClass;
    isMapBusiness: boolean;
    order?: number;
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
    activeTaxonomyCount?: number;
    additionalSettings?: InfoAdditionalSettings;
    allowCategoryBooking?: boolean;
    backoffice_configuration?: InfoBackofficeConfigurationObject;
    backofficeConfiguration?: InfoBackofficeConfiguration;
    backofficeType?: BackofficeType;
    cabinets?: InfoCabinet[];
    cabinetsEnabled?: boolean;
    callback_widget_configuration?: InfoCallbackWidgetConfiguration;
    consumables?: InfoConsumable[];
    created_on?: Date;
    defaultFilteredWorkers?: string[];
    departments?: InfoDepartment[];
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
    mini_widget_configuration: InfoMiniWidgetConfiguration;
    mobileData?: any[];
    notifications?: any[];
    resources?: Resource[];
    stateLevelHolidaysNotWorking?: boolean;
    taxonomies?: InfoTaxonomy[];
    taxonomiesComplex?: InfoTaxonomiesComplex[];
    taxonomy_tree_capacity?: {
        [key: string]: any;
    }[];
    top_services?: InfoTopServices;
    vertical?: string;
    widget_configuration: InfoWidgetConfiguration;
    yandexFeedType?: string;
}
export interface InfoAdditionalSettings {
    appointmentExtensionAmount?: number;
    appointmentExtensionType?: AppointmentExtensionType;
}
export declare enum AppointmentExtensionType {
    Minutes = "MINUTES",
    Percent = "PERCENT"
}
export interface InfoBackofficeConfiguration {
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
    enableInvoice?: boolean;
    enableMasterImportance?: boolean;
    enablePhoneNationalMode?: boolean;
    enablePrintingReportRecordsScreen?: boolean;
    enableServiceOrModeFilter?: boolean;
    enableServiceTimeLimit?: boolean;
    enableSourceChoice?: boolean;
    enableTaxonomyChildrenAgeCheck?: boolean;
    enableTelemed?: boolean;
    exportToExcelRemovedClients?: boolean;
    feedbackCustomerPortalMessage?: string;
    feedbackCustomerPortalThankYouMessage?: string;
    feedbackCustomerPortalTitle?: string;
    feedBackMinRating?: FeedBackMinRating;
    finId?: string;
    finName?: string;
    hideCustomerPortalFooter?: boolean;
    highlightedResource?: boolean;
    invoiceCondition?: AppointmentClientPayment[];
    invoiceProvider?: InvoiceProvider;
    manualExceptionSupport?: boolean;
    noInternetAlert?: boolean;
    pastTimeEdit?: number;
    paymentProvider?: PaymentProvider;
    readonlyResourceSchedule?: boolean;
    resourceSurnameFirst?: boolean;
    resourceTimetableType?: ResourceTimetableType;
    resoureLoginHideCancelledAppointment?: boolean;
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
    showClientAddress?: boolean;
    showClientAppear?: boolean;
    showClientAppearOnSchedule?: boolean;
    showClientBirthdayFilter?: boolean;
    showClientContractNumber?: boolean;
    showClientImage?: boolean;
    showClientPayment?: boolean;
    showCreatedUsername?: boolean;
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
    showGuaranteeLettersScreen?: boolean;
    showHouseNumber?: boolean;
    showIsraelCity?: boolean;
    showKupatHolim?: boolean;
    showLeadsScreen?: boolean;
    showManualChanges?: boolean;
    showPartnersContractScreen?: boolean;
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
    telemedApplication?: PurpleTelemedApplication;
    telemedProvider?: TelemedProvider;
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
export declare enum InvoiceProvider {
    Disable = "DISABLE",
    Icount = "icount"
}
export declare enum PaymentProvider {
    Cloudpayments = "cloudpayments",
    DeltaProcessing = "deltaProcessing",
    Disable = "DISABLE",
    Pelecard = "pelecard",
    YandexMoney = "yandexMoney",
    YandexMoneyv3 = "yandexMoneyv3"
}
export declare enum ResourceTimetableType {
    Default = "DEFAULT",
    Evenodd = "EVENODD"
}
export declare enum SchedulerWeekViewType {
    Week = "week",
    WorkWeek = "workWeek"
}
export interface PurpleTelemedApplication {
    appleAppName?: string;
    googleAppName?: string;
    urlAppSchema?: string;
}
export declare enum TelemedProvider {
    Disable = "DISABLE",
    Mmconf = "mmconf",
    Zoom = "zoom"
}
export declare enum BackofficeType {
    Common = "COMMON",
    Gt = "GT",
    Ll = "LL",
    Mb = "MB",
    Mu = "MU"
}
export interface InfoBackofficeConfigurationObject {
    enableExtendedPhone?: boolean;
    enableMasterImportance?: boolean;
    enablePhoneNationalMode?: boolean;
    resourceTimetableType?: ResourceTimetableType;
}
export interface InfoCabinet {
    active?: boolean;
    id?: string;
    name?: string;
}
export interface InfoCallbackWidgetConfiguration {
    title1?: string;
    title2?: string;
}
export interface InfoConsumable {
    extraID: string;
    name: string;
    quantity: number;
}
export interface InfoDepartment {
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
    address?: AddressSchema[];
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
    eventEditorMinutesTick?: number;
    fax?: FaxElement[];
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
    mobile?: FaxElement[];
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
    phone?: FaxElement[];
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
export interface AdditionalFields {
    name: string;
    requiredField?: boolean;
    shortName: string;
    type: AdditionalFieldType;
    value?: string;
}
export interface AddressSchema {
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
    metroStations?: FullAddressMetroStation[];
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
export interface FullAddressMetroStation {
    _id?: string;
    description?: string;
    name: string;
}
export interface BusinessShowcaseAlias {
    internalID?: string;
}
export interface FaxElement {
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
    address?: AddressSchema[];
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
    phone?: FaxElement[];
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
export interface InfoMiniWidgetConfiguration {
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
    color?: string;
    degree?: string;
    denyWidgetBooking?: boolean;
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
    phone?: FaxElement[];
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
    telemedData?: TelemedDataObject;
    telemedWorker?: boolean;
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
    address?: AddressSchema[];
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
    eventEditorMinutesTick?: number;
    fax?: FaxElement[];
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
    mobile?: FaxElement[];
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
    phone?: FaxElement[];
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
export interface TelemedDataObject {
    active?: boolean;
    id?: string;
}
export interface InfoTaxonomy {
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
    confirmationEmailAlert?: string;
    confirmationSmsAlert?: string;
    dateLimits?: PurpleDateLimit[];
    dateLimitType?: DateLimitType;
    designs?: string[];
    disableClientSmsNotifications?: boolean;
    discounts?: Discount[];
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
    isTelemed?: boolean;
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
export interface Discount {
    active?: boolean;
    days?: Day[];
    repeats?: Repeats;
    slots?: SlotObject[];
    start?: Date;
    unlimWeeklyRepeat?: boolean;
    weeklyRepeat?: number;
}
export declare enum Day {
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
export interface SlotObject {
    time?: TimeFrame;
}
export declare enum OnlineMode {
    OncallOnline = "ONCALL_ONLINE",
    PlanClinic = "PLAN_CLINIC",
    PlanClinicOnline = "PLAN_CLINIC_ONLINE",
    PlanOnline = "PLAN_ONLINE"
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
export interface InfoTaxonomiesComplex {
    name?: string;
    taxonomies?: string[];
}
export interface InfoTopServices {
    services?: any[];
    status?: string;
}
export interface InfoWidgetConfiguration {
    additionalName?: string;
    alignmentTaxonomySlots?: boolean;
    allowAutoSelect?: boolean;
    allowBookVisitor?: boolean;
    allowSkipTimeCheck?: boolean;
    analyticsGoogle?: PurpleAnalyticsGoogle;
    analyticsYandex?: PurpleAnalyticsYandex;
    appointment_confirmation_text?: string;
    appointment_confirmation_title?: string;
    askClientBirthday?: boolean;
    askClientGender?: boolean;
    askClientPassportID?: boolean;
    bookableDateRanges?: PurpleBookableDateRanges;
    bookableMonthsCount?: number;
    calendarMode?: boolean;
    calendarModeHideTime?: boolean;
    clientBlockingSettings?: PurpleClientBlockingSettings;
    clientCommentTitle?: string;
    cracBuildDays?: number;
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
    insuranceClientSupportPhone?: FaxElement[];
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
    paymentProvider?: PaymentProvider;
    requireAgreement?: boolean;
    requireAgreementLink?: string;
    revisionVersion?: number;
    service_unavailability_text?: string;
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
    sortWorkers?: {
        [key: string]: any;
    };
    sortWorkersByName?: boolean;
    sortWorkersByWorkload?: boolean;
    splitInsuranceClient?: boolean;
    splitName?: boolean;
    startTextButton?: string;
    startTextMessage?: string;
    strictSlotCutting?: boolean;
    tentativeTTL?: number;
    theme?: string;
    toggleReminder?: boolean;
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
    worker_widget_unavailability_text?: string;
    workerNameReverse?: boolean;
}
export interface PurpleAnalyticsGoogle {
    active?: boolean;
    key?: string;
}
export interface PurpleAnalyticsYandex {
    active?: boolean;
    key?: string;
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
export interface IntegrationDataObject {
    ehr?: Ehr;
}
export interface Ehr {
    active?: boolean;
}
export interface NetworkClientBlockingSettings {
    appointmentClientBlock?: boolean;
    appointmentClientBlockDays?: number;
    appointmentClientBlockText?: string;
    blockIfFutureRecordExists?: boolean;
    blockRepeatedRecordsCount?: number;
    blockRepeatedRecordsRange?: number;
    blockRepeatedRecordsText?: string;
}
export interface NetworkWidgetConfiguration {
    _id?: string;
    businesses: NetworkConfigurationBusiness[];
    defaultServiceID: null | string;
    showBranchSelector: boolean;
    showDefaultService: boolean;
    showOnMap: boolean;
    source: string;
}
export interface NetworkConfigurationBusiness {
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
    business: FriskyBusiness;
    /**
     * данные по договору, если указано то список работников и услуг формируется на основе
     * переданного договора
     */
    contract?: ContractClass;
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
     * содержит только доступные для записи наборы услуг и работников
     */
    use_optimized_cache?: boolean;
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
export interface FriskyBusiness {
    /**
     * идентификатор бизнеса
     */
    id: string;
}
/**
 * данные по договору, если указано то список работников и услуг формируется на основе
 * переданного договора
 */
export interface ContractClass {
    extraId?: string;
    id?: string;
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
    data?: Data;
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
    business: BusinessClass;
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
export interface BusinessClass {
    active?: boolean;
    additionalSettings?: BusinessAdditionalSettings;
    allowCategoryBooking?: boolean;
    backoffice_configuration?: BusinessBackofficeConfigurationObject;
    backofficeConfiguration?: BusinessBackofficeConfiguration;
    backofficeType?: BackofficeType;
    cabinets?: BusinessCabinet[];
    cabinetsEnabled?: boolean;
    callback_widget_configuration?: BusinessCallbackWidgetConfiguration;
    consumables?: BusinessConsumable[];
    created_on?: Date;
    defaultFilteredWorkers?: string[];
    departments?: BusinessDepartment[];
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
    maxFilterDateDuration?: number;
    mini_widget_configuration: BusinessMiniWidgetConfiguration;
    mobileData?: any[];
    notifications?: any[];
    resources: Resource[];
    stateLevelHolidaysNotWorking?: boolean;
    taxonomies: BusinessTaxonomy[];
    taxonomiesComplex?: BusinessTaxonomiesComplex[];
    taxonomy_tree_capacity?: {
        [key: string]: any;
    }[];
    top_services?: BusinessTopServices;
    vertical?: string;
    widget_configuration: BusinessWidgetConfiguration;
    yandexFeedType?: string;
}
export interface BusinessAdditionalSettings {
    appointmentExtensionAmount?: number;
    appointmentExtensionType?: AppointmentExtensionType;
}
export interface BusinessBackofficeConfiguration {
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
    enableInvoice?: boolean;
    enableMasterImportance?: boolean;
    enablePhoneNationalMode?: boolean;
    enablePrintingReportRecordsScreen?: boolean;
    enableServiceOrModeFilter?: boolean;
    enableServiceTimeLimit?: boolean;
    enableSourceChoice?: boolean;
    enableTaxonomyChildrenAgeCheck?: boolean;
    enableTelemed?: boolean;
    exportToExcelRemovedClients?: boolean;
    feedbackCustomerPortalMessage?: string;
    feedbackCustomerPortalThankYouMessage?: string;
    feedbackCustomerPortalTitle?: string;
    feedBackMinRating?: FeedBackMinRating;
    finId?: string;
    finName?: string;
    hideCustomerPortalFooter?: boolean;
    highlightedResource?: boolean;
    invoiceCondition?: AppointmentClientPayment[];
    invoiceProvider?: InvoiceProvider;
    manualExceptionSupport?: boolean;
    noInternetAlert?: boolean;
    pastTimeEdit?: number;
    paymentProvider?: PaymentProvider;
    readonlyResourceSchedule?: boolean;
    resourceSurnameFirst?: boolean;
    resourceTimetableType?: ResourceTimetableType;
    resoureLoginHideCancelledAppointment?: boolean;
    revisionVersion?: number;
    schduleWeekViewIsDefault?: boolean;
    scheduleDefaultWorkersLimit?: number;
    scheduleDefaultWorkersLimitDay?: number | null;
    scheduleDefaultWorkersLimitWeek?: number | null;
    scheduleEnableDayIntervals?: boolean;
    schedulerWeekViewType?: SchedulerWeekViewType;
    scheduleSplitDayTimeIntervals?: ScheduleSplitDayTimeInterval[];
    scheduleWorkerHours?: boolean;
    showAdditionalFields?: boolean;
    showAddress?: boolean;
    showBirthDate?: boolean;
    showClientAddress?: boolean;
    showClientAppear?: boolean;
    showClientAppearOnSchedule?: boolean;
    showClientBirthdayFilter?: boolean;
    showClientContractNumber?: boolean;
    showClientImage?: boolean;
    showClientPayment?: boolean;
    showCreatedUsername?: boolean;
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
    showGuaranteeLettersScreen?: boolean;
    showHouseNumber?: boolean;
    showIsraelCity?: boolean;
    showKupatHolim?: boolean;
    showLeadsScreen?: boolean;
    showManualChanges?: boolean;
    showPartnersContractScreen?: boolean;
    showPassportId?: boolean;
    showRooms?: boolean;
    showSeasonTickets?: boolean;
    showTaxonomyChildren?: boolean;
    showTaxonomyLocalization?: boolean;
    showTaxonomyNameExtraId?: boolean;
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
    telemedApplication?: FluffyTelemedApplication;
    telemedProvider?: TelemedProvider;
    useAdditionalDurations?: boolean;
    useAdjacentTaxonomies?: boolean;
    useAdjacentTaxonomiesSlotSplitting?: boolean;
    useGtAppMethod?: boolean;
    workWeekEnd?: number;
    workWeekStart?: number;
}
export interface ScheduleSplitDayTimeInterval {
    _id?: string;
    endHour?: number;
    endMinute?: number;
    schedulerTick?: number;
    selected?: boolean;
    startHour?: number;
    startMinute?: number;
    title?: string;
}
export interface FluffyTelemedApplication {
    appleAppName?: string;
    googleAppName?: string;
    urlAppSchema?: string;
}
export interface BusinessBackofficeConfigurationObject {
    enableExtendedPhone?: boolean;
    enableMasterImportance?: boolean;
    enablePhoneNationalMode?: boolean;
    resourceTimetableType?: ResourceTimetableType;
}
export interface BusinessCabinet {
    active?: boolean;
    id?: string;
    name?: string;
}
export interface BusinessCallbackWidgetConfiguration {
    title1?: string;
    title2?: string;
}
export interface BusinessConsumable {
    extraID: string;
    name: string;
    quantity: number;
}
export interface BusinessDepartment {
    id: string;
    id_?: number;
    name: string;
}
export interface BusinessMiniWidgetConfiguration {
    fields?: FieldElement[];
    title1?: string;
    title2?: string;
}
export interface BusinessTaxonomy {
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
    confirmationEmailAlert?: string;
    confirmationSmsAlert?: string;
    dateLimits?: FluffyDateLimit[];
    dateLimitType?: DateLimitType;
    designs?: string[];
    disableClientSmsNotifications?: boolean;
    discounts?: Discount[];
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
    isTelemed?: boolean;
    lastModified?: Date;
    leaves?: string[];
    manualChanges?: boolean;
    newTaxonomy?: boolean;
    onlineMode?: OnlineMode;
    onlyAfterTaxonomies?: string[];
    order?: number;
    parallelTaxonomies?: string[];
    popularity?: number;
    price?: TentacledPrice;
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
    stockAmount?: null | string;
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
export interface BusinessTaxonomiesComplex {
    name?: string;
    taxonomies?: string[];
}
export interface BusinessTopServices {
    services?: any[];
    status?: string;
}
export interface BusinessWidgetConfiguration {
    additionalName?: string;
    alignmentTaxonomySlots?: boolean;
    allowAutoSelect?: boolean;
    allowBookVisitor?: boolean;
    allowSkipTimeCheck?: boolean;
    analyticsGoogle?: FluffyAnalyticsGoogle;
    analyticsYandex?: FluffyAnalyticsYandex;
    appointment_confirmation_text?: string;
    appointment_confirmation_title?: string;
    askClientBirthday?: boolean;
    askClientGender?: boolean;
    askClientPassportID?: boolean;
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
    insuranceClientSupportPhone?: FaxElement[];
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
    paymentProvider?: PaymentProvider;
    requireAgreement?: boolean;
    requireAgreementLink?: string;
    revisionVersion?: number;
    service_unavailability_text?: string;
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
    sortWorkers?: {
        [key: string]: any;
    };
    sortWorkersByName?: boolean;
    sortWorkersByWorkload?: boolean;
    splitInsuranceClient?: boolean;
    splitName?: boolean;
    startTextButton?: string;
    startTextMessage?: string;
    strictSlotCutting?: boolean;
    tentativeTTL?: number;
    theme?: string;
    toggleReminder?: boolean;
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
    worker_widget_unavailability_text?: string;
    workerNameReverse?: boolean;
}
export interface FluffyAnalyticsGoogle {
    active?: boolean;
    key?: string;
}
export interface FluffyAnalyticsYandex {
    active?: boolean;
    key?: string;
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
export interface Address {
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
    metroStations?: PurpleMetroStation[];
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
export interface PurpleMetroStation {
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
    find_or_create_client: FindOrCreateClient;
    update_client: UpdateClient;
    update_client_info: UpdateClientInfo;
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
    business: MischievousBusiness;
    client: ClientClass;
    profile?: ParamsProfile;
    skipEmailCheck?: boolean;
    skipProfileUpdate?: boolean;
}
export interface MischievousBusiness {
    /**
     * идентификатор бизнеса
     */
    id: BackofficeIdUnion;
}
/**
 * Данные клиента
 */
export interface ClientClass {
    address?: string;
    birthday?: Birthday;
    blackList?: boolean;
    childrenClients?: ChildrenClient[];
    clientCardCreationDate?: string;
    clientCardNumber?: string;
    clientContractNumber?: string;
    created?: string;
    creatorProfileID?: null | string;
    creatorProfileName?: null | string;
    description?: string;
    discountCode?: string;
    driverLicense?: null | string;
    email?: string[];
    extraFields?: ClientExtraField[];
    extraID?: string;
    favResources?: ClientFavResource[];
    fax?: string;
    fromSms?: FromSms;
    fullAddress?: AddressSchema[];
    houseNumber?: string;
    icon_url?: string;
    id?: string;
    insuranceCompany?: string;
    insuranceNumber?: string;
    integrationData?: IntegrationDataClass;
    isLazy?: boolean;
    israelCity?: IsraelCityUnion;
    isVIP?: boolean;
    kupatHolim?: KupatHolimUnion;
    language?: LanguageList;
    lastCreatedAppointment?: {
        [key: string]: any;
    } | null;
    lastVisitedAppointment?: {
        [key: string]: any;
    } | null;
    lazyResolvedDate?: string;
    locality?: string;
    loyaltyInfo?: LoyaltyInfo;
    middleName?: null | string;
    name: string;
    passportDate?: string;
    passportId?: string;
    passportIssued?: string;
    passportSeries?: string;
    phone: FaxElement[];
    receiveSmsAfterService?: boolean;
    sex?: Sex;
    skipMarketingNotifications?: boolean;
    skipNotifications?: boolean;
    snils?: string;
    statistics?: Statistics;
    status?: ResourceStatus;
    surname: string;
    taxiPark?: null | string;
    taxiParkMemberCount?: OrderWeight;
    twoFAUserID?: string;
    updated?: string;
    workPlace?: string;
}
export interface ChildrenClient {
    clientID: string;
    extraID?: string;
    middleName?: string;
    name?: string;
    surname?: string;
}
export interface ClientExtraField {
    fieldID: string;
    fieldName: string;
    value?: FluffyValue;
}
export declare type FluffyValue = boolean | number | {
    [key: string]: any;
} | null | string;
export interface ClientFavResource {
    businessID: number;
    networkID: string;
    resourceID: string;
}
export declare type FromSms = boolean | string;
export interface IntegrationDataClass {
    transactionID?: string;
}
export declare type IsraelCityUnion = any[] | boolean | number | number | null | IsraelCityObject | string;
export interface IsraelCityObject {
    cityId?: string;
    name?: string;
}
export declare type KupatHolimUnion = any[] | boolean | number | number | null | KupatHolimObject | string;
export interface KupatHolimObject {
    kupatHolimId?: string;
    name?: string;
}
export interface LoyaltyInfo {
    annualTurnover?: number;
    bonusPoints?: number;
    cardNumber?: string;
    presents?: Present[];
    purchases?: Purchase[];
    status?: string;
}
export interface Present {
    code?: string;
    extraID?: string;
    name?: string;
    status?: PresentStatus;
}
export declare enum PresentStatus {
    Ready = "READY",
    Received = "RECEIVED"
}
export interface Purchase {
    active?: boolean;
    expirationDate?: string;
    free?: boolean;
    goodID?: string;
    price?: number;
    transactionID?: string;
}
export interface Statistics {
    appointmentsCount?: number;
    businesses?: {
        [key: string]: any;
    }[];
    lastAppointment?: string;
    lastBusinessId?: string;
    lastWorkerId?: string;
    services?: {
        [key: string]: any;
    }[];
    totalPrices?: any[];
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
    data?: Data;
    /**
     * текстовая информация об ошибке
     */
    message: string;
}
export interface ClientAddClientResponseResult {
    business: BraggadociousBusiness;
    client: ClientClass;
    documents?: string[];
    profile?: PurpleProfile;
    source?: Source;
}
export interface BraggadociousBusiness {
    id: string;
}
export interface PurpleProfile {
    id?: string;
}
export declare enum Source {
    Backoffice = "BACKOFFICE",
    MiniWidget = "MINI_WIDGET",
    MobileWidget = "MOBILE_WIDGET",
    Widget = "WIDGET"
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
    business: Business1;
    client?: ClientClass;
    network?: StickyNetwork;
    skipEmailCheck?: boolean;
    skipProfileUpdate?: boolean;
}
export interface Business1 {
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
    data?: Data;
    /**
     * текстовая информация об ошибке
     */
    message: string;
}
export interface ClientFindOfCreateClientResponseResult {
    business?: Business2;
    client: ClientClass;
    documents?: any[];
    profile?: FluffyProfile;
}
export interface Business2 {
    id: string;
}
export interface FluffyProfile {
    id: string;
}
export interface UpdateClient {
    request: ClientUpdateClientRequest;
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
    business?: Business3;
    client: ClientClass;
    network?: IndigoNetwork;
}
export interface Business3 {
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
    data?: Data;
    /**
     * текстовая информация об ошибке
     */
    message: string;
}
export interface ClientUpdateClientResponseResult {
    added_document?: {
        [key: string]: any;
    };
    success: boolean;
}
export interface UpdateClientInfo {
    request: ClientUpdateClientInfoRequest;
    response: ClientUpdateClientInfoResponse;
}
export interface ClientUpdateClientInfoRequest {
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
    params: ClientUpdateClientInfoRequestParams;
}
/**
 * параметры запроса
 */
export interface ClientUpdateClientInfoRequestParams {
    business?: Business4;
    client: StickyClient;
    network?: IndecentNetwork;
}
export interface Business4 {
    /**
     * идентификатор бизнеса
     */
    id: BackofficeIdUnion;
}
/**
 * Данные клиента доступные для обновления клиентом
 */
export interface StickyClient {
    address?: string;
    birthday?: Birthday;
    description?: string;
    email?: string[];
    extraFields?: PurpleExtraField[];
    favResources?: PurpleFavResource[];
    icon_url?: string;
    id?: string;
    insuranceNumber?: string;
    language?: LanguageList;
    middleName?: null | string;
    name: string;
    passportId?: string;
    sex?: Sex;
    surname: string;
}
export interface PurpleExtraField {
    fieldID: string;
    fieldName: string;
    value?: FluffyValue;
}
export interface PurpleFavResource {
    businessID: number;
    networkID: string;
    resourceID: string;
}
export interface IndecentNetwork {
    /**
     * идентификатор нетворка
     */
    id?: BackofficeIdUnion;
}
export interface ClientUpdateClientInfoResponse {
    result?: ClientUpdateClientInfoResponseResult;
    /**
     * объект, содержащий информацию об ошибке
     */
    error?: ClientUpdateClientInfoResponseError;
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
export interface ClientUpdateClientInfoResponseError {
    /**
     * код ошибки
     *
     * код ошибки создания клиента
     */
    code: number;
    /**
     * дополнительные данные об ошибке
     */
    data?: Data;
    /**
     * текстовая информация об ошибке
     */
    message: string;
}
export interface ClientUpdateClientInfoResponseResult {
    added_document?: {
        [key: string]: any;
    };
    success: boolean;
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
    business: Business5;
    resources: string[];
    taxonomy: PurpleTaxonomy;
}
export interface Business5 {
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
    data?: Data;
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
    data?: Data;
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
    business: Business6;
    duration: number;
    durations: number[];
    resources: string[];
    taxonomy: TentacledTaxonomy;
}
export interface Business6 {
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
    data?: Data;
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
    business: CracSlotsRequestBusinessParams;
    filters: CracSlotsGetCracDistributedResourcesAndRoomsRequestFilters;
}
export interface CracSlotsRequestBusinessParams {
    general_info: GeneralInfo;
    id: string;
    widget_configuration: PurpleWidgetConfiguration;
}
export interface GeneralInfo {
    timezone: string;
}
export interface PurpleWidgetConfiguration {
    cracServer: string;
    displaySlotSize?: number;
    hideGraySlots?: boolean;
}
export interface CracSlotsGetCracDistributedResourcesAndRoomsRequestFilters {
    date: PurpleDate;
    resources: CracSlotsGetCracDistributedResourcesAndRoomsRequestResourceFilter[];
    rooms: string[];
    taxonomies: string[];
}
export interface PurpleDate {
    from: string;
    to: string;
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
    data?: Data;
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
    business: CracSlotsRequestBusinessParams;
    filters: CracSlotsGetCracInsuranceResourcesAndRoomsRequestFilters;
}
export interface CracSlotsGetCracInsuranceResourcesAndRoomsRequestFilters {
    date: FluffyDate;
    insuranceID: string;
    resources: CracSlotsGetCracInsuranceResourcesAndRoomsRequestResourceFilter[];
    rooms: string[];
}
export interface FluffyDate {
    from: string;
    to: string;
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
    data?: Data;
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
    business: CracSlotsRequestBusinessParams;
    filters: CracSlotsGetCracResourcesAndRoomsRequestFilters;
}
export interface CracSlotsGetCracResourcesAndRoomsRequestFilters {
    date: TentacledDate;
    resources: CracSlotsGetCracResourcesAndRoomsRequestResourceFilter[];
    rooms: string[];
    taxonomies: string[];
}
export interface TentacledDate {
    from: Date;
    to: Date;
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
    data?: Data;
    /**
     * текстовая информация об ошибке
     */
    message: string;
}
export interface CracSlotsGetCracResourcesAndRoomsResponseResult {
    slots: CracDaySchedule[];
}
export interface CracDaySchedule {
    date: string;
    resources: SlotResource[];
    rooms: {
        [key: string]: any;
    }[];
}
export interface SlotResource {
    cutSlots: CracCutSlot[];
    resourceId: string;
}
export interface CracCutSlot {
    available: boolean;
    duration: number;
    end: number;
    start: number;
}
export interface Models {
    Appointment: Appointment;
    Business: BusinessClass;
    Client: ClientClass;
}
export declare class Convert {
    static toGBookingCoreV2(json: string): GBookingCoreV2;
    static gBookingCoreV2ToJson(value: GBookingCoreV2): string;
}
