package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.util.Map;

public class ClientUpdateClientResponseResult {
    private Map<String, Object> addedDocument;
    private boolean success;

    @JsonProperty("added_document")
    public Map<String, Object> getAddedDocument() { return addedDocument; }
    @JsonProperty("added_document")
    public void setAddedDocument(Map<String, Object> value) { this.addedDocument = value; }

    @JsonProperty("success")
    public boolean getSuccess() { return success; }
    @JsonProperty("success")
    public void setSuccess(boolean value) { this.success = value; }
}
