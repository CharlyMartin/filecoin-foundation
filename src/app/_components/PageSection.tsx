import { Heading } from '@/components/Heading'
import { SectionDivider } from '@/components/SectionDivider'

type PageSectionProps = {
  kicker: string
  title: string
  description?: string
  children?: React.ReactNode
}

export function PageSection({
  kicker,
  title,
  description,
  children,
}: PageSectionProps) {
  return (
    <section>
      <SectionDivider title={kicker} />
      <Heading className="mb-4" tag="h2" variant="3xl">
        {title}
      </Heading>
      {description && <p className="mb-8 max-w-[60ch]">{description}</p>}
      {children && <div className="flex flex-col gap-6">{children}</div>}
    </section>
  )
}
