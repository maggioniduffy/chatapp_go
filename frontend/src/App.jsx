import { useEffect, useState } from 'react';
import { connect, sendMsg } from './api';
import { ChatHistory, ChatInput, Header } from './components';

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  
  const send = () => {
    if(newMessage !== ''){
      sendMsg(newMessage)
      setNewMessage('');
    }
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
      <ChatInput 
        message={newMessage}
        onWrite={setNewMessage}
        send={send}
      />
    </div>
  );
}

export default App;
