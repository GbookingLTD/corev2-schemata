package ru.gbooking.apiv2

type PropertiesBackofficeConfiguration struct {
	Type       TypeElement                            `json:"type"`      
	Properties BackofficeConfigurationPropertiesClass `json:"properties"`
}
