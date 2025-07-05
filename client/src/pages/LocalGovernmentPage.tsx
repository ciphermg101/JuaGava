import React from 'react'
import { Helmet } from 'react-helmet-async'
import { MapPin, Users, Calendar, Vote } from 'lucide-react'
import { Card, CardContent } from '../components/ui/Card'

export const LocalGovernmentPage: React.FC = () => (
  <div className="space-y-8">
    <Helmet>
      <title>Local Government - JuaGava Civic Platform</title>
      <meta name="description" content="Discover local civic data and government info." />
    </Helmet>
    
    <div className="text-center py-12">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-warning-100 dark:bg-warning-900/30 rounded-2xl mb-6">
        <MapPin className="h-10 w-10 text-warning-600 dark:text-warning-400" />
      </div>
      <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 font-display">
        Local Government Hub
      </h1>
      <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-balance">
        Connect with your local government, discover representatives, and stay informed about community decisions.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      <Card hover>
        <CardContent className="text-center p-6">
          <Users className="h-10 w-10 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-2 font-display">
            Representatives
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 text-balance">
            Find and contact your local elected officials
          </p>
        </CardContent>
      </Card>

      <Card hover>
        <CardContent className="text-center p-6">
          <Calendar className="h-10 w-10 text-success-600 dark:text-success-400 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-2 font-display">
            Meetings
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 text-balance">
            Stay updated on upcoming government meetings
          </p>
        </CardContent>
      </Card>

      <Card hover>
        <CardContent className="text-center p-6">
          <Vote className="h-10 w-10 text-warning-600 dark:text-warning-400 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-2 font-display">
            Ballot Measures
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 text-balance">
            Learn about local ballot initiatives and elections
          </p>
        </CardContent>
      </Card>

      <Card hover>
        <CardContent className="text-center p-6">
          <MapPin className="h-10 w-10 text-neutral-600 dark:text-neutral-400 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-2 font-display">
            Local Data
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 text-balance">
            Access community statistics and information
          </p>
        </CardContent>
      </Card>
    </div>

    <Card className="max-w-2xl mx-auto">
      <CardContent className="text-center py-12">
        <MapPin className="h-16 w-16 text-neutral-400 dark:text-neutral-500 mx-auto mb-6" />
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4 font-display">
          Local Civic Data Coming Soon
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-balance">
          We're building a comprehensive local government portal that will connect you with your representatives, 
          upcoming meetings, ballot measures, and community data. Stay engaged with your local democracy.
        </p>
      </CardContent>
    </Card>
  </div>
)

export default LocalGovernmentPage 