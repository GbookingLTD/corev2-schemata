package ru.gbooking.apiv2

type BusinessTaxonomy struct {
	Title                string                     `json:"title"`               
	Type                 TypeElement                `json:"type"`                
	Properties           BusinessTaxonomyProperties `json:"properties"`          
	AdditionalProperties bool                       `json:"additionalProperties"`
}
