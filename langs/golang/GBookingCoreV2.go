// This file was generated from JSON Schema using quicktype, do not modify it directly.
// To parse and unparse this JSON data, add this code to your project and do:
//
//    gBookingCoreV2, err := UnmarshalGBookingCoreV2(bytes)
//    bytes, err = gBookingCoreV2.Marshal()

package ru.gbooking.apiv2

import "bytes"
import "errors"
import "encoding/json"

func UnmarshalGBookingCoreV2(data []byte) (GBookingCoreV2, error) {
	var r GBookingCoreV2
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *GBookingCoreV2) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type GBookingCoreV2 struct {
	Common      CommonClass `json:"Common"`     
	Controllers Controllers `json:"Controllers"`
	Models      Models      `json:"Models"`     
}

type CommonClass struct {
	AuthErrorCodes  *AuthErrorCodesClass `json:"AuthErrorCodes,omitempty"`
	ErrorResponse   *ErrorResponse       `json:"ErrorResponse"`           
	Request         *Request             `json:"Request"`                 
	SuccessResponse *SuccessResponse     `json:"SuccessResponse"`         
}

// Код ошибки авторизации
type AuthErrorCodesClass struct {
	Code float64 `json:"code"`
}

type ErrorResponseClass struct {
	Error   Error   `json:"error"`  // объект, содержащий информацию об ошибке
	ID      float64 `json:"id"`     // значение числового типа для идентификации запроса на сервере
	Jsonrpc string  `json:"jsonrpc"`// версия протокола (2.0)
}

// объект, содержащий информацию об ошибке
type Error struct {
	Code    float64 `json:"code"`          // код ошибки
	Data    *string `json:"data,omitempty"`// дополнительные данные об ошибке
	Message string  `json:"message"`       // текстовая информация об ошибке
}

type RequestClass struct {
	Cred    *Cred          `json:"cred,omitempty"`// авторизационные параметры
	ID      *TimeFrameDate `json:"id"`            // значение числового типа для идентификации запроса на сервере
	Jsonrpc string         `json:"jsonrpc"`       // версия протокола - 2.0
	Method  string         `json:"method"`        // название jsonrpc метода
	Params  *ParamsUnion   `json:"params"`        // параметры запроса
}

// авторизационные параметры
type Cred struct {
	Token *string `json:"token,omitempty"`// временный token для доступа
	User  *string `json:"user,omitempty"` // идентификатор профиля пользователя
}

type SuccessResponseClass struct {
	ID      float64                `json:"id"`     // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                 `json:"jsonrpc"`// версия протокола (2.0)
	Result  map[string]interface{} `json:"result"` // данные, передаваемые в ответ
}

type Controllers struct {
	Business  BusinessController  `json:"Business"` 
	Client    ClientController    `json:"Client"`   
	CracSlots CracSlotsController `json:"CracSlots"`
}

type BusinessController struct {
	GetNetworkData GetNetworkData `json:"get_network_data"` 
	GetProfileByID GetProfileByID `json:"get_profile_by_id"`
}

type GetNetworkData struct {
	Request  BusinessGetNetworkDataRequest  `json:"request"` 
	Response BusinessGetNetworkDataResponse `json:"response"`
}

type BusinessGetNetworkDataRequest struct {
	Cred    *Cred                               `json:"cred,omitempty"`// авторизационные параметры
	ID      *TimeFrameDate                      `json:"id"`            // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                              `json:"jsonrpc"`       // версия протокола - 2.0
	Method  string                              `json:"method"`        // название jsonrpc метода
	Params  BusinessGetNetworkDataRequestParams `json:"params"`        // параметры запроса; ; параметры запроса business.get_network_data
}

// параметры запроса business.get_network_data
type BusinessGetNetworkDataRequestParams struct {
	NetworkID        *TimeFrameDate `json:"networkID"`                   // идентификатор сети
	WithBusinessInfo *bool          `json:"with_business_info,omitempty"`// Если передано true - возвращает информацию business_info/general_info по каждому бизнесу; в массиве businesses
}

type BusinessGetNetworkDataResponse struct {
	ID      float64                               `json:"id"`             // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                                `json:"jsonrpc"`        // версия протокола (2.0)
	Result  *BusinessGetNetworkDataResponseResult `json:"result"`         // данные, передаваемые в ответ
	Error   *BusinessGetNetworkDataResponseError  `json:"error,omitempty"`// объект, содержащий информацию об ошибке
}

// объект, содержащий информацию об ошибке
//
// Код ошибки авторизации
type BusinessGetNetworkDataResponseError struct {
	Code    float64 `json:"code"`          // код ошибки
	Data    *string `json:"data,omitempty"`// дополнительные данные об ошибке
	Message string  `json:"message"`       // текстовая информация об ошибке
}

type BusinessGetNetworkDataResponseResult struct {
	BusinessConfiguration      map[string]interface{}       `json:"businessConfiguration"`     
	Businesses                 []PurpleBusiness             `json:"businesses"`                
	ClientVIPPhones            []string                     `json:"clientVIPPhones"`           
	GrantGroups                []map[string]interface{}     `json:"grantGroups"`               
	NetworkID                  string                       `json:"networkID"`                 
	NetworkInfo                map[string]interface{}       `json:"networkInfo"`               
	NetworkName                *string                      `json:"networkName,omitempty"`     
	NetworkWidgetConfiguration []NetworkWidgetConfiguration `json:"networkWidgetConfiguration"`// настройки показа сети в зависимости от источника, на котором размещено приложение
}

// указатель на бизнес в сети
type PurpleBusiness struct {
	ID                *string           `json:"_id,omitempty"`    
	BusinessID        string            `json:"businessID"`       
	Info              *BusinessBusiness `json:"info"`             
	IsMapBusiness     bool              `json:"isMapBusiness"`    
	Order             *float64          `json:"order,omitempty"`  
	VirtualTaxonomies []string          `json:"virtualTaxonomies"`
}

type FluffyBusiness struct {
	Active                          *bool                              `json:"active,omitempty"`                       
	AdditionalSettings              *PurpleAdditionalSettings          `json:"additionalSettings,omitempty"`           
	AllowCategoryBooking            *bool                              `json:"allowCategoryBooking,omitempty"`         
	BusinessBackofficeConfiguration *FluffyBackofficeConfiguration     `json:"backoffice_configuration,omitempty"`     
	BackofficeConfiguration         *PurpleBackofficeConfiguration     `json:"backofficeConfiguration,omitempty"`      
	BackofficeType                  *BackofficeType                    `json:"backofficeType,omitempty"`               
	Cabinets                        []PurpleCabinet                    `json:"cabinets"`                               
	CabinetsEnabled                 *bool                              `json:"cabinetsEnabled,omitempty"`              
	CallbackWidgetConfiguration     *PurpleCallbackWidgetConfiguration `json:"callback_widget_configuration,omitempty"`
	Consumables                     []PurpleConsumable                 `json:"consumables"`                            
	CreatedOn                       *string                            `json:"created_on,omitempty"`                   
	DefaultFilteredWorkers          []string                           `json:"defaultFilteredWorkers"`                 
	Departments                     []PurpleDepartment                 `json:"departments"`                            
	Designs                         []map[string]interface{}           `json:"designs"`                                
	ExtraID                         *string                            `json:"extraID,omitempty"`                      
	FlatTaxonomyDisplay             *bool                              `json:"flatTaxonomyDisplay,omitempty"`          
	GeneralInfo                     BusinessInfo                       `json:"general_info"`                           
	Group                           *Group                             `json:"group,omitempty"`                        
	ID                              *string                            `json:"id,omitempty"`                           
	IntegrationData                 map[string]interface{}             `json:"integration_data,omitempty"`             
	MiniWidgetConfiguration         PurpleMiniWidgetConfiguration      `json:"mini_widget_configuration"`              
	MobileData                      []interface{}                      `json:"mobileData"`                             
	Notifications                   []interface{}                      `json:"notifications"`                          
	StateLevelHolidaysNotWorking    *bool                              `json:"stateLevelHolidaysNotWorking,omitempty"` 
	TaxonomiesComplex               []PurpleTaxonomiesComplex          `json:"taxonomiesComplex"`                      
	TaxonomyTreeCapacity            []map[string]interface{}           `json:"taxonomy_tree_capacity"`                 
	TopServices                     *PurpleTopServices                 `json:"top_services,omitempty"`                 
	Vertical                        *string                            `json:"vertical,omitempty"`                     
	WidgetConfiguration             PurpleWidgetConfiguration          `json:"widget_configuration"`                   
	YandexFeedType                  *string                            `json:"yandexFeedType,omitempty"`               
}

type PurpleAdditionalSettings struct {
	AppointmentExtensionAmount *float64                  `json:"appointmentExtensionAmount,omitempty"`
	AppointmentExtensionType   *AppointmentExtensionType `json:"appointmentExtensionType,omitempty"`  
}

type PurpleBackofficeConfiguration struct {
	AdjacentTaxonomiesTreshold                      *float64                 `json:"adjacentTaxonomiesTreshold,omitempty"`                     
	AllowHideServiceForBooking                      *bool                    `json:"allowHideServiceForBooking,omitempty"`                     
	AllowHideWorkersFromSchdeule                    *bool                    `json:"allowHideWorkersFromSchdeule,omitempty"`                   
	AllowSMSTranslit                                *bool                    `json:"allowSmsTranslit,omitempty"`                               
	AppointmentFutureMoving                         *bool                    `json:"appointmentFutureMoving,omitempty"`                        
	BlockNotificationForAnyAvailableAdjacentService *bool                    `json:"blockNotificationForAnyAvailableAdjacentService,omitempty"`
	CabinetsEnabled                                 *bool                    `json:"cabinetsEnabled,omitempty"`                                
	CheckClientOverlapping                          *bool                    `json:"checkClientOverlapping,omitempty"`                         
	CustomOnlinePaymentConfirmationTemplate         *string                  `json:"customOnlinePaymentConfirmationTemplate,omitempty"`        
	DefaultGTScheduleDayView                        *bool                    `json:"defaultGTScheduleDayView,omitempty"`                       
	DisableAppointmentClientInlineEditor            *bool                    `json:"disableAppointmentClientInlineEditor,omitempty"`           
	EditAppExtraID                                  *bool                    `json:"editAppExtraId,omitempty"`                                 
	EditTaxonomyChildren                            *bool                    `json:"editTaxonomyChildren,omitempty"`                           
	EditTaxonomyVisitType                           *bool                    `json:"editTaxonomyVisitType,omitempty"`                          
	EnableBlackList                                 *bool                    `json:"enableBlackList,omitempty"`                                
	EnableCalculateShedule                          *bool                    `json:"enableCalculateShedule,omitempty"`                         
	EnableClientCard                                *bool                    `json:"enableClientCard,omitempty"`                               
	EnableClientLanguage                            *bool                    `json:"enableClientLanguage,omitempty"`                           
	EnableClientMedicalCardReport                   *bool                    `json:"enableClientMedicalCardReport,omitempty"`                  
	EnableCustomOnlinePaymentConfirmation           *bool                    `json:"enableCustomOnlinePaymentConfirmation,omitempty"`          
	EnableExtendedPhone                             *bool                    `json:"enableExtendedPhone,omitempty"`                            
	EnableExtendedRecordsClientStatistics           *bool                    `json:"enableExtendedRecordsClientStatistics,omitempty"`          
	EnableMasterImportance                          *bool                    `json:"enableMasterImportance,omitempty"`                         
	EnableServiceTimeLimit                          *bool                    `json:"enableServiceTimeLimit,omitempty"`                         
	EnableSourceChoice                              *bool                    `json:"enableSourceChoice,omitempty"`                             
	EnableTaxonomyChildrenAgeCheck                  *bool                    `json:"enableTaxonomyChildrenAgeCheck,omitempty"`                 
	ExportToExcelRemovedClients                     *bool                    `json:"exportToExcelRemovedClients,omitempty"`                    
	FeedbackCustomerPortalMessage                   *string                  `json:"feedbackCustomerPortalMessage,omitempty"`                  
	FeedbackCustomerPortalThankYouMessage           *string                  `json:"feedbackCustomerPortalThankYouMessage,omitempty"`          
	FeedbackCustomerPortalTitle                     *string                  `json:"feedbackCustomerPortalTitle,omitempty"`                    
	FeedBackMinRating                               *FeedBackMinRating       `json:"feedBackMinRating,omitempty"`                              
	FinID                                           *string                  `json:"finId,omitempty"`                                          
	FinName                                         *string                  `json:"finName,omitempty"`                                        
	HideCustomerPortalFooter                        *bool                    `json:"hideCustomerPortalFooter,omitempty"`                       
	HighlightedResource                             *bool                    `json:"highlightedResource,omitempty"`                            
	ManualExceptionSupport                          *bool                    `json:"manualExceptionSupport,omitempty"`                         
	NoInternetAlert                                 *bool                    `json:"noInternetAlert,omitempty"`                                
	PastTimeEdit                                    *float64                 `json:"pastTimeEdit,omitempty"`                                   
	PaymentProvider                                 *PaymentProvider         `json:"paymentProvider,omitempty"`                                
	ReadonlyResourceSchedule                        *bool                    `json:"readonlyResourceSchedule,omitempty"`                       
	ResourceTimetableType                           *ResourceTimetableType   `json:"resourceTimetableType,omitempty"`                          
	RevisionVersion                                 *float64                 `json:"revisionVersion,omitempty"`                                
	SchduleWeekViewIsDefault                        *bool                    `json:"schduleWeekViewIsDefault,omitempty"`                       
	ScheduleDefaultWorkersLimit                     *float64                 `json:"scheduleDefaultWorkersLimit,omitempty"`                    
	SchedulerWeekViewType                           *SchedulerWeekViewType   `json:"schedulerWeekViewType,omitempty"`                          
	ScheduleWorkerHours                             *bool                    `json:"scheduleWorkerHours,omitempty"`                            
	ShowAdditionalFields                            *bool                    `json:"showAdditionalFields,omitempty"`                           
	ShowAddress                                     *bool                    `json:"showAddress,omitempty"`                                    
	ShowBirthDate                                   *bool                    `json:"showBirthDate,omitempty"`                                  
	ShowClientAppear                                *bool                    `json:"showClientAppear,omitempty"`                               
	ShowClientAppearOnSchedule                      *bool                    `json:"showClientAppearOnSchedule,omitempty"`                     
	ShowClientBirthdayFilter                        *bool                    `json:"showClientBirthdayFilter,omitempty"`                       
	ShowClientContractNumber                        *bool                    `json:"showClientContractNumber,omitempty"`                       
	ShowClientImage                                 *bool                    `json:"showClientImage,omitempty"`                                
	ShowClientPayment                               *bool                    `json:"showClientPayment,omitempty"`                              
	ShowDefaulterBlockscreen                        *bool                    `json:"showDefaulterBlockscreen,omitempty"`                       
	ShowDeliveryStatus                              *bool                    `json:"showDeliveryStatus,omitempty"`                             
	ShowDepartmentFilter                            *bool                    `json:"showDepartmentFilter,omitempty"`                           
	ShowDepartments                                 *bool                    `json:"showDepartments,omitempty"`                                
	ShowDepartmentsConfiguration                    *bool                    `json:"showDepartmentsConfiguration,omitempty"`                   
	ShowEmail                                       *bool                    `json:"showEmail,omitempty"`                                      
	ShowExtraClientInfo                             *bool                    `json:"showExtraClientInfo,omitempty"`                            
	ShowFax                                         *bool                    `json:"showFax,omitempty"`                                        
	ShowFiredWorkerAppointmentAlert                 *bool                    `json:"showFiredWorkerAppointmentAlert,omitempty"`                
	ShowFirstAvailableSlot                          *bool                    `json:"showFirstAvailableSlot,omitempty"`                         
	ShowGapWindow                                   *bool                    `json:"showGapWindow,omitempty"`                                  
	ShowGender                                      *bool                    `json:"showGender,omitempty"`                                     
	ShowGenderInRecords                             *bool                    `json:"showGenderInRecords,omitempty"`                            
	ShowGeneratableReportsScreen                    *bool                    `json:"showGeneratableReportsScreen,omitempty"`                   
	ShowHouseNumber                                 *bool                    `json:"showHouseNumber,omitempty"`                                
	ShowIsraelCity                                  *bool                    `json:"showIsraelCity,omitempty"`                                 
	ShowKupatHolim                                  *bool                    `json:"showKupatHolim,omitempty"`                                 
	ShowLeadsScreen                                 *bool                    `json:"showLeadsScreen,omitempty"`                                
	ShowManualChanges                               *bool                    `json:"showManualChanges,omitempty"`                              
	ShowPassportID                                  *bool                    `json:"showPassportId,omitempty"`                                 
	ShowRooms                                       *bool                    `json:"showRooms,omitempty"`                                      
	ShowSeasonTickets                               *bool                    `json:"showSeasonTickets,omitempty"`                              
	ShowTaxonomyChildren                            *bool                    `json:"showTaxonomyChildren,omitempty"`                           
	ShowTaxonomyLocalization                        *bool                    `json:"showTaxonomyLocalization,omitempty"`                       
	ShowTaxonomyVisitType                           *bool                    `json:"showTaxonomyVisitType,omitempty"`                          
	ShowTestRecord                                  *bool                    `json:"showTestRecord,omitempty"`                                 
	ShowUTM                                         *bool                    `json:"showUTM,omitempty"`                                        
	ShowWidgetColorTheme                            *bool                    `json:"showWidgetColorTheme,omitempty"`                           
	ShowWorkerDescriptionInEvent                    *bool                    `json:"showWorkerDescriptionInEvent,omitempty"`                   
	ShowWorkerExtraID                               *bool                    `json:"showWorkerExtraId,omitempty"`                              
	ShowWorkerStatus                                *bool                    `json:"showWorkerStatus,omitempty"`                               
	SkipAppointmentPriceUpdate                      *bool                    `json:"skipAppointmentPriceUpdate,omitempty"`                     
	SkipCancelIfClientNotAppear                     *bool                    `json:"skipCancelIfClientNotAppear,omitempty"`                    
	SkipServiceFiltering                            *bool                    `json:"skipServiceFiltering,omitempty"`                           
	SplitFullNameXlsExport                          *bool                    `json:"splitFullNameXlsExport,omitempty"`                         
	StateLevelHolidays                              []map[string]interface{} `json:"stateLevelHolidays"`                                       
	StateLevelHolidaysNotWorking                    *bool                    `json:"stateLevelHolidaysNotWorking,omitempty"`                   
	TaxonomyChildrenMaxAge                          *float64                 `json:"taxonomyChildrenMaxAge,omitempty"`                         
	UseAdditionalDurations                          *bool                    `json:"useAdditionalDurations,omitempty"`                         
	UseAdjacentTaxonomies                           *bool                    `json:"useAdjacentTaxonomies,omitempty"`                          
	UseAdjacentTaxonomiesSlotSplitting              *bool                    `json:"useAdjacentTaxonomiesSlotSplitting,omitempty"`             
	UseGtAppMethod                                  *bool                    `json:"useGtAppMethod,omitempty"`                                 
	WorkWeekEnd                                     *float64                 `json:"workWeekEnd,omitempty"`                                    
	WorkWeekStart                                   *float64                 `json:"workWeekStart,omitempty"`                                  
}

