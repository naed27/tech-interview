'use client'

import { createContext } from "react"
import SearchEngineResponses from "./sections/search-engine-responses"
import SearchEngineSearchBox from "./sections/search-engine-search-box"
import useSearchEngineLogic, { LOGIC_TYPE } from "./hooks/use-search-engine-logic"

export const UrlSearchEngineContext = createContext<LOGIC_TYPE>({})

export default function UrlSearchEngine () {

    const contextValue = useSearchEngineLogic()

    return (
        <UrlSearchEngineContext.Provider value={contextValue}>
            <SearchEngineSearchBox/>
            <SearchEngineResponses/>
        </UrlSearchEngineContext.Provider>
    )
}

