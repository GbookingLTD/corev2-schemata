package ru.gbooking.apiv2

type Code struct {
	Description string            `json:"description"`
	Type        TypeElement       `json:"type"`       
	MetaEnum    map[string]string `json:"meta:enum"`  
	Enum        []int64           `json:"enum"`       
}
