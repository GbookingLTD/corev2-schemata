package ru.gbooking.apiv2

type OriginGeneralInfo struct {
	Description string      `json:"description"`
	Type        TypeElement `json:"type"`       
	Ref         string      `json:"$ref"`       
}
