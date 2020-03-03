package ru.gbooking.apiv2

type Repeats struct {
	Type     TypeElement      `json:"type"`     
	Enum     []string         `json:"enum"`     
	Default  string           `json:"default"`  
	MetaEnum []PurpleMetaEnum `json:"meta:enum"`
}
