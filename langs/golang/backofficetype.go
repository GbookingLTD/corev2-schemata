package ru.gbooking.apiv2

type BackofficeType struct {
	Type TypeElement `json:"type"`
	Enum []string    `json:"enum"`
}
