'use client'

import useSearchEnginePayload from "./use-search-engine-payload"
import useSearchEngineQueries from "./use-search-engine-queries"

export default function useSearchEngineLogic() {

    const payload = useSearchEnginePayload()
    const queries = useSearchEngineQueries()

    return {
        ...payload,
        ...queries,
    }
}