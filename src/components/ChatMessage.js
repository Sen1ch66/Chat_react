const ChatMessage = ({ user, content, date }) => {
  return (
    <div className="chat-message">
      <strong>{user}</strong>
      <p>{content}</p>
      <small>{new Date(date).toLocaleString()}</small>
    </div>
  );
};

export default ChatMessage;