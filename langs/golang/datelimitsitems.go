package ru.gbooking.apiv2

type DateLimitsItems struct {
	Type                 TypeElement      `json:"type"`                
	Properties           FluffyProperties `json:"properties"`          
	AdditionalProperties bool             `json:"additionalProperties"`
}
