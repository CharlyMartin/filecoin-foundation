'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { CaretRight } from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import type { Route } from 'next'

import { PATHS } from '@/constants/paths'

export function BreadCrumbs() {
  const pathname = usePathname()
  const pathNames = ['/'].concat(pathname.split('/').filter(Boolean))

  const formatLabel = (path: string) => {
    let label = path
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

    const maxLength = 20
    if (label.length > maxLength) {
      label = `${label.substring(0, maxLength).trimEnd()}...`
    }
    return label
  }

  const baseStyles = 'hover:underline focus:outline-2 focus:outline-brand-100'

  return (
    <nav aria-label="breadcrumbs">
      <ol className="inline-flex items-center gap-2.5">
        {pathNames.map((path, index) => {
          const isRoot = index === 0
          const href = isRoot
            ? PATHS.HOME.path
            : (('/' + pathNames.slice(1, index + 1).join('/')) as Route)
          const isActive = pathname === href
          const itemClasses = clsx(baseStyles, {
            'text-brand-300': !isActive,
            'text-brand-400': isActive,
          })
          const label = isRoot ? PATHS.HOME.label : formatLabel(path)

          return (
            <li key={href} className="inline-flex items-center gap-2.5 ">
              {!isRoot && (
                <CaretRight className="text-brand-400" weight="bold" />
              )}
              <Link className={itemClasses} href={href}>
                {label}
              </Link>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
