import "./App.css";
import Header from "../src/components/Header";
import Navbar from "../src/components/Navbar";
import Articles from "./components/Article";
import { Routes, Route } from "react-router-dom";
import Article from "./components/Article";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/topics/:topic_slug" element={<Article />} />
        <Route path="/article/:article_id" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
