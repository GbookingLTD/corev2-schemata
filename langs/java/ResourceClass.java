package ru.gbooking.apiv2;

import java.util.*;

public class ResourceClass {
    private List<String> additionalExtraID;
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
    private PurpleTimeFrameDate orderWeight;
    private Info originGeneralInfo;
    private String originBusinessID;
    private List<String> originTaxonomies;
    private String perk;
    private Phone phone;
    private String profession;
    private ProfileClass profile;
    private Double rating;
    private List<String> readonlyTaxonomies;
    private double revisionVersion;
    private Boolean scheduleIsEmpty;
    private String siteID;
    private Boolean smsEnabled;
    private Status status;
    private String surname;
    private List<String> taxonomies;
    private List<ResourceTaxonomyChildren> taxonomyChildren;
    private List<ResourceTaxonomyLevel> taxonomyLevels;
    private Timetable timetable;
    private Map<String, Object> userData;
    private String workPlace;

    /**
     * информация из внешней информационной системы как есть (при интеграции)
     */
    public List<String> getAdditionalExtraID() { return additionalExtraID; }
    public void setAdditionalExtraID(List<String> value) { this.additionalExtraID = value; }

    /**
     * Количество записей, которые может принимать работник единовременно
     */
    public double getCapacity() { return capacity; }
    public void setCapacity(double value) { this.capacity = value; }

    /**
     * цвет колонки с работником
     */
    public String getColor() { return color; }
    public void setColor(String value) { this.color = value; }

    public String getDegree() { return degree; }
    public void setDegree(String value) { this.degree = value; }

    /**
     * идентификатор отделения, к которому привязан работник
     */
    public String getDepartmentID() { return departmentID; }
    public void setDepartmentID(String value) { this.departmentID = value; }

    /**
     * краткое описание работника
     */
    public String getDescription() { return description; }
    public void setDescription(String value) { this.description = value; }

    public Boolean getDisplayInSchedule() { return displayInSchedule; }
    public void setDisplayInSchedule(Boolean value) { this.displayInSchedule = value; }

    /**
     * отображать ли данного работника на виджете или любом другом клиенте
     */
    public boolean getDisplayInWidget() { return displayInWidget; }
    public void setDisplayInWidget(boolean value) { this.displayInWidget = value; }

    /**
     * e-mail работника
     */
    public String getEmail() { return email; }
    public void setEmail(String value) { this.email = value; }

    /**
     * включена ли отправка e-mail уведомлений для данного работника
     */
    public Boolean getEmailEnabled() { return emailEnabled; }
    public void setEmailEnabled(Boolean value) { this.emailEnabled = value; }

    public EvenOddTimetable getEvenOddTimetable() { return evenOddTimetable; }
    public void setEvenOddTimetable(EvenOddTimetable value) { this.evenOddTimetable = value; }

    public List<Object> getExceptions() { return exceptions; }
    public void setExceptions(List<Object> value) { this.exceptions = value; }

    public String getExperience() { return experience; }
    public void setExperience(String value) { this.experience = value; }

    /**
     * информация из внешней информационной системы как есть (при интеграции)
     */
    public String getExtraDescription() { return extraDescription; }
    public void setExtraDescription(String value) { this.extraDescription = value; }

    /**
     * информация из внешней информационной системы как есть (при интеграции)
     */
    public String getExtraID() { return extraID; }
    public void setExtraID(String value) { this.extraID = value; }

    /**
     * информация из внешней информационной системы как есть (при интеграции)
     */
    public String getExtraLink() { return extraLink; }
    public void setExtraLink(String value) { this.extraLink = value; }

    /**
     * информация из внешней информационной системы как есть (при интеграции)
     */
    public String getExtraMediaID() { return extraMediaID; }
    public void setExtraMediaID(String value) { this.extraMediaID = value; }

    /**
     * url изображения работника; Если указан относительный путь, то используйте
     * http://cdn.gbooking.ru (см. так же Business WidgetConfiguration.useDefaultWorkerImg и
     * WidgetConfiguration.defaultWorkerImgUrl)
     */
    public String getIconURL() { return iconURL; }
    public void setIconURL(String value) { this.iconURL = value; }

    /**
     * внутренний идентификатор работника; уникальный во всей системе GBooking
     */
    public String getID() { return id; }
    public void setID(String value) { this.id = value; }

    public String getImage() { return image; }
    public void setImage(String value) { this.image = value; }

    public String getLastSU() { return lastSU; }
    public void setLastSU(String value) { this.lastSU = value; }

    /**
     * уровень скорости выполнения услуги по-умолчанию (если не найдено в taxonomyLevels)
     */
    public double getLevel() { return level; }
    public void setLevel(double value) { this.level = value; }

    /**
     * не используется
     */
    public boolean getLoaned() { return loaned; }
    public void setLoaned(boolean value) { this.loaned = value; }

    /**
     * не используется
     */
    public String getLoanedFrom() { return loanedFrom; }
    public void setLoanedFrom(String value) { this.loanedFrom = value; }

