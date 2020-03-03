package ru.gbooking.apiv2

type Cred struct {
	Description string      `json:"description"`
	OneOf       []CredOneOf `json:"oneOf"`      
}
