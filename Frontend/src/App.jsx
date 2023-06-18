import React from "react"

function App() {


  return (
    <div className="bg-slate-200 h-screen flex justify-center items-center flex-col gap-5">
      <h1 className="sukui-h1">Rapidly build modern websites <br /> without ever leaving your HTML.</h1>
      <p className="sukui-p text-center">A utility-first CSS framework packed with classes like flex, pt-4, text-center
        <br />and rotate-90 that can be composed to build any design, directly in your markup.</p>

      <input type="text" className="sukui-input" placeholder="Quick search" />
      <div className="flex gap-2">
        <button className="sukui-button">Commencer</button>
        <button className="sukui-button2">Plus tard</button>
      </div>

    </div>
  )
}

export default App
