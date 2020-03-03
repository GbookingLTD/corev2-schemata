package ru.gbooking.apiv2

type AdditionalBusinessTaxonomyPriceProperties struct {
	ResourceLevel PuneHedgehog `json:"resourceLevel"`
	Currency      Currency     `json:"currency"`     
	Amount        Amount       `json:"amount"`       
	StockAmount   Amount       `json:"stockAmount"`  
	Type          TypeClass    `json:"type"`         
}
