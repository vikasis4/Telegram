import React from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { useState } from '../context/state';

const ChatBox = ({ chat }) => {

  const { setIsChat } = useState()

  return (
    <ListItem onClick={() => setIsChat(true)} button className="flex items-center py-2">
      <ListItemAvatar>
        <Avatar>{chat.avatar}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={chat.name}
        secondary={chat.message}
        className="truncate text-white"
      />
      <span className="text-xs text-gray-500">{chat.date}</span>
    </ListItem>
  );
};

export default ChatBox;
