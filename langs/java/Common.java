package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.util.List;

public class Common {
    private AuthErrorCodesClass authErrorCodes;
    private ErrorResponse errorResponse;
    private Request request;
    private SuccessResponse successResponse;

    @JsonProperty("AuthErrorCodes")
    public AuthErrorCodesClass getAuthErrorCodes() { return authErrorCodes; }
    @JsonProperty("AuthErrorCodes")
    public void setAuthErrorCodes(AuthErrorCodesClass value) { this.authErrorCodes = value; }

    @JsonProperty("ErrorResponse")
    public ErrorResponse getErrorResponse() { return errorResponse; }
    @JsonProperty("ErrorResponse")
    public void setErrorResponse(ErrorResponse value) { this.errorResponse = value; }

    @JsonProperty("Request")
    public Request getRequest() { return request; }
    @JsonProperty("Request")
    public void setRequest(Request value) { this.request = value; }

    @JsonProperty("SuccessResponse")
    public SuccessResponse getSuccessResponse() { return successResponse; }
    @JsonProperty("SuccessResponse")
    public void setSuccessResponse(SuccessResponse value) { this.successResponse = value; }
}
