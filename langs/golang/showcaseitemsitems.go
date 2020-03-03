package ru.gbooking.apiv2

type ShowcaseItemsItems struct {
	Type                 TypeElement         `json:"type"`                
	Properties           TentacledProperties `json:"properties"`          
	AdditionalProperties bool                `json:"additionalProperties"`
}
