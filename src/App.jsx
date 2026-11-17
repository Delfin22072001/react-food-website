import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import { seafoodMenu } from './data/Product';
import { Routes, Route } from 'react-router-dom'

import { useState } from 'react';

function App() {

  const [search, setSearch] = useState("")

  const data = seafoodMenu.filter((food) => (
    food.name.toLowerCase().includes(search)
  ))

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home data={data} search={search} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App