import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Layout } from './components/layout/Layout'
import { HomePage } from './pages/HomePage'
import { AuthPage } from './pages/AuthPage'
import { DashboardPage } from './pages/DashboardPage'
import { LearnPage } from './pages/LearnPage'
import { BudgetGamePage } from './pages/BudgetGamePage'
import { QuizzesPage } from './pages/QuizzesPage'
import { LocalGovernmentPage } from './pages/LocalGovernmentPage'
import { ProfilePage } from './pages/ProfilePage'
import { useAuthStore } from './store/auth-store'

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuthStore()
  
  if (loading) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary-200 border-t-primary-600 mx-auto mb-4"></div>
          <p className="text-neutral-600 dark:text-neutral-400 font-medium">Loading...</p>
        </div>
      </div>
    )
  }
  
  return user ? <>{children}</> : <Navigate to="/auth" />
}

function App() {
  const { initialize, loading } = useAuthStore()

  useEffect(() => {
    initialize()
  }, [initialize])

  if (loading) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary-200 border-t-primary-600 mx-auto mb-4"></div>
          <p className="text-neutral-600 dark:text-neutral-400 font-medium">Loading JuaGava...</p>
        </div>
      </div>
    )
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Layout>
                  <DashboardPage />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/learn"
            element={
              <ProtectedRoute>
                <Layout>
                  <LearnPage />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/budget-game"
            element={
              <ProtectedRoute>
                <Layout>
                  <BudgetGamePage />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/quizzes"
            element={
              <ProtectedRoute>
                <Layout>
                  <QuizzesPage />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/local-government"
            element={
              <ProtectedRoute>
                <Layout>
                  <LocalGovernmentPage />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Layout>
                  <ProfilePage />
                </Layout>
              </ProtectedRoute>
            }
          />
        </Routes>
        <Toaster position="top-right" />
      </div>
    </Router>
  )
}

export default App