import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"

function App() {
   const [count, setCount] = useState(0)

   return (
      <div className="App">
         <h1>Hallaien</h1>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt in non
            deleniti sapiente cupiditate nulla aliquid, id dignissimos! Ipsum quae
            similique dolores id corporis officiis quos rerum praesentium dolorem
            perferendis.
         </p>
         <h2>Joda</h2>
      </div>
   )
}

export default App