type FluffyBackofficeConfiguration struct {
	EnableMasterImportance *bool                  `json:"enableMasterImportance,omitempty"`
	ResourceTimetableType  *ResourceTimetableType `json:"resourceTimetableType,omitempty"` 
}

type PurpleCabinet struct {
	Active *bool   `json:"active,omitempty"`
	ID     *string `json:"id,omitempty"`    
	Name   *string `json:"name,omitempty"`  
}

type PurpleCallbackWidgetConfiguration struct {
	Title1 *string `json:"title1,omitempty"`
	Title2 *string `json:"title2,omitempty"`
}

type PurpleConsumable struct {
	ExtraID  string  `json:"extraID"` 
	Name     string  `json:"name"`    
	Quantity float64 `json:"quantity"`
}

type PurpleDepartment struct {
	ID           string   `json:"id"`           
	DepartmentID *float64 `json:"id_,omitempty"`
	Name         string   `json:"name"`         
}

// Содержит детальную информацию о бизнесе — название, адрес, график работы и другое
type BusinessInfo struct {
	AcceptedCurrency           []CurrencyList           `json:"accepted_currency"`                   
	AdditionalInfo             *string                  `json:"additional_info"`                     
	AdditionalFields           []AdditionalFields       `json:"additionalFields"`                    
	Address                    []AddressElement         `json:"address"`                             // Адреса компании или филиала
	AutoAcceptAppointment      *bool                    `json:"autoAcceptAppointment,omitempty"`     
	BusinessShowcaseAliases    []BusinessShowcaseAlias  `json:"businessShowcaseAliases"`             // если данный бизнес является витриной, идентификаторы бизнесов, которые входят в витрину
	ContactName                *string                  `json:"contactName,omitempty"`               
	DateJoined                 *string                  `json:"date_joined,omitempty"`               
	Description                *string                  `json:"description,omitempty"`               
	Email                      *string                  `json:"email,omitempty"`                     // Список e-mail адресов компании или филиала
	Fax                        []Phone                  `json:"fax"`                                 
	Images                     []string                 `json:"images"`                              
	InstantMessaging           []map[string]interface{} `json:"instant_messaging"`                   
	IsShowcase                 *bool                    `json:"isShowcase,omitempty"`                // является ли данный бизнес витриной
	Language                   *LanguageList            `json:"language,omitempty"`                  
	LogoURL                    *string                  `json:"logo_url"`                            
	MarketingNotifications     *MarketingNotifications  `json:"marketingNotifications,omitempty"`    
	Metro                      *Metro                   `json:"metro,omitempty"`                     
	MinBookingTime             *float64                 `json:"min_booking_time"`                    
	Mobile                     []Phone                  `json:"mobile"`                              // Список телефонов бизнеса
	Name                       *string                  `json:"name,omitempty"`                      // Название бизнеса
	NetworkID                  *float64                 `json:"networkID"`                           
	NewboEnabledFor            []string                 `json:"newboEnabledFor"`                     
	PaymentMethods             *PaymentMethods          `json:"paymentMethods,omitempty"`            
	Phone                      []Phone                  `json:"phone"`                               // Список телефонов бизнеса
	PhoneMask                  *string                  `json:"phone_mask"`                          
	PricingType                *PricingType             `json:"pricingType,omitempty"`               
	RevisionVersion            *float64                 `json:"revisionVersion,omitempty"`           
	SchedulerTick              *float64                 `json:"schedulerTick,omitempty"`             
	ShortName                  *string                  `json:"shortName"`                           // Короткое название филиала
	ShowAppointmentColor       *bool                    `json:"showAppointmentColor,omitempty"`      
	ShowAppointmentTooltip     *bool                    `json:"showAppointmentTooltip,omitempty"`    
	Showcases                  []Showcase               `json:"showcases"`                           // идентификаторы витрин, в которых участвует данный бизнес
	ShowResourceWorkStatistics *bool                    `json:"showResourceWorkStatistics,omitempty"`
	ShowWorkerProfession       *bool                    `json:"showWorkerProfession,omitempty"`      
	SkipBilling                *bool                    `json:"skipBilling,omitempty"`               
	SMSDuplicateFilter         *SMSDuplicateFilter      `json:"smsDuplicateFilter,omitempty"`        
	SocialNetwork              []SocialNetworkSchema    `json:"social_network"`                      
	Timetable                  *Timetable               `json:"timetable,omitempty"`                 
	Timezone                   *string                  `json:"timezone"`                            
	VerticalTranslation        *VerticalTranslation     `json:"verticalTranslation,omitempty"`       
	Website                    *string                  `json:"website,omitempty"`                   
}

type AdditionalFieldsClass struct {
	Name          string               `json:"name"`         
	RequiredField bool                 `json:"requiredField"`
	ShortName     string               `json:"shortName"`    
	Type          AdditionalFieldsType `json:"type"`         
	Value         string               `json:"value"`        
}

type AddressClass struct {
	Address          *string              `json:"address,omitempty"`            
	AddressAdd       *string              `json:"address_add,omitempty"`        
	AdminArea        *string              `json:"admin_area,omitempty"`         
	AdminAreaType    *string              `json:"admin_area_type,omitempty"`    
	Building         *string              `json:"building,omitempty"`           
	Corps            *string              `json:"corps,omitempty"`              
	Country          Country              `json:"country"`                      
	Group            *string              `json:"group,omitempty"`              
	HouseAdd         *string              `json:"house_add,omitempty"`          
	Kilometer        *string              `json:"kilometer,omitempty"`          
	Latitude         *string              `json:"latitude,omitempty"`           
	Locality         *string              `json:"locality,omitempty"`           
	LocalityType     *string              `json:"locality_type,omitempty"`      
	Longitude        *string              `json:"longitude,omitempty"`          
	MetroStations    []PurpleMetroStation `json:"metroStations"`                
	Number           *string              `json:"number,omitempty"`             
	Office           *string              `json:"office,omitempty"`             
	Possesion        *string              `json:"possesion,omitempty"`          
	Street           *string              `json:"street,omitempty"`             
	StreetType       *string              `json:"street_type,omitempty"`        
	SubAdminArea     *string              `json:"sub_admin_area,omitempty"`     
	SubAdminAreaType *string              `json:"sub_admin_area_type,omitempty"`
	SubLocality      *string              `json:"sub_locality,omitempty"`       
	SubLocalityType  *string              `json:"sub_locality_type,omitempty"`  
	Way              *string              `json:"way,omitempty"`                
	ZipCode          *string              `json:"zip_code,omitempty"`           
}

type PurpleMetroStation struct {
	ID          *string `json:"_id,omitempty"`        
	Description *string `json:"description,omitempty"`
	Name        string  `json:"name"`                 
}

type BusinessShowcaseAlias struct {
	InternalID *string `json:"internalID,omitempty"`
}

type PhoneClass struct {
	AreaCode    string `json:"area_code"`   
	CountryCode string `json:"country_code"`
	Number      string `json:"number"`      
}

type MarketingNotifications struct {
	Accepted        bool `json:"accepted"`       
	Active          bool `json:"active"`         
	UseSMSAlphaName bool `json:"useSmsAlphaName"`
}

type Metro struct {
	Color    *string  `json:"color,omitempty"`   
	Distance *float64 `json:"distance,omitempty"`
	Name     *string  `json:"name,omitempty"`    
}

type SMSDuplicateFilter struct {
	Active *bool `json:"active,omitempty"`
}

type Showcase struct {
	BaseBusinessID *string `json:"baseBusinessID,omitempty"`
}

type SocialNetworkSchema struct {
	Handle        string        `json:"handle"`        
	ID            string        `json:"id"`            // network id
	SocialNetwork SocialNetwork `json:"social_network"`
	URL           string        `json:"url"`           
}

// таблица регулярного недельного расписания
type Timetable struct {
	Active *bool `json:"active,omitempty"`// установлено ли расписание для сущности
	Week   *Week `json:"week,omitempty"`  
}

type Week struct {
	Fri []TimeFrame `json:"fri"`
	Mon []TimeFrame `json:"mon"`
	Sat []TimeFrame `json:"sat"`
	Sun []TimeFrame `json:"sun"`
	Thu []TimeFrame `json:"thu"`
	Tue []TimeFrame `json:"tue"`
	Wed []TimeFrame `json:"wed"`
}

type TimeFrame struct {
	Capacity  *float64       `json:"capacity,omitempty"`
	End       float64        `json:"end"`               // смещение в минутах от начала дня
	EndDate   *TimeFrameDate `json:"endDate"`           
	ExtraID   *string        `json:"extraId,omitempty"` 
	ID        *string        `json:"id,omitempty"`      // уникальный идентификатор временного слота
	Resources []string       `json:"resources"`         
	RoomID    *string        `json:"roomID,omitempty"`  
	Start     float64        `json:"start"`             // смещение в минутах от начала дня
	StartDate *TimeFrameDate `json:"startDate"`         
}

type PurpleMiniWidgetConfiguration struct {
	Fields []Field `json:"fields"`          
	Title1 *string `json:"title1,omitempty"`
	Title2 *string `json:"title2,omitempty"`
}

type PurpleTaxonomiesComplex struct {
	Name       *string  `json:"name,omitempty"`
	Taxonomies []string `json:"taxonomies"`    
}

type PurpleTopServices struct {
	Services []interface{} `json:"services"`        
	Status   *string       `json:"status,omitempty"`
}

type PurpleWidgetConfiguration struct {
	AdditionalName                         *string                        `json:"additionalName,omitempty"`                        
	AlignmentTaxonomySlots                 *bool                          `json:"alignmentTaxonomySlots,omitempty"`                
	AllowAutoSelect                        *bool                          `json:"allowAutoSelect,omitempty"`                       
	AllowBookVisitor                       *bool                          `json:"allowBookVisitor,omitempty"`                      
	AllowSkipTimeCheck                     *bool                          `json:"allowSkipTimeCheck,omitempty"`                    
	AppointmentConfirmationText            *string                        `json:"appointment_confirmation_text,omitempty"`         
	AppointmentConfirmationTitle           *string                        `json:"appointment_confirmation_title,omitempty"`        
	AskClientBirthday                      *bool                          `json:"askClientBirthday,omitempty"`                     
	AskClientGender                        *bool                          `json:"askClientGender,omitempty"`                       
	BookableDateRanges                     *PurpleBookableDateRanges      `json:"bookableDateRanges,omitempty"`                    
	BookableMonthsCount                    *float64                       `json:"bookableMonthsCount,omitempty"`                   
	CalendarMode                           *bool                          `json:"calendarMode,omitempty"`                          
	CalendarModeHideTime                   *bool                          `json:"calendarModeHideTime,omitempty"`                  
	ClientBlockingSettings                 *PurpleClientBlockingSettings  `json:"clientBlockingSettings,omitempty"`                
	ClientCommentTitle                     *string                        `json:"clientCommentTitle,omitempty"`                    
	CracServer                             *CracServer                    `json:"cracServer,omitempty"`                            
	CracSlotSize                           *float64                       `json:"cracSlotSize,omitempty"`                          
	Crunchv2                               *bool                          `json:"crunchv2,omitempty"`                              
	DayOffLabel                            *string                        `json:"dayOffLabel,omitempty"`                           
	DaysForward                            *float64                       `json:"daysForward,omitempty"`                           
	DayUnavailableLabel                    *string                        `json:"dayUnavailableLabel,omitempty"`                   
	DefaultServiceImgURL                   *string                        `json:"defaultServiceImgUrl,omitempty"`                  
	DefaultWorkerImgURL                    *string                        `json:"defaultWorkerImgUrl,omitempty"`                   
	DenySameTimeRecords                    *bool                          `json:"denySameTimeRecords,omitempty"`                   
	DisabledTaxonomiesText                 *string                        `json:"disabledTaxonomiesText,omitempty"`                
	DisableMobileWidget                    *bool                          `json:"disableMobileWidget,omitempty"`                   
	DisableWidget                          *bool                          `json:"disableWidget,omitempty"`                         
	DisableWidgetMessage                   *string                        `json:"disableWidgetMessage,omitempty"`                  
	DiscountedPriceRounding                *PurpleDiscountedPriceRounding `json:"discountedPriceRounding,omitempty"`               
	DisplaySlotSize                        *float64                       `json:"displaySlotSize,omitempty"`                       
	DontRequireEmail                       *bool                          `json:"dontRequireEmail,omitempty"`                      
	EmailIsMandatory                       *bool                          `json:"emailIsMandatory,omitempty"`                      
	EnableOverrideFooter                   *bool                          `json:"enableOverrideFooter,omitempty"`                  
	EnableWarningContactData               *bool                          `json:"enableWarningContactData,omitempty"`              
	ExtraVisitors                          *bool                          `json:"extraVisitors,omitempty"`                         
	FilterNonInsuranceSchedule             *bool                          `json:"filterNonInsuranceSchedule,omitempty"`            
	HideAnyWorkerBooking                   *bool                          `json:"hideAnyWorkerBooking,omitempty"`                  
	HideCallButton                         *bool                          `json:"hideCallButton,omitempty"`                        
	HideEmptyDays                          *bool                          `json:"hideEmptyDays,omitempty"`                         
	HideGBookingLogo                       *bool                          `json:"hideGBookingLogo,omitempty"`                      
	HideGraySlots                          *bool                          `json:"hideGraySlots,omitempty"`                         
	HideNewAppointmentButton               *bool                          `json:"hideNewAppointmentButton,omitempty"`              
	HidePrices                             *bool                          `json:"hidePrices,omitempty"`                            
	HideSocialNetworksAuthentication       *bool                          `json:"hideSocialNetworksAuthentication,omitempty"`      
	InsuranceClientSupportPhone            []Phone                        `json:"insuranceClientSupportPhone"`                     
	MaxServiceBooking                      *float64                       `json:"maxServiceBooking,omitempty"`                     
	MaxTimeslotBooking                     *float64                       `json:"maxTimeslotBooking,omitempty"`                    
	MostFreeEnable                         *bool                          `json:"mostFreeEnable,omitempty"`                        
	MultiServiceBooking                    *bool                          `json:"multiServiceBooking,omitempty"`                   
	MultiTimeslotBooking                   *bool                          `json:"multiTimeslotBooking,omitempty"`                  
	MultiTimeslotBookingAllDays            *bool                          `json:"multiTimeslotBookingAllDays,omitempty"`           
	NewWidgetTheme                         map[string]interface{}         `json:"newWidgetTheme,omitempty"`                        
	NoDefaultImages                        *bool                          `json:"noDefaultImages,omitempty"`                       
	OverrideFooter                         *string                        `json:"overrideFooter,omitempty"`                        
	Payment                                *Payment                       `json:"payment,omitempty"`                               
	PaymentProvider                        *PaymentProvider               `json:"paymentProvider,omitempty"`                       
	RequireAgreement                       *bool                          `json:"requireAgreement,omitempty"`                      
	RequireAgreementLink                   *string                        `json:"requireAgreementLink,omitempty"`                  
	RevisionVersion                        *float64                       `json:"revisionVersion,omitempty"`                       
	ShortLink                              *string                        `json:"shortLink,omitempty"`                             
	ShowAllWorkers                         *bool                          `json:"showAllWorkers,omitempty"`                        
	ShowClientAddress                      *bool                          `json:"showClientAddress,omitempty"`                     
	ShowClientComment                      *bool                          `json:"showClientComment,omitempty"`                     
	ShowDisabledTaxonomies                 *bool                          `json:"showDisabledTaxonomies,omitempty"`                
	ShowDrinkQuestion                      *bool                          `json:"showDrinkQuestion,omitempty"`                     
	ShowMap                                *bool                          `json:"showMap,omitempty"`                               
	ShowSurnameFirst                       *bool                          `json:"showSurnameFirst,omitempty"`                      
	ShowTalkQuestion                       *bool                          `json:"showTalkQuestion,omitempty"`                      
	ShowTaxonomyConfirmationAlert          *bool                          `json:"showTaxonomyConfirmationAlert,omitempty"`         
	SkipAuthentication                     *bool                          `json:"skipAuthentication,omitempty"`                    
	SkipDaysForward                        *bool                          `json:"skipDaysForward,omitempty"`                       
	SkipMobileMap                          *bool                          `json:"skipMobileMap,omitempty"`                         
	SkipServiceDurationAlignment           *bool                          `json:"skipServiceDurationAlignment,omitempty"`          
	SkipServiceSelection                   *bool                          `json:"skipServiceSelection,omitempty"`                  
	SkipTimeSelection                      *bool                          `json:"skipTimeSelection,omitempty"`                     
	SkipTimeSelectionServiceIDs            []string                       `json:"skipTimeSelectionServiceIDs"`                     
	SkipWorkerSelectedServiceIDs           []string                       `json:"skipWorkerSelectedServiceIDs"`                    
	SkipWorkerServicesSelection            *bool                          `json:"skipWorkerServicesSelection,omitempty"`           
	SocialNetworkImage                     *string                        `json:"socialNetworkImage,omitempty"`                    
	SocialSharing                          *PurpleSocialSharing           `json:"socialSharing,omitempty"`                         
	SortByMostFree                         *bool                          `json:"sortByMostFree,omitempty"`                        
	SortWorkersByWorkload                  *bool                          `json:"sortWorkersByWorkload,omitempty"`                 
	SplitInsuranceClient                   *bool                          `json:"splitInsuranceClient,omitempty"`                  
	SplitName                              *bool                          `json:"splitName,omitempty"`                             
	TentativeTTL                           *float64                       `json:"tentativeTTL,omitempty"`                          
	Theme                                  *string                        `json:"theme,omitempty"`                                 
	UseAppointmentReminder                 *bool                          `json:"useAppointmentReminder,omitempty"`                
	UseBusinessScheduleForUnavailableLabel *bool                          `json:"useBusinessScheduleForUnavailableLabel,omitempty"`
	UseClustersMap                         *bool                          `json:"useClustersMap,omitempty"`                        
	UseCoupon                              *bool                          `json:"useCoupon,omitempty"`                             
	UseCRAC                                *bool                          `json:"useCRAC,omitempty"`                               
	UseDefaultServiceImg                   *bool                          `json:"useDefaultServiceImg,omitempty"`                  
	UseDefaultWorkerImg                    *bool                          `json:"useDefaultWorkerImg,omitempty"`                   
	UseDirectScheduleRead                  *UseDirectScheduleRead         `json:"useDirectScheduleRead,omitempty"`                 
	UseInsuranceGuaranteeLetter            *bool                          `json:"useInsuranceGuaranteeLetter,omitempty"`           
	UseInsuranceSelect                     *bool                          `json:"useInsuranceSelect,omitempty"`                    
	UseMedAuth                             *bool                          `json:"useMedAuth,omitempty"`                            
	UseMiddleName                          *bool                          `json:"useMiddleName,omitempty"`                         
	UseNewReserveAPI                       *bool                          `json:"useNewReserveAPI,omitempty"`                      
	UseResourcePageLoading                 *bool                          `json:"useResourcePageLoading,omitempty"`                
	UseSortByName                          *bool                          `json:"useSortByName,omitempty"`                         
	WarningContactDataText                 *string                        `json:"warningContactDataText,omitempty"`                
	WidgetUseCRAC                          *bool                          `json:"widgetUseCRAC,omitempty"`                         
	WithoutWorkers                         *bool                          `json:"withoutWorkers,omitempty"`                        
	WorkerUnavailabilityText               *string                        `json:"worker_unavailability_text,omitempty"`            
	WorkerNameReverse                      *bool                          `json:"workerNameReverse,omitempty"`                     
}

