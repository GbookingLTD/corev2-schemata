package ru.gbooking.apiv2

type AdditionalDuration struct {
	Title                string                       `json:"title"`               
	Type                 TypeElement                  `json:"type"`                
	Properties           AdditionalDurationProperties `json:"properties"`          
	AdditionalProperties bool                         `json:"additionalProperties"`
}
