package ru.gbooking.apiv2

type ErrorProperties struct {
	Code    Code         `json:"code"`   
	Message PuneHedgehog `json:"message"`
	Data    PuneHedgehog `json:"data"`   
}
