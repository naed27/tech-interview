import { useState } from 'react'
import { toast } from 'react-toastify'

interface UseRequesterOptions<T> {
    url: string
    options?: RequestInit
}

export default function useRequester<T>() {
    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const fetchData = async ({ url, options }: UseRequesterOptions<T>) => {
        try {
            setData(null)
            setIsLoading(true)
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }

            const result: T = await response.json()
            setData(result)
            toast.success('Data fetched successfully!')
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Something went wrong'
            setError(errorMessage)
            toast.error(`Error: ${errorMessage}`)
        } finally {
            setIsLoading(false)
        }
    };

    return { data, isLoading, error, fetchData }
}
