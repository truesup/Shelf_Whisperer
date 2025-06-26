import { Routes, Route } from 'react-router-dom'
import WelcomeScreen from './components/WelcomeScreen'
import ModeSelectScreen from './components/ModeSelectScreen'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomeScreen />} />
      <Route path="/mode-select" element={<ModeSelectScreen />} />
    </Routes>
  )
}
