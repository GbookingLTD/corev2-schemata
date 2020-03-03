package ru.gbooking.apiv2

type AdjacentTaxonomiesItems struct {
	Type                 TypeElement      `json:"type"`                
	Properties           PurpleProperties `json:"properties"`          
	AdditionalProperties bool             `json:"additionalProperties"`
}
