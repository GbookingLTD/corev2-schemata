package ru.gbooking.apiv2

type ShowcaseItems struct {
	Type  TypeElement        `json:"type"` 
	Items ShowcaseItemsItems `json:"items"`
}
