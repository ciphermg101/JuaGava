import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpen, User, LogOut, Menu, X } from 'lucide-react'
import { useAuthStore } from '../../store/auth-store'
import { Button } from '../ui/Button'
import { ThemeToggle } from '../ui/ThemeToggle'

export const Header: React.FC = () => {
  const location = useLocation()
  const { user, profile, signOut } = useAuthStore()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  const navigation = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Learn', href: '/learn' },
    { name: 'Budget Game', href: '/budget-game' },
    { name: 'Quizzes', href: '/quizzes' },
    { name: 'Local Gov', href: '/local-government' }
  ]

  const handleSignOut = async () => {
    try {
      await signOut()
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <header className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm shadow-soft border-b border-neutral-300 dark:border-neutral-700 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 sm:h-14 md:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 sm:space-x-3"
            >
              <div className="p-1.5 sm:p-2 bg-primary-100 dark:bg-primary-900/30 rounded-xl">
                <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <span className="text-lg sm:text-xl md:text-xl font-bold text-neutral-900 dark:text-neutral-100 font-display">
                JuaGava
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          {user && (
            <nav className="hidden md:flex space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.href
                      ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/30 shadow-soft'
                      : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          )}

          {/* User Menu */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {user ? (
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="hidden sm:block text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                  Welcome, {profile?.full_name || user.email}
                </div>
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Link to="/profile">
                    <Button variant="ghost" size="sm" className="rounded-xl px-2 sm:px-3 py-1.5 sm:py-2">
                      <User size={14} className="mr-1 sm:mr-2 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">Profile</span>
                    </Button>
                  </Link>
                  <Button variant="ghost" size="sm" onClick={handleSignOut} className="rounded-xl px-2 sm:px-3 py-1.5 sm:py-2">
                    <LogOut size={14} className="mr-1 sm:mr-2 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">Sign Out</span>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/auth">
                  <Button variant="outline" size="sm" className="rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm">Sign In</Button>
                </Link>
              </div>
            )}

            {/* Theme toggle */}
            <ThemeToggle />

            {/* Mobile menu button */}
            {user && (
              <button
                className="md:hidden p-1.5 sm:p-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={18} className="sm:w-5 sm:h-5" /> : <Menu size={18} className="sm:w-5 sm:h-5" />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {user && mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-neutral-300 dark:border-neutral-700 py-3 sm:py-4"
          >
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-all duration-200 ${
                    location.pathname === item.href
                      ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/30 shadow-soft'
                      : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}