package ru.gbooking.apiv2

type AdditionalDurationsItems struct {
	Type                 TypeElement      `json:"type"`                
	Properties           StickyProperties `json:"properties"`          
	AdditionalProperties bool             `json:"additionalProperties"`
}
