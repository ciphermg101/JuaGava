import { create } from 'zustand'
import { ContentItem, Quiz, BudgetScenario, UserProgress } from '../lib/supabase'
import { mockContent, mockQuizzes, mockBudgetScenarios } from '../lib/mock-data'

interface ContentState {
  content: ContentItem[]
  quizzes: Quiz[]
  budgetScenarios: BudgetScenario[]
  userProgress: UserProgress[]
  loading: boolean
  searchTerm: string
  selectedTopics: string[]
  selectedDifficulty: string[]
  
  // Actions
  loadContent: () => Promise<void>
  searchContent: (term: string) => void
  filterByTopics: (topics: string[]) => void
  filterByDifficulty: (levels: string[]) => void
  getFilteredContent: () => ContentItem[]
  recordProgress: (contentId: string, progressType: string, completionPercentage: number, score?: number) => Promise<void>
}

export const useContentStore = create<ContentState>((set, get) => ({
  content: [],
  quizzes: [],
  budgetScenarios: [],
  userProgress: [],
  loading: false,
  searchTerm: '',
  selectedTopics: [],
  selectedDifficulty: [],

  loadContent: async () => {
    set({ loading: true })
    try {
      // In a real app, this would fetch from Supabase
      // For now, using mock data
      set({
        content: mockContent,
        quizzes: mockQuizzes,
        budgetScenarios: mockBudgetScenarios,
        loading: false
      })
    } catch (error) {
      console.error('Error loading content:', error)
      set({ loading: false })
    }
  },

  searchContent: (term: string) => {
    set({ searchTerm: term })
  },

  filterByTopics: (topics: string[]) => {
    set({ selectedTopics: topics })
  },

  filterByDifficulty: (levels: string[]) => {
    set({ selectedDifficulty: levels })
  },

  getFilteredContent: () => {
    const { content, searchTerm, selectedTopics, selectedDifficulty } = get()
    
    return content.filter(item => {
      const matchesSearch = !searchTerm || 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesTopics = selectedTopics.length === 0 ||
        selectedTopics.some(topic => item.topics.includes(topic))
      
      const matchesDifficulty = selectedDifficulty.length === 0 ||
        selectedDifficulty.includes(item.difficulty_level)
      
      return matchesSearch && matchesTopics && matchesDifficulty && item.is_published
    })
  },

  recordProgress: async (contentId: string, progressType: string, completionPercentage: number, score?: number) => {
    // In a real app, this would save to Supabase
    const newProgress: UserProgress = {
      id: Date.now().toString(),
      user_id: 'current-user', // Would be actual user ID
      content_id: contentId,
      progress_type: progressType as any,
      completion_percentage: completionPercentage,
      score: score || null,
      completed_at: completionPercentage === 100 ? new Date().toISOString() : null,
      created_at: new Date().toISOString()
    }
    
    set(state => ({
      userProgress: [...state.userProgress, newProgress]
    }))
  }
}))