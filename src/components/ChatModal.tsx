import { Box, Card, Modal } from "@mui/material";
import React from "react";
import ChatMessages from "./ChatMessages";
import { Close } from "@mui/icons-material";

type ChatModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function ChatModal({ open, setOpen }: ChatModalProps) {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Card
          sx={{ padding: 4, maxHeight: "80vh", width: "80%", overflow: "auto" }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Close
              sx={{ cursor: "pointer" }}
              onClick={() => setOpen(false)}
              data-testid="close-icon"
            />
          </Box>
          <ChatMessages />
        </Card>
      </Box>
    </Modal>
  );
}