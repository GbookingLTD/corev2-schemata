package ru.gbooking.apiv2

type MiniWidgetConfiguration struct {
	Type       TypeElement                       `json:"type"`      
	Properties MiniWidgetConfigurationProperties `json:"properties"`
}
