import React, { useState } from 'react';
import './message.scss';

const Message = ({message}) => {
    const [msg] = useState(JSON.parse(message))

    return (
        <div className="Message">
            {msg.body}
        </div>
    )
}

export default Message
