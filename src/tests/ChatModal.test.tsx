import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ChatModal from '../components/ChatModal';
import { ChatMessageProvider } from '../context/ChatMessageProvider';

const mockProps = {
    open: true,
    setOpen: jest.fn(),
};



test('calls setOpen when close icon is clicked', () => {
    render(
        <ChatMessageProvider>
            <ChatModal {...mockProps} />
        </ChatMessageProvider>
    );

    fireEvent.click(screen.getByTestId('close-icon'));
    expect(mockProps.setOpen).toHaveBeenCalledWith(false);
});