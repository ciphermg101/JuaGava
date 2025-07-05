import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Link, useLocation } from 'react-router-dom'

interface LayoutProps {
  children: React.ReactNode
}

const sidebarLinks = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Learn', href: '/learn' },
  { name: 'Budget Game', href: '/budget-game' },
  { name: 'Quizzes', href: '/quizzes' },
  { name: 'Local Gov', href: '/local-government' },
  { name: 'Profile', href: '/profile' }
]

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  return (
    <div className="min-h-screen bg-gradient-br from-neutral-50 via-white to-neutral-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 flex flex-col">
      <Header />
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className={`z-20 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border-r border-neutral-300 dark:border-neutral-700 w-64 p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4 hidden md:block`} aria-label="Sidebar">
          <nav className="space-y-2">
            {sidebarLinks.map(link => (
              <Link
                key={link.name}
                to={link.href}
                className={`block px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-all duration-200 ${
                  location.pathname === link.href
                    ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/30 shadow-soft'
                    : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 hover:bg-neutral-100 dark:hover:bg-neutral-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </aside>
        
        {/* Mobile sidebar toggle */}
        <button
          className="md:hidden fixed top-20 left-3 sm:left-4 z-30 p-2 sm:p-3 rounded-xl bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm border border-neutral-300 dark:border-neutral-700 shadow-soft"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle sidebar"
        >
          <span className="sr-only">Toggle sidebar</span>
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-700 dark:text-neutral-300 sm:w-5 sm:h-5">
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
        
        {/* Mobile sidebar */}
        {sidebarOpen && (
          <aside className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm flex md:hidden" onClick={() => setSidebarOpen(false)}>
            <div className="bg-white/95 dark:bg-neutral-800/95 backdrop-blur-sm w-64 p-4 sm:p-6 space-y-3 sm:space-y-4 h-full shadow-large" onClick={e => e.stopPropagation()}>
              <nav className="space-y-2">
                {sidebarLinks.map(link => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`block px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-all duration-200 ${
                      location.pathname === link.href
                        ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/30 shadow-soft'
                        : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 hover:bg-neutral-100 dark:hover:bg-neutral-700'
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>
        )}
        
        {/* Main content */}
        <main className="flex-1 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-6 lg:py-8">
          {children}
        </main>
      </div>
      
      <Footer />
    </div>
  )
}