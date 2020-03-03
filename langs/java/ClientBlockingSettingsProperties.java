package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class ClientBlockingSettingsProperties {
    private ChiangMaiGoose blockIfFutureRecordExists;
    private TrapaniSnowLeopard blockRepeatedRecordsRange;
    private TrapaniSnowLeopard blockRepeatedRecordsCount;
    private BeijingPigeon blockRepeatedRecordsText;
    private ChiangMaiGoose appointmentClientBlock;
    private TrapaniSnowLeopard appointmentClientBlockDays;
    private BeijingPigeon appointmentClientBlockText;

    @JsonProperty("blockIfFutureRecordExists")
    public ChiangMaiGoose getBlockIfFutureRecordExists() { return blockIfFutureRecordExists; }
    @JsonProperty("blockIfFutureRecordExists")
    public void setBlockIfFutureRecordExists(ChiangMaiGoose value) { this.blockIfFutureRecordExists = value; }

    @JsonProperty("blockRepeatedRecordsRange")
    public TrapaniSnowLeopard getBlockRepeatedRecordsRange() { return blockRepeatedRecordsRange; }
    @JsonProperty("blockRepeatedRecordsRange")
    public void setBlockRepeatedRecordsRange(TrapaniSnowLeopard value) { this.blockRepeatedRecordsRange = value; }

    @JsonProperty("blockRepeatedRecordsCount")
    public TrapaniSnowLeopard getBlockRepeatedRecordsCount() { return blockRepeatedRecordsCount; }
    @JsonProperty("blockRepeatedRecordsCount")
    public void setBlockRepeatedRecordsCount(TrapaniSnowLeopard value) { this.blockRepeatedRecordsCount = value; }

    @JsonProperty("blockRepeatedRecordsText")
    public BeijingPigeon getBlockRepeatedRecordsText() { return blockRepeatedRecordsText; }
    @JsonProperty("blockRepeatedRecordsText")
    public void setBlockRepeatedRecordsText(BeijingPigeon value) { this.blockRepeatedRecordsText = value; }

    @JsonProperty("appointmentClientBlock")
    public ChiangMaiGoose getAppointmentClientBlock() { return appointmentClientBlock; }
    @JsonProperty("appointmentClientBlock")
    public void setAppointmentClientBlock(ChiangMaiGoose value) { this.appointmentClientBlock = value; }

    @JsonProperty("appointmentClientBlockDays")
    public TrapaniSnowLeopard getAppointmentClientBlockDays() { return appointmentClientBlockDays; }
    @JsonProperty("appointmentClientBlockDays")
    public void setAppointmentClientBlockDays(TrapaniSnowLeopard value) { this.appointmentClientBlockDays = value; }

    @JsonProperty("appointmentClientBlockText")
    public BeijingPigeon getAppointmentClientBlockText() { return appointmentClientBlockText; }
    @JsonProperty("appointmentClientBlockText")
    public void setAppointmentClientBlockText(BeijingPigeon value) { this.appointmentClientBlockText = value; }
}
