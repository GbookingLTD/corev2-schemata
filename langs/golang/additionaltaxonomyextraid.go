package ru.gbooking.apiv2

type AdditionalTaxonomyExtraID struct {
	Type  TypeElement                    `json:"type"` 
	Items AdditionalTaxonomyExtraIDItems `json:"items"`
}
