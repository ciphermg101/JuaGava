import React from 'react'
import { Helmet } from 'react-helmet-async'
import { User, Settings, Award, BookOpen } from 'lucide-react'
import { Card, CardContent } from '../components/ui/Card'

export const ProfilePage: React.FC = () => (
  <div className="space-y-8">
    <Helmet>
      <title>Profile - JuaGava Civic Platform | Manage Your Account</title>
      <meta name="description" content="View and edit your user profile. Manage your account settings, track learning progress, and customize your civic education experience." />
      <meta name="keywords" content="user profile, account settings, learning progress, achievements, certificates, personal information, civic education profile, Kenya civic profile, personal civic journey, learning achievements, civic education progress, account management, civic participation profile, Kenya citizenship profile, civic engagement tracking, personal civic development" />
      <meta name="author" content="JuaGava Civic Platform" />
      <meta name="robots" content="noindex, nofollow" />
      <meta name="language" content="English" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Profile - JuaGava Civic Platform | Manage Your Account" />
      <meta property="og:description" content="View and edit your user profile. Manage your account settings, track learning progress, and customize your civic education experience." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://juagava.com/profile" />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:site_name" content="JuaGava" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Profile - JuaGava Civic Platform | Manage Your Account" />
      <meta name="twitter:description" content="View and edit your user profile." />
      <meta name="twitter:image" content="/og-image.png" />
      <meta name="twitter:site" content="@juagava" />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#009543" />
      <meta name="msapplication-TileColor" content="#009543" />
      <link rel="canonical" href="https://juagava.com/profile" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Profile - JuaGava Civic Platform",
          "description": "Manage your account and track civic learning progress",
          "url": "https://juagava.com/profile",
          "isPartOf": {
            "@type": "WebSite",
            "name": "JuaGava",
            "url": "https://juagava.com"
          },
          "mainEntity": {
            "@type": "Person",
            "name": "User Profile",
            "description": "Personal civic education profile and progress tracking"
          }
        })}
      </script>
    </Helmet>
    
    <div className="text-center py-8 sm:py-12">
      <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-primary-100 dark:bg-primary-900/30 rounded-xl sm:rounded-2xl mb-4 sm:mb-6">
        <User className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600 dark:text-primary-400" />
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 font-display">
        Your Profile
      </h1>
      <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-balance">
        Manage your account settings, view your learning progress, and customize your civic education experience.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
      <Card hover>
        <CardContent className="text-center p-4 sm:p-6">
          <User className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600 dark:text-primary-400 mx-auto mb-2 sm:mb-3" />
          <h3 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-2 font-display">
            Personal Info
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 text-balance">
            Update your profile information and preferences
          </p>
        </CardContent>
      </Card>

      <Card hover>
        <CardContent className="text-center p-4 sm:p-6">
          <BookOpen className="h-8 w-8 sm:h-10 sm:w-10 text-success-600 dark:text-success-400 mx-auto mb-2 sm:mb-3" />
          <h3 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-2 font-display">
            Learning Progress
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 text-balance">
            Track your completed content and achievements
          </p>
        </CardContent>
      </Card>

      <Card hover>
        <CardContent className="text-center p-4 sm:p-6">
          <Award className="h-8 w-8 sm:h-10 sm:w-10 text-warning-600 dark:text-warning-400 mx-auto mb-2 sm:mb-3" />
          <h3 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-2 font-display">
            Certificates
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 text-balance">
            View your earned certificates and badges
          </p>
        </CardContent>
      </Card>

      <Card hover>
        <CardContent className="text-center p-4 sm:p-6">
          <Settings className="h-8 w-8 sm:h-10 sm:w-10 text-neutral-600 dark:text-neutral-400 mx-auto mb-2 sm:mb-3" />
          <h3 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-2 font-display">
            Account Settings
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 text-balance">
            Manage your account and privacy settings
          </p>
        </CardContent>
      </Card>
    </div>

    <Card className="max-w-2xl mx-auto">
      <CardContent className="text-center py-8 sm:py-12">
        <User className="h-12 w-12 sm:h-16 sm:w-16 text-neutral-400 dark:text-neutral-500 mx-auto mb-4 sm:mb-6" />
        <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4 font-display">
          Profile Management Coming Soon
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 text-balance">
          We're building a comprehensive profile system where you can manage your account, 
          track your learning progress, view achievements, and customize your civic education experience.
        </p>
      </CardContent>
    </Card>
  </div>
)

export default ProfilePage 