type PurpleBookableDateRanges struct {
	Enabled *bool       `json:"enabled,omitempty"`
	End     interface{} `json:"end"`              
	Start   interface{} `json:"start"`            
}

type PurpleClientBlockingSettings struct {
	AppointmentClientBlock     *bool    `json:"appointmentClientBlock,omitempty"`    
	AppointmentClientBlockDays *float64 `json:"appointmentClientBlockDays,omitempty"`
	AppointmentClientBlockText *string  `json:"appointmentClientBlockText,omitempty"`
	BlockIfFutureRecordExists  *bool    `json:"blockIfFutureRecordExists,omitempty"` 
	BlockRepeatedRecordsCount  *float64 `json:"blockRepeatedRecordsCount,omitempty"` 
	BlockRepeatedRecordsRange  *float64 `json:"blockRepeatedRecordsRange,omitempty"` 
	BlockRepeatedRecordsText   *string  `json:"blockRepeatedRecordsText,omitempty"`  
}

type PurpleDiscountedPriceRounding struct {
	Rule  *Rule    `json:"rule,omitempty"` 
	Value *float64 `json:"value,omitempty"`
}

type PurpleSocialSharing struct {
	Active          *bool         `json:"active,omitempty"`         
	DiscountAmount  *float64      `json:"discountAmount"`           
	DiscountEnabled *bool         `json:"discountEnabled,omitempty"`
	DiscountType    *DiscountType `json:"discountType,omitempty"`   
	Text            *string       `json:"text"`                     
	WidgetText      *string       `json:"widgetText"`               
}

type NetworkWidgetConfiguration struct {
	ID                 *string                              `json:"_id,omitempty"`     
	Businesses         []NetworkWidgetConfigurationBusiness `json:"businesses"`        
	DefaultServiceID   *string                              `json:"defaultServiceID"`  
	ShowBranchSelector bool                                 `json:"showBranchSelector"`
	ShowDefaultService bool                                 `json:"showDefaultService"`
	ShowOnMap          bool                                 `json:"showOnMap"`         
	Source             string                               `json:"source"`            
}

type NetworkWidgetConfigurationBusiness struct {
	ID         *string `json:"_id,omitempty"`
	Active     bool    `json:"active"`       
	InternalID string  `json:"internalID"`   
}

type GetProfileByID struct {
	Request  BusinessGetProfileByIDRequest  `json:"request"` 
	Response BusinessGetProfileByIDResponse `json:"response"`
}

type BusinessGetProfileByIDRequest struct {
	Cred    *Cred                               `json:"cred,omitempty"`// авторизационные параметры
	ID      *TimeFrameDate                      `json:"id"`            // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                              `json:"jsonrpc"`       // версия протокола - 2.0
	Method  string                              `json:"method"`        // название jsonrpc метода
	Params  BusinessGetProfileByIDRequestParams `json:"params"`        // параметры запроса; ; параметры запроса business.get_profile_by_id
}

// параметры запроса business.get_profile_by_id
type BusinessGetProfileByIDRequestParams struct {
	Business             TentacledBusiness  `json:"business"`                        
	DesktopDiscounts     *bool              `json:"desktop_discounts,omitempty"`     // если указано true - меняет формат представления discounts
	OnlyActiveWorkers    *bool              `json:"only_active_workers,omitempty"`   // если указано true - возвращает только активных работников (status == 'INACTIVE')
	ShowInactiveWorkers  *bool              `json:"show_inactive_workers,omitempty"` // если указано true - возвращает всех работников в том числе и неактивных (status ==; 'INACTIVE')
	ShowcaseBusinessID   *TimeFrameDate     `json:"showcase_business_id"`            // идентификатор витрины (передаётся вместе с with_taxonomy_showcase)
	SkipWorkerSorting    *bool              `json:"skip_worker_sorting,omitempty"`   // если указано true - не приминяет сортировку работников
	WithBilling          *bool              `json:"with_billing,omitempty"`          // если указано true - возвращает историю биллинга в поле billing (недоступно для роли guest)
	WithBop              *bool              `json:"with_bop,omitempty"`              // если указано true - возвращает список операций, доступных в БекОфисе в поле profiles; (недоступно для роли guest)
	WithCampaigns        *bool              `json:"with_campaigns,omitempty"`        // если указано true - возвращает кампании скидочных купонов в поле campaigns
	WithDiscounts        *bool              `json:"with_discounts,omitempty"`        // если указано true - возвращает список скидочных акций в поле discounts
	WithDiscountsFrom    *string            `json:"with_discounts_from,omitempty"`   // дата начала расписания, для которого нужно получить скидочные акции
	WithDiscountsTo      *string            `json:"with_discounts_to,omitempty"`     // дата окончания расписания, для которого нужно получить скидочные акции
	WithNetworks         *bool              `json:"with_networks,omitempty"`         // если указано true - возвращает информацию о других филиалах сети в поле networks
	WithTaxonomyShowcase *bool              `json:"with_taxonomy_showcase,omitempty"`// если указано true - заполняет идентификаторы таксономий витрины showcaseTaxonomyID для; каждой таксономии (недоступно для роли guest)
	WorkerSortingType    *WorkerSortingType `json:"worker_sorting_type,omitempty"`   // тип сортировки работника
}

type TentacledBusiness struct {
	ID string `json:"id"`// идентификатор бизнеса
}

type BusinessGetProfileByIDResponse struct {
	ID      *float64                              `json:"id,omitempty"`     // значение числового типа для идентификации запроса на сервере
	Jsonrpc *string                               `json:"jsonrpc,omitempty"`// версия протокола (2.0)
	Result  *BusinessGetProfileByIDResponseResult `json:"result,omitempty"` // данные, передаваемые в ответ
	Error   *BusinessGetProfileByIDResponseError  `json:"error,omitempty"`  // объект, содержащий информацию об ошибке
}

// объект, содержащий информацию об ошибке
//
// Код ошибки авторизации
type BusinessGetProfileByIDResponseError struct {
	Code    float64 `json:"code"`          // код ошибки
	Data    *string `json:"data,omitempty"`// дополнительные данные об ошибке
	Message string  `json:"message"`       // текстовая информация об ошибке
}

// данные, передаваемые в ответ
type BusinessGetProfileByIDResponseResult struct {
	Active                *bool                    `json:"active,omitempty"`               
	Business              *ResultBusiness          `json:"business"`                       
	FreeSMS               *float64                 `json:"freeSms,omitempty"`              
	MonthlyFreeSMS        *float64                 `json:"monthlyFreeSms,omitempty"`       
	Networks              []Network                `json:"networks"`                       
	Profiles              []map[string]interface{} `json:"profiles"`                       
	TopServices           *ResultTopServices       `json:"top_services,omitempty"`         
	UseDefaultSMSTemplate *bool                    `json:"useDefaultSmsTemplate,omitempty"`
	YandexFeedType        *YandexFeedType          `json:"yandexFeedType,omitempty"`       
}

type StickyBusiness struct {
	Active                          *bool                              `json:"active,omitempty"`                       
	AdditionalSettings              *FluffyAdditionalSettings          `json:"additionalSettings,omitempty"`           
	AllowCategoryBooking            *bool                              `json:"allowCategoryBooking,omitempty"`         
	BusinessBackofficeConfiguration *StickyBackofficeConfiguration     `json:"backoffice_configuration,omitempty"`     
	BackofficeConfiguration         *TentacledBackofficeConfiguration  `json:"backofficeConfiguration,omitempty"`      
	BackofficeType                  *BackofficeType                    `json:"backofficeType,omitempty"`               
	Cabinets                        []FluffyCabinet                    `json:"cabinets"`                               
	CabinetsEnabled                 *bool                              `json:"cabinetsEnabled,omitempty"`              
	CallbackWidgetConfiguration     *FluffyCallbackWidgetConfiguration `json:"callback_widget_configuration,omitempty"`
	Consumables                     []FluffyConsumable                 `json:"consumables"`                            
	CreatedOn                       *string                            `json:"created_on,omitempty"`                   
	DefaultFilteredWorkers          []string                           `json:"defaultFilteredWorkers"`                 
	Departments                     []FluffyDepartment                 `json:"departments"`                            
	Designs                         []map[string]interface{}           `json:"designs"`                                
	ExtraID                         *string                            `json:"extraID,omitempty"`                      
	FlatTaxonomyDisplay             *bool                              `json:"flatTaxonomyDisplay,omitempty"`          
	GeneralInfo                     BusinessInfo                       `json:"general_info"`                           
	Group                           *Group                             `json:"group,omitempty"`                        
	ID                              *string                            `json:"id,omitempty"`                           
	IntegrationData                 map[string]interface{}             `json:"integration_data,omitempty"`             
	MiniWidgetConfiguration         FluffyMiniWidgetConfiguration      `json:"mini_widget_configuration"`              
	MobileData                      []interface{}                      `json:"mobileData"`                             
	Notifications                   []interface{}                      `json:"notifications"`                          
	Resources                       []Resource                         `json:"resources"`                              
	StateLevelHolidaysNotWorking    *bool                              `json:"stateLevelHolidaysNotWorking,omitempty"` 
	Taxonomies                      []BusinessTaxonomy                 `json:"taxonomies"`                             
	TaxonomiesComplex               []FluffyTaxonomiesComplex          `json:"taxonomiesComplex"`                      
	TaxonomyTreeCapacity            []map[string]interface{}           `json:"taxonomy_tree_capacity"`                 
	TopServices                     *FluffyTopServices                 `json:"top_services,omitempty"`                 
	Vertical                        *string                            `json:"vertical,omitempty"`                     
	WidgetConfiguration             FluffyWidgetConfiguration          `json:"widget_configuration"`                   
	YandexFeedType                  *string                            `json:"yandexFeedType,omitempty"`               
}

type FluffyAdditionalSettings struct {
	AppointmentExtensionAmount *float64                  `json:"appointmentExtensionAmount,omitempty"`
	AppointmentExtensionType   *AppointmentExtensionType `json:"appointmentExtensionType,omitempty"`  
}

