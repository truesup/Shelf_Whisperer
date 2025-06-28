import { useLocation, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import WelcomeScreen from '../../pages/WelcomeScreen'
import ModeSelectScreen from '../../pages/ModeSelectScreen'
import QuickSearchForm from '../../pages/QuickSearchForm'
import DetailedSearchForm from '../../pages/DetailedSearchForm'
import PageWrapper from './PageWrapper'

export default function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <WelcomeScreen />
            </PageWrapper>
          }
        />
        <Route
          path="/mode-select"
          element={
            <PageWrapper>
              <ModeSelectScreen />
            </PageWrapper>
          }
        />
        <Route
          path="/quick-search"
          element={
            <PageWrapper>
              <QuickSearchForm />
            </PageWrapper>
          }
        />
        <Route
          path="/detailed-search"
          element={
            <PageWrapper>
              <DetailedSearchForm />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}
