import React, { useState, useEffect } from 'react';
import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;
const Chatpage = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/api/chat`);
      setChats(data);
    
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>hi
      
      {chats.map((chat) => (
        <div key={chat._id}>
          {chat._id} {chat.chatName}
        </div>
      ))}
    </div>
  );
};

export default Chatpage;
