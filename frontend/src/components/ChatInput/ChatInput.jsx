import React from 'react';
import './chatinput.scss';

const ChatInput = ({message, onWrite, send}) => {
    const handleKeyPress = (e) => e.key === 'Enter' && send();
    console.log(message)
    return (
        <div className='chatInput'>
            <input 
                value={message} 
                onKeyPress={handleKeyPress}
                onChange={e => onWrite(e.target.value)}
            />
        </div>
    )
}

export default ChatInput
