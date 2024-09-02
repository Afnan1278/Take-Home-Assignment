import React, { createContext, useContext, useState } from "react";
import { ChatType } from "../types";

type ChatMessageType = {
  messages: ChatType[];
  handleSetMessage: (value: ChatType[]) => void;
};
const ChatMessageContext = createContext<ChatMessageType | undefined>(
  undefined
);

export const ChatMessageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [messages, setMessages] = useState<ChatType[]>([]);
  const handleSetMessage = (messages: ChatType[]) => {
    setMessages(messages);
  };

  return (
    <ChatMessageContext.Provider value={{ messages, handleSetMessage }}>
      {children}
    </ChatMessageContext.Provider>
  );
};

export const useChatMessage = () => {
  const chatMessages = useContext(ChatMessageContext);

  if (!chatMessages) {
    throw new Error("useChatMessage must be used within a ChatMessageProvider");
  }

  return chatMessages;
};
