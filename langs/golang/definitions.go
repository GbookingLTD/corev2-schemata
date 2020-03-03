package ru.gbooking.apiv2

type Definitions struct {
	MetroStation                      *MetroStation                      `json:"MetroStation,omitempty"`                     
	Department                        *Department                        `json:"Department,omitempty"`                       
	Cabinet                           *Cabinet                           `json:"Cabinet,omitempty"`                          
	TaxonomyShowcase                  *TaxonomyShowcase                  `json:"TaxonomyShowcase,omitempty"`                 
	BusinessTaxonomyPrice             *BusinessTaxonomyPrice             `json:"BusinessTaxonomyPrice,omitempty"`            
	AdditionalBusinessTaxonomyPrice   *AdditionalBusinessTaxonomyPrice   `json:"AdditionalBusinessTaxonomyPrice,omitempty"`  
	AdditionalBusinessTaxonomyProduct *AdditionalBusinessTaxonomyProduct `json:"AdditionalBusinessTaxonomyProduct,omitempty"`
	AdditionalDuration                *AdditionalDuration                `json:"AdditionalDuration,omitempty"`               
	Consumable                        *Consumable                        `json:"Consumable,omitempty"`                       
	BusinessTaxonomy                  *BusinessTaxonomy                  `json:"BusinessTaxonomy,omitempty"`                 
	BackofficeConfiguration           *BackofficeConfiguration           `json:"BackofficeConfiguration,omitempty"`          
	WidgetConfiguration               *WidgetConfiguration               `json:"WidgetConfiguration,omitempty"`              
	ResourceProfile                   *ResourceProfile                   `json:"ResourceProfile,omitempty"`                  
	ResourceTaxonomyLevel             *ResourceTaxonomyLevel             `json:"ResourceTaxonomyLevel,omitempty"`            
	ResourceTaxonomyChildren          *ResourceTaxonomyChildren          `json:"ResourceTaxonomyChildren,omitempty"`         
	EvenOddTimetable                  *EvenOddTimetable                  `json:"EvenOddTimetable,omitempty"`                 
	ResourceLocation                  *ResourceLocation                  `json:"ResourceLocation,omitempty"`                 
}
