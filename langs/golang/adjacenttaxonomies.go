package ru.gbooking.apiv2

type AdjacentTaxonomies struct {
	Type  TypeElement             `json:"type"` 
	Items AdjacentTaxonomiesItems `json:"items"`
}