type TentacledBackofficeConfiguration struct {
	AdjacentTaxonomiesTreshold                      *float64                 `json:"adjacentTaxonomiesTreshold,omitempty"`                     
	AllowHideServiceForBooking                      *bool                    `json:"allowHideServiceForBooking,omitempty"`                     
	AllowHideWorkersFromSchdeule                    *bool                    `json:"allowHideWorkersFromSchdeule,omitempty"`                   
	AllowSMSTranslit                                *bool                    `json:"allowSmsTranslit,omitempty"`                               
	AppointmentFutureMoving                         *bool                    `json:"appointmentFutureMoving,omitempty"`                        
	BlockNotificationForAnyAvailableAdjacentService *bool                    `json:"blockNotificationForAnyAvailableAdjacentService,omitempty"`
	CabinetsEnabled                                 *bool                    `json:"cabinetsEnabled,omitempty"`                                
	CheckClientOverlapping                          *bool                    `json:"checkClientOverlapping,omitempty"`                         
	CustomOnlinePaymentConfirmationTemplate         *string                  `json:"customOnlinePaymentConfirmationTemplate,omitempty"`        
	DefaultGTScheduleDayView                        *bool                    `json:"defaultGTScheduleDayView,omitempty"`                       
	DisableAppointmentClientInlineEditor            *bool                    `json:"disableAppointmentClientInlineEditor,omitempty"`           
	EditAppExtraID                                  *bool                    `json:"editAppExtraId,omitempty"`                                 
	EditTaxonomyChildren                            *bool                    `json:"editTaxonomyChildren,omitempty"`                           
	EditTaxonomyVisitType                           *bool                    `json:"editTaxonomyVisitType,omitempty"`                          
	EnableBlackList                                 *bool                    `json:"enableBlackList,omitempty"`                                
	EnableCalculateShedule                          *bool                    `json:"enableCalculateShedule,omitempty"`                         
	EnableClientCard                                *bool                    `json:"enableClientCard,omitempty"`                               
	EnableClientLanguage                            *bool                    `json:"enableClientLanguage,omitempty"`                           
	EnableClientMedicalCardReport                   *bool                    `json:"enableClientMedicalCardReport,omitempty"`                  
	EnableCustomOnlinePaymentConfirmation           *bool                    `json:"enableCustomOnlinePaymentConfirmation,omitempty"`          
	EnableExtendedPhone                             *bool                    `json:"enableExtendedPhone,omitempty"`                            
	EnableExtendedRecordsClientStatistics           *bool                    `json:"enableExtendedRecordsClientStatistics,omitempty"`          
	EnableMasterImportance                          *bool                    `json:"enableMasterImportance,omitempty"`                         
	EnableServiceTimeLimit                          *bool                    `json:"enableServiceTimeLimit,omitempty"`                         
	EnableSourceChoice                              *bool                    `json:"enableSourceChoice,omitempty"`                             
	EnableTaxonomyChildrenAgeCheck                  *bool                    `json:"enableTaxonomyChildrenAgeCheck,omitempty"`                 
	ExportToExcelRemovedClients                     *bool                    `json:"exportToExcelRemovedClients,omitempty"`                    
	FeedbackCustomerPortalMessage                   *string                  `json:"feedbackCustomerPortalMessage,omitempty"`                  
	FeedbackCustomerPortalThankYouMessage           *string                  `json:"feedbackCustomerPortalThankYouMessage,omitempty"`          
	FeedbackCustomerPortalTitle                     *string                  `json:"feedbackCustomerPortalTitle,omitempty"`                    
	FeedBackMinRating                               *FeedBackMinRating       `json:"feedBackMinRating,omitempty"`                              
	FinID                                           *string                  `json:"finId,omitempty"`                                          
	FinName                                         *string                  `json:"finName,omitempty"`                                        
	HideCustomerPortalFooter                        *bool                    `json:"hideCustomerPortalFooter,omitempty"`                       
	HighlightedResource                             *bool                    `json:"highlightedResource,omitempty"`                            
	ManualExceptionSupport                          *bool                    `json:"manualExceptionSupport,omitempty"`                         
	NoInternetAlert                                 *bool                    `json:"noInternetAlert,omitempty"`                                
	PastTimeEdit                                    *float64                 `json:"pastTimeEdit,omitempty"`                                   
	PaymentProvider                                 *PaymentProvider         `json:"paymentProvider,omitempty"`                                
	ReadonlyResourceSchedule                        *bool                    `json:"readonlyResourceSchedule,omitempty"`                       
	ResourceTimetableType                           *ResourceTimetableType   `json:"resourceTimetableType,omitempty"`                          
	RevisionVersion                                 *float64                 `json:"revisionVersion,omitempty"`                                
	SchduleWeekViewIsDefault                        *bool                    `json:"schduleWeekViewIsDefault,omitempty"`                       
	ScheduleDefaultWorkersLimit                     *float64                 `json:"scheduleDefaultWorkersLimit,omitempty"`                    
	SchedulerWeekViewType                           *SchedulerWeekViewType   `json:"schedulerWeekViewType,omitempty"`                          
	ScheduleWorkerHours                             *bool                    `json:"scheduleWorkerHours,omitempty"`                            
	ShowAdditionalFields                            *bool                    `json:"showAdditionalFields,omitempty"`                           
	ShowAddress                                     *bool                    `json:"showAddress,omitempty"`                                    
	ShowBirthDate                                   *bool                    `json:"showBirthDate,omitempty"`                                  
	ShowClientAppear                                *bool                    `json:"showClientAppear,omitempty"`                               
	ShowClientAppearOnSchedule                      *bool                    `json:"showClientAppearOnSchedule,omitempty"`                     
	ShowClientBirthdayFilter                        *bool                    `json:"showClientBirthdayFilter,omitempty"`                       
	ShowClientContractNumber                        *bool                    `json:"showClientContractNumber,omitempty"`                       
	ShowClientImage                                 *bool                    `json:"showClientImage,omitempty"`                                
	ShowClientPayment                               *bool                    `json:"showClientPayment,omitempty"`                              
	ShowDefaulterBlockscreen                        *bool                    `json:"showDefaulterBlockscreen,omitempty"`                       
	ShowDeliveryStatus                              *bool                    `json:"showDeliveryStatus,omitempty"`                             
	ShowDepartmentFilter                            *bool                    `json:"showDepartmentFilter,omitempty"`                           
	ShowDepartments                                 *bool                    `json:"showDepartments,omitempty"`                                
	ShowDepartmentsConfiguration                    *bool                    `json:"showDepartmentsConfiguration,omitempty"`                   
	ShowEmail                                       *bool                    `json:"showEmail,omitempty"`                                      
	ShowExtraClientInfo                             *bool                    `json:"showExtraClientInfo,omitempty"`                            
	ShowFax                                         *bool                    `json:"showFax,omitempty"`                                        
	ShowFiredWorkerAppointmentAlert                 *bool                    `json:"showFiredWorkerAppointmentAlert,omitempty"`                
	ShowFirstAvailableSlot                          *bool                    `json:"showFirstAvailableSlot,omitempty"`                         
	ShowGapWindow                                   *bool                    `json:"showGapWindow,omitempty"`                                  
	ShowGender                                      *bool                    `json:"showGender,omitempty"`                                     
	ShowGenderInRecords                             *bool                    `json:"showGenderInRecords,omitempty"`                            
	ShowGeneratableReportsScreen                    *bool                    `json:"showGeneratableReportsScreen,omitempty"`                   
	ShowHouseNumber                                 *bool                    `json:"showHouseNumber,omitempty"`                                
	ShowIsraelCity                                  *bool                    `json:"showIsraelCity,omitempty"`                                 
	ShowKupatHolim                                  *bool                    `json:"showKupatHolim,omitempty"`                                 
	ShowLeadsScreen                                 *bool                    `json:"showLeadsScreen,omitempty"`                                
	ShowManualChanges                               *bool                    `json:"showManualChanges,omitempty"`                              
	ShowPassportID                                  *bool                    `json:"showPassportId,omitempty"`                                 
	ShowRooms                                       *bool                    `json:"showRooms,omitempty"`                                      
	ShowSeasonTickets                               *bool                    `json:"showSeasonTickets,omitempty"`                              
	ShowTaxonomyChildren                            *bool                    `json:"showTaxonomyChildren,omitempty"`                           
	ShowTaxonomyLocalization                        *bool                    `json:"showTaxonomyLocalization,omitempty"`                       
	ShowTaxonomyVisitType                           *bool                    `json:"showTaxonomyVisitType,omitempty"`                          
	ShowTestRecord                                  *bool                    `json:"showTestRecord,omitempty"`                                 
	ShowUTM                                         *bool                    `json:"showUTM,omitempty"`                                        
	ShowWidgetColorTheme                            *bool                    `json:"showWidgetColorTheme,omitempty"`                           
	ShowWorkerDescriptionInEvent                    *bool                    `json:"showWorkerDescriptionInEvent,omitempty"`                   
	ShowWorkerExtraID                               *bool                    `json:"showWorkerExtraId,omitempty"`                              
	ShowWorkerStatus                                *bool                    `json:"showWorkerStatus,omitempty"`                               
	SkipAppointmentPriceUpdate                      *bool                    `json:"skipAppointmentPriceUpdate,omitempty"`                     
	SkipCancelIfClientNotAppear                     *bool                    `json:"skipCancelIfClientNotAppear,omitempty"`                    
	SkipServiceFiltering                            *bool                    `json:"skipServiceFiltering,omitempty"`                           
	SplitFullNameXlsExport                          *bool                    `json:"splitFullNameXlsExport,omitempty"`                         
	StateLevelHolidays                              []map[string]interface{} `json:"stateLevelHolidays"`                                       
	StateLevelHolidaysNotWorking                    *bool                    `json:"stateLevelHolidaysNotWorking,omitempty"`                   
	TaxonomyChildrenMaxAge                          *float64                 `json:"taxonomyChildrenMaxAge,omitempty"`                         
	UseAdditionalDurations                          *bool                    `json:"useAdditionalDurations,omitempty"`                         
	UseAdjacentTaxonomies                           *bool                    `json:"useAdjacentTaxonomies,omitempty"`                          
	UseAdjacentTaxonomiesSlotSplitting              *bool                    `json:"useAdjacentTaxonomiesSlotSplitting,omitempty"`             
	UseGtAppMethod                                  *bool                    `json:"useGtAppMethod,omitempty"`                                 
	WorkWeekEnd                                     *float64                 `json:"workWeekEnd,omitempty"`                                    
	WorkWeekStart                                   *float64                 `json:"workWeekStart,omitempty"`                                  
}

type StickyBackofficeConfiguration struct {
	EnableMasterImportance *bool                  `json:"enableMasterImportance,omitempty"`
	ResourceTimetableType  *ResourceTimetableType `json:"resourceTimetableType,omitempty"` 
}

type FluffyCabinet struct {
	Active *bool   `json:"active,omitempty"`
	ID     *string `json:"id,omitempty"`    
	Name   *string `json:"name,omitempty"`  
}

type FluffyCallbackWidgetConfiguration struct {
	Title1 *string `json:"title1,omitempty"`
	Title2 *string `json:"title2,omitempty"`
}

type FluffyConsumable struct {
	ExtraID  string  `json:"extraID"` 
	Name     string  `json:"name"`    
	Quantity float64 `json:"quantity"`
}

type FluffyDepartment struct {
	ID           string   `json:"id"`           
	DepartmentID *float64 `json:"id_,omitempty"`
	Name         string   `json:"name"`         
}

type FluffyMiniWidgetConfiguration struct {
	Fields []Field `json:"fields"`          
	Title1 *string `json:"title1,omitempty"`
	Title2 *string `json:"title2,omitempty"`
}

type ResourceClass struct {
	AdditionalExtraID  []string                     `json:"additionalExtraId"`            // информация из внешней информационной системы как есть (при интеграции)
	Capacity           float64                      `json:"capacity"`                     // Количество записей, которые может принимать работник единовременно
	Color              *string                      `json:"color,omitempty"`              // цвет колонки с работником
	Degree             *string                      `json:"degree,omitempty"`             
	DepartmentID       *string                      `json:"departmentId,omitempty"`       // идентификатор отделения, к которому привязан работник
	Description        *string                      `json:"description,omitempty"`        // краткое описание работника
	DisplayInSchedule  *bool                        `json:"displayInSchedule,omitempty"`  
	DisplayInWidget    bool                         `json:"displayInWidget"`              // отображать ли данного работника на виджете или любом другом клиенте
	Email              *string                      `json:"email,omitempty"`              // e-mail работника
	EmailEnabled       *bool                        `json:"emailEnabled,omitempty"`       // включена ли отправка e-mail уведомлений для данного работника
	EvenOddTimetable   EvenOddTimetable             `json:"evenOddTimetable"`             
	Exceptions         []interface{}                `json:"exceptions"`                   
	Experience         *string                      `json:"experience,omitempty"`         
	ExtraDescription   *string                      `json:"extraDescription,omitempty"`   // информация из внешней информационной системы как есть (при интеграции)
	ExtraID            *string                      `json:"extraId,omitempty"`            // информация из внешней информационной системы как есть (при интеграции)
	ExtraLink          *string                      `json:"extraLink,omitempty"`          // информация из внешней информационной системы как есть (при интеграции)
	ExtraMediaID       *string                      `json:"extraMediaId,omitempty"`       // информация из внешней информационной системы как есть (при интеграции)
	IconURL            *string                      `json:"icon_url"`                     // url изображения работника; Если указан относительный путь, то используйте; http://cdn.gbooking.ru (см. так же Business WidgetConfiguration.useDefaultWorkerImg и; WidgetConfiguration.defaultWorkerImgUrl)
	ID                 string                       `json:"id"`                           // внутренний идентификатор работника; уникальный во всей системе GBooking
	Image              *string                      `json:"image,omitempty"`              
	LastSU             *string                      `json:"lastSU,omitempty"`             
	Level              float64                      `json:"level"`                        // уровень скорости выполнения услуги по-умолчанию (если не найдено в taxonomyLevels)
	Loaned             bool                         `json:"loaned"`                       // не используется
	LoanedFrom         *string                      `json:"loanedFrom,omitempty"`         // не используется
	LoanedTo           *string                      `json:"loanedTo,omitempty"`           // не используется
	Location           ResourceLocation             `json:"location"`                     
	ManualChanges      bool                         `json:"manualChanges"`                
	MiddleName         *string                      `json:"middleName,omitempty"`         // отчество работника
	Name               string                       `json:"name"`                         // имя работника
	Nickname           *string                      `json:"nickname,omitempty"`           // внутреннее название работника в Бекофис
	Order              *float64                     `json:"order,omitempty"`              // индекс сортировки работника
	OrderWeight        *OrderWeight                 `json:"orderWeight"`                  // вес работника, в зависимости от указанного способа сортировки
	OriginGeneralInfo  *Info                        `json:"origin_general_info,omitempty"`// (только в витрине) объект с данными бизнеса-филиала
	OriginBusinessID   *string                      `json:"originBusinessID,omitempty"`   // (только в витрине) идентификатор бизнеса-филиала, откуда был взят работник
	OriginTaxonomies   []string                     `json:"originTaxonomies"`             // (только в витрине) список идентификаторов услуг на бизнесе-филиале, которые выполняет; работник
	Perk               *string                      `json:"perk,omitempty"`               // особый навык
	Phone              *Phone                       `json:"phone"`                        
	Profession         *string                      `json:"profession,omitempty"`         // информация о профессии работника, используется в Бекофис
	Profile            *ИнформацияОПрофилеРаботника `json:"profile,omitempty"`            
	Rating             *float64                     `json:"rating,omitempty"`             // Рейтинг работника
	ReadonlyTaxonomies []string                     `json:"readonlyTaxonomies"`           
	RevisionVersion    float64                      `json:"revisionVersion"`              // Версия изменений документа
	ScheduleIsEmpty    *bool                        `json:"scheduleIsEmpty,omitempty"`    
	SiteID             *string                      `json:"siteId,omitempty"`             // информация из внешней информационной системы как есть (при интеграции)
	SMSEnabled         *bool                        `json:"smsEnabled,omitempty"`         // включена ли отправка смс уведомлений для данного работника
	Status             *Status                      `json:"status,omitempty"`             
	Surname            string                       `json:"surname"`                      // фамилия и отчество работника
	Taxonomies         []string                     `json:"taxonomies"`                   // массив идентификаторов услуг, которые выполняет работник
	TaxonomyChildren   []ResourceTaxonomyChildren   `json:"taxonomyChildren"`             // массив свойств выполнения услуги как детской, как взрослой или как общей (если указаны; оба или не указаны вовсе для услуги)
	TaxonomyLevels     []ResourceTaxonomyLevel      `json:"taxonomyLevels"`               // массив уровня скорости выполнения услуги (см так же Resource level)
	Timetable          Timetable                    `json:"timetable"`                    
	UserData           map[string]interface{}       `json:"userData,omitempty"`           
	WorkPlace          *string                      `json:"workPlace,omitempty"`          // рабочее место, которое занимает работник
}

type EvenOddTimetable struct {
	Even        []TimeFrame `json:"even"`       // расписание для чётных дней
	Odd         []TimeFrame `json:"odd"`        // расписание для нечётных дней
	StartPeriod StartPeriod `json:"startPeriod"`// month - по дням месяца (1-е число каждого месяца - нечётно), week - по дням недели; (понедельник считается нечётным)
}

type ResourceLocation struct {
	Latitude  *float64 `json:"latitude,omitempty"` 
	Longitude *float64 `json:"longitude,omitempty"`
	Time      *string  `json:"time,omitempty"`     // время последнего обновления координат
}

// (только в витрине) объект с данными бизнеса-филиала
//
// Содержит детальную информацию о бизнесе — название, адрес, график работы и другое
type Info struct {
	AcceptedCurrency           []CurrencyList           `json:"accepted_currency"`                   
	AdditionalInfo             *string                  `json:"additional_info"`                     
	AdditionalFields           []AdditionalFields       `json:"additionalFields"`                    
	Address                    []AddressElement         `json:"address"`                             // Адреса компании или филиала
	AutoAcceptAppointment      *bool                    `json:"autoAcceptAppointment,omitempty"`     
	BusinessShowcaseAliases    []BusinessShowcaseAlias  `json:"businessShowcaseAliases"`             // если данный бизнес является витриной, идентификаторы бизнесов, которые входят в витрину
	ContactName                *string                  `json:"contactName,omitempty"`               
	DateJoined                 *string                  `json:"date_joined,omitempty"`               
	Description                *string                  `json:"description,omitempty"`               
	Email                      *string                  `json:"email,omitempty"`                     // Список e-mail адресов компании или филиала
	Fax                        []Phone                  `json:"fax"`                                 
	Images                     []string                 `json:"images"`                              
	InstantMessaging           []map[string]interface{} `json:"instant_messaging"`                   
	IsShowcase                 *bool                    `json:"isShowcase,omitempty"`                // является ли данный бизнес витриной
	Language                   *LanguageList            `json:"language,omitempty"`                  
	LogoURL                    *string                  `json:"logo_url"`                            
	MarketingNotifications     *MarketingNotifications  `json:"marketingNotifications,omitempty"`    
	Metro                      *Metro                   `json:"metro,omitempty"`                     
	MinBookingTime             *float64                 `json:"min_booking_time"`                    
	Mobile                     []Phone                  `json:"mobile"`                              // Список телефонов бизнеса
	Name                       *string                  `json:"name,omitempty"`                      // Название бизнеса
	NetworkID                  *float64                 `json:"networkID"`                           
	NewboEnabledFor            []string                 `json:"newboEnabledFor"`                     
	PaymentMethods             *PaymentMethods          `json:"paymentMethods,omitempty"`            
	Phone                      []Phone                  `json:"phone"`                               // Список телефонов бизнеса
	PhoneMask                  *string                  `json:"phone_mask"`                          
	PricingType                *PricingType             `json:"pricingType,omitempty"`               
	RevisionVersion            *float64                 `json:"revisionVersion,omitempty"`           
	SchedulerTick              *float64                 `json:"schedulerTick,omitempty"`             
	ShortName                  *string                  `json:"shortName"`                           // Короткое название филиала
	ShowAppointmentColor       *bool                    `json:"showAppointmentColor,omitempty"`      
	ShowAppointmentTooltip     *bool                    `json:"showAppointmentTooltip,omitempty"`    
	Showcases                  []Showcase               `json:"showcases"`                           // идентификаторы витрин, в которых участвует данный бизнес
	ShowResourceWorkStatistics *bool                    `json:"showResourceWorkStatistics,omitempty"`
	ShowWorkerProfession       *bool                    `json:"showWorkerProfession,omitempty"`      
	SkipBilling                *bool                    `json:"skipBilling,omitempty"`               
	SMSDuplicateFilter         *SMSDuplicateFilter      `json:"smsDuplicateFilter,omitempty"`        
	SocialNetwork              []SocialNetworkSchema    `json:"social_network"`                      
	Timetable                  *Timetable               `json:"timetable,omitempty"`                 
	Timezone                   *string                  `json:"timezone"`                            
	VerticalTranslation        *VerticalTranslation     `json:"verticalTranslation,omitempty"`       
	Website                    *string                  `json:"website,omitempty"`                   
}

