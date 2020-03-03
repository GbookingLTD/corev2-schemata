from typing import Optional, Union, List, Dict, Any
from enum import Enum
from datetime import datetime


class Cred:
    """авторизационные параметры"""
    """временный token для доступа"""
    token: Optional[str]
    """идентификатор профиля пользователя"""
    user: Optional[str]

    def __init__(self, token: Optional[str], user: Optional[str]) -> None:
        self.token = token
        self.user = user


class PurpleBusiness:
    """идентификатор бизнеса"""
    id: str

    def __init__(self, id: str) -> None:
        self.id = id


class WorkerSortingType(Enum):
    """тип сортировки работника"""
    MOST_FREE = "most_free"
    NONE = "none"
    WORKLOAD = "workload"


class BusinessGetProfileByIDRequestParams:
    """параметры запроса"""
    business: PurpleBusiness
    """если указано true - меняет формат представления discounts"""
    desktop_discounts: Optional[bool]
    """если указано true - возвращает только активных работников (status == 'INACTIVE')"""
    only_active_workers: Optional[bool]
    """если указано true - возвращает всех работников в том числе и неактивных (status ==
    'INACTIVE')
    """
    show_inactive_workers: Optional[bool]
    """идентификатор витрины (передаётся вместе с with_taxonomy_showcase)"""
    showcase_business_id: Union[float, None, str]
    """если указано true - не приминяет сортировку работников"""
    skip_worker_sorting: Optional[bool]
    """если указано true - возвращает историю биллинга в поле billing (недоступно для роли guest)"""
    with_billing: Optional[bool]
    """если указано true - возвращает список операций, доступных в БекОфисе в поле profiles
    (недоступно для роли guest)
    """
    with_bop: Optional[bool]
    """если указано true - возвращает кампании скидочных купонов в поле campaigns"""
    with_campaigns: Optional[bool]
    """если указано true - возвращает список скидочных акций в поле discounts"""
    with_discounts: Optional[bool]
    """дата начала расписания, для которого нужно получить скидочные акции"""
    with_discounts_from: Optional[datetime]
    """дата окончания расписания, для которого нужно получить скидочные акции"""
    with_discounts_to: Optional[datetime]
    """если указано true - возвращает информацию о других филиалах сети в поле networks"""
    with_networks: Optional[bool]
    """если указано true - заполняет идентификаторы таксономий витрины showcaseTaxonomyID для
    каждой таксономии (недоступно для роли guest)
    """
    with_taxonomy_showcase: Optional[bool]
    """тип сортировки работника"""
    worker_sorting_type: Optional[WorkerSortingType]

    def __init__(self, business: PurpleBusiness, desktop_discounts: Optional[bool], only_active_workers: Optional[bool], show_inactive_workers: Optional[bool], showcase_business_id: Union[float, None, str], skip_worker_sorting: Optional[bool], with_billing: Optional[bool], with_bop: Optional[bool], with_campaigns: Optional[bool], with_discounts: Optional[bool], with_discounts_from: Optional[datetime], with_discounts_to: Optional[datetime], with_networks: Optional[bool], with_taxonomy_showcase: Optional[bool], worker_sorting_type: Optional[WorkerSortingType]) -> None:
        self.business = business
        self.desktop_discounts = desktop_discounts
        self.only_active_workers = only_active_workers
        self.show_inactive_workers = show_inactive_workers
        self.showcase_business_id = showcase_business_id
        self.skip_worker_sorting = skip_worker_sorting
        self.with_billing = with_billing
        self.with_bop = with_bop
        self.with_campaigns = with_campaigns
        self.with_discounts = with_discounts
        self.with_discounts_from = with_discounts_from
        self.with_discounts_to = with_discounts_to
        self.with_networks = with_networks
        self.with_taxonomy_showcase = with_taxonomy_showcase
        self.worker_sorting_type = worker_sorting_type


class BusinessGetProfileByIDRequest:
    """авторизационные параметры"""
    cred: Optional[Cred]
    """значение числового типа для идентификации запроса на сервере"""
    id: Union[float, str]
    """версия протокола - 2.0"""
    jsonrpc: str
    """название jsonrpc метода"""
    method: str
    """параметры запроса"""
    params: BusinessGetProfileByIDRequestParams

    def __init__(self, cred: Optional[Cred], id: Union[float, str], jsonrpc: str, method: str, params: BusinessGetProfileByIDRequestParams) -> None:
        self.cred = cred
        self.id = id
        self.jsonrpc = jsonrpc
        self.method = method
        self.params = params


class BusinessGetProfileByIDResponseError:
    """объект, содержащий информацию об ошибке
    
    Список кодов ошибки авторизации
    """
    """код ошибки"""
    code: float
    """дополнительные данные об ошибке"""
    data: Optional[str]
    """текстовая информация об ошибке"""
    message: str

    def __init__(self, code: float, data: Optional[str], message: str) -> None:
        self.code = code
        self.data = data
        self.message = message


class AppointmentExtensionType(Enum):
    MINUTES = "MINUTES"
    PERCENT = "PERCENT"


class AdditionalSettings:
    appointment_extension_amount: Optional[float]
    appointment_extension_type: Optional[AppointmentExtensionType]

    def __init__(self, appointment_extension_amount: Optional[float], appointment_extension_type: Optional[AppointmentExtensionType]) -> None:
        self.appointment_extension_amount = appointment_extension_amount
        self.appointment_extension_type = appointment_extension_type


class FeedBackMinRating(Enum):
    THE_1 = "1"
    THE_2 = "2"
    THE_3 = "3"
    THE_4 = "4"
    THE_5 = "5"


class PaymentProvider(Enum):
    DELTA_PROCESSING = "deltaProcessing"
    DISABLE = "DISABLE"
    YANDEX_MONEY = "yandexMoney"


class ResourceTimetableType(Enum):
    DEFAULT = "DEFAULT"
    EVENODD = "EVENODD"


class SchedulerWeekViewType(Enum):
    WEEK = "week"
    WORK_WEEK = "workWeek"


