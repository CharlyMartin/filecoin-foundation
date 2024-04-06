import { WebPage, WithContext } from 'schema-dts'

import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { createMetadata } from '@/utils/createMetadata'
import { getBlogPostsData } from '@/utils/getBlogPostData'
import {
  baseOrganizationSchema,
  generateWebPageStructuredData,
} from '@/utils/structuredData'

import { attributes } from '@/content/pages/blog.md'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { BlogClient } from './BlogClient'

const { header, seo } = attributes

export const metadata = createMetadata(seo, PATHS.BLOG.path)

const posts = getBlogPostsData()

const blogPageBaseData = generateWebPageStructuredData({
  title: seo.title,
  path: PATHS.BLOG.path,
  description: seo.description,
})

const blogPageStructuredData: WithContext<WebPage> = {
  ...blogPageBaseData,
  publisher: baseOrganizationSchema,
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: posts.slice(0, 5).map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'BlogPosting',
        name: post.title,
        description: post.description,
        image: post.image?.url,
        url: `${BASE_URL}${PATHS.BLOG.path}/${post.slug}`,
      },
    })),
  },
}

export default function Blog() {
  return (
    <PageLayout>
      <StructuredDataScript structuredData={blogPageStructuredData} />
      <PageHeader
        title={header.title}
        description={header.description}
        cta={{
          href: '#',
          text: 'Read Post',
        }}
      />

      <div>
        <BlogClient posts={posts} />
      </div>
    </PageLayout>
  )
}
