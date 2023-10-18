package com.example.backend.Service;

import com.example.backend.Model.RouteRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;

@Service
public class RouteService {

    private String url = "https://api.mapy.cz/v1/routing/route?apikey=lLLtxlHf7srOA9UUE3fg8OovRiHo9exfRuACxmyzr1s&start={start}&end={end}&routeType={routeType}&lang={lang}&format={format}&avoidToll={avoidToll}&waypoints={waypoints}";

    private RestTemplate restTemplate;

    public RouteService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String createRoute(RouteRequest routeRequest) {
        HashMap<String, String> uriVariables = new HashMap<>();
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
}
