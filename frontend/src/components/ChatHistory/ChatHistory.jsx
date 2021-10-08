import React, { useEffect, useState } from 'react'

const ChatHistory = ({ chatHistory }) => {
    const [messages, setMessages] = useState();

    useEffect(() => {
        const msgs = chatHistory ? chatHistory.map((msg, index) => (
            <p key={index}> {msg.data} </p>
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
