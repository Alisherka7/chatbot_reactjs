import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Modal,
  Box,
  RadioGroup,
  FormControlLabel,
  Radio,
  Container,
} from "@mui/material";
import { ChatWindow } from "./chat/ChatWindow";
import NavBar from "./navigation/NavBar";
import {
  styled,
  alpha,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0061ff",
    },
  },
});

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedModel, setSelectedModel] = useState("gpt3.5-turbo");

  return (
    <div className="text-white" style={{ backgroundColor: "#343541" }}>
      <NavBar
        selectedModel={selectedModel}
        setSelectedModel={setSelectedModel}
      />
      <ChatWindow />
    </div>
  );
}

export default App;
