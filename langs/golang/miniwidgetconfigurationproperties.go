package ru.gbooking.apiv2

type MiniWidgetConfigurationProperties struct {
	Title1 TartuGecko            `json:"title1"`
	Title2 TartuGecko            `json:"title2"`
	Fields ChildrenTaxonomyTypes `json:"fields"`
}