class BackofficeConfigurationClass:
    adjacent_taxonomies_treshold: Optional[float]
    allow_hide_service_for_booking: Optional[bool]
    allow_hide_workers_from_schdeule: Optional[bool]
    allow_sms_translit: Optional[bool]
    appointment_future_moving: Optional[bool]
    block_notification_for_any_available_adjacent_service: Optional[bool]
    cabinets_enabled: Optional[bool]
    check_client_overlapping: Optional[bool]
    custom_online_payment_confirmation_template: Optional[str]
    default_gt_schedule_day_view: Optional[bool]
    disable_appointment_client_inline_editor: Optional[bool]
    edit_app_extra_id: Optional[bool]
    edit_taxonomy_children: Optional[bool]
    edit_taxonomy_visit_type: Optional[bool]
    enable_black_list: Optional[bool]
    enable_calculate_shedule: Optional[bool]
    enable_client_card: Optional[bool]
    enable_client_language: Optional[bool]
    enable_client_medical_card_report: Optional[bool]
    enable_custom_online_payment_confirmation: Optional[bool]
    enable_extended_phone: Optional[bool]
    enable_extended_records_client_statistics: Optional[bool]
    enable_master_importance: Optional[bool]
    enable_service_time_limit: Optional[bool]
    enable_source_choice: Optional[bool]
    enable_taxonomy_children_age_check: Optional[bool]
    export_to_excel_removed_clients: Optional[bool]
    feedback_customer_portal_message: Optional[str]
    feedback_customer_portal_thank_you_message: Optional[str]
    feedback_customer_portal_title: Optional[str]
    feed_back_min_rating: Optional[FeedBackMinRating]
    fin_id: Optional[str]
    fin_name: Optional[str]
    hide_customer_portal_footer: Optional[bool]
    highlighted_resource: Optional[bool]
    manual_exception_support: Optional[bool]
    no_internet_alert: Optional[bool]
    past_time_edit: Optional[float]
    payment_provider: Optional[PaymentProvider]
    readonly_resource_schedule: Optional[bool]
    resource_timetable_type: Optional[ResourceTimetableType]
    revision_version: Optional[float]
    schdule_week_view_is_default: Optional[bool]
    schedule_default_workers_limit: Optional[float]
    scheduler_week_view_type: Optional[SchedulerWeekViewType]
    schedule_worker_hours: Optional[bool]
    show_additional_fields: Optional[bool]
    show_address: Optional[bool]
    show_birth_date: Optional[bool]
    show_client_appear: Optional[bool]
    show_client_appear_on_schedule: Optional[bool]
    show_client_birthday_filter: Optional[bool]
    show_client_contract_number: Optional[bool]
    show_client_image: Optional[bool]
    show_client_payment: Optional[bool]
    show_defaulter_blockscreen: Optional[bool]
    show_delivery_status: Optional[bool]
    show_department_filter: Optional[bool]
    show_departments: Optional[bool]
    show_departments_configuration: Optional[bool]
    show_email: Optional[bool]
    show_extra_client_info: Optional[bool]
    show_fax: Optional[bool]
    show_fired_worker_appointment_alert: Optional[bool]
    show_first_available_slot: Optional[bool]
    show_gap_window: Optional[bool]
    show_gender: Optional[bool]
    show_gender_in_records: Optional[bool]
    show_generatable_reports_screen: Optional[bool]
    show_house_number: Optional[bool]
    show_israel_city: Optional[bool]
    show_kupat_holim: Optional[bool]
    show_leads_screen: Optional[bool]
    show_manual_changes: Optional[bool]
    show_passport_id: Optional[bool]
    show_rooms: Optional[bool]
    show_season_tickets: Optional[bool]
    show_taxonomy_children: Optional[bool]
    show_taxonomy_localization: Optional[bool]
    show_taxonomy_visit_type: Optional[bool]
    show_test_record: Optional[bool]
    show_utm: Optional[bool]
    show_widget_color_theme: Optional[bool]
    show_worker_description_in_event: Optional[bool]
    show_worker_extra_id: Optional[bool]
    show_worker_status: Optional[bool]
    skip_appointment_price_update: Optional[bool]
    skip_cancel_if_client_not_appear: Optional[bool]
    skip_service_filtering: Optional[bool]
    split_full_name_xls_export: Optional[bool]
    state_level_holidays: Optional[List[Dict[str, Any]]]
    state_level_holidays_not_working: Optional[bool]
    taxonomy_children_max_age: Optional[float]
    use_additional_durations: Optional[bool]
    use_adjacent_taxonomies: Optional[bool]
    use_adjacent_taxonomies_slot_splitting: Optional[bool]
    use_gt_app_method: Optional[bool]
    work_week_end: Optional[float]
    work_week_start: Optional[float]

    def __init__(self, adjacent_taxonomies_treshold: Optional[float], allow_hide_service_for_booking: Optional[bool], allow_hide_workers_from_schdeule: Optional[bool], allow_sms_translit: Optional[bool], appointment_future_moving: Optional[bool], block_notification_for_any_available_adjacent_service: Optional[bool], cabinets_enabled: Optional[bool], check_client_overlapping: Optional[bool], custom_online_payment_confirmation_template: Optional[str], default_gt_schedule_day_view: Optional[bool], disable_appointment_client_inline_editor: Optional[bool], edit_app_extra_id: Optional[bool], edit_taxonomy_children: Optional[bool], edit_taxonomy_visit_type: Optional[bool], enable_black_list: Optional[bool], enable_calculate_shedule: Optional[bool], enable_client_card: Optional[bool], enable_client_language: Optional[bool], enable_client_medical_card_report: Optional[bool], enable_custom_online_payment_confirmation: Optional[bool], enable_extended_phone: Optional[bool], enable_extended_records_client_statistics: Optional[bool], enable_master_importance: Optional[bool], enable_service_time_limit: Optional[bool], enable_source_choice: Optional[bool], enable_taxonomy_children_age_check: Optional[bool], export_to_excel_removed_clients: Optional[bool], feedback_customer_portal_message: Optional[str], feedback_customer_portal_thank_you_message: Optional[str], feedback_customer_portal_title: Optional[str], feed_back_min_rating: Optional[FeedBackMinRating], fin_id: Optional[str], fin_name: Optional[str], hide_customer_portal_footer: Optional[bool], highlighted_resource: Optional[bool], manual_exception_support: Optional[bool], no_internet_alert: Optional[bool], past_time_edit: Optional[float], payment_provider: Optional[PaymentProvider], readonly_resource_schedule: Optional[bool], resource_timetable_type: Optional[ResourceTimetableType], revision_version: Optional[float], schdule_week_view_is_default: Optional[bool], schedule_default_workers_limit: Optional[float], scheduler_week_view_type: Optional[SchedulerWeekViewType], schedule_worker_hours: Optional[bool], show_additional_fields: Optional[bool], show_address: Optional[bool], show_birth_date: Optional[bool], show_client_appear: Optional[bool], show_client_appear_on_schedule: Optional[bool], show_client_birthday_filter: Optional[bool], show_client_contract_number: Optional[bool], show_client_image: Optional[bool], show_client_payment: Optional[bool], show_defaulter_blockscreen: Optional[bool], show_delivery_status: Optional[bool], show_department_filter: Optional[bool], show_departments: Optional[bool], show_departments_configuration: Optional[bool], show_email: Optional[bool], show_extra_client_info: Optional[bool], show_fax: Optional[bool], show_fired_worker_appointment_alert: Optional[bool], show_first_available_slot: Optional[bool], show_gap_window: Optional[bool], show_gender: Optional[bool], show_gender_in_records: Optional[bool], show_generatable_reports_screen: Optional[bool], show_house_number: Optional[bool], show_israel_city: Optional[bool], show_kupat_holim: Optional[bool], show_leads_screen: Optional[bool], show_manual_changes: Optional[bool], show_passport_id: Optional[bool], show_rooms: Optional[bool], show_season_tickets: Optional[bool], show_taxonomy_children: Optional[bool], show_taxonomy_localization: Optional[bool], show_taxonomy_visit_type: Optional[bool], show_test_record: Optional[bool], show_utm: Optional[bool], show_widget_color_theme: Optional[bool], show_worker_description_in_event: Optional[bool], show_worker_extra_id: Optional[bool], show_worker_status: Optional[bool], skip_appointment_price_update: Optional[bool], skip_cancel_if_client_not_appear: Optional[bool], skip_service_filtering: Optional[bool], split_full_name_xls_export: Optional[bool], state_level_holidays: Optional[List[Dict[str, Any]]], state_level_holidays_not_working: Optional[bool], taxonomy_children_max_age: Optional[float], use_additional_durations: Optional[bool], use_adjacent_taxonomies: Optional[bool], use_adjacent_taxonomies_slot_splitting: Optional[bool], use_gt_app_method: Optional[bool], work_week_end: Optional[float], work_week_start: Optional[float]) -> None:
        self.adjacent_taxonomies_treshold = adjacent_taxonomies_treshold
        self.allow_hide_service_for_booking = allow_hide_service_for_booking
        self.allow_hide_workers_from_schdeule = allow_hide_workers_from_schdeule
        self.allow_sms_translit = allow_sms_translit
        self.appointment_future_moving = appointment_future_moving
        self.block_notification_for_any_available_adjacent_service = block_notification_for_any_available_adjacent_service
        self.cabinets_enabled = cabinets_enabled
        self.check_client_overlapping = check_client_overlapping
        self.custom_online_payment_confirmation_template = custom_online_payment_confirmation_template
        self.default_gt_schedule_day_view = default_gt_schedule_day_view
        self.disable_appointment_client_inline_editor = disable_appointment_client_inline_editor
        self.edit_app_extra_id = edit_app_extra_id
        self.edit_taxonomy_children = edit_taxonomy_children
        self.edit_taxonomy_visit_type = edit_taxonomy_visit_type
        self.enable_black_list = enable_black_list
        self.enable_calculate_shedule = enable_calculate_shedule
        self.enable_client_card = enable_client_card
        self.enable_client_language = enable_client_language
        self.enable_client_medical_card_report = enable_client_medical_card_report
        self.enable_custom_online_payment_confirmation = enable_custom_online_payment_confirmation
        self.enable_extended_phone = enable_extended_phone
        self.enable_extended_records_client_statistics = enable_extended_records_client_statistics
        self.enable_master_importance = enable_master_importance
        self.enable_service_time_limit = enable_service_time_limit
        self.enable_source_choice = enable_source_choice
        self.enable_taxonomy_children_age_check = enable_taxonomy_children_age_check
        self.export_to_excel_removed_clients = export_to_excel_removed_clients
        self.feedback_customer_portal_message = feedback_customer_portal_message
        self.feedback_customer_portal_thank_you_message = feedback_customer_portal_thank_you_message
        self.feedback_customer_portal_title = feedback_customer_portal_title
        self.feed_back_min_rating = feed_back_min_rating
        self.fin_id = fin_id
        self.fin_name = fin_name
        self.hide_customer_portal_footer = hide_customer_portal_footer
        self.highlighted_resource = highlighted_resource
        self.manual_exception_support = manual_exception_support
        self.no_internet_alert = no_internet_alert
        self.past_time_edit = past_time_edit
        self.payment_provider = payment_provider
        self.readonly_resource_schedule = readonly_resource_schedule
        self.resource_timetable_type = resource_timetable_type
        self.revision_version = revision_version
        self.schdule_week_view_is_default = schdule_week_view_is_default
        self.schedule_default_workers_limit = schedule_default_workers_limit
        self.scheduler_week_view_type = scheduler_week_view_type
        self.schedule_worker_hours = schedule_worker_hours
        self.show_additional_fields = show_additional_fields
        self.show_address = show_address
        self.show_birth_date = show_birth_date
        self.show_client_appear = show_client_appear
        self.show_client_appear_on_schedule = show_client_appear_on_schedule
        self.show_client_birthday_filter = show_client_birthday_filter
        self.show_client_contract_number = show_client_contract_number
        self.show_client_image = show_client_image
        self.show_client_payment = show_client_payment
        self.show_defaulter_blockscreen = show_defaulter_blockscreen
        self.show_delivery_status = show_delivery_status
        self.show_department_filter = show_department_filter
        self.show_departments = show_departments
        self.show_departments_configuration = show_departments_configuration
        self.show_email = show_email
        self.show_extra_client_info = show_extra_client_info
        self.show_fax = show_fax
        self.show_fired_worker_appointment_alert = show_fired_worker_appointment_alert
        self.show_first_available_slot = show_first_available_slot
        self.show_gap_window = show_gap_window
        self.show_gender = show_gender
        self.show_gender_in_records = show_gender_in_records
        self.show_generatable_reports_screen = show_generatable_reports_screen
        self.show_house_number = show_house_number
        self.show_israel_city = show_israel_city
        self.show_kupat_holim = show_kupat_holim
        self.show_leads_screen = show_leads_screen
        self.show_manual_changes = show_manual_changes
        self.show_passport_id = show_passport_id
        self.show_rooms = show_rooms
        self.show_season_tickets = show_season_tickets
        self.show_taxonomy_children = show_taxonomy_children
        self.show_taxonomy_localization = show_taxonomy_localization
        self.show_taxonomy_visit_type = show_taxonomy_visit_type
        self.show_test_record = show_test_record
        self.show_utm = show_utm
        self.show_widget_color_theme = show_widget_color_theme
        self.show_worker_description_in_event = show_worker_description_in_event
        self.show_worker_extra_id = show_worker_extra_id
        self.show_worker_status = show_worker_status
        self.skip_appointment_price_update = skip_appointment_price_update
        self.skip_cancel_if_client_not_appear = skip_cancel_if_client_not_appear
        self.skip_service_filtering = skip_service_filtering
        self.split_full_name_xls_export = split_full_name_xls_export
        self.state_level_holidays = state_level_holidays
        self.state_level_holidays_not_working = state_level_holidays_not_working
        self.taxonomy_children_max_age = taxonomy_children_max_age
        self.use_additional_durations = use_additional_durations
        self.use_adjacent_taxonomies = use_adjacent_taxonomies
        self.use_adjacent_taxonomies_slot_splitting = use_adjacent_taxonomies_slot_splitting
        self.use_gt_app_method = use_gt_app_method
        self.work_week_end = work_week_end
        self.work_week_start = work_week_start


class BackofficeType(Enum):
    COMMON = "COMMON"
    GT = "GT"
    LL = "LL"
    MB = "MB"
    MU = "MU"


class BusinessBackofficeConfiguration:
    enable_master_importance: Optional[bool]
    resource_timetable_type: Optional[ResourceTimetableType]

    def __init__(self, enable_master_importance: Optional[bool], resource_timetable_type: Optional[ResourceTimetableType]) -> None:
        self.enable_master_importance = enable_master_importance
        self.resource_timetable_type = resource_timetable_type


class Cabinet:
    active: Optional[bool]
    id: Optional[str]
    name: Optional[str]

    def __init__(self, active: Optional[bool], id: Optional[str], name: Optional[str]) -> None:
        self.active = active
        self.id = id
        self.name = name


class CallbackWidgetConfiguration:
    title1: Optional[str]
    title2: Optional[str]

    def __init__(self, title1: Optional[str], title2: Optional[str]) -> None:
        self.title1 = title1
        self.title2 = title2


class Consumable:
    extra_id: str
    name: str
    quantity: float

    def __init__(self, extra_id: str, name: str, quantity: float) -> None:
        self.extra_id = extra_id
        self.name = name
        self.quantity = quantity


class Department:
    id: str
    department_id: Optional[float]
    name: str

    def __init__(self, id: str, department_id: Optional[float], name: str) -> None:
        self.id = id
        self.department_id = department_id
        self.name = name


class CurrencyList(Enum):
    """Аббревиатура валюты
    
    Аббревиатура валюты (например, RUB - рубль)
    """
    CNY = "CNY"
    EUR = "EUR"
    GBP = "GBP"
    HUF = "HUF"
    ILS = "ILS"
    KZT = "KZT"
    RUB = "RUB"
    UAH = "UAH"
    USD = "USD"
    UZS = "UZS"


class AdditionalFieldsType(Enum):
    BOOL = "BOOL"
    COUPON = "COUPON"
    FILE = "FILE"
    RADIO = "RADIO"
    STRING = "STRING"


class AdditionalFieldsClass:
    name: str
    required_field: bool
    short_name: str
    type: AdditionalFieldsType
    value: str

    def __init__(self, name: str, required_field: bool, short_name: str, type: AdditionalFieldsType, value: str) -> None:
        self.name = name
        self.required_field = required_field
        self.short_name = short_name
        self.type = type
        self.value = value


class Country(Enum):
    AM = "AM"
    BLR = "BLR"
    CH = "CH"
    DE = "DE"
    EMPTY = "_"
    ES = "ES"
    FI = "FI"
    FR = "FR"
    GE = "GE"
    HU = "HU"
    IL = "IL"
    KZ = "KZ"
    LI = "LI"
    LT = "LT"
    LV = "LV"
    RU = "RU"
    UA = "UA"
    UK = "UK"
    US = "US"
    UZ = "UZ"


class PurpleMetroStation:
    id: Optional[str]
    description: Optional[str]
    name: str

    def __init__(self, id: Optional[str], description: Optional[str], name: str) -> None:
        self.id = id
        self.description = description
        self.name = name


class AddressClass:
    address: Optional[str]
    address_add: Optional[str]
    admin_area: Optional[str]
    admin_area_type: Optional[str]
    building: Optional[str]
    corps: Optional[str]
    country: Country
    group: Optional[str]
    house_add: Optional[str]
    kilometer: Optional[str]
    latitude: Optional[str]
    locality: Optional[str]
    locality_type: Optional[str]
    longitude: Optional[str]
    metro_stations: Optional[List[PurpleMetroStation]]
    number: Optional[str]
    office: Optional[str]
    possesion: Optional[str]
    street: Optional[str]
    street_type: Optional[str]
    sub_admin_area: Optional[str]
    sub_admin_area_type: Optional[str]
    sub_locality: Optional[str]
    sub_locality_type: Optional[str]
    way: Optional[str]
    zip_code: Optional[str]

    def __init__(self, address: Optional[str], address_add: Optional[str], admin_area: Optional[str], admin_area_type: Optional[str], building: Optional[str], corps: Optional[str], country: Country, group: Optional[str], house_add: Optional[str], kilometer: Optional[str], latitude: Optional[str], locality: Optional[str], locality_type: Optional[str], longitude: Optional[str], metro_stations: Optional[List[PurpleMetroStation]], number: Optional[str], office: Optional[str], possesion: Optional[str], street: Optional[str], street_type: Optional[str], sub_admin_area: Optional[str], sub_admin_area_type: Optional[str], sub_locality: Optional[str], sub_locality_type: Optional[str], way: Optional[str], zip_code: Optional[str]) -> None:
        self.address = address
        self.address_add = address_add
        self.admin_area = admin_area
        self.admin_area_type = admin_area_type
        self.building = building
        self.corps = corps
        self.country = country
        self.group = group
        self.house_add = house_add
        self.kilometer = kilometer
        self.latitude = latitude
        self.locality = locality
        self.locality_type = locality_type
        self.longitude = longitude
        self.metro_stations = metro_stations
        self.number = number
        self.office = office
        self.possesion = possesion
        self.street = street
        self.street_type = street_type
        self.sub_admin_area = sub_admin_area
        self.sub_admin_area_type = sub_admin_area_type
        self.sub_locality = sub_locality
        self.sub_locality_type = sub_locality_type
        self.way = way
        self.zip_code = zip_code


