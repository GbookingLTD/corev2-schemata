"use strict";
// To parse this data:
//
//   import { Convert, GBookingCoreV2 } from "./file";
//
//   const gBookingCoreV2 = Convert.toGBookingCoreV2(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.
exports.__esModule = true;
exports.Convert = exports.Source = exports.PresentStatus = exports.YandexFeedType = exports.WorkerSortingType = exports.UseDirectScheduleRead = exports.DiscountType = exports.Payment = exports.Rule = exports.CracServer = exports.TaxonomyType = exports.OnlineMode = exports.Repeats = exports.Day = exports.DateLimitType = exports.ChildrenTaxonomyType = exports.AdditionalPriceType = exports.ResourceStatus = exports.AccessType = exports.StartPeriod = exports.FieldElement = exports.Group = exports.VerticalTranslation = exports.SocialNetwork = exports.PricingType = exports.PaymentMethods = exports.LanguageList = exports.Country = exports.BackofficeType = exports.TelemedProvider = exports.SchedulerWeekViewType = exports.ResourceTimetableType = exports.PaymentProvider = exports.InvoiceProvider = exports.FeedBackMinRating = exports.AppointmentExtensionType = exports.SortField = exports.Dir = exports.TalkAnswer = exports.CurrencyList = exports.DiscountProvider = exports.DrinkAnswer = exports.AdditionalFieldType = exports.Sex = exports.ComplaintStatus = exports.AppointmentStatus = exports.AppointmentClientPayment = exports.ReminderStatus = exports.AppointmentClientAppear = void 0;
var AppointmentClientAppear;
(function (AppointmentClientAppear) {
    AppointmentClientAppear["NoAppear"] = "NO_APPEAR";
    AppointmentClientAppear["None"] = "NONE";
    AppointmentClientAppear["YesAppear"] = "YES_APPEAR";
})(AppointmentClientAppear = exports.AppointmentClientAppear || (exports.AppointmentClientAppear = {}));
var ReminderStatus;
(function (ReminderStatus) {
    ReminderStatus["NotSet"] = "NOT_SET";
    ReminderStatus["Off"] = "OFF";
    ReminderStatus["On"] = "ON";
})(ReminderStatus = exports.ReminderStatus || (exports.ReminderStatus = {}));
var AppointmentClientPayment;
(function (AppointmentClientPayment) {
    AppointmentClientPayment["NoPayment"] = "NO_PAYMENT";
    AppointmentClientPayment["None"] = "NONE";
    AppointmentClientPayment["YesPayedFull"] = "YES_PAYED_FULL";
    AppointmentClientPayment["YesPayedOnline"] = "YES_PAYED_ONLINE";
    AppointmentClientPayment["YesPayedPart"] = "YES_PAYED_PART";
})(AppointmentClientPayment = exports.AppointmentClientPayment || (exports.AppointmentClientPayment = {}));
var AppointmentStatus;
(function (AppointmentStatus) {
    AppointmentStatus["Active"] = "ACTIVE";
    AppointmentStatus["CancelledByAdmin"] = "CANCELLED_BY_ADMIN";
    AppointmentStatus["CancelledByBusiness"] = "CANCELLED_BY_BUSINESS";
    AppointmentStatus["CancelledByClient"] = "CANCELLED_BY_CLIENT";
    AppointmentStatus["ConfirmedByAdmin"] = "CONFIRMED_BY_ADMIN";
    AppointmentStatus["ConfirmedByBusiness"] = "CONFIRMED_BY_BUSINESS";
    AppointmentStatus["ConfirmedByClient"] = "CONFIRMED_BY_CLIENT";
    AppointmentStatus["ConfirmedMoved"] = "CONFIRMED_MOVED";
    AppointmentStatus["Denied"] = "DENIED";
    AppointmentStatus["Done"] = "DONE";
    AppointmentStatus["Tentative"] = "TENTATIVE";
    AppointmentStatus["TimedOut"] = "TIMED_OUT";
})(AppointmentStatus = exports.AppointmentStatus || (exports.AppointmentStatus = {}));
var ComplaintStatus;
(function (ComplaintStatus) {
    ComplaintStatus["Checking"] = "CHECKING";
    ComplaintStatus["Closed"] = "CLOSED";
    ComplaintStatus["Entered"] = "ENTERED";
    ComplaintStatus["Invalid"] = "INVALID";
    ComplaintStatus["Investigation"] = "INVESTIGATION";
    ComplaintStatus["NotEntered"] = "NOT_ENTERED";
})(ComplaintStatus = exports.ComplaintStatus || (exports.ComplaintStatus = {}));
var Sex;
(function (Sex) {
    Sex["Empty"] = "";
    Sex["Female"] = "FEMALE";
    Sex["Male"] = "MALE";
    Sex["NotSpecified"] = "NOT_SPECIFIED";
})(Sex = exports.Sex || (exports.Sex = {}));
var AdditionalFieldType;
(function (AdditionalFieldType) {
    AdditionalFieldType["Bool"] = "BOOL";
    AdditionalFieldType["Coupon"] = "COUPON";
    AdditionalFieldType["File"] = "FILE";
    AdditionalFieldType["Radio"] = "RADIO";
    AdditionalFieldType["String"] = "STRING";
})(AdditionalFieldType = exports.AdditionalFieldType || (exports.AdditionalFieldType = {}));
var DrinkAnswer;
(function (DrinkAnswer) {
    DrinkAnswer["Coffee"] = "COFFEE";
    DrinkAnswer["NotImportant"] = "NOT_IMPORTANT";
    DrinkAnswer["Tea"] = "TEA";
})(DrinkAnswer = exports.DrinkAnswer || (exports.DrinkAnswer = {}));
var DiscountProvider;
(function (DiscountProvider) {
    DiscountProvider["Groupon"] = "GROUPON";
    DiscountProvider["Local"] = "LOCAL";
    DiscountProvider["Yandex"] = "YANDEX";
})(DiscountProvider = exports.DiscountProvider || (exports.DiscountProvider = {}));
/**
 * Аббревиатура валюты
 *
 * Аббревиатура валюты (например, RUB - рубль)
 */
