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
	Code    float64 `json:"code"`   // код ошибки
	Data    *Data   `json:"data"`   // дополнительные данные об ошибке
	Message string  `json:"message"`// текстовая информация об ошибке
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
	Appointment AppointmentController `json:"Appointment"`
	Business    BusinessController    `json:"Business"`   
	Client      ClientController      `json:"Client"`     
	CracSlots   CracSlotsController   `json:"CracSlots"`  
}

type AppointmentController struct {
	CancelAppointmentByBusiness  *CancelAppointmentByBusiness `json:"cancel_appointment_by_business,omitempty"`
	CancelAppointmentByClient    *CancelAppointmentByClient   `json:"cancel_appointment_by_client,omitempty"`  
	ClientAppear                 *ClientAppear                `json:"client_appear,omitempty"`                 
	ClientConfirmAppointment     *ClientConfirmAppointment    `json:"client_confirm_appointment,omitempty"`    
	ClientRemoveEmptyAppointment ClientRemoveEmptyAppointment `json:"client_remove_empty_appointment"`         
	FinishAppointment            *FinishAppointment           `json:"finish_appointment,omitempty"`            
	GetAppointmentByFilter       *GetAppointmentByFilter      `json:"get_appointment_by_filter,omitempty"`     
	GetAppointmentByShowcase     *GetAppointmentByShowcase    `json:"get_appointment_by_showcase,omitempty"`   
	GetAppointmentsByClientV2    *GetAppointmentsByClientV2   `json:"get_appointments_by_client_v2,omitempty"` 
	GetAppointmentsByUser        *GetAppointmentsByUser       `json:"get_appointments_by_user,omitempty"`      
	ReserveAppointment           ReserveAppointment           `json:"reserve_appointment"`                     
	StartAppointment             *StartAppointment            `json:"start_appointment,omitempty"`             
}

type CancelAppointmentByBusiness struct {
	Request  AppointmentCancelAppointmentByBusinessRequest  `json:"request"` 
	Response AppointmentCancelAppointmentByBusinessResponse `json:"response"`
}

type AppointmentCancelAppointmentByBusinessRequest struct {
	Cred    *Cred                             `json:"cred,omitempty"`// авторизационные параметры
	ID      *TimeFrameDate                    `json:"id"`            // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                            `json:"jsonrpc"`       // версия протокола - 2.0
	Method  string                            `json:"method"`        // название jsonrpc метода
	Params  CancelAppointmentByBusinessParams `json:"params"`        // параметры запроса
}

type CancelAppointmentByBusinessParams struct {
	Appointment PurpleAppointment `json:"appointment"`     
	Client      *PurpleClient     `json:"client,omitempty"`
}

type PurpleAppointment struct {
	ID string `json:"id"`
}

type PurpleClient struct {
	Comment *string `json:"comment,omitempty"`
	ID      string  `json:"id"`               
}

type AppointmentCancelAppointmentByBusinessResponse struct {
	ID      float64                                              `json:"id"`              // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                                               `json:"jsonrpc"`         // версия протокола (2.0)
	Result  *bool                                                `json:"result,omitempty"`// данные, передаваемые в ответ
	Error   *AppointmentCancelAppointmentByBusinessResponseError `json:"error,omitempty"` // объект, содержащий информацию об ошибке
}

// объект, содержащий информацию об ошибке
//
// Код ошибки авторизации
type AppointmentCancelAppointmentByBusinessResponseError struct {
	Code    float64 `json:"code"`   // код ошибки
	Data    *Data   `json:"data"`   // дополнительные данные об ошибке
	Message string  `json:"message"`// текстовая информация об ошибке
}

type CancelAppointmentByClient struct {
	Request  AppointmentCancelAppointmentByClientRequest  `json:"request"` 
	Response AppointmentCancelAppointmentByClientResponse `json:"response"`
}

type AppointmentCancelAppointmentByClientRequest struct {
	Cred    *Cred                           `json:"cred,omitempty"`// авторизационные параметры
	ID      *TimeFrameDate                  `json:"id"`            // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                          `json:"jsonrpc"`       // версия протокола - 2.0
	Method  string                          `json:"method"`        // название jsonrpc метода
	Params  CancelAppointmentByClientParams `json:"params"`        // параметры запроса
}

type CancelAppointmentByClientParams struct {
	Appointment FluffyAppointment `json:"appointment"`     
	Client      *FluffyClient     `json:"client,omitempty"`
}

type FluffyAppointment struct {
	ClientID *string `json:"clientID,omitempty"`
	ID       string  `json:"id"`                
	ShortID  *string `json:"shortId,omitempty"` 
}

type FluffyClient struct {
	ClientID *string `json:"clientID,omitempty"`
	Comment  *string `json:"comment,omitempty"` 
	ID       string  `json:"id"`                
}

type AppointmentCancelAppointmentByClientResponse struct {
	ID      float64                                            `json:"id"`              // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                                             `json:"jsonrpc"`         // версия протокола (2.0)
	Result  *bool                                              `json:"result,omitempty"`// данные, передаваемые в ответ
	Error   *AppointmentCancelAppointmentByClientResponseError `json:"error,omitempty"` // объект, содержащий информацию об ошибке
}

// объект, содержащий информацию об ошибке
//
// Код ошибки авторизации
type AppointmentCancelAppointmentByClientResponseError struct {
	Code    float64 `json:"code"`   // код ошибки
	Data    *Data   `json:"data"`   // дополнительные данные об ошибке
	Message string  `json:"message"`// текстовая информация об ошибке
}

type ClientAppear struct {
	Request  AppointmentClientAppearRequest  `json:"request"` 
	Response AppointmentClientAppearResponse `json:"response"`
}

type AppointmentClientAppearRequest struct {
	Cred    *Cred              `json:"cred,omitempty"`// авторизационные параметры
	ID      *TimeFrameDate     `json:"id"`            // значение числового типа для идентификации запроса на сервере
	Jsonrpc string             `json:"jsonrpc"`       // версия протокола - 2.0
	Method  string             `json:"method"`        // название jsonrpc метода
	Params  ClientAppearParams `json:"params"`        // параметры запроса
}

type ClientAppearParams struct {
	Appointment TentacledAppointment `json:"appointment"`
	Business    PurpleBusiness       `json:"business"`   
}

type TentacledAppointment struct {
	ClientAppear AppointmentClientAppear `json:"client_appear"`
	ID           string                  `json:"id"`           
}

type PurpleBusiness struct {
	ID string `json:"id"`
}

type AppointmentClientAppearResponse struct {
	ID      float64                               `json:"id"`              // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                                `json:"jsonrpc"`         // версия протокола (2.0)
	Result  *bool                                 `json:"result,omitempty"`// данные, передаваемые в ответ
	Error   *AppointmentClientAppearResponseError `json:"error,omitempty"` // объект, содержащий информацию об ошибке
}

// объект, содержащий информацию об ошибке
//
// Код ошибки авторизации
type AppointmentClientAppearResponseError struct {
	Code    float64 `json:"code"`   // код ошибки
	Data    *Data   `json:"data"`   // дополнительные данные об ошибке
	Message string  `json:"message"`// текстовая информация об ошибке
}

type ClientConfirmAppointment struct {
	Request  AppointmentClientConfirmAppointmentRequest  `json:"request"` 
	Response AppointmentClientConfirmAppointmentResponse `json:"response"`
}

type AppointmentClientConfirmAppointmentRequest struct {
	Cred    *Cred                    `json:"cred,omitempty"`// авторизационные параметры
	ID      *TimeFrameDate           `json:"id"`            // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                   `json:"jsonrpc"`       // версия протокола - 2.0
	Method  string                   `json:"method"`        // название jsonrpc метода
	Params  ConfirmAppointmentParams `json:"params"`        // параметры запроса
}

type ConfirmAppointmentParams struct {
	Appointment StickyAppointment `json:"appointment"`       
	Client      TentacledClient   `json:"client"`            
	Contract    *ParamsContract   `json:"contract,omitempty"`
}

type StickyAppointment struct {
	ID       string               `json:"id"`                
	Reminder *AppointmentReminder `json:"reminder,omitempty"`
	Source   *string              `json:"source,omitempty"`  
}

type AppointmentReminder struct {
	Status       *ReminderStatus `json:"status,omitempty"`       
	TimeReminder *float64        `json:"time_reminder,omitempty"`
}

type TentacledClient struct {
	Comment *string `json:"comment,omitempty"`
	ID      string  `json:"id"`               
}

type ParamsContract struct {
	ClientContractID *string `json:"clientContractID,omitempty"`
	ContractID       *string `json:"contractID,omitempty"`      
	ID               *string `json:"id,omitempty"`              
}

type AppointmentClientConfirmAppointmentResponse struct {
	ID      float64                                           `json:"id"`              // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                                            `json:"jsonrpc"`         // версия протокола (2.0)
	Result  *Appointment                                      `json:"result,omitempty"`// данные, передаваемые в ответ
	Error   *AppointmentClientConfirmAppointmentResponseError `json:"error,omitempty"` // объект, содержащий информацию об ошибке
}

// объект, содержащий информацию об ошибке
//
// Код ошибки авторизации
type AppointmentClientConfirmAppointmentResponseError struct {
	Code    float64 `json:"code"`   // код ошибки
	Data    *Data   `json:"data"`   // дополнительные данные об ошибке
	Message string  `json:"message"`// текстовая информация об ошибке
}

// данные, передаваемые в ответ
type Appointment struct {
	AdditionalInfo             map[string]interface{}     `json:"additional_info,omitempty"`              
	AdditionalClientAppears    []AdditionalClientAppear   `json:"additionalClientAppears"`                
	AdditionalClientPayments   []AdditionalClientPayment  `json:"additionalClientPayments"`               
	AdditionalClients          []AdditionalClientElement  `json:"additionalClients"`                      
	AdditionalClientSources    []AdditionalClientSource   `json:"additionalClientSources"`                
	AdditionalClientStatuses   []AdditionalClientStatus   `json:"additionalClientStatuses"`               
	AdditionalClientUtms       []AdditionalClientUtm      `json:"additionalClientUtms"`                   
	AdditionalFields           []AdditionalField          `json:"additionalFields"`                       
	AdditionalProducts         []AdditionalProduct        `json:"additionalProducts"`                     
	AdditionalTaxonomies       []AppointmentTaxonomy      `json:"additionalTaxonomies"`                   
	Address                    *string                    `json:"address,omitempty"`                      
	AdjacentID                 *string                    `json:"adjacentId,omitempty"`                   
	Appointment                AppointmentInfo            `json:"appointment"`                            
	AutoPhoneCallStatus        *string                    `json:"autoPhoneCallStatus,omitempty"`          
	BannedClients              []string                   `json:"bannedClients"`                          
	Business                   AppointmentBusiness        `json:"business"`                               
	Cabinet                    Cabinet                    `json:"cabinet"`                                
	Capacity                   *float64                   `json:"capacity,omitempty"`                     
	ChangeReason               string                     `json:"changeReason"`                           
	Client                     PurpleAppointmentClient    `json:"client"`                                 
	ClientAppear               AppointmentClientAppear    `json:"client_appear"`                          
	ClientMedCode              *string                    `json:"client_med_code,omitempty"`              
	ClientPayment              AppointmentClientPayment   `json:"client_payment"`                         
	ClientPaymentInvoice       *string                    `json:"client_payment_invoice,omitempty"`       
	ClientPaymentTransactionID *string                    `json:"client_payment_transaction_id,omitempty"`
	ClientComment              string                     `json:"clientComment"`                          
	ClientVisitors             []AppointmentClientVisitor `json:"clientVisitors"`                         
	Color                      *string                    `json:"color,omitempty"`                        
	Contract                   *AppointmentContract       `json:"contract,omitempty"`                     
	CreatedUser                *CreatedUser               `json:"createdUser,omitempty"`                  
	DestinationKeyword         *string                    `json:"destinationKeyword,omitempty"`           
	DestinationLink            *string                    `json:"destinationLink,omitempty"`              
	ExtraFields                []ExtraField               `json:"extraFields"`                            
	Gt                         *bool                      `json:"gt,omitempty"`                           
	GtTimeFrame                *string                    `json:"gtTimeFrame,omitempty"`                  
	Location                   *Location                  `json:"location,omitempty"`                     
	MasterImportance           *bool                      `json:"masterImportance,omitempty"`             
	MinClients                 *float64                   `json:"minClients,omitempty"`                   
	MoveCounter                float64                    `json:"moveCounter"`                            
	MovedByRobot               bool                       `json:"movedByRobot"`                           
	MovedFromFired             *bool                      `json:"movedFromFired,omitempty"`               
	NetworkID                  *string                    `json:"networkID,omitempty"`                    
	Notes                      string                     `json:"notes"`                                  
	Order                      Order                      `json:"order"`                                  
	PreferredResource          *bool                      `json:"preferredResource,omitempty"`            
	PromoCode                  *string                    `json:"promoCode,omitempty"`                    
	RefererLink                *string                    `json:"refererLink,omitempty"`                  
	Referrer                   *string                    `json:"referrer,omitempty"`                     
	Reminder                   ResultReminder             `json:"reminder"`                               
	RemovedClientsData         []RemovedClientsDatum      `json:"removedClientsData"`                     
	Resource                   AppointmentResource        `json:"resource"`                               
	Review                     *Review                    `json:"review,omitempty"`                       
	Room                       *Room                      `json:"room,omitempty"`                         
	Showcase                   AppointmentShowcase        `json:"showcase"`                               
	SocialToken                *string                    `json:"socialToken,omitempty"`                  
	Source                     string                     `json:"source"`                                 
	Taxonomy                   AppointmentTaxonomy        `json:"taxonomy"`                               
	TelemedData                *AppointmentTelemedData    `json:"telemedData,omitempty"`                  // Данные для телемед конференции
	ThirdParty                 []map[string]interface{}   `json:"third_party"`                            
	Utm                        map[string]interface{}     `json:"utm,omitempty"`                          
	WithCoSale                 *bool                      `json:"withCoSale,omitempty"`                   
}

type AdditionalClientAppear struct {
	Appear   AppointmentClientAppear `json:"appear"`  
	ClientID string                  `json:"clientID"`
}

type AdditionalClientPayment struct {
	ClientID string                   `json:"clientID"`
	Payment  AppointmentClientPayment `json:"payment"` 
}

type AdditionalClientSource struct {
	ID       *string `json:"_id,omitempty"`
	ClientID string  `json:"clientID"`     
	Source   string  `json:"source"`       
}

type AdditionalClientStatus struct {
	ID       *string                  `json:"_id,omitempty"`
	ClientID string                   `json:"clientID"`     
	History  []map[string]interface{} `json:"history"`      
	Status   AppointmentStatus        `json:"status"`       
}

type AdditionalClientUtm struct {
	ID       *string                `json:"_id,omitempty"`
	ClientID string                 `json:"clientID"`     
	Utm      map[string]interface{} `json:"utm,omitempty"`
}

type AdditionalClientElement struct {
	Address             *string                     `json:"address"`                
	AdminComment        *string                     `json:"adminComment"`           
	Birthday            *Birthday                   `json:"birthday"`               
	ClientCardNumber    *string                     `json:"clientCardNumber"`       
	ClientComment       *string                     `json:"clientComment"`          
	CreatorProfileID    *string                     `json:"creatorProfileID"`       
	CreatorProfileName  *string                     `json:"creatorProfileName"`     
	DriverLicense       *string                     `json:"driverLicense"`          
	Email               []string                    `json:"email"`                  
	ExtraData           map[string]interface{}      `json:"extraData,omitempty"`    
	ExtraID             *string                     `json:"extraID"`                
	ExtraVisitors       *float64                    `json:"extraVisitors,omitempty"`
	Fax                 *string                     `json:"fax"`                    
	Feedback            *AppointmentClientFeedback  `json:"feedback,omitempty"`     
	GAClientID          *string                     `json:"GAClientID"`             
	HouseNumber         *string                     `json:"houseNumber"`            
	ID                  string                      `json:"id"`                     
	IncomingPhone       *IncomingPhoneClass         `json:"incomingPhone,omitempty"`
	IsraelCity          *AdditionalClientIsraelCity `json:"israelCity"`             
	IsVIP               *bool                       `json:"isVIP,omitempty"`        
	KupatHolim          *AdditionalClientKupatHolim `json:"kupatHolim"`             
	Language            *string                     `json:"language,omitempty"`     
	MiddleName          *string                     `json:"middleName"`             
	Name                string                      `json:"name"`                   
	PassportID          *string                     `json:"passportId"`             
	Phone               []AdditionalClientPhone     `json:"phone"`                  
	SeasonTicketID      *string                     `json:"seasonTicketId"`         
	SeasonTicketNumber  *string                     `json:"seasonTicketNumber"`     
	Sex                 *Sex                        `json:"sex,omitempty"`          
	ShortID             *string                     `json:"shortId,omitempty"`      
	Surname             string                      `json:"surname"`                
	TaxiPark            *string                     `json:"taxiPark"`               
	TaxiParkMemberCount *float64                    `json:"taxiParkMemberCount"`    
}

type AppointmentClientFeedback struct {
	ComplaintActionText *string          `json:"complaintActionText,omitempty"`
	ComplaintStatus     *ComplaintStatus `json:"complaintStatus,omitempty"`    
	ComplaintText       *string          `json:"complaintText,omitempty"`      
	ExtraFields         []ExtraField     `json:"extraFields"`                  
	Inprogress          *bool            `json:"inprogress,omitempty"`         
	OriginalMessage     *string          `json:"originalMessage,omitempty"`    
	Rating              *string          `json:"rating,omitempty"`             
}

type ExtraField struct {
	FieldID   string       `json:"fieldID"`  
	FieldName string       `json:"fieldName"`
	Value     *PurpleValue `json:"value"`    
}

// пустой объект в момент резервирования
type IncomingPhoneClass struct {
	AreaCode    *string `json:"area_code,omitempty"`   
	CountryCode *string `json:"country_code,omitempty"`
	Number      *string `json:"number,omitempty"`      
}

type AdditionalClientIsraelCity struct {
	CityID *string `json:"cityId,omitempty"`
	Name   *string `json:"name,omitempty"`  
}

type AdditionalClientKupatHolim struct {
	KupatHolimID *string `json:"kupatHolimId,omitempty"`
	Name         *string `json:"name,omitempty"`        
}

type AdditionalClientPhone struct {
	AreaCode    string `json:"area_code"`   
	CountryCode string `json:"country_code"`
	Number      string `json:"number"`      
}

type AdditionalField struct {
	Name          string              `json:"name"`         
	RequiredField bool                `json:"requiredField"`
	ShortName     string              `json:"shortName"`    
	Type          AdditionalFieldType `json:"type"`         
	Value         string              `json:"value"`        
}

type AdditionalProduct struct {
	ID    string  `json:"id"`   
	Price float64 `json:"price"`
}

type AppointmentTaxonomy struct {
	Alias             string  `json:"alias"`                      
	ConfirmationAlert *string `json:"confirmationAlert,omitempty"`
	ExtraDescription  *string `json:"extraDescription,omitempty"` 
	ExtraID           *string `json:"extraId,omitempty"`          
	ID                string  `json:"id"`                         
	SiteID            *string `json:"siteId,omitempty"`           
}

type AppointmentInfo struct {
	BackofficeID        *TimeFrameDate    `json:"backofficeID"`              
	BlockSMS            bool              `json:"blockSMS"`                  
	Created             string            `json:"created"`                   
	DrinkAnswer         *DrinkAnswer      `json:"drinkAnswer,omitempty"`     
	Duration            float64           `json:"duration"`                  
	HideAppointmentTime bool              `json:"hideAppointmentTime"`       
	ID                  string            `json:"id"`                        
	IntegrationData     *IntegrationData  `json:"integration_data,omitempty"`
	Price               Price             `json:"price"`                     
	ShortID             string            `json:"shortId"`                   
	Start               string            `json:"start"`                     
	Status              AppointmentStatus `json:"status"`                    
	TalkAnswer          *TalkAnswer       `json:"talkAnswer,omitempty"`      
	TestRecord          bool              `json:"testRecord"`                
	Updated             string            `json:"updated"`                   
}

