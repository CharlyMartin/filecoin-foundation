import { type EventData } from '@/types/eventTypes'

export function mapMarkdownToEventData({
  data,
}: {
  data: any
  content?: string
}): EventData {
  return {
    title: data.title,
    slug: data.slug,
    createdOn: data['created-on'],
    updatedOn: data['updated-on'],
    publishedOn: data['published-on'],
    category: data.category,
    description: data.description,
    location: data.location,
    externalLink: data['external-link'],
    startDate: data['start-date'],
    endDate: data['end-date'],
    image: {
      src: data.image?.src || '',
      alt: data.image?.alt || '',
    },
    seo: data.seo,
  }
}
