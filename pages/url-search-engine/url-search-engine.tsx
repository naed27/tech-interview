'use client'

import SearchEngineResponses from "./sections/search-engine-responses"
import SearchEngineSearchBox from "./sections/search-engine-search-box"
import useSearchEngineLogic, { UrlSearchEngineContext } from "./hooks/use-search-engine-logic"


export default function UrlSearchEngine () {

    const contextValue = useSearchEngineLogic()

    return (
        <UrlSearchEngineContext.Provider value={contextValue}>
            <SearchEngineSearchBox/>
            <SearchEngineResponses/>
        </UrlSearchEngineContext.Provider>
    )
}