type IntegrationData struct {
	ExtraID *string `json:"extraId"`
}

type Price struct {
	AdditionalTaxonomyDiscount []PurpleAdditionalTaxonomyDiscount `json:"additionalTaxonomyDiscount"`
	Amount                     *float64                           `json:"amount,omitempty"`          
	Currency                   CurrencyList                       `json:"currency"`                  
	Discount                   *float64                           `json:"discount,omitempty"`        
	DiscountProvider           *DiscountProvider                  `json:"discountProvider,omitempty"`
	DiscountType               *string                            `json:"discountType,omitempty"`    
	OriginalAmount             *float64                           `json:"originalAmount"`            
}

type PurpleAdditionalTaxonomyDiscount struct {
	Discount         *float64          `json:"discount,omitempty"`        
	DiscountProvider *DiscountProvider `json:"discountProvider,omitempty"`
	DiscountType     *string           `json:"discountType,omitempty"`    
	TaxonomyID       *string           `json:"taxonomyID,omitempty"`      
}

type AppointmentBusiness struct {
	ID string `json:"id"`
}

type Cabinet struct {
	ID *string `json:"id,omitempty"`
}

// пустой объект в момент резервирования
type PurpleAppointmentClient struct {
	Address             *string                     `json:"address"`                
	AdminComment        *string                     `json:"adminComment"`           
	Birthday            *Birthday                   `json:"birthday"`               
	ClientCardNumber    *string                     `json:"clientCardNumber"`       
	ClientComment       *string                     `json:"clientComment"`          
	CreatorProfileID    *string                     `json:"creatorProfileID"`       
	CreatorProfileName  *string                     `json:"creatorProfileName"`     
	DriverLicense       *string                     `json:"driverLicense"`          
	Email               []string                    `json:"email"`                  
	ExtraData           map[string]interface{}      `json:"extraData,omitempty"`    
	ExtraID             *string                     `json:"extraID"`                
	ExtraVisitors       *float64                    `json:"extraVisitors,omitempty"`
	Fax                 *string                     `json:"fax"`                    
	Feedback            *AppointmentClientFeedback  `json:"feedback,omitempty"`     
	GAClientID          *string                     `json:"GAClientID"`             
	HouseNumber         *string                     `json:"houseNumber"`            
	ID                  *string                     `json:"id,omitempty"`           
	IncomingPhone       *IncomingPhoneClass         `json:"incomingPhone,omitempty"`
	IsraelCity          *AdditionalClientIsraelCity `json:"israelCity"`             
	IsVIP               *bool                       `json:"isVIP,omitempty"`        
	KupatHolim          *AdditionalClientKupatHolim `json:"kupatHolim"`             
	Language            *string                     `json:"language,omitempty"`     
	MiddleName          *string                     `json:"middleName"`             
	Name                *string                     `json:"name,omitempty"`         
	PassportID          *string                     `json:"passportId"`             
	Phone               []AdditionalClientPhone     `json:"phone"`                  
	SeasonTicketID      *string                     `json:"seasonTicketId"`         
	SeasonTicketNumber  *string                     `json:"seasonTicketNumber"`     
	Sex                 *Sex                        `json:"sex,omitempty"`          
	ShortID             *string                     `json:"shortId,omitempty"`      
	Surname             *string                     `json:"surname,omitempty"`      
	TaxiPark            *string                     `json:"taxiPark"`               
	TaxiParkMemberCount *float64                    `json:"taxiParkMemberCount"`    
}

type AppointmentClientVisitor struct {
	Birthday        *Birthday               `json:"birthday"`                 
	Email           []string                `json:"email"`                    
	ExtraVisitors   *float64                `json:"extraVisitors,omitempty"`  
	Name            *string                 `json:"name,omitempty"`           
	ParentClientID  *string                 `json:"parentClientID,omitempty"` 
	ParentProfileID *string                 `json:"parentProfileID,omitempty"`
	Phone           []AdditionalClientPhone `json:"phone"`                    
	Sex             *Sex                    `json:"sex,omitempty"`            
}

type AppointmentContract struct {
	ClientContractID *string `json:"clientContractID,omitempty"`
	ContractID       *string `json:"contractID,omitempty"`      
	ID               *string `json:"id,omitempty"`              
}

type CreatedUser struct {
	Email      *string `json:"email,omitempty"`     
	ID         string  `json:"id"`                  
	MiddleName *string `json:"middleName,omitempty"`
	Name       string  `json:"name"`                
	Surname    *string `json:"surname,omitempty"`   
}

type Location struct {
	Latitude  float64 `json:"latitude"` 
	Longitude float64 `json:"longitude"`
}

type Order struct {
	ID string `json:"id"`
}

type ResultReminder struct {
	Status       ReminderStatus `json:"status"`                 
	TimeReminder *float64       `json:"time_reminder,omitempty"`
}

type RemovedClientsDatum struct {
	Appear               *AppointmentClientAppear  `json:"appear,omitempty"`                
	Client               AdditionalClientElement   `json:"client"`                          
	Created              *string                   `json:"created,omitempty"`               
	Payment              *AppointmentClientPayment `json:"payment,omitempty"`               
	PaymentInvoice       *string                   `json:"payment_invoice,omitempty"`       
	PaymentTransactionID *string                   `json:"payment_transaction_id,omitempty"`
	Source               *string                   `json:"source,omitempty"`                
	Status               *AppointmentStatus        `json:"status,omitempty"`                
}

type AppointmentResource struct {
	Degree      *string `json:"degree,omitempty"`     
	Description *string `json:"description,omitempty"`
	Experience  *string `json:"experience,omitempty"` 
	ExtraID     *string `json:"extraID"`              
	IconURL     *string `json:"icon_url,omitempty"`   
	ID          string  `json:"id"`                   
	MiddleName  *string `json:"middleName,omitempty"` 
	Name        string  `json:"name"`                 
	Profession  *string `json:"profession,omitempty"` 
	SiteID      *string `json:"siteId,omitempty"`     
	Surname     string  `json:"surname"`              
}

type Review struct {
	Business TaxonomyClass `json:"business"`
	Taxonomy TaxonomyClass `json:"taxonomy"`
	Worker   TaxonomyClass `json:"worker"`  
}

type TaxonomyClass struct {
	Comment *string  `json:"comment,omitempty"`
	Rate    *float64 `json:"rate,omitempty"`   
}

type Room struct {
	ID string `json:"id"`
}

type AppointmentShowcase struct {
	BusinessID *string `json:"businessID,omitempty"`
}

// Данные для телемед конференции
type AppointmentTelemedData struct {
	ID            *string `json:"id,omitempty"`           
	JoinURL       *string `json:"joinUrl,omitempty"`      
	Password      *string `json:"password,omitempty"`     
	ShortJoinURL  *string `json:"shortJoinUrl,omitempty"` 
	ShortStartURL *string `json:"shortStartUrl,omitempty"`
	StartURL      *string `json:"startUrl,omitempty"`     
}

type ClientRemoveEmptyAppointment struct {
	Request  AppointmentClientRemoveEmptyAppointmentRequest  `json:"request"` 
	Response AppointmentClientRemoveEmptyAppointmentResponse `json:"response"`
}

type AppointmentClientRemoveEmptyAppointmentRequest struct {
	Cred    *Cred                  `json:"cred,omitempty"`// авторизационные параметры
	ID      *TimeFrameDate         `json:"id"`            // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                 `json:"jsonrpc"`       // версия протокола - 2.0
	Method  string                 `json:"method"`        // название jsonrpc метода
	Params  RemoveEmptyAppointment `json:"params"`        // параметры запроса
}

type RemoveEmptyAppointment struct {
	Appointment IndigoAppointment `json:"appointment"`
	Business    FluffyBusiness    `json:"business"`   
}

type IndigoAppointment struct {
	ID string `json:"id"`
}

type FluffyBusiness struct {
	ID string `json:"id"`
}

type AppointmentClientRemoveEmptyAppointmentResponse struct {
	ID      float64                                               `json:"id"`              // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                                                `json:"jsonrpc"`         // версия протокола (2.0)
	Result  *bool                                                 `json:"result,omitempty"`// данные, передаваемые в ответ
	Error   *AppointmentClientRemoveEmptyAppointmentResponseError `json:"error,omitempty"` // объект, содержащий информацию об ошибке
}

// объект, содержащий информацию об ошибке
//
// Код ошибки авторизации
type AppointmentClientRemoveEmptyAppointmentResponseError struct {
	Code    float64 `json:"code"`   // код ошибки
	Data    *Data   `json:"data"`   // дополнительные данные об ошибке
	Message string  `json:"message"`// текстовая информация об ошибке
}

type FinishAppointment struct {
	Request  AppointmentFinishAppointmentRequest  `json:"request"` 
	Response AppointmentFinishAppointmentResponse `json:"response"`
}

type AppointmentFinishAppointmentRequest struct {
	Cred    *Cred                   `json:"cred,omitempty"`// авторизационные параметры
	ID      *TimeFrameDate          `json:"id"`            // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                  `json:"jsonrpc"`       // версия протокола - 2.0
	Method  string                  `json:"method"`        // название jsonrpc метода
	Params  FinishAppointmentParams `json:"params"`        // параметры запроса
}

type FinishAppointmentParams struct {
	Appointment IndecentAppointment `json:"appointment"`
	Business    TentacledBusiness   `json:"business"`   
}

type IndecentAppointment struct {
	Finish *string `json:"finish,omitempty"`
	ID     string  `json:"id"`              
}

type TentacledBusiness struct {
	ID string `json:"id"`
}

type AppointmentFinishAppointmentResponse struct {
	ID      float64                                    `json:"id"`              // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                                     `json:"jsonrpc"`         // версия протокола (2.0)
	Result  *bool                                      `json:"result,omitempty"`// данные, передаваемые в ответ
	Error   *AppointmentFinishAppointmentResponseError `json:"error,omitempty"` // объект, содержащий информацию об ошибке
}

// объект, содержащий информацию об ошибке
//
// Код ошибки авторизации
type AppointmentFinishAppointmentResponseError struct {
	Code    float64 `json:"code"`   // код ошибки
	Data    *Data   `json:"data"`   // дополнительные данные об ошибке
	Message string  `json:"message"`// текстовая информация об ошибке
}

type GetAppointmentByFilter struct {
	Request  AppointmentGetAppointmentByFilterRequest  `json:"request"` 
	Response AppointmentGetAppointmentByFilterResponse `json:"response"`
}

type AppointmentGetAppointmentByFilterRequest struct {
	Cred    *Cred                                          `json:"cred,omitempty"`// авторизационные параметры
	ID      *TimeFrameDate                                 `json:"id"`            // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                                         `json:"jsonrpc"`       // версия протокола - 2.0
	Method  string                                         `json:"method"`        // название jsonrpc метода
	Params  AppointmentGetAppointmentByFilterRequestParams `json:"params"`        // параметры запроса
}

type AppointmentGetAppointmentByFilterRequestParams struct {
	Business              *StickyBusiness     `json:"business,omitempty"`             
	ExtraFilters          *PurpleExtraFilters `json:"extraFilters,omitempty"`         
	Filter                *PurpleFilter       `json:"filter,omitempty"`               
	Network               *PurpleNetwork      `json:"network,omitempty"`              
	Page                  float64             `json:"page"`                           
	PageSize              float64             `json:"pageSize"`                       
	SkipBusinessCancelled *bool               `json:"skipBusinessCancelled,omitempty"`
}

type StickyBusiness struct {
	ID *TimeFrameDate `json:"id"`
}

type PurpleExtraFilters struct {
	Sort []PurpleSort `json:"sort"`
}

type PurpleSort struct {
	Dir   Dir       `json:"dir"`  
	Field SortField `json:"field"`
}

type PurpleFilter struct {
	Created     *PurpleCreated `json:"created,omitempty"`    
	End         *string        `json:"end,omitempty"`        
	Services    []string       `json:"services"`             
	SkipUpdated *bool          `json:"skipUpdated,omitempty"`
	Start       *string        `json:"start,omitempty"`      
	Workers     []string       `json:"workers"`              
}

type PurpleCreated struct {
	End   string `json:"end"`  
	Start string `json:"start"`
}

type PurpleNetwork struct {
	ID *TimeFrameDate `json:"id"`
}

type AppointmentGetAppointmentByFilterResponse struct {
	ID      float64                                          `json:"id"`              // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                                           `json:"jsonrpc"`         // версия протокола (2.0)
	Result  *AppointmentGetAppointmentByFilterResponseResult `json:"result,omitempty"`
	Error   *AppointmentGetAppointmentByFilterResponseError  `json:"error,omitempty"` // объект, содержащий информацию об ошибке
}

// объект, содержащий информацию об ошибке
//
// Код ошибки авторизации
type AppointmentGetAppointmentByFilterResponseError struct {
	Code    float64 `json:"code"`   // код ошибки
	Data    *Data   `json:"data"`   // дополнительные данные об ошибке
	Message string  `json:"message"`// текстовая информация об ошибке
}

// данные, передаваемые в ответ
type AppointmentGetAppointmentByFilterResponseResult struct {
	Data        []Appointment `json:"data"`       
	Page        float64       `json:"page"`       
	Total       float64       `json:"total"`      
	Unconfirmed float64       `json:"unconfirmed"`
}

type GetAppointmentByShowcase struct {
	Request  AppointmentGetAppointmentByShowcaseRequest  `json:"request"` 
	Response AppointmentGetAppointmentByShowcaseResponse `json:"response"`
}

type AppointmentGetAppointmentByShowcaseRequest struct {
	Cred    *Cred                                            `json:"cred,omitempty"`// авторизационные параметры
	ID      *TimeFrameDate                                   `json:"id"`            // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                                           `json:"jsonrpc"`       // версия протокола - 2.0
	Method  string                                           `json:"method"`        // название jsonrpc метода
	Params  AppointmentGetAppointmentByShowcaseRequestParams `json:"params"`        // параметры запроса
}

type AppointmentGetAppointmentByShowcaseRequestParams struct {
	Business IndigoBusiness `json:"business"`         
	Created  *ParamsCreated `json:"created,omitempty"`
	Page     float64        `json:"page"`             
	PageSize float64        `json:"pageSize"`         
	Source   *string        `json:"source,omitempty"` 
}

type IndigoBusiness struct {
	ID *TimeFrameDate `json:"id"`
}

type ParamsCreated struct {
	End   string `json:"end"`  
	Start string `json:"start"`
}

type AppointmentGetAppointmentByShowcaseResponse struct {
	ID      float64                                           `json:"id"`             // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                                            `json:"jsonrpc"`        // версия протокола (2.0)
	Result  []Appointment                                     `json:"result"`         
	Error   *AppointmentGetAppointmentByShowcaseResponseError `json:"error,omitempty"`// объект, содержащий информацию об ошибке
}

// объект, содержащий информацию об ошибке
//
// Код ошибки авторизации
type AppointmentGetAppointmentByShowcaseResponseError struct {
	Code    float64 `json:"code"`   // код ошибки
	Data    *Data   `json:"data"`   // дополнительные данные об ошибке
	Message string  `json:"message"`// текстовая информация об ошибке
}

type GetAppointmentsByClientV2 struct {
	Request  AppointmentGetAppointmentsByClientV2Request  `json:"request"` 
	Response AppointmentGetAppointmentsByClientV2Response `json:"response"`
}

type AppointmentGetAppointmentsByClientV2Request struct {
	Cred    *Cred                                             `json:"cred,omitempty"`// авторизационные параметры
	ID      *TimeFrameDate                                    `json:"id"`            // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                                            `json:"jsonrpc"`       // версия протокола - 2.0
	Method  string                                            `json:"method"`        // название jsonrpc метода
	Params  AppointmentGetAppointmentsByClientV2RequestParams `json:"params"`        // параметры запроса
}

type AppointmentGetAppointmentsByClientV2RequestParams struct {
	Business              IndecentBusiness    `json:"business"`                       
	Client                StickyClient        `json:"client"`                         
	ExtraFilters          *FluffyExtraFilters `json:"extraFilters,omitempty"`         
	Filter                *FluffyFilter       `json:"filter,omitempty"`               
	Network               *FluffyNetwork      `json:"network,omitempty"`              
	SkipBusinessCancelled *bool               `json:"skipBusinessCancelled,omitempty"`
}

type IndecentBusiness struct {
	ID *TimeFrameDate `json:"id"`
}

type StickyClient struct {
	ID *TimeFrameDate `json:"id"`
}

type FluffyExtraFilters struct {
	Sort []FluffySort `json:"sort"`
}

type FluffySort struct {
	Dir   Dir       `json:"dir"`  
	Field SortField `json:"field"`
}

type FluffyFilter struct {
	AppointmentID *string        `json:"appointmentId,omitempty"`
	Created       *FluffyCreated `json:"created,omitempty"`      
	End           *string        `json:"end,omitempty"`          
	Services      []string       `json:"services"`               
	SkipUpdated   *bool          `json:"skipUpdated,omitempty"`  
	Start         *string        `json:"start,omitempty"`        
	Workers       []string       `json:"workers"`                
}

type FluffyCreated struct {
	End   string `json:"end"`  
	Start string `json:"start"`
}

type FluffyNetwork struct {
	ID *TimeFrameDate `json:"id"`
}

type AppointmentGetAppointmentsByClientV2Response struct {
	ID      float64                                            `json:"id"`             // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                                             `json:"jsonrpc"`        // версия протокола (2.0)
	Result  []Appointment                                      `json:"result"`         
	Error   *AppointmentGetAppointmentsByClientV2ResponseError `json:"error,omitempty"`// объект, содержащий информацию об ошибке
}

// объект, содержащий информацию об ошибке
//
// Код ошибки авторизации
type AppointmentGetAppointmentsByClientV2ResponseError struct {
	Code    float64 `json:"code"`   // код ошибки
	Data    *Data   `json:"data"`   // дополнительные данные об ошибке
	Message string  `json:"message"`// текстовая информация об ошибке
}

type GetAppointmentsByUser struct {
	Request  AppointmentGetAppointmentsByUserRequest  `json:"request"` 
	Response AppointmentGetAppointmentsByUserResponse `json:"response"`
}

type AppointmentGetAppointmentsByUserRequest struct {
	Cred    *Cred                                         `json:"cred,omitempty"`// авторизационные параметры
	ID      *TimeFrameDate                                `json:"id"`            // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                                        `json:"jsonrpc"`       // версия протокола - 2.0
	Method  string                                        `json:"method"`        // название jsonrpc метода
	Params  AppointmentGetAppointmentsByUserRequestParams `json:"params"`        // параметры запроса
}

type AppointmentGetAppointmentsByUserRequestParams struct {
	Business              *HilariousBusiness     `json:"business,omitempty"`             
	ExtraFilters          *TentacledExtraFilters `json:"extraFilters,omitempty"`         
	FillBusinessData      *bool                  `json:"fill_business_data,omitempty"`   
	Filter                *TentacledFilter       `json:"filter,omitempty"`               
	Network               *TentacledNetwork      `json:"network,omitempty"`              
	Page                  float64                `json:"page"`                           
	PageSize              float64                `json:"pageSize"`                       
	SkipBusinessCancelled *bool                  `json:"skipBusinessCancelled,omitempty"`
}

type HilariousBusiness struct {
	ID *TimeFrameDate `json:"id"`
}

type TentacledExtraFilters struct {
	Sort []TentacledSort `json:"sort"`
}

type TentacledSort struct {
	Dir   Dir       `json:"dir"`  
	Field SortField `json:"field"`
}

type TentacledFilter struct {
	Created     *TentacledCreated `json:"created,omitempty"`    
	End         *string           `json:"end,omitempty"`        
	Services    []string          `json:"services"`             
	SkipUpdated *bool             `json:"skipUpdated,omitempty"`
	Start       *string           `json:"start,omitempty"`      
	Workers     []string          `json:"workers"`              
}

type TentacledCreated struct {
	End   string `json:"end"`  
	Start string `json:"start"`
}

type TentacledNetwork struct {
	ID *TimeFrameDate `json:"id"`
}

