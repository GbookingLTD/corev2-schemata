package ru.gbooking.apiv2

type Jsonrpc struct {
	Description string      `json:"description"`
	Type        TypeElement `json:"type"`       
	Const       string      `json:"const"`      
}