    /**
     * не используется
     */
    public String getLoanedTo() { return loanedTo; }
    public void setLoanedTo(String value) { this.loanedTo = value; }

    public ResourceLocation getLocation() { return location; }
    public void setLocation(ResourceLocation value) { this.location = value; }

    public boolean getManualChanges() { return manualChanges; }
    public void setManualChanges(boolean value) { this.manualChanges = value; }

    /**
     * отчество работника
     */
    public String getMiddleName() { return middleName; }
    public void setMiddleName(String value) { this.middleName = value; }

    /**
     * имя работника
     */
    public String getName() { return name; }
    public void setName(String value) { this.name = value; }

    /**
     * внутреннее название работника в Бекофис
     */
    public String getNickname() { return nickname; }
    public void setNickname(String value) { this.nickname = value; }

    /**
     * индекс сортировки работника
     */
    public Double getOrder() { return order; }
    public void setOrder(Double value) { this.order = value; }

    /**
     * вес работника, в зависимости от указанного способа сортировки
     */
    public PurpleTimeFrameDate getOrderWeight() { return orderWeight; }
    public void setOrderWeight(PurpleTimeFrameDate value) { this.orderWeight = value; }

    /**
     * (только в витрине) объект с данными бизнеса-филиала
     */
    public Info getOriginGeneralInfo() { return originGeneralInfo; }
    public void setOriginGeneralInfo(Info value) { this.originGeneralInfo = value; }

    /**
     * (только в витрине) идентификатор бизнеса-филиала, откуда был взят работник
     */
    public String getOriginBusinessID() { return originBusinessID; }
    public void setOriginBusinessID(String value) { this.originBusinessID = value; }

    /**
     * (только в витрине) список идентификаторов услуг на бизнесе-филиале, которые выполняет
     * работник
     */
    public List<String> getOriginTaxonomies() { return originTaxonomies; }
    public void setOriginTaxonomies(List<String> value) { this.originTaxonomies = value; }

    /**
     * особый навык
     */
    public String getPerk() { return perk; }
    public void setPerk(String value) { this.perk = value; }

    public Phone getPhone() { return phone; }
    public void setPhone(Phone value) { this.phone = value; }

    /**
     * информация о профессии работника, используется в Бекофис
     */
    public String getProfession() { return profession; }
    public void setProfession(String value) { this.profession = value; }

    public ProfileClass getProfile() { return profile; }
    public void setProfile(ProfileClass value) { this.profile = value; }

    /**
     * Рейтинг работника
     */
    public Double getRating() { return rating; }
    public void setRating(Double value) { this.rating = value; }

    public List<String> getReadonlyTaxonomies() { return readonlyTaxonomies; }
    public void setReadonlyTaxonomies(List<String> value) { this.readonlyTaxonomies = value; }

    /**
     * Версия изменений документа
     */
    public double getRevisionVersion() { return revisionVersion; }
    public void setRevisionVersion(double value) { this.revisionVersion = value; }

    public Boolean getScheduleIsEmpty() { return scheduleIsEmpty; }
    public void setScheduleIsEmpty(Boolean value) { this.scheduleIsEmpty = value; }

    /**
     * информация из внешней информационной системы как есть (при интеграции)
     */
    public String getSiteID() { return siteID; }
    public void setSiteID(String value) { this.siteID = value; }

    /**
     * включена ли отправка смс уведомлений для данного работника
     */
    public Boolean getSMSEnabled() { return smsEnabled; }
    public void setSMSEnabled(Boolean value) { this.smsEnabled = value; }

    public Status getStatus() { return status; }
    public void setStatus(Status value) { this.status = value; }

    /**
     * фамилия и отчество работника
     */
    public String getSurname() { return surname; }
    public void setSurname(String value) { this.surname = value; }

    /**
     * массив идентификаторов услуг, которые выполняет работник
     */
    public List<String> getTaxonomies() { return taxonomies; }
    public void setTaxonomies(List<String> value) { this.taxonomies = value; }

    /**
     * массив свойств выполнения услуги как детской, как взрослой или как общей (если указаны
     * оба или не указаны вовсе для услуги)
     */
    public List<ResourceTaxonomyChildren> getTaxonomyChildren() { return taxonomyChildren; }
    public void setTaxonomyChildren(List<ResourceTaxonomyChildren> value) { this.taxonomyChildren = value; }

    /**
     * массив уровня скорости выполнения услуги (см так же Resource level)
     */
    public List<ResourceTaxonomyLevel> getTaxonomyLevels() { return taxonomyLevels; }
    public void setTaxonomyLevels(List<ResourceTaxonomyLevel> value) { this.taxonomyLevels = value; }

    public Timetable getTimetable() { return timetable; }
    public void setTimetable(Timetable value) { this.timetable = value; }

    public Map<String, Object> getUserData() { return userData; }
    public void setUserData(Map<String, Object> value) { this.userData = value; }

    /**
     * рабочее место, которое занимает работник
     */
    public String getWorkPlace() { return workPlace; }
    public void setWorkPlace(String value) { this.workPlace = value; }
}
