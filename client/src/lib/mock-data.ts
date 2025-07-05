import { ContentItem, BudgetScenario, Quiz, BudgetCategory, QuizQuestion } from './supabase'

export const mockContent: ContentItem[] = [
  {
    id: '1',
    title: 'Understanding Local Government',
    description: 'Learn how your city council works and how decisions are made at the local level.',
    content: `# Understanding Local Government

Local government is the level of government closest to you. It includes your city council, mayor, and various departments that manage daily services in your community.

## Key Components

### City Council
The city council is made up of elected representatives who make decisions about local laws, budgets, and policies. They typically meet regularly in public sessions where citizens can observe and sometimes participate.

### Mayor
The mayor is often the chief executive of the city, responsible for implementing the council's decisions and managing city departments.

### City Departments
Various departments handle specific services:
- Public Works (roads, water, sewage)
- Parks and Recreation
- Police and Fire Services
- Planning and Development

## How to Get Involved
- Attend city council meetings
- Contact your representatives
- Participate in public comment periods
- Vote in local elections

Understanding local government helps you become an engaged citizen who can make a difference in your community.`,
    content_type: 'article',
    difficulty_level: 'beginner',
    age_group: ['13-17', '18-25', '26+'],
    topics: ['local-government', 'civic-engagement'],
    author_id: 'admin-1',
    is_published: true,
    rating: 4.5,
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    title: 'The Voting Process',
    description: 'A comprehensive guide to understanding how elections work and how to participate.',
    content: `# The Voting Process

Voting is one of the most important rights and responsibilities in a democracy. Understanding how the process works helps ensure your voice is heard.

## Types of Elections

### Federal Elections
- Presidential elections (every 4 years)
- Congressional elections (every 2 years)
- Senate elections (every 6 years, staggered)

### State Elections
- Governor and state legislature
- State judges and officials
- State ballot measures

### Local Elections
- Mayor and city council
- School board
- Local ballot measures

## How to Vote

### Registration
First, you must register to vote. Requirements vary by state but typically include:
- Being a U.S. citizen
- Meeting age requirements (18+ for most elections)
- Registering by the deadline

### Voting Methods
- In-person on Election Day
- Early voting (where available)
- Absentee/mail-in voting
- Drop-off locations

## Making Informed Choices
- Research candidates and issues
- Use voter guides
- Attend candidate forums
- Check multiple news sources

Your vote matters! Every election can be decided by a small number of votes.`,
    content_type: 'article',
    difficulty_level: 'intermediate',
    age_group: ['16-17', '18-25', '26+'],
    topics: ['voting', 'elections', 'democracy'],
    author_id: 'admin-1',
    is_published: true,
    rating: 4.8,
    created_at: '2024-01-16T10:00:00Z',
    updated_at: '2024-01-16T10:00:00Z'
  },
  {
    id: '3',
    title: 'Citizen Rights and Responsibilities',
    description: 'Explore the fundamental rights and responsibilities that come with citizenship.',
    content: `# Citizen Rights and Responsibilities

Being a citizen comes with both rights that protect you and responsibilities that help maintain a functioning democracy.

## Fundamental Rights

### Constitutional Rights
- Freedom of speech, religion, and press
- Right to due process
- Right to equal protection under the law
- Right to vote

### Civil Rights
- Protection from discrimination
- Right to fair housing and employment
- Access to public accommodations

## Civic Responsibilities

### Legal Obligations
- Obey laws
- Pay taxes
- Serve on juries when called
- Register for selective service (males 18-25)

### Civic Duties
- Stay informed about issues
- Participate in the democratic process
- Respect others' rights
- Contribute to your community

## Balancing Rights and Responsibilities
Rights and responsibilities work together. Your right to free speech comes with the responsibility to respect others' rights. Your right to vote comes with the responsibility to make informed choices.

## Getting Involved
- Volunteer in your community
- Contact elected officials
- Participate in peaceful protests
- Support causes you believe in

Understanding both your rights and responsibilities helps you be an effective citizen and contribute to a healthy democracy.`,
    content_type: 'article',
    difficulty_level: 'intermediate',
    age_group: ['13-17', '18-25', '26+'],
    topics: ['rights', 'responsibilities', 'citizenship'],
    author_id: 'admin-1',
    is_published: true,
    rating: 4.6,
    created_at: '2024-01-17T10:00:00Z',
    updated_at: '2024-01-17T10:00:00Z'
  }
]

