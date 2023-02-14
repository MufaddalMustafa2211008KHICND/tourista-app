import React, { useEffect } from 'react'

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
    <div>
        
    </div>
  )
}
