import React from 'react'
import { Helmet } from 'react-helmet-async'
import { MapPin, Users, Calendar, Vote } from 'lucide-react'
import { Card, CardContent } from '../components/ui/Card'

export const LocalGovernmentPage: React.FC = () => (
  <div className="space-y-8">
    <Helmet>
      <title>Local Government - JuaGava Civic Platform | Connect with Your Community</title>
      <meta name="description" content="Discover local civic data and government information. Connect with your representatives, stay informed about meetings, and access community resources." />
      <meta name="keywords" content="local government, county government, representatives, civic data, community engagement, government meetings, ballot measures, local democracy, county assemblies, Kenya counties, devolution, county governors, ward representatives, county assemblies, local civic engagement, community participation, county government services, local democracy Kenya, county government meetings, public participation county, local government transparency, county government accountability" />
      <meta name="author" content="JuaGava Civic Platform" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Local Government - JuaGava Civic Platform | Connect with Your Community" />
      <meta property="og:description" content="Discover local civic data and government information. Connect with your representatives, stay informed about meetings, and access community resources." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://juagava.com/local-government" />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:site_name" content="JuaGava" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Local Government - JuaGava Civic Platform | Connect with Your Community" />
      <meta name="twitter:description" content="Discover local civic data and government information." />
      <meta name="twitter:image" content="/og-image.png" />
      <meta name="twitter:site" content="@juagava" />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#009543" />
      <meta name="msapplication-TileColor" content="#009543" />
      <link rel="canonical" href="https://juagava.com/local-government" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Local Government - JuaGava Civic Platform",
          "description": "Connect with your local government and community",
          "url": "https://juagava.com/local-government",
          "isPartOf": {
            "@type": "WebSite",
            "name": "JuaGava",
            "url": "https://juagava.com"
          },
          "mainEntity": {
            "@type": "GovernmentOrganization",
            "name": "Local Government Hub",
            "description": "Local government information and civic engagement platform"
          }
        })}
      </script>
    </Helmet>
    
    <div className="text-center py-8 sm:py-12">
      <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-warning-100 dark:bg-warning-900/30 rounded-xl sm:rounded-2xl mb-4 sm:mb-6">
        <MapPin className="h-8 w-8 sm:h-10 sm:w-10 text-warning-600 dark:text-warning-400" />
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 font-display">
        Local Government Hub
      </h1>
      <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-balance">
        Connect with your local government, discover representatives, and stay informed about community decisions.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
      <Card hover>
        <CardContent className="text-center p-4 sm:p-6">
          <Users className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600 dark:text-primary-400 mx-auto mb-2 sm:mb-3" />
          <h3 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-2 font-display">
            Representatives
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 text-balance">
            Find and contact your local elected officials
          </p>
        </CardContent>
      </Card>

      <Card hover>
        <CardContent className="text-center p-4 sm:p-6">
          <Calendar className="h-8 w-8 sm:h-10 sm:w-10 text-success-600 dark:text-success-400 mx-auto mb-2 sm:mb-3" />
          <h3 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-2 font-display">
            Meetings
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 text-balance">
            Stay updated on upcoming government meetings
          </p>
        </CardContent>
      </Card>

      <Card hover>
        <CardContent className="text-center p-4 sm:p-6">
          <Vote className="h-8 w-8 sm:h-10 sm:w-10 text-warning-600 dark:text-warning-400 mx-auto mb-2 sm:mb-3" />
          <h3 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-2 font-display">
            Ballot Measures
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 text-balance">
            Learn about local ballot initiatives and elections
          </p>
        </CardContent>
      </Card>

      <Card hover>
        <CardContent className="text-center p-4 sm:p-6">
          <MapPin className="h-8 w-8 sm:h-10 sm:w-10 text-neutral-600 dark:text-neutral-400 mx-auto mb-2 sm:mb-3" />
          <h3 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-2 font-display">
            Local Data
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 text-balance">
            Access community statistics and information
          </p>
        </CardContent>
      </Card>
    </div>

    <Card className="max-w-2xl mx-auto">
      <CardContent className="text-center py-8 sm:py-12">
        <MapPin className="h-12 w-12 sm:h-16 sm:w-16 text-neutral-400 dark:text-neutral-500 mx-auto mb-4 sm:mb-6" />
        <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4 font-display">
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