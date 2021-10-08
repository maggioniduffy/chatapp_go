import { useEffect } from 'react';
import { connect, sendMsg } from './api';

const send = () => {
  console.log("hello");
  sendMsg("hello")
}


function App() {
  useEffect(() => {
    connect();
  }, []);

  return (
    <div>
      <button onClick={send}> Say hello </button>
    </div>
  );
}

export default App;
