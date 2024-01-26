import React, { useState, useRef } from 'react';
import SendIcon from '@mui/icons-material/Send';
type MessageInputProps = {
  onSend: (message: string) => void;
};

export const MessageInput = ({ onSend }: MessageInputProps) => {
  const [input, setInput] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput('');
      if (textareaRef.current) {
        textareaRef.current.style.height = '48px'; // Reset to default height
      }
    }
  };

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
    const target = event.target;
    target.style.height = '48px'; // Reset the height to recalculate
    target.style.overflowY = 'hidden'; // Hide scrollbar temporarily
    target.style.height = `${target.scrollHeight}px`; // Set the new height
    if (target.scrollHeight > 200) {
      target.style.height = '200px'; // Set max height
      target.style.overflowY = 'auto'; // Show scrollbar when content exceeds 200px
    }
  };
  return (
    <div className="flex p-2">
        <style>
        {`
          textarea::-webkit-scrollbar {
            width: 12px; /* width of the entire scrollbar */
          }
          textarea::-webkit-scrollbar-track {
            background: #2f3542; /* color of the tracking area */
          }s
          textarea::-webkit-scrollbar-thumb {
            background-color: #404957; /* color of the scroll thumb */
            border-radius: 20px; /* roundness of the scroll thumb */
            border: 3px solid #2f3542; /* creates padding around scroll thumb */
          }
        `}
      </style>
      <textarea 
        ref={textareaRef}
        value={input}
        onChange={handleInput}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault(); // Prevent new line
            handleSend();
          }
        }}
        className="flex-grow p-2 border border-gray-400 rounded-l-lg bg-transparent text-white placeholder-gray-400 focus:outline-none resize-none overflow-auto"
        placeholder="Message ChatGPT..."
        style={{ maxHeight: '200px' }} // Set the maximum height
        rows={1}
      />
      <button 
        onClick={handleSend} 
        className="border border-gray-400 text-gray-400 hover:text-white hover:border-white font-bold py-2 px-4 rounded-r-lg flex items-center justify-center"
        // style={{ width: '48px', height: '48px' }}
      >
        {<SendIcon/>}
      </button>
    </div>
  );
};
