import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { useChatMessage } from "../context/ChatMessageProvider";

export default function ChatMessages() {
  const { messages } = useChatMessage();
  return (
    <>
      {messages.map((message) => (
        <Box
          key={message.id}
          sx={{
            display: "flex",
            justifyContent: message.role === "user" ? "flex-start" : "flex-end",
            my: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: message.role === "user" ? "row" : "row-reverse",
              alignItems: "center",
              gap: 1,
              maxWidth: "80%",
            }}
          >
            <Avatar
              sx={{
                bgcolor:
                  message.role === "user" ? "primary.main" : "secondary.main",
              }}
            >
              {message.role.toUpperCase().charAt(0)}
            </Avatar>
            <Box
              sx={{
                backgroundColor:
                  message.role === "user" ? "grey.100" : "grey.300",
                borderRadius: 2,
                p: 2,
              }}
            >
              <Typography variant="body1">{message.message_content}</Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
}
