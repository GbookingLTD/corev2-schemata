package ru.gbooking.apiv2

type ResourceProfile struct {
	Title       string                    `json:"title"`      
	Description string                    `json:"description"`
	Type        TypeElement               `json:"type"`       
	Properties  ResourceProfileProperties `json:"properties"` 
	Required    []string                  `json:"required"`   
}
