import Home from '@/pages/Home'
import Header from '@/ui/Header'
import './index.css'

function App() {
  return (
    <main className="grow">
      <Header />
      <div className="bounds grow flex flex-col *:grow">
        <Home />
      </div>
    </main>
  )
}

export default App
