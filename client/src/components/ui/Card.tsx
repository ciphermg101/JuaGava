import React from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  variant?: 'default' | 'kenya' | 'glass' | 'elevated' | 'outlined'
  animation?: 'fade' | 'slide' | 'scale' | 'none'
  delay?: number
  onClick?: () => void
  interactive?: boolean
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = false,
  variant = 'default',
  animation = 'fade',
  delay = 0,
  onClick,
  interactive = false
}) => {
  const baseClasses = 'rounded-xl sm:rounded-2xl transition-all duration-300'
  
  const variantClasses = {
    default: 'bg-white dark:bg-neutral-800 shadow-soft border border-neutral-300 dark:border-neutral-700',
    kenya: 'bg-gradient-to-br from-kenya-green/5 to-kenya-red/5 dark:from-kenya-green/10 dark:to-kenya-red/10 border border-kenya-green/20 dark:border-kenya-red/20 shadow-soft',
    glass: 'bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-white/20 dark:border-neutral-700/20 shadow-soft',
    elevated: 'bg-white dark:bg-neutral-800 shadow-large border border-neutral-300 dark:border-neutral-700',
    outlined: 'bg-transparent border-2 border-neutral-300 dark:border-neutral-700 shadow-none'
  }
  
  const hoverClasses = hover ? 'hover:shadow-medium hover:transform hover:scale-[1.02] hover:-translate-y-1 cursor-pointer' : ''
  const interactiveClasses = interactive ? 'cursor-pointer active:scale-95' : ''
  
  const animationVariants = {
    fade: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay }
    },
    slide: {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.6, delay }
    },
    scale: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.4, delay }
    },
    none: {
      initial: {},
      animate: {},
      transition: {}
    }
  }

  const cardContent = (
    <div className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${interactiveClasses} ${className}`}>
      {children}
    </div>
  )

  if (animation === 'none') {
    return onClick ? (
      <div onClick={onClick}>
        {cardContent}
      </div>
    ) : cardContent
  }

  return (
    <motion.div
      initial={animationVariants[animation].initial}
      animate={animationVariants[animation].animate}
      transition={animationVariants[animation].transition}
      whileHover={hover ? { scale: 1.02, y: -4 } : {}}
      whileTap={interactive ? { scale: 0.98 } : {}}
      onClick={onClick}
    >
      {cardContent}
    </motion.div>
  )
}

export const CardHeader: React.FC<{ 
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'kenya'
}> = ({ 
  children, 
  className = '',
  variant = 'default'
}) => {
  const variantClasses = {
    default: 'border-neutral-300 dark:border-neutral-700',
    kenya: 'border-kenya-green/20 dark:border-kenya-red/20'
  }
  
  return (
    <div className={`px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 border-b ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  )
}

export const CardContent: React.FC<{ 
  children: React.ReactNode
  className?: string
  padding?: 'sm' | 'md' | 'lg'
}> = ({ 
  children, 
  className = '',
  padding = 'md'
}) => {
  const paddingClasses = {
    sm: 'px-3 sm:px-4 py-2 sm:py-3',
    md: 'px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5',
    lg: 'px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8'
  }
  
  return (
    <div className={`${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  )
}

export const CardFooter: React.FC<{ 
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'kenya'
}> = ({ 
  children, 
  className = '',
  variant = 'default'
}) => {
  const variantClasses = {
    default: 'border-neutral-300 dark:border-neutral-700',
    kenya: 'border-kenya-green/20 dark:border-kenya-red/20'
  }
  
  return (
    <div className={`px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 border-t ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  )
}

// Specialized card components for different use cases
export const StatCard: React.FC<{
  icon: React.ReactNode
  title: string
  value: string | number
  description?: string
  trend?: 'up' | 'down' | 'neutral'
  trendValue?: string
  className?: string
}> = ({ icon, title, value, description, trend, trendValue, className = '' }) => {
  const trendColors = {
    up: 'text-success-600 dark:text-success-400',
    down: 'text-error-600 dark:text-error-400',
    neutral: 'text-neutral-600 dark:text-neutral-400'
  }

  const trendIcons = {
    up: '↗',
    down: '↘',
    neutral: '→'
  }

  return (
    <Card className={`${className}`}>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">{title}</p>
            <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">{value}</p>
            {description && (
              <p className="text-sm text-neutral-500 dark:text-neutral-400">{description}</p>
            )}
            {trend && trendValue && (
              <div className={`flex items-center space-x-1 text-sm font-medium ${trendColors[trend]}`}>
                <span>{trendIcons[trend]}</span>
                <span>{trendValue}</span>
              </div>
            )}
          </div>
          <div className="flex-shrink-0">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export const FeatureCard: React.FC<{
  icon: React.ReactNode
  title: string
  description: string
  features?: string[]
  variant?: 'default' | 'kenya'
  className?: string
}> = ({ icon, title, description, features, variant = 'default', className = '' }) => {
  return (
    <Card variant={variant} hover className={`h-full ${className}`}>
      <CardContent>
        <div className="flex flex-col h-full">
          <div className="flex-shrink-0 mb-4">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3 font-display">
            {title}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed flex-grow">
            {description}
          </p>
          {features && features.length > 0 && (
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2 text-sm text-neutral-700 dark:text-neutral-300">
                  <div className="w-1.5 h-1.5 bg-kenya-green rounded-full flex-shrink-0"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export const TestimonialCard: React.FC<{
  content: string
  author: {
    name: string
    role: string
    avatar?: string
  }
  rating?: number
  className?: string
}> = ({ content, author, rating, className = '' }) => {
  return (
    <Card className={`h-full ${className}`}>
      <CardContent>
        <div className="flex flex-col h-full">
          <div className="flex-grow">
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed italic mb-4">
              "{content}"
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-kenya-green to-kenya-red rounded-full flex items-center justify-center text-white font-semibold text-sm">
              {author.avatar || author.name.charAt(0)}
            </div>
            <div>
              <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm">
                {author.name}
              </h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                {author.role}
              </p>
            </div>
            {rating && (
              <div className="ml-auto flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full ${
                      i < rating ? 'bg-kenya-gold' : 'bg-neutral-300 dark:bg-neutral-600'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}