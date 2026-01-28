import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Service } from './pages/Service'
import { Profile } from './pages/Profile'
import { Payment } from './pages/Payment'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Service />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/pagamento" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  )
}
