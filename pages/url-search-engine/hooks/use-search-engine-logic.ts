'use client';

import { Dispatch, createContext } from "react";
import UseSearchEnginePayload from "./use-search-engine-payload"
import UseSearchEngineQueries from "./use-search-engine-queries"

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

export const UrlSearchEngineContext = createContext<LOGIC_TYPE>({})

export default function useSearchEngineLogic() {

    const payload = UseSearchEnginePayload()
    const queries = UseSearchEngineQueries()

    return {
        ...payload,
        ...queries,
    }
}