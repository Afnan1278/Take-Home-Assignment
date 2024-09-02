// ChatSessionList.tsx

import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Loader from "./Loader";
import ChatCard from "./ChatCard";
import { ChatSessionType } from "../types";

interface ChatSessionListProps {
    isPending: boolean;
    data: ChatSessionType[] | undefined;
    handleChatClick: () => void;
}

const ChatSessionList: React.FC<ChatSessionListProps> = ({
    isPending,
    data,
    handleChatClick }) => {
    if (isPending) {
        return <Loader />;
    }

    return (
        <Box sx={{ overflowY: "auto" }}>
            <Stack sx={{ gap: 2 }}>
                {data && data.length > 0 ? (
                    data.map((item: ChatSessionType) => (
                        <ChatCard
                            handleChatClick={handleChatClick}
                            key={item.id}
                            id={item.id}
                            userId={item.user_id}
                            chat_message={
                                item.chat_messages?.length > 0
                                    ? item.chat_messages[item.chat_messages.length - 1]
                                    : null
                            }
                            chat_messages={item?.chat_messages}
                            created_at={item.created_at}
                            updated_at={item.updated_at}
                            data-testid={`chat-card-${item.id}`}

                        />
                    ))
                ) : (
                    <Typography data-testid="no-chat-session">No chat session available</Typography>
                )}
            </Stack>
        </Box>
    );
};

export default ChatSessionList;
