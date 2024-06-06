import { BreakpointDebugger } from '@/components/_dev_BreakpointDebugger'
import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import { NetlifyIdentityManager } from '@/components/NetlifyIdentityManager'

import { LayoutProps } from '@/layout'

export function SiteLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="m-auto flex max-w-[1032px] flex-col justify-between bg-brand-800 px-6 pb-6 pt-8 text-brand-100">
        <NetlifyIdentityManager />

        <Navigation />

        <main>{children}</main>

        <Footer />

        {process.env.NODE_ENV === 'development' && <BreakpointDebugger />}
      </body>
    </html>
  )
}
