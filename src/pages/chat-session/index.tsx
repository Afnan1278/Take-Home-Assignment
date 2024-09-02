// ChatSession.tsx

import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Filter from "../../components/Filter";
import ChatModal from "../../components/ChatModal";
import { ChatMessageProvider } from "../../context/ChatMessageProvider";
import useChatSessionQueries from "./queries/chat-session.query";
import Toast from "../../components/Toast";
import { Dayjs } from "dayjs";
import ChatSessionList from "../../components/ChatSessionList";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
const ChatSession = () => {
  const [selectedStartDate, setSelectedStartDate] = useState<Dayjs | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Dayjs | null>(null);

  const { useGetChatSession } = useChatSessionQueries();
  const { isPending, isError, data, error } = useGetChatSession(
    selectedStartDate ? selectedStartDate.format('YYYY-MM-DD 00:00:00') : undefined,
    selectedEndDate ? selectedEndDate.format('YYYY-MM-DD 23:59:59') : undefined
  );

  const [open, setOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (isError) {
      setShowToast(true);
    }
  }, [isError]);

  const handleDateRangeChange = (startDate: Dayjs | null, endDate: Dayjs | null) => {
    setSelectedStartDate(startDate);
    setSelectedEndDate(endDate);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleChatClick = () => {
    setOpen(true);
  };
  const handlerReset = () => {
    setSelectedStartDate(null);
    setSelectedEndDate(null);
  };

  return (
    <>
      <Toast
        open={showToast}
        handleClose={() => setShowToast(false)}
        message={error?.message || "Something went wrong"}
      />
      <ChatMessageProvider>
        <ChatModal open={open} setOpen={setOpen} />
        <Box sx={{ py: 8 }}>
          <Typography variant="h4" fontWeight={700}>
            Chat Sessions
          </Typography>
          <Box sx={{ py: 2, display: "flex", gap: 2 }}>
            <Button variant="contained" color="primary" onClick={handleOpenModal}>
              <FilterAltIcon /> &nbsp;  Filter
            </Button>
            <Button variant="contained" color="primary" onClick={handlerReset}>
              <RestartAltIcon /> &nbsp;  Reset
            </Button>
          </Box>
          <ChatSessionList
            isPending={isPending}
            data={data}
            handleChatClick={handleChatClick}
          />
        </Box>
      </ChatMessageProvider>
      <Filter
        open={modalOpen}
        onClose={handleCloseModal}
        onDateRangeChange={handleDateRangeChange}
      />
    </>
  );
};

export default ChatSession;
