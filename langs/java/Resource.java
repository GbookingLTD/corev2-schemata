package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

/**
 * Данные о работнике бизнеса
 */
public class Resource {
    private List<String> additionalExtraID;
    private Boolean badIconResolution;
    private double capacity;
    private String color;
    private String degree;
    private String departmentID;
    private String description;
    private Boolean displayInSchedule;
    private boolean displayInWidget;
    private String email;
    private Boolean emailEnabled;
    private EvenOddTimetable evenOddTimetable;
    private List<Object> exceptions;
    private String experience;
    private String extraDescription;
    private String extraID;
    private String extraLink;
    private String extraMediaID;
    private String iconURL;
    private String id;
    private String image;
    private String lastSU;
    private double level;
    private boolean loaned;
    private String loanedFrom;
    private String loanedTo;
    private ResourceLocation location;
    private boolean manualChanges;
    private String middleName;
    private String name;
    private String nickname;
    private Double order;
    private FluffyTimeFrameDate orderWeight;
    private Info originGeneralInfo;
    private String originBusinessID;
    private List<String> originTaxonomies;
    private String perk;
    private List<FaxElement> phone;
    private String profession;
    private ProfileClass profile;
    private Double rating;
    private List<String> readonlyTaxonomies;
    private double revisionVersion;
    private Boolean scheduleIsEmpty;
    private String siteID;
    private Boolean smsEnabled;
    private ResourceStatus status;
    private String surname;
    private List<String> taxonomies;
    private List<ResourceTaxonomyChildren> taxonomyChildren;
    private List<ResourceTaxonomyLevel> taxonomyLevels;
    private ResourceTelemedData telemedData;
    private Timetable timetable;
    private Map<String, Object> userData;
    private String workPlace;

    /**
     * информация из внешней информационной системы как есть (при интеграции)
     */
    @JsonProperty("additionalExtraId")
    public List<String> getAdditionalExtraID() { return additionalExtraID; }
    @JsonProperty("additionalExtraId")
    public void setAdditionalExtraID(List<String> value) { this.additionalExtraID = value; }

    @JsonProperty("badIconResolution")
    public Boolean getBadIconResolution() { return badIconResolution; }
    @JsonProperty("badIconResolution")
    public void setBadIconResolution(Boolean value) { this.badIconResolution = value; }

    /**
     * Количество записей, которые может принимать работник единовременно
     */
    @JsonProperty("capacity")
    public double getCapacity() { return capacity; }
    @JsonProperty("capacity")
    public void setCapacity(double value) { this.capacity = value; }

    /**
     * цвет колонки с работником
     */
    @JsonProperty("color")
    public String getColor() { return color; }
    @JsonProperty("color")
    public void setColor(String value) { this.color = value; }

    @JsonProperty("degree")
    public String getDegree() { return degree; }
    @JsonProperty("degree")
    public void setDegree(String value) { this.degree = value; }

    /**
     * идентификатор отделения, к которому привязан работник
     */
    @JsonProperty("departmentId")
    public String getDepartmentID() { return departmentID; }
    @JsonProperty("departmentId")
    public void setDepartmentID(String value) { this.departmentID = value; }

    /**
     * краткое описание работника
     */
    @JsonProperty("description")
    public String getDescription() { return description; }
    @JsonProperty("description")
    public void setDescription(String value) { this.description = value; }

    @JsonProperty("displayInSchedule")
    public Boolean getDisplayInSchedule() { return displayInSchedule; }
    @JsonProperty("displayInSchedule")
    public void setDisplayInSchedule(Boolean value) { this.displayInSchedule = value; }

    /**
     * отображать ли данного работника на виджете или любом другом клиенте
     */
    @JsonProperty("displayInWidget")
    public boolean getDisplayInWidget() { return displayInWidget; }
    @JsonProperty("displayInWidget")
    public void setDisplayInWidget(boolean value) { this.displayInWidget = value; }

    /**
     * e-mail работника
     */
    @JsonProperty("email")
    public String getEmail() { return email; }
    @JsonProperty("email")
    public void setEmail(String value) { this.email = value; }

    /**
     * включена ли отправка e-mail уведомлений для данного работника
     */
    @JsonProperty("emailEnabled")
    public Boolean getEmailEnabled() { return emailEnabled; }
    @JsonProperty("emailEnabled")
    public void setEmailEnabled(Boolean value) { this.emailEnabled = value; }

    @JsonProperty("evenOddTimetable")
    public EvenOddTimetable getEvenOddTimetable() { return evenOddTimetable; }
    @JsonProperty("evenOddTimetable")
    public void setEvenOddTimetable(EvenOddTimetable value) { this.evenOddTimetable = value; }

    @JsonProperty("exceptions")
    public List<Object> getExceptions() { return exceptions; }
    @JsonProperty("exceptions")
    public void setExceptions(List<Object> value) { this.exceptions = value; }

    @JsonProperty("experience")
    public String getExperience() { return experience; }
    @JsonProperty("experience")
    public void setExperience(String value) { this.experience = value; }

