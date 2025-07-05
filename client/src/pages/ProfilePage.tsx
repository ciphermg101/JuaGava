import React from 'react'
import { Helmet } from 'react-helmet-async'
import { User, Settings, Award, BookOpen } from 'lucide-react'
import { Card, CardContent } from '../components/ui/Card'

export const ProfilePage: React.FC = () => (
  <div className="space-y-8">
    <Helmet>
      <title>Profile - JuaGava Civic Platform</title>
      <meta name="description" content="View and edit your user profile." />
    </Helmet>
    
    <div className="text-center py-12">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-2xl mb-6">
        <User className="h-10 w-10 text-primary-600 dark:text-primary-400" />
      </div>
      <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 font-display">
        Your Profile
      </h1>
      <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-balance">
        Manage your account settings, view your learning progress, and customize your civic education experience.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <Card hover>
        <CardContent className="text-center p-6">
          <User className="h-10 w-10 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-2 font-display">
            Personal Info
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 text-balance">
            Update your profile information and preferences
          </p>
        </CardContent>
      </Card>

      <Card hover>
        <CardContent className="text-center p-6">
          <BookOpen className="h-10 w-10 text-success-600 dark:text-success-400 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-2 font-display">
            Learning Progress
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 text-balance">
            Track your completed content and achievements
          </p>
        </CardContent>
      </Card>

      <Card hover>
        <CardContent className="text-center p-6">
          <Award className="h-10 w-10 text-warning-600 dark:text-warning-400 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-2 font-display">
            Certificates
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 text-balance">
            View your earned certificates and badges
          </p>
        </CardContent>
      </Card>

      <Card hover>
        <CardContent className="text-center p-6">
          <Settings className="h-10 w-10 text-neutral-600 dark:text-neutral-400 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-2 font-display">
            Account Settings
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 text-balance">
            Manage your account and privacy settings
          </p>
        </CardContent>
      </Card>
    </div>

    <Card className="max-w-2xl mx-auto">
      <CardContent className="text-center py-12">
        <User className="h-16 w-16 text-neutral-400 dark:text-neutral-500 mx-auto mb-6" />
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4 font-display">
          Profile Management Coming Soon
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-balance">
          We're building a comprehensive profile system where you can manage your account, 
          track your learning progress, view achievements, and customize your civic education experience.
        </p>
      </CardContent>
    </Card>
  </div>
)

export default ProfilePage 