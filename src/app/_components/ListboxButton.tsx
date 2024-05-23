import React from 'react'

import { Listbox } from '@headlessui/react'

type ListboxButtonProps = {
  ariaLabel: string
  open: boolean
  children: React.ReactNode
}

export function ListboxButton({
  ariaLabel,
  open,
  children,
}: ListboxButtonProps) {
  return (
    <Listbox.Button
      aria-haspopup="listbox"
      aria-expanded={open}
      aria-label={ariaLabel}
      className="border-1 inline-flex w-full items-center justify-between gap-2 rounded-lg border border-brand-300 p-3 text-brand-300 hover:border-current hover:text-brand-400 focus:outline-2 focus:outline-brand-100 md:min-w-40"
    >
      {children}
    </Listbox.Button>
  )
}
