import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Trophy, TrendingUp, Calculator } from 'lucide-react'
import { Card, CardContent } from '../components/ui/Card'

export const BudgetGamePage: React.FC = () => (
  <div className="space-y-8">
    <Helmet>
      <title>Budget Game - JuaGava Civic Platform | Interactive Budget Simulation</title>
      <meta name="description" content="Try our interactive budget simulation game. Experience the challenges of managing city budgets and making tough fiscal decisions in our realistic simulation." />
      <meta name="keywords" content="budget game, budget simulation, fiscal management, city budget, government budgeting, interactive learning, civic education game, budget challenges, Kenya county budgets, fiscal responsibility, public finance, government spending, budget allocation, infrastructure funding, social services funding, county government finance, devolution finance, public participation in budgeting" />
      <meta name="author" content="JuaGava Civic Platform" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Budget Game - JuaGava Civic Platform | Interactive Budget Simulation" />
      <meta property="og:description" content="Try our interactive budget simulation game. Experience the challenges of managing city budgets and making tough fiscal decisions in our realistic simulation." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://juagava.com/budget-game" />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:site_name" content="JuaGava" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Budget Game - JuaGava Civic Platform | Interactive Budget Simulation" />
      <meta name="twitter:description" content="Try our interactive budget simulation game." />
      <meta name="twitter:image" content="/og-image.png" />
      <meta name="twitter:site" content="@juagava" />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#009543" />
      <meta name="msapplication-TileColor" content="#009543" />
      <link rel="canonical" href="https://juagava.com/budget-game" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Budget Game - JuaGava Civic Platform",
          "description": "Interactive budget simulation game for civic education",
          "url": "https://juagava.com/budget-game",
          "isPartOf": {
            "@type": "WebSite",
            "name": "JuaGava",
            "url": "https://juagava.com"
          },
          "mainEntity": {
            "@type": "Game",
            "name": "Budget Simulation Game",
            "description": "Interactive budget simulation for civic education",
            "genre": "Educational Game",
            "applicationCategory": "EducationalApplication"
          }
        })}
      </script>
    </Helmet>
    
    <div className="text-center py-8 sm:py-12">
      <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-warning-100 dark:bg-warning-900/30 rounded-xl sm:rounded-2xl mb-4 sm:mb-6">
        <Trophy className="h-8 w-8 sm:h-10 sm:w-10 text-warning-600 dark:text-warning-400" />
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 font-display">
        Budget Simulation Game
      </h1>
      <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-balance">
        Experience the challenges of managing city budgets and making tough fiscal decisions in our interactive simulation.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
      <Card hover>
        <CardContent className="text-center p-6 sm:p-8">
          <Calculator className="h-10 w-10 sm:h-12 sm:w-12 text-primary-600 dark:text-primary-400 mx-auto mb-3 sm:mb-4" />
          <h3 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3 font-display">
            Realistic Scenarios
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-balance">
            Face authentic budget challenges that real city governments encounter, from infrastructure projects to social services.
          </p>
        </CardContent>
      </Card>

      <Card hover>
        <CardContent className="text-center p-6 sm:p-8">
          <TrendingUp className="h-10 w-10 sm:h-12 sm:w-12 text-success-600 dark:text-success-400 mx-auto mb-3 sm:mb-4" />
          <h3 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3 font-display">
            Impact Analysis
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-balance">
            See the real-world consequences of your budget decisions and learn how fiscal choices affect communities.
          </p>
        </CardContent>
      </Card>
    </div>

    <Card className="max-w-2xl mx-auto">
      <CardContent className="text-center py-8 sm:py-12">
        <Trophy className="h-12 w-12 sm:h-16 sm:w-16 text-neutral-400 dark:text-neutral-500 mx-auto mb-4 sm:mb-6" />
        <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4 font-display">
          Budget Game Coming Soon
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-balance">
          We're developing an immersive budget simulation that will put you in the shoes of a city manager. 
          Make tough decisions, balance competing priorities, and see the impact of your choices on the community.
        </p>
      </CardContent>
    </Card>
  </div>
)

export default BudgetGamePage 