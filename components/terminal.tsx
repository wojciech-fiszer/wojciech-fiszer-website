import React from 'react'

type Props = {
  className?: string
  children: JSX.Element
}

export default function Terminal({ className, children }: Props): JSX.Element {
  return (
    <div
      className={`${
        className ? `${className} ` : ''
      }bg-gray-800 rounded-xl p-4`}
    >
      <div className="flex gap-2 pb-4">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-amber-400"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
      </div>
      {children}
    </div>
  )
}
