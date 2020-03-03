package ru.gbooking.apiv2

type CredOneOf struct {
	Type                 TypeElement      `json:"type"`                
	Params               []interface{}    `json:"params"`              
	Required             []string         `json:"required"`            
	AdditionalProperties bool             `json:"additionalProperties"`
	Properties           *OneOfProperties `json:"properties,omitempty"`
}
