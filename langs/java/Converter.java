// To use this code, add the following Maven dependency to your project:
//
//     com.fasterxml.jackson.core : jackson-databind : 2.9.0
//
// Import this package:
//
//     import ru.gbooking.apiv2.Converter;
//
// Then you can deserialize a JSON string with
//
//     Common data = Converter.CommonFromJsonString(jsonString);
//     Models data = Converter.ModelsFromJsonString(jsonString);

package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.core.JsonProcessingException;

public class Converter {
    // Serialize/deserialize helpers

    public static Common CommonFromJsonString(String json) throws IOException {
        return getCommonObjectReader().readValue(json);
    }

    public static String CommonToJsonString(Common obj) throws JsonProcessingException {
        return getCommonObjectWriter().writeValueAsString(obj);
    }

    public static Models ModelsFromJsonString(String json) throws IOException {
        return getModelsObjectReader().readValue(json);
    }

    public static String ModelsToJsonString(Models obj) throws JsonProcessingException {
        return getModelsObjectWriter().writeValueAsString(obj);
    }

    private static ObjectReader CommonReader;
    private static ObjectWriter CommonWriter;

    private static void instantiateCommonMapper() {
        ObjectMapper mapper = new ObjectMapper();
        CommonReader = mapper.reader(Common.class);
        CommonWriter = mapper.writerFor(Common.class);
    }

    private static ObjectReader getCommonObjectReader() {
        if (CommonReader == null) instantiateCommonMapper();
        return CommonReader;
    }

    private static ObjectWriter getCommonObjectWriter() {
        if (CommonWriter == null) instantiateCommonMapper();
        return CommonWriter;
    }

    private static ObjectReader ModelsReader;
    private static ObjectWriter ModelsWriter;

    private static void instantiateModelsMapper() {
        ObjectMapper mapper = new ObjectMapper();
        ModelsReader = mapper.reader(Models.class);
        ModelsWriter = mapper.writerFor(Models.class);
    }

    private static ObjectReader getModelsObjectReader() {
        if (ModelsReader == null) instantiateModelsMapper();
        return ModelsReader;
    }

    private static ObjectWriter getModelsObjectWriter() {
        if (ModelsWriter == null) instantiateModelsMapper();
        return ModelsWriter;
    }
}
