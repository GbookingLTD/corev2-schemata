package ru.gbooking.apiv2

type TaxonomyShowcaseProperties struct {
	BaseBusinessID   TartuGecko `json:"baseBusinessID"`  
	OriginBusinessID TartuGecko `json:"originBusinessID"`
	ShowcaseItemID   TartuGecko `json:"showcaseItemID"`  
	IsBaseNode       TartuGecko `json:"isBaseNode"`      
}
