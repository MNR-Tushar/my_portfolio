import { useEffect, useRef, useState } from 'react'

export function useScrollAnimation(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    )

    const current = ref.current
    if (current) {
      observer.observe(current)
    }

    return () => {
      if (current) {
        observer.unobserve(current)
      }
    }
  }, [options.threshold, options.rootMargin])

  return [ref, isVisible]
}

export function useStaggerAnimation(itemCount, baseDelay = 100) {
  const [ref, isVisible] = useScrollAnimation()

  const getDelay = (index) => ({
    transitionDelay: isVisible ? `${index * baseDelay}ms` : '0ms',
  })

  return [ref, isVisible, getDelay]
}
