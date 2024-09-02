import { Box, CircularProgress } from "@mui/material";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const ChatSession = lazy(() => import("./pages/chat-session"));

export default function AppRoutes() {
  const LoadingFallback = () => (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <CircularProgress />
    </Box>
  );
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<ChatSession />} />
      </Routes>
    </Suspense>
  );
}
