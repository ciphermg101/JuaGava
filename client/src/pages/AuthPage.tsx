import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import toast from 'react-hot-toast'
import { Mail, Lock, User, MapPin, Shield } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Card, CardContent, CardHeader } from '../components/ui/Card'
import { useAuthStore } from '../store/auth-store'
import { Helmet } from 'react-helmet-async'

const signInSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required').min(6, 'Password must be at least 6 characters')
})

const signUpSchema = z.object({
  firstName: z.string().min(1, 'First name is required').min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(1, 'Last name is required').min(2, 'Last name must be at least 2 characters'),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
  password: z.string()
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number'),
  confirmPassword: z.string().min(1, 'Please confirm your password'),
  ageGroup: z.string().min(1, 'Please select your age group'),
  location: z.string().optional(),
  role: z.enum(['student', 'teacher']).default('student')
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
})

type SignInForm = z.infer<typeof signInSchema>
type SignUpForm = z.infer<typeof signUpSchema>

const getPasswordStrength = (password: string): 'weak' | 'medium' | 'strong' | 'very-strong' => {
  if (!password) return 'weak'
  
  let score = 0
  if (password.length >= 8) score++
  if (/[a-z]/.test(password)) score++
  if (/[A-Z]/.test(password)) score++
  if (/\d/.test(password)) score++
  if (/[^A-Za-z0-9]/.test(password)) score++
  
  if (score <= 2) return 'weak'
  if (score === 3) return 'medium'
  if (score === 4) return 'strong'
  return 'very-strong'
}

