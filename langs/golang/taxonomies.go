package ru.gbooking.apiv2

type Taxonomies struct {
	Type        TypeElement                  `json:"type"`                 
	Items       BackofficeConfigurationClass `json:"items"`                
	Description *string                      `json:"description,omitempty"`
}
