package ru.gbooking.apiv2

type WeekProperties struct {
	Sun Cabinets `json:"sun"`
	Mon Cabinets `json:"mon"`
	Tue Cabinets `json:"tue"`
	Wed Cabinets `json:"wed"`
	Thu Cabinets `json:"thu"`
	Fri Cabinets `json:"fri"`
	Sat Cabinets `json:"sat"`
}
