package ru.gbooking.apiv2

type AdditionalBusinessTaxonomyProduct struct {
	Title                string                                      `json:"title"`               
	Type                 TypeElement                                 `json:"type"`                
	Properties           AdditionalBusinessTaxonomyProductProperties `json:"properties"`          
	Required             []string                                    `json:"required"`            
	AdditionalProperties bool                                        `json:"additionalProperties"`
}
