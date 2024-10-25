import { Dispatch } from "react";
import UseSearchEnginePayload from "./use-search-engine-payload"
import UseSearchEngineQueries from "./use-search-engine-queries"
/* eslint-disable @typescript-eslint/no-explicit-any */
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

export default function UseSearchEngineLogic() {

    const payload = UseSearchEnginePayload()
    const queries = UseSearchEngineQueries()

    return {
        ...payload,
        ...queries,
    }
}