import { useEffect, useState } from 'react'
import { CAT_ENDPOINT_RANDOM_IMG } from '../constants'

export const useCatImage = ({ fact }) => {
  const [urlCat, setUrlCat] = useState('')
  const threeWords = fact.split(' ', 3).join(' ')
  useEffect(() => {
    if (!fact) return
    fetch(`${CAT_ENDPOINT_RANDOM_IMG}${threeWords}`)
      .then((res) => {
        setUrlCat(res.url)
      })
  }, [fact])

  return { urlCat, threeWords }
}
