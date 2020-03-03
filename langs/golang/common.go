// This file was generated from JSON Schema using quicktype, do not modify it directly.
// To parse and unparse this JSON data, add this code to your project and do:
//
//    common, err := UnmarshalCommon(bytes)
//    bytes, err = common.Marshal()

package ru.gbooking.apiv2

import "encoding/json"

func UnmarshalCommon(data []byte) (Common, error) {
	var r Common
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Common) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Common struct {
	ID                   string           `json:"$id"`                  
	Title                string           `json:"title"`                
	Properties           CommonProperties `json:"properties"`           
	Required             []string         `json:"required"`             
	AdditionalProperties bool             `json:"additionalProperties"` 
	Description          *string          `json:"description,omitempty"`
}
