package ru.gbooking.apiv2

type BusinessTaxonomyPrice struct {
	Title                string                          `json:"title"`               
	Type                 TypeElement                     `json:"type"`                
	Properties           BusinessTaxonomyPriceProperties `json:"properties"`          
	Required             []string                        `json:"required"`            
	AdditionalProperties bool                            `json:"additionalProperties"`
}
