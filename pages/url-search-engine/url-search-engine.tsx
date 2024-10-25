'use client'

import { createContext } from "react"
import useSearchEngineLogic from "./hooks/use-search-engine-logic"
import SearchEngineResponses from "./sections/search-engine-responses"
import SearchEngineSearchBox from "./sections/search-engine-search-box"

export const UrlSearchEngineContext = createContext<any>({})

export default function UrlSearchEngine () {

    const contextValue = useSearchEngineLogic()

    return (
        <UrlSearchEngineContext.Provider value={contextValue}>
            <SearchEngineSearchBox/>
            <SearchEngineResponses/>
        </UrlSearchEngineContext.Provider>
    )
}

