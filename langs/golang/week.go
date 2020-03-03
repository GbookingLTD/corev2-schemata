package ru.gbooking.apiv2

type Week struct {
	Type                 TypeElement    `json:"type"`                
	Properties           WeekProperties `json:"properties"`          
	Required             []string       `json:"required"`            
	AdditionalProperties bool           `json:"additionalProperties"`
}
