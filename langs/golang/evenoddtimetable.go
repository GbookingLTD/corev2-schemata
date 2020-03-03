package ru.gbooking.apiv2

type EvenOddTimetable struct {
	MetaExtensible bool                       `json:"meta:extensible"`
	MetaExtends    []string                   `json:"meta:extends"`   
	Type           TypeElement                `json:"type"`           
	Properties     EvenOddTimetableProperties `json:"properties"`     
	Required       []string                   `json:"required"`       
}