// Доступ имеют только пользователи с правами resource или admin
type ИнформацияОПрофилеРаботника struct {
	AccessType AccessType `json:"accessType"`// тип доступа работника в систему через его учётную запись
	Email      string     `json:"email"`     // e-mail профиля работника
	ProfileID  string     `json:"profileID"` // идентификатор профиля работника уникальный во всей системе
	UserID     string     `json:"userID"`    // идентификатор работника
}

type ResourceTaxonomyChildren struct {
	Children   bool   `json:"children"`  // true - детская услуга; false - взрослая услуга
	TaxonomyID string `json:"taxonomyID"`// идентификатор услуги, для которой установлено свойство
}

type ResourceTaxonomyLevel struct {
	ID    string  `json:"id"`   // идентификатор услуги, для которой установлено уровень скорости
	Level float64 `json:"level"`// уровень скорости
}

type BusinessTaxonomy struct {
	Active                     *bool                     `json:"active,omitempty"`                    
	AdditionalDurations        []AdditionalDuration      `json:"additionalDurations"`                 
	AdditionalPrices           []BusinessTaxonomyPrice   `json:"additionalPrices"`                    
	AdditionalProducts         []BusinessTaxonomyProduct `json:"additionalProducts"`                  
	AdditionalTaxonomyExtraID  []map[string]interface{}  `json:"additionalTaxonomyExtraId"`           
	AdjacentSameTimeStart      *bool                     `json:"adjacentSameTimeStart,omitempty"`     
	AdjacentTaxonomies         []AdjacentTaxonomy        `json:"adjacentTaxonomies"`                  
	Alias                      map[string]interface{}    `json:"alias,omitempty"`                     
	AllowBookingInBO           *bool                     `json:"allowBookingInBO,omitempty"`          
	AllowNextBookingCount      *float64                  `json:"allowNextBookingCount,omitempty"`     
	AllowNextBookingInDays     *float64                  `json:"allowNextBookingInDays,omitempty"`    
	AllowNextBookingInDaysText *string                   `json:"allowNextBookingInDaysText,omitempty"`
	Cabinets                   []string                  `json:"cabinets"`                            
	CabinetsEnabled            *bool                     `json:"cabinetsEnabled,omitempty"`           
	Capacity                   *float64                  `json:"capacity,omitempty"`                  
	CapacityDecrease           *float64                  `json:"capacity_decrease,omitempty"`         
	ChargeUnitsStep            *float64                  `json:"chargeUnitsStep,omitempty"`           
	ChildrenTaxonomyTypes      []ChildrenTaxonomyType    `json:"childrenTaxonomyTypes"`               
	Color                      *string                   `json:"color,omitempty"`                     
	ConfirmationAlert          *string                   `json:"confirmationAlert,omitempty"`         
	ConfirmationSMSAlert       *string                   `json:"confirmationSmsAlert,omitempty"`      
	DateLimits                 []DateLimit               `json:"dateLimits"`                          
	DateLimitType              *DateLimitType            `json:"dateLimitType,omitempty"`             
	Designs                    []string                  `json:"designs"`                             
	Discounts                  *Discount                 `json:"discounts"`                           
	DisplayInWidget            *bool                     `json:"displayInWidget,omitempty"`           
	Duration                   *float64                  `json:"duration,omitempty"`                  
	Exceptions                 []interface{}             `json:"exceptions"`                          
	ExtraDescription           *string                   `json:"extraDescription,omitempty"`          
	ExtraID                    *string                   `json:"extraId,omitempty"`                   
	ExtraLink                  *string                   `json:"extraLink,omitempty"`                 
	ForPay                     *bool                     `json:"forPay,omitempty"`                    
	ID                         *string                   `json:"id,omitempty"`                        
	Images                     []string                  `json:"images"`                              
	IsOther                    *bool                     `json:"isOther,omitempty"`                   
	LastModified               *string                   `json:"lastModified,omitempty"`              
	Leaves                     []string                  `json:"leaves"`                              
	ManualChanges              *bool                     `json:"manualChanges,omitempty"`             
	NewTaxonomy                *bool                     `json:"newTaxonomy,omitempty"`               
	OnlineMode                 *OnlineMode               `json:"onlineMode,omitempty"`                
	OnlyAfterTaxonomies        []string                  `json:"onlyAfterTaxonomies"`                 
	Order                      *float64                  `json:"order,omitempty"`                     
	ParallelTaxonomies         []string                  `json:"parallelTaxonomies"`                  
	Popularity                 *float64                  `json:"popularity,omitempty"`                
	Price                      *Price                    `json:"price,omitempty"`                     
	PriceLink                  *string                   `json:"priceLink,omitempty"`                 
	Rooms                      []string                  `json:"rooms"`                               
	ShowcaseItems              []ShowcaseItem            `json:"showcaseItems"`                       
	Showcases                  []TaxonomyShowcase        `json:"showcases"`                           
	ShowcaseTaxonomyID         *string                   `json:"showcaseTaxonomyID,omitempty"`        // Идентификатор услуги в витрине
	SiteID                     *string                   `json:"siteId,omitempty"`                    // Внешний идентификатор таксономии
	SpecialCabinet             *string                   `json:"specialCabinet,omitempty"`            
	TaxonomyAppExtraID         *string                   `json:"taxonomyAppExtraID,omitempty"`        
	TaxonomyCategoryExtraID    *string                   `json:"taxonomyCategoryExtraID,omitempty"`   
	TaxonomyParentID           *string                   `json:"taxonomyParentID,omitempty"`          
	TaxonomyType               *TaxonomyType             `json:"taxonomyType,omitempty"`              
	Timetable                  *Timetable                `json:"timetable,omitempty"`                 
	UseConfirmationSMSAlert    *bool                     `json:"useConfirmationSmsAlert,omitempty"`   
	VisitType                  *string                   `json:"visitType,omitempty"`                 
}

type AdditionalDuration struct {
	Duration *float64 `json:"duration"`       
	Level    *float64 `json:"level,omitempty"`
}

type BusinessTaxonomyPrice struct {
	Amount        *string              `json:"amount,omitempty"`// Значение цены
	Currency      CurrencyList         `json:"currency"`        // Аббревиатура валюты
	ResourceLevel float64              `json:"resourceLevel"`   // "Уровень" цены. Работнику можно выставить его "уровень" (поле level в resources)
	StockAmount   *string              `json:"stockAmount"`     // Значение цены, с учётом промо акций
	Type          *AdditionalPriceType `json:"type,omitempty"`  // Тип цены
}

type BusinessTaxonomyProduct struct {
	ExtraID  string `json:"extraID"` // Дополнительный ID товара
	ID       string `json:"id"`      // ID товара
	Required bool   `json:"required"`// Является ли обязательным при выполнении данной услуги
}

type AdjacentTaxonomy struct {
	IsAnyAvailable *bool    `json:"isAnyAvailable,omitempty"`
	Order          *float64 `json:"order,omitempty"`         
	SlotDuration   *float64 `json:"slotDuration,omitempty"`  
	TaxonomyID     *string  `json:"taxonomyID,omitempty"`    
}

type DateLimit struct {
	ID            *string `json:"_id,omitempty"`          
	DateLimitFrom *string `json:"dateLimitFrom,omitempty"`
	DateLimitTo   *string `json:"dateLimitTo,omitempty"`  
}

type DiscountClass struct {
	Active            *bool       `json:"active,omitempty"`           
	DaysOfWeek        *DaysOfWeek `json:"daysOfWeek,omitempty"`       
	Repeats           *Repeats    `json:"repeats,omitempty"`          
	Slots             *Slots      `json:"slots,omitempty"`            
	Start             *string     `json:"start,omitempty"`            
	UnlimWeeklyRepeat *bool       `json:"unlimWeeklyRepeat,omitempty"`
	WeeklyRepeat      *float64    `json:"weeklyRepeat,omitempty"`     
}

type Slots struct {
	Time *TimeFrame `json:"time,omitempty"`
}

type Price struct {
	Amount      string              `json:"amount"`     // Значение цены
	Currency    CurrencyList        `json:"currency"`   // Аббревиатура валюты (например, RUB - рубль)
	StockAmount *string             `json:"stockAmount"`// Значение цены, с учётом промо акций
	Type        AdditionalPriceType `json:"type"`       // Тип цены
}

type ShowcaseItem struct {
	ID                  *string                          `json:"_id,omitempty"`       
	AdditionalDurations []ShowcaseItemAdditionalDuration `json:"additionalDurations"` 
	BusinessID          *string                          `json:"businessID,omitempty"`
	TaxonomyID          *string                          `json:"taxonomyID,omitempty"`
}

type ShowcaseItemAdditionalDuration struct {
	ID       *string  `json:"_id,omitempty"`     
	Duration *float64 `json:"duration,omitempty"`
	Level    *float64 `json:"level,omitempty"`   // поддержка различной длительности услуг в зависимости от работника
}

type TaxonomyShowcase struct {
	BaseBusinessID   *string `json:"baseBusinessID,omitempty"`  
	IsBaseNode       *bool   `json:"isBaseNode,omitempty"`      
	OriginBusinessID *string `json:"originBusinessID,omitempty"`
	ShowcaseItemID   *string `json:"showcaseItemID,omitempty"`  
}

type FluffyTaxonomiesComplex struct {
	Name       *string  `json:"name,omitempty"`
	Taxonomies []string `json:"taxonomies"`    
}

type FluffyTopServices struct {
	Services []interface{} `json:"services"`        
	Status   *string       `json:"status,omitempty"`
}

type FluffyWidgetConfiguration struct {
	AdditionalName                         *string                        `json:"additionalName,omitempty"`                        
	AlignmentTaxonomySlots                 *bool                          `json:"alignmentTaxonomySlots,omitempty"`                
	AllowAutoSelect                        *bool                          `json:"allowAutoSelect,omitempty"`                       
	AllowBookVisitor                       *bool                          `json:"allowBookVisitor,omitempty"`                      
	AllowSkipTimeCheck                     *bool                          `json:"allowSkipTimeCheck,omitempty"`                    
	AppointmentConfirmationText            *string                        `json:"appointment_confirmation_text,omitempty"`         
	AppointmentConfirmationTitle           *string                        `json:"appointment_confirmation_title,omitempty"`        
	AskClientBirthday                      *bool                          `json:"askClientBirthday,omitempty"`                     
	AskClientGender                        *bool                          `json:"askClientGender,omitempty"`                       
	BookableDateRanges                     *FluffyBookableDateRanges      `json:"bookableDateRanges,omitempty"`                    
	BookableMonthsCount                    *float64                       `json:"bookableMonthsCount,omitempty"`                   
	CalendarMode                           *bool                          `json:"calendarMode,omitempty"`                          
	CalendarModeHideTime                   *bool                          `json:"calendarModeHideTime,omitempty"`                  
	ClientBlockingSettings                 *FluffyClientBlockingSettings  `json:"clientBlockingSettings,omitempty"`                
	ClientCommentTitle                     *string                        `json:"clientCommentTitle,omitempty"`                    
	CracServer                             *CracServer                    `json:"cracServer,omitempty"`                            
	CracSlotSize                           *float64                       `json:"cracSlotSize,omitempty"`                          
	Crunchv2                               *bool                          `json:"crunchv2,omitempty"`                              
	DayOffLabel                            *string                        `json:"dayOffLabel,omitempty"`                           
	DaysForward                            *float64                       `json:"daysForward,omitempty"`                           
	DayUnavailableLabel                    *string                        `json:"dayUnavailableLabel,omitempty"`                   
	DefaultServiceImgURL                   *string                        `json:"defaultServiceImgUrl,omitempty"`                  
	DefaultWorkerImgURL                    *string                        `json:"defaultWorkerImgUrl,omitempty"`                   
	DenySameTimeRecords                    *bool                          `json:"denySameTimeRecords,omitempty"`                   
	DisabledTaxonomiesText                 *string                        `json:"disabledTaxonomiesText,omitempty"`                
	DisableMobileWidget                    *bool                          `json:"disableMobileWidget,omitempty"`                   
	DisableWidget                          *bool                          `json:"disableWidget,omitempty"`                         
	DisableWidgetMessage                   *string                        `json:"disableWidgetMessage,omitempty"`                  
	DiscountedPriceRounding                *FluffyDiscountedPriceRounding `json:"discountedPriceRounding,omitempty"`               
	DisplaySlotSize                        *float64                       `json:"displaySlotSize,omitempty"`                       
	DontRequireEmail                       *bool                          `json:"dontRequireEmail,omitempty"`                      
	EmailIsMandatory                       *bool                          `json:"emailIsMandatory,omitempty"`                      
	EnableOverrideFooter                   *bool                          `json:"enableOverrideFooter,omitempty"`                  
	EnableWarningContactData               *bool                          `json:"enableWarningContactData,omitempty"`              
	ExtraVisitors                          *bool                          `json:"extraVisitors,omitempty"`                         
	FilterNonInsuranceSchedule             *bool                          `json:"filterNonInsuranceSchedule,omitempty"`            
	HideAnyWorkerBooking                   *bool                          `json:"hideAnyWorkerBooking,omitempty"`                  
	HideCallButton                         *bool                          `json:"hideCallButton,omitempty"`                        
	HideEmptyDays                          *bool                          `json:"hideEmptyDays,omitempty"`                         
	HideGBookingLogo                       *bool                          `json:"hideGBookingLogo,omitempty"`                      
	HideGraySlots                          *bool                          `json:"hideGraySlots,omitempty"`                         
	HideNewAppointmentButton               *bool                          `json:"hideNewAppointmentButton,omitempty"`              
	HidePrices                             *bool                          `json:"hidePrices,omitempty"`                            
	HideSocialNetworksAuthentication       *bool                          `json:"hideSocialNetworksAuthentication,omitempty"`      
	InsuranceClientSupportPhone            []Phone                        `json:"insuranceClientSupportPhone"`                     
	MaxServiceBooking                      *float64                       `json:"maxServiceBooking,omitempty"`                     
	MaxTimeslotBooking                     *float64                       `json:"maxTimeslotBooking,omitempty"`                    
	MostFreeEnable                         *bool                          `json:"mostFreeEnable,omitempty"`                        
	MultiServiceBooking                    *bool                          `json:"multiServiceBooking,omitempty"`                   
	MultiTimeslotBooking                   *bool                          `json:"multiTimeslotBooking,omitempty"`                  
	MultiTimeslotBookingAllDays            *bool                          `json:"multiTimeslotBookingAllDays,omitempty"`           
	NewWidgetTheme                         map[string]interface{}         `json:"newWidgetTheme,omitempty"`                        
	NoDefaultImages                        *bool                          `json:"noDefaultImages,omitempty"`                       
	OverrideFooter                         *string                        `json:"overrideFooter,omitempty"`                        
	Payment                                *Payment                       `json:"payment,omitempty"`                               
	PaymentProvider                        *PaymentProvider               `json:"paymentProvider,omitempty"`                       
	RequireAgreement                       *bool                          `json:"requireAgreement,omitempty"`                      
	RequireAgreementLink                   *string                        `json:"requireAgreementLink,omitempty"`                  
	RevisionVersion                        *float64                       `json:"revisionVersion,omitempty"`                       
	ShortLink                              *string                        `json:"shortLink,omitempty"`                             
	ShowAllWorkers                         *bool                          `json:"showAllWorkers,omitempty"`                        
	ShowClientAddress                      *bool                          `json:"showClientAddress,omitempty"`                     
	ShowClientComment                      *bool                          `json:"showClientComment,omitempty"`                     
	ShowDisabledTaxonomies                 *bool                          `json:"showDisabledTaxonomies,omitempty"`                
	ShowDrinkQuestion                      *bool                          `json:"showDrinkQuestion,omitempty"`                     
	ShowMap                                *bool                          `json:"showMap,omitempty"`                               
	ShowSurnameFirst                       *bool                          `json:"showSurnameFirst,omitempty"`                      
	ShowTalkQuestion                       *bool                          `json:"showTalkQuestion,omitempty"`                      
	ShowTaxonomyConfirmationAlert          *bool                          `json:"showTaxonomyConfirmationAlert,omitempty"`         
	SkipAuthentication                     *bool                          `json:"skipAuthentication,omitempty"`                    
	SkipDaysForward                        *bool                          `json:"skipDaysForward,omitempty"`                       
	SkipMobileMap                          *bool                          `json:"skipMobileMap,omitempty"`                         
	SkipServiceDurationAlignment           *bool                          `json:"skipServiceDurationAlignment,omitempty"`          
	SkipServiceSelection                   *bool                          `json:"skipServiceSelection,omitempty"`                  
	SkipTimeSelection                      *bool                          `json:"skipTimeSelection,omitempty"`                     
	SkipTimeSelectionServiceIDs            []string                       `json:"skipTimeSelectionServiceIDs"`                     
	SkipWorkerSelectedServiceIDs           []string                       `json:"skipWorkerSelectedServiceIDs"`                    
	SkipWorkerServicesSelection            *bool                          `json:"skipWorkerServicesSelection,omitempty"`           
	SocialNetworkImage                     *string                        `json:"socialNetworkImage,omitempty"`                    
	SocialSharing                          *FluffySocialSharing           `json:"socialSharing,omitempty"`                         
	SortByMostFree                         *bool                          `json:"sortByMostFree,omitempty"`                        
	SortWorkersByWorkload                  *bool                          `json:"sortWorkersByWorkload,omitempty"`                 
	SplitInsuranceClient                   *bool                          `json:"splitInsuranceClient,omitempty"`                  
	SplitName                              *bool                          `json:"splitName,omitempty"`                             
	TentativeTTL                           *float64                       `json:"tentativeTTL,omitempty"`                          
	Theme                                  *string                        `json:"theme,omitempty"`                                 
	UseAppointmentReminder                 *bool                          `json:"useAppointmentReminder,omitempty"`                
	UseBusinessScheduleForUnavailableLabel *bool                          `json:"useBusinessScheduleForUnavailableLabel,omitempty"`
	UseClustersMap                         *bool                          `json:"useClustersMap,omitempty"`                        
	UseCoupon                              *bool                          `json:"useCoupon,omitempty"`                             
	UseCRAC                                *bool                          `json:"useCRAC,omitempty"`                               
	UseDefaultServiceImg                   *bool                          `json:"useDefaultServiceImg,omitempty"`                  
	UseDefaultWorkerImg                    *bool                          `json:"useDefaultWorkerImg,omitempty"`                   
	UseDirectScheduleRead                  *UseDirectScheduleRead         `json:"useDirectScheduleRead,omitempty"`                 
	UseInsuranceGuaranteeLetter            *bool                          `json:"useInsuranceGuaranteeLetter,omitempty"`           
	UseInsuranceSelect                     *bool                          `json:"useInsuranceSelect,omitempty"`                    
	UseMedAuth                             *bool                          `json:"useMedAuth,omitempty"`                            
	UseMiddleName                          *bool                          `json:"useMiddleName,omitempty"`                         
	UseNewReserveAPI                       *bool                          `json:"useNewReserveAPI,omitempty"`                      
	UseResourcePageLoading                 *bool                          `json:"useResourcePageLoading,omitempty"`                
	UseSortByName                          *bool                          `json:"useSortByName,omitempty"`                         
	WarningContactDataText                 *string                        `json:"warningContactDataText,omitempty"`                
	WidgetUseCRAC                          *bool                          `json:"widgetUseCRAC,omitempty"`                         
	WithoutWorkers                         *bool                          `json:"withoutWorkers,omitempty"`                        
	WorkerUnavailabilityText               *string                        `json:"worker_unavailability_text,omitempty"`            
	WorkerNameReverse                      *bool                          `json:"workerNameReverse,omitempty"`                     
}

