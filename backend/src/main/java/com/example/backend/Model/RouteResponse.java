package com.example.backend.Model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class RouteResponse {
    @JsonProperty("length")
    private int length;
    @JsonProperty("duration")
    private int duration;
    @JsonProperty("coordinates")
    private Coordinate[] coordinates;
}
