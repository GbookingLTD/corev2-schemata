package ru.gbooking.apiv2

type PurpleMetaEnum struct {
	PlanClinic       *string `json:"PLAN_CLINIC,omitempty"`       
	PlanClinicOnline *string `json:"PLAN_CLINIC_ONLINE,omitempty"`
	OncallOnline     *string `json:"ONCALL_ONLINE,omitempty"`     
	PlanOnline       *string `json:"PLAN_ONLINE,omitempty"`       
}
