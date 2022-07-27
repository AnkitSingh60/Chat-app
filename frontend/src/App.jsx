import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import { Container } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route exact path="/chats" element={<ChatPage />} />
    </Routes>
    </div>
  );
}

export default App;
