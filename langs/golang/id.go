package ru.gbooking.apiv2

type ID struct {
	Description string     `json:"description"`
	Type        *TypeUnion `json:"type"`       
}