var CurrencyList;
(function (CurrencyList) {
    CurrencyList["Cny"] = "CNY";
    CurrencyList["Eur"] = "EUR";
    CurrencyList["Gbp"] = "GBP";
    CurrencyList["Huf"] = "HUF";
    CurrencyList["Ils"] = "ILS";
    CurrencyList["Kzt"] = "KZT";
    CurrencyList["Rub"] = "RUB";
    CurrencyList["Uah"] = "UAH";
    CurrencyList["Usd"] = "USD";
    CurrencyList["Uzs"] = "UZS";
})(CurrencyList = exports.CurrencyList || (exports.CurrencyList = {}));
var TalkAnswer;
(function (TalkAnswer) {
    TalkAnswer["NotImportant"] = "NOT_IMPORTANT";
    TalkAnswer["NotTalk"] = "NOT_TALK";
    TalkAnswer["Talk"] = "TALK";
})(TalkAnswer = exports.TalkAnswer || (exports.TalkAnswer = {}));
var Dir;
(function (Dir) {
    Dir["Asc"] = "asc";
    Dir["Desc"] = "desc";
})(Dir = exports.Dir || (exports.Dir = {}));
var SortField;
(function (SortField) {
    SortField["Created"] = "created";
    SortField["Start"] = "start";
})(SortField = exports.SortField || (exports.SortField = {}));
var AppointmentExtensionType;
(function (AppointmentExtensionType) {
    AppointmentExtensionType["Minutes"] = "MINUTES";
    AppointmentExtensionType["Percent"] = "PERCENT";
})(AppointmentExtensionType = exports.AppointmentExtensionType || (exports.AppointmentExtensionType = {}));
var FeedBackMinRating;
(function (FeedBackMinRating) {
    FeedBackMinRating["The1"] = "1";
    FeedBackMinRating["The2"] = "2";
    FeedBackMinRating["The3"] = "3";
    FeedBackMinRating["The4"] = "4";
    FeedBackMinRating["The5"] = "5";
})(FeedBackMinRating = exports.FeedBackMinRating || (exports.FeedBackMinRating = {}));
var InvoiceProvider;
(function (InvoiceProvider) {
    InvoiceProvider["Disable"] = "DISABLE";
    InvoiceProvider["Icount"] = "icount";
})(InvoiceProvider = exports.InvoiceProvider || (exports.InvoiceProvider = {}));
var PaymentProvider;
(function (PaymentProvider) {
    PaymentProvider["Cloudpayments"] = "cloudpayments";
    PaymentProvider["DeltaProcessing"] = "deltaProcessing";
    PaymentProvider["Disable"] = "DISABLE";
    PaymentProvider["Pelecard"] = "pelecard";
    PaymentProvider["YandexMoney"] = "yandexMoney";
    PaymentProvider["YandexMoneyv3"] = "yandexMoneyv3";
})(PaymentProvider = exports.PaymentProvider || (exports.PaymentProvider = {}));
var ResourceTimetableType;
(function (ResourceTimetableType) {
    ResourceTimetableType["Default"] = "DEFAULT";
    ResourceTimetableType["Evenodd"] = "EVENODD";
})(ResourceTimetableType = exports.ResourceTimetableType || (exports.ResourceTimetableType = {}));
var SchedulerWeekViewType;
(function (SchedulerWeekViewType) {
    SchedulerWeekViewType["Week"] = "week";
    SchedulerWeekViewType["WorkWeek"] = "workWeek";
})(SchedulerWeekViewType = exports.SchedulerWeekViewType || (exports.SchedulerWeekViewType = {}));
var TelemedProvider;
(function (TelemedProvider) {
    TelemedProvider["Disable"] = "DISABLE";
    TelemedProvider["Mmconf"] = "mmconf";
    TelemedProvider["Zoom"] = "zoom";
})(TelemedProvider = exports.TelemedProvider || (exports.TelemedProvider = {}));
var BackofficeType;
(function (BackofficeType) {
    BackofficeType["Common"] = "COMMON";
    BackofficeType["Gt"] = "GT";
    BackofficeType["Ll"] = "LL";
    BackofficeType["Mb"] = "MB";
    BackofficeType["Mu"] = "MU";
})(BackofficeType = exports.BackofficeType || (exports.BackofficeType = {}));
var Country;
(function (Country) {
    Country["Am"] = "AM";
    Country["Blr"] = "BLR";
    Country["Ch"] = "CH";
    Country["De"] = "DE";
    Country["Empty"] = "_";
    Country["Es"] = "ES";
    Country["Fi"] = "FI";
    Country["Fr"] = "FR";
    Country["Ge"] = "GE";
    Country["Hu"] = "HU";
    Country["Il"] = "IL";
    Country["Kz"] = "KZ";
    Country["Li"] = "LI";
    Country["Lt"] = "LT";
    Country["Lv"] = "LV";
    Country["Ru"] = "RU";
    Country["Ua"] = "UA";
    Country["Uk"] = "UK";
    Country["Us"] = "US";
    Country["Uz"] = "UZ";
})(Country = exports.Country || (exports.Country = {}));
var LanguageList;
(function (LanguageList) {
    LanguageList["AmAm"] = "am-am";
    LanguageList["DeDe"] = "de-de";
    LanguageList["EeEe"] = "ee-ee";
    LanguageList["EnUs"] = "en-us";
    LanguageList["EsEs"] = "es-es";
    LanguageList["FiFi"] = "fi-fi";
    LanguageList["FrFr"] = "fr-fr";
    LanguageList["GeGe"] = "ge-ge";
    LanguageList["HeIl"] = "he-il";
    LanguageList["HuHu"] = "hu-hu";
    LanguageList["LtLt"] = "lt-lt";
    LanguageList["LvLv"] = "lv-lv";
    LanguageList["RuRu"] = "ru-ru";
    LanguageList["UzUz"] = "uz-uz";
    LanguageList["ZhCn"] = "zh-cn";
})(LanguageList = exports.LanguageList || (exports.LanguageList = {}));
var PaymentMethods;
(function (PaymentMethods) {
    PaymentMethods["Amex"] = "Amex";
    PaymentMethods["Mastercard"] = "Mastercard";
    PaymentMethods["MoneyBookers"] = "MoneyBookers";
    PaymentMethods["PayPal"] = "PayPal";
    PaymentMethods["Visa"] = "Visa";
})(PaymentMethods = exports.PaymentMethods || (exports.PaymentMethods = {}));
var PricingType;
(function (PricingType) {
    PricingType["Default"] = "DEFAULT";
    PricingType["MasterTopmaster"] = "MASTER_TOPMASTER";
})(PricingType = exports.PricingType || (exports.PricingType = {}));
var SocialNetwork;
(function (SocialNetwork) {
    SocialNetwork["Facebook"] = "Facebook";
    SocialNetwork["GBooking"] = "GBooking";
    SocialNetwork["Google"] = "Google";
    SocialNetwork["LinkedIn"] = "LinkedIn";
    SocialNetwork["Mailru"] = "Mailru";
    SocialNetwork["Odnoklassniki"] = "Odnoklassniki";
    SocialNetwork["Twitter"] = "Twitter";
    SocialNetwork["VKontakte"] = "VKontakte";
    SocialNetwork["Yahoo"] = "Yahoo";
    SocialNetwork["Yandex"] = "Yandex";
})(SocialNetwork = exports.SocialNetwork || (exports.SocialNetwork = {}));
var VerticalTranslation;
(function (VerticalTranslation) {
    VerticalTranslation["Beauty"] = "BEAUTY";
    VerticalTranslation["Fitness"] = "FITNESS";
    VerticalTranslation["Generic"] = "GENERIC";
    VerticalTranslation["Medical"] = "MEDICAL";
    VerticalTranslation["None"] = "NONE";
    VerticalTranslation["Sport"] = "SPORT";
    VerticalTranslation["Yoga"] = "YOGA";
})(VerticalTranslation = exports.VerticalTranslation || (exports.VerticalTranslation = {}));
var Group;
(function (Group) {
    Group["French"] = "FRENCH";
    Group["General"] = "GENERAL";
    Group["Hungarian"] = "HUNGARIAN";
    Group["Latvian"] = "LATVIAN";
})(Group = exports.Group || (exports.Group = {}));
var FieldElement;
(function (FieldElement) {
    FieldElement["Email"] = "email";
    FieldElement["Name"] = "name";
    FieldElement["Surname"] = "surname";
})(FieldElement = exports.FieldElement || (exports.FieldElement = {}));
/**
 * month - по дням месяца (1-е число каждого месяца - нечётно), week - по дням недели
 * (понедельник считается нечётным)
 */
var StartPeriod;
(function (StartPeriod) {
    StartPeriod["Month"] = "month";
    StartPeriod["Week"] = "week";
})(StartPeriod = exports.StartPeriod || (exports.StartPeriod = {}));
/**
 * тип доступа работника в систему через его учётную запись
 */
var AccessType;
(function (AccessType) {
    AccessType["None"] = "NONE";
    AccessType["WorkerExtended"] = "WORKER_EXTENDED";
    AccessType["WorkerSimple"] = "WORKER_SIMPLE";
})(AccessType = exports.AccessType || (exports.AccessType = {}));
var ResourceStatus;
(function (ResourceStatus) {
    ResourceStatus["Active"] = "ACTIVE";
    ResourceStatus["Inactive"] = "INACTIVE";
})(ResourceStatus = exports.ResourceStatus || (exports.ResourceStatus = {}));
/**
 * Тип цены
 */
var AdditionalPriceType;
(function (AdditionalPriceType) {
    AdditionalPriceType["Average"] = "average";
    AdditionalPriceType["BeginWith"] = "begin_with";
    AdditionalPriceType["Equal"] = "equal";
})(AdditionalPriceType = exports.AdditionalPriceType || (exports.AdditionalPriceType = {}));
var ChildrenTaxonomyType;
(function (ChildrenTaxonomyType) {
    ChildrenTaxonomyType["Child"] = "child";
    ChildrenTaxonomyType["None"] = "none";
    ChildrenTaxonomyType["Parent"] = "parent";
})(ChildrenTaxonomyType = exports.ChildrenTaxonomyType || (exports.ChildrenTaxonomyType = {}));
var DateLimitType;
(function (DateLimitType) {
    DateLimitType["AllDates"] = "all_dates";
    DateLimitType["FromDate"] = "from_date";
    DateLimitType["RangeDates"] = "range_dates";
    DateLimitType["ToDate"] = "to_date";
})(DateLimitType = exports.DateLimitType || (exports.DateLimitType = {}));
var Day;
(function (Day) {
    Day["Fri"] = "fri";
    Day["Mon"] = "mon";
    Day["Sat"] = "sat";
    Day["Sun"] = "sun";
    Day["Thu"] = "thu";
    Day["Tue"] = "tue";
    Day["Wed"] = "wed";
})(Day = exports.Day || (exports.Day = {}));
var Repeats;
(function (Repeats) {
    Repeats["Daily"] = "daily";
    Repeats["None"] = "none";
    Repeats["Weekly"] = "weekly";
})(Repeats = exports.Repeats || (exports.Repeats = {}));
var OnlineMode;
(function (OnlineMode) {
    OnlineMode["OncallOnline"] = "ONCALL_ONLINE";
    OnlineMode["PlanClinic"] = "PLAN_CLINIC";
    OnlineMode["PlanClinicOnline"] = "PLAN_CLINIC_ONLINE";
    OnlineMode["PlanOnline"] = "PLAN_ONLINE";
})(OnlineMode = exports.OnlineMode || (exports.OnlineMode = {}));
var TaxonomyType;
(function (TaxonomyType) {
    TaxonomyType["Category"] = "CATEGORY";
    TaxonomyType["Service"] = "SERVICE";
    TaxonomyType["Subcategory"] = "SUBCATEGORY";
})(TaxonomyType = exports.TaxonomyType || (exports.TaxonomyType = {}));
var CracServer;
(function (CracServer) {
    CracServer["Crac"] = "CRAC";
    CracServer["CracProd3"] = "CRAC_PROD3";
})(CracServer = exports.CracServer || (exports.CracServer = {}));
var Rule;
(function (Rule) {
    Rule["Custom"] = "CUSTOM";
    Rule["NearestInteger"] = "NEAREST_INTEGER";
    Rule["TwoDecimals"] = "TWO_DECIMALS";
})(Rule = exports.Rule || (exports.Rule = {}));
var Payment;
(function (Payment) {
    Payment["Optional"] = "OPTIONAL";
    Payment["Required"] = "REQUIRED";
    Payment["Without"] = "WITHOUT";
})(Payment = exports.Payment || (exports.Payment = {}));
var DiscountType;
(function (DiscountType) {
    DiscountType["Percent"] = "PERCENT";
})(DiscountType = exports.DiscountType || (exports.DiscountType = {}));
var UseDirectScheduleRead;
(function (UseDirectScheduleRead) {
    UseDirectScheduleRead["All"] = "ALL";
    UseDirectScheduleRead["Authenticated"] = "AUTHENTICATED";
    UseDirectScheduleRead["Guest"] = "GUEST";
    UseDirectScheduleRead["None"] = "NONE";
})(UseDirectScheduleRead = exports.UseDirectScheduleRead || (exports.UseDirectScheduleRead = {}));
/**
 * тип сортировки работника
 */
