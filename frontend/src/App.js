import { useEffect, useState } from 'react';
import { connect, sendMsg } from './api';
import { ChatHistory, Header } from './components';

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  
  const send = () => {
    if(newMessage !==''){
      sendMsg(newMessage)
      setNewMessage('');
    }
  }

  const handleKeyPress = (e) => e.key === 'Enter' && send();

  const writeNewMessage = (e) => {
    setNewMessage(e.target.value)
  }

  useEffect(() => {
    connect((msg) => {
      console.log("new___ message")
      setChatHistory((chatHistory) => [...chatHistory, msg])
      console.log("chat history: ", chatHistory)
    });
  }, []);

  return (
    <div>
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <button onClick={send}> Say hello </button>
      <input 
        value={newMessage} 
        onChange={writeNewMessage}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}

export default App;
