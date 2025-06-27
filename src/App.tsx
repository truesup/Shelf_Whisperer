import { Routes, Route } from 'react-router-dom'
import WelcomeScreen from './components/WelcomeScreen'
import ModeSelectScreen from './components/ModeSelectScreen'
import QuickSearchForm from './components/QuickSearchForm'
import DetailedSearchForm from './components/DetailedSearchForm'

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
