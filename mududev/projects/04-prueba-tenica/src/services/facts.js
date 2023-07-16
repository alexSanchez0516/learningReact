import { CAT_ENDPOINT_RANDOM_FACT } from '../constants'

export const fetchFact = async () => {
  try {
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    const data = await res.json()
    const { fact } = data
    return fact
  } catch (error) {
    console.error('error --> ', error)
  }
}
