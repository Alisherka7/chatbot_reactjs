import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

type MessageProps = {
  author: string;
  content: string;
};

export const Message = ({ author, content }: MessageProps) => {
  const [displayedContent, setDisplayedContent] = useState("");
  const typingSpeedMs = 20; // Speed of typing in milliseconds

  useEffect(() => {
    if (author === "Bot") {
      let index = 0;
      const timer = setInterval(() => {
        if (index < content.length) {
          setDisplayedContent((prev) => prev + content[index]);
          index++;
        } else {
          clearInterval(timer);
        }
      }, typingSpeedMs);

      return () => clearInterval(timer); // Cleanup interval on component unmount
    } else {
      // If the author is not "Bot", display the full content immediately
      setDisplayedContent(content);
    }
  }, [author, content]);

  return (
    <>
    <div className="p-4 border border-gray-400 m-2 rounded-lg text-white overflow-hidden relative">
      <div className="font-bold">{author}</div>
      <div
        className="break-words whitespace-pre-wrap overflow-auto "
        style={{ overflowWrap: "break-word" }} // Set a max height and add scrollbar
      >
        {displayedContent}
      </div>
    </div>
  </>
  );
};
