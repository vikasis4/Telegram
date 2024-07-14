import React from 'react';

const messages = [
  { id: 1, text: 'https://nitkkr-omega.vercel.app/', time: '8:24 PM', sender: 'me' },
  { id: 2, text: 'Sare bugs fix hogye hai, ab thik chal rhi hai website', time: '8:58 PM', sender: 'me' },
  { id: 3, text: 'Okay 👍', time: '8:58 PM', sender: 'other' },
  { id: 4, text: 'frontend', time: '1:05 PM', sender: 'me' },
  { id: 5, text: 'Rahul_Resume_Synopsis.pdf', time: '12:52 PM', sender: 'me' },
  { id: 6, text: 'https://nitkkr-omega.vercel.app/', time: '8:24 PM', sender: 'me' },
  { id: 7, text: 'Sare bugs fix hogye hai, ab thik chal rhi hai website', time: '8:58 PM', sender: 'me' },
  { id: 8, text: 'Okay 👍', time: '8:58 PM', sender: 'other' },
  { id: 9, text: 'frontend', time: '1:05 PM', sender: 'me' },
  { id: 11, text: 'Rahul_Resume_Synopsis.pdf', time: '12:52 PM', sender: 'me' },
  { id: 12, text: 'https://nitkkr-omega.vercel.app/', time: '8:24 PM', sender: 'me' },
  { id: 23, text: 'Sare bugs fix hogye hai, ab thik chal rhi hai website', time: '8:58 PM', sender: 'me' },
  { id: 33, text: 'Okay 👍', time: '8:58 PM', sender: 'other' },
  { id: 41, text: 'frontend', time: '1:05 PM', sender: 'me' },
  { id: 53, text: 'Rahul_Resume_Synopsis.pdf', time: '12:52 PM', sender: 'me' },
];

const ChatMessages = () => {
  var [height, setHeight] = React.useState(400)

  React.useEffect(() => {
    var input = document.getElementById('inputbox').clientHeight
    var head = document.getElementById('headerbox').clientHeight
    setHeight(window.innerHeight - (input + head))
  }, [])

  return (
    <div id="msgbox" className="p-4 overflow-y-scroll dark:bg-gray-900" style={{ height: height + "px" }}>
      <div className="flex justify-center text-gray-500 text-sm mb-4">November 26</div>
      {messages.map((msg) => (
        <div key={msg.id} className={`flex mb-4 ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
          <div className={`rounded-lg p-2 ${msg.sender === 'me' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-white'}`}>
            <div>{msg.text}</div>
            <div className="text-xs mt-1 text-gray-200 text-right">{msg.time}</div>
          </div>
        </div>
      ))}
      <div className="flex justify-center text-gray-500 text-sm mb-4">April 18</div>
      <div className="flex justify-center text-gray-500 text-sm mb-4">April 19</div>
    </div>
  );
};

export default ChatMessages;
