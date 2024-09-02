import React from 'react';
import { render, screen } from '@testing-library/react';
import ChatMessages from '../components/ChatMessages';
import { ChatMessageProvider, useChatMessage } from '../context/ChatMessageProvider';
import { ChatType } from '../types';

const mockChatMessages: ChatType[] = [
    { id: '1', role: 'user', message_content: 'Hello, this is a test message', created_at: '2023-01-01T00:00:00Z', updated_at: '2023-01-01T00:00:00Z', chat_session_id: '1' },
    { id: '2', role: 'bot', message_content: 'Hi, how can I help you?', created_at: '2023-01-01T00:00:00Z', updated_at: '2023-01-01T00:00:00Z', chat_session_id: '1' },
];

interface MockChatMessageProviderProps {
    children: React.ReactNode;
}

const MockChatMessageProvider: React.FC<MockChatMessageProviderProps> = ({ children }) => {
    const { handleSetMessage } = useChatMessage();
    React.useEffect(() => {
        handleSetMessage(mockChatMessages);
    }, [handleSetMessage]);

    return <>{children}</>;
};

test('renders ChatMessages component with provided messages', () => {
    render(
        <ChatMessageProvider>
            <MockChatMessageProvider>
                <ChatMessages />
            </MockChatMessageProvider>
        </ChatMessageProvider>
    );

    expect(screen.getByText(/Hello, this is a test message/i)).toBeInTheDocument();
    expect(screen.getByText(/Hi, how can I help you?/i)).toBeInTheDocument();
});