var WorkerSortingType;
(function (WorkerSortingType) {
    WorkerSortingType["MostFree"] = "most_free";
    WorkerSortingType["None"] = "none";
    WorkerSortingType["Workload"] = "workload";
})(WorkerSortingType = exports.WorkerSortingType || (exports.WorkerSortingType = {}));
var YandexFeedType;
(function (YandexFeedType) {
    YandexFeedType["Dynamic"] = "dynamic";
    YandexFeedType["No"] = "no";
    YandexFeedType["Static"] = "static";
    YandexFeedType["StaticServiceOnly"] = "static-service-only";
})(YandexFeedType = exports.YandexFeedType || (exports.YandexFeedType = {}));
var PresentStatus;
(function (PresentStatus) {
    PresentStatus["Ready"] = "READY";
    PresentStatus["Received"] = "RECEIVED";
})(PresentStatus = exports.PresentStatus || (exports.PresentStatus = {}));
var Source;
(function (Source) {
    Source["Backoffice"] = "BACKOFFICE";
    Source["MiniWidget"] = "MINI_WIDGET";
    Source["MobileWidget"] = "MOBILE_WIDGET";
    Source["Widget"] = "WIDGET";
})(Source = exports.Source || (exports.Source = {}));
// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
var Convert = /** @class */ (function () {
    function Convert() {
    }
    Convert.toGBookingCoreV2 = function (json) {
        return cast(JSON.parse(json), r("GBookingCoreV2"));
    };
    Convert.gBookingCoreV2ToJson = function (value) {
        return JSON.stringify(uncast(value, r("GBookingCoreV2")), null, 2);
    };
    return Convert;
}());
exports.Convert = Convert;
function invalidValue(typ, val, key) {
    if (key === void 0) { key = ''; }
    if (key) {
        throw Error("Invalid value for key \"" + key + "\". Expected type " + JSON.stringify(typ) + " but got " + JSON.stringify(val));
    }
    throw Error("Invalid value " + JSON.stringify(val) + " for type " + JSON.stringify(typ));
}
function jsonToJSProps(typ) {
    if (typ.jsonToJS === undefined) {
        var map_1 = {};
        typ.props.forEach(function (p) { return map_1[p.json] = { key: p.js, typ: p.typ }; });
        typ.jsonToJS = map_1;
    }
    return typ.jsonToJS;
}
function jsToJSONProps(typ) {
    if (typ.jsToJSON === undefined) {
        var map_2 = {};
        typ.props.forEach(function (p) { return map_2[p.js] = { key: p.json, typ: p.typ }; });
        typ.jsToJSON = map_2;
    }
    return typ.jsToJSON;
}
function transform(val, typ, getProps, key) {
    if (key === void 0) { key = ''; }
    function transformPrimitive(typ, val) {
        if (typeof typ === typeof val)
            return val;
        return invalidValue(typ, val, key);
    }
    function transformUnion(typs, val) {
        // val must validate against one typ in typs
        var l = typs.length;
        for (var i = 0; i < l; i++) {
            var typ_1 = typs[i];
            try {
                return transform(val, typ_1, getProps);
            }
            catch (_) { }
        }
        return invalidValue(typs, val);
    }
    function transformEnum(cases, val) {
        if (cases.indexOf(val) !== -1)
            return val;
        return invalidValue(cases, val);
    }
    function transformArray(typ, val) {
        // val must be an array with no invalid elements
        if (!Array.isArray(val))
            return invalidValue("array", val);
        return val.map(function (el) { return transform(el, typ, getProps); });
    }
    function transformDate(val) {
        if (val === null) {
            return null;
        }
        var d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }
    function transformObject(props, additional, val) {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        var result = {};
        Object.getOwnPropertyNames(props).forEach(function (key) {
            var prop = props[key];
            var v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(function (key) {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }
    if (typ === "any")
        return val;
    if (typ === null) {
        if (val === null)
            return val;
        return invalidValue(typ, val);
    }
    if (typ === false)
        return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ))
        return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems") ? transformArray(typ.arrayItems, val)
                : typ.hasOwnProperty("props") ? transformObject(getProps(typ), typ.additional, val)
                    : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number")
        return transformDate(val);
    return transformPrimitive(typ, val);
}
function cast(val, typ) {
    return transform(val, typ, jsonToJSProps);
}
function uncast(val, typ) {
    return transform(val, typ, jsToJSONProps);
}
function a(typ) {
    return { arrayItems: typ };
}
function u() {
    var typs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        typs[_i] = arguments[_i];
    }
    return { unionMembers: typs };
}
function o(props, additional) {
    return { props: props, additional: additional };
}
function m(additional) {
    return { props: [], additional: additional };
}
function r(name) {
    return { ref: name };
}
var typeMap = {
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
        { json: "data", js: "data", typ: u(undefined, u(m("any"), "")) },
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
        { json: "client_appear", js: "client_appear", typ: u(undefined, r("ClientAppear")) },
        { json: "client_confirm_appointment", js: "client_confirm_appointment", typ: u(undefined, r("ClientConfirmAppointment")) },
        { json: "client_remove_empty_appointment", js: "client_remove_empty_appointment", typ: r("ClientRemoveEmptyAppointment") },
        { json: "finish_appointment", js: "finish_appointment", typ: u(undefined, r("FinishAppointment")) },
        { json: "get_appointment_by_filter", js: "get_appointment_by_filter", typ: u(undefined, r("GetAppointmentByFilter")) },
        { json: "get_appointment_by_showcase", js: "get_appointment_by_showcase", typ: u(undefined, r("GetAppointmentByShowcase")) },
        { json: "get_appointments_by_client_v2", js: "get_appointments_by_client_v2", typ: u(undefined, r("GetAppointmentsByClientV2")) },
        { json: "get_appointments_by_user", js: "get_appointments_by_user", typ: u(undefined, r("GetAppointmentsByUser")) },
        { json: "open_appointment", js: "open_appointment", typ: u(undefined, r("OpenAppointment")) },
        { json: "reserve_appointment", js: "reserve_appointment", typ: r("ReserveAppointment") },
        { json: "start_appointment", js: "start_appointment", typ: u(undefined, r("StartAppointment")) },
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
        { json: "params", js: "params", typ: r("CancelAppointmentByBusinessParams") },
    ], false),
    "CancelAppointmentByBusinessParams": o([
        { json: "appointment", js: "appointment", typ: r("PurpleAppointment") },
        { json: "client", js: "client", typ: u(undefined, r("PurpleClient")) },
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
        { json: "data", js: "data", typ: u(undefined, u(m("any"), "")) },
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
        { json: "params", js: "params", typ: r("CancelAppointmentByClientParams") },
    ], false),
    "CancelAppointmentByClientParams": o([
        { json: "appointment", js: "appointment", typ: r("FluffyAppointment") },
        { json: "client", js: "client", typ: u(undefined, r("FluffyClient")) },
    ], "any"),
    "FluffyAppointment": o([
        { json: "clientID", js: "clientID", typ: u(undefined, "") },
        { json: "id", js: "id", typ: "" },
        { json: "shortId", js: "shortId", typ: u(undefined, "") },
    ], false),
    "FluffyClient": o([
        { json: "clientID", js: "clientID", typ: u(undefined, "") },
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
        { json: "data", js: "data", typ: u(undefined, u(m("any"), "")) },
        { json: "message", js: "message", typ: "" },
    ], "any"),
    "ClientAppear": o([
        { json: "request", js: "request", typ: r("AppointmentClientAppearRequest") },
        { json: "response", js: "response", typ: r("AppointmentClientAppearResponse") },
    ], false),
    "AppointmentClientAppearRequest": o([
        { json: "cred", js: "cred", typ: u(undefined, r("Cred")) },
        { json: "id", js: "id", typ: u(3.14, "") },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "method", js: "method", typ: "" },
        { json: "params", js: "params", typ: r("ClientAppearParams") },
    ], false),
    "ClientAppearParams": o([
        { json: "appointment", js: "appointment", typ: r("TentacledAppointment") },
        { json: "business", js: "business", typ: r("PurpleBusiness") },
    ], "any"),
    "TentacledAppointment": o([
        { json: "client_appear", js: "client_appear", typ: r("AppointmentClientAppear") },
        { json: "id", js: "id", typ: "" },
    ], false),
    "PurpleBusiness": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "AppointmentClientAppearResponse": o([
        { json: "id", js: "id", typ: 3.14 },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "result", js: "result", typ: u(undefined, true) },
        { json: "error", js: "error", typ: u(undefined, r("AppointmentClientAppearResponseError")) },
    ], false),
    "AppointmentClientAppearResponseError": o([
        { json: "code", js: "code", typ: 3.14 },
        { json: "data", js: "data", typ: u(undefined, u(m("any"), "")) },
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
        { json: "params", js: "params", typ: r("ConfirmAppointmentParams") },
    ], false),
    "ConfirmAppointmentParams": o([
        { json: "appointment", js: "appointment", typ: r("StickyAppointment") },
        { json: "client", js: "client", typ: r("ClientObject") },
        { json: "contract", js: "contract", typ: u(undefined, r("PurpleContract")) },
    ], "any"),
    "StickyAppointment": o([
        { json: "id", js: "id", typ: "" },
        { json: "reminder", js: "reminder", typ: u(undefined, r("AppointmentReminder")) },
        { json: "source", js: "source", typ: u(undefined, "") },
    ], false),
    "AppointmentReminder": o([
        { json: "status", js: "status", typ: u(undefined, r("ReminderStatus")) },
        { json: "time_reminder", js: "time_reminder", typ: u(undefined, 3.14) },
    ], false),
    "ClientObject": o([
        { json: "comment", js: "comment", typ: u(undefined, "") },
        { json: "id", js: "id", typ: "" },
    ], "any"),
    "PurpleContract": o([
        { json: "clientContractID", js: "clientContractID", typ: u(undefined, "") },
        { json: "contractID", js: "contractID", typ: u(undefined, "") },
        { json: "id", js: "id", typ: u(undefined, "") },
    ], "any"),
    "AppointmentClientConfirmAppointmentResponse": o([
        { json: "id", js: "id", typ: 3.14 },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "result", js: "result", typ: u(undefined, r("Appointment")) },
        { json: "error", js: "error", typ: u(undefined, r("AppointmentClientConfirmAppointmentResponseError")) },
    ], false),
    "AppointmentClientConfirmAppointmentResponseError": o([
        { json: "code", js: "code", typ: 3.14 },
        { json: "data", js: "data", typ: u(undefined, u(m("any"), "")) },
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
        { json: "contract", js: "contract", typ: u(undefined, r("AppointmentContract")) },
        { json: "createdUser", js: "createdUser", typ: u(undefined, r("CreatedUser")) },
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
        { json: "reminder", js: "reminder", typ: r("ResultReminder") },
        { json: "removedClientsData", js: "removedClientsData", typ: a(r("RemovedClientsDatum")) },
        { json: "resource", js: "resource", typ: r("AppointmentResource") },
        { json: "review", js: "review", typ: u(undefined, r("Review")) },
        { json: "room", js: "room", typ: u(undefined, r("Room")) },
        { json: "showcase", js: "showcase", typ: r("AppointmentShowcase") },
        { json: "socialToken", js: "socialToken", typ: u(undefined, "") },
        { json: "source", js: "source", typ: "" },
        { json: "taxonomy", js: "taxonomy", typ: r("AppointmentTaxonomy") },
        { json: "telemedData", js: "telemedData", typ: u(undefined, r("TelemedDataClass")) },
        { json: "third_party", js: "third_party", typ: u(undefined, a(m("any"))) },
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
        { json: "incomingPhone", js: "incomingPhone", typ: u(undefined, r("IncomingPhoneObject")) },
        { json: "israelCity", js: "israelCity", typ: u(undefined, u(r("IsraelCityClass"), null)) },
        { json: "isVIP", js: "isVIP", typ: u(undefined, true) },
        { json: "kupatHolim", js: "kupatHolim", typ: u(undefined, u(r("KupatHolimClass"), null)) },
        { json: "language", js: "language", typ: u(undefined, "") },
        { json: "middleName", js: "middleName", typ: u(undefined, u(null, "")) },
        { json: "name", js: "name", typ: "" },
        { json: "passportId", js: "passportId", typ: u(undefined, u(null, "")) },
        { json: "phone", js: "phone", typ: u(undefined, a(r("AdditionalClientPhone"))) },
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
        { json: "value", js: "value", typ: u(undefined, u(a("any"), true, 3.14, m("any"), null, "")) },
    ], false),
    "IncomingPhoneObject": o([
        { json: "area_code", js: "area_code", typ: u(undefined, "") },
        { json: "country_code", js: "country_code", typ: u(undefined, "") },
        { json: "number", js: "number", typ: u(undefined, "") },
    ], "any"),
    "IsraelCityClass": o([
        { json: "cityId", js: "cityId", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], false),
    "KupatHolimClass": o([
        { json: "kupatHolimId", js: "kupatHolimId", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], false),
    "AdditionalClientPhone": o([
        { json: "area_code", js: "area_code", typ: "" },
        { json: "country_code", js: "country_code", typ: "" },
        { json: "number", js: "number", typ: "" },
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
        { json: "confirmationAlert", js: "confirmationAlert", typ: u(undefined, "") },
        { json: "extraDescription", js: "extraDescription", typ: u(undefined, "") },
        { json: "extraId", js: "extraId", typ: u(undefined, "") },
        { json: "id", js: "id", typ: "" },
        { json: "siteId", js: "siteId", typ: u(undefined, "") },
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
        { json: "additionalTaxonomyDiscount", js: "additionalTaxonomyDiscount", typ: u(undefined, a(r("PurpleAdditionalTaxonomyDiscount"))) },
        { json: "amount", js: "amount", typ: u(undefined, 3.14) },
        { json: "currency", js: "currency", typ: r("CurrencyList") },
        { json: "discount", js: "discount", typ: u(undefined, 3.14) },
        { json: "discountProvider", js: "discountProvider", typ: u(undefined, r("DiscountProvider")) },
        { json: "discountType", js: "discountType", typ: u(undefined, "") },
        { json: "originalAmount", js: "originalAmount", typ: u(undefined, u(3.14, null)) },
    ], false),
    "PurpleAdditionalTaxonomyDiscount": o([
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
        { json: "incomingPhone", js: "incomingPhone", typ: u(undefined, r("IncomingPhoneObject")) },
        { json: "israelCity", js: "israelCity", typ: u(undefined, u(r("IsraelCityClass"), null)) },
        { json: "isVIP", js: "isVIP", typ: u(undefined, true) },
        { json: "kupatHolim", js: "kupatHolim", typ: u(undefined, u(r("KupatHolimClass"), null)) },
        { json: "language", js: "language", typ: u(undefined, "") },
        { json: "middleName", js: "middleName", typ: u(undefined, u(null, "")) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "passportId", js: "passportId", typ: u(undefined, u(null, "")) },
        { json: "phone", js: "phone", typ: u(undefined, a(r("AdditionalClientPhone"))) },
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
        { json: "phone", js: "phone", typ: u(undefined, a(r("AdditionalClientPhone"))) },
        { json: "sex", js: "sex", typ: u(undefined, r("Sex")) },
    ], "any"),
    "AppointmentContract": o([
        { json: "clientContractID", js: "clientContractID", typ: u(undefined, "") },
        { json: "contractID", js: "contractID", typ: u(undefined, "") },
        { json: "id", js: "id", typ: u(undefined, "") },
    ], "any"),
    "CreatedUser": o([
        { json: "email", js: "email", typ: u(undefined, "") },
        { json: "id", js: "id", typ: "" },
        { json: "middleName", js: "middleName", typ: u(undefined, "") },
        { json: "name", js: "name", typ: "" },
        { json: "surname", js: "surname", typ: u(undefined, "") },
    ], false),
    "Location": o([
        { json: "latitude", js: "latitude", typ: 3.14 },
        { json: "longitude", js: "longitude", typ: 3.14 },
    ], false),
    "Order": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "ResultReminder": o([
        { json: "status", js: "status", typ: r("ReminderStatus") },
        { json: "time_reminder", js: "time_reminder", typ: u(undefined, 3.14) },
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
        { json: "degree", js: "degree", typ: u(undefined, "") },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "experience", js: "experience", typ: u(undefined, "") },
        { json: "extraID", js: "extraID", typ: u(undefined, u(null, "")) },
        { json: "icon_url", js: "icon_url", typ: u(undefined, "") },
        { json: "id", js: "id", typ: "" },
        { json: "middleName", js: "middleName", typ: u(undefined, "") },
        { json: "name", js: "name", typ: "" },
        { json: "profession", js: "profession", typ: u(undefined, "") },
        { json: "siteId", js: "siteId", typ: u(undefined, "") },
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
    "TelemedDataClass": o([
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "joinUrl", js: "joinUrl", typ: u(undefined, "") },
        { json: "password", js: "password", typ: u(undefined, "") },
        { json: "shortJoinUrl", js: "shortJoinUrl", typ: u(undefined, "") },
        { json: "shortStartUrl", js: "shortStartUrl", typ: u(undefined, "") },
        { json: "startUrl", js: "startUrl", typ: u(undefined, "") },
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
        { json: "appointment", js: "appointment", typ: r("IndigoAppointment") },
        { json: "business", js: "business", typ: r("FluffyBusiness") },
    ], "any"),
    "IndigoAppointment": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "FluffyBusiness": o([
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
        { json: "data", js: "data", typ: u(undefined, u(m("any"), "")) },
        { json: "message", js: "message", typ: "" },
    ], "any"),
    "FinishAppointment": o([
        { json: "request", js: "request", typ: r("AppointmentFinishAppointmentRequest") },
        { json: "response", js: "response", typ: r("AppointmentFinishAppointmentResponse") },
    ], false),
    "AppointmentFinishAppointmentRequest": o([
        { json: "cred", js: "cred", typ: u(undefined, r("Cred")) },
        { json: "id", js: "id", typ: u(3.14, "") },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "method", js: "method", typ: "" },
        { json: "params", js: "params", typ: r("FinishAppointmentParams") },
    ], false),
    "FinishAppointmentParams": o([
        { json: "appointment", js: "appointment", typ: r("IndecentAppointment") },
        { json: "business", js: "business", typ: r("TentacledBusiness") },
    ], "any"),
    "IndecentAppointment": o([
        { json: "finish", js: "finish", typ: u(undefined, "") },
        { json: "id", js: "id", typ: "" },
    ], false),
    "TentacledBusiness": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "AppointmentFinishAppointmentResponse": o([
        { json: "id", js: "id", typ: 3.14 },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "result", js: "result", typ: u(undefined, true) },
        { json: "error", js: "error", typ: u(undefined, r("AppointmentFinishAppointmentResponseError")) },
    ], false),
    "AppointmentFinishAppointmentResponseError": o([
        { json: "code", js: "code", typ: 3.14 },
        { json: "data", js: "data", typ: u(undefined, u(m("any"), "")) },
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
        { json: "business", js: "business", typ: u(undefined, r("StickyBusiness")) },
        { json: "contract", js: "contract", typ: u(undefined, r("FluffyContract")) },
        { json: "extraFilters", js: "extraFilters", typ: u(undefined, r("PurpleExtraFilters")) },
        { json: "filter", js: "filter", typ: u(undefined, r("PurpleFilter")) },
        { json: "network", js: "network", typ: u(undefined, r("PurpleNetwork")) },
        { json: "page", js: "page", typ: 3.14 },
        { json: "pageSize", js: "pageSize", typ: 3.14 },
        { json: "skipBusinessCancelled", js: "skipBusinessCancelled", typ: u(undefined, true) },
    ], "any"),
    "StickyBusiness": o([
        { json: "id", js: "id", typ: u(undefined, u(3.14, "")) },
    ], false),
    "FluffyContract": o([
        { json: "extraId", js: "extraId", typ: u(undefined, "") },
        { json: "id", js: "id", typ: u(undefined, "") },
    ], "any"),
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
        { json: "data", js: "data", typ: u(undefined, u(m("any"), "")) },
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
        { json: "business", js: "business", typ: r("IndigoBusiness") },
        { json: "created", js: "created", typ: u(undefined, r("ParamsCreated")) },
        { json: "page", js: "page", typ: 3.14 },
        { json: "pageSize", js: "pageSize", typ: 3.14 },
        { json: "source", js: "source", typ: u(undefined, "") },
    ], "any"),
    "IndigoBusiness": o([
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
        { json: "data", js: "data", typ: u(undefined, u(m("any"), "")) },
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
        { json: "business", js: "business", typ: r("IndecentBusiness") },
        { json: "client", js: "client", typ: r("TentacledClient") },
        { json: "extraFilters", js: "extraFilters", typ: u(undefined, r("FluffyExtraFilters")) },
        { json: "filter", js: "filter", typ: u(undefined, r("FluffyFilter")) },
        { json: "network", js: "network", typ: u(undefined, r("FluffyNetwork")) },
        { json: "skipBusinessCancelled", js: "skipBusinessCancelled", typ: u(undefined, true) },
    ], "any"),
    "IndecentBusiness": o([
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
        { json: "appointmentId", js: "appointmentId", typ: u(undefined, "") },
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
        { json: "result", js: "result", typ: u(undefined, a(r("Appointment"))) },
        { json: "error", js: "error", typ: u(undefined, r("AppointmentGetAppointmentsByClientV2ResponseError")) },
    ], false),
    "AppointmentGetAppointmentsByClientV2ResponseError": o([
        { json: "code", js: "code", typ: 3.14 },
        { json: "data", js: "data", typ: u(undefined, u(m("any"), "")) },
        { json: "message", js: "message", typ: "" },
    ], "any"),
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
        { json: "business", js: "business", typ: u(undefined, r("HilariousBusiness")) },
        { json: "contract", js: "contract", typ: u(undefined, r("TentacledContract")) },
        { json: "extraFilters", js: "extraFilters", typ: u(undefined, r("TentacledExtraFilters")) },
        { json: "fill_business_data", js: "fill_business_data", typ: u(undefined, true) },
        { json: "filter", js: "filter", typ: u(undefined, r("TentacledFilter")) },
        { json: "network", js: "network", typ: u(undefined, r("TentacledNetwork")) },
        { json: "page", js: "page", typ: 3.14 },
        { json: "pageSize", js: "pageSize", typ: 3.14 },
        { json: "skipBusinessCancelled", js: "skipBusinessCancelled", typ: u(undefined, true) },
    ], "any"),
    "HilariousBusiness": o([
        { json: "id", js: "id", typ: u(3.14, "") },
    ], false),
    "TentacledContract": o([
        { json: "extraId", js: "extraId", typ: u(undefined, "") },
        { json: "id", js: "id", typ: u(undefined, "") },
    ], "any"),
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
        { json: "data", js: "data", typ: u(undefined, u(m("any"), "")) },
        { json: "message", js: "message", typ: "" },
    ], "any"),
    "AppointmentGetAppointmentsByUserResponseResult": o([
        { json: "data", js: "data", typ: a(r("Appointment")) },
        { json: "page", js: "page", typ: 3.14 },
        { json: "total", js: "total", typ: 3.14 },
        { json: "unconfirmed", js: "unconfirmed", typ: u(undefined, 3.14) },
    ], "any"),
    "OpenAppointment": o([
        { json: "request", js: "request", typ: r("AppointmentOpenAppointmentRequest") },
        { json: "response", js: "response", typ: r("AppointmentOpenAppointmentResponse") },
    ], false),
    "AppointmentOpenAppointmentRequest": o([
        { json: "cred", js: "cred", typ: u(undefined, r("Cred")) },
        { json: "id", js: "id", typ: u(3.14, "") },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "method", js: "method", typ: "" },
        { json: "params", js: "params", typ: r("OpenAppointmentParams") },
    ], false),
    "OpenAppointmentParams": o([
        { json: "appointment", js: "appointment", typ: r("HilariousAppointment") },
        { json: "business", js: "business", typ: r("AmbitiousBusiness") },
    ], "any"),
    "HilariousAppointment": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "AmbitiousBusiness": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "AppointmentOpenAppointmentResponse": o([
        { json: "id", js: "id", typ: 3.14 },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "result", js: "result", typ: u(undefined, true) },
        { json: "error", js: "error", typ: u(undefined, r("AppointmentOpenAppointmentResponseError")) },
    ], false),
    "AppointmentOpenAppointmentResponseError": o([
        { json: "code", js: "code", typ: 3.14 },
        { json: "data", js: "data", typ: u(undefined, u(m("any"), "")) },
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
        { json: "business", js: "business", typ: r("CunningBusiness") },
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
        { json: "additionalTaxonomyDiscount", js: "additionalTaxonomyDiscount", typ: u(undefined, a(r("FluffyAdditionalTaxonomyDiscount"))) },
        { json: "amount", js: "amount", typ: u(undefined, 3.14) },
        { json: "currency", js: "currency", typ: r("CurrencyList") },
        { json: "discount", js: "discount", typ: u(undefined, 3.14) },
        { json: "discountProvider", js: "discountProvider", typ: u(undefined, r("DiscountProvider")) },
        { json: "discountType", js: "discountType", typ: u(undefined, "") },
        { json: "originalAmount", js: "originalAmount", typ: u(undefined, 3.14) },
    ], false),
    "FluffyAdditionalTaxonomyDiscount": o([
        { json: "discount", js: "discount", typ: u(undefined, 3.14) },
        { json: "discountProvider", js: "discountProvider", typ: u(undefined, r("DiscountProvider")) },
        { json: "discountType", js: "discountType", typ: u(undefined, "") },
        { json: "taxonomyID", js: "taxonomyID", typ: u(undefined, "") },
    ], false),
    "CunningBusiness": o([
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
        { json: "data", js: "data", typ: u(undefined, u(m("any"), "")) },
        { json: "message", js: "message", typ: "" },
    ], "any"),
    "StartAppointment": o([
        { json: "request", js: "request", typ: r("AppointmentStartAppointmentRequest") },
        { json: "response", js: "response", typ: r("AppointmentStartAppointmentResponse") },
    ], false),
    "AppointmentStartAppointmentRequest": o([
        { json: "cred", js: "cred", typ: u(undefined, r("Cred")) },
        { json: "id", js: "id", typ: u(3.14, "") },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "method", js: "method", typ: "" },
        { json: "params", js: "params", typ: r("StartAppointmentParams") },
    ], false),
    "StartAppointmentParams": o([
        { json: "appointment", js: "appointment", typ: r("AmbitiousAppointment") },
        { json: "business", js: "business", typ: r("MagentaBusiness") },
    ], "any"),
    "AmbitiousAppointment": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "MagentaBusiness": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "AppointmentStartAppointmentResponse": o([
        { json: "id", js: "id", typ: 3.14 },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "result", js: "result", typ: u(undefined, true) },
        { json: "error", js: "error", typ: u(undefined, r("AppointmentStartAppointmentResponseError")) },
    ], false),
    "AppointmentStartAppointmentResponseError": o([
        { json: "code", js: "code", typ: 3.14 },
        { json: "data", js: "data", typ: u(undefined, u(m("any"), "")) },
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
        { json: "contract", js: "contract", typ: u(undefined, r("StickyContract")) },
        { json: "networkID", js: "networkID", typ: u(3.14, "") },
        { json: "resource", js: "resource", typ: u(undefined, r("ResourceObject")) },
        { json: "taxonomy", js: "taxonomy", typ: u(undefined, r("TaxonomyObject")) },
        { json: "with_business_info", js: "with_business_info", typ: u(undefined, true) },
    ], false),
    "StickyContract": o([
        { json: "extraId", js: "extraId", typ: u(undefined, "") },
        { json: "id", js: "id", typ: u(undefined, "") },
    ], "any"),
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
        { json: "data", js: "data", typ: u(undefined, u(m("any"), "")) },
        { json: "message", js: "message", typ: "" },
    ], "any"),
    "ResultClass": o([
        { json: "businessConfiguration", js: "businessConfiguration", typ: m("any") },
        { json: "businesses", js: "businesses", typ: a(r("BusinessRefInNetwork")) },
        { json: "clientVIPPhones", js: "clientVIPPhones", typ: a("") },
        { json: "grantGroups", js: "grantGroups", typ: a(m("any")) },
        { json: "integrationData", js: "integrationData", typ: u(undefined, r("IntegrationDataObject")) },
        { json: "networkClientBlockingSettings", js: "networkClientBlockingSettings", typ: u(undefined, r("NetworkClientBlockingSettings")) },
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
        { json: "enableServiceOrModeFilter", js: "enableServiceOrModeFilter", typ: u(undefined, true) },
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
        { json: "paymentProvider", js: "paymentProvider", typ: u(undefined, r("PaymentProvider")) },
        { json: "readonlyResourceSchedule", js: "readonlyResourceSchedule", typ: u(undefined, true) },
        { json: "resourceSurnameFirst", js: "resourceSurnameFirst", typ: u(undefined, true) },
        { json: "resourceTimetableType", js: "resourceTimetableType", typ: u(undefined, r("ResourceTimetableType")) },
        { json: "resoureLoginHideCancelledAppointment", js: "resoureLoginHideCancelledAppointment", typ: u(undefined, true) },
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
        { json: "showGuaranteeLettersScreen", js: "showGuaranteeLettersScreen", typ: u(undefined, true) },
        { json: "showHouseNumber", js: "showHouseNumber", typ: u(undefined, true) },
        { json: "showIsraelCity", js: "showIsraelCity", typ: u(undefined, true) },
        { json: "showKupatHolim", js: "showKupatHolim", typ: u(undefined, true) },
        { json: "showLeadsScreen", js: "showLeadsScreen", typ: u(undefined, true) },
        { json: "showManualChanges", js: "showManualChanges", typ: u(undefined, true) },
        { json: "showPartnersContractScreen", js: "showPartnersContractScreen", typ: u(undefined, true) },
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
        { json: "telemedApplication", js: "telemedApplication", typ: u(undefined, r("PurpleTelemedApplication")) },
        { json: "telemedProvider", js: "telemedProvider", typ: u(undefined, r("TelemedProvider")) },
        { json: "useAdditionalDurations", js: "useAdditionalDurations", typ: u(undefined, true) },
        { json: "useAdjacentTaxonomies", js: "useAdjacentTaxonomies", typ: u(undefined, true) },
        { json: "useAdjacentTaxonomiesSlotSplitting", js: "useAdjacentTaxonomiesSlotSplitting", typ: u(undefined, true) },
        { json: "useGtAppMethod", js: "useGtAppMethod", typ: u(undefined, true) },
        { json: "workWeekEnd", js: "workWeekEnd", typ: u(undefined, 3.14) },
        { json: "workWeekStart", js: "workWeekStart", typ: u(undefined, 3.14) },
    ], false),
    "PurpleTelemedApplication": o([
        { json: "appleAppName", js: "appleAppName", typ: u(undefined, "") },
        { json: "googleAppName", js: "googleAppName", typ: u(undefined, "") },
        { json: "urlAppSchema", js: "urlAppSchema", typ: u(undefined, "") },
    ], false),
    "InfoBackofficeConfigurationObject": o([
        { json: "enableExtendedPhone", js: "enableExtendedPhone", typ: u(undefined, true) },
        { json: "enableMasterImportance", js: "enableMasterImportance", typ: u(undefined, true) },
        { json: "enablePhoneNationalMode", js: "enablePhoneNationalMode", typ: u(undefined, true) },
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
        { json: "requiredField", js: "requiredField", typ: u(undefined, true) },
        { json: "shortName", js: "shortName", typ: "" },
        { json: "type", js: "type", typ: r("AdditionalFieldType") },
        { json: "value", js: "value", typ: u(undefined, "") },
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
        { json: "denyWidgetBooking", js: "denyWidgetBooking", typ: u(undefined, true) },
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
        { json: "telemedData", js: "telemedData", typ: u(undefined, r("TelemedDataObject")) },
        { json: "telemedWorker", js: "telemedWorker", typ: u(undefined, true) },
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
    "TelemedDataObject": o([
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
        { json: "confirmationEmailAlert", js: "confirmationEmailAlert", typ: u(undefined, "") },
        { json: "confirmationSmsAlert", js: "confirmationSmsAlert", typ: u(undefined, "") },
        { json: "dateLimits", js: "dateLimits", typ: u(undefined, a(r("PurpleDateLimit"))) },
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
        { json: "days", js: "days", typ: u(undefined, a(r("Day"))) },
        { json: "repeats", js: "repeats", typ: u(undefined, r("Repeats")) },
        { json: "slots", js: "slots", typ: u(undefined, a(r("SlotObject"))) },
        { json: "start", js: "start", typ: u(undefined, Date) },
        { json: "unlimWeeklyRepeat", js: "unlimWeeklyRepeat", typ: u(undefined, true) },
        { json: "weeklyRepeat", js: "weeklyRepeat", typ: u(undefined, 3.14) },
    ], false),
    "SlotObject": o([
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
        { json: "cracBuildDays", js: "cracBuildDays", typ: u(undefined, 3.14) },
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
        { json: "paymentProvider", js: "paymentProvider", typ: u(undefined, r("PaymentProvider")) },
        { json: "requireAgreement", js: "requireAgreement", typ: u(undefined, true) },
        { json: "requireAgreementLink", js: "requireAgreementLink", typ: u(undefined, "") },
        { json: "revisionVersion", js: "revisionVersion", typ: u(undefined, 3.14) },
        { json: "service_unavailability_text", js: "service_unavailability_text", typ: u(undefined, "") },
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
        { json: "sortWorkers", js: "sortWorkers", typ: u(undefined, m("any")) },
        { json: "sortWorkersByName", js: "sortWorkersByName", typ: u(undefined, true) },
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
        { json: "worker_widget_unavailability_text", js: "worker_widget_unavailability_text", typ: u(undefined, "") },
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
    "IntegrationDataObject": o([
        { json: "ehr", js: "ehr", typ: u(undefined, r("Ehr")) },
    ], "any"),
    "Ehr": o([
        { json: "active", js: "active", typ: u(undefined, true) },
    ], "any"),
    "NetworkClientBlockingSettings": o([
        { json: "appointmentClientBlock", js: "appointmentClientBlock", typ: u(undefined, true) },
        { json: "appointmentClientBlockDays", js: "appointmentClientBlockDays", typ: u(undefined, 3.14) },
        { json: "appointmentClientBlockText", js: "appointmentClientBlockText", typ: u(undefined, "") },
        { json: "blockIfFutureRecordExists", js: "blockIfFutureRecordExists", typ: u(undefined, true) },
        { json: "blockRepeatedRecordsCount", js: "blockRepeatedRecordsCount", typ: u(undefined, 3.14) },
        { json: "blockRepeatedRecordsRange", js: "blockRepeatedRecordsRange", typ: u(undefined, 3.14) },
        { json: "blockRepeatedRecordsText", js: "blockRepeatedRecordsText", typ: u(undefined, "") },
    ], false),
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
        { json: "business", js: "business", typ: r("FriskyBusiness") },
        { json: "contract", js: "contract", typ: u(undefined, r("ContractClass")) },
        { json: "desktop_discounts", js: "desktop_discounts", typ: u(undefined, true) },
        { json: "only_active_workers", js: "only_active_workers", typ: u(undefined, true) },
        { json: "show_inactive_workers", js: "show_inactive_workers", typ: u(undefined, true) },
        { json: "showcase_business_id", js: "showcase_business_id", typ: u(undefined, u(3.14, "")) },
        { json: "skip_worker_sorting", js: "skip_worker_sorting", typ: u(undefined, true) },
        { json: "use_optimized_cache", js: "use_optimized_cache", typ: u(undefined, true) },
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
    "FriskyBusiness": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "ContractClass": o([
        { json: "extraId", js: "extraId", typ: u(undefined, "") },
        { json: "id", js: "id", typ: u(undefined, "") },
    ], false),
    "BusinessGetProfileByIdResponse": o([
        { json: "id", js: "id", typ: u(undefined, 3.14) },
        { json: "jsonrpc", js: "jsonrpc", typ: u(undefined, "") },
        { json: "result", js: "result", typ: u(undefined, r("BusinessGetProfileByIdResponseResult")) },
        { json: "error", js: "error", typ: u(undefined, r("BusinessGetProfileByIdResponseError")) },
    ], "any"),
    "BusinessGetProfileByIdResponseError": o([
        { json: "code", js: "code", typ: 3.14 },
        { json: "data", js: "data", typ: u(undefined, u(m("any"), "")) },
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
        { json: "enableServiceOrModeFilter", js: "enableServiceOrModeFilter", typ: u(undefined, true) },
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
        { json: "paymentProvider", js: "paymentProvider", typ: u(undefined, r("PaymentProvider")) },
        { json: "readonlyResourceSchedule", js: "readonlyResourceSchedule", typ: u(undefined, true) },
        { json: "resourceSurnameFirst", js: "resourceSurnameFirst", typ: u(undefined, true) },
        { json: "resourceTimetableType", js: "resourceTimetableType", typ: u(undefined, r("ResourceTimetableType")) },
        { json: "resoureLoginHideCancelledAppointment", js: "resoureLoginHideCancelledAppointment", typ: u(undefined, true) },
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
        { json: "showGuaranteeLettersScreen", js: "showGuaranteeLettersScreen", typ: u(undefined, true) },
        { json: "showHouseNumber", js: "showHouseNumber", typ: u(undefined, true) },
        { json: "showIsraelCity", js: "showIsraelCity", typ: u(undefined, true) },
        { json: "showKupatHolim", js: "showKupatHolim", typ: u(undefined, true) },
        { json: "showLeadsScreen", js: "showLeadsScreen", typ: u(undefined, true) },
        { json: "showManualChanges", js: "showManualChanges", typ: u(undefined, true) },
        { json: "showPartnersContractScreen", js: "showPartnersContractScreen", typ: u(undefined, true) },
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
        { json: "telemedApplication", js: "telemedApplication", typ: u(undefined, r("FluffyTelemedApplication")) },
        { json: "telemedProvider", js: "telemedProvider", typ: u(undefined, r("TelemedProvider")) },
        { json: "useAdditionalDurations", js: "useAdditionalDurations", typ: u(undefined, true) },
        { json: "useAdjacentTaxonomies", js: "useAdjacentTaxonomies", typ: u(undefined, true) },
        { json: "useAdjacentTaxonomiesSlotSplitting", js: "useAdjacentTaxonomiesSlotSplitting", typ: u(undefined, true) },
        { json: "useGtAppMethod", js: "useGtAppMethod", typ: u(undefined, true) },
        { json: "workWeekEnd", js: "workWeekEnd", typ: u(undefined, 3.14) },
        { json: "workWeekStart", js: "workWeekStart", typ: u(undefined, 3.14) },
    ], false),
    "ScheduleSplitDayTimeInterval": o([
        { json: "_id", js: "_id", typ: u(undefined, "") },
        { json: "endHour", js: "endHour", typ: u(undefined, 3.14) },
        { json: "endMinute", js: "endMinute", typ: u(undefined, 3.14) },
        { json: "schedulerTick", js: "schedulerTick", typ: u(undefined, 3.14) },
        { json: "selected", js: "selected", typ: u(undefined, true) },
        { json: "startHour", js: "startHour", typ: u(undefined, 3.14) },
        { json: "startMinute", js: "startMinute", typ: u(undefined, 3.14) },
        { json: "title", js: "title", typ: u(undefined, "") },
    ], false),
    "FluffyTelemedApplication": o([
        { json: "appleAppName", js: "appleAppName", typ: u(undefined, "") },
        { json: "googleAppName", js: "googleAppName", typ: u(undefined, "") },
        { json: "urlAppSchema", js: "urlAppSchema", typ: u(undefined, "") },
    ], false),
    "BusinessBackofficeConfigurationObject": o([
        { json: "enableExtendedPhone", js: "enableExtendedPhone", typ: u(undefined, true) },
        { json: "enableMasterImportance", js: "enableMasterImportance", typ: u(undefined, true) },
        { json: "enablePhoneNationalMode", js: "enablePhoneNationalMode", typ: u(undefined, true) },
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
        { json: "stockAmount", js: "stockAmount", typ: u(undefined, u(null, "")) },
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
        { json: "paymentProvider", js: "paymentProvider", typ: u(undefined, r("PaymentProvider")) },
        { json: "requireAgreement", js: "requireAgreement", typ: u(undefined, true) },
        { json: "requireAgreementLink", js: "requireAgreementLink", typ: u(undefined, "") },
        { json: "revisionVersion", js: "revisionVersion", typ: u(undefined, 3.14) },
        { json: "service_unavailability_text", js: "service_unavailability_text", typ: u(undefined, "") },
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
        { json: "sortWorkers", js: "sortWorkers", typ: u(undefined, m("any")) },
        { json: "sortWorkersByName", js: "sortWorkersByName", typ: u(undefined, true) },
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
        { json: "worker_widget_unavailability_text", js: "worker_widget_unavailability_text", typ: u(undefined, "") },
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
        { json: "update_client_info", js: "update_client_info", typ: r("UpdateClientInfo") },
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
        { json: "business", js: "business", typ: r("MischievousBusiness") },
        { json: "client", js: "client", typ: r("ClientClass") },
        { json: "profile", js: "profile", typ: u(undefined, r("ParamsProfile")) },
        { json: "skipEmailCheck", js: "skipEmailCheck", typ: u(undefined, true) },
        { json: "skipProfileUpdate", js: "skipProfileUpdate", typ: u(undefined, true) },
    ], false),
    "MischievousBusiness": o([
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
        { json: "created", js: "created", typ: u(undefined, "") },
        { json: "creatorProfileID", js: "creatorProfileID", typ: u(undefined, u(null, "")) },
        { json: "creatorProfileName", js: "creatorProfileName", typ: u(undefined, u(null, "")) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "discountCode", js: "discountCode", typ: u(undefined, "") },
        { json: "driverLicense", js: "driverLicense", typ: u(undefined, u(null, "")) },
        { json: "email", js: "email", typ: u(undefined, a("")) },
        { json: "extraFields", js: "extraFields", typ: u(undefined, a(r("ClientExtraField"))) },
        { json: "extraID", js: "extraID", typ: u(undefined, "") },
        { json: "favResources", js: "favResources", typ: u(undefined, a(r("ClientFavResource"))) },
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
        { json: "lastCreatedAppointment", js: "lastCreatedAppointment", typ: u(undefined, u(m("any"), null)) },
        { json: "lastVisitedAppointment", js: "lastVisitedAppointment", typ: u(undefined, u(m("any"), null)) },
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
        { json: "statistics", js: "statistics", typ: u(undefined, r("Statistics")) },
        { json: "status", js: "status", typ: u(undefined, r("ResourceStatus")) },
        { json: "surname", js: "surname", typ: "" },
        { json: "taxiPark", js: "taxiPark", typ: u(undefined, u(null, "")) },
        { json: "taxiParkMemberCount", js: "taxiParkMemberCount", typ: u(undefined, u(3.14, null, "")) },
        { json: "twoFAUserID", js: "twoFAUserID", typ: u(undefined, "") },
        { json: "updated", js: "updated", typ: u(undefined, "") },
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
    "ClientFavResource": o([
        { json: "businessID", js: "businessID", typ: 3.14 },
        { json: "networkID", js: "networkID", typ: "" },
        { json: "resourceID", js: "resourceID", typ: "" },
    ], false),
    "IntegrationDataClass": o([
        { json: "transactionID", js: "transactionID", typ: u(undefined, "") },
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
    "Statistics": o([
        { json: "appointmentsCount", js: "appointmentsCount", typ: u(undefined, 3.14) },
        { json: "businesses", js: "businesses", typ: u(undefined, a(m("any"))) },
        { json: "lastAppointment", js: "lastAppointment", typ: u(undefined, "") },
        { json: "lastBusinessId", js: "lastBusinessId", typ: u(undefined, "") },
        { json: "lastWorkerId", js: "lastWorkerId", typ: u(undefined, "") },
        { json: "services", js: "services", typ: u(undefined, a(m("any"))) },
        { json: "totalPrices", js: "totalPrices", typ: u(undefined, a("any")) },
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
        { json: "data", js: "data", typ: u(undefined, u(m("any"), "")) },
        { json: "message", js: "message", typ: "" },
    ], "any"),
    "ClientAddClientResponseResult": o([
        { json: "business", js: "business", typ: r("BraggadociousBusiness") },
        { json: "client", js: "client", typ: r("ClientClass") },
        { json: "documents", js: "documents", typ: u(undefined, a("")) },
        { json: "profile", js: "profile", typ: u(undefined, r("PurpleProfile")) },
        { json: "source", js: "source", typ: u(undefined, r("Source")) },
    ], "any"),
    "BraggadociousBusiness": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "PurpleProfile": o([
        { json: "id", js: "id", typ: u(undefined, "") },
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
        { json: "business", js: "business", typ: r("Business1") },
        { json: "client", js: "client", typ: u(undefined, r("ClientClass")) },
        { json: "network", js: "network", typ: u(undefined, r("StickyNetwork")) },
        { json: "skipEmailCheck", js: "skipEmailCheck", typ: u(undefined, true) },
        { json: "skipProfileUpdate", js: "skipProfileUpdate", typ: u(undefined, true) },
    ], false),
    "Business1": o([
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
        { json: "data", js: "data", typ: u(undefined, u(m("any"), "")) },
        { json: "message", js: "message", typ: "" },
    ], "any"),
    "ClientFindOfCreateClientResponseResult": o([
        { json: "business", js: "business", typ: u(undefined, r("Business2")) },
        { json: "client", js: "client", typ: r("ClientClass") },
        { json: "documents", js: "documents", typ: u(undefined, a("any")) },
        { json: "profile", js: "profile", typ: u(undefined, r("FluffyProfile")) },
    ], "any"),
    "Business2": o([
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
        { json: "business", js: "business", typ: u(undefined, r("Business3")) },
        { json: "client", js: "client", typ: r("ClientClass") },
        { json: "network", js: "network", typ: u(undefined, r("IndigoNetwork")) },
    ], false),
    "Business3": o([
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
        { json: "data", js: "data", typ: u(undefined, u(m("any"), "")) },
        { json: "message", js: "message", typ: "" },
    ], "any"),
    "ClientUpdateClientResponseResult": o([
        { json: "added_document", js: "added_document", typ: u(undefined, m("any")) },
        { json: "success", js: "success", typ: true },
    ], "any"),
    "UpdateClientInfo": o([
        { json: "request", js: "request", typ: r("ClientUpdateClientInfoRequest") },
        { json: "response", js: "response", typ: r("ClientUpdateClientInfoResponse") },
    ], false),
    "ClientUpdateClientInfoRequest": o([
        { json: "cred", js: "cred", typ: u(undefined, r("Cred")) },
        { json: "id", js: "id", typ: u(3.14, "") },
        { json: "jsonrpc", js: "jsonrpc", typ: "" },
        { json: "method", js: "method", typ: "" },
        { json: "params", js: "params", typ: r("ClientUpdateClientInfoRequestParams") },
    ], false),
    "ClientUpdateClientInfoRequestParams": o([
        { json: "business", js: "business", typ: u(undefined, r("Business4")) },
        { json: "client", js: "client", typ: r("StickyClient") },
        { json: "network", js: "network", typ: u(undefined, r("IndecentNetwork")) },
    ], false),
    "Business4": o([
        { json: "id", js: "id", typ: u(3.14, "") },
    ], false),
    "StickyClient": o([
        { json: "address", js: "address", typ: u(undefined, "") },
        { json: "birthday", js: "birthday", typ: u(undefined, u(m("any"), null, "")) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "email", js: "email", typ: u(undefined, a("")) },
        { json: "extraFields", js: "extraFields", typ: u(undefined, a(r("PurpleExtraField"))) },
        { json: "favResources", js: "favResources", typ: u(undefined, a(r("PurpleFavResource"))) },
        { json: "icon_url", js: "icon_url", typ: u(undefined, "") },
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "insuranceNumber", js: "insuranceNumber", typ: u(undefined, "") },
        { json: "language", js: "language", typ: u(undefined, r("LanguageList")) },
        { json: "middleName", js: "middleName", typ: u(undefined, u(null, "")) },
        { json: "name", js: "name", typ: "" },
        { json: "passportId", js: "passportId", typ: u(undefined, "") },
        { json: "sex", js: "sex", typ: u(undefined, r("Sex")) },
        { json: "surname", js: "surname", typ: "" },
    ], false),
    "PurpleExtraField": o([
        { json: "fieldID", js: "fieldID", typ: "" },
        { json: "fieldName", js: "fieldName", typ: "" },
        { json: "value", js: "value", typ: u(undefined, u(true, 3.14, m("any"), null, "")) },
    ], false),
    "PurpleFavResource": o([
        { json: "businessID", js: "businessID", typ: 3.14 },
        { json: "networkID", js: "networkID", typ: "" },
        { json: "resourceID", js: "resourceID", typ: "" },
    ], false),
    "IndecentNetwork": o([
        { json: "id", js: "id", typ: u(undefined, u(3.14, "")) },
    ], false),
    "ClientUpdateClientInfoResponse": o([
        { json: "result", js: "result", typ: u(undefined, r("ClientUpdateClientInfoResponseResult")) },
        { json: "error", js: "error", typ: u(undefined, r("ClientUpdateClientInfoResponseError")) },
        { json: "id", js: "id", typ: u(undefined, 3.14) },
        { json: "jsonrpc", js: "jsonrpc", typ: u(undefined, "") },
    ], "any"),
    "ClientUpdateClientInfoResponseError": o([
        { json: "code", js: "code", typ: 3.14 },
        { json: "data", js: "data", typ: u(undefined, u(m("any"), "")) },
        { json: "message", js: "message", typ: "" },
    ], "any"),
    "ClientUpdateClientInfoResponseResult": o([
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
        { json: "business", js: "business", typ: r("Business5") },
        { json: "resources", js: "resources", typ: a("") },
        { json: "taxonomy", js: "taxonomy", typ: r("PurpleTaxonomy") },
    ], false),
    "Business5": o([
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
        { json: "data", js: "data", typ: u(undefined, u(m("any"), "")) },
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
        { json: "data", js: "data", typ: u(undefined, u(m("any"), "")) },
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
        { json: "business", js: "business", typ: r("Business6") },
        { json: "duration", js: "duration", typ: 3.14 },
        { json: "durations", js: "durations", typ: a(3.14) },
        { json: "resources", js: "resources", typ: a("") },
        { json: "taxonomy", js: "taxonomy", typ: r("TentacledTaxonomy") },
    ], false),
    "Business6": o([
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
        { json: "data", js: "data", typ: u(undefined, u(m("any"), "")) },
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
        { json: "data", js: "data", typ: u(undefined, u(m("any"), "")) },
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
        { json: "data", js: "data", typ: u(undefined, u(m("any"), "")) },
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
        { json: "data", js: "data", typ: u(undefined, u(m("any"), "")) },
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
    "ReminderStatus": [
        "NOT_SET",
        "OFF",
        "ON",
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
    "PaymentProvider": [
        "cloudpayments",
        "deltaProcessing",
        "DISABLE",
        "pelecard",
        "yandexMoney",
        "yandexMoneyv3",
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
        "mmconf",
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
    "Day": [
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
    ]
};