type AppointmentGetAppointmentsByUserResponse struct {
	ID      float64                                         `json:"id"`              // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                                          `json:"jsonrpc"`         // версия протокола (2.0)
	Result  *AppointmentGetAppointmentsByUserResponseResult `json:"result,omitempty"`
	Error   *AppointmentGetAppointmentsByUserResponseError  `json:"error,omitempty"` // объект, содержащий информацию об ошибке
}

// объект, содержащий информацию об ошибке
//
// Код ошибки авторизации
type AppointmentGetAppointmentsByUserResponseError struct {
	Code    float64 `json:"code"`   // код ошибки
	Data    *Data   `json:"data"`   // дополнительные данные об ошибке
	Message string  `json:"message"`// текстовая информация об ошибке
}

type AppointmentGetAppointmentsByUserResponseResult struct {
	Data        []Appointment `json:"data"`                 
	Page        float64       `json:"page"`                 
	Total       float64       `json:"total"`                
	Unconfirmed *float64      `json:"unconfirmed,omitempty"`
}

type ReserveAppointment struct {
	Request  AppointmentReserveAppointmentRequest  `json:"request"` 
	Response AppointmentReserveAppointmentResponse `json:"response"`
}

type AppointmentReserveAppointmentRequest struct {
	Cred    *Cred              `json:"cred,omitempty"`// авторизационные параметры
	ID      *TimeFrameDate     `json:"id"`            // значение числового типа для идентификации запроса на сервере
	Jsonrpc string             `json:"jsonrpc"`       // версия протокола - 2.0
	Method  string             `json:"method"`        // название jsonrpc метода
	Params  AppointmentReserve `json:"params"`        // параметры запроса
}

type AppointmentReserve struct {
	Appointment      HilariousAppointment `json:"appointment"`     
	Business         AmbitiousBusiness    `json:"business"`        
	OriginBusinessID *string              `json:"originBusinessID"`
	Resource         PurpleResource       `json:"resource"`        
	Source           string               `json:"source"`          
	Taxonomy         PurpleTaxonomy       `json:"taxonomy"`        
}

type HilariousAppointment struct {
	Duration *float64     `json:"duration,omitempty"`
	Price    *PurplePrice `json:"price,omitempty"`   
	Start    string       `json:"start"`             
}

type PurplePrice struct {
	AdditionalTaxonomyDiscount []FluffyAdditionalTaxonomyDiscount `json:"additionalTaxonomyDiscount"`
	Amount                     *float64                           `json:"amount,omitempty"`          
	Currency                   CurrencyList                       `json:"currency"`                  
	Discount                   *float64                           `json:"discount,omitempty"`        
	DiscountProvider           *DiscountProvider                  `json:"discountProvider,omitempty"`
	DiscountType               *string                            `json:"discountType,omitempty"`    
	OriginalAmount             *float64                           `json:"originalAmount,omitempty"`  
}

type FluffyAdditionalTaxonomyDiscount struct {
	Discount         *float64          `json:"discount,omitempty"`        
	DiscountProvider *DiscountProvider `json:"discountProvider,omitempty"`
	DiscountType     *string           `json:"discountType,omitempty"`    
	TaxonomyID       *string           `json:"taxonomyID,omitempty"`      
}

type AmbitiousBusiness struct {
	ID string `json:"id"`
}

type PurpleResource struct {
	ID *ID `json:"id"`
}

type PurpleTaxonomy struct {
	ID string `json:"id"`
}

type AppointmentReserveAppointmentResponse struct {
	ID      float64                                     `json:"id"`              // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                                      `json:"jsonrpc"`         // версия протокола (2.0)
	Result  *Appointment                                `json:"result,omitempty"`// данные, передаваемые в ответ
	Error   *AppointmentReserveAppointmentResponseError `json:"error,omitempty"` // объект, содержащий информацию об ошибке
}

// объект, содержащий информацию об ошибке
//
// Код ошибки авторизации
type AppointmentReserveAppointmentResponseError struct {
	Code    float64 `json:"code"`   // код ошибки
	Data    *Data   `json:"data"`   // дополнительные данные об ошибке
	Message string  `json:"message"`// текстовая информация об ошибке
}

type StartAppointment struct {
	Request  AppointmentStartAppointmentRequest  `json:"request"` 
	Response AppointmentStartAppointmentResponse `json:"response"`
}

type AppointmentStartAppointmentRequest struct {
	Cred    *Cred                  `json:"cred,omitempty"`// авторизационные параметры
	ID      *TimeFrameDate         `json:"id"`            // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                 `json:"jsonrpc"`       // версия протокола - 2.0
	Method  string                 `json:"method"`        // название jsonrpc метода
	Params  StartAppointmentParams `json:"params"`        // параметры запроса
}

type StartAppointmentParams struct {
	Appointment AmbitiousAppointment `json:"appointment"`
	Business    CunningBusiness      `json:"business"`   
}

type AmbitiousAppointment struct {
	ID string `json:"id"`
}

type CunningBusiness struct {
	ID string `json:"id"`
}

type AppointmentStartAppointmentResponse struct {
	ID      float64                                   `json:"id"`              // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                                    `json:"jsonrpc"`         // версия протокола (2.0)
	Result  *bool                                     `json:"result,omitempty"`// данные, передаваемые в ответ
	Error   *AppointmentStartAppointmentResponseError `json:"error,omitempty"` // объект, содержащий информацию об ошибке
}

// объект, содержащий информацию об ошибке
//
// Код ошибки авторизации
type AppointmentStartAppointmentResponseError struct {
	Code    float64 `json:"code"`   // код ошибки
	Data    *Data   `json:"data"`   // дополнительные данные об ошибке
	Message string  `json:"message"`// текстовая информация об ошибке
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
	NetworkID        *TimeFrameDate  `json:"networkID"`                   // идентификатор сети
	Resource         *FluffyResource `json:"resource,omitempty"`          
	Taxonomy         *FluffyTaxonomy `json:"taxonomy,omitempty"`          
	WithBusinessInfo *bool           `json:"with_business_info,omitempty"`// Если передано true - возвращает информацию business_info/general_info по каждому бизнесу; в массиве businesses
}

type FluffyResource struct {
	ID *string `json:"id,omitempty"`// идентификатор работника, если передано - возвращает все бизнесы нетворка где есть; работник с таким ключем
}

type FluffyTaxonomy struct {
	ID *string `json:"id,omitempty"`// идентификатор услуги, если передано - возвращает все бизнесы нетворка с такой услугой
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
	Code    float64 `json:"code"`   // код ошибки
	Data    *Data   `json:"data"`   // дополнительные данные об ошибке
	Message string  `json:"message"`// текстовая информация об ошибке
}

type BusinessGetNetworkDataResponseResult struct {
	BusinessConfiguration         map[string]interface{}         `json:"businessConfiguration"`                  
	Businesses                    []BusinessRefInNetwork         `json:"businesses"`                             
	ClientVIPPhones               []string                       `json:"clientVIPPhones"`                        
	GrantGroups                   []map[string]interface{}       `json:"grantGroups"`                            
	IntegrationData               *ResultIntegrationData         `json:"integrationData,omitempty"`              
	NetworkClientBlockingSettings *NetworkClientBlockingSettings `json:"networkClientBlockingSettings,omitempty"`
	NetworkID                     string                         `json:"networkID"`                              
	NetworkInfo                   map[string]interface{}         `json:"networkInfo"`                            
	NetworkName                   *string                        `json:"networkName,omitempty"`                  
	NetworkWidgetConfiguration    []NetworkWidgetConfiguration   `json:"networkWidgetConfiguration"`             // настройки показа сети в зависимости от источника, на котором размещено приложение
}

// указатель на бизнес в сети
type BusinessRefInNetwork struct {
	ID                *string    `json:"_id,omitempty"`    
	BusinessID        string     `json:"businessID"`       
	Info              *InfoClass `json:"info,omitempty"`   
	IsMapBusiness     bool       `json:"isMapBusiness"`    
	Order             *float64   `json:"order,omitempty"`  
	VirtualTaxonomies []string   `json:"virtualTaxonomies"`
}

type InfoClass struct {
	Active                          *bool                             `json:"active,omitempty"`                       
	ActiveResourceCount             *float64                          `json:"activeResourceCount,omitempty"`          // колличество активных рабоников, возвращается при вызове через get_network_data при; передаче ключа работника или услуги
	ActiveTaxonomyCount             *float64                          `json:"activeTaxonomyCount,omitempty"`          // колличество активных услуг, возвращается при вызове через get_network_data при передаче; ключа работника или услуги
	AdditionalSettings              *InfoAdditionalSettings           `json:"additionalSettings,omitempty"`           
	AllowCategoryBooking            *bool                             `json:"allowCategoryBooking,omitempty"`         
	BusinessBackofficeConfiguration *InfoBackofficeConfigurationClass `json:"backoffice_configuration,omitempty"`     
	BackofficeConfiguration         *InfoBackofficeConfiguration      `json:"backofficeConfiguration,omitempty"`      
	BackofficeType                  *BackofficeType                   `json:"backofficeType,omitempty"`               
	Cabinets                        []InfoCabinet                     `json:"cabinets"`                               
	CabinetsEnabled                 *bool                             `json:"cabinetsEnabled,omitempty"`              
	CallbackWidgetConfiguration     *InfoCallbackWidgetConfiguration  `json:"callback_widget_configuration,omitempty"`
	Consumables                     []InfoConsumable                  `json:"consumables"`                            
	CreatedOn                       *string                           `json:"created_on,omitempty"`                   
	DefaultFilteredWorkers          []string                          `json:"defaultFilteredWorkers"`                 
	Departments                     []InfoDepartment                  `json:"departments"`                            
	Designs                         []map[string]interface{}          `json:"designs"`                                
	ExtraID                         *string                           `json:"extraID,omitempty"`                      
	FlatTaxonomyDisplay             *bool                             `json:"flatTaxonomyDisplay,omitempty"`          
	GeneralInfo                     BusinessInfo                      `json:"general_info"`                           
	Group                           *Group                            `json:"group,omitempty"`                        
	ID                              *string                           `json:"id,omitempty"`                           
	IntegrationData                 map[string]interface{}            `json:"integration_data,omitempty"`             
	MiniWidgetConfiguration         InfoMiniWidgetConfiguration       `json:"mini_widget_configuration"`              
	MobileData                      []interface{}                     `json:"mobileData"`                             
	Notifications                   []interface{}                     `json:"notifications"`                          
	Resources                       []Resource                        `json:"resources"`                              
	StateLevelHolidaysNotWorking    *bool                             `json:"stateLevelHolidaysNotWorking,omitempty"` 
	Taxonomies                      []InfoTaxonomy                    `json:"taxonomies"`                             
	TaxonomiesComplex               []InfoTaxonomiesComplex           `json:"taxonomiesComplex"`                      
	TaxonomyTreeCapacity            []map[string]interface{}          `json:"taxonomy_tree_capacity"`                 
	TopServices                     *InfoTopServices                  `json:"top_services,omitempty"`                 
	Vertical                        *string                           `json:"vertical,omitempty"`                     
	WidgetConfiguration             InfoWidgetConfiguration           `json:"widget_configuration"`                   
	YandexFeedType                  *string                           `json:"yandexFeedType,omitempty"`               
}

type InfoAdditionalSettings struct {
	AppointmentExtensionAmount *float64                  `json:"appointmentExtensionAmount,omitempty"`
	AppointmentExtensionType   *AppointmentExtensionType `json:"appointmentExtensionType,omitempty"`  
}

type InfoBackofficeConfiguration struct {
	AdjacentTaxonomiesTreshold                      *float64                   `json:"adjacentTaxonomiesTreshold,omitempty"`                     
	AllowHideServiceForBooking                      *bool                      `json:"allowHideServiceForBooking,omitempty"`                     
	AllowHideWorkersFromSchdeule                    *bool                      `json:"allowHideWorkersFromSchdeule,omitempty"`                   
	AllowSMSTranslit                                *bool                      `json:"allowSmsTranslit,omitempty"`                               
	AppointmentFutureMoving                         *bool                      `json:"appointmentFutureMoving,omitempty"`                        
	BlockNotificationForAnyAvailableAdjacentService *bool                      `json:"blockNotificationForAnyAvailableAdjacentService,omitempty"`
	CabinetsEnabled                                 *bool                      `json:"cabinetsEnabled,omitempty"`                                
	CheckClientOverlapping                          *bool                      `json:"checkClientOverlapping,omitempty"`                         
	CustomOnlinePaymentConfirmationTemplate         *string                    `json:"customOnlinePaymentConfirmationTemplate,omitempty"`        
	DefaultGTScheduleDayView                        *bool                      `json:"defaultGTScheduleDayView,omitempty"`                       
	DisableAppointmentClientInlineEditor            *bool                      `json:"disableAppointmentClientInlineEditor,omitempty"`           
	EditAppExtraID                                  *bool                      `json:"editAppExtraId,omitempty"`                                 
	EditTaxonomyChildren                            *bool                      `json:"editTaxonomyChildren,omitempty"`                           
	EditTaxonomyVisitType                           *bool                      `json:"editTaxonomyVisitType,omitempty"`                          
	EnableBlackList                                 *bool                      `json:"enableBlackList,omitempty"`                                
	EnableCalculateShedule                          *bool                      `json:"enableCalculateShedule,omitempty"`                         
	EnableClientCard                                *bool                      `json:"enableClientCard,omitempty"`                               
	EnableClientLanguage                            *bool                      `json:"enableClientLanguage,omitempty"`                           
	EnableClientMedicalCardReport                   *bool                      `json:"enableClientMedicalCardReport,omitempty"`                  
	EnableCustomOnlinePaymentConfirmation           *bool                      `json:"enableCustomOnlinePaymentConfirmation,omitempty"`          
	EnableExtendedPhone                             *bool                      `json:"enableExtendedPhone,omitempty"`                            
	EnableExtendedRecordsClientStatistics           *bool                      `json:"enableExtendedRecordsClientStatistics,omitempty"`          
	EnableInvoice                                   *bool                      `json:"enableInvoice,omitempty"`                                  
	EnableMasterImportance                          *bool                      `json:"enableMasterImportance,omitempty"`                         
	EnablePhoneNationalMode                         *bool                      `json:"enablePhoneNationalMode,omitempty"`                        
	EnablePrintingReportRecordsScreen               *bool                      `json:"enablePrintingReportRecordsScreen,omitempty"`              
	EnableServiceOrModeFilter                       *bool                      `json:"enableServiceOrModeFilter,omitempty"`                      
	EnableServiceTimeLimit                          *bool                      `json:"enableServiceTimeLimit,omitempty"`                         
	EnableSourceChoice                              *bool                      `json:"enableSourceChoice,omitempty"`                             
	EnableTaxonomyChildrenAgeCheck                  *bool                      `json:"enableTaxonomyChildrenAgeCheck,omitempty"`                 
	EnableTelemed                                   *bool                      `json:"enableTelemed,omitempty"`                                  
	ExportToExcelRemovedClients                     *bool                      `json:"exportToExcelRemovedClients,omitempty"`                    
	FeedbackCustomerPortalMessage                   *string                    `json:"feedbackCustomerPortalMessage,omitempty"`                  
	FeedbackCustomerPortalThankYouMessage           *string                    `json:"feedbackCustomerPortalThankYouMessage,omitempty"`          
	FeedbackCustomerPortalTitle                     *string                    `json:"feedbackCustomerPortalTitle,omitempty"`                    
	FeedBackMinRating                               *FeedBackMinRating         `json:"feedBackMinRating,omitempty"`                              
	FinID                                           *string                    `json:"finId,omitempty"`                                          
	FinName                                         *string                    `json:"finName,omitempty"`                                        
	HideCustomerPortalFooter                        *bool                      `json:"hideCustomerPortalFooter,omitempty"`                       
	HighlightedResource                             *bool                      `json:"highlightedResource,omitempty"`                            
	InvoiceCondition                                []AppointmentClientPayment `json:"invoiceCondition"`                                         
	InvoiceProvider                                 *InvoiceProvider           `json:"invoiceProvider,omitempty"`                                
	ManualExceptionSupport                          *bool                      `json:"manualExceptionSupport,omitempty"`                         
	NoInternetAlert                                 *bool                      `json:"noInternetAlert,omitempty"`                                
	PastTimeEdit                                    *float64                   `json:"pastTimeEdit,omitempty"`                                   
	PaymentProvider                                 *PaymentProvider           `json:"paymentProvider,omitempty"`                                
	ReadonlyResourceSchedule                        *bool                      `json:"readonlyResourceSchedule,omitempty"`                       
	ResourceSurnameFirst                            *bool                      `json:"resourceSurnameFirst,omitempty"`                           
	ResourceTimetableType                           *ResourceTimetableType     `json:"resourceTimetableType,omitempty"`                          
	ResoureLoginHideCancelledAppointment            *bool                      `json:"resoureLoginHideCancelledAppointment,omitempty"`           
	RevisionVersion                                 *float64                   `json:"revisionVersion,omitempty"`                                
	SchduleWeekViewIsDefault                        *bool                      `json:"schduleWeekViewIsDefault,omitempty"`                       
	ScheduleDefaultWorkersLimit                     *float64                   `json:"scheduleDefaultWorkersLimit,omitempty"`                    
	ScheduleDefaultWorkersLimitDay                  *float64                   `json:"scheduleDefaultWorkersLimitDay"`                           
	ScheduleDefaultWorkersLimitWeek                 *float64                   `json:"scheduleDefaultWorkersLimitWeek"`                          
	SchedulerWeekViewType                           *SchedulerWeekViewType     `json:"schedulerWeekViewType,omitempty"`                          
	ScheduleWorkerHours                             *bool                      `json:"scheduleWorkerHours,omitempty"`                            
	ShowAdditionalFields                            *bool                      `json:"showAdditionalFields,omitempty"`                           
	ShowAddress                                     *bool                      `json:"showAddress,omitempty"`                                    
	ShowBirthDate                                   *bool                      `json:"showBirthDate,omitempty"`                                  
	ShowClientAddress                               *bool                      `json:"showClientAddress,omitempty"`                              
	ShowClientAppear                                *bool                      `json:"showClientAppear,omitempty"`                               
	ShowClientAppearOnSchedule                      *bool                      `json:"showClientAppearOnSchedule,omitempty"`                     
	ShowClientBirthdayFilter                        *bool                      `json:"showClientBirthdayFilter,omitempty"`                       
	ShowClientContractNumber                        *bool                      `json:"showClientContractNumber,omitempty"`                       
	ShowClientImage                                 *bool                      `json:"showClientImage,omitempty"`                                
	ShowClientPayment                               *bool                      `json:"showClientPayment,omitempty"`                              
	ShowCreatedUsername                             *bool                      `json:"showCreatedUsername,omitempty"`                            
	ShowDefaulterBlockscreen                        *bool                      `json:"showDefaulterBlockscreen,omitempty"`                       
	ShowDeliveryStatus                              *bool                      `json:"showDeliveryStatus,omitempty"`                             
	ShowDepartmentFilter                            *bool                      `json:"showDepartmentFilter,omitempty"`                           
	ShowDepartments                                 *bool                      `json:"showDepartments,omitempty"`                                
	ShowDepartmentsConfiguration                    *bool                      `json:"showDepartmentsConfiguration,omitempty"`                   
	ShowEmail                                       *bool                      `json:"showEmail,omitempty"`                                      
	ShowExtraClientInfo                             *bool                      `json:"showExtraClientInfo,omitempty"`                            
	ShowFax                                         *bool                      `json:"showFax,omitempty"`                                        
	ShowFiredWorkerAppointmentAlert                 *bool                      `json:"showFiredWorkerAppointmentAlert,omitempty"`                
	ShowFirstAvailableSlot                          *bool                      `json:"showFirstAvailableSlot,omitempty"`                         
	ShowGapWindow                                   *bool                      `json:"showGapWindow,omitempty"`                                  
	ShowGender                                      *bool                      `json:"showGender,omitempty"`                                     
	ShowGenderInRecords                             *bool                      `json:"showGenderInRecords,omitempty"`                            
	ShowGeneratableReportsScreen                    *bool                      `json:"showGeneratableReportsScreen,omitempty"`                   
	ShowGuaranteeLettersScreen                      *bool                      `json:"showGuaranteeLettersScreen,omitempty"`                     
	ShowHouseNumber                                 *bool                      `json:"showHouseNumber,omitempty"`                                
	ShowIsraelCity                                  *bool                      `json:"showIsraelCity,omitempty"`                                 
	ShowKupatHolim                                  *bool                      `json:"showKupatHolim,omitempty"`                                 
	ShowLeadsScreen                                 *bool                      `json:"showLeadsScreen,omitempty"`                                
	ShowManualChanges                               *bool                      `json:"showManualChanges,omitempty"`                              
	ShowPartnersContractScreen                      *bool                      `json:"showPartnersContractScreen,omitempty"`                     
	ShowPassportID                                  *bool                      `json:"showPassportId,omitempty"`                                 
	ShowRooms                                       *bool                      `json:"showRooms,omitempty"`                                      
	ShowSeasonTickets                               *bool                      `json:"showSeasonTickets,omitempty"`                              
	ShowTaxonomyChildren                            *bool                      `json:"showTaxonomyChildren,omitempty"`                           
	ShowTaxonomyLocalization                        *bool                      `json:"showTaxonomyLocalization,omitempty"`                       
	ShowTaxonomyVisitType                           *bool                      `json:"showTaxonomyVisitType,omitempty"`                          
	ShowTestRecord                                  *bool                      `json:"showTestRecord,omitempty"`                                 
	ShowUTM                                         *bool                      `json:"showUTM,omitempty"`                                        
	ShowWidgetColorTheme                            *bool                      `json:"showWidgetColorTheme,omitempty"`                           
	ShowWorkerDescriptionInEvent                    *bool                      `json:"showWorkerDescriptionInEvent,omitempty"`                   
	ShowWorkerExtraID                               *bool                      `json:"showWorkerExtraId,omitempty"`                              
	ShowWorkerStatus                                *bool                      `json:"showWorkerStatus,omitempty"`                               
	SkipAppointmentPriceUpdate                      *bool                      `json:"skipAppointmentPriceUpdate,omitempty"`                     
	SkipCancelIfClientNotAppear                     *bool                      `json:"skipCancelIfClientNotAppear,omitempty"`                    
	SkipServiceFiltering                            *bool                      `json:"skipServiceFiltering,omitempty"`                           
	SplitFullNameXlsExport                          *bool                      `json:"splitFullNameXlsExport,omitempty"`                         
	StateLevelHolidays                              []map[string]interface{}   `json:"stateLevelHolidays"`                                       
	StateLevelHolidaysNotWorking                    *bool                      `json:"stateLevelHolidaysNotWorking,omitempty"`                   
	TaxonomyChildrenMaxAge                          *float64                   `json:"taxonomyChildrenMaxAge,omitempty"`                         
	TelemedApplication                              *PurpleTelemedApplication  `json:"telemedApplication,omitempty"`                             
	TelemedProvider                                 *TelemedProvider           `json:"telemedProvider,omitempty"`                                
	UseAdditionalDurations                          *bool                      `json:"useAdditionalDurations,omitempty"`                         
	UseAdjacentTaxonomies                           *bool                      `json:"useAdjacentTaxonomies,omitempty"`                          
	UseAdjacentTaxonomiesSlotSplitting              *bool                      `json:"useAdjacentTaxonomiesSlotSplitting,omitempty"`             
	UseGtAppMethod                                  *bool                      `json:"useGtAppMethod,omitempty"`                                 
	WorkWeekEnd                                     *float64                   `json:"workWeekEnd,omitempty"`                                    
	WorkWeekStart                                   *float64                   `json:"workWeekStart,omitempty"`                                  
}

