package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class PurpleSort {
    private Dir dir;
    private SortField field;

    @JsonProperty("dir")
    public Dir getDir() { return dir; }
    @JsonProperty("dir")
    public void setDir(Dir value) { this.dir = value; }

    @JsonProperty("field")
    public SortField getField() { return field; }
    @JsonProperty("field")
    public void setField(SortField value) { this.field = value; }
}
