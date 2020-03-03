package ru.gbooking.apiv2

type TaxonomiesComplex struct {
	Type  TypeElement            `json:"type"` 
	Items TaxonomiesComplexItems `json:"items"`
}
