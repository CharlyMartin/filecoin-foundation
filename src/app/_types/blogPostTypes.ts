import { type Metadata } from 'next'

import { type ImageProps } from '@/types/sharedProps/imageType'

export type BlogPostData = {
  slug: string
  title: string
  createdOn: string
  updatedOn?: string
  publishedOn?: string
  category?: string
  description: string
  image: ImageProps
  content?: string
  recommendedPosts?: string[]
  seo: Metadata
}
