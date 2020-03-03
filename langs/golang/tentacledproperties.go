package ru.gbooking.apiv2

type TentacledProperties struct {
	ID                  TartuGecko          `json:"_id"`                
	TaxonomyID          TartuGecko          `json:"taxonomyID"`         
	AdditionalDurations AdditionalDurations `json:"additionalDurations"`
	BusinessID          TartuGecko          `json:"businessID"`         
}
