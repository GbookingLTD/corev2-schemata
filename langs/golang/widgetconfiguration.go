package ru.gbooking.apiv2

type WidgetConfiguration struct {
	Title                string                        `json:"title"`               
	Type                 TypeElement                   `json:"type"`                
	Properties           WidgetConfigurationProperties `json:"properties"`          
	AdditionalProperties bool                          `json:"additionalProperties"`
}
