'use client'
import * as React from 'react'

import { NavigationContext } from '~/pages/_app';

export function SidebarOverlay() {
  const { isOpen, setIsOpen } = React.useContext(NavigationContext)

  return (
    <div
      className={`fixed inset-0 z-20 bg-black bg-opacity-10 transition duration-200 ease-in-out dark:bg-opacity-50 ${
        isOpen
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0'
      }`}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    />
  )
}
