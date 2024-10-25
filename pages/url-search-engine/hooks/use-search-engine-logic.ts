import { Dispatch } from "react";
import useSearchEnginePayload from "./use-search-engine-payload"
import useSearchEngineQueries from "./use-search-engine-queries"

export type LOGIC_TYPE = {
    payload?: any
    setPayload?: Dispatch<any>
    changePayload?: (accessor: string, input: any) => void
    
    data?: any
    isLoading?: boolean
    error?: string | null
    isLoadingHttpRequest?: boolean
    fetchData?: ({ url, options }: any) => Promise<void>
}

export default function useSearchEngineLogic() {

    const payload = useSearchEnginePayload()
    const queries = useSearchEngineQueries()

    return {
        ...payload,
        ...queries,
    }
}