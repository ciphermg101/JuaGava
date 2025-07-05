import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, Brain, Award } from 'lucide-react'
import { Card, CardContent } from '../components/ui/Card'

export const QuizzesPage: React.FC = () => (
  <div className="space-y-8">
    <Helmet>
      <title>Quizzes - JuaGava Civic Platform</title>
      <meta name="description" content="Test your civic knowledge with quizzes." />
    </Helmet>
    
    <div className="text-center py-12">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-success-100 dark:bg-success-900/30 rounded-2xl mb-6">
        <CheckCircle className="h-10 w-10 text-success-600 dark:text-success-400" />
      </div>
      <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 font-display">
        Civic Knowledge Assessment
      </h1>
      <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-balance">
        Test your understanding of government, civic processes, and community engagement through interactive quizzes.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <Card hover>
        <CardContent className="text-center p-8">
          <Brain className="h-12 w-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3 font-display">
            Adaptive Learning
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-balance">
            Our quizzes adapt to your knowledge level, providing personalized challenges and targeted learning opportunities.
          </p>
        </CardContent>
      </Card>

      <Card hover>
        <CardContent className="text-center p-8">
          <Award className="h-12 w-12 text-warning-600 dark:text-warning-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3 font-display">
            Earn Certificates
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-balance">
            Complete quizzes to earn certificates and track your progress as you build your civic knowledge.
          </p>
        </CardContent>
      </Card>
    </div>

    <Card className="max-w-2xl mx-auto">
      <CardContent className="text-center py-12">
        <CheckCircle className="h-16 w-16 text-neutral-400 dark:text-neutral-500 mx-auto mb-6" />
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4 font-display">
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