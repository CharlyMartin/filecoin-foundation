import PageHeader from '@/components/PageHeader'

import { BlogData } from '@/types/blogTypes'

import { createMetadata } from '@/utils/createMetadata'
import { getMarkdownData } from '@/utils/getMarkdownData'

import { attributes } from '@/content/pages/blog.md'

import { PATHS } from '@/constants/paths'

import BlogClient from './BlogClient'

const { title, description, seo } = attributes

export const metadata = createMetadata(seo, PATHS.BLOG)

export default function BlogPage() {
  const posts: BlogData[] = getMarkdownData('src/content/blog') as BlogData[]

  return (
    <>
      <PageHeader title={title} description={description} />
      <div>
        <BlogClient posts={posts} />
      </div>
    </>
  )
}