export const mockBudgetScenarios: BudgetScenario[] = [
  {
    id: '1',
    title: 'Small Town Budget Challenge',
    description: 'Manage the annual budget for Riverside, a town of 15,000 residents.',
    total_budget: 5000000, // $5 million
    difficulty_level: 'beginner',
    categories: [
      {
        id: '1',
        name: 'Education',
        description: 'Schools, teachers, and educational programs',
        min_allocation: 1000000,
        max_allocation: 2500000,
        current_allocation: 1800000,
        impact_description: 'Affects class sizes, teacher quality, and student outcomes'
      },
      {
        id: '2',
        name: 'Public Safety',
        description: 'Police, fire department, and emergency services',
        min_allocation: 800000,
        max_allocation: 1500000,
        current_allocation: 1000000,
        impact_description: 'Influences response times and community safety'
      },
      {
        id: '3',
        name: 'Infrastructure',
        description: 'Roads, bridges, water systems, and public buildings',
        min_allocation: 600000,
        max_allocation: 1200000,
        current_allocation: 900000,
        impact_description: 'Affects transportation and basic services quality'
      },
      {
        id: '4',
        name: 'Parks & Recreation',
        description: 'Parks, community centers, and recreational programs',
        min_allocation: 200000,
        max_allocation: 600000,
        current_allocation: 400000,
        impact_description: 'Impacts community well-being and quality of life'
      },
      {
        id: '5',
        name: 'Social Services',
        description: 'Support for vulnerable populations and community programs',
        min_allocation: 300000,
        max_allocation: 800000,
        current_allocation: 500000,
        impact_description: 'Affects support for those in need'
      },
      {
        id: '6',
        name: 'Administration',
        description: 'City management, legal services, and general operations',
        min_allocation: 200000,
        max_allocation: 500000,
        current_allocation: 400000,
        impact_description: 'Ensures efficient government operations'
      }
    ],
    created_at: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    title: 'City Crisis Management',
    description: 'Handle an emergency budget reallocation after a natural disaster.',
    total_budget: 15000000, // $15 million
    difficulty_level: 'advanced',
    categories: [
      {
        id: '1',
        name: 'Emergency Response',
        description: 'Immediate disaster response and recovery efforts',
        min_allocation: 3000000,
        max_allocation: 8000000,
        current_allocation: 5000000,
        impact_description: 'Critical for saving lives and initial recovery'
      },
      {
        id: '2',
        name: 'Infrastructure Repair',
        description: 'Fixing damaged roads, bridges, and utilities',
        min_allocation: 2000000,
        max_allocation: 6000000,
        current_allocation: 4000000,
        impact_description: 'Essential for restoring normal city functions'
      },
      {
        id: '3',
        name: 'Public Safety',
        description: 'Enhanced security and emergency services',
        min_allocation: 1000000,
        max_allocation: 3000000,
        current_allocation: 2000000,
        impact_description: 'Maintains order during crisis'
      },
      {
        id: '4',
        name: 'Social Support',
        description: 'Temporary housing, food, and assistance for affected residents',
        min_allocation: 1500000,
        max_allocation: 4000000,
        current_allocation: 2500000,
        impact_description: 'Helps citizens recover from disaster'
      },
      {
        id: '5',
        name: 'Economic Recovery',
        description: 'Support for local businesses and job creation',
        min_allocation: 500000,
        max_allocation: 2000000,
        current_allocation: 1000000,
        impact_description: 'Helps community rebuild economically'
      },
      {
        id: '6',
        name: 'Future Preparedness',
        description: 'Investments in disaster prevention and preparedness',
        min_allocation: 300000,
        max_allocation: 1500000,
        current_allocation: 500000,
        impact_description: 'Reduces impact of future disasters'
      }
    ],
    created_at: '2024-01-16T10:00:00Z'
  }
]

