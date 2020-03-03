package ru.gbooking.apiv2

type ClientBlockingSettings struct {
	Type                 TypeElement                      `json:"type"`                
	Properties           ClientBlockingSettingsProperties `json:"properties"`          
	AdditionalProperties bool                             `json:"additionalProperties"`
}