class BusinessShowcaseAlias:
    internal_id: Optional[str]

    def __init__(self, internal_id: Optional[str]) -> None:
        self.internal_id = internal_id


class PhoneClass:
    area_code: str
    country_code: str
    number: str

    def __init__(self, area_code: str, country_code: str, number: str) -> None:
        self.area_code = area_code
        self.country_code = country_code
        self.number = number


class LanguageList(Enum):
    AM_AM = "am-am"
    DE_DE = "de-de"
    EE_EE = "ee-ee"
    EN_US = "en-us"
    ES_ES = "es-es"
    FI_FI = "fi-fi"
    FR_FR = "fr-fr"
    GE_GE = "ge-ge"
    HE_IL = "he-il"
    HU_HU = "hu-hu"
    LT_LT = "lt-lt"
    LV_LV = "lv-lv"
    RU_RU = "ru-ru"
    UZ_UZ = "uz-uz"
    ZH_CN = "zh-cn"


class MarketingNotifications:
    accepted: bool
    active: bool
    use_sms_alpha_name: bool

    def __init__(self, accepted: bool, active: bool, use_sms_alpha_name: bool) -> None:
        self.accepted = accepted
        self.active = active
        self.use_sms_alpha_name = use_sms_alpha_name


class Metro:
    color: Optional[str]
    distance: Optional[float]
    name: Optional[str]

    def __init__(self, color: Optional[str], distance: Optional[float], name: Optional[str]) -> None:
        self.color = color
        self.distance = distance
        self.name = name


class PaymentMethods(Enum):
    AMEX = "Amex"
    MASTERCARD = "Mastercard"
    MONEY_BOOKERS = "MoneyBookers"
    PAY_PAL = "PayPal"
    VISA = "Visa"


class PricingType(Enum):
    DEFAULT = "DEFAULT"
    MASTER_TOPMASTER = "MASTER_TOPMASTER"


class Showcase:
    base_business_id: Optional[str]

    def __init__(self, base_business_id: Optional[str]) -> None:
        self.base_business_id = base_business_id


class SMSDuplicateFilter:
    active: Optional[bool]

    def __init__(self, active: Optional[bool]) -> None:
        self.active = active


class SocialNetwork(Enum):
    FACEBOOK = "Facebook"
    GOOGLE = "Google"
    G_BOOKING = "GBooking"
    LINKED_IN = "LinkedIn"
    MAILRU = "Mailru"
    ODNOKLASSNIKI = "Odnoklassniki"
    TWITTER = "Twitter"
    V_KONTAKTE = "VKontakte"
    YAHOO = "Yahoo"
    YANDEX = "Yandex"


class SocialNetworkSchema:
    handle: str
    """network id"""
    id: str
    social_network: SocialNetwork
    url: str

    def __init__(self, handle: str, id: str, social_network: SocialNetwork, url: str) -> None:
        self.handle = handle
        self.id = id
        self.social_network = social_network
        self.url = url


class TimeFrame:
    capacity: Optional[float]
    """смещение в минутах от начала дня"""
    end: float
    end_date: Union[datetime, float, None]
    extra_id: Optional[str]
    """уникальный идентификатор временного слота"""
    id: Optional[str]
    resources: Optional[List[str]]
    room_id: Optional[str]
    """смещение в минутах от начала дня"""
    start: float
    start_date: Union[datetime, float, None]

    def __init__(self, capacity: Optional[float], end: float, end_date: Union[datetime, float, None], extra_id: Optional[str], id: Optional[str], resources: Optional[List[str]], room_id: Optional[str], start: float, start_date: Union[datetime, float, None]) -> None:
        self.capacity = capacity
        self.end = end
        self.end_date = end_date
        self.extra_id = extra_id
        self.id = id
        self.resources = resources
        self.room_id = room_id
        self.start = start
        self.start_date = start_date


class Week:
    fri: List[TimeFrame]
    mon: List[TimeFrame]
    sat: List[TimeFrame]
    sun: List[TimeFrame]
    thu: List[TimeFrame]
    tue: List[TimeFrame]
    wed: List[TimeFrame]

    def __init__(self, fri: List[TimeFrame], mon: List[TimeFrame], sat: List[TimeFrame], sun: List[TimeFrame], thu: List[TimeFrame], tue: List[TimeFrame], wed: List[TimeFrame]) -> None:
        self.fri = fri
        self.mon = mon
        self.sat = sat
        self.sun = sun
        self.thu = thu
        self.tue = tue
        self.wed = wed


class Timetable:
    """таблица регулярного недельного расписания"""
    """установлено ли расписание для сущности"""
    active: Optional[bool]
    week: Optional[Week]

    def __init__(self, active: Optional[bool], week: Optional[Week]) -> None:
        self.active = active
        self.week = week


class VerticalTranslation(Enum):
    BEAUTY = "BEAUTY"
    FITNESS = "FITNESS"
    GENERIC = "GENERIC"
    MEDICAL = "MEDICAL"
    NONE = "NONE"
    SPORT = "SPORT"
    YOGA = "YOGA"


class BusinessInfo:
    """Содержит детальную информацию о бизнесе — название, адрес, график работы и другое"""
    accepted_currency: Optional[List[CurrencyList]]
    additional_info: Optional[str]
    additional_fields: Optional[List[Union[List[Any], bool, AdditionalFieldsClass, float, int, None, str]]]
    """Адреса компании или филиала"""
    address: Optional[List[Union[List[Any], bool, AddressClass, float, int, None, str]]]
    auto_accept_appointment: Optional[bool]
    """если данный бизнес является витриной, идентификаторы бизнесов, которые входят в витрину"""
    business_showcase_aliases: Optional[List[BusinessShowcaseAlias]]
    contact_name: Optional[str]
    date_joined: Optional[datetime]
    description: Optional[str]
    """Список e-mail адресов компании или филиала"""
    email: Optional[str]
    fax: Optional[List[Union[List[Any], bool, PhoneClass, float, int, None, str]]]
    images: Optional[List[str]]
    instant_messaging: Optional[List[Dict[str, Any]]]
    """является ли данный бизнес витриной"""
    is_showcase: Optional[bool]
    language: Optional[LanguageList]
    logo_url: Optional[str]
    marketing_notifications: Optional[MarketingNotifications]
    metro: Optional[Metro]
    min_booking_time: Optional[float]
    """Список телефонов бизнеса"""
    mobile: Optional[List[Union[List[Any], bool, PhoneClass, float, int, None, str]]]
    """Название бизнеса"""
    name: Optional[str]
    network_id: Optional[float]
    newbo_enabled_for: Optional[List[str]]
    payment_methods: Optional[PaymentMethods]
    """Список телефонов бизнеса"""
    phone: Optional[List[Union[List[Any], bool, PhoneClass, float, int, None, str]]]
    phone_mask: Optional[str]
    pricing_type: Optional[PricingType]
    revision_version: Optional[float]
    scheduler_tick: Optional[float]
    """Короткое название филиала"""
    short_name: Optional[str]
    show_appointment_color: Optional[bool]
    show_appointment_tooltip: Optional[bool]
    """идентификаторы витрин, в которых участвует данный бизнес"""
    showcases: Optional[List[Showcase]]
    show_resource_work_statistics: Optional[bool]
    show_worker_profession: Optional[bool]
    skip_billing: Optional[bool]
    sms_duplicate_filter: Optional[SMSDuplicateFilter]
    social_network: Optional[List[SocialNetworkSchema]]
    timetable: Optional[Timetable]
    timezone: Optional[str]
    vertical_translation: Optional[VerticalTranslation]
    website: Optional[str]

    def __init__(self, accepted_currency: Optional[List[CurrencyList]], additional_info: Optional[str], additional_fields: Optional[List[Union[List[Any], bool, AdditionalFieldsClass, float, int, None, str]]], address: Optional[List[Union[List[Any], bool, AddressClass, float, int, None, str]]], auto_accept_appointment: Optional[bool], business_showcase_aliases: Optional[List[BusinessShowcaseAlias]], contact_name: Optional[str], date_joined: Optional[datetime], description: Optional[str], email: Optional[str], fax: Optional[List[Union[List[Any], bool, PhoneClass, float, int, None, str]]], images: Optional[List[str]], instant_messaging: Optional[List[Dict[str, Any]]], is_showcase: Optional[bool], language: Optional[LanguageList], logo_url: Optional[str], marketing_notifications: Optional[MarketingNotifications], metro: Optional[Metro], min_booking_time: Optional[float], mobile: Optional[List[Union[List[Any], bool, PhoneClass, float, int, None, str]]], name: Optional[str], network_id: Optional[float], newbo_enabled_for: Optional[List[str]], payment_methods: Optional[PaymentMethods], phone: Optional[List[Union[List[Any], bool, PhoneClass, float, int, None, str]]], phone_mask: Optional[str], pricing_type: Optional[PricingType], revision_version: Optional[float], scheduler_tick: Optional[float], short_name: Optional[str], show_appointment_color: Optional[bool], show_appointment_tooltip: Optional[bool], showcases: Optional[List[Showcase]], show_resource_work_statistics: Optional[bool], show_worker_profession: Optional[bool], skip_billing: Optional[bool], sms_duplicate_filter: Optional[SMSDuplicateFilter], social_network: Optional[List[SocialNetworkSchema]], timetable: Optional[Timetable], timezone: Optional[str], vertical_translation: Optional[VerticalTranslation], website: Optional[str]) -> None:
        self.accepted_currency = accepted_currency
        self.additional_info = additional_info
        self.additional_fields = additional_fields
        self.address = address
        self.auto_accept_appointment = auto_accept_appointment
        self.business_showcase_aliases = business_showcase_aliases
        self.contact_name = contact_name
        self.date_joined = date_joined
        self.description = description
        self.email = email
        self.fax = fax
        self.images = images
        self.instant_messaging = instant_messaging
        self.is_showcase = is_showcase
        self.language = language
        self.logo_url = logo_url
        self.marketing_notifications = marketing_notifications
        self.metro = metro
        self.min_booking_time = min_booking_time
        self.mobile = mobile
        self.name = name
        self.network_id = network_id
        self.newbo_enabled_for = newbo_enabled_for
        self.payment_methods = payment_methods
        self.phone = phone
        self.phone_mask = phone_mask
        self.pricing_type = pricing_type
        self.revision_version = revision_version
        self.scheduler_tick = scheduler_tick
        self.short_name = short_name
        self.show_appointment_color = show_appointment_color
        self.show_appointment_tooltip = show_appointment_tooltip
        self.showcases = showcases
        self.show_resource_work_statistics = show_resource_work_statistics
        self.show_worker_profession = show_worker_profession
        self.skip_billing = skip_billing
        self.sms_duplicate_filter = sms_duplicate_filter
        self.social_network = social_network
        self.timetable = timetable
        self.timezone = timezone
        self.vertical_translation = vertical_translation
        self.website = website


class Group(Enum):
    FRENCH = "FRENCH"
    GENERAL = "GENERAL"
    HUNGARIAN = "HUNGARIAN"
    LATVIAN = "LATVIAN"


class Field(Enum):
    EMAIL = "email"
    NAME = "name"
    SURNAME = "surname"


class MiniWidgetConfiguration:
    fields: Optional[List[Field]]
    title1: Optional[str]
    title2: Optional[str]

    def __init__(self, fields: Optional[List[Field]], title1: Optional[str], title2: Optional[str]) -> None:
        self.fields = fields
        self.title1 = title1
        self.title2 = title2


