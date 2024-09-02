import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Filter from '../components/Filter';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';

test('renders Filter component', () => {
    const onClose = jest.fn();
    const onDateRangeChange = jest.fn();

    render(
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Filter open={true} onClose={onClose} onDateRangeChange={onDateRangeChange} />
        </LocalizationProvider>
    );

    expect(screen.getByText(/Select Date Range/i)).toBeInTheDocument();
});

test('calls onClose when cancel button is clicked', () => {
    const onClose = jest.fn();
    const onDateRangeChange = jest.fn();

    render(
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Filter open={true} onClose={onClose} onDateRangeChange={onDateRangeChange} />
        </LocalizationProvider>
    );

    fireEvent.click(screen.getByText(/Cancel/i));
    expect(onClose).toHaveBeenCalled();
});
