// This file was generated from JSON Schema using quicktype, do not modify it directly.
// To parse and unparse this JSON data, add this code to your project and do:
//
//    models, err := UnmarshalModels(bytes)
//    bytes, err = models.Marshal()

package ru.gbooking.apiv2

import "encoding/json"

func UnmarshalModels(data []byte) (Models, error) {
	var r Models
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Models) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Models struct {
	ID                   string           `json:"$id"`                           
	Title                *string          `json:"title,omitempty"`               
	Properties           ModelsProperties `json:"properties"`                    
	Required             []string         `json:"required"`                      
	Definitions          *Definitions     `json:"definitions,omitempty"`         
	AdditionalProperties *bool            `json:"additionalProperties,omitempty"`
	MetaExtensible       *bool            `json:"meta:extensible,omitempty"`     
	MetaExtends          []string         `json:"meta:extends"`                  
	Type                 *TypeElement     `json:"type,omitempty"`                
	Description          *string          `json:"description,omitempty"`         
}