class StartPeriod(Enum):
    """month - по дням месяца (1-е число каждого месяца - нечётно), week - по дням недели
    (понедельник считается нечётным)
    """
    MONTH = "month"
    WEEK = "week"


class EvenOddTimetable:
    """расписание для чётных дней"""
    even: List[TimeFrame]
    """расписание для нечётных дней"""
    odd: List[TimeFrame]
    """month - по дням месяца (1-е число каждого месяца - нечётно), week - по дням недели
    (понедельник считается нечётным)
    """
    start_period: StartPeriod

    def __init__(self, even: List[TimeFrame], odd: List[TimeFrame], start_period: StartPeriod) -> None:
        self.even = even
        self.odd = odd
        self.start_period = start_period


class ResourceLocation:
    latitude: Optional[float]
    longitude: Optional[float]
    """время последнего обновления координат"""
    time: Optional[str]

    def __init__(self, latitude: Optional[float], longitude: Optional[float], time: Optional[str]) -> None:
        self.latitude = latitude
        self.longitude = longitude
        self.time = time


class Info:
    """(только в витрине) объект с данными бизнеса-филиала
    
    Содержит детальную информацию о бизнесе — название, адрес, график работы и другое
    """
    accepted_currency: Optional[List[CurrencyList]]
    additional_info: Optional[str]
    additional_fields: Optional[List[Union[List[Any], bool, AdditionalFieldsClass, float, int, None, str]]]
    """Адреса компании или филиала"""
    address: Optional[List[Union[List[Any], bool, AddressClass, float, int, None, str]]]
    auto_accept_appointment: Optional[bool]
    """если данный бизнес является витриной, идентификаторы бизнесов, которые входят в витрину"""
    business_showcase_aliases: Optional[List[BusinessShowcaseAlias]]
    contact_name: Optional[str]
    date_joined: Optional[datetime]
    description: Optional[str]
    """Список e-mail адресов компании или филиала"""
    email: Optional[str]
    fax: Optional[List[Union[List[Any], bool, PhoneClass, float, int, None, str]]]
    images: Optional[List[str]]
    instant_messaging: Optional[List[Dict[str, Any]]]
    """является ли данный бизнес витриной"""
    is_showcase: Optional[bool]
    language: Optional[LanguageList]
    logo_url: Optional[str]
    marketing_notifications: Optional[MarketingNotifications]
    metro: Optional[Metro]
    min_booking_time: Optional[float]
    """Список телефонов бизнеса"""
    mobile: Optional[List[Union[List[Any], bool, PhoneClass, float, int, None, str]]]
    """Название бизнеса"""
    name: Optional[str]
    network_id: Optional[float]
    newbo_enabled_for: Optional[List[str]]
    payment_methods: Optional[PaymentMethods]
    """Список телефонов бизнеса"""
    phone: Optional[List[Union[List[Any], bool, PhoneClass, float, int, None, str]]]
    phone_mask: Optional[str]
    pricing_type: Optional[PricingType]
    revision_version: Optional[float]
    scheduler_tick: Optional[float]
    """Короткое название филиала"""
    short_name: Optional[str]
    show_appointment_color: Optional[bool]
    show_appointment_tooltip: Optional[bool]
    """идентификаторы витрин, в которых участвует данный бизнес"""
    showcases: Optional[List[Showcase]]
    show_resource_work_statistics: Optional[bool]
    show_worker_profession: Optional[bool]
    skip_billing: Optional[bool]
    sms_duplicate_filter: Optional[SMSDuplicateFilter]
    social_network: Optional[List[SocialNetworkSchema]]
    timetable: Optional[Timetable]
    timezone: Optional[str]
    vertical_translation: Optional[VerticalTranslation]
    website: Optional[str]

    def __init__(self, accepted_currency: Optional[List[CurrencyList]], additional_info: Optional[str], additional_fields: Optional[List[Union[List[Any], bool, AdditionalFieldsClass, float, int, None, str]]], address: Optional[List[Union[List[Any], bool, AddressClass, float, int, None, str]]], auto_accept_appointment: Optional[bool], business_showcase_aliases: Optional[List[BusinessShowcaseAlias]], contact_name: Optional[str], date_joined: Optional[datetime], description: Optional[str], email: Optional[str], fax: Optional[List[Union[List[Any], bool, PhoneClass, float, int, None, str]]], images: Optional[List[str]], instant_messaging: Optional[List[Dict[str, Any]]], is_showcase: Optional[bool], language: Optional[LanguageList], logo_url: Optional[str], marketing_notifications: Optional[MarketingNotifications], metro: Optional[Metro], min_booking_time: Optional[float], mobile: Optional[List[Union[List[Any], bool, PhoneClass, float, int, None, str]]], name: Optional[str], network_id: Optional[float], newbo_enabled_for: Optional[List[str]], payment_methods: Optional[PaymentMethods], phone: Optional[List[Union[List[Any], bool, PhoneClass, float, int, None, str]]], phone_mask: Optional[str], pricing_type: Optional[PricingType], revision_version: Optional[float], scheduler_tick: Optional[float], short_name: Optional[str], show_appointment_color: Optional[bool], show_appointment_tooltip: Optional[bool], showcases: Optional[List[Showcase]], show_resource_work_statistics: Optional[bool], show_worker_profession: Optional[bool], skip_billing: Optional[bool], sms_duplicate_filter: Optional[SMSDuplicateFilter], social_network: Optional[List[SocialNetworkSchema]], timetable: Optional[Timetable], timezone: Optional[str], vertical_translation: Optional[VerticalTranslation], website: Optional[str]) -> None:
        self.accepted_currency = accepted_currency
        self.additional_info = additional_info
        self.additional_fields = additional_fields
        self.address = address
        self.auto_accept_appointment = auto_accept_appointment
        self.business_showcase_aliases = business_showcase_aliases
        self.contact_name = contact_name
        self.date_joined = date_joined
        self.description = description
        self.email = email
        self.fax = fax
        self.images = images
        self.instant_messaging = instant_messaging
        self.is_showcase = is_showcase
        self.language = language
        self.logo_url = logo_url
        self.marketing_notifications = marketing_notifications
        self.metro = metro
        self.min_booking_time = min_booking_time
        self.mobile = mobile
        self.name = name
        self.network_id = network_id
        self.newbo_enabled_for = newbo_enabled_for
        self.payment_methods = payment_methods
        self.phone = phone
        self.phone_mask = phone_mask
        self.pricing_type = pricing_type
        self.revision_version = revision_version
        self.scheduler_tick = scheduler_tick
        self.short_name = short_name
        self.show_appointment_color = show_appointment_color
        self.show_appointment_tooltip = show_appointment_tooltip
        self.showcases = showcases
        self.show_resource_work_statistics = show_resource_work_statistics
        self.show_worker_profession = show_worker_profession
        self.skip_billing = skip_billing
        self.sms_duplicate_filter = sms_duplicate_filter
        self.social_network = social_network
        self.timetable = timetable
        self.timezone = timezone
        self.vertical_translation = vertical_translation
        self.website = website


class AccessType(Enum):
    """тип доступа работника в систему через его учётную запись"""
    NONE = "NONE"
    WORKER_EXTENDED = "WORKER_EXTENDED"
    WORKER_SIMPLE = "WORKER_SIMPLE"


class ИнформацияОПрофилеРаботника:
    """Доступ имеют только пользователи с правами resource или admin"""
    """тип доступа работника в систему через его учётную запись"""
    access_type: AccessType
    """e-mail профиля работника"""
    email: str
    """идентификатор профиля работника уникальный во всей системе"""
    profile_id: str
    """идентификатор работника"""
    user_id: str

    def __init__(self, access_type: AccessType, email: str, profile_id: str, user_id: str) -> None:
        self.access_type = access_type
        self.email = email
        self.profile_id = profile_id
        self.user_id = user_id


