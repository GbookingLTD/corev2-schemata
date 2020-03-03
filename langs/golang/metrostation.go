package ru.gbooking.apiv2

type MetroStation struct {
	Type                 TypeElement            `json:"type"`                
	Properties           MetroStationProperties `json:"properties"`          
	Required             []string               `json:"required"`            
	AdditionalProperties bool                   `json:"additionalProperties"`
}
