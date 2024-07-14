import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import { Container } from '@mui/material';

function Room() {

    return (
        <div className="max-w-md mx-auto bg-gray-900 relative text-white h-full">
            <Container style={{ padding: 0 }} className="flex-1 flex flex-col h-full">
                <ChatHeader />
                <ChatMessages />
                <ChatInput />
            </Container>
        </div>
    );
}

export default Room;
