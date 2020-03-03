package ru.gbooking.apiv2

type AdditionalDurations struct {
	Type  TypeElement              `json:"type"` 
	Items AdditionalDurationsItems `json:"items"`
}
