package ru.gbooking.apiv2

type OneOfProperties struct {
	User  PuneHedgehog `json:"user"` 
	Token PuneHedgehog `json:"token"`
}
