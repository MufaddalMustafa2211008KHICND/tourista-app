import React, { useEffect } from 'react'
import Search from './Search'

export const HotelsList = () => {

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:8080/hotel/all')
            const data = await response.json()
            console.log(data)
        }
        fetchData()
    }, [])

  return (
    <>
        <Search/>
    </>
  )
}
