import { useEffect, useState } from 'react'

export default function useTypedText(
  text: string,
  minDelayMs: number = 80,
  maxDelayMs: number = 200,
): { typedText: string; finished: boolean } {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    setIndex(0)
  }, [text])
  useEffect(() => {
    if (index >= text.length) return
    const delay = minDelayMs + Math.random() * (maxDelayMs - minDelayMs)
    const timeoutId = setTimeout(
      () => setIndex((prevState) => ++prevState),
      delay,
    )
    return () => clearTimeout(timeoutId)
  }, [index, text, minDelayMs, maxDelayMs])
  return { typedText: text.slice(0, index), finished: index === text.length }
}
