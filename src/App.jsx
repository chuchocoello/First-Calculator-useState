import { useState } from 'react'
import './App.css'

function App() {
  const colors = ['#8B8C7A', '#6C4675', '#6A5D4D', '#FDF4E3', '#3F888F', '#1E213D', '#828282', '#2A6478']
  const [count, setCount] = useState(0)
  const [color, setColorCount] = useState('#8A9597')
  

  return (
    <div className="App" style={{backgroundColor: `${color}`}}>
      <h1>JCoello Calculator1</h1>
      <div className="Display">
      {count.toFixed(2)}
      </div>
      <div className="Buttons">
      <button onClick={() => {setCount(count+1)}}>+1</button>
      <button onClick={() => {setCount(count-1)}}>-1</button>
      <button onClick={() => {setCount(count*10)}}>x10</button>
      <button onClick={() => {setCount(count/10)}}>/10</button>
      <button onClick={() => {setCount(Math.sqrt(count))}}>√</button>
      <button onClick={() => {setCount(Math.pow(count, 2))}}>x²</button>
      <button onClick={() => {setCount(0)}}>Reset</button>
      <button onClick={() => {setColorCount(colors[Math.floor(Math.random()*colors.length)])}}>color</button>
      </div>
    </div>
  )
}

export default App
