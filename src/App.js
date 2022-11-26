import logo from './hiposlogo.png';
import './App.css';
import { useState } from "react";
import axios from "axios";



function App() {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText({
      ...text,
      [event.target.name]: event.target.value
    });
  }



  const handleSubmit = async() => {
    const formData = new FormData();
    formData.append("text", text.text)
    console.log(text);
    try {
      const response = await axios ({
        method: 'POST',
        url: 'https://hipos.marcsg.com/s',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        data: {text: text}
      });
    } catch(error){
      console.log(error)
    }
  }  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hipos</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handleSubmit}>
        <textarea value={text.text} onChange={handleChange} placeholder="Write here the secret you want to share" autoFocus={true}>
          
        </textarea>
        <button type="submit">Create</button>
        </form>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reacteeeeee
        </a>
      </header>
    </div>
  );
}

export default App;
