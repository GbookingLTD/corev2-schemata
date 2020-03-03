package ru.gbooking.apiv2

type FeedBackMinRating struct {
	Type    TypeElement `json:"type"`   
	Enum    []string    `json:"enum"`   
	Default int64       `json:"default"`
}
