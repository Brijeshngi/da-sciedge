
import { useEffect, useState } from 'react'
export default function useSkeleton(delay = 700){
  const [loading, setLoading] = useState(true)
  useEffect(() => { const t = setTimeout(() => setLoading(false), delay); return () => clearTimeout(t) }, [delay])
  return loading
}
