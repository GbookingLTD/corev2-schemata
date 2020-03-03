package ru.gbooking.apiv2

type Department struct {
	Title                string               `json:"title"`               
	Type                 TypeElement          `json:"type"`                
	Properties           DepartmentProperties `json:"properties"`          
	Required             []string             `json:"required"`            
	AdditionalProperties bool                 `json:"additionalProperties"`
}
