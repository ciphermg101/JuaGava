import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BookOpen } from 'lucide-react'
import { Card, CardContent } from '../components/ui/Card'

export const LearnPage: React.FC = () => (
  <div className="space-y-8">
    <Helmet>
      <title>Learn - JuaGava Civic Platform</title>
      <meta name="description" content="Explore our civic education content library." />
    </Helmet>
    
    <div className="text-center py-12">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-2xl mb-6">
        <BookOpen className="h-10 w-10 text-primary-600 dark:text-primary-400" />
      </div>
      <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 font-display">
        Learning Center
      </h1>
      <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-balance">
        Explore our comprehensive library of civic education content, interactive lessons, and real-world case studies.
      </p>
    </div>

    <Card className="max-w-2xl mx-auto">
      <CardContent className="text-center py-12">
        <BookOpen className="h-16 w-16 text-neutral-400 dark:text-neutral-500 mx-auto mb-6" />
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4 font-display">
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