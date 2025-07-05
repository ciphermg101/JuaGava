import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          first_name: string | null
          last_name: string | null
          full_name: string | null
          role: 'student' | 'teacher' | 'admin'
          age_group: string | null
          location: string | null
          learning_preferences: string[] | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          first_name?: string | null
          last_name?: string | null
          full_name?: string | null
          role?: 'student' | 'teacher' | 'admin'
          age_group?: string | null
          location?: string | null
          learning_preferences?: string[] | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          first_name?: string | null
          last_name?: string | null
          full_name?: string | null
          role?: 'student' | 'teacher' | 'admin'
          age_group?: string | null
          location?: string | null
          learning_preferences?: string[] | null
          created_at?: string
          updated_at?: string
        }
      }
      content: {
        Row: {
          id: string
          title: string
          description: string
          content: string
          content_type: 'article' | 'interactive' | 'video' | 'quiz'
          difficulty_level: 'beginner' | 'intermediate' | 'advanced'
          age_group: string[]
          topics: string[]
          author_id: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          title: string
          description: string
          content: string
          content_type: 'article' | 'interactive' | 'video' | 'quiz'
          difficulty_level: 'beginner' | 'intermediate' | 'advanced'
          age_group: string[]
          topics: string[]
          author_id: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          content?: string
          content_type?: 'article' | 'interactive' | 'video' | 'quiz'
          difficulty_level?: 'beginner' | 'intermediate' | 'advanced'
          age_group?: string[]
          topics?: string[]
          author_id?: string
          created_at?: string
          updated_at?: string
        }
      }
      progress: {
        Row: {
          id: string
          user_id: string
          content_id: string
          progress: number
          completed: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          user_id: string
          content_id: string
          progress: number
          completed: boolean
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}