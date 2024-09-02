import React, { useState } from "react";
import { Box, Typography, Button, Modal, Container } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs"; // Import dayjs correctly

interface FilterProps {
  open: boolean;
  onClose: () => void;
  onDateRangeChange: (startDate: Dayjs | null, endDate: Dayjs | null) => void;
}

export default function Filter({
  open,
  onClose,
  onDateRangeChange,
}: FilterProps) {
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  ;

  const handleStartDateChange = (value: Dayjs | null) => {
    setStartDate(value);
  };

  const handleEndDateChange = (value: Dayjs | null) => {
    setEndDate(value);
  };

  const handleSubmit = () => {
    onDateRangeChange(startDate, endDate);
    onClose(); // Close the modal after applying the filter
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="filter-modal-title"
      aria-describedby="filter-modal-description"
    >
      <Container
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="filter-modal-title" variant="h6" component="h2">
          Select Date Range
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
            <DatePicker
              label="Start Date"
              value={startDate}
              onChange={(newValue) => handleStartDateChange(newValue)}
              shouldDisableDate={(date) =>
                date.isAfter(endDate) || date.isAfter(dayjs())
              }
            />
            <DatePicker
              label="End Date"
              value={endDate}
              onChange={(newValue) => handleEndDateChange(newValue)}
              shouldDisableDate={(date) =>
                date.isBefore(startDate) || date.isAfter(dayjs())
              }
            />
            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Apply
              </Button>
              <Button variant="outlined" color="secondary" onClick={onClose}>
                Cancel
              </Button>
            </Box>
          </Box>
        </LocalizationProvider>
      </Container>
    </Modal>
  );
}
