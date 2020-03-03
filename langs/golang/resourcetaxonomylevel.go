package ru.gbooking.apiv2

type ResourceTaxonomyLevel struct {
	ID         string                          `json:"$id"`       
	Type       TypeElement                     `json:"type"`      
	Properties ResourceTaxonomyLevelProperties `json:"properties"`
	Required   []string                        `json:"required"`  
}