    /**
     * информация из внешней информационной системы как есть (при интеграции)
     */
    @JsonProperty("extraDescription")
    public String getExtraDescription() { return extraDescription; }
    @JsonProperty("extraDescription")
    public void setExtraDescription(String value) { this.extraDescription = value; }

    /**
     * информация из внешней информационной системы как есть (при интеграции)
     */
    @JsonProperty("extraId")
    public String getExtraID() { return extraID; }
    @JsonProperty("extraId")
    public void setExtraID(String value) { this.extraID = value; }

    /**
     * информация из внешней информационной системы как есть (при интеграции)
     */
    @JsonProperty("extraLink")
    public String getExtraLink() { return extraLink; }
    @JsonProperty("extraLink")
    public void setExtraLink(String value) { this.extraLink = value; }

    /**
     * информация из внешней информационной системы как есть (при интеграции)
     */
    @JsonProperty("extraMediaId")
    public String getExtraMediaID() { return extraMediaID; }
    @JsonProperty("extraMediaId")
    public void setExtraMediaID(String value) { this.extraMediaID = value; }

    /**
     * url изображения работника; Если указан относительный путь, то используйте
     * http://cdn.gbooking.ru (см. так же Business WidgetConfiguration.useDefaultWorkerImg и
     * WidgetConfiguration.defaultWorkerImgUrl)
     */
    @JsonProperty("icon_url")
    public String getIconURL() { return iconURL; }
    @JsonProperty("icon_url")
    public void setIconURL(String value) { this.iconURL = value; }

