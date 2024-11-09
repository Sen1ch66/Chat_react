import { useState, useRef } from 'react';
import './Inputfield.css'

const InputField = ({ onSend }) => {
  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const content = fileInputRef.current.files.length > 0 
      ? fileInputRef.current.files[0].name 
      : message;

    if (user && content) {
      onSend({ user, content, date: new Date() });
      setUser('');
      setMessage('');
      fileInputRef.current.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input
        type="text"
        placeholder="Ваше ім'я"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        className='form-input'
      />
      <input
        type="text"
        placeholder="Повідомлення"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className='form-input'
      />
      <input type="file" ref={fileInputRef} />
      <button type="submit" className='submitBtn'>Відправити</button>
    </form>
  );
};

export default InputField;