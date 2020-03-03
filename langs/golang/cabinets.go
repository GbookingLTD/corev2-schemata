package ru.gbooking.apiv2

type Cabinets struct {
	Type  TypeElement `json:"type"` 
	Items GeneralInfo `json:"items"`
}
