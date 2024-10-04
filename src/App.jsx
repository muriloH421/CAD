import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewBoardBoard from './_codux/boards/new-board.board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NewBoardBoard></NewBoardBoard>
    </>
  )
}

export default App