type PurpleTelemedApplication struct {
	AppleAppName  *string `json:"appleAppName,omitempty"` 
	GoogleAppName *string `json:"googleAppName,omitempty"`
	URLAppSchema  *string `json:"urlAppSchema,omitempty"` 
}

type InfoBackofficeConfigurationClass struct {
	EnableExtendedPhone     *bool                  `json:"enableExtendedPhone,omitempty"`    
	EnableMasterImportance  *bool                  `json:"enableMasterImportance,omitempty"` 
	EnablePhoneNationalMode *bool                  `json:"enablePhoneNationalMode,omitempty"`
	ResourceTimetableType   *ResourceTimetableType `json:"resourceTimetableType,omitempty"`  
}

type InfoCabinet struct {
	Active *bool   `json:"active,omitempty"`
	ID     *string `json:"id,omitempty"`    
	Name   *string `json:"name,omitempty"`  
}

type InfoCallbackWidgetConfiguration struct {
	Title1 *string `json:"title1,omitempty"`
	Title2 *string `json:"title2,omitempty"`
}

type InfoConsumable struct {
	ExtraID  string  `json:"extraID"` 
	Name     string  `json:"name"`    
	Quantity float64 `json:"quantity"`
}

type InfoDepartment struct {
	ID           string   `json:"id"`           
	DepartmentID *float64 `json:"id_,omitempty"`
	Name         string   `json:"name"`         
}

// Содержит детальную информацию о бизнесе — название, адрес, график работы и другое
type BusinessInfo struct {
	AcceptedCurrency           []CurrencyList           `json:"accepted_currency"`                   
	AdditionalInfo             *string                  `json:"additional_info"`                     
	AdditionalFields           []AdditionalFields       `json:"additionalFields"`                    
	Address                    []AddressSchema          `json:"address"`                             // Адреса компании или филиала
	AlignMinBookingTime        *bool                    `json:"align_min_booking_time"`              
	AutoAcceptAppointment      *bool                    `json:"autoAcceptAppointment,omitempty"`     
	BusinessShowcaseAliases    []BusinessShowcaseAlias  `json:"businessShowcaseAliases"`             // если данный бизнес является витриной, идентификаторы бизнесов, которые входят в витрину
	ContactName                *string                  `json:"contactName"`                         
	DateJoined                 *string                  `json:"date_joined,omitempty"`               
	Description                *string                  `json:"description,omitempty"`               
	Email                      *string                  `json:"email,omitempty"`                     // Список e-mail адресов компании или филиала
	EventEditorMinutesTick     *float64                 `json:"eventEditorMinutesTick,omitempty"`    
	Fax                        []FaxElement             `json:"fax"`                                 
	Images                     []string                 `json:"images"`                              
	InstantMessaging           []map[string]interface{} `json:"instant_messaging"`                   
	IsShowcase                 *bool                    `json:"isShowcase,omitempty"`                // является ли данный бизнес витриной
	Language                   *LanguageList            `json:"language,omitempty"`                  
	LogoURL                    *string                  `json:"logo_url"`                            
	MarketingNotifications     *MarketingNotifications  `json:"marketingNotifications,omitempty"`    
	Metro                      *Metro                   `json:"metro,omitempty"`                     
	MinBookingTime             *float64                 `json:"min_booking_time"`                    
	Mobile                     []FaxElement             `json:"mobile"`                              // Список телефонов бизнеса
	Name                       *string                  `json:"name,omitempty"`                      // Название бизнеса
	NetworkID                  *float64                 `json:"networkID"`                           
	NewboEnabledFor            []string                 `json:"newboEnabledFor"`                     
	PaymentMethods             *PaymentMethods          `json:"paymentMethods,omitempty"`            
	Phone                      []FaxElement             `json:"phone"`                               // Список телефонов бизнеса
	PhoneMask                  *string                  `json:"phone_mask"`                          
	PricingType                *PricingType             `json:"pricingType,omitempty"`               
	RevisionVersion            *float64                 `json:"revisionVersion,omitempty"`           
	SchedulerTick              *float64                 `json:"schedulerTick,omitempty"`             
	ShortName                  *string                  `json:"shortName"`                           // Короткое название филиала
	ShowAppointmentColor       *bool                    `json:"showAppointmentColor,omitempty"`      
	ShowAppointmentTooltip     *bool                    `json:"showAppointmentTooltip,omitempty"`    
	ShowcaseBusinessData       []ShowcaseBusinessDatum  `json:"showcaseBusinessData"`                // если данный бизнес является витриной, здесь будет содержаться информация по бизнесам из; витрины
	Showcases                  []ShowcaseElement        `json:"showcases"`                           // идентификаторы витрин, в которых участвует данный бизнес
	ShowResourceWorkStatistics *bool                    `json:"showResourceWorkStatistics,omitempty"`
	ShowWorkerProfession       *bool                    `json:"showWorkerProfession,omitempty"`      
	SkipBilling                *bool                    `json:"skipBilling,omitempty"`               
	SMSDuplicateFilter         *SMSDuplicateFilter      `json:"smsDuplicateFilter,omitempty"`        
	SocialNetwork              []SocialNetworkSchema    `json:"social_network"`                      
	Timetable                  *Timetable               `json:"timetable,omitempty"`                 
	Timezone                   *string                  `json:"timezone"`                            
	VerticalTranslation        *VerticalTranslation     `json:"verticalTranslation,omitempty"`       
	Website                    *string                  `json:"website"`                             
}

type AdditionalFields struct {
	Name          string              `json:"name"`                   
	RequiredField *bool               `json:"requiredField,omitempty"`
	ShortName     string              `json:"shortName"`              
	Type          AdditionalFieldType `json:"type"`                   
	Value         *string             `json:"value,omitempty"`        
}

type AddressSchema struct {
	Address          *string                   `json:"address,omitempty"`            
	AddressAdd       *string                   `json:"address_add,omitempty"`        
	AdminArea        *string                   `json:"admin_area,omitempty"`         
	AdminAreaType    *string                   `json:"admin_area_type,omitempty"`    
	Building         *string                   `json:"building,omitempty"`           
	Corps            *string                   `json:"corps,omitempty"`              
	Country          CountryEnum               `json:"country"`                      
	Group            *string                   `json:"group,omitempty"`              
	HouseAdd         *string                   `json:"house_add,omitempty"`          
	Kilometer        *string                   `json:"kilometer,omitempty"`          
	Latitude         *string                   `json:"latitude,omitempty"`           
	Locality         *string                   `json:"locality,omitempty"`           
	LocalityType     *string                   `json:"locality_type,omitempty"`      
	Longitude        *string                   `json:"longitude,omitempty"`          
	MetroStations    []FullAddressMetroStation `json:"metroStations"`                
	Number           *string                   `json:"number,omitempty"`             
	Office           *string                   `json:"office,omitempty"`             
	Possesion        *string                   `json:"possesion,omitempty"`          
	Street           *string                   `json:"street,omitempty"`             
	StreetType       *string                   `json:"street_type,omitempty"`        
	SubAdminArea     *string                   `json:"sub_admin_area,omitempty"`     
	SubAdminAreaType *string                   `json:"sub_admin_area_type,omitempty"`
	SubLocality      *string                   `json:"sub_locality,omitempty"`       
	SubLocalityType  *string                   `json:"sub_locality_type,omitempty"`  
	Way              *string                   `json:"way,omitempty"`                
	ZipCode          *string                   `json:"zip_code,omitempty"`           
}

type FullAddressMetroStation struct {
	ID          *string `json:"_id,omitempty"`        
	Description *string `json:"description,omitempty"`
	Name        string  `json:"name"`                 
}

type BusinessShowcaseAlias struct {
	InternalID *string `json:"internalID,omitempty"`
}

