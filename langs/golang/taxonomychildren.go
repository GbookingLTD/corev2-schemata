package ru.gbooking.apiv2

type TaxonomyChildren struct {
	Description string      `json:"description"`
	Type        TypeElement `json:"type"`       
	Items       GeneralInfo `json:"items"`      
}
