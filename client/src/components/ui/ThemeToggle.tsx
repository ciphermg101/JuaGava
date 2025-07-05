import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useThemeStore } from '../../store/theme-store'

interface ThemeToggleProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  className = '', 
  size = 'md' 
}) => {
  const { theme, toggleTheme } = useThemeStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={`theme-toggle ${className}`}>
        <div className="skeleton w-5 h-5 rounded" />
      </div>
    )
  }

  const sizeClasses = {
    sm: 'p-2',
    md: 'p-3',
    lg: 'p-4'
  }

  const iconSizes = {
    sm: 16,
    md: 18,
    lg: 20
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className={`theme-toggle ${sizeClasses[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {theme === 'dark' ? (
          <Sun 
            size={iconSizes[size]} 
            className="text-kenya-gold" 
          />
        ) : (
          <Moon 
            size={iconSizes[size]} 
            className="text-neutral-700 dark:text-neutral-300" 
          />
        )}
      </motion.div>
    </motion.button>
  )
} 