import { useState } from 'react';
import InputField from './components/Inputfield';
import ChatMessage from './components/ChatMessage';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chat">
      <InputField onSend={handleSendMessage} />
      <div className="messages">
        <h1>Чат</h1>
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            user={msg.user}
            content={msg.content}
            date={msg.date}
          />
        ))}
      </div>
    </div>
  );
};


export default Chat;
