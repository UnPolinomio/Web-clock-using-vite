import { useEffect, useState } from 'react'

export const useTime = () => {
    const [time, setTime] = useState('00:00:00 AM')
 
    useEffect(() => {
        const id = setInterval(() => {
            const str  = new Date().toLocaleTimeString('en-US', {
                timeStyle: 'medium'
            })
            setTime(str)
        }, 1000)
        return () => clearInterval(id)
    }, [])

    return time
}
