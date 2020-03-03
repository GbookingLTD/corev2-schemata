package ru.gbooking.apiv2

type BackofficeConfiguration struct {
	Title                string                            `json:"title"`               
	Type                 TypeElement                       `json:"type"`                
	Properties           BackofficeConfigurationProperties `json:"properties"`          
	AdditionalProperties bool                              `json:"additionalProperties"`
}
