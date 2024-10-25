import { useState } from "react"
import { createPayloadChanger } from "@/utils/form-helpers"

export default function UseSearchEnginePayload() {

    const [payload, setPayload] = useState<any>({})

    const changePayload = createPayloadChanger(setPayload)

    return {
        payload, setPayload, changePayload,
    }
}