import React, { useEffect } from "react";
import axios from "axios";
const Chatpage = () => {
  const api = "http://localhost:5000";
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await axios.get(`${api}/chat`);

    console.log("data", data);
  };

  return <div>chatpage</div>;
};

export default Chatpage;