type FluffyBookableDateRanges struct {
	Enabled *bool       `json:"enabled,omitempty"`
	End     interface{} `json:"end"`              
	Start   interface{} `json:"start"`            
}

type FluffyClientBlockingSettings struct {
	AppointmentClientBlock     *bool    `json:"appointmentClientBlock,omitempty"`    
	AppointmentClientBlockDays *float64 `json:"appointmentClientBlockDays,omitempty"`
	AppointmentClientBlockText *string  `json:"appointmentClientBlockText,omitempty"`
	BlockIfFutureRecordExists  *bool    `json:"blockIfFutureRecordExists,omitempty"` 
	BlockRepeatedRecordsCount  *float64 `json:"blockRepeatedRecordsCount,omitempty"` 
	BlockRepeatedRecordsRange  *float64 `json:"blockRepeatedRecordsRange,omitempty"` 
	BlockRepeatedRecordsText   *string  `json:"blockRepeatedRecordsText,omitempty"`  
}

type FluffyDiscountedPriceRounding struct {
	Rule  *Rule    `json:"rule,omitempty"` 
	Value *float64 `json:"value,omitempty"`
}

type FluffySocialSharing struct {
	Active          *bool         `json:"active,omitempty"`         
	DiscountAmount  *float64      `json:"discountAmount"`           
	DiscountEnabled *bool         `json:"discountEnabled,omitempty"`
	DiscountType    *DiscountType `json:"discountType,omitempty"`   
	Text            *string       `json:"text"`                     
	WidgetText      *string       `json:"widgetText"`               
}

type Network struct {
	Address      *Address `json:"address"`     
	BusinessName string   `json:"businessName"`
	Description  string   `json:"description"` 
	InternalID   string   `json:"internalID"`  
}

type AddressCamelCaseSchema struct {
	Address          *string              `json:"address,omitempty"`         
	AddressAdd       *string              `json:"addressAdd,omitempty"`      
	AdminArea        *string              `json:"adminArea,omitempty"`       
	AdminAreaType    *string              `json:"adminAreaType,omitempty"`   
	Building         *string              `json:"building,omitempty"`        
	Corps            *string              `json:"corps,omitempty"`           
	Country          Country              `json:"country"`                   
	Group            *string              `json:"group,omitempty"`           
	HouseAdd         *string              `json:"houseAdd,omitempty"`        
	Kilometer        *string              `json:"kilometer,omitempty"`       
	Latitude         *string              `json:"latitude,omitempty"`        
	Locality         *string              `json:"locality,omitempty"`        
	LocalityType     *string              `json:"localityType,omitempty"`    
	Longitude        *string              `json:"longitude,omitempty"`       
	MetroStations    []FluffyMetroStation `json:"metroStations"`             
	Number           *string              `json:"number,omitempty"`          
	Office           *string              `json:"office,omitempty"`          
	Possesion        *string              `json:"possesion,omitempty"`       
	Street           *string              `json:"street,omitempty"`          
	StreetType       *string              `json:"streetType,omitempty"`      
	SubAdminArea     *string              `json:"subAdminArea,omitempty"`    
	SubAdminAreaType *string              `json:"subAdminAreaType,omitempty"`
	SubLocality      *string              `json:"subLocality,omitempty"`     
	SubLocalityType  *string              `json:"subLocalityType,omitempty"` 
	Way              *string              `json:"way,omitempty"`             
	ZipCode          *string              `json:"zipCode,omitempty"`         
}

type FluffyMetroStation struct {
	ID          *string `json:"_id,omitempty"`        
	Description *string `json:"description,omitempty"`
	Name        string  `json:"name"`                 
}

type ResultTopServices struct {
	Services []string `json:"services"`
	Status   bool     `json:"status"`  
}

type ClientController struct {
	AddClient AddClient `json:"add_client"`
}

type AddClient struct {
	Request  ClientAddClientRequest  `json:"request"` 
	Response ClientAddClientResponse `json:"response"`
}

type ClientAddClientRequest struct {
	Cred    *Cred                        `json:"cred,omitempty"`// авторизационные параметры
	ID      *TimeFrameDate               `json:"id"`            // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                       `json:"jsonrpc"`       // версия протокола - 2.0
	Method  string                       `json:"method"`        // название jsonrpc метода
	Params  ClientAddClientRequestParams `json:"params"`        // параметры запроса
}

// параметры запроса
type ClientAddClientRequestParams struct {
	Business          IndigoBusiness `json:"business"`                   
	Client            Client         `json:"client"`                     
	Profile           *ParamsProfile `json:"profile,omitempty"`          
	SkipEmailCheck    *bool          `json:"skipEmailCheck,omitempty"`   
	SkipProfileUpdate *bool          `json:"skipProfileUpdate,omitempty"`
}

type IndigoBusiness struct {
	ID *TimeFrameDate `json:"id"`// идентификатор бизнеса
}

// Данные клиента
type Client struct {
	Birthday            *Birthday    `json:"birthday"`             
	CreatorProfileID    *string      `json:"creatorProfileID"`     
	CreatorProfileName  *string      `json:"creatorProfileName"`   
	DriverLicense       *string      `json:"driverLicense"`        
	Email               []string     `json:"email"`                
	FromSMS             *FromSMS     `json:"fromSms"`              
	MiddleName          *string      `json:"middle_name,omitempty"`
	Name                string       `json:"name"`                 
	Phone               *Phone       `json:"phone"`                
	Sex                 *Sex         `json:"sex,omitempty"`        
	Surname             string       `json:"surname"`              
	TaxiPark            *string      `json:"taxiPark"`             
	TaxiParkMemberCount *OrderWeight `json:"taxiParkMemberCount"`  
}

type ParamsProfile struct {
	ID string `json:"id"`// идентификатор профиля пользователя
}

type ClientAddClientResponse struct {
	Result  *ClientAddClientResponseResult `json:"result,omitempty"` 
	Error   *ClientAddClientResponseError  `json:"error,omitempty"`  // объект, содержащий информацию об ошибке
	ID      *float64                       `json:"id,omitempty"`     // значение числового типа для идентификации запроса на сервере
	Jsonrpc *string                        `json:"jsonrpc,omitempty"`// версия протокола (2.0)
}

// объект, содержащий информацию об ошибке
//
// Код ошибки авторизации
type ClientAddClientResponseError struct {
	Code    float64 `json:"code"`          // код ошибки; ; код ошибки создания клиента
	Data    *string `json:"data,omitempty"`// дополнительные данные об ошибке
	Message string  `json:"message"`       // текстовая информация об ошибке
}

type ClientAddClientResponseResult struct {
	Business  *IndecentBusiness `json:"business,omitempty"`
	Client    Client            `json:"client"`            
	Documents []interface{}     `json:"documents"`         
	Profile   *ResultProfile    `json:"profile,omitempty"` 
}

type IndecentBusiness struct {
	ID string `json:"id"`
}

type ResultProfile struct {
	ID string `json:"id"`
}

type CracSlotsController struct {
	CRACDistributedResourcesFreeByDate  *CRACDistributedResourcesFreeByDate `json:"CRACDistributedResourcesFreeByDate,omitempty"`
	CRACResourcesFreeByDate             *CRACResourcesFreeByDate            `json:"CRACResourcesFreeByDate,omitempty"`           
	CRACResourcesFreeByDateV2           *CRACResourcesFreeByDateV2          `json:"CRACResourcesFreeByDateV2,omitempty"`         
	GetCRACDistributedResourcesAndRooms GetCRACDistributedResourcesAndRooms `json:"GetCRACDistributedResourcesAndRooms"`         
	GetCRACInsuranceResourcesAndRooms   *GetCRACInsuranceResourcesAndRooms  `json:"GetCRACInsuranceResourcesAndRooms,omitempty"` 
	GetCRACResourcesAndRooms            *GetCRACResourcesAndRooms           `json:"GetCRACResourcesAndRooms,omitempty"`          
}

type CRACDistributedResourcesFreeByDate struct {
	Request  CracCRACDistributedResourcesFreeByDateRequest  `json:"request"` 
	Response CracCRACDistributedResourcesFreeByDateResponse `json:"response"`
}

type CracCRACDistributedResourcesFreeByDateRequest struct {
	Cred    *Cred                                                `json:"cred,omitempty"`// авторизационные параметры
	ID      *TimeFrameDate                                       `json:"id"`            // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                                               `json:"jsonrpc"`       // версия протокола - 2.0
	Method  string                                               `json:"method"`        // название jsonrpc метода
	Params  []CracCRACDistributedResourcesFreeByDateRequestParam `json:"params"`        // параметры запроса
}

type CracCRACDistributedResourcesFreeByDateRequestParam struct {
	Business  HilariousBusiness `json:"business"` 
	Resources []string          `json:"resources"`
	Taxonomy  PurpleTaxonomy    `json:"taxonomy"` 
}

type HilariousBusiness struct {
	ID string `json:"id"`
}

type PurpleTaxonomy struct {
	ID string `json:"id"`
}

type CracCRACDistributedResourcesFreeByDateResponse struct {
	Error   *CracCRACDistributedResourcesFreeByDateResponseError  `json:"error"`            // объект, содержащий информацию об ошибке
	ID      float64                                               `json:"id"`               // значение числового типа для идентификации запроса на сервере
	Result  *CracCRACDistributedResourcesFreeByDateResponseResult `json:"result,omitempty"` 
	Jsonrpc *string                                               `json:"jsonrpc,omitempty"`// версия протокола (2.0)
}

// объект, содержащий информацию об ошибке
//
// Код ошибки авторизации
type CracCRACDistributedResourcesFreeByDateResponseError struct {
	Code    *float64 `json:"code,omitempty"`   // код ошибки
	Data    *string  `json:"data,omitempty"`   // дополнительные данные об ошибке
	Message *string  `json:"message,omitempty"`// текстовая информация об ошибке
}

type CracCRACDistributedResourcesFreeByDateResponseResult struct {
	Free []PurpleFree `json:"Free"`
}

type PurpleFree struct {
	Date           string  `json:"date"`          
	MaxFreeMinutes float64 `json:"maxFreeMinutes"`
	Resource       string  `json:"resource"`      
	Taxonomy       string  `json:"taxonomy"`      
}

type CRACResourcesFreeByDate struct {
	Request  CracCRACResourcesFreeByDateRequest  `json:"request"` 
	Response CracCRACResourcesFreeByDateResponse `json:"response"`
}

type CracCRACResourcesFreeByDateRequest struct {
	Cred    *Cred                                     `json:"cred,omitempty"`// авторизационные параметры
	ID      *TimeFrameDate                            `json:"id"`            // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                                    `json:"jsonrpc"`       // версия протокола - 2.0
	Method  string                                    `json:"method"`        // название jsonrpc метода
	Params  []CracCRACResourcesFreeByDateRequestParam `json:"params"`        // параметры запроса
}

type CracCRACResourcesFreeByDateRequestParam struct {
	Duration  float64        `json:"duration"` 
	Resources []string       `json:"resources"`
	Taxonomy  FluffyTaxonomy `json:"taxonomy"` 
}

type FluffyTaxonomy struct {
	ID string `json:"id"`
}

type CracCRACResourcesFreeByDateResponse struct {
	Error   *CracCRACResourcesFreeByDateResponseError  `json:"error"`            // объект, содержащий информацию об ошибке
	ID      float64                                    `json:"id"`               // значение числового типа для идентификации запроса на сервере
	Result  *CracCRACResourcesFreeByDateResponseResult `json:"result,omitempty"` 
	Jsonrpc *string                                    `json:"jsonrpc,omitempty"`// версия протокола (2.0)
}

// объект, содержащий информацию об ошибке
//
// Код ошибки авторизации
type CracCRACResourcesFreeByDateResponseError struct {
	Code    *float64 `json:"code,omitempty"`   // код ошибки
	Data    *string  `json:"data,omitempty"`   // дополнительные данные об ошибке
	Message *string  `json:"message,omitempty"`// текстовая информация об ошибке
}

type CracCRACResourcesFreeByDateResponseResult struct {
	Free []FluffyFree `json:"Free"`
}

type FluffyFree struct {
	Date           string  `json:"date"`          
	MaxFreeMinutes float64 `json:"maxFreeMinutes"`
	Resource       string  `json:"resource"`      
	Taxonomy       string  `json:"taxonomy"`      
}

type CRACResourcesFreeByDateV2 struct {
	Request  CracCRACResourcesFreeByDateV2Request  `json:"request"` 
	Response CracCRACResourcesFreeByDateV2Response `json:"response"`
}

type CracCRACResourcesFreeByDateV2Request struct {
	Cred    *Cred                                       `json:"cred,omitempty"`// авторизационные параметры
	ID      *TimeFrameDate                              `json:"id"`            // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                                      `json:"jsonrpc"`       // версия протокола - 2.0
	Method  string                                      `json:"method"`        // название jsonrpc метода
	Params  []CracCRACResourcesFreeByDateV2RequestParam `json:"params"`        // параметры запроса
}

type CracCRACResourcesFreeByDateV2RequestParam struct {
	Business  AmbitiousBusiness `json:"business"` 
	Duration  float64           `json:"duration"` 
	Durations []float64         `json:"durations"`
	Resources []string          `json:"resources"`
	Taxonomy  TentacledTaxonomy `json:"taxonomy"` 
}

type AmbitiousBusiness struct {
	ID string `json:"id"`
}

type TentacledTaxonomy struct {
	ID string `json:"id"`
}

type CracCRACResourcesFreeByDateV2Response struct {
	Error   *CracCRACResourcesFreeByDateV2ResponseError  `json:"error"`            // объект, содержащий информацию об ошибке
	ID      float64                                      `json:"id"`               // значение числового типа для идентификации запроса на сервере
	Result  *CracCRACResourcesFreeByDateV2ResponseResult `json:"result,omitempty"` 
	Jsonrpc *string                                      `json:"jsonrpc,omitempty"`// версия протокола (2.0)
}

// объект, содержащий информацию об ошибке
//
// Код ошибки авторизации
type CracCRACResourcesFreeByDateV2ResponseError struct {
	Code    *float64 `json:"code,omitempty"`   // код ошибки
	Data    *string  `json:"data,omitempty"`   // дополнительные данные об ошибке
	Message *string  `json:"message,omitempty"`// текстовая информация об ошибке
}

type CracCRACResourcesFreeByDateV2ResponseResult struct {
	Free []TentacledFree `json:"Free"`
}

type TentacledFree struct {
	Date           string  `json:"date"`          
	MaxFreeMinutes float64 `json:"maxFreeMinutes"`
	Resource       string  `json:"resource"`      
	Taxonomy       string  `json:"taxonomy"`      
}

