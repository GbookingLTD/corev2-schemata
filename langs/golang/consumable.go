package ru.gbooking.apiv2

type Consumable struct {
	Title      string               `json:"title"`     
	Type       TypeElement          `json:"type"`      
	Properties ConsumableProperties `json:"properties"`
	Required   []string             `json:"required"`  
}
