// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [countryNameData, setCountryNameData]=useState([]);
  const [pngData, setPngData] = useState([]);


  useEffect(()=>{
    const getDetails = async()=>{
      try{
      const response = await axios("https://restcountries.com/v3.1/all");
      console.log(response.data);
      setCountryNameData(response.data);
      }catch(e){
        console.error("Something went wrong");
      }
  
    }
    getDetails();
  }, []);
  

  // https://restcountries.com/v3.1/all
  return (
    <div className="container" style={{gridColumn: "sm/12 lg/3 md/6"}}>
      {/* <h1>Hiiiii</h1> */}
      {countryNameData.map((item, index) =>
      <div className='item' key={index}>
        <img src={item.flags.png} alt={item.flags.alt} />
        <p>{item.name.common}</p>
      </div>
      )}
    
    </div>
  );
}

export default App;
