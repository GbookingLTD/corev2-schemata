package ru.gbooking.apiv2

type CracSlotSize struct {
	Type    TypeElement `json:"type"`   
	Enum    []int64     `json:"enum"`   
	Default int64       `json:"default"`
}
