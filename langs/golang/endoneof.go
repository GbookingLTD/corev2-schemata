package ru.gbooking.apiv2

type EndOneOf struct {
	Type   *TypeElement `json:"type,omitempty"`  
	Format *string      `json:"format,omitempty"`
	Const  interface{}  `json:"const"`           
}
