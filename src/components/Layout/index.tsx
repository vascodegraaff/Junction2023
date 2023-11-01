import React from 'react'

import Sidebar from '../Sidebar'

interface Props {
  list: React.ReactElement | null
  detail: React.ReactNode | null
  hasDetail?: boolean
}

export function ListDetailView({ list, detail, hasDetail = false }: Props) {
  return (
    <div className='flex w-full'>
      {list && (
        <div
          id="list"
          className={`bg-dots ${
            hasDetail ? 'hidden lg:flex' : 'min-h-screen w-full'
          }`}
        >
          {list}
        </div>
      )}
      {detail}
    </div>
  )
}

export function SiteLayout({ children }: React.PropsWithChildren<object>) {
  return (
    <div className="relative flex h-full min-h-screen w-full">
      <Sidebar />

      <div className="flex flex-1">{children}</div>
    </div>
  )
}
