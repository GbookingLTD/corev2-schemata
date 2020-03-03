package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class Definitions {
    private MetroStation metroStation;
    private Department department;
    private Cabinet cabinet;
    private TaxonomyShowcase taxonomyShowcase;
    private BusinessTaxonomyPrice businessTaxonomyPrice;
    private AdditionalBusinessTaxonomyPrice additionalBusinessTaxonomyPrice;
    private AdditionalBusinessTaxonomyProduct additionalBusinessTaxonomyProduct;
    private AdditionalDuration additionalDuration;
    private Consumable consumable;
    private BusinessTaxonomy businessTaxonomy;
    private BackofficeConfiguration backofficeConfiguration;
    private WidgetConfiguration widgetConfiguration;
    private ResourceProfile resourceProfile;
    private ResourceTaxonomyLevel resourceTaxonomyLevel;
    private ResourceTaxonomyChildren resourceTaxonomyChildren;
    private EvenOddTimetable evenOddTimetable;
    private ResourceLocation resourceLocation;

    @JsonProperty("MetroStation")
    public MetroStation getMetroStation() { return metroStation; }
    @JsonProperty("MetroStation")
    public void setMetroStation(MetroStation value) { this.metroStation = value; }

    @JsonProperty("Department")
    public Department getDepartment() { return department; }
    @JsonProperty("Department")
    public void setDepartment(Department value) { this.department = value; }

    @JsonProperty("Cabinet")
    public Cabinet getCabinet() { return cabinet; }
    @JsonProperty("Cabinet")
    public void setCabinet(Cabinet value) { this.cabinet = value; }

    @JsonProperty("TaxonomyShowcase")
    public TaxonomyShowcase getTaxonomyShowcase() { return taxonomyShowcase; }
    @JsonProperty("TaxonomyShowcase")
    public void setTaxonomyShowcase(TaxonomyShowcase value) { this.taxonomyShowcase = value; }

    @JsonProperty("BusinessTaxonomyPrice")
    public BusinessTaxonomyPrice getBusinessTaxonomyPrice() { return businessTaxonomyPrice; }
    @JsonProperty("BusinessTaxonomyPrice")
    public void setBusinessTaxonomyPrice(BusinessTaxonomyPrice value) { this.businessTaxonomyPrice = value; }

    @JsonProperty("AdditionalBusinessTaxonomyPrice")
    public AdditionalBusinessTaxonomyPrice getAdditionalBusinessTaxonomyPrice() { return additionalBusinessTaxonomyPrice; }
    @JsonProperty("AdditionalBusinessTaxonomyPrice")
    public void setAdditionalBusinessTaxonomyPrice(AdditionalBusinessTaxonomyPrice value) { this.additionalBusinessTaxonomyPrice = value; }

    @JsonProperty("AdditionalBusinessTaxonomyProduct")
    public AdditionalBusinessTaxonomyProduct getAdditionalBusinessTaxonomyProduct() { return additionalBusinessTaxonomyProduct; }
    @JsonProperty("AdditionalBusinessTaxonomyProduct")
    public void setAdditionalBusinessTaxonomyProduct(AdditionalBusinessTaxonomyProduct value) { this.additionalBusinessTaxonomyProduct = value; }

    @JsonProperty("AdditionalDuration")
    public AdditionalDuration getAdditionalDuration() { return additionalDuration; }
    @JsonProperty("AdditionalDuration")
    public void setAdditionalDuration(AdditionalDuration value) { this.additionalDuration = value; }

    @JsonProperty("Consumable")
    public Consumable getConsumable() { return consumable; }
    @JsonProperty("Consumable")
    public void setConsumable(Consumable value) { this.consumable = value; }

    @JsonProperty("BusinessTaxonomy")
    public BusinessTaxonomy getBusinessTaxonomy() { return businessTaxonomy; }
    @JsonProperty("BusinessTaxonomy")
    public void setBusinessTaxonomy(BusinessTaxonomy value) { this.businessTaxonomy = value; }

    @JsonProperty("BackofficeConfiguration")
    public BackofficeConfiguration getBackofficeConfiguration() { return backofficeConfiguration; }
    @JsonProperty("BackofficeConfiguration")
    public void setBackofficeConfiguration(BackofficeConfiguration value) { this.backofficeConfiguration = value; }

    @JsonProperty("WidgetConfiguration")
    public WidgetConfiguration getWidgetConfiguration() { return widgetConfiguration; }
    @JsonProperty("WidgetConfiguration")
    public void setWidgetConfiguration(WidgetConfiguration value) { this.widgetConfiguration = value; }

    @JsonProperty("ResourceProfile")
    public ResourceProfile getResourceProfile() { return resourceProfile; }
    @JsonProperty("ResourceProfile")
    public void setResourceProfile(ResourceProfile value) { this.resourceProfile = value; }

    @JsonProperty("ResourceTaxonomyLevel")
    public ResourceTaxonomyLevel getResourceTaxonomyLevel() { return resourceTaxonomyLevel; }
    @JsonProperty("ResourceTaxonomyLevel")
    public void setResourceTaxonomyLevel(ResourceTaxonomyLevel value) { this.resourceTaxonomyLevel = value; }

    @JsonProperty("ResourceTaxonomyChildren")
    public ResourceTaxonomyChildren getResourceTaxonomyChildren() { return resourceTaxonomyChildren; }
    @JsonProperty("ResourceTaxonomyChildren")
    public void setResourceTaxonomyChildren(ResourceTaxonomyChildren value) { this.resourceTaxonomyChildren = value; }

    @JsonProperty("EvenOddTimetable")
    public EvenOddTimetable getEvenOddTimetable() { return evenOddTimetable; }
    @JsonProperty("EvenOddTimetable")
    public void setEvenOddTimetable(EvenOddTimetable value) { this.evenOddTimetable = value; }

    @JsonProperty("ResourceLocation")
    public ResourceLocation getResourceLocation() { return resourceLocation; }
    @JsonProperty("ResourceLocation")
    public void setResourceLocation(ResourceLocation value) { this.resourceLocation = value; }
}
