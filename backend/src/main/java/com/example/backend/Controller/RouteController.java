package com.example.backend.Controller;


import com.example.backend.Model.RouteRequest;
import com.example.backend.Model.RouteResponse;
import com.example.backend.Service.RouteService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/route")
public class RouteController {

    public RouteService routeService;

    public RouteController(RouteService routeService) {
        this.routeService = routeService;
    }

    @GetMapping
    public ResponseEntity<String> getRoute() throws JsonProcessingException {
        RouteRequest routeRequest = new RouteRequest("14.154103317385676,50.018315008326255", "14.560103979127064,49.966986278195265", "car_fast", "cs", "geojson", "false", "14.30868934340424,49.991019312705475");
        String response = routeService.createRoute(routeRequest);
        RouteResponse routeResponse = new RouteResponse();
        routeService.generateResponse(routeResponse, response);
        return ResponseEntity.ok(response);
    }
}
