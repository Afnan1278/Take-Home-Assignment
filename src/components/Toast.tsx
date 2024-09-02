import { Snackbar } from "@mui/material";
import React from "react";

interface AlertProps {
  open: boolean;
  handleClose: () => void;
  message: string;
}
const Toast = ({ open, handleClose, message }: AlertProps) => {
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={message}
        key={"top right"}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      />
    </>
  );
};

export default Toast;
