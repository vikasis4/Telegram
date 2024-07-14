import React from 'react';
import { InputBase, IconButton, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ChatInput = () => {

  const [width, setWidth] = React.useState(600)
  React.useEffect(() => {
    var head = document.getElementById('headerbox').clientWidth;
    setWidth(head)
  }, [])

  return (
    <Paper id="inputbox" component="form" style={{ width: width + "px" }} className="flex absolute bottom-0 items-center p-2 dark:bg-gray-800 dark:text-white">
      <InputBase
        className="flex-1 ml-2"
        placeholder="Message"
        inputProps={{ 'aria-label': 'message' }}
      />
      <IconButton type="submit" aria-label="send">
        <SendIcon />
      </IconButton>
    </Paper>
  );
};

export default ChatInput;
