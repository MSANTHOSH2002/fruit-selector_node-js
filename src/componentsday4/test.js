import React from 'react'
import './style.css';  
// import './modify.css';
export default function Home() {
  return (   
    <div className="k">
        <h1>Tell me your Favourite Fruit</h1>
        <input type={Text} id='na'></input>
        <br></br>
        <select id='fr'> 
          <option selected disabled hidden>select</option>
          <option>Apple</option>
          <option>Banana</option>
          <option>Cherry</option>
          <option>orange</option>
          <option>grapes</option>
        </select>    
        
        <button type='submit' onClick={greet}>submit</button>
    </div>
  )
}

function greet()
{
  let name = document.getElementById('na').value;
  let fruit = document.getElementById('fr').value;
  alert("Hii "+name+" Your favourite Fruit is "+fruit+" ...");
}
