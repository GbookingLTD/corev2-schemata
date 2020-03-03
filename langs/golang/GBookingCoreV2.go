type GBookingCoreV2 struct {
	Controllers Controllers `json:"Controllers"`
	Models      Models      `json:"Models"`     
}

type Controllers struct {
	Business BusinessController `json:"Business"`
	Client   ClientController   `json:"Client"`  
}

type BusinessController struct {
	GetProfileByID GetProfileByID `json:"get_profile_by_id"`
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
	Params  BusinessGetProfileByIDRequestParams `json:"params"`        // параметры запроса
}

// авторизационные параметры
type Cred struct {
	Token *string `json:"token,omitempty"`// временный token для доступа
	User  *string `json:"user,omitempty"` // идентификатор профиля пользователя
}

// параметры запроса
type BusinessGetProfileByIDRequestParams struct {
	Business             PurpleBusiness     `json:"business"`                        
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

type PurpleBusiness struct {
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
// Список кодов ошибки авторизации
type BusinessGetProfileByIDResponseError struct {
	Code    float64 `json:"code"`          // код ошибки
	Data    *string `json:"data,omitempty"`// дополнительные данные об ошибке
	Message string  `json:"message"`       // текстовая информация об ошибке
}

// данные, передаваемые в ответ
type BusinessGetProfileByIDResponseResult struct {
	Active                *bool              `json:"active,omitempty"`               
	Business              *Business          `json:"business"`                       
	FreeSMS               *float64           `json:"freeSms,omitempty"`              
	MonthlyFreeSMS        *float64           `json:"monthlyFreeSms,omitempty"`       
	Networks              []Network          `json:"networks"`                       
	TopServices           *ResultTopServices `json:"top_services,omitempty"`         
	UseDefaultSMSTemplate *bool              `json:"useDefaultSmsTemplate,omitempty"`
	YandexFeedType        *YandexFeedType    `json:"yandexFeedType,omitempty"`       
}

type BusinessClass struct {
	Active                          *bool                            `json:"active,omitempty"`                       
	AdditionalSettings              *AdditionalSettings              `json:"additionalSettings,omitempty"`           
	AllowCategoryBooking            *bool                            `json:"allowCategoryBooking,omitempty"`         
	BusinessBackofficeConfiguration *BusinessBackofficeConfiguration `json:"backoffice_configuration,omitempty"`     
	BackofficeConfiguration         *BackofficeConfigurationClass    `json:"backofficeConfiguration,omitempty"`      
	BackofficeType                  *BackofficeType                  `json:"backofficeType,omitempty"`               
	Cabinets                        []Cabinet                        `json:"cabinets"`                               
	CabinetsEnabled                 *bool                            `json:"cabinetsEnabled,omitempty"`              
	CallbackWidgetConfiguration     *CallbackWidgetConfiguration     `json:"callback_widget_configuration,omitempty"`
	Consumables                     []Consumable                     `json:"consumables"`                            
	CreatedOn                       *string                          `json:"created_on,omitempty"`                   
	DefaultFilteredWorkers          []string                         `json:"defaultFilteredWorkers"`                 
	Departments                     []Department                     `json:"departments"`                            
	Designs                         []map[string]interface{}         `json:"designs"`                                
	ExtraID                         *string                          `json:"extraID,omitempty"`                      
	FlatTaxonomyDisplay             *bool                            `json:"flatTaxonomyDisplay,omitempty"`          
	GeneralInfo                     BusinessInfo                     `json:"general_info"`                           
	Group                           *Group                           `json:"group,omitempty"`                        
	ID                              *string                          `json:"id,omitempty"`                           
	IntegrationData                 map[string]interface{}           `json:"integration_data,omitempty"`             
	MiniWidgetConfiguration         MiniWidgetConfiguration          `json:"mini_widget_configuration"`              
	MobileData                      []interface{}                    `json:"mobileData"`                             
	Notifications                   []interface{}                    `json:"notifications"`                          
	Resources                       []Resource                       `json:"resources"`                              
	StateLevelHolidaysNotWorking    *bool                            `json:"stateLevelHolidaysNotWorking,omitempty"` 
	Taxonomies                      []BusinessTaxonomy               `json:"taxonomies"`                             
	TaxonomiesComplex               []TaxonomiesComplex              `json:"taxonomiesComplex"`                      
	TaxonomyTreeCapacity            []map[string]interface{}         `json:"taxonomy_tree_capacity"`                 
	TopServices                     *BusinessTopServices             `json:"top_services,omitempty"`                 
	Vertical                        *string                          `json:"vertical,omitempty"`                     
	WidgetConfiguration             WidgetConfiguration              `json:"widget_configuration"`                   
	YandexFeedType                  *string                          `json:"yandexFeedType,omitempty"`               
}

type AdditionalSettings struct {
	AppointmentExtensionAmount *float64                  `json:"appointmentExtensionAmount,omitempty"`
	AppointmentExtensionType   *AppointmentExtensionType `json:"appointmentExtensionType,omitempty"`  
}

type BackofficeConfigurationClass struct {
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

type BusinessBackofficeConfiguration struct {
	EnableMasterImportance *bool                  `json:"enableMasterImportance,omitempty"`
	ResourceTimetableType  *ResourceTimetableType `json:"resourceTimetableType,omitempty"` 
}

type Cabinet struct {
	Active *bool   `json:"active,omitempty"`
	ID     *string `json:"id,omitempty"`    
	Name   *string `json:"name,omitempty"`  
}

type CallbackWidgetConfiguration struct {
	Title1 *string `json:"title1,omitempty"`
	Title2 *string `json:"title2,omitempty"`
}

type Consumable struct {
	ExtraID  string  `json:"extraID"` 
	Name     string  `json:"name"`    
	Quantity float64 `json:"quantity"`
}

type Department struct {
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
	Timezone                   *string                  `json:"timezone,omitempty"`                  
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

type MiniWidgetConfiguration struct {
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
	Timezone                   *string                  `json:"timezone,omitempty"`                  
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
	StockAmount   string               `json:"stockAmount"`     // Значение цены, с учётом промо акций
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

type TaxonomiesComplex struct {
	Name       *string  `json:"name,omitempty"`
	Taxonomies []string `json:"taxonomies"`    
}

type BusinessTopServices struct {
	Services []interface{} `json:"services"`        
	Status   *string       `json:"status,omitempty"`
}

type WidgetConfiguration struct {
	AdditionalName                         *string                  `json:"additionalName,omitempty"`                        
	AlignmentTaxonomySlots                 *bool                    `json:"alignmentTaxonomySlots,omitempty"`                
	AllowAutoSelect                        *bool                    `json:"allowAutoSelect,omitempty"`                       
	AllowBookVisitor                       *bool                    `json:"allowBookVisitor,omitempty"`                      
	AllowSkipTimeCheck                     *bool                    `json:"allowSkipTimeCheck,omitempty"`                    
	AppointmentConfirmationText            *string                  `json:"appointment_confirmation_text,omitempty"`         
	AppointmentConfirmationTitle           *string                  `json:"appointment_confirmation_title,omitempty"`        
	AskClientBirthday                      *bool                    `json:"askClientBirthday,omitempty"`                     
	AskClientGender                        *bool                    `json:"askClientGender,omitempty"`                       
	BookableDateRanges                     *BookableDateRanges      `json:"bookableDateRanges,omitempty"`                    
	BookableMonthsCount                    *float64                 `json:"bookableMonthsCount,omitempty"`                   
	CalendarMode                           *bool                    `json:"calendarMode,omitempty"`                          
	CalendarModeHideTime                   *bool                    `json:"calendarModeHideTime,omitempty"`                  
	ClientBlockingSettings                 *ClientBlockingSettings  `json:"clientBlockingSettings,omitempty"`                
	ClientCommentTitle                     *bool                    `json:"clientCommentTitle,omitempty"`                    
	CracServer                             *CracServer              `json:"cracServer,omitempty"`                            
	CracSlotSize                           *float64                 `json:"cracSlotSize,omitempty"`                          
	Crunchv2                               *bool                    `json:"crunchv2,omitempty"`                              
	DayOffLabel                            *string                  `json:"dayOffLabel,omitempty"`                           
	DaysForward                            *float64                 `json:"daysForward,omitempty"`                           
	DayUnavailableLabel                    *string                  `json:"dayUnavailableLabel,omitempty"`                   
	DefaultServiceImgURL                   *string                  `json:"defaultServiceImgUrl,omitempty"`                  
	DefaultWorkerImgURL                    *string                  `json:"defaultWorkerImgUrl,omitempty"`                   
	DenySameTimeRecords                    *bool                    `json:"denySameTimeRecords,omitempty"`                   
	DisabledTaxonomiesText                 *string                  `json:"disabledTaxonomiesText,omitempty"`                
	DisableMobileWidget                    *bool                    `json:"disableMobileWidget,omitempty"`                   
	DisableWidget                          *bool                    `json:"disableWidget,omitempty"`                         
	DisableWidgetMessage                   *string                  `json:"disableWidgetMessage,omitempty"`                  
	DiscountedPriceRounding                *DiscountedPriceRounding `json:"discountedPriceRounding,omitempty"`               
	DisplaySlotSize                        *float64                 `json:"displaySlotSize,omitempty"`                       
	DontRequireEmail                       *bool                    `json:"dontRequireEmail,omitempty"`                      
	EmailIsMandatory                       *bool                    `json:"emailIsMandatory,omitempty"`                      
	EnableOverrideFooter                   *bool                    `json:"enableOverrideFooter,omitempty"`                  
	EnableWarningContactData               *bool                    `json:"enableWarningContactData,omitempty"`              
	ExtraVisitors                          *bool                    `json:"extraVisitors,omitempty"`                         
	FilterNonInsuranceSchedule             *bool                    `json:"filterNonInsuranceSchedule,omitempty"`            
	HideAnyWorkerBooking                   *bool                    `json:"hideAnyWorkerBooking,omitempty"`                  
	HideCallButton                         *bool                    `json:"hideCallButton,omitempty"`                        
	HideEmptyDays                          *bool                    `json:"hideEmptyDays,omitempty"`                         
	HideGBookingLogo                       *bool                    `json:"hideGBookingLogo,omitempty"`                      
	HideGraySlots                          *bool                    `json:"hideGraySlots,omitempty"`                         
	HideNewAppointmentButton               *bool                    `json:"hideNewAppointmentButton,omitempty"`              
	HidePrices                             *bool                    `json:"hidePrices,omitempty"`                            
	HideSocialNetworksAuthentication       *bool                    `json:"hideSocialNetworksAuthentication,omitempty"`      
	InsuranceClientSupportPhone            []Phone                  `json:"insuranceClientSupportPhone"`                     
	MaxServiceBooking                      *float64                 `json:"maxServiceBooking,omitempty"`                     
	MaxTimeslotBooking                     *float64                 `json:"maxTimeslotBooking,omitempty"`                    
	MostFreeEnable                         *bool                    `json:"mostFreeEnable,omitempty"`                        
	MultiServiceBooking                    *bool                    `json:"multiServiceBooking,omitempty"`                   
	MultiTimeslotBooking                   *bool                    `json:"multiTimeslotBooking,omitempty"`                  
	MultiTimeslotBookingAllDays            *bool                    `json:"multiTimeslotBookingAllDays,omitempty"`           
	NewWidgetTheme                         map[string]interface{}   `json:"newWidgetTheme,omitempty"`                        
	NoDefaultImages                        *bool                    `json:"noDefaultImages,omitempty"`                       
	OverrideFooter                         *string                  `json:"overrideFooter,omitempty"`                        
	Payment                                *Payment                 `json:"payment,omitempty"`                               
	PaymentProvider                        *PaymentProvider         `json:"paymentProvider,omitempty"`                       
	RequireAgreement                       *bool                    `json:"requireAgreement,omitempty"`                      
	RequireAgreementLink                   *string                  `json:"requireAgreementLink,omitempty"`                  
	RevisionVersion                        *float64                 `json:"revisionVersion,omitempty"`                       
	ShortLink                              *string                  `json:"shortLink,omitempty"`                             
	ShowAllWorkers                         *bool                    `json:"showAllWorkers,omitempty"`                        
	ShowClientAddress                      *bool                    `json:"showClientAddress,omitempty"`                     
	ShowClientComment                      *bool                    `json:"showClientComment,omitempty"`                     
	ShowDisabledTaxonomies                 *bool                    `json:"showDisabledTaxonomies,omitempty"`                
	ShowDrinkQuestion                      *bool                    `json:"showDrinkQuestion,omitempty"`                     
	ShowMap                                *bool                    `json:"showMap,omitempty"`                               
	ShowSurnameFirst                       *bool                    `json:"showSurnameFirst,omitempty"`                      
	ShowTalkQuestion                       *bool                    `json:"showTalkQuestion,omitempty"`                      
	ShowTaxonomyConfirmationAlert          *bool                    `json:"showTaxonomyConfirmationAlert,omitempty"`         
	SkipAuthentication                     *bool                    `json:"skipAuthentication,omitempty"`                    
	SkipDaysForward                        *bool                    `json:"skipDaysForward,omitempty"`                       
	SkipMobileMap                          *bool                    `json:"skipMobileMap,omitempty"`                         
	SkipServiceDurationAlignment           *bool                    `json:"skipServiceDurationAlignment,omitempty"`          
	SkipServiceSelection                   *bool                    `json:"skipServiceSelection,omitempty"`                  
	SkipTimeSelection                      *bool                    `json:"skipTimeSelection,omitempty"`                     
	SkipTimeSelectionServiceIDs            []string                 `json:"skipTimeSelectionServiceIDs"`                     
	SkipWorkerSelectedServiceIDs           []string                 `json:"skipWorkerSelectedServiceIDs"`                    
	SkipWorkerServicesSelection            *bool                    `json:"skipWorkerServicesSelection,omitempty"`           
	SocialNetworkImage                     *string                  `json:"socialNetworkImage,omitempty"`                    
	SocialSharing                          *SocialSharing           `json:"socialSharing,omitempty"`                         
	SortByMostFree                         *bool                    `json:"sortByMostFree,omitempty"`                        
	SortWorkersByWorkload                  *bool                    `json:"sortWorkersByWorkload,omitempty"`                 
	SplitInsuranceClient                   *bool                    `json:"splitInsuranceClient,omitempty"`                  
	SplitName                              *bool                    `json:"splitName,omitempty"`                             
	TentativeTTL                           *float64                 `json:"tentativeTTL,omitempty"`                          
	Theme                                  *string                  `json:"theme,omitempty"`                                 
	UseAppointmentReminder                 *bool                    `json:"useAppointmentReminder,omitempty"`                
	UseBusinessScheduleForUnavailableLabel *bool                    `json:"useBusinessScheduleForUnavailableLabel,omitempty"`
	UseClustersMap                         *bool                    `json:"useClustersMap,omitempty"`                        
	UseCoupon                              *bool                    `json:"useCoupon,omitempty"`                             
	UseCRAC                                *bool                    `json:"useCRAC,omitempty"`                               
	UseDefaultServiceImg                   *bool                    `json:"useDefaultServiceImg,omitempty"`                  
	UseDefaultWorkerImg                    *bool                    `json:"useDefaultWorkerImg,omitempty"`                   
	UseDirectScheduleRead                  *UseDirectScheduleRead   `json:"useDirectScheduleRead,omitempty"`                 
	UseInsuranceGuaranteeLetter            *bool                    `json:"useInsuranceGuaranteeLetter,omitempty"`           
	UseInsuranceSelect                     *bool                    `json:"useInsuranceSelect,omitempty"`                    
	UseMedAuth                             *bool                    `json:"useMedAuth,omitempty"`                            
	UseMiddleName                          *bool                    `json:"useMiddleName,omitempty"`                         
	UseNewReserveAPI                       *bool                    `json:"useNewReserveAPI,omitempty"`                      
	UseResourcePageLoading                 *bool                    `json:"useResourcePageLoading,omitempty"`                
	UseSortByName                          *bool                    `json:"useSortByName,omitempty"`                         
	WarningContactDataText                 *string                  `json:"warningContactDataText,omitempty"`                
	WidgetUseCRAC                          *bool                    `json:"widgetUseCRAC,omitempty"`                         
	WithoutWorkers                         *bool                    `json:"withoutWorkers,omitempty"`                        
	WorkerUnavailabilityText               *string                  `json:"worker_unavailability_text,omitempty"`            
	WorkerNameReverse                      *bool                    `json:"workerNameReverse,omitempty"`                     
}

type BookableDateRanges struct {
	Enabled *bool       `json:"enabled,omitempty"`
	End     interface{} `json:"end"`              
	Start   interface{} `json:"start"`            
}

type ClientBlockingSettings struct {
	AppointmentClientBlock     *bool    `json:"appointmentClientBlock,omitempty"`    
	AppointmentClientBlockDays *float64 `json:"appointmentClientBlockDays,omitempty"`
	AppointmentClientBlockText *string  `json:"appointmentClientBlockText,omitempty"`
	BlockIfFutureRecordExists  *bool    `json:"blockIfFutureRecordExists,omitempty"` 
	BlockRepeatedRecordsCount  *float64 `json:"blockRepeatedRecordsCount,omitempty"` 
	BlockRepeatedRecordsRange  *float64 `json:"blockRepeatedRecordsRange,omitempty"` 
	BlockRepeatedRecordsText   *string  `json:"blockRepeatedRecordsText,omitempty"`  
}

type DiscountedPriceRounding struct {
	Rule  *Rule    `json:"rule,omitempty"` 
	Value *float64 `json:"value,omitempty"`
}

type SocialSharing struct {
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
	Business          FluffyBusiness `json:"business"`                   
	Client            Client         `json:"client"`                     
	Profile           *ParamsProfile `json:"profile,omitempty"`          
	SkipEmailCheck    *bool          `json:"skipEmailCheck,omitempty"`   
	SkipProfileUpdate *bool          `json:"skipProfileUpdate,omitempty"`
}

type FluffyBusiness struct {
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
// Список кодов ошибки авторизации
type ClientAddClientResponseError struct {
	Code    float64 `json:"code"`          // код ошибки; ; код ошибки создания клиента
	Data    *string `json:"data,omitempty"`// дополнительные данные об ошибке
	Message string  `json:"message"`       // текстовая информация об ошибке
}

type ClientAddClientResponseResult struct {
	Business  *ResultBusiness `json:"business,omitempty"`
	Client    Client          `json:"client"`            
	Documents []interface{}   `json:"documents"`         
	Profile   *ResultProfile  `json:"profile,omitempty"` 
}

type ResultBusiness struct {
	ID string `json:"id"`
}

type ResultProfile struct {
	ID string `json:"id"`
}

type Models struct {
	Business *Business `json:"Business"`
	Client   Client    `json:"Client"`  
}

// тип сортировки работника
type WorkerSortingType string
const (
	MostFree WorkerSortingType = "most_free"
	WorkerSortingTypeNone WorkerSortingType = "none"
	Workload WorkerSortingType = "workload"
)

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

// значение числового типа для идентификации запроса на сервере
//
// идентификатор витрины (передаётся вместе с with_taxonomy_showcase)
//
// идентификатор бизнеса
type TimeFrameDate struct {
	Double *float64
	String *string
}

type Business struct {
	AnythingArray []interface{}
	Bool          *bool
	BusinessClass *BusinessClass
	Double        *float64
	Integer       *int64
	String        *string
}

type AdditionalFields struct {
	AdditionalFieldsClass *AdditionalFieldsClass
	AnythingArray         []interface{}
	Bool                  *bool
	Double                *float64
	Integer               *int64
	String                *string
}

type AddressElement struct {
	AddressClass  *AddressClass
	AnythingArray []interface{}
	Bool          *bool
	Double        *float64
	Integer       *int64
	String        *string
}

type Phone struct {
	AnythingArray []interface{}
	Bool          *bool
	Double        *float64
	Integer       *int64
	PhoneClass    *PhoneClass
	String        *string
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

// вес работника, в зависимости от указанного способа сортировки
type OrderWeight struct {
	Double *float64
	String *string
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

type Address struct {
	AddressCamelCaseSchema *AddressCamelCaseSchema
	AnythingArray          []interface{}
	Bool                   *bool
	Double                 *float64
	Integer                *int64
	String                 *string
}

type Birthday struct {
	AnythingMap map[string]interface{}
	String      *string
}

type FromSMS struct {
	Bool   *bool
	String *string
}
