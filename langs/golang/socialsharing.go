package ru.gbooking.apiv2

type SocialSharing struct {
	Type       TypeElement             `json:"type"`      
	Properties SocialSharingProperties `json:"properties"`
}
