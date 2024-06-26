import { Metadata } from '@/types/metadataTypes'

export type PageAttributes = {
  header: {
    title: string
    description: string | string[]
  }
  featured_post?: string
  grant_graduates?: string[]
} & Metadata
