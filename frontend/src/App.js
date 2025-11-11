import React,{useEffect, useState} from "react";

function App() {
  const [message, setmessage] = useState();
  useEffect(()=>{
    fetch("https://docker-mini-app-backend-zbtr.onrender.com/api/hello" )
    .then(res => res.json())
    .then(data => setmessage(data.message));
  },[]);


  return (
    <div style={{textAlign: 'center', marginTop: '3rem'}}>
      <h1>Frontend + Backend + DB with Docker</h1>
      <p>Message from backend: <b>{message}</b></p>
    </div>
  );
}

export default App;
