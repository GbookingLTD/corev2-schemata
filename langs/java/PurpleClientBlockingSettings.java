package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class PurpleClientBlockingSettings {
    private Boolean appointmentClientBlock;
    private Double appointmentClientBlockDays;
    private String appointmentClientBlockText;
    private Boolean blockIfFutureRecordExists;
    private Double blockRepeatedRecordsCount;
    private Double blockRepeatedRecordsRange;
    private String blockRepeatedRecordsText;

    @JsonProperty("appointmentClientBlock")
    public Boolean getAppointmentClientBlock() { return appointmentClientBlock; }
    @JsonProperty("appointmentClientBlock")
    public void setAppointmentClientBlock(Boolean value) { this.appointmentClientBlock = value; }

    @JsonProperty("appointmentClientBlockDays")
    public Double getAppointmentClientBlockDays() { return appointmentClientBlockDays; }
    @JsonProperty("appointmentClientBlockDays")
    public void setAppointmentClientBlockDays(Double value) { this.appointmentClientBlockDays = value; }

    @JsonProperty("appointmentClientBlockText")
    public String getAppointmentClientBlockText() { return appointmentClientBlockText; }
    @JsonProperty("appointmentClientBlockText")
    public void setAppointmentClientBlockText(String value) { this.appointmentClientBlockText = value; }

    @JsonProperty("blockIfFutureRecordExists")
    public Boolean getBlockIfFutureRecordExists() { return blockIfFutureRecordExists; }
    @JsonProperty("blockIfFutureRecordExists")
    public void setBlockIfFutureRecordExists(Boolean value) { this.blockIfFutureRecordExists = value; }

    @JsonProperty("blockRepeatedRecordsCount")
    public Double getBlockRepeatedRecordsCount() { return blockRepeatedRecordsCount; }
    @JsonProperty("blockRepeatedRecordsCount")
    public void setBlockRepeatedRecordsCount(Double value) { this.blockRepeatedRecordsCount = value; }

    @JsonProperty("blockRepeatedRecordsRange")
    public Double getBlockRepeatedRecordsRange() { return blockRepeatedRecordsRange; }
    @JsonProperty("blockRepeatedRecordsRange")
    public void setBlockRepeatedRecordsRange(Double value) { this.blockRepeatedRecordsRange = value; }

    @JsonProperty("blockRepeatedRecordsText")
    public String getBlockRepeatedRecordsText() { return blockRepeatedRecordsText; }
    @JsonProperty("blockRepeatedRecordsText")
    public void setBlockRepeatedRecordsText(String value) { this.blockRepeatedRecordsText = value; }
}
