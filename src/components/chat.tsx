import React, { useState } from 'react';
import { sendMessage } from '../api/chatService';
import Message from '../components/message';

type MessageType = {
  sender: 'user' | 'bot';
  text: string;
};

export default function Chat() {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { sender: 'user', text: input }]);

    const response = await sendMessage(input);

    setMessages(prev => [
      ...prev,
      { sender: 'user', text: input },
      { sender: 'bot', text: response.reply }
    ]);

    setInput('');
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="h-[400px] overflow-y-auto border p-4 rounded-lg shadow">
        {messages.map((msg, idx) => (
          <Message key={idx} sender={msg.sender} text={msg.text} />
        ))}
      </div>
      <div className="flex mt-4 gap-2">
        <input
          type="text"
          className="flex-1 border rounded p-2"
          placeholder="Mande uma mensagem..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button className="bg-black text-white p-2 rounded" onClick={handleSend}>Enviar</button>
      </div>
    </div>
  );
}
