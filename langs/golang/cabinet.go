package ru.gbooking.apiv2

type Cabinet struct {
	Title                string            `json:"title"`               
	Type                 TypeElement       `json:"type"`                
	Properties           CabinetProperties `json:"properties"`          
	AdditionalProperties bool              `json:"additionalProperties"`
}
