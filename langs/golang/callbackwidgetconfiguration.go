package ru.gbooking.apiv2

type CallbackWidgetConfiguration struct {
	Type       TypeElement                           `json:"type"`      
	Properties CallbackWidgetConfigurationProperties `json:"properties"`
}
