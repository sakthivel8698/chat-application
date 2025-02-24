import logo from "./logo.svg";
import "./App.css";
import { Button, HStack } from "@chakra-ui/react";
import { Route, Router, Routes } from "react-router-dom";
import chatpage from "./pages/chatpage";
import Homepage from "./pages/homepage";
import { createStandaloneToast } from "@chakra-ui/toast";
const { ToastContainer } = createStandaloneToast();

function App() {
  return (
    <div className="App">
      <ToastContainer />

      {/* <Button>Click me</Button> */}
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/chat" Component={chatpage} />
      </Routes>
    </div>
  );
}

export default App;
