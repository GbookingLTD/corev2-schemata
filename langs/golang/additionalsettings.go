package ru.gbooking.apiv2

type AdditionalSettings struct {
	Type       TypeElement                  `json:"type"`      
	Properties AdditionalSettingsProperties `json:"properties"`
}
