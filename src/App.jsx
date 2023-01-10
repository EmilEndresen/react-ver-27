import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"

function App() {
   const [count, setCount] = useState(0)

   return (
      <div className="App">
         <h1>Heisann</h1>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos maxime
            dignissimos id laudantium nobis iure fugiat neque itaque maiores illo.
         </p>
         <h2>Godt Nyttår</h2>
         <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores autem
            voluptatem molestias ab est provident impedit pariatur ea eum ad. Ipsum
            maxime animi aspernatur itaque officia quam ex debitis unde.
         </p>
      </div>
   )
}

export default App
