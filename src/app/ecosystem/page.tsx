import Image from 'next/image'
import Link from 'next/link'

import { FeaturedCaseStudies } from '@/components/FeaturedCaseStudies'
import { FeaturedEcosystemProjects } from '@/components/FeaturedEcosystemProjects'
import { PageHeader } from '@/components/PageHeader'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { EcosystemProjectData } from '@/types/ecosystemProjectTypes'

import { createMetadata } from '@/utils/createMetadata'
import { getMarkdownData } from '@/utils/getMarkdownData'
import { generateWebPageStructuredData } from '@/utils/structuredData'

import { attributes } from '@/content/pages/ecosystem.md'

import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { EcosystemClient } from './EcosystemClient'

const { title, description, seo } = attributes

export const metadata = createMetadata(seo, PATHS.ECOSYSTEM.path)

const ecosystemProjects: EcosystemProjectData[] = getMarkdownData(
  PATHS.ECOSYSTEM.entriesContentPath as string
)

const ecosystemPageBaseData = generateWebPageStructuredData({
  title: seo.title,
  description: seo.description,
  path: PATHS.ECOSYSTEM.path,
})

const featuredPartners = [
  {
    name: 'CERN',
    logo: 'https://fil.org/assets/external/657c554936d014492b49467c_vector-01.svg',
    url: 'https://home.cern/',
  },
  {
    name: 'Internet Archive',
    logo: 'https://fil.org/assets/external/657c558f53eeab31a03a832f_vector-05.svg',
    url: 'https://archive.org/',
  },
  {
    name: 'OpenSea',
    logo: 'https://fil.org/assets/external/657c5552385589133a43d5ab_vector-02.svg',
    url: 'https://opensea.io/',
  },
  {
    name: 'Solana',
    logo: 'https://fil.org/assets/external/657c558a515f5c15575cb1dc_vector-04.svg',
    url: 'https://solana.com/',
  },
  {
    name: 'GenRAIT',
    logo: 'https://fil.org/assets/external/657c556868aea6c85dcf1259_vector-08.svg',
    url: 'https://www.genrait.com/',
  },
  {
    name: 'Lab Dao',
    logo: 'https://fil.org/assets/external/657c55783ec4a13eefcc1be8_vector-06.svg',
    url: 'https://www.labdao.xyz/',
  },
  {
    name: 'Victor Chang Research Institute',
    logo: 'https://fil.org/assets/external/657c557001161cabdda6c5e4_vector-07.svg',
    url: 'https://www.victorchang.edu.au/',
  },
]

export default function Ecosystem() {
  return (
    <>
      <StructuredDataScript structuredData={ecosystemPageBaseData} />
      <PageHeader
        title={title}
        description={description}
        link={{
          href: FILECOIN_FOUNDATION_URLS.ecosystem.submitOrUpdateProjectForm,
          text: 'Submit or Update Your Project',
        }}
      />

      <section>
        <h2>Featured Partners</h2>
        <ul className="list-none flex gap-8 items-center">
          {featuredPartners.map((partner) => (
            <li
              key={partner.name}
              className="relative ml-0 mb-0 size-24 inline-flex"
            >
              <Image
                fill
                priority
                src={partner.logo}
                alt={`${partner.name} Logo`}
                className="object-contain"
              />
              <a
                href={partner.url}
                className="absolute inset-0"
                title={`Visit ${partner.name}`}
              >
                <span className="sr-only">Visit {partner.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <FeaturedEcosystemProjects />
      </section>

      <section>
        <h2>Ecosystem Projects</h2>
        <p className="mb-6">
          Discover the diverse landscape of Filecoin projects
        </p>

        <EcosystemClient projects={ecosystemProjects} />
      </section>

      <section>
        <a href={FILECOIN_FOUNDATION_URLS.ecosystem.submitOrUpdateProjectForm}>
          <h2>Become Part of the Expanding Ecosystem</h2>
          <p>
            If you&apos;re building on Filecoin and don&apos;t see your project
            or want to edit your listing, share your details.
          </p>
          <span>Submit or Update Your Project</span>
        </a>

        <Link href={PATHS.EVENTS.path}>
          <h2>Join Us IRL</h2>
          <p>
            Engage in inspiring conversation, participate in hands-on workshops,
            and learn from industry leaders at our events.
          </p>
        </Link>

        <a href={FILECOIN_FOUNDATION_URLS.newsletter}>
          <h2>Dive Deeper</h2>
          <p>
            Subscribe to our newsletter for big ideas and news about the
            Filecoin ecosystem and the decentralized web.
          </p>
        </a>
      </section>

      <section>
        <header>
          <h2>Case Studies</h2>
          <p>
            Learn about leading projects using Filecoin solutions to preserve
            humanity&apos;s most important information.
          </p>
        </header>

        <FeaturedCaseStudies />
      </section>
    </>
  )
}