type GetCRACDistributedResourcesAndRooms struct {
	Request  CracSlotsGetCRACDistributedResourcesAndRoomsRequest  `json:"request"` 
	Response CracSlotsGetCRACDistributedResourcesAndRoomsResponse `json:"response"`
}

type CracSlotsGetCRACDistributedResourcesAndRoomsRequest struct {
	Cred    *Cred                                                     `json:"cred,omitempty"`// авторизационные параметры
	ID      *TimeFrameDate                                            `json:"id"`            // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                                                    `json:"jsonrpc"`       // версия протокола - 2.0
	Method  string                                                    `json:"method"`        // название jsonrpc метода
	Params  CracSlotsGetCRACDistributedResourcesAndRoomsRequestParams `json:"params"`        // параметры запроса
}

// параметры запроса
type CracSlotsGetCRACDistributedResourcesAndRoomsRequestParams struct {
	Business CunningBusiness `json:"business"`
	Filters  PurpleFilters   `json:"filters"` 
}

type CunningBusiness struct {
	GeneralInfo         PurpleGeneralInfo            `json:"general_info"`        
	ID                  string                       `json:"id"`                  
	WidgetConfiguration TentacledWidgetConfiguration `json:"widget_configuration"`
}

type PurpleGeneralInfo struct {
	Timezone string `json:"timezone"`
}

type TentacledWidgetConfiguration struct {
	CracServer     string `json:"cracServer"`              
	MostFreeEnable *bool  `json:"mostFreeEnable,omitempty"`
}

type PurpleFilters struct {
	Date       PurpleDate             `json:"date"`      
	Resources  []PurpleResourceFilter `json:"resources"` 
	Rooms      []string               `json:"rooms"`     
	Taxonomies []string               `json:"taxonomies"`
}

type PurpleDate struct {
	From string `json:"from"`
	To   string `json:"to"`  
}

type PurpleResourceFilter struct {
	Business ResourceBusiness `json:"business"`
	Resource string           `json:"resource"`// идентификатор ресурса
}

type ResourceBusiness struct {
	ID string `json:"id"`// идентификатор бизнеса
}

type CracSlotsGetCRACDistributedResourcesAndRoomsResponse struct {
	ID      float64                                                     `json:"id"`              // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                                                      `json:"jsonrpc"`         // версия протокола (2.0)
	Result  *CracSlotsGetCRACDistributedResourcesAndRoomsResponseResult `json:"result,omitempty"`
	Error   *CracSlotsGetCRACDistributedResourcesAndRoomsResponseError  `json:"error,omitempty"` // объект, содержащий информацию об ошибке
}

// объект, содержащий информацию об ошибке
//
// Код ошибки авторизации
type CracSlotsGetCRACDistributedResourcesAndRoomsResponseError struct {
	Code    float64 `json:"code"`          // код ошибки
	Data    *string `json:"data,omitempty"`// дополнительные данные об ошибке
	Message string  `json:"message"`       // текстовая информация об ошибке
}

type CracSlotsGetCRACDistributedResourcesAndRoomsResponseResult struct {
	Slots []PurpleSlot `json:"slots"`
}

type PurpleSlot struct {
	Date      string                   `json:"date"`     
	Resources []interface{}            `json:"resources"`
	Rooms     []map[string]interface{} `json:"rooms"`    
}

type GetCRACInsuranceResourcesAndRooms struct {
	Request  CracSlotsGetCRACInsuranceResourcesAndRoomsRequest  `json:"request"` 
	Response CracSlotsGetCRACInsuranceResourcesAndRoomsResponse `json:"response"`
}

type CracSlotsGetCRACInsuranceResourcesAndRoomsRequest struct {
	Cred    *Cred                                                   `json:"cred,omitempty"`// авторизационные параметры
	ID      *TimeFrameDate                                          `json:"id"`            // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                                                  `json:"jsonrpc"`       // версия протокола - 2.0
	Method  string                                                  `json:"method"`        // название jsonrpc метода
	Params  CracSlotsGetCRACInsuranceResourcesAndRoomsRequestParams `json:"params"`        // параметры запроса
}

// параметры запроса
type CracSlotsGetCRACInsuranceResourcesAndRoomsRequestParams struct {
	Business MagentaBusiness `json:"business"`
	Filters  FluffyFilters   `json:"filters"` 
}

type MagentaBusiness struct {
	GeneralInfo         FluffyGeneralInfo         `json:"general_info"`        
	ID                  string                    `json:"id"`                  
	WidgetConfiguration StickyWidgetConfiguration `json:"widget_configuration"`
}

type FluffyGeneralInfo struct {
	Timezone string `json:"timezone"`
}

type StickyWidgetConfiguration struct {
	CracServer     string `json:"cracServer"`              
	MostFreeEnable *bool  `json:"mostFreeEnable,omitempty"`
}

type FluffyFilters struct {
	Date        FluffyDate             `json:"date"`       
	InsuranceID string                 `json:"insuranceID"`
	Resources   []FluffyResourceFilter `json:"resources"`  
	Rooms       []string               `json:"rooms"`      
}

type FluffyDate struct {
	From string `json:"from"`
	To   string `json:"to"`  
}

type FluffyResourceFilter struct {
	Duration float64 `json:"duration"`
	ID       string  `json:"id"`      // идентификатор ресурса
}

type CracSlotsGetCRACInsuranceResourcesAndRoomsResponse struct {
	ID      float64                                                   `json:"id"`              // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                                                    `json:"jsonrpc"`         // версия протокола (2.0)
	Result  *CracSlotsGetCRACInsuranceResourcesAndRoomsResponseResult `json:"result,omitempty"`
	Error   *CracSlotsGetCRACInsuranceResourcesAndRoomsResponseError  `json:"error,omitempty"` // объект, содержащий информацию об ошибке
}

// объект, содержащий информацию об ошибке
//
// Код ошибки авторизации
type CracSlotsGetCRACInsuranceResourcesAndRoomsResponseError struct {
	Code    float64 `json:"code"`          // код ошибки
	Data    *string `json:"data,omitempty"`// дополнительные данные об ошибке
	Message string  `json:"message"`       // текстовая информация об ошибке
}

type CracSlotsGetCRACInsuranceResourcesAndRoomsResponseResult struct {
	Slots []FluffySlot `json:"slots"`
}

type FluffySlot struct {
	Date      string                   `json:"date"`     
	Resources []interface{}            `json:"resources"`
	Rooms     []map[string]interface{} `json:"rooms"`    
}

type GetCRACResourcesAndRooms struct {
	Request  CracSlotsGetCRACResourcesAndRoomsRequest  `json:"request"` 
	Response CracSlotsGetCRACResourcesAndRoomsResponse `json:"response"`
}

type CracSlotsGetCRACResourcesAndRoomsRequest struct {
	Cred    *Cred                                          `json:"cred,omitempty"`// авторизационные параметры
	ID      *TimeFrameDate                                 `json:"id"`            // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                                         `json:"jsonrpc"`       // версия протокола - 2.0
	Method  string                                         `json:"method"`        // название jsonrpc метода
	Params  CracSlotsGetCRACResourcesAndRoomsRequestParams `json:"params"`        // параметры запроса
}

// параметры запроса
type CracSlotsGetCRACResourcesAndRoomsRequestParams struct {
	Business FriskyBusiness   `json:"business"`
	Filters  TentacledFilters `json:"filters"` 
}

type FriskyBusiness struct {
	GeneralInfo         TentacledGeneralInfo      `json:"general_info"`        
	ID                  string                    `json:"id"`                  
	WidgetConfiguration IndigoWidgetConfiguration `json:"widget_configuration"`
}

type TentacledGeneralInfo struct {
	Timezone string `json:"timezone"`
}

type IndigoWidgetConfiguration struct {
	CracServer     string `json:"cracServer"`              
	MostFreeEnable *bool  `json:"mostFreeEnable,omitempty"`
}

type TentacledFilters struct {
	Date       TentacledDate             `json:"date"`      
	Resources  []TentacledResourceFilter `json:"resources"` 
	Rooms      []string                  `json:"rooms"`     
	Taxonomies []string                  `json:"taxonomies"`
}

type TentacledDate struct {
	From string `json:"from"`
	To   string `json:"to"`  
}

type TentacledResourceFilter struct {
	Duration float64 `json:"duration"`
	ID       string  `json:"id"`      // идентификатор ресурса
}

type CracSlotsGetCRACResourcesAndRoomsResponse struct {
	ID      float64                                          `json:"id"`              // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                                           `json:"jsonrpc"`         // версия протокола (2.0)
	Result  *CracSlotsGetCRACResourcesAndRoomsResponseResult `json:"result,omitempty"`
	Error   *CracSlotsGetCRACResourcesAndRoomsResponseError  `json:"error,omitempty"` // объект, содержащий информацию об ошибке
}

// объект, содержащий информацию об ошибке
//
// Код ошибки авторизации
type CracSlotsGetCRACResourcesAndRoomsResponseError struct {
	Code    float64 `json:"code"`          // код ошибки
	Data    *string `json:"data,omitempty"`// дополнительные данные об ошибке
	Message string  `json:"message"`       // текстовая информация об ошибке
}

type CracSlotsGetCRACResourcesAndRoomsResponseResult struct {
	Slots []TentacledSlot `json:"slots"`
}

type TentacledSlot struct {
	Date      string                   `json:"date"`     
	Resources []interface{}            `json:"resources"`
	Rooms     []map[string]interface{} `json:"rooms"`    
}

type Models struct {
	Business *ResultBusiness `json:"Business"`
	Client   Client          `json:"Client"`  
}

type AppointmentExtensionType string
const (
	AppointmentExtensionTypePERCENT AppointmentExtensionType = "PERCENT"
	Minutes AppointmentExtensionType = "MINUTES"
)

type FeedBackMinRating string
const (
	The1 FeedBackMinRating = "1"
	The2 FeedBackMinRating = "2"
	The3 FeedBackMinRating = "3"
	The4 FeedBackMinRating = "4"
	The5 FeedBackMinRating = "5"
)

type PaymentProvider string
const (
	DeltaProcessing PaymentProvider = "deltaProcessing"
	Disable PaymentProvider = "DISABLE"
	YandexMoney PaymentProvider = "yandexMoney"
)

type ResourceTimetableType string
const (
	Evenodd ResourceTimetableType = "EVENODD"
	ResourceTimetableTypeDEFAULT ResourceTimetableType = "DEFAULT"
)

type SchedulerWeekViewType string
const (
	SchedulerWeekViewTypeWeek SchedulerWeekViewType = "week"
	WorkWeek SchedulerWeekViewType = "workWeek"
)

type BackofficeType string
const (
	Common BackofficeType = "COMMON"
	Gt BackofficeType = "GT"
	Ll BackofficeType = "LL"
	MB BackofficeType = "MB"
	Mu BackofficeType = "MU"
)

// Аббревиатура валюты
//
// Аббревиатура валюты (например, RUB - рубль)
type CurrencyList string
const (
	Cny CurrencyList = "CNY"
	Eur CurrencyList = "EUR"
	Gbp CurrencyList = "GBP"
	Huf CurrencyList = "HUF"
	Ils CurrencyList = "ILS"
	Kzt CurrencyList = "KZT"
	Rub CurrencyList = "RUB"
	Uah CurrencyList = "UAH"
	Usd CurrencyList = "USD"
	Uzs CurrencyList = "UZS"
)

type AdditionalFieldsType string
const (
	Bool AdditionalFieldsType = "BOOL"
	Coupon AdditionalFieldsType = "COUPON"
	File AdditionalFieldsType = "FILE"
	Radio AdditionalFieldsType = "RADIO"
	String AdditionalFieldsType = "STRING"
)

type Country string
const (
	Am Country = "AM"
	Blr Country = "BLR"
	Ch Country = "CH"
	De Country = "DE"
	Empty Country = "_"
	Es Country = "ES"
	Fi Country = "FI"
	Fr Country = "FR"
	Ge Country = "GE"
	Hu Country = "HU"
	IL Country = "IL"
	Kz Country = "KZ"
	LV Country = "LV"
	Li Country = "LI"
	Lt Country = "LT"
	Ru Country = "RU"
	Ua Country = "UA"
	Uk Country = "UK"
	Us Country = "US"
	Uz Country = "UZ"
)

type LanguageList string
const (
	AmAm LanguageList = "am-am"
	DeDe LanguageList = "de-de"
	EeEe LanguageList = "ee-ee"
	EnUs LanguageList = "en-us"
	EsEs LanguageList = "es-es"
	FiFi LanguageList = "fi-fi"
	FrFr LanguageList = "fr-fr"
	GeGe LanguageList = "ge-ge"
	HeIL LanguageList = "he-il"
	HuHu LanguageList = "hu-hu"
	LVLV LanguageList = "lv-lv"
	LtLt LanguageList = "lt-lt"
	RuRu LanguageList = "ru-ru"
	UzUz LanguageList = "uz-uz"
	ZhCN LanguageList = "zh-cn"
)

type PaymentMethods string
const (
	Amex PaymentMethods = "Amex"
	Mastercard PaymentMethods = "Mastercard"
	MoneyBookers PaymentMethods = "MoneyBookers"
	PayPal PaymentMethods = "PayPal"
	Visa PaymentMethods = "Visa"
)

type PricingType string
const (
	MasterTopmaster PricingType = "MASTER_TOPMASTER"
	PricingTypeDEFAULT PricingType = "DEFAULT"
)

type SocialNetwork string
const (
	Facebook SocialNetwork = "Facebook"
	GBooking SocialNetwork = "GBooking"
	Google SocialNetwork = "Google"
	LinkedIn SocialNetwork = "LinkedIn"
	Mailru SocialNetwork = "Mailru"
	Odnoklassniki SocialNetwork = "Odnoklassniki"
	Twitter SocialNetwork = "Twitter"
	VKontakte SocialNetwork = "VKontakte"
	Yahoo SocialNetwork = "Yahoo"
	Yandex SocialNetwork = "Yandex"
)

type VerticalTranslation string
const (
	Beauty VerticalTranslation = "BEAUTY"
	Fitness VerticalTranslation = "FITNESS"
	Generic VerticalTranslation = "GENERIC"
	Medical VerticalTranslation = "MEDICAL"
	Sport VerticalTranslation = "SPORT"
	VerticalTranslationNONE VerticalTranslation = "NONE"
	Yoga VerticalTranslation = "YOGA"
)

type Group string
const (
	French Group = "FRENCH"
	General Group = "GENERAL"
	Hungarian Group = "HUNGARIAN"
	Latvian Group = "LATVIAN"
)

type Field string
const (
	Email Field = "email"
	Name Field = "name"
	Surname Field = "surname"
)

type CracServer string
const (
	Crac CracServer = "CRAC"
	CracProd3 CracServer = "CRAC_PROD3"
)

type Rule string
const (
	Custom Rule = "CUSTOM"
	NearestInteger Rule = "NEAREST_INTEGER"
	TwoDecimals Rule = "TWO_DECIMALS"
)

type Payment string
const (
	Optional Payment = "OPTIONAL"
	Required Payment = "REQUIRED"
	Without Payment = "WITHOUT"
)

type DiscountType string
const (
	DiscountTypePERCENT DiscountType = "PERCENT"
)

type UseDirectScheduleRead string
const (
	All UseDirectScheduleRead = "ALL"
	Authenticated UseDirectScheduleRead = "AUTHENTICATED"
	Guest UseDirectScheduleRead = "GUEST"
	UseDirectScheduleReadNONE UseDirectScheduleRead = "NONE"
)

// тип сортировки работника
type WorkerSortingType string
const (
	MostFree WorkerSortingType = "most_free"
	WorkerSortingTypeNone WorkerSortingType = "none"
	Workload WorkerSortingType = "workload"
)

// month - по дням месяца (1-е число каждого месяца - нечётно), week - по дням недели
// (понедельник считается нечётным)
type StartPeriod string
const (
	Month StartPeriod = "month"
	StartPeriodWeek StartPeriod = "week"
)

// тип доступа работника в систему через его учётную запись
type AccessType string
const (
	AccessTypeNONE AccessType = "NONE"
	WorkerExtended AccessType = "WORKER_EXTENDED"
	WorkerSimple AccessType = "WORKER_SIMPLE"
)

type Status string
const (
	Active Status = "ACTIVE"
	Inactive Status = "INACTIVE"
)

// Тип цены
type AdditionalPriceType string
const (
	Average AdditionalPriceType = "average"
	BeginWith AdditionalPriceType = "begin_with"
	Equal AdditionalPriceType = "equal"
)

type ChildrenTaxonomyType string
const (
	Child ChildrenTaxonomyType = "child"
	ChildrenTaxonomyTypeNone ChildrenTaxonomyType = "none"
	Parent ChildrenTaxonomyType = "parent"
)

type DateLimitType string
const (
	AllDates DateLimitType = "all_dates"
	FromDate DateLimitType = "from_date"
	RangeDates DateLimitType = "range_dates"
	ToDate DateLimitType = "to_date"
)

type DaysOfWeek string
const (
	Fri DaysOfWeek = "fri"
	Mon DaysOfWeek = "mon"
	Sat DaysOfWeek = "sat"
	Sun DaysOfWeek = "sun"
	Thu DaysOfWeek = "thu"
	Tue DaysOfWeek = "tue"
	Wed DaysOfWeek = "wed"
)

