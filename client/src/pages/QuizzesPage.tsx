import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, Brain, Award } from 'lucide-react'
import { Card, CardContent } from '../components/ui/Card'

export const QuizzesPage: React.FC = () => (
  <div className="space-y-8">
    <Helmet>
      <title>Quizzes - JuaGava Civic Platform | Test Your Civic Knowledge</title>
      <meta name="description" content="Test your civic knowledge with interactive quizzes. Assess your understanding of government, civic processes, and community engagement through adaptive learning." />
      <meta name="keywords" content="civic quizzes, knowledge assessment, government tests, democracy quizzes, civic knowledge, interactive assessment, learning evaluation, civic education tests, Kenya government quiz, constitutional knowledge, devolution quiz, county government assessment, electoral process test, civic rights quiz, public participation assessment, voter education quiz, civic engagement evaluation" />
      <meta name="author" content="JuaGava Civic Platform" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Quizzes - JuaGava Civic Platform | Test Your Civic Knowledge" />
      <meta property="og:description" content="Test your civic knowledge with interactive quizzes. Assess your understanding of government, civic processes, and community engagement through adaptive learning." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://juagava.com/quizzes" />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:site_name" content="JuaGava" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Quizzes - JuaGava Civic Platform | Test Your Civic Knowledge" />
      <meta name="twitter:description" content="Test your civic knowledge with interactive quizzes." />
      <meta name="twitter:image" content="/og-image.png" />
      <meta name="twitter:site" content="@juagava" />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#009543" />
      <meta name="msapplication-TileColor" content="#009543" />
      <link rel="canonical" href="https://juagava.com/quizzes" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Quizzes - JuaGava Civic Platform",
          "description": "Test your civic knowledge with interactive quizzes",
          "url": "https://juagava.com/quizzes",
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
      <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-success-100 dark:bg-success-900/30 rounded-xl sm:rounded-2xl mb-4 sm:mb-6">
        <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 text-success-600 dark:text-success-400" />
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 font-display">
        Civic Knowledge Assessment
      </h1>
      <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-balance">
        Test your understanding of government, civic processes, and community engagement through interactive quizzes.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
      <Card hover>
        <CardContent className="text-center p-6 sm:p-8">
          <Brain className="h-10 w-10 sm:h-12 sm:w-12 text-primary-600 dark:text-primary-400 mx-auto mb-3 sm:mb-4" />
          <h3 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3 font-display">
            Adaptive Learning
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-balance">
            Our quizzes adapt to your knowledge level, providing personalized challenges and targeted learning opportunities.
          </p>
        </CardContent>
      </Card>

      <Card hover>
        <CardContent className="text-center p-6 sm:p-8">
          <Award className="h-10 w-10 sm:h-12 sm:w-12 text-warning-600 dark:text-warning-400 mx-auto mb-3 sm:mb-4" />
          <h3 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3 font-display">
            Earn Certificates
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-balance">
            Complete quizzes to earn certificates and track your progress as you build your civic knowledge.
          </p>
        </CardContent>
      </Card>
    </div>

    <Card className="max-w-2xl mx-auto">
      <CardContent className="text-center py-8 sm:py-12">
        <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-neutral-400 dark:text-neutral-500 mx-auto mb-4 sm:mb-6" />
        <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4 font-display">
          Assessment System Coming Soon
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-balance">
          We're building a comprehensive quiz system with adaptive questions, detailed explanations, and progress tracking. 
          Test your knowledge across various civic topics and see how you measure up.
        </p>
      </CardContent>
    </Card>
  </div>
)

export default QuizzesPage 