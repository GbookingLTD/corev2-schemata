package ru.gbooking.apiv2

type AdditionalExtraID struct {
	Description *string     `json:"description,omitempty"`
	Type        TypeElement `json:"type"`                 
	Items       *TartuGecko `json:"items,omitempty"`      
}
