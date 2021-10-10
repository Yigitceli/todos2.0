import axios from "axios";
import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



export default function Home() {
  const [file, setFile] = useState(null);

  /*const saveFile = (e) => {
    setFile(e.target.files[0]);
  };
  const uploadFile = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("image", file);
    try {
      await axios.put(`api/user/me/image`, fd, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      setFile(null);
      
    } catch (error) {
      console.log(error);
    }
  };*/
  

  return (
    <div className="h-100">      
      <Navbar />      
      <Dashboard />
    </div>
  );
}
