import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  as?: ElementType
  className?: string
  id?: string
}

export function Reveal({ children, as: Tag = 'div', className = '', id }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref} id={id} className={`reveal ${visible ? 'in' : ''} ${className}`.trim()}>
      {children}
    </Tag>
  )
}
