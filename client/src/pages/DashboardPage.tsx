import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Trophy, 
  Users, 
  TrendingUp, 
  Clock, 
  Star, 
  MapPin, 
  Vote, 
  Building2, 
  Award,
  Calendar,
  CheckCircle,
  ArrowRight,
  Shield,
  Globe
} from 'lucide-react'
import { Card, CardContent, CardHeader, StatCard, FeatureCard } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { useAuthStore } from '../store/auth-store'
import { useContentStore } from '../store/content-store'
import { Helmet } from 'react-helmet-async'

export const DashboardPage: React.FC = () => {
  const { profile } = useAuthStore()
  const { content, loadContent, userProgress } = useContentStore()

  useEffect(() => {
    loadContent()
  }, [loadContent])

  const stats = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary-600 dark:text-primary-400" />,
      title: 'Content Completed',
      value: userProgress.filter(p => p.completion_percentage === 100).length,
      description: 'Learning modules finished'
    },
    {
      icon: <Trophy className="h-8 w-8 text-success-600 dark:text-success-400" />,
      title: 'Quizzes Passed',
      value: userProgress.filter(p => p.progress_type === 'quiz' && (p.score || 0) >= 70).length,
      description: 'Knowledge assessments completed'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-warning-600 dark:text-warning-400" />,
      title: 'Learning Streak',
      value: '7 days',
      description: 'Consecutive days of learning'
    },
    {
      icon: <Star className="h-8 w-8 text-kenya-gold" />,
      title: 'Achievement Points',
      value: userProgress.length * 10,
      description: 'Total points earned'
    }
  ]

  const quickActions = [
    {
      icon: <Trophy className="h-8 w-8 text-kenya-green" />,
      title: 'Budget Game',
      description: 'Practice managing county budgets',
      href: '/budget-game',
      color: 'from-kenya-green/10 to-kenya-green/5'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary-600" />,
      title: 'Take Quiz',
      description: 'Test your civic knowledge',
      href: '/quizzes',
      color: 'from-primary-600/10 to-primary-600/5'
    },
    {
      icon: <Building2 className="h-8 w-8 text-kenya-red" />,
      title: 'Local Government',
      description: 'Connect with your community',
      href: '/local-government',
      color: 'from-kenya-red/10 to-kenya-red/5'
    }
  ]

  const kenyaInsights = [
    {
      icon: <MapPin className="h-6 w-6 text-kenya-green" />,
      title: 'Your County',
      value: profile?.location || 'Not set',
      description: 'Update your location for personalized content'
    },
    {
      icon: <Vote className="h-6 w-6 text-kenya-red" />,
      title: 'Voter Status',
      value: 'Registered',
      description: 'Check your voter registration status'
    },
    {
      icon: <Building2 className="h-6 w-6 text-kenya-gold" />,
      title: 'County Assembly',
      value: 'Active',
      description: 'Your county government is in session'
    }
  ]

  const recentContent = content.slice(0, 3)
  const inProgressContent = userProgress
    .filter(p => p.completion_percentage < 100)
    .slice(0, 3)

  const upcomingEvents = [
    {
      title: 'County Budget Public Hearing',
      date: '2024-02-20',
      location: 'County Assembly Hall',
      type: 'Public Participation'
    },
    {
      title: 'Civic Education Workshop',
      date: '2024-02-25',
      location: 'Community Center',
      type: 'Learning Event'
    },
    {
      title: 'Youth Leadership Forum',
      date: '2024-03-01',
      location: 'Youth Center',
      type: 'Community Event'
    }
  ]

  return (
    <div className="space-y-8">
      <Helmet>
        <title>Dashboard - JuaGava Kenyan Civic Platform | Your Learning Hub</title>
        <meta name="description" content="Your personalized dashboard for Kenyan civic learning, progress tracking, and community engagement. Track your achievements and continue your civic education journey." />
        <meta name="keywords" content="dashboard, civic learning, progress tracking, Kenyan civic education, learning hub, achievements, community engagement, personal learning, civic progress, Kenya citizenship, civic participation, learning achievements, community involvement, civic knowledge tracking" />
        <meta name="author" content="JuaGava Civic Platform" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="language" content="English" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Dashboard - JuaGava Kenyan Civic Platform | Your Learning Hub" />
        <meta property="og:description" content="Your personalized dashboard for Kenyan civic learning, progress tracking, and community engagement." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://juagava.com/dashboard" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:site_name" content="JuaGava" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dashboard - JuaGava Kenyan Civic Platform | Your Learning Hub" />
        <meta name="twitter:description" content="Your personalized dashboard for Kenyan civic learning." />
        <meta name="twitter:image" content="/og-image.png" />
        <meta name="twitter:site" content="@juagava" />
        
        {/* Additional SEO */}
        <meta name="theme-color" content="#009543" />
        <meta name="msapplication-TileColor" content="#009543" />
        <link rel="canonical" href="https://juagava.com/dashboard" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Dashboard - JuaGava Kenyan Civic Platform",
            "description": "Personalized dashboard for civic learning and progress tracking",
            "url": "https://juagava.com/dashboard",
            "isPartOf": {
              "@type": "WebSite",
              "name": "JuaGava",
              "url": "https://juagava.com"
            },
            "mainEntity": {
              "@type": "EducationalOrganization",
              "name": "JuaGava",
              "description": "Kenyan Civic Education Platform"
            }
          })}
        </script>
      </Helmet>
      
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-kenya-green to-kenya-red rounded-2xl p-8 text-white shadow-large"
      >
        <div className="flex items-center space-x-4 mb-4">
          <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold font-display">
              Karibu tena, {profile?.full_name || 'Mwananchi'}!
            </h1>
            <p className="text-white/90 text-lg">
              Welcome back! Continue your journey to becoming an informed and engaged Kenyan citizen.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {kenyaInsights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
            >
              <div className="flex items-center space-x-3">
                {insight.icon}
                <div>
                  <p className="text-sm text-white/80">{insight.title}</p>
                  <p className="font-semibold text-white">{insight.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <StatCard
              icon={stat.icon}
              title={stat.title}
              value={stat.value}
              description={stat.description}
            />
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Continue Learning */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 font-display">
                  Continue Learning
                </h2>
                <Clock className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
              </div>
            </CardHeader>
            <CardContent>
              {inProgressContent.length > 0 ? (
                <div className="space-y-4">
                  {inProgressContent.map((progress) => {
                    const contentItem = content.find(c => c.id === progress.content_id)
                    if (!contentItem) return null
                    
                    return (
                      <motion.div
                        key={progress.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center justify-between p-4 bg-gradient-to-r from-kenya-green/5 to-kenya-red/5 rounded-xl border border-kenya-green/10"
                      >
                        <div className="flex-1">
                          <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                            {contentItem.title}
                          </h3>
                          <div className="flex items-center space-x-4 mt-2">
                            <div className="flex-1 bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-kenya-green to-kenya-red h-2 rounded-full transition-all duration-500"
                                style={{ width: `${progress.completion_percentage}%` }}
                              />
                            </div>
                            <span className="text-sm text-neutral-600 dark:text-neutral-400">
                              {progress.completion_percentage}%
                            </span>
                          </div>
                        </div>
                        <Link to={`/learn/${contentItem.id}`}>
                          <Button size="sm" className="btn-kenya">
                            Continue
                            <ArrowRight size={16} className="ml-1" />
                          </Button>
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>
              ) : (
                <div className="text-center py-8">
                  <BookOpen className="h-12 w-12 text-neutral-400 dark:text-neutral-500 mx-auto mb-4" />
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    No content in progress. Start your civic education journey!
                  </p>
                  <Link to="/learn">
                    <Button className="btn-kenya">
                      Start Learning
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 font-display">
                  Latest Content
                </h2>
                <Link to="/learn">
                  <Button variant="ghost" size="sm" className="rounded-xl">
                    View All
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentContent.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-3 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0">
                      <BookOpen className="h-5 w-5 text-kenya-green mt-1" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-neutral-900 dark:text-neutral-100 truncate">
                        {item.title}
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 mt-1">
                        {item.description}
                      </p>
                      <div className="flex items-center mt-2 space-x-2">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          item.difficulty_level === 'beginner' ? 'bg-success-100 text-success-800 dark:bg-success-900/30 dark:text-success-400' :
                          item.difficulty_level === 'intermediate' ? 'bg-warning-100 text-warning-800 dark:bg-warning-900/30 dark:text-warning-400' :
                          'bg-error-100 text-error-800 dark:bg-error-900/30 dark:text-error-400'
                        }`}>
                          {item.difficulty_level}
                        </span>
                        <span className="text-xs text-neutral-500 dark:text-neutral-400">
                          {item.topics.slice(0, 2).join(', ')}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 font-display">
              Quick Actions
            </h2>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {quickActions.map((action, index) => (
                <Link key={action.title} to={action.href}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-6 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-300 group"
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${action.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {action.icon}
                    </div>
                    <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                      {action.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {action.description}
                    </p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Upcoming Events */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Card variant="kenya">
          <CardHeader variant="kenya">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 font-display">
                Upcoming Civic Events
              </h2>
              <Calendar className="h-5 w-5 text-kenya-green" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-white/50 dark:bg-neutral-800/50 rounded-xl"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-kenya-green to-kenya-red rounded-lg flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                      {event.title}
                    </h3>
                    <div className="flex items-center space-x-4 mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                      <span>{event.date}</span>
                      <span>•</span>
                      <span>{event.location}</span>
                      <span>•</span>
                      <span className="text-kenya-green font-medium">{event.type}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-kenya-green hover:text-kenya-green/80">
                    Details
                    <ArrowRight size={16} className="ml-1" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}