import { useMemo } from "react"
import useRequester from "@/http/use-requester"

export default function UseSearchEngineQueries() {

    const { 
        data, 
        error, 
        isLoading, 
        fetchData,
     } = useRequester()

     const isLoadingHttpRequest = useMemo(()=>{
        return isLoading === true
     },[
        isLoading
     ])

    return {
        data, 
        error, 
        isLoading, 
        fetchData,
        isLoadingHttpRequest,
    }
}