export const mockQuizzes: Quiz[] = [
  {
    id: '1',
    title: 'Local Government Basics',
    description: 'Test your knowledge of how local government works.',
    difficulty_level: 'beginner',
    topics: ['local-government'],
    questions: [
      {
        id: '1',
        question: 'What is the primary role of a city council?',
        type: 'multiple_choice',
        options: [
          'To enforce laws and arrest criminals',
          'To make local laws and policies',
          'To teach in public schools',
          'To deliver mail and packages'
        ],
        correct_answer: 1,
        explanation: 'City councils are legislative bodies that create local laws, set budgets, and make policy decisions for their communities.'
      },
      {
        id: '2',
        question: 'City council meetings are typically open to the public.',
        type: 'true_false',
        options: ['True', 'False'],
        correct_answer: 0,
        explanation: 'Most city council meetings are open to the public as part of transparent governance, though some executive sessions may be closed.'
      },
      {
        id: '3',
        question: 'You live in Riverside and notice that the streetlights in your neighborhood have been broken for weeks. What would be the most effective way to address this issue?',
        type: 'scenario',
        options: [
          'Post complaints on social media',
          'Contact the city\'s public works department',
          'Wait for someone else to report it',
          'Fix the lights yourself'
        ],
        correct_answer: 1,
        explanation: 'Contacting the appropriate city department (public works) is the most direct and effective way to report infrastructure issues and get them resolved.'
      }
    ],
    created_at: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    title: 'Voting and Elections',
    description: 'Assess your understanding of the electoral process.',
    difficulty_level: 'intermediate',
    topics: ['voting', 'elections'],
    questions: [
      {
        id: '1',
        question: 'What is the minimum age to vote in most U.S. elections?',
        type: 'multiple_choice',
        options: ['16', '17', '18', '21'],
        correct_answer: 2,
        explanation: 'The 26th Amendment to the U.S. Constitution set the minimum voting age at 18 for all elections.'
      },
      {
        id: '2',
        question: 'You can vote in federal elections without registering first.',
        type: 'true_false',
        options: ['True', 'False'],
        correct_answer: 1,
        explanation: 'Voter registration is required in almost all states before you can vote in any election, including federal elections.'
      },
      {
        id: '3',
        question: 'It\'s election day and you realize you haven\'t researched the candidates or ballot measures. What should you do?',
        type: 'scenario',
        options: [
          'Vote randomly to fulfill your civic duty',
          'Skip voting since you\'re not informed',
          'Quickly research using your phone or voter guides at the polling place',
          'Ask other voters who they\'re choosing'
        ],
        correct_answer: 2,
        explanation: 'Taking time to research, even briefly, helps you make more informed choices. Many polling places have voter guides available, and you can use your phone to research candidates and issues.'
      }
    ],
    created_at: '2024-01-16T10:00:00Z'
  }
]

// Mock civic data for local government integration
export const mockCivicData = {
  representatives: [
    {
      id: '1',
      name: 'Sarah Johnson',
      position: 'Mayor',
      level: 'local',
      contact: {
        email: 'mayor@riverside.gov',
        phone: '(555) 123-4567',
        office: '123 City Hall Plaza, Riverside'
      },
      bio: 'Mayor Johnson has served Riverside for 6 years, focusing on sustainable development and community engagement.'
    },
    {
      id: '2',
      name: 'Michael Chen',
      position: 'City Council Member - District 1',
      level: 'local',
      contact: {
        email: 'mchen@riverside.gov',
        phone: '(555) 123-4568'
      },
      bio: 'Councilman Chen represents District 1 and chairs the Public Safety Committee.'
    },
    {
      id: '3',
      name: 'Rep. Amanda Rodriguez',
      position: 'State Representative - District 45',
      level: 'state',
      contact: {
        email: 'rodriguez@statehouse.gov',
        phone: '(555) 987-6543'
      },
      bio: 'Representative Rodriguez serves on the Education and Transportation committees.'
    }
  ],
  upcomingMeetings: [
    {
      id: '1',
      title: 'City Council Regular Meeting',
      date: '2024-02-15T19:00:00Z',
      location: 'City Hall Council Chambers',
      agenda: [
        'Budget review for Parks Department',
        'New traffic light installation proposal',
        'Public comment period'
      ],
      publicComment: true
    },
    {
      id: '2',
      title: 'Planning Commission Meeting',
      date: '2024-02-20T18:30:00Z',
      location: 'City Hall Conference Room A',
      agenda: [
        'Review of new housing development proposal',
        'Zoning variance requests'
      ],
      publicComment: true
    }
  ],
  ballotMeasures: [
    {
      id: '1',
      title: 'Proposition A: School Bond Measure',
      description: 'A $50 million bond to fund new school construction and facility improvements.',
      type: 'local',
      election_date: '2024-03-05',
      summary: 'This measure would authorize the school district to issue bonds for capital improvements, funded through property taxes over 20 years.'
    },
    {
      id: '2',
      title: 'Measure B: Parks and Recreation Tax',
      description: 'A 0.5% sales tax increase to fund parks and recreational facilities.',
      type: 'local',
      election_date: '2024-03-05',
      summary: 'Revenue would support park maintenance, new playground equipment, and expanded recreational programs.'
    }
  ]
}