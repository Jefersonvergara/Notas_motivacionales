import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import colors from "./json/colors.json"




function App() {


  const getRandonFromArray =  arr  => {              //arrow function
    const indexRandom = Math.floor( arr.length * Math.random())  //metodo randon pasando decimales a enteros
    return  arr [indexRandom]
  }

  const [quoteRandom, setQuoteRandom] = useState(getRandonFromArray(quotes))
  const [colorRandom, setColorRandom] = useState(getRandonFromArray(colors))

  console.log(colorRandom)

  const handleClick = () =>{
    setQuoteRandom(getRandonFromArray(quotes))
    setColorRandom(getRandonFromArray(colors))
}

const objStyle ={
  backgroundColor : colorRandom
}

  return (
    <div className="App" style={objStyle}>
      <QuoteBox 
      quoteRandom={quoteRandom}
      handleClick={handleClick}
      colorRandom ={colorRandom}
      />

    </div>
  )
}

export default App
 