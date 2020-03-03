package ru.gbooking.apiv2

type ResourceLocation struct {
	Type       TypeElement                `json:"type"`      
	Properties ResourceLocationProperties `json:"properties"`
	Required   []interface{}              `json:"required"`  
}
