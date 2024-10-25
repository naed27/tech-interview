'use client';

import { useState } from "react";
import { createPayloadChanger } from "@/utils/form-helpers";

export default function useSearchEnginePayload() {
    const [payload, setPayload] = useState<any>({});

    const changePayload = createPayloadChanger(setPayload);

    return {
        payload, 
        setPayload, 
        changePayload,
    };
}
