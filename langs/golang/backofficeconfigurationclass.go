package ru.gbooking.apiv2

type BackofficeConfigurationClass struct {
	Type *TypeElement `json:"type,omitempty"`
	Ref  *string      `json:"$ref,omitempty"`
}
