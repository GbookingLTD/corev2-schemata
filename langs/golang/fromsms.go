package ru.gbooking.apiv2

type FromSMS struct {
	Type    []TypeElement `json:"type"`   
	Default bool          `json:"default"`
}
