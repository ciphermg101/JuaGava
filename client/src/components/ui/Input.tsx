import React, { useState, forwardRef } from 'react'
import { motion } from 'framer-motion'
import { Eye, EyeOff, CheckCircle, AlertCircle } from 'lucide-react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  success?: string
  helperText?: string
  showPasswordToggle?: boolean
  passwordStrength?: 'weak' | 'medium' | 'strong' | 'very-strong'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  touched?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    label, error, success, helperText, showPasswordToggle = false, passwordStrength,
    leftIcon, rightIcon, className = '', type = 'text', touched, ...props
  },
  ref
) {
  const [showPassword, setShowPassword] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const inputType = showPasswordToggle && type === 'password' 
    ? (showPassword ? 'text' : 'password') 
    : type

  const getPasswordStrengthColor = () => {
    switch (passwordStrength) {
      case 'weak': return 'bg-error-500'
      case 'medium': return 'bg-warning-500'
      case 'strong': return 'bg-success-500'
      case 'very-strong': return 'bg-kenya-green'
      default: return 'bg-neutral-300 dark:bg-neutral-600'
    }
  }

  const getPasswordStrengthWidth = () => {
    switch (passwordStrength) {
      case 'weak': return 'w-1/4'
      case 'medium': return 'w-1/2'
      case 'strong': return 'w-3/4'
      case 'very-strong': return 'w-full'
      default: return 'w-0'
    }
  }

  const getPasswordStrengthText = () => {
    switch (passwordStrength) {
      case 'weak': return 'Weak'
      case 'medium': return 'Medium'
      case 'strong': return 'Strong'
      case 'very-strong': return 'Very Strong'
      default: return ''
    }
  }

  const showError = (touched === undefined ? true : touched) && error

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {label}
          {props.required && <span className="text-error-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 dark:text-neutral-500">
            {leftIcon}
          </div>
        )}
        
        <input
          ref={ref}
          type={inputType}
          className={`
            w-full px-4 py-3 border rounded-xl shadow-sm
            bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100
            focus:outline-none focus:ring-2 focus:ring-offset-0
            disabled:bg-neutral-50 dark:disabled:bg-neutral-900 disabled:text-neutral-500 dark:disabled:text-neutral-400
            placeholder-neutral-500 dark:placeholder-neutral-400
            transition-all duration-300
            ${leftIcon ? 'pl-12' : ''}
            ${rightIcon || showPasswordToggle ? 'pr-12' : ''}
            ${showError 
              ? 'border-error-500 focus:ring-error-500 focus:border-error-500' 
              : success 
                ? 'border-success-500 focus:ring-success-500 focus:border-success-500'
                : isFocused
                  ? 'border-primary-500 focus:ring-primary-500 focus:border-primary-500'
                  : 'border-neutral-300 dark:border-neutral-600 focus:ring-primary-500 focus:border-primary-500'
            }
            ${className}
          `}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        
        {/* Right Icons */}
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
          {success && (
            <CheckCircle size={18} className="text-success-500" />
          )}
          {showError && (
            <AlertCircle size={18} className="text-error-500" />
          )}
          {rightIcon && !success && !showError && (
            <div className="text-neutral-400 dark:text-neutral-500">
              {rightIcon}
            </div>
          )}
          {showPasswordToggle && type === 'password' && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors duration-200"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          )}
        </div>
      </div>

      {/* Password Strength Indicator */}
      {passwordStrength && (
        <div className="space-y-2">
          <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-1.5 overflow-hidden">
            <motion.div
              className={`h-full ${getPasswordStrengthColor()} rounded-full transition-all duration-500`}
              initial={{ width: 0 }}
              animate={{ width: getPasswordStrengthWidth().replace('w-', '').replace('/', '') + '%' }}
            />
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-neutral-500 dark:text-neutral-400">Password strength:</span>
            <span className={`font-medium ${
              passwordStrength === 'weak' ? 'text-error-500' :
              passwordStrength === 'medium' ? 'text-warning-500' :
              passwordStrength === 'strong' ? 'text-success-500' :
              'text-kenya-green'
            }`}>
              {getPasswordStrengthText()}
            </span>
          </div>
        </div>
      )}

      {/* Helper Text */}
      {helperText && !showError && !success && (
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {helperText}
        </p>
      )}

      {/* Error Message */}
      {showError && (
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-error-600 dark:text-error-400 flex items-center space-x-1"
        >
          <AlertCircle size={14} />
          <span>{error}</span>
        </motion.p>
      )}

      {/* Success Message */}
      {success && (
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-success-600 dark:text-success-400 flex items-center space-x-1"
        >
          <CheckCircle size={14} />
          <span>{success}</span>
        </motion.p>
      )}
    </div>
  )
});