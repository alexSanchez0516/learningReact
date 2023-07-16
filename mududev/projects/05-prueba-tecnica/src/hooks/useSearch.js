import { useState, useEffect, useRef } from "react"

export function useSearch() {

  const [title, setTitle] = useState('news')
  const [year, setYear] = useState()
  const [error, setError] = useState()
  const isFirstInput = useRef(true)

  useEffect(() => {

    if(isFirstInput.current) {
      isFirstInput.current = title === ''
      return
    }

    if (title === '') {
      setError('Debe escribir un título')
      return
    }
    
    if (title.match(/^\d/)) {
      setError('La búsqueda no puede empezar por un número')
      return
    }
    setError()
  }, [title, year])

  return {title: title, year: year, error: error, setTitle: setTitle, setYear: setYear}

}