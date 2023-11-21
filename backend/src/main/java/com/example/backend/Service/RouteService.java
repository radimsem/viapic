package com.example.backend.Service;

import com.example.backend.Controller.RouteController;
import com.example.backend.Model.Coordinate;
import com.example.backend.Model.RouteRequest;
import com.example.backend.Model.RouteResponse;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;

@Service
public class RouteService {

    @Value("${api.key}")
    private String apiKey;
    private String url = "https://api.mapy.cz/v1/routing/route?apikey={apikey}&start={start}&end={end}&routeType={routeType}&lang={lang}&format={format}&avoidToll={avoidToll}&waypoints={waypoints}";

    private RestTemplate restTemplate;

    private ObjectMapper objectMapper;

    private Logger log = LoggerFactory.getLogger(RouteService.class);


    public RouteService(RestTemplate restTemplate, ObjectMapper objectMapper) {
        this.restTemplate = restTemplate;
        this.objectMapper = objectMapper;
    }

    public String createRoute(RouteRequest routeRequest) {
        HashMap<String, String> uriVariables = new HashMap<>();
        uriVariables.put("apikey", apiKey);
        uriVariables.put("start", routeRequest.getStart());
        uriVariables.put("end", routeRequest.getEnd());
        uriVariables.put("routeType", routeRequest.getType());
        uriVariables.put("lang", routeRequest.getLang());
        uriVariables.put("format", routeRequest.getFormat());
        uriVariables.put("avoidToll",routeRequest.getAvoidToll());
        uriVariables.put("waypoints", routeRequest.getWaypoints());
        String response = restTemplate.getForObject(url, String.class, uriVariables);
        return response;
    }

    public void generateResponse(RouteResponse routeResponse, String json) {
        JsonNode jsonTree = null;
        try {
            jsonTree = objectMapper.readTree(json);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
        routeResponse.setLength(jsonTree.get("length").intValue());
        routeResponse.setDuration(jsonTree.get("duration").intValue());
        JsonNode coordinates = jsonTree.get("geometry").get("geometry").get("coordinates");
        Coordinate[] coordinatesArray = new Coordinate[coordinates.size()];
        for (int i = 0; i < coordinates.size(); i++) {
            double longitude = coordinates.get(i).get(0).doubleValue();
            double latitude = coordinates.get(i).get(1).doubleValue();
            Coordinate coordinate = new Coordinate(longitude, latitude);
            coordinatesArray[i] = coordinate;
        }
    }
}
