import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Users, 
  Trophy, 
  MapPin, 
  ArrowRight, 
  Shield, 
  Vote, 
  Building2, 
  Flag, 
  Globe,
  TrendingUp,
  Award,
  Calendar,
  FileText,
  CheckCircle,
  Star
} from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'
import { useAuthStore } from '../store/auth-store'
import { Helmet } from 'react-helmet-async'
import { ThemeToggle } from '../components/ui/ThemeToggle'

export const HomePage: React.FC = () => {
  const { user } = useAuthStore()

  const kenyaStats = [
    { icon: Users, value: '47', label: 'Counties', description: 'Devolved government units' },
    { icon: Vote, value: '22M+', label: 'Registered Voters', description: 'Active electoral participation' },
    { icon: Building2, value: '290', label: 'Constituencies', description: 'National Assembly seats' },
    { icon: Calendar, value: '5', label: 'Year Terms', description: 'Electoral cycles' }
  ]

  const governmentLevels = [
    {
      icon: Flag,
      title: 'National Government',
      description: 'President, Deputy President, Cabinet, Parliament (National Assembly & Senate)',
      features: ['Executive Branch', 'Legislative Branch', 'Judicial Branch', 'Constitutional Offices'],
      color: 'from-kenya-green to-kenya-green/80'
    },
    {
      icon: Building2,
      title: 'County Government',
      description: 'Governors, County Assemblies, Ward Representatives, and County Executives',
      features: ['47 Counties', 'Devolved Functions', 'Local Legislation', 'Service Delivery'],
      color: 'from-kenya-red to-kenya-red/80'
    },
    {
      icon: MapPin,
      title: 'Local Administration',
      description: 'Chiefs, Assistant Chiefs, Village Administrators, and Community Leaders',
      features: ['Grassroots Governance', 'Community Development', 'Conflict Resolution', 'Local Services'],
      color: 'from-kenya-gold to-kenya-gold/80'
    }
  ]

  const civicProcesses = [
    {
      icon: Vote,
      title: 'Electoral Process',
      description: 'Understanding Kenya\'s democratic voting system and electoral management',
      topics: ['Voter Registration', 'Election Day', 'Results Management', 'Electoral Disputes']
    },
    {
      icon: FileText,
      title: 'Constitutional Rights',
      description: 'Your fundamental rights and freedoms as guaranteed by the Constitution',
      topics: ['Bill of Rights', 'Freedom of Expression', 'Right to Education', 'Right to Health']
    },
    {
      icon: Users,
      title: 'Public Participation',
      description: 'How to actively engage in government decision-making processes',
      topics: ['Public Forums', 'Budget Consultations', 'Policy Input', 'Community Meetings']
    },
    {
      icon: Building2,
      title: 'Government Services',
      description: 'Accessing essential government services through Huduma Centers',
      topics: ['Document Services', 'Business Registration', 'Social Services', 'Emergency Services']
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Mwangi',
      role: 'Civic Educator',
      content: 'JuaGava has transformed how we teach government processes. Students now understand their role in democracy.',
      avatar: 'SM'
    },
    {
      name: 'John Kamau',
      role: 'Community Leader',
      content: 'The platform helped our community understand devolution and how to participate in county governance.',
      avatar: 'JK'
    },
    {
      name: 'Amina Hassan',
      role: 'Youth Advocate',
      content: 'As a young Kenyan, I now feel empowered to participate in civic processes and make my voice heard.',
      avatar: 'AH'
    }
  ]

  const achievements = [
    { icon: Award, value: '50,000+', label: 'Active Learners' },
    { icon: BookOpen, value: '200+', label: 'Learning Modules' },
    { icon: CheckCircle, value: '15,000+', label: 'Certificates Issued' },
    { icon: Star, value: '4.8/5', label: 'User Rating' }
  ]

  return (
    <div className="min-h-screen gradient-bg-kenya">
      <Helmet>
        <title>JuaGava - Kenyan Civic Education Platform</title>
        <meta name="description" content="Learn about Kenya's government structure, civic processes, and democratic participation through interactive education." />
        <meta name="keywords" content="Kenya government, civic education, democracy, devolution, county government, voting, constitution" />
        <meta property="og:title" content="JuaGava - Kenyan Civic Education Platform" />
        <meta property="og:description" content="Empowering Kenyans with civic education and government knowledge." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-kenya-green/5 via-transparent to-kenya-red/5" />
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23009543' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        {/* Theme Toggle */}
        <div className="absolute top-6 right-6 z-50">
          <ThemeToggle size="lg" />
        </div>

        <div className="container-kenya py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Kenya Flag Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm border border-kenya-green/20 dark:border-kenya-red/20 rounded-full px-4 py-2 mb-8"
            >
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-kenya-black rounded-sm"></div>
                <div className="w-3 h-3 bg-kenya-red rounded-sm"></div>
                <div className="w-3 h-3 bg-kenya-green rounded-sm"></div>
              </div>
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Kenyan Civic Education</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-responsive-xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 font-display"
            >
              Understanding{' '}
              <span className="bg-gradient-to-r from-kenya-green to-kenya-red bg-clip-text text-transparent">
                Kenya's Democracy
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-responsive-md text-neutral-600 dark:text-neutral-400 mb-8 max-w-4xl mx-auto text-balance leading-relaxed"
            >
              Discover Kenya's three-tier government structure, understand your constitutional rights, 
              and learn how to actively participate in the democratic process. From national politics 
              to county governance, become an informed and engaged citizen.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              {user ? (
                <Link to="/dashboard">
                  <Button size="lg" className="btn-kenya w-full sm:w-auto">
                    Continue Learning
                    <ArrowRight size={20} className="ml-2" />
                  </Button>
                </Link>
              ) : (
                <>
                  <Link to="/auth">
                    <Button size="lg" className="btn-kenya w-full sm:w-auto">
                      Start Learning
                      <ArrowRight size={20} className="ml-2" />
                    </Button>
                  </Link>
                  <Link to="/learn">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      Explore Content
                    </Button>
                  </Link>
                </>
              )}
            </motion.div>

            {/* Kenya Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {kenyaStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-kenya-green/10 to-kenya-red/10 dark:from-kenya-green/20 dark:to-kenya-red/20 rounded-2xl mb-4">
                    <stat.icon className="h-8 w-8 text-kenya-green" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Government Structure Section */}
      <div className="py-24 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm">
        <div className="container-kenya">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-responsive-lg font-bold text-neutral-900 dark:text-neutral-100 mb-4 font-display">
              Kenya's Three-Tier Government Structure
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto text-balance">
              Understanding how power is distributed across national, county, and local levels of government.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {governmentLevels.map((level, index) => (
              <motion.div
                key={level.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="h-full card-kenya hover:shadow-large">
                  <CardContent className="p-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${level.color} rounded-2xl mb-6`}>
                      <level.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 font-display">
                      {level.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                      {level.description}
                    </p>
                    <ul className="space-y-2">
                      {level.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2 text-sm text-neutral-700 dark:text-neutral-300">
                          <CheckCircle size={16} className="text-kenya-green flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Civic Processes Section */}
      <div className="py-24 gradient-bg-kenya">
        <div className="container-kenya">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-responsive-lg font-bold text-neutral-900 dark:text-neutral-100 mb-4 font-display">
              Essential Civic Processes
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto text-balance">
              Learn about the key processes that make Kenya's democracy work and how you can participate.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {civicProcesses.map((process, index) => (
              <motion.div
                key={process.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card hover className="h-full">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-kenya-green/10 dark:bg-kenya-green/20 rounded-xl mb-6">
                      <process.icon className="h-7 w-7 text-kenya-green" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 font-display">
                      {process.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                      {process.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {process.topics.map((topic) => (
                        <div key={topic} className="flex items-center space-x-2 text-sm text-neutral-700 dark:text-neutral-300">
                          <div className="w-1.5 h-1.5 bg-kenya-green rounded-full"></div>
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm">
        <div className="container-kenya">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-responsive-lg font-bold text-neutral-900 dark:text-neutral-100 mb-4 font-display">
              What Our Learners Say
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto text-balance">
              Hear from Kenyans who have transformed their understanding of government and civic participation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-kenya-green to-kenya-red rounded-full flex items-center justify-center text-white font-semibold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Platform Achievements */}
      <div className="py-24 gradient-bg-kenya">
        <div className="container-kenya">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-responsive-lg font-bold text-neutral-900 dark:text-neutral-100 mb-4 font-display">
              Platform Impact
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto text-balance">
              Join thousands of Kenyans who are building their civic knowledge and making a difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-kenya-green/10 to-kenya-red/10 dark:from-kenya-green/20 dark:to-kenya-red/20 rounded-2xl mb-6">
                  <achievement.icon className="h-10 w-10 text-kenya-green" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                  {achievement.value}
                </div>
                <div className="text-neutral-600 dark:text-neutral-400 font-medium">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-r from-kenya-green to-kenya-red">
        <div className="container-kenya text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-responsive-lg font-bold text-white mb-4 font-display">
              Ready to Become an Informed Citizen?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto text-balance">
              Start your journey to understanding Kenya's democracy and become an active participant in your community's future.
            </p>
            {!user && (
              <Link to="/auth">
                <Button variant="secondary" size="lg" className="bg-white text-kenya-green hover:bg-neutral-100">
                  Start Learning Today
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}