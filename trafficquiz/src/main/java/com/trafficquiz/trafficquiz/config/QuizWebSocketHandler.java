package com.trafficquiz.trafficquiz.config;

import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class QuizWebSocketHandler extends TextWebSocketHandler {

    // You can keep track of connected players
    private Map<String, List<WebSocketSession>> sessions = new HashMap<>();

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        // Handle incoming messages and broadcast updates to all connected clients
        String sessionCode = getSessionCodeFromUri(session);
        List<WebSocketSession> sessionList = sessions.getOrDefault(sessionCode, new ArrayList<>());

        // Add the session if not already added
        sessionList.add(session);
        sessions.put(sessionCode, sessionList);

        // Broadcast progress update to all players in the session
        for (WebSocketSession webSocketSession : sessionList) {
            webSocketSession.sendMessage(new TextMessage("Player Progress Updated"));
        }
    }

    private String getSessionCodeFromUri(WebSocketSession session) {
        // Extract the session code from the WebSocket URI or message
        // Implement extraction logic as needed
        return "some-session-code";
    }
}

