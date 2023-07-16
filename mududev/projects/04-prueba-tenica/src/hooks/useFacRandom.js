import { useEffect, useState } from 'react'
import { fetchFact } from '../services/facts'

export function useFactRandom () {
  const [fact, setFact] = useState('')

  const refreshFact = () => {
    fetchFact().then((newFact) => {
      setFact(newFact)
    })
  }

  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
