// 'use client'
import * as React from 'react'

export function ListContainer({ children, ...rest }: { children: React.ReactNode}) {
  // const scrollContainerRef = React.useRef(null)

  // React.useEffect(() => {
  //   onRef(scrollContainerRef)
  // }, [scrollContainerRef])

  return (
    <div
      // ref={scrollContainerRef}
      className="relative h-full max-h-screen min-h-screen w-full flex-none overflow-y-auto border-r border-gray-150 bg-white dark:border-gray-800 dark:bg-black lg:w-80 xl:w-96"
      {...rest}
    >
      {children}
    </div>
  )
}
