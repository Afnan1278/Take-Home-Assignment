// src/tests/ChatSessionList.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import ChatSessionList from '../components/ChatSessionList';
import { ChatMessageProvider } from '../context/ChatMessageProvider';
import { ChatSessionType } from '../types';

const mockChatSessions: ChatSessionType[] = [
    {
        id: '1',
        user_id: 'user1',
        chat_messages: [
            { id: '1', role: 'user', message_content: 'Hello, this is a test message', created_at: '2023-01-01T00:00:00Z', updated_at: '2023-01-01T00:00:00Z', chat_session_id: '1' },
            { id: '2', role: 'bot', message_content: 'Hi, how can I help you?', created_at: '2023-01-01T00:00:00Z', updated_at: '2023-01-01T00:00:00Z', chat_session_id: '1' },
        ],
        created_at: '2023-01-01T00:00:00Z',
        updated_at: '2023-01-01T00:00:00Z',
    },
];

const mockHandleChatClick = jest.fn();

test('renders ChatSessionList component with provided sessions', () => {
    render(
        <ChatMessageProvider>
            <ChatSessionList
                isPending={false}
                data={mockChatSessions}
                handleChatClick={mockHandleChatClick}
            />
        </ChatMessageProvider>
    );

    expect(screen.getByTestId('session-id-1')).toBeInTheDocument();
    expect(screen.getByTestId('created-at-1')).toBeInTheDocument();
    expect(screen.getByTestId('updated-at-1')).toBeInTheDocument();
    expect(screen.getByTestId('user-id-1')).toBeInTheDocument();
    expect(screen.getByTestId('chat-message-1')).toBeInTheDocument();
});

test('renders "No chat session available" when data is empty', () => {
    render(
        <ChatMessageProvider>
            <ChatSessionList
                isPending={false}
                data={[]}
                handleChatClick={mockHandleChatClick}
            />
        </ChatMessageProvider>
    );

    expect(screen.getByTestId('no-chat-session')).toBeInTheDocument();
});