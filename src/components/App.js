import React, {useEffect, useState} from "react";
import "../App.css";
import axios from 'axios';
import { BASE_URL, API_DATA } from '../constants/apiInfo'
import Header from './header.js'

function App() {
  const [imgObj, setImgObj] = useState(API_DATA);
  //Uncomment below to test with actual API Data - Threw in work around so I wouldn't clock out my Base API Key 
  // useEffect(() => {
  //   axios.get(BASE_URL)
  //   .then(res => {
  //     setImgObj(res.data)
  //   })
  //   .catch(err => {
  //     debugger
  //   })
  // }, []);

  // console.log(imgObj);
  
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Header date={imgObj.date}/>
    </div>
  );
}

export default App;
