package ru.gbooking.apiv2

type AdditionalBusinessTaxonomyPrice struct {
	Title                string                                    `json:"title"`               
	Type                 TypeElement                               `json:"type"`                
	Properties           AdditionalBusinessTaxonomyPriceProperties `json:"properties"`          
	Required             []string                                  `json:"required"`            
	AdditionalProperties bool                                      `json:"additionalProperties"`
}
