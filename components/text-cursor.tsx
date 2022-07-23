import React, { useEffect, useState } from 'react'

type Props = {
  className?: string
  typing: boolean
}

export default function TextCursor({ className, typing }: Props): JSX.Element {
  const [hidden, setHidden] = useState(true)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setHidden((prevState) => !prevState)
    }, 400)
    return () => clearInterval(intervalId)
  }, [])
  const classNames = ['ml-1', className]
  if (hidden && !typing) classNames.push('hidden')
  return <div className={classNames.join(' ')}></div>
}
