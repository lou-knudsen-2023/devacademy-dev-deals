import MainBoard from './MainBoard'
import AddBulletin from './AddBulletin'

function App() {
  return (
    <>
      <header className="header">
        <h1>Dev Deals!</h1>
      </header>
      <section className="main">
        <MainBoard />
        <AddBulletin />
      </section>
    </>
  )
}

export default App