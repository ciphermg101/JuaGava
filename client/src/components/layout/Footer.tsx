import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  ArrowRight,
  Shield,
  Users,
  BookOpen,
  Award
} from 'lucide-react'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Platform',
      links: [
        { name: 'Dashboard', href: '/dashboard' },
        { name: 'Learn', href: '/learn' },
        { name: 'Budget Game', href: '/budget-game' },
        { name: 'Quizzes', href: '/quizzes' },
        { name: 'Local Government', href: '/local-government' },
        { name: 'Profile', href: '/profile' }
      ]
    },
    {
      title: 'Kenya Government',
      links: [
        { name: 'Office of the President', href: 'https://www.president.go.ke', external: true },
        { name: 'Parliament of Kenya', href: 'https://www.parliament.go.ke', external: true },
        { name: 'County Governments', href: 'https://www.cog.go.ke', external: true },
        { name: 'IEBC', href: 'https://www.iebc.or.ke', external: true },
        { name: 'Huduma Kenya', href: 'https://www.hudumakenya.go.ke', external: true },
        { name: 'Government Portal', href: 'https://www.kenya.go.ke', external: true }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Constitution of Kenya', href: 'https://www.kenyalaw.org/kl/index.php?id=398', external: true },
        { name: 'Civic Education Guide', href: '/resources/civic-guide' },
        { name: 'Voter Registration', href: 'https://www.iebc.or.ke/voter-registration', external: true },
        { name: 'Public Participation', href: '/resources/public-participation' },
        { name: 'County Budgets', href: '/resources/county-budgets' },
        { name: 'Government Services', href: '/resources/services' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/support' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Accessibility', href: '/accessibility' },
        { name: 'Report Issue', href: '/report' }
      ]
    }
  ]

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/juagava' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/juagava' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/juagava' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/juagava' }
  ]

  const stats = [
    { icon: Users, value: '50,000+', label: 'Active Learners' },
    { icon: BookOpen, value: '200+', label: 'Learning Modules' },
    { icon: Award, value: '15,000+', label: 'Certificates Issued' },
    { icon: Shield, value: '47', label: 'Counties Covered' }
  ]

  return (
    <footer className="bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 border-t border-neutral-300 dark:border-neutral-700">
      {/* Newsletter Section */}
      <div className="container-kenya py-6 sm:py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-kenya-green/10 to-kenya-red/10 dark:from-kenya-green/20 dark:to-kenya-red/20 rounded-2xl p-4 sm:p-6 md:p-8 border border-kenya-green/20 dark:border-kenya-red/20"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-3 sm:mb-4 font-display">
              Stay Updated on Civic Education
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-4 sm:mb-6">
              Get the latest updates on civic education, government processes, and opportunities to engage with your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1"
              />
              <Button className="btn-kenya whitespace-nowrap">
                Subscribe
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="container-kenya py-4 sm:py-6 md:py-8 border-b border-neutral-300 dark:border-neutral-700">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-kenya-green/10 dark:bg-kenya-green/20 rounded-xl mb-2 sm:mb-3">
                <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-kenya-green" />
              </div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-kenya py-6 sm:py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <div className="p-1.5 sm:p-2 bg-gradient-to-br from-kenya-green to-kenya-red rounded-xl">
                  <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <span className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100 font-display">
                  JuaGava
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-4 sm:mb-6 leading-relaxed">
                Empowering Kenyans with civic education and government knowledge through interactive learning experiences.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  <MapPin size={14} className="sm:w-4 sm:h-4" />
                  <span>Nairobi, Kenya</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  <Mail size={14} className="sm:w-4 sm:h-4" />
                  <span>contact@juagava.com</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  <Phone size={14} className="sm:w-4 sm:h-4" />
                  <span>+254 700 000 000</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-2 sm:space-x-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 sm:p-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.name}
                  >
                    <social.icon size={16} className="sm:w-[18px] sm:h-[18px] text-neutral-600 dark:text-neutral-400" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
            >
              <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-3 sm:mb-4 font-display text-sm sm:text-base">
                {section.title}
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 hover:text-kenya-green dark:hover:text-kenya-green transition-colors duration-300"
                      >
                        <span>{link.name}</span>
                        <ExternalLink size={10} className="sm:w-3 sm:h-3" />
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 hover:text-kenya-green dark:hover:text-kenya-green transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-300 dark:border-neutral-700">
        <div className="container-kenya py-3 sm:py-4 md:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 sm:space-y-4 md:space-y-0">
            <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              &copy; {currentYear} JuaGava Civic Platform. All rights reserved.
            </div>
            <div className="flex items-center space-x-3 sm:space-x-6 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              <span>Made with ❤️ for Kenya</span>
              <span>•</span>
              <span>Accessibility Compliant</span>
              <span>•</span>
              <span>WCAG 2.1 AA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 