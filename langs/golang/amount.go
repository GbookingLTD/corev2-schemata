package ru.gbooking.apiv2

type Amount struct {
	Description string      `json:"description"`
	Type        TypeElement `json:"type"`       
	Default     string      `json:"default"`    
}
