import MainBoard from './MainBoard'
import { Routes, Route } from 'react-router-dom'
import EditBulletin from './EditBulletin'

function App() {
  return (
    <>
      <header className="header">
        <h1>Dev Deals!</h1>
      </header>
      <section className="main">
        <MainBoard />
        {/* <AddBulletin /> */}
        
      </section>
      
    </>
  )
}

export default App
