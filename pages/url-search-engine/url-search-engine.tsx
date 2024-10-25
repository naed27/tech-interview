'use client'

import useSearchEngineLogic from "./hooks/use-search-engine-logic"
import SearchEngineResponses from "./sections/search-engine-responses"
import SearchEngineSearchBox from "./sections/search-engine-search-box"

export default function UrlSearchEngine () {

    const contextValue = useSearchEngineLogic()
    
    return (
        <>
            <SearchEngineSearchBox contextValue={contextValue}/>
            <SearchEngineResponses contextValue={contextValue}/>
        </>
    )
}

