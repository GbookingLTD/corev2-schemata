package ru.gbooking.apiv2

type Error struct {
	Description string          `json:"description"`
	Type        TypeElement     `json:"type"`       
	Properties  ErrorProperties `json:"properties"` 
	Required    []string        `json:"required"`   
}
