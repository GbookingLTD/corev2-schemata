package ru.gbooking.apiv2

type CommonProperties struct {
	Jsonrpc Jsonrpc       `json:"jsonrpc"`         
	ID      ID            `json:"id"`              
	Error   *Error        `json:"error,omitempty"` 
	Cred    *Cred         `json:"cred,omitempty"`  
	Method  *PuneHedgehog `json:"method,omitempty"`
	Params  *PuneHedgehog `json:"params,omitempty"`
	Result  *PuneHedgehog `json:"result,omitempty"`
}
