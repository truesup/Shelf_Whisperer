import { Routes, Route } from 'react-router-dom'
import WelcomeScreen from './pages/WelcomeScreen'
import ModeSelectScreen from './pages/ModeSelectScreen'
import QuickSearchForm from './pages/QuickSearchForm'
import DetailedSearchForm from './pages/DetailedSearchForm'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomeScreen />} />
      <Route path="/mode-select" element={<ModeSelectScreen />} />
      <Route path="/quick-search" element={<QuickSearchForm />} />
      <Route path="/detailed-search" element={<DetailedSearchForm />} />
    </Routes>
  )
}
