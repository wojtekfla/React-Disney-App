import { useState, useEffect } from "react";

export function useFetch (url) {
  const [moviesData, setMoviesData] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  console.log('useFetch' , moviesData)

  useEffect (() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(url)
        if(!response.ok) {
          throw new Error ('Response failed')
        }
        const json = await response.json()
        setMoviesData(json)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()

    return () => {
      setIsLoading(false)
    }
  },[url])

  return { moviesData, setMoviesData, error, isLoading } 
}