package com.example.backend.Model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class RouteRequest {

    private String start;

    private String end;

    private String type;

    private String lang;

    private String format;

    private String avoidToll;

    private String waypoints;
}
