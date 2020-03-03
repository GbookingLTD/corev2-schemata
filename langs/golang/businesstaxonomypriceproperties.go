package ru.gbooking.apiv2

type BusinessTaxonomyPriceProperties struct {
	Currency    Currency    `json:"currency"`   
	Amount      Amount      `json:"amount"`     
	StockAmount StockAmount `json:"stockAmount"`
	Type        TypeClass   `json:"type"`       
}
