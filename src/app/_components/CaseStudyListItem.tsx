import Image from 'next/image'

import { Heading } from '@/components/Heading'
import { TextLink } from '@/components/TextLink'

import { CaseStudyData } from '@/types/caseStudyTypes'

import { PATHS } from '@/constants/paths'

export function CaseStudyListItem({ caseStudy }: { caseStudy: CaseStudyData }) {
  const { title, slug, description, cta, image } = caseStudy

  return (
    <li>
      {image?.url && (
        <Image
          src={image.url}
          alt={image.alt || ''}
          width={280}
          height={320}
          className="block object-cover"
        />
      )}
      <Heading tag="h3" variant="lg">
        {title}
      </Heading>
      <p>{description}</p>
      <TextLink href={cta?.url || `${PATHS.CASE_STUDIES.path}/${slug}`}>
        {cta?.text || 'Read Case Study'}
      </TextLink>
    </li>
  )
}
