import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BookOpen } from 'lucide-react'
import { Card, CardContent } from '../components/ui/Card'

export const LearnPage: React.FC = () => (
  <div className="space-y-8">
    <Helmet>
      <title>Learn - JuaGava Civic Platform | Civic Education Content Library</title>
      <meta name="description" content="Explore our comprehensive civic education content library. Interactive lessons, articles, videos, and real-world case studies about Kenyan government and democracy." />
      <meta name="keywords" content="civic education, learning content, government lessons, democracy education, interactive learning, Kenyan government, civic knowledge, educational resources, Kenya constitution, devolution, county government, national assembly, senate, electoral process, public participation, constitutional rights, civic engagement, voter education" />
      <meta name="author" content="JuaGava Civic Platform" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Learn - JuaGava Civic Platform | Civic Education Content Library" />
      <meta property="og:description" content="Explore our comprehensive civic education content library. Interactive lessons, articles, videos, and real-world case studies about Kenyan government and democracy." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://juagava.com/learn" />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:site_name" content="JuaGava" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Learn - JuaGava Civic Platform | Civic Education Content Library" />
      <meta name="twitter:description" content="Explore our comprehensive civic education content library." />
      <meta name="twitter:image" content="/og-image.png" />
      <meta name="twitter:site" content="@juagava" />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#009543" />
      <meta name="msapplication-TileColor" content="#009543" />
      <link rel="canonical" href="https://juagava.com/learn" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Learn - JuaGava Civic Platform",
          "description": "Explore our comprehensive civic education content library",
          "url": "https://juagava.com/learn",
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
    
    <div className="text-center py-8 sm:py-12">
      <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-primary-100 dark:bg-primary-900/30 rounded-xl sm:rounded-2xl mb-4 sm:mb-6">
        <BookOpen className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600 dark:text-primary-400" />
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 font-display">
        Learning Center
      </h1>
      <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-balance">
        Explore our comprehensive library of civic education content, interactive lessons, and real-world case studies.
      </p>
    </div>

    <Card className="max-w-2xl mx-auto">
      <CardContent className="text-center py-8 sm:py-12">
        <BookOpen className="h-12 w-12 sm:h-16 sm:w-16 text-neutral-400 dark:text-neutral-500 mx-auto mb-4 sm:mb-6" />
        <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4 font-display">
          Content Library Coming Soon
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-balance">
          We're building an extensive collection of civic education materials, interactive content, and assessment tools. 
          Stay tuned for engaging learning experiences that will help you become a more informed and active citizen.
        </p>
      </CardContent>
    </Card>
  </div>
)

export default LearnPage 