class Status(Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"


class ResourceTaxonomyChildren:
    """true - детская услуга; false - взрослая услуга"""
    children: bool
    """идентификатор услуги, для которой установлено свойство"""
    taxonomy_id: str

    def __init__(self, children: bool, taxonomy_id: str) -> None:
        self.children = children
        self.taxonomy_id = taxonomy_id


class ResourceTaxonomyLevel:
    """идентификатор услуги, для которой установлено уровень скорости"""
    id: str
    """уровень скорости"""
    level: float

    def __init__(self, id: str, level: float) -> None:
        self.id = id
        self.level = level


class ResourceClass:
    """информация из внешней информационной системы как есть (при интеграции)"""
    additional_extra_id: Optional[List[str]]
    """Количество записей, которые может принимать работник единовременно"""
    capacity: float
    """цвет колонки с работником"""
    color: Optional[str]
    degree: Optional[str]
    """идентификатор отделения, к которому привязан работник"""
    department_id: Optional[str]
    """краткое описание работника"""
    description: Optional[str]
    display_in_schedule: Optional[bool]
    """отображать ли данного работника на виджете или любом другом клиенте"""
    display_in_widget: bool
    """e-mail работника"""
    email: Optional[str]
    """включена ли отправка e-mail уведомлений для данного работника"""
    email_enabled: Optional[bool]
    even_odd_timetable: EvenOddTimetable
    exceptions: Optional[List[Any]]
    experience: Optional[datetime]
    """информация из внешней информационной системы как есть (при интеграции)"""
    extra_description: Optional[str]
    """информация из внешней информационной системы как есть (при интеграции)"""
    extra_id: Optional[str]
    """информация из внешней информационной системы как есть (при интеграции)"""
    extra_link: Optional[str]
    """информация из внешней информационной системы как есть (при интеграции)"""
    extra_media_id: Optional[str]
    """url изображения работника; Если указан относительный путь, то используйте
    http://cdn.gbooking.ru (см. так же Business WidgetConfiguration.useDefaultWorkerImg и
    WidgetConfiguration.defaultWorkerImgUrl)
    """
    icon_url: Optional[str]
    """внутренний идентификатор работника; уникальный во всей системе GBooking"""
    id: str
    image: Optional[str]
    last_su: Optional[datetime]
    """уровень скорости выполнения услуги по-умолчанию (если не найдено в taxonomyLevels)"""
    level: float
    """не используется"""
    loaned: bool
    """не используется"""
    loaned_from: Optional[str]
    """не используется"""
    loaned_to: Optional[str]
    location: ResourceLocation
    manual_changes: bool
    """отчество работника"""
    middle_name: Optional[str]
    """имя работника"""
    name: str
    """внутреннее название работника в Бекофис"""
    nickname: Optional[str]
    """индекс сортировки работника"""
    order: Optional[float]
    """вес работника, в зависимости от указанного способа сортировки"""
    order_weight: Union[float, None, str]
    """(только в витрине) объект с данными бизнеса-филиала"""
    origin_general_info: Optional[Info]
    """(только в витрине) идентификатор бизнеса-филиала, откуда был взят работник"""
    origin_business_id: Optional[str]
    """(только в витрине) список идентификаторов услуг на бизнесе-филиале, которые выполняет
    работник
    """
    origin_taxonomies: Optional[List[str]]
    """особый навык"""
    perk: Optional[str]
    phone: Union[List[Any], bool, PhoneClass, float, int, None, str]
    """информация о профессии работника, используется в Бекофис"""
    profession: Optional[str]
    profile: Optional[ИнформацияОПрофилеРаботника]
    """Рейтинг работника"""
    rating: Optional[float]
    readonly_taxonomies: Optional[List[str]]
    """Версия изменений документа"""
    revision_version: float
    schedule_is_empty: Optional[bool]
    """информация из внешней информационной системы как есть (при интеграции)"""
    site_id: Optional[str]
    """включена ли отправка смс уведомлений для данного работника"""
    sms_enabled: Optional[bool]
    status: Optional[Status]
    """фамилия и отчество работника"""
    surname: str
    """массив идентификаторов услуг, которые выполняет работник"""
    taxonomies: List[str]
    """массив свойств выполнения услуги как детской, как взрослой или как общей (если указаны
    оба или не указаны вовсе для услуги)
    """
    taxonomy_children: List[ResourceTaxonomyChildren]
    """массив уровня скорости выполнения услуги (см так же Resource level)"""
    taxonomy_levels: List[ResourceTaxonomyLevel]
    timetable: Timetable
    user_data: Optional[Dict[str, Any]]
    """рабочее место, которое занимает работник"""
    work_place: Optional[str]

    def __init__(self, additional_extra_id: Optional[List[str]], capacity: float, color: Optional[str], degree: Optional[str], department_id: Optional[str], description: Optional[str], display_in_schedule: Optional[bool], display_in_widget: bool, email: Optional[str], email_enabled: Optional[bool], even_odd_timetable: EvenOddTimetable, exceptions: Optional[List[Any]], experience: Optional[datetime], extra_description: Optional[str], extra_id: Optional[str], extra_link: Optional[str], extra_media_id: Optional[str], icon_url: Optional[str], id: str, image: Optional[str], last_su: Optional[datetime], level: float, loaned: bool, loaned_from: Optional[str], loaned_to: Optional[str], location: ResourceLocation, manual_changes: bool, middle_name: Optional[str], name: str, nickname: Optional[str], order: Optional[float], order_weight: Union[float, None, str], origin_general_info: Optional[Info], origin_business_id: Optional[str], origin_taxonomies: Optional[List[str]], perk: Optional[str], phone: Union[List[Any], bool, PhoneClass, float, int, None, str], profession: Optional[str], profile: Optional[ИнформацияОПрофилеРаботника], rating: Optional[float], readonly_taxonomies: Optional[List[str]], revision_version: float, schedule_is_empty: Optional[bool], site_id: Optional[str], sms_enabled: Optional[bool], status: Optional[Status], surname: str, taxonomies: List[str], taxonomy_children: List[ResourceTaxonomyChildren], taxonomy_levels: List[ResourceTaxonomyLevel], timetable: Timetable, user_data: Optional[Dict[str, Any]], work_place: Optional[str]) -> None:
        self.additional_extra_id = additional_extra_id
        self.capacity = capacity
        self.color = color
        self.degree = degree
        self.department_id = department_id
        self.description = description
        self.display_in_schedule = display_in_schedule
        self.display_in_widget = display_in_widget
        self.email = email
        self.email_enabled = email_enabled
        self.even_odd_timetable = even_odd_timetable
        self.exceptions = exceptions
        self.experience = experience
        self.extra_description = extra_description
        self.extra_id = extra_id
        self.extra_link = extra_link
        self.extra_media_id = extra_media_id
        self.icon_url = icon_url
        self.id = id
        self.image = image
        self.last_su = last_su
        self.level = level
        self.loaned = loaned
        self.loaned_from = loaned_from
        self.loaned_to = loaned_to
        self.location = location
        self.manual_changes = manual_changes
        self.middle_name = middle_name
        self.name = name
        self.nickname = nickname
        self.order = order
        self.order_weight = order_weight
        self.origin_general_info = origin_general_info
        self.origin_business_id = origin_business_id
        self.origin_taxonomies = origin_taxonomies
        self.perk = perk
        self.phone = phone
        self.profession = profession
        self.profile = profile
        self.rating = rating
        self.readonly_taxonomies = readonly_taxonomies
        self.revision_version = revision_version
        self.schedule_is_empty = schedule_is_empty
        self.site_id = site_id
        self.sms_enabled = sms_enabled
        self.status = status
        self.surname = surname
        self.taxonomies = taxonomies
        self.taxonomy_children = taxonomy_children
        self.taxonomy_levels = taxonomy_levels
        self.timetable = timetable
        self.user_data = user_data
        self.work_place = work_place


class AdditionalDuration:
    duration: Optional[float]
    level: Optional[float]

    def __init__(self, duration: Optional[float], level: Optional[float]) -> None:
        self.duration = duration
        self.level = level


class AdditionalPriceType(Enum):
    """Тип цены"""
    AVERAGE = "average"
    BEGIN_WITH = "begin_with"
    EQUAL = "equal"


class BusinessTaxonomyPrice:
    """Значение цены"""
    amount: Optional[str]
    """Аббревиатура валюты"""
    currency: CurrencyList
    """"Уровень" цены. Работнику можно выставить его "уровень" (поле level в resources)"""
    resource_level: float
    """Значение цены, с учётом промо акций"""
    stock_amount: str
    """Тип цены"""
    type: Optional[AdditionalPriceType]

    def __init__(self, amount: Optional[str], currency: CurrencyList, resource_level: float, stock_amount: str, type: Optional[AdditionalPriceType]) -> None:
        self.amount = amount
        self.currency = currency
        self.resource_level = resource_level
        self.stock_amount = stock_amount
        self.type = type


class BusinessTaxonomyProduct:
    """Дополнительный ID товара"""
    extra_id: str
    """ID товара"""
    id: str
    """Является ли обязательным при выполнении данной услуги"""
    required: bool

    def __init__(self, extra_id: str, id: str, required: bool) -> None:
        self.extra_id = extra_id
        self.id = id
        self.required = required


class AdjacentTaxonomy:
    is_any_available: Optional[bool]
    order: Optional[float]
    slot_duration: Optional[float]
    taxonomy_id: Optional[str]

    def __init__(self, is_any_available: Optional[bool], order: Optional[float], slot_duration: Optional[float], taxonomy_id: Optional[str]) -> None:
        self.is_any_available = is_any_available
        self.order = order
        self.slot_duration = slot_duration
        self.taxonomy_id = taxonomy_id


class ChildrenTaxonomyType(Enum):
    CHILD = "child"
    NONE = "none"
    PARENT = "parent"


class DateLimitType(Enum):
    ALL_DATES = "all_dates"
    FROM_DATE = "from_date"
    RANGE_DATES = "range_dates"
    TO_DATE = "to_date"


class DateLimit:
    date_limit_from: Optional[datetime]
    date_limit_to: Optional[datetime]

    def __init__(self, date_limit_from: Optional[datetime], date_limit_to: Optional[datetime]) -> None:
        self.date_limit_from = date_limit_from
        self.date_limit_to = date_limit_to


class DaysOfWeek(Enum):
    FRI = "fri"
    MON = "mon"
    SAT = "sat"
    SUN = "sun"
    THU = "thu"
    TUE = "tue"
    WED = "wed"


class Repeats(Enum):
    DAILY = "daily"
    NONE = "none"
    WEEKLY = "weekly"


class Slots:
    time: Optional[TimeFrame]

    def __init__(self, time: Optional[TimeFrame]) -> None:
        self.time = time


class DiscountClass:
    active: Optional[bool]
    days_of_week: Optional[DaysOfWeek]
    repeats: Optional[Repeats]
    slots: Optional[Slots]
    start: Optional[datetime]
    unlim_weekly_repeat: Optional[bool]
    weekly_repeat: Optional[float]

    def __init__(self, active: Optional[bool], days_of_week: Optional[DaysOfWeek], repeats: Optional[Repeats], slots: Optional[Slots], start: Optional[datetime], unlim_weekly_repeat: Optional[bool], weekly_repeat: Optional[float]) -> None:
        self.active = active
        self.days_of_week = days_of_week
        self.repeats = repeats
        self.slots = slots
        self.start = start
        self.unlim_weekly_repeat = unlim_weekly_repeat
        self.weekly_repeat = weekly_repeat


class OnlineMode(Enum):
    ONCALL_ONLINE = "ONCALL_ONLINE"
    PLAN_CLINIC = "PLAN_CLINIC"
    PLAN_CLINIC_ONLINE = "PLAN_CLINIC_ONLINE"
    PLAN_ONLINE = "PLAN_ONLINE"


class Price:
    """Значение цены"""
    amount: str
    """Аббревиатура валюты (например, RUB - рубль)"""
    currency: CurrencyList
    """Значение цены, с учётом промо акций"""
    stock_amount: Optional[str]
    """Тип цены"""
    type: AdditionalPriceType

    def __init__(self, amount: str, currency: CurrencyList, stock_amount: Optional[str], type: AdditionalPriceType) -> None:
        self.amount = amount
        self.currency = currency
        self.stock_amount = stock_amount
        self.type = type


class ShowcaseItemAdditionalDuration:
    id: Optional[str]
    duration: Optional[float]
    """поддержка различной длительности услуг в зависимости от работника"""
    level: Optional[float]

    def __init__(self, id: Optional[str], duration: Optional[float], level: Optional[float]) -> None:
        self.id = id
        self.duration = duration
        self.level = level


class ShowcaseItem:
    id: Optional[str]
    additional_durations: Optional[List[ShowcaseItemAdditionalDuration]]
    business_id: Optional[str]
    taxonomy_id: Optional[str]

    def __init__(self, id: Optional[str], additional_durations: Optional[List[ShowcaseItemAdditionalDuration]], business_id: Optional[str], taxonomy_id: Optional[str]) -> None:
        self.id = id
        self.additional_durations = additional_durations
        self.business_id = business_id
        self.taxonomy_id = taxonomy_id


class TaxonomyShowcase:
    base_business_id: Optional[str]
    is_base_node: Optional[bool]
    origin_business_id: Optional[str]
    showcase_item_id: Optional[str]

    def __init__(self, base_business_id: Optional[str], is_base_node: Optional[bool], origin_business_id: Optional[str], showcase_item_id: Optional[str]) -> None:
        self.base_business_id = base_business_id
        self.is_base_node = is_base_node
        self.origin_business_id = origin_business_id
        self.showcase_item_id = showcase_item_id


class TaxonomyType(Enum):
    CATEGORY = "CATEGORY"
    SERVICE = "SERVICE"
    SUBCATEGORY = "SUBCATEGORY"


class BusinessTaxonomy:
    active: Optional[bool]
    additional_durations: Optional[List[AdditionalDuration]]
    additional_prices: Optional[List[BusinessTaxonomyPrice]]
    additional_products: Optional[List[BusinessTaxonomyProduct]]
    additional_taxonomy_extra_id: Optional[List[Dict[str, Any]]]
    adjacent_same_time_start: Optional[bool]
    adjacent_taxonomies: Optional[List[AdjacentTaxonomy]]
    alias: Optional[Dict[str, Any]]
    allow_booking_in_bo: Optional[bool]
    allow_next_booking_count: Optional[float]
    allow_next_booking_in_days: Optional[float]
    allow_next_booking_in_days_text: Optional[str]
    cabinets: Optional[List[str]]
    cabinets_enabled: Optional[bool]
    capacity: Optional[float]
    capacity_decrease: Optional[float]
    charge_units_step: Optional[float]
    children_taxonomy_types: Optional[List[ChildrenTaxonomyType]]
    color: Optional[str]
    confirmation_alert: Optional[str]
    confirmation_sms_alert: Optional[str]
    date_limits: Optional[List[DateLimit]]
    date_limit_type: Optional[DateLimitType]
    designs: Optional[List[str]]
    discounts: Union[List[Any], bool, DiscountClass, float, int, None, str]
    display_in_widget: Optional[bool]
    duration: Optional[float]
    exceptions: Optional[List[Any]]
    extra_description: Optional[str]
    extra_id: Optional[str]
    extra_link: Optional[str]
    for_pay: Optional[bool]
    id: Optional[str]
    images: Optional[List[str]]
    is_other: Optional[bool]
    last_modified: Optional[datetime]
    leaves: Optional[List[str]]
    manual_changes: Optional[bool]
    new_taxonomy: Optional[bool]
    online_mode: Optional[OnlineMode]
    only_after_taxonomies: Optional[List[str]]
    order: Optional[float]
    parallel_taxonomies: Optional[List[str]]
    popularity: Optional[float]
    price: Optional[Price]
    price_link: Optional[str]
    rooms: Optional[List[str]]
    showcase_items: Optional[List[ShowcaseItem]]
    showcases: Optional[List[TaxonomyShowcase]]
    """Идентификатор услуги в витрине"""
    showcase_taxonomy_id: Optional[str]
    """Внешний идентификатор таксономии"""
    site_id: Optional[str]
    special_cabinet: Optional[str]
    taxonomy_app_extra_id: Optional[str]
    taxonomy_category_extra_id: Optional[str]
    taxonomy_parent_id: Optional[str]
    taxonomy_type: Optional[TaxonomyType]
    timetable: Optional[Timetable]
    use_confirmation_sms_alert: Optional[bool]
    visit_type: Optional[str]

    def __init__(self, active: Optional[bool], additional_durations: Optional[List[AdditionalDuration]], additional_prices: Optional[List[BusinessTaxonomyPrice]], additional_products: Optional[List[BusinessTaxonomyProduct]], additional_taxonomy_extra_id: Optional[List[Dict[str, Any]]], adjacent_same_time_start: Optional[bool], adjacent_taxonomies: Optional[List[AdjacentTaxonomy]], alias: Optional[Dict[str, Any]], allow_booking_in_bo: Optional[bool], allow_next_booking_count: Optional[float], allow_next_booking_in_days: Optional[float], allow_next_booking_in_days_text: Optional[str], cabinets: Optional[List[str]], cabinets_enabled: Optional[bool], capacity: Optional[float], capacity_decrease: Optional[float], charge_units_step: Optional[float], children_taxonomy_types: Optional[List[ChildrenTaxonomyType]], color: Optional[str], confirmation_alert: Optional[str], confirmation_sms_alert: Optional[str], date_limits: Optional[List[DateLimit]], date_limit_type: Optional[DateLimitType], designs: Optional[List[str]], discounts: Union[List[Any], bool, DiscountClass, float, int, None, str], display_in_widget: Optional[bool], duration: Optional[float], exceptions: Optional[List[Any]], extra_description: Optional[str], extra_id: Optional[str], extra_link: Optional[str], for_pay: Optional[bool], id: Optional[str], images: Optional[List[str]], is_other: Optional[bool], last_modified: Optional[datetime], leaves: Optional[List[str]], manual_changes: Optional[bool], new_taxonomy: Optional[bool], online_mode: Optional[OnlineMode], only_after_taxonomies: Optional[List[str]], order: Optional[float], parallel_taxonomies: Optional[List[str]], popularity: Optional[float], price: Optional[Price], price_link: Optional[str], rooms: Optional[List[str]], showcase_items: Optional[List[ShowcaseItem]], showcases: Optional[List[TaxonomyShowcase]], showcase_taxonomy_id: Optional[str], site_id: Optional[str], special_cabinet: Optional[str], taxonomy_app_extra_id: Optional[str], taxonomy_category_extra_id: Optional[str], taxonomy_parent_id: Optional[str], taxonomy_type: Optional[TaxonomyType], timetable: Optional[Timetable], use_confirmation_sms_alert: Optional[bool], visit_type: Optional[str]) -> None:
        self.active = active
        self.additional_durations = additional_durations
        self.additional_prices = additional_prices
        self.additional_products = additional_products
        self.additional_taxonomy_extra_id = additional_taxonomy_extra_id
        self.adjacent_same_time_start = adjacent_same_time_start
        self.adjacent_taxonomies = adjacent_taxonomies
        self.alias = alias
        self.allow_booking_in_bo = allow_booking_in_bo
        self.allow_next_booking_count = allow_next_booking_count
        self.allow_next_booking_in_days = allow_next_booking_in_days
        self.allow_next_booking_in_days_text = allow_next_booking_in_days_text
        self.cabinets = cabinets
        self.cabinets_enabled = cabinets_enabled
        self.capacity = capacity
        self.capacity_decrease = capacity_decrease
        self.charge_units_step = charge_units_step
        self.children_taxonomy_types = children_taxonomy_types
        self.color = color
        self.confirmation_alert = confirmation_alert
        self.confirmation_sms_alert = confirmation_sms_alert
        self.date_limits = date_limits
        self.date_limit_type = date_limit_type
        self.designs = designs
        self.discounts = discounts
        self.display_in_widget = display_in_widget
        self.duration = duration
        self.exceptions = exceptions
        self.extra_description = extra_description
        self.extra_id = extra_id
        self.extra_link = extra_link
        self.for_pay = for_pay
        self.id = id
        self.images = images
        self.is_other = is_other
        self.last_modified = last_modified
        self.leaves = leaves
        self.manual_changes = manual_changes
        self.new_taxonomy = new_taxonomy
        self.online_mode = online_mode
        self.only_after_taxonomies = only_after_taxonomies
        self.order = order
        self.parallel_taxonomies = parallel_taxonomies
        self.popularity = popularity
        self.price = price
        self.price_link = price_link
        self.rooms = rooms
        self.showcase_items = showcase_items
        self.showcases = showcases
        self.showcase_taxonomy_id = showcase_taxonomy_id
        self.site_id = site_id
        self.special_cabinet = special_cabinet
        self.taxonomy_app_extra_id = taxonomy_app_extra_id
        self.taxonomy_category_extra_id = taxonomy_category_extra_id
        self.taxonomy_parent_id = taxonomy_parent_id
        self.taxonomy_type = taxonomy_type
        self.timetable = timetable
        self.use_confirmation_sms_alert = use_confirmation_sms_alert
        self.visit_type = visit_type


class TaxonomiesComplex:
    name: Optional[str]
    taxonomies: Optional[List[str]]

    def __init__(self, name: Optional[str], taxonomies: Optional[List[str]]) -> None:
        self.name = name
        self.taxonomies = taxonomies


class BusinessTopServices:
    services: Optional[List[Any]]
    status: Optional[str]

    def __init__(self, services: Optional[List[Any]], status: Optional[str]) -> None:
        self.services = services
        self.status = status


class BookableDateRanges:
    enabled: Optional[bool]
    end: Any
    start: Any

    def __init__(self, enabled: Optional[bool], end: Any, start: Any) -> None:
        self.enabled = enabled
        self.end = end
        self.start = start


class ClientBlockingSettings:
    appointment_client_block: Optional[bool]
    appointment_client_block_days: Optional[float]
    appointment_client_block_text: Optional[str]
    block_if_future_record_exists: Optional[bool]
    block_repeated_records_count: Optional[float]
    block_repeated_records_range: Optional[float]
    block_repeated_records_text: Optional[str]

    def __init__(self, appointment_client_block: Optional[bool], appointment_client_block_days: Optional[float], appointment_client_block_text: Optional[str], block_if_future_record_exists: Optional[bool], block_repeated_records_count: Optional[float], block_repeated_records_range: Optional[float], block_repeated_records_text: Optional[str]) -> None:
        self.appointment_client_block = appointment_client_block
        self.appointment_client_block_days = appointment_client_block_days
        self.appointment_client_block_text = appointment_client_block_text
        self.block_if_future_record_exists = block_if_future_record_exists
        self.block_repeated_records_count = block_repeated_records_count
        self.block_repeated_records_range = block_repeated_records_range
        self.block_repeated_records_text = block_repeated_records_text


class CracServer(Enum):
    CRAC = "CRAC"
    CRAC_PROD3 = "CRAC_PROD3"


class Rule(Enum):
    CUSTOM = "CUSTOM"
    NEAREST_INTEGER = "NEAREST_INTEGER"
    TWO_DECIMALS = "TWO_DECIMALS"


class DiscountedPriceRounding:
    rule: Optional[Rule]
    value: Optional[float]

    def __init__(self, rule: Optional[Rule], value: Optional[float]) -> None:
        self.rule = rule
        self.value = value


class Payment(Enum):
    OPTIONAL = "OPTIONAL"
    REQUIRED = "REQUIRED"
    WITHOUT = "WITHOUT"


class DiscountType(Enum):
    PERCENT = "PERCENT"


class SocialSharing:
    active: Optional[bool]
    discount_amount: Optional[float]
    discount_enabled: Optional[bool]
    discount_type: Optional[DiscountType]
    text: Optional[str]
    widget_text: Optional[str]

    def __init__(self, active: Optional[bool], discount_amount: Optional[float], discount_enabled: Optional[bool], discount_type: Optional[DiscountType], text: Optional[str], widget_text: Optional[str]) -> None:
        self.active = active
        self.discount_amount = discount_amount
        self.discount_enabled = discount_enabled
        self.discount_type = discount_type
        self.text = text
        self.widget_text = widget_text


class UseDirectScheduleRead(Enum):
    ALL = "ALL"
    AUTHENTICATED = "AUTHENTICATED"
    GUEST = "GUEST"
    NONE = "NONE"


class WidgetConfiguration:
    additional_name: Optional[str]
    alignment_taxonomy_slots: Optional[bool]
    allow_auto_select: Optional[bool]
    allow_book_visitor: Optional[bool]
    allow_skip_time_check: Optional[bool]
    appointment_confirmation_text: Optional[str]
    appointment_confirmation_title: Optional[str]
    ask_client_birthday: Optional[bool]
    ask_client_gender: Optional[bool]
    bookable_date_ranges: Optional[BookableDateRanges]
    bookable_months_count: Optional[float]
    calendar_mode: Optional[bool]
    calendar_mode_hide_time: Optional[bool]
    client_blocking_settings: Optional[ClientBlockingSettings]
    client_comment_title: Optional[bool]
    crac_server: Optional[CracServer]
    crac_slot_size: Optional[float]
    crunchv2: Optional[bool]
    day_off_label: Optional[str]
    days_forward: Optional[float]
    day_unavailable_label: Optional[str]
    default_service_img_url: Optional[str]
    default_worker_img_url: Optional[str]
    deny_same_time_records: Optional[bool]
    disabled_taxonomies_text: Optional[str]
    disable_mobile_widget: Optional[bool]
    disable_widget: Optional[bool]
    disable_widget_message: Optional[str]
    discounted_price_rounding: Optional[DiscountedPriceRounding]
    display_slot_size: Optional[float]
    dont_require_email: Optional[bool]
    email_is_mandatory: Optional[bool]
    enable_override_footer: Optional[bool]
    enable_warning_contact_data: Optional[bool]
    extra_visitors: Optional[bool]
    filter_non_insurance_schedule: Optional[bool]
    hide_any_worker_booking: Optional[bool]
    hide_call_button: Optional[bool]
    hide_empty_days: Optional[bool]
    hide_g_booking_logo: Optional[bool]
    hide_gray_slots: Optional[bool]
    hide_new_appointment_button: Optional[bool]
    hide_prices: Optional[bool]
    hide_social_networks_authentication: Optional[bool]
    insurance_client_support_phone: Optional[List[Union[List[Any], bool, PhoneClass, float, int, None, str]]]
    max_service_booking: Optional[float]
    max_timeslot_booking: Optional[float]
    most_free_enable: Optional[bool]
    multi_service_booking: Optional[bool]
    multi_timeslot_booking: Optional[bool]
    multi_timeslot_booking_all_days: Optional[bool]
    new_widget_theme: Optional[Dict[str, Any]]
    no_default_images: Optional[bool]
    override_footer: Optional[str]
    payment: Optional[Payment]
    payment_provider: Optional[PaymentProvider]
    require_agreement: Optional[bool]
    require_agreement_link: Optional[str]
    revision_version: Optional[float]
    short_link: Optional[str]
    show_all_workers: Optional[bool]
    show_client_address: Optional[bool]
    show_client_comment: Optional[bool]
    show_disabled_taxonomies: Optional[bool]
    show_drink_question: Optional[bool]
    show_map: Optional[bool]
    show_surname_first: Optional[bool]
    show_talk_question: Optional[bool]
    show_taxonomy_confirmation_alert: Optional[bool]
    skip_authentication: Optional[bool]
    skip_days_forward: Optional[bool]
    skip_mobile_map: Optional[bool]
    skip_service_duration_alignment: Optional[bool]
    skip_service_selection: Optional[bool]
    skip_time_selection: Optional[bool]
    skip_time_selection_service_i_ds: Optional[List[str]]
    skip_worker_selected_service_i_ds: Optional[List[str]]
    skip_worker_services_selection: Optional[bool]
    social_network_image: Optional[str]
    social_sharing: Optional[SocialSharing]
    sort_by_most_free: Optional[bool]
    sort_workers_by_workload: Optional[bool]
    split_insurance_client: Optional[bool]
    split_name: Optional[bool]
    tentative_ttl: Optional[float]
    theme: Optional[str]
    use_appointment_reminder: Optional[bool]
    use_business_schedule_for_unavailable_label: Optional[bool]
    use_clusters_map: Optional[bool]
    use_coupon: Optional[bool]
    use_crac: Optional[bool]
    use_default_service_img: Optional[bool]
    use_default_worker_img: Optional[bool]
    use_direct_schedule_read: Optional[UseDirectScheduleRead]
    use_insurance_guarantee_letter: Optional[bool]
    use_insurance_select: Optional[bool]
    use_med_auth: Optional[bool]
    use_middle_name: Optional[bool]
    use_new_reserve_api: Optional[bool]
    use_resource_page_loading: Optional[bool]
    use_sort_by_name: Optional[bool]
    warning_contact_data_text: Optional[str]
    widget_use_crac: Optional[bool]
    without_workers: Optional[bool]
    worker_unavailability_text: Optional[str]
    worker_name_reverse: Optional[bool]

    def __init__(self, additional_name: Optional[str], alignment_taxonomy_slots: Optional[bool], allow_auto_select: Optional[bool], allow_book_visitor: Optional[bool], allow_skip_time_check: Optional[bool], appointment_confirmation_text: Optional[str], appointment_confirmation_title: Optional[str], ask_client_birthday: Optional[bool], ask_client_gender: Optional[bool], bookable_date_ranges: Optional[BookableDateRanges], bookable_months_count: Optional[float], calendar_mode: Optional[bool], calendar_mode_hide_time: Optional[bool], client_blocking_settings: Optional[ClientBlockingSettings], client_comment_title: Optional[bool], crac_server: Optional[CracServer], crac_slot_size: Optional[float], crunchv2: Optional[bool], day_off_label: Optional[str], days_forward: Optional[float], day_unavailable_label: Optional[str], default_service_img_url: Optional[str], default_worker_img_url: Optional[str], deny_same_time_records: Optional[bool], disabled_taxonomies_text: Optional[str], disable_mobile_widget: Optional[bool], disable_widget: Optional[bool], disable_widget_message: Optional[str], discounted_price_rounding: Optional[DiscountedPriceRounding], display_slot_size: Optional[float], dont_require_email: Optional[bool], email_is_mandatory: Optional[bool], enable_override_footer: Optional[bool], enable_warning_contact_data: Optional[bool], extra_visitors: Optional[bool], filter_non_insurance_schedule: Optional[bool], hide_any_worker_booking: Optional[bool], hide_call_button: Optional[bool], hide_empty_days: Optional[bool], hide_g_booking_logo: Optional[bool], hide_gray_slots: Optional[bool], hide_new_appointment_button: Optional[bool], hide_prices: Optional[bool], hide_social_networks_authentication: Optional[bool], insurance_client_support_phone: Optional[List[Union[List[Any], bool, PhoneClass, float, int, None, str]]], max_service_booking: Optional[float], max_timeslot_booking: Optional[float], most_free_enable: Optional[bool], multi_service_booking: Optional[bool], multi_timeslot_booking: Optional[bool], multi_timeslot_booking_all_days: Optional[bool], new_widget_theme: Optional[Dict[str, Any]], no_default_images: Optional[bool], override_footer: Optional[str], payment: Optional[Payment], payment_provider: Optional[PaymentProvider], require_agreement: Optional[bool], require_agreement_link: Optional[str], revision_version: Optional[float], short_link: Optional[str], show_all_workers: Optional[bool], show_client_address: Optional[bool], show_client_comment: Optional[bool], show_disabled_taxonomies: Optional[bool], show_drink_question: Optional[bool], show_map: Optional[bool], show_surname_first: Optional[bool], show_talk_question: Optional[bool], show_taxonomy_confirmation_alert: Optional[bool], skip_authentication: Optional[bool], skip_days_forward: Optional[bool], skip_mobile_map: Optional[bool], skip_service_duration_alignment: Optional[bool], skip_service_selection: Optional[bool], skip_time_selection: Optional[bool], skip_time_selection_service_i_ds: Optional[List[str]], skip_worker_selected_service_i_ds: Optional[List[str]], skip_worker_services_selection: Optional[bool], social_network_image: Optional[str], social_sharing: Optional[SocialSharing], sort_by_most_free: Optional[bool], sort_workers_by_workload: Optional[bool], split_insurance_client: Optional[bool], split_name: Optional[bool], tentative_ttl: Optional[float], theme: Optional[str], use_appointment_reminder: Optional[bool], use_business_schedule_for_unavailable_label: Optional[bool], use_clusters_map: Optional[bool], use_coupon: Optional[bool], use_crac: Optional[bool], use_default_service_img: Optional[bool], use_default_worker_img: Optional[bool], use_direct_schedule_read: Optional[UseDirectScheduleRead], use_insurance_guarantee_letter: Optional[bool], use_insurance_select: Optional[bool], use_med_auth: Optional[bool], use_middle_name: Optional[bool], use_new_reserve_api: Optional[bool], use_resource_page_loading: Optional[bool], use_sort_by_name: Optional[bool], warning_contact_data_text: Optional[str], widget_use_crac: Optional[bool], without_workers: Optional[bool], worker_unavailability_text: Optional[str], worker_name_reverse: Optional[bool]) -> None:
        self.additional_name = additional_name
        self.alignment_taxonomy_slots = alignment_taxonomy_slots
        self.allow_auto_select = allow_auto_select
        self.allow_book_visitor = allow_book_visitor
        self.allow_skip_time_check = allow_skip_time_check
        self.appointment_confirmation_text = appointment_confirmation_text
        self.appointment_confirmation_title = appointment_confirmation_title
        self.ask_client_birthday = ask_client_birthday
        self.ask_client_gender = ask_client_gender
        self.bookable_date_ranges = bookable_date_ranges
        self.bookable_months_count = bookable_months_count
        self.calendar_mode = calendar_mode
        self.calendar_mode_hide_time = calendar_mode_hide_time
        self.client_blocking_settings = client_blocking_settings
        self.client_comment_title = client_comment_title
        self.crac_server = crac_server
        self.crac_slot_size = crac_slot_size
        self.crunchv2 = crunchv2
        self.day_off_label = day_off_label
        self.days_forward = days_forward
        self.day_unavailable_label = day_unavailable_label
        self.default_service_img_url = default_service_img_url
        self.default_worker_img_url = default_worker_img_url
        self.deny_same_time_records = deny_same_time_records
        self.disabled_taxonomies_text = disabled_taxonomies_text
        self.disable_mobile_widget = disable_mobile_widget
        self.disable_widget = disable_widget
        self.disable_widget_message = disable_widget_message
        self.discounted_price_rounding = discounted_price_rounding
        self.display_slot_size = display_slot_size
        self.dont_require_email = dont_require_email
        self.email_is_mandatory = email_is_mandatory
        self.enable_override_footer = enable_override_footer
        self.enable_warning_contact_data = enable_warning_contact_data
        self.extra_visitors = extra_visitors
        self.filter_non_insurance_schedule = filter_non_insurance_schedule
        self.hide_any_worker_booking = hide_any_worker_booking
        self.hide_call_button = hide_call_button
        self.hide_empty_days = hide_empty_days
        self.hide_g_booking_logo = hide_g_booking_logo
        self.hide_gray_slots = hide_gray_slots
        self.hide_new_appointment_button = hide_new_appointment_button
        self.hide_prices = hide_prices
        self.hide_social_networks_authentication = hide_social_networks_authentication
        self.insurance_client_support_phone = insurance_client_support_phone
        self.max_service_booking = max_service_booking
        self.max_timeslot_booking = max_timeslot_booking
        self.most_free_enable = most_free_enable
        self.multi_service_booking = multi_service_booking
        self.multi_timeslot_booking = multi_timeslot_booking
        self.multi_timeslot_booking_all_days = multi_timeslot_booking_all_days
        self.new_widget_theme = new_widget_theme
        self.no_default_images = no_default_images
        self.override_footer = override_footer
        self.payment = payment
        self.payment_provider = payment_provider
        self.require_agreement = require_agreement
        self.require_agreement_link = require_agreement_link
        self.revision_version = revision_version
        self.short_link = short_link
        self.show_all_workers = show_all_workers
        self.show_client_address = show_client_address
        self.show_client_comment = show_client_comment
        self.show_disabled_taxonomies = show_disabled_taxonomies
        self.show_drink_question = show_drink_question
        self.show_map = show_map
        self.show_surname_first = show_surname_first
        self.show_talk_question = show_talk_question
        self.show_taxonomy_confirmation_alert = show_taxonomy_confirmation_alert
        self.skip_authentication = skip_authentication
        self.skip_days_forward = skip_days_forward
        self.skip_mobile_map = skip_mobile_map
        self.skip_service_duration_alignment = skip_service_duration_alignment
        self.skip_service_selection = skip_service_selection
        self.skip_time_selection = skip_time_selection
        self.skip_time_selection_service_i_ds = skip_time_selection_service_i_ds
        self.skip_worker_selected_service_i_ds = skip_worker_selected_service_i_ds
        self.skip_worker_services_selection = skip_worker_services_selection
        self.social_network_image = social_network_image
        self.social_sharing = social_sharing
        self.sort_by_most_free = sort_by_most_free
        self.sort_workers_by_workload = sort_workers_by_workload
        self.split_insurance_client = split_insurance_client
        self.split_name = split_name
        self.tentative_ttl = tentative_ttl
        self.theme = theme
        self.use_appointment_reminder = use_appointment_reminder
        self.use_business_schedule_for_unavailable_label = use_business_schedule_for_unavailable_label
        self.use_clusters_map = use_clusters_map
        self.use_coupon = use_coupon
        self.use_crac = use_crac
        self.use_default_service_img = use_default_service_img
        self.use_default_worker_img = use_default_worker_img
        self.use_direct_schedule_read = use_direct_schedule_read
        self.use_insurance_guarantee_letter = use_insurance_guarantee_letter
        self.use_insurance_select = use_insurance_select
        self.use_med_auth = use_med_auth
        self.use_middle_name = use_middle_name
        self.use_new_reserve_api = use_new_reserve_api
        self.use_resource_page_loading = use_resource_page_loading
        self.use_sort_by_name = use_sort_by_name
        self.warning_contact_data_text = warning_contact_data_text
        self.widget_use_crac = widget_use_crac
        self.without_workers = without_workers
        self.worker_unavailability_text = worker_unavailability_text
        self.worker_name_reverse = worker_name_reverse


class BusinessClass:
    active: Optional[bool]
    additional_settings: Optional[AdditionalSettings]
    allow_category_booking: Optional[bool]
    business_backoffice_configuration: Optional[BusinessBackofficeConfiguration]
    backoffice_configuration: Optional[BackofficeConfigurationClass]
    backoffice_type: Optional[BackofficeType]
    cabinets: Optional[List[Cabinet]]
    cabinets_enabled: Optional[bool]
    callback_widget_configuration: Optional[CallbackWidgetConfiguration]
    consumables: Optional[List[Consumable]]
    created_on: Optional[datetime]
    default_filtered_workers: Optional[List[str]]
    departments: Optional[List[Department]]
    designs: Optional[List[Dict[str, Any]]]
    extra_id: Optional[str]
    flat_taxonomy_display: Optional[bool]
    general_info: BusinessInfo
    group: Optional[Group]
    id: Optional[str]
    integration_data: Optional[Dict[str, Any]]
    mini_widget_configuration: MiniWidgetConfiguration
    mobile_data: Optional[List[Any]]
    notifications: Optional[List[Any]]
    resources: List[Union[List[Any], bool, ResourceClass, float, int, None, str]]
    state_level_holidays_not_working: Optional[bool]
    taxonomies: List[BusinessTaxonomy]
    taxonomies_complex: Optional[List[TaxonomiesComplex]]
    taxonomy_tree_capacity: Optional[List[Dict[str, Any]]]
    top_services: Optional[BusinessTopServices]
    vertical: Optional[str]
    widget_configuration: WidgetConfiguration
    yandex_feed_type: Optional[str]

    def __init__(self, active: Optional[bool], additional_settings: Optional[AdditionalSettings], allow_category_booking: Optional[bool], business_backoffice_configuration: Optional[BusinessBackofficeConfiguration], backoffice_configuration: Optional[BackofficeConfigurationClass], backoffice_type: Optional[BackofficeType], cabinets: Optional[List[Cabinet]], cabinets_enabled: Optional[bool], callback_widget_configuration: Optional[CallbackWidgetConfiguration], consumables: Optional[List[Consumable]], created_on: Optional[datetime], default_filtered_workers: Optional[List[str]], departments: Optional[List[Department]], designs: Optional[List[Dict[str, Any]]], extra_id: Optional[str], flat_taxonomy_display: Optional[bool], general_info: BusinessInfo, group: Optional[Group], id: Optional[str], integration_data: Optional[Dict[str, Any]], mini_widget_configuration: MiniWidgetConfiguration, mobile_data: Optional[List[Any]], notifications: Optional[List[Any]], resources: List[Union[List[Any], bool, ResourceClass, float, int, None, str]], state_level_holidays_not_working: Optional[bool], taxonomies: List[BusinessTaxonomy], taxonomies_complex: Optional[List[TaxonomiesComplex]], taxonomy_tree_capacity: Optional[List[Dict[str, Any]]], top_services: Optional[BusinessTopServices], vertical: Optional[str], widget_configuration: WidgetConfiguration, yandex_feed_type: Optional[str]) -> None:
        self.active = active
        self.additional_settings = additional_settings
        self.allow_category_booking = allow_category_booking
        self.business_backoffice_configuration = business_backoffice_configuration
        self.backoffice_configuration = backoffice_configuration
        self.backoffice_type = backoffice_type
        self.cabinets = cabinets
        self.cabinets_enabled = cabinets_enabled
        self.callback_widget_configuration = callback_widget_configuration
        self.consumables = consumables
        self.created_on = created_on
        self.default_filtered_workers = default_filtered_workers
        self.departments = departments
        self.designs = designs
        self.extra_id = extra_id
        self.flat_taxonomy_display = flat_taxonomy_display
        self.general_info = general_info
        self.group = group
        self.id = id
        self.integration_data = integration_data
        self.mini_widget_configuration = mini_widget_configuration
        self.mobile_data = mobile_data
        self.notifications = notifications
        self.resources = resources
        self.state_level_holidays_not_working = state_level_holidays_not_working
        self.taxonomies = taxonomies
        self.taxonomies_complex = taxonomies_complex
        self.taxonomy_tree_capacity = taxonomy_tree_capacity
        self.top_services = top_services
        self.vertical = vertical
        self.widget_configuration = widget_configuration
        self.yandex_feed_type = yandex_feed_type


class FluffyMetroStation:
    id: Optional[str]
    description: Optional[str]
    name: str

    def __init__(self, id: Optional[str], description: Optional[str], name: str) -> None:
        self.id = id
        self.description = description
        self.name = name


class AddressCamelCaseSchema:
    address: Optional[str]
    address_add: Optional[str]
    admin_area: Optional[str]
    admin_area_type: Optional[str]
    building: Optional[str]
    corps: Optional[str]
    country: Country
    group: Optional[str]
    house_add: Optional[str]
    kilometer: Optional[str]
    latitude: Optional[str]
    locality: Optional[str]
    locality_type: Optional[str]
    longitude: Optional[str]
    metro_stations: Optional[List[FluffyMetroStation]]
    number: Optional[str]
    office: Optional[str]
    possesion: Optional[str]
    street: Optional[str]
    street_type: Optional[str]
    sub_admin_area: Optional[str]
    sub_admin_area_type: Optional[str]
    sub_locality: Optional[str]
    sub_locality_type: Optional[str]
    way: Optional[str]
    zip_code: Optional[str]

    def __init__(self, address: Optional[str], address_add: Optional[str], admin_area: Optional[str], admin_area_type: Optional[str], building: Optional[str], corps: Optional[str], country: Country, group: Optional[str], house_add: Optional[str], kilometer: Optional[str], latitude: Optional[str], locality: Optional[str], locality_type: Optional[str], longitude: Optional[str], metro_stations: Optional[List[FluffyMetroStation]], number: Optional[str], office: Optional[str], possesion: Optional[str], street: Optional[str], street_type: Optional[str], sub_admin_area: Optional[str], sub_admin_area_type: Optional[str], sub_locality: Optional[str], sub_locality_type: Optional[str], way: Optional[str], zip_code: Optional[str]) -> None:
        self.address = address
        self.address_add = address_add
        self.admin_area = admin_area
        self.admin_area_type = admin_area_type
        self.building = building
        self.corps = corps
        self.country = country
        self.group = group
        self.house_add = house_add
        self.kilometer = kilometer
        self.latitude = latitude
        self.locality = locality
        self.locality_type = locality_type
        self.longitude = longitude
        self.metro_stations = metro_stations
        self.number = number
        self.office = office
        self.possesion = possesion
        self.street = street
        self.street_type = street_type
        self.sub_admin_area = sub_admin_area
        self.sub_admin_area_type = sub_admin_area_type
        self.sub_locality = sub_locality
        self.sub_locality_type = sub_locality_type
        self.way = way
        self.zip_code = zip_code


class Network:
    address: Union[List[Any], bool, AddressCamelCaseSchema, float, int, None, str]
    business_name: str
    description: str
    internal_id: str

    def __init__(self, address: Union[List[Any], bool, AddressCamelCaseSchema, float, int, None, str], business_name: str, description: str, internal_id: str) -> None:
        self.address = address
        self.business_name = business_name
        self.description = description
        self.internal_id = internal_id


class ResultTopServices:
    services: List[str]
    status: bool

    def __init__(self, services: List[str], status: bool) -> None:
        self.services = services
        self.status = status


class YandexFeedType(Enum):
    DYNAMIC = "dynamic"
    NO = "no"
    STATIC = "static"
    STATIC_SERVICE_ONLY = "static-service-only"


class BusinessGetProfileByIDResponseResult:
    """данные, передаваемые в ответ"""
    active: Optional[bool]
    business: Union[List[Any], bool, BusinessClass, float, int, None, str]
    free_sms: Optional[float]
    monthly_free_sms: Optional[float]
    networks: Optional[List[Network]]
    top_services: Optional[ResultTopServices]
    use_default_sms_template: Optional[bool]
    yandex_feed_type: Optional[YandexFeedType]

    def __init__(self, active: Optional[bool], business: Union[List[Any], bool, BusinessClass, float, int, None, str], free_sms: Optional[float], monthly_free_sms: Optional[float], networks: Optional[List[Network]], top_services: Optional[ResultTopServices], use_default_sms_template: Optional[bool], yandex_feed_type: Optional[YandexFeedType]) -> None:
        self.active = active
        self.business = business
        self.free_sms = free_sms
        self.monthly_free_sms = monthly_free_sms
        self.networks = networks
        self.top_services = top_services
        self.use_default_sms_template = use_default_sms_template
        self.yandex_feed_type = yandex_feed_type


class BusinessGetProfileByIDResponse:
    """значение числового типа для идентификации запроса на сервере"""
    id: Optional[float]
    """версия протокола (2.0)"""
    jsonrpc: Optional[str]
    """данные, передаваемые в ответ"""
    result: Optional[BusinessGetProfileByIDResponseResult]
    """объект, содержащий информацию об ошибке"""
    error: Optional[BusinessGetProfileByIDResponseError]

    def __init__(self, id: Optional[float], jsonrpc: Optional[str], result: Optional[BusinessGetProfileByIDResponseResult], error: Optional[BusinessGetProfileByIDResponseError]) -> None:
        self.id = id
        self.jsonrpc = jsonrpc
        self.result = result
        self.error = error


class GetProfileByID:
    request: BusinessGetProfileByIDRequest
    response: BusinessGetProfileByIDResponse

    def __init__(self, request: BusinessGetProfileByIDRequest, response: BusinessGetProfileByIDResponse) -> None:
        self.request = request
        self.response = response


class BusinessController:
    get_profile_by_id: GetProfileByID

    def __init__(self, get_profile_by_id: GetProfileByID) -> None:
        self.get_profile_by_id = get_profile_by_id


class FluffyBusiness:
    """идентификатор бизнеса"""
    id: Union[float, str]

    def __init__(self, id: Union[float, str]) -> None:
        self.id = id


class Sex(Enum):
    FEMALE = "FEMALE"
    MALE = "MALE"
    NOT_SPECIFIED = "NOT_SPECIFIED"


class Client:
    """Данные клиента"""
    birthday: Union[Dict[str, Any], None, str]
    creator_profile_id: Optional[str]
    creator_profile_name: Optional[str]
    driver_license: Optional[str]
    email: Optional[List[str]]
    from_sms: Union[bool, None, str]
    middle_name: Optional[str]
    name: str
    phone: Union[List[Any], bool, PhoneClass, float, int, None, str]
    sex: Optional[Sex]
    surname: str
    taxi_park: Optional[str]
    taxi_park_member_count: Union[float, None, str]

    def __init__(self, birthday: Union[Dict[str, Any], None, str], creator_profile_id: Optional[str], creator_profile_name: Optional[str], driver_license: Optional[str], email: Optional[List[str]], from_sms: Union[bool, None, str], middle_name: Optional[str], name: str, phone: Union[List[Any], bool, PhoneClass, float, int, None, str], sex: Optional[Sex], surname: str, taxi_park: Optional[str], taxi_park_member_count: Union[float, None, str]) -> None:
        self.birthday = birthday
        self.creator_profile_id = creator_profile_id
        self.creator_profile_name = creator_profile_name
        self.driver_license = driver_license
        self.email = email
        self.from_sms = from_sms
        self.middle_name = middle_name
        self.name = name
        self.phone = phone
        self.sex = sex
        self.surname = surname
        self.taxi_park = taxi_park
        self.taxi_park_member_count = taxi_park_member_count


class ParamsProfile:
    """идентификатор профиля пользователя"""
    id: str

    def __init__(self, id: str) -> None:
        self.id = id


class ClientAddClientRequestParams:
    """параметры запроса"""
    business: FluffyBusiness
    client: Client
    profile: Optional[ParamsProfile]
    skip_email_check: Optional[bool]
    skip_profile_update: Optional[bool]

    def __init__(self, business: FluffyBusiness, client: Client, profile: Optional[ParamsProfile], skip_email_check: Optional[bool], skip_profile_update: Optional[bool]) -> None:
        self.business = business
        self.client = client
        self.profile = profile
        self.skip_email_check = skip_email_check
        self.skip_profile_update = skip_profile_update


class ClientAddClientRequest:
    """авторизационные параметры"""
    cred: Optional[Cred]
    """значение числового типа для идентификации запроса на сервере"""
    id: Union[float, str]
    """версия протокола - 2.0"""
    jsonrpc: str
    """название jsonrpc метода"""
    method: str
    """параметры запроса"""
    params: ClientAddClientRequestParams

    def __init__(self, cred: Optional[Cred], id: Union[float, str], jsonrpc: str, method: str, params: ClientAddClientRequestParams) -> None:
        self.cred = cred
        self.id = id
        self.jsonrpc = jsonrpc
        self.method = method
        self.params = params


class ClientAddClientResponseError:
    """объект, содержащий информацию об ошибке
    
    Список кодов ошибки авторизации
    """
    """код ошибки
    
    код ошибки создания клиента
    """
    code: float
    """дополнительные данные об ошибке"""
    data: Optional[str]
    """текстовая информация об ошибке"""
    message: str

    def __init__(self, code: float, data: Optional[str], message: str) -> None:
        self.code = code
        self.data = data
        self.message = message


class ResultBusiness:
    id: str

    def __init__(self, id: str) -> None:
        self.id = id


class ResultProfile:
    id: str

    def __init__(self, id: str) -> None:
        self.id = id


class ClientAddClientResponseResult:
    business: Optional[ResultBusiness]
    client: Client
    documents: Optional[List[Any]]
    profile: Optional[ResultProfile]

    def __init__(self, business: Optional[ResultBusiness], client: Client, documents: Optional[List[Any]], profile: Optional[ResultProfile]) -> None:
        self.business = business
        self.client = client
        self.documents = documents
        self.profile = profile


class ClientAddClientResponse:
    result: Optional[ClientAddClientResponseResult]
    """объект, содержащий информацию об ошибке"""
    error: Optional[ClientAddClientResponseError]
    """значение числового типа для идентификации запроса на сервере"""
    id: Optional[float]
    """версия протокола (2.0)"""
    jsonrpc: Optional[str]

    def __init__(self, result: Optional[ClientAddClientResponseResult], error: Optional[ClientAddClientResponseError], id: Optional[float], jsonrpc: Optional[str]) -> None:
        self.result = result
        self.error = error
        self.id = id
        self.jsonrpc = jsonrpc


class AddClient:
    request: ClientAddClientRequest
    response: ClientAddClientResponse

    def __init__(self, request: ClientAddClientRequest, response: ClientAddClientResponse) -> None:
        self.request = request
        self.response = response


class ClientController:
    add_client: AddClient

    def __init__(self, add_client: AddClient) -> None:
        self.add_client = add_client


class Controllers:
    business: BusinessController
    client: ClientController

    def __init__(self, business: BusinessController, client: ClientController) -> None:
        self.business = business
        self.client = client


class Models:
    business: Union[List[Any], bool, BusinessClass, float, int, None, str]
    client: Client

    def __init__(self, business: Union[List[Any], bool, BusinessClass, float, int, None, str], client: Client) -> None:
        self.business = business
        self.client = client


class GBookingCoreV2:
    controllers: Controllers
    models: Models

    def __init__(self, controllers: Controllers, models: Models) -> None:
        self.controllers = controllers
        self.models = models