export const AuthPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { signIn, signUp } = useAuthStore()

  const signInForm = useForm<SignInForm>({
    resolver: zodResolver(signInSchema),
    mode: 'onTouched'
  })

  const signUpForm = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
    mode: 'onTouched'
  })

  const [passwordStrength, setPasswordStrength] = useState<'weak' | 'medium' | 'strong' | 'very-strong'>('weak')

  // Watch password for strength calculation
  const watchedPassword = signUpForm.watch('password')
  
  useEffect(() => {
    setPasswordStrength(getPasswordStrength(watchedPassword))
  }, [watchedPassword])

  const handleSignIn = async (data: SignInForm) => {
    setLoading(true)
    try {
      await signIn(data.email, data.password)
      toast.success('Karibu tena! (Welcome back!)')
      navigate('/dashboard')
    } catch (error: any) {
      toast.error(error.message || 'Failed to sign in. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleSignUp = async (data: SignUpForm) => {
    setLoading(true)
    try {
      await signUp(data.email, data.password, {
        first_name: data.firstName,
        last_name: data.lastName,
        full_name: `${data.firstName} ${data.lastName}`.trim(),
        age_group: data.ageGroup,
        location: data.location,
        role: data.role
      })
      toast.success('Account created successfully! Karibu JuaGava!')
      signUpForm.reset()
      navigate('/dashboard')
    } catch (error: any) {
      toast.error(error.message || 'Failed to create account. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen gradient-bg-kenya flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Sign In / Sign Up - JuaGava Kenyan Civic Platform</title>
        <meta name="description" content="Join JuaGava to start your Kenyan civic education journey. Learn about government, democracy, and civic participation." />
      </Helmet>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-md w-full"
      >
        <Card className="shadow-large border-kenya-green/20 dark:border-kenya-red/20">
          <CardHeader className="text-center pb-6">
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center space-x-3 mb-6"
            >
              <div className="p-3 bg-gradient-to-br from-kenya-green to-kenya-red rounded-2xl">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 font-display">
                JuaGava
              </span>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 font-display"
            >
              {isSignUp ? 'Create Your Account' : 'Karibu (Welcome)'}
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-neutral-600 dark:text-neutral-400"
            >
              {isSignUp 
                ? 'Join JuaGava to start your Kenyan civic education journey'
                : 'Sign in to continue your learning journey'
              }
            </motion.p>
          </CardHeader>
          
          <CardContent>
            {isSignUp ? (
              <motion.form 
                variants={containerVariants}
                onSubmit={signUpForm.handleSubmit(handleSignUp)} 
                className="space-y-4"
              >
                <motion.div variants={itemVariants}>
                  <Input
                    label="First Name"
                    leftIcon={<User size={18} />}
                    {...signUpForm.register('firstName')}
                    error={signUpForm.formState.errors.firstName?.message || undefined}
                    touched={!!signUpForm.formState.touchedFields.firstName}
                    placeholder="Enter your first name"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Input
                    label="Last Name"
                    leftIcon={<User size={18} />}
                    {...signUpForm.register('lastName')}
                    error={signUpForm.formState.errors.lastName?.message || undefined}
                    touched={!!signUpForm.formState.touchedFields.lastName}
                    placeholder="Enter your last name"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Input
                    label="Email Address"
                    type="email"
                    leftIcon={<Mail size={18} />}
                    {...signUpForm.register('email')}
                    error={signUpForm.formState.errors.email?.message || undefined}
                    touched={!!signUpForm.formState.touchedFields.email}
                    placeholder="Enter your email address"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Input
                    label="Password"
                    type="password"
                    leftIcon={<Lock size={18} />}
                    showPasswordToggle={true}
                    passwordStrength={passwordStrength}
                    {...signUpForm.register('password')}
                    error={signUpForm.formState.errors.password?.message || undefined}
                    touched={!!signUpForm.formState.touchedFields.password}
                    placeholder="Create a strong password"
                    helperText="Must be at least 8 characters with uppercase, lowercase, and number"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Input
                    label="Confirm Password"
                    type="password"
                    leftIcon={<Lock size={18} />}
                    showPasswordToggle={true}
                    {...signUpForm.register('confirmPassword')}
                    error={signUpForm.formState.errors.confirmPassword?.message || undefined}
                    touched={!!signUpForm.formState.touchedFields.confirmPassword}
                    placeholder="Confirm your password"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Age Group <span className="text-error-500">*</span>
                  </label>
                  <select
                    {...signUpForm.register('ageGroup')}
                    className="input-field"
                  >
                    <option value="">Select your age group</option>
                    <option value="13-17">13-17 (High School)</option>
                    <option value="18-25">18-25 (University/Young Adult)</option>
                    <option value="26-35">26-35 (Early Career)</option>
                    <option value="36-50">36-50 (Mid Career)</option>
                    <option value="50+">50+ (Senior)</option>
                  </select>
                  {signUpForm.formState.errors.ageGroup && (
                    <p className="text-sm text-error-600 dark:text-error-400 mt-1">
                      {signUpForm.formState.errors.ageGroup.message}
                    </p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Input
                    label="Location (Optional)"
                    leftIcon={<MapPin size={18} />}
                    placeholder="City, County"
                    {...signUpForm.register('location')}
                    helperText="Help us provide localized content"
                    error={signUpForm.formState.errors.location?.message || undefined}
                    touched={!!signUpForm.formState.touchedFields.location}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    I am a... <span className="text-error-500">*</span>
                  </label>
                  <select
                    {...signUpForm.register('role')}
                    className="input-field"
                  >
                    <option value="student">Student</option>
                    <option value="teacher">Teacher/Educator</option>
                  </select>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Button 
                    type="submit" 
                    className="w-full btn-kenya" 
                    disabled={loading}
                  >
                    {loading ? 'Creating Account...' : 'Create Account'}
                  </Button>
                </motion.div>
              </motion.form>
            ) : (
              <motion.form 
                variants={containerVariants}
                onSubmit={signInForm.handleSubmit(handleSignIn)} 
                className="space-y-4"
              >
                <motion.div variants={itemVariants}>
                  <Input
                    label="Email Address"
                    type="email"
                    leftIcon={<Mail size={18} />}
                    {...signInForm.register('email')}
                    error={signInForm.formState.errors.email?.message || undefined}
                    touched={!!signInForm.formState.touchedFields.email}
                    placeholder="Enter your email address"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Input
                    label="Password"
                    type="password"
                    leftIcon={<Lock size={18} />}
                    showPasswordToggle={true}
                    {...signInForm.register('password')}
                    error={signInForm.formState.errors.password?.message || undefined}
                    touched={!!signInForm.formState.touchedFields.password}
                    placeholder="Enter your password"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Button 
                    type="submit" 
                    className="w-full btn-kenya" 
                    disabled={loading}
                  >
                    {loading ? 'Signing In...' : 'Sign In'}
                  </Button>
                </motion.div>
              </motion.form>
            )}

            <motion.div 
              variants={itemVariants}
              className="mt-6 text-center"
            >
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-kenya-green dark:text-kenya-green hover:text-kenya-green/80 dark:hover:text-kenya-green/80 text-sm font-medium transition-colors duration-300"
              >
                {isSignUp 
                  ? 'Already have an account? Sign in'
                  : "Don't have an account? Sign up"
                }
              </button>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700"
            >
              <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center">
                By continuing, you agree to our{' '}
                <a href="/terms" className="text-kenya-green hover:underline">Terms of Service</a>
                {' '}and{' '}
                <a href="/privacy" className="text-kenya-green hover:underline">Privacy Policy</a>
              </p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}