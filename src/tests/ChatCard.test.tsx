import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ChatCard from '../components/ChatCard';
import { ChatType } from '../types';
import { ChatMessageProvider } from '../context/ChatMessageProvider';

const mockChatMessage: ChatType = {
    id: '1',
    role: 'user',
    message_content: 'Hello, this is a test message',
    created_at: '2023-01-01T00:00:00Z',
    updated_at: '2023-01-01T00:00:00Z',
    chat_session_id: '1'
};

const mockProps = {
    id: '1',
    userId: 'user1',
    chat_message: mockChatMessage,
    chat_messages: [mockChatMessage],
    created_at: '2023-01-01T00:00:00Z',
    updated_at: '2023-01-01T00:00:00Z',
    handleChatClick: jest.fn(),
};

test('renders ChatCard component with provided props', () => {
    render(
        <ChatMessageProvider>
            <ChatCard {...mockProps} />
        </ChatMessageProvider>
    );

    expect(screen.getByText(/Session Id: 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Created At: 2023-01-01/i)).toBeInTheDocument();
    expect(screen.getByText(/Updated At: 2023-01-01/i)).toBeInTheDocument();
    expect(screen.getByText(/User Id: user1/i)).toBeInTheDocument();
    expect(screen.getByText(/Hello, this is a test message/i)).toBeInTheDocument();
});

test('calls handleChatClick when card is clicked', () => {
    render(
        <ChatMessageProvider>
            <ChatCard {...mockProps} />
        </ChatMessageProvider>
    );

    fireEvent.click(screen.getByText(/Hello, this is a test message/i));
    expect(mockProps.handleChatClick).toHaveBeenCalled();
});