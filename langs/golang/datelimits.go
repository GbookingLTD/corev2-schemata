package ru.gbooking.apiv2

type DateLimits struct {
	Type  TypeElement     `json:"type"` 
	Items DateLimitsItems `json:"items"`
}