    /**
     * внутренний идентификатор работника; уникальный во всей системе GBooking
     */
    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }

    @JsonProperty("image")
    public String getImage() { return image; }
    @JsonProperty("image")
    public void setImage(String value) { this.image = value; }

    @JsonProperty("lastSU")
    public String getLastSU() { return lastSU; }
    @JsonProperty("lastSU")
    public void setLastSU(String value) { this.lastSU = value; }

    /**
     * уровень скорости выполнения услуги по-умолчанию (если не найдено в taxonomyLevels)
     */
    @JsonProperty("level")
    public double getLevel() { return level; }
    @JsonProperty("level")
    public void setLevel(double value) { this.level = value; }

    /**
     * не используется
     */
    @JsonProperty("loaned")
    public boolean getLoaned() { return loaned; }
    @JsonProperty("loaned")
    public void setLoaned(boolean value) { this.loaned = value; }

    /**
     * не используется
     */
    @JsonProperty("loanedFrom")
    public String getLoanedFrom() { return loanedFrom; }
    @JsonProperty("loanedFrom")
    public void setLoanedFrom(String value) { this.loanedFrom = value; }

    /**
     * не используется
     */
    @JsonProperty("loanedTo")
    public String getLoanedTo() { return loanedTo; }
    @JsonProperty("loanedTo")
    public void setLoanedTo(String value) { this.loanedTo = value; }

    @JsonProperty("location")
    public ResourceLocation getLocation() { return location; }
    @JsonProperty("location")
    public void setLocation(ResourceLocation value) { this.location = value; }

    @JsonProperty("manualChanges")
    public boolean getManualChanges() { return manualChanges; }
    @JsonProperty("manualChanges")
    public void setManualChanges(boolean value) { this.manualChanges = value; }

    /**
     * отчество работника
     */
    @JsonProperty("middleName")
    public String getMiddleName() { return middleName; }
    @JsonProperty("middleName")
    public void setMiddleName(String value) { this.middleName = value; }

    /**
     * имя работника
     */
    @JsonProperty("name")
    public String getName() { return name; }
    @JsonProperty("name")
    public void setName(String value) { this.name = value; }

    /**
     * внутреннее название работника в Бекофис
     */
    @JsonProperty("nickname")
    public String getNickname() { return nickname; }
    @JsonProperty("nickname")
    public void setNickname(String value) { this.nickname = value; }

    /**
     * индекс сортировки работника
     */
    @JsonProperty("order")
    public Double getOrder() { return order; }
    @JsonProperty("order")
    public void setOrder(Double value) { this.order = value; }

    /**
     * вес работника, в зависимости от указанного способа сортировки
     */
    @JsonProperty("orderWeight")
    public FluffyTimeFrameDate getOrderWeight() { return orderWeight; }
    @JsonProperty("orderWeight")
    public void setOrderWeight(FluffyTimeFrameDate value) { this.orderWeight = value; }

    /**
     * (только в витрине) объект с данными бизнеса-филиала
     */
    @JsonProperty("origin_general_info")
    public Info getOriginGeneralInfo() { return originGeneralInfo; }
    @JsonProperty("origin_general_info")
    public void setOriginGeneralInfo(Info value) { this.originGeneralInfo = value; }

    /**
     * (только в витрине) идентификатор бизнеса-филиала, откуда был взят работник
     */
    @JsonProperty("originBusinessID")
    public String getOriginBusinessID() { return originBusinessID; }
    @JsonProperty("originBusinessID")
    public void setOriginBusinessID(String value) { this.originBusinessID = value; }

    /**
     * (только в витрине) список идентификаторов услуг на бизнесе-филиале, которые выполняет
     * работник
     */
    @JsonProperty("originTaxonomies")
    public List<String> getOriginTaxonomies() { return originTaxonomies; }
    @JsonProperty("originTaxonomies")
    public void setOriginTaxonomies(List<String> value) { this.originTaxonomies = value; }

    /**
     * особый навык
     */
    @JsonProperty("perk")
    public String getPerk() { return perk; }
    @JsonProperty("perk")
    public void setPerk(String value) { this.perk = value; }

    @JsonProperty("phone")
    public List<FaxElement> getPhone() { return phone; }
    @JsonProperty("phone")
    public void setPhone(List<FaxElement> value) { this.phone = value; }

    /**
     * информация о профессии работника, используется в Бекофис
     */
    @JsonProperty("profession")
    public String getProfession() { return profession; }
    @JsonProperty("profession")
    public void setProfession(String value) { this.profession = value; }

    @JsonProperty("profile")
    public ProfileClass getProfile() { return profile; }
    @JsonProperty("profile")
    public void setProfile(ProfileClass value) { this.profile = value; }

    /**
     * Рейтинг работника
     */
    @JsonProperty("rating")
    public Double getRating() { return rating; }
    @JsonProperty("rating")
    public void setRating(Double value) { this.rating = value; }

    @JsonProperty("readonlyTaxonomies")
    public List<String> getReadonlyTaxonomies() { return readonlyTaxonomies; }
    @JsonProperty("readonlyTaxonomies")
    public void setReadonlyTaxonomies(List<String> value) { this.readonlyTaxonomies = value; }

    /**
     * Версия изменений документа
     */
    @JsonProperty("revisionVersion")
    public double getRevisionVersion() { return revisionVersion; }
    @JsonProperty("revisionVersion")
    public void setRevisionVersion(double value) { this.revisionVersion = value; }

    @JsonProperty("scheduleIsEmpty")
    public Boolean getScheduleIsEmpty() { return scheduleIsEmpty; }
    @JsonProperty("scheduleIsEmpty")
    public void setScheduleIsEmpty(Boolean value) { this.scheduleIsEmpty = value; }

    /**
     * информация из внешней информационной системы как есть (при интеграции)
     */
    @JsonProperty("siteId")
    public String getSiteID() { return siteID; }
    @JsonProperty("siteId")
    public void setSiteID(String value) { this.siteID = value; }

    /**
     * включена ли отправка смс уведомлений для данного работника
     */
    @JsonProperty("smsEnabled")
    public Boolean getSMSEnabled() { return smsEnabled; }
    @JsonProperty("smsEnabled")
    public void setSMSEnabled(Boolean value) { this.smsEnabled = value; }

    @JsonProperty("status")
    public ResourceStatus getStatus() { return status; }
    @JsonProperty("status")
    public void setStatus(ResourceStatus value) { this.status = value; }

    /**
     * фамилия и отчество работника
     */
    @JsonProperty("surname")
    public String getSurname() { return surname; }
    @JsonProperty("surname")
    public void setSurname(String value) { this.surname = value; }

    /**
     * массив идентификаторов услуг, которые выполняет работник
     */
    @JsonProperty("taxonomies")
    public List<String> getTaxonomies() { return taxonomies; }
    @JsonProperty("taxonomies")
    public void setTaxonomies(List<String> value) { this.taxonomies = value; }

    /**
     * массив свойств выполнения услуги как детской, как взрослой или как общей (если указаны
     * оба или не указаны вовсе для услуги)
     */
    @JsonProperty("taxonomyChildren")
    public List<ResourceTaxonomyChildren> getTaxonomyChildren() { return taxonomyChildren; }
    @JsonProperty("taxonomyChildren")
    public void setTaxonomyChildren(List<ResourceTaxonomyChildren> value) { this.taxonomyChildren = value; }

    /**
     * массив уровня скорости выполнения услуги (см так же Resource level)
     */
    @JsonProperty("taxonomyLevels")
    public List<ResourceTaxonomyLevel> getTaxonomyLevels() { return taxonomyLevels; }
    @JsonProperty("taxonomyLevels")
    public void setTaxonomyLevels(List<ResourceTaxonomyLevel> value) { this.taxonomyLevels = value; }

    @JsonProperty("telemedData")
    public ResourceTelemedData getTelemedData() { return telemedData; }
    @JsonProperty("telemedData")
    public void setTelemedData(ResourceTelemedData value) { this.telemedData = value; }

    @JsonProperty("timetable")
    public Timetable getTimetable() { return timetable; }
    @JsonProperty("timetable")
    public void setTimetable(Timetable value) { this.timetable = value; }

    @JsonProperty("userData")
    public Map<String, Object> getUserData() { return userData; }
    @JsonProperty("userData")
    public void setUserData(Map<String, Object> value) { this.userData = value; }

    /**
     * рабочее место, которое занимает работник
     */
    @JsonProperty("workPlace")
    public String getWorkPlace() { return workPlace; }
    @JsonProperty("workPlace")
    public void setWorkPlace(String value) { this.workPlace = value; }
}
