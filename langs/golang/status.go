package ru.gbooking.apiv2

type Status struct {
	Definition string      `json:"definition"`
	Type       TypeElement `json:"type"`      
	Enum       []string    `json:"enum"`      
}
