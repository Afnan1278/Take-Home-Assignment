export type ChatType = {
    id: string;
    created_at: string;
    updated_at: string;
    chat_session_id: string;
    message_content: string;
    role: string;
  };

export type ChatSessionType = {
  id: string;
  user_id: string;
  chat_messages: ChatType[];
  created_at: string;
  updated_at: string;
}