'use client'

import Row from "@/components/ui/row";
import Col from "@/components/ui/col";
import { useContext, useMemo } from "react";
import Loader from "@/components/ui/loader";
import { customParseObject } from "@/utils/object-helpers";
import ObjectDisplayer from "@/components/ui/object-displayer";
import { UrlSearchEngineContext } from "../hooks/use-search-engine-logic";
import AutoResizingTextArea from "@/components/ui/auto-resizing-text-area";

export default function SearchEngineResponses() {
    const {
        data,
        isLoadingHttpRequest,
    } = useContext(UrlSearchEngineContext)

    const processedResponse = useMemo(()=>{
        if(!data) return {}
        return customParseObject(data)
    },[data])

    if (isLoadingHttpRequest) return <Loader />

    return (
        <Row>

            <Col size={6} className="w-full min-w-[50%] max-w-[50%]">
                <AutoResizingTextArea 
                maxHeight="80svh"
                label='URL Response' 
                labelPosition="center-top"
                value={data ? JSON.stringify(data, null, 2) : ''}/>
            </Col>

            <Col size={6} className="w-full min-w-[50%] max-w-[50%]">
                <ObjectDisplayer
                maxHeight="80svh"
                object={processedResponse}
                labelPosition="center-top"
                label='Processed URL Response'/>
            </Col>

        </Row>
    )
}
