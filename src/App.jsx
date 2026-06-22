import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="app-header">
        <h1>React + Vite</h1>
        <p>Get started by editing <code>src/App.jsx</code></p>
      </header>
      <main className="app-main">
        <button onClick={() => setCount((c) => c + 1)}>
          Count: {count}
        </button>
      </main>
    </div>
  )
}

export default App
