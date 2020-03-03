package ru.gbooking.apiv2;

import java.util.*;

public class ClientBlockingSettings {
    private Boolean appointmentClientBlock;
    private Double appointmentClientBlockDays;
    private String appointmentClientBlockText;
    private Boolean blockIfFutureRecordExists;
    private Double blockRepeatedRecordsCount;
    private Double blockRepeatedRecordsRange;
    private String blockRepeatedRecordsText;

    public Boolean getAppointmentClientBlock() { return appointmentClientBlock; }
    public void setAppointmentClientBlock(Boolean value) { this.appointmentClientBlock = value; }

    public Double getAppointmentClientBlockDays() { return appointmentClientBlockDays; }
    public void setAppointmentClientBlockDays(Double value) { this.appointmentClientBlockDays = value; }

    public String getAppointmentClientBlockText() { return appointmentClientBlockText; }
    public void setAppointmentClientBlockText(String value) { this.appointmentClientBlockText = value; }

    public Boolean getBlockIfFutureRecordExists() { return blockIfFutureRecordExists; }
    public void setBlockIfFutureRecordExists(Boolean value) { this.blockIfFutureRecordExists = value; }

    public Double getBlockRepeatedRecordsCount() { return blockRepeatedRecordsCount; }
    public void setBlockRepeatedRecordsCount(Double value) { this.blockRepeatedRecordsCount = value; }

    public Double getBlockRepeatedRecordsRange() { return blockRepeatedRecordsRange; }
    public void setBlockRepeatedRecordsRange(Double value) { this.blockRepeatedRecordsRange = value; }

    public String getBlockRepeatedRecordsText() { return blockRepeatedRecordsText; }
    public void setBlockRepeatedRecordsText(String value) { this.blockRepeatedRecordsText = value; }
}
