package ru.gbooking.apiv2

type EvenOddTimetableProperties struct {
	StartPeriod TypeClass        `json:"startPeriod"`
	Even        TaxonomyChildren `json:"even"`       
	Odd         TaxonomyChildren `json:"odd"`        
}
