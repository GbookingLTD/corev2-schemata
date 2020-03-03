package ru.gbooking.apiv2

type TaxonomyShowcase struct {
	Title                string                     `json:"title"`               
	Type                 TypeElement                `json:"type"`                
	Properties           TaxonomyShowcaseProperties `json:"properties"`          
	AdditionalProperties bool                       `json:"additionalProperties"`
}
