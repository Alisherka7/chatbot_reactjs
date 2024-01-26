import React, { useState, useEffect, useRef } from "react";
import { Box, Container } from "@mui/material";
import { Message } from "./Message";
import { MessageInput } from "./MessageInput";

export const ChatWindow = () => {
  const [messages, setMessages] = useState<
    Array<{ author: string; content: string }>
  >([]);
  const endOfMessagesRef = useRef<HTMLDivElement | null>(null);

  const sendMessage = (content: string) => {
    setMessages([...messages, { author: "User", content }]);
    // Simulate bot response
    setTimeout(
      () =>
        setMessages((prev) => [
          ...prev,
          { author: "Bot", content: "Sample response" },
        ]),
      500
    );
  };

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
    <div className="flex flex-col h-screen overflow-hidden">
      {" "}
      {/* Full height and dark background */}
      <div className="flex-grow overflow-y-auto custom-scrollbar" style={{ marginTop: 60 }}>
        {" "}
        {/* Message area */}
        <Container maxWidth="md">
          {messages.map((msg, index) => (
            <Message key={index} author={msg.author} content={msg.content} />
          ))}
        </Container>
        <div ref={endOfMessagesRef} />
      </div>
      
      <Container maxWidth="md" style={{marginBottom:10, marginTop:10}}>
        <MessageInput onSend={sendMessage} />
      </Container>
    </div>
    <style>
    {`
      .custom-scrollbar::-webkit-scrollbar {
        width: 12px;
      }
      .custom-scrollbar::-webkit-scrollbar-track {
        background: #2f3542;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb {
        background-color: #404957;
        border-radius: 6px;
        border: 3px solid #2f3542;
      }
    `}
  </style>
  </>
  );
};
