import React, { useEffect, useState } from 'react'
import Message from '../Message';
import "./chathistory.scss";

const ChatHistory = ({ chatHistory }) => {
    const [messages, setMessages] = useState();

    useEffect(() => {
        const msgs = chatHistory ? chatHistory.map(msg => (
            <Message message={msg.data}/>
        )) : []
        setMessages(msgs);
    }, [ chatHistory ])

    return (
        <div className="chatHistory">
            <h2> Chat History </h2>
            {messages}
        </div>
    )
}

export default ChatHistory
