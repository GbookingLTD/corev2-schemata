package ru.gbooking.apiv2

type PuneHedgehog struct {
	Description *string     `json:"description,omitempty"`
	Type        TypeElement `json:"type"`                 
}
