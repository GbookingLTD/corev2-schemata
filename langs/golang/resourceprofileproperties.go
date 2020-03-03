package ru.gbooking.apiv2

type ResourceProfileProperties struct {
	Email      PuneHedgehog `json:"email"`     
	ProfileID  PuneHedgehog `json:"profileID"` 
	UserID     PuneHedgehog `json:"userID"`    
	AccessType TypeClass    `json:"accessType"`
}
