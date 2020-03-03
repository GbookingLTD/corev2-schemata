package ru.gbooking.apiv2

type ResourceTaxonomyChildren struct {
	Type       TypeElement                        `json:"type"`      
	Properties ResourceTaxonomyChildrenProperties `json:"properties"`
	Required   []string                           `json:"required"`  
}
