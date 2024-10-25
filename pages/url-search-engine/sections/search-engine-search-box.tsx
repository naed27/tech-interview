'use client'

import Row from "@/components/ui/row"
import BigButton from "@/components/ui/big-button"
import TextField from "@/components/ui/text-field"

export default function SearchEngineSearchBox(props: any) {

    const {
        payload,
        fetchData,
        changePayload,
    } = props ?? {}

    const handleFetchData = () => {
        fetchData?.({
            url: payload?.url,
            options: {
                method: 'GET',
            },
        })
    }

    return (
        <>
            <Row>
                <TextField 
                label='url' 
                value={payload?.url} 
                onChange={(e)=>changePayload?.('url', e?.target?.value)}/>
            </Row>
            <Row>
                <BigButton label="Query" onClick={handleFetchData}/>
            </Row>
        </>
    )
}