package ru.gbooking.apiv2

type DiscountedPriceRounding struct {
	Type       TypeElement                       `json:"type"`      
	Properties DiscountedPriceRoundingProperties `json:"properties"`
}
