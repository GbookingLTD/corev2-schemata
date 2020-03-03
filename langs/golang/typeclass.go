package ru.gbooking.apiv2

type TypeClass struct {
	Description string         `json:"description"`
	Type        TypeElement    `json:"type"`       
	Enum        []string       `json:"enum"`       
	MetaEnum    []TypeMetaEnum `json:"meta:enum"`  
}