type FaxElement struct {
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

type ShowcaseBusinessDatum struct {
	Address        []AddressSchema `json:"address"`             // Адреса компании или филиала
	Email          *string         `json:"email,omitempty"`     // Список e-mail адресов компании или филиала
	InternalID     *string         `json:"internalID,omitempty"`
	Language       *LanguageList   `json:"language,omitempty"`  
	Name           *string         `json:"name,omitempty"`      // Название бизнеса
	Phone          []FaxElement    `json:"phone"`               // Список телефонов бизнеса
	ReceptionTypes []string        `json:"receptionTypes"`      // Список видов приема филиала
	Timezone       *string         `json:"timezone,omitempty"`  
}

type ShowcaseElement struct {
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

type InfoMiniWidgetConfiguration struct {
	Fields []FieldElement `json:"fields"`          
	Title1 *string        `json:"title1,omitempty"`
	Title2 *string        `json:"title2,omitempty"`
}

// Данные о работнике бизнеса
type Resource struct {
	AdditionalExtraID  []string                     `json:"additionalExtraId"`            // информация из внешней информационной системы как есть (при интеграции)
	BadIconResolution  *bool                        `json:"badIconResolution,omitempty"`  
	Capacity           float64                      `json:"capacity"`                     // Количество записей, которые может принимать работник единовременно
	Color              *string                      `json:"color,omitempty"`              // цвет колонки с работником
	Degree             *string                      `json:"degree,omitempty"`             
	DenyWidgetBooking  *bool                        `json:"denyWidgetBooking,omitempty"`  
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
	Phone              []FaxElement                 `json:"phone"`                        
	Profession         *string                      `json:"profession,omitempty"`         // информация о профессии работника, используется в Бекофис
	Profile            *ИнформацияОПрофилеРаботника `json:"profile,omitempty"`            
	Rating             *float64                     `json:"rating,omitempty"`             // Рейтинг работника
	ReadonlyTaxonomies []string                     `json:"readonlyTaxonomies"`           
	RevisionVersion    float64                      `json:"revisionVersion"`              // Версия изменений документа
	ScheduleIsEmpty    *bool                        `json:"scheduleIsEmpty,omitempty"`    
	SiteID             *string                      `json:"siteId,omitempty"`             // информация из внешней информационной системы как есть (при интеграции)
	SMSEnabled         *bool                        `json:"smsEnabled,omitempty"`         // включена ли отправка смс уведомлений для данного работника
	Status             *ResourceStatus              `json:"status,omitempty"`             
	Surname            string                       `json:"surname"`                      // фамилия и отчество работника
	Taxonomies         []string                     `json:"taxonomies"`                   // массив идентификаторов услуг, которые выполняет работник
	TaxonomyChildren   []ResourceTaxonomyChildren   `json:"taxonomyChildren"`             // массив свойств выполнения услуги как детской, как взрослой или как общей (если указаны; оба или не указаны вовсе для услуги)
	TaxonomyLevels     []ResourceTaxonomyLevel      `json:"taxonomyLevels"`               // массив уровня скорости выполнения услуги (см так же Resource level)
	TelemedData        *ResourceTelemedData         `json:"telemedData,omitempty"`        
	TelemedWorker      *bool                        `json:"telemedWorker,omitempty"`      
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
	Address                    []AddressSchema          `json:"address"`                             // Адреса компании или филиала
	AlignMinBookingTime        *bool                    `json:"align_min_booking_time"`              
	AutoAcceptAppointment      *bool                    `json:"autoAcceptAppointment,omitempty"`     
	BusinessShowcaseAliases    []BusinessShowcaseAlias  `json:"businessShowcaseAliases"`             // если данный бизнес является витриной, идентификаторы бизнесов, которые входят в витрину
	ContactName                *string                  `json:"contactName"`                         
	DateJoined                 *string                  `json:"date_joined,omitempty"`               
	Description                *string                  `json:"description,omitempty"`               
	Email                      *string                  `json:"email,omitempty"`                     // Список e-mail адресов компании или филиала
	EventEditorMinutesTick     *float64                 `json:"eventEditorMinutesTick,omitempty"`    
	Fax                        []FaxElement             `json:"fax"`                                 
	Images                     []string                 `json:"images"`                              
	InstantMessaging           []map[string]interface{} `json:"instant_messaging"`                   
	IsShowcase                 *bool                    `json:"isShowcase,omitempty"`                // является ли данный бизнес витриной
	Language                   *LanguageList            `json:"language,omitempty"`                  
	LogoURL                    *string                  `json:"logo_url"`                            
	MarketingNotifications     *MarketingNotifications  `json:"marketingNotifications,omitempty"`    
	Metro                      *Metro                   `json:"metro,omitempty"`                     
	MinBookingTime             *float64                 `json:"min_booking_time"`                    
	Mobile                     []FaxElement             `json:"mobile"`                              // Список телефонов бизнеса
	Name                       *string                  `json:"name,omitempty"`                      // Название бизнеса
	NetworkID                  *float64                 `json:"networkID"`                           
	NewboEnabledFor            []string                 `json:"newboEnabledFor"`                     
	PaymentMethods             *PaymentMethods          `json:"paymentMethods,omitempty"`            
	Phone                      []FaxElement             `json:"phone"`                               // Список телефонов бизнеса
	PhoneMask                  *string                  `json:"phone_mask"`                          
	PricingType                *PricingType             `json:"pricingType,omitempty"`               
	RevisionVersion            *float64                 `json:"revisionVersion,omitempty"`           
	SchedulerTick              *float64                 `json:"schedulerTick,omitempty"`             
	ShortName                  *string                  `json:"shortName"`                           // Короткое название филиала
	ShowAppointmentColor       *bool                    `json:"showAppointmentColor,omitempty"`      
	ShowAppointmentTooltip     *bool                    `json:"showAppointmentTooltip,omitempty"`    
	ShowcaseBusinessData       []ShowcaseBusinessDatum  `json:"showcaseBusinessData"`                // если данный бизнес является витриной, здесь будет содержаться информация по бизнесам из; витрины
	Showcases                  []ShowcaseElement        `json:"showcases"`                           // идентификаторы витрин, в которых участвует данный бизнес
	ShowResourceWorkStatistics *bool                    `json:"showResourceWorkStatistics,omitempty"`
	ShowWorkerProfession       *bool                    `json:"showWorkerProfession,omitempty"`      
	SkipBilling                *bool                    `json:"skipBilling,omitempty"`               
	SMSDuplicateFilter         *SMSDuplicateFilter      `json:"smsDuplicateFilter,omitempty"`        
	SocialNetwork              []SocialNetworkSchema    `json:"social_network"`                      
	Timetable                  *Timetable               `json:"timetable,omitempty"`                 
	Timezone                   *string                  `json:"timezone"`                            
	VerticalTranslation        *VerticalTranslation     `json:"verticalTranslation,omitempty"`       
	Website                    *string                  `json:"website"`                             
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

type ResourceTelemedData struct {
	Active *bool   `json:"active,omitempty"`
	ID     *string `json:"id,omitempty"`    
}

type InfoTaxonomy struct {
	Active                        *bool                           `json:"active,omitempty"`                       
	AdditionalDurations           []PurpleAdditionalDuration      `json:"additionalDurations"`                    
	AdditionalPrices              []PurpleBusinessTaxonomyPrice   `json:"additionalPrices"`                       
	AdditionalProducts            []PurpleBusinessTaxonomyProduct `json:"additionalProducts"`                     
	AdditionalTaxonomyExtraID     []map[string]interface{}        `json:"additionalTaxonomyExtraId"`              
	AdjacentSameTimeStart         *bool                           `json:"adjacentSameTimeStart,omitempty"`        
	AdjacentTaxonomies            []PurpleAdjacentTaxonomy        `json:"adjacentTaxonomies"`                     
	Alias                         map[string]interface{}          `json:"alias,omitempty"`                        
	AllowBookingInBO              *bool                           `json:"allowBookingInBO,omitempty"`             
	AllowNextBookingCount         *float64                        `json:"allowNextBookingCount,omitempty"`        
	AllowNextBookingInDays        *float64                        `json:"allowNextBookingInDays,omitempty"`       
	AllowNextBookingInDaysText    *string                         `json:"allowNextBookingInDaysText,omitempty"`   
	Cabinets                      []string                        `json:"cabinets"`                               
	CabinetsEnabled               *bool                           `json:"cabinetsEnabled,omitempty"`              
	Capacity                      *float64                        `json:"capacity,omitempty"`                     
	CapacityDecrease              *float64                        `json:"capacity_decrease,omitempty"`            
	ChargeUnitsStep               *float64                        `json:"chargeUnitsStep,omitempty"`              
	ChildrenTaxonomyTypes         []ChildrenTaxonomyType          `json:"childrenTaxonomyTypes"`                  
	Color                         *string                         `json:"color,omitempty"`                        
	ConfirmationAlert             *string                         `json:"confirmationAlert,omitempty"`            
	ConfirmationEmailAlert        *string                         `json:"confirmationEmailAlert,omitempty"`       
	ConfirmationSMSAlert          *string                         `json:"confirmationSmsAlert,omitempty"`         
	DateLimits                    []PurpleDateLimit               `json:"dateLimits"`                             
	DateLimitType                 *DateLimitType                  `json:"dateLimitType,omitempty"`                
	Designs                       []string                        `json:"designs"`                                
	DisableClientSMSNotifications *bool                           `json:"disableClientSmsNotifications,omitempty"`
	Discounts                     []Discount                      `json:"discounts"`                              
	DisplayInWidget               *bool                           `json:"displayInWidget,omitempty"`              
	Duration                      *float64                        `json:"duration,omitempty"`                     
	Exceptions                    []interface{}                   `json:"exceptions"`                             
	ExtraDescription              *string                         `json:"extraDescription,omitempty"`             
	ExtraID                       *string                         `json:"extraId,omitempty"`                      
	ExtraLink                     *string                         `json:"extraLink,omitempty"`                    
	ForPay                        *bool                           `json:"forPay,omitempty"`                       
	ID                            *string                         `json:"id,omitempty"`                           
	Images                        []string                        `json:"images"`                                 
	IsOther                       *bool                           `json:"isOther,omitempty"`                      
	IsTelemed                     *bool                           `json:"isTelemed,omitempty"`                    
	LastModified                  *string                         `json:"lastModified,omitempty"`                 
	Leaves                        []string                        `json:"leaves"`                                 
	ManualChanges                 *bool                           `json:"manualChanges,omitempty"`                
	NewTaxonomy                   *bool                           `json:"newTaxonomy,omitempty"`                  
	OnlineMode                    *OnlineMode                     `json:"onlineMode,omitempty"`                   
	OnlyAfterTaxonomies           []string                        `json:"onlyAfterTaxonomies"`                    
	Order                         *float64                        `json:"order,omitempty"`                        
	ParallelTaxonomies            []string                        `json:"parallelTaxonomies"`                     
	Popularity                    *float64                        `json:"popularity,omitempty"`                   
	Price                         *FluffyPrice                    `json:"price,omitempty"`                        
	PriceLink                     *string                         `json:"priceLink,omitempty"`                    
	ReceptionTypes                []string                        `json:"receptionTypes"`                         // Список видов приема услуги
	Rooms                         []string                        `json:"rooms"`                                  
	ShowcaseItems                 []PurpleShowcaseItem            `json:"showcaseItems"`                          
	Showcases                     []PurpleTaxonomyShowcase        `json:"showcases"`                              
	ShowcaseTaxonomyID            *string                         `json:"showcaseTaxonomyID,omitempty"`           // Идентификатор услуги в витрине
	SiteID                        *string                         `json:"siteId,omitempty"`                       // Внешний идентификатор таксономии
	SpecialCabinet                *string                         `json:"specialCabinet,omitempty"`               
	TaxonomyAppExtraID            *string                         `json:"taxonomyAppExtraID,omitempty"`           
	TaxonomyCategoryExtraID       *string                         `json:"taxonomyCategoryExtraID,omitempty"`      
	TaxonomyParentID              *string                         `json:"taxonomyParentID,omitempty"`             
	TaxonomyType                  *TaxonomyType                   `json:"taxonomyType,omitempty"`                 
	Timetable                     *Timetable                      `json:"timetable,omitempty"`                    
	UseConfirmationSMSAlert       *bool                           `json:"useConfirmationSmsAlert,omitempty"`      
	VisitType                     *string                         `json:"visitType,omitempty"`                    
}

type PurpleAdditionalDuration struct {
	Duration *float64 `json:"duration"`       
	Level    *float64 `json:"level,omitempty"`
}

type PurpleBusinessTaxonomyPrice struct {
	Amount        *string              `json:"amount,omitempty"`// Значение цены
	Currency      CurrencyList         `json:"currency"`        // Аббревиатура валюты
	ResourceLevel float64              `json:"resourceLevel"`   // "Уровень" цены. Работнику можно выставить его "уровень" (поле level в resources)
	StockAmount   *string              `json:"stockAmount"`     // Значение цены, с учётом промо акций
	Type          *AdditionalPriceType `json:"type,omitempty"`  // Тип цены
}

type PurpleBusinessTaxonomyProduct struct {
	ExtraID  string `json:"extraID"` // Дополнительный ID товара
	ID       string `json:"id"`      // ID товара
	Required bool   `json:"required"`// Является ли обязательным при выполнении данной услуги
}

type PurpleAdjacentTaxonomy struct {
	IsAnyAvailable *bool    `json:"isAnyAvailable,omitempty"`
	Order          *float64 `json:"order,omitempty"`         
	SlotDuration   *float64 `json:"slotDuration,omitempty"`  
	TaxonomyID     *string  `json:"taxonomyID,omitempty"`    
}

type PurpleDateLimit struct {
	ID            *string `json:"_id,omitempty"`          
	DateLimitFrom *string `json:"dateLimitFrom,omitempty"`
	DateLimitTo   *string `json:"dateLimitTo,omitempty"`  
}

// Информация о скидке
type Discount struct {
	Active            *bool          `json:"active,omitempty"`           
	Days              []Day          `json:"days"`                       
	Repeats           *Repeats       `json:"repeats,omitempty"`          
	Slots             []DiscountSlot `json:"slots"`                      
	Start             *string        `json:"start,omitempty"`            
	UnlimWeeklyRepeat *bool          `json:"unlimWeeklyRepeat,omitempty"`
	WeeklyRepeat      *float64       `json:"weeklyRepeat,omitempty"`     
}

type DiscountSlot struct {
	Time *TimeFrame `json:"time,omitempty"`
}

type FluffyPrice struct {
	Amount      string              `json:"amount"`     // Значение цены
	Currency    CurrencyList        `json:"currency"`   // Аббревиатура валюты (например, RUB - рубль)
	StockAmount *string             `json:"stockAmount"`// Значение цены, с учётом промо акций
	Type        AdditionalPriceType `json:"type"`       // Тип цены
}

type PurpleShowcaseItem struct {
	ID                  *string                    `json:"_id,omitempty"`       
	AdditionalDurations []FluffyAdditionalDuration `json:"additionalDurations"` 
	BusinessID          *string                    `json:"businessID,omitempty"`
	ReceptionTypes      []string                   `json:"receptionTypes"`      // Список видов приема услуги
	TaxonomyID          *string                    `json:"taxonomyID,omitempty"`
}

type FluffyAdditionalDuration struct {
	ID       *string  `json:"_id,omitempty"`     
	Duration *float64 `json:"duration,omitempty"`
	Level    *float64 `json:"level,omitempty"`   // поддержка различной длительности услуг в зависимости от работника
}

type PurpleTaxonomyShowcase struct {
	BaseBusinessID   *string `json:"baseBusinessID,omitempty"`  
	IsBaseNode       *bool   `json:"isBaseNode,omitempty"`      
	OriginBusinessID *string `json:"originBusinessID,omitempty"`
	ShowcaseItemID   *string `json:"showcaseItemID,omitempty"`  
}

type InfoTaxonomiesComplex struct {
	Name       *string  `json:"name,omitempty"`
	Taxonomies []string `json:"taxonomies"`    
}

type InfoTopServices struct {
	Services []interface{} `json:"services"`        
	Status   *string       `json:"status,omitempty"`
}

type InfoWidgetConfiguration struct {
	AdditionalName                         *string                        `json:"additionalName,omitempty"`                        
	AlignmentTaxonomySlots                 *bool                          `json:"alignmentTaxonomySlots,omitempty"`                
	AllowAutoSelect                        *bool                          `json:"allowAutoSelect,omitempty"`                       
	AllowBookVisitor                       *bool                          `json:"allowBookVisitor,omitempty"`                      
	AllowSkipTimeCheck                     *bool                          `json:"allowSkipTimeCheck,omitempty"`                    
	AnalyticsGoogle                        *PurpleAnalyticsGoogle         `json:"analyticsGoogle,omitempty"`                       
	AnalyticsYandex                        *PurpleAnalyticsYandex         `json:"analyticsYandex,omitempty"`                       
	AppointmentConfirmationText            *string                        `json:"appointment_confirmation_text,omitempty"`         
	AppointmentConfirmationTitle           *string                        `json:"appointment_confirmation_title,omitempty"`        
	AskClientBirthday                      *bool                          `json:"askClientBirthday,omitempty"`                     
	AskClientGender                        *bool                          `json:"askClientGender,omitempty"`                       
	AskClientPassportID                    *bool                          `json:"askClientPassportID,omitempty"`                   
	BookableDateRanges                     *PurpleBookableDateRanges      `json:"bookableDateRanges,omitempty"`                    
	BookableMonthsCount                    *float64                       `json:"bookableMonthsCount,omitempty"`                   
	CalendarMode                           *bool                          `json:"calendarMode,omitempty"`                          
	CalendarModeHideTime                   *bool                          `json:"calendarModeHideTime,omitempty"`                  
	ClientBlockingSettings                 *PurpleClientBlockingSettings  `json:"clientBlockingSettings,omitempty"`                
	ClientCommentTitle                     *string                        `json:"clientCommentTitle,omitempty"`                    
	CracBuildDays                          *float64                       `json:"cracBuildDays,omitempty"`                         
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
	InsuranceClientSupportPhone            []FaxElement                   `json:"insuranceClientSupportPhone"`                     
	MaxServiceBooking                      *float64                       `json:"maxServiceBooking,omitempty"`                     
	MaxTimeslotBooking                     *float64                       `json:"maxTimeslotBooking,omitempty"`                    
	MiddleNameSupport                      *bool                          `json:"middleNameSupport,omitempty"`                     
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
	ServiceUnavailabilityText              *string                        `json:"service_unavailability_text,omitempty"`           
	ShortLink                              *string                        `json:"shortLink,omitempty"`                             
	ShowAllWorkers                         *bool                          `json:"showAllWorkers,omitempty"`                        
	ShowClientAddress                      *bool                          `json:"showClientAddress,omitempty"`                     
	ShowClientComment                      *bool                          `json:"showClientComment,omitempty"`                     
	ShowDisabledTaxonomies                 *bool                          `json:"showDisabledTaxonomies,omitempty"`                
	ShowDrinkQuestion                      *bool                          `json:"showDrinkQuestion,omitempty"`                     
	ShowMap                                *bool                          `json:"showMap,omitempty"`                               
	ShowStartText                          *bool                          `json:"showStartText,omitempty"`                         
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
	SortWorkers                            map[string]interface{}         `json:"sortWorkers,omitempty"`                           
	SortWorkersByName                      *bool                          `json:"sortWorkersByName,omitempty"`                     
	SortWorkersByWorkload                  *bool                          `json:"sortWorkersByWorkload,omitempty"`                 
	SplitInsuranceClient                   *bool                          `json:"splitInsuranceClient,omitempty"`                  
	SplitName                              *bool                          `json:"splitName,omitempty"`                             
	StartTextButton                        *string                        `json:"startTextButton,omitempty"`                       
	StartTextMessage                       *string                        `json:"startTextMessage,omitempty"`                      
	StrictSlotCutting                      *bool                          `json:"strictSlotCutting,omitempty"`                     
	TentativeTTL                           *float64                       `json:"tentativeTTL,omitempty"`                          
	Theme                                  *string                        `json:"theme,omitempty"`                                 
	ToggleReminder                         *bool                          `json:"toggleReminder,omitempty"`                        
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
	WorkerWidgetUnavailabilityText         *string                        `json:"worker_widget_unavailability_text,omitempty"`     
	WorkerNameReverse                      *bool                          `json:"workerNameReverse,omitempty"`                     
}

type PurpleAnalyticsGoogle struct {
	Active *bool   `json:"active,omitempty"`
	Key    *string `json:"key,omitempty"`   
}

type PurpleAnalyticsYandex struct {
	Active *bool   `json:"active,omitempty"`
	Key    *string `json:"key,omitempty"`   
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

type ResultIntegrationData struct {
	Ehr *Ehr `json:"ehr,omitempty"`
}

type Ehr struct {
	Active *bool `json:"active,omitempty"`
}

type NetworkClientBlockingSettings struct {
	AppointmentClientBlock     *bool    `json:"appointmentClientBlock,omitempty"`    
	AppointmentClientBlockDays *float64 `json:"appointmentClientBlockDays,omitempty"`
	AppointmentClientBlockText *string  `json:"appointmentClientBlockText,omitempty"`
	BlockIfFutureRecordExists  *bool    `json:"blockIfFutureRecordExists,omitempty"` 
	BlockRepeatedRecordsCount  *float64 `json:"blockRepeatedRecordsCount,omitempty"` 
	BlockRepeatedRecordsRange  *float64 `json:"blockRepeatedRecordsRange,omitempty"` 
	BlockRepeatedRecordsText   *string  `json:"blockRepeatedRecordsText,omitempty"`  
}

type NetworkWidgetConfiguration struct {
	ID                 *string                        `json:"_id,omitempty"`     
	Businesses         []NetworkConfigurationBusiness `json:"businesses"`        
	DefaultServiceID   *string                        `json:"defaultServiceID"`  
	ShowBranchSelector bool                           `json:"showBranchSelector"`
	ShowDefaultService bool                           `json:"showDefaultService"`
	ShowOnMap          bool                           `json:"showOnMap"`         
	Source             string                         `json:"source"`            
}

type NetworkConfigurationBusiness struct {
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
	Business             MagentaBusiness    `json:"business"`                        
	DesktopDiscounts     *bool              `json:"desktop_discounts,omitempty"`     // если указано true - меняет формат представления discounts
	OnlyActiveWorkers    *bool              `json:"only_active_workers,omitempty"`   // если указано true - возвращает только активных работников (status == 'INACTIVE')
	ShowInactiveWorkers  *bool              `json:"show_inactive_workers,omitempty"` // если указано true - возвращает всех работников в том числе и неактивных (status ==; 'INACTIVE')
	ShowcaseBusinessID   *TimeFrameDate     `json:"showcase_business_id"`            // идентификатор витрины (передаётся вместе с with_taxonomy_showcase)
	SkipWorkerSorting    *bool              `json:"skip_worker_sorting,omitempty"`   // если указано true - не приминяет сортировку работников
	UseOptimizedCache    *bool              `json:"use_optimized_cache,omitempty"`   // содержит только доступные для записи наборы услуг и работников
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

type MagentaBusiness struct {
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
	Code    float64 `json:"code"`   // код ошибки
	Data    *Data   `json:"data"`   // дополнительные данные об ошибке
	Message string  `json:"message"`// текстовая информация об ошибке
}

// данные, передаваемые в ответ
type BusinessGetProfileByIDResponseResult struct {
	Active                *bool                    `json:"active,omitempty"`               
	Business              BusinessClass            `json:"business"`                       
	FreeSMS               *float64                 `json:"freeSms,omitempty"`              
	MonthlyFreeSMS        *float64                 `json:"monthlyFreeSms,omitempty"`       
	Networks              []NetworkElement         `json:"networks"`                       
	Profiles              []map[string]interface{} `json:"profiles"`                       
	TopServices           *ResultTopServices       `json:"top_services,omitempty"`         
	UseDefaultSMSTemplate *bool                    `json:"useDefaultSmsTemplate,omitempty"`
	YandexFeedType        *YandexFeedType          `json:"yandexFeedType,omitempty"`       
}

type BusinessClass struct {
	Active                          *bool                                 `json:"active,omitempty"`                       
	AdditionalSettings              *BusinessAdditionalSettings           `json:"additionalSettings,omitempty"`           
	AllowCategoryBooking            *bool                                 `json:"allowCategoryBooking,omitempty"`         
	BusinessBackofficeConfiguration *BusinessBackofficeConfigurationClass `json:"backoffice_configuration,omitempty"`     
	BackofficeConfiguration         *BusinessBackofficeConfiguration      `json:"backofficeConfiguration,omitempty"`      
	BackofficeType                  *BackofficeType                       `json:"backofficeType,omitempty"`               
	Cabinets                        []BusinessCabinet                     `json:"cabinets"`                               
	CabinetsEnabled                 *bool                                 `json:"cabinetsEnabled,omitempty"`              
	CallbackWidgetConfiguration     *BusinessCallbackWidgetConfiguration  `json:"callback_widget_configuration,omitempty"`
	Consumables                     []BusinessConsumable                  `json:"consumables"`                            
	CreatedOn                       *string                               `json:"created_on,omitempty"`                   
	DefaultFilteredWorkers          []string                              `json:"defaultFilteredWorkers"`                 
	Departments                     []BusinessDepartment                  `json:"departments"`                            
	Designs                         []map[string]interface{}              `json:"designs"`                                
	ExtraID                         *string                               `json:"extraID,omitempty"`                      
	FlatTaxonomyDisplay             *bool                                 `json:"flatTaxonomyDisplay,omitempty"`          
	GeneralInfo                     BusinessInfo                          `json:"general_info"`                           
	Group                           *Group                                `json:"group,omitempty"`                        
	ID                              *string                               `json:"id,omitempty"`                           
	IntegrationData                 map[string]interface{}                `json:"integration_data,omitempty"`             
	MaxFilterDateDuration           *float64                              `json:"maxFilterDateDuration,omitempty"`        
	MiniWidgetConfiguration         BusinessMiniWidgetConfiguration       `json:"mini_widget_configuration"`              
	MobileData                      []interface{}                         `json:"mobileData"`                             
	Notifications                   []interface{}                         `json:"notifications"`                          
	Resources                       []Resource                            `json:"resources"`                              
	StateLevelHolidaysNotWorking    *bool                                 `json:"stateLevelHolidaysNotWorking,omitempty"` 
	Taxonomies                      []BusinessTaxonomy                    `json:"taxonomies"`                             
	TaxonomiesComplex               []BusinessTaxonomiesComplex           `json:"taxonomiesComplex"`                      
	TaxonomyTreeCapacity            []map[string]interface{}              `json:"taxonomy_tree_capacity"`                 
	TopServices                     *BusinessTopServices                  `json:"top_services,omitempty"`                 
	Vertical                        *string                               `json:"vertical,omitempty"`                     
	WidgetConfiguration             BusinessWidgetConfiguration           `json:"widget_configuration"`                   
	YandexFeedType                  *string                               `json:"yandexFeedType,omitempty"`               
}

type BusinessAdditionalSettings struct {
	AppointmentExtensionAmount *float64                  `json:"appointmentExtensionAmount,omitempty"`
	AppointmentExtensionType   *AppointmentExtensionType `json:"appointmentExtensionType,omitempty"`  
}

type BusinessBackofficeConfiguration struct {
	AdjacentTaxonomiesTreshold                      *float64                       `json:"adjacentTaxonomiesTreshold,omitempty"`                     
	AllowHideServiceForBooking                      *bool                          `json:"allowHideServiceForBooking,omitempty"`                     
	AllowHideWorkersFromSchdeule                    *bool                          `json:"allowHideWorkersFromSchdeule,omitempty"`                   
	AllowSMSTranslit                                *bool                          `json:"allowSmsTranslit,omitempty"`                               
	AppointmentFutureMoving                         *bool                          `json:"appointmentFutureMoving,omitempty"`                        
	BlockNotificationForAnyAvailableAdjacentService *bool                          `json:"blockNotificationForAnyAvailableAdjacentService,omitempty"`
	CabinetsEnabled                                 *bool                          `json:"cabinetsEnabled,omitempty"`                                
	CheckClientOverlapping                          *bool                          `json:"checkClientOverlapping,omitempty"`                         
	CustomOnlinePaymentConfirmationTemplate         *string                        `json:"customOnlinePaymentConfirmationTemplate,omitempty"`        
	DefaultGTScheduleDayView                        *bool                          `json:"defaultGTScheduleDayView,omitempty"`                       
	DisableAppointmentClientInlineEditor            *bool                          `json:"disableAppointmentClientInlineEditor,omitempty"`           
	EditAppExtraID                                  *bool                          `json:"editAppExtraId,omitempty"`                                 
	EditTaxonomyChildren                            *bool                          `json:"editTaxonomyChildren,omitempty"`                           
	EditTaxonomyVisitType                           *bool                          `json:"editTaxonomyVisitType,omitempty"`                          
	EnableBlackList                                 *bool                          `json:"enableBlackList,omitempty"`                                
	EnableCalculateShedule                          *bool                          `json:"enableCalculateShedule,omitempty"`                         
	EnableClientCard                                *bool                          `json:"enableClientCard,omitempty"`                               
	EnableClientLanguage                            *bool                          `json:"enableClientLanguage,omitempty"`                           
	EnableClientMedicalCardReport                   *bool                          `json:"enableClientMedicalCardReport,omitempty"`                  
	EnableCustomOnlinePaymentConfirmation           *bool                          `json:"enableCustomOnlinePaymentConfirmation,omitempty"`          
	EnableExtendedPhone                             *bool                          `json:"enableExtendedPhone,omitempty"`                            
	EnableExtendedRecordsClientStatistics           *bool                          `json:"enableExtendedRecordsClientStatistics,omitempty"`          
	EnableInvoice                                   *bool                          `json:"enableInvoice,omitempty"`                                  
	EnableMasterImportance                          *bool                          `json:"enableMasterImportance,omitempty"`                         
	EnablePhoneNationalMode                         *bool                          `json:"enablePhoneNationalMode,omitempty"`                        
	EnablePrintingReportRecordsScreen               *bool                          `json:"enablePrintingReportRecordsScreen,omitempty"`              
	EnableServiceOrModeFilter                       *bool                          `json:"enableServiceOrModeFilter,omitempty"`                      
	EnableServiceTimeLimit                          *bool                          `json:"enableServiceTimeLimit,omitempty"`                         
	EnableSourceChoice                              *bool                          `json:"enableSourceChoice,omitempty"`                             
	EnableTaxonomyChildrenAgeCheck                  *bool                          `json:"enableTaxonomyChildrenAgeCheck,omitempty"`                 
	EnableTelemed                                   *bool                          `json:"enableTelemed,omitempty"`                                  
	ExportToExcelRemovedClients                     *bool                          `json:"exportToExcelRemovedClients,omitempty"`                    
	FeedbackCustomerPortalMessage                   *string                        `json:"feedbackCustomerPortalMessage,omitempty"`                  
	FeedbackCustomerPortalThankYouMessage           *string                        `json:"feedbackCustomerPortalThankYouMessage,omitempty"`          
	FeedbackCustomerPortalTitle                     *string                        `json:"feedbackCustomerPortalTitle,omitempty"`                    
	FeedBackMinRating                               *FeedBackMinRating             `json:"feedBackMinRating,omitempty"`                              
	FinID                                           *string                        `json:"finId,omitempty"`                                          
	FinName                                         *string                        `json:"finName,omitempty"`                                        
	HideCustomerPortalFooter                        *bool                          `json:"hideCustomerPortalFooter,omitempty"`                       
	HighlightedResource                             *bool                          `json:"highlightedResource,omitempty"`                            
	InvoiceCondition                                []AppointmentClientPayment     `json:"invoiceCondition"`                                         
	InvoiceProvider                                 *InvoiceProvider               `json:"invoiceProvider,omitempty"`                                
	ManualExceptionSupport                          *bool                          `json:"manualExceptionSupport,omitempty"`                         
	NoInternetAlert                                 *bool                          `json:"noInternetAlert,omitempty"`                                
	PastTimeEdit                                    *float64                       `json:"pastTimeEdit,omitempty"`                                   
	PaymentProvider                                 *PaymentProvider               `json:"paymentProvider,omitempty"`                                
	ReadonlyResourceSchedule                        *bool                          `json:"readonlyResourceSchedule,omitempty"`                       
	ResourceSurnameFirst                            *bool                          `json:"resourceSurnameFirst,omitempty"`                           
	ResourceTimetableType                           *ResourceTimetableType         `json:"resourceTimetableType,omitempty"`                          
	ResoureLoginHideCancelledAppointment            *bool                          `json:"resoureLoginHideCancelledAppointment,omitempty"`           
	RevisionVersion                                 *float64                       `json:"revisionVersion,omitempty"`                                
	SchduleWeekViewIsDefault                        *bool                          `json:"schduleWeekViewIsDefault,omitempty"`                       
	ScheduleDefaultWorkersLimit                     *float64                       `json:"scheduleDefaultWorkersLimit,omitempty"`                    
	ScheduleDefaultWorkersLimitDay                  *float64                       `json:"scheduleDefaultWorkersLimitDay"`                           
	ScheduleDefaultWorkersLimitWeek                 *float64                       `json:"scheduleDefaultWorkersLimitWeek"`                          
	ScheduleEnableDayIntervals                      *bool                          `json:"scheduleEnableDayIntervals,omitempty"`                     
	SchedulerWeekViewType                           *SchedulerWeekViewType         `json:"schedulerWeekViewType,omitempty"`                          
	ScheduleSplitDayTimeIntervals                   []ScheduleSplitDayTimeInterval `json:"scheduleSplitDayTimeIntervals"`                            
	ScheduleWorkerHours                             *bool                          `json:"scheduleWorkerHours,omitempty"`                            
	ShowAdditionalFields                            *bool                          `json:"showAdditionalFields,omitempty"`                           
	ShowAddress                                     *bool                          `json:"showAddress,omitempty"`                                    
	ShowBirthDate                                   *bool                          `json:"showBirthDate,omitempty"`                                  
	ShowClientAddress                               *bool                          `json:"showClientAddress,omitempty"`                              
	ShowClientAppear                                *bool                          `json:"showClientAppear,omitempty"`                               
	ShowClientAppearOnSchedule                      *bool                          `json:"showClientAppearOnSchedule,omitempty"`                     
	ShowClientBirthdayFilter                        *bool                          `json:"showClientBirthdayFilter,omitempty"`                       
	ShowClientContractNumber                        *bool                          `json:"showClientContractNumber,omitempty"`                       
	ShowClientImage                                 *bool                          `json:"showClientImage,omitempty"`                                
	ShowClientPayment                               *bool                          `json:"showClientPayment,omitempty"`                              
	ShowCreatedUsername                             *bool                          `json:"showCreatedUsername,omitempty"`                            
	ShowDefaulterBlockscreen                        *bool                          `json:"showDefaulterBlockscreen,omitempty"`                       
	ShowDeliveryStatus                              *bool                          `json:"showDeliveryStatus,omitempty"`                             
	ShowDepartmentFilter                            *bool                          `json:"showDepartmentFilter,omitempty"`                           
	ShowDepartments                                 *bool                          `json:"showDepartments,omitempty"`                                
	ShowDepartmentsConfiguration                    *bool                          `json:"showDepartmentsConfiguration,omitempty"`                   
	ShowEmail                                       *bool                          `json:"showEmail,omitempty"`                                      
	ShowExtraClientInfo                             *bool                          `json:"showExtraClientInfo,omitempty"`                            
	ShowFax                                         *bool                          `json:"showFax,omitempty"`                                        
	ShowFiredWorkerAppointmentAlert                 *bool                          `json:"showFiredWorkerAppointmentAlert,omitempty"`                
	ShowFirstAvailableSlot                          *bool                          `json:"showFirstAvailableSlot,omitempty"`                         
	ShowGapWindow                                   *bool                          `json:"showGapWindow,omitempty"`                                  
	ShowGender                                      *bool                          `json:"showGender,omitempty"`                                     
	ShowGenderInRecords                             *bool                          `json:"showGenderInRecords,omitempty"`                            
	ShowGeneratableReportsScreen                    *bool                          `json:"showGeneratableReportsScreen,omitempty"`                   
	ShowGuaranteeLettersScreen                      *bool                          `json:"showGuaranteeLettersScreen,omitempty"`                     
	ShowHouseNumber                                 *bool                          `json:"showHouseNumber,omitempty"`                                
	ShowIsraelCity                                  *bool                          `json:"showIsraelCity,omitempty"`                                 
	ShowKupatHolim                                  *bool                          `json:"showKupatHolim,omitempty"`                                 
	ShowLeadsScreen                                 *bool                          `json:"showLeadsScreen,omitempty"`                                
	ShowManualChanges                               *bool                          `json:"showManualChanges,omitempty"`                              
	ShowPartnersContractScreen                      *bool                          `json:"showPartnersContractScreen,omitempty"`                     
	ShowPassportID                                  *bool                          `json:"showPassportId,omitempty"`                                 
	ShowRooms                                       *bool                          `json:"showRooms,omitempty"`                                      
	ShowSeasonTickets                               *bool                          `json:"showSeasonTickets,omitempty"`                              
	ShowTaxonomyChildren                            *bool                          `json:"showTaxonomyChildren,omitempty"`                           
	ShowTaxonomyLocalization                        *bool                          `json:"showTaxonomyLocalization,omitempty"`                       
	ShowTaxonomyNameExtraID                         *bool                          `json:"showTaxonomyNameExtraId,omitempty"`                        
	ShowTaxonomyVisitType                           *bool                          `json:"showTaxonomyVisitType,omitempty"`                          
	ShowTestRecord                                  *bool                          `json:"showTestRecord,omitempty"`                                 
	ShowUTM                                         *bool                          `json:"showUTM,omitempty"`                                        
	ShowWidgetColorTheme                            *bool                          `json:"showWidgetColorTheme,omitempty"`                           
	ShowWorkerDescriptionInEvent                    *bool                          `json:"showWorkerDescriptionInEvent,omitempty"`                   
	ShowWorkerExtraID                               *bool                          `json:"showWorkerExtraId,omitempty"`                              
	ShowWorkerStatus                                *bool                          `json:"showWorkerStatus,omitempty"`                               
	SkipAppointmentPriceUpdate                      *bool                          `json:"skipAppointmentPriceUpdate,omitempty"`                     
	SkipCancelIfClientNotAppear                     *bool                          `json:"skipCancelIfClientNotAppear,omitempty"`                    
	SkipServiceFiltering                            *bool                          `json:"skipServiceFiltering,omitempty"`                           
	SplitFullNameXlsExport                          *bool                          `json:"splitFullNameXlsExport,omitempty"`                         
	StateLevelHolidays                              []map[string]interface{}       `json:"stateLevelHolidays"`                                       
	StateLevelHolidaysNotWorking                    *bool                          `json:"stateLevelHolidaysNotWorking,omitempty"`                   
	TaxonomyChildrenMaxAge                          *float64                       `json:"taxonomyChildrenMaxAge,omitempty"`                         
	TelemedApplication                              *FluffyTelemedApplication      `json:"telemedApplication,omitempty"`                             
	TelemedProvider                                 *TelemedProvider               `json:"telemedProvider,omitempty"`                                
	UseAdditionalDurations                          *bool                          `json:"useAdditionalDurations,omitempty"`                         
	UseAdjacentTaxonomies                           *bool                          `json:"useAdjacentTaxonomies,omitempty"`                          
	UseAdjacentTaxonomiesSlotSplitting              *bool                          `json:"useAdjacentTaxonomiesSlotSplitting,omitempty"`             
	UseGtAppMethod                                  *bool                          `json:"useGtAppMethod,omitempty"`                                 
	WorkWeekEnd                                     *float64                       `json:"workWeekEnd,omitempty"`                                    
	WorkWeekStart                                   *float64                       `json:"workWeekStart,omitempty"`                                  
}

type ScheduleSplitDayTimeInterval struct {
	ID            *string  `json:"_id,omitempty"`          
	EndHour       *float64 `json:"endHour,omitempty"`      
	EndMinute     *float64 `json:"endMinute,omitempty"`    
	SchedulerTick *float64 `json:"schedulerTick,omitempty"`
	Selected      *bool    `json:"selected,omitempty"`     
	StartHour     *float64 `json:"startHour,omitempty"`    
	StartMinute   *float64 `json:"startMinute,omitempty"`  
	Title         *string  `json:"title,omitempty"`        
}

type FluffyTelemedApplication struct {
	AppleAppName  *string `json:"appleAppName,omitempty"` 
	GoogleAppName *string `json:"googleAppName,omitempty"`
	URLAppSchema  *string `json:"urlAppSchema,omitempty"` 
}

type BusinessBackofficeConfigurationClass struct {
	EnableExtendedPhone     *bool                  `json:"enableExtendedPhone,omitempty"`    
	EnableMasterImportance  *bool                  `json:"enableMasterImportance,omitempty"` 
	EnablePhoneNationalMode *bool                  `json:"enablePhoneNationalMode,omitempty"`
	ResourceTimetableType   *ResourceTimetableType `json:"resourceTimetableType,omitempty"`  
}

type BusinessCabinet struct {
	Active *bool   `json:"active,omitempty"`
	ID     *string `json:"id,omitempty"`    
	Name   *string `json:"name,omitempty"`  
}

type BusinessCallbackWidgetConfiguration struct {
	Title1 *string `json:"title1,omitempty"`
	Title2 *string `json:"title2,omitempty"`
}

type BusinessConsumable struct {
	ExtraID  string  `json:"extraID"` 
	Name     string  `json:"name"`    
	Quantity float64 `json:"quantity"`
}

type BusinessDepartment struct {
	ID           string   `json:"id"`           
	DepartmentID *float64 `json:"id_,omitempty"`
	Name         string   `json:"name"`         
}

type BusinessMiniWidgetConfiguration struct {
	Fields []FieldElement `json:"fields"`          
	Title1 *string        `json:"title1,omitempty"`
	Title2 *string        `json:"title2,omitempty"`
}

type BusinessTaxonomy struct {
	Active                        *bool                           `json:"active,omitempty"`                       
	AdditionalDurations           []TentacledAdditionalDuration   `json:"additionalDurations"`                    
	AdditionalPrices              []FluffyBusinessTaxonomyPrice   `json:"additionalPrices"`                       
	AdditionalProducts            []FluffyBusinessTaxonomyProduct `json:"additionalProducts"`                     
	AdditionalTaxonomyExtraID     []map[string]interface{}        `json:"additionalTaxonomyExtraId"`              
	AdjacentSameTimeStart         *bool                           `json:"adjacentSameTimeStart,omitempty"`        
	AdjacentTaxonomies            []FluffyAdjacentTaxonomy        `json:"adjacentTaxonomies"`                     
	Alias                         map[string]interface{}          `json:"alias,omitempty"`                        
	AllowBookingInBO              *bool                           `json:"allowBookingInBO,omitempty"`             
	AllowNextBookingCount         *float64                        `json:"allowNextBookingCount,omitempty"`        
	AllowNextBookingInDays        *float64                        `json:"allowNextBookingInDays,omitempty"`       
	AllowNextBookingInDaysText    *string                         `json:"allowNextBookingInDaysText,omitempty"`   
	Cabinets                      []string                        `json:"cabinets"`                               
	CabinetsEnabled               *bool                           `json:"cabinetsEnabled,omitempty"`              
	Capacity                      *float64                        `json:"capacity,omitempty"`                     
	CapacityDecrease              *float64                        `json:"capacity_decrease,omitempty"`            
	ChargeUnitsStep               *float64                        `json:"chargeUnitsStep,omitempty"`              
	ChildrenTaxonomyTypes         []ChildrenTaxonomyType          `json:"childrenTaxonomyTypes"`                  
	Color                         *string                         `json:"color,omitempty"`                        
	ConfirmationAlert             *string                         `json:"confirmationAlert,omitempty"`            
	ConfirmationEmailAlert        *string                         `json:"confirmationEmailAlert,omitempty"`       
	ConfirmationSMSAlert          *string                         `json:"confirmationSmsAlert,omitempty"`         
	DateLimits                    []FluffyDateLimit               `json:"dateLimits"`                             
	DateLimitType                 *DateLimitType                  `json:"dateLimitType,omitempty"`                
	Designs                       []string                        `json:"designs"`                                
	DisableClientSMSNotifications *bool                           `json:"disableClientSmsNotifications,omitempty"`
	Discounts                     []Discount                      `json:"discounts"`                              
	DisplayInWidget               *bool                           `json:"displayInWidget,omitempty"`              
	Duration                      *float64                        `json:"duration,omitempty"`                     
	Exceptions                    []interface{}                   `json:"exceptions"`                             
	ExtraDescription              *string                         `json:"extraDescription,omitempty"`             
	ExtraID                       *string                         `json:"extraId,omitempty"`                      
	ExtraLink                     *string                         `json:"extraLink,omitempty"`                    
	ForPay                        *bool                           `json:"forPay,omitempty"`                       
	ID                            *string                         `json:"id,omitempty"`                           
	Images                        []string                        `json:"images"`                                 
	IsOther                       *bool                           `json:"isOther,omitempty"`                      
	IsTelemed                     *bool                           `json:"isTelemed,omitempty"`                    
	LastModified                  *string                         `json:"lastModified,omitempty"`                 
	Leaves                        []string                        `json:"leaves"`                                 
	ManualChanges                 *bool                           `json:"manualChanges,omitempty"`                
	NewTaxonomy                   *bool                           `json:"newTaxonomy,omitempty"`                  
	OnlineMode                    *OnlineMode                     `json:"onlineMode,omitempty"`                   
	OnlyAfterTaxonomies           []string                        `json:"onlyAfterTaxonomies"`                    
	Order                         *float64                        `json:"order,omitempty"`                        
	ParallelTaxonomies            []string                        `json:"parallelTaxonomies"`                     
	Popularity                    *float64                        `json:"popularity,omitempty"`                   
	Price                         *TentacledPrice                 `json:"price,omitempty"`                        
	PriceLink                     *string                         `json:"priceLink,omitempty"`                    
	ReceptionTypes                []string                        `json:"receptionTypes"`                         // Список видов приема услуги
	Rooms                         []string                        `json:"rooms"`                                  
	ShowcaseItems                 []FluffyShowcaseItem            `json:"showcaseItems"`                          
	Showcases                     []FluffyTaxonomyShowcase        `json:"showcases"`                              
	ShowcaseTaxonomyID            *string                         `json:"showcaseTaxonomyID,omitempty"`           // Идентификатор услуги в витрине
	SiteID                        *string                         `json:"siteId,omitempty"`                       // Внешний идентификатор таксономии
	SpecialCabinet                *string                         `json:"specialCabinet,omitempty"`               
	TaxonomyAppExtraID            *string                         `json:"taxonomyAppExtraID,omitempty"`           
	TaxonomyCategoryExtraID       *string                         `json:"taxonomyCategoryExtraID,omitempty"`      
	TaxonomyParentID              *string                         `json:"taxonomyParentID,omitempty"`             
	TaxonomyType                  *TaxonomyType                   `json:"taxonomyType,omitempty"`                 
	Timetable                     *Timetable                      `json:"timetable,omitempty"`                    
	UseConfirmationSMSAlert       *bool                           `json:"useConfirmationSmsAlert,omitempty"`      
	VisitType                     *string                         `json:"visitType,omitempty"`                    
}

type TentacledAdditionalDuration struct {
	Duration *float64 `json:"duration"`       
	Level    *float64 `json:"level,omitempty"`
}

type FluffyBusinessTaxonomyPrice struct {
	Amount        *string              `json:"amount,omitempty"`// Значение цены
	Currency      CurrencyList         `json:"currency"`        // Аббревиатура валюты
	ResourceLevel float64              `json:"resourceLevel"`   // "Уровень" цены. Работнику можно выставить его "уровень" (поле level в resources)
	StockAmount   *string              `json:"stockAmount"`     // Значение цены, с учётом промо акций
	Type          *AdditionalPriceType `json:"type,omitempty"`  // Тип цены
}

type FluffyBusinessTaxonomyProduct struct {
	ExtraID  string `json:"extraID"` // Дополнительный ID товара
	ID       string `json:"id"`      // ID товара
	Required bool   `json:"required"`// Является ли обязательным при выполнении данной услуги
}

type FluffyAdjacentTaxonomy struct {
	IsAnyAvailable *bool    `json:"isAnyAvailable,omitempty"`
	Order          *float64 `json:"order,omitempty"`         
	SlotDuration   *float64 `json:"slotDuration,omitempty"`  
	TaxonomyID     *string  `json:"taxonomyID,omitempty"`    
}

type FluffyDateLimit struct {
	ID            *string `json:"_id,omitempty"`          
	DateLimitFrom *string `json:"dateLimitFrom,omitempty"`
	DateLimitTo   *string `json:"dateLimitTo,omitempty"`  
}

type TentacledPrice struct {
	Amount      string              `json:"amount"`     // Значение цены
	Currency    CurrencyList        `json:"currency"`   // Аббревиатура валюты (например, RUB - рубль)
	StockAmount *string             `json:"stockAmount"`// Значение цены, с учётом промо акций
	Type        AdditionalPriceType `json:"type"`       // Тип цены
}

type FluffyShowcaseItem struct {
	ID                  *string                    `json:"_id,omitempty"`       
	AdditionalDurations []StickyAdditionalDuration `json:"additionalDurations"` 
	BusinessID          *string                    `json:"businessID,omitempty"`
	ReceptionTypes      []string                   `json:"receptionTypes"`      // Список видов приема услуги
	TaxonomyID          *string                    `json:"taxonomyID,omitempty"`
}

type StickyAdditionalDuration struct {
	ID       *string  `json:"_id,omitempty"`     
	Duration *float64 `json:"duration,omitempty"`
	Level    *float64 `json:"level,omitempty"`   // поддержка различной длительности услуг в зависимости от работника
}

type FluffyTaxonomyShowcase struct {
	BaseBusinessID   *string `json:"baseBusinessID,omitempty"`  
	IsBaseNode       *bool   `json:"isBaseNode,omitempty"`      
	OriginBusinessID *string `json:"originBusinessID,omitempty"`
	ShowcaseItemID   *string `json:"showcaseItemID,omitempty"`  
}

type BusinessTaxonomiesComplex struct {
	Name       *string  `json:"name,omitempty"`
	Taxonomies []string `json:"taxonomies"`    
}

type BusinessTopServices struct {
	Services []interface{} `json:"services"`        
	Status   *string       `json:"status,omitempty"`
}

type BusinessWidgetConfiguration struct {
	AdditionalName                         *string                        `json:"additionalName,omitempty"`                        
	AlignmentTaxonomySlots                 *bool                          `json:"alignmentTaxonomySlots,omitempty"`                
	AllowAutoSelect                        *bool                          `json:"allowAutoSelect,omitempty"`                       
	AllowBookVisitor                       *bool                          `json:"allowBookVisitor,omitempty"`                      
	AllowSkipTimeCheck                     *bool                          `json:"allowSkipTimeCheck,omitempty"`                    
	AnalyticsGoogle                        *FluffyAnalyticsGoogle         `json:"analyticsGoogle,omitempty"`                       
	AnalyticsYandex                        *FluffyAnalyticsYandex         `json:"analyticsYandex,omitempty"`                       
	AppointmentConfirmationText            *string                        `json:"appointment_confirmation_text,omitempty"`         
	AppointmentConfirmationTitle           *string                        `json:"appointment_confirmation_title,omitempty"`        
	AskClientBirthday                      *bool                          `json:"askClientBirthday,omitempty"`                     
	AskClientGender                        *bool                          `json:"askClientGender,omitempty"`                       
	AskClientPassportID                    *bool                          `json:"askClientPassportID,omitempty"`                   
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
	InsuranceClientSupportPhone            []FaxElement                   `json:"insuranceClientSupportPhone"`                     
	MaxServiceBooking                      *float64                       `json:"maxServiceBooking,omitempty"`                     
	MaxTimeslotBooking                     *float64                       `json:"maxTimeslotBooking,omitempty"`                    
	MiddleNameSupport                      *bool                          `json:"middleNameSupport,omitempty"`                     
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
	ServiceUnavailabilityText              *string                        `json:"service_unavailability_text,omitempty"`           
	ShortLink                              *string                        `json:"shortLink,omitempty"`                             
	ShowAllWorkers                         *bool                          `json:"showAllWorkers,omitempty"`                        
	ShowClientAddress                      *bool                          `json:"showClientAddress,omitempty"`                     
	ShowClientComment                      *bool                          `json:"showClientComment,omitempty"`                     
	ShowDisabledTaxonomies                 *bool                          `json:"showDisabledTaxonomies,omitempty"`                
	ShowDrinkQuestion                      *bool                          `json:"showDrinkQuestion,omitempty"`                     
	ShowMap                                *bool                          `json:"showMap,omitempty"`                               
	ShowStartText                          *bool                          `json:"showStartText,omitempty"`                         
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
	SortWorkers                            map[string]interface{}         `json:"sortWorkers,omitempty"`                           
	SortWorkersByName                      *bool                          `json:"sortWorkersByName,omitempty"`                     
	SortWorkersByWorkload                  *bool                          `json:"sortWorkersByWorkload,omitempty"`                 
	SplitInsuranceClient                   *bool                          `json:"splitInsuranceClient,omitempty"`                  
	SplitName                              *bool                          `json:"splitName,omitempty"`                             
	StartTextButton                        *string                        `json:"startTextButton,omitempty"`                       
	StartTextMessage                       *string                        `json:"startTextMessage,omitempty"`                      
	StrictSlotCutting                      *bool                          `json:"strictSlotCutting,omitempty"`                     
	TentativeTTL                           *float64                       `json:"tentativeTTL,omitempty"`                          
	Theme                                  *string                        `json:"theme,omitempty"`                                 
	ToggleReminder                         *bool                          `json:"toggleReminder,omitempty"`                        
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
	WorkerWidgetUnavailabilityText         *string                        `json:"worker_widget_unavailability_text,omitempty"`     
	WorkerNameReverse                      *bool                          `json:"workerNameReverse,omitempty"`                     
}

type FluffyAnalyticsGoogle struct {
	Active *bool   `json:"active,omitempty"`
	Key    *string `json:"key,omitempty"`   
}

type FluffyAnalyticsYandex struct {
	Active *bool   `json:"active,omitempty"`
	Key    *string `json:"key,omitempty"`   
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

type NetworkElement struct {
	Address      *Address `json:"address,omitempty"`
	BusinessName string   `json:"businessName"`     
	Description  string   `json:"description"`      
	InternalID   string   `json:"internalID"`       
}

type Address struct {
	Address          *string              `json:"address,omitempty"`         
	AddressAdd       *string              `json:"addressAdd,omitempty"`      
	AdminArea        *string              `json:"adminArea,omitempty"`       
	AdminAreaType    *string              `json:"adminAreaType,omitempty"`   
	Building         *string              `json:"building,omitempty"`        
	Corps            *string              `json:"corps,omitempty"`           
	Country          CountryEnum          `json:"country"`                   
	Group            *string              `json:"group,omitempty"`           
	HouseAdd         *string              `json:"houseAdd,omitempty"`        
	Kilometer        *string              `json:"kilometer,omitempty"`       
	Latitude         *string              `json:"latitude,omitempty"`        
	Locality         *string              `json:"locality,omitempty"`        
	LocalityType     *string              `json:"localityType,omitempty"`    
	Longitude        *string              `json:"longitude,omitempty"`       
	MetroStations    []PurpleMetroStation `json:"metroStations"`             
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

type PurpleMetroStation struct {
	ID          *string `json:"_id,omitempty"`        
	Description *string `json:"description,omitempty"`
	Name        string  `json:"name"`                 
}

type ResultTopServices struct {
	Services []string `json:"services"`
	Status   bool     `json:"status"`  
}

type ClientController struct {
	AddClient          AddClient          `json:"add_client"`           
	FindOrCreateClient FindOrCreateClient `json:"find_or_create_client"`
	UpdateClient       UpdateClient       `json:"update_client"`        
	UpdateClientInfo   UpdateClientInfo   `json:"update_client_info"`   
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
	Business          FriskyBusiness `json:"business"`                   
	Client            ClientClass    `json:"client"`                     
	Profile           *ParamsProfile `json:"profile,omitempty"`          
	SkipEmailCheck    *bool          `json:"skipEmailCheck,omitempty"`   
	SkipProfileUpdate *bool          `json:"skipProfileUpdate,omitempty"`
}

type FriskyBusiness struct {
	ID *TimeFrameDate `json:"id"`// идентификатор бизнеса
}

// Данные клиента
type ClientClass struct {
	Address                    *string                `json:"address,omitempty"`                   
	Birthday                   *Birthday              `json:"birthday"`                            
	BlackList                  *bool                  `json:"blackList,omitempty"`                 
	ChildrenClients            []ChildrenClient       `json:"childrenClients"`                     
	ClientCardCreationDate     *string                `json:"clientCardCreationDate,omitempty"`    
	ClientCardNumber           *string                `json:"clientCardNumber,omitempty"`          
	ClientContractNumber       *string                `json:"clientContractNumber,omitempty"`      
	Created                    *string                `json:"created,omitempty"`                   
	CreatorProfileID           *string                `json:"creatorProfileID"`                    
	CreatorProfileName         *string                `json:"creatorProfileName"`                  
	Description                *string                `json:"description,omitempty"`               
	DiscountCode               *string                `json:"discountCode,omitempty"`              
	DriverLicense              *string                `json:"driverLicense"`                       
	Email                      []string               `json:"email"`                               
	ExtraFields                []ClientExtraField     `json:"extraFields"`                         
	ExtraID                    *string                `json:"extraID,omitempty"`                   
	FavResources               []ClientFavResource    `json:"favResources"`                        
	Fax                        *string                `json:"fax,omitempty"`                       
	FromSMS                    *FromSMS               `json:"fromSms"`                             
	FullAddress                []AddressSchema        `json:"fullAddress"`                         
	HouseNumber                *string                `json:"houseNumber,omitempty"`               
	IconURL                    *string                `json:"icon_url,omitempty"`                  
	ID                         *string                `json:"id,omitempty"`                        
	InsuranceCompany           *string                `json:"insuranceCompany,omitempty"`          
	InsuranceNumber            *string                `json:"insuranceNumber,omitempty"`           
	IntegrationData            *ClientIntegrationData `json:"integrationData,omitempty"`           
	IsLazy                     *bool                  `json:"isLazy,omitempty"`                    
	IsraelCity                 *IsraelCityUnion       `json:"israelCity"`                          
	IsVIP                      *bool                  `json:"isVIP,omitempty"`                     
	KupatHolim                 *KupatHolimUnion       `json:"kupatHolim"`                          
	Language                   *LanguageList          `json:"language,omitempty"`                  
	LastCreatedAppointment     map[string]interface{} `json:"lastCreatedAppointment"`              
	LastVisitedAppointment     map[string]interface{} `json:"lastVisitedAppointment"`              
	LazyResolvedDate           *string                `json:"lazyResolvedDate,omitempty"`          
	Locality                   *string                `json:"locality,omitempty"`                  
	LoyaltyInfo                *LoyaltyInfo           `json:"loyaltyInfo,omitempty"`               
	MiddleName                 *string                `json:"middleName"`                          
	Name                       string                 `json:"name"`                                
	PassportDate               *string                `json:"passportDate,omitempty"`              
	PassportID                 *string                `json:"passportId,omitempty"`                
	PassportIssued             *string                `json:"passportIssued,omitempty"`            
	PassportSeries             *string                `json:"passportSeries,omitempty"`            
	Phone                      []FaxElement           `json:"phone"`                               
	ReceiveSMSAfterService     *bool                  `json:"receiveSmsAfterService,omitempty"`    
	Sex                        *Sex                   `json:"sex,omitempty"`                       
	SkipMarketingNotifications *bool                  `json:"skipMarketingNotifications,omitempty"`
	SkipNotifications          *bool                  `json:"skipNotifications,omitempty"`         
	Snils                      *string                `json:"snils,omitempty"`                     
	Statistics                 *Statistics            `json:"statistics,omitempty"`                
	Status                     *ResourceStatus        `json:"status,omitempty"`                    
	Surname                    string                 `json:"surname"`                             
	TaxiPark                   *string                `json:"taxiPark"`                            
	TaxiParkMemberCount        *OrderWeight           `json:"taxiParkMemberCount"`                 
	TwoFAUserID                *string                `json:"twoFAUserID,omitempty"`               
	Updated                    *string                `json:"updated,omitempty"`                   
	WorkPlace                  *string                `json:"workPlace,omitempty"`                 
}

type ChildrenClient struct {
	ClientID   string  `json:"clientID"`            
	ExtraID    *string `json:"extraID,omitempty"`   
	MiddleName *string `json:"middleName,omitempty"`
	Name       *string `json:"name,omitempty"`      
	Surname    *string `json:"surname,omitempty"`   
}

type ClientExtraField struct {
	FieldID   string       `json:"fieldID"`  
	FieldName string       `json:"fieldName"`
	Value     *FluffyValue `json:"value"`    
}

type ClientFavResource struct {
	BusinessID float64 `json:"businessID"`
	NetworkID  string  `json:"networkID"` 
	ResourceID string  `json:"resourceID"`
}

type ClientIntegrationData struct {
	TransactionID *string `json:"transactionID,omitempty"`
}

type IsraelCityIsraelCity struct {
	CityID *string `json:"cityId,omitempty"`
	Name   *string `json:"name,omitempty"`  
}

type KupatHolimKupatHolim struct {
	KupatHolimID *string `json:"kupatHolimId,omitempty"`
	Name         *string `json:"name,omitempty"`        
}

type LoyaltyInfo struct {
	AnnualTurnover *float64   `json:"annualTurnover,omitempty"`
	BonusPoints    *float64   `json:"bonusPoints,omitempty"`   
	CardNumber     *string    `json:"cardNumber,omitempty"`    
	Presents       []Present  `json:"presents"`                
	Purchases      []Purchase `json:"purchases"`               
	Status         *string    `json:"status,omitempty"`        
}

type Present struct {
	Code    *string        `json:"code,omitempty"`   
	ExtraID *string        `json:"extraID,omitempty"`
	Name    *string        `json:"name,omitempty"`   
	Status  *PresentStatus `json:"status,omitempty"` 
}

type Purchase struct {
	Active         *bool    `json:"active,omitempty"`        
	ExpirationDate *string  `json:"expirationDate,omitempty"`
	Free           *bool    `json:"free,omitempty"`          
	GoodID         *string  `json:"goodID,omitempty"`        
	Price          *float64 `json:"price,omitempty"`         
	TransactionID  *string  `json:"transactionID,omitempty"` 
}

type Statistics struct {
	AppointmentsCount *float64                 `json:"appointmentsCount,omitempty"`
	Businesses        []map[string]interface{} `json:"businesses"`                 
	LastAppointment   *string                  `json:"lastAppointment,omitempty"`  
	LastBusinessID    *string                  `json:"lastBusinessId,omitempty"`   
	LastWorkerID      *string                  `json:"lastWorkerId,omitempty"`     
	Services          []map[string]interface{} `json:"services"`                   
	TotalPrices       []interface{}            `json:"totalPrices"`                
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
	Code    float64 `json:"code"`   // код ошибки; ; код ошибки создания клиента
	Data    *Data   `json:"data"`   // дополнительные данные об ошибке
	Message string  `json:"message"`// текстовая информация об ошибке
}

type ClientAddClientResponseResult struct {
	Business  MischievousBusiness `json:"business"`         
	Client    ClientClass         `json:"client"`           
	Documents []string            `json:"documents"`        
	Profile   *PurpleProfile      `json:"profile,omitempty"`
	Source    *Source             `json:"source,omitempty"` 
}

type MischievousBusiness struct {
	ID string `json:"id"`
}

type PurpleProfile struct {
	ID *string `json:"id,omitempty"`
}

type FindOrCreateClient struct {
	Request  ClientFindOrCreateClientRequest  `json:"request"` 
	Response ClientFindOfCreateClientResponse `json:"response"`
}

type ClientFindOrCreateClientRequest struct {
	Cred    *Cred                                 `json:"cred,omitempty"`// авторизационные параметры
	ID      *TimeFrameDate                        `json:"id"`            // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                                `json:"jsonrpc"`       // версия протокола - 2.0
	Method  string                                `json:"method"`        // название jsonrpc метода
	Params  ClientFindOrCreateClientRequestParams `json:"params"`        // параметры запроса
}

// параметры запроса
type ClientFindOrCreateClientRequestParams struct {
	Business          BraggadociousBusiness `json:"business"`                   
	Client            *ClientClass          `json:"client,omitempty"`           
	Network           *StickyNetwork        `json:"network,omitempty"`          
	SkipEmailCheck    *bool                 `json:"skipEmailCheck,omitempty"`   
	SkipProfileUpdate *bool                 `json:"skipProfileUpdate,omitempty"`
}

type BraggadociousBusiness struct {
	ID *TimeFrameDate `json:"id"`// идентификатор бизнеса
}

type StickyNetwork struct {
	ID *TimeFrameDate `json:"id"`// идентификатор нетворка
}

type ClientFindOfCreateClientResponse struct {
	Result  *ClientFindOfCreateClientResponseResult `json:"result,omitempty"` 
	Error   *ClientFindOfCreateClientResponseError  `json:"error,omitempty"`  // объект, содержащий информацию об ошибке
	ID      *float64                                `json:"id,omitempty"`     // значение числового типа для идентификации запроса на сервере
	Jsonrpc *string                                 `json:"jsonrpc,omitempty"`// версия протокола (2.0)
}

// объект, содержащий информацию об ошибке
//
// Код ошибки авторизации
type ClientFindOfCreateClientResponseError struct {
	Code    float64 `json:"code"`   // код ошибки; ; код ошибки создания клиента
	Data    *Data   `json:"data"`   // дополнительные данные об ошибке
	Message string  `json:"message"`// текстовая информация об ошибке
}

type ClientFindOfCreateClientResponseResult struct {
	Business  *Business1     `json:"business,omitempty"`
	Client    ClientClass    `json:"client"`            
	Documents []interface{}  `json:"documents"`         
	Profile   *FluffyProfile `json:"profile,omitempty"` 
}

type Business1 struct {
	ID string `json:"id"`
}

type FluffyProfile struct {
	ID string `json:"id"`
}

type UpdateClient struct {
	Request  ClientUpdateClientRequest  `json:"request"` 
	Response ClientUpdateClientResponse `json:"response"`
}

type ClientUpdateClientRequest struct {
	Cred    *Cred                           `json:"cred,omitempty"`// авторизационные параметры
	ID      *TimeFrameDate                  `json:"id"`            // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                          `json:"jsonrpc"`       // версия протокола - 2.0
	Method  string                          `json:"method"`        // название jsonrpc метода
	Params  ClientUpdateClientRequestParams `json:"params"`        // параметры запроса
}

// параметры запроса
type ClientUpdateClientRequestParams struct {
	Business *Business2     `json:"business,omitempty"`
	Client   ClientClass    `json:"client"`            
	Network  *IndigoNetwork `json:"network,omitempty"` 
}

type Business2 struct {
	ID *TimeFrameDate `json:"id"`// идентификатор бизнеса
}

type IndigoNetwork struct {
	ID *TimeFrameDate `json:"id"`// идентификатор нетворка
}

type ClientUpdateClientResponse struct {
	Result  *ClientUpdateClientResponseResult `json:"result,omitempty"` 
	Error   *ClientUpdateClientResponseError  `json:"error,omitempty"`  // объект, содержащий информацию об ошибке
	ID      *float64                          `json:"id,omitempty"`     // значение числового типа для идентификации запроса на сервере
	Jsonrpc *string                           `json:"jsonrpc,omitempty"`// версия протокола (2.0)
}

// объект, содержащий информацию об ошибке
//
// Код ошибки авторизации
type ClientUpdateClientResponseError struct {
	Code    float64 `json:"code"`   // код ошибки; ; код ошибки создания клиента
	Data    *Data   `json:"data"`   // дополнительные данные об ошибке
	Message string  `json:"message"`// текстовая информация об ошибке
}

type ClientUpdateClientResponseResult struct {
	AddedDocument map[string]interface{} `json:"added_document,omitempty"`
	Success       bool                   `json:"success"`                 
}

type UpdateClientInfo struct {
	Request  ClientUpdateClientInfoRequest  `json:"request"` 
	Response ClientUpdateClientInfoResponse `json:"response"`
}

type ClientUpdateClientInfoRequest struct {
	Cred    *Cred                               `json:"cred,omitempty"`// авторизационные параметры
	ID      *TimeFrameDate                      `json:"id"`            // значение числового типа для идентификации запроса на сервере
	Jsonrpc string                              `json:"jsonrpc"`       // версия протокола - 2.0
	Method  string                              `json:"method"`        // название jsonrpc метода
	Params  ClientUpdateClientInfoRequestParams `json:"params"`        // параметры запроса
}

// параметры запроса
type ClientUpdateClientInfoRequestParams struct {
	Business *Business3       `json:"business,omitempty"`
	Client   IndigoClient     `json:"client"`            
	Network  *IndecentNetwork `json:"network,omitempty"` 
}

type Business3 struct {
	ID *TimeFrameDate `json:"id"`// идентификатор бизнеса
}

// Данные клиента доступные для обновления клиентом
type IndigoClient struct {
	Address         *string             `json:"address,omitempty"`        
	Birthday        *Birthday           `json:"birthday"`                 
	Description     *string             `json:"description,omitempty"`    
	Email           []string            `json:"email"`                    
	ExtraFields     []PurpleExtraField  `json:"extraFields"`              
	FavResources    []PurpleFavResource `json:"favResources"`             
	IconURL         *string             `json:"icon_url,omitempty"`       
	ID              *string             `json:"id,omitempty"`             
	InsuranceNumber *string             `json:"insuranceNumber,omitempty"`
	Language        *LanguageList       `json:"language,omitempty"`       
	MiddleName      *string             `json:"middleName"`               
	Name            string              `json:"name"`                     
	PassportID      *string             `json:"passportId,omitempty"`     
	Sex             *Sex                `json:"sex,omitempty"`            
	Surname         string              `json:"surname"`                  
}

type PurpleExtraField struct {
	FieldID   string       `json:"fieldID"`  
	FieldName string       `json:"fieldName"`
	Value     *FluffyValue `json:"value"`    
}

type PurpleFavResource struct {
	BusinessID float64 `json:"businessID"`
	NetworkID  string  `json:"networkID"` 
	ResourceID string  `json:"resourceID"`
}

type IndecentNetwork struct {
	ID *TimeFrameDate `json:"id"`// идентификатор нетворка
}

type ClientUpdateClientInfoResponse struct {
	Result  *ClientUpdateClientInfoResponseResult `json:"result,omitempty"` 
	Error   *ClientUpdateClientInfoResponseError  `json:"error,omitempty"`  // объект, содержащий информацию об ошибке
	ID      *float64                              `json:"id,omitempty"`     // значение числового типа для идентификации запроса на сервере
	Jsonrpc *string                               `json:"jsonrpc,omitempty"`// версия протокола (2.0)
}

// объект, содержащий информацию об ошибке
//
// Код ошибки авторизации
type ClientUpdateClientInfoResponseError struct {
	Code    float64 `json:"code"`   // код ошибки; ; код ошибки создания клиента
	Data    *Data   `json:"data"`   // дополнительные данные об ошибке
	Message string  `json:"message"`// текстовая информация об ошибке
}

type ClientUpdateClientInfoResponseResult struct {
	AddedDocument map[string]interface{} `json:"added_document,omitempty"`
	Success       bool                   `json:"success"`                 
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
	Business  Business4         `json:"business"` 
	Resources []string          `json:"resources"`
	Taxonomy  TentacledTaxonomy `json:"taxonomy"` 
}

type Business4 struct {
	ID string `json:"id"`
}

type TentacledTaxonomy struct {
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
	Data    *Data    `json:"data"`             // дополнительные данные об ошибке
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
	Taxonomy  StickyTaxonomy `json:"taxonomy"` 
}

type StickyTaxonomy struct {
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
	Data    *Data    `json:"data"`             // дополнительные данные об ошибке
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
	Business  Business5      `json:"business"` 
	Duration  float64        `json:"duration"` 
	Durations []float64      `json:"durations"`
	Resources []string       `json:"resources"`
	Taxonomy  IndigoTaxonomy `json:"taxonomy"` 
}

type Business5 struct {
	ID string `json:"id"`
}

type IndigoTaxonomy struct {
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
	Data    *Data    `json:"data"`             // дополнительные данные об ошибке
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
	Business CracSlotsRequestBusinessParams                             `json:"business"`
	Filters  CracSlotsGetCRACDistributedResourcesAndRoomsRequestFilters `json:"filters"` 
}

type CracSlotsRequestBusinessParams struct {
	GeneralInfo         GeneralInfo               `json:"general_info"`        
	ID                  string                    `json:"id"`                  
	WidgetConfiguration PurpleWidgetConfiguration `json:"widget_configuration"`
}

type GeneralInfo struct {
	Timezone string `json:"timezone"`
}

type PurpleWidgetConfiguration struct {
	CracServer      string   `json:"cracServer"`               
	DisplaySlotSize *float64 `json:"displaySlotSize,omitempty"`
	HideGraySlots   *bool    `json:"hideGraySlots,omitempty"`  
}

type CracSlotsGetCRACDistributedResourcesAndRoomsRequestFilters struct {
	Date       PurpleDate                                                          `json:"date"`      
	Resources  []CracSlotsGetCRACDistributedResourcesAndRoomsRequestResourceFilter `json:"resources"` 
	Rooms      []string                                                            `json:"rooms"`     
	Taxonomies []string                                                            `json:"taxonomies"`
}

type PurpleDate struct {
	From string `json:"from"`
	To   string `json:"to"`  
}

type CracSlotsGetCRACDistributedResourcesAndRoomsRequestResourceFilter struct {
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
	Code    float64 `json:"code"`   // код ошибки
	Data    *Data   `json:"data"`   // дополнительные данные об ошибке
	Message string  `json:"message"`// текстовая информация об ошибке
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
	Business CracSlotsRequestBusinessParams                           `json:"business"`
	Filters  CracSlotsGetCRACInsuranceResourcesAndRoomsRequestFilters `json:"filters"` 
}

type CracSlotsGetCRACInsuranceResourcesAndRoomsRequestFilters struct {
	Date        FluffyDate                                                        `json:"date"`       
	InsuranceID string                                                            `json:"insuranceID"`
	Resources   []CracSlotsGetCRACInsuranceResourcesAndRoomsRequestResourceFilter `json:"resources"`  
	Rooms       []string                                                          `json:"rooms"`      
}

type FluffyDate struct {
	From string `json:"from"`
	To   string `json:"to"`  
}

type CracSlotsGetCRACInsuranceResourcesAndRoomsRequestResourceFilter struct {
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
	Code    float64 `json:"code"`   // код ошибки
	Data    *Data   `json:"data"`   // дополнительные данные об ошибке
	Message string  `json:"message"`// текстовая информация об ошибке
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
	Business CracSlotsRequestBusinessParams                  `json:"business"`
	Filters  CracSlotsGetCRACResourcesAndRoomsRequestFilters `json:"filters"` 
}

type CracSlotsGetCRACResourcesAndRoomsRequestFilters struct {
	Date       TentacledDate                                            `json:"date"`      
	Resources  []CracSlotsGetCRACResourcesAndRoomsRequestResourceFilter `json:"resources"` 
	Rooms      []string                                                 `json:"rooms"`     
	Taxonomies []string                                                 `json:"taxonomies"`
}

type TentacledDate struct {
	From string `json:"from"`
	To   string `json:"to"`  
}

type CracSlotsGetCRACResourcesAndRoomsRequestResourceFilter struct {
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
	Code    float64 `json:"code"`   // код ошибки
	Data    *Data   `json:"data"`   // дополнительные данные об ошибке
	Message string  `json:"message"`// текстовая информация об ошибке
}

type CracSlotsGetCRACResourcesAndRoomsResponseResult struct {
	Slots []CracDaySchedule `json:"slots"`
}

type CracDaySchedule struct {
	Date      string                   `json:"date"`     
	Resources []SlotResource           `json:"resources"`
	Rooms     []map[string]interface{} `json:"rooms"`    
}

type SlotResource struct {
	CutSlots   []CracCutSlot `json:"cutSlots"`  
	ResourceID string        `json:"resourceId"`
}

type CracCutSlot struct {
	Available bool    `json:"available"`
	Duration  float64 `json:"duration"` 
	End       float64 `json:"end"`      
	Start     float64 `json:"start"`    
}

type Models struct {
	Appointment Appointment   `json:"Appointment"`
	Business    BusinessClass `json:"Business"`   
	Client      ClientClass   `json:"Client"`     
}

type AppointmentClientAppear string
const (
	AppointmentClientAppearNONE AppointmentClientAppear = "NONE"
	NoAppear AppointmentClientAppear = "NO_APPEAR"
	YesAppear AppointmentClientAppear = "YES_APPEAR"
)

type ReminderStatus string
const (
	NotSet ReminderStatus = "NOT_SET"
	Off ReminderStatus = "OFF"
	On ReminderStatus = "ON"
)

type AppointmentClientPayment string
const (
	AppointmentClientPaymentNONE AppointmentClientPayment = "NONE"
	NoPayment AppointmentClientPayment = "NO_PAYMENT"
	YesPayedFull AppointmentClientPayment = "YES_PAYED_FULL"
	YesPayedOnline AppointmentClientPayment = "YES_PAYED_ONLINE"
	YesPayedPart AppointmentClientPayment = "YES_PAYED_PART"
)

type AppointmentStatus string
const (
	AppointmentStatusACTIVE AppointmentStatus = "ACTIVE"
	CancelledByAdmin AppointmentStatus = "CANCELLED_BY_ADMIN"
	CancelledByBusiness AppointmentStatus = "CANCELLED_BY_BUSINESS"
	CancelledByClient AppointmentStatus = "CANCELLED_BY_CLIENT"
	ConfirmedByAdmin AppointmentStatus = "CONFIRMED_BY_ADMIN"
	ConfirmedByBusiness AppointmentStatus = "CONFIRMED_BY_BUSINESS"
	ConfirmedByClient AppointmentStatus = "CONFIRMED_BY_CLIENT"
	ConfirmedMoved AppointmentStatus = "CONFIRMED_MOVED"
	Denied AppointmentStatus = "DENIED"
	Done AppointmentStatus = "DONE"
	Tentative AppointmentStatus = "TENTATIVE"
	TimedOut AppointmentStatus = "TIMED_OUT"
)

type ComplaintStatus string
const (
	Checking ComplaintStatus = "CHECKING"
	Closed ComplaintStatus = "CLOSED"
	Entered ComplaintStatus = "ENTERED"
	Invalid ComplaintStatus = "INVALID"
	Investigation ComplaintStatus = "INVESTIGATION"
	NotEntered ComplaintStatus = "NOT_ENTERED"
)

type Sex string
const (
	Empty Sex = ""
	Female Sex = "FEMALE"
	Male Sex = "MALE"
	NotSpecified Sex = "NOT_SPECIFIED"
)

type AdditionalFieldType string
const (
	Bool AdditionalFieldType = "BOOL"
	Coupon AdditionalFieldType = "COUPON"
	File AdditionalFieldType = "FILE"
	Radio AdditionalFieldType = "RADIO"
	String AdditionalFieldType = "STRING"
)

type DrinkAnswer string
const (
	Coffee DrinkAnswer = "COFFEE"
	DrinkAnswerNOTIMPORTANT DrinkAnswer = "NOT_IMPORTANT"
	Tea DrinkAnswer = "TEA"
)

type DiscountProvider string
const (
	Groupon DiscountProvider = "GROUPON"
	Local DiscountProvider = "LOCAL"
	Yandex DiscountProvider = "YANDEX"
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

type TalkAnswer string
const (
	NotTalk TalkAnswer = "NOT_TALK"
	Talk TalkAnswer = "TALK"
	TalkAnswerNOTIMPORTANT TalkAnswer = "NOT_IMPORTANT"
)

type Dir string
const (
	Asc Dir = "asc"
	Desc Dir = "desc"
)

type SortField string
const (
	Created SortField = "created"
	Start SortField = "start"
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

type InvoiceProvider string
const (
	Icount InvoiceProvider = "icount"
	InvoiceProviderDISABLE InvoiceProvider = "DISABLE"
)

type PaymentProvider string
const (
	Cloudpayments PaymentProvider = "cloudpayments"
	DeltaProcessing PaymentProvider = "deltaProcessing"
	PaymentProviderDISABLE PaymentProvider = "DISABLE"
	Pelecard PaymentProvider = "pelecard"
	YandexMoney PaymentProvider = "yandexMoney"
	YandexMoneyv3 PaymentProvider = "yandexMoneyv3"
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

type TelemedProvider string
const (
	Mmconf TelemedProvider = "mmconf"
	TelemedProviderDISABLE TelemedProvider = "DISABLE"
	Zoom TelemedProvider = "zoom"
)

type BackofficeType string
const (
	Common BackofficeType = "COMMON"
	Gt BackofficeType = "GT"
	Ll BackofficeType = "LL"
	MB BackofficeType = "MB"
	Mu BackofficeType = "MU"
)

type CountryEnum string
const (
	Am CountryEnum = "AM"
	Blr CountryEnum = "BLR"
	Ch CountryEnum = "CH"
	Country CountryEnum = "_"
	De CountryEnum = "DE"
	Es CountryEnum = "ES"
	Fi CountryEnum = "FI"
	Fr CountryEnum = "FR"
	Ge CountryEnum = "GE"
	Hu CountryEnum = "HU"
	IL CountryEnum = "IL"
	Kz CountryEnum = "KZ"
	LV CountryEnum = "LV"
	Li CountryEnum = "LI"
	Lt CountryEnum = "LT"
	Ru CountryEnum = "RU"
	Ua CountryEnum = "UA"
	Uk CountryEnum = "UK"
	Us CountryEnum = "US"
	Uz CountryEnum = "UZ"
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
	SocialNetworkYandex SocialNetwork = "Yandex"
	Twitter SocialNetwork = "Twitter"
	VKontakte SocialNetwork = "VKontakte"
	Yahoo SocialNetwork = "Yahoo"
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

type FieldElement string
const (
	Email FieldElement = "email"
	Name FieldElement = "name"
	Surname FieldElement = "surname"
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

type ResourceStatus string
const (
	Inactive ResourceStatus = "INACTIVE"
	StatusACTIVE ResourceStatus = "ACTIVE"
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

type Day string
const (
	Fri Day = "fri"
	Mon Day = "mon"
	Sat Day = "sat"
	Sun Day = "sun"
	Thu Day = "thu"
	Tue Day = "tue"
	Wed Day = "wed"
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

// тип сортировки работника
type WorkerSortingType string
const (
	MostFree WorkerSortingType = "most_free"
	WorkerSortingTypeNone WorkerSortingType = "none"
	Workload WorkerSortingType = "workload"
)

type YandexFeedType string
const (
	Dynamic YandexFeedType = "dynamic"
	No YandexFeedType = "no"
	Static YandexFeedType = "static"
	StaticServiceOnly YandexFeedType = "static-service-only"
)

type PresentStatus string
const (
	Ready PresentStatus = "READY"
	Received PresentStatus = "RECEIVED"
)

type Source string
const (
	Backoffice Source = "BACKOFFICE"
	MiniWidget Source = "MINI_WIDGET"
	MobileWidget Source = "MOBILE_WIDGET"
	Widget Source = "WIDGET"
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

// дополнительные данные об ошибке
type Data struct {
	AnythingMap map[string]interface{}
	String      *string
}

func (x *Data) UnmarshalJSON(data []byte) error {
	x.AnythingMap = nil
	object, err := unmarshalUnion(data, nil, nil, nil, &x.String, false, nil, false, nil, true, &x.AnythingMap, false, nil, false)
	if err != nil {
		return err
	}
	if object {
	}
	return nil
}

func (x *Data) MarshalJSON() ([]byte, error) {
	return marshalUnion(nil, nil, nil, x.String, false, nil, false, nil, x.AnythingMap != nil, x.AnythingMap, false, nil, false)
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
//
// идентификатор нетворка
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

type Birthday struct {
	AnythingMap map[string]interface{}
	String      *string
}

func (x *Birthday) UnmarshalJSON(data []byte) error {
	x.AnythingMap = nil
	object, err := unmarshalUnion(data, nil, nil, nil, &x.String, false, nil, false, nil, true, &x.AnythingMap, false, nil, true)
	if err != nil {
		return err
	}
	if object {
	}
	return nil
}

func (x *Birthday) MarshalJSON() ([]byte, error) {
	return marshalUnion(nil, nil, nil, x.String, false, nil, false, nil, x.AnythingMap != nil, x.AnythingMap, false, nil, true)
}

type PurpleValue struct {
	AnythingArray []interface{}
	AnythingMap   map[string]interface{}
	Bool          *bool
	Double        *float64
	String        *string
}

func (x *PurpleValue) UnmarshalJSON(data []byte) error {
	x.AnythingArray = nil
	x.AnythingMap = nil
	object, err := unmarshalUnion(data, nil, &x.Double, &x.Bool, &x.String, true, &x.AnythingArray, false, nil, true, &x.AnythingMap, false, nil, true)
	if err != nil {
		return err
	}
	if object {
	}
	return nil
}

func (x *PurpleValue) MarshalJSON() ([]byte, error) {
	return marshalUnion(nil, x.Double, x.Bool, x.String, x.AnythingArray != nil, x.AnythingArray, false, nil, x.AnythingMap != nil, x.AnythingMap, false, nil, true)
}

type ID struct {
	String      *string
	StringArray []string
}

func (x *ID) UnmarshalJSON(data []byte) error {
	x.StringArray = nil
	object, err := unmarshalUnion(data, nil, nil, nil, &x.String, true, &x.StringArray, false, nil, false, nil, false, nil, false)
	if err != nil {
		return err
	}
	if object {
	}
	return nil
}

func (x *ID) MarshalJSON() ([]byte, error) {
	return marshalUnion(nil, nil, nil, x.String, x.StringArray != nil, x.StringArray, false, nil, false, nil, false, nil, false)
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

type FluffyValue struct {
	AnythingMap map[string]interface{}
	Bool        *bool
	Double      *float64
	String      *string
}

func (x *FluffyValue) UnmarshalJSON(data []byte) error {
	x.AnythingMap = nil
	object, err := unmarshalUnion(data, nil, &x.Double, &x.Bool, &x.String, false, nil, false, nil, true, &x.AnythingMap, false, nil, true)
	if err != nil {
		return err
	}
	if object {
	}
	return nil
}

func (x *FluffyValue) MarshalJSON() ([]byte, error) {
	return marshalUnion(nil, x.Double, x.Bool, x.String, false, nil, false, nil, x.AnythingMap != nil, x.AnythingMap, false, nil, true)
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

type IsraelCityUnion struct {
	AnythingArray        []interface{}
	Bool                 *bool
	Double               *float64
	Integer              *int64
	IsraelCityIsraelCity *IsraelCityIsraelCity
	String               *string
}

func (x *IsraelCityUnion) UnmarshalJSON(data []byte) error {
	x.AnythingArray = nil
	x.IsraelCityIsraelCity = nil
	var c IsraelCityIsraelCity
	object, err := unmarshalUnion(data, &x.Integer, &x.Double, &x.Bool, &x.String, true, &x.AnythingArray, true, &c, false, nil, false, nil, true)
	if err != nil {
		return err
	}
	if object {
		x.IsraelCityIsraelCity = &c
	}
	return nil
}

func (x *IsraelCityUnion) MarshalJSON() ([]byte, error) {
	return marshalUnion(x.Integer, x.Double, x.Bool, x.String, x.AnythingArray != nil, x.AnythingArray, x.IsraelCityIsraelCity != nil, x.IsraelCityIsraelCity, false, nil, false, nil, true)
}

type KupatHolimUnion struct {
	AnythingArray        []interface{}
	Bool                 *bool
	Double               *float64
	Integer              *int64
	KupatHolimKupatHolim *KupatHolimKupatHolim
	String               *string
}

func (x *KupatHolimUnion) UnmarshalJSON(data []byte) error {
	x.AnythingArray = nil
	x.KupatHolimKupatHolim = nil
	var c KupatHolimKupatHolim
	object, err := unmarshalUnion(data, &x.Integer, &x.Double, &x.Bool, &x.String, true, &x.AnythingArray, true, &c, false, nil, false, nil, true)
	if err != nil {
		return err
	}
	if object {
		x.KupatHolimKupatHolim = &c
	}
	return nil
}

func (x *KupatHolimUnion) MarshalJSON() ([]byte, error) {
	return marshalUnion(x.Integer, x.Double, x.Bool, x.String, x.AnythingArray != nil, x.AnythingArray, x.KupatHolimKupatHolim != nil, x.KupatHolimKupatHolim, false, nil, false, nil, true)
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