type Repeats string
const (
	Daily Repeats = "daily"
	RepeatsNone Repeats = "none"
	Weekly Repeats = "weekly"
)

type OnlineMode string
const (
	OncallOnline OnlineMode = "ONCALL_ONLINE"
	PlanClinic OnlineMode = "PLAN_CLINIC"
	PlanClinicOnline OnlineMode = "PLAN_CLINIC_ONLINE"
	PlanOnline OnlineMode = "PLAN_ONLINE"
)

type TaxonomyType string
const (
	Category TaxonomyType = "CATEGORY"
	Service TaxonomyType = "SERVICE"
	Subcategory TaxonomyType = "SUBCATEGORY"
)

type YandexFeedType string
const (
	Dynamic YandexFeedType = "dynamic"
	No YandexFeedType = "no"
	Static YandexFeedType = "static"
	StaticServiceOnly YandexFeedType = "static-service-only"
)

type Sex string
const (
	Female Sex = "FEMALE"
	Male Sex = "MALE"
	NotSpecified Sex = "NOT_SPECIFIED"
)

type ErrorResponse struct {
	AnythingArray      []interface{}
	Bool               *bool
	Double             *float64
	ErrorResponseClass *ErrorResponseClass
	Integer            *int64
	String             *string
}

func (x *ErrorResponse) UnmarshalJSON(data []byte) error {
	x.AnythingArray = nil
	x.ErrorResponseClass = nil
	var c ErrorResponseClass
	object, err := unmarshalUnion(data, &x.Integer, &x.Double, &x.Bool, &x.String, true, &x.AnythingArray, true, &c, false, nil, false, nil, true)
	if err != nil {
		return err
	}
	if object {
		x.ErrorResponseClass = &c
	}
	return nil
}

func (x *ErrorResponse) MarshalJSON() ([]byte, error) {
	return marshalUnion(x.Integer, x.Double, x.Bool, x.String, x.AnythingArray != nil, x.AnythingArray, x.ErrorResponseClass != nil, x.ErrorResponseClass, false, nil, false, nil, true)
}

// jsonrpc2 запрос
type Request struct {
	AnythingArray []interface{}
	Bool          *bool
	Double        *float64
	Integer       *int64
	RequestClass  *RequestClass
	String        *string
}

func (x *Request) UnmarshalJSON(data []byte) error {
	x.AnythingArray = nil
	x.RequestClass = nil
	var c RequestClass
	object, err := unmarshalUnion(data, &x.Integer, &x.Double, &x.Bool, &x.String, true, &x.AnythingArray, true, &c, false, nil, false, nil, true)
	if err != nil {
		return err
	}
	if object {
		x.RequestClass = &c
	}
	return nil
}

func (x *Request) MarshalJSON() ([]byte, error) {
	return marshalUnion(x.Integer, x.Double, x.Bool, x.String, x.AnythingArray != nil, x.AnythingArray, x.RequestClass != nil, x.RequestClass, false, nil, false, nil, true)
}

// значение числового типа для идентификации запроса на сервере
//
// идентификатор сети
//
// идентификатор витрины (передаётся вместе с with_taxonomy_showcase)
//
// идентификатор бизнеса
type TimeFrameDate struct {
	Double *float64
	String *string
}

func (x *TimeFrameDate) UnmarshalJSON(data []byte) error {
	object, err := unmarshalUnion(data, nil, &x.Double, nil, &x.String, false, nil, false, nil, false, nil, false, nil, false)
	if err != nil {
		return err
	}
	if object {
	}
	return nil
}

func (x *TimeFrameDate) MarshalJSON() ([]byte, error) {
	return marshalUnion(nil, x.Double, nil, x.String, false, nil, false, nil, false, nil, false, nil, false)
}

// параметры запроса
type ParamsUnion struct {
	AnythingArray []interface{}
	AnythingMap   map[string]interface{}
}

func (x *ParamsUnion) UnmarshalJSON(data []byte) error {
	x.AnythingArray = nil
	x.AnythingMap = nil
	object, err := unmarshalUnion(data, nil, nil, nil, nil, true, &x.AnythingArray, false, nil, true, &x.AnythingMap, false, nil, false)
	if err != nil {
		return err
	}
	if object {
	}
	return nil
}

func (x *ParamsUnion) MarshalJSON() ([]byte, error) {
	return marshalUnion(nil, nil, nil, nil, x.AnythingArray != nil, x.AnythingArray, false, nil, x.AnythingMap != nil, x.AnythingMap, false, nil, false)
}

type SuccessResponse struct {
	AnythingArray        []interface{}
	Bool                 *bool
	Double               *float64
	Integer              *int64
	String               *string
	SuccessResponseClass *SuccessResponseClass
}

func (x *SuccessResponse) UnmarshalJSON(data []byte) error {
	x.AnythingArray = nil
	x.SuccessResponseClass = nil
	var c SuccessResponseClass
	object, err := unmarshalUnion(data, &x.Integer, &x.Double, &x.Bool, &x.String, true, &x.AnythingArray, true, &c, false, nil, false, nil, true)
	if err != nil {
		return err
	}
	if object {
		x.SuccessResponseClass = &c
	}
	return nil
}

func (x *SuccessResponse) MarshalJSON() ([]byte, error) {
	return marshalUnion(x.Integer, x.Double, x.Bool, x.String, x.AnythingArray != nil, x.AnythingArray, x.SuccessResponseClass != nil, x.SuccessResponseClass, false, nil, false, nil, true)
}

type BusinessBusiness struct {
	AnythingArray  []interface{}
	Bool           *bool
	Double         *float64
	FluffyBusiness *FluffyBusiness
	Integer        *int64
	String         *string
}

func (x *BusinessBusiness) UnmarshalJSON(data []byte) error {
	x.AnythingArray = nil
	x.FluffyBusiness = nil
	var c FluffyBusiness
	object, err := unmarshalUnion(data, &x.Integer, &x.Double, &x.Bool, &x.String, true, &x.AnythingArray, true, &c, false, nil, false, nil, true)
	if err != nil {
		return err
	}
	if object {
		x.FluffyBusiness = &c
	}
	return nil
}

func (x *BusinessBusiness) MarshalJSON() ([]byte, error) {
	return marshalUnion(x.Integer, x.Double, x.Bool, x.String, x.AnythingArray != nil, x.AnythingArray, x.FluffyBusiness != nil, x.FluffyBusiness, false, nil, false, nil, true)
}

type AdditionalFields struct {
	AdditionalFieldsClass *AdditionalFieldsClass
	AnythingArray         []interface{}
	Bool                  *bool
	Double                *float64
	Integer               *int64
	String                *string
}

func (x *AdditionalFields) UnmarshalJSON(data []byte) error {
	x.AnythingArray = nil
	x.AdditionalFieldsClass = nil
	var c AdditionalFieldsClass
	object, err := unmarshalUnion(data, &x.Integer, &x.Double, &x.Bool, &x.String, true, &x.AnythingArray, true, &c, false, nil, false, nil, true)
	if err != nil {
		return err
	}
	if object {
		x.AdditionalFieldsClass = &c
	}
	return nil
}

func (x *AdditionalFields) MarshalJSON() ([]byte, error) {
	return marshalUnion(x.Integer, x.Double, x.Bool, x.String, x.AnythingArray != nil, x.AnythingArray, x.AdditionalFieldsClass != nil, x.AdditionalFieldsClass, false, nil, false, nil, true)
}

type AddressElement struct {
	AddressClass  *AddressClass
	AnythingArray []interface{}
	Bool          *bool
	Double        *float64
	Integer       *int64
	String        *string
}

func (x *AddressElement) UnmarshalJSON(data []byte) error {
	x.AnythingArray = nil
	x.AddressClass = nil
	var c AddressClass
	object, err := unmarshalUnion(data, &x.Integer, &x.Double, &x.Bool, &x.String, true, &x.AnythingArray, true, &c, false, nil, false, nil, true)
	if err != nil {
		return err
	}
	if object {
		x.AddressClass = &c
	}
	return nil
}

func (x *AddressElement) MarshalJSON() ([]byte, error) {
	return marshalUnion(x.Integer, x.Double, x.Bool, x.String, x.AnythingArray != nil, x.AnythingArray, x.AddressClass != nil, x.AddressClass, false, nil, false, nil, true)
}

type Phone struct {
	AnythingArray []interface{}
	Bool          *bool
	Double        *float64
	Integer       *int64
	PhoneClass    *PhoneClass
	String        *string
}

func (x *Phone) UnmarshalJSON(data []byte) error {
	x.AnythingArray = nil
	x.PhoneClass = nil
	var c PhoneClass
	object, err := unmarshalUnion(data, &x.Integer, &x.Double, &x.Bool, &x.String, true, &x.AnythingArray, true, &c, false, nil, false, nil, true)
	if err != nil {
		return err
	}
	if object {
		x.PhoneClass = &c
	}
	return nil
}

func (x *Phone) MarshalJSON() ([]byte, error) {
	return marshalUnion(x.Integer, x.Double, x.Bool, x.String, x.AnythingArray != nil, x.AnythingArray, x.PhoneClass != nil, x.PhoneClass, false, nil, false, nil, true)
}

type ResultBusiness struct {
	AnythingArray  []interface{}
	Bool           *bool
	Double         *float64
	Integer        *int64
	StickyBusiness *StickyBusiness
	String         *string
}

func (x *ResultBusiness) UnmarshalJSON(data []byte) error {
	x.AnythingArray = nil
	x.StickyBusiness = nil
	var c StickyBusiness
	object, err := unmarshalUnion(data, &x.Integer, &x.Double, &x.Bool, &x.String, true, &x.AnythingArray, true, &c, false, nil, false, nil, true)
	if err != nil {
		return err
	}
	if object {
		x.StickyBusiness = &c
	}
	return nil
}

func (x *ResultBusiness) MarshalJSON() ([]byte, error) {
	return marshalUnion(x.Integer, x.Double, x.Bool, x.String, x.AnythingArray != nil, x.AnythingArray, x.StickyBusiness != nil, x.StickyBusiness, false, nil, false, nil, true)
}

// Данные о работнике бизнеса
type Resource struct {
	AnythingArray []interface{}
	Bool          *bool
	Double        *float64
	Integer       *int64
	ResourceClass *ResourceClass
	String        *string
}

func (x *Resource) UnmarshalJSON(data []byte) error {
	x.AnythingArray = nil
	x.ResourceClass = nil
	var c ResourceClass
	object, err := unmarshalUnion(data, &x.Integer, &x.Double, &x.Bool, &x.String, true, &x.AnythingArray, true, &c, false, nil, false, nil, true)
	if err != nil {
		return err
	}
	if object {
		x.ResourceClass = &c
	}
	return nil
}

func (x *Resource) MarshalJSON() ([]byte, error) {
	return marshalUnion(x.Integer, x.Double, x.Bool, x.String, x.AnythingArray != nil, x.AnythingArray, x.ResourceClass != nil, x.ResourceClass, false, nil, false, nil, true)
}

// вес работника, в зависимости от указанного способа сортировки
type OrderWeight struct {
	Double *float64
	String *string
}

func (x *OrderWeight) UnmarshalJSON(data []byte) error {
	object, err := unmarshalUnion(data, nil, &x.Double, nil, &x.String, false, nil, false, nil, false, nil, false, nil, true)
	if err != nil {
		return err
	}
	if object {
	}
	return nil
}

func (x *OrderWeight) MarshalJSON() ([]byte, error) {
	return marshalUnion(nil, x.Double, nil, x.String, false, nil, false, nil, false, nil, false, nil, true)
}

// Информация о скидке
type Discount struct {
	AnythingArray []interface{}
	Bool          *bool
	DiscountClass *DiscountClass
	Double        *float64
	Integer       *int64
	String        *string
}

func (x *Discount) UnmarshalJSON(data []byte) error {
	x.AnythingArray = nil
	x.DiscountClass = nil
	var c DiscountClass
	object, err := unmarshalUnion(data, &x.Integer, &x.Double, &x.Bool, &x.String, true, &x.AnythingArray, true, &c, false, nil, false, nil, true)
	if err != nil {
		return err
	}
	if object {
		x.DiscountClass = &c
	}
	return nil
}

func (x *Discount) MarshalJSON() ([]byte, error) {
	return marshalUnion(x.Integer, x.Double, x.Bool, x.String, x.AnythingArray != nil, x.AnythingArray, x.DiscountClass != nil, x.DiscountClass, false, nil, false, nil, true)
}

type Address struct {
	AddressCamelCaseSchema *AddressCamelCaseSchema
	AnythingArray          []interface{}
	Bool                   *bool
	Double                 *float64
	Integer                *int64
	String                 *string
}

func (x *Address) UnmarshalJSON(data []byte) error {
	x.AnythingArray = nil
	x.AddressCamelCaseSchema = nil
	var c AddressCamelCaseSchema
	object, err := unmarshalUnion(data, &x.Integer, &x.Double, &x.Bool, &x.String, true, &x.AnythingArray, true, &c, false, nil, false, nil, true)
	if err != nil {
		return err
	}
	if object {
		x.AddressCamelCaseSchema = &c
	}
	return nil
}

func (x *Address) MarshalJSON() ([]byte, error) {
	return marshalUnion(x.Integer, x.Double, x.Bool, x.String, x.AnythingArray != nil, x.AnythingArray, x.AddressCamelCaseSchema != nil, x.AddressCamelCaseSchema, false, nil, false, nil, true)
}

type Birthday struct {
	AnythingMap map[string]interface{}
	String      *string
}

func (x *Birthday) UnmarshalJSON(data []byte) error {
	x.AnythingMap = nil
	object, err := unmarshalUnion(data, nil, nil, nil, &x.String, false, nil, false, nil, true, &x.AnythingMap, false, nil, false)
	if err != nil {
		return err
	}
	if object {
	}
	return nil
}

func (x *Birthday) MarshalJSON() ([]byte, error) {
	return marshalUnion(nil, nil, nil, x.String, false, nil, false, nil, x.AnythingMap != nil, x.AnythingMap, false, nil, false)
}

type FromSMS struct {
	Bool   *bool
	String *string
}

func (x *FromSMS) UnmarshalJSON(data []byte) error {
	object, err := unmarshalUnion(data, nil, nil, &x.Bool, &x.String, false, nil, false, nil, false, nil, false, nil, false)
	if err != nil {
		return err
	}
	if object {
	}
	return nil
}

func (x *FromSMS) MarshalJSON() ([]byte, error) {
	return marshalUnion(nil, nil, x.Bool, x.String, false, nil, false, nil, false, nil, false, nil, false)
}

func unmarshalUnion(data []byte, pi **int64, pf **float64, pb **bool, ps **string, haveArray bool, pa interface{}, haveObject bool, pc interface{}, haveMap bool, pm interface{}, haveEnum bool, pe interface{}, nullable bool) (bool, error) {
	if pi != nil {
		*pi = nil
	}
	if pf != nil {
		*pf = nil
	}
	if pb != nil {
		*pb = nil
	}
	if ps != nil {
		*ps = nil
	}

	dec := json.NewDecoder(bytes.NewReader(data))
	dec.UseNumber()
	tok, err := dec.Token()
	if err != nil {
		return false, err
	}

	switch v := tok.(type) {
	case json.Number:
		if pi != nil {
			i, err := v.Int64()
			if err == nil {
				*pi = &i
				return false, nil
			}
		}
		if pf != nil {
			f, err := v.Float64()
			if err == nil {
				*pf = &f
				return false, nil
			}
			return false, errors.New("Unparsable number")
		}
		return false, errors.New("Union does not contain number")
	case float64:
		return false, errors.New("Decoder should not return float64")
	case bool:
		if pb != nil {
			*pb = &v
			return false, nil
		}
		return false, errors.New("Union does not contain bool")
	case string:
		if haveEnum {
			return false, json.Unmarshal(data, pe)
		}
		if ps != nil {
			*ps = &v
			return false, nil
		}
		return false, errors.New("Union does not contain string")
	case nil:
		if nullable {
			return false, nil
		}
		return false, errors.New("Union does not contain null")
	case json.Delim:
		if v == '{' {
			if haveObject {
				return true, json.Unmarshal(data, pc)
			}
			if haveMap {
				return false, json.Unmarshal(data, pm)
			}
			return false, errors.New("Union does not contain object")
		}
		if v == '[' {
			if haveArray {
				return false, json.Unmarshal(data, pa)
			}
			return false, errors.New("Union does not contain array")
		}
		return false, errors.New("Cannot handle delimiter")
	}
	return false, errors.New("Cannot unmarshal union")

}

func marshalUnion(pi *int64, pf *float64, pb *bool, ps *string, haveArray bool, pa interface{}, haveObject bool, pc interface{}, haveMap bool, pm interface{}, haveEnum bool, pe interface{}, nullable bool) ([]byte, error) {
	if pi != nil {
		return json.Marshal(*pi)
	}
	if pf != nil {
		return json.Marshal(*pf)
	}
	if pb != nil {
		return json.Marshal(*pb)
	}
	if ps != nil {
		return json.Marshal(*ps)
	}
	if haveArray {
		return json.Marshal(pa)
	}
	if haveObject {
		return json.Marshal(pc)
	}
	if haveMap {
		return json.Marshal(pm)
	}
	if haveEnum {
		return json.Marshal(pe)
	}
	if nullable {
		return json.Marshal(nil)
	}
	return nil, errors.New("Union must not be null")
}
