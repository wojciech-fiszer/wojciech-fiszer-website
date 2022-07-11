import React from 'react'

type TimelineItemData = {
  time: string
  title: string
  text: string
}

export type TimelineData = TimelineItemData[]

type Props = {
  className?: string
  data: TimelineData
}

function Dot(): JSX.Element {
  return (
    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
  )
}

export default function Timeline({ className, data }: Props): JSX.Element {
  return (
    <ol
      className={`${
        className ? `${className} ` : ''
      }relative border-l border-gray-200 dark:border-gray-700`}
    >
      {data.map(({ time, title, text }) => (
        <li key={title} className="ml-4">
          <Dot />
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {time}
          </time>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h4>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            {text}
          </p>
        </li>
      ))}
    </ol>
  )
}
