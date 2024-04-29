import { Button } from '@/components/Button'

import { PATHS } from './_constants/paths'

export default function NotFound() {
  return (
    <div className="m-auto flex max-w-xs flex-col gap-6 py-[104px] sm:items-center sm:text-center">
      <span className="text-8xl">404</span>
      <h2 className="text-3xl">Page Not Found</h2>
      <p>
        We&apos;re sorry, but the page you were looking for could not be found
      </p>
      <Button href={PATHS.HOME.path}>Go to Home Page</Button>
    </div>
  )
}
