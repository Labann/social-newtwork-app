import { Spinner } from '@/components/ui/spinner'
import React, { Suspense } from 'react'

const HomeLayout = ({children}: {
    children: React.ReactNode
}) => {
  return (
    <Suspense fallback={<Spinner />}>
        {children}
    </Suspense>
  )
}

export default HomeLayout