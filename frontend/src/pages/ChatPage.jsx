import React, { useState, useEffect } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const res = await fetch("/api/chat");
    const data = await res.json();
    setChats(data);
  };
  // console.log("chats:", chats);

  useEffect(() => {
    // fetchChats();
  }, []);

  return (
    <>
      <h1>ChatsPage</h1>
      
    </>
  );
};

export default ChatPage;
