package ru.gbooking.apiv2

type ChildrenTaxonomyTypes struct {
	Type  TypeElement    `json:"type"` 
	Items BackofficeType `json:"items"`
}
