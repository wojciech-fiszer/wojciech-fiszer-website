import React from 'react'
import Image from 'next/image'

type TimelineItemData = {
  companyLogo: string
  companyName: string
  time: string
  title: string
  text: string
}

export type TimelineData = TimelineItemData[]

type Props = {
  className?: string
  data: TimelineData
}

export default function Timeline({ className, data }: Props): JSX.Element {
  return (
    <ol
      className={`${
        className ? `${className} ` : ''
      }relative border-l border-gray-400`}
    >
      {data.map(({ companyLogo, companyName, time, title, text }) => (
        <li
          key={`${companyName}-${title}`}
          className="ml-4 border rounded-2xl p-2 m-2"
        >
          <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white"></div>
          <div className="flex gap-6">
            <Image
              width="150"
              height="40"
              src={companyLogo}
              alt={companyName}
            />
            <div>
              <time className="mb-1 text-sm font-normal text-gray-400">
                {time}
              </time>
              <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
            </div>
          </div>
          <p className="text-gray-500">{text}</p>
        </li>
      ))}
    </ol>
  )
}
