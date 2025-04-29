import React from "react";

type MessageProps = {
    sender: 'user' | 'bot';
    text: string;
  };
  
  export default function Message({ sender, text }: MessageProps) {
    const isUser = sender === 'user';
  
    return (
      <div className={`my-2 flex ${isUser ? 'justify-end' : 'justify-start'}`}>
        <div className={`max-w-xs px-4 py-2 rounded-lg ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
          {text}
        </div>
      </div>
    );
  }
  