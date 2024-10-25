'use client'

import { useState } from "react"
import { createPayloadChanger } from "@/utils/form-helpers"

export default function useSearchEnginePayload() {

    const [payload, setPayload] = useState<any>({})

    const changePayload = (accessor: string, input: any) => {
        setPayload((current: any) => {
            const keys = accessor?.split('.');
            
            const updateNestedObject = (obj: any, keys: string[], value: any): any => {
                const key = keys[0];
                if (keys.length === 1) {
                    return { ...obj, [key]: value };
                }
                return { ...obj, [key]: updateNestedObject(obj[key] || {}, keys.slice(1), value) };
            };
            
            return updateNestedObject(current, keys, input);
        });
    };

    return {
        payload, setPayload, changePayload,
    }
}