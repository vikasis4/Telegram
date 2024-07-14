import React from 'react';
import { IconButton, Avatar } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CallIcon from '@mui/icons-material/Call';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from '../../context/state';

const ChatHeader = () => {

  const { setIsChat } = useState()

  return (
    <div id="headerbox" className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <IconButton onClick={() => setIsChat(false)}>
        <ArrowBackIcon style={{ color: 'white' }} />
      </IconButton>
      <div className="flex items-center">
        <Avatar className="mr-4">RA</Avatar>
        <div>
          <div className="font-bold">Rahul Nit</div>
          <div className="text-sm">last seen recently</div>
        </div>
      </div>
      <div className="flex items-center">
        <IconButton>
          <CallIcon style={{ color: 'white' }} />
        </IconButton>
        <IconButton>
          <MoreVertIcon style={{ color: 'white' }} />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatHeader;
