// src/components/ChatCard.tsx

import { AccessTime, AccountCircle, Update } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import dayjs from "dayjs";
import React from "react";
import { ChatType } from "../types";
import { useChatMessage } from "../context/ChatMessageProvider";

type ChatCardProps = {
  id: string;
  userId: string;
  chat_message: ChatType | null;
  chat_messages: ChatType[];
  created_at: string;
  updated_at: string;
  handleChatClick: () => void;
};

export default function ChatCard({
  id,
  userId,
  chat_message,
  chat_messages,
  created_at,
  updated_at,
  handleChatClick,
}: ChatCardProps) {
  const { handleSetMessage } = useChatMessage();
  const handleClick = () => {
    handleSetMessage(chat_messages);
    handleChatClick();
  };
  return (
    <>
      <Card elevation={2} sx={{ padding: 1 }} data-testid={`chat-card-${id}`}>
        <CardContent>
          <Typography variant="h6" data-testid={`session-id-${id}`}> Session Id: {id}</Typography>
          <hr />
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }} display={"flex"} alignItems={"center"} gap={1} data-testid={`created-at-${id}`}>
              <AccessTime />
              Created At: {dayjs(created_at).format("YYYY-MM-DD HH:mm:ss")}
            </Grid>
            <Grid size={{ xs: 12, md: 4 }} display={"flex"} alignItems={"center"} gap={1} data-testid={`updated-at-${id}`}>
              <Update /> Updated At: {dayjs(updated_at).format("YYYY-MM-DD HH:mm:ss")}
            </Grid>
            <Grid size={{ xs: 12, md: 4 }} display={"flex"} alignItems={"center"} gap={1} data-testid={`user-id-${id}`}>
              <AccountCircle />
              User Id: {userId}
            </Grid>
          </Grid>
        </CardContent>
        <CardActions sx={{ cursor: "pointer" }} onClick={() => handleClick()} data-testid={`chat-message-${id}`}>
          <Box
            sx={{
              borderRadius: "20px",
              p: 2,
              backgroundColor: "#e3f2fd",
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ mr: 2 }}>
              {chat_message?.role?.toUpperCase()?.charAt(0)}
            </Avatar>
            <Typography variant="body1" fontWeight={600}>
              {chat_message?.role?.toUpperCase()}: {chat_message?.message_content}
            </Typography>
          </Box>
        </CardActions>
      </Card>
    </>
  );
}