import { Container } from "@mui/material";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return <Container >{children}</Container>